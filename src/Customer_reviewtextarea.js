import React from 'react';
import styless from './Customer_reviewtextarea.module.css';

const Customer_reviewtextarea = () => {
  return (
    <div className={styless.reviewContainer}>
      <textarea 
        className={styless.reviewTextarea} 
        placeholder="Enter your Review"
      ></textarea>
      <button type="submit" className={styless.submitBtn}>
        Submit
      </button>
    </div>
  );
};

export default Customer_reviewtextarea;
