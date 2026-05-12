"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function TestePage() {

  useEffect(() => {
    async function testar() {

      const { data, error } = await supabase
        .from("teste")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    testar();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0F1117",
        color: "white"
      }}
    >
      <h1>Teste Supabase</h1>
    </main>
  );
}
