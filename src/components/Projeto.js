export const Projeto = (props) => {
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center">
        <h3>{props.nomeProjeto}</h3>
      </div>
      <div className="d-flex justify-content-center">
        <a target="_blank" href={props.linkProjeto} rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + props.imagemProjeto}
            alt={props.nomeProjeto}
          />
        </a>
      </div>
      {/* <div className="d-flex justify-content-center">
        <p>{props.descricaoProjeto}</p>
      </div> */}
    </div>
  );
};
