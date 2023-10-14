import React, { useContext } from "react";
import { CartContext } from "./App";
import { useParams } from "react-router-dom";

function Info() {
  const { data } = useContext(CartContext);
  const { dataId } = useParams();
  console.log(dataId);
  const single = data.find((item) => item.id === parseInt(dataId));
  if (!single) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p1" style={{ backgroundColor: "white" }}>
      <div className="p1-l">
        <div>
          Name: {"  "}
          <span>{single.name}</span>
        </div>
        <div>
          Email: {"  "}
          <span>{single.email}</span>
        </div>
        <div>
          Phone Number: {"  "}
          <span>{single.number}</span>
        </div>
        <div>
          Address: {"  "}
          <span>{single.address}</span>
        </div>
        <div>
          Description: {"  "}
          <span>{single.bio}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
