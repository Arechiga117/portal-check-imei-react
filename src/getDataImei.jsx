import Swal from "sweetalert2";

export async function getDataImei (numImei) {

   let imeiArray = []

  const response = await fetch(`https://01qymnly6l.execute-api.us-east-1.amazonaws.com/dev/?imei=${numImei}`)
  const dataImei = await response.json()
  console.log(dataImei)

  // Variables para leyendas
      const leyenda1 = 'Consulta la guía para configurar VoLTE <a href="https://www.configuratuequipo.com/volte/' ;
      const leyenda2 = 'Consulta la guía para configurar APN <a href="https://www.configuratuequipo.com/apn/' ;
      let leyendas = "";

  const imeiHomologated = dataImei.body.imei.homologated;
  const imeiSub_Category = dataImei.body.imei.sub_category;
  const deviceFeaturesOs = dataImei.body.deviceFeatures.os;
  const imeiSoportaEsim = dataImei.body.imei.soportaEIM;
  imeiArray.push([imeiHomologated, imeiSub_Category, deviceFeaturesOs, imeiSoportaEsim])

  // $actresp[0] = $datadown['imei']['homologated'];
  //               $actresp[1] = $datadown['imei']['sub_category'];
  //               $actresp[2] = $datadown['deviceFeatures']['os'];
  //               $actresp[3] = $datadown['imei']['soportaESIM'];

  
  // if(dataImei === null){
  //   Swal.fire("Error al decodificar la respuesta JSON");
  // }

  // if((deviceFeaturesOs === "Android" || deviceFeaturesOs === "Ios" || deviceFeaturesOs === "iOS") && (imeiHomologated === "VOZAPP 2.0.3") || imeiHomologated === "VOZAPP") {
  //   leyendas = leyenda2;
  //   leyendas = replace("iOS", "Ios")
  // }
  // else if (deviceFeaturesOs === "Android" || deviceFeaturesOs === "Ios" || deviceFeaturesOs === "iOS") {
  //   // leyendas = ´{leyenda1} \n {leyenda2}´;
  //   leyendas = replace("iOS", "Ios");
  //   } 
  // else {
  //   leyendas = "";
  //   }{

  //   } 

    // Condiciones para mostrar diferentes resultados

    if(imeiHomologated === "COMPATIBLE PROBADO"){
    Swal.fire({
      title: "<strong>DISPOSITIVO COMPATIBLE.</strong>",
      icon: "success",
      html: `
          El equipo podría tener consideraciones, limitantes o requerir configuración manual.
          <br/>
          Consulta la guía para configurar VoLTE <a href="https://www.configuratuequipo.com/volte/Ios/">aquí</a>
          <br/>
          Consulta la guía para configurar APN <a href="https://www.configuratuequipo.com/apn/Ios/">aquí</a>
        `,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonColor: "#c41f30",
    });
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Lo siento! Tu dispositivo no es compatible",
      footer: '<a href="#">¿Como corregir el error?</a>'
    });
  }

  
}  

