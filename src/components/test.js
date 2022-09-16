import React from 'react';  
import Button from '@material-ui/core/Button';  
import Menu from '@material-ui/core/Menu';  
import MenuItem from '@material-ui/core/MenuItem';  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import { Label, Image } from 'semantic-ui-react';
  
export default function DropdownImageTriggerExample() {  
        const [anchorEl, open] = React.useState(null);  
        const handleClick = event => {  
                open(event.currentTarget);  
        };  
  
        const handleClose = () => {  
                open(null);  
        };  
        return (  
                <>  
                        <AppBar position="static">  
                                <Toolbar style={{ 'paddingLeft': "600px" }}>  
    </Toolbar>  
                        </AppBar>  
                        <div>  
  
                                <Label  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> 




                                <Image avatar src="hate.jpg"  />
                                  </Label> 
                                <Menu   
                                        id="Menu"  
                                        anchorEl={anchorEl}  
                                        keepMounted  
                                        open={Boolean(anchorEl)}  
                                        onClose={handleClose}  
                                >  
                                        <MenuItem onClick={handleClose}>About</MenuItem>  
                                        <MenuItem onClick={handleClose}>Contact</MenuItem> 

                                           <MenuItem text="Home" location="/home" />
                    <MenuItem text="Edit Profile" location="/profile" />
               <MenuItem text="Change Password" location="/change-password" />
              <MenuItem text="Privacy Settings" location="/privacy-settings" />
        {/* <MenuItem text="Delete Account" onClick={this.deleteAccount} /> */}
        {/* <MenuItem text="Logout" onClick={this.logout} />  */}
        <MenuItem text="Logout" location="" /> 

                                </Menu>  
                        </div>  
                </>  
        );  
}

