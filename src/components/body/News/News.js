import {fCurrency} from "../../utils/FormatCost";
import React from "react";
import Loading from "../../utils/Loading/Loading";
import {ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";

const News = () => {
    return(
        <>
            <Loading />
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
            <div className="inner-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="inner-content">
                                <h2>Tin tức</h2>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <a href="">Trang chủ</a>
                                        </Link>
                                    </li>
                                    <li>Tin tức</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="inner-img">
                                <img
                                    src="assets/images/inner-banner/inner-banner10.png"
                                    alt="Images"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Bài viết mới</h2>
                        <p className="m-auto">(chức năng này đang được cập nhật)</p>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-color-2">
                                <a href="blog-details.html">
                                    <img src="assets/images/blog/blog-img1.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span><i className="bx bx-time-five" /> Nov 01, 2020</span>
                                    <h3><a href="blog-details.html">We Always Ready to Give You Best Delivery Support </a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
                                    </p>
                                    <a href="#" className="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-color-2">
                                <a href="blog-details.html">
                                    <img src="assets/images/blog/blog-img2.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span><i className="bx bx-time-five" /> Nov 05, 2020</span>
                                    <h3><a href="blog-details.html">Click and Make the Payment in the Most Easiest Way</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
                                    </p>
                                    <a href="#" className="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-color-2">
                                <a href="blog-details.html">
                                    <img src="assets/images/blog/blog-img1.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span><i className="bx bx-time-five" /> Nov 01, 2020</span>
                                    <h3><a href="blog-details.html">We Always Ready to Give You Best Delivery Support </a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
                                    </p>
                                    <a href="#" className="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-color-2">
                                <a href="blog-details.html">
                                    <img src="assets/images/blog/blog-img2.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span><i className="bx bx-time-five" /> Nov 05, 2020</span>
                                    <h3><a href="blog-details.html">Click and Make the Payment in the Most Easiest Way</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
                                    </p>
                                    <a href="#" className="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-color-2">
                                <a href="blog-details.html">
                                    <img src="assets/images/blog/blog-img1.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span><i className="bx bx-time-five" /> Nov 01, 2020</span>
                                    <h3><a href="blog-details.html">We Always Ready to Give You Best Delivery Support </a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
                                    </p>
                                    <a href="#" className="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card blog-color-2">
                                <a href="blog-details.html">
                                    <img src="assets/images/blog/blog-img2.jpg" alt="Images" />
                                </a>
                                <div className="content">
                                    <span><i className="bx bx-time-five" /> Nov 05, 2020</span>
                                    <h3><a href="blog-details.html">Click and Make the Payment in the Most Easiest Way</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
                                    </p>
                                    <a href="#" className="read-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default News;