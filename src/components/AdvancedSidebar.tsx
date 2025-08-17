import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const sidebarVariants = {
  open: { x: 0, opacity: 1, scale: 1 },
  closed: { x: "-100%", opacity: 0, scale: 0.8 },
};

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0, scale: 1 },
  closed: { opacity: 0, y: -20, scale: 0.95 },
};

const backdropVariants = {
  open: { opacity: 0.6 },
  closed: { opacity: 0 },
};

const AdvancedSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative">
      {/* backdrop */}
      <motion.div
        className="fixed inset-0 bg-gray-800"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={backdropVariants}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(false)}
      />
      {/* sidebar content */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg"
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          >
            <IoMdArrowBack className="g-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Categories</h3>
              <ul>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 select-none">Option 1</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 select-none">Option 2</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 select-none">Option 3</span>
                  </label>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                className="w-full"
                step="10"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Rating</h3>
              <ul>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="radio" name="rating" value="1" />
                    <span className="ml-2 select-none">1 Star</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="radio" name="rating" value="1" />
                    <span className="ml-2 select-none">2 Star</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="radio" name="rating" value="1" />
                    <span className="ml-2 select-none">3 Star</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="radio" name="rating" value="1" />
                    <span className="ml-2 select-none">4 Star</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="radio" name="rating" value="1" />
                    <span className="ml-2 select-none">5 Star</span>
                  </label>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-10 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        {isOpen ? (
          <IoMdArrowBack className="h-6 w-6" />
        ) : (
          <IoMdArrowForward className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default AdvancedSidebar;
