export const metadata = {
  title: "Espacio Gaia",
  description: "App de reservas y gestión de clases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
