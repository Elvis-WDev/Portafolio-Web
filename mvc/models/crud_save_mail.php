
<?php
include("mvc/bd_conecction/conecction.php");
?>



<?php


class crud_save_mail
{

    public $name_mail;
    public $from_mail;
    public $comment_mail;

    function save()
    {

        $QuerySQL = new conecction();
        $consult = $QuerySQL->prepare("INSERT INTO mails(name_mail, from_mail, comment_mail)VALUES(:name_mail,:from_mail,:comment_mail);");
        $consult->bindParam(":name_mail", $this->name_mail, PDO::PARAM_STR);
        $consult->bindParam(":from_mail", $this->from_mail, PDO::PARAM_STR);
        $consult->bindParam(":comment_mail", $this->comment_mail, PDO::PARAM_STR);
        return $consult->execute();
    }

    function select_mail()
    {
        $QuerySQL = new conecction();
        $consult = $QuerySQL->prepare("SELECT `id_mail`, `name_mail`, `from_mail`, `comment_mail` FROM `mails` WHERE from_mail = :from_mail");
        $consult->bindParam(":from_mail", $this->from_mail, PDO::PARAM_STR);
        $consult->execute();
        $mail_one = $consult->fetch(PDO::FETCH_LAZY);
        return $mail_one;
    }
}

?>


