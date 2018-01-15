new Vue({
  el: '#vue-container',
  template:
  `
  <table class="table">
    <tbody>
      <tr>
        <td>Name of the stage:</td>
        <td>{{project.stages[0].type}}}</td>
      </tr>
      <tr>
        <td>Name of the token:</td>
        <td>{{project.stages[0].type}}</td>
      </tr>
        <tr>
        <td>Sale start - finish dates:</td>
        <td>{{project.release | ifEmpty}} {{project.release | ifEmpty}}</td>
      </tr>
        <tr>
        <td>SoftCap:</td>
        <td>{{project.symbol | ifEmpty}}</td>
      </tr>
        <tr>
        <td>HardCap:</td>
        <td>{{project.symbol | ifEmpty}}</td>
      </tr>
        <tr>
        <td>Acceptable coins:</td>
        <td>{{project.symbol | ifEmpty}}</td>
      </tr>
        <tr>
        <td>Special requirements:</td>
        <td>{{project.symbol | ifEmpty}}</td>
      </tr>
        <tr>
        <td>Raised cap:</td>
        <td>{{project.symbol | ifEmpty}}</td>
      </tr>
        <tr>
        <td>Actual finish date:</td>
        <td>{{project.release | ifEmpty}} {{project.release | ifEmpty}}</td>
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
