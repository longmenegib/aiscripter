import React, { useState, useEffect } from "react";
import AppLayout from "../components/Container";
import { Container, Row, Col } from 'react-bootstrap';
import InviteTeam from "../components/InviteTeam/Index";
import Image from 'next/image';

import { AiFillCamera, AiFillCheckCircle, AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";

import styles from './account.module.css';

export default function Account() {
    // const [user, setUser] = useState({});
    const [user, setUser] = useState({
        name: "Nkweti Awa",
        email: { address: "awankweti@infinitystdio.com", verified: true },
        company: "InfinityStdio LLC"
    });
    const [show, setShow] = useState(false);
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        // fetch the user's information here
        /**
         * { name, pic, email: { address: '', verified: true || false }, company, country, address }
         */
    }, []);

    return(
        <AppLayout>
            <section className={styles.header}></section>
            <Container>
                <Row className={styles.body}>
                    <Col md="4" className={styles.userarea}>
                        <div className={styles.pic}>
                            <Image className={styles.img} />
                            <label className={styles.editpic}>
                                <AiFillCamera />
                            </label>
                        </div>
                        <div className={styles.namearea}>
                            <span>{user.name}</span>
                            <span className="small text-gray-500">{user.company}</span>
                            <div className={styles.hr} />
                        </div>
                        <div>
                            <div className={styles.proprow}>
                                <div className="d-flex flex-column">
                                    <span className={styles.label}>Email Address</span>
                                    <span className="small text-gray-500">{user?.email?.address}</span>
                                </div>
                                {user?.email ? <AiFillCheckCircle color="#03a96a" size={22} /> : <AiFillCloseCircle color="#ED254E" size={22} />}
                            </div>
                            <div className={styles.proprow}>
                                <div className="d-flex flex-column">
                                    <span className={styles.label}>Team Size</span>
                                    <span className="small text-gray-500">{user.company}</span>
                                </div>
                                <span className="big">1</span>
                            </div>
                            <button onClick={() => setShow(!show)} className={styles.invite}>
                                <AiFillInfoCircle color="#ffcb05" />
                                <span className='ml-2'>Invite team members</span>
                            </button>
                        </div>
                    </Col>
                    <Col md="7" className={styles.main}>
                        <form className={styles.regform} autoCapitalize='off none' autoComplete='none'>
                            <div className={styles.insect}>
                            <div className={styles.afield}>
                                <label className={styles.label}>Company</label>
                                <input value={company} onChange={e => setCompany(e.target.value)} type="text" placeholder='Company' className={styles.inptxt} /> 
                            </div>
                            <div className={styles.afield}>
                                <label className={styles.label}>Country</label>
                                <input type="text" placeholder="Country" className={styles.inptxt} /> 
                            </div>
                            <div className={styles.afield}>
                                <label className={styles.label}>Address</label>
                                <textarea value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder='Address' className={styles.inptxt} style={{ height: 70, resize: 'none' }}></textarea> 
                            </div>
                            <div className={styles.afield}>
                                <button className={styles.crtbtn}>Update Account</button>
                            </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <InviteTeam show={show} />
        </AppLayout>
    );
}