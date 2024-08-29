import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Login from './Login';
import SignUp from './SignUp';

const Slider = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="slider-container">
      <motion.div
        className="slider"
        initial={{ x: isLogin ? 0 : 300 }}
        animate={{ x: isLogin ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        {isLogin ? <Login /> : <SignUp />}
      </motion.div>
      <button onClick={toggleForm}>
        {isLogin ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </div>
  );
};

export default Slider;
