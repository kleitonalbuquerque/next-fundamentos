import { useRouter } from "next/router";
import Link from "next/link";

export default function buscar() {
  const router = useRouter();
  const id = router.query.id;

  console.log(router);

  return (
    <div>
      <h1>Rotas / {id} / Buscar!!!</h1>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
