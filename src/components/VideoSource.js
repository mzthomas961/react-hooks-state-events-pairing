import React from "react";
import { video } from "../data/video";
import VideoCard from "./VideoCard"
console.log(video)
function VideoSource() {
  // const eoCard = eo.map (() => {
  //   return 
return (
    
    <section  className="video">
      <VideoCard title={video.title} views={video.views} embedUrl={video.embedUrl} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments} />
    </section>
  );
}
export default VideoSource;