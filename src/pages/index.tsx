import { motion } from "framer-motion"
import Image from "next/image"

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden bg-[#01123D]">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <motion.div className="relative">
        <motion.div
          initial={{ transformOrigin: "100% 100%", rotateZ: 10, rotate: -10 }}
          animate={{ rotateX: 86, rotateZ: 10, rotate: 0 }}
          transition={{
            delay: 2,
            stiffness: 26,
            type: "spring"
          }}
          // transition={{ delay: 1, duration: 1 }}
          className="relative z-[10] shadow-md"
        >
          <Image src={"/card.jpg"} alt={"card"} width={300} height={200} />
        </motion.div>
        <motion.div
          style={{
            transform:
              "rotate(0deg) rotateX(86deg) rotateZ(10deg) translateZ(0px)",
            transformOrigin: "100% 100%"
          }}
          transition={{ delay: 2, duration: 2.8 }}
          animate={{ height: "0px" }}
          className="absolute bottom-0 z-[9] h-[500px] w-full bg-black bg-opacity-30"
        />
        <motion.div
          style={{
            transform:
              "rotate(-0.6deg) rotateX(86deg) rotateZ(10deg) translateZ(-30px)",
            transformOrigin: "100% 100%"
          }}
          className="absolute bottom-0 z-[8] ml-[-250px] h-[1200px] w-[600px] bg-gradient-to-tr from-gray-100 to-gray-200"
        />
      </motion.div>
      <div className="min-w-screen fixed bottom-0 left-0 h-[40vh] w-full bg-gradient-to-tr from-white via-gray-100 to-gray-100" />
    </div>
  )
}

export default Index
