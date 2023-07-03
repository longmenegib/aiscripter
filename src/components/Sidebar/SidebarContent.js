import * as React from 'react';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import NavLinks from './NavLinks';
import NavMenuItem from './NavMenuItem';
import { Box, ListSubheader } from '@mui/material';

export default function SidebarContent() {

    return (
        <Box sx={{pt: 0}}>
            <Toolbar sx={{mb: 1}}>
                <img src='/logo.svg'/>
            </Toolbar>
            
            {NavLinks.map((navItem) => {
                const [key, value] = Object.entries(navItem)[0];
                return (
                    <List 
                    // subheader={<ListSubheader>{value.headerTitle}</ListSubheader>}
                    >
                        {
                            value.items.map((item, index)=>{
                                return(
                                    <NavMenuItem menu={item}/>
                                )
                            })
                        }
                    </List>
                )
            })}
        </Box>
    )
}
