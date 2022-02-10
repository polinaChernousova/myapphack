import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContentCard = () => {
  return (
    <>
      <div className="content-page">
        <Container>
          <div className="content-container">
            <h1
              className="content-subscription"
              style={{ color: "#fff", fontSize: "44px" }}
            >
              you can read with us and, <br /> if you wish, buy a book in our
              cafe:
            </h1>

            <section className="content-card">
              <Card
                className="card"
                sx={{
                  borderRadius: "10px",
                  maxWidth: "400px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    src="https://com-x.life/uploads/posts/2022-02/1643721589_2.png"
                    alt="green iguana"
                    style={{ objectFit: "cover" }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography
                    atyle={{ height: 20, overflow: "hidden" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize={18}
                  >
                    Реальность
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Манга</strong>
                  </Typography>
                </CardContent>
                {/* <Button variant="contained">оформить заказ</Button> */}
              </Card>
              <Card
                className="card"
                style={{
                  borderRadius: "10px",
                  maxWidth: "400px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    src="https://img.com-x.life/comix/1727/60796/1509458617_0.68369200.jpg"
                    alt="green iguana"
                    style={{ objectFit: "cover" }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography
                    atyle={{ height: 20, overflow: "hidden" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize={18}
                  >
                    Человек-паук
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Алтимейт комиксы</strong>
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
              <Card
                className="card"
                sx={{
                  borderRadius: "10px",
                  maxWidth: "400px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    src="https://com-x.life/uploads/posts/2021-11/1635975039_1.png"
                    alt="green iguana"
                    style={{ objectFit: "cover" }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography
                    atyle={{ height: 20, overflow: "hidden" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize={18}
                  >
                    Ветролом
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong> Manhwa</strong>
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    оформить заказ
                  </Button> */}
                </CardActions>
              </Card>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContentCard;
