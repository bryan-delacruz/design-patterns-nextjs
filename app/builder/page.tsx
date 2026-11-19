// @/app/builder/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import { TransferForm } from "@/patterns/01-builder/transfer-form";

export const metadata: Metadata = {
  title: "Builder | Patrones de diseño en Next.js",
  description: "Patrón Builder: transferencia bancaria validada con Server Actions.",
};

export default function BuilderPage() {
  return (
    <>
      <nav className="max-w-md mx-auto mt-6 px-6 text-sm">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Todos los patrones
        </Link>
      </nav>
      <TransferForm />
    </>
  );
}
