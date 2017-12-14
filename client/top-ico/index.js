var colors = ['#f98a83', '#989898', '#85f77e']
new Vue({
  el: '#top-ico',
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
            categories: ['EOS', 'Tezos', 'FileCoin', 'Bancor', 'Status', 'Kin', 'TenX', 'DomRaider', 'Kyber Network', 'Centra', 'Enigma', 'SONM', 'Monetha', 'Basic Attention Token', 'Civic', 'Stox', 'ChainLink', 'Polybios'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'thousands of dollars',
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
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            x: -40,
            y: -80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Amount raised in BTC',
            data: [550, 450, 350, 250, 150, 85, 65, 55, 53, 52, 49, 30, 31, 20, 18, 18, 17, 15],
            color: 'rgba(248, 160, 54, .8)'
        }, {
            name: 'Amount raised in $1000',
            data: [1070, 900, 500, 400, 100, 80, 60, 55, 53, 52, 49, 30, 31, 20, 18, 18, 17, 10],
            color: 'rgba(88, 110, 74, .8)'
          }]
      })
    }
  }
})
