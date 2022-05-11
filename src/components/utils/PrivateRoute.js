import React from "react";
import { useNavigate, Route, useLocation } from "react-router-dom";

//... => rest parameters

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const navigate =useNavigate();

  return (
    <Route {...rest}>
      {localStorage.getItem('user') ?<Component />: navigate("/login")}      
      
    </Route>
  );
};

export default PrivateRoute;