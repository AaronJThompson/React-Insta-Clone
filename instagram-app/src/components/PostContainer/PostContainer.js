import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import { Card, CardBody, CardImg, CardTitle, Container } from 'reactstrap';
export default function PostContainer(props) {
    let { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = props;

    return (
        <div>
            <Card>
                <CardTitle>
                    <img src={thumbnailUrl} alt={username} />
                    {username}
                </CardTitle>
                <CardImg top width="100%" src={imageUrl} />
                <CardBody>
                    <CommentSection comments={comments} />
                </CardBody>
            </Card>
        </div>
    )
}