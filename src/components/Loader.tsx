import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative w-32 h-32 border-4 border-t-4 border-blue-500 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ borderTopColor: "transparent" }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-blue-300 border-solid rounded-full"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
