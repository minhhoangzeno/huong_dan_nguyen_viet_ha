import { Card, Container, Row, Table } from '@themesberg/react-bootstrap';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { getHistoryVoteUserThunk } from '../../redux/voteUserSlice';

export default () => {
    let voteUser = useSelector(state => state.voteUser.data);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHistoryVoteUserThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <Header />
            <div style={{ padding: 150 }} >
                <Container>
                    <Row>
                        <Card border="light" className="table-wrapper table-responsive shadow-sm">
                            <Card.Body className="pt-0">
                                <Table hover className="user-table align-items-center">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom">#</th>
                                            <th className="border-bottom">Title Countdown</th>
                                            <th className="border-bottom">Title Product</th>
                                            <th className="border-bottom">Author Product</th>
                                            <th className="border-bottom">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {voteUser && voteUser.map((item, index) => {
                                            return (
                                                <TableItem index={index + 1} voteUser={item} key={index} />
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

function TableItem({ index, voteUser }) {
    return (
        <tr>
            <td>
                <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
            </td>
            <td>{voteUser.productCountDown.title}</td>
            <td>{voteUser.productCountDown.product.title}</td>
            <td>{voteUser.productCountDown.product.author}</td>
            <td>{moment(voteUser.createdAt).format("HH:mm DD-MM-YYYY")}</td>
        </tr>
    );
}   
