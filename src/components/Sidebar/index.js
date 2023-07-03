import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SidebarContent from './SidebarContent';
import { styled } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="drawerSidebar"
          PaperProps={{
            sx: {
              backgroundColor: "#313131",
              color: "#fff",
            }
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <SidebarContent />
          <div className='bg-gray-100 flex items-center justify-center hover:bg-gray-200'
           style={{position: 'absolute', bottom: 0, borderTop: '0.5px dashed gray', height: 40, width: '100%', cursor: 'pointer'}}>
              Logout
          </div>
        </Drawer>
        <Drawer
          className="drawerSidebar"
          variant="permanent"
          PaperProps={{
            sx: {
              backgroundColor: "#fff",
              color: "#000",
            }
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <SidebarContent />
          <div className='bg-gray-100 flex items-center justify-center hover:bg-gray-200'
           style={{position: 'absolute', bottom: 0, borderTop: '0.5px solid #dbdbdb', height: 40, width: '100%', cursor: 'pointer', color: 'red', backgroundColor: 'white'}}>
              Logout
          </div>
        </Drawer>
      </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
