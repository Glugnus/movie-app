import Header from "@/components/Header/Header";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/font";
import { availableLocales } from "@/utils/i18n";
import AuthProvider from "@/components/auth-provider/AuthProvider";

export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
