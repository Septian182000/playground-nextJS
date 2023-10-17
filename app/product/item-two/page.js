"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Clothes = () => {
  const [data, setData] = useState();
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="mt-10 px-10">
      <div className="mb-7">
        <h3>
          <Link href={"/product"}>Back</Link>
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {data?.map((data, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded"
            style={{ padding: 20 }}
          >
            <span>{data.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Clothes;
