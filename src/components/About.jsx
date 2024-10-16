import img from "../assets/pic.jpeg";
import { delay, motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.9}}
        className="w-full lg:w-1/2 lg:p-20 flex justify-center lg:justify-end">
          <img className="rounded-2xl max-w-full" src={img} alt="" />
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.9}}
        className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6 text-center lg:text-left text-2xl">
            I’m a sophomore studying Computer Science, with a passion for AI, Machine Learning, and Data Science. I love diving into data, building models, and exploring how intelligent systems can be designed to solve real-world problems. Along the way, I’ve worked with a variety of technologies, including MySQL, Python, React, Node.js, JavaScript, C, Java, HTML, and CSS, blending both front-end and back-end development skills.

When I’m not working on coding projects, I shift into creative mode with 3D design, using Blender to craft unique digital art and worlds for fun. This balance between technical problem-solving and creativity keeps me energized and motivated.

While 3D art is a personal passion, my career focus is on mastering AI, ML, and Data Science. I’m always learning and excited to be part of the technological innovations that will shape the future. Whether it’s developing smarter AI systems or building with tools like Python or JavaScript, I’m ready to take on new challenges and grow my expertise.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
