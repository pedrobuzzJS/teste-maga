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
    public $id;

    #[Column(type: 'boolean', nullable: true)]
    public $tipo;

    #[Column(type: 'string', nullable: true)]
    public $descricao;

    #[ManyToOne(targetEntity: Pessoa::class, inversedBy: 'contatos')]
    public $pessoa;

    public function __construct($contato) {
        $this->setTipo($contato->tipo);
        $this->setDescricao($contato->descricao);
        // $this->setPessoa($contato->pessoa);
    }
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

    public function setPessoa($pessoa)
    {
        $this->pessoa = $pessoa;
    }
}