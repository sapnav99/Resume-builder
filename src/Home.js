import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  //home page
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        justifyContent: "center"
      }}
    >
      <Card style={{ padding: "60px" }}>
        <h1>HomePage</h1>
        <Link style={{ margin: "30px" }} to="/view" className="btn btn-primary">
          View Resume
        </Link>
        <Link
          style={{ margin: "30px" }}
          to="/edit1"
          className="btn btn-primary"
        >
          Edit Resume
        </Link>
      </Card>
    </div>
  );
};

export default Home;
