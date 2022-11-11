import React, { MouseEventHandler, useState, SetStateAction, Dispatch } from 'react';
import { Subreddits, Subreddit, Post } from '../../types/types';
import './ProfilePage.scss';

export interface ProfilePageProps {
    randomIntToString: string,
    userName: string,
    currentSort: string,
    currentSub: Subreddit | undefined,
    setSort: React.MouseEventHandler;
    subreddits: Subreddits,
    topSubreddits: Subreddits,
    renderNum: number,
    setRenderNum: Dispatch<SetStateAction<number>>,
    currentEditedComment: string,
    setIndex: Dispatch<SetStateAction<number | undefined>>
    writeNestedComment: any,
    editComment: any,
    editNestedComment: any,
    savePost: MouseEventHandler,
    enablePremium: MouseEventHandler,
    submitNestedComment: MouseEventHandler
    handleSubMembership: React.MouseEventHandler,
    handleNavigate: MouseEventHandler,
    handleLike: MouseEventHandler,
    navToSubmit: MouseEventHandler,
    openPost: MouseEventHandler,
    submitComment: MouseEventHandler,
    handleLikeComment: MouseEventHandler,
    handleNestedComment: MouseEventHandler,
    loginStatus: boolean,
    setLoginModalState: any,
    loginModalState: string,
    posts: Post[],
    currentPost: Post | undefined,
    mainComment: string,
    writeComment: any
}

export default function ProfilePage (props:  ProfilePageProps) {
  const {
    randomIntToString,
    userName,
    currentSort,
    currentSub,
    renderNum,
    setRenderNum,
    currentPost,
    mainComment,
    writeComment,
    setSort,
    subreddits,
    topSubreddits,
    setIndex,
    currentEditedComment,
    writeNestedComment,
    editComment,
    enablePremium,
    editNestedComment,
    savePost,
    submitNestedComment,
    handleNestedComment,
    handleLikeComment,
    submitComment,
    openPost,
    handleSubMembership,
    handleLike,
    handleNavigate,
    navToSubmit,
    loginStatus,
    setLoginModalState,
    loginModalState,
    posts
    } = props;

  return (
    <div className="profile-page">
      <div className="head">
        <div className="section overview">
          <h3>OVERVIEW</h3>
        </div>

        <div className="section posts">
          <h3>POSTS</h3>
        </div>

        <div className="section comments">
          <h3>COMMENTS</h3>
        </div>

        <div className="section saved">
          <h3>SAVED</h3>
        </div>

        <div className="section upvoted">
          <h3>UPVOTED</h3>
        </div>

        <div className="section downvoted">
          <h3>DOWNVOTED</h3>
        </div>

        <div className="section following">
          <h3>FOLLOWING</h3>
        </div>
      </div>
    </div>
  );
}
