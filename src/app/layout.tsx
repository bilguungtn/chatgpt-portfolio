import "tailwindcss/tailwind.css";
import Footer from "./footer";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <>
        <Navbar />
        <div className="container mx-auto pt-8">{children}</div>
        <Footer />
      </>
    </html>
  );
}
