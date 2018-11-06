import React from "react";
import VideoCard from "./VideoCard";

const CardList = ({ videosList }) => {
  return (
    <div
      style={{ marginBottom: "20px" }}
    >
      {/* <p>{videosList.length}</p> */}
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
    </div>
  );
};

export default CardList;
