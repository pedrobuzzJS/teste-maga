<?

namespace Maga\Helper;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\RequestInterface as Request;

class AppHelper {
  public static function sendResponseJson(Response $response, $data)
  {
    $payload = json_encode($data);

    $response->getBody()->write($payload);
    return $response->withHeader('Content-Type', 'application/json');
  }

  public static function getDataFromRequest(Request $request)
  {
    $data = json_decode($request->getBody()->getContents());

    return $data;
  }

  public static function dd($data) {
    echo "<pre>";
    var_dump($data);
    echo "</pre>";
    die();
  }
}