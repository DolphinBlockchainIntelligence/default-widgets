new Vue({
  el: '#vue-container',
  template:
  `
    <table class="table">
      <tbody>
        <tr>
          <td>Start:</td>
          <td>01.10.2017</td>
        </tr>
        <tr>
          <td>Finish:</td>
          <td>{{project.release | ifEmpty}} {{project.release | ifEmpty}}</td>
        </tr>
        <tr>
          <td>Token to sell:</td>
          <td>500000</td>
        </tr>
        <tr>
          <td>Softcap:</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Hardcap:</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Soft/hardcap coin:</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Actually raised:</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Actual finish date:</td>
          <td>01.10.2017</td>
        </tr>
        <tr>
          <td>Acceptable coins:</td>
          <td>ETH</td>
        </tr>
        <tr>
          <td>Special requirements:</td>
          <td>-</td>
        </tr>
        <tr>
          <td>ERC20 token address:</td>
          <td>0x42dd5dCb38c16Db5029ECDbb56166cD7846aC3B4</td>
        </tr>
        <tr>
          <td>Average price:</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Average price currency:</td>
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
