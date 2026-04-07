export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <footer className="py-10 flex justify-center items-center">
          Hecho con amor por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
