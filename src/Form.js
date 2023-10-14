import React from "react";
import { useContext } from "react";
import { CartContext } from "./App";
import { Link } from "react-router-dom";
const Form = () => {
  const {
    email,
    fullName,
    address,
    bio,
    number,
    handleSubmit,
    data,
    setEmail,
    setFullName,
    setAddress,
    setBio,
    setNumber
  } = useContext(CartContext);
  return (
    <div>
      {" "}
      <div className="main_log">
        <div className="login_form">
          <div className="login">
            <h1>SignUp</h1>
          </div>
          <div className="login_con">Enter your detail below to continue</div>
          <form onSubmit={handleSubmit}>
            <input
              className="name"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="password"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Contact Number"
              required
            />
            <input
              className="name"
              type="text"
              name="email"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
            <input
              className="name"
              type="text"
              name="email"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
            />
            <input
              className="name"
              type="text"
              name="email"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio"
              required
            />
            <button className="login_btn">Register</button>
          </form>
        </div>
      </div>
      {data.length > 0 && (
        <>
          <div style={{ paddingTop: "50px" }}>
            <h1>Register users for Event</h1>
          </div>
          <div className="table-m">
            <table className="f-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th style={{ borderLeft: "0px" }}>Name</th>
                  <th style={{ borderLeft: "0px" }}>Timestamp</th>
                  <th style={{ borderLeft: "0px" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id + 1}</td>
                    <td style={{ borderLeft: "0px" }}>{item.name}</td>
                    <td style={{ borderLeft: "0px" }}>{item.date}</td>

                    <td style={{ borderLeft: "0px" }}>
                      <Link
                        to={`/info/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <button style={{ padding: "5px 10px" }}>View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
