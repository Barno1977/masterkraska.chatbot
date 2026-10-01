let currentScenario = "";
let currentStep = 0;

let userAnswers = {};

let clientName = "";
let clientPhone = "";

let waitingFor = "";


// ======================================
// СЦЕНАРИИ
// ======================================

const scenarios = {

    // ==================================
    // ПОДОБРАТЬ КРАСКУ
    // ==================================

    paint: {

        title: "Подобрать краску",

        steps: [

            {
                key: "whatToPaint",
                question: "Что вы хотите покрасить?",
                options: [
                    "Стены",
                    "Потолок",
                    "Фасад",
                    "Пол",
                    "Дерево",
                    "Металл",
                    "Другое"
                ]
            },

            {
                key: "location",
                question:
                    "Работы будут внутри помещения или снаружи?",
                options: [
                    "Внутри",
                    "Снаружи",
                    "Не знаю"
                ]
            },

            {
                key: "surface",
                question: "Какая поверхность сейчас?",
                options: [
                    "Штукатурка или бетон",
                    "Гипсокартон",
                    "Дерево",
                    "Металл",
                    "Ранее окрашенная",
                    "Не знаю"
                ]
            },

            {
                key: "conditions",
                question: "Есть ли особые условия?",
                options: [
                    "Сухое помещение",
                    "Влажное помещение",
                    "Высокая нагрузка",
                    "Детская комната",
                    "Фасад и погода",
                    "Нет / не знаю"
                ]
            },

            {
                key: "area",
                question:
                    "Какая примерная площадь в м²? Можно написать число или выбрать «Не знаю».",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "finish",
                question:
                    "Какой внешний вид покрытия вам нужен?",
                options: [
                    "Глубокоматовый",
                    "Матовый",
                    "Полуматовый",
                    "Глянцевый",
                    "Нужна помощь"
                ]
            },

            {
                key: "color",
                question: "Цвет уже выбран?",
                options: [
                    "Есть код цвета",
                    "Есть пример или изображение",
                    "Нужна помощь с цветом",
                    "Пока без цвета"
                ]
            },

            {
                key: "purchaseTime",
                question:
                    "Когда планируете покупку?",
                options: [
                    "Сегодня–завтра",
                    "В течение недели",
                    "Позже",
                    "Пока изучаю"
                ]
            },

            {
                key: "city",
                question:
                    "В каком городе или филиале вам удобнее получить товар?",
                options: [
                    "Бишкек",
                    "Балыкчы",
                    "Каракол",
                    "Другой город",
                    "Не важно"
                ]
            }

        ]
    },


    // ==================================
    // КОЛЕРОВКА И ЦВЕТ
    // ==================================

    tinting: {

        title: "Колеровка и цвет",

        steps: [

            {
                key: "colorAction",
                question:
                    "Что вы хотите сделать?",
                options: [
                    "Подобрать оттенок",
                    "Заколеровать по известному коду",
                    "Повторить прежний цвет",
                    "Получить консультацию"
                ]
            },

            {
                key: "colorSurface",
                question:
                    "Для какой поверхности нужен цвет?",
                options: [
                    "Стены или потолок",
                    "Фасад",
                    "Дерево",
                    "Металл",
                    "Другое"
                ]
            },

            {
                key: "colorCode",
                question:
                    "Если код известен, напишите бренд и код. " +
                    "Если есть пример цвета, можно прикрепить фото или файл " +
                    "либо отправить ссылку на изображение. " +
                    "Окончательное совпадение специалист подтвердит " +
                    "после проверки образца и основания.",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "volumeType",
                question:
                    "Какой объём или площадь планируется?",
                options: [
                    "Написать объём",
                    "Написать площадь",
                    "Не знаю"
                ]
            },

            {
                key: "volume",
                question:
                    "Напишите примерный объём или площадь.",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "city",
                question:
                    "В каком филиале вам удобно получить консультацию или колеровку?",
                options: [
                    "Показать филиалы",
                    "Не важно"
                ]
            }

        ]
    },


    // ==================================
    // ЦЕНА И НАЛИЧИЕ
    // ==================================

    price: {

        title: "Цена и наличие",

        steps: [

            {
                key: "product",
                question:
                    "Напишите название товара или бренда. Можно прикрепить изображение упаковки.",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "quantityType",
                question:
                    "Какая фасовка и количество нужны?",
                options: [
                    "Указать фасовку и количество",
                    "Не знаю"
                ]
            },

            {
                key: "quantity",
                question:
                    "Напишите нужную фасовку и количество.",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "pickup",
                question:
                    "Где удобнее забрать товар?",
                options: [
                    "Выбрать филиал",
                    "Нужна доставка",
                    "Любой филиал"
                ]
            }

        ]
    },


    // ==================================
    // ДОСТАВКА И ОПЛАТА
    // ==================================

    delivery: {

        title: "Доставка и оплата",

        steps: [

            {
                key: "deliveryQuestion",
                question:
                    "Что хотите уточнить?",
                options: [
                    "Способы оплаты",
                    "Самовывоз",
                    "Рассчитать доставку",
                    "Другой вопрос"
                ]
            },

            {
                key: "deliveryCity",
                question:
                    "В какой город или район нужна доставка?",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "deliveryProducts",
                question:
                    "Какие товары и количество планируются?",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "deliveryDate",
                question:
                    "Когда нужна доставка?",
                input: true,
                options: [
                    "Не знаю"
                ]
            }

        ]
    },


    // ==================================
    // ДИЗАЙНЕРАМ И ПАРТНЁРАМ
    // ==================================

    partner: {

        title: "Дизайнерам и партнёрам",

        steps: [

            {
                key: "partnerRole",
                question:
                    "Как вы работаете с проектами?",
                options: [
                    "Дизайнер интерьера",
                    "Архитектор",
                    "Мастер или подрядчик",
                    "Строительная компания",
                    "Другое"
                ]
            },

            {
                key: "partnerNeed",
                question:
                    "Что вам нужно?",
                options: [
                    "Подбор материалов",
                    "Образцы и выкрасы",
                    "Спецификация проекта",
                    "Коммерческое предложение",
                    "Условия сотрудничества"
                ]
            },

            {
                key: "partnerObject",
                question:
                    "Кратко опишите объект: тип проекта, стадия, примерная площадь и желаемый срок.",
                input: true,
                options: [
                    "Указать позже"
                ]
            },

            {
                key: "partnerContactType",
                question:
                    "Как с вами удобнее связаться?",
                options: [
                    "Телефон",
                    "WhatsApp",
                    "Электронная почта"
                ]
            },

            {
                key: "partnerContact",
                question:
                    "Укажите имя, компанию или студию и контакт.",
                input: true
            }

        ]
    },


    // ==================================
    // ПОЗВАТЬ МЕНЕДЖЕРА
    // ==================================

    manager: {

        title: "Позвать менеджера",

        steps: [

            {
                key: "managerTopic",
                question:
                    "Конечно. Коротко напишите, с чем нужна помощь.",
                options: [
                    "Подбор товара",
                    "Цена и наличие",
                    "Заказ или доставка",
                    "Жалоба",
                    "Другой вопрос"
                ]
            },

            {
                key: "managerContact",
                question:
                    "Как к вам обращаться и по какому номеру связаться?",
                input: true
            },

            {
                key: "managerContactType",
                question:
                    "Какой способ связи удобнее?",
                options: [
                    "Телефон",
                    "WhatsApp",
                    "Ответ в чате — если доступен"
                ]
            },

            {
                key: "managerTime",
                question:
                    "Когда удобно получить ответ?",
                options: [
                    "Как можно скорее",
                    "Сегодня",
                    "Указать время"
                ]
            },

            {
                key: "managerTimeCustom",
                question:
                    "Укажите удобное время.",
                input: true,
                options: [
                    "Не важно"
                ]
            }

        ]
    },


    // ==================================
    // ЖАЛОБА ИЛИ ПРОБЛЕМА С ЗАКАЗОМ
    // ==================================

    complaint: {

        title: "Жалоба или проблема с заказом",

        steps: [

            {
                key: "complaintOrder",
                question:
                    "Укажите филиал, дату покупки или номер заказа, если он есть.",
                input: true,
                options: [
                    "Не знаю"
                ]
            },

            {
                key: "complaintDescription",
                question:
                    "Опишите ситуацию. При необходимости можно приложить изображение товара, чека или результата нанесения.",
                input: true
            },

            {
                key: "complaintContact",
                question:
                    "Укажите имя и телефон для обратной связи.",
                input: true
            }

        ]
    },


    // ==================================
    // НЕПОНЯТНЫЙ ВОПРОС
    // ==================================

    unclear: {

        title: "Непонятный вопрос",

        steps: [

            {
                key: "unclearQuestion",
                question:
                    "Правильно ли я понял, что вас интересует вопрос, который не относится к перечисленным темам?",
                options: [
                    "Да",
                    "Нет, выбрать тему",
                    "Позвать менеджера"
                ]
            }

        ]
    }

};


// ======================================
// ЗАПУСК СЦЕНАРИЯ
// ======================================

function startScenario(scenario) {

    console.log("Запущен сценарий:", scenario);

    currentScenario = scenario;
    currentStep = 0;

    userAnswers = {};

    clientName = "";
    clientPhone = "";

    waitingFor = "";

    clearMessages();


    if (scenario === "paint") {

        showBotMessage(
            "Хорошо, помогу подобрать краску."
        );

    } else if (scenario === "tinting") {

        showBotMessage(
            "Хорошо, помогу с колеровкой и цветом."
        );

    } else if (scenario === "price") {

        showBotMessage(
            "Хорошо, помогу проверить цену и наличие."
        );

    } else if (scenario === "delivery") {

        showBotMessage(
            "Хорошо, помогу разобраться с доставкой и оплатой."
        );

    } else if (scenario === "partner") {

        showBotMessage(
            "Хорошо, помогу передать запрос специалисту по работе с дизайнерами, архитекторами и профессиональными партнёрами."
        );

    } else if (scenario === "manager") {

        showBotMessage(
            "Конечно. Помогу передать обращение менеджеру."
        );

    } else if (scenario === "complaint") {

        showBotMessage(
            "Мне жаль, что возникла проблема. " +
            "Я зафиксирую обращение и передам ответственному сотруднику."
        );

    } else if (scenario === "unclear") {

        showBotMessage(
            "Хочу правильно понять ваш вопрос."
        );

    } else if (scenario === "shop") {

        showBotMessage(
            "В каком городе или филиале вас интересует магазин?"
        );

        showButtons([
            "Бишкек",
            "Балыкчы",
            "Каракол",
            "📍 Найти ближайший по гео",
            "Главное меню"
        ]);

        return;

    } else {

        showBotMessage(
            "Этот раздел пока находится в разработке."
        );

        showButtons([
            "Главное меню"
        ]);

        return;
    }


    setTimeout(
        showCurrentQuestion,
        400
    );
}


// ======================================
// ПОКАЗ ТЕКУЩЕГО ВОПРОСА
// ======================================

function showCurrentQuestion() {

    const scenario =
        scenarios[currentScenario];

    if (!scenario) {
        return;
    }


    if (
        currentScenario === "partner" &&
        currentStep >= scenario.steps.length
    ) {

        finishPartnerRequest();

        return;
    }


    if (
        currentScenario === "manager" &&
        currentStep >= scenario.steps.length
    ) {

        finishManagerRequest();

        return;
    }


    if (
        currentScenario === "complaint" &&
        currentStep >= scenario.steps.length
    ) {

        finishComplaintRequest();

        return;
    }


    if (
        currentScenario === "delivery" &&
        currentStep >= scenario.steps.length
    ) {

        askClientNameDelivery();

        return;
    }


    if (
        currentScenario === "paint" &&
        currentStep >= scenario.steps.length
    ) {

        askClientName();

        return;
    }


    if (
        currentScenario === "tinting" &&
        currentStep >= scenario.steps.length
    ) {

        askClientNameTinting();

        return;
    }


    if (
        currentScenario === "price" &&
        currentStep >= scenario.steps.length
    ) {

        askClientNamePrice();

        return;
    }


    if (
        currentStep >=
        scenario.steps.length
    ) {
        return;
    }


    const step =
        scenario.steps[currentStep];


    showBotMessage(
        step.question
    );


    if (step.input) {

        waitingFor =
            step.key;

        const input =
            document.getElementById(
                "userInput"
            );

        if (input) {
            input.focus();
        }
    }


    if (
        step.options &&
        step.options.length > 0
    ) {

        let options = step.options;

        if (
            currentScenario === "paint" &&
            step.key === "surface" &&
            (userAnswers.whatToPaint === "Дерево" || userAnswers.whatToPaint === "Металл")
        ) {
            options = [
                "Ранее окрашенная",
                "Не знаю"
            ];
        }

        showButtons(
            options
        );
    }
}


// ======================================
// КНОПКИ
// ======================================

function showButtons(options) {

    const messages =
        document.getElementById(
            "chatMessages"
        );

    const oldButtons = messages.querySelectorAll(".buttons");
    oldButtons.forEach(function(b) {
        b.remove();
    });

    const buttonsContainer =
        document.createElement(
            "div"
        );

    buttonsContainer.className =
        "buttons";


    options.forEach(function(option) {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            option;


        button.onclick =
            function() {
                 // ==============================
                // ГЛАВНОЕ МЕНЮ
                // ==============================

                if (
                    option === "Главное меню"
                ) {

                    showMainMenu();

                    return;
                }


                // ==============================
                // СЦЕНАРИИ
                // ==============================

                if (
                    option === "Подобрать краску"
                ) {

                    startScenario("paint");

                    return;
                }


                if (
                    option === "Колеровка и цвет"
                ) {

                    startScenario("tinting");

                    return;
                }


                if (
                    option === "Цена и наличие"
                ) {

                    startScenario("price");

                    return;
                }


                if (
                    option === "Доставка и оплата"
                ) {

                    startScenario("delivery");

                    return;
                }


                if (
                    option === "Дизайнерам и партнёрам"
                ) {

                    startScenario("partner");

                    return;
                }


                // ==============================
                // ПОЗВАТЬ МЕНЕДЖЕРА
                // ==============================

                if (
                    option === "Позвать менеджера"
                ) {

                    addUserMessage(
                        "Позвать менеджера"
                    );


                    if (
                        currentScenario === "unclear"
                    ) {

                        startManagerDirect();

                        return;
                    }


                    startManagerWithHours();

                    return;
                }


                // ==============================
                // ДРУГОЙ ВОПРОС — МЕНЕДЖЕР
                // ==============================

                if (
                    currentScenario === "manager" &&
                    option === "Другой вопрос"
                ) {

                    startScenario("unclear");

                    return;
                }


                // ==============================
                // ЖАЛОБА — ИЗ МЕНЮ МЕНЕДЖЕРА
                // ==============================

                if (
                    currentScenario === "manager" &&
                    option === "Жалоба"
                ) {

                    startScenario("complaint");

                    return;
                }


                // ==============================
                // НЕПОНЯТНЫЙ ВОПРОС
                // ==============================

                if (
                    currentScenario === "unclear" &&
                    option === "Да"
                ) {

                    addUserMessage(
                        "Да"
                    );

                    showBotMessage(
                        "Хорошо. Кратко напишите ваш вопрос, и я попробую определить, чем вам помочь."
                    );

                    waitingFor =
                        "unclearQuestionText";

                    const input =
                        document.getElementById(
                            "userInput"
                        );

                    if (input) {
                        input.focus();
                    }

                    return;
                }


                if (
                    currentScenario === "unclear" &&
                    option === "Нет, выбрать тему"
                ) {

                    addUserMessage(
                        "Нет, выбрать тему"
                    );

                    showBotMessage(
                        "Выберите подходящую тему:"
                    );

                    showButtons([
                        "Подобрать краску",
                        "Колеровка и цвет",
                        "Цена и наличие",
                        "Доставка и оплата",
                        "Дизайнерам и партнёрам",
                        "Позвать менеджера",
                        "Главное меню"
                    ]);

                    return;
                }


                // ==============================
                // ДОСТАВКА — ПОДРОБНЕЕ
                // ==============================

                if (
                    option === "Подробнее"
                ) {

                    showBotMessage(
                        "Подробные условия доставки и оплаты можно уточнить у специалиста."
                    );

                    showButtons([
                        "Рассчитать доставку",
                        "Главное меню"
                    ]);

                    return;
                }


                // ==============================
                // ФИЛИАЛЫ — КОЛЕРОВКА
                // ==============================

                if (
                    currentScenario === "tinting" &&
                    option === "Показать филиалы"
                ) {

                    showBotMessage(
                        "В каком городе или филиале вам удобно получить товар?"
                    );

                    showButtons([
                        "Бишкек",
                        "Балыкчы",
                        "Каракол",
                        "Другой город",
                        "Не важно"
                    ]);

                    return;
                }


                // ==============================
                // ФИЛИАЛЫ — ЦЕНА
                // ==============================

                if (
                    currentScenario === "price" &&
                    option === "Выбрать филиал"
                ) {

                    showBotMessage(
                        "В каком городе или филиале вам удобно получить товар?"
                    );

                    showButtons([
                        "Бишкек",
                        "Балыкчы",
                        "Каракол",
                        "Другой город",
                        "Не важно"
                    ]);

                    return;
                }


                // ==============================
                // ВЫБОР ГОРОДА — БИШКЕК (7 ФИЛИАЛОВ)
                // ==============================

                if (
                    option === "Бишкек"
                ) {

                    addUserMessage(
                        "Бишкек"
                    );

                    showBotMessage(
                        "Выберите адрес филиала:"
                    );

                    showButtons([
                        "пр. Чынгыза Айтматова, 93/2",
                        "ул. Жукеева/Пудовкина, 61B/2",
                        "ул. Ибраимова, 64/1",
                        "ул. Чокана Валиханова, 2, бутик №А109",
                        "ул. Льва Толстого, 19, бутик 21",
                        "ул. Панфилова, 90",
                        "ул. Московская, 221",
                        "📍 Найти ближайший по гео",
                        "Главное меню"
                    ]);

                    return;
                }


                // ==============================
                // ВЫБОР АДРЕСА ФИЛИАЛА В БИШКЕКЕ
                // ==============================

                const bishkekBranches = [
                    "пр. Чынгыза Айтматова, 93/2",
                    "ул. Жукеева/Пудовкина, 61B/2",
                    "ул. Ибраимова, 64/1",
                    "ул. Чокана Валиханова, 2, бутик №А109",
                    "ул. Льва Толстого, 19, бутик 21",
                    "ул. Панфилова, 90",
                    "ул. Московская, 221"
                ];

                if (
                    bishkekBranches.includes(option)
                ) {

                    userAnswers.city =
                        "Бишкек, " + option;

                    addUserMessage(
                        option
                    );

                    if (currentScenario === "shop") {
                        showStoreDetails(option);
                        return;
                    }

                    if (currentScenario === "delivery") {
                        userAnswers.pickup = "Самовывоз: Бишкек, " + option;
                        setTimeout(
                            askClientNameDelivery,
                            300
                        );
                        return;
                    }

                    currentStep++;

                    if (currentScenario === "tinting") {
                        setTimeout(
                            askClientNameTinting,
                            300
                        );
                    } else if (currentScenario === "price") {
                        userAnswers.pickup =
                            "Самовывоз из филиала";
                        setTimeout(
                            askClientNamePrice,
                            300
                        );
                    } else {
                        setTimeout(
                            askClientName,
                            300
                        );
                    }

                    return;
                }


                // ==============================
                // БАЛЫКЧЫ, КАРАКОЛ, НЕ ВАЖНО
                // ==============================

                if (
                    option === "Балыкчы" ||
                    option === "Каракол" ||
                    (
                        (currentScenario === "tinting" || currentScenario === "price") &&
                        option === "Не важно"
                    )
                ) {

                    userAnswers.city =
                        option;

                    addUserMessage(
                        option
                    );

                    if (currentScenario === "shop") {
                        showStoreDetails(option);
                        return;
                    }

                    if (currentScenario === "delivery") {
                        userAnswers.pickup = "Самовывоз: " + option;
                        setTimeout(
                            askClientNameDelivery,
                            300
                        );
                        return;
                    }

                    currentStep++;

                    if (currentScenario === "tinting") {
                        setTimeout(
                            askClientNameTinting,
                            300
                        );
                    } else if (currentScenario === "price") {
                        userAnswers.pickup =
                            "Самовывоз из филиала";
                        setTimeout(
                            askClientNamePrice,
                            300
                        );
                    } else {
                        setTimeout(
                            askClientName,
                            300
                        );
                    }

                    return;
                }


                // ==============================
                // ПОСТРОИТЬ МАРШРУТ И ГЕОЛОКАЦИЯ (2ГИС)
                // ==============================

                if (
                    option === "Построить маршрут" ||
                    option === "📍 Найти ближайший по гео" ||
                    option === "📍 Найти ближайший филиал"
                ) {

                    addUserMessage(
                        option
                    );

                    const selectedKey =
                        userAnswers.selectedStore ||
                        "пр. Чынгыза Айтматова, 93/2";

                    const store =
                        STORES_DATA[selectedKey] ||
                        STORES_DATA["пр. Чынгыза Айтматова, 93/2"];

                    showBotMessage(
                        "📍 Запрашиваю координаты для поиска ближайшего филиала и построения маршрута в 2ГИС..."
                    );

                    if (typeof navigator !== "undefined" && navigator.geolocation) {

                        navigator.geolocation.getCurrentPosition(
                            function(position) {

                                const userLat =
                                    position.coords.latitude;
                                const userLon =
                                    position.coords.longitude;

                                const dist =
                                    calculateDistanceKm(userLat, userLon, store.lat, store.lon);

                                const allList =
                                    Object.keys(STORES_DATA).map(function(k) {
                                        const s = STORES_DATA[k];
                                        return {
                                            key: k,
                                            name: s.name,
                                            address: s.address,
                                            lat: s.lat,
                                            lon: s.lon,
                                            twoGisUrl: s.twoGisUrl,
                                            dist: calculateDistanceKm(userLat, userLon, s.lat, s.lon)
                                        };
                                    }).sort(function(a, b) {
                                        return a.dist - b.dist;
                                    });

                                const nearest =
                                    allList[0];

                                // Официальный формат 2ГИС для построения маршрута на карте (автобусы, маршрутки, авто, пешком)
                                const routeUrl =
                                    "https://2gis.kg/bishkek/directions/points/" +
                                    userLon + "%2C" + userLat +
                                    "%7C" +
                                    store.lon + "%2C" + store.lat;

                                let msg =
                                    "📍 Ваша геопозиция успешно определена!\n\n" +
                                    "Выбранный филиал: " + store.name + "\n" +
                                    "Адрес: " + store.address + "\n" +
                                    "Расстояние от вас: ~" + dist + " км (~" +
                                    Math.max(3, Math.round(dist * 2.5 + 2)) + " мин на авто / ~" +
                                    Math.round(dist * 13) + " мин пешком).\n\n";

                                if (nearest.address === store.address) {
                                    msg += "✅ Это ближайший к вам филиал компании «Мастер Краска»!\n\n";
                                } else {
                                    msg += "💡 Самый близкий к вам филиал: " + nearest.name + " (" + nearest.address + ") — " + nearest.dist + " км.\n\n";
                                }

                                msg += "Все филиалы рядом с вами:\n" +
                                    allList.slice(0, 4).map(function(s, i) {
                                        return (i + 1) + ". " + s.name + " (" + s.address + ") — " + s.dist + " км";
                                    }).join("\n");

                                showBotMessage(
                                    msg,
                                    routeUrl,
                                    "🗺 Открыть маршрут в 2ГИС ↗"
                                );

                                showButtons([
                                    "Проверить товар в филиале",
                                    "Выбрать другой магазин",
                                    "Главное меню"
                                ]);
                            },
                            function(err) {

                                const fallbackMsg =
                                    "📍 Филиал: " + store.name + "\n" +
                                    "Адрес: " + store.address + "\n\n" +
                                    "Не удалось автоматически получить геопозицию (доступ ограничен браузером или устройством).\n\n" +
                                    "Вы можете открыть карточку филиала и готовый маршрут прямо в 2ГИС:";

                                showBotMessage(
                                    fallbackMsg,
                                    store.twoGisUrl,
                                    "🗺 Открыть в 2ГИС ↗"
                                );

                                showButtons([
                                    "Проверить товар в филиале",
                                    "Выбрать другой магазин",
                                    "Главное меню"
                                ]);
                            },
                            { timeout: 7000 }
                        );

                    } else {

                        showBotMessage(
                            "📍 Филиал: " + store.name + "\nАдрес: " + store.address + "\n\nОткройте карточку и маршрут в 2ГИС:",
                            store.twoGisUrl,
                            "🗺 Открыть в 2ГИС ↗"
                        );

                        showButtons([
                            "Проверить товар в филиале",
                            "Выбрать другой магазин",
                            "Главное меню"
                        ]);
                    }

                    return;
                }


                // ==============================
                // ПРОВЕРИТЬ ТОВАР В ФИЛИАЛЕ
                // ==============================

                if (
                    option === "Проверить товар в филиале" ||
                    option === "Посмотреть товар в филиале"
                ) {

                    const selectedKey =
                        userAnswers.selectedStore ||
                        "пр. Чынгыза Айтматова, 93/2";

                    const store =
                        STORES_DATA[selectedKey] ||
                        STORES_DATA["пр. Чынгыза Айтматова, 93/2"];

                    addUserMessage(
                        "Проверить товар в филиале"
                    );

                    waitingFor = "storeCheckProduct";

                    showBotMessage(
                        "Напишите название нужного товара или прикрепите фото (через 📎 скрепку), и я передам запрос менеджеру филиала «" + store.name + "» для проверки наличия."
                    );

                    showButtons([
                        "Прикрепить фото",
                        "Назад к филиалу",
                        "Главное меню"
                    ]);

                    const input =
                        document.getElementById("userInput");

                    if (input) {
                        input.focus();
                    }

                    return;
                }


                // ==============================
                // ПРИКРЕПИТЬ ФОТО КНОПКА
                // ==============================

                if (
                    option === "Прикрепить фото"
                ) {

                    const fileInput =
                        document.getElementById("fileInput");

                    if (fileInput) {
                        fileInput.click();
                    }

                    return;
                }


                // ==============================
                // НАЗАД К ФИЛИАЛУ
                // ==============================

                if (
                    option === "Назад к филиалу"
                ) {

                    const selectedKey =
                        userAnswers.selectedStore ||
                        "пр. Чынгыза Айтматова, 93/2";

                    showStoreDetails(selectedKey);

                    return;
                }


                // ==============================
                // ВЫБРАТЬ ДРУГОЙ МАГАЗИН / АДРЕС
                // ==============================

                if (
                    option === "Выбрать другой магазин" ||
                    option === "Выбрать другой адрес"
                ) {

                    showBotMessage(
                        "Выберите город или филиал:"
                    );

                    showButtons([
                        "Бишкек",
                        "Балыкчы",
                        "Каракол",
                        "📍 Найти ближайший по гео",
                        "Главное меню"
                    ]);

                    return;
                }


                // ==============================
                // ДРУГОЙ ГОРОД
                // ==============================

                if (
                    option === "Другой город"
                ) {

                    addUserMessage(
                        option
                    );

                    showBotMessage(
                        "Напишите название города или филиала."
                    );

                    waitingFor =
                        "city";

                    const input =
                        document.getElementById(
                            "userInput"
                        );

                    if (input) {
                        input.focus();
                    }

                    return;
                }


                // ==============================
                // НУЖНА ДОСТАВКА — ЦЕНА
                // ==============================

                if (
                    currentScenario === "price" &&
                    option === "Нужна доставка"
                ) {

                    userAnswers.pickup =
                        option;

                    addUserMessage(
                        option
                    );

                    currentStep++;

                    setTimeout(
                        askClientNamePrice,
                        300
                    );

                    return;
                }


                // ==============================
                // ЛЮБОЙ ФИЛИАЛ — ЦЕНА
                // ==============================

                if (
                    currentScenario === "price" &&
                    option === "Любой филиал"
                ) {

                    userAnswers.pickup =
                        option;

                    addUserMessage(
                        option
                    );

                    currentStep++;

                    setTimeout(
                        askClientNamePrice,
                        300
                    );

                    return;
                }


                // ==============================
                // ПОДТВЕРЖДЕНИЕ
                // ==============================

                if (
                    option === "Всё верно, отправить"
                ) {

                    askSubmissionConsent();

                    return;
                }


                // ==============================
                // ИЗМЕНИТЬ ОТВЕТЫ
                // ==============================

                if (
                    option === "Изменить ответы"
                ) {

                    editAnswers();

                    return;
                }


                // ==============================
                // ПАРТНЁРЫ — ОБЪЕКТ
                // ==============================

                if (
                    currentScenario === "partner" &&
                    waitingFor === "partnerObject" &&
                    option === "Указать позже"
                ) {

                    selectTextAnswer(
                        "partnerObject",
                        "Укажу позже"
                    );

                    return;
                }


                // ==============================
                // МЕНЕДЖЕР — ВРЕМЯ
                // ==============================

                if (
                    currentScenario === "manager" &&
                    waitingFor === "managerTimeCustom" &&
                    option === "Не важно"
                ) {

                    selectTextAnswer(
                        "managerTimeCustom",
                        "Не важно"
                    );

                    return;
                }


                // ==============================
                // ЖАЛОБА — НЕ ЗНАЮ
                // ==============================

                if (
                    currentScenario === "complaint" &&
                    waitingFor === "complaintOrder" &&
                    option === "Не знаю"
                ) {

                    selectTextAnswer(
                        "complaintOrder",
                        "Не знаю"
                    );

                    return;
                }


                // ==============================
                // ТЕКСТОВЫЕ ПОЛЯ
                // ==============================

                if (
                    waitingFor === "area"
                ) {

                    selectTextAnswer(
                        "area",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "colorCode"
                ) {

                    selectTextAnswer(
                        "colorCode",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "volume"
                ) {

                    selectTextAnswer(
                        "volume",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "product"
                ) {

                    selectTextAnswer(
                        "product",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "quantity"
                ) {

                    selectTextAnswer(
                        "quantity",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "partnerObject"
                ) {

                    selectTextAnswer(
                        "partnerObject",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "partnerContact"
                ) {

                    selectTextAnswer(
                        "partnerContact",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "managerContact"
                ) {

                    selectTextAnswer(
                        "managerContact",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "managerTimeCustom"
                ) {

                    selectTextAnswer(
                        "managerTimeCustom",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "deliveryCity"
                ) {

                    selectTextAnswer(
                        "deliveryCity",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "deliveryProducts"
                ) {

                    selectTextAnswer(
                        "deliveryProducts",
                        option
                    );

                    return;
                }


                if (
                    waitingFor === "deliveryDate"
                ) {

                    selectTextAnswer(
                        "deliveryDate",
                        option
                    );

                    return;
                }


                // ==============================
                // ОБЫЧНЫЙ ОТВЕТ
                // ==============================

                selectAnswer(
                    option
                );
            };


        buttonsContainer.appendChild(
            button
        );
    });


    messages.appendChild(
        buttonsContainer
    );


    messages.scrollTop =
        messages.scrollHeight;
}


// ======================================
// ВЫБОР ОТВЕТА
// ======================================

function selectAnswer(answer) {

    const scenario =
        scenarios[currentScenario];

    if (!scenario) {
        return;
    }


    const step =
        scenario.steps[currentStep];


    // ==================================
    // ДОСТАВКА
    // ==================================

    if (
        currentScenario === "delivery" &&
        step.key === "deliveryQuestion"
    ) {

        userAnswers.deliveryQuestion =
            answer;

        addUserMessage(
            answer
        );


        if (
            answer === "Рассчитать доставку"
        ) {

            currentStep++;

            setTimeout(
                showCurrentQuestion,
                300
            );

            return;
        }


        if (
            answer === "Способы оплаты"
        ) {

            showBotMessage(
                "Вы можете уточнить доступные способы оплаты у специалиста. " +
                "Актуальные условия зависят от выбранного товара и способа получения."
            );

            showButtons([
                "Подробнее",
                "Главное меню"
            ]);

            return;
        }


        if (
            answer === "Самовывоз"
        ) {

            showBotMessage(
                "В каком городе или филиале вам удобно оформить самовывоз?"
            );

            showButtons([
                "Бишкек",
                "Балыкчы",
                "Каракол",
                "Главное меню"
            ]);

            return;
        }


        if (
            answer === "Другой вопрос"
        ) {

            showBotMessage(
                "Напишите ваш вопрос в поле ниже. " +
                "Я передам его сотруднику."
            );

            waitingFor =
                "deliveryOtherQuestion";

            const input =
                document.getElementById(
                    "userInput"
                );

            if (input) {
                input.focus();
            }

            return;
        }
    }


    // ==================================
    // ГОРОД ДОСТАВКИ
    // ==================================

    if (
        currentScenario === "delivery" &&
        step.key === "deliveryCity"
    ) {

        userAnswers.deliveryCity =
            answer;

        addUserMessage(
            answer
        );

        currentStep++;

        setTimeout(
            showCurrentQuestion,
            300
        );

        return;
    }


    // ==================================
    // ТОВАРЫ ДОСТАВКИ
    // ==================================

    if (
        currentScenario === "delivery" &&
        step.key === "deliveryProducts"
    ) {

        userAnswers.deliveryProducts =
            answer;

        addUserMessage(
            answer
        );

        currentStep++;
        setTimeout(
            showCurrentQuestion,
            300
        );

        return;
    }


    // ==================================
    // ДАТА ДОСТАВКИ
    // ==================================

    if (
        currentScenario === "delivery" &&
        step.key === "deliveryDate"
    ) {

        userAnswers.deliveryDate =
            answer;

        addUserMessage(
            answer
        );

        currentStep++;

        setTimeout(
            askClientNameDelivery,
            300
        );

        return;
    }


    // ==================================
    // КОЛЕРОВКА — ОБЪЁМ
    // ==================================

    if (
        currentScenario === "tinting" &&
        step.key === "volumeType"
    ) {

        userAnswers[step.key] =
            answer;

        addUserMessage(
            answer
        );

        currentStep++;


        if (
            answer === "Не знаю"
        ) {

            userAnswers.volume =
                "Не знаю";

            currentStep++;

            setTimeout(
                showCurrentQuestion,
                300
            );

            return;
        }


        setTimeout(
            showCurrentQuestion,
            300
        );

        return;
    }


    // ==================================
    // ЦЕНА — ФАСОВКА
    // ==================================

    if (
        currentScenario === "price" &&
        step.key === "quantityType"
    ) {

        userAnswers[step.key] =
            answer;

        addUserMessage(
            answer
        );

        currentStep++;


        if (
            answer === "Не знаю"
        ) {

            userAnswers.quantity =
                "Не знаю";

            currentStep++;

            setTimeout(
                showCurrentQuestion,
                300
            );

            return;
        }


        setTimeout(
            showCurrentQuestion,
            300
        );

        return;
    }


    // ==================================
    // ОБЩАЯ ЛОГИКА
    // ==================================

    userAnswers[step.key] =
        answer;

    addUserMessage(
        answer
    );

    currentStep++;


    // Конец колеровки

    if (
        currentScenario === "tinting" &&
        currentStep >=
        scenario.steps.length
    ) {

        setTimeout(
            askClientNameTinting,
            300
        );

        return;
    }


    // Конец цены

    if (
        currentScenario === "price" &&
        currentStep >=
        scenario.steps.length
    ) {

        setTimeout(
            askClientNamePrice,
            300
        );

        return;
    }


    // Конец доставки

    if (
        currentScenario === "delivery" &&
        currentStep >=
        scenario.steps.length
    ) {

        setTimeout(
            askClientNameDelivery,
            300
        );

        return;
    }


    // Конец подбора краски

    if (
        currentStep >=
        scenario.steps.length
    ) {

        setTimeout(
            askClientName,
            300
        );

        return;
    }


    setTimeout(
        showCurrentQuestion,
        300
    );
}


// ======================================
// ТЕКСТОВЫЙ ОТВЕТ
// ======================================

function selectTextAnswer(
    key,
    answer
) {

    userAnswers[key] =
        answer;

    addUserMessage(
        answer
    );

    currentStep++;

    waitingFor = "";


    setTimeout(
        showCurrentQuestion,
        300
    );
}


// ======================================
// ИМЯ — ПОДБОР КРАСКИ
// ======================================

function askClientName() {

    waitingFor =
        "name";

    showBotMessage(
        "Я собрал основные параметры. " +
        "Специалист проверит подходящую систему материалов, " +
        "объём, актуальную цену и наличие. " +
        "Как к вам обращаться?"
    );


    const input =
        document.getElementById(
            "userInput"
        );

    if (input) {
        input.focus();
    }
}


// ======================================
// ИМЯ — КОЛЕРОВКА
// ======================================

function askClientNameTinting() {

    waitingFor =
        "name";

    showBotMessage(
        "Оставьте имя и телефон. " +
        "Специалист уточнит продукт, базу, " +
        "возможность колеровки и срок выполнения."
    );


    const input =
        document.getElementById(
            "userInput"
        );

    if (input) {
        input.focus();
    }
}


// ======================================
// ИМЯ — ЦЕНА
// ======================================

function askClientNamePrice() {

    waitingFor =
        "name";

    showBotMessage(
        "Укажите имя и телефон для ответа."
    );


    const input =
        document.getElementById(
            "userInput"
        );

    if (input) {
        input.focus();
    }
}


// ======================================
// ИМЯ — ДОСТАВКА
// ======================================

function askClientNameDelivery() {

    waitingFor =
        "name";

    if (userAnswers.deliveryQuestion === "Самовывоз") {
        showBotMessage(
            "Оставьте имя и телефон. " +
            "Сотрудник проверит наличие в выбранном филиале и подготовит заказ к самовывозу."
        );
    } else {
        showBotMessage(
            "Оставьте имя и телефон. " +
            "Сотрудник проверит стоимость, доступный срок " +
            "и условия доставки."
        );
    }


    const input =
        document.getElementById(
            "userInput"
        );

    if (input) {
        input.focus();
    }
}


// ======================================
// СОГЛАСИЕ НА ОТПРАВКУ
// ======================================

function askSubmissionConsent() {

    waitingFor = "";

    sendRequest();
}


// ======================================
// ЗАВЕРШЕНИЕ — ДИЗАЙНЕРЫ И ПАРТНЁРЫ
// ======================================

function finishPartnerRequest() {

    askSubmissionConsent();
}


// ======================================
// ЗАВЕРШЕНИЕ — МЕНЕДЖЕР
// ======================================

function finishManagerRequest() {

    askSubmissionConsent();
}


// ======================================
// РАБОЧЕЕ ВРЕМЯ
// ======================================

function isWorkingHours() {

    const now =
        new Date();

    const hours =
        now.getHours();

    const minutes =
        now.getMinutes();

    const currentMinutes =
        hours * 60 + minutes;

    const startMinutes =
        9 * 60;

    const endMinutes =
        18 * 60;

    return (
        currentMinutes >= startMinutes &&
        currentMinutes < endMinutes
    );
}


// ======================================
// МЕНЕДЖЕР С ПРОВЕРКОЙ РАБОЧЕГО ВРЕМЕНИ
// ======================================

function startManagerWithHours() {

    if (!isWorkingHours()) {

        currentScenario =
            "manager";

        currentStep =
            1;

        userAnswers =
            {};

        waitingFor =
            "";

        showBotMessage(
            "Сейчас специалисты не в сети.\n\n" +
            "Оставьте вопрос и телефон — мы передадим " +
            "обращение в рабочее время.\n\n" +
            "График работы: 09:00–18:00."
        );

        waitingFor =
            "managerContact";

        const input =
            document.getElementById(
                "userInput"
            );

        if (input) {
            input.focus();
        }

        return;
    }


    startScenario(
        "manager"
    );
}


// ======================================
// МЕНЕДЖЕР НАПРЯМУЮ ИЗ НЕПОНЯТНОГО ВОПРОСА
// ======================================

function startManagerDirect() {

    currentScenario =
        "manager";

    currentStep =
        1;

    userAnswers =
        {};

    waitingFor =
        "";


    if (!isWorkingHours()) {

        showBotMessage(
            "Сейчас специалисты не в сети.\n\n" +
            "Оставьте вопрос и телефон — мы передадим " +
            "обращение в рабочее время.\n\n" +
            "График работы: 09:00–18:00."
        );

    } else {

        showBotMessage(
            "Как к вам обращаться и по какому номеру связаться?"
        );
    }


    waitingFor =
        "managerContact";


    const input =
        document.getElementById(
            "userInput"
        );

    if (input) {
        input.focus();
    }
}


// ======================================
// ЗАВЕРШЕНИЕ — ЖАЛОБА
// ======================================

function finishComplaintRequest() {

    askSubmissionConsent();
}


// ======================================
// ТЕЛЕФОН
// ======================================

function askClientPhone() {

    waitingFor =
        "phone";

    showBotMessage(
        "Укажите номер телефона в формате +996…"
    );


    const input =
        document.getElementById(
            "userInput"
        );

    if (input) {
        input.focus();
    }
}


// ======================================
// ИТОГ ПОДБОРА КРАСКИ
// ======================================

function showSummary() {

    waitingFor = "";

    const summary =

        "Перед отправкой проверьте:\n\n" +

        "Что красим: " +
        (userAnswers.whatToPaint || "Не указано") +

        "\n\n" +

        "Внутри/снаружи: " +
        (userAnswers.location || "Не указано") +

        "\n\n" +

        "Основание: " +
        (userAnswers.surface || "Не указано") +

        "\n\n" +

        "Условия: " +
        (userAnswers.conditions || "Не указано") +

        "\n\n" +

        "Площадь: " +
        (userAnswers.area || "Не указана") +
        " м²\n\n" +

        "Финиш: " +
        (userAnswers.finish || "Не указан") +

        "\n\n" +

        "Цвет: " +
        (userAnswers.color || "Не указан") +

        "\n\n" +

        "Срок: " +
        (userAnswers.purchaseTime || "Не указан") +

        "\n\n" +

        "Город/филиал: " +
        (userAnswers.city || "Не указан") +

        "\n\n" +

        "Имя: " +
        clientName +

        "\n\n" +

        "Телефон: " +
        clientPhone;


    showBotMessage(
        summary
    );


    showButtons([
        "Всё верно, отправить",
        "Изменить ответы",
        "Главное меню"
    ]);
}


// ======================================
// ИТОГ КОЛЕРОВКИ
// ======================================

function showTintingSummary() {

    waitingFor = "";

    let fileInfo = "";


    if (
        userAnswers.colorFile
    ) {

        fileInfo =
            "\n\nПрикреплённый файл: " +
            userAnswers.colorFile;
    }


    const summary =

        "Проверьте данные заявки:\n\n" +

        "Что нужно сделать: " +
        (
            userAnswers.colorAction ||
            "Не указано"
        ) +

        "\n\n" +

        "Поверхность: " +
        (
            userAnswers.colorSurface ||
            "Не указана"
        ) +

        "\n\n" +

        "Код / пример цвета: " +
        (
            userAnswers.colorCode ||
            "Не указан"
        ) +

        "\n\n" +

        "Объём или площадь: " +
        (
            userAnswers.volume ||
            "Не указано"
        ) +

        "\n\n" +

        "Филиал: " +
        (
            userAnswers.city ||
            "Не указан"
        ) +

        fileInfo +

        "\n\n" +

        "Имя: " +
        clientName +

        "\n\n" +

        "Телефон: " +
        clientPhone;


    showBotMessage(
        summary
    );


    showButtons([
        "Всё верно, отправить",
        "Изменить ответы",
        "Главное меню"
    ]);
}


// ======================================
// ИТОГ ЦЕНЫ
// ======================================

function showPriceSummary() {

    waitingFor = "";

    let fileInfo = "";


    if (
        userAnswers.colorFile
    ) {

        fileInfo =
            "\n\nПрикреплённое изображение: " +
            userAnswers.colorFile;
    }


    const summary =

        "Проверьте данные заявки:\n\n" +

        "Товар / бренд: " +
        (
            userAnswers.product ||
            "Не указан"
        ) +

        fileInfo +

        "\n\n" +

        "Фасовка и количество: " +
        (
            userAnswers.quantity ||
            "Не указано"
        ) +

        "\n\n" +

        "Получение: " +
        (
            userAnswers.pickup ||
            "Не указано"
        ) +

        "\n\n" +

        "Филиал: " +
        (
            userAnswers.city ||
            "Не указан"
        ) +

        "\n\n" +

        "Имя: " +
        clientName +

        "\n\n" +

        "Телефон: " +
        clientPhone;


    showBotMessage(
        summary
    );


    showBotMessage(
        "Чтобы не дать устаревшую информацию, " +
        "передам запрос менеджеру. " +
        "Он проверит актуальную цену и наличие."
    );


    showButtons([
        "Всё верно, отправить",
        "Изменить ответы",
        "Главное меню"
    ]);
}


// ======================================
// ИТОГ ДОСТАВКИ
// ======================================

function showDeliverySummary() {

    waitingFor = "";

    if (userAnswers.deliveryQuestion === "Самовывоз") {
        const summary =
            "Проверьте данные заявки на самовывоз:\n\n" +
            "Филиал: " +
            (userAnswers.city || userAnswers.pickup || "Не указан") +
            "\n\n" +
            "Имя: " +
            clientName +
            "\n\n" +
            "Телефон: " +
            clientPhone;

        showBotMessage(
            summary
        );

        showButtons([
            "Всё верно, отправить",
            "Изменить ответы",
            "Главное меню"
        ]);

        return;
    }

    const summary =

        "Проверьте данные заявки:\n\n" +

        "Город / район: " +
        (
            userAnswers.deliveryCity ||
            "Не указан"
        ) +

        "\n\n" +

        "Товары и количество: " +
        (
            userAnswers.deliveryProducts ||
            "Не указаны"
        ) +

        "\n\n" +

        "Когда нужна доставка: " +
        (
            userAnswers.deliveryDate ||
            "Не указано"
        ) +

        "\n\n" +

        "Имя: " +
        clientName +

        "\n\n" +

        "Телефон: " +
        clientPhone;


    showBotMessage(
        summary
    );


    showButtons([
        "Всё верно, отправить",
        "Изменить ответы",
        "Главное меню"
    ]);
}


// ======================================
// ИТОГ ДРУГОГО ВОПРОСА
// ======================================

function showDeliveryQuestionSummary() {

    waitingFor = "";

    const summary =

        "Проверьте данные обращения:\n\n" +

        "Вопрос: " +
        userAnswers.deliveryOtherQuestion +

        "\n\n" +

        "Имя: " +
        clientName +

        "\n\n" +

        "Телефон: " +
        clientPhone;


    showBotMessage(
        summary
    );


    showButtons([
        "Всё верно, отправить",
        "Изменить ответы",
        "Главное меню"
    ]);
}


// ======================================
// УСПЕШНАЯ ОТПРАВКА
// ======================================

function showRequestSuccess() {

    const requestId =
        generateRequestId();

    showBotMessage(
        "Готово! Номер обращения: " +
        requestId +
        ".\n\n" +
        "Сохраните его, если понадобится уточнить статус."
    );

    showButtons([
        "Главное меню"
    ]);
}


// ======================================
// ОТПРАВКА ЗАЯВКИ
// ======================================

function sendRequest() {

    // ==================================
    // МЕНЕДЖЕР
    // ==================================

    if (
        currentScenario === "manager"
    ) {

        showRequestSuccess();

        return;
    }


    // ==================================
    // ЖАЛОБА
    // ==================================

    if (
        currentScenario === "complaint"
    ) {

        showRequestSuccess();

        return;
    }


    // ==================================
    // ПАРТНЁРЫ
    // ==================================

    if (
        currentScenario === "partner"
    ) {

        showRequestSuccess();

        return;
    }


    // ==================================
    // КОЛЕРОВКА
    // ==================================

    if (
        currentScenario === "tinting"
    ) {

        const requestId =
            generateRequestId();

        showBotMessage(
            "Спасибо! Запрос по цвету передан. " +
            "Возьмите с собой код или доступный " +
            "образец, если он есть.\n\n" +
            "Номер обращения: " +
            requestId
        );

        showButtons([
            "Главное меню"
        ]);

        return;
    }


    // ==================================
    // ЦЕНА
    // ==================================

    if (
        currentScenario === "price"
    ) {

        const requestId =
            generateRequestId();

        showBotMessage(
            "Запрос на проверку цены и наличия создан.\n\n" +
            "Номер обращения: " +
            requestId
        );

        showButtons([
            "Главное меню"
        ]);

        return;
    }


    // ==================================
    // ДОСТАВКА
    // ==================================

    if (
        currentScenario === "delivery"
    ) {

        const requestId =
            generateRequestId();

        if (
            userAnswers.deliveryQuestion === "Самовывоз"
        ) {

            showBotMessage(
                "Запрос на самовывоз оформлен.\n\n" +
                "Выбранный филиал: " + (userAnswers.city || userAnswers.pickup || "Не указан") + ".\n" +
                "Сотрудник проверит наличие и свяжется с вами.\n\n" +
                "Номер обращения: " +
                requestId
            );

        } else if (
            userAnswers.deliveryOtherQuestion
        ) {

            showBotMessage(
                "Спасибо! Ваш вопрос передан сотруднику.\n\n" +
                "Номер обращения: " +
                requestId
            );

        } else {

            showBotMessage(
                "Запрос на расчёт доставки передан. " +
                "Сотрудник проверит стоимость, доступный срок " +
                "и условия доставки.\n\n" +
                "Номер обращения: " +
                requestId
            );
        }

        showButtons([
            "Главное меню"
        ]);

        return;
    }


    // ==================================
    // ПОДБОР КРАСКИ
    // ==================================

    const requestId =
        generateRequestId();

    showBotMessage(
        "Спасибо! Запрос передан специалисту. " +
        "Он подтвердит подбор, расход, " +
        "цену и наличие.\n\n" +
        "Номер обращения: " +
        requestId
    );

    showButtons([
        "Главное меню"
    ]);
}


// ======================================
// НОМЕР ЗАЯВКИ
// ======================================

function generateRequestId() {

    const number =
        Math.floor(
            10000 +
            Math.random() * 90000
        );


    return "MK-" + number;
}


// ======================================
// ИЗМЕНИТЬ ОТВЕТЫ
// ======================================

function editAnswers() {

    clearMessages();

    currentStep = 0;

    userAnswers = {};

    clientName = "";

    clientPhone = "";

    waitingFor = "";


    showBotMessage(
        "Хорошо. Давайте заново проверим параметры."
    );


    setTimeout(
        showCurrentQuestion,
        300
    );
}


// ======================================
// ГЛАВНОЕ МЕНЮ
// ======================================

function showMainMenu() {

    currentScenario = "";

    currentStep = 0;

    userAnswers = {};

    clientName = "";

    clientPhone = "";

    waitingFor = "";


    clearMessages();


    showBotMessage(
        "Здравствуйте! Я помощник «Мастер Краски». " +
        "Помогу подобрать направление, найти магазин " +
        "или передать вопрос специалисту.\n\n" +
        "Что вас интересует?"
    );


    showButtons([

        "Подобрать краску",

        "Колеровка и цвет",

        "Цена и наличие",

        "Найти магазин",

        "Доставка и оплата",

        "Дизайнерам и партнёрам",

        "Позвать менеджера"

    ]);
}


// ======================================
// СООБЩЕНИЕ БОТА
// ======================================

function showBotMessage(text, actionUrl, actionText, actionType) {

    const messages =
        document.getElementById(
            "chatMessages"
        );


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "message bot-message";


    message.style.whiteSpace =
        "pre-line";


    message.textContent =
        text;


    if (actionUrl) {
        const link =
            document.createElement("a");
        link.href =
            actionUrl;

        if (actionType === "tel") {
            link.target = "_self";
        } else {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        link.textContent =
            actionText || (actionType === "tel" ? "📞 Позвонить" : "🗺 Открыть в 2ГИС ↗");

        link.style.display = "inline-flex";
        link.style.alignItems = "center";
        link.style.gap = "6px";
        link.style.marginTop = "10px";
        link.style.padding = "8px 16px";
        link.style.backgroundColor = actionType === "tel" ? "#059669" : "#2d8b4e";
        link.style.color = "#ffffff";
        link.style.borderRadius = "12px";
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";
        link.style.fontSize = "13px";
        link.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";

        message.appendChild(
            document.createElement("br")
        );
        message.appendChild(
            link
        );
    }


    messages.appendChild(
        message
    );


    messages.scrollTop =
        messages.scrollHeight;
}


// ======================================
// СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ
// ======================================

function addUserMessage(text) {

    const messages =
        document.getElementById(
            "chatMessages"
        );


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "message user-message";


    message.textContent =
        text;


    messages.appendChild(
        message
    );


    messages.scrollTop =
        messages.scrollHeight;
}


// ======================================
// ОЧИСТКА ЧАТА
// ======================================

function clearMessages() {

    const messages =
        document.getElementById(
            "chatMessages"
        );


    messages.innerHTML =
        "";
}


// ======================================
// ОТПРАВКА ТЕКСТА
// ======================================

function sendMessage() {

    const input =
        document.getElementById(
            "userInput"
        );


    const text =
        input.value.trim();


    if (
        text === ""
    ) {
        return;
    }

    const oldButtons = document.querySelectorAll(".buttons");
    oldButtons.forEach(function(b) {
        b.remove();
    });


    // ==============================
    // Площадь
    // ==============================

    if (
        waitingFor === "area"
    ) {

        selectTextAnswer(
            "area",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // Код цвета
    // ==============================

    if (
        waitingFor === "colorCode"
    ) {

        selectTextAnswer(
            "colorCode",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // Объём
    // ==============================

    if (
        waitingFor === "volume"
    ) {

        selectTextAnswer(
            "volume",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // Название товара
    // ==============================

    if (
        waitingFor === "product"
    ) {

        selectTextAnswer(
            "product",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // Фасовка
    // ==============================

    if (
        waitingFor === "quantity"
    ) {

        selectTextAnswer(
            "quantity",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // ГОРОД
    // ==============================

    if (
        waitingFor === "city"
    ) {

        userAnswers.city =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor = "";


        if (
            currentScenario === "price"
        ) {

            setTimeout(
                askClientNamePrice,
                300
            );

        } else if (
            currentScenario === "tinting"
        ) {

            setTimeout(
                askClientNameTinting,
                300
            );

        } else {

            setTimeout(
                askClientName,
                300
            );
        }

        return;
    }


    // ==============================
    // ГОРОД / РАЙОН ДОСТАВКИ
    // ==============================

    if (
        waitingFor === "deliveryCity"
    ) {

        userAnswers.deliveryCity =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor = "";

        currentStep++;


        setTimeout(
            showCurrentQuestion,
            300
        );

        return;
    }


    // ==============================
    // ТОВАРЫ ДОСТАВКИ
    // ==============================

    if (
        waitingFor === "deliveryProducts"
    ) {

        userAnswers.deliveryProducts =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor = "";

        currentStep++;


        setTimeout(
            showCurrentQuestion,
            300
        );

        return;
    }


    // ==============================
    // ДАТА ДОСТАВКИ
    // ==============================

    if (
        waitingFor === "deliveryDate"
    ) {

        userAnswers.deliveryDate =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor = "";

        currentStep++;


        setTimeout(
            askClientNameDelivery,
            300
        );

        return;
    }


    // ==============================
    // ОБЪЕКТ — ДИЗАЙНЕРЫ И ПАРТНЁРЫ
    // ==============================

    if (
        waitingFor === "partnerObject"
    ) {

        selectTextAnswer(
            "partnerObject",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // КОНТАКТ — ДИЗАЙНЕРЫ И ПАРТНЁРЫ
    // ==============================

    if (
        waitingFor === "partnerContact"
    ) {

        selectTextAnswer(
            "partnerContact",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // КОНТАКТ — МЕНЕДЖЕР
    // ==============================

    if (
        waitingFor === "managerContact"
    ) {

        selectTextAnswer(
            "managerContact",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // ВРЕМЯ — МЕНЕДЖЕР
    // ==============================

    if (
        waitingFor === "managerTimeCustom"
    ) {

        selectTextAnswer(
            "managerTimeCustom",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // ФИЛИАЛ / ДАТА / НОМЕР ЗАКАЗА — ЖАЛОБА
    // ==============================

    if (
        waitingFor === "complaintOrder"
    ) {

        selectTextAnswer(
            "complaintOrder",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // ОПИСАНИЕ ПРОБЛЕМЫ — ЖАЛОБА
    // ==============================

    if (
        waitingFor === "complaintDescription"
    ) {

        selectTextAnswer(
            "complaintDescription",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // КОНТАКТ — ЖАЛОБА
    // ==============================

    if (
        waitingFor === "complaintContact"
    ) {

        selectTextAnswer(
            "complaintContact",
            text
        );

        input.value = "";

        return;
    }


    // ==============================
    // ПРОВЕРКА ТОВАРА В ФИЛИАЛЕ — НАЗВАНИЕ
    // ==============================

    if (
        waitingFor === "storeCheckProduct"
    ) {

        userAnswers.storeCheckProduct =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor =
            "storeCheckName";

        setTimeout(
            function() {

                showBotMessage(
                    "Как к вам обращаться?"
                );

                const nameInput =
                    document.getElementById(
                        "userInput"
                    );

                if (nameInput) {
                    nameInput.focus();
                }

            },
            300
        );

        return;
    }


    // ==============================
    // ПРОВЕРКА ТОВАРА — ИМЯ
    // ==============================

    if (
        waitingFor === "storeCheckName"
    ) {

        clientName =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor =
            "storeCheckPhone";

        setTimeout(
            function() {

                showBotMessage(
                    "Укажите номер телефона для связи в формате +996…"
                );

                const phoneInput =
                    document.getElementById(
                        "userInput"
                    );

                if (phoneInput) {
                    phoneInput.focus();
                }

            },
            300
        );

        return;
    }


    // ==============================
    // ПРОВЕРКА ТОВАРА — ТЕЛЕФОН И ФИНАЛ
    // ==============================

    if (
        waitingFor === "storeCheckPhone"
    ) {

        clientPhone =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor = "";

        setTimeout(
            function() {

                const reqId =
                    generateRequestId();

                const selectedKey =
                    userAnswers.selectedStore ||
                    "пр. Чынгыза Айтматова, 93/2";

                const store =
                    STORES_DATA[selectedKey] ||
                    STORES_DATA["пр. Чынгыза Айтматова, 93/2"];

                showBotMessage(
                    "Спасибо, " + clientName + "! Запрос на проверку наличия товара в филиале «" + store.name + "» (" + store.address + ") передан менеджеру.\n\n" +
                    "Специалист филиала проверит наличие и свяжется с вами по номеру " + clientPhone + ".\n\n" +
                    "Номер обращения: " + reqId
                );

                showButtons([
                    "Главное меню"
                ]);

            },
            300
        );

        return;
    }


    // ==============================
    // ДРУГОЙ ВОПРОС
    // ==============================

    if (
        waitingFor === "deliveryOtherQuestion"
    ) {

        userAnswers.deliveryOtherQuestion =
            text;

        addUserMessage(
            text
        );

        input.value = "";

        waitingFor =
            "name";


        showBotMessage(
            "Как к вам обращаться?"
        );

        const nameInput =
            document.getElementById(
                "userInput"
            );

        if (nameInput) {
            nameInput.focus();
        }

        return;
    }


    // ==============================
    // НЕПОНЯТНЫЙ ВОПРОС
    // ==============================

    if (
        waitingFor === "unclearQuestionText"
    ) {

        addUserMessage(
            text
        );

        userAnswers.unclearQuestion =
            text;

        input.value = "";

        waitingFor = "";

        setTimeout(
            function() {

                showBotMessage(
                    "Не хочу дать неверный ответ. " +
                    "Давайте передам вопрос специалисту " +
                    "или вернёмся в главное меню."
                );

                showButtons([
                    "Позвать менеджера",
                    "Главное меню"
                ]);

            },
            300
        );

        return;
    }


    // ==============================
    // ИМЯ
    // ==============================

    if (
        waitingFor === "name"
    ) {

        addUserMessage(
            text
        );

        clientName =
            text;

        input.value = "";


        setTimeout(
            askClientPhone,
            300
        );

        return;
    }

    // ==============================
    // ТЕЛЕФОН
    // ==============================

    if (
        waitingFor === "phone"
    ) {

        addUserMessage(
            text
        );

        clientPhone =
            text;

        input.value = "";


        if (
            currentScenario === "tinting"
        ) {

            setTimeout(
                showTintingSummary,
                300
            );

        } else if (
            currentScenario === "price"
        ) {

            setTimeout(
                showPriceSummary,
                300
            );

        } else if (
            currentScenario === "delivery"
        ) {

            if (
                userAnswers.deliveryOtherQuestion
            ) {

                setTimeout(
                    showDeliveryQuestionSummary,
                    300
                );

            } else {

                setTimeout(
                    showDeliverySummary,
                    300
                );
            }

        } else {

            setTimeout(
                showSummary,
                300
            );
        }

        return;
    }


    // ==============================
    // ОБЫЧНЫЙ ТЕКСТ
    // ==============================

    addUserMessage(
        text
    );

    input.value = "";
}


// ======================================
// ЗАГРУЗКА ФОТО / ФАЙЛА
// ======================================

function handleFileSelect() {

    const fileInput =
        document.getElementById(
            "fileInput"
        );


    const file =
        fileInput.files[0];


    if (!file) {
        return;
    }


    addUserMessage(
        "📎 Прикреплён файл: " +
        file.name
    );


    userAnswers.colorFile =
        file.name;


    if (waitingFor === "storeCheckProduct") {
        userAnswers.storeCheckProduct = "📎 Фото: " + file.name;
        waitingFor = "storeCheckName";

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const messages = document.getElementById("chatMessages");
                const image = document.createElement("img");
                image.src = event.target.result;
                image.style.maxWidth = "200px";
                image.style.maxHeight = "200px";
                image.style.borderRadius = "10px";
                image.style.marginTop = "8px";
                messages.appendChild(image);
                messages.scrollTop = messages.scrollHeight;
            };
            reader.readAsDataURL(file);
        }

        setTimeout(function() {
            showBotMessage("Спасибо за фото! Как к вам обращаться?");
            const nameInput = document.getElementById("userInput");
            if (nameInput) {
                nameInput.focus();
            }
        }, 400);

        fileInput.value = "";
        return;
    }

    if (
        file.type.startsWith("image/")
    ) {

        const reader =
            new FileReader();


        reader.onload =
            function(event) {

                const messages =
                    document.getElementById(
                        "chatMessages"
                    );


                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    event.target.result;


                image.style.maxWidth =
                    "200px";


                image.style.maxHeight =
                    "200px";


                image.style.borderRadius =
                    "10px";


                image.style.marginTop =
                    "8px";


                messages.appendChild(
                    image
                );


                messages.scrollTop =
                    messages.scrollHeight;
            };


        reader.readAsDataURL(
            file
        );
    }


    fileInput.value = "";
}


// ======================================
// ОБРАБОТЧИК ФАЙЛА И СКРЕПКИ
// ======================================

const fileInput =
    document.getElementById(
        "fileInput"
    );


if (fileInput) {

    fileInput.addEventListener(
        "change",
        handleFileSelect
    );
}

const attachButton =
    document.getElementById(
        "attachButton"
    );

if (attachButton && fileInput) {
    attachButton.addEventListener(
        "click",
        function() {
            fileInput.click();
        }
    );
}


// ======================================
// ENTER В ПОЛЕ ВВОДА
// ======================================

const userInput =
    document.getElementById(
        "userInput"
    );


if (userInput) {

    userInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                sendMessage();
            }
        }
    );
}


// ======================================
// ДАННЫЕ ФИЛИАЛОВ И ГЕОЛОКАЦИЯ
// ======================================

const STORES_DATA = {
    "пр. Чынгыза Айтматова, 93/2": {
        name: "Флагманский магазин «Мастер Краска»",
        address: "пр. Чынгыза Айтматова, 93/2",
        city: "Бишкек",
        phone: "+996 550 910 148",
        phoneRaw: "+996550910148",
        hours: "Пн-Сб с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.8465,
        lon: 74.5861,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.5861%2C42.8465"
    },
    "ул. Жукеева/Пудовкина, 61B/2": {
        name: "ТД Галерея «Мастер Краска»",
        address: "ул. Жукеева/Пудовкина, 61B/2",
        city: "Бишкек",
        phone: "+996 312 910 148, +996 553 910 148",
        phoneRaw: "+996553910148",
        hours: "Пн - Вс с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.8398,
        lon: 74.6184,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.6184%2C42.8398"
    },
    "ул. Ибраимова, 64/1": {
        name: "Мастер Краска — ул. Ибраимова",
        address: "ул. Ибраимова, 64/1",
        city: "Бишкек",
        phone: "+996 550 910 148",
        phoneRaw: "+996550910148",
        hours: "Пн-Сб с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.8710,
        lon: 74.6152,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.6152%2C42.8710"
    },
    "ул. Чокана Валиханова, 2, бутик №А109": {
        name: "ТЦ АЮ Гранд Комфорт «Мастер Краска»",
        address: "ул. Чокана Валиханова, 2, бутик №А109",
        city: "Бишкек",
        phone: "+996 556 910 148",
        phoneRaw: "+996556910148",
        hours: "Вт - Пт с 9:00 до 18:00 (Пн выходной)",
        email: "info@masterkraska.kg",
        lat: 42.8752,
        lon: 74.6738,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.6738%2C42.8752"
    },
    "ул. Льва Толстого, 19, бутик 21": {
        name: "ТЦ Баткен Комфорт «Мастер Краска»",
        address: "ул. Льва Толстого, 19, бутик 21",
        city: "Бишкек",
        phone: "+996 554 910 148",
        phoneRaw: "+996554910148",
        hours: "Пн - Вс с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.8624,
        lon: 74.5678,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.5678%2C42.8624"
    },
    "ул. Панфилова, 90": {
        name: "Мастер Краска — ул. Панфилова",
        address: "ул. Панфилова, 90",
        city: "Бишкек",
        phone: "+996 550 910 148",
        phoneRaw: "+996550910148",
        hours: "Пн-Сб с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.8631,
        lon: 74.5976,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.5976%2C42.8631"
    },
    "ул. Московская, 221": {
        name: "Мастер Краска — ул. Московская",
        address: "ул. Московская, 221",
        city: "Бишкек",
        phone: "+996 550 910 148",
        phoneRaw: "+996550910148",
        hours: "Пн-Сб с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.8722,
        lon: 74.5772,
        twoGisUrl: "https://2gis.kg/bishkek/directions/points/%7C74.5772%2C42.8722"
    },
    "Балыкчы": {
        name: "Магазин «Мастер Краска» в г. Балыкчы",
        address: "г. Балыкчы",
        city: "Балыкчы",
        phone: "+996 550 910 148",
        phoneRaw: "+996550910148",
        hours: "Пн-Сб с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.4590,
        lon: 76.1870,
        twoGisUrl: "https://2gis.kg/directions/points/%7C76.1870%2C42.4590"
    },
    "Каракол": {
        name: "Магазин «Мастер Краска» в г. Каракол",
        address: "г. Каракол",
        city: "Каракол",
        phone: "+996 550 910 148",
        phoneRaw: "+996550910148",
        hours: "Пн-Сб с 9:00 до 18:00",
        email: "info@masterkraska.kg",
        lat: 42.4900,
        lon: 78.3930,
        twoGisUrl: "https://2gis.kg/directions/points/%7C78.3930%2C42.4900"
    }
};

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
}

function showStoreDetails(address) {

    userAnswers.selectedStore = address;

    const store =
        STORES_DATA[address] ||
        STORES_DATA["пр. Чынгыза Айтматова, 93/2"];

    const details =
        store.name + "\n" +
        "Адрес: " + store.address + "\n" +
        "Номер телефона: " + store.phone + "\n" +
        "Рабочие часы: " + store.hours + "\n" +
        "Email: " + store.email;

    showBotMessage(details);

    showButtons([
        "Построить маршрут",
        "Проверить товар в филиале",
        "Выбрать другой магазин",
        "Главное меню"
    ]);
}