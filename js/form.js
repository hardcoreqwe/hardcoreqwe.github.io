jQuery(document).ready(function(){
	jQuery("form").submit(function() { // Событие отправки с формы
		var form_data = jQuery(this).serialize(); // Собираем данные из полей
		jQuery.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: swal({
				title: "Спасибо за заявку!",
                type: "success",
                showConfirmButton: false,
                timer: 2000
            })
        });
        //PROBUYU ZAKRIVAT POPUP
        $('.overlay, #price, #callback, #thanks, #popup-allmicro, #popup-micro, #popup-all, #popup-qualification, #popup-eyes, #popup-lips, #popup-eyebrows').fadeOut();

        $(this).find('input, textarea').prop('disabled', true);
        event.preventDefault();
    });
});