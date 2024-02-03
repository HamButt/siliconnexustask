import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  IconButton,
  InputAdornment,
  FilledInput,
  TextField,
  formLabelClasses,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";

function Signin() {
  const router = useRouter();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    axios
      .post(`${process.env.baseUrl}/auth/signIn`, signInData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          router.push("/business-collection");
        }
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setError(err.response.data.error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2 className="text-white my-10 text-2xl">Sign In</h2>
      <form className="flex flex-col" onSubmit={handleSignInSubmit}>
        <label htmlFor="email" className="text-white pt-5 text-sm">
          Email
        </label>
        <TextField
          id="email"
          variant="standard"
          size="large"
          type="email"
          name="email"
          required
          className="pt-2"
          onChange={handleSignInChange}
          value={signInData.email}
        />

        <label htmlFor="password" className="text-white pt-8 text-sm">
          Password
        </label>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <FilledInput
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="********"
            value={signInData.password}
            onChange={handleSignInChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  className="text-xs text-white"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {error && <small className="text-red-500 text-xml mt-2">{error}</small>}
        <Button
          variant="contained"
          className="bg-[#00ADEF] rounded-[8px] text-white w-[100%] font-[15px] mt-6 py-3 capitalize"
          type="submit"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

export default Signin;
