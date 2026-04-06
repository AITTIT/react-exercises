import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "./UserList";

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!user) {
    return (
      <div>
        <Link to={'/users'}>Back to list</Link>
        <p>Loading user...</p>
      </div>
    );
  }

  // next create the singular fetch here to display information.
  return (
    <div>
      <Link to={'/users'} className="text-blue-500 m-4">Back to list</Link>
      <h3 className="text-2xl py-4">{user.name}</h3>
      <p className="py-5">Phone: {user.phone}</p>
      <p className="text-blue-500">{user.email}</p>
    </div>
  );
}
