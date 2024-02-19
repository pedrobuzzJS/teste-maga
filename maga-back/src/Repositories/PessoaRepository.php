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
    $entityManager = EntityManagerFactory::createEntityManager();

    if ($paramns)
      return $entityManager->getRepository(Pessoa::class)->find($paramns);

    return $entityManager->getRepository(Pessoa::class)->findAll();
  }

  public function update($data)
  {
    $entityManager = EntityManagerFactory::createEntityManager();

    $pessoa = $entityManager->getRepository(Pessoa::class)->find($data->id);
    $pessoa->setNome($data->nome);
    $pessoa->setCpf($data->cpf);

    $entityManager->persist($pessoa);
    $entityManager->flush();
  }

  public function delete($id)
  {
    $entityManager = EntityManagerFactory::createEntityManager();
    $pessoa = $entityManager->getRepository(Pessoa::class)->find($id);

    if ($pessoa) {
      $entityManager->remove($pessoa);
      $entityManager->flush();
    }
  }
}