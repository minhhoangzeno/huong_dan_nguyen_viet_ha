import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { SERVER } from '../../apis/API';
import '../../scss/countdown.scss';
import { detailCountdown } from '../../services/countdown.service';
export default ({ countdownId, setCountdownId, countdowns }) => {
    const [countdownLeft, setCountdownLeft] = useState([]);
    const [countdownRight, setCountdownRight] = useState([]);
    const [countdown, setCountdown] = useState();
    let [time, setTime] = useState(0);
    let date = new Date();
    const search = async () => {
        try {
            if (countdownId) {
                let resp = await detailCountdown(countdownId);
                if (resp) {
                    setCountdown(resp);
                    let respCountdownLeft = [];
                    let respCountdownRight = [];
                    resp.products.forEach((item, index) => {
                        if (index % 2 === 0) {
                            respCountdownLeft.push(item)
                        } else {
                            respCountdownRight.push(item)
                        }
                    })
                    setCountdownLeft(respCountdownLeft);
                    setCountdownRight(respCountdownRight);
                    setTime(moment(resp?.countdown.endDate).diff(moment(), 'seconds'))
                }
            }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countdownId]);
    let returnPercent = (product) => {
        if (countdown.total === 0) {
            return `0 %`
        } else {
            return `${(Number(product.votes.length) * 100 / countdown.total).toFixed(0)} %`
        }
    }
    let returnLeftIndex = (index) => {
        if (index === 0) {
            return 1
        } else if (index === 1) {
            return 3
        } else if (index === 2) {
            return 5
        } else if (index === 3) {
            return 7
        }
    }
    let returnRightIndex = (index) => {
        if (index === 0) {
            return 2
        } else if (index === 1) {
            return 4
        } else if (index === 2) {
            return 6
        } else if (index === 3) {
            return 8
        }
    }

    return (
        <>
            <div className="countdown-clock"
                style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
                    padding: 20
                }}
            >
                <div>
                    <h1 style={{ color: '#FFF', textAlign: 'left' }} >{countdown?.countdown.title}</h1>
                </div>
                <div>
                    <h2 style={{ color: '#FFF' }}>End Date: <Countdown date={Date.now() + (time ? time : 10000) * 1000} /> </h2>
                </div>
            </div>

            <div className="ranking__title">
                <select
                    value={countdownId}
                    onChange={e => setCountdownId(e.target.value)}
                    style={{ border: 'none', background: '#f5fbf8', fontSize: 20, fontWeight: '600', marginBottom: 30 }}
                >
                    {countdowns.length > 0 && countdowns.map((countdown, index) => {
                        return (
                            <option key={index} style={{ fontSize: 20, fontWeight: 'bold' }} value={countdown._id} >
                                {countdown?.title}
                            </option>
                        )
                    })}
                </select>
                <div className="current-time" style={{ display: 'flex', alignItems: 'center' }} >
                    <span className="tb5">{moment(date).format("HH:mm DD-MM-YYYY")}</span>
                    <svg style={{ width: 20, height: 20, marginLeft: 15, cursor: 'pointer' }}
                        onClick={() => {
                            search()
                        }}
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" />
                    </svg>
                </div>
            </div>

            <div className="ranking">
                <div className="ranking__list">
                    <div className="ranking__list--col left-col">
                        <ul>
                            {countdownLeft.map((item, index) => {
                                return (
                                    <li className="item-ranking" key={index} style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <div style={{ display: 'flex' }}>
                                            <div className="ranking-number">{returnLeftIndex(index)}</div>
                                            <div className="ranking-thumbnail">
                                                <img
                                                    src={`${SERVER.URL_IMAGE}${item.product.photoURL}`}
                                                    alt=""
                                                    height={150}
                                                />
                                            </div>
                                            <div className="ranking-name">
                                                <div className="song">{item?.product?.title}</div>
                                                <div className="artist">{item?.product?.author}</div>
                                            </div>
                                        </div>
                                        <div className="ranking-status">{returnPercent(item)}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="ranking__list--col right-col">
                        <ul>
                            {countdownRight.map((item, index) => {
                                return (
                                    <li className="item-ranking" key={index} style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <div style={{ display: 'flex' }}>
                                            <div className="ranking-number">{returnRightIndex(index)}</div>
                                            <div className="ranking-thumbnail">
                                                <img
                                                    src={`${SERVER.URL_IMAGE}${item.product.photoURL}`}
                                                    alt=""
                                                    height={150}
                                                />
                                            </div>
                                            <div className="ranking-name">
                                                <div className="song">{item?.product?.title}</div>
                                                <div className="artist">{item?.product?.author}</div>
                                            </div>
                                        </div>
                                        <div className="ranking-status">{returnPercent(item)}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}