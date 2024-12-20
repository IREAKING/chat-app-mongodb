import React from "react";
import { motion } from "framer-motion";

const LoginInputFields = ({
    handleLoginSubmit,
    formData,
    fieldError,
    handleInputChange,
    haldleForgotPassword,
}) => {
    const inputVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
    };

    return (
        <div className="max-w-md w-full p-6">
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                    <motion.input
                        variants={inputVariants}
                        whileHover="hover"
                        whileTap="rest"
                        className="w-full px-4 py-2 text-cyan-700 border rounded-xl focus:outline-none focus:border-cyan-700"
                        type="text"
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
                        id="password"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {fieldError && (
                    <p className=" text-center mb-2 text-red-500">
                        {fieldError}
                    </p>
                )}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 rounded-xl transition duration-300"
                    type="submit"
                >
                    Đăng nhập
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-cyan-800 pl-2"
                    type="text"
                    onClick={haldleForgotPassword}
                >
                    Quên mật khẩu
                </motion.button>
            </form>
        </div>
    );
};

export default LoginInputFields;
