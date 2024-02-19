<?

namespace Maga\Controllers;

use Maga\Repositories\ContatoRepository;
use Maga\Services\ContatoService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;
use Maga\Helper\AppHelper;

class ContatoController
{
  public function list(Request $request, Response $response, array $args): Response
  {
    $contatoRepository = new ContatoRepository();
    $contatoService = new ContatoService($contatoRepository);

    $filter = $data = AppHelper::getDataFromRequest($request);

    $data = $contatoService->list($args);

    return AppHelper::sendResponseJson($response, $data);
  }

 
  public function insert(Request $request, Response $response, array $args): Response
  {
    $data = AppHelper::getDataFromRequest($request);

    $contatoRepository = new ContatoRepository();
    $contatoService = new ContatoService($contatoRepository);

    $data = $contatoService->insert($data);

    return AppHelper::sendResponseJson($response, $data);
  }

  public function update(Request $request, Response $response, array $args): Response
  {
    $data = AppHelper::getDataFromRequest($request);

    $contatoRepository = new ContatoRepository();
    $contatoService = new ContatoService($contatoRepository);

    $data = $contatoService->update($data);

    return AppHelper::sendResponseJson($response, $data);
  }

  public function delete(Request $request, Response $response, array $args): Response
  {
    $contatoRepository = new ContatoRepository();
    $contatoService = new ContatoService($contatoRepository);

    $data = $contatoService->delete($args['id']);

    return AppHelper::sendResponseJson($response, $data);
  }
}