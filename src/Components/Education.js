import React, { useState } from 'react'
import { Button, Form, Col } from "react-bootstrap"


export const AddElement=({data,RemoveElement,count,SaveElement,disable})=>{

    console.log("eddata",data)

    const [Degree,setDegree]=useState(data.Degree)
    const [Institution,setInsti]=useState(data.Institution)
    const [Summary,setSummary]=useState(data.Summary)
    const [Grade,setGrade]=useState(data.Grade)
    const [Edit,setEdit]=useState(disable)
    const [error,setError]=useState("")

    const Valid=()=>{
        if (Degree === undefined || Degree === "") {
            setError("Degree undefined")
            return false
        }
        else if (Institution === undefined || Institution === "") {
            setError("Institution undefined")
            return false
        }
        else if (Grade === undefined || Grade === "") {
            setError("Grade undefined")
            return false
        }
        else if (Summary === undefined || Summary === "") {
            setError("Summary undefined")
            return false
        }
        else{
            setError("")
            return true
        }
    }

    const ButtonClick = () => 
    {
        if (!Edit) {
            setError("")
            let valid=Valid()
            if(valid){
            SaveElement({Degree,Institution,Grade,Summary,Id:count})
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
                    <Form.Label >Degree</Form.Label>
                    <Form.Control className="form-control form-control-sm" disabled={Edit} defaultValue={Degree} onChange={(e)=>setDegree(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label >Institution</Form.Label>
                    <Form.Control className="form-control form-control-sm" disabled={Edit} type="email" defaultValue={Institution} onChange={(e)=>setInsti(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label >Grade</Form.Label>
                    <Form.Control className="form-control form-control-sm" disabled={Edit} type="email" defaultValue={Grade} onChange={(e)=>setGrade(e.target.value)} />
                </Col>
                </Form.Row>
                <Form.Row>
                <Form.Label >Summary</Form.Label>
                <Form.Control className="form-control form-control-sm" disabled={Edit} as="textarea" type="email" defaultValue={Summary} onChange={(e)=>setSummary(e.target.value)} />
            </Form.Row>
            <Form.Row style={{  display: "flex", flexDirection: "row", justifyContent: "Space-between",paddingTop:"10px" }}>
                <Button className="btn  btn-danger btn-sm"  onClick={() => { RemoveElement(data) }}>Remove</Button>
                <h6 style={{ "color": "red" }}>{error}</h6>
                <Button className={Edit ? "btn btn-secondary btn-sm" : "btn btn-warning btn-sm"}  onClick={(e) => {ButtonClick(e.target.value)}}>{Edit?"Edit":"Save"}</Button>
            </Form.Row>
        </div>
    )
}