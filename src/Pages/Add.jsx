import axios from "axios";
import React, { useState } from "react";

function Add() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(
        "https://pr-11-realtime-firebase-default-rtdb.firebaseio.com/users.json",
        {
          name: name,
          company: company,
          email: email,
          phone: phone,
          message: message,
        }
      );
      console.log(data);
      setName('')
      setCompany('')
      setEmail('')
      setPhone('')
      setMessage('')
      alert("Record insert successfunlly")
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      {/* <h1>Add Page</h1> */}
      <div
        style={{
          boxShadow: " 0 0 2px #EF4949",
          display: "flex",
          width: "56%",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: "100px",
        }}
      >
        <div
          style={{ width: "30%", height: "550px", backgroundColor: "#EF4949" }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: "25px",
              color: "white",
              textAlign: "center",
              padding: "25px",
            }}
          >
            User's Details
          </h1>
          <br />
          <br />
          <h5
            style={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.918)",
              margin: "0",
              padding: "3px",
            }}
          >
            Name
          </h5>
          <h5
            style={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.918)",
              margin: "0",
              padding: "3px",
            }}
          >
            Company
          </h5>
          <h5
            style={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.918)",
              margin: "0",
              padding: "3px",
            }}
          >
            Email
          </h5>
          <h5
            style={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.918)",
              margin: "0",
              padding: "3px",
            }}
          >
            Phone
          </h5>
        </div>
        <div
          style={{
            paddingLeft: "30px",
            width: "70%",
            height: "500px",
            margin: "20px",
          }}
        >
          <h1 style={{ margin: "0", fontSize: "25px", paddingBottom: "50px" }}>
            Email Us
          </h1>
          <form style={{ display: "flex", flexWrap: "wrap" }}>
            <label style={{ width: "50%" }}>
              <h4 style={{ margin: "0" }}>Name :-</h4>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name=""
                id=""
                style={{
                  padding: "5px",
                  marginTop: "5px",
                  width: "200px",
                  border: "1px solid red",
                  borderRadius: "4px",
                }}
              />
            </label>
            <label style={{ width: "50%" }}>
              <h4 style={{ margin: "0" }}>Company :-</h4>
              <input
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                type="text"
                name=""
                id=""
                style={{
                  padding: "5px",
                  marginTop: "5px",
                  width: "200px",
                  border: "1px solid red",
                  borderRadius: "4px",
                }}
              />
            </label>
            <label style={{ width: "50%", marginTop: "40px" }}>
              <h4 style={{ margin: "0" }}>Email Address :-</h4>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name=""
                id=""
                style={{
                  padding: "5px",
                  marginTop: "5px",
                  width: "200px",
                  border: "1px solid red",
                  borderRadius: "4px",
                }}
              />
            </label>
            <label style={{ width: "50%", marginTop: "40px" }}>
              <h4 style={{ margin: "0" }}>Phone Number :-</h4>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                name=""
                id=""
                style={{
                  padding: "5px",
                  marginTop: "5px",
                  width: "200px",
                  border: "1px solid red",
                  borderRadius: "4px",
                }}
              />
            </label>
            <label style={{ width: "50%", marginTop: "60px" }}>
              <h4 style={{ margin: "0", marginBottom: "5px" }}>Message :- </h4>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name=""
                id=""
                cols="68"
                rows="5"
                style={{ border: "1px solid red", borderRadius: "4px" }}
              ></textarea>
            </label>
          </form>
          <button
            type="button"
            onClick={Submit}
            style={{
              width: "94%",
              backgroundColor: "#EF4949",
              padding: "10px",
              border: "0",
              color: "rgba(255, 255, 255, 0.918)",
              marginTop: "55px",
            }}
          >
            Submit
          </button>
        </div>
      </div>

      {/* <Link style={{textAlign:'center',margin:'0 auto'}} to={'/'}>View</Link> */}
    </>
  );
}

export default Add;
