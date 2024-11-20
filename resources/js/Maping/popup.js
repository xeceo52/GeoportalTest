export function setupPopup(map, layers, dataDisplay, layerFields) {
    // Обработчик клика для отображения данных объекта
    map.on('singleclick', async function (evt) {
        const view = map.getView();
        const viewResolution = view.getResolution();

        dataDisplay.innerHTML = "Loading... please wait..."; // Индикация загрузки

        for (const layer of layers) {
            if (!layer.getVisible()) continue; // Пропускаем невидимые слои

            const layerName = layer.getSource().getParams().LAYERS;
            const fields = layerFields[layerName];

            // Проверка наличия полей
            if (!fields) {
                console.warn(`Нет полей для слоя: ${layerName}`);
                continue; // Переходим к следующему слою
            }

            const url = layer.getSource().getFeatureInfoUrl(evt.coordinate, viewResolution, view.getProjection(), {
                'INFO_FORMAT': 'application/json',
                'FEATURE_COUNT': 1 // Ограничиваем количество возвращаемых объектов
            });

            if (url) {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data.features && data.features.length > 0) {
                        dataDisplay.innerHTML = ''; // Очищаем предыдущие данные

                        const detailsElement = document.createElement('details'); // Создаем элемент <details> для атрибутов
                        detailsElement.setAttribute('open', '');
                        const summaryElement = document.createElement('summary'); // Создаем элемент <summary> для атрибутов
                        summaryElement.textContent = 'Атрибуты'; // Текст для заголовка атрибутов
                        detailsElement.appendChild(summaryElement); // Добавляем заголовок в details

                        const table = document.createElement('table'); // Создаем таблицу для атрибутов

                        // Перебираем полученные объекты
                        data.features.forEach(feature => {
                            // Создаем строки таблицы для атрибутов
                            fields.forEach(field => {
                                if (feature.properties[field] !== undefined) {
                                    const row = `<tr><td><b>${field}</b></td><td>${feature.properties[field]}</td></tr>`;
                                    table.innerHTML += row; // Добавляем строки в таблицу
                                }
                            });
                        });

                        // Добавление стиля к таблице
                        table.style.borderCollapse = 'collapse'; // Убираем промежутки между ячейками
                        table.style.width = '100%'; // Ширина таблицы на весь контейнер

                        // Стили для ячеек таблицы
                        const cells = table.getElementsByTagName('td');
                        for (let cell of cells) {
                            cell.style.border = '1px solid black'; // Граница ячейки
                            cell.style.padding = '8px'; // Отступы внутри ячейки
                        }

                        const headers = table.getElementsByTagName('th');
                        for (let header of headers) {
                            header.style.border = '1px solid black'; // Граница заголовка
                            header.style.padding = '8px'; // Отступы внутри заголовка
                        }

                        detailsElement.appendChild(table); // Добавляем таблицу атрибутов в details

                        // Добавляем элемент <details> для фотографий
                        const photoDetailsElement = document.createElement('details'); // Создаем элемент <details> для фотографий
                        photoDetailsElement.setAttribute('open', ''); // Открываем по умолчанию
                        const photoSummaryElement = document.createElement('summary'); // Создаем элемент <summary> для фотографий
                        photoSummaryElement.textContent = 'Фотографии'; // Текст для заголовка фотографий
                        photoDetailsElement.appendChild(photoSummaryElement); // Добавляем заголовок для фотографий

                        // Перебираем полученные объекты снова, чтобы добавить фотографии
                        data.features.forEach(feature => {
                            const imageName = feature.properties.layer; // Предполагаем, что свойство layer содержит имя изображения
                            const imagePath = `images/регионы_добычи/${imageName}.png`; // Путь к изображению

                            const imageElement = document.createElement('img');
                            imageElement.src = imagePath;
                            imageElement.alt = 'Изображение региона';
                            imageElement.style.width = '100%'; // Устанавливаем ширину изображения
                            imageElement.style.maxWidth = '300px'; // Максимальная ширина изображения
                            imageElement.style.marginTop = '10px'; // Отступ сверху

                            photoDetailsElement.appendChild(imageElement); // Добавляем изображение в details с фотографиями
                        });

                        // Добавляем оба <details> в dataDisplay
                        dataDisplay.appendChild(detailsElement); // Добавляем details с атрибутами
                        dataDisplay.appendChild(photoDetailsElement); // Добавляем details с фотографиями
                        break; // Если данные найдены, выходим из цикла
                    }
                } else {
                    console.error('Ошибка:', response.status);
                    dataDisplay.innerHTML = "Ошибка при загрузке данных.";
                }
            }
        }

        if (!dataDisplay.innerHTML) {
            dataDisplay.innerHTML = "Нет данных для отображения."; // Сообщение, если данные не найдены
        }
    });
}
