export const Projeto = (props) => {
  return (
    <div className="text-center" id="#projeto">
      <div className="d-flex justify-content-center">
        <a target="_blank" href={props.linkProjeto} rel="noreferrer">
          <h3>
            {props.nomeProjeto + " "}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </h3>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <a target="_blank" href={props.linkProjeto} rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + props.imagemProjeto}
            alt={props.nomeProjeto}
          />
        </a>
      </div>
    </div>
  );
};
