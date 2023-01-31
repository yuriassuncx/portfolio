import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

import { Link } from 'react-scroll';

export function Nav() {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 text-2xl text-white-50">
                    <Link
                        to='home'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className="link"
                    >
                        <BiHomeAlt />
                    </Link>

                    <Link
                        to='about'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className="link"
                    >
                        <BiUser />
                    </Link>

                    <Link
                        to='services'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className="link"
                    >
                        <BsClipboardData />
                    </Link>

                    <Link
                        to='work'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className="link"
                    >
                        <BsBriefcase />
                    </Link>

                    <Link
                        to='contact'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className="link"
                    >
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
