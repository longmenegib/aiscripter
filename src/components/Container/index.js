import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Sidebar'
import Appbar from '../Appbar/Appbar';

function AppLayout(props) {

  return (
    <Box sx={{ display: 'flex', height: '100%', minHeight: '100vh', backgroundColor: '#f6f6f6' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - 300px)` } }}
      >
        <Appbar height={60} show={true}/>
        {props.children}
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  window: PropTypes.func,
};

export default AppLayout;
