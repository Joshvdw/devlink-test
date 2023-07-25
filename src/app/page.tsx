"use client";

import { ButtonTest, CardComponent } from "../../devlink";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = () => {
    fetch("https://64bfed420d8e251fd111b2d0.mockapi.io/EventData")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ButtonTest />
      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
        {data.length > 0 &&
          data.map((events: any) => (
            <CardComponent
              name={events.name}
              image={events.image}
              date={events.dates}
              keywords={events.tags}
            />
          ))}
      </div>
    </>
  );
}
