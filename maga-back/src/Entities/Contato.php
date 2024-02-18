<?

namespace Maga\Entities;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\GeneratedValue;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\Table;

#[Entity]
#[Table(name: 'contato')]
class Contato
{
    #[Id]
    #[Column(type: 'integer')]
    #[GeneratedValue]
    private $id;

    #[Column(type: 'boolean', nullable: true)]
    private $tipo;

    #[Column(type: 'string', nullable: true)]
    private $descricao;

    #[ManyToOne(targetEntity: Pessoa::class, inversedBy: 'contatos')]
    public Pessoa $pessoa;

    public function setId(int $id)
    {
        $this->id = $id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setTipo(string $tipo): void
    {
        $this->tipo = $tipo;
    }

    public function getTipo(): ?string
    {
        return $this->tipo;
    }

    public function setDescricao(string $descricao): void
    {
        $this->descricao = $descricao;
    }

    public function getDescricao(): ?string
    {
        return $this->descricao;
    }

    public function setPessoa(Pessoa $pessoa)
    {
        $this->pessoa = $pessoa;
    }
}