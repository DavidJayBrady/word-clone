import React from "react";

function EndGameBanner({ victory }) {
  let bannerStyle = victory ? "happy" : "sad";
  return <div className={`banner ${bannerStyle}`} />;
}

export default EndGameBanner;
