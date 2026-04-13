import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import LoginForm from './components/LoginForm';
import { login } from './services/api';

export default function App() {
  // Default credentials for the free DummyJSON test API
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const data = await login({
        username,
        password
      });

      localStorage.setItem('my_real_token', data.accessToken);
      setToken(data.accessToken);
      setIsLoggedIn(true);

    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('my_real_token');
    setIsLoggedIn(false);
    setToken('');
  };

  return (
    <div className="p-8 max-w-lg mx-auto mt-10 font-sans">
      
      {isLoggedIn ? (
        <div>
          {/* Top bar for logged in users */}
          <div className="bg-zinc-800 p-4 rounded-xl flex items-center justify-between shadow-md mb-6">
            <span className="text-green-500 font-bold px-2">You are logged <br/>in!</span>
            <div className="bg-white text-gray-600 text-xs p-2 rounded w-40 truncate">
              Your token:<br/>{token}
            </div>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-colors">
              Logout
            </button>
          </div>
          
          {/* Placeholder for Part 2 */}
          <FeedbackForm />
        </div>
      ) : (
        <LoginForm
          username={username}
          password={password}
          error={error}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}