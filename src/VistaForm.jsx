import { useState, useEffect } from "react";
import axios from "axios";
import { getDataImei } from "./getDataImei";


const VistaForm = () => {
  const [imei, setImei] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`imei actualizado: ${imei}`);
      
      getDataImei(imei)
      
    }
  
   


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
                src="../images/imagePhone.webp"
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
        <div id="spinner" className="spinner">
          <div className="spinner-circle"></div>
        </div>
      </div>
    </>
  );
};
export default VistaForm;
