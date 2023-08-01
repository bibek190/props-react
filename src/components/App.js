import React from "react";
import "../index.css";
import Card from "./Card";
import contacts from "./contacts";

const createCard = (contact) => {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      number={contact.phone}
      email={contact.email}
      id={contact.id}
    />
  );
};

const App = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
};

export default App;
