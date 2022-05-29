<?php
include("mvc/models/crud_save_mail.php");
?>

<?php
$obj_crud_mail = new crud_save_mail();
$txt_name_mail = trim((isset($_POST['txt_name_mail'])) ? $_POST['txt_name_mail'] : "");
$txt_mail = trim((isset($_POST['txt_mail'])) ? $_POST['txt_mail'] : "");
$txt_comment_mail = trim((isset($_POST['txt_comment_mail'])) ? $_POST['txt_comment_mail'] : "");
$buttons = (isset($_POST['accion'])) ? $_POST['accion'] : "";
$message = 0;
if ($buttons == "save") {

    $obj_crud_mail->from_mail = $txt_mail;
    $request = $obj_crud_mail->select_mail();
    if ($request) {
        $message = 1;
    } else {
        $obj_crud_mail->name_mail = $txt_name_mail;
        $obj_crud_mail->from_mail = $txt_mail;
        $obj_crud_mail->comment_mail = $txt_comment_mail;
        $request2 = $obj_crud_mail->save();
        if ($request2) {
            $message = 2; //Mail Recibido con éxito.
        } else {
            $message = 3; //Ha ocurrido un error al guardar mensaje.
        }
    }
}

?>