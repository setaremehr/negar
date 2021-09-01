import React, { useState, useEffect } from "react";
import "./App.css";
import desktopImage from "../../../assets/img/wider.jpg";
import mobileImage from "../../../assets/img/ggg.jpeg";
import { styled } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
// import Paper from "@material-ui/core/Paper";
import negar from "../../../assets/img/nn.png";
import Grid from "@material-ui/core/Grid";

// const Item = styled(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
export default function SectionAbout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;
  //   const colorChange = windowWidth >= 650 ? "#fce4ec" : "#212121";
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 160,
    height: 160,
    border: `5px solid ${theme.palette.background.paper}`,
  }));

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* <div className="App-content"> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/* <Item> */}
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<SmallAvatar alt="n" src={negar} />}
              >
                {/* <Avatar
                  alt=""
                  src={negar}
                  style={{ width: 320, height: 320 }}
                /> */}
              </Badge>
              {/* </Item> */}
            </Grid>
            <Grid item xs={8} justify="center">
              {/* <Item>xs=8</Item> */}
              <h1
                className="pp"
                style={{
                  marginTop: "90px",
                  //   color: { colorChange },
                }}
              >
                Welcome to my website!
              </h1>
              <p className="pp" style={{ fontSize: "24px" }}>
                Hello! Thank you for stopping by! I’m Negar Bakhshi(Nina),
                Professional Makeup Artist, located on San Jose Ca.
                <br />
                <br />
              </p>
            </Grid>
          </Grid>

          {/* </div> */}
        </Box>
      </div>
    </>
  );
}
