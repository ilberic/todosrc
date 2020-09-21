import React, {Component} from "react";
import './AddPost.sass'
import CategoryAdd from "./CategoryAdd/CategoryAdd";

export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            descr: "",
            important: 0,
            category: ""
        }
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    onDescrChange(e) {
        this.setState({
            descr: e.target.value
        });
    }

    onImportantChange(e) {
        this.setState({
            important: e.target.value
        });
    }

    onCategoryChange(categoryTitle) {
        this.setState({
            category: categoryTitle
        })
    }

    addNewPost() {
        if (this.state.title.length > 5 && this.state.descr.length > 5) {
            this.props.addPost(this.state.title, this.state.descr, this.state.important, this.state.category)
            this.setState({
                title: "",
                descr: "",
                important: 0
            })

            alert('Новая задача успешно добавлена!')
        } else {
            alert('Некорректные данные! Поля должны содержать не менее 5 символов.')
        }
    }

    render() {
        let categoriesArr = this.props.categoryState.map(category => <CategoryAdd
            onCategoryChange={this.onCategoryChange.bind(this)}
            addChosen={category.addChosen}
            categoryTitle={category.categoryTitle}
            addCategoryChosen={this.props.addCategoryChosen}
        />)
        return (
            <div className="addpost__wrapper">
                <input placeholder="Что надо сделать (Кратко)?" value={this.state.title}
                       onChange={this.onTitleChange.bind(this)}/>
                <input placeholder="А поподробнее?" value={this.state.descr} onChange={this.onDescrChange.bind(this)}/>
                <div>
                    <span>Насколько срочно?</span>
                    <input type="range" min="0" max="2" step="1" value={this.state.important}
                           onChange={this.onImportantChange.bind(this)}/>
                </div>
                <div className="categoryadd">
                    <span>Выберите категорию:</span>
                    <div className="categoryadd__wrapper">
                        {categoriesArr}
                    </div>
                </div>

                <div className="addpost__wrapper-btn" onClick={this.addNewPost.bind(this)}>
                    Добавить
                </div>
            </div>
        )
    }

}
