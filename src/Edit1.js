import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Edit = props => {
  //first basic and address edit first page

  const [Edit, setEdit] = useState(true);
  const [error, setError] = useState(null);
  const firstName = useSelector(state => state.reducer.FirstName);
  const lastName = useSelector(state => state.reducer.LastName);
  const Email = useSelector(state => state.reducer.email);
  const Phone = useSelector(state => state.reducer.Phone);
  const Linkedin = useSelector(state => state.reducer.Linkedin);
  const Summary = useSelector(state => state.reducer.Summary);
  const Address = useSelector(state => state.reducer.Address);
  const Dispatch = useDispatch();

  const SaveFunction = data => {
    Dispatch({ type: "Basic", payload: data });
  };

  const validateOnchange = ({
    first,
    last,
    email,
    phone,
    Linkedin,
    Summary,
    City,
    District,
    State,
    Country,
    Pin
  }) => {
    let pinvalid = /^\d{6}$/;
    let phonevalid = /^\d{10}$/;
    console.log(
      "validates",
      first,
      last,
      email,
      phone,
      Linkedin,
      Summary,
      City,
      District,
      State,
      Country,
      Pin
    );
    if (first === undefined || first === "") {
      setError("invalid firstname");
      return false;
    }
    if (last === undefined || last === "") {
      setError("invalid lastname");
      return false;
    }
    if (Linkedin === undefined || Linkedin === "") {
      setError("invalid Linkedin");
      return false;
    }
    if (Summary === undefined || Summary === "") {
      setError("Summary need to be 20 to 150 characters");
      return false;
    }
    if (phone === undefined || phone === "" || !phonevalid.test(phone)) {
      setError("Phone need to be ten Number");
      return false;
    }
    if (City === undefined || City === "") {
      setError("invalid Linkedin");
      return false;
    }
    if (District === undefined || District === "") {
      setError("invalid Linkedin");
      return false;
    }
    if (State === undefined || State === "") {
      setError("invalid Linkedin");
      return false;
    }
    if (Country === undefined || Country === "") {
      setError("invalid Linkedin");
      return false;
    }
    if (Pin === undefined || Pin === "" || !pinvalid.test(Pin)) {
      setError("Pincode need to be Six Number");
      return false;
    }
    setError("");
    return true;
  };

  const onNextFunction = () => {
    if (Edit === true) {
      props.history.push("/Edit2");
    } else {
      setError("Save the Changes");
    }
  };

  const EditClick = e => {
    const data = {
      first: e.target.elements.first.value,
      last: e.target.elements.last.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      Linkedin: e.target.elements.Linkedin.value,
      Summary: e.target.elements.Summary.value,
      City: e.target.elements.city.value,
      District: e.target.elements.district.value,
      State: e.target.elements.state.value,
      Country: e.target.elements.country.value,
      Pin: e.target.elements.pin.value
    };
    if (!Edit) {
      console.log("data", data);
      let saveable = validateOnchange(data);
      if (saveable) {
        SaveFunction(data);
        setEdit(true);
      } else {
        setEdit(false);
      }
    } else {
      setEdit(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <Form
          style={{ padding: "10px" }}
          onSubmit={e => {
            e.preventDefault();
            EditClick(e);
          }}
        >
          <Form.Group>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px"
              }}
            >
              <h4>Basic Information</h4>
              <h6 style={{ color: "red" }}>{error}</h6>
              <Button className="btn  btn-success btn-sm" type="submit">
                {" "}
                {Edit ? "Edit" : "Save"}
              </Button>
            </div>
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first"
                  disabled={Edit}
                  type="text"
                  defaultValue={firstName}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last"
                  disabled={Edit}
                  type="text"
                  defaultValue={lastName}
                />
              </Col>
              <Col>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  disabled={Edit}
                  type="email"
                  defaultValue={Email}
                />
              </Col>
              <Col>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone"
                  disabled={Edit}
                  type="tel"
                  defaultValue={Phone}
                />
              </Col>
              <Col>
                <Form.Label>Linkedin</Form.Label>
                <Form.Control
                  name="Linkedin"
                  disabled={Edit}
                  type="text"
                  defaultValue={Linkedin}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              disabled={Edit}
              name="Summary"
              as="textarea"
              rows="6"
              defaultValue={Summary}
            />
          </Form.Group>
          <Form.Group>
            <h4 style={{ padding: "10px" }}>Address</h4>
            <Form.Row>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="city"
                  type="text"
                  defaultValue={Address.City}
                />
              </Col>
              <Col>
                <Form.Label>District</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="district"
                  type="text"
                  defaultValue={Address.District}
                />
              </Col>
              <Col>
                <Form.Label>State</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="state"
                  type="text"
                  defaultValue={Address.State}
                />
              </Col>
              <Col>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="country"
                  type="text"
                  defaultValue={Address.Country}
                />
              </Col>
              <Col>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  disabled={Edit}
                  name="pin"
                  type="text"
                  defaultValue={Address.Pincode}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "Space-between"
            }}
          >
            <Link
              style={{ margin: "10px" }}
              to="/home"
              className="btn btn-primary"
            >
              Previous
            </Link>
            <h6 style={{ color: "red" }}>{error}</h6>
            <Button
              style={{ margin: "10px" }}
              onClick={() => onNextFunction()}
              className="btn btn-primary"
            >
              Next
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Edit;
