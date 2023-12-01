// Payment.js
import React from 'react';

class Payment extends React.Component {
  render() {
    // Sử dụng props để nhận giá trị totalAmount được truyền từ Mycart
    const { totalAmount } = this.props.location.state || {};

    return (
      <div>
        <h2>Total Amount: {totalAmount}</h2>
        {/* Các phần khác của trang Payment nếu có */}
      </div>
    );
  }
}

export default Payment;
