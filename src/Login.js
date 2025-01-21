// import React from "react";
// import { useOktaAuth } from "@okta/okta-react";

// const Login = () => {
//   const { oktaAuth, authState } = useOktaAuth();

//   const handleLogin = async () => {
//     oktaAuth.signInWithRedirect();
//   };

//   if (!authState) {
//     return <div>Loading...</div>;
//   }

//   if (authState.isAuthenticated) {
//     return (
//       <div>
//         <h2>You are already logged in.</h2>
//         <a href="/todo">Go to To-Do App</a>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={handleLogin}>Login with Okta</button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      navigate("/todo");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Box sx={{ width: 300, margin: "100px auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin} fullWidth>
        Login
      </Button>
    </Box>
  );
}

export default Login;
