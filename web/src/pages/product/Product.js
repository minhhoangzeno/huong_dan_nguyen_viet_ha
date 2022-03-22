import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Dropdown, Table, Container, Row , Col} from '@themesberg/react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { deleteProductThunk, getProductThunk } from '../../redux/productSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    let product = useSelector(state => state.product.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let deleteProduct = async (productId) => {
        await dispatch(deleteProductThunk(productId));
        dispatch(getProductThunk());
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }

    let routerEditProduct = (data) => {
        history.push({
            pathname: Routes.ProductEdit.path,
            state: data
        })
    }

    return (
        <>
            <Container>
                <Row className="mb-4" >
                    <Col>
                        <Button variant="warning" onClick={() => history.push(Routes.ProductAdd.path)} >Add</Button>
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
                                        <th className="border-bottom">Author</th>
                                        <th className="border-bottom">Image</th>
                                        <th className="border-bottom">Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product && product.map((productItem, index) => {
                                        return (
                                            <TableItem index={index + 1} product={productItem} key={index} routerEditProduct={routerEditProduct} deleteProduct={deleteProduct} />
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
        </>
    )
}


function TableItem({ index, product, routerEditProduct, deleteProduct }) {
    return (
        <>
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
                </td>
                <td>{product.title}</td>
                <td>{product.author}</td>
                <td>
                    <img src={`${SERVER.URL_IMAGE}${product.photoURL}`} alt="" width={70} />
                </td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                            <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => routerEditProduct(product)} >
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => deleteProduct(product._id)}  >
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>

            </tr>
        </>
    );
}   
