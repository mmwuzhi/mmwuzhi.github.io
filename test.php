<?php


$odds=range(0,100,5.15);
$letters=range("a","z",2);
foreach($odds as $odd){
    echo $odd." ";
}
foreach ($letters as $letter){
    echo $letter." ";
}
?>
<br/>
<?php
$prices = array ('Tires' => 100, 'Oil' => 10, 'Spark Plugs' => 4);
foreach ($prices as $price => $value) {
    echo $price." - ".$value."<br/>";
}
reset($prices);
asort($prices); //反序arsort() 关联数组按元素的值升序排序
while (list ($product, $price) = each($prices)) {
    echo $product." - ".$price."<br/>";
}
ksort($prices); // 反序krsort() 关联数组按元素的关键字升序排序
while (list($product, $price) = each($prices)) {
    echo $product." - ".$price."<br/>";
}

$products = array (array ('Code' => 'TIR', 'Description' => 'Tires', 'Price' => 100),
    array ('Code' => 'OIL', 'Description' => 'Oil', 'Price' => 10),
    array ('Code' => 'SPK', 'Description' => 'Spark Plugs', 'Price' => 4)
);

sort($products); // 反序rsort() 升序排序
//for($row = 0; $row < 3; $row++){
//    for($column = 0; $column < 3; $column++){
//        echo ' | '.$products[$row][$column];
//    }
//    echo' |<br/>';
//}

for ($row = 0; $row < 3; $row++){
    echo ' | '.$products[$row]['Code'].' | '.$products[$row]['Description'].' | '.$products[$row]['Price'].' |<br/>';
}

for ($row = 0; $row < 3; $row++){
    while (list($key, $value) = each($products[$row])){
        echo '| '.$value.' ';
    }
    echo ' |<br/>';
}
//function compare($x, $y) {
//    if ($x[1] == $y[1]) {
//        return 0;
//    } else if ($x[1] < $y[1]) {
//        return -1;
//    } else {
//        return 1;
//    }
//}
usort($products, 'compare');


$numbers = array();
for ($i = 10; $i > 0; $i--) {
    array_push($numbers, $i); //添加新元素至数组末尾 相反的函数 array_pop()--删除名返回数组末尾的一个元素
}

$numbers = range(1,10);
$numbers = array_reverse($numbers); //反向排序
$numbers = range(10,1,-1);

$array = array(1,2,3);
$value = end($array);
while($value) {
    echo "$value<br/>";
    $value = prev($array);
}

function my_print($value) {
    echo "$value<br/>";
}
array_walk($array,'my_print');

function my_multiply(&$value, $key, $factor) {
    $value*=$factor;
}
array_walk($array, 'my_multiply',3);

$array = array(4, 5, 1, 2, 3, 1, 2, 1);
$ac = array_count_values($array);
foreach ($ac as $num => $count) {
    echo $num." - ".$count."<br/>";
}

$array = array('key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
extract($array);
echo"$key1$key2$key3";

$array = array('key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
extract($array, EXTR_PREFIX_ALL,'no'); //此时变量名不能首位字符为数字或者包含空格
echo "$no_key1$no_key2$no_key3";

printf("Total amount of order is %2\$.2f (with shipping %1\$.2f)<br/>",$total_shipping = 5,$total = 6.1);


$email = "sample@test.com";

$email_array = explode('@',$email);

if(strtolower($email_array[1]) =="bigcustomer.com") {
    $toaddress = "bob@example.com";
} else {
    $toaddress = "feedback@example.com";
}
echo $toaddress;

$string = "Hello world. wBeautiful day today.";
$token = strtok($string, " ");

echo "$token<br>";
$token = strtok("B");
echo "$token<br>";
$token = strtok(" ");
echo "$token<br>";
$token = strtok(" ");
echo "$token<br>";
$token = strtok(" ");

$new_email = implode('@',$email_array); //implode() 函数返回由数组元素组合成的字符串。
echo $new_email."<br/>";
$test = substr($email, -9, 5);
echo $test."<br/>";

$int = strnatcasecmp($email, $string);
if(strlen($email) < 6) {
    echo 'That email address is not valid';
    exit;//force execution of PHP script
}

$toaddress = 'feedback@example.com';//the default value
//Change the $toaddress if the criteria are met
if(strstr(@$feedback, 'shop')) {//stristr()不区分大小写
    $toaddress = 'retail@example.com';
} else if(strstr(@$feedback, 'delivery')) {
    $toaddress = 'fulfillment@example.com';
} else if(strstr(@$feedback, 'bill')) {
    $toaddress = 'accounts@example.com';
}

$test = "Hello world";
echo strpos($test, "o")."<br/>"; //strrpos()返回最后一次出现目标关键字子字符串位置
$result = strpos($test, "H");
if($result === false) {
    echo "Not found";
} else {
    echo "Found at position ".$result."<br/>";
}
echo strpos($test, 'o', 5)."<br/>"; //7
$feedback = "fuck shit";
$offcolor = array("fuck","shit");
$feedback = str_replace($offcolor, '%!@*', $feedback);
echo $feedback;
$test = substr_replace($test, 'X', -1); //用X替换倒数第一个字符

//[a-zA-Z]所有字母 [^a-z]所有非a-z的字符 *重复0～∞次 +重复1～∞次 例[[: alnum:]]+ 至少有一个字母字符
//(very)*large 匹配large,very large,very very large
//(very){1,3}表示very或者very very或者very very very
//^bob 匹配字符串开始处的bob   com$ 匹配字符串末尾的com ^[a-z]$ 匹配只包含一个小写字母的字符串
//com|edu|net 匹配com或者edu或者net
//加\处理特殊字符 单引号包裹正则表达式 （否则\\\\被处理成\\之后只能匹配\）
//^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$ 普通邮箱的正则表达式 点在[]里面的开头或者结尾使用时无特殊含义

$address = "username@example.com";
$arr = split("\.|@",$address);
while (list($key,$value) = each($arr)) {
    echo "<br/>".$value;
} //输出 换行username换行@换行example换行.换行com

function create_table($data) {
    echo "<table border=\"1\">";
    reset($data); //remember this is used to point to the beginning
    $value = current($data);
    while ($value) {
        echo "<tr><td>".$value."</td></tr>\n";
        $value = next($data);
    }
    echo "</table>";
}
$my_array = array('line one.','line two.','line three.');
create_table($my_array);
function fn(&$a) {
    $a = $a + 1;
}
$ba = 51;
echo $ba."<br/>";
fn($ba);
echo $ba."<br/>";

function larger($x,$y){
    if ((!isset($x)) || (!isset($y))) {
        return "This function requires two numbers.";
    }
    if ($x >= $y) {
        return $x;
    } else {
        return $y;
    }
}
$dc = 111;
echo larger($ba,$dc)."<br/>";

class classname {
    public $aaa;
    function __construct($param) {
        echo "Constructor called with parameter ".$param."<br/>";
    }

    function __get($name)
    {
        return $this->$name;
    }
    function __set($name, $value)
    {
        if(($name = 'aaa') && ($value >=0) && ($value <=100))
        $this->$name = $value;
    }
//    function operation($param) {
//        $this->attribute = $param;
//        echo $this->attribute;
//    }
}

$abc = new classname("123");

$abc->aaa = 111;
echo $abc->aaa.'<br/>';

interface cl {
    function fn1();
    function fn2();
}
class cls {
    public $attribute = 1;
    public function __get($name)
    {
        return $this -> $name;
    }
    public function __set($name, $value)
    {
        $this -> $name = $value;
    }
    function fn1() {
        return 123;
    }
    function fn2($param1, $param2) {
        echo $param1 + $param2.'<br/>';
    }
}
$a1 = new cls();
$x = $a1 -> fn1();
$a1 -> fn2(123,456);
echo $x.'<br/>';
final class cls1 extends cls {
    public $attribute = 2;
    final function fn1()
    {
        return 456;
    }
}



class myClass {
    public $a = "5";
    public $b = "7";
    public $c = "9";
}
$x = new myClass();
foreach ($x as $attribute) {
    echo $attribute."<br/>";
}

class Printable {
    public $testone;
    public $testtwo;
    public function __toString()
    {
        return(var_export($this, TRUE));
        // TODO: Implement __toString() method.
    }
}
$p = new Printable();
echo $p;

?>



