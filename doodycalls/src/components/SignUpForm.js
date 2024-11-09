import React from 'react';
import './SignUpForm.css';

function SignUpForm() {
  return (
    <div className="sign-up-form">
      <h3>Log in to Poop Today!</h3>
      <button className="google-sign-up">Sign up with Google</button>
      <p>Or use your email address</p>
      <input type="text" placeholder="Your first name" />
      <input type="text" placeholder="Your last name" />
      <input type="email" placeholder="Your email address" />
      <input type="password" placeholder="Pick a password" />
      <button className="sign-up-button">Sign Up for Amazing Poops</button>
    </div>
  );
}

export default SignUpForm;
