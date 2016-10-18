import React from 'react'
import Category from './Category'

const Categories = React.createClass({

  getData() {
    return require('./../data/categories.json');
  },

  getCategories() {
    const data = this.getData();
    var categories = [];
    for (var i = 0; i < data.length; i++) {
      categories.push(<Category key={i} data={data[i]}/>);
    }
    return categories;
  },

  render() {
    const categories = this.getCategories();
    return (
      <nav>
        {categories}
      </nav>
    )
  }

});

export default Categories