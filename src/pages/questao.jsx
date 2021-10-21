import { useEffect, useState } from "react";

export default function questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((res) => res.json())
      .then(setQuestao);
  }, []);

  function renderizarRespostas() {
    if (questao) {
      return questao.respostas.map((resp, i) => {
        return <li key={i}>{resp}</li>;
      });
    }
    return false;
  }

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>
          {questao?.id} - {questao?.enunciado}
        </span>
        <ul>
          <li>{renderizarRespostas()}</li>
        </ul>
      </div>
    </div>
  );
}
