import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar:{
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.52)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - &{drawerWidth}px)`,
            marginLeft: drawerWidth,
        }
    },
    title:{
        textDecoration: 'none',
        display: 'flex',
        alignItem: 'center',
        color: 'black',
    },
    image:{
        marginRight: '10px',
        height: '50px',
        border: '1px solid gray',
    },
    grow:{
        flexGrow: '1'
    },
    shoppingCartIcon: {
        color: '#b30059'
    },
    k: {
        color: '#b30059',
    },
    s: {
        color: 'orange',
        marginLeft: '5px',
    }
    // menuButton:{
    //     marginRight: theme.spacing(2),
    //     [theme.breakpoints.up('2')]:{
    //         display: 'none'
    //     },
    // }
}));