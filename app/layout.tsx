import "../styles/main.css";
import { Header } from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <div className="py-3 px-6">{children}</div>
      </body>
    </html>
  );
}
