import React from "react";
import { useGetNotesQuery } from "../../features/noteapiSlide";

const Main = () => {
  const { data, isLoading } = useGetNotesQuery();
  console.log(data);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div>Main</div>
      <ul>
        {data.map((d) => {
          return <li key={d._id}>{d.description}</li>;
        })}
      </ul>
    </>
  );
};

export default Main;
