<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LocalbiController extends AbstractController
{
    #[Route('/localbi', name: 'app_localbi')]
    public function index(): Response
    {
        return $this->render('localbi/index.html.twig', []);
    }
}
