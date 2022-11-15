import { prisma } from "../../lib/prisma";

export default async function Page() {
  const analistas = await prisma.analista.findMany({
    orderBy: { nome: "asc" },
    include: {
      gerente: true,
    },
  });

  return (
    <div className="grid gap-4">
      <h1 className="text-gray-800 font-bold text-2xl">Analistas</h1>

      <div className="grid md:grid-cols-4 gap-4">
        {analistas.map((analista) => (
          <div key={analista.id} className="bg-green-500/25 p-3 rounded">
            <h2 className="font-semibold text-black">{analista.nome}</h2>

            <ul className="list-inside list-disc mt-2 text-xs text-gray-700">
              <li>
                <span className="font-semibold">Email:</span> {analista.email}
              </li>
              <li className="capitalize">
                <span className="font-semibold">Especialidade:</span>{" "}
                {analista.especialidade.toLowerCase()}
              </li>
              <li>
                <span className="font-semibold">Gerente:</span>{" "}
                {analista.gerente.nome}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
