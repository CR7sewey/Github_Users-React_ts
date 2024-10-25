import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

export const NavSearch = () => {
  const [searchUser, setSearchUser] = useState("");

  return (
    <div className="navsearch">
      <form method="GET" className="bg-slate-100">
        <MdSearch />

        <input
          type="search"
          name="search"
          value={searchUser}
          className="outline-gray-400 text-gray-600 placeholder:text-gray-800"
          onChange={(e) => setSearchUser(e.target.value as string)}
          placeholder={`Enter a Github User...`}
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white hover:bg-cyan-700 hover:text-zinc-200 transition"
        >
          search
        </button>
      </form>
      <h3 className="text-gray ">Requests: 60 / 60</h3>
    </div>
  );
  {
    /** 
    <div className="relative grid gap-x-4 gap-y-7 md:grid-cols-2 md:items-center">
      <form
        method="GET"
        className="bg-slate-100 grid items-center grid-cols-2 gap-x-2 p-2 rounded-xl max-[800px]:text-sm"
      >
        <span>
          <MdSearch />
        </span>
        <input
          type="search"
          name="search"
          value={searchUser}
          className="capitalize border-transparent outline-gray-400 tracking-wider text-gray-600 px-1 py-2  placeholder:text-gray-800"
          onChange={(e) => setSearchUser(e.target.value as string)}
          placeholder={`Enter a Github User...`}
        />
        <button
          type="submit"
          onClick={search}
          className="rounded-md border-transparent px-1 py-2 capitalize tracking-wider bg-cyan-600 text-white transition cursor-pointer hover:bg-cyan-700 hover:text-zinc-200"
        >
          search
        </button>
      </form>
      <h3 className="md:px-0 md:py-2 mb-0 text-gray ">Requests: 60 / 60</h3>
    </div>*/
  }
};
