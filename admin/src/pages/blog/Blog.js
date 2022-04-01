import { Card, Col, Container, Row, Button } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { deleteBlogThunk, getBlogThunk } from '../../redux/blogSlice';
import { Routes } from "../../routes";
import Pagination from "react-js-pagination";
import '../../scss/pagination.scss'
export default () => {
    let history = useHistory();
    let blog = useSelector(state => state.blog.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    useEffect(() => {
        dispatch(getBlogThunk(6 * (activePage - 1))) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage]);

    let deleteBlog = async (blogId) => {
        await dispatch(deleteBlogThunk(blogId));
        dispatch(getBlogThunk(0));
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }

    let routerDetailBlog = (data) => {
        history.push({
            pathname: Routes.BlogDetail.path,
            state: data
        })
    }
    let routerEditBlog = (data) => {
        history.push({
            pathname: Routes.BlogEdit.path,
            state: data
        })
    }
    return (
        <Container>
            <Row className="mb-4" >
                <Col>
                    <Button variant="warning" onClick={() => history.push(Routes.BlogAdd.path)} >Add</Button>
                </Col>
            </Row>
            <Row>
                {blog && blog.data.map((blogItem, index) => {
                    return (
                        <BlogItem blog={blogItem} key={index} deleteBlog={deleteBlog}
                            routerDetailBlog={routerDetailBlog} routerEditBlog={routerEditBlog} />
                    )
                })}
            </Row>
            <div className='wrapper-paginate' >
                {blog && <Pagination
                    activePage={activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={blog?.totalPage}
                    pageRangeDisplayed={3}
                    onChange={value => setActivePage(value)}
                />}
            </div>
        </Container>
    )
}

function BlogItem({ blog, deleteBlog, routerDetailBlog, routerEditBlog }) {
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="mt-4" >
                <Card.Img variant="top" src={`${SERVER.URL_IMAGE}${blog.photoURL}`} />
                <Card.Body>
                    <Card.Title className="custom-title" >{blog?.title}</Card.Title>
                    <Card.Text className="custom-description" >
                        {blog?.metaDescription}
                    </Card.Text>
                    <Card.Subtitle className="d-flex justify-content-between" >
                        <Button variant="primary" onClick={() => routerDetailBlog(blog)} >Detail</Button>
                        <Button variant="secondary" onClick={() => routerEditBlog(blog)} >Edit</Button>
                        <Button variant="danger" onClick={() => deleteBlog(blog._id)} >Delete</Button>
                    </Card.Subtitle>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{blog?.createdBy}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}