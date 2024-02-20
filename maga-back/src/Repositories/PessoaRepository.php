<?

namespace Maga\Repositories;

use Maga\Helper\EntityManagerFactory;
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

  public function list($params = null)
  {
    $entityManager = EntityManagerFactory::createEntityManager();

    if ($params)
      return $entityManager->getRepository(Pessoa::class)->find($params);

    return $entityManager->getRepository(Pessoa::class)->findAll();
  }

  public function findByName($nome)
  {
    $entityManager = EntityManagerFactory::createEntityManager();

    return $entityManager->getRepository(Pessoa::class)->findBy(['nome' => $nome]);
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