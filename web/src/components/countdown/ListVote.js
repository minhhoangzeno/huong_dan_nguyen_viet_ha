import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { checkVoteUserThunk } from '../../redux/countdownSlice';
import '../../scss/countdown.scss';
import { detailCountdown } from '../../services/countdown.service';
import ModalVote from './ModalVote';
export default ({ countdownId }) => {
    const [countdown, setCountdown] = useState();
    const search = async () => {
        let resp = await detailCountdown(countdownId);
        if (resp) {
            setCountdown(resp);
        }
    }
    const [check, setCheck] = useState(false);
    let dispatch = useDispatch();
    let checkVoted = async () => {
        let resp = await dispatch(checkVoteUserThunk({
            countdown: countdownId
        }))
        setCheck(resp)
    }
    useEffect(() => {
        search()
        checkVoted() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countdownId]);

    return (
        <>
            <div className="voting__list">
                <div className='container' >
                    <div className='row' >
                        {countdown?.products?.length > 0 &&
                            countdown?.products?.map((item, index) => {
                                return (
                                    <VoteItem key={index} item={item.product} check={check} setCheck={setCheck} countdownId={countdownId} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

function VoteItem({ item, countdownId , check, setCheck}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let { addToast } = useToasts();
    return (

        <>
            <ModalVote show={show} setCheck={setCheck} handleClose={handleClose} countdownId={countdownId} productId={item._id} />
            <div className='col-3' >
                <div className="voting__list--item" style={{ marginBottom: 15 }} >
                    <div className="item-image">
                        <img
                            src={`${SERVER.URL_IMAGE}${item.photoURL}`}
                            alt=""
                        />
                        <div className="modal-voting">
                            <div className="dark-bg" />
                            <div className="voting-btn"
                            style={{padding:'8px 24px',fontSize:12}}
                                onClick={() => {
                                    check ? addToast("Bạn đã vote cho sự kiện rồi!", { appearance: 'success', autoDismiss: 1000 }) : setShow(true)
                                }}
                            >Vote now</div>
                        </div>
                    </div>
                    <div className="item-content">
                        <div className="artist">{item?.title}</div>
                        <div className="name-song">{item?.author}</div>
                    </div>
                </div>
            </div>
        </>
    )
}