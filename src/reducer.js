const intial = {
    email: "sapnavmathapati99@gmail.com",
    password: "password",
    Auth: false,
    FirstName: "Sapna",
    LastName: "Mathapati",
    Phone: 7981485153,
    Linkedin: "https://www.linkedin.com/in/sapna-mathapati-307924244/",
    Summary: " ",
    Address: { City: "Humanabad", District: "Bidar", State: "Karnataka", Country: "India", Pincode: "585353" },
    Education: [{
        Id: "1",
        Degree: "Bachelor of Engineering",
        Institution: "BKIT",
        Grade: "6.8",
        Summary: " "
    },
    ],
    Experince: [{
        Id: 1,
        Institution: "Zylo IT Solutions",
        Post: "Frontend Developer",
        TechnologiesUsed: ["react"],
        Summary: "Having 2.3 Years of professional experience as Frontend Developer with a broad range of expertise in Web-based applications and Mobile applications.Experience in developing front-end web and mobile application with JavaScript,HTML,CSS, and JavaScript frameworks such as React JS and React Native"
    },
    ],
    Skill: [{ id: "1", text: "React" }, { id: "2", text: "Javascript" }, { id: "3", text: "React Native" }],
    Interest: [{ id: "1", text: "Singing" }, { id: "2", text: "Cooking" }],
    Reference: []
}


const reducer = (state = intial, action) => {
    switch (action.type) {
        case "auth":
            {
                console.log("auth reducer")
                return { ...state, Auth: true }
            }
        case "signout":
            {
                return { ...state, Auth: false }
            }

        case "AddEducation": {
            console.log("addEducation reducer", action.payload)
            return { ...state, Education: action.payload }
        }
        case "RemoveEducation": {
            console.log("removeEducation reducer", action.payload)
            return { ...state, Education: action.payload }
        }
        case "RemoveExper": {
            console.log("RemoveExperince reducer", action.payload)
            return { ...state, Experince: action.payload }
        }
        case "AddExperince": {
            console.log("AddExprenice Reducer", action.payload)
            return { ...state, Experince: action.payload }
        }
        case "Basic": {
            console.log("basic dispatch", action.payload)
            return {
                ...state,
                email: action.payload.email,
                FirstName: action.payload.first,
                LastName: action.payload.last,
                Phone: action.payload.phone,
                Linkedin: action.payload.Linkedin,
                Summary: action.payload.Summary,
                Address: { City: action.payload.City, District: action.payload.District, State: action.payload.State, Country: action.payload.Country, Pincode: action.payload.Pin },
            }
        }
        case "Addskill": {
            console.log("add skill reducer", action.payload)
            return { ...state, Skill: action.payload }
        }
        case "Addinterest": {
            console.log("interest", action.payload)
            return { ...state, Interest: action.payload }
        }
        case "Addreference": {
            return { ...state, Reference: action.payload }
        }
        case "Removeskill": {
            console.log("remove skill reducer",action.payload)
            return { ...state, Skill: action.payload }
        }
        case "Removeinterest": {
            return { ...state, Interest: action.payload }
        }
        case "Removereference": {
            return { ...state, Reference: action.payload }
        }
        default:
            console.log("Default")
            return state
    }
}

export default reducer