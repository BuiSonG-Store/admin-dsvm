import React from 'react'
import Loading from '../../utils/Loading/Loading'


const About = () => {
    return (
        <>
            <Loading/>
            <div>
                <div className="inner-banner-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-4">
                                <div className="inner-content">
                                    <h2>Thông tin</h2>
                                    <ul>
                                        <li><a href="/">Trang chủ</a></li>
                                        <li>Thông tin</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-8">
                                <div className="inner-img">
                                    <img src="assets/images/inner-banner/inner-banner1.png" alt="Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-area pt-100 pb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src="assets/images/about-img.jpg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <h2>Chúng tôi đặt mọi nhiệt huyết vào sứ mệnh của mình</h2>
                                        <p>
                                            Đặc sản thì ở đâu cũng có nhưng có những nơi chưa có điều kiện để có thể đưa
                                            sản phẩm của nhà, của quê hương đi xa hơn... Không sao chúng tôi đã biết
                                            điều đó, chúng tôi không ngại khó khăn hiểm trở giúp bà con phân phối các
                                            sản phẩm, những đặc sản quê hương có thể đi xa hơn giúp người dân nâng cao
                                            điều kiện sống...
                                        </p>
                                        <p>
                                            Chúng tôi chỉ dừng lại ở đó, đồng bào còn gặp khó khăn chúng tôi sẽ trích
                                            một phần doanh số bán được để giúp đỡ bà con còn khó khăn bằng những hoạt
                                            động như xây cầu đường, trường trạm,... các bạn cũng góp một phần nhỏ khi
                                            mua sản phẩm của chúng tôi đấy, cảm ơn các bạn!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-area-three pt-100 pb-70">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Lý do bạn chọn chúng tôi</h2>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-4 col-sm-6">
                                <div className="choose-card-two choose-card-two-color">
                                    <i className="flaticon-24-hours"/>
                                    <h3>Hỗ trợ online 24/7</h3>
                                    <p>Chúng tôi luôn tư vấn hỗ trợ nhiệt tình cho khách hàng có nhu cầu mua bán, hợp
                                        tác, tham khảo và trải nghiệm sản phẩm của chúng tôi...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="choose-card-two choose-card-two-color">
                                    <i className="flaticon-leaf"/>
                                    <h3>100% Đặc sản tận gốc</h3>
                                    <p>Chúng tôi đi khắp mọi miền tổ quốc để tìm kiếm những sản phẩm chất lượng nhất, an
                                        toàn nhất, ngon - bổ - rẻ nhất thị trường</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                <div className="choose-card-two choose-card-two-color">
                                    <i className="flaticon-service"/>
                                    <h3>Giao hàng chất lượng</h3>
                                    <p>Thực phẩm tươi nói riêng và thực phẩm nói chung rất khó để vận chuyển, đừng lo đó
                                        không phải là vấn đề của chúng tôi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-area-section-3 pt-100 pb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <span>Giảm giá đến 35%, <b> Đăng ký ngay</b></span>
                                    <h2>Theo dõi sản phẩm và bản tin của chúng tôi</h2>
                                </div>
                                <div className="newsletter-area-two newsletter-area-border">
                                    <form className="newsletter-form" data-toggle="validator" method="POST">
                                        <input type="email" className="form-control" placeholder="Nhập email của bạn..."
                                               name="EMAIL" required autoComplete="off"/>
                                        <button className="subscribe-btn" type="submit">
                                            Đăng ký
                                        </button>
                                        <div id="validator-newsletter" className="form-result"/>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="newsletter-img">
                                    <img src="assets/images/newsletter-img.jpg" alt="Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About