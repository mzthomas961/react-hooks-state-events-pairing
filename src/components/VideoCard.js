import React, { useState } from "react";


function VideoCard({ title, views, embedUrl, createdAt, upvotes, downvotes, comments}) {
    const [upvotesObj, setUpvotes] = useState(upvotes);
    const [downvotesObj, setDownvotes] = useState(downvotes);
    const [isHidden, setIsHidden] = useState(false);
    console.log(comments)

    const commentItems = comments.map((comment) => {
        return <Comments user={comment.user} comment={comment.comment}/>
    })

    function handleUpvotesClick(){
        setUpvotes(upvotesObj+1);
    }
    function handleDownvotesClick() {
        setDownvotes(downvotesObj-1);
    }

    function handleCommentClick() {
       setIsHidden(!isHidden);
    }

    return (
        <div className="card">
                  <iframe
        width="700"
        height="400"
        src={embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
            <h2 className="title">{title}</h2>
            <h3 className="views and Upload">{views} Views | Upload Date {createdAt} </h3>
            <button className="upvotes" onClick={handleUpvotesClick}>
            👍{upvotesObj} 
            </button>
            <button className="downvotes" onClick={handleDownvotesClick}>
            👎{downvotesObj}
        </button>
        <button onClick={handleCommentClick}>{isHidden ? "show" : "hide"} Comment</button>
        {isHidden ? null : commentItems}
        </div>

    );
}
export default VideoCard;