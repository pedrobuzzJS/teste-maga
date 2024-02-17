<?

namespace Maga\Helper;

use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\ORMSetup;
use Doctrine\Orm\Tools\Setup;

class EntityManagerFactory {
  public static function createEntityManager()
  {
    $config = ORMSetup::createAttributeMetadataConfiguration(
      paths: array(__DIR__ . "/src"),
      isDevMode: true,
    );
    
    $connetion = [
      'dbname' => 'magazord',
      'user' => 'postgres',
      'password' => 'postgres',
      'host' => '0.0.0.0',
      'port' => 5433,
      'driver' => 'pdo_pgsql',
    ];

    return DriverManager::getConnection($connetion, $config);
  }
}