import { Card, Col, Container, Row, Button } from '@themesberg/react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { deleteBlogThunk, getBlogThunk } from '../../redux/blogSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    let blog = useSelector(state => state.blog.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let deleteBlog = async (blogId) => {
        await dispatch(deleteBlogThunk(blogId));
        dispatch(getBlogThunk());
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
                {blog && blog.map((blogItem, index) => {
                    return (
                        <BlogItem blog={blogItem} key={index} deleteBlog={deleteBlog} 
                        routerDetailBlog={routerDetailBlog} routerEditBlog={routerEditBlog} />
                    )
                })}
            </Row>
        </Container>
    )
}

function BlogItem({ blog, deleteBlog, routerDetailBlog,routerEditBlog }) {
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