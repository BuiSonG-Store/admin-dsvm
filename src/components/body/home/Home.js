import React from "react";
import Banner from "./Banner";
import Product from "./Product";
import Loading from "../../utils/Loading/Loading";
import Brand from "./Brand";
import Offer from "./Offer";
import PopularProduct from "./PopularProduct";
import Choose from "./Choose";
import Blog from "./Blog";

function Home() {
  return (
    <>
    <Loading/>
      <Banner />
      {/*<Brand/>*/}
      <Offer/>
      <PopularProduct/>
      <Choose/>
      <Product />
      <div className="newsletter-area-section-3 newsletter-area-section-bg pt-100">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span>
                  Giảm đến 35%, <b> Đăng ký ngay</b>
                </span>
                <h2>Đăng ký thông báo thông tin về sản phẩm mới của chúng tôi</h2>

              </div>
              <div className="newsletter-area-two newsletter-area-three">
                <form
                  className="newsletter-form"
                  data-toggle="validator"
                  method="POST"
                  noValidate="true"
                >
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Nhập email của bạn..."
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button
                    className="subscribe-btn disabled"
                    type="submit"
                    style={{ pointerEvents: "all", cursor: "pointer" }}
                  >
                    Đăng ký
                  </button>
                  <div id="validator-newsletter" className="form-result" />
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-img">
                <img src="assets/images/newsletter-img.jpg" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog/>
      <div className="contact-area col-md-12 m-auto">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="contact-card">
              <i className="bx bxs-map" />
              <h3>Cửa hàng của chúng tôi trên toàn quốc :</h3>
              <p>CH1: Số 37 Ngõ 109 Đường Trường Chinh, Phương Liệt, Thanh Xuân, Hà Nội</p>
              <p>CH2: 143 Đ. Trần Đăng Ninh, Hoàng Văn Thụ, Thành phố Lạng Sơn, Lạng Sơn</p>
              <p>CH3: Tổ 4 phường Đức Sơn, TP.Bắc Kạn</p>
              <p>CH4: Đường nội thị 2 (cổng chợ chiều) Thị trấn Vương, Tiên Lữ, Hưng Yên </p>
              <p>CH5: Số 192 Phan Đình Phùng, TP Thái Nguyên </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
