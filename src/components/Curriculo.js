import { Formacao } from "./Formacao";

export const Curriculo = () => {
  return (
    <section className="d-flex justify-content-center" id="curriculo">
      <div class="col-md-6">
        <div className="text-center">
          <h2>CURRÍCULO</h2>
          <Formacao />
        </div>
      </div>
    </section>
  );
};
