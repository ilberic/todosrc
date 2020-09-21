import React, {Component} from "react";
import './PostList.sass'
import Categories from "./Categories/Categories";
import Posts from "./Posts/Posts";

export default class PostList extends Component {
    render() {
        return (
            <div className="postlist__wrapper">
                <Categories categoryChosen={this.props.categoryChosen}
                            onCategoryStateChange={this.props.onCategoryStateChange}
                            categoryState={this.props.categoryState}
                            categorySort={this.props.categorySort}
                            storeSet={this.props.storeSet}
                            storeGet={this.props.storeGet}
                            />
                <Posts posts={this.props.posts} importantSort={this.props.importantSort}
                       deletePost={this.props.deletePost}
                       />
            </div>
        )
    }
}
