import { Button, Card, Col, Container, Row } from '@themesberg/react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { detailVideoThunk, getVideoThunk } from '../../redux/videoSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    let video = useSelector(state => state.video.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideoThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let deleteVideo = async (videoId) => {
        await dispatch(detailVideoThunk(videoId));
        dispatch(getVideoThunk());
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }

    let routerDetailVideo = (data) => {
        history.push({
            pathname: Routes.VideoDetail.path,
            state: data
        })
    }
    let routerEditVideo = (data) => {
        history.push({
            pathname: Routes.VideoEdit.path,
            state: data
        })
    }
    return (
        <Container>
            <Row className="mb-4" >
                <Col>
                    <Button variant="warning" onClick={() => history.push(Routes.VideoAdd.path)} >Add</Button>
                </Col>
            </Row>
            <Row>
                {video && video.map((videoItem, index) => {
                    return (
                        <VideoItem video={videoItem} key={index} deleteVideo={deleteVideo}
                            routerDetailVideo={routerDetailVideo} routerEditVideo={routerEditVideo} />
                    )
                })}
            </Row>
        </Container>
    )
}

function VideoItem({ video, deleteVideo, routerDetailVideo, routerEditVideo }) {
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="mt-4" >
                <Card.Img variant="top" src={`${SERVER.URL_IMAGE}${video.photoURL}`} />
                <Card.Body>
                    <Card.Title className="custom-title" >{video?.title}</Card.Title>
                    <Card.Subtitle className="d-flex justify-content-between" >
                        <Button variant="primary" onClick={() => routerDetailVideo(video)} >Detail</Button>
                        <Button variant="secondary" onClick={() => routerEditVideo(video)} >Edit</Button>
                        <Button variant="danger" onClick={() => deleteVideo(video._id)} >Delete</Button>
                    </Card.Subtitle>

                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">{blog?.createdBy}</small>
                </Card.Footer> */}
            </Card>
        </Col>
    )
}