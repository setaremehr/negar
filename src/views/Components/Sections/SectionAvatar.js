import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import hhh from "../../../assets/img/profile.jpeg";
import GridItem from "components/Grid/GridItem.js";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(7),
      width: 240,
      height: 240,
      justifyContent: "center",
      marginTop: 50,
    },
    proo: {
      width: 400,
      height: 400,
    },
  },
}));

export default function SectionAvatars() {
  const classes = useStyles();

  return (
    <>
      <GridItem
        xs={12}
        sm={6}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className={classes.root}>
          {/* <Avatar alt="ninaPic" src={nina} /> */}
          <Avatar alt="Travis Howard" src={hhh} />
          {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
        </div>
      </GridItem>
    </>
  );
}
