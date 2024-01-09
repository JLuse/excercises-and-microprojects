import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const auth = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.login(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
