import { useRouter } from "next/router";

export default function paramas() {
  const router = useRouter();

  const nome = router.query.nome;
  const idade = router.query.idade;

  console.log(router);

  return (
    <div>
      <h1>Rotas Params</h1>
      <h2>
        Nome: {nome} - Idade: {idade} anos
      </h2>
    </div>
  );
}
