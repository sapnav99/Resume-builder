import React, { useState } from 'react'
import { Button, Form, Col, Card } from "react-bootstrap"

//Not used

export const InterestElement = ({ data, RemoveElement, disable, SaveElement,count }) => {
    console.log("disable",disable)
    const [Edit, setEdit] = useState(disable)
    const [interest,setInterest]=useState(data.data)

    const ButtonClick = () => {
        if (!Edit) {
            SaveElement({ Id: count, data: interest })
            setEdit(true)
        }
        else {
            setEdit(false)
        }
    }

return(
    <div style={{ marginTop: "30px" }}>
    <Form.Row>
        <Col>
            <Form.Label >Interest / Hobbies </Form.Label>
                <Form.Control disabled={Edit} defaultValue={interest} onChange={(e) => setInterest(e.target.value)} />
        </Col>
    </Form.Row>
        <Form.Row style={{ display: "flex", flexDirection: "row", justifyContent: "Space-between", paddingTop: "10px"}}>
            <Button className="btn  btn-danger btn-sm" onClick={() => { RemoveElement(data) }}>Remove</Button>
        <h6>{!Edit ? "Save changes before proceeding" : ""}</h6>
            <Button className={Edit ? "btn btn-secondary btn-sm" : "btn btn-warning btn-sm"}  onClick={(e) => { ButtonClick(e.target.value) }}>{Edit ? "Edit" : "Save"}</Button>
    </Form.Row>
    </div>
)
}