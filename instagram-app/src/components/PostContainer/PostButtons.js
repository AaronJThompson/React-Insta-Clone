import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import './PostContainer.css';

export default function PostButtons(props) {
    const { likeHandler } = props;
    return (
        <div className="post-buttons">
            <FontAwesomeIcon icon={faHeart} onClick={likeHandler} />
            <FontAwesomeIcon icon={faCommentAlt} />
        </div>
    )
}