import React, {Component} from "react";
import './Posts.sass'
import Post from "./Post/Post";

export default class Posts extends Component {
    render() {

        this.props.importantSort()
        let newArr = this.props.posts.map((post, i) => <Post key={i}
                                                             important={post.important}
                                                             look={post.look}
                                                             PostTitle={post.PostTitle}
                                                             PostDescr={post.PostDescr}
                                                             deletePost={this.props.deletePost}
                                                        />)

        return (
            <div className="posts__wrapper">
                {newArr}
            </div>
        )
    }


}
