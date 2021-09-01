import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>{/* <h3>Navigation Pills</h3> */}</div>
          <div className={classes.title}>
            <h3>{/* <small>With Icons</small> */}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
