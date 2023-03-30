import { motion } from "framer-motion"
import type { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"

const list = [
  "6kmGx",
  "7t2xR",
  "8rf1A",
  "Bah0v",
  "fGSNw",
  "H4VUx",
  "hirJU",
  "gRRgu",
  "iGHhq",
  "JILee",
  "JTy3W",
  "jZjh1",
  "K6FVf",
  "l2Uah",
  "lziKo",
  "Mksys",
  "oXsuL",
  "Rrx5N",
  "Sg3Ma",
  "sgYAw",
  "sL3Ph",
  "TarFd",
  "tSjq7",
  "TZbuB",
  "ueOOs"
]

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: list.map((i) => ({ params: { id: i } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id

  return {
    props: {
      id: list.includes(id as string) ? id : "fallback"
    }
  }
}
const Page = ({ id }: any) => {
  return (
    <div className="font-mont relative flex min-h-screen items-end justify-center overflow-x-hidden bg-[#05071c]">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.1, duration: 1.4 }}
        className="fixed top-0 left-0 z-[12] min-h-screen w-full bg-[#00172d] backdrop-blur-[2px]"
      />
      <div className="relative h-[400px] w-full overflow-hidden">
        <motion.div className="relative mx-auto w-[300px]">
          <motion.div
            initial={{
              transformOrigin: "100% 100%",
              rotateZ: 10,
              rotate: -10
            }}
            animate={{ rotateX: 86, rotateZ: 10, rotate: 0 }}
            transition={{
              delay: 1.2,
              stiffness: 26,
              type: "spring"
            }}
            // transition={{ delay: 1, duration: 1 }}
            className="relative z-[10] shadow-md"
          >
            <motion.div
              animate={{
                rotateZ: [0, 10, 2, 10, 6, 0]
              }}
              transition={{ delay: 3, repeat: 2, repeatDelay: 0.35 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.7, duration: 0.5 }}
                className="absolute h-full w-full bg-amber-50 bg-opacity-40 shadow-2xl shadow-[#fde295]"
              />
              <Image src={"/card.png"} alt={"card"} width={300} height={200} />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              transform:
                "rotate(0deg) rotateX(86deg) rotateZ(10deg) translateZ(0px)",
              transformOrigin: "100% 100%"
            }}
            transition={{ delay: 1.2, duration: 2.8 }}
            animate={{ height: "0px" }}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: -160, opacity: 1, x: -60 }}
        transition={{ delay: 3 + 0.62, type: "spring", stiffness: 60 }}
        className="absolute bottom-[200px] z-[13] "
      >
        <motion.div
          initial={{
            transformOrigin: "100% 100%",
            rotateX: 86,
            rotateZ: 10,
            rotate: 0
          }}
          animate={{ rotateX: 0, rotateZ: 0, rotate: -4 }}
          transition={{ delay: 3.4 + 0.62 - 0.4, duration: 0.6 }}
          className="shadow-2xl shadow-white"
        >
          <Image
            src={`/${id}/1.jpg`}
            className="max-h-[300px] rounded-md object-cover"
            alt={"carsd"}
            width={200}
            height={120}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: -220, opacity: 1, x: 80 }}
        transition={{ delay: 3 + 1 + 0.62, type: "spring", stiffness: 60 }}
        className="absolute bottom-[200px] z-[13] "
      >
        <motion.div
          initial={{
            transformOrigin: "100% 100%",
            rotateX: 86,
            rotateZ: 10,
            rotate: 0
          }}
          animate={{ rotateX: 0, rotateZ: 0, rotate: 8 }}
          transition={{ delay: 3.4 + 1 + 0.62 - 0.4, duration: 0.6 }}
          className="shadow-2xl shadow-white"
        >
          <Image
            src={`/${id}/2.jpg`}
            className="max-h-[300px] rounded-md object-cover"
            alt={"carsd"}
            width={200}
            height={120}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: -140, opacity: 1, x: 76 }}
        transition={{ delay: 3 + 1 + 1 + 0.62, type: "spring", stiffness: 60 }}
        className="absolute bottom-[200px] z-[13] "
      >
        <motion.div
          initial={{
            transformOrigin: "100% 100%",
            rotateX: 86,
            rotateZ: 10,
            rotate: 0
          }}
          animate={{ rotateX: 0, rotateZ: 0, rotate: -14 }}
          transition={{ delay: 3.4 + 1 + 1 + 0.62 - 0.4, duration: 0.6 }}
          className="shadow-2xl shadow-white"
        >
          <Image
            src={`/${id}/3.jpg`}
            className="max-h-[300px] rounded-md object-cover"
            alt={"carsd"}
            width={200}
            height={120}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6 + 0.62, duration: 1.2 }}
        className="absolute bottom-[200px] z-[13] "
      >
        <motion.div className="px-8">
          <p className="text-center tracking-wider text-gray-200">
            Can miles truly separate you from friends? If you want to be with
            someone you love, aren’t you already there?
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page
