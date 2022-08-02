
const express = require("express");
const app = express();
const port =5000;
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); 
app.get("/", (req, res) => res.send("hello from express"));


//ROUTES

//create a email

app.post("/Emails", async (req, res) => {
    try {
      const data={
        mail:req.body.mail,
        channel:req.body.channel
      }
      const newEmail = await pool.query(
        `INSERT INTO Emails (mail,channel) VALUES('${data.mail}','${data.channel}') RETURNING *`
      );
  
      res.json(newEmail.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all emails
  
  app.get("/Emails", async (req, res) => {
    try {
      const allEmails = await pool.query("SELECT * FROM Emails");
      res.json(allEmails.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get an email by mail
  
  app.get("/Emails/:mail", async (req, res) => {
    try {
      const { mail } = req.params;
      const Emails = await pool.query("SELECT * FROM Emails WHERE mail = $1", [
        mail
      ]);
  
      res.json(Emails.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


//req.body
app.listen(port,()=>{
    console.log(`server has startes on port :http://localhost:${port}`);
});