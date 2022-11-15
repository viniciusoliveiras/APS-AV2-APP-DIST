import { prisma } from "../../lib/prisma";

export default async function Page() {
  const gerentes = await prisma.gerente.findMany({
    orderBy: { nome: "asc" },
    include: {
      analista: true,
    },
  });

  return (
    <div className="grid gap-4">
      <h1 className="text-gray-800 font-bold text-2xl">Gerentes</h1>

      <div className="grid md:grid-cols-4 gap-4">
        {gerentes.map((gerente) => (
          <div key={gerente.id} className="bg-blue-500/25 p-3 rounded">
            <h2 className="font-semibold text-black">{gerente.nome}</h2>

            <h3 className="mt-2 mb-1 font-semibold text-sm">Equipe</h3>
            <ul className="list-inside list-disc  text-xs text-gray-700">
              {gerente.analista.map((analista) => (
                <li key={analista.id}>{analista.nome}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
