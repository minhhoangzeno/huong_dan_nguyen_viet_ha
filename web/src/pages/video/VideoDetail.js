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
import CommentVideo from './CommentVideo';
import ReactPlayer from "react-player";
export default () => {
    let location = useLocation();
    let video = location.state;
    let history = useHistory();
    const [videoDatas, setVideoDatas] = useState([]);
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [video._id])
    const search = async () => {
        let resp = await axios.post('http://localhost:3000/video/loadmore', {
            videoId: video._id
        })
        if (resp.status === 201) {
            setVideoDatas(resp.data)
        }
    }
    return (
        <>
            <Header />
            <div style={{ padding: 50 }} >
                <Container>
                    <Row>
                        <Col className='col-12'>
                            <img alt='' src={`${SERVER.URL_IMAGE}${video.photoURL}`} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                            <Row>
                                <Col className='col-8' >
                                    <div>
                                        <h2 style={{ marginTop: 20 }} >{video?.title}</h2>
                                    </div>
                                    <div>
                                        {video?.metaDescription}
                                    </div>
                                    <div style={{ width: '100%', height: 400 }} >
                                        <ReactPlayer url={`${SERVER.URL_IMAGE}${video.videoURL}`} width="100%" height="100%" controls={true} />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: video?.content }} >

                                    </div>
                                </Col>
                                <Col className='col-4 mt-2' >
                                    <h4>Các video khác</h4>
                                    <ul style={{
                                        height: 600, overflowY: 'auto', padding: 20,
                                        border: '1px solid #e3e3e3'
                                    }} >
                                        {videoDatas.map((item, index) => {
                                            return (
                                                <li className='blog__item' key={index}
                                                    onClick={() => {
                                                        history.push({
                                                            pathname: Routes.VideoDetail.path,
                                                            state: item
                                                        })
                                                    }}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div>
                                                        <img alt='' src={`${SERVER.URL_IMAGE}${item.photoURL}`} 
                                                            width={150}
                                                            height={100}
                                                            style={{objectFit:'cover'}}
                                                        />
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
                            <CommentVideo videoId={video._id} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}