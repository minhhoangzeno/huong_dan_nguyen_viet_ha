import { Card, Col, Container, Row, Button } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { getVideoThunk,deleteVideoThunk} from '../../redux/videoSlice';
import { Routes } from "../../routes";
import Pagination from "react-js-pagination";
import '../../scss/pagination.scss'
export default () => {
    let history = useHistory();
    let video = useSelector(state => state.video.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    useEffect(() => {
        dispatch(getVideoThunk(5 * (activePage - 1))) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage]);

    let deleteVideo = async (videoId) => {
        await dispatch(deleteVideoThunk(videoId));
        dispatch(getVideoThunk(0));
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }

    let routerDetailVideo = (data) => {
        history.push({
            pathname: Routes.VideoDetail.path,
            state: data
        })
    }
    // let routerEditBlog = (data) => {
    //     history.push({
    //         pathname: Routes.BlogEdit.path,
    //         state: data
    //     })
    // }
    return (
        <Container>
            <Row className="mb-4" >
                <Col>
                    <Button variant="warning" onClick={() => history.push(Routes.VideoAdd.path)} >Add</Button>
                </Col>
            </Row>
            <Row>
                {video && video.data.map((videoItem, index) => {
                    return (
                        <VideoItem video={videoItem} key={index} deleteVideo={deleteVideo}
                            routerDetailVideo={routerDetailVideo}  />
                    )
                })}
            </Row>
            <div className='wrapper-paginate' >
                {video && <Pagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={video?.totalPage}
                    pageRangeDisplayed={3}
                    onChange={value => setActivePage(value)}
                />}
            </div>
        </Container>
    )
}

function VideoItem({ video, deleteVideo, routerDetailVideo}) {
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="mt-4" >
                <Card.Img variant="top" src={`${SERVER.URL_IMAGE}${video.photoURL}`} />
                <Card.Body>
                    <Card.Title className="custom-title" >{video?.title}</Card.Title>
                    <Card.Text className="custom-description" >
                        {video?.metaDescription}
                    </Card.Text>
                    <Card.Subtitle className="d-flex justify-content-between" >
                        <Button variant="primary" onClick={() => routerDetailVideo(video)} >Detail</Button>
                        {/* <Button variant="secondary" onClick={() => routerEditBlog(blog)} >Edit</Button> */}
                        <Button variant="danger" onClick={() => deleteVideo(video._id)} >Delete</Button>
                    </Card.Subtitle>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{video?.createdBy}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}