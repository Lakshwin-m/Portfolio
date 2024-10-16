import { GiHidden } from "react-icons/gi";
import about from "../assets/about-pic.jpeg";
import { delay, motion } from "framer-motion"
const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-7xl font-thin tracking-tight lg:mt-16 sm:text-6xl md:text-6xl lg:text-6xl">
              Lakshwin Krishna Reddy M
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Undergrad CSE Student
            </motion.span>
            <motion.p 
            variants={container(0.75)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left text-2xl" >
            Hey there! I’m a CSE sophomore, immersed in AI, Machine Learning, and Data Science during the day, and diving into 3D art projects by night. I love exploring the latest tech trends and building data models that can solve real-world problems. When I'm not working on AI, you’ll find me creating detailed 3D art, which has become a huge passion of mine.

While 3D art lets me get creative, my career focus is on mastering AI, ML, and Data Science. I’m always eager to learn more and contribute to the exciting innovations shaping the future. Whether it’s developing smarter AI systems or driving insights from data, I’m ready to take on whatever challenges come after graduation!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-5">
          <div className="flex justify-center lg:justify-end">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className="rounded-2xl max-w-xs lg:max-w-sm" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
