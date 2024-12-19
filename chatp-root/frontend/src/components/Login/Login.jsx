import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoginInputFields from "../LoginInputFields/LoginInputFields";
import { handleLoginData } from "../../utilities/handlers";
import { getToken, setToken } from "../../utilities/tokenService";
import { useNavigate } from "react-router-dom";
import PasswordChange from "../PasswordChange/PasswordChange";

const Login = () => {
    const containerVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    };

    const initiaFormData = {
        email: "",
        password: "",
    };

    const navigate = useNavigate(); 
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState(initiaFormData);
    const [forgotPassword, setForgotPassword] = useState(false);

    useEffect(() => {
        const accessToken = getToken(); 
        if (accessToken) {
            navigate("/cp");
        }
    }, []);

    const handleLoginSubmit = (e) => {
        e.preventDefault(); 

        handleLoginData(formData)
            .then((response) => {

                const { access_token } = response.data;
                setToken(access_token);
                setFormData(initiaFormData);
                navigate("/cp"); 
            })
            .catch((error) => {
                console.error("Login failed", error);
                const response = error.response;
                const message = response.data.detail;
                setErrorMessage(message);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const haldleForgotPassword = () => {
        setForgotPassword(true);
    };

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center"
            initial="initial"
            animate="animate"
            variants={containerVariants}
        >
            {!forgotPassword ? (
                <LoginInputFields
                    handleLoginSubmit={handleLoginSubmit}
                    formData={formData} 
                    fieldError={errorMessage}
                    handleInputChange={handleInputChange}
                    haldleForgotPassword={haldleForgotPassword}
                />
            ) : (
                <h1>Quên mật khẩu</h1>

            )}
        </motion.div>
    );
};

export default Login;
