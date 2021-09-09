/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          // noLiPadding
          opacity="30%"
          buttonText="Get in touch"
          // buttonProps={{
          //   className: classes.navLink,
          //   color: "transparent",
          // }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="" className={classes.dropdownLink}>
              Call Me:
              <br />
              4084555502
            </Link>,
            <a
              href="mailto:Ngr.Bakhshi.k@gmail.com"
              target="_blank"
              className={classes.dropdownLink}
            >
              Email Me
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/landing-page" className={classes.dropdownLink}>
          ARTIST'S BIO
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.dropdownLink}>
          HOME
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://instagram.com/Nina_bakhshi_"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
