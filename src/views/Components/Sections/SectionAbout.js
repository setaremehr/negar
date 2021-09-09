import React, { useState, useEffect } from "react";
import "./App.css";
import desktopImage from "../../../assets/img/garde.jpeg";
import mobileImage from "../../../assets/img/ggg.jpeg";
import { styled } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import negar from "../../../assets/img/nn.png";
import Grid from "@material-ui/core/Grid";
export default function SectionAbout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

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
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<SmallAvatar alt="n" src={negar} />}
              >
              </Badge>
            </Grid>
            <Grid item xs={8} justify="center">                       
                <br/>    
                <br/>            
              <p className="pp" style={{ fontSize: "26px",paddingTop: "40px" }}>
                Hello! Thank you for stopping by!<br/> 
                I’m Nina Bakhshi,
                Professional freelance Makeup Artist,<br/> located on San Jose Ca.
              </p>
            </Grid>
          </Grid>
        </Box>
      </div>
  );
}
