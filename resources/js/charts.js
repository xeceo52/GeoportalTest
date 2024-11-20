import * as echarts from 'echarts';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function() {
    let selectedRegion = ''; // Переменная для хранения выбранного региона
    const charts = {}; // Сохраняем экземпляры графиков здесь

    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function initChart(domId, fetchUrl, chartName, fontSize = 12) {
        const dom = document.getElementById(domId);
        if (!dom) return; // Проверка на наличие элемента

        let myChart = charts[domId];

        if (!myChart) {
            myChart = echarts.init(dom, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });

            charts[domId] = myChart; // Сохраняем экземпляр графика

            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {d}%'
                },
                legend: {
                    height: '29%',
                    type: 'scroll',
                    top: '67%', // Прижимаем легенду к низу
                    left: 'center',
                    orient: 'vertical',
                    itemGap: 2,
                    textStyle: {
                        fontSize: fontSize
                    },
                    formatter: function(name) {
                        return name;
                    },
                },
                series: [
                    {
                        name: chartName,
                        type: 'pie',
                        center: ['50%', '40%'], // Сдвигаем центр графика вверх, чтобы освободить место для легенды
                        radius: ['20%', '65%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{d}%',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: fontSize
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: fontSize + 12,
                                fontWeight: 'bold',
                                textBorderColor: '#b6b6b6',
                                textBorderWidth: 1,
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: []
                    }
                ]
            };

            myChart.setOption(option);
        }

        function fetchDataAndUpdateChart() {
            fetch(`${fetchUrl}?region=${encodeURIComponent(selectedRegion)}`)
                .then(response => response.json())
                .then(data => {
                    myChart.setOption({
                        series: [{
                            data: data
                        }]
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        }

        fetchDataAndUpdateChart();
    }

    // Функция обновления атрибутов зон
    function updateZoneAttributes() {
        fetch(`/getDataZonesInfo?region=${encodeURIComponent(selectedRegion)}`)
            .then(response => response.json())
            .then(data => {
                // Обновление значений в .attribute
                document.getElementById('totalZOUIT').textContent = data.totalZOUIT || '';
                document.getElementById('totalFull').textContent = data.totalFull || '';
                document.getElementById('totalShort').textContent = data.totalShort || '';
                document.getElementById('totalWithoutEstablishing').textContent = data.totalWithoutEstablishing || '';
            })
            .catch(error => console.error('Error fetching zone data:', error));
    }

    // Установка выбранного региона при клике на пункт выпадающего меню
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            selectedRegion = this.textContent.trim(); // Сохраняем выбранный регион
            updateCharts(); // Обновляем графики при выборе региона
        });
    });

    // При загрузке страницы установим начальное значение выбранного региона
    selectedRegion = document.querySelector('.dropdown-item.active')?.textContent.trim() || 'Общая статистика';

    // Обновим атрибуты зон сразу при загрузке страницы
    updateZoneAttributes();

    // Функция для инициализации графиков при загрузке страницы
    function updateCharts() {
        initChart('diagramJs1', '/dashboard-region', 'Регионы добычи');
        initChart('diagramJs2', '/dashboard-status', 'Назначение скважин');
        initChart('diagramJs3', '/dashboard-purpose', 'Состояние скважин', 9);
    }

    // Запускаем обновление графиков при загрузке страницы
    updateCharts();

    // Инициализация графиков для столбчатых диаграмм
    const chartOptions = [
        {
            xAxis: {
                type: 'category',
                data: ['2021', '2022', '2023', 'июнь 2024'],
                axisLabel: {
                    color: '#7D7D7D',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [0, 191, 1213, 800],
                    type: 'bar',
                    color: '#E27D5F',
                    barWidth: '50%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 14,
                        color: '#7D7D7D'
                    }
                }
            ]
        },
        {
            xAxis: {
                type: 'category',
                data: ['2021', '2022', '2023', 'июнь 2024'],
                axisLabel: {
                    color: '#7D7D7D',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [0, 550, 1670, 683],
                    type: 'bar',
                    color: '#84CDCA',
                    barWidth: '50%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 14,
                        color: '#7D7D7D'
                    }
                }
            ]
        },
        {
            xAxis: {
                type: 'category',
                data: ['2021', '2022', '2023', 'июнь 2024'],
                axisLabel: {
                    color: '#7D7D7D',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [1187, 4500, 1854, 8],
                    type: 'bar',
                    color: '#E986A8',
                    barWidth: '50%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 14,
                        color: '#7D7D7D'
                    }
                }
            ]
        },
        {
            xAxis: {
                type: 'category',
                data: ['2021', '2022', '2023', 'июнь 2024'],
                axisLabel: {
                    color: '#7D7D7D',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [146, 1411, 2535, 509],
                    type: 'bar',
                    color: '#C878CE',
                    barWidth: '50%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 14,
                        color: '#7D7D7D'
                    }
                }
            ]
        },
        {
            xAxis: {
                type: 'category',
                data: ['2021', '2022', '2023', 'июнь 2024'],
                axisLabel: {
                    color: '#7D7D7D',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [365, 1378, 1175, 653],
                    type: 'bar',
                    color: '#99D65E',
                    barWidth: '50%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 14,
                        color: '#7D7D7D'
                    }
                }
            ]
        }
    ];

    chartOptions.forEach((option, index) => {
        const dom = document.getElementById(`chart${index + 1}`);
        if (!dom) return; // Проверка на наличие элемента

        const myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });

        myChart.setOption(option);

        window.addEventListener('resize', function() {
            myChart.resize(); // Просто вызываем метод resize для каждого графика
        });
    });
});
