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
      <h1 className="text-center mt-5">Email Subscription</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <label for="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          value={mail}
          onChange={e => setMail(e.target.value)}
        />

        <label for="exampleInputEmail1">channel name</label>

        <input
          type="text"
          className="form-control"
          value={channel}
          onChange={e => setChannel(e.target.value)}
        />
        
        <button className="btn btn-success">Add</button>

                
            
        
           
      </form>
    </Fragment>
  );
};

export default InputData;