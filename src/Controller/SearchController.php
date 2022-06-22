<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SearchController extends AbstractController
{
    #[Route('/recherche', name: 'app_search')]
    public function index(): Response
    {
        return $this->render('search/index.html.twig', []);
    }
}
