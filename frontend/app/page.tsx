"use client";
import Nav from "./components/nav";
import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

const searchList = [
  { title: 'Latest', id: 0 },
  { title: 'Popular', id: 1 },
  { title: 'Following', id: 2 },
];

export default function Home() {

  return (
    <div className="grid min-h-screen grid-cols-[18%_82%]">
      <Nav />
      <section>
        <header className="flex justify-between items-center h-24">
          <div className="pl-4">
            <h2 className="text-lg">Community / Feed</h2>
          </div>
          <div className="flex items-center gap-4 pr-4">
            <div className="border h-8 w-70 flex items-center gap-2">
              <IoSearch className="text-2xl" />
              <input
                type="text"
                className="h-8 w-65 focus:not-enabled"
                placeholder="Search the board..."
              />
            </div>
            <div className="cursor-pointer">
              <IoNotificationsOutline className="text-3xl" />
            </div>
            <div>
              <button
                className="
                  border
                "
                onClick={() => alert("Hello World!")}
              >
                Sign In
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-[65%_35%] h-min-screen">
          <article className="h-min-screen flex flex-col pl-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-4 pl-4">
                <h3 className="text-4xl font-extrabold">
                  A space to build together.
                </h3>

                <p className="text-lg">
                  Share your progress. Ask a question. Find your next idea.
                </p>
              </div>

              <div>
                <button className="
                    border
                    flex
                    items-center
                    gap-1.5
                    justify-center
                    text-xl
                    tracking-wide
                    pl-4
                    pr-4
                    pt-1
                    pb-1
                    rounded-sm
                    cursor-pointer
                    bg-orange-400
                    text-white
                  "
                >
                  <GoPlus />
                  Create Post
                </button>
              </div>
            </div>
            <div className="border-b pl-4 pt-4">
              <ul className="flex gap-4">
                {searchList.map((items) => (
                  <li
                    key={items.id}
                    className="text-xl cursor-pointer"
                  >
                    {items.title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <aside className="flex flex-col gap-4 pl-4 pr-4">
            <div className="border h-30 rounded-sm flex flex-col justify-center gap-4 pl-6">
              <h3 className="text-2xl font-bold">
                Your Community
              </h3>
              <div className="flex">
                <div className="border-r flex gap-4 w-1/2">
                  <span className="text-2xl"><FiUsers /></span>
                  <div>
                    <p className="text-xl font-bold">0</p>
                    <p className="text-lg">Members</p>
                  </div>
                </div>
                <div className="flex gap-4 w-1/2 pl-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <p className="text-xl font-bold">0</p>
                    </div>
                    <p className="text-lg">Online</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border font-bold min-h-110 rounded-sm pl-6">
              <h3 className="text-2xl">
                Browse Topics
              </h3>
            </div>
            <div className="border flex flex-col gap-2 rounded-sm p-4">
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-2xl">
                    <FaRegLightbulb />
                  </span>
                </div>
                <h3 className="text-xl font-medium">
                  Small wins count.
                </h3>
              </div>
              <div>
                <p className="text-lg font-normal tracking-wide leadin-4">
                  Shipped a feature, fixed a tricky bug or
                  learned something new? Share it! Progress
                  adds up, and it&apos;s always great to see
                  what others are building.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
