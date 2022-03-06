import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import { Routes } from '../../routes';

export default () => {
    let history = useHistory()
    let location = useLocation();
    let video = location.state;
    return (
        <Container>
            <Row>
                <h3 className="mb-3">Detail Video</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <InputGroup >
                            <Form.Control autoFocus type="text"
                                disabled
                                value={video.title}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Video url</Form.Label>
                        <InputGroup >
                            <Form.Control as="textarea" rows={3} autoFocus disabled type="text"
                                value={video.videoUrl}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mt-4" >
                        <Form.Label>Image</Form.Label>
                        <div className="d-xl-flex align-items-center">
                            <div className="user-avatar xl-avatar">
                                <img src={`${SERVER.URL_IMAGE}${video.photoURL}`} alt="" />
                            </div>
                        </div>
                    </Form.Group>
                    <Button variant="secondary" type="button" className="m-3"
                        onClick={() => history.push(Routes.Video.path)}
                    >
                        Cancel
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}