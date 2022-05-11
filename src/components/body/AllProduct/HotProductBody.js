import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import { getAllProduct } from "../../../redux/actions/productAction";
import {Link, NavLink} from "react-router-dom";
import {
    getCartItems,
    removeCartItems,
    setCartItems,
} from "../../../utils/storeSession";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fCurrency } from "../../utils/FormatCost";
import { getToTalCart } from "../../../redux/actions/productAction";
import {getProduct} from '../../../redux/reducers/productReducer';
import {unwrapResult} from '@reduxjs/toolkit';


const HotProductBody = () => {
    const dispatch=useDispatch();
    const [top8NewProduct,setTop8NewProduct]=useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            const res = await dispatch(getProduct());
            const product=res.payload.map(item=>{
                return ({...item.product,image:item.image})
            });
            unwrapResult(res);
            setTop8NewProduct(product.filter(item => item.name !== undefined && item.checkHotProduct).sort((a,b)=>new Date(b?.createdDate)-new Date(a?.createdDate)).splice(0,8));
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getAllProduct();
    }, []);

    const handleAddToCart = (item) => {
        let id = item.product.id;
        let price = 0;
        if (item.product.priceSale > 0) {
            price = item.product.priceSale;
        } else {
            price = item.product.price;
        }
        const cartItems = getCartItems();
        let indexItemInCart = cartItems.findIndex((item) => item.id === id);

        if (indexItemInCart > -1) {
            cartItems.splice(indexItemInCart, 1, {
                id: item.product.id,
                amount: cartItems[indexItemInCart].amount + 1,
                name: item.product.name,
                image: item.image,
                price: price,
            });
            toast.success("Cập nhật giỏ hàng");
            getToTalCart(getCartItems())
        } else {
            cartItems.push({
                id: item.product.id,
                amount: 1,
                name: item.product.name,
                image: item.image,
                price: price,
            });
            toast.success("Thêm giỏ hàng thành công");
            getToTalCart(getCartItems())
        }

        removeCartItems();
        setCartItems(cartItems);
    };
    return (
        <div className="latest-product-area pt-45 pb-70">
            <ToastContainer
                position="bottom-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container ctn-mb">
                <div className="section-title text-center">
                    <h2 className='hot_text'>
                        <NavLink
                            activeClassName="active"
                            to="/hot_product"
                            className="nav-link"
                        >
                            <i class='bx bxs-hot'></i>
                            Sản phẩm HOT
                        </NavLink>
                    </h2>
                </div>
                <div className="row" style={{marginTop:30}}>
                    {top8NewProduct &&
                    top8NewProduct.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="product-item">
                                    <div className="product-img">
                                        <Link to={`/detail-products/${item.id}`}>
                                            <img
                                                src={process.env.REACT_APP_HOST +`/uploads/${item.image}`}
                                                alt="Product Images"
                                            />
                                        </Link>
                                        <div className="hot-icon">
                                            <img src="assets/images/hot_icon.png" alt=""/>
                                        </div>
                                        {item.priceSale >0 && (
                                            <div className="product-item-tag">
                                                <h3>
                                                    {(100 - (item.priceSale * 100 / item.price )).toFixed(0)}%
                                                </h3>
                                            </div>
                                        )}
                                        <ul className="product-item-action">
                                            <li>
                                                <Link
                                                    to={`/detail-products/${item.id}`}
                                                >
                                                    <i className="bx bx-zoom-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    onClick={() => handleAddToCart(item)}
                                                >
                                                    <i className="bx bx-cart" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to={`/detail-products/${item.id}`}>
                                                {item.name}{" "}
                                            </Link>
                                        </h3>
                                        <span>

                                <>
                                  {fCurrency(item.price    )} /{" "}
                                    {item.dvt} / {item.weight}{" "}
                                </>

                            </span>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    listProducts: state.product,
});

const mapDispatchToProps = {
    getAllProduct,
    getToTalCart
};

export default connect(mapStateToProps, mapDispatchToProps)(HotProductBody);
