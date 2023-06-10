import { useState } from 'react';

const Login = () => {

  //Option 1: Using Reference => Ref
  // const email = useRef();
  // const password = useRef();

  //Option 2: Using State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // const emailValue = email.current.value
    // const passwordValue = password.current.value

    console.log(email);
    console.log(password);

    //Validation step
    if (!email || !password) {
      alert('Your email or password is missing');
      return;
    }

    console.log('Submiting');
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        {/* <input id="email" type="text" ref={email} /> */}
        <input 
          id="email"
          type="text"
          value={email}
          onChange={handleEmail} 
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        {/* <input id="password" type="password" ref={password} /> */}
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Login;