import React, { MouseEventHandler, useState, SetStateAction, Dispatch } from 'react';
import SortBar from '../../components/SortBar/SortBar';
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
    currentlyInspectedUser: string,
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
    currentlyInspectedUser,
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

    const [currentProfileSection, setCurrentProfileSection] = useState("overview");
    const [optionsExpanded, setOptionsExpanded] = useState(false);
    const [hoveredSection, setHoveredSection] = useState("none");

    const date = new Date();
    let day = date.getDate();
    let monthNum = date.getMonth() + 1;
    let year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "June",
      "Juli",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = monthNames[monthNum - 1];
    let creationDate = `${month} ${day}${day - 20 === 1 ? "st" : day - 30 === 1 ? "st" : day === 1 ? "st" : day - 20 === 2 ? "nd" : day === 2 ? "nd" : "th"}, ${year}`;

    const switchProfileSection = (e: React.MouseEvent) => {
      const target = e.currentTarget;
      setCurrentProfileSection(target.id);
    }

    const hoverCard = (e: React.MouseEvent) => {
      let card = document.getElementById('card');
      card!.style.transition = "0s all";
      let xAxis = (window.innerWidth / 2 - e.pageX) / 47.5;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    const resetCard = (e: React.MouseEvent) => {
      let xAxis = 0;
      let yAxis = 0;
      let card = document.getElementById('card');
      card!.style.transition = "0.3s all";
      card!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    const hoverSection = (e: React.MouseEvent) => {
      const target = e.currentTarget;
      setHoveredSection(target.id);
    }

  return (
    <div className="profile-page">
      <div className="head">
        <div className="section overview" id="overview" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "overview" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "overview" ? "#0079d3" : hoveredSection === "overview" ? "#0079d3" : "#1a1a1b"}}>OVERVIEW</h3>
        </div>

        <div className="section posts" id="posts" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "posts" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "posts" ? "#0079d3" : hoveredSection === "posts" ? "#0079d3" : "#1a1a1b"}}>POSTS</h3>
        </div>

        <div className="section comments" id="comments" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "comments" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "comments" ? "#0079d3" : hoveredSection === "comments" ? "#0079d3" : "#1a1a1b"}}>COMMENTS</h3>
        </div>

        <div className="section saved" id="saved" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "saved" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "saved" ? "#0079d3" : hoveredSection === "saved" ? "#0079d3" : "#1a1a1b"}}>SAVED</h3>
        </div>

        <div className="section upvoted" id="upvoted" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "upvoted" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "upvoted" ? "#0079d3" : hoveredSection === "upvoted" ? "#0079d3" : "#1a1a1b"}}>UPVOTED</h3>
        </div>

        <div className="section downvoted" id="downvoted" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "downvoted" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "downvoted" ? "#0079d3" : hoveredSection === "downvoted" ? "#0079d3" : "#1a1a1b"}}>DOWNVOTED</h3>
        </div>

        <div className="section following" id="following" onClick={switchProfileSection} onMouseEnter={(e) => setHoveredSection(e.currentTarget.id)} onMouseLeave={(e) => setHoveredSection("none")} style={{ borderBottom: currentProfileSection === "following" ? "2px solid #0079d3" : ""}}>
          <h3 style={{ color: currentProfileSection === "following" ? "#0079d3" : hoveredSection === "following" ? "#0079d3" : "#1a1a1b"}}>FOLLOWING</h3>
        </div>
      </div>

      <div className="profile-content">
        <div className="feed">
          <SortBar
          currentSort={currentSort}
          setSort={setSort}
          />
        </div>

        <div className="info">
          <div className="card" style={{ height: optionsExpanded ? "722px" : "616px" }}>
            <div className="box">
              <img className="add-photo" src={require("../../resources/images/addphoto.png")} />
            </div>
            <img className="settings" src={require("../../resources/images/bluesettings.png")} />
            <div className="d-card" onMouseMove={hoverCard} id="card" onMouseLeave={resetCard}>
              <div className="card-content">
                <img className="card-icon" src={userName === "Nikola Tesla" ? userName === currentlyInspectedUser ? require(`../../resources/images/avatartesla_head.png`) : require("../../resources/images/base_variants/default1.png") : userName === currentlyInspectedUser ? require(`../../resources/images/avatar${randomIntToString}_head.png`) : require("../../resources/images/base_variants/default1.png")} />
              </div>
            </div>

            <button className="details">
              <img className="hexagon" src={require("../../resources/images/hexagon.png")} />        
              Details    
            </button>
            
            <h1>{currentlyInspectedUser === userName ? userName : currentlyInspectedUser}</h1>
            <h4>u/{currentlyInspectedUser === userName ? userName : currentlyInspectedUser} · 1d</h4>

            <button className="style">
              <img className="shirt" src={require("../../resources/images/shirt.png")} />
              <h3>Style Avatar</h3>
            </button>

            <div className="userdata">
              <div className="karma-container">
                <h3>Karma</h3>
                <div className="flexbox">
                  <img className="karma" src={require("../../resources/images/karma_blue.png")} />
                  <h4>1</h4>
                </div>
              </div>

              <div className="cake-container">
                <h3>Cake day</h3>
                <div className="flexbox">
                  <img className="cake" src={require("../../resources/images/cake.png")} />
                  <h4>{creationDate}</h4>
                </div>
              </div>
            </div>

            <div className="social-container">
              <button className="social">
                <img className="add" src={require("../../resources/images/add.PNG")} />
                <h3>Add social link</h3>
              </button>

              <button className="social">
                <img className="add" src={require("../../resources/images/add.PNG")} />
                <h3>Add GitHub</h3>
              </button>
            </div>

            <button className="create" onClick={navToSubmit}>
              New Post
            </button>

            {
              optionsExpanded ? <div className="option-container">
                <a href="https://reddit.zendesk.com/hc/en-us/articles/115002454126-What-kind-of-profile-moderation-tools-do-I-have-" target="_blank"><button className="optionButton">
                  Profile Moderation
                </button></a>

                <a href="https://reddit.zendesk.com/hc/en-us/articles/360043043412-What-is-a-custom-feed-and-how-do-I-make-one-" target="_blank"><button className="optionButton">
                  Add to Custom Feed
                </button></a>

                <button className="optionButton">
                  Invite someone to chat
                </button>
              </div> : null
            }

            <button className="expandProfile switcher" onClick={(e) => setOptionsExpanded(!optionsExpanded)}>
              {optionsExpanded ? "Fewer Options" : "More Options"}
            </button>
          </div>

          <div className="trophies">
            <h3>Trophy Case (1)</h3>

            <div className="trophy-container">
              <img className="tropy-icon" src={require("../../resources/images/onedayclub.png")} />
              <h3>One-Day Club</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}