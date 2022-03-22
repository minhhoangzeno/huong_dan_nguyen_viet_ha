import React, { useEffect, useState } from 'react';
import '../../scss/countdown.scss';
import { getCountdown } from '../../services/countdown.service';
import Countdown from './Countdown';
export default function CountdownRanking() {
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
            <div className="ranking">
                <Countdown countdownId={countdownId} setCountdownId={setCountdownId} countdowns={countdowns} />
            </div>

        </>
    )
}