const barsiki = [
  {
    id: 1,
    name: "Барсик Юра",
    location: "дом Беклешова, у входа в ТИЦ, ул. Георгиевская, 4",
    categories: ["литература", "образование"],
    image: "assets/images/barsik-yura.jpg",
    focus: "48% 52%",
    alt: "Барсик Юра у дома Беклешова в Пскове",
    summary: "Литературный Барсик у бывшей городской усадьбы и первой псковской гимназии.",
    description: "Юра встречает гостей у дома Беклешова, где располагалась первая в Пскове гимназия. Это точка про образование, городскую память и людей, которые связали Псков с большой литературой.",
    named: "Назван в честь Юрия Насоновича Тынянова — русского прозаика, пушкиниста, драматурга и филолога-теоретика, выпускника Псковской гимназии.",
    fact: "Смотрите на детали книги и спокойную посадку фигурки: Барсик будто охраняет вход в городскую историю."
  },
  {
    id: 2,
    name: "Барсик Афанасий",
    location: "Октябрьская площадь, сквер у главпочтамта",
    categories: ["история", "почта", "дипломатия"],
    image: "assets/images/barsik-afanasiy.jpg",
    focus: "50% 48%",
    alt: "Барсик Афанасий в сквере у главпочтамта",
    summary: "Барсик у почтового сердца города напоминает о дипломатии и связи.",
    description: "Афанасий стоит рядом с главпочтамтом, поэтому его образ естественно связан с дорогами, письмами и государственными делами.",
    named: "Назван в честь Афанасия Лаврентьевича Ордина-Нащокина — дипломата, государственного деятеля и организатора регулярного почтового сообщения на Руси.",
    fact: "Хорошая точка для начала маршрута: отсюда удобно уйти в центр и собрать несколько Барсиков рядом."
  },
  {
    id: 3,
    name: "Барсик Фердинанд",
    location: "набережная под смотровой площадкой около ТЭЦ, на спуске к реке",
    categories: ["река", "путешествия", "география"],
    image: "assets/images/barsik-ferdinand.jpg",
    focus: "48% 50%",
    alt: "Барсик Фердинанд на набережной у спуска к реке",
    summary: "Морская история Пскова на берегу реки и у городских видов.",
    description: "Фердинанд добавляет маршруту ощущение путешествия: он стоит на спуске к реке и связывает городскую прогулку с морскими открытиями.",
    named: "Назван в честь Фердинанда Петровича Врангеля — морского министра, путешественника, исследователя, географа и вице-адмирала, родившегося в Пскове.",
    fact: "На этой точке особенно приятно задержаться ради вида на воду и вечерний город."
  },
  {
    id: 4,
    name: "Барсик Венечка",
    location: "библиотека имени Вениамина Каверина, на лестнице от амфитеатра",
    categories: ["литература", "знания"],
    image: "assets/images/barsik-venechka.jpg",
    focus: "50% 54%",
    alt: "Барсик Венечка у библиотеки имени Вениамина Каверина",
    summary: "Книжный Барсик у библиотеки: про романы, знания и счастливые приметы.",
    description: "Венечка живёт у библиотеки имени Каверина и превращает литературную точку маршрута в маленький городской ритуал.",
    named: "Назван в честь Вениамина Александровича Каверина — писателя, драматурга и автора романа «Два капитана», родившегося в Пскове.",
    fact: "Примета из статьи: ушко — к счастью и любви, книжка — к знаниям, носик — к хорошему настроению на весь год."
  },
  {
    id: 5,
    name: "Барсик Сева",
    location: "около Дома Ксендза, возле скамеек",
    categories: ["реставрация", "архитектура"],
    image: "assets/images/barsik-seva.jpg",
    focus: "44% 50%",
    alt: "Барсик Сева возле Дома Ксендза",
    summary: "Точка о восстановлении Пскова и людях, которые берегли его архитектуру.",
    description: "Сева связан с послевоенным возрождением города. Его место рядом с исторической средой подчёркивает тему бережной реставрации.",
    named: "Назван в честь Всеволода Петровича Смирнова — фронтовика, художника, архитектора и реставратора.",
    fact: "Этот Барсик хорошо ложится в спокойную часть прогулки: рядом можно остановиться, рассмотреть детали и передохнуть."
  },
  {
    id: 6,
    name: "Барсик Митя",
    location: "рядом с металлической оградой церкви Сергия с Залужья",
    categories: ["культура", "храм", "наследие"],
    image: "assets/images/barsik-mitya.jpg",
    focus: "52% 50%",
    alt: "Барсик Митя у церкви Сергия с Залужья",
    summary: "Барсик про культурное наследие и защиту псковских храмов.",
    description: "Митя стоит у церкви Сергия с Залужья и напоминает, что городская история держится не только на стенах, но и на людях, которые их защищают.",
    named: "Назван в честь Дмитрия Сергеевича Лихачёва — профессора, культуролога и искусствоведа, внёсшего вклад в защиту храма.",
    fact: "Точка особенно подходит для тех, кто хочет увидеть Псков как город храмов, памяти и тихих переулков."
  },
  {
    id: 7,
    name: "Барсик Дорофей",
    location: "вдоль крепостной стены по ул. Свердлова, рядом с пересечением с ул. Советская",
    categories: ["крепость", "героизм", "история"],
    image: "assets/images/barsik-dorofey.jpg",
    focus: "48% 52%",
    alt: "Барсик Дорофей у крепостной стены Пскова",
    summary: "Крепостной Барсик у стены напоминает о героической обороне города.",
    description: "Дорофей связан с Покровским углом и историей обороны Пскова во время осады войсками Стефана Батория.",
    named: "Образ связан со старцем Дорофеем и важным для города оборонительным сюжетом.",
    fact: "На маршруте это одна из самых исторических точек: рядом камень, крепостная линия и ощущение старого Пскова."
  },
  {
    id: 8,
    name: "Барсик Миша",
    location: "зелёная зона у Михайловской башни, рядом со скамейкой",
    categories: ["декабристы", "история"],
    image: "assets/images/barsik-misha.jpg",
    focus: "52% 50%",
    alt: "Барсик Миша у Михайловской башни",
    summary: "Зелёная остановка у башни с историей декабриста и друга Пушкина.",
    description: "Миша помогает соединить прогулку по Пскову с историей благотворительности, земской деятельности и пушкинского круга.",
    named: "Назван в честь Михаила Александровича Назимова — декабриста, благотворителя, земского деятеля, друга и соседа Александра Пушкина.",
    fact: "Удобная точка для паузы: Барсик расположен рядом со скамейкой и зелёной зоной."
  },
  {
    id: 9,
    name: "Барсик Савва",
    location: "смотровая площадка на улице Воеводы Шуйского, на спуске к реке",
    categories: ["реставрация", "искусство", "река"],
    image: "assets/images/barsik-savva.jpg",
    focus: "50% 50%",
    alt: "Барсик Савва на смотровой площадке у спуска к реке",
    summary: "Речной вид и память о реставраторе, для которого Псков был особенно дорог.",
    description: "Савва стоит на смотровой площадке и связывает искусство реставрации с живым городским пейзажем.",
    named: "Назван в честь Саввы Васильевича Ямщикова — реставратора и искусствоведа.",
    fact: "Эта точка хороша для фотографии: в маршруте появляется воздух, перспектива и река."
  },
  {
    id: 10,
    name: "Барсик Валя",
    location: "театральный сквер, рядом со скамейкой, с видом на фасад театра",
    categories: ["театр", "искусство"],
    image: "assets/images/barsik-valya.jpg",
    focus: "50% 50%",
    alt: "Барсик Валя в театральном сквере",
    summary: "Театральный Барсик у фасада театра и городского сквера.",
    description: "Валя стоит в театральном сквере и делает культурный маршрут по Пскову чуть более сценичным.",
    named: "Назван в честь Валерия Антоновича Порошина — заслуженного артиста РСФСР, который 20 лет служил в Псковском театре.",
    fact: "На снимках у этого Барсика особенно хорошо считывается связь с театром и искусством."
  },
  {
    id: 11,
    name: "Барсик-судья Юра",
    location: "у здания Псковского областного суда, ул. Розы Люксембург, 17/24",
    categories: ["правосудие"],
    image: "assets/images/barsik-judge-yura.jpg",
    focus: "50% 50%",
    alt: "Барсик-судья Юра у Псковского областного суда",
    summary: "Фигурка с судейской шапочкой, молотком и делом номер 60.",
    description: "Барсик-судья установлен у здания Псковского областного суда 18 сентября 2024 года. Его детали сразу задают тему правосудия.",
    named: "Название поддерживает образ судьи Юры и юридическую локацию у областного суда.",
    fact: "У фигурки есть судейская шапочка, молоток и папка с надписью «Дело №60»."
  },
  {
    id: 12,
    name: "Барсик Фима",
    location: "у здания Арбитражного суда Псковской области, ул. Свердлова, 36",
    categories: ["правосудие", "удача"],
    image: "assets/images/barsik-fima.jpg",
    focus: "50% 50%",
    alt: "Барсик Фима у Арбитражного суда Псковской области",
    summary: "Барсик с символами правосудия и городской приметой на удачу.",
    description: "Фима продолжает судебную линию маршрута и делает её более игровой: рядом с официальным зданием появляется маленький бронзовый символ удачи.",
    named: "Назван в честь Фемиды — символического образа правосудия.",
    fact: "У Барсика есть кадуцей и лавровый венок. По поверью, если потереть венок, это принесёт удачу."
  },
  {
    id: 13,
    name: "Барсик-журналист",
    location: "у здания регионального медиахолдинга Псковской области, ул. Ленина, 6а",
    categories: ["медиа", "журналистика"],
    image: "assets/images/barsik-journalist.jpg",
    focus: "46% 50%",
    alt: "Барсик-журналист с видеокамерой и бейджиком Пресса",
    summary: "Медийный Барсик с видеокамерой и бейджиком «Пресса».",
    description: "Фигурка связана с историей региональных СМИ, радиостанции «7 НЕБО», городского телевидения и телеканала «Первый Псковский».",
    named: "Образ журналиста выбран по месту установки — рядом с региональным медиахолдингом.",
    fact: "Главные детали — видеокамера и бейджик «Пресса»: Барсик будто уже готов к репортажу."
  },
  {
    id: 14,
    name: "Барсик-студент",
    location: "территория Псковского государственного университета, у корпуса на ул. Льва Толстого",
    categories: ["студенты", "образование"],
    image: "assets/images/barsik-student.jpg",
    focus: "50% 52%",
    alt: "Барсик-студент у корпуса Псковского государственного университета",
    summary: "Университетский Барсик с книгой и студенческим билетом.",
    description: "Барсик-студент добавляет маршруту молодую академическую точку и связывает бронзовую серию с ПсковГУ.",
    named: "Название отражает университетскую локацию и детали фигурки.",
    fact: "У ног Барсика лежат студенческий билет и книга с надписью «Псковский государственный университет»."
  },
  {
    id: 15,
    name: "Барсик М",
    location: "Дом молодёжи, ул. Конная, 2",
    categories: ["молодёжь", "современность"],
    image: "assets/images/barsik-m.jpg",
    focus: "52% 50%",
    alt: "Барсик М у Дома молодёжи в Пскове",
    summary: "Самый молодёжный Барсик: скейт, бейсболка и кулон с буквой «М».",
    description: "Барсик М появился 25 января 2025 года у Дома молодёжи. Он отвечает за современный, уличный и энергичный слой проекта.",
    named: "Буква «М» отсылает к молодёжи и месту установки у Дома молодёжи.",
    fact: "Есть традиция потереть медальон на удачу."
  },
  {
    id: 16,
    name: "Барсик на сапборде",
    location: "посёлок Черёха, ул. Санаторная, 80, территория пляжа парка «Черёхин»",
    categories: ["отдых", "река", "арт-объект"],
    image: "assets/images/barsik-sup.jpg",
    focus: "48% 50%",
    alt: "Большой Барсик на сапборде в парке Черёхин",
    summary: "Крупный современный арт-объект у пляжа и воды.",
    description: "Барсик на сапборде установлен летом 2024 года в посёлке Черёха. Это самая курортная и масштабная точка подборки.",
    named: "Образ связан с отдыхом у воды и современной городской скульптурой.",
    fact: "Высота скульптуры около 2 метров. Автор — художник и скульптор Александр Вихров."
  }
];

const galleryItems = [
  ...barsiki.map((item) => ({ src: item.image, alt: item.alt, caption: item.name, focus: item.focus })),
  {
    src: "assets/images/quest.jpg",
    focus: "50% 52%",
    alt: "Барсик рядом с точкой городского квеста",
    caption: "Квест по псковским Барсикам"
  },
  {
    src: "assets/images/souvenir-1.jpg",
    focus: "50% 50%",
    alt: "Фотография о сувенирной истории псковских Барсиков",
    caption: "Барсики как культурный бренд"
  },
  {
    src: "assets/images/souvenir-2.jpg",
    focus: "52% 50%",
    alt: "Барсик в вязаном аксессуаре",
    caption: "Городская любовь к Барсикам"
  }
];

const products = [
  {
    id: 1,
    title: "Футболка «Хранители Пскова»",
    category: "одежда",
    image: "assets/images/products/product-tshirt.jpg",
    focus: "50% 48%",
    alt: "Футболка Хранители Пскова с гербом, кодом 903 и принтом на спине",
    description: "Светлая футболка с лаконичной передней частью и крупной исторической графикой на спине. Герб Пскова, число 903 и образ барса собираются в спокойный городской символ — без лишнего шума, но с понятной связью с городом.",
    price: "1 500 ₽",
    details: ["903 — первое упоминание Пскова", "герб города", "принт спереди и сзади"]
  },
  {
    id: 2,
    title: "Кепка «903 / 60»",
    category: "аксессуары",
    image: "assets/images/products/product-cap.jpg",
    focus: "50% 50%",
    alt: "Светлая кепка с гербом Пскова и надписями 903 и 60",
    description: "Минималистичная кепка с гербом Пскова, числом 903 и региональным кодом 60. Небольшой аксессуар, который работает как узнаваемый знак города: сдержанно, аккуратно и не перегружено.",
    price: "900 ₽",
    details: ["903 — история города", "60 — регион", "герб Пскова"]
  },
  {
    id: 3,
    title: "Рюкзак «Барс»",
    category: "аксессуары",
    image: "assets/images/products/product-backpack.jpg",
    focus: "42% 50%",
    alt: "Светлый рюкзак с гербом Пскова и изображением барса",
    description: "Светлый городской рюкзак с гербом Пскова и графикой барса. Это практичный сувенир для прогулок, учёбы и поездок: вещь на каждый день, в которой городская символика выглядит спокойно и современно.",
    price: "2 500 ₽",
    details: ["барс — символ Пскова", "городской формат", "историческая графика"]
  },
  {
    id: 4,
    title: "Городской образ",
    category: "lookbook",
    image: "assets/images/products/product-look.jpg",
    focus: "50% 34%",
    alt: "Мужской образ с футболкой, кепкой и рюкзаком Хранители Пскова",
    description: "Готовый образ из вещей коллекции: футболка, кепка и рюкзак в единой айдентике «Хранителей Пскова». Он показывает, как исторические символы города могут выглядеть современно — не как сувенирная лавка, а как цельный городской стиль.",
    price: "lookbook",
    priceLabel: "комплект из товаров коллекции",
    details: ["футболка + кепка + рюкзак", "единая айдентика", "городской lookbook"]
  }
];

const filters = [
  "все",
  "литература",
  "история",
  "реставрация",
  "правосудие",
  "медиа",
  "студенты",
  "молодёжь",
  "река",
  "театр",
  "культура"
];

const filterBar = document.querySelector("#filterBar");
const barsikiGrid = document.querySelector("#barsikiGrid");
const routeMap = document.querySelector("#routeMap");
const galleryGrid = document.querySelector("#galleryGrid");
const productsTrack = document.querySelector("#productsTrack");
const productDots = document.querySelector("#productDots");
const productPrev = document.querySelector("#productPrev");
const productNext = document.querySelector("#productNext");
const productsCounter = document.querySelector("#productsCounter");
const modal = document.querySelector("#detailsModal");
const productModal = document.querySelector("#productModal");
const lightbox = document.querySelector("#lightbox");
const toTop = document.querySelector(".to-top");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const siteHeader = document.querySelector(".site-header");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

let activeFilter = "все";
let lastFocusedElement = null;
let activeProductIndex = 0;
let productScrollFrame = null;

function mapLink(location) {
  return `https://yandex.ru/maps/?text=${encodeURIComponent(`Псков, ${location}`)}`;
}

function renderFilters() {
  filterBar.innerHTML = filters.map((filter) => `
    <button class="filter-btn ${filter === activeFilter ? "active" : ""}" type="button" data-filter="${filter}">
      ${filter}
    </button>
  `).join("");
}

function renderCards() {
  const visibleItems = activeFilter === "все"
    ? barsiki
    : barsiki.filter((item) => item.categories.includes(activeFilter));

  barsikiGrid.innerHTML = visibleItems.map((item) => `
    <article class="barsik-card reveal" data-id="${item.id}" style="--focus: ${item.focus || "50% 50%"}">
      <div class="card-media">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
        <span class="number-pill">${String(item.id).padStart(2, "0")}</span>
      </div>
      <div class="card-content">
        <span class="badge">${item.categories[0]}</span>
        <h3>${item.name}</h3>
        <p class="location">${item.location}</p>
        <p>${item.summary}</p>
        <div class="card-actions">
          <button class="mini-btn primary" type="button" data-open-details="${item.id}">Подробнее</button>
          <a class="mini-btn" href="${mapLink(item.location)}" target="_blank" rel="noopener">На карте</a>
        </div>
      </div>
    </article>
  `).join("");

  observeReveals();
}

function renderRoute() {
  const dots = barsiki.map((item, index) => {
    const desktopX = 9 + (index / (barsiki.length - 1)) * 82;
    const desktopY = index % 2 === 0 ? 42 : 58;
    const mobileY = 8 + (index / (barsiki.length - 1)) * 84;
    const mobileX = index % 2 === 0 ? 38 : 62;

    return `
      <button class="route-dot" type="button" data-route-id="${item.id}"
        style="--x:${desktopX}%; --y:${desktopY}%; --mx:${mobileX}%; --my:${mobileY}%"
        aria-label="${item.name}. ${item.location}">
        ${item.id}
        <span class="route-tooltip">
          <strong>${item.name}</strong>
          <small>${item.location}</small>
        </span>
      </button>
    `;
  }).join("");

  routeMap.innerHTML = `<div class="route-line"></div>${dots}`;
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <figure class="gallery-item reveal" data-gallery-index="${index}" style="--focus: ${item.focus || "50% 50%"}">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <figcaption>${item.caption}</figcaption>
    </figure>
  `).join("");

  observeReveals();
}

function renderProducts() {
  productsTrack.innerHTML = products.map((item, index) => `
    <article class="product-card" style="--focus: ${item.focus || "50% 50%"}" data-product-index="${index}">
      <div class="product-media">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
        <span class="badge">${item.category}</span>
      </div>
      <div class="product-content">
        <span class="product-number">${String(item.id).padStart(2, "0")}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p class="product-price ${item.price === "lookbook" ? "is-note" : ""}">${item.price === "lookbook" ? item.priceLabel : item.price}</p>
        <div class="product-tags">
          ${item.details.map((detail) => `<span>${detail}</span>`).join("")}
        </div>
        <button class="mini-btn primary" type="button" data-open-product="${index}">Подробнее</button>
      </div>
    </article>
  `).join("");

  productDots.innerHTML = products.map((item, index) => `
    <button class="product-dot" type="button" data-product-dot="${index}" aria-label="Показать товар ${item.title}"></button>
  `).join("");

  updateProductUi();
}

function updateProductUi() {
  productsCounter.textContent = `${String(activeProductIndex + 1).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}`;
  productDots.querySelectorAll(".product-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === activeProductIndex);
  });
}

function scrollToProduct(index) {
  const nextIndex = (index + products.length) % products.length;
  const item = productsTrack.children[nextIndex];
  if (!item) {
    return;
  }

  activeProductIndex = nextIndex;
  productsTrack.scrollTo({
    left: item.offsetLeft - productsTrack.offsetLeft,
    behavior: "smooth"
  });
  updateProductUi();
}

function syncProductIndex() {
  const items = Array.from(productsTrack.children);
  const trackRect = productsTrack.getBoundingClientRect();
  const nextIndex = items.reduce((closestIndex, item, index) => {
    const currentDistance = Math.abs(item.getBoundingClientRect().left - trackRect.left);
    const closestDistance = Math.abs(items[closestIndex].getBoundingClientRect().left - trackRect.left);
    return currentDistance < closestDistance ? index : closestIndex;
  }, 0);

  if (nextIndex !== activeProductIndex) {
    activeProductIndex = nextIndex;
    updateProductUi();
  }
}

function openProductDetails(index) {
  const item = products[Number(index)];
  if (!item) {
    return;
  }

  lastFocusedElement = document.activeElement;
  document.querySelector("#productModalImage").src = item.image;
  document.querySelector("#productModalImage").alt = item.alt;
  document.querySelector("#productModalImage").style.setProperty("--focus", item.focus || "50% 50%");
  document.querySelector("#productModalCategory").textContent = item.category;
  document.querySelector("#productModalTitle").textContent = item.title;
  document.querySelector("#productModalDescription").textContent = item.description;
  document.querySelector("#productModalPrice").textContent = item.price === "lookbook" ? item.priceLabel : item.price;
  document.querySelector("#productModalPrice").classList.toggle("is-note", item.price === "lookbook");
  document.querySelector("#productModalTags").innerHTML = item.details.map((detail) => `<span>${detail}</span>`).join("");

  productModal.classList.add("active");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".product-modal-close").focus();
}

function closeProductDetails() {
  productModal.classList.remove("active");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openDetails(id) {
  const item = barsiki.find((barsik) => barsik.id === Number(id));
  if (!item) {
    return;
  }

  lastFocusedElement = document.activeElement;
  document.querySelector("#modalImage").src = item.image;
  document.querySelector("#modalImage").alt = item.alt;
  document.querySelector("#modalImage").style.setProperty("--focus", item.focus || "50% 50%");
  document.querySelector("#modalCategory").textContent = item.categories.join(" / ");
  document.querySelector("#modalTitle").textContent = item.name;
  document.querySelector("#modalLocation").textContent = item.location;
  document.querySelector("#modalDescription").textContent = item.description;
  document.querySelector("#modalNamesake").innerHTML = `<strong>Почему так назван:</strong> ${item.named}`;
  document.querySelector("#modalFact").innerHTML = `<strong>Деталь:</strong> ${item.fact}`;
  document.querySelector("#modalMap").href = mapLink(item.location);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeDetails() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openLightbox(index) {
  const item = galleryItems[Number(index)];
  if (!item) {
    return;
  }

  document.querySelector("#lightboxImage").src = item.src;
  document.querySelector("#lightboxImage").alt = item.alt;
  document.querySelector("#lightboxCaption").textContent = item.caption;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

let observer;

function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.visible)");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  items.forEach((item) => observer.observe(item));
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) {
    return;
  }

  activeFilter = button.dataset.filter;
  renderFilters();
  renderCards();
});

barsikiGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-details]");
  if (button) {
    openDetails(button.dataset.openDetails);
  }
});

routeMap.addEventListener("click", (event) => {
  const dot = event.target.closest(".route-dot");
  if (!dot) {
    return;
  }

  openDetails(dot.dataset.routeId);
});

galleryGrid.addEventListener("click", (event) => {
  const item = event.target.closest("[data-gallery-index]");
  if (item) {
    openLightbox(item.dataset.galleryIndex);
  }
});

productsTrack.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-product]");
  if (button) {
    openProductDetails(button.dataset.openProduct);
  }
});

productsTrack.addEventListener("scroll", () => {
  if (productScrollFrame) {
    cancelAnimationFrame(productScrollFrame);
  }

  productScrollFrame = requestAnimationFrame(syncProductIndex);
}, { passive: true });

productPrev.addEventListener("click", () => {
  scrollToProduct(activeProductIndex - 1);
});

productNext.addEventListener("click", () => {
  scrollToProduct(activeProductIndex + 1);
});

productDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-product-dot]");
  if (dot) {
    scrollToProduct(Number(dot.dataset.productDot));
  }
});

document.querySelectorAll("[data-close-modal]").forEach((control) => {
  control.addEventListener("click", closeDetails);
});

document.querySelectorAll("[data-close-product]").forEach((control) => {
  control.addEventListener("click", closeProductDetails);
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetails();
    closeProductDetails();
    closeLightbox();
    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

function updateScrollState() {
  const currentY = window.scrollY + 140;

  siteHeader.classList.toggle("scrolled", window.scrollY > 24);
  toTop.classList.toggle("visible", window.scrollY > 560);

  let currentSectionId = navSections[0]?.id;
  navSections.forEach((section) => {
    if (section.offsetTop <= currentY) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSectionId}`);
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderFilters();
renderCards();
renderRoute();
renderProducts();
renderGallery();
observeReveals();
updateScrollState();
