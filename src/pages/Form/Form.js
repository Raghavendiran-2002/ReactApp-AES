// Import necessary React libraries
import React, { useState, useEffect } from "react";
// import "./App.css";
import Multiselect from "multiselect-react-dropdown";

// Define the component
const Form = () => {
  // State variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [competence, setCompetence] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [agree, setAgree] = useState("");

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getcountrydata = async () => {
      const getcountryname = ["India", "US", "Japan", "UAE"];
      setCountry(getcountryname);
    };
    getcountrydata();
  }, []);

  const [marital_Status, setChecked] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate phone number
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should only contain numbers");
      return;
    }

    // Process the form data
    console.log("Form Data:", {
      name,
      email,
      phone,
      department,
      competence,
      languages,
      agree,
    });

    // Reset the form
    setName("");
    setEmail("");
    setPhone("");
    setDepartment("");
    setCompetence([]);
    setLanguages([]);
    setAgree("");
  };
  const [val, setVal] = useState("");
  const data = ["communication", "teamwork"];

  return (
    <div className="welcome-page">
      <h1>Welcome to the Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <div className={"inputContainer"}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </label>
        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]*"
            required
          />
        </label>
        <label>
          Department:
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            {/* Add more departments as needed */}
          </select>
        </label>
        <label>
          Competence:
          <Multiselect
            isObject={false}
            onRemove={(event) => {
              console.log(event);
            }}
            onSelect={(event) => {
              console.log(event);
            }}
            options={country}
            showCheckbox
          />
        </label>
        <label>
          Choose languages you know:
          <div>
            <input
              type="checkbox"
              id="c"
              onChange={() => setLanguages((prev) => [...prev, "C"])}
            />
            <label htmlFor="c">C</label>

            <input
              type="checkbox"
              id="cpp"
              onChange={() => setLanguages((prev) => [...prev, "C++"])}
            />
            <label htmlFor="cpp">C++</label>

            <input
              type="checkbox"
              id="java"
              onChange={() => setLanguages((prev) => [...prev, "Java"])}
            />
            <label htmlFor="java">Java</label>

            <input
              type="checkbox"
              id="python"
              onChange={() => setLanguages((prev) => [...prev, "Python"])}
            />
            <label htmlFor="python">Python</label>
          </div>
        </label>
        <label>
          Marital Status:
          <div>
            <input
              type="radio"
              id="agree"
              value="Yes"
              checked={marital_Status === "Yes"}
              onChange={() => setChecked("Yes")}
            />
            <label htmlFor="agree">Yes</label>

            <input
              type="radio"
              id="disagree"
              value="No"
              checked={marital_Status === "No"}
              onChange={() => setChecked("No")}
            />
            <label htmlFor="disagree">No</label>
          </div>
          Spouse Name:
          <input
            name="input"
            type="text"
            disabled={marital_Status === "No"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>{" "}
        <label>
          Do you agree with this statement?
          <div>
            <input
              type="radio"
              id="agree"
              value="Yes"
              checked={agree === "Yes"}
              onChange={() => setAgree("Yes")}
            />
            <label htmlFor="agree">Yes</label>

            <input
              type="radio"
              id="disagree"
              value="No"
              checked={agree === "No"}
              onChange={() => setAgree("No")}
            />
            <label htmlFor="disagree">No</label>
          </div>
        </label>
        <input className={"inputButton"} type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Form;
