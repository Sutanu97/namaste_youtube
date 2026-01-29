import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <Comment key={comment?.id} data={comment} />
  ));
};

export default CommentsList;
