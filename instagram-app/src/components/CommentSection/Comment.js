import React from 'react';
import './CommentSection.css';

export default function Comment(props) {
    let { username, text } = props;

    return (
        <p>
            <span style={{fontWeight: "bold"}}>
                {username}
            </span>
            &nbsp;
            {text}
        </p>
    )
}