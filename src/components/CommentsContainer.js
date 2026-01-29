import React from "react";
import CommentsList from "./CommentsList";
import { comments } from "../utilities/Constants";

export const CommentsContainer = () => {
  return (
    <div className="mt-8">
      <p className="font-bold text-2xl">Comments</p>
      <CommentsList comments={comments} />
    </div>
  );
};
