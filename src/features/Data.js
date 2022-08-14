import { useEffect, useState } from "react";

const Data = () => {
  const [firstFive, setFirstFive] = useState([]);

  useEffect(() => {
    const options = { method: "GET", headers: { Accept: "application/json" } };

    fetch("/v1/symbols", options)
      .then((response) => response.json())
      .then((response) => {
        const data = response.slice(0, 5);
        setFirstFive(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {firstFive.map((item) => {
        return <div key={item}>{item.toUpperCase()}</div>;
      })}
    </div>
  );
};

export default Data;
