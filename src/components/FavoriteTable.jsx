import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Rating,
  Stack,
  Tooltip,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

export default function FavoriteTable(props) {
  const { getFavorite, favorite, deleteProductFromFavorite } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getFavorite();
  }, []);
  console.log(favorite);

  if (!favorite) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {favorite.products.map((item) => (
            <Card
              key={item.id}
              sx={{
                maxWidth: 300,
                margin: "30px",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  style={{ objectFit: "contain" }}
                  image={item.product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.product.genre}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{
                      marginBottom: "5px",
                      backgroundColor: "lightcyan",
                      color: "blac",
                    }}
                    onClick={() => deleteProductFromFavorite(item.product.id)}
                  >
                    удалить из избранного
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
