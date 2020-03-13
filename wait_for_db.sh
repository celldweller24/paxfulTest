#!/bin/sh

set -e

until mysql -h mysql -u root -e '\q'; do
  >&2 echo "Mysql is unavailable - sleeping"
  sleep 2
done

>&2 echo "Mysql is up - executing command"
mysql -hmysql -uroot -e "CREATE DATABASE ${DB_DATABASE}"
php artisan migrate --force && php artisan db:seed --class=DatabaseSeeder --force && npm install && npm run dev
exec php artisan serve --host=0.0.0.0 --port=80
