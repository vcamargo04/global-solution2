"use client";
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Cabecalho from '../../components/Cabecalho/Cabecalho';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = (user) => {
      console.log('Usuário logado:', user);
      setIsLoggedIn(true);
    };
  
    return (
      <div>
        <Cabecalho currentPath="/login" />
        {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      </div>
    );
  };
  

export default Login;
