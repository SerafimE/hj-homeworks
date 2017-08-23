Профиль пользователя
===

Вам необходимо реализовать виджет профиля разработчика:
![Профиль пользователя](./res/preview.png)

## Данные

Профиль пользователя это объект со следующими свойствами:
- `id` — идентификатор пользователя,
- `name` — имя пользователя,
- `description` — описание,
- `position` — специализация,
- `pic` — аватар.

Данные профиля доступны в формате JSONP по адресу https://neto-api.herokuapp.com/profile/me, имя функции можно передать GET-параметром `callback`.

Список используемых технологий — простой массив строк. Тоже доступен в формате JSONP по адресу https://neto-api.herokuapp.com/profile/:id/technologies. `:id` — идентификатор пользователя.

## Интерфейс

При открытии страницы необходимо загрузить данные профиля список используемых технологий. Подставить полученные данные в интерфейс.

Для подстановки данных профиля в HTML-разметку используйте элементы со следующими атрибутами:
- `data-name` — имя пользователя, подставляйте в тело тега;
- `data-description` — описание пользователя, подставляйте в тело тега;
- `data-pic` — аватар пользователя, подставляйте адрес картинки в атрибут `src`;
- `data-position` — специализация, подставляйте в тело тега;
- `data-technologies` — количество подписчиков, подставляйте в тело тега;
- `data-following` — список используемых технологий, подставляйте в тело тега.

Каждую технологию необходимо представить в виде бейджа со следующим HTML-кодом:
```html
<span class="devicons devicons-django"></span>
```

Тут `django` — строка с названием технологии.

После того как все данные загружены и подставлены, необходимо элементу с классом `content` установить значение стиля `display` в значение `initial`.

## Реализация

При реализации нельзя изменять HTML-код и CSS-стили.

### Локально с использованием git

Реализацию необходимо поместить в файл `./js/profile.js`. Файл уже подключен к документы, поэтому другие файлы изменять не требуется.

### В песочнице CodePen

Реализуйте функционал вкладке JS. Перед началом работы сделайте форк этого пена:

https://codepen.io/dfitiskin/pen/qXRLxO