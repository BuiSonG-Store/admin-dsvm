import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../../utils/validation/Validation";
import Loading from '../../utils/Loading/Loading'
const initialState = {
  name: "",
  phoneNumber: "",
  accountPassword: "",
  userAddress: "",
  gmail: "",
};


function Register() {
  const [user, setUser] = useState(initialState);

  const { name, phoneNumber, accountPassword, userAddress, gmail } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(accountPassword) || isEmpty(phoneNumber)  || isEmpty(userAddress))
     toast.error('Vui lòng điền thông tin !');

    if (!isEmail(gmail))
      toast.error('Email không hợp lệ !');

    if (isLength(accountPassword))
    toast.error('Mật khẩu chứa ít nhất 6 ký tự !');

    

    try {
      const res = await axios.post(process.env.REACT_APP_HOST +"/api/Accounts/register", {
        name, phoneNumber, accountPassword, userAddress, gmail
      });

      setUser(initialState);
      toast.success('Đăng ký tài khoản thành công!')
    } catch (err) {
      toast.error('Đăng ký thất bại!')
    }
  };

  return (
    <>
    <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

<Loading/>
{/* Same as */}

      <div>
        <div className="inner-banner-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-4">
                <div className="inner-content">
                  <h2>Đăng ký</h2>
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>Đăng ký</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="user-area pt-100 pb-70">
                  <div className="container">
                    <div className="user-width">
                      <div className="user-form">
                        <div className="contact-form">
                          <h2>Đăng ký</h2>
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-lg-12 ">
                                <div className="form-group">
                                  <input
                                      type="text"
                                      className="form-control"

                                      placeholder="Nhập tên người dùng"
                                      name="name"
                                      onChange={handleChangeInput}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 ">
                                <div className="form-group">
                                  <input
                                      type="text"
                                      className="form-control"

                                      placeholder="Nhập email..."
                                      name="gmail"
                                      onChange={handleChangeInput}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <input
                                      className="form-control"
                                      type="password"
                                      name="accountPassword"
                                      placeholder="Mật khẩu..."
                                      onChange={handleChangeInput}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 ">
                                <div className="form-group">
                                  <input
                                      type="text"
                                      className="form-control"

                                      name="phoneNumber"
                                      placeholder="Nhập số điện thoại..."
                                      onChange={handleChangeInput}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 ">
                                <div className="form-group">
                                  <input
                                      type="text"
                                      className="form-control"

                                      name="userAddress"
                                      placeholder="Nhập địa chỉ..."
                                      onChange={handleChangeInput}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 ">
                                <Link to='/login' className="default-btn btn-bg-three">
                                  Đăng nhập
                                </Link>
                              </div>
                              <div className="col-lg-6 ">
                                <button type="submit" className="default-btn btn-bg-three">
                                  Đăng ký
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
