# Zadanie Rekrutacyjne - Checkout

Zadanie rekrutacyjne koszyk sprzedaży wraz z funkcjonalnościami:

-   Obsługa nowych zamówień
-   Obsługa kodów rabatowych
-   Obsługa reCaptcha
-   Popout okna logowania
-   Front-end w technologii React (na tą chwilę nie zaznajomiłem się z Vue.js)

Większoś zadania opiera się na folderach:

-   [Controllers](app/Http/Controllers)
-   [Interfaces](app/Interfaces)
-   [Repositories](app/Repositories)
-   [Database](database)
-   [Resources](resources/js/)
-   [Routes](routes)

W ramach zadania w plikach .env oraz .env.example pozostawione zostały klucze autoryzacyjne dla reCaptcha,
oraz utworzony został pusty plik bazodanowy database.sqlite.

## Kroki potrzebne do uruchomienia zadania

Instalacja potrzebnych pakietów

```bash
  composer install
  npm install
```

Wykonanie migracji do bazy danych oraz wypełnienie jej danymi

```bash
  php artisan migrate
  php artisan db:seed
```

Uruchomienie serwera php

```bash
  php artisan serve
```

## Tabele w bazie

| Tabela             | Description                                          |
| :----------------- | :--------------------------------------------------- |
| `users`            | Tabela przechowująca dane użytkownika                |
| `items`            | Tabela przechowująca przedmioty dostępne do kupienia |
| `shipping_methods` | Tabela przechowująca dostępne metody dostawy         |
| `payment_methods`  | Tabela przechowująca dostępne metody płatności       |
| `orders`           | Tabela przechowująca zamówienia                      |
| `order_items`      | Tabela przechowująca listę przedmiotów na zamówieniu |
| `discounts`        | Tabela przechowująca listę kodów rabatowych          |
