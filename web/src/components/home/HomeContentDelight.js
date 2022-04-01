import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import { getVideoThunk } from '../../redux/videoSlice';
import { Routes } from '../../routes';
export default function HomeContentDelight() {
  const [videoTop, setVideoTop] = useState();
  const [videoBottom, setVideoBottom] = useState();
  let dispatch = useDispatch()
  const search = async () => {
    let resp = await dispatch(getVideoThunk(0));
    if (resp) {
      let respVideoTop = [];
      let respVideoBottom = [];
      resp.data.forEach((item, index) => {
        if (index < 2) {
          respVideoTop.push(item)
        } else {
          respVideoBottom.push(item)
        }
      })
      setVideoTop(respVideoTop);
      setVideoBottom(respVideoBottom)
    }
  }
  let history = useHistory();
  useEffect(() => {
    search() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className="content__delight">
        <div className="title" style={{ marginBottom: 50, marginTop: 40 }} >
          <h1>
            <span style={{ letterSpacing: 3 }} >Discover your delight</span>
          </h1>
        </div>
        <div className="wrap">
          <div className="row__top">
            {videoTop && videoTop.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div onClick={() => {
                    history.push({
                      pathname: Routes.VideoDetail.path,
                      state: item
                    })
                  }} >
                    <div className="item__image">
                      <div className='item__image--overlay' ></div>
                      <img src={`${SERVER.URL_IMAGE}${item.photoURL}`} alt="" />
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
                    <div className="title-video">{item?.title}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="row__bottom">
            {videoBottom && videoBottom.map((item, index) => {
              return (
                <div className="item" key={index} >
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
        </div>
      </div>

    </>
  )
}