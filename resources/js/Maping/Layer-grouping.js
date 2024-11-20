// Функция для создания групп слоев
export function createLayerGroups(layers, groupConfigs) {
    const layerGroups = {};

    // Инициализация групп по конфигурации
    groupConfigs.forEach(({ name }) => {
        layerGroups[name] = [];
    });

    // Распределяем слои по группам
    layers.forEach(layer => {
        const layerSourceParams = layer.getSource().getParams().LAYERS;

        for (const { name, conditions } of groupConfigs) {
            if (conditions.some(condition => layerSourceParams.includes(condition))) {
                layerGroups[name].push(layer);
                return; // Прекращаем проверку, если слой добавлен в группу
            }
        }
    });

    return layerGroups;
}

// Функция для настройки управления видимостью слоев и групп слоев
export function setupLayerVisibilityControls(layerGroups, layers) {
    // Настройка видимости для групп слоев
    const groupControls = Object.keys(layerGroups).map(groupName => {
        return { checkbox: document.getElementById(groupName), layers: layerGroups[groupName] };
    });

    groupControls.forEach(({ checkbox, layers }) => {
        checkbox.addEventListener('change', () => {
            layers.forEach(layer => layer.setVisible(checkbox.checked));
        });
    });

    // Настройка видимости для отдельных слоев
    layers.forEach(layer => {
        const layerName = layer.getSource().getParams().LAYERS;
        const checkbox = document.getElementById(layerName);

        if (checkbox) {
            checkbox.addEventListener('change', () => {
                layer.setVisible(checkbox.checked);
            });
        }
    });
}
