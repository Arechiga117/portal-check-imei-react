import Swal from "sweetalert2";

export async function getDataImei(numImei) {
  const response = await fetch(
    `https://n5tumxjzsf.execute-
api.us-east-1.amazonaws.com/dev//?imei=${numImei}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const dataImei = await response.json();
  console.log(dataImei);

  const title = dataImei.title;
  const icon = dataImei.icon;
  const html_doc = dataImei.html;

  Swal.fire({
    title: title,
    icon: icon,
    html: `${html_doc}`,
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonColor: "#c41f30",
    width: "80%"
  });
}

