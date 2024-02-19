<?

namespace Maga\Services;
use Maga\Repositories\ContatoRepository;

class ContatoService 
{
  public function __construct(ContatoRepository $contatoRepository) {
    $this->contatoRepository = $contatoRepository;
  }

  public function list($params = null)
  {
    $contato = $this->contatoRepository->list($params);

    return $contato;
  }
 
  public function insert($data)
  {
    $contatoCriada = $this->contatoRepository->create($data);

    return $contatoCriada;
  }

  public function update($data)
  {
    $contatoAlterada = $this->contatoRepository->update($data);

    return $contatoAlterada;
  }

  public function delete($id)
  {
    $contatoDeletada = $this->contatoRepository->delete($id);

    return $$contatoDeletada;
  }
}