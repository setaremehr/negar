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
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Special occasion makeup
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Makeup training and product knowledge for self application or
                perfesional level
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>
                Bridal make up ( include trials)
              </h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Halloween looks</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Wedding Makeup</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>On stage make up</h4>
              <h4 style={{ fontFamily: "Lobster Two" }}>Editorial make up</h4>
            </span>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
