<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CouponsTypesRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: CouponsTypesRepository::class)]
class CouponsTypes
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $name;

    #[ORM\OneToMany(mappedBy: 'coupons_types', targetEntity: Coupons::class, orphanRemoval: true)]
    private $coupons;

    public function __construct()
    {
        $this->coupons = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Coupons>
     */
    public function getCoupons(): Collection
    {
        return $this->coupons;
    }

    public function addCoupoun(Coupons $coupoun): self
    {
        if (!$this->coupons->contains($coupoun)) {
            $this->coupons[] = $coupoun;
            $coupoun->setCouponsTypes($this);
        }

        return $this;
    }

    public function removeCoupoun(Coupons $coupoun): self
    {
        if ($this->coupons->removeElement($coupoun)) {
            // set the owning side to null (unless already changed)
            if ($coupoun->getCouponsTypes() === $this) {
                $coupoun->setCouponsTypes(null);
            }
        }

        return $this;
    }
}
