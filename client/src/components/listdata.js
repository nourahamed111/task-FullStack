 import React, { Fragment, useEffect, useState } from "react";


const ListData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/emails");
      const jsonData = await response.json();

      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <Fragment>

     {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
          <th>Id</th>
          <th>email</th>
          <th>channel</th>
          </tr>
        </thead>
        <tbody>
            {data.map(emails => (
            <tr key={emails.id}>
              <td>{emails.id}</td>
              <td>{emails.mail}</td>
              <td>{emails.channel}</td>

              
            </tr>
          ))}
        
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListData;
