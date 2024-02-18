<?

namespace Maga\Services;

use Maga\Helper\EntityManagerFactory;
use Maga\Helper\AppHelper;
use Maga\Repositories\PessoaRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Maga\Entities\Pessoa;

class PessoaService
{
  public function __construct(PessoaRepository $pessoaRepository) {
    $this->pessoaRepository = $pessoaRepository;
  }
  // public function list(Request $request, Response $response, array $args): Response
  // {
  //   $entityManager = EntityManagerFactory::createEntityManager();
  //   $pessoa = $entityManager->getRepository(Pessoa::class)->findAll();

  //   // AppHelper::dd($pessoa);
  //   return AppHelper::sendResponseJson($response, $pessoa);
  // }
 
  public function insert($data)
  {
    $pessoaCriada = $this->pessoaRepository->create($data);

    return $pessoaCriada;
  }
}