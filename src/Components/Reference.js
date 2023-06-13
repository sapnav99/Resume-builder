import React, { useState } from 'react'
import { Button, Form, Col} from "react-bootstrap"

export const ReferenceElement = ({ data, RemoveElement, disable, SaveElement,count }) =>{
    const [Edit, setEdit] = useState(disable)
    const [Name, setName] = useState(data.Name)
    const [Contact,setContact]=useState(data.Contact)
    const [error, setError] = useState("")

    const Valid = () => {
        if (Name === undefined || Name === "") {
            setError("Name undefined")
            return false
        }
        else if (Contact === undefined || Contact === "") {
            setError("Contact undefined")
            return false
        }
        else {
            setError("")
            return true
        }
    }

    const ButtonClick = () => {
        if (!Edit) {
            setError("")
            let valid = Valid()
            if (valid) {
                SaveElement({ Id: count, Name: Name, Contact: Contact })
                setEdit(true)
            }

        }
        else {
            setError("Save changes before proceeding")
            setEdit(false)
        }
    }

return (
    <div style={{ marginTop: "30px" }}>
    <Form.Row>
        <Col>
            <Form.Label >Name</Form.Label>
                <Form.Control type="email" as="textarea" defaultValue={Name} onChange={(e) => setName(e.target.value)} disabled={Edit}/>
        </Col>
        <Col>
            <Form.Label >Contact Details</Form.Label>
                <Form.Control type="email" as="textarea" defaultValue={Contact} onChange={(e) => setContact(e.target.value)} disabled={Edit} />
        </Col>
    </Form.Row>
        <Form.Row style={{ display: "flex", flexDirection: "row", justifyContent: "Space-between", paddingTop: "10px"}}>
            <Button className="btn  btn-danger btn-sm" onClick={() => { RemoveElement(data) }}>Remove</Button>
            <h6 style={{ "color": "red" }}>{error}</h6>
            <Button className={Edit ? "btn btn-secondary btn-sm" : "btn btn-warning btn-sm"}  onClick={(e) => { ButtonClick(e.target.value) }}>{Edit ? "Edit" : "Save"}</Button>
    </Form.Row>
    </div>
    )
}