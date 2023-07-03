import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './search.module.css'

export default function Search() {
    const [keyword, setKeyword] = useState("");

    return(
        <section>
            <div className={styles.inp}>
                <input type="search" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Search' className={styles.input} />
                <button className={styles.srcbtn}>
                    <FaSearch />
                </button>
            </div>
        </section>
    )
}