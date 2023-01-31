import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSendEmail(e: React.FormEvent) {
        e.preventDefault();

        if (name == "" || email == "" || message == "") {
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        }

        try {
            await emailjs.send("service_hi8by1m", "template_oh3zako", templateParams, "E3dQfctEEh_DKP0FX").finally(() => {
                toast.success("Email enviado com sucesso!", {
                    position: 'bottom-center',
                });
            })
        } catch(err) {
            toast.error(`${err}`, {
                position: 'bottom-center',
            });
        }
        
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section className="lg:section py-16" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex justify-start items-center"
                    >
                        <div>
                            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
                            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br /> together!</h2>
                        </div>
                    </motion.div>

                    <motion.form
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        onSubmit={handleSendEmail}
                        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
                    >
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        />

                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        />

                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                        />

                        <button
                            type="submit"
                            className="btn btn-lg disabled:opacity-40 disabled:cursor-not-allowed"
                            disabled={!message || !email || !name}
                        >
                            Send message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
