import { redirect } from 'next/navigation';

export default function Home() {
  async function handleVefUser(form: FormData) {
    'use server';
    const response = await fetch('http://localhost:3333/users');
    const data = await response.json();

    const name = form.get('nome');

    data.some((user: any) => user.name === name)
      ? redirect('/pages/success')
      : null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form action={handleVefUser} className="flex flex-row gap-3">
        <input
          type="text"
          name="nome"
          className="border-none outline-none bg-zinc-800 rounded-md px-2 py-1 w-96"
        />
        {}
        <button
          type="submit"
          className="border rounded-md border-zinc-700 px-3 hover:bg-zinc-900 transition-all duration-200"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
