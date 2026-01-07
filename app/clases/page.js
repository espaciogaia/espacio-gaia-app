import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Espacio Gaia</h1>
      <p>App de reservas y gestión de clases</p>

      <Link href="/clases">
        <button style={{ marginTop: 20, padding: 10 }}>
          Ver horarios y clases
        </button>
      </Link>
    </main>
  );
}
