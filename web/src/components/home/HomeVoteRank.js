import React, { useEffect, useState } from 'react';
import { SERVER } from '../../apis/API';
import '../../scss/home.scss'
import { detailCountdown, getCountdown } from '../../services/countdown.service';
export default function HomeVoteRank() {

    const [img, setImg] = useState()
    const [countdown, setCountdown] = useState();
    let search = async () => {
        let data = await getCountdown();
        if (data) {
            let resp = await detailCountdown(data[0]?._id);
            setCountdown(resp);
            setImg(resp.products[0]?.product?.photoURL);
        }
    }
    useEffect(() => {
        search()
    }, [])
    let returnPercent = (product) => {
        if (countdown.total === 0) {
            return `0 %`
        } else {
            return `${(Number(product.votes.length) * 100 / countdown.total).toFixed(0)} %`
        }
    }
    return (
        <>
            <div className="content__voterank--panel">
                <div className="title" style={{ marginBottom: 30, marginTop: 50 }}>
                    <h1>
                        <span style={{ letterSpacing: 3 }}>Vote &amp; Rank</span>
                    </h1>
                </div>
                <div className='vote-rank'>
                    <div className='container' >
                        <div className='row' >
                            <div className='col-6 vote-rank__img' >
                                <img alt=''
                                    src={`${SERVER.URL_IMAGE}${img}`}
                                />
                            </div>
                            <div className='col-6' >
                                <ul className='vote-rank__menu' >
                                    {countdown?.products?.map((item, index) => {
                                        return (
                                            <li className='vote-rank__menu--item' key={index}
                                            onClick={() => {
                                                setImg(item.product.photoURL)
                                            }}
                                            >
                                                <div className='product__content' >
                                                    <div className='product__content--index'>
                                                        {index + 1}
                                                    </div>
                                                    <div className='product__content--main'>
                                                        <p>{item?.product?.title}</p>
                                                        <p>{item?.product?.author}</p>
                                                    </div>
                                                </div>
                                                <div className='numberVote' >
                                                    {returnPercent(item)}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}