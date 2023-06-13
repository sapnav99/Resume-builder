import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Main = props => {
  // const [check, setCheck] = useState(false);
  const [error, setError] = useState(null);
  const email = useSelector(state => state.reducer.email);
  const Password = useSelector(state => state.reducer.password);
  const Dispatch = useDispatch();

  const OnsubmitFunction = data => {
    console.log("data", data.target.elements.email.value);
    console.log("data", data.target.elements.password.value);
    if (
      data.target.elements.email.value === email &&
      data.target.elements.password.value === Password
    ) {
      //setCheck(true);
      setError("Valid Details");
      Dispatch({ type: "auth" });
      props.history.push("/Home");
    } else {
      // setCheck(false)
      setError("Invalid Details");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        justifyContent: "center"
      }}
    >
      <Card style={{ display: "flex", padding: "50px" }}>
        <Form
          onSubmit={e => {
            e.preventDefault();
            OnsubmitFunction(e);
          }}
        >
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={email}
              name="email"
            />
            <Form.Text className="text-muted">
              Username: sapnavmathapati99@gmail.com
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={Password}
              name="password"
            />
            <Form.Text className="text-muted">Password: Password</Form.Text>
            <Form.Label>{error}</Form.Label>
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>

          {
            // <Link
            //   style={{ alignContent: "centre" }}
            //   to="/home"
            //   type="submit"
            //   className="btn btn-primary"
            // >
            //   Sign up
            // </Link>
          }
        </Form>
      </Card>
    </div>
  );
};

export default Main;
