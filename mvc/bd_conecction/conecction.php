

<?php
class conecction extends PDO
{
   private $tipo_de_base = 'mysql';
   private $host = 'localhost';
   private $nombre_de_base = 'elvismacas_portfolio';
   private $usuario = 'root';
   private $contrasena = 'elvis';
   public function __construct()
   {
      //Sobreescribo el metodo constructor de la clase PDO.
      try {
         parent::__construct("{$this->tipo_de_base}:dbname={$this->nombre_de_base};host={$this->host};", $this->usuario, $this->contrasena);
      } catch (PDOException $e) {
         echo 'Ha surgido un error y no se puede conectar a la base de datos. Detalle: ' . $e->getMessage();
         exit;
      }
   }
}
?>

