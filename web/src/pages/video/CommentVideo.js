import React, { useEffect, useState } from 'react';
import '../../scss/blog.scss';
import avatar from '../../assets/img/profile-cover.jpg';
import { useDispatch } from 'react-redux';
import { addCommentByPostThunk, getCommentByPostThunk } from '../../redux/commentSlice';
import moment from 'moment';
import { SERVER } from '../../apis/API';
export default ({ videoId }) => {
  const [comments, setComments] = useState([]);
  let dispatch = useDispatch();
  const search = async () => {
    let data = await dispatch(getCommentByPostThunk(videoId));
    if (data) {
      setComments(data)
    }
  }
  useEffect(() => {
    search() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId])
  return (
    <>
      <div className='comment__section' >
        {comments.map((comment, index) => {
          return <div className='comment' key={index} >
            <div className='comment__img' >
              <img src={comment?.createdBy?.photoURL ? `${SERVER.URL_IMAGE}${comment?.createdBy?.photoURL}` : avatar} alt='' width={40} height={40} style={{ borderRadius: 20 }} />
            </div>
            <div style={{ width: '90%', marginLeft: 30 }} >
              <div style={{ fontWeight: '600' }} >
                {comment?.createdBy?.fullName}
              </div>
              <div className='comment__content' >
                {comment?.title}
              </div>
              <div className='comment__time' >
                {moment(comment?.createdAt).format("HH:mm DD-MM-YYYY")}
              </div>
            </div>
          </div>
        })}
      </div>

      <AddComment videoId={videoId} search={search} />

    </>
  )
}


function AddComment({ videoId, search }) {
  const [title, setTitle] = useState("")
  let dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("user"));
  let addPost = async () => {
    let data = await dispatch(addCommentByPostThunk({
      typeId: videoId,
      title
    }));
    if (data) {
      search()
      setTitle("")
    }
  }
  return (
    <div className='comment__add'>
      <div className='comment__add--img'>
        <img src={user?.photoURL ? `${SERVER.URL_IMAGE}${user.photoURL}` : avatar} alt='' width={40} height={40} style={{ borderRadius: 20 }} />
      </div>
      <textarea className='comment__add--content'
        placeholder='Comment ...'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <div className='comment__add--btn'
        onClick={addPost}
      >
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
      </div>
    </div>
  )
}