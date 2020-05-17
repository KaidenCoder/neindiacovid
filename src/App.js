import React from 'react';
import styles from './App.module.css'
import CoronaImage from './images/image.png'
import './App.css';
import Tabular from './table/tabular';
import Summary from './summary/summary';


function App() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={CoronaImage} alt='Corona' />
      </div>
      <h4 style={{ textAlign: 'center' }} className="display-6"> Northeast India Cases</h4>
      {/* <h6 style={{ textAlign: 'center' }} > <button type="button" className="btn btn-light"><a href="https://covid19worldstats.netlify.app/">Check World cases</a></button></h6>
      <h6 style={{ textAlign: 'center' }} > <button type="button" className="btn btn-light"><span style={{ color: 'rgb(0,0,0,0.4)' }}>Check Total India Cases</span><a href="https://covidindiastats.netlify.app/"> (Link)</a></button></h6> */}

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

export default App;
