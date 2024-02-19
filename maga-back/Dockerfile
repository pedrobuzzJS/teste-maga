FROM php:8.1.10-cli

WORKDIR /app

USER www-data

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN composer install

EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "file.php"]