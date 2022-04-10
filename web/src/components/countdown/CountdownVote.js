import React, { useEffect, useState } from 'react';
import '../../scss/countdown.scss';
import { getCountdown } from '../../services/countdown.service';
import CommentCountdown from './CommentCountdown';
import ListVote from './ListVote';
export default function CountdownVote() {
    const [countdowns, setCountdowns] = useState([]);
    const [countdownId, setCountdownId] = useState();
    let search = async () => {
        let data = await getCountdown()
        setCountdowns(data);
        setCountdownId(data[0]?._id);
    }
    useEffect(() => {
        search()
    }, []);
    const [showComment, setShowComment] = useState(false)
    return (
        <>
            <div className="voting">
                <div className="voting__title">
                    <h2 className="title-section">Vote & Rank</h2>
                </div>
                <div className="notice">
                    <select
                        value={countdownId}
                        onChange={e => setCountdownId(e.target.value)}
                        style={{ background: '#f5f8fb', border: 'none', fontSize: 20, fontWeight: '600' }}
                    >
                        {countdowns.length > 0 && countdowns.map((countdown, index) => {
                            return (
                                <option key={index} style={{ fontSize: 20, fontWeight: 'bold' }} value={countdown._id} >
                                    {countdown?.title}
                                </option>
                            )
                        })}
                    </select>
                </div>
                {countdownId && <ListVote countdownId={countdownId} />}

            </div>

            <div>
                <div onClick={() => setShowComment(!showComment)} style={{ display: 'flex', cursor: 'pointer',alignItems:'center' }} >
                    <h3>Comment</h3><div>
                        {showComment ? <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                        </svg> : <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>}
                    </div>
                </div>
                {showComment && <CommentCountdown countdownId={countdownId} />}
            </div>
        </>
    )
}