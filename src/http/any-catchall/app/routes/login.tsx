import React, { FC } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import { useRouteData } from "@remix-run/react";
import ErrorList from "../components/ErrorList";
import { Link } from "react-router-dom";

const Login: FC = function Login() {
  const { errors } = useRouteData();

  return (
    <AuthLayout>
      <h1 className="text-xs-center">Sign in</h1>
      <p className="text-xs-center">
        <Link to="/register">Need an account?</Link>
      </p>

      <ErrorList errors={errors && errors.global} />

      <form action="/login" method="POST">
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            name="email"
            placeholder="Email"
          />

          <ErrorList errors={errors && errors.email} />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            name="password"
            placeholder="Password"
          />

          <ErrorList errors={errors && errors.password} />
        </fieldset>
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;