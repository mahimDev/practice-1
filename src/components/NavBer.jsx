import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
const NavBer = () => {
    const [open, setOpen] = useState(true)
    const route = [
        { id: 1, path: '/', name: "Home" },
        { id: 2, path: '/about', name: "About" },
        { id: 3, path: '/services', name: "Services" },
        { id: 4, path: '/Contact', name: "Contact" },
        { id: 5, path: '*', name: "NotFount" },
    ]


    return (

        <nav className="bg-white shadow-md py-10">
            <div
                className="text-3xl ml-10 lg:hidden"
                onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <CiMenuBurger />
                        :
                        <MdClose />
                }
            </div>


            <ul className={`md:hidden  absolute mt-3 lg:hidden
        ${open ? '-left-32 ' : " left-4"}
             bg-slate-700 rounded-md duration-1000  shadow-2xl text-white p-5`} >
                {
                    route.map(nav =>
                        <li
                            className=""
                            key={nav.id}
                        >
                            <a
                                href={nav.path}
                            >
                                {nav.name}
                            </a>
                        </li>)
                }
            </ul>




        </nav>

    );
};

export default NavBer;