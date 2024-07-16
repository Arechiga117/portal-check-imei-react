import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";
import axios from "axios";
import FetchData from "./FetchData";
import { Snippets } from "./Snippets";

function App() {

  const [imei, setImei] = useState("");

  useEffect(() => {
    
    console.log("Imei actualizado:", imei);

     axios.get(`https://01qymnly6l.execute-api.us-east-1.amazonaws.com/prod/?imei=${imei}`)

      .then(function (imei) {
        console.log(imei);
        return response.json();
        
      
      })
      .catch(function (error) {
        // Swal.fire({
        //   title: "<strong>El equipo es compatible con la red.</strong>",
        //   icon: "success",
        //   html: `
        //     El equipo podría tener consideraciones, limitantes o requerir configuración manual. 
        //     <br/>
        //     Consulta la guía para configurar VoLTE <a href="https://www.configuratuequipo.com/volte/Ios/">aquí</a>
        //     <br/>
        //     Consulta la guía para configurar APN <a href="https://www.configuratuequipo.com/apn/Ios/">aquí</a>
        //   `,
        //   showCloseButton: false,
        //   showCancelButton: false,
        //   focusConfirm: false,
        //   confirmButtonColor: '#c41f30',
          
        // });
        
      });
      
      verificarImei(imei);

  }, [imei]); 

  const verificarImei = (imei) => {
    console.log("Verificando IMEI:", imei);

  };

  
   const GuardarImei = (event) => {
     setImei(event.target.value);
   }

   

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
                    id={imei}
                    onClick={GuardarImei}
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
