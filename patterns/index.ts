// @/patterns/index.ts
// Registro de patrones: alimenta el índice de la home. Cada patrón vive en su carpeta
// (patterns/NN-nombre) y tiene una ruta propia en app/<slug>.

export interface Pattern {
  number: string;
  name: string;
  slug: string;
  category: "Creacional" | "Estructural" | "Comportamiento";
  summary: string;
  folder: string;
}

export const patterns: Pattern[] = [
  {
    number: "01",
    name: "Builder",
    slug: "builder",
    category: "Creacional",
    summary:
      "Formulario de transferencia bancaria que un Server Action construye y valida paso a paso con un TransferBuilder.",
    folder: "patterns/01-builder",
  },
];

export const REPO_URL = "https://github.com/bryan-delacruz/design-patterns-nextjs";
