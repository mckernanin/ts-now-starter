import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
const HELLO_WORLD = loader("./helloWorld.graphql");

const HelloWorld: React.FC = () => {
  const { data, loading, error } = useQuery(HELLO_WORLD);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return <p>{data.helloWorld}</p>;
};

export default HelloWorld;
