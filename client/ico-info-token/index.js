new Vue({
  el: '#vue-container',
  template:
  `
  <table class="table">
    <tbody>
      <tr>
        <td>Name of the token:</td>
        <td>Dolphin BI</td>
      </tr>
      <tr>
        <td>Token's ticker code:</td>
        <td>DOBI</td>
      </tr>
      <tr>
        <td>Token platform:</td>
        <td>Ethereum</td>
      </tr>
      <tr>
        <td>Your token gives the right:</td>
        <td>to pay for subscription</td>
      </tr>
      <tr>
        <td>Total emission:</td>
        <td>61500000</td>
      </tr>
      <tr>
        <td>Distribution of tokens:</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Extra emission:</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
  `,
  data: function data() {
    return {
      project: {}
    }
  },
  mounted () {
    var getParameterByName = function(name, url) {
      if (!url) url = window.location.href
      name = name.replace(/[\[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
    id = getParameterByName('id', window.location.href)
    axios.get('/base/' + id, {
    }).then((response) => {
      console.log(response.data)
      this.project = response.data.current
      console.log(this.project)
    }, (err) => {
      console.log(err)
    })
  },
  methods: {

  },
  filters: {
    ifEmpty: function (value) {
      if (!value) return '-'
      return value
    }
  }
})
