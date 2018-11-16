import React from "react";
import VideoCard from "./VideoCard";
import Scroll from "../components/Scroll";
// import Background from "../components/Background";
const CardList = ({ videosList }) => {
  return (
    // <Scroll>
    <div style={{ marginBottom: "230px" }}>
      {/* <React.Fragment> */}
      {videosList.map((video, i) => {
        return (
          <VideoCard
            key={i}
            name={videosList[i].name}
            img={
              "https://img.youtube.com/vi/" +
              videosList[i].videoId +
              "/sddefault.jpg"
            }
            embed={videosList[i].embed}
          />
        );
      })}
      {/* </React.Fragment> */}
    </div>
    // </Scroll>
  );
};

export default CardList;
