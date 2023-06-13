import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReferenceElement } from "./Components/Reference";

const View = props => {
  //reference page edit

  const Reference = useSelector(state => state.reducer.Reference);
  const referencelist = [];
  const [addreference, setAddReference] = useState({ referencelist });
  const Dispatch = useDispatch();

  const RemoveReferenceexisting = data => {
    let educlist = Reference;
    let filterlist = educlist.filter(item => {
      console.log("id", item.Institution);
      return item.Id !== data.Id;
    });
    console.log("list", filterlist);
    Dispatch({ type: "Removereference", payload: filterlist });
  };

  const addreferencefunction = () => {
    const ar = addreference.referencelist;
    ar.push("");
    setAddReference({ referencelist: ar });
  };

  const RemoveReference = () => {
    const ar = addreference.referencelist;
    ar.pop();
    setAddReference({ referencelist: ar });
  };
  const SaveReference = data => {
    console.log("savedata", data);
    let Final = Reference;
    let list = Final.concat([data]);
    console.log("Finallist", list);
    Dispatch({ type: "Addreference", payload: list });
    RemoveReference();
  };

  const SaveReferenceExist = data => {
    console.log("saveExist", data);
    let Final = Reference;
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
    Dispatch({ type: "Addreference", payload: Final });
    // Dispatch({ type: "AddEducation", payload: list })
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Form style={{ padding: "10px" }}>
          <Form.Group>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6>Reference</h6>
              <Button
                className="btn btn-success btn-sm"
                onClick={() => addreferencefunction()}
              >
                Add
              </Button>
            </div>
            {addreference.referencelist.map((item, key) => {
              console.log("data", item);
              return (
                <ReferenceElement
                  key={key}
                  data={item}
                  RemoveElement={RemoveReference}
                  SaveElement={SaveReference}
                  disable={false}
                  count={Reference.length + 1}
                />
              );
            })}
            {Reference.map(item => {
              console.log("data", item);
              return (
                <ReferenceElement
                  key={item.Id}
                  data={item}
                  RemoveElement={RemoveReferenceexisting}
                  SaveElement={SaveReferenceExist}
                  disable={true}
                  count={item.Id}
                />
              );
            })}
          </Form.Group>
        </Form>
      </Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Link
          style={{ margin: "10px" }}
          to="/edit4"
          type="submit"
          className="btn btn-primary"
        >
          Previous
        </Link>
        <Link
          style={{ margin: "10px" }}
          to="/view"
          type="submit"
          className="btn btn-primary"
        >
          Finish
        </Link>
      </div>
    </div>
  );
};

export default View;
