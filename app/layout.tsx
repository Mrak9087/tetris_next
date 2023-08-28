import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { HeaderLinks } from "@/helpers/setings";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Тетрис",
  description:
    "«Тетрис» представляет собой головоломку, построенную на использовании геометрических фигур «тетрамино»",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header links={HeaderLinks} />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
