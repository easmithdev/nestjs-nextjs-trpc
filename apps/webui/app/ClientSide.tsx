"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello.query({}).then((response) => {
      setGreeting(response);
    });
  });
  return `Client Side: ${greeting}`;
}
