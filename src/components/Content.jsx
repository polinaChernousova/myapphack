import { Container } from "@material-ui/core";
import React from "react";
import Comments from "./Comments";
import ContentCard from "./ContentCard";
import Footer from "./Footer";
// import Slider from "./Slider";

const Content = () => {
  return (
    <div id="place-to-visit">
      <ContentCard />
      {/* <Slider /> */}
      <Footer />
    </div>
  );
};

export default Content;
