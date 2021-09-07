/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:Ngr.Bakhshi.k@gmail.com"
                className={classes.block}
                target="_blank"
              >
                <i class="fas fa-at"></i>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://instagram.com/Nina_bakhshi_"
                className={classes.block}
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
        ©2021 Nina Bakhshi, Professional Makeup Artist. All Rights Reserved. || 4084555502
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
