import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import AirplanemodeActiveRoundedIcon from '@material-ui/icons/AirplanemodeActiveRounded';



const useStyles = makeStyles
const NavBar = () => {
    return (
        
        <AppBar position="fixed" color="primary">
          <Toolbar>
                <AirplanemodeActiveRoundedIcon style={{flexGrow: '1'}} color='default'/>
            <Typography variant="h6">
                LUXO AppBAR TEST
            </Typography>
          </Toolbar>
        </AppBar>
        
        
        // <div style={{height:'3em', width:'100vw', position:'fixed', top:'0', backgroundColor:'salmon', display:'flex', justifyContent:'center', alignItems:'center'}}>
        //    <h1 style={{color:'white'}}>Ciao A tutti</h1> 
        // </div>
    )
}

export default NavBar
