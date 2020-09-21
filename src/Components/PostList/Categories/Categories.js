import React, {Component} from "react";
import './Categories.sass'
import Category from "./Category/Category";


export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onTitleChange(e) {
        this.setState(
            {
                text: e.target.value
            }
        )
    }

    addNewCategory() {
        if (this.state.text.length > 4) {
            const newCategory = {
                categoryTitle: this.state.text,
                id: 4,
                chosen: false
            }
            this.props.onCategoryStateChange(
                ({data}) => {
                    let newArr = [...data, newCategory];
                    this.props.storeSet('data', newArr)
                    return {
                        data: this.props.storeGet('data')
                    }
                }
            )
            this.setState({
                text: ""
            })
            alert('Новая категория успешно добавлена!')
        } else {
            alert('Некорректные данные! Название должно содержать не менее 4 символов.')
        }
    }

    render() {
        const arr = this.props.categoryState;
        const newArr = arr.map((category, i) => <Category categoryChoose={this.props.categoryChosen}
                                                          key={i}
                                                          categoryChosen={category.chosen}
                                                          categoriesData={this.props.categoryState.categoryTitle}
                                                          categorySort={this.props.categorySort}
                                                          categoryTitle={category.categoryTitle}/>);
        return (
            <div className="categories__wrapper">
                <div className="categories__wrapper-items">
                    {newArr}
                </div>
                <div className="categories__wrapper-new">
                    <input placeholder="Новая категория" value={this.state.text}
                           onChange={this.onTitleChange.bind(this)} id="category__name"/>
                    <div className="categories__wrapper-btn" onClick={this.addNewCategory.bind(this)}>+</div>
                </div>
            </div>
        )
    }
}