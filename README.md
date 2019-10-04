## Pronto

Pronto is a free and open source personal blog for personal use only

Features

* Passport oAuth2
* ReactJS
* Material Design 2.0
* OpenGraph and social previews
* Category and tags
* Advanced search
* Code previews
* Multi language support

## Setup

#### Install the dependencies

```console
# install dependencies
nikandlv@nikandlv.ir:~$ composer update
nikandlv@nikandlv.ir:~$ npm install
```

#### Add your configuration

```console
nikandlv@nikandlv.ir:~$ php artisan passport:install
nikandlv@nikandlv.ir:~$ cp .env.example .env
nikandlv@nikandlv.ir:~$ php artisan key:generate
```

#### Fireup the system/Setup everything

```console
nikandlv@nikandlv.ir:~$ ./clean-development
```
## Start development server

```console
nikandlv@nikandlv.ir:~$ php artisan serve
nikandlv@nikandlv.ir:~$ npm run hot
```
