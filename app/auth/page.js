"use client";
import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <main className="flex justify-center mt-36 text-lg ">
      <form className=" items-center">
        <div className="flex mb-10">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            className="pl-2"
          />
        </div>
        <div className="flex">
          <p>Email:</p>
          <input
            type="text"
            name="mail"
            placeholder="Type your mail"
            className="pl-2"
          />
        </div>
        <button className="bg-black text-white px-4 py-1 mt-10">Submit</button>
      </form>
    </main>
  );
};

export default LoginPage;
