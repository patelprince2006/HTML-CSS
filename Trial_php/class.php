<?php
class Car {
  public $color;
  public $model;
 // you create a __construct() function, PHP will automatically call this function when you create an object from a class.
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);
?>