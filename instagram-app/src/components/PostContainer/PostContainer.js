import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostButtons from './PostButtons';
import { Card, CardBody, CardImg, CardTitle, Container } from 'reactstrap';
export default function PostContainer(props) {
    let { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = props;

    return (
        <div className="post-container">
            <Card>
                <CardTitle style={{fontWeight: "bold"}}>
                    <img src={thumbnailUrl} alt={username} className="user-thumb"/>
                    &nbsp;
                    {username}
                </CardTitle>
                <CardImg top width="100%" src={imageUrl} />
                <CardBody>
                    <PostButtons />
                    <p style={{fontWeight: "bold"}}>{likes} likes</p>
                    <CommentSection comments={comments} />
                </CardBody>
            </Card>
        </div>
    )
}