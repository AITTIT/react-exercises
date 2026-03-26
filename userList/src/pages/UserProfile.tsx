import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { userId } = useParams();
    console.log(userId);


    // next create the singular fetch here to display information.
    return <div>Profile of {userId}</div>;
}