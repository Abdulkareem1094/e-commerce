import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:{
        width: '150px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
        height: '200px',
        margin: '10px'
    },
    img:{
        height: '150px',
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
        marginTop: '85%',
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
        padding: '5px 10px',
    },
    cardHeader:{
        fontSize: '0.6rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        paddingRight: '5px'
    },
    cardPrice:{
        fontSize: '0.6rem',
        letterSpacing: '0.5px',
        paddingLeft: '5px',
        fontWeight: 600,
    },
    cardDesc:{
        fontSize: '0.4rem'
    },
    grow:{
        flex: 1
    }
}));