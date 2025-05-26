$(document).ready(function() {
    // Validación del formulario de contacto
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        let isValid = true;

        // Validar el campo Nombre
        const nameInput = $('#name');
        if (nameInput.val().trim() === '') {
            nameInput.addClass('is-invalid');
            isValid = false;
        } else {
            nameInput.removeClass('is-invalid');
        }

        // Validar el campo Correo Electrónico
        const emailInput = $('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.val())) {
            emailInput.addClass('is-invalid');
            isValid = false;
        } else {
            emailInput.removeClass('is-invalid');
        }

        // Validar el campo Mensaje
        const messageInput = $('#message');
        if (messageInput.val().trim() === '') {
            messageInput.addClass('is-invalid');
            isValid = false;
        } else {
            messageInput.removeClass('is-invalid');
        }

        if (isValid) {
            // Datos del formulario para EmailJS
            const formData = {
                name: nameInput.val(),
                email: emailInput.val(),
                message: messageInput.val()
            };

            // Envío del correo electrónico con EmailJS
            emailjs.send("service_nr9q30i", "template_pve1sj5", formData) // Reemplaza con tus IDs
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Mostrar mensaje de éxito
                $('#successMessage').show();
                // Ocultar mensaje de error (en caso de que estuviera visible)
                $('#errorMessage').fadeOut();
                // Limpiar el formulario
                $('#contactForm')[0].reset();
            }, function(error) {
                console.log('FAILED...', error);
                // Ocultar mensaje de éxito (en caso de que estuviera visible)
                $('#successMessage').fadeOut();
                // Mostrar mensaje de error
                $('#errorMessage').text('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.');
                $('#errorMessage').fadeIn();
            });
        }
    });

    // Remover la clase 'is-invalid' al cambiar el valor de los campos
    $('#name, #email, #message').on('input', function() {
        $(this).removeClass('is-invalid');
        $('#successMessage').fadeOut();
        $('#errorMessage').fadeOut();
    });

    // Ejemplo de animación con jQuery (al hacer scroll, la sección "Acerca de Mí" hace un fadeIn)
    $(window).scroll(function() {
        if ($('#acerca').length) {
            const topOfAboutMe = $('#acerca').offset().top;
            const bottomOfAboutMe = topOfAboutMe + $('#acerca').outerHeight();
            const scrollPosition = $(window).scrollTop() + $(window).height();

            if (scrollPosition > topOfAboutMe && $(window).scrollTop() < bottomOfAboutMe) {
                $('#acerca').fadeIn(1000);
            } else {
                $('#acerca').fadeOut(1000);
            }
        }
    }).scroll();

    // Otro ejemplo: Hacer que el encabezado tenga una ligera animación al cargar
    $('header').hide().slideDown(1000);
});


const apiUrl = "http://localhost:3000/api/experiencias";

// Cargar experiencias al iniciar
function cargarExperiencias() {
    $.get(apiUrl, function (data) {
      $('#listaExperiencias').empty();
      data.forEach(exp => {
        $('#listaExperiencias').append(`
          <div class="card mb-3 position-relative">
            <div class="card-buttons">
              <i class="bi bi-pencil-square editar-exp" data-id="${exp._id}" title="Editar"></i>
              <i class="bi bi-trash eliminar-exp" data-id="${exp._id}" title="Eliminar"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">${exp.titulo || 'Sin título'}</h5>
              <p class="card-text"><strong>${exp.fechaInicio || 'Sin fecha'} - ${exp.fechaFin || 'Actualidad'}</strong></p>
              <p class="card-text">${exp.descripcion || ''}</p>
              <p class="card-text"><strong>Tecnologías:</strong> ${Array.isArray(exp.tecnologias) ? exp.tecnologias.join(', ') : ''}</p>
              ${exp.urlProyecto ? `<p><strong>URL:</strong> <a href="${exp.urlProyecto}" target="_blank">${exp.urlProyecto}</a></p>` : ''}
            </div>
          </div>
        `);
      });
    });
  }
  

$('#btnAgregarExperiencia').click(function () {
    $('#formExperiencia')[0].reset();
    $('#expId').val('');
    $('#modalExperiencia').modal('show');
});

$('#formExperiencia').submit(function (e) {
    e.preventDefault();

    const experiencia = {
        titulo: $('#titulo').val(),
        fechaInicio: parseInt($('#fechaInicio').val(), 10),
        fechaFin: $('#fechaFin').val() ? parseInt($('#fechaFin').val(), 10) : null,
        descripcion: $('#descripcion').val(),
        tecnologias: $('#tecnologias').val().split(',').map(t => t.trim()),
        urlProyecto: $('#urlProyecto').val() || ''
      };
      
      console.log("Datos a guardar:", experiencia);
      

    const id = $('#expId').val();
    if (id) {
        $.ajax({
            url: `${apiUrl}/${id}`,
            method: 'PUT',
            data: JSON.stringify(experiencia),
            contentType: 'application/json',
            success: function () {
                $('#modalExperiencia').modal('hide');
                cargarExperiencias();
            }
        });
    } else {
        $.post({
            url: apiUrl,
            data: JSON.stringify(experiencia),
            contentType: 'application/json',
            success: function () {
                $('#modalExperiencia').modal('hide');
                cargarExperiencias();
            }
        });
    }
});

$(document).on('click', '.editar-exp', function () {
    const id = $(this).data('id');
    $.get(`${apiUrl}/${id}`, function (exp) {
        $('#expId').val(exp._id);
        $('#titulo').val(exp.titulo);
        $('#fechaInicio').val(exp.fechaInicio || '');
        $('#fechaFin').val(exp.fechaFin || '');        
        $('#descripcion').val(exp.descripcion);
        $('#tecnologias').val(Array.isArray(exp.tecnologias) ? exp.tecnologias.join(', ') : '');
        $('#urlProyecto').val(exp.urlProyecto || '');
        $('#modalExperiencia').modal('show');
    });
});


$(document).on('click', '.eliminar-exp', function () {
    const id = $(this).data('id');
    if (confirm('¿Estás seguro de eliminar esta experiencia?')) {
        $.ajax({
            url: `${apiUrl}/${id}`,
            method: 'DELETE',
            success: function () {
                cargarExperiencias();
            }
        });
    }
});

$(document).ready(function () {
    cargarExperiencias();
});
