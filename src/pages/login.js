import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import styles from './login.module.css';

import { Container, Row, Col } from 'react-bootstrap';
import side from './../assets/img4.jpg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle login logic
    };


    return(
        <section style={{ width: '100%', padding: 0 }}>
          <Head>
            <title>Sign In - AIScripter</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <Row style={{ margin: 0 }}>
              <Col style={{ backgroundImage: `url(${side.src})` }} md="4" className={["d-none d-md-block", styles.odd ]}>
                <div className={styles.overlay}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/">
                      <img src='/logo.svg' style={{ marginTop: 3, height: 100, width: 200 }} />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="8" className={styles.right}>
                <Container>
                  <div className={styles.header}>
                    <div style={{ flex: 1 }}>
                      <h4>Welcome Back,</h4>
                      <p>Sign into your account to continue creating amazing video scripts.</p>
                    </div>
                  </div>
                  <form className={styles.regform} autoCapitalize='off none' autoComplete='none'>
                    <div className={styles.insect}>
                      <div className={styles.afield}>
                        <label className={styles.label}>Email Address</label>
                        <input value={email} onChange={handleEmailChange} type="text" placeholder='john.doe@great-company.com' className={styles.inptxt} /> 
                      </div>
                      <div className={styles.afield}>
                        <label className={styles.label}>Password</label>
                        <input value={password} onChange={handlePasswordChange} type="password" placeholder='********' className={styles.inptxt} /> 
                      </div>
                      <div className={styles.reverser} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className={styles.crtxt} style={{ margin: 0, padding: 0, flex: 1 }}>Don't have an account yet? <Link href="/registration">Create Account</Link>.</span>
                        <button onClick={handleSubmit} className={styles.crtbtn}>Sign In</button>
                      </div>
                    </div>
                  </form>
                </Container>
              </Col>
            </Row>
          </div>
        </section>
    )
}

