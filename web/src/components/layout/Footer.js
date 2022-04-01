import React, { useState } from 'react';
import '../../scss/style.scss';
import logo from '../../img/logo.png'
import Feedback from './Feedback';
export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <Feedback show={show} handleClose={handleClose} />
            <section className="footer">
                <div className="container">
                    <div className="footer__infor">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className='infor' >
                                    <div className="infor__logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="infor">
                                    <ul className="infor__menu">
                                        <li>
                                            <a
                                                className="infor__menu--item"
                                                target="_self"
                                                href="/en/notice"
                                            >
                                                <span>Notice</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="infor__menu--item"
                                                target="_self"
                                                href="/en/notice"
                                            >
                                                <span>PRIVACY POLICY</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="infor__menu--item"
                                                target="_self"
                                                href="/en/notice"
                                            >
                                                <span>TERMS OF USE</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="infor__menu--item"
                                                target="_self"
                                                href="/en/notice"
                                            >
                                                <span>YOUTH PROTECTION POLICY</span>{" "}
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="infor__customer">
                                        <div className="infor__customer--title">Customer Service</div>
                                        <div className="infor__customer--time">
                                            <p>AM 10:00- PM 17:00(Off-time 12:00-13:00)</p>
                                            <p>Day Off(Saturday, Sunday, Holiday)</p>
                                        </div>
                                        <div className="infor__customer--sub" style={{ flexDirection: 'column' }} >
                                            <div style={{ display: 'flex' }} >
                                                <div className="sub__item">
                                                    <a href="/" className="btn-plus" target="_blank">
                                                        FAQ
                                                    </a>
                                                </div>
                                                <div className="sub__item">
                                                    <a href="/" className="btn-plus">
                                                        Inquiry
                                                    </a>
                                                </div>
                                                <div className="sub__item">
                                                    <a href="/" className="btn-plus">
                                                        Previous Vote Result
                                                    </a>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', marginTop: 8, cursor: 'pointer' }}
                                            onClick={() => setShow(true)}
                                            >
                                                Feedback &nbsp; <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24">
                                                    <path fill="white" d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="infor__org">
                                        <div className="infor__org--icon">
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
                                                />
                                            </svg>{" "}
                                            Address: KFes 870-13, GwaCheon, SeoCho, Seoul, Korea
                                        </div>
                                        <div className="infor__org--icon">
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M22,6V4L14,9L6,4V6L14,11L22,6M22,2A2,2 0 0,1 24,4V16A2,2 0 0,1 22,18H6C4.89,18 4,17.1 4,16V4C4,2.89 4.89,2 6,2H22M2,6V20H20V22H2A2,2 0 0,1 0,20V6H2Z"
                                                />
                                            </svg>{" "}
                                            E-mail: kfeskorea@gmail.com
                                        </div>
                                        <div className="infor__org--icon">
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z"
                                                />
                                            </svg>{" "}
                                            Phone: 03-290-2210
                                        </div>
                                        <div className="copyright">
                                            {" "}
                                            Copyright (C) KFes All rights reserved
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-4">
                                <div className="list-social">
                                    <a href="https://www.facebook.com/profile.php?id=100028123083702">
                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/Lucifer_9194">
                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                                            />
                                        </svg>

                                    </a>
                                    <a href="https://www.instagram.com/hoangminh1412/">
                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                                            />
                                        </svg>

                                    </a>
                                    <a href="https://www.youtube.com/channel/UC3voQB_ZDsFCbDL8HSHNlDg">
                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}