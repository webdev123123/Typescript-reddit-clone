// Imports
import * as React from 'react';
// CSS Imports
import './SortBar.scss';

export interface SortBarProps {
    currentSort: string,
    setSort: React.MouseEventHandler
}

export default function SortBar (props: SortBarProps) {
  const {
    currentSort,
    setSort
  } = props;

  return (
    <div className="sortBar">
        <div className="left">
            <button className={currentSort === "best" ? "sortButton selected" : "sortButton"} id="best" onClick={setSort}>
              <img className="icon" src={require(`../../resources/images/best_${currentSort === "best" ? "" : "not"}selected.png`)} />
              <p className={currentSort === "best" ? "selected" : ""}>Best</p>
            </button>
            <button className={currentSort === "hot" ? "sortButton selected" : "sortButton"} id="hot" onClick={setSort}>
              <img className="icon" src={require(`../../resources/images/hot_${currentSort === "hot" ? "" : "not"}selected.png`)} />
              <p className={currentSort === "hot" ? "selected" : ""}>Hot</p>
            </button>
      
            <button className={currentSort === "new" ? "sortButton selected" : "sortButton"} id="new" onClick={setSort}>
              <img className="icon" src={require(`../../resources/images/new_${currentSort === "new" ? "" : "not"}selected.png`)} />
              <p className={currentSort === "new" ? "selected" : ""}>New</p>
            </button>
      
            <button className={currentSort === "top" ? "sortButton selected" : "sortButton"} id="top" onClick={setSort}>
              <img className="icon" src={require(`../../resources/images/top_${currentSort === "top" ? "" : "not"}selected.png`)} />
              <p className={currentSort === "top" ? "selected" : ""}>Top</p>
            </button>
      
            <button className="sortButton" id="more">
              <img className="icon" src={require("../../resources/images/more.PNG")} />
            </button>
        </div>

        <div className="right">
            <button className="sortButton">
              <img className="icon" src={require("../../resources/images/layout.png")} id="layout" />
              <img className="icon expand" src={require("../../resources/images/expand.png")} />
            </button>
        </div>
    </div>
  );
}
