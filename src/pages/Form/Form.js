// // Import necessary React libraries
// import React, { useState, useEffect } from "react";
// // import "./App.css";
// import Multiselect from "multiselect-react-dropdown";
// import { useForm } from "react-hook-form";
// import PaginatedItems from "../Pagenation/pagenation";

// // Define the component
// const Form = () => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [department, setDepartment] = useState("");
//   const [competence, setCompetence] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [agree, setAgree] = useState("");

//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     const getcountrydata = async () => {
//       const getcountryname = ["India", "US", "Japan", "UAE"];
//       setCountry(getcountryname);
//     };
//     getcountrydata();
//   }, []);

//   const [marital_Status, setChecked] = useState("");
//   const [text, setText] = useState("");
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   // Validate email
//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   if (!emailRegex.test(email)) {
//   //     alert("Please enter a valid email address");
//   //     return;
//   //   }

//   //   // Validate phone number
//   //   const phoneRegex = /^[0-9]+$/;
//   //   if (!phoneRegex.test(phone)) {
//   //     alert("Phone number should only contain numbers");
//   //     return;
//   //   }

//   //   // Process the form data
//   //   console.log("Form Data:", {
//   //     name,
//   //     email,
//   //     phone,
//   //     department,
//   //     competence,
//   //     languages,
//   //     agree,
//   //   });

//   //   // Reset the form
//   //   setName("");
//   //   setEmail("");
//   //   setPhone("");
//   //   setDepartment("");
//   //   setCompetence([]);
//   //   setLanguages([]);
//   //   setAgree("");
//   // };
//   const [val, setVal] = useState("");
//   const data = ["communication", "teamwork"];

//   return (
//     <div className="welcome-page">
//       <h1>Welcome to the Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           {/* <div className={"inputContainer"}>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div> */}
//           <div>
//             <label>Name</label>
//             <input
//               placeholder="Enter person name"
//               {...register("name", { required: true })}
//             />
//             <error>
//               {errors.name?.type === "required" && "Name is required"}
//             </error>
//           </div>
//         </label>
//         {/* <label>
//           Email Address:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label> */}
//         <div>
//           <label>Email</label>
//           <input
//             placeholder="Enter primary email"
//             {...register("email", {
//               required: true,
//               pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
//             })}
//           />
//           <error>
//             {errors.email?.type === "required" && "Email is required"}
//             {errors.email?.type === "pattern" &&
//               "Entered email is in wrong format"}
//           </error>
//         </div>
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             pattern="[0-9]*"
//             required
//           />
//         </label>
//         <label>
//           Department:
//           <select
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             required
//           >
//             <option value="">Select Department</option>
//             <option value="IT">IT</option>
//             <option value="HR">HR</option>
//             {/* Add more departments as needed */}
//           </select>
//         </label>
//         <label>
//           Competence:
//           <Multiselect
//             isObject={false}
//             onRemove={(event) => {
//               console.log(event);
//             }}
//             onSelect={(event) => {
//               console.log(event);
//             }}
//             options={country}
//             showCheckbox
//           />
//         </label>
//         <label>
//           Choose languages you know:
//           <div>
//             <input
//               type="checkbox"
//               id="c"
//               onChange={() => setLanguages((prev) => [...prev, "C"])}
//             />
//             <label htmlFor="c">C</label>

//             <input
//               type="checkbox"
//               id="cpp"
//               onChange={() => setLanguages((prev) => [...prev, "C++"])}
//             />
//             <label htmlFor="cpp">C++</label>

//             <input
//               type="checkbox"
//               id="java"
//               onChange={() => setLanguages((prev) => [...prev, "Java"])}
//             />
//             <label htmlFor="java">Java</label>

//             <input
//               type="checkbox"
//               id="python"
//               onChange={() => setLanguages((prev) => [...prev, "Python"])}
//             />
//             <label htmlFor="python">Python</label>
//           </div>
//         </label>
//         <label>
//           Marital Status:
//           <div>
//             <input
//               type="radio"
//               id="agree"
//               value="Yes"
//               checked={marital_Status === "Yes"}
//               onChange={() => setChecked("Yes")}
//             />
//             <label htmlFor="agree">Yes</label>

//             <input
//               type="radio"
//               id="disagree"
//               value="No"
//               checked={marital_Status === "No"}
//               onChange={() => setChecked("No")}
//             />
//             <label htmlFor="disagree">No</label>
//           </div>
//           Spouse Name:
//           <input
//             name="input"
//             type="text"
//             disabled={marital_Status === "No"}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </label>{" "}
//         <label>
//           Do you agree with this statement?
//           <div>
//             <input
//               type="radio"
//               id="agree"
//               value="Yes"
//               checked={agree === "Yes"}
//               onChange={() => setAgree("Yes")}
//             />
//             <label htmlFor="agree">Yes</label>

//             <input
//               type="radio"
//               id="disagree"
//               value="No"
//               checked={agree === "No"}
//               onChange={() => setAgree("No")}
//             />
//             <label htmlFor="disagree">No</label>
//           </div>
//         </label>
//         <input className={"inputButton"} type="submit" value={"Submit"} />
//         <PaginatedItems
//           itemsPerPage={4}
//           items={["r", "a", "g", "h", "a", "v"]}
//         ></PaginatedItems>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Multiselect from "multiselect-react-dropdown";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Registration</h1>
        </div>
        <div>
          <label>Name</label>
          <input
            placeholder="Enter person name"
            {...register("name", { required: true })}
          />
          <error>
            {errors.name?.type === "required" && "Name is required"}
          </error>
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            {...register("number", {
              minLength: 6,
              maxLength: 12,
            })}
          />
          <error>
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </error>
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Enter password"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <error>
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>
        </div>
        <label>
          Department:
          <select {...register("department", { required: true })}>
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="other">other</option>
          </select>
          <error>
            {errors.department?.type === "required" && "Invalid department"}
          </error>
        </label>
        <label>
          Competence:
          {/* <Multiselect
            isObject={false}
            onRemove={(event) => {
              console.log(event);
            }}
            onSelect={(event) => {
              console.log(event);
            }}
            options={{ ...register("country", { required: true }) }}
            showCheckbox
          /> */}
        </label>
        <label>
          Choose languages you know:
          <div>
            <input
              type="checkbox"
              id="c"
              value="C"
              {...register("language", { required: true })}
              onChange={() => {}}
            />
            <label htmlFor="c">C</label>

            <input
              type="checkbox"
              id="cpp"
              value="CPP"
              {...register("language", { required: true })}
              onChange={() => {}}
            />
            <label htmlFor="cpp">C++</label>

            <input
              type="checkbox"
              id="java"
              value="Java"
              {...register("language", { required: true })}
              onChange={() => {}}
            />
            <label htmlFor="java">Java</label>

            <input
              type="checkbox"
              id="python"
              value="Python"
              {...register("language", { required: true })}
              onChange={() => {}}
            />
            <label htmlFor="python">Python</label>
          </div>
        </label>
        <label>
          Marital Status:
          <div>
            <input
              {...register("marital_status")}
              type="radio"
              id="agree"
              value=""
              onChange={() => {}}
            />
            <label htmlFor="agree">Yes</label>

            <input
              type="radio"
              id="disagree"
              {...register("marital_status")}
              value="1"
            />
            <label htmlFor="disagree">No</label>
          </div>
          Spouse Name:
          <input
            name="input"
            type="text"
            disabled={errors.marital_status ? 1 : 0}
            {...register("spouse_name")}
          />{" "}
        </label>{" "}
        <label>
          Do you agree with this statement?
          <div>
            <input
              type="radio"
              // id="agree"
              value="Yes"
              {...register("agree")}
              // checked={agree === "Yes"}
              onChange={() => {}}
            />
            <label htmlFor="agree">Yes</label>

            <input
              type="radio"
              id="disagree"
              value="No"
              {...register("agree")}
              // checked={agree === "No"}
              onChange={() => {}}
            />
            <label htmlFor="disagree">No</label>
          </div>
        </label>
        <div>
          <input className="button" type="submit" />
        </div>
      </form>
    </div>
  );
}
