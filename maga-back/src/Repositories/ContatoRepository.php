<?

namespace Maga\Repositories;

use Maga\Helper\EntityManagerFactory;
use Maga\Entities\Contato;

class ContatoRepository
{
  public function create($data)
  {
    $entityManager = EntityManagerFactory::createEntityManager();
    $contato = new Contato($data);
    $entityManager->persist($contato);
    $entityManager->flush();

    return $contato;
  }

  public function list($params = null)
  {
    $entityManager = EntityManagerFactory::createEntityManager();

    if ($params)
      return $entityManager->getRepository(Contato::class)->find($params);

    return $entityManager->getRepository(Contato::class)->findAll();
  }

  public function update($data)
  {
    $entityManager = EntityManagerFactory::createEntityManager();

    $contato = $entityManager->getRepository(Contato::class)->find($data->id);
    $contato->setTipo($data->tipo);
    $contato->setDescricao($data->descricao);
    $contato->setPessoa($data->pessoa);

    $entityManager->persist($contato);
    $entityManager->flush();
  }

  public function delete($id)
  {
    $entityManager = EntityManagerFactory::createEntityManager();
    $pessoa = $entityManager->getRepository(Contato::class)->find($id);

    if ($pessoa) {
      $entityManager->remove($pessoa);
      $entityManager->flush();
    }
  }
}