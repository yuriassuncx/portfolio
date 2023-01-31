import { useRef } from 'react';

import CountUp from 'react-countup';
import { useInView, motion } from 'framer-motion';

import { fadeIn } from '../utils/variants';

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
                    />
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h2 className="h2 text-accent">
                            About me.
                        </h2>

                        <h3 className="h3 mb-4">
                            I'm a Freelance FullStack Developer with over 1 year of experience.
                        </h3>

                        <p className="mb-6">
                            I started programming with Python, but soon fell in love with web development, getting to know html, css and js... and later React, NextJS, Typescript and several other tools. Currently I work with NodeJS, NextJS, ReactJS, Nest, Express, Fastify, Zod, Typescript and TailwindCSS. Participating in several projects, such as NLW Return, NLW Heat and NLW Together, by Rocketseat... In addition to having my own personal projects, such as Disney+ Clone, Netflix Clone, Twitter Clone... and a video-lesson platform. I intend to become an able and qualified professional and build any application I want.
                        </p>

                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {isInView 
                                        ? <CountUp start={0} end={1} duration={3} /> 
                                        : null
                                    }k+
                                </div>

                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br />
                                    Experience
                                </div>
                            </div>

                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {isInView 
                                        ? <CountUp start={0} end={25} duration={3} /> 
                                        : null
                                    }+
                                </div>

                                <div className="font-primary text-sm tracking-[2px]">
                                    Projects <br />
                                    Completed
                                </div>
                            </div>

                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {isInView 
                                        ? <CountUp start={0} end={10} duration={3} /> 
                                        : null
                                    }+
                                </div>

                                <div className="font-primary text-sm tracking-[2px]">
                                    Satisfied <br />
                                    Clients
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contact me</button>
                            <a href="#" className="text-gradient btn-link">
                                My Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
