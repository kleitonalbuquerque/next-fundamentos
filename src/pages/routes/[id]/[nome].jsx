import { useRouter } from "next/router";
import Link from "next/link";

export default function IdENome() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  console.log(router);

  return (
    <div>
      <h1>
        Rotas / {id} / {nome}
      </h1>
      <Link href="/routes" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
