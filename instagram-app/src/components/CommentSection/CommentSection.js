import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import uuid from 'uuid';
import { Input } from 'reactstrap';
export default function CommentSection(props) {
    let { comments } = props;

    return(
        <div>
            {
                comments.map(comment => {
                    return (
                        <Comment key={uuid()} username={comment.username} text={comment.text} />
                    )
                })
            }
            <hr />
            <Input
            type="text"
            name="comment"
            className="comment-form"
            placeholder="Add a comment..."
          />
        </div>
    )
}