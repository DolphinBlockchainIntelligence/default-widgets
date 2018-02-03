var colors = ['#f98a83', '#989898', '#85f77e']
new Vue({
  el: '#top-ico',
  template:
  `
  <iframe :src="'https://widget.similarweb.com/traffic/'+url" frameborder="0" width="450" height="200"></iframe>
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
            categories: ['EOS', 'Hdac', 'Tezos', 'FileCoin', 'Sirin Labs', 'Bancor', 'The DAO', 'Polkadot', 'QASH', 'Status', 'Envion', 'Kin', 'Comsa', 'TenX', 'WAX', 'BankEx', 'Neuromation', 'DomRaider', 'Zeepin', 'Nebulas', 'Kyber Network', 'Centra', 'Enigma', 'SONM', 'Monetha', 'Basic Attention Token', 'Civic', 'Stox', 'ChainLink', 'Polybios'],
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
            data: [110671, 17257, 98077, 44547, 9722, 50803, 300294, 25008, 14689, 39338, 7168, 23857, 13002, 29095, 7728, 4355, 4130, 13809, 5446, 3341],
            color: 'rgba(248, 160, 54, .8)'
        }, {
            name: 'Amount raised in $1000',
            data: [1293298, 258000, 230396, 205886, 157886, 152000, 150000, 144046, 105000, 103000, 100012, 99415, 95614, 80000, 80000, 70600, 67451, 66080, 64449, 60000],
            color: 'rgba(88, 110, 74, .8)'
          }]
      })
    }
  }
})
