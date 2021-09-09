import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionOffer from "./Sections/SectionOffer.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionPara from "./Sections/SectionPara.js";
import SectionBanner from "./Sections/SectionBanner";
import SectionGallery from "./Sections/SectionGallery";
import SectionAbout from "./Sections/SectionAbout";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand=""
        font-family="Allison"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        blur={100}
        strength={-200}
        image={require("assets/img/sefid.jpg").default}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1
                  className={classes.title}
                  style={{ fontFamily: "Architects Daughter" }}
                >
                  Nina
                </h1>
                <h3
                  className={classes.subtitle}
                  style={{ fontFamily: "Architects Daughter" }}
                >
                  makeup artist with a passion for creation
                </h3>
                
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}
        {/* <SectionNavbars /> */}
        {/* <SectionTabs /> */}
        {/* <SectionGallery marginBottom="50px" /> */}
        {/* <SectionMenu /> */}
        <SectionAbout />
        <SectionBanner />
        <SectionGallery />
        {/* <AboutMe /> */}
        {/* <SectionPills /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography /> */}
        {/* <SectionJavascript /> */}
        {/* <SectionCarousel /> */}
        <SectionOffer />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <a
            href="https://instagram.com/Nina_bakhshi_"
            className={classes.block}
            target="_blank"
            rel="noreferrer"
          >
            <Button color="primary" size="lg" simple>
              View My Instagram Page
            </Button>
          </a>
        </GridItem>
        <SectionPara />
        {/* <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
