import React from 'react';
import styles from './Public_login.module.css';
import Public_Navbar from './Public_Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Public_login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('https://e-commerce-application-fdjs.onrender.com/sample/login/', {
        username,
        password
      });
      const data = response.data;
      console.log(data);

      // Redirect based on category
      if (data.category === 'admin') navigate('/admin_home');
      else if (data.category === 'shop') navigate('/shop');
      else if (data.category === 'customer') navigate('/customer_home');
      
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <>
      <Public_Navbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required className={styles.inputField} />
          <input type="password" name="password" placeholder="Password" required className={styles.inputField} />
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Public_login;