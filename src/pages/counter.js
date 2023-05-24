import CounterDemo from "@/components/modules/counterDemo";
import Head from "next/head";
import React from "react";

const Counter = () => {
  return (
    <div>
      <Head>
        <title>Counter - Home Assistant</title>
      </Head>
      <CounterDemo />
    </div>
  );
};

export default Counter;
