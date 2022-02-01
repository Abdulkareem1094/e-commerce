import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from "./styles";
import KS from '../../assets/images/ks.png'


const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                        <Typography variant='h6' className={classes.title} >
                            <img src={KS} alt="KS" height='25px' className={classes.image} />
                            Kareem Store
                        </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                            <IconButton area-lebel='Show Cart Item' color='inherit'>
                                <Badge badgeContent={2} color='secundry'>
                                    <ShoppingCart className={classes.shoppingCartIcon} />
                                </Badge>
                            </IconButton>
                        </div>
                </Toolbar>    
            </AppBar>   
        </>
    )
}

export default Navbar
