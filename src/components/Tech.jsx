import { RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiTailwindcss, SiBlender } from "react-icons/si";
import { FaPython, FaNode } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-5xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2 }} // Scale the icon up on hover
          transition={{
            type: "spring", // Optional: can also use "tween"
            stiffness: 300, // Controls the speed of the spring effect
            damping: 20, // Controls how quickly it stops moving
            duration: 0.3, // Duration of the transition
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-800 p-4">
            <RiReactjsLine className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-800 p-4">
            <SiMysql className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-800 p-4">
            <FaPython className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-800 p-4">
            <IoLogoHtml5 className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-800 p-4">
            <FaNode className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3,
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-800 p-4">
            <SiTailwindcss className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3,
          }}
        >
          <div className="rounded-2xl border-1 border-neutral-400 p-4">
            <SiBlender className="text-8xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
