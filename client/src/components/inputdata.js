import './Inputdata.css';
import React, { Fragment, useState } from "react";

const InputData = () => {


  const [mail, setMail] = useState("");
  const [channel, setChannel] = useState("");


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { mail,channel };
      const response = await fetch("http://localhost:5000/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const search = async e => {
    e.preventDefault();
    try {
      const body = {mail};
      const response = await fetch(`http://localhost:5000/emails/${mail}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment>
      <div className="app">
      <h1 >Email Subscription</h1>
      <form  onSubmit={onSubmitForm}>
      <label >Email address</label>
        <input
          type="text"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />

        <label>channel name</label>

        <input
          type="text"
          
          value={channel}
          onChange={e => setChannel(e.target.value)}
        />
        
        <button >Add</button>

      </form>
      </div>
    </Fragment>
  );
};

export default InputData;