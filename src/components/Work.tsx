import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

import Img1 from '../assets/portfolio-image-1.png';
import Img2 from '../assets/portfolio-image-2.png';
import Img3 from '../assets/portfolio-image-3.png';

import { useWorksQuery } from '../graphql/generated';
import { WorkCard } from './WorkCard';

export function Work() {
    const { data } = useWorksQuery();

    return (
        <section className="" id="work">
            <div className="container h-full mx-auto">
                <div className="grid grid-cols-2 gap-x-10">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col gap-y-12 mb-10 lg:mb-0"
                    >
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                My Latest <br />Work.
                            </h2>

                            <p className="max-w-sm mb-16">Here are some of my most recent projects, developed with the best technologies on the actually market.</p>

                            <button className="btn btn-sm">View all projects</button>
                        </div>

                        <a href='https://github.com/yuriassuncx/ignite-lab-react' className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />

                            <img
                                src={Img3}
                                alt="Portfolio Image"
                                className="group-hover:scale-125 transition-all duration-500"
                            />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">Ignite Lab - React</span>
                            </div>

                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Uma plataforma de vídeos online.</span>
                            </div>
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-10"
                    >
                        <a href='https://github.com/yuriassuncx/ignite-lab-react' className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />

                            <img
                                src={Img1}
                                alt="Portfolio Image"
                                className="group-hover:scale-125 transition-all duration-500"
                            />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">Coffee Delivery</span>
                            </div>

                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Ecommerce de cafés.</span>
                            </div>
                        </a>

                        <a href='https://github.com/yuriassuncx/ignite-lab-react' className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300" />

                            <img
                                src={Img2}
                                alt="Portfolio Image"
                                className="group-hover:scale-125 transition-all duration-500"
                            />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">NLW eSports</span>
                            </div>

                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Encontre o seu duo para jogar.</span>
                            </div>
                        </a>
                    </motion.div>
                </div>

                <div className='grid grid-cols-2 pt-10 gap-x-10 gap-y-10'>
                    {data?.works.map((work) => (
                        <WorkCard
                            key={work.id}
                            id={work.id}
                            title={work.title}
                            subtitle={work.subtitle}
                            image={work.photoUrl.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
