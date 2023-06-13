import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddElement } from "./Components/Education";

const View = props => {
  //education edit page

  const Education = useSelector(state => state.reducer.Education);
  const Dispatch = useDispatch();
  const list = [];
  const [add, setAdd] = useState({ list });
  console.log("education count", Education.length);

  const Removeexisting = data => {
    console.log("ex", data);
    let educlist = Education;
    let filterlist = educlist.filter(item => {
      console.log("id", item.Id);
      return item.Id !== data.Id;
    });
    console.log("list", filterlist);
    Dispatch({ type: "RemoveEducation", payload: filterlist });
  };

  const AddChange = () => {
    const ar = add.list;
    ar.push({ Id: "", Degree: "", Institution: "", Grade: "", Summary: "" });
    setAdd({ list: ar });
    console.log("add", add);
  };

  const RemoveElement = () => {
    const ar = add.list;
    ar.pop();
    setAdd({ list: ar });
  };

  const SaveElement = data => {
    console.log("savedata", data);
    let Final = Education;
    let list = Final.concat([data]);
    console.log("Finallist", list);
    Dispatch({ type: "AddEducation", payload: list });
    RemoveElement();
  };

  const onNextFunction = () => {
    props.history.push("/Edit3");
  };

  const SaveExist = data => {
    console.log("saveExist", data);
    let Final = Education;
    console.log("final", Final);
    let found = Final.find(element => {
      return element.Id === data.Id;
    });
    console.log("found", found);
    var index = Final.indexOf(found);
    console.log("found", index);
    if (index !== -1) {
      Final[index] = data;
    }

    // let list = Final.concat([data])
    console.log("Finallist", Final);
    // Dispatch({ type: "AddEducation", payload: list })
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ paddingRight: "10px", paddingLeft: "10px" }}>
        <Form style={{ padding: "5px" }}>
          <Form.Group>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6>Education</h6>
              <Button
                className="btn btn-success btn-sm"
                onClick={() => {
                  AddChange();
                }}
              >
                Add
              </Button>
            </div>
            {add.list.map(item => (
              <AddElement
                key={item.Id}
                data={item}
                RemoveElement={RemoveElement}
                count={Education.length + 1}
                SaveElement={SaveElement}
                disable={false}
              />
            ))}
            {Education.map(item => {
              console.log("educationdata", item);
              return (
                <AddElement
                  key={item.Id}
                  data={item}
                  RemoveElement={Removeexisting}
                  count={item.Id}
                  SaveElement={SaveExist}
                  disable={true}
                />
              );
            })}
          </Form.Group>
        </Form>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "Space-between"
          }}
        >
          <Link
            style={{ margin: "10px" }}
            to="/edit1"
            className="btn btn-primary btn-sm"
          >
            Previous
          </Link>
          <Button
            style={{ margin: "10px" }}
            className="btn btn-primary btn-sm"
            onClick={() => onNextFunction()}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default View;
