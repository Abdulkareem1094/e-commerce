import React,{useState} from 'react'
import { Card, CardMedia, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles();

    const [ isHovering, setIsHovering ] = useState(false)
    
    return (
        <Card className={classes.root}>
            <div className={classes.img}>
            <CardMedia className={classes.media} image={product.image} title={product.name}
            onMouseEnter={ () =>  setIsHovering(true)}
            onMouseLeave={ () => setIsHovering(false)} 
            >
                <div className={ isHovering? classes.cardCartOverlayVisible : classes.cardCartOverlayHidden }    >
                    <IconButton aria-label='Add to Cart' className={classes.cartIconButton} >
                        <AddShoppingCart />
                    </IconButton>
                </div>
            </CardMedia>
            </div>
            <div className={classes.cardContent}>
                    <div className={classes.cardContainer}>
                        <div>
                        <Typography variant='h6' className={classes.cardHeader} > 
                            {product.name}
                        </Typography>
                        <Typography variant='body2' className={classes.cardDesc} color='textSecondary'>{product.description}</Typography>
                        </div>
                        <div className={classes.grow}/>
                        <Typography variant='h6' className={classes.cardPrice} > 
                            {product.price}
                        </Typography>
                    </div>
            </div>
        </Card>
    )
}

export default Product
