import { AppBar, Avatar, Box, Button, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FaArrowLeft, FaBell } from 'react-icons/fa'
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

export default function Appbar({ height, show=true }) {

    const router = useRouter()

    return (
        <Box sx={{ height: height, borderBottom: '1px grey solid' }} className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 '>
            <AppBar component="nav" sx={{ height: height, backgroundColor: 'gray' }} className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 '>
                <Toolbar>
                    
                        {!show && 
                        <div onClick={()=> router.back()} className='flex mb-4 items-center' style={{ cursor: 'pointer' }}>
                                <FaArrowLeft className='text-white'/>
                                <span>Return</span>
                        </div>}
                    {/* </Typography> */}
                    <Box sx={{ display: 'flex', marginLeft: show ? 'auto' : 0, justifyContent: 'space-between' }}>
                        
                        {show && <div className='flex items-center' style={{ cursor: 'pointer' }}>
                            <FaBell className='mr-4 w-6 h-6' />
                            <PopupState variant="popper" popupId="demo-popup-popper">
                                {(popupState) => (
                                    <div>
                                        <Button sx={{backgroundColor: 'transparent'}} disableRipple={true} variant="text"  {...bindToggle(popupState)}>
                                            <Avatar sx={{ width: 42 }}>H</Avatar>
                                        </Button>
                                        <Popper {...bindPopper(popupState)} transition>
                                            {({ TransitionProps }) => (
                                                <Fade {...TransitionProps} timeout={350}>
                                                    <Paper sx={{backgroundColor: 'white', height: 150,zIndex: 100000, width: 300, paddingLeft: 2}}>
                                                        <div className='flex self-start items-center pt-2 mb-3'>
                                                            <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                                                            <div className='ml-1'>
                                                                <h3 style={{fontWeight: 900}} className='text-black'>Username</h3>
                                                                <span>Basic plan</span>
                                                            </div>
                                                        </div>
                                                        <Divider/>
                                                    </Paper>
                                                </Fade>
                                            )}
                                        </Popper>
                                    </div>
                                )}
                            </PopupState>
                        </div>}
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    )
}
