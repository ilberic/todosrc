import React, {Component} from 'react';
import './App.sass';
import PostList from "./Components/PostList/PostList";
import AddPost from "./Components/AddPost/AddPost";
import {HashRouter, Route} from "react-router-dom"
import {NavLink} from "react-router-dom"
import * as store from "store";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: store.get("data"),
            posts: store.get("posts")
        }
    }

    onCategoryStateChange(obj) {
        this.setState(obj)
    }

    importantSort() {
            this.state.posts = this.state.posts.sort((a, b) => b.important - a.important);
    }

    addPost(title, descr, important, category) {
        const newItem = {
            PostTitle: title,
            PostDescr: descr,
            important: important,
            id: Math.random(),
            look: true,
            category: category
        }
        this.setState(({posts}) => {
            const newArr = [...posts, newItem];
            store.set("posts", newArr);
            return ({
                posts: newArr
            })
        })


    };

    categorySort(categoryName) {
        this.setState(({posts}) => {
            let newArr = posts.map(post => {
                if (post.category === categoryName) {
                    return {
                        important: post.important,
                        PostTitle: post.PostTitle,
                        PostDescr: post.PostDescr,
                        category: post.category,
                        id: post.id,
                        look: true
                    }
                } else if (categoryName === "Все категории") {
                    return {
                        important: post.important,
                        PostTitle: post.PostTitle,
                        PostDescr: post.PostDescr,
                        category: post.category,
                        id: post.id,
                        look: true
                    }
                } else {
                    return {
                        important: post.important,
                        PostTitle: post.PostTitle,
                        PostDescr: post.PostDescr,
                        category: post.category,
                        id: post.id,
                        look: false
                    }
                }
            })
            return {
                posts: newArr
            }
        })
    }

    categoryChosen(categoryName) {
        this.setState(({data}) => {
            let newArr = data.map(category => {
                if (category.categoryTitle === categoryName) {
                    return {categoryTitle: category.categoryTitle, id: 0, chosen: true}
                } else {
                    return {categoryTitle: category.categoryTitle, id: 0, chosen: false}
                }
            })
            return {
                data: newArr
            }
        })
    }

    addCategoryChosen(categoryName) {
        this.setState(({data}) => {
            let newArr = data.map(category => {
                if (category.categoryTitle === categoryName) {
                    return {categoryTitle: category.categoryTitle, id: 0, chosen: true, addChosen: true}
                } else {
                    return {categoryTitle: category.categoryTitle, id: 0, chosen: false, addChosen: false}
                }
            })
            return {
                data: newArr
            }
        })
    }

    deletePost(PostTitle) {
        const index = this.state.posts.findIndex((elem) => elem.PostTitle === PostTitle);
        const before = this.state.posts.slice(0, index);
        const after = this.state.posts.slice(index + 1);
        const newArr = [...before, ...after];

        store.set("posts", newArr)

        this.setState(() => {
            return {
                posts: store.get('posts')
            }
        });
    }

    storeSet (data, arr) {
        return store.set(data, arr)
    }

    storeGet (data) {
        return store.get(data)
    }



    render() {
        window.state = this.state
        if (this.state.posts === undefined)    {
            store.set("posts", [])
        }
        if (this.state.posts === undefined)    {
            store.set("data", [{categoryTitle: "Все категории", id: 0, chosen: true, addChosen: true}])
        }
        return (
            <HashRouter>
                <div className="container">
                    <div className="logo">
                        <span>To</span>
                        <span>dO</span>
                    </div>
                    <Route render={() => <PostList categoryChosen={this.categoryChosen.bind(this)}
                                                   onCategoryStateChange={this.onCategoryStateChange.bind(this)}
                                                   importantSort={this.importantSort.bind(this)}
                                                   categorySort={this.categorySort.bind(this)} posts={this.state.posts}
                                                   categoryState={this.state.data}
                                                   deletePost={this.deletePost.bind(this)}
                                                   storeSet={this.storeSet.bind(this)}
                                                   storeGet={this.storeGet.bind(this)}
                                                   />} path="/" exact/>
                    <Route render={() => <AddPost categoryState={this.state.data}
                                                  addCategoryChosen={this.addCategoryChosen.bind(this)}
                                                  addPost={this.addPost.bind(this)}/>} path="/add"
                                                  exact/>
                    <Route render={() => <NavLink className="button" to="/">Вернуться к задачам</NavLink>} exact
                           path="/add"/>
                    <Route render={() => <NavLink className="button" to="/add">Добавить задачу</NavLink>} exact
                           path="/"/>
                </div>
            </HashRouter>
        )
    };
}