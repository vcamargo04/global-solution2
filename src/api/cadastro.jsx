
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

async function cadastrarPaciente(paciente) {
  try {
    const file = await fs.readFile(process.cwd() + '/src/api/base/db.json', 'utf8');
    const listaPacientes = JSON.parse(file);

    listaPacientes.pacientes.push(paciente);

    const listaPacientesSTRING = JSON.stringify(listaPacientes);
    await fs.writeFile(process.cwd() + '/src/api/base/db.json', listaPacientesSTRING, 'utf8');

    return paciente;
  } catch (error) {
    console.error('Erro ao cadastrar paciente:', error);
    return null;
  }
}

export default async function (request, response) {
  if (request.method === 'POST') {
    const { nome, sobrenome, cpf, email, senha } = await request.json();
    const paciente = { nome, sobrenome, cpf, email, senha };

    const novoPaciente = await cadastrarPaciente(paciente);

    if (novoPaciente) {
      return NextResponse.json(novoPaciente);
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  } else {
    return NextResponse.json(null, { status: 405 });
  }
}
