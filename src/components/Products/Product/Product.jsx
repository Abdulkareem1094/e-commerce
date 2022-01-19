import React, { useState } from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      className={classes.root}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={classes.img}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        >
          <button
            className={
              isHovering
                ? classes.addToCartButtonVisible
                : classes.addToCartButtonHidden
            }
          >
            ADD TO CART
          </button>
        </CardMedia>
      </div>
      <div className={classes.cardContent}>
        <div className={classes.cardContainer}>
          <div>
            <Typography variant="h6" className={classes.cardHeader}>
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              className={classes.cardDesc}
              color="textSecondary"
            >
              {product.description}
            </Typography>
          </div>
          <div className={classes.grow} />
          <Typography variant="h6" className={classes.cardPrice}>
            {product.price}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default Product;
