import React, {Component} from "react";
import './Category.sass'

export default class Category extends Component {
    sortCategories() {
        this.props.categorySort(this.props.categoryTitle)
        this.props.categoryChoose(this.props.categoryTitle)
    }

    color() {
        if (this.props.categoryChosen) {
            return '#fff'
        } else {
            return '#bdbdbd'
        }

    }

    render() {
        return (
            <div className="category__item" style={{backgroundColor: this.color()}}
                 onClick={this.sortCategories.bind(this)}>
                {this.props.categoryTitle}
            </div>
        )
    }

}
