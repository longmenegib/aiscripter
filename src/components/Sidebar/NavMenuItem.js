import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function NavMenuItem({menu}) {
   const router = useRouter();

    return (
        <ListItem disablePadding disableGutters>
         <div className={router.pathname=== menu.path? "item-active nav-item" : 'nav-item'}>
            <Link
               href={menu.params ? `${menu.path}?${menu.params}` : menu.path}
               style={{textDecoration: 'none', color: 'black', textAlign: 'left'}}
            >
               <ListItemText className={router.pathname=== menu.path? 'text-indigo-500' : 'text-gray-500'} sx={{ my: 0}} primary={menu.menu_title} />
             
            </Link>
           </div>
        </ListItem>
     );
}
