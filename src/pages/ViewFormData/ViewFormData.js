import PaginatedItems from "../../components/Pagenation/pagenation";
import axios from "axios";
import React, { useState } from "react";
import Table from "../../components/Table/Table";

const options = [
  "level",
  "message",
  "resourceId",
  "timestamp",
  "traceId",
  "spanId",
  "commit",
  "parentResourceId",
];
const users = ["admin", "customer"];
function ViewFormData() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tempLog, setTempLog] = useState([
    ["active", "Ram", "D1", "Manager", "19-09-2005", 1],
    ["inactive", "Arun", "D2", "Sr. Developer", "14-09-2016", 2],
    ["inactive", "Sanjay", "D3", "Jr. Developer", "12-11-2021", 1],
    ["active", "Ridhu", "D4", "Security", "21-09-2012", 1],
  ]);
  const [getlog, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [datetime, setDateTime] = useState(false);
  const [user, setUser] = useState("admin");
  const handleOptionChange = (e) => {
    if (e.target.value === "timestamp") setDateTime(true);
    else {
      setDateTime(false);
    }
    setSelectedOption(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (selectedOption === "") {
      alert("Select any option !");
      return;
    }
    if (!datetime && searchTerm === "") {
      alert("Enter Search Term !");
      return;
    }
    if (datetime && startDate === "") {
      alert("Enter Start date !");
      return;
    }
    if (datetime && endDate === "") {
      alert("Enter End date !");
      return;
    }
    try {
      var response = "";
      if (selectedOption === "timestamp") {
        response = await axios({
          method: "get",
          url: `http://localhost:3000/query-interface?filter=${selectedOption}&start=${startDate}&end=${endDate}&user=${user}`,
        });
      } else {
        response = await axios({
          method: "get",
          url: `http://localhost:3000/query-interface?search=${searchTerm}&filter=${selectedOption}&user=${user}`,
        });
      }
      setData(response.data.logs);
    } catch (error) {
      console.error("API Error:", error);
      alert("API Error:", error);
    }
  };

  return (
    <div className="container">
      <Table errorData={tempLog} />
    </div>
  );
}

export default ViewFormData;
