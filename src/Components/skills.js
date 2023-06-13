import React, { useState } from "react";
import { Button, Form, Col, Card } from "react-bootstrap";

//not used
export const SkillElement = ({
  data,
  RemoveElement,
  SaveElement,
  disable,
  count
}) => {
  const [Edit, setEdit] = useState(disable);
  const [Skill, setSkill] = useState(data.data);

  const ButtonClick = () => {
    if (!Edit) {
      console.log("buttonclick", Skill);
      SaveElement({ Id: count, data: Skill });
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Form.Row>
        <Col>
          <Form.Label>Skill</Form.Label>
          <Form.Control
            defaultValue={Skill}
            onChange={e => setSkill(e.target.value)}
            disabled={Edit}
          />
        </Col>
      </Form.Row>
      <Form.Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "Space-between",
          paddingTop: "10px"
        }}
      >
        <Button
          className="btn  btn-danger btn-sm"
          onClick={() => {
            RemoveElement(data);
          }}
        >
          Remove
        </Button>
        <h6>{!Edit ? "Save changes before proceeding" : ""}</h6>
        <Button
          className={
            Edit ? "btn btn-secondary btn-sm" : "btn btn-warning btn-sm"
          }
          type="submit"
          onClick={e => {
            e.preventDefault();
            ButtonClick(e.target.value);
          }}
        >
          {Edit ? "Edit" : "Save"}
        </Button>
      </Form.Row>
    </div>
  );
};
