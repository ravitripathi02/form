import "./styles.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Forms from "./Form";
import Info from "./Info";

export const CartContext = createContext();

export default function App() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  // const [date, setDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [bio, setBio] = useState("");
  const [add, setAdd] = useState(0);
  const [date, setDate] = useState("");
  const [newId, setNewId] = useState(21);
  function isValidEmail() {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }
  function isValidName() {
    for (let i = 0; i < fullName.length; i++) {
      if (fullName[i] >= "0" && fullName[i] <= "9") return false;
    }
    return true;
  }
  const handleSubmit = (e) => {
    setDate(new Date().toLocaleString());
    e.preventDefault();
    if (number.length !== 10) {
      alert("Length of the number should be 10 digits");
    } else if (!isValidEmail()) {
      alert("Email is not in the right format");
    } else if (!isValidName()) {
      alert("Full name is invalid");
    } else if (data.find((item) => item.email === email)) {
      alert("Email already registered");
    } else {
      const newProduct = {
        id: data.length,
        date: new Date().toLocaleString(),
        email: email,
        number: number,
        address: address,
        name: fullName,
        bio: bio
      };
      let getData = localStorage.getItem("items");
      let existingData = getData ? JSON.parse(getData) : [];
      existingData = [...existingData, newProduct];
      const newData = [...data, newProduct];
      localStorage.setItem("items", JSON.stringify(existingData));
      setData(existingData);
      setAdd(0);
      setNewId(newId + 1);
    }
    setEmail("");
    setNumber("");
    setAddress("");
    setFullName("");
    setBio("");
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) setData(items);
  }, []);
  return (
    <div className="App">
      <CartContext.Provider
        value={{
          data,
          handleSubmit,
          add,
          email,
          fullName,
          address,
          bio,
          number,
          setEmail,

          setFullName,
          setAddress,
          setBio,
          setNumber
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Forms />} />
            <Route path="/info/:dataId" element={<Info />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}
