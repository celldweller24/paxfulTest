FROM php:7
RUN apt-get update -y && apt-get install -y openssl zip unzip git nodejs npm mariadb-client libonig-dev
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo_mysql
WORKDIR /app
COPY . .
RUN mv .env.testAssignment .env && \
    composer install && \
    php artisan key:generate && php artisan config:cache
EXPOSE 80
