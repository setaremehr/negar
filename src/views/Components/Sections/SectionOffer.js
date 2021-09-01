import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionOffer() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 style={{ fontFamily: "Architects Daughter" }}>
              What I offer :
            </h2>
            <span>
              <h4 style={{ fontFamily: "Lobster Two" }}>Works on location</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>HD makeup</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>General Makeup</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Airbrush Makeup</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>False Lashes</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Wedding Makeup</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Bridal General Makeup
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Bridal Airbrush Makeup
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Junior Bridesmaid General Makeup
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Day of Wedding - Touch Up Service
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Special Event</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Corrective Makeup</h4>
            </span>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
