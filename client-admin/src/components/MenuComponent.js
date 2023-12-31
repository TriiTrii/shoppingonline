import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';

class Menu extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div>

        {/* Menu */}
        <div className="menu-container border-bottom">
          <div className="float-left">
            <ul className="menu">
              <li className="menu"><Link to='/admin/home'>Home</Link></li>
              <li className="menu"><Link to='/admin/category'>Category</Link></li>
              <li className="menu"><Link to='/admin/product'>Product</Link></li>
              <li className="menu"><Link to='/admin/order'>Order</Link></li>
              <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
            </ul>
          </div>
          <div className="float-right user-info">
            Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
          </div>
          <div className="float-clear" />
        </div>
      </div>
    );
  }

  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}

export default Menu;
