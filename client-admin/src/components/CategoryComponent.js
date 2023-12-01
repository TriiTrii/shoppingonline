import React, { Component } from 'react';
import axios from 'axios';
import MyContext from '../contexts/MyContext';
import CategoryDetail from './CategoryDetailComponent';

class Category extends Component {
  static contextType = MyContext;

  state = {
    categories: [],
    itemSelected: null,
  };

  componentDidMount() {
    this.apiGetCategories();
  }

  trItemClick = (item) => {
    this.setState({ itemSelected: item });
  };

  updateCategories = (categories) => {
    this.setState({ categories: categories });
  };

  apiGetCategories() {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/admin/categories', config)
      .then((res) => {
        const result = res.data;
        this.setState({ categories: result });
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }

  render() {
    const { categories, itemSelected } = this.state;

    const cates = categories.map((item) => (
      <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
        <td>{item._id}</td>
        <td>{item.name}</td>
      </tr>
    ));

    return (
        <div className="category-container">
        <div className="category-list">
          <h2 className="category-title">CATEGORY LIST</h2>
          <table className="category-table">
            <tbody>
              <tr className="datatable">
                <th>ID</th>
                <th>Name</th>
              </tr>
              {cates}
            </tbody>
          </table>
        </div>

        <div className="inline" />
        
        <CategoryDetail item={itemSelected} updateCategories={this.updateCategories} />

        <div className="float-clear" />
      </div>
    );
  }
}

export default Category;
