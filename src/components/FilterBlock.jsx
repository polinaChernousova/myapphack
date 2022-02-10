import { Box, Breadcrumbs, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const FilterBlock = () => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [chapterValue, setChapterValue] = useState(search.get("chapter") || "");

  const filterProducts = (key, value) => {
    search.set(key, value);

    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");
    setChapterValue(search.get("chapter") || "");
    getProducts();
  };

  const resetFilter = () => {
    navigate("/");
    setSearchValue("");
    getProducts();
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div>
      <div className="filters-block">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              главная
            </Link>
            <Link underline="hover" color="inherit" to="/products">
              <Typography color="text.primary">комиксы</Typography>
            </Link>
            <a href="/product-detail">фильтрация</a>
          </Breadcrumbs>
        </div>

        <TextField
          className="search-text"
          value={searchValue}
          onChange={(e) => filterProducts("q", e.target.value)}
          variant="outlined"
          placeholder="Что ищем?"
        />
      </div>

      <nav class="nav">
        <ul class="nav__list d-flex">
          <li
            onClick={(e) => {
              filterProducts("chapter", "Marvel");
            }}
            value={chapterValue}
          >
            <a>
              <b>Marvel</b>
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "DC Comics");
            }}
            value={chapterValue}
          >
            <a>
              <b>DC Comics</b>
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "Dark Horse");
            }}
            value={chapterValue}
          >
            <a>
              <b>Dark Horse</b>
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "Dynamite Entertaiment");
            }}
            value={chapterValue}
          >
            <a>
              <b>Dynamite Entertainment</b>
            </a>
          </li>

          <li
            onClick={(e) => {
              filterProducts("chapter", "Wildstorm");
            }}
            value={chapterValue}
          >
            <a>
              <b>Wildstorm </b>
            </a>
          </li>

          <li
            onClick={(e) => {
              filterProducts("chapter", "Boom! Studios");
            }}
            value={chapterValue}
          >
            <a>
              <b>Boom! Studios</b>
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "Oni Press ");
            }}
            value={chapterValue}
          >
            <a>
              <b>Oni Press</b>
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "Valiant");
            }}
            value={chapterValue}
          >
            <a>
              <b>Valiant</b>
              {/* <span>92</span> */}
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "Manga");
            }}
            value={chapterValue}
          >
            <a>
              <b>Manga</b>
            </a>
          </li>
          <li
            onClick={(e) => {
              filterProducts("chapter", "Manhwa");
            }}
            value={chapterValue}
          >
            <a>
              <b>Manhwa</b>
              {/* <span>141</span> */}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FilterBlock;
