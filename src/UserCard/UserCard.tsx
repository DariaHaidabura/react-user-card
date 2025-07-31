import React, { useState, useEffect } from "react";
import "./UserCard.css";
import AddUserModal from "../AddUserModal/AddUserModal";
import { User } from "../types";

const initialData: User[] = [
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
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem("users");
    try {
      const parsed = savedUsers ? JSON.parse(savedUsers) : null;
      return parsed && parsed.length > 0 ? parsed : initialData;
    } catch {
      return initialData;
    }
  });

  const [modalIsOpen, setModalsOpen] = useState(false);
  const [nameOfUser, setNameOfUser] = useState("");
  const [imageUrlOfUser, setImageUrlOfUser] = useState("");
  const [ageOfUser, setAgeOfUser] = useState("");
  const [locationOfUser, setLocationOfUser] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
    setNameOfUser("");
    setImageUrlOfUser("");
    setAgeOfUser("");
    setLocationOfUser("");
  };

  return (
    <div>
      <div className="user-grid">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img
              src={user.img}
              alt="userAvatar"
              className="avatar-placeholder"
            />
            <div className="user-info">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-age">Age: {user.age}</p>
              <p className="user-location">Location: {user.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-wrapper">
        <button onClick={() => setModalsOpen(true)} className="btn-add">
          Add User Card
        </button>
      </div>

      {modalIsOpen && (
        <AddUserModal
          onClose={() => setModalsOpen(false)}
          handleAddUser={handleAddUser}
          nameOfUser={nameOfUser}
          setNameOfUser={setNameOfUser}
          imageUrlOfUser={imageUrlOfUser}
          setImageUrlOfUser={setImageUrlOfUser}
          ageOfUser={ageOfUser}
          setAgeOfUser={setAgeOfUser}
          locationOfUser={locationOfUser}
          setLocationOfUser={setLocationOfUser}
        />
      )}
    </div>
  );
};

export default UserCard;
