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
  public function list($params = null)
  {
    // var_dump($params);
    $pessoa = $this->pessoaRepository->list($params);

    return $pessoa;
  }
 
  public function insert($data)
  {
    $pessoaCriada = $this->pessoaRepository->create($data);

    return $pessoaCriada;
  }

  public function update($data)
  {
    $pessoaAlterada = $this->pessoaRepository->update($data);

    return $pessoaAlterada;
  }

  public function delete($id)
  {
    $pessoaDeletada = $this->pessoaRepository->delete($id);

    return $$pessoaDeletada;
  }
}