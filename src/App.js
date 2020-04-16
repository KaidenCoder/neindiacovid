import React from 'react';
import styles from './App.module.css'
import CoronaImage from './images/image.png'
import './App.css';
import Tabular from './table/tabular';

function App() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={CoronaImage} alt='Corona' />
      </div>
      <h4 style={{ textAlign: 'center' }} className="display-6"> Northeast India Cases</h4>
      <br></br>

      <Tabular />

      <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.linkedin.com/in/khaidemsandip/"> Kurosaki</a>
      </div>
    </>
  );
}

export default App;
