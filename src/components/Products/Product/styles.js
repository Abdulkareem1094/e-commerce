import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        width: '180px',
        boxShadow: '2px 2px 20px rgba(0,0,0,0.3)',
        height: '300px'
    },
    img:{
        height: '200px',
    },
    media:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        boxSizing: 'border-box',
    },
    addToCartButtonVisible:{
        width: '100%',
        border: 'none',
        color: '#ffffff',
        backgroundColor: 'orange',
        height: '15%',
        marginTop: '85%'
    },
    addToCartButtonHidden:{
        visibility: 'hidden',
    },
    cardContainer:{
        display: 'flex',
        fontFamily: 'calibri',
        width: '100%'
    },
    cardContent:{
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: ''
    },
    cardHeader:{
        fontSize: '0.9rem',
        color: '#222222',
        fontWeight: 700,
        letterSpacing: '0.5px',
        paddingRight: '5px'
    },
    cardPrice:{
        fontSize: '0.9rem',
        letterSpacing: '0.5px',
        paddingLeft: '5px',
    },
    cardDesc:{
        fontSize: '0.7rem'
    },
    grow:{
        flex: 1
    }
}));