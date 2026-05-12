import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background: "#0F1117",
        color: "#F5F7FA",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/logo.png"
            alt="Vértice Digital"
            width={140}
            height={140}
            priority
          />
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Vértice Digital
        </h1>

        <p
          style={{
            color: "#9BA7B4",
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Tecnologia, automação e produtos digitais
          construídos para a nova geração africana.
        </p>

        <Link
          href="/inicio"
          style={{
            background: "#157BFF",
            color: "#FFFFFF",
            padding: "16px 34px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            display: "inline-block",
          }}
        >
          Entrar
        </Link>
      </div>
    </main>
  );
           } 
