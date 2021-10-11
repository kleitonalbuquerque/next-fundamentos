import Link from "next/link";
import router from "next/router";

export default function rotas() {
  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "routes/params",
      query: {
        id: 123,
        nome: "Mariana Oliveira de Albuquerque",
        idade: 2,
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/routes/params?id=12&nome=Ana&idade=12">
          <li>Params</li>
        </Link>
        <Link href="/routes/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/routes/123/Mariana">
          <li>Mariana</li>
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={navegacaoComParams}>Params</button>
        <button onClick={() => navegacaoSimples("/routes/123/Mariana")}>
          Mariana
        </button>
        <button onClick={() => navegacaoSimples("/routes/123/Mariana")}>
          Mariana
        </button>
      </div>
    </div>
  );
}
