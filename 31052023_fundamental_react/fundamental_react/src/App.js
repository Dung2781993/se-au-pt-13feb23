import "./App.css";
import { useState } from "react";

const Login = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Login' }</h1>
      <button onClick={() => {isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)}}>
        {isLoggedIn ? 'Logout' : 'Login' }  
      </button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default App;
