import React from "react";
import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
import {
  CardContent,
  Card,
  Typography,
  CardHeader,
  TextField,
} from "@mui/material";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          border: 1,
          height: "430px",
          width: "400px",
        }}
      >
        <CardContent sx={{ padding: "0" }}>
          <CardHeader
            sx={{ 
                backgroundColor: '#9c27b0', height: "128px", color: "white" 

            }}
            title=" Hey, Welcome. Login to access Task Management"
          >
            {/* <Typography variant="h5"  sx={{backgroundColor: 'purple',height:'100%',width:'100%'}}>
              Hey, Welcome. Login to access Task Management\
            </Typography> */}
          </CardHeader>

         
        </CardContent>
        <CardContent>
          <TextField
          sx={{marginBottom: '10px', width:'100%'}}
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
          />
           <TextField
             sx={{width:'100%'}}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
          />
        </CardContent>
        
        <CardContent>
             Not a Member yet ?<Link to={"/signup"}>Sign Up</Link>
             </CardContent>
      </Card>
      <div className="bg"></div>
    </div>
  );
}
