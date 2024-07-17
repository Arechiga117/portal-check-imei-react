import Swal from "sweetalert2";

export async function getDataImei (numImei) {

   let imeiArray = []

  const response = await fetch(`https://bo2kyst178.execute-api.us-east-1.amazonaws.com/dev/?imei=${numImei}`, {
    method:"GET", 
    headers: {
      "Content-Type": "application/json"
    }
  })
  const dataImei = await response.json()
  console.log(dataImei)

  // Variables para leyendas
      const leyenda1 = 'Consulta la guía para configurar VoLTE <a href="https://www.configuratuequipo.com/volte/">aquí</a>' ;
      const leyenda2 = 'Consulta la guía para configurar APN <a href="https://www.configuratuequipo.com/apn/">aquí</a>' ;
      let leyendas = "";

  const imeiHomologated = dataImei.body.imei.homologated;
  const imeiSub_Category = dataImei.body.imei.sub_category;
  const deviceFeaturesOs = dataImei.body.deviceFeatures.os;
  const imeiSoportaEsim = dataImei.body.imei.soportaESIM;
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

    // switch(imeiArray[]){
    //   case "":
    //     return "+"
    //   case "negative": 
    //     return "-"
    //   default:
    //     return "neutral"
    // }

    if(imeiHomologated === "No se encuentra"){
      Swal.fire({
        title: "<strong>Lo sentimos, no hemos podido identificar la compatibilidad de tu equipo.</strong>",
        icon: "error",
        html: `
            El equipo podría tener consideraciones, limitantes o requerir configuración manual. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
           Esto se debe a alguno de estos motivos:<br>
            El IMEI Ingresado es incorrecto.<br>
            El equipo es nuevo y aún no se refleja en los registros.<br>
            El fabricante no ha registrado el TAC de este dispositivo.<br>
            <br>
            Te recomendamos:<br>
            Revisar el IMEI de tu equipo. Marca *#06# e ingrésalo nuevamente.<br>
            Si es un SmartPhone, configurar el APN y activar VoLTE. Si no tiene VoLTE, descargar VozApp (sólo Android).<br>
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if(imeiHomologated === "No compatible" && imeiSub_Category === "No recomemdado"){
      Swal.fire({
        title: "<strong>El equipo no es compatible con la red.</strong>",
        icon: "error",
        html: `
            El equipo podría tener consideraciones, limitantes o requerir configuración manual. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
            Esto se debe a alguno de estos motivos:<br>

            1. No tiene Banda 28. <br>
            2. Es importado o no fue producido para su venta en México. <br>
            3. Tiene personalización de otro operador que no se puede remover. <br>
            4. No tiene las capacidades de Hardware o Software para funcionar correctamente en la red. <br>
            5. Ha presentado fallas en el desempeño de la red. <br>
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if(imeiHomologated === "Información no encontrada" && imeiSub_Category === "Información no encontrada"){
      Swal.fire({
        title: "<strong>Lo sentimos, no hemos podido identificar la compatibilidad de tu equipo.</strong>",
        icon: "error",
        html: `
            El equipo podría tener consideraciones, limitantes o requerir configuración manual. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <br/>
            Esto se debe a alguno de estos motivos:<br>

            1. El IMEI ingresado es incorrecto. <br>
            2. El equipo es nuevo y aún no se refleja en los registros.<br>
            3. El fabricante no ha registrado el TAC de este dispositivo. <br>

            Te recomendamos: <br>

            1. Revisar el IMEI de tu equipo. Marca *#06# e ingrésalo nuevamente.<br>
            2. Si es un SmartPhone, configurar el APN y activar VoLTE. Si no tiene VoLTE,<br>
            descargar VozApp (sólo Android).


          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if(imeiHomologated === "NO PROBADO" && imeiSub_Category === "NO PROBADO"){
      Swal.fire({
        title: "<strong>El equipo podría requerir configuración manual para conectarse a la red.</strong>",
        icon: "warning",
        html: `
            Se requiere descargar y activar VozApp para tener servicio de voz. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            Si es un SmartPhone, configurar el APN y activar VoLTE. <br>
            Si no tiene VoLTE, descargar VozApp (sólo Android).
            <br/>
            ${leyenda1}
            <br/>
            ${leyenda2}
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if(imeiHomologated === "VozApp" && imeiSub_Category === "Voz y Datos"){
      Swal.fire({
        title: "<strong>El equipo es compatible únicamente con VozApp.</strong>",
        icon: "success",
        html: `
            Se requiere descargar y activar VozApp para tener servicio de voz. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
            ${leyenda1}
            <br/>
            ${leyenda2}
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if((imeiHomologated === "VOLTE" || imeiHomologated === "HOMOLOGADO" || imeiHomologated === "HOMOLOGADOS O VOLTE") && (imeiSub_Category == "Voz y Datos" || imeiSub_Category === "Solo Datos")){
      Swal.fire({
        title: "<strong>El equipo es compatible con la red.</strong>",
        icon: "success",
        html: `
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
            ${leyenda1}
            <br/>
            ${leyenda2}
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if(imeiHomologated == "COMPATIBLE PROBADO" && (imeiSub_Category === "Voz y Datos" || imeiSub_Category === "Solo voz" || imeiSub_Category === "BAND 28")){
      Swal.fire({
        title: "<strong>El equipo es compatible con la red.</strong>",
        icon: "success",
        html: `
            El equipo podría tener consideraciones, limitantes o requerir configuración manual. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
            ${leyenda1}
            <br/>
            ${leyenda2}
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }
    
    if(imeiHomologated === "COMPATIBLE" && (imeiSub_Category == "Voz y Datos" || imeiSub_Category === "Solo Datos" || imeiSub_Category === "Solo Voz" || imeiSub_Category === "BAND 28") ){
      Swal.fire({
        title: "<strong>El equipo es compatible con la red.</strong>",
        icon: "success",
        html: `
            El equipo podría tener consideraciones, limitantes o requerir configuración manual. <br>
            <br/>
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
            ${leyenda1}
            <br/>
            ${leyenda2}
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }

    if(imeiHomologated === "COMPATIBLE HOMOLOGADO" && (imeiSub_Category == "Voz y Datos" || imeiSub_Category === "Solo Datos" || imeiSub_Category === "Solo Voz") ){
      Swal.fire({
        title: "<strong>El equipo es compatible con la red.</strong>",
        icon: "success",
        html: `
            <strong>Equipo: </strong> ${ imeiHomologated } <br>
            <strong>Uso: </strong>${ imeiSub_Category }<br>
            <strong>eSIM: </strong> ${ imeiSoportaEsim }<br>
            <br/>
            ${leyenda1}
            <br/>
            ${leyenda2}
          `,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonColor: "#c41f30",
      });
    }
}  

