export function showMsg(mensaje, type = "error") {
  Toastify({
    text: mensaje,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: type === "exito" ? "green" : "red"
    },
    onClick: function () { } // Callback after click
  }).showToast();
}

