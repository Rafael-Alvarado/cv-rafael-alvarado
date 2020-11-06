document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  $(".ocultar").hide();
  const $boton = document.querySelector("#printButton");
  $boton.addEventListener("click", () => {
    $(".ocultar").show();

      const $elementoParaConvertir = document.querySelector("#printableArea"); // <-- Aquí puedes elegir cualquier elemento del DOM
      html2pdf()
          .set({

           margin: 1,
              filename: 'Curriculum.pdf',
              image: {
                  type: 'jpeg',
                  quality: 0.98
              },
              html2canvas: {
                  scale: 3, // A mayor escala, mejores gráficos, pero más peso
                  letterRendering: true,
              },
              jsPDF: {
                  unit: "in",
                  format: "a3",
                  orientation: 'portrait' // landscape o portrait
              }
          })
          .from($elementoParaConvertir)
          .save()
          .catch(err => console.log(err));
          window.addEventListener("download",function(){
            $(".ocultar").hide();
          })

  });
           
});