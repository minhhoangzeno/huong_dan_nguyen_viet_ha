import React from 'react';
import HomeBlog from '../../components/home/HomeBlog';
import HomeContentDelight from '../../components/home/HomeContentDelight';
import HomeSlider from '../../components/home/HomeSlider';
import HomeVoteRank from '../../components/home/HomeVoteRank';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Banner from '../../components/layout/Banner'
import '../../scss/home.scss';


export default () => {
    return(
        <>
            <Header />
            <Banner />
            <section className='content' >
                <HomeSlider />
                <HomeBlog />
                <HomeVoteRank />
                <HomeContentDelight />
              
            </section>
            <Footer />
        </>
    )
}