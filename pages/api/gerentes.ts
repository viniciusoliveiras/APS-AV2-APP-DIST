import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const resultado = await prisma.gerente.findMany({
    orderBy: {nome: 'asc'}
  });

  res.status(200).json(resultado);
}
