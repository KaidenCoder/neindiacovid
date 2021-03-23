import React from 'react';
import styles from '../App.module.css'
import CoronaImage from '../images/image.png'
// import '../App.css';
import Tabular from '../table/tabular';
import Summary from '../summary/summary';


function Home() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={CoronaImage} alt='Corona' />
            </div>
            <h4 style={{ textAlign: 'center' }} className="display-6"> Northeast India Cases</h4>
            <div style={{ background: 'rgba(192,192,192,0.1)', marginTop: 20 }} className="alert container" role="alert">
                <h5 style={{ color: 'rgba(0,0,0,0.4)', fontFamily: 'Helvetica Narrow', fontWeight: 300 }}>Note: Total cases is calculated on given tabular information</h5>
            </div>

            <Summary />

            {<Tabular /> || 'loading...'}


            <div className="footer-copyright text-center py-3">

                © 2020 Copyright:
    <a href="https://www.linkedin.com/in/khaidemsandip/"> Kurosaki. </a>
       Powered by <a href="https://www.postman.com/">POSTMAN </a>
            </div>

        </>
    );
}

export default Home;
