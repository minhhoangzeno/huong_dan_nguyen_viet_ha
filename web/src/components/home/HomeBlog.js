import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SERVER } from '../../apis/API';
import { getBlogThunk } from '../../redux/blogSlice';
export default function HomeBlog() {
    const [blogTop, setBlogTop] = useState();
    const [blogBottom, setBlogBottom] = useState();
    let dispatch = useDispatch()
    const search = async () => {
        let resp = await dispatch(getBlogThunk());
        if (resp) {
            let respBlogTop = [];
            let respBlogBottom = [];
            resp.forEach((item, index) => {
                if (index % 2 === 0) {
                    respBlogTop.push(item)
                } else {
                    respBlogBottom.push(item)
                }
            })
            setBlogTop(respBlogTop);
            setBlogBottom(respBlogBottom)
        }
    }
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="content__blog">
                <div className="title" style={{ marginBottom: 15 }} >
                    <h1>
                        <span style={{ letterSpacing: 3 }}>Blog</span>
                    </h1>
                </div>
                <div className="row row__top">
                    {blogTop && blogTop.map((item, index) => {
                        return (
                            <div className="item" key={index} >
                                <div className="item__image">
                                    <img
                                        src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                                        alt=""
                                    />
                                </div>
                                <div className="item__content">
                                    <div className="date">{moment(item?.createdDate).format('DD-MM-YYYY')}</div>
                                    <div className="title-post">{item?.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row row__bottom">
                    {blogBottom && blogBottom.map((item, index) => {
                        return (
                            <div className="item" key={index} >
                                <div className="item__image">
                                    <img
                                        src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                                        alt=""
                                    />
                                </div>
                                <div className="item__content">
                                    <div className="date">{moment(item?.createdDate).format('DD-MM-YYYY')}</div>
                                    <div className="title-post">{item?.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}