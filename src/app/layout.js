import Header from "@/components/Header/Header";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
