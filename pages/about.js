import Image from 'next/image'
import { isMobileOnly } from 'react-device-detect'
import { motion } from 'framer-motion'
import {
  SiLinux,
  SiDocker,
  SiGit,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiExpress
} from 'react-icons/si'
import Content from '../components/Content'
import { FadeInUp, Stagger, Tool } from '../animations/About'

export default function About () {
  return (
    <motion.div exit={{ opacity: 0 }} className="h-full">
      <div className="h-full flex flex-col md:flex-row gap-10 items-center justify-center sm:mt-16 md:mt-32 py-10">
        <div className="flex-1 h-full flex items-center justify-center">
          <Content
            title="Who Am I"
            text={
              <>
                <p>
                  Hi, I&apos;m Hector, a computer engineer from zaragoza, moved by the desire to
                  learn something new every day.
                </p>
                <p>
                  Within the IT sector, what most attracts my attention and is
                  currently my passion is the world of security, system
                  administration and web apps.
                </p>
                <p>
                  On the other hand, in my free time I like working out and
                  meeting my friends.
                </p>
              </>
            }
          />
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={FadeInUp}
            className="w-80 h-80 sm:w-96 sm:h-96 relative"
          >
            <Image
              src={'/me.jpg'}
              alt="Picture of the author"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="h-full flex flex-col md:flex-row gap-10 items-center justify-center sm:mt-16 md:mt-96 pt-10 pb-16 sm:pb-32 md:pb-64">
        <div className="flex-1 h-full flex items-center justify-center">
          <Content
            title="My Toolkit"
            text={
              <>
                <p>
                  It&apos;s always good to go well equipped to the places where
                  you are needed, that&apos;s why I try to keep my tools updated
                  as well as my knowledge about them.
                </p>
                <p>
                  Apart from the ones you can see below, I also have knowledge
                  in other technologies such as: Java, Haskell, Flex & Bison,
                  relational and non-relational databases and other web
                  frameworks such as django and next js.
                </p>
              </>
            }
          />
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={Stagger}
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 h-full flex flex-col items-center justify-center gap-2"
        >
          {!isMobileOnly
            ? (
            <>
              <motion.div
                variants={Tool}
                className="flex items-center justify-center w-36 h-16 shadow hover:text-red-600 dark:bg-light dark:hover:bg-white"
              >
                <SiLinux className="text-4xl" />
              </motion.div>
              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-600 dark:bg-light dark:hover:bg-white"
                >
                  <SiDocker className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-orange-500 dark:bg-light dark:hover:bg-white"
                >
                  <SiGit className="text-4xl" />
                </motion.div>
              </div>
              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-indigo-800 dark:bg-light dark:hover:bg-white"
                >
                  <SiCplusplus className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-yellow-300 dark:bg-light dark:hover:bg-white"
                >
                  <SiJavascript className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-500 dark:bg-light dark:hover:bg-white"
                >
                  <SiPython className="text-4xl" />
                </motion.div>
              </div>
              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-400 dark:bg-light dark:hover:bg-white"
                >
                  <SiReact className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-green-400 dark:bg-light dark:hover:bg-white"
                >
                  <SiExpress className="text-4xl" />
                </motion.div>
              </div>
            </>
              )
            : (
            <>
              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-red-600 dark:bg-light dark:hover:bg-white"
                >
                  <SiLinux className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-orange-500 dark:bg-light dark:hover:bg-white"
                >
                  <SiGit className="text-4xl" />
                </motion.div>
              </div>

              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-600 dark:bg-light dark:hover:bg-white"
                >
                  <SiDocker className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-indigo-800 dark:bg-light dark:hover:bg-white"
                >
                  <SiCplusplus className="text-4xl" />
                </motion.div>
              </div>
              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-yellow-300 dark:bg-light dark:hover:bg-white"
                >
                  <SiJavascript className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-500 dark:bg-light dark:hover:bg-white"
                >
                  <SiPython className="text-4xl" />
                </motion.div>
              </div>
              <div className="flex gap-2">
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-400 dark:bg-light dark:hover:bg-white"
                >
                  <SiReact className="text-4xl" />
                </motion.div>
                <motion.div
                  variants={Tool}
                  className="flex items-center justify-center w-36 h-16 shadow hover:text-green-400 dark:bg-light dark:hover:bg-white"
                >
                  <SiExpress className="text-4xl" />
                </motion.div>
              </div>
            </>
              )}
        </motion.div>
      </div>
    </motion.div>
  )
}
