import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';
import '../../scss/style.scss';
export default () => {
    const history = useHistory();
    return (
        <>
            <section className="banner">
                <div className="textbox">
                    <h1>KFes - Music For Everyone</h1>
                    <p>KFes brings you all:</p>
                    <ul>
                        <li>Assionate performance stages,</li>
                        <li>Monthly awards for global fans,</li>
                        <li>
                            Annual awards ceremonies for outstanding K-pop artists and music
                            products.
                        </li>
                    </ul>
                    <p />
                    <div className="btn-visit" 
                    onClick={() => history.push(Routes.Countdown.path)}
                    >
                       
                        <b>Visit Us To Know More</b>
                    </div>
                </div>
            </section>

        </>

    )
}