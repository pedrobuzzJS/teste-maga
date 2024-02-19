# Use a imagem oficial do PHP 8.1
FROM php:8.1.10-cli

# Instale dependências necessárias para o Composer e para o projeto
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Instale o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Configure o diretório de trabalho
WORKDIR /app

# Copie o arquivo composer.json e o composer.lock para o diretório de trabalho
COPY composer.json composer.lock /app/

# Instale as dependências do Composer
RUN composer install --no-scripts --no-autoloader

# Copie o restante dos arquivos do projeto
COPY . /app

# Gere o autoload do Composer
RUN composer dump-autoload --optimize

# Comando padrão a ser executado ao iniciar o container
EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "index.php"]