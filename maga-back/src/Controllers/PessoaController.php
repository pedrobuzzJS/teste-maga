<?

namespace Maga\Controllers;

use Maga\Helper\EntityManagerFactory;
use Maga\Helper\AppHelper;
use Maga\Repositories\PessoaRepository;
use Maga\Services\PessoaService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Maga\Entities\Pessoa;

class PessoaController
{
  public function list(Request $request, Response $response, array $args): Response
  {
    $pessoaRepository = new PessoaRepository();
    $pessoaService = new PessoaService($pessoaRepository);

    $filter = $data = AppHelper::getDataFromRequest($request);

    $data = $pessoaService->list($args);

    return AppHelper::sendResponseJson($response, $data);
  }

 
  public function insert(Request $request, Response $response, array $args): Response
  {
    $data = AppHelper::getDataFromRequest($request);

    $pessoaRepository = new PessoaRepository();
    $pessoaService = new PessoaService($pessoaRepository);

    $data = $pessoaService->insert($data);

    return AppHelper::sendResponseJson($response, $data);
  }

  public function update(Request $request, Response $response, array $args): Response
  {
    $data = AppHelper::getDataFromRequest($request);

    $pessoaRepository = new PessoaRepository();
    $pessoaService = new PessoaService($pessoaRepository);

    $data = $pessoaService->update($data);

    return AppHelper::sendResponseJson($response, $data);
  }

  public function delete(Request $request, Response $response, array $args): Response
  {
    $pessoaRepository = new PessoaRepository();
    $pessoaService = new PessoaService($pessoaRepository);

    $data = $pessoaService->delete($args['id']);

    return AppHelper::sendResponseJson($response, $data);
  }
}