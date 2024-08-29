import React from 'react';
import Slider from './Slider';
const SignUp = () => {
  return (
    <>

    <Slider/>
    <div className="form-container">

      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};

export default SignUp;
