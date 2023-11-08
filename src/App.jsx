import { useState } from 'react'
import './App.css'
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";




export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

