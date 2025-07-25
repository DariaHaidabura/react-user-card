import React, { useState } from "react";
import "./UserCard.css";

type User = {
  name: string;
  img: string;
  age: number;
  location: string;
};

const data: User[] = [
  {
    name: "John Doe",
    img: "https://st.depositphotos.com/2783505/3522/i/950/depositphotos_35227467-stock-photo-portrait-of-a-smiling-hispanic.jpg",
    age: 30,
    location: "New York",
  },
  {
    name: "Anna Romanova",
    img: "https://st4.depositphotos.com/3977247/24801/i/1600/depositphotos_248019718-stock-photo-emotion-portrait-beautiful-blonde-caucasian.jpg",
    age: 35,
    location: "London",
  },
  {
    name: "Anton Smirnov",
    img: "https://st3.depositphotos.com/3977247/36702/i/1600/depositphotos_367022168-stock-photo-young-handsome-man-portrait-identity.jpg",
    age: 25,
    location: "Los Angeles",
  },
];
const UserCard: React.FC = () => {
  const [users, setUsers] = useState(data);
  return (
    <div className="user-grid">
      {users.map((user, index) => (
        <div className="user-card" key={index}>
          <img
            src={user.img}
            alt={"userAvatar"}
            className="avatar-placeholder"
          />
          <div className="user-info">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-age">Age: {user.age}</p>
            <p className="user-location">Location:{user.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
