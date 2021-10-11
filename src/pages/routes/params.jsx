import { useRouter } from "next/router";
import Link from "next/link";

export default function paramas() {
  const router = useRouter();

  const id = router.query.id;
  const nome = router.query.nome;
  const idade = router.query.idade;

  console.log(router);

  return (
    <div>
      <h1>Rotas Params</h1>
      <h2>
        ID: {id} - Nome: {nome} - Idade: {idade} anos
      </h2>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
