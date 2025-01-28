import React from "react";
import "../../app/globals.css";
import List from "../components/List";
import Form from "../components/Form";
import logo from "../assets/logo.png";
function HomeList() {
  return (
    <div className="w-full h-full ">
      <img
        src={logo.src}
        alt="Ícone escrito to-do List"
        className="w-36 m-auto"
      />
      <main>
        <Form />
        <List />
      </main>
    </div>
  );
}

export default HomeList;
