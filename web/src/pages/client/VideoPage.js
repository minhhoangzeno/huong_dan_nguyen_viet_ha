import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { getVideoByHomeThunk } from '../../redux/videoSlice';
import { Routes } from '../../routes';
import '../../scss/pagination.scss';

export default () => {
  const [videos, setVideos] = useState();
  let dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const search = async () => {
    let resp = await dispatch(getVideoByHomeThunk(6 * (activePage - 1)));
    if (resp) {
      setVideos(resp)
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
            <span style={{ letterSpacing: 3 }} >Look Video more and more!</span>
          </h1>
        </div>
        <div className="wrap container mb-5" >
          <div className="row__bottom row">
            {videos && videos?.data?.map((item, index) => {
              return (
                <div className="item col-4" key={index} style={{ marginTop: 30 }} >
                  <div onClick={() => {
                    history.push({
                      pathname: Routes.VideoDetail.path,
                      state: item
                    })
                  }} >
                    <div className="item__image">
                      <img src={`${SERVER.URL_IMAGE}${item.photoURL}`} alt="" />
                      <div className='item__image--overlay' ></div>
                      <div className="icon">
                        <svg viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                          />
                        </svg>
                      </div>
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
              {videos && <Pagination
                activePage={activePage}
                itemsCountPerPage={6}
                totalItemsCount={videos?.totalPage | 7}
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