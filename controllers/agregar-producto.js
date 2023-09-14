// Agregar campo de imagen y Botón para buscar imagen en la computadora: -- Debe permitir al usuario cargar una imagen.
const fileInput = document.getElementById("fileInput");
const submitButton = document.getElementById("submitButton");
const previewImage = document.getElementById("previewImage");
const dropZone = document.getElementById("dropZone");

submitButton.addEventListener("click", () => {
    fileInput.click();
});
fileInput.addEventListener("change", function() {
    let selectedFile = fileInput.files[0];
    if (selectedFile) {
      // Mostrar la vista previa de la imagen seleccionada
      dropZone.classList.add("has-image");
      previewImage.style.display = "block";
      previewImage.src = URL.createObjectURL(selectedFile);
    }
  });
  dropZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    dropZone.classList.add("drag-over");
  });
  
  dropZone.addEventListener("dragleave", function() {
    dropZone.classList.remove("drag-over");
  });
  
  dropZone.addEventListener("drop", function(e) {
    e.preventDefault();
    dropZone.classList.remove("drag-over");
  
    var droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      // Mostrar la vista previa de la imagen arrastrada y soltada
      dropZone.classList.add("has-image");
      previewImage.style.display = "block";
      previewImage.src = URL.createObjectURL(droppedFile);
    }
  });

// Campo para nombre de producto: debe tener un máximo de 20 caracteres.

// Campo para precio del producto: el usuario solo puede ingresar números.

// Campo para descripción del producto: debe tener un máximo de 150 caracteres.

// Botón Añadir producto: si el formulario está completado correctamente se añadirá el producto, en caso contrario debería mostrar un mensaje de error.Recordando que ninguno de los campos debe estar en blanco o vacío.Agregar campo de imagen y Botón para buscar imagen en la computadora: -- Debe permitir al usuario cargar una imagen.

// Campo para nombre de producto: debe tener un máximo de 20 caracteres.

// Campo para precio del producto: el usuario solo puede ingresar números.

// Campo para descripción del producto: debe tener un máximo de 150 caracteres.

// Botón Añadir producto: si el formulario está completado correctamente se añadirá el producto, en caso contrario debería mostrar un mensaje de error.Recordando que ninguno de los campos debe estar en blanco o vacío.Agregar campo de imagen y Botón para buscar imagen en la computadora: -- Debe permitir al usuario cargar una imagen.

// Campo para nombre de producto: debe tener un máximo de 20 caracteres.

// Campo para precio del producto: el usuario solo puede ingresar números.

// Campo para descripción del producto: debe tener un máximo de 150 caracteres.

// Botón Añadir producto: si el formulario está completado correctamente se añadirá el producto, en caso contrario debería mostrar un mensaje de error.Recordando que ninguno de los campos debe estar en blanco o vacío.