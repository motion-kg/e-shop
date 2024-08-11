# README

## Описание проекта

Этот проект представляет собой React-приложение для интернет-магазина. Дизайн и макеты приложения готовы и доступны в Figma. Разработчики могут использовать этот репозиторий для начала работы над проектом.

## Начало работы

### Требования

- Node.js >= 18.x
- npm или Yarn

### Установка

1. Склонируйте репозиторий:
   ```bash
   git@github.com:motion-kg/e-shop.git
   ```
2. Перейдите в директорию проекта:
   ```bash
   cd e-shop
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
   или
   ```bash
   yarn install
   ```

### Запуск проекта

1. Запустите приложение в режиме разработки:
   ```bash
   npm start
   ```
   или
   ```bash
   yarn start
   ```
2. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть результат.

## Использование fakeStoreApi

Для имитации данных интернет-магазина используется API **fakeStoreApi**, которое предоставляет данные в формате JSON. API может быть использовано для продуктов, корзин и пользователей.

### Примеры использования API

#### Продукты

- Получить все продукты:
  ```javascript
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Получить один продукт:
  ```javascript
  fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Ограничить результаты:
  ```javascript
  fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Сортировка результатов:
  ```javascript
  fetch('https://fakestoreapi.com/products?sort=desc')
    .then(res => res.json())
    .then(json => console.log(json));
  ```

#### Корзины

- Получить все корзины:
  ```javascript
  fetch('https://fakestoreapi.com/carts')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Получить одну корзину:
  ```javascript
  fetch('https://fakestoreapi.com/carts/5')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Ограничить результаты:
  ```javascript
  fetch('https://fakestoreapi.com/carts?limit=5')
    .then(res => res.json())
    .then(json => console.log(json));
  ```

#### Пользователи

- Получить всех пользователей:
  ```javascript
  fetch('https://fakestoreapi.com/users')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Получить одного пользователя:
  ```javascript
  fetch('https://fakestoreapi.com/users/1')
    .then(res => res.json())
    .then(json => console.log(json));
  ```
- Добавить нового пользователя:
  ```javascript
  fetch('https://fakestoreapi.com/users', {
    method: "POST",
    body: JSON.stringify({
      email: 'John@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      name: {
        firstname: 'John',
        lastname: 'Doe'
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496'
        }
      },
      phone: '1-570-236-7033'
    })
  })
  .then(res => res.json())
  .then(json => console.log(json));
  ```
