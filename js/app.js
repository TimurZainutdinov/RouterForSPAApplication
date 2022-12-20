/* ----------------------
    Метод рендер возвращает разметку которая будет генерироватся для главной страницы
---------------------- */

const HomeComponent = {
    render: function(){
        return `
        <section>
        <h1>Главная страница</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        `;
    }
}

const ItemComponent = {
    render: function () {
        return `
        <section>
        <h1>Страница Объекта</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        `;
    },
};

const FavsComponent = {
    render: function () {
        return `
        <section>
        <h1>Избранное</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        `;
    },
};

const BidsComponent = {
    render: function () {
        return `
        <section>
        <h1>Заявки</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        `;
    },
};

const ErrorComponent = {
    render: function () {
        return `
        <section>
        <h1>Ошибка 404</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        `;
    },
};

// Маршруты
const routes = [
    { path: '/', component: HomeComponent },
    { path: 'item', component: ItemComponent },
    { path: 'favourites', component: FavsComponent },
    { path: 'bids', component: BidsComponent }
];

// Поиск компонента в Маршрутах на основании запроса
function findComponentByPath(path, routes){
    return routes.find(function(route){
        return route.path === path;
    });
}

// Функция Роутер
function router () {

    // Разделить путь к массиву
    const pathArray = location.hash.split('/');

    // Установка текущего пути
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
    currentPath = currentPath === '' ? '/' : currentPath; // item // bids

    // Выбираем компонент для указанного адреса, либо компонент с ошибкой
    const { component = ErrorComponent } = findComponentByPath(currentPath, routes) || {};

    // Отображение компонента на старнице / Render component
    document.querySelector('#app').innerHTML = component.render();

}

// Прослушка событий и запуск роутера
window.addEventListener('load', router);
window.addEventListener('hashchange', router);