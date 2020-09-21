import React, {Component} from "react"

export default class CategoryAdd extends Component{
    category() {
        this.props.addCategoryChosen(this.props.categoryTitle);
        this.props.onCategoryChange(this.props.categoryTitle);
    }

    color() {
        if (this.props.addChosen) {
            return '#fff'
        } else {
            return '#bdbdbd'
        }
    }
    render() {
        return (
            <span onClick={this.category.bind(this)} style={{backgroundColor: this.color()}}>{this.props.categoryTitle}</span>
        )
    }


}
