new Vue({
  el: '#vue-container',
  template:
  `
  <div class="">
    <br>
    <table class="table">
      <tbody>
        <tr>
          <td width="200px">Category:</td>
          <td>{{project.category}}</td>
        </tr>

        <tr>
          <td>Industry:</td>
          <td>{{project.category}}</td>
        </tr>
        <tr>
          <td>Keywords:</td>
          <td>
            <span class="badge badge-pill badge-info" v-for="keyword in project.keywords">{{keyword}}</span>
          </td>
        </tr>

        <tr>
          <td>Description:</td>
          <td><p>Marketplace based on a smart-contract and a platform for collaborative crypto-asset investment analysis.</p></td>
        </tr>
        <tr>
          <td>The formal business entity:</td>
          <td>{{project.formal | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Project homeland:</td>
          <td>{{project.homeland | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Project platform:</td>
          <td>{{project.coins | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Token platform:</td>
          <td>{{project.tokenPlatform | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Code repository:</td>
          <td><a href="https://github.com/DolphinBlockchainIntelligence" target="_blank">github</a></td>
        </tr>

        <tr>
          <td>Release date of MVP:</td>
          <td>{{project.release | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Token's ticker code:</td>
          <td>{{project.symbol | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Total emission:</td>
          <td>{{project.emission | ifEmpty}}</td>
        </tr>

        <tr>
          <td>Distribution of tokens:</td>
          <td>{{project.distribution | ifEmpty}}</td>
        </tr>
        <tr>
          <td>Your token gives the right:</td>
          <td>
            <p>{{project.tokenDescription | ifEmpty}}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
