import React, { useEffect, useState } from 'react';
import { Button, Form, FormLabel, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { voteUserCountdownThunk } from '../../redux/countdownSlice';

export default ({ show, handleClose, countdownId, productId, setCheck }) => {
    let dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    const [code, setCode] = useState();
    const search = () => {
        setCode(makeid(5))
    }
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId, countdownId])
    function makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    const voteCountdown = async (form) => {
        if (form.code === code) {
            let response = await dispatch(voteUserCountdownThunk({
                countdown: countdownId,
                product: productId
            }));
            if (response) {
                handleClose();
                setCheck(true)
                addToast("Vote thành công!", { appearance: 'success', autoDismiss: 1000 })
            }
        } else {
            addToast("Bạn cần nhập đúng mã code!", { appearance: 'info', autoDismiss: 1000 })
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Bạn có muốn vote cho sản phẩm này?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormLabel>
                        Mã code: <strong>{code}</strong>
                    </FormLabel>
                    <Controller
                        control={control}
                        name="code"
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
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                    }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(voteCountdown)} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}