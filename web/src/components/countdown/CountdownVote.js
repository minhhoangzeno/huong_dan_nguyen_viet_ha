import React, { useEffect, useState } from 'react';
import '../../scss/countdown.scss';
import { getCountdown } from '../../services/countdown.service';
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
    }, [])
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
                        style={{ background: '#f5f8fb', border: 'none', fontSize: 24 ,fontWeight:'600'}}
                    >
                        {countdowns.length > 0 && countdowns.map((countdown, index) => {
                            return (
                                <option key={index} style={{ fontSize: 30, fontWeight: 'bold' }} value={countdown._id} >
                                    {countdown?.title}
                                </option>
                            )
                        })}
                    </select>
                </div>
                {countdownId && <ListVote countdownId={countdownId} />}

            </div>

        </>
    )
}