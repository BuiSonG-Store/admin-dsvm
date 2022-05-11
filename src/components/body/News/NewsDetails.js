import Loading from "../../utils/Loading/Loading";
import {ToastContainer} from "react-toastify";
import React from "react";
import {Link} from "react-router-dom";

const NewsDetails = () => {
    return <>
        <Loading/>
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

        <div className="blog-details-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-article-img">
                            <img src="assets/images/blog/blog-details-img1.jpg" alt="Images"/>
                            <div className="blog-article-tag">
                                <h3>04</h3>
                                <span>Nov</span>
                            </div>
                        </div>
                        <div className="article-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium, massa vel
                                gravida
                                bibendum, dolor turpis
                                mollis sem, id interdum nisl odio vitae velit. Phasellus felis dolor, venenatis in lacus
                                vel, maximus tempor nisi.
                                Ut ut felis condimentum, sodales nisi quis, ultrices est. Pellentesque habitant morbi
                                tristique senectus et netus
                                et malesuada fames ac turpis egestas. Quisque varius venenatis scelerisque. Phasellus
                                faucibus purus a luctus pharetra.
                                Maecenas tincidunt non magna sed lobortis. Cras a nisi ex. Pellentesque felis libero,
                                vulputate id rhoncus ac, hendrerit
                                ac velit. Suspendisse sagittis sapien felis, in dignissim enim finibus in. Vestibulum at
                                egestas mauris, vitae fermentum
                                justo.
                            </p>
                            <blockquote className="blockquote">
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem
                                    por
                                    invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                    dolores et ea rebum.
                                    Stet clita kasd gubergren consectetur adipiscing elit consetetur sadipscing elitr,
                                    sed
                                    diam nonumy eirmod tem por.
                                </p>
                            </blockquote>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. cu
                                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                quam
                                felis, ultricies ne,
                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                                fringilla vel, aliquet n,
                                vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum
                                felis eu pede mollis
                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate
                                eleifend tellus. Aen
                                li, porttitor eu, consequat vitae, eleifend .
                            </p>
                        </div>
                        <div className="another-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="another-content-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium,
                                            massa
                                            vel gravida bibendum, dolor turpis
                                            mollis sem, id interdum nisl odio vitae velit. Phasellus felis dolor,
                                            venenatis
                                            in lacus vel, maximus tempor nisi.
                                            Ut ut felis condimentum, sodales nisi quis, ultrices est. Pellentesque
                                            habitant
                                            morbi tristique senectus et netus
                                            et malesuada fames ac turpis egestas. Quisque varius venenatis scelerisque.
                                            Phasellus faucibus purus a luctus pharetra.
                                            Maecenas tincidunt non magna sed lobortis. Cras a nisi ex. Pellentesque
                                            felis
                                            libero, vulputate id rhoncus ac, hendrerit
                                            ac velit. Suspendisse sagittis sapien felis, in dignissim enim finibus in.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-img">
                                        <img src="assets/images/blog/blog-img2.jpg" alt="Images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. cu
                                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                quam
                                felis, ultricies ne,
                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                                fringilla vel, aliquet n,
                                vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum
                                felis eu pede mollis
                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate
                                eleifend tellus. Aen
                                li, porttitor eu, consequat vitae, eleifend.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. cu
                                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                quam
                                felis, ultricies ne,
                                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                                fringilla vel, aliquet n,
                                vu eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum
                                felis eu pede mollis
                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate
                                eleifend tellus. Aen
                                li, porttitor eu, consequat vitae, eleifend .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default NewsDetails;