import { useRouter } from "next/router";

export default function idENome() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  console.log(router);

  return (
    <div>
      <h1>
        Rotas / {id} / {nome}
      </h1>
    </div>
  );
}
