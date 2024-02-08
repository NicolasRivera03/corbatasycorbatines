"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const consultArticles = async () => {
      const res = await fetch(`${process.env.API}/articles`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + process.env.API_TOKEN
        },
      })
      const data = await res.json()

      setArticles(data.data);      
    }

    consultArticles();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
        <h1 className="text-5xl font-semibold tracking-tight">Primer Fetch con Strapi</h1>
        {articles?.map((item, i) => <>
          <div key={i}><p>{item.attributes.Title}</p></div>
        </>)}
    </main>
  );
}
