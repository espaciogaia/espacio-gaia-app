const clases = [
  { id: 1, dia: "Lunes", hora: "08:00", nombre: "Pilates", cupos: 10 },
  { id: 2, dia: "Lunes", hora: "18:00", nombre: "Pilates", cupos: 10 },
  { id: 3, dia: "Martes", hora: "09:00", nombre: "Funcional", cupos: 10 },
  { id: 4, dia: "Miércoles", hora: "19:00", nombre: "Yoga", cupos: 10 },
];

export default function ClasesPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Horarios – Espacio Gaia</h1>

      {clases.map((clase) => (
        <div
          key={clase.id}
          style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <h3>
            {clase.nombre} – {clase.dia} {clase.hora}
          </h3>
          <p>Cupos disponibles: {clase.cupos}</p>
          <button disabled>Reservar</button>
        </div>
      ))}

      <p style={{ marginTop: 20, fontSize: 12 }}>
        * Cancelaciones con 24 hs de anticipación.
      </p>
    </main>
  );
}
