import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import ReactPlayer from "react-player";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { addVideoThunk } from '../../redux/videoSlice';
import { Routes } from '../../routes';
export default () => {
    const [file, setFile] = useState();
    const [videoURL, setVideoURL] = useState();
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    let history = useHistory()
    let dispatch = useDispatch();
    let addData = async (form) => {
        let data = new FormData();
        data.append("title", form.title);
        data.append("metaDescription", form.metaDescription);
        data.append("content", form.content);
        if (file) {
            data.append("file", file);
        }
        if (videoURL) {
            data.append("videoURL", videoURL);
        }

        let res = await dispatch(addVideoThunk(data));
        if (res) {
            addToast("Success", { appearance: 'success', autoDismiss: 1000 });
            history.push(Routes.Video.path)
        }

    }
    return (
        <Container>
            <Row>
                <h3 className="mb-3">Add Video</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Controller
                            control={control}
                            name="title"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                                    <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Meta description</Form.Label>
                        <Controller
                            control={control}
                            name="metaDescription"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.metaDescription?.type === "required" && '1px solid red' }}>
                                    <Form.Control as="textarea" rows={3} autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Controller
                            control={control}
                            name="content"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.content?.type === "required" && '1px solid red' }}>
                                    <Form.Control as="textarea" rows={10} autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mt-4" >
                        <Form.Label>Image</Form.Label>
                        <div className="d-xl-flex align-items-center">
                            <div className="user-avatar xl-avatar">
                                {file && <img id="target" src={URL.createObjectURL(file)} alt="" />}
                            </div>
                            <div className="file-field">
                                <div className="d-flex justify-content-xl-center ms-xl-3">
                                    <div className="d-flex">
                                        <span className="icon icon-md">
                                            <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                                        </span>
                                        <input type="file"
                                            onChange={e => setFile(e.target.files[0])}
                                        />
                                        <div className="d-md-block text-start">
                                            <div className="fw-normal text-dark mb-1">Choose Image</div>
                                            <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mt-4" >
                        <Form.Label>Video</Form.Label>
                        <div className="d-xl-flex align-items-center">
                            <div style={{ height: 300, width: '100%' }} >
                                {videoURL && <ReactPlayer url={URL.createObjectURL(videoURL)} width="100%" height="100%" controls={true} />}
                            </div>
                            <div className="file-field">
                                <div className="d-flex justify-content-xl-center ms-xl-3">
                                    <div className="d-flex">
                                        <span className="icon icon-md">
                                            <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                                        </span>
                                        <input type="file"
                                            onChange={e => setVideoURL(e.target.files[0])}
                                        />
                                        <div className="d-md-block text-start">
                                            <div className="fw-normal text-dark mb-1">Choose Video</div>
                                            <div className="text-gray small">MP4 file</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit(addData)} >
                        Submit
                    </Button>
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