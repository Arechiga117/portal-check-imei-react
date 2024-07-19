import { useState } from "react";
import { getDataImei } from "./getDataImei";
import { Spinner } from "reactstrap";

export const VistaForm = () => {
  const [imei, setImei] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    console.log(`imei actualizado: ${imei}`);

    await getDataImei(imei);

    setShowSpinner(false);
  };

  const handleChange = (e) => {
    setImei(e.target.value);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="col-sm-12">
            <h5 className="Kr rojo validate">PORTAL VALIDACIÓN DE EQUIPOS.</h5>
            <br />
            <h2 className="texto-beneficios">
              <strong>
                Valida aquí si con tu equipo podrás gozar de los beneficios que
                ofrece la red.
              </strong>
            </h2>
            <br />
            <div className="text-center">
              <img
                className="phone-image"
                src="https://imgs.search.brave.com/228GMix3FGuFDDN9bpJB8MBDj-FjWpEd1ahqYxSTG04/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/ZXMucHJvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA0L3N5/bWJvbGUtdGVsZXBo/b25lLXBvcnRhYmxl/LXJvdWdlLnBuZw"
                alt="Imagen de Telefono"
              />
              <br />
              <div className="row">
                <div className="col-sm-3 col-md-6">
                  <input
                    type="text"
                    name="imei"
                    value={imei}
                    onChange={handleChange}
                    placeholder="Ingresa el IMEI aquí."
                    required
                    pattern="[0-9]+"
                    minLength={14}
                    maxLength={16}
                    className="form"
                  />
                </div>
                <div className="col-sm-3 col-md-6 btn-group">
                  <input
                    type="submit"
                    value="Valida aquí"
                    id="validate-button"
                    className="btn-localizar meb"
                  />
                  <input type="hidden" name="ban" value="50" className="kr" />
                  <input
                    type="hidden"
                    name="renew"
                    value="1984"
                    className="kr"
                  />
                </div>
                <div className="col-md-12">
                  <h6 className="meb imei">¿Cómo obtener tu IMEI?</h6>
                  <p className="kr justify">
                    El IMEI se encuentra en la caja de tu dispositivo, en los
                    ajustes del teléfono o bien, marca *#06#
                  </p>
                  <input type="hidden" name="ban" value="50" className="kr" />
                  <input type="hidden" name="msisdn" className="kr" />
                </div>
              </div>
            </div>
          </div>
        </form>
        {showSpinner && (
          <div className="Spinner" >
            <Spinner color="danger"/>
          </div>
        )}
        </div>
    </>
  );
};
