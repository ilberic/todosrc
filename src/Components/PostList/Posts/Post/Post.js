import React from "react";
import './Post.sass'

const Post = ({PostTitle, PostDescr, look, important, deletePost}) => {
    if (look === true) {
        look = "active"
    } else {
        look = ""
    }

    function postDelete () {
        deletePost(PostTitle)
    }

    let color
    if (important === "1") {
        color = "#bed169"
    } else if (important === "2") {
        color = "#d47657"
    } else {
        color = "#a8e0b7"
    }

    return (
        <div className={`post__wrapper ${look}`} style={{backgroundColor: color}}>
            <div className="post__wrapper-text">
                <span className="post__wrapper-text_title">
                    {PostTitle}
                </span>
                <span className="post__wrapper-text_descr">
                    {PostDescr}
                </span>
            </div>
            <div className="post__wrapper-btn" onClick={postDelete}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828743.svg" alt="check"/>
            </div>
        </div>
    )
}

export default Post