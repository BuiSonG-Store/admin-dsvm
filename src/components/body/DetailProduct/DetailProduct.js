import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import {
  getCartItems,
  removeCartItems,
  setCartItems,
} from "../../../utils/storeSession";
import { fCurrency } from "../../utils/FormatCost";
import Loading from "../../utils/Loading/Loading";
import RelatedProduct from "./RelatedProduct";
import { getRegionById } from "../../../redux/reducers/region";
import { getProvinceById } from "../../../redux/reducers/province";
import {Link} from "react-router-dom";

const DetailProduct = ({ match }) => {
  const [regions, setRegions] = useState([]);
  const [province, setProvince] = useState([]);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const tangSoLuong = () => {
    setQuantity(quantity + 1);
  };
  const giamSoLuong = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getDetailProduct = async () => {

    await axios.get(process.env.REACT_APP_HOST +`/api/Products/${match.params.id}`)
      .then(async(res) => {
        setProduct(res.data);

        const resRegion = await dispatch(getRegionById(res.data.product.regionId));
        unwrapResult(resRegion);
        setRegions(resRegion.payload.name);

        const resProvince = await dispatch(getProvinceById(res.data.product.regionId));
        unwrapResult(resProvince);
        const findProvince=resProvince.payload.province["$values"].find(item=>item.id===res.data.product.provinceId);
        setProvince(findProvince.name);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  console.log(product)
  useEffect(() => {
    getDetailProduct();
  }, [match.params.id]);

  const handleAddToCart = () => {
    const id = +match.params.id;
    let price = 0;
    if (product.product.priceSale > 0) {
      price = product.product.priceSale;
    } else {
      price = product.product.price;
    }
    const cartItems = getCartItems();
    let indexItemInCart = cartItems.findIndex((item) => item.id === id);
    if (indexItemInCart > -1) {
      cartItems.splice(indexItemInCart, 1, {
        id,
        amount: cartItems[indexItemInCart].amount + 1,
        name: product.product.name,
        image: product.image.$values[0],
        price: price,
      });
      toast.success("Cập nhật giỏ hàng");
    } else {
      cartItems.push({
        id,
        amount: quantity,
        name: product.product.name,
        image: product.image.$values[0],
        price: price,
      });
      toast.success("Thêm giỏ hàng thành công");
    }

    removeCartItems();
    setCartItems(cartItems);
  };
  return (
    <>
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
      {/* Same as */}
      <Loading />
      <div>
        <div className="inner-banner-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-4">
                <div className="inner-content">
                  <h2>Chi tiết sản phẩm</h2>
                  <ul>
                    <li>
                      <Link to="/">
                        <a href="">Trang chủ</a>
                      </Link>
                    </li>
                    <li>Chi tiết sản phẩm</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="inner-img">
                  <img
                    src="../assets/images/inner-banner/inner-banner2.png"
                    alt="Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-area pt-100 pb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="product-detls-image">
                  <Slider {...settings}>
                    {product &&
                      product.image.$values &&
                      product.image.$values.map((item, index) => {
                        return (
                          <>
                            <img
                              width={"100%"}
                              src={
                                product && process.env.REACT_APP_HOST +
                                `/uploads/${product.image.$values[index]}`
                              }
                              alt="Image"
                            />
                          </>
                        );
                      })}
                  </Slider>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 detail-pro">
                <div className="product-desc">
                  <h3>{product && product.product.name}</h3>
                  <div className="price">
                    {product && product.product.priceSale > 0 ? (
                      <>
                        <p className="old-price">
                          {product && fCurrency(product.product.price)}
                        </p>
                        <p className="new-price">
                          {product &&
                            fCurrency(product.product.priceSale)}
                        </p>
                      </>
                    ) : (
                        <span className="new-price">
                          {product && fCurrency(product.product.price)}
                        </span>
                    )}
                    (1 {product &&`${product.product.dvt}-${product.product.weight}`})
                  </div>
                  <div className="Region">
                    <div>
                      <span className='title-region'>Thuộc vùng : {regions}</span>
                    </div>
                    <div>
                      <span className='title-region'>Tỉnh : {province}</span>
                    </div>

                  </div>
                  <p className='description-title'>Mô tả sản phẩm: </p>
                  <div className='description' dangerouslySetInnerHTML={{ __html: product && product.product.description}}>
                  </div>
                  <div className='row row-buy'>
                    <div className="input-count-area col-md-6 col-sm-12 col-12">
                      <h3>Số lượng</h3>
                      <div className="input-counter">
                      <span onClick={giamSoLuong} className="minus-btn">
                        <i className="bx bx-minus" />
                      </span>
                        <input type="text" value={quantity} />
                        <span onClick={tangSoLuong} className="plus-btn">
                        <i className="bx bx-plus" />
                      </span>
                      </div>
                    </div>
                    <div className="product-add-btn col-md-6 col-sm-12 col-12">
                      <button
                          onClick={handleAddToCart}
                          type="submit"
                          className="default-btn btn-bg-three btn-100-mobile"
                      >
                        <i className="fas fa-cart-plus" /> Thêm giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct
        regionId={product && product.product.regionId}
        id={match.params.id}
      />
    </>
  );
};

export default DetailProduct;
