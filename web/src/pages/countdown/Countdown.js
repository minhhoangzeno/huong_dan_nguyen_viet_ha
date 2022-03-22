import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteCountdownThunk, getCountdownThunk } from '../../redux/countdownSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    let countdown = useSelector(state => state.countdown.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountdownThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let deleteCountdown = async (countdownId) => {
        await dispatch(deleteCountdownThunk(countdownId));
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }

    let routerDetailCountdown = (data) => {
        history.push({
            pathname: Routes.CountdownDetail.path,
            state: data
        })
    }
    let routerEditCountdown = (data) => {
        history.push({
            pathname: Routes.CountdownEdit.path,
            state: data
        })
    }
    return (
        <Container>
            <Row className="mb-4" >
                <Col>
                    <Button variant="warning" onClick={() => history.push(Routes.CountdownAdd.path)} >Add</Button>
                </Col>
            </Row>
            <Row>

                <Card border="light" className="table-wrapper table-responsive shadow-sm">
                    <Card.Body className="pt-0">
                        <Table hover className="user-table align-items-center">
                            <thead>
                                <tr>
                                    <th className="border-bottom">#</th>
                                    <th className="border-bottom">Title</th>
                                    <th className="border-bottom">Start date</th>
                                    <th className="border-bottom">End date</th>
                                    <th className="border-bottom">Settings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countdown && countdown.map((countdownItem, index) => {
                                    return (
                                        <TableItem index={index + 1} countdown={countdownItem} routerDetailCountdown={routerDetailCountdown} key={index} routerEditCountdown={routerEditCountdown} deleteCountdown={deleteCountdown} />
                                    )
                                })}
                            </tbody>
                        </Table>
                        {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                        <Nav>
                            <Pagination className="mb-2 mb-lg-0">
                                <Pagination.Prev>
                                    Previous
                                </Pagination.Prev>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item>4</Pagination.Item>
                                <Pagination.Item>5</Pagination.Item>
                                <Pagination.Next>
                                    Next
                                </Pagination.Next>
                            </Pagination>
                        </Nav>
                        <small className="fw-bold">
                            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
                        </small>
                    </Card.Footer> */}
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

function TableItem({ index, countdown, routerEditCountdown, deleteCountdown, routerDetailCountdown }) {
    return (
        <tr>
            <td>
                <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
            </td>
            <td>{countdown.title}</td>
            <td>{moment(countdown.startDate).format("HH:mm DD/MM/YYYY")}</td>
            <td>{moment(countdown.endDate).format("HH:mm DD/MM/YYYY")}</td>
            <td>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                        <span className="icon icon-sm">
                            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* <Dropdown.Item onClick={() => routerDetailCountdown(countdown)}  >
                            <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
                        </Dropdown.Item> */}
                        <Dropdown.Item onClick={() => routerEditCountdown(countdown)} >
                            <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                        </Dropdown.Item>
                        <Dropdown.Item className="text-danger" onClick={() => deleteCountdown(countdown._id)}  >
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
    );
}   
