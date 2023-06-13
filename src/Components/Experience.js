import React, { useState } from 'react'
import { Button, Form, Col} from "react-bootstrap"


export const AddElement=({data,RemoveElement,SaveElement,disable,count})=>{

    console.log("data",data)

    const [Institution,setInsti]=useState(data.Institution)
    const [Post,setPost]=useState(data.Post)
    const [Summary,setSummary]=useState(data.Summary)
    const [TechnologiesUsed,setTechnologiesUsed]=useState(data.TechnologiesUsed)
    const [Edit, setEdit] = useState(disable)
    const [error, setError] = useState("")

    const Valid = () => {
        if (Post === undefined || Post === "") {
            setError("post undefined")
            return false
        }
        else if (Institution === undefined || Institution === "") {
            setError("Institution undefined")
            return false
        }
        else if (TechnologiesUsed === undefined || TechnologiesUsed === "") {
            setError("Technologies used undefined")
            return false
        }
        else if (Summary === undefined || Summary === "") {
            setError("Summary undefined")
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
                SaveElement({ Institution, Post, Summary, TechnologiesUsed, Id: count })
                setEdit(true)
            }

        }
        else {
            setError("Save changes before proceeding")
            setEdit(false)
        }
    }

    return(
        <div style={{ marginTop: "30px" }}>
            <Form.Row>
                <Col>
                    <Form.Label>Institution</Form.Label>
                    <Form.Control className="form-control form-control-sm" disabled={Edit} defaultValue={Institution} onChange={(e)=>setInsti(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label>Post</Form.Label>
                    <Form.Control className="form-control form-control-sm" disabled={Edit} type="text" defaultValue={Post} onChange={(e)=>setPost(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label>Technologies Used</Form.Label>
                    <Form.Control className="form-control form-control-sm" disabled={Edit} type="text" defaultValue={TechnologiesUsed} onChange={(e)=>setTechnologiesUsed(e.target.value)} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Form.Label >Summary</Form.Label>
                <Form.Control className="form-control form-control-sm" disabled={Edit} as="textarea" type="text" defaultValue={Summary} onChange={(e)=>setSummary(e.target.value)} />
            </Form.Row>
            <Form.Row style={{  display: "flex", flexDirection: "row", justifyContent: "Space-between",paddingTop:"10px" }}>
                <Button className="btn  btn-danger btn-sm" onClick={() => { RemoveElement(data) }}>Remove</Button>
                <h6 style={{ "color": "red" }}>{error}</h6>
                <Button className={Edit ? "btn btn-secondary btn-sm" : "btn btn-warning btn-sm"}  onClick={(e) => { ButtonClick(e.target.value) }}>{Edit ? "Edit" : "Save"}</Button>
            </Form.Row>
        </div>
    )
}