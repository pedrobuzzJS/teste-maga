<?

require_once "vendor/autoload.php";

use Maga\Helper\EntityManagerFactory;

$conn = EntityManagerFactory::createEntityManager();

var_dump($conn);