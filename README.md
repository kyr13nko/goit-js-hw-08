# Parcel template

Цей проект був створений за допомогою Parcel. Для знайомства та налаштування
додаткових можливостей [звернися до документації](https://parceljs.org/).

## Підготовка нового проєкту

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай і встанови](https://nodejs.org/en/) її якщо необхідно.
2. Склонуй цей репозиторій.
3. Зміни ім'я папки з `parcel-project-template` на ім'я свого проєкту.
4. Створи новий порожній репозиторій на GitHub.
5. Відкрий проєкт у VSCode, запусти термінал і зв'яжи проєкт із
   GitHub-репозиторієм
   [за інструкцією](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встановіть залежності проекту в терміналі командою `npm install`.
7. Запустіть режим розробки, виконавши команду `npm start`.
8. Перейди в браузері за адресою [http://localhost:1234](http://localhost:1234).
   Ця сторінка буде автоматично перезавантажуватися після збереження змін у
   файлах проєкту.

## Файли і папки

- Усі паршали файлів стилів мають лежати в папці `src/sass` та імпортуватися в
  файли стилів сторінок. Наприклад, для `index.html` файл стилів називається
  `index.scss`.
- Зображення додавай у папку ``src/images`. Збирач оптимізує їх, але тільки під
  час деплою продакшн-версії проєкту. Усе це відбувається в хмарі, щоб не
  навантажувати твій комп'ютер, оскільки на слабких машинах це може зайняти
  багато часу.

## Деплой

Для налаштування деплою проєкту необхідно виконати кілька додаткових кроків з
налаштування твого репозиторію. Зайди у вкладку `Settings` і в підсекції
`Actions` вибери вибери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Перегорни сторінку до останньої секції, в якій переконайся, що обрано опції як
на наступному зображенні і натисни `Save`. Без цих налаштувань у збірки буде
недостатньо прав для автоматизації процесу деплою.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн-версія проєкту буде автоматично збиратися і деплоюватися на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пушу або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` відредагувати поле `homepage` і скрипт `build`, замінивши
`your_username` і `your_repo_name` на свої, і відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) і
виставити роздачу продакшн версії файлів із папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка і деплой проєкту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, складання або деплою сталася помилка.

Детальнішу інформацію про статус можна подивитися, клікнувши на іконку, і в
випадаючому вікні перейти за посиланням `Details`.

![Deployment status](./assets/status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною у відредагованій властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Якщо відкривається порожня сторінка, переконайся що у вкладці `Console` немає
помилок пов'язаних із неправильними шляхами до CSS і JS файлів проекту
(**404**). Швидше за все усього у тебе неправильне значення властивості
`homepage` або скрипта `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пушу в гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) з файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проєкт ініціалізується і
   проходить збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн-версія файлів проєкту
   відправляється в гілку `gh-pages`. В іншому разі, в балці виконання скрипта
   буде вказано в чому проблема.
