import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../img/logo.png';
import { Routes } from '../../routes';
import '../../scss/style.scss';
export default () => {
    let history = useHistory();
    return (
        <>
            <header style={{ width: '100%', height: 80 }} >
                <section className="header">
                    <div className="container">
                        <div className="header__top">
                            <div className="header__top--logo">
                                <Link to={'/'} ><img src={logo} alt="" /></Link>
                            </div>
                            <div className="header__top--navbar">
                                <ul className="menu">
                                    <li className="menu__item">
                                        <Link to={'/'} >HOME</Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link to={'/countdown'}>
                                            COUNTDOWN VOTE
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link to={'/vote-history'} >
                                            HISTORY VOTE
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <svg style={{ width: 30, height: 30 }} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                                        </svg>

                                        <div className="sub">
                                            <ul className="sub__item">
                                                <li className="sub__item--content"
                                                    onClick={() => history.push(Routes.Settings.path)}
                                                >My Profile</li>
                                                <li className="sub__item--content"
                                                    onClick={() => history.push(Routes.ChangePassword.path)}
                                                >Change password</li>
                                                <li className="sub__item--content"
                                                    onClick={() => {
                                                        localStorage.clear();
                                                        history.push(Routes.Signin.path)
                                                    }}
                                                >Log out</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </header>

        </>

    )
}