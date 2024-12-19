import React from "react";
import { motion } from "framer-motion";

const SignupComplete = ({userName}) => {
    
    const containerVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
    };

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center"
            initial="initial"
            animate="animate"
            variants={containerVariants}
        >
            <motion.h1
                className="text-3xl text-cyan-800 font-semibold"
                variants={textVariants}
            >
                Xin chào {userName},
            </motion.h1>
            <motion.h1
                className="text-xl text-cyan-800 font-semibold"
                variants={textVariants}
            >
                Hoàn tất đăng ký ChatP.
            </motion.h1>
            <motion.div
                className="text-l mt-2 text-cyan-800 font-semibold"
                variants={textVariants}
            >
                Vui lòng kiểm tra email của bạn để kích hoạt tài khoản ChatP!
            </motion.div>
        </motion.div>
    );
};

export default SignupComplete;
