<?php

use Doctrine\ORM\Tools\Console\ConsoleRunner;
use Doctrine\ORM\Tools\Console\EntityManagerProvider\SingleManagerProvider;
use Maga\Helper\EntityManagerFactory;

require_once __DIR__ . '/../vendor/autoload.php';

ConsoleRunner::run(
  new SingleManagerProvider(EntityManagerFactory::createEntityManager())
);