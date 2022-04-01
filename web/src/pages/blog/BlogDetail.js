import { Col, Container, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { Routes } from '../../routes';
import '../../scss/blog.scss';
import CommentBlog from './CommentBlog';
export default () => {
    let location = useLocation();
    let blog = location.state;
    let history = useHistory();
    const [blogDatas, setBlogDatas] = useState([]);
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blog._id])
    const search = async () => {
        let resp = await axios.post('http://localhost:3000/blog/loadmore', {
            blogId: blog._id
        })
        if (resp.status === 201) {
            setBlogDatas(resp.data)
        }
    }
    return (
        <>
            <Header />
            <div style={{ padding: 50 }} >
                <Container>
                    <Row>
                        <Col className='col-12'>
                            <img alt='' src={`${SERVER.URL_IMAGE}${blog.photoURL}`} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                            <Row>
                                <Col className='col-8' >
                                    <div>
                                        <h2 style={{ marginTop: 20 }} >{blog?.title}</h2>
                                    </div>
                                    <div>
                                        {blog?.metaDescription}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: blog?.content }} >

                                    </div>
                                </Col>
                                <Col className='col-4 mt-2' >
                                    <h4>Các bài viết khác</h4>
                                    <ul style={{
                                        height: 600, overflowY: 'auto', padding: 20,
                                        border: '1px solid #e3e3e3'
                                    }} >
                                        {blogDatas.map((item, index) => {
                                            return (
                                                <li className='blog__item' key={index}
                                                    onClick={() => {
                                                        history.push({
                                                            pathname: Routes.BlogDetail.path,
                                                            state: item
                                                        })
                                                    }}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div>
                                                        <img alt='' src={`${SERVER.URL_IMAGE}${item.photoURL}`} />
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: 20 }} >
                                                        <h4>{item?.title}</h4>
                                                        <p>{moment(item?.createdDate).format("DD-MM-YYYY")}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </Col >
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12' >
                            <CommentBlog blogId={blog._id} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}