var colors = ['#f98a83', '#989898', '#85f77e']
new Vue({
  el: '#projects-by-industry',
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
            type: 'bar'
        },
        title: {
          text: null
        },
        xAxis: {
            categories: ['Social service and platform', 'Gambling industry', 'Currency Exchanges', 'Anonimus Payment solution', 'Cloud and Fog Computing', 'Medical Cannabis Indistry', 'Advertising industry (digital)'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'number of projects',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
          enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'index components',
            data: [20, 16, 10, 8, 8, 8, 6],
            color: 'rgb(149, 206, 255)'
        }]
      })
    }
  }
})
