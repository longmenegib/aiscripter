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
        <section style={{ width: '100%', padding: 0, backgroundColor: 'pink' }}>
          <div className={styles.main}>
            <Row style={{ margin: 0 }}>
              <Col style={{ backgroundImage: `url(${side.src})` }} md="4" className={["d-none d-md-block", styles.odd ]}>
                <div className={styles.overlay}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{  }}>
                      <img src='/logo.svg' style={{ marginTop: 3, height: 100, width: 200 }} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="8" className={styles.right}>
                <Container>
                  <div className={styles.header}>
                    <div style={{ flex: 1 }}>
                      <h4>Welcome,</h4>
                      <p>We are happy to have you. Create an account now to start sharing.</p>
                    </div>
                    {/* <button className="backbtn" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faX} /></button> */}
                  </div>
                  <form className={styles.regform} autoCapitalize='off none' autoComplete='none'>
                    <div className={styles.insect}>
                      <div className={styles.afield}>
                        <label className={styles.label}>Username or Email</label>
                        <input value={email} onChange={handleEmailChange} type="text" placeholder='john.doe' className={styles.inptxt} /> 
                      </div>
                      <div className={styles.afield}>
                        <label className={styles.label}>Password</label>
                        <input value={password} onChange={handlePasswordChange} type="password" placeholder='********' className={styles.inptxt} /> 
                      </div>
                      <div className={['d-flex', styles.reverser]} style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
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

    // return (
    //     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //         <Head>
    //             <title>Login - AIScripter</title>
    //             <link rel="icon" href="/favicon.ico" />
    //         </Head>
    //         <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //             <img
    //                 className="mx-auto h-12 w-auto"
    //                 src="/logo.svg"
    //                 alt="AIScripter logo"
    //             />
    //             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //                 Log in to your account
    //             </h2>
    //             {/* <p className="mt-2 text-center text-sm text-gray-600 max-w">
    //                 Or{' '}
    //                 <Link href="/signup">
    //                     <span className="font-medium text-indigo-600 hover:text-indigo-500">
    //                         create an account
    //                     </span>
    //                 </Link>
    //             </p> */}
    //         </div>
    //         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //             <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //                 <form className="space-y-6" onSubmit={handleSubmit}>
    //                     <div>
    //                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //                             Email address
    //                         </label>
    //                         <div className="mt-1">
    //                             <input
    //                                 id="email"
    //                                 name="email"
    //                                 type="email"
    //                                 autoComplete="email"
    //                                 required
    //                                 value={email}
    //                                 onChange={handleEmailChange}
    //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                             />
    //                         </div>
    //                     </div>

    //                     <div>
    //                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //                             Password
    //                         </label>
    //                         <div className="mt-1">
    //                             <input
    //                                 id="password"
    //                                 name="password"
    //                                 type="password"
    //                                 autoComplete="current-password"
    //                                 required
    //                                 value={password}
    //                                 onChange={handlePasswordChange}
    //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                             />
    //                         </div>
    //                     </div>

    //                     <div className="flex items-center justify-between">
    //                         <div className="flex items-center">
    //                             <input
    //                                 id="remember-me"
    //                                 name="remember-me"
    //                                 type="checkbox"
    //                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    //                             />
    //                             <label htmlFor="remember-me" className="text-sm font-medium text-gray-700 ml-2">Remember me</label>
    //                         </div>
    //                     </div>
    //                     <div className="flex items-center justify-center mt-6">
    //                         <a href='/dashboard' type="button" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    //                             Log in
    //                         </a>
    //                     </div>
    //                 </form>
    //                 <p className="mt-4 text-center text-gray-500 text-xs">
    //                     <a className="underline hover:text-gray-900" href="#">
    //                         Forgot your password?
    //                     </a>
    //                 </p>
    //                 <p className="mt-1 text-center text-gray-500 text-xs">
    //                     Don't have an account?
    //                     <a className="underline hover:text-gray-900" href="/registration">
    //                         Sign up
    //                     </a>
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // )
}

