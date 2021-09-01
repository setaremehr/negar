import React from "react";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  opacity: "50%",
  fontFamily: "Allison, cursive",
  fontSize: "35px",
  color: "black",
  //   borderStyle: "dotted",
  borderRadius: "12px",
};
const image =
  "https://bl3301files.storage.live.com/y4mooZtOTCK1hIJYHxcCYTbhdUgIMAlpQLDx_zvBtfA93mZdwUKQ_w59ycPV70KK3bs3VdDAi8LXET4lIv1allxahFj_P_jZVUh2WCV5cwFvSyfgOh4cOFYtR7g7ZsZQfLmV1j7da4imGz74theT5HoGqTAy4V0Xlet9qEksbtj7wft4JFfb_1Bd07J_KTVp3eE?width=1142&height=1280&cropmode=none";

export default function SectionBanner() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            “Makeup is the finishing touch, the final accessory.”
            <br />
            <br />
            Marc Jacobs
          </div>
        </div>
      </Parallax>
    </div>
  );
}
