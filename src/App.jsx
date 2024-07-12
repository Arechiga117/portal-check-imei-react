import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";

function App() {
  const [imei, setImei] = useState("");
  console.log("Imei inicial: ", imei);
  // imei = 20;
  // console.log('Imei Reasignado', imei);
  //   //si el formulario fue enviado
  //setImei(20);
  console.log("Imei mutado", imei);
  useEffect(() => {
    setImei(30);
  }, [imei]);
  console.log("Imei con UseEffect: ", imei);

  

  return (
    <>
      <div className="container">
        <form
          on
          onSubmit={(ev) => {
            ev.preventDefault();
            console.log(ev.target.imei.value);
          }}
        >
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
              />
              <br />
              <div className="row">
                <div className="col-sm-3 col-md-6">
                  <input
                    type="text"
                    name="imei"
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
        <div id="spinner" className="spinner">
          <div className="spinner-circle"></div>
        </div>
      </div>
    </>
  );
}

export default App;
