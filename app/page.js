"use client";
import Image from "next/image";
import React, { useState } from "react";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/auth");
    setUser(true);
  };
  return (
    <main className="flex justify-center mt-36 text-lg ">
      <form className=" items-center" onSubmit={handleSubmit}>
        <div className="flex mb-10">
          <p>Name:</p>
          <input
            required
            type="text"
            name="name"
            placeholder="Type your name"
            className="pl-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex">
          <p>Email:</p>
          <input
            required
            type="text"
            name="mail"
            placeholder="Type your mail"
            className="pl-2"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-black text-white px-4 py-1 mt-10">
          Submit
        </button>
      </form>
    </main>
  );
}
