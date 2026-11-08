import { RxHome } from "react-icons/rx";
import { GoQuestion } from "react-icons/go";
import { IoMdCode } from "react-icons/io";
import { VscCommentDiscussionQuote } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import Link from "next/link";

const navMenu = [
    { title: "Home Feed", icon: <RxHome />, link: "#", id: 0 },
    { title: "Questions", icon: <GoQuestion />, link: "#", id: 1 },
    { title: "Projects", icon: <IoMdCode />, link: "#", id: 2 },
    { title: "Discussions", icon: <VscCommentDiscussionQuote />, link: "#", id: 3 },
    { title: "Saved", icon: <CiBookmark />, link: "#", id: 4 },
];

export default function Nav() {

    return (
        <nav>
            <div className="flex flex-col gap-8">
                <div className="h-24 flex gap-4 justify-center items-center cursor-pointer">
                    <div className="h-11 w-12 rounded-xs bg-orange-400"></div>

                    <h2 className="text-2xl font-medium tracking-tight">
                        the board
                    </h2>
                </div>

                <div className="flex items-center justify-center">
                    <ul className="flex flex-col gap-5">
                        {navMenu.map((items) => (
                            <li key={items.id}>
                                <Link href={items.link} className="flex items-center gap-4">
                                    <span className="text-3xl">{items.icon}</span>
                                    <span className="text-lg tracking-widest">{items.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};