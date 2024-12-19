import React, { useState } from "react";
import { motion } from "framer-motion";

const SignupInputFields = ({
    handleSignupSubmit,
    formData,
    handleInputChange,
    passwordsMatch,
    passwordLengthError,
    fieldError,
}) => {
    const inputVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
    };

    return (
        <div className="max-w-md w-full p-6">
            <form onSubmit={handleSignupSubmit}>
                <div className="mb-4">
                    <motion.input
                        variants={inputVariants}
                        whileHover="hover"
                        whileTap="rest"
                        className="w-full px-4 py-2 text-cyan-700 border rounded-xl focus:outline-none focus:border-cyan-700"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Nhập tên đăng nhập"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <motion.input
                        variants={inputVariants}
                        whileHover="hover"
                        whileTap="rest"
                        className="w-full px-4 py-2 text-cyan-700 border rounded-xl focus:outline-none focus:border-cyan-700"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Nhập email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <motion.input
                        variants={inputVariants}
                        whileHover="hover"
                        whileTap="rest"
                        className="w-full px-4 py-2 text-cyan-700 border rounded-xl focus:outline-none focus:border-cyan-700"
                        type="password"
                        id="password1"
                        name="password1"
                        placeholder="Nhập mật khẩu"
                        value={formData.password1}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <motion.input
                        variants={inputVariants}
                        whileHover="hover"
                        whileTap="rest"
                        className="w-full px-4 py-2 text-cyan-700 border rounded-xl focus:outline-none focus:border-cyan-700"
                        type="password"
                        id="password2"
                        name="password2"
                        placeholder="Nhập lại mật khẩu"
                        autoComplete="off"
                        value={formData.password2}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {fieldError && (
                    <p className=" text-center mb-2 text-red-500">
                        {fieldError}
                    </p>
                )}

                {passwordLengthError && (
                    <p className=" text-center mb-2 text-red-500">
                        Mật khẩu phải có ít nhất 6 ký tự.
                    </p>
                )}
                {!passwordsMatch && (
                    <p className=" text-center mb-2 text-red-500">
                        Mật khẩu không khớp.
                    </p>
                )}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 rounded-md transition duration-300"
                    type="submit"
                >
                    Đăng nhập
                </motion.button>
            </form>
        </div>
    );
};

export default SignupInputFields;
