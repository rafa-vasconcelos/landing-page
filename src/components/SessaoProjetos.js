import { Projeto } from "./Projeto";
import { dadosProjetos } from "../dados/dadosProjetos";

const dados = dadosProjetos.projetos;

export const SessaoProjetos = () => {
  return (
    <section className="d-flex justify-content-center" id="projetos">
      <div class="col-md-6">
        <div className="text-center">
          <h2>PROJETOS</h2>
          {dados.map((item) => (
            <Projeto
              nomeProjeto={item.nomeProjeto}
              linkProjeto={item.linkProjeto}
              imagemProjeto={item.imagemProjeto}
              descricaoProjeto={item.descricaoProjeto}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
