import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
const HELLO_USER = loader("./helloUser.graphql");

const HelloUser: React.FC = () => {
  const [user, setUserName] = useState("");
  const [getMessage, { data, loading, error }] = useMutation(HELLO_USER);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <>
      <label>
        Name: <input value={user} onChange={e => setUserName(e.target.value)} />
      </label>
      <button onClick={() => getMessage({ variables: { user } })}>
        Get Message
      </button>
      {data && <p>{data.helloUser}</p>}
    </>
  );
};

export default HelloUser;
