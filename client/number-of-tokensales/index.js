var colors = ['#f98a83', '#989898', '#85f77e']
new Vue({
  el: '#number-of-tokensales',
  template:
  `
  <div>
    <h3 v-if="heading">{{heading}}</h3>
    <div id="highcharts" style="min-width: 100%; width: 100%; height: 100vh; min-height: 100vh; margin: 0 auto"></div>
  </div>
  `,
  data: function data() {
    return {
      heading: '',
    }
  },
  mounted () {
    this.highcharts()
  },
  methods: {
    highcharts: function () {
      Highcharts.chart('highcharts', {
        chart: {
            type: 'column'
        },
        title: {
          text: null
        },
        xAxis: {
            categories: ['2017.01', '2017.02', '2017.03', '2017.04', '2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'number of tokensales',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 60,
            y: 0,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Number of tokensales',
            data: [8, 6, 6, 20, 26, 32, 34, 64, 158, 204],
            color: 'rgba(149, 206, 255, .8)'
        }]
      })
    }
  }
})
