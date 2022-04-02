import React from 'react'

const Choose = () => {
  return (
   <div className="choose-area-three pt-100 pb-70">
  <div className="container">
    <div className="section-title text-center">
      <h2>Lý do bạn chọn chúng tôi</h2>
    </div>
    <div className="row pt-45 align-items-center">
      <div className="col-lg-7">
        <div className="choose-img">
          <img src="assets/images/choose-img.jpg" alt="Images" />
        </div>
      </div>
      <div className="col-lg-5">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="choose-item">
              <i className="flaticon-24-hours" />
              <h3>Hỗ trợ online 24/7</h3>
              <p>Chúng tôi luôn tư vấn hỗ trợ nhiệt tình cho khách hàng có nhu cầu mua bán, hợp tác, tham khảo và trải nghiệm sản phẩm của chúng tôi...</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="choose-item">
              <i className="flaticon-leaf" />
              <h3>100% Đặc sản tận gốc</h3>
              <p>Chúng tôi đi khắp mọi miền tổ quốc để tìm kiếm những sản phẩm chất lượng nhất, an toàn nhất, ngon - bổ - rẻ nhất thị trường</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 offset-lg-0">
            <div className="choose-item">
              <i className="flaticon-service" />
              <h3>Giao hàng chất lượng</h3>
              <p>Thực phẩm tươi nói riêng và thực phẩm nói chung rất khó để vận chuyển, đừng lo đó không phải là vấn đề của chúng tôi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Choose