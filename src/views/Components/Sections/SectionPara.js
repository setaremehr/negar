import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import { Parallax, Background } from "react-parallax";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPara() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <div className={classes.container}> */}
      {/* <GridContainer justify="center"> */}
      {/* <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}></GridItem> */}
      <Parallax strength={500}>
        <Background>
          <div
            style={{
              justify: "center",
              marginTop: "30px",
              marginLeft: "150px",
              marginRight: "150px",
              height: "1300px",
              width: "1150px",
              backgroundImage:
                "url('https://bl3301files.storage.live.com/y4mIzyPFLq3YjKBuoURbEmMk9P5bFH_Qqwzmf00yImgIECr68k-j0lo94bou2pgX8dHxk8oHo9U_uHonqrHBjrovSpQaCU5ifjbzLTYKv6Ma0PVDUwcmJ6XYP5wVTsYEQ_m71HbalVq6xP-9TBJWmOzpbJE955qsZDhX5G3iHtK_BEXnLxqBp2qcpjSDa1x-5ni?width=1200&height=780&cropmode=none')",
            }}
          />
        </Background>
        <div
          style={{
            justify: "center",
            color: "black",
            marginLeft: "130px",
            fontFamily: "'Dancing Script'",
            fontSize: "25px",
          }}
        >
          <br />
          <br />
          <br />
          NINA BAKHSHI
          <br />
          <br />
          <br />
          <br />
        </div>
      </Parallax>
      {/* </GridContainer> */}
      <div style={{ height: 200 }}></div>
      {/* </div> */}
    </div>
  );
}
