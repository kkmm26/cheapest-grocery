"use client";

import { Suspense, useState } from "react";
import { FetchButton } from "./fetch-button";

export default function Display() {
  const [data, setData] = useState();
  
  const handleClick = async () => {
    const res = await fetch("/api", {
      method: "GET",
    });
    const data = await res.json();
    setData(data);
  };

  return (
    <div className="border-amber-600 border-8">
      <FetchButton fetcher={handleClick} />
      <Suspense fallback={<div>Loading...</div>}>
        {JSON.stringify(data)}
      </Suspense>
    </div>
  );
}
