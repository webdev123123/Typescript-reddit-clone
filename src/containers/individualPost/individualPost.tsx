import React, { MouseEventHandler, Dispatch, SetStateAction } from 'react';
import { Subreddits, Subreddit, Post } from '../../types/types';
import { ReactComponent as Cross } from "../../resources/images/cross.svg";
import './individualPost.scss';
import GridPost from '../../components/GridPost/GridPost';
import SubredditSideBar from '../../components/SubredditSideBar/SubredditSideBar';
import SubmitPage from '../SubmitPage/SubmitPage';

export interface individualPostProps {
    randomIntToString: string,
    userName: string,
    currentSort: string,
    currentSub: Subreddit | undefined,
    setSort: React.MouseEventHandler;
    subreddits: Subreddits,
    topSubreddits: Subreddits,
    handleSubMembership: MouseEventHandler,
    handleNavigate: MouseEventHandler,
    handleLike: MouseEventHandler,
    navToUserProfile: MouseEventHandler,
    navToSubmit: MouseEventHandler,
    openPost: MouseEventHandler,
    loginStatus: boolean,
    setLoginModalState: any,
    submitPage: boolean,
    loginModalState: string,
    currentEditedComment: string,
    posts: Post[],
    currentPost: Post | undefined,
    communityTheme: boolean,
    communityOptions : boolean,
    mainComment: string,
    writeComment: any,
    setIndex: Dispatch<SetStateAction<number | undefined>>
    writeNestedComment: any,
    editComment: any,
    editNestedComment: any,
    navToProfile: MouseEventHandler,
    submitNestedComment: MouseEventHandler
    expandRule: MouseEventHandler,
    handleLikeComment: MouseEventHandler,
    switchCommunityTheme: MouseEventHandler,
    submitComment: MouseEventHandler,
    closePost: MouseEventHandler,
    switchCommunityOptions: MouseEventHandler,
    savePost: MouseEventHandler,
    handleNestedComment: MouseEventHandler,
    standardTheme: {
      buttonColor: string,
      headerColor: string,
      banner: string
    }
}

export default function IndividualPost (props: individualPostProps) {
  const {
    randomIntToString,
    userName,
    currentSort,
    currentSub,
    setSort,
    subreddits,
    topSubreddits,
    currentEditedComment,
    mainComment,
    submitPage,
    writeComment,
    setIndex,
    writeNestedComment,
    editComment,
    editNestedComment,
    navToProfile,
    savePost,
    submitNestedComment,
    handleSubMembership,
    navToUserProfile,
    handleNestedComment,
    closePost,
    handleNavigate,
    submitComment,
    handleLike,
    navToSubmit,
    openPost,
    expandRule,
    switchCommunityOptions,
    handleLikeComment,
    switchCommunityTheme,
    communityOptions,
    communityTheme,
    standardTheme,
    loginStatus,
    setLoginModalState,
    loginModalState,
    posts,
    currentPost
  } = props;

  return (
    <div className="post-page" style={{ backgroundColor: currentSub?.backgroundColor === "#edeff1" ? "#2e2f2f" : currentSub?.backgroundColor }}>
      <div className="pageHeader">
        <div className="leftHeader">
          <img className="postIcon" src={require("../../resources/images/post.png")} />
          <h3>{currentPost!.title!.length >= 95 ? currentPost?.title!.substring(0, 95) + " (...)" : currentPost?.title}</h3>
          {currentPost?.flair.title !== "none" && <button className="flairBtn" style={{ backgroundColor: currentPost?.flair!.color }}>{currentPost?.flair!.title}</button>}
        </div>

        <div className="rightHeader" onClick={closePost}>
          <img className="cross" src={require("../../resources/images/cross.png")} />
          <h3>Close</h3>
        </div>
      </div>

      <div className="postContent" style={{ backgroundColor: "#dae0e6" }}>
        <div className="left">
         <GridPost 
            post={currentPost}
            posts={posts}
            currentSub={currentSub} 
            currentPost={currentPost}
            handleNavigate={handleNavigate}
            handleLike={handleLike}
            openPost={openPost}
            userName={userName}
            mainComment={mainComment}
            writeComment={writeComment}
            submitComment={submitComment}
            handleLikeComment={handleLikeComment}
            loginStatus={loginStatus}
            handleNestedComment={handleNestedComment}
            setIndex={setIndex}
            writeNestedComment={writeNestedComment}
            submitNestedComment={submitNestedComment}
            currentEditedComment={currentEditedComment}
            editComment={editComment}
            editNestedComment={editNestedComment}
            randomIntToString={randomIntToString}
            savePost={savePost}
            navToUserProfile={navToUserProfile}
            navToProfile={navToProfile}
          />
        </div>

        <div className="right">
          <SubredditSideBar
            communityTheme={communityTheme}
            currentSub={currentSub}
            standardTheme={standardTheme}
            loginStatus={loginStatus}
            randomIntToString={randomIntToString}
            navToSubmit={navToSubmit}
            switchCommunityTheme={switchCommunityTheme}
            expandRule={expandRule}
            userName={userName}
            switchCommunityOptions={switchCommunityOptions}
            communityOptions={communityOptions}
            currentPost={currentPost}
            handleNavigate={handleNavigate}
            submitPage={submitPage}
            navToProfile={navToProfile}
          />
        </div>
      </div>
    </div>
  );
}
