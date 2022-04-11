import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner-area-two">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="banner-content-2">
          <h2>Sứ mệnh của chúng tôi</h2>
          <p>Chúng tôi đem tất cả đặc sản của 63 Tỉnh/Thành đến với người dân Việt Nam thưởng thức, với những sản phẩm chất lượng tốt nhất, ngon bổ và đẹp với giá cả phù hợp.</p>
          <Link to="/products" className="default-btn btn-bg-three border-radius-5">Mua ngay</Link>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="banner-img-2">
          <img src="assets/images/h_dsvm1.png" alt="Banner Images" />
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Banner