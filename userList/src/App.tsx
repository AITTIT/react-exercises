import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import UserProfile from "./pages/UserProfile";
import UserList from "./pages/UserList";

function Home() {
  return <div className="p-8 text-xl">Welcome to the User App!</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation - The Link component replaces the traditional <a> tag */}
      <nav className="p-4 bg-zinc-800 text-white flex gap-6 text-xl">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/users" className="hover:text-blue-300">Users</Link>
      </nav>

      {/* Routes - Defining which component is shown at which URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path='/users/:userId' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}