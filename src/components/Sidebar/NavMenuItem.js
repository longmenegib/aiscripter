import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useRouter } from "next/router";

import styles from './menu.module.css';

export default function NavMenuItem({menu}) {
   const router = useRouter();

    return (
        <ListItem disablePadding disableGutters>
         <Link href={menu.params ? `${menu.path}?${menu.params}` : menu.path} className={router.pathname=== menu.path? styles.activeitem : styles.navitem}>
            {menu.icon}
            <ListItemText className={router.pathname=== menu.path? styles.selected : styles.unselected} sx={{ my: 0}} primary={menu.menu_title} />
         </Link>
        </ListItem>
     );
}
