import type { Dispatch, SetStateAction } from 'react';

type LoginFormProps = {
  username: string;
  password: string;
  error: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleLogin: (e: React.SyntheticEvent) => Promise<void>;
};

export default function LoginForm({
  username,
  password,
  error,
  setUsername,
  setPassword,
  handleLogin
}: LoginFormProps) {
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold mb-2 text-center">JWT Login Test</h2>
      <p className="text-sm text-gray-500 mb-4 text-center">
        Tip: Use the default credentials to get a real token!
      </p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold">
        Log In (POST)
      </button>
    </form>
  );
}

