import React from "react";
import "./AddUserModal.css";
import { User } from "../types";

type AddUserModalProps = {
  onClose: () => void;
  handleAddUser: (newUser: User) => void;
  nameOfUser: string;
  imageUrlOfUser: string;
  setNameOfUser: React.Dispatch<React.SetStateAction<string>>;
  setImageUrlOfUser: React.Dispatch<React.SetStateAction<string>>;
  ageOfUser: string;
  setAgeOfUser: React.Dispatch<React.SetStateAction<string>>;
  locationOfUser: string;
  setLocationOfUser: React.Dispatch<React.SetStateAction<string>>;
};

const AddUserModal: React.FC<AddUserModalProps> = ({
  onClose,
  handleAddUser,
  nameOfUser,
  setNameOfUser,
  imageUrlOfUser,
  setImageUrlOfUser,
  ageOfUser,
  setAgeOfUser,
  locationOfUser,
  setLocationOfUser,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: User = {
      id: Date.now(),
      name: nameOfUser,
      img: imageUrlOfUser,
      age: Number(ageOfUser),
      location: locationOfUser,
    };

    handleAddUser(newUser);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add New User</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              value={nameOfUser}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Zа-яА-ЯёЁ.\s]*$/.test(value)) {
                  setNameOfUser(value);
                }
              }}
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              placeholder="Enter image link"
              value={imageUrlOfUser}
              onChange={(e) => setImageUrlOfUser(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              placeholder="Enter age"
              value={ageOfUser}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setAgeOfUser(value);
                }
              }}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter location"
              value={locationOfUser}
              onChange={(e) => setLocationOfUser(e.target.value)}
            />
          </div>

          <div className="modal-buttons">
            <button type="submit" className="btn add">
              Add
            </button>
            <button type="button" onClick={onClose} className="btn cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
