import React from "react";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="chat-fb"></div>
      <footer className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top pt-100 ">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <div className="footer-logo">

                    <Link to="/">
                      <a href="">
                        <img width={50}
                             src="../assets/images/logos/logo-2.png"
                             alt="Images"
                        />
                      </a>

                    </Link>


                  </div>
                  <p>
                    Đặc Sản Vùng Miền Số 1 Việt Nam
                  </p>
                  <ul className="footer-list-contact">
                    <li>
                      <i className="bx bx-home" />
                      <a href="#">
                        Tổng kho : Lô A52 khu 3ha Ngõ 36 Đức Diễn, P. Phúc Diễn, Q. Bắc Từ Liêm, Hà
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-phone-call" />
                      <a href="tel:+84-37-882-8686">+84 37 882 8686</a>
                    </li>
                    <li>
                      <i className="bx bx-envelope" />
                      <a type="email" href="mailto:dacsanso1vietnam@gmail.com">
                        <span
                          className="__cf_email__"
                          data-cfemail="1078757c7c7f5078797c7f3e737f7d"
                        >
                          dacsanso1vietnam@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <h3>Dịch vụ</h3>
                  <ul className="footer-list">
                    <li>
                        <Link to="/my_account">
                          <a href="" target="_blank">

                          Tài khoản của tôi
                          </a>

                        </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <a href="" target="_blank">
                          Tin tức
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <h3>Thông tin</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/">
                        <a href="" target="_blank">
                          Trang chủ
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <a href="" target="_blank">
                          Về chúng tôi
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products">
                        <a href="" target="_blank">
                          Tất cả sản phẩm
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-widget-color-2">
                  <h3>Theo dõi chúng tôi</h3>
                  <div className="fb-page" data-href="https://www.facebook.com/DacSanVungMien.So1VietNam"
                       data-tabs="timeline" data-width="" data-height="70" data-small-header="false"
                       data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/DacSanVungMien.So1VietNam"
                                className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/DacSanVungMien.So1VietNam">Đặc Sản Vùng Miền Việt Nam</a>
                    </blockquote>
                  </div>
                  <ul className="social-link">
                    <li>
                      <a href="https://www.facebook.com/DacSanVungMien.So1VietNam" target="_blank">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area-three">
            <div className="copy-right-text">
              <p>
                Copyright ©2022 Bùi Sơn. All Rights Reserved by <a href="dacsanvungmienvietnam.net" target="_blank"> dacsanvungmienvietnam.net</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
