
const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	// password: /^.{4,12}$/, // 4 a 12 digitos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    // mail:/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/
}

const campos_array = {
    name: false,
    mail: false
}


let inputs = document.querySelectorAll('#form_contact input');
inputs.forEach((input) => {
    input.addEventListener('keyup', info_correct);
    input.addEventListener('blur', info_correct);
});

function info_correct(e){
    console.log(e.target.value);
    switch(e.target.name){
        case "txt_name_mail":
            if(expresiones.name.test(e.target.value)){
                e.target.style.cssText="border: 2px solid #00EE0E;background-color: #1e1e1e;color:#b5b5b5;";
                campos_array['name'] = true;
            }else{
                e.target.style.cssText="border: 2px solid #EA4000;background-color: #1e1e1e;color:#b5b5b5;";
                campos_array['name'] = false;
            }   
        break; 
        
        case "txt_mail":
            if(expresiones.mail.test(e.target.value)){  
                e.target.style.cssText = "border: 2px solid #00EE0E;background-color: #1e1e1e;color:#b5b5b5;";
                campos_array['mail'] = true;
            }else{
                e.target.style.cssText = "border: 2px solid #EA4000;background-color: #1e1e1e;color:#b5b5b5;";
                campos_array['mail'] = false;
            }
        break;
    }

    
}
        

        //Valido el Form antes de enviarlo.
        var form = document.getElementById('form_contact');
        form.addEventListener('submit', validar_empty);


        function validar_empty(event) {
            if (campos_array['name'] && campos_array['mail']) {
                this.submit();
            } else {
                $('#ModalForm').on('show.bs.modal', function(event) {
                    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                    var modal = $(this);
                    modal.find('.modal-title').text('Warning');
                    modal.find('.modal-body').text('Make sure that the fields are corrects.');
                })
                $('#ModalForm').modal('show');
                event.preventDefault();
            }
        }
        // Función que se ejecuta cuando el inpComment cambia.
        function txt_comment_effect(){
            var txt_comment_mail = document.getElementById('txt_comment_mail');
            if(txt_comment_mail.value == ""){
                txt_comment_mail.style.cssText = "background-color: transparent;outline: none;border-bottom: 1px solid #1e1e1e;color:#1e1e1e;";
            }else{
                txt_comment_mail.style.cssText = "background-color: #1e1e1e !important;color: #b5b5b5;border: 2px solid #00EE0E;";
            }
        };


        // Despues de enviar el FORM, valido lo que me devuelve el backend.
        var confirm_sent_mail = document.getElementById('confirm_sent_mail').value;

            if(confirm_sent_mail == 1){
                $('#ModalForm').on('show.bs.modal', function(event) {
                    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                    var modal = $(this);
                    modal.find('.modal-title').text('Warning');
                    modal.find('.modal-body').text('¡Sorry!, This mail is already registered.');
                })
                $('#ModalForm').modal('show');
            }
            if(confirm_sent_mail == 2){
                $('#ModalForm').on('show.bs.modal', function(event) {
                    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                    var modal = $(this);
                    modal.find('.modal-body').text("¡Mail send succesfull!, I'm looking forward to working with you.");
                })
                $('#ModalForm').modal('show');
            }
            if(confirm_sent_mail == 3){
                $('#ModalForm').on('show.bs.modal', function(event) {
                    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                    var modal = $(this);
                    modal.find('.modal-title').text('Error');
                    modal.find('.modal-body').text('¡Sorry!, We have problems to send this message.');
                })
                $('#ModalForm').modal('show');
            }
        
