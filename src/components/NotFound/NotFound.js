import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        
        <div className={styles.error}>
            <span className={styles.code}>404</span>
            <span className={styles.message}>Sorry, we can't find the page you want.</span>
            <Link to="/"><Button variant="outlined">Go To Home</Button></Link>
        </div>

    </div>
  )
}

export default NotFound;