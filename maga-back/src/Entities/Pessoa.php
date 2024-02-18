<?

namespace Maga\Entities;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\OneToMany;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: 'pessoa')]
class Pessoa
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue]
    public $id;

    #[Column(type: 'string', nullable: true)]
    public $nome;

    #[Column(type: 'string', nullable: true)]
    public $cpf;

    // #[OneToMany(targetEntity: Contato::class, mappedBy: 'pessoa')]
    // private interable $contatos;

    public function __construct($pessoa) {
        $this->setNome($pessoa->nome);
        $this->setCpf($pessoa->cpf);
        // $this->contatos = new ArrayCollection();
    }

    public function addContato(Contato $contato)
    {
        $this->contatos->add($contato);
        $contato->setPessoa($this);
    }

    public function contatos()
    {
        return $this->contatos;
    }

    public function setId(int $id)
    {
        $this->id = $id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setCpf(string $cpf): void
    {
        $this->cpf = $cpf;
    }

    public function getCpf(): ?string
    {
        return $this->cpf;
    }
}