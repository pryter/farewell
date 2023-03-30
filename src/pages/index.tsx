import { motion } from "framer-motion"
import Image from "next/image"

const Index = () => {
  return (
    <div className="font-mont relative flex min-h-screen items-end justify-center overflow-x-hidden bg-[#05071c]">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="relative h-[400px] w-full overflow-hidden">
        <motion.div className="relative mx-auto w-[300px]">
          <motion.div
            initial={{
              transformOrigin: "100% 100%",
              rotateZ: 10,
              rotate: -10
            }}
            // transition={{ delay: 1, duration: 1 }}
            className="relative z-[10] shadow-md"
          >
            <Image
              src={"/card.png"}
              alt={"card"}
              width={300}
              height={200}
              priority={true}
            />
          </motion.div>
          <motion.div
            style={{
              transform:
                "rotate(0deg) rotateX(86deg) rotateZ(10deg) translateZ(0px)",
              transformOrigin: "100% 100%"
            }}
            className="absolute bottom-0 z-[9] h-[500px] w-full bg-black bg-opacity-30"
          />
          <div
            style={{
              transform:
                "rotate(-0.6deg) rotateX(86deg) rotateZ(10deg) translateZ(-30px)",
              transformOrigin: "100% 100%"
            }}
            className="absolute bottom-0 z-[8] ml-[-250px] h-[1200px] w-[600px] bg-gradient-to-tr from-gray-100 to-gray-200"
          />
        </motion.div>
        <div className="min-w-screen absolute left-0 h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
      </div>
    </div>
  )
}

export default Index
