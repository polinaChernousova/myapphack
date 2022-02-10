import { Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import ProductCard from "../components/ProductCard";
import FilterBlock from "../components/FilterBlock";
import ProductsPagination from "../components/ProductPagination";

const MainPage = () => {
  const { getProducts, products } = useContext(ClientContext);
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ marginTop: "80px" }}>
      <Container>
        <FilterBlock />
        <h1>Популярные новинки</h1>
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={4} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default MainPage;
