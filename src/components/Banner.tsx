import Image from '../assets/pexels-kevin-ku-577585.jpg';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

export function Banner() {
    return (
        <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 l:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
                        >
                            YURI <span>ASSUNÇÃO</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="text-white mr-4">I am a</span>
                            <TypeAnimation
                                sequence={[
                                    'Developer',
                                    2000,
                                    'Freelancer',
                                    2000,
                                    'FullStack',
                                    2000
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            I am a competent programmer, passionate about my job and technology.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
                        >
                            <button className="btn btn-lg">
                                Contact me
                            </button>
                            
                            <a href="#" className="text-gradient btn-link">
                                My Portfolio
                            </a>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
                        >
                            <a href="#" className="p-2 rounded-full hover:bg-slate-200/40">
                                <FaMailBulk size={28} />
                            </a>

                            <a href="https://github.com/yuriassuncx" className="p-2 rounded-full hover:bg-slate-200/40">
                                <FaGithub size={28} />
                            </a>

                            <a href="https://www.linkedin.com/in/yuri-assuncx/" className="p-2 rounded-full hover:bg-slate-200/40">
                                <FaLinkedin size={28} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img src={Image} alt="Front Image" className="rounded-[48px] bg-accent p-1 hover:-translate-y-9 transition-transform duration-300 cursor-pointer" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
