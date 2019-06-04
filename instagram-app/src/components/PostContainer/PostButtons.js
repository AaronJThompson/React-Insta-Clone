import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import './PostContainer.css';

export default function PostButtons(props) {
    return (
        <div className="post-buttons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCommentAlt} />
        </div>
    )
}