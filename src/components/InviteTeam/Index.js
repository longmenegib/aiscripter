import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from './invitemodal.module.css';
import img from './../../assets/team.jpg';

export default function InviteTeam(props) {
    const [show, setShow] = useState(props.show);

    return(
        <Modal style={{ zIndex: 10000, backdropFilter: 'blur(3px)' }} backdrop="static" show={props.show}>
            <div style={{ backgroundImage: `url(${img.src})` }} className={styles.head}>
                <button onClick={() => setShow(false)}>
                    <AiFillCloseCircle />
                </button>
            </div>
            <div className={styles.body}>
                <h5 className={styles.heading}>Build Together</h5>
                <p className={styles.txt}>We know that collaborating on a screenplay can be hard. But we’re working hard to create the best possible experience for all our creators. With that in mind, we are working on a team collaboration features so you can connect and work together from anywhere.</p>
            </div>
        </Modal>
    )
}