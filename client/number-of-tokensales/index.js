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
      axios.get('./data.json')
      .then(response => {
        createChart(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
      var createChart = function(data) {
        var dates = Object.keys(data)
        var numbers = Object.values(data)
        numbers = numbers.map(function(number) {
          return parseInt(number)
        })
        Highcharts.chart('highcharts', {
          chart: {
              type: 'column'
          },
          title: {
            text: null
          },
          xAxis: {
              categories: dates,
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
              data: numbers,
              color: 'rgba(149, 206, 255, .8)'
          }]
        })
      }
    }
  }
})
