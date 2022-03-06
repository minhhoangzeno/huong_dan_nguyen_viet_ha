import React from 'react';
import '../../style/style.scss';
import logo3 from '../../image/Logo-3.png';
export default function Header() {
    return (
        <>
            <section className="wrap-header">
                <header>
                    <div className="logo">
                        <a >
                            <img src={logo3} alt="" />
                        </a>
                    </div>
                    <div className="menu">
                        <div className="menu__top">
                            <div className="menu__top--language">
                                <div className="language language-active">VI</div>
                                <div className="language-virtual" />
                                <div className="language">EN</div>
                            </div>
                            <div className="menu__top--search">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.71 11H12.5L17.49 16L16 17.49L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11ZM2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                        <nav>
                            <ul className="navbar">
                                <li className="navbar__item active">
                                    <a
                                        className="navbar__item--link"
                                        href="http://9482-27-73-97-109.ngrok.io/page/home.html"
                                    >
                                        TRANG CHỦ
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <a
                                        className="navbar__item--link"
                                        href="http://9482-27-73-97-109.ngrok.io/page/about-us.html"
                                    >
                                        VỀ CHÚNG TÔI
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <a
                                        className="navbar__item--link"
                                        href="http://9482-27-73-97-109.ngrok.io/page/service.html"
                                    >
                                        DỊCH VỤ
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <a
                                        className="navbar__item--link"
                                        href="http://9482-27-73-97-109.ngrok.io/page/tech.html"
                                    >
                                        CÔNG NGHỆ
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <a className="navbar__item--link" href="./recruitment.html">
                                        TUYỂN DỤNG
                                    </a>
                                </li>
                                <li className="navbar__item">
                                    <a
                                        className="navbar__item--link"
                                        href="http://9482-27-73-97-109.ngrok.io/page/contact.html"
                                    >
                                        KẾT NỐI
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="openMenuNav">
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path
                                    fill="white"
                                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                                />
                            </svg>
                        </div>
                    </div>
                </header>
                <div className="header__input">
                    <div className="header__input--close">
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path
                                fill="white"
                                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                            />
                        </svg>
                    </div>
                    <input className="header__input--search" type="text" />
                    <div className="header__input--btn">
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.71 11H12.5L17.49 16L16 17.49L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11ZM2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="navbar-mobile">
                    <ul className="menu-mobile">
                        <li className="menu-mobile__item active">
                            <a href="./home.html" className="menu-mobile__item--link">
                                TRANG CHỦ
                            </a>
                        </li>
                        <li className="menu-mobile__item">
                            <a href="./about-us.html" className="menu-mobile__item--link">
                                VỀ CHÚNG TÔI
                            </a>
                        </li>
                        <li className="menu-mobile__item">
                            <a href="./service.html" className="menu-mobile__item--link">
                                DỊCH VỤ
                            </a>
                        </li>
                        <li className="menu-mobile__item">
                            <a href="./tech.html" className="menu-mobile__item--link">
                                CÔNG NGHỆ
                            </a>
                        </li>
                        <li className="menu-mobile__item">
                            <a href="./recruitment.html" className="menu-mobile__item--link">
                                TUYỂN DỤNG
                            </a>
                        </li>
                        <li className="menu-mobile__item">
                            <a href="./contact.html" className="menu-mobile__item--link">
                                KẾT NỐI
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}