## Pronto

Pronto is a free and open source personal blog for personal use only

Features

* oAuth2.0
* ReactJS
* Material Design
* OpenGraph and social previews
* Category and tags
* Advanced search
* Code previews

## Setup

#### Install the dependencies

```console
# install dependencies
nikandlv@nikandlv.ir:~$ composer update
nikandlv@nikandlv.ir:~$ npm install
```

#### Add your configuration

```console
nikandlv@nikandlv.ir:~$ cp .env.example .env
nikandlv@nikandlv.ir:~$ php artisan key:generate
```

#### Fireup the system

```console
nikandlv@nikandlv.ir:~$ ./clean-development
```
# Start development server

```console
nikandlv@nikandlv.ir:~$ php artisan serve
nikandlv@nikandlv.ir:~$ npm run hot
```
