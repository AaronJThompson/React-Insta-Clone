import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import uuid from 'uuid';

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
        </div>
    )
}