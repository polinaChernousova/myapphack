import { Breadcrumbs, Container, Typography, Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { ClientContext } from "../contexts/ClientProvider";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const DetailPage = () => {
  const [counter, setCounter] = React.useState(0);

  const { id } = useParams();

  const {
    getDetail,
    detail,
    addProductToCart,
    checkProductInCart,
    deleteProductFromCart,
  } = useContext(ClientContext);

  const navigate = useNavigate();

  useEffect(() => {
    getDetail(id);
  }, []);

  if (!detail) {
    <h2>Loading</h2>;
  }

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <Container>
      <div style={{ marginTop: "100px" }}>
        <div>
          <div
            style={{ marginBottom: "10px" }}
            role="presentation"
            onClick={handleClick}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to="/">
                главная
              </Link>
              <Link underline="hover" color="inherit" to="/products">
                комиксы
              </Link>
              <Link to="/product-detail/:id">
                <Typography color="text.primary">фильтрация</Typography>
              </Link>
            </Breadcrumbs>
          </div>
          {detail ? (
            <div className="page__grid">
              <header className="page__header">
                {/* <div>
                <h2>{detail.name}</h2>
              </div> */}
              </header>
              <aside className="page__left">
                <div className="page__poster img-wide">
                  <img
                    className="img-wide img"
                    src={detail.image}
                    alt="detail"
                  />
                </div>
                <div className="page__btns">
                  {checkProductInCart(detail.id) ? (
                    <Button
                      style={{
                        backgroundColor: "lightseagreen",
                        color: "white",
                      }}
                      onClick={() => deleteProductFromCart(detail.id)}
                    >
                      В корзине
                    </Button>
                  ) : (
                    <button
                      onClick={() => addProductToCart(detail)}
                      className="page__btn-fav btn js-show-login"
                    >
                      Забрать с собой
                    </button>
                  )}
                </div>

                <ul className="page__list">
                  <li>
                    <div>Раздел:</div>
                    {detail.chapter}
                  </li>
                  <li>
                    <div>Жанр:</div>
                    {detail.genre}
                  </li>
                  <li>
                    <div>Выпуск</div> {detail.data}
                  </li>
                  <li>
                    <div>Цена</div> {detail.price} сом
                  </li>
                  {counter ? (
                    <Button
                      className="like-btn"
                      // disabled={counter > 0}
                      onClick={decrement}
                      style={{
                        backgroundColor: "lightsteelblue",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      <ThumbUpIcon />

                      {/* <span
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginLeft: "8px",
                      }}
                      className="like-button"
                    >
                      {counter}
                    </span> */}
                    </Button>
                  ) : (
                    <Button
                      style={{
                        backgroundColor: "lightsteelblue",
                      }}
                      onClick={increment}
                    >
                      <ThumbDownOffAltIcon />
                    </Button>
                  )}
                </ul>
              </aside>
              <div className="page__main tabs">
                <ul className="tabs__select d_flex">
                  <li className="tabs__select-item"> Описание </li>

                  {/* <li  className="js-show-comment">Комментариии(0)</li> */}
                </ul>

                <div className="tabs__block">
                  <div>
                    <h2>{detail.name}</h2>
                  </div>
                  <div className="page__text full-text clearfix">
                    {detail.desc}
                  </div>
                  <Comments />
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </Container>
  );
};

export default DetailPage;
