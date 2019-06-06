import React, { useState } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostButtons from './PostButtons';
import { Card, CardBody, CardImg, CardTitle, Container, Input } from 'reactstrap';
import moment from 'moment';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
    max-width: 50rem;
    margin: 0 auto;
    margin-bottom: 5rem;

    .post-buttons{
        font-size: 1.5rem;
        display: flex;
        width: 4rem;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .post-header{
        display: flex;
        align-items: center;
        height: 3rem;
        padding: .75rem;
        padding-bottom: 0;
    }
`;

const UserThumbnail = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
`;

export default function PostContainer(props) {
    let { username, thumbnailUrl, imageUrl, likes, timestamp, comments, addComment, id, likePost, user } = props;
    const [ commentInput, setCommentInput ] = useState('');

    let commentChangeHandler = event => {
        setCommentInput(event.target.value);
    }
    let detectEnter = event => {
        if (commentInput === '')
            return;
        var keycode = event.keyCode ? event.keyCode : event.which;
        if (keycode === 13){
          addComment({username: user.username, text:commentInput}, id);
          setCommentInput('');
        }
    }
    let likeHandler = event => {
        likePost(id);
    }
    return (
        <StyledPostContainer className="post-container">
            <Card>
                <CardTitle style={{fontWeight: "bold"}} className="post-header">
                    <UserThumbnail src={thumbnailUrl} alt={username} className="user-thumb"/>
                    &nbsp;
                    {username}
                </CardTitle>
                <CardImg top width="100%" src={imageUrl} />
                <CardBody>
                    <PostButtons likeHandler={likeHandler}/>
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
                        onKeyPress={detectEnter}
                    />
                </CardBody>
            </Card>
        </StyledPostContainer>
    )
}