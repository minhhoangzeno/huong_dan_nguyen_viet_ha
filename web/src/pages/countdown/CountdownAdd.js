import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Datetime from 'react-datetime';
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactTags from 'react-tag-autocomplete';
import { useToasts } from 'react-toast-notifications';
import { addCountdownThunk } from '../../redux/countdownSlice';
import { getProductThunk } from '../../redux/productSlice';
import { Routes } from '../../routes';
export default () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    let history = useHistory()
    let dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    let [startDate, setStartDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date());
    useEffect(() => {
        async function fetchProduct() {
            let response = await dispatch(getProductThunk());
            if (response) {
                let resp = [];
                response.forEach(item => {
                    resp.push({
                        id: item._id,
                        name: item.title
                    })
                })
                setProducts(resp)
            }
        }
        fetchProduct() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let addData = async (form) => {
        let productIds = [];
        tags.forEach(tag => productIds.push(tag.id));
        let data = {
            title: form.title,
            startDate: startDate,
            endDate: endDate,
            products: productIds
        }
        let response = await dispatch(addCountdownThunk(data));
        if (response) {
            addToast("Success", { appearance: 'success', autoDismiss: 1000 });
            history.push(Routes.Countdown.path)
        }

    }

    const [tags, setTags] = useState([])

    const reactTags = useRef()

    const onDelete = useCallback((tagIndex) => {
        setTags(tags.filter((_, i) => i !== tagIndex))
    }, [tags]) // eslint-disable-next-line react-hooks/exhaustive-deps

    const onAddition = useCallback((newTag) => {
        setTags([...tags, newTag])
    }, [tags]) // eslint-disable-next-line react-hooks/exhaustive-deps
    return (
        <Container>
            <Row>
                <h3 className="mb-3">Add Countdown</h3>
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

                    <div className="form-group">
                        <label >Select Product</label>
                        <ReactTags
                            ref={reactTags}
                            tags={tags}
                            suggestions={products}
                            onDelete={onDelete}
                            onAddition={onAddition}
                            placeholderText="Product"

                        />
                    </div>
                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Time start</Form.Label>
                        <Datetime
                            value={startDate}
                            onChange={e => setStartDate(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Time end</Form.Label>
                        <Datetime
                            value={endDate}
                            onChange={e => setEndDate(e)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit(addData)} >
                        Submit
                    </Button>
                    <Button variant="secondary" type="button" className="m-3"
                        onClick={() => history.push(Routes.Countdown.path)}
                    >
                        Cancel
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}