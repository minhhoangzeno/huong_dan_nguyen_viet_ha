import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { editVideoThunk } from '../../redux/videoSlice';
import { Routes } from '../../routes';

export default () => {
    let location = useLocation();
    let video = location.state;
    const [file, setFile] = useState();
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    let history = useHistory()
    let dispatch = useDispatch();
    let addData = async (form) => {
        let data = new FormData();
        data.append("title", form.title);
        data.append("videoUrl", form.videoUrl);
        if (file) {
            data.append("file", file);
        }
        dispatch(editVideoThunk(video._id,data))
        addToast("Success", { appearance: 'success', autoDismiss: 1000 });
        history.push(Routes.Video.path)
    }
    return (
        <Container>
            <Row>
                <h3 className="mb-3">Edit Video</h3>
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
                                        value={value}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                            defaultValue={video.title}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Video Youtube Url</Form.Label>
                        <Controller
                            control={control}
                            name="videoUrl"
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <InputGroup style={{ border: errors.videoUrl?.type === "required" && '1px solid red' }}>
                                    <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </InputGroup>
                            )}
                            rules={{
                                required: true
                            }}
                            defaultValue={video.videoUrl}
                        />
                    </Form.Group>

                    <Form.Group className="mt-4" >
                        <Form.Label>Image</Form.Label>
                        <div className="d-xl-flex align-items-center">
                            <div className="user-avatar xl-avatar">

                                {file ? <img id="target" src={URL.createObjectURL(file)} alt="" /> :
                                    <img src={`${SERVER.URL_IMAGE}${video.photoURL}`} alt="" />
                                }
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