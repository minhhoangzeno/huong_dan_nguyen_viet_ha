import React from 'react';
import CountdownRanking from '../../components/countdown/CountdownRanking';
import CountdownVote from '../../components/countdown/CountdownVote';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

export default function CountdownPage() {
    
    return (
        <>
            <Header />
            <section className="countdown-page">
                <div className="big-wrapper">
                    <h1 className="title">M COUNTDOWN</h1>
                    <CountdownRanking />
                    <CountdownVote />
                </div>
            </section>
            <Footer />
        </>
    )
}