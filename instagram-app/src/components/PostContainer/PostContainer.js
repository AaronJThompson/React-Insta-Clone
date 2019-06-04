import React, { useState } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostButtons from './PostButtons';
import { Card, CardBody, CardImg, CardTitle, Container, Input } from 'reactstrap';
import moment from 'moment';
export default function PostContainer(props) {
    let { username, thumbnailUrl, imageUrl, likes, timestamp, comments, addComment, id } = props;
    const [ commentInput, setCommentInput ] = useState('');

    let commentChangeHandler = event => {
        setCommentInput(event.target.value);
    }
    let detectEnter = event => {
        var keycode = event.keyCode ? event.keyCode : event.which;
        if (keycode === 13){
          addComment(commentInput);
          setCommentInput('');
        }
    }
    return (
        <div className="post-container">
            <Card>
                <CardTitle style={{fontWeight: "bold"}} className="post-header">
                    <img src={thumbnailUrl} alt={username} className="user-thumb"/>
                    &nbsp;
                    {username}
                </CardTitle>
                <CardImg top width="100%" src={imageUrl} />
                <CardBody>
                    <PostButtons />
                    <p style={{fontWeight: "bold"}}>{likes} likes</p>
                    <CommentSection comments={comments} />
                    <p className="post-timestamp">{moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
                    <hr />
                    <Input
                        type="text"
                        name="comment"
                        className="comment-form"
                        placeholder="Add a comment..."
                        value={commentInput}
                        onChange={commentChangeHandler}
                    />
                </CardBody>
            </Card>
        </div>
    )
}