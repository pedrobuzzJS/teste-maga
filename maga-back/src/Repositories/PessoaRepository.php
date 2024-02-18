<?

namespace Maga\Repositories;

use Maga\Helper\EntityManagerFactory;
use Maga\Helper\AppHelper;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Maga\Entities\Pessoa;

class PessoaRepository
{
  public function create($data)
  {
    $entityManager = EntityManagerFactory::createEntityManager();
    $pessoa = new Pessoa($data);
    $entityManager->persist($pessoa);
    $entityManager->flush();

    return $pessoa;
  }

  public function list($paramns = null)
  {

  }

  public function update($data)
  {

  }

  public function delete($id)
  {

  }
}