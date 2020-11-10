import React from 'react';
import Menu from '@material-ui/core/Menu';

const StyledMenu = (props) => (
  <Menu
    elevation={2}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}    
    {...props}
  />
);

export default StyledMenu;