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

  useEffect(() => {
    const wss = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    if (firstFive) {
      wss.onopen = () => {
        firstFive.map((item) => {
          return wss.send(
            JSON.stringify({
              event: "subscribe",
              channel: "ticker",
              symbol: `t${item.toUpperCase()}`,
            })
          );
        });
      };

      wss.onmessage = (event) => {
        let data = JSON.parse(event.data);
        console.log(data);
      };

      return () => {
        wss.close();
      };
    }
  }, [firstFive]);

  return (
    <div style={{ textAlign: "center" }}>
      {firstFive.map((item) => {
        return <div key={item}>{item.toUpperCase()}</div>;
      })}
    </div>
  );
};

export default Data;
