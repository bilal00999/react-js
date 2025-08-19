// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/bilal00999")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <>
      <h1 className="text-3xl text-center p-4 ">
        Github Followers :{data.followers}
      </h1>
      <div className="flex justify-center">
        <img
          src={data.avatar_url}
          alt="github image"
          className=" w-60 h-60 rounded-full mb-4 mt-4"
        />
      </div>
    </>
  );
}

export default GitHub;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/bilal00999");
  return response.json();
};
