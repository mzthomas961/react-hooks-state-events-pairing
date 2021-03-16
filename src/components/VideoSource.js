import React from "react";
import { video } from "../data/video";
import VideoCard from "./VideoCard"

function VideoSource() {
  const videoCard = video.map ((vid) => {
    return <VideoCard title={vid.title} views={vid.views} embedUrl={vid.embedUrl} createdAt={vid.createdAt} upvotes={vid.upvotes} downvotes={vid.downvotes} comments={vid.comments} />;
  })
return (
    
    <section  className="Video">
      {videoCard}
    </section>
  );
}
export default VideoSource;