<?

namespace Maga\Services;

use Maga\Repositories\PessoaRepository;

class PessoaService
{
  public function __construct(PessoaRepository $pessoaRepository) {
    $this->pessoaRepository = $pessoaRepository;
  }
  public function list($params = null)
  {
    return $this->pessoaRepository->list($params);
  }

  public function findByName($nome)
  {
    return $this->pessoaRepository->findByName($nome);
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