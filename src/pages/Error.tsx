import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

export const Error = () => {
  const error = useRouteError();
  if (error?.status === 404) {
    return (
      <div className="error">
        <div>
          <h1 className="animate-pulse">404</h1>
          <h3>Page not found</h3>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary ">
              <IoIosArrowDropleft />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">There was an error... </h4>
    </main>
  );
};
