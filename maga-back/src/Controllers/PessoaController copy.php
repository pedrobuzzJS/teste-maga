<?

namespace Maga\Controllers;

use Maga\Helper\EntityManagerFactory;
use Maga\Helper\AppHelper;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Maga\Entities\Pessoa;

class PessoaController
{
  public function list(Request $request, Response $response, array $args): Response
  {
    $entityManager = EntityManagerFactory::createEntityManager();
    $pessoa = $entityManager->getRepository(Pessoa::class)->findAll();

    // AppHelper::dd($pessoa);
    return AppHelper::sendResponseJson($response, $pessoa);
  }

 
  public function insert(Request $request, Response $response, array $args): Response
  {
    $data = AppHelper::getDataFromRequest($request);
    $entityManager = EntityManagerFactory::createEntityManager();
    $pessoa = new Pessoa($data);
    $entityManager->persist($pessoa);
    $entityManager->flush();

    return AppHelper::sendResponseJson($response, $data);
  }

  public function update()
  {

  }

  public function delete()
  {

  }
}