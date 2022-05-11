import React from 'react'
import Loading from '../../utils/Loading/Loading'
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <>
            <Loading/>
            <div>
                <div className="inner-banner-area ">
                    <div className="container ">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-4">
                                <div className="inner-content">
                                    <h2>Liên hệ chúng tôi</h2>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <a href="">Trang chủ</a>
                                            </Link>
                                        </li>
                                        <li>Liên hệ chúng tôi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-8">
                                <div className="inner-img">
                                    <img src="assets/images/inner-banner/inner-banner2.png" alt="Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-area pb-70 pt-45">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Liên lạc</h2>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-4 col-sm-6">
                                <div className="contact-card">
                                    <i className="bx bx-phone-call"/>
                                    <h3>Số điện thoại</h3>
                                    <span><a href="tel:0916218666">+84 916 21 8666</a></span>
                                    <span><a href="tel:0378828686">+84 378 82 8686</a></span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                <div className="contact-card">
                                    <i className="bx bx-message"/>
                                    <h3>Email</h3>
                                    <span className="">
                                        <a href="mailto: dacsanso1vietnam@gmail.comm">
                                            <span className="__cf_email__" data-cfemail="5e363b3232311e36373231703d3133">dacsanso1vietnam@gmail.com</span>
                                        </a>
                                    </span>

                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="contact-card">
                                    <i className="bx bxs-map"/>
                                    <h3>Địa chỉ</h3>
                                    <a href="https://goo.gl/maps/hxkXnUNj6QiXhcqK8">
                                        <span>
                                            Lô A52 khu 3ha Ngõ 36 Đức Diễn, P. Phúc Diễn, Q. Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-card">
                                    <i className="bx bxs-map"/>
                                    <h3>Các cửa hàng trên toàn quốc :</h3>
                                    <a href="https://goo.gl/maps/hxkXnUNj6QiXhcqK8">
                                        <p>CH1: Số 37 Ngõ 109 Đường Trường Chinh, Phương Liệt, Thanh Xuân, Hà Nội</p>
                                    </a>
                                    <p>CH2: 143 Đ. Trần Đăng Ninh, Hoàng Văn Thụ, Thành phố Lạng Sơn, Lạng Sơn</p>
                                    <p>CH3: Tổ 4 phường Đức Sơn, TP.Bắc Kạn</p>
                                    <p>CH4: Đường nội thị 2 (cổng chợ chiều) Thị trấn Vương, Tiên Lữ, Hưng Yên </p>
                                    <a href="https://goo.gl/maps/1BadNa6wpq32v9VTA">
                                        <p>CH5: Số 192 Phan Đình Phùng, TP Thái Nguyên </p>
                                    </a>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-area">
                    <div className="container-fluid m-0 p-0">
                        <iframe
                            src="https://www.google.com/maps/d/u/1/embed?mid=1hAq3gtaICmSrnS_fRoQiBvD8zSIgMSy1&ehbc=2E312F"></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
