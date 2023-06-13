import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Taggit } from "./Components/taggit";

const View = props => {
  //Skill and hobbies page
  //include tagging

  const Interest = useSelector(state => state.reducer.Interest);
  const Skill = useSelector(state => state.reducer.Skill);
  const Dispatch = useDispatch();

  const skillsuggestion = [
    { id: "PHP", text: "PHP" },
    { id: "Java", text: "Java" },
    { id: "C++", text: "C++" },
    { id: "C", text: "C" },
    { id: "Python", text: "Python" },
    { id: "Ruby", text: "Ruby" }
  ];

  const interestsuggestion = [
    { id: "Football", text: "Football" },
    { id: "Volleyball", text: "Volleyball" },
    { id: "Baseball", text: "Baseball" },
    { id: "NBA", text: "NBA" },
    { id: "shuttle", text: "shuttle" },
    { id: "caroms", text: "caroms" }
  ];

  const RemoveSkilltag = data => {
    Dispatch({ type: "Removeskill", payload: data });
  };
  const RemoveInteresttag = data => {
    Dispatch({ type: "Removeinterest", payload: data });
  };
  const SaveSkilltag = data => {
    Dispatch({ type: "Addskill", payload: data });
  };

  const Saveinteresttag = data => {
    Dispatch({ type: "Addinterest", payload: data });
  };

  const onNextFunction = () => {
    props.history.push("/Edit5");
  };

  return (
    <div
      className="col-sm-12"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card style={{ display: "flex", alignItems: "center", padding: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h6>Skills</h6>
          <Taggit
            data={Skill}
            suggestions={skillsuggestion}
            removeelement={RemoveSkilltag}
            addelement={SaveSkilltag}
          />
          <p>Try PHP</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h6>Interest / Hobbies</h6>
          <Taggit
            data={Interest}
            suggestions={interestsuggestion}
            removeelement={RemoveInteresttag}
            addelement={Saveinteresttag}
          />
          <p>Try Baseball</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Link
            style={{ margin: "10px" }}
            to="/edit3"
            type="submit"
            className="btn btn-primary"
          >
            Previous
          </Link>
          <Button
            className="btn btn-primary btn-sm"
            style={{ margin: "10px" }}
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
