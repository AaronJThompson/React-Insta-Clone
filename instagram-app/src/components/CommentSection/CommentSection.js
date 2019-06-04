import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

export default function CommentSection(props) {
    let { comments } = props;

    return(
        <div>
            {
                comments.map(comment => {
                    return (
                        <Comment username={comment.username} text={comment.text} />
                    )
                })
            }
        </div>
    )
}