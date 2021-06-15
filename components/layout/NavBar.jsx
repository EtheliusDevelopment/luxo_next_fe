import React from 'react'
import Navigation from './Navigation'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core'
// import AirplanemodeActiveRoundedIcon from '@material-ui/icons/AirplanemodeActiveRounded';
import styles from '../../styles/NavBar.module.css';
import Logo from './Logo';
import MenuIcon from '@material-ui/icons/Menu';


const toogleNav = () => {

    const element = document.getElementById('Navigation');
    element.classList.toggle("ToggleStyle");

    }

// const useStyles = makeStyles
const NavBar = () => {
    return (

    <header className={styles.NavBar} id="NavBar">
       
        <Logo />

        <Navigation />
                
                {/* Gadgets */}
         {/* SwitchLanguageFlag */}
        <MenuIcon className={styles.MenuIcon} style={{ fontSize: 50 }} onClick={toogleNav}/>
    
    
    </header>


        // <AppBar position="fixed" color="primary">
        //   <Toolbar>
        //         <AirplanemodeActiveRoundedIcon style={{flexGrow: '1'}} color='default'/>
        //     <Typography variant="h6">
        //         LUXO AppBAR TEST
        //     </Typography>
        //   </Toolbar>
        // </AppBar>
        
        
        // <div style={{height:'3em', width:'100vw', position:'fixed', top:'0', backgroundColor:'salmon', display:'flex', justifyContent:'center', alignItems:'center'}}>
        //    <h1 style={{color:'white'}}>Ciao A tutti</h1> 
        // </div>
    )
}

export default NavBar
