import React from 'react';
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const history = useHistory();
    function startRegister() {
        history.push('/authenticate');
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Meethouse!" icon="logo">
                <p className={styles.text}>
                𝓒𝓸𝓷𝓼𝓲𝓭𝓮𝓻. 𝓢𝓱𝓪𝓹𝓮. 𝓘𝓷𝓯𝓵𝓾𝓮𝓷𝓬𝓮. 𝓘𝓷𝓼𝓹𝓲𝓻𝓮. 𝓢𝓱𝓲𝓷𝓮.
                </p>
                <div>
                    <Button onClick={startRegister} text="Let's Go" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                </div>
            </Card>
        </div>
    );
};

export default Home;
