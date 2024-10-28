import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context";
import axios from "axios";

export const NavSearch = () => {
  const [searchUser, setSearchUser] = useState("");
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("");
  const { setUser } = useGlobalContext()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(email, text);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (data?.search === "") {
      setShowMessage(true);
      setMessage('Please, insert a User...')
      return;
    }
    try {
      const res = await axios(`https://api.github.com/users/${data?.search}`)
      if (res.status === '404') {
        throw new Error(res?.message);
      }
      setUser(res.data)
      setShowMessage(false);
      return res
    }
    catch (e) {
      console.log(e)
      setShowMessage(true);
      setMessage('Please, insert a valid User...')
      return e;
    }
  }

  return (
    <>
      {showMessage && <h1 className="text-red-600 font-thin">{message}</h1>}
      <div className="navsearch">

        <form method="GET" className="bg-slate-100" onSubmit={handleSubmit}>
          <MdSearch />


          <input
            type="search"
            name="search"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value as string)}
            placeholder={`Enter a Github User...`}
          />
          <button type="submit">search</button>
        </form>
        <h3>Requests: 60 / 60</h3>
      </div></>
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
