$(document).ready(function() {
    // Mostrar u ocultar el formulario cuando se hace clic en el botón de WhatsApp
    $("#whatsapp-btn").click(function() {
        $("#whatsapp-form-container").toggle();
    });

    // Ocultar el formulario cuando se hace clic fuera del formulario o del botón de WhatsApp
    $(document).click(function(event) {
        const container = $("#whatsapp-form-container");
        const button = $("#whatsapp-btn");
        if (!container.is(event.target) && container.has(event.target).length === 0 &&
            !button.is(event.target) && button.has(event.target).length === 0) {
            container.hide();
        }
    });

    // Enviar el mensaje de WhatsApp
    $(".whatsapp-form").submit(function(e) {
        e.preventDefault();
        const phoneNumber = "5493794143938"; // Número de WhatsApp
        const message = $("#whatsapp-input").val();
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    });
});