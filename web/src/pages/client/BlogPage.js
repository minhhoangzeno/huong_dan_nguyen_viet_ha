import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { getBlogThunk } from '../../redux/blogSlice';
import { Routes } from '../../routes';
import '../../scss/pagination.scss';

export default () => {
  const [blogs, setBlogs] = useState();
  let dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const search = async () => {
    let resp = await dispatch(getBlogThunk(6 * (activePage - 1)));
    if (resp) {
      console.log(resp)
      setBlogs(resp)
    }
  }
  let history = useHistory();
  useEffect(() => {
    search() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage])
  return (
    <>
      <Header />
      <div className="content__delight">
        <div className="title" style={{ marginBottom: 50, marginTop: 40 }} >
          <h1>
            <span style={{ letterSpacing: 3 }} >Read new blog!</span>
          </h1>
        </div>
        <div className="wrap container mb-5" >
          <div className="row__bottom row">
            {blogs && blogs?.data?.map((item, index) => {
              return (
                <div className="item col-4" key={index} style={{ marginTop: 30 }} >
                  <div onClick={() => {
                    history.push({
                      pathname: Routes.BlogDetail.path,
                      state: item
                    })
                  }} >
                    <div className="item__image">
                      <img src={`${SERVER.URL_IMAGE}${item.photoURL}`} alt="" />
                      <div className='item__image--overlay' ></div>
                      
                    </div>
                  </div>
                  <div className="item__content">
                    <div className="date">{moment(item.createdDate).format("DD-MM-YYYY")}</div>
                    <div className="title-video">
                      {item?.title}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='wrapper-paginate' >
              {blogs && <Pagination
                activePage={activePage}
                itemsCountPerPage={6}
                totalItemsCount={blogs?.totalPage}
                pageRangeDisplayed={3}
                onChange={value => setActivePage(value)}
              />}
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}