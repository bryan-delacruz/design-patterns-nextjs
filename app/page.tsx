// @/app/page.tsx
import Link from "next/link";

import { patterns, REPO_URL } from "@/patterns";

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Patrones de diseño en Next.js</h1>
      <p className="mb-8 text-gray-600">
        Un ejemplo pequeño y enfocado por patrón. Cada uno tiene su demo y su código en una carpeta
        propia del repositorio.
      </p>

      <ul className="space-y-4">
        {patterns.map((pattern) => (
          <li key={pattern.slug} className="p-4 border border-gray-200 rounded-md">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-800">
                <span className="font-mono text-gray-400 mr-2">{pattern.number}</span>
                {pattern.name}
              </h2>
              <span className="text-xs text-gray-500">{pattern.category}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{pattern.summary}</p>
            <div className="mt-3 flex gap-4 text-sm">
              <Link href={`/${pattern.slug}`} className="text-blue-600 hover:underline">
                Ver demo
              </Link>
              <a
                href={`${REPO_URL}/tree/main/${pattern.folder}`}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Ver código
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
