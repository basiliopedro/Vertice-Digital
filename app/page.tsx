import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="entry-page">
      <div className="entry-content">

        <div className="entry-logo">
          <Image
            src="/logo.png"
            alt="Vértice Digital"
            width={130}
            height={130}
            priority
          />
        </div>

        <h1 className="entry-title">
          Vértice Digital
        </h1>

        <p className="entry-words">
          INOVAÇÃO • TECNOLOGIA • CRESCIMENTO • DESENVOLVIMENTO
        </p>

        <Link href="/inicio" className="entry-button">
          Entrar
        </Link>

      </div>
    </main>
  );
}
