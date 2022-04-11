import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <>
    <div className="offer-style-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-12">
            <div className="offer-style-item">
              <div className="line" />
              <span>Giảm giá tới 35%</span>
              <h3>Đặc sản vùng miền Việt Nam</h3>
              <Link to="/products" className="shop-btn">Khám phá ngay</Link>
              <img src="assets/images/offer-img/png3.png" alt="Images" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="offer-style-item-2">
              <div className="line" />
              <h3>Đặc sản toàn quốc</h3>
              <Link to="/products" className="shop-btn">Khám phá ngay</Link>
              <img src="assets/images/offer-img/png1.png" alt="Images" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="offer-style-item-3">
              <img src="assets/images/offer-img/png2.png" alt="Images" />
              <div className="line" />
              <h3>Đặc sản chất lượng</h3>
              <Link to="/products" className="shop-btn">Khám phá ngay</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="offer-style-item-4">
          <div className="line" />
          <h3>Trải khắp 63 tỉnh thành</h3>
          <Link to="/products" className="shop-btn">Mua ngay</Link>
          <img src="assets/images/offer-img/bandovn.png" alt="Images" />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Offer