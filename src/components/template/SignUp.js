"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
const[fNameError,setFNameError]=useState("");
const[lNameError,setLNameError]=useState("");
const[emailError,setEmailError]=useState("")
const[passwordError,setPasswordError]=useState("");


  const {
    register,
    formState: { isValid },
  } = useForm({ mode: "all" });
  

  const handleSubmit = () => {
    let formError=false;
    if(!fNameError.length){
      setFNameError("Name is requerd");
      formError=true;
    }else{setFNameError("")}
     if(!lNameError.length){
      setLNameError("Last name requerd")
      formError=true;
      
    }else{setLNameError("")}
    if(!emailError.length){
      setEmailError("Last name requerd")
      formError=true;
     
    }else{setEmailError("")}
     if(!passwordError.length){
      setPasswordError("Last name requerd")
      formError=true;
     
    }else{setPasswordError("")}

    if(!formError){
      alert("thnak you")
       return true;
    } else{
      alert("Please complete the form")
    }
  };
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
              onSubmit={handleSubmit}
          <Box component="form"    sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                error={fNameError && fNameError.length ? true:false}
                helperText={fNameError}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                 {...register("firstName", {
                required: true,
                message: "please Type Your firstName",
                // pattern: /^[A-Za-z]+$/i,
              })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 error={lNameError && lNameError ? true:false}
                 helperText={lNameError}
                {...register("lastName", {
                //  required: true,
                //  message: "please Type Your lastName",
                //  pattern: /^[A-Za-z]+$/i,
               })}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                error={emailError && emailError ? true:false}
                helperText={emailError}
               {...register("email", {
                // required: true,
                // message: "please Type Your email",
                // pattern: /^[A-Za-z]+$/i,
              })}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={passwordError && passwordError ? true:false}
                  helperText={passwordError}
                 {...register("password", {
                  // required: true,
                  // message: "please Type Your lastName",
                  // // pattern: /^[A-Za-z]+$/i,
                })}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // disabled={!isValid}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}