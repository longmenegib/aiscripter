import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AppLayout from '../components/Container';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineEye, AiOutlineUser } from "react-icons/ai";

import styles from './explore.module.css';
import img from './../assets/img3.jpg';

export default function Explore() {
    const [selected, setSelected] = useState([]);
    const tags = [
        'Entertainment',
        'Marketing',
        'Informative',
        'Documentary',
        'Commedy',
        'Tutorials',
        'Horror'
    ];
    const colors = [
        'rgba(0,0,250,0.05)',
        '#fff4cd',
        '#fff2f4',
        '#e0cbea',
        '#c5eee1',
        '#aeccff'
    ]

    const [data, setData] = useState([
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
        { title: 'How to become as awesome as Mr. Infinity', pic: '', tag: 'Informative', duration: '4 Minutes', user: 'Infinity', views: 20032 },
    ])

    const handleTags = (tag) => {
        if ( selected.includes( tag )) {
            setSelected( selected.filter( i => i !== tag ));
        } else {
            setSelected([ ...selected, tag ]);
        }
    }

  return (
    <AppLayout>
        <Head>
            <title>Explore</title>
        </Head>
        <Container>
            <div className={styles.header}>
                <h5>Trending Now</h5>
                <Link href='/explore/art' type="button" style={{ fontFamily: 'var(--font-mono)' }} className={styles.link}>Explore Art <AiOutlineArrowRight /></Link>
            </div>
            <Row className={styles.firstrow}>
                {tags.map((i, index) => selected.includes(i) ? <button onClick={() => handleTags(i)} key={index} className={styles.atag}>{i}</button> : <button onClick={() => handleTags(i)} key={index} className={styles.tag}>{i}</button>)}
            </Row>

            <Row className={styles.main}>
                {data.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <Image src={img} className={styles.pic} />
                        <span className={styles.cardtag} style={{ backgroundColor: colors[(Math.random() * colors.length) | 0] }}>{item.tag}</span>
                        <div className={styles.mainsection}>
                            <span className={styles.title}>{item.title}</span>
                            <div style={{ marginTop: 5, display: 'flex' }}>
                                <span className={styles.sett}><AiOutlineClockCircle style={{ marginRight: 5 }} /> {item.duration}</span>
                            </div>
                        </div>
                        <div className={styles.bottom} style={{ padding: '5px 5px' }}>
                            <div className={styles.bottom}>
                                <AiOutlineUser style={{ marginRight: 5 }} />
                                <span>{item.user}</span>
                            </div>
                            <div className={styles.bottom}>
                                <AiOutlineEye style={{ marginRight: 5 }} />
                                <span>{item.views}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Row>
        </Container>
    </AppLayout>
  )
}
