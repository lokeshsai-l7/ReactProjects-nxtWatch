import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { themeState } from '../../recoil_state';

import {
  ShwPswLabel,
  ResponsiveContainer,
  LoginCardContainer,
  FormContainer,
  InputContainer,
  Label,
  Input,
  NxtWatchLogo,
  ShowPswInput,
  LoginBtn,
  Error,
} from './styleComponent';
import { useRecoilValue } from 'recoil';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const darkTheme = useRecoilValue(themeState);
  const navigate = useNavigate();

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 1, path: '/' });
    navigate('/', { replace: true });
  };

  const onSubmitFailure = (errorMsg) => {
    console.log(errorMsg);
    setShowError(true);
    setErrorMsg(errorMsg);
  };

  const validateCredentials = async (event) => {
    event.preventDefault();
    const url = 'https://apis.ccbp.in/login';
    const jsonData = JSON.stringify(formData);

    try {
      const response = await axios.post(url, jsonData);
      const { data } = response;
      onSubmitSuccess(data.jwt_token);
    } catch (error) {
      const { data } = error.response;
      onSubmitFailure(data.error_msg);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ResponsiveContainer $darkTheme={darkTheme}>
      <LoginCardContainer $darkTheme={darkTheme}>
        <NxtWatchLogo
          alt="nxtwatch logo"
          src={
            darkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
        />
        <FormContainer onSubmit={validateCredentials}>
          <InputContainer $normalContainer>
            <Label $normalLabel htmlFor="username">
              USERNAME
            </Label>
            <Input
              $darkTheme={darkTheme}
              onChange={handleChange}
              value={formData.username}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </InputContainer>
          <InputContainer>
            <Label $darkTheme={darkTheme} htmlFor="password">
              PASSWORD
            </Label>
            <Input
              $darkTheme={darkTheme}
              onChange={handleChange}
              value={formData.password}
              name="password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
            />
          </InputContainer>
          <InputContainer
            onClick={() => setShowPassword(!showPassword)}
            $normalContainer
          >
            <ShwPswLabel $darkTheme={darkTheme}>
              <ShowPswInput type="checkbox" />
              Show Password
            </ShwPswLabel>
          </InputContainer>
          <LoginBtn type="submit">Login</LoginBtn>
          {showError && <Error>{`*${errorMsg}`}</Error>}
        </FormContainer>
      </LoginCardContainer>
    </ResponsiveContainer>
  );
};

export default Login;
