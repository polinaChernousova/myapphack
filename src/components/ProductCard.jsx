import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { ClientContext } from "../contexts/ClientProvider";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { addFavoriteProduct, deleteProductFromFavorite, checkFavoriteInCart } =
    useContext(ClientContext);

  return (
    <div>
      {/* <Link to="/deteil-page"> */}
      {/* <Tooltip disableFocusListener disableTouchListener> */}
      <Card
        key={props.id}
        className="card"
        sx={{
          maxWidth: "200px",
          cursor: "pointer",
        }}
      >
        <Link
          style={{ marginLeft: 15 }}
          to={`/product-detail/${props.item.id}`}
        >
          <CardMedia
            className="card-media"
            component="img"
            height="280"
            image={props.item.image}
            style={{ objectFit: "cover" }}
          />

          <CardContent>
            <Typography
              sx={{ height: 40, overflow: "hidden", maxHeight: 60 }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {props.item.name}
            </Typography>
            <hr />

            <Typography variant="body2" color="text.secondary">
              {props.item.chapter} / {props.item.data}
            </Typography>
          </CardContent>
        </Link>
        <CardActions style={{ justifyContent: "space-around" }}>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
          <div className="page__btns">
            {checkFavoriteInCart(props.item.id) ? (
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="удалить из избранного"
                onClick={() => deleteProductFromFavorite(props.item.id)}
              >
                <img
                  width={30}
                  src="https://cdn-icons-png.flaticon.com/512/102/102279.png"
                  alt=""
                />
              </Tooltip>
            ) : (
              <Tooltip
                onClick={() => addFavoriteProduct(props.item)}
                disableFocusListener
                disableTouchListener
                title="в избранное"
              >
                <img
                  width={30}
                  src="https://cdn-icons.flaticon.com/png/512/3502/premium/3502704.png?token=exp=1644255658~hmac=76218d583da505f818f89b05fc437e19"
                  alt=""
                />
              </Tooltip>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
