import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import logo from '../../img/logo.png';
import { Routes } from '../../routes';
import '../../scss/style.scss';
export default () => {
    let history = useHistory();
    const [isSearch, setIsSearch] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const [blog, setBlog] = useState();

    let getSearch = async () => {
        try {
            let res = await axios.post(`${SERVER.BASE_URL}/blog/search`, {
                textSearch
            })
            setBlog(res.data);
            console.log(blog)

        } catch (error) {

        }
    }
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
                                        <div className="search" >
                                            <div style={{ display: (isSearch ? 'flex' : 'none'), position: 'absolute' }} className="search__input">
                                                <input type="text" placeholder="Tìm kiếm..."
                                                    onChange={(e) => {
                                                        setTextSearch(e.target.value)
                                                        getSearch()
                                                    }}
                                                    value={textSearch}
                                                />
                                                <div onClick={() => {
                                                    setIsSearch(false)
                                                }} className="search__input--close">
                                                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" color="#333">
                                                        <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                                                    </svg>
                                                </div>
                                                <div className="list__blog">
                                                    <ul>
                                                        {blog?.map((item, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <div className="image">
                                                                        <img src={`${SERVER.URL_IMAGE}${item.photoURL}`} alt="" />
                                                                        <div className="content__title" onClick={() => history.push({
                                                                            pathname: Routes.BlogDetail.path,
                                                                            state: item
                                                                        })}>
                                                                            {item?.title}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })}

                                                    </ul>
                                                </div>
                                            </div>
                                            <svg style={{ width: 24, height: 24, cursor: 'pointer' }} viewBox="0 0 24 24" onClick={() => {
                                                setIsSearch(true)
                                                setTextSearch("")
                                            }}>
                                                <path
                                                    fill="currentColor"
                                                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                                />
                                            </svg>

                                        </div>
                                    </li>
                                    <li className="menu__item">
                                        <Link to={'/'} >HOME</Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link to={'/blog'} >BLOG</Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link to={'/video'} >VIDEO</Link>
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
                                                ><FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile</li>
                                                <li className="sub__item--content"
                                                    onClick={() => history.push(Routes.ChangePassword.path)}
                                                ><FontAwesomeIcon icon={faCog} className="me-2" />  Change password</li>
                                                <li className="sub__item--content"
                                                    onClick={() => {
                                                        localStorage.clear();
                                                        history.push(Routes.Signin.path)
                                                    }}
                                                ><FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Log out</li>
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