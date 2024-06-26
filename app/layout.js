import AuthProvider from "./_components/AuthProvider";
import Nav from "./_components/nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <Nav />
          <main className="m-2">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
