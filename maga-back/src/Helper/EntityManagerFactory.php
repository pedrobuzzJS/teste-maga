<?

namespace Maga\Helper;

use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\ORMSetup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class EntityManagerFactory {
  public static function createEntityManager()
  {
    $config = ORMSetup::createAttributeMetadataConfiguration(
      paths: array(__DIR__ . "/.."),
      isDevMode: true,
    );
    
    $connetion = [
      'dbname' => 'magazord',
      'user' => 'postgres',
      'password' => 'postgres',
      'host' => 'localhost',
      'port' => 5433,
      'driver' => 'pdo_pgsql',
    ];

    $connection = DriverManager::getConnection($connetion, $config);

    return (new EntityManager($connection, $config));
  }
}