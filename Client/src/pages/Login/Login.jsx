import React, { useState } from "react";
import {link } from "react-router-dom";
import { useLogin, useMyProfile } from "../../queries/authQueries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Login.module.scss";
import Input from "../../components/FormInputs/BigInput";
import Logo from "./Logo";
import GlobalSpinner from "../../components/GlobalSpinner";
import Button from "../../components/Button";

const Login = () => {
    return <div>Login Page</div>;
};

export default Login;