import { Box } from '@mui/material';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCrown } from 'react-icons/fa';
import Link from 'next/link';

import Search from '../Search/Search';

export default function Appbar({ height, show=true }) {

    return (
        <Box sx={{ height: height, borderBottom: '0.5px solid #dbdbdb', backgroundColor: 'white' }} className=''>
            <Container>
                <Row style={styles.rowStyles}>
                    <Col className="d-none d-md-block" md="5">
                        <Search />
                    </Col>
                    <Col style={styles.colStyles}>
                        <button style={styles.upbtn}>
                            <FaCrown color='orange' size={20} style={{ marginRight: 7 }} />
                            Upgrade Plan
                        </button>
                        <Link href='/scripts/new' type="button" style={styles.crtbtn}>Create New Script</Link>
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}

const styles = {
    rowStyles: {
        height: 60,
        margin: 0,
        display: 'flex',
        alignItems: 'center'
    },
    colStyles: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    crtbtn: {
        background: 'linear-gradient(45deg, #0356e4 45%, #1568f5 100%)',
        color: 'white',
        height: 40,
        marginLeft: 25,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        fontSize: 15,
        textDecoration: 'none'
    },
    upbtn: {
        display: 'flex',
        alignItems: 'center'
    }
}