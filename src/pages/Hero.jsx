import { Collapse, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Content from "../components/Content";
// import Slider from "../components/Slider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <>
      <div className="hero-section">
        <div>
          <Collapse
            in={checked}
            {...(checked ? { timeout: 4000 } : {})}
            collapsedHeight={0}
          >
            <div>
              <h1 className="hero-text">
                Internet cafe
                <span>Homy Vibe.</span>
                <br /> A cafe where you can productively <br /> and comfortably
                spend <br />
                time with delicious snacks.
              </h1>
            </div>
            {/* <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
            <KeyboardArrowDownIcon
              sx={{ fontSize: "3.5rem", color: "yellow" }}
            />
          </IconButton>
        </Scroll> */}
          </Collapse>
        </div>
        <Link to="/sign-up">
          <Button
            style={{
              marginTop: "10px",
              height: "50px",
              width: "150px",
              borger: "4px solid black",
              borderRadius: "8px",
              color: "#fff",
              backgroundColor: "mediumorchid",
            }}
            variant="contained"
            // color="secondary"
          >
            sign up
          </Button>
        </Link>
      </div>
      <Content />
    </>
  );
};

export default Hero;
