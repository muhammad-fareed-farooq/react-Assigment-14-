import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { data } from "../localdata.jsx/data";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const [userdata, setuserdata] = useState({});
  const navigat = useNavigate();

  const inputhandle = (e) => {
    const { value, id } = e.target;

    // console.log(value, id);
    setuserdata({ ...userdata, [id]: value });
  };

  const submithandle = (e) => {
    e.preventDefault();
    // const { username, password } = userdata;
    if (userdata.username === data.username && userdata.password === data.password) {
      localStorage.setItem("Loggedis", true);
      navigat("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Stack className="Login_Main">
      <Stack onSubmit={submithandle} component="form" className="border">
        <Typography variant="h3" style={{ marginBottom: "15px" }}>
          login
        </Typography>
        <TextField
          onChange={inputhandle}
          id="username"
          className="Input"
          helperText=" "
          label="username"
          type="username"
          required={true}
        />
        <TextField
          onChange={inputhandle}
          helperText=" "
          id="password"
          label="Password"
          type="password"
          required={true}
        />
        <Button
          type="submit"
          style={{ width: "100%", marginBottom: "10px", height: "45px" }}
          variant="outlined"
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
