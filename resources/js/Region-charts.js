import * as echarts from 'echarts';

// Инициализация первого графика
var chartDom1 = document.getElementById('chart-container-1');
var myChart1 = echarts.init(chartDom1);

// Опции для первого графика
var option1 = {
    title: {
        text: 'Формы СЗЗ',
        left: 'center',
        top: 'top',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '14',
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: '10%',
        top: 'center',
        align: 'left',
        padding: [0, 0, 0, 20], // отступ слева для легенды
        textStyle: {
            rich: {
            }
        }
    },
    series: [
        {
            name: 'Формы СЗЗ',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['25%', '50%'],  // Смещение диаграммы влево
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '16',
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 67, name: 'Полные'},
                {value: 26, name: 'Сокращенные'},
                {value: 7, name: 'Без установления'}
            ],
            color: ['#5470C6', '#91CC75', '#FAC858']
        }
    ]
};

// Установка опций и отображение первого графика
myChart1.setOption(option1);

// Инициализация второго графика
var chartDom2 = document.getElementById('chart-container-2');
var myChart2 = echarts.init(chartDom2);

var percentage = 27;

// Опции для второго графика
var option2 = {
    title: {
        text: percentage + '%',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 21,
            fontWeight: 'bold',
            color: '#000'
        }
    },
    series: [
        {
            type: 'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: percentage, name: 'С33 в районе', itemStyle: { color: '#4CAF50' } },
                { value: 100 - percentage, name: 'Остальные С33', itemStyle: { color: '#B0BEC5' } }
            ]
        }
    ]
};

// Установка опций и отображение второго графика
myChart2.setOption(option2);

// Инициализация третьего графика
var chartDom3 = document.getElementById('chart-container-3');
var myChart3 = echarts.init(chartDom3);

// Опции для третьего графика
var option3 = {
    title: {
        text: 'Динамика установления ЗОУИТ(СЗЗ) в районе',
        left: 'center',
        top: 'top',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '13',
        }
    },
    grid: {
        top: '20%',
        bottom: '15%',
        left: '10%',
        right: '10%'
    },
    xAxis: {
        type: 'category',
        data: ['2021', '2022', '2023', 'июнь 2024'],
        axisLabel: {
            interval: 0,
            rotate: 0
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [154, 213, 200, 299],
        type: 'bar',
        itemStyle: {
            color: '#90EE90'
        }
    }]
};

// Установка опций и отображение третьего графика
myChart3.setOption(option3);
