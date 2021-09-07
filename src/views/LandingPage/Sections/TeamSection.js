import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/team1.jpg";

// import Rating from "@material-ui/core/Rating";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}></GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={team1}
                  alt="..."
                  className={imageClasses}
                  style={{
                    border: `5px solid`,
                  }}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nina Bakhshi
                <br />
                <small className={classes.smallTitle}>Makeup Artist</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I am a make-up artist based in San Jose (Bay Area), US. I am really
                  proud of what I have achieved within this short time as a make
                  up artist. My goal is for every single one
                  of my clients to feel confident and comfortable.I have been a
                  free-lance makeup artist since 2017, though my love of makeup
                  goes back many years
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a
                href="https://instagram.com/Nina_bakhshi_"
                className={classes.block}
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a
                href="mailto:Ngr.Bakhshi.k@gmail.com"
                className={classes.block}
                target="_blank"
              >
                <i class="fas fa-at"></i>
              </a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}></GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
