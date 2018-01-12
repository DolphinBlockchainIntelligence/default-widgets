new Vue({
  el: '#vue-container',
  template:
  `
  <div class="">
    <br>
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <dl class="row">
          <dt class="col-sm-5">Category:</dt>
          <dd class="col-sm-7">{{project.category}}</dd>

          <dt class="col-sm-5">Keywords:</dt>
          <dd class="col-sm-7">
            <span class="badge badge-pill badge-info" v-for="keyword in project.keywords">{{keyword}}</span>
          </dd>

          <dt class="col-sm-5">Project platform:</dt>
          <dd class="col-sm-7">{{project.coins | ifEmpty}}</dd>

          <dt class="col-sm-5">Release date of MVP:</dt>
          <dd class="col-sm-7">{{project.release | ifEmpty}}</dd>

          <dt class="col-sm-5">Project homeland:</dt>
          <dd class="col-sm-7">{{project.homeland | ifEmpty}}</dd>

          <dt class="col-sm-5">Token's ticker code:</dt>
          <dd class="col-sm-7">{{project.symbol | ifEmpty}}</dd>

          <dt class="col-sm-5">Token platform:</dt>
          <dd class="col-sm-7">{{project.tokenPlatform | ifEmpty}}</dd>

          <dt class="col-sm-5">Total emission:</dt>
          <dd class="col-sm-7">{{project.emission | ifEmpty}}</dd>

          <dt class="col-sm-5">Distribution of tokens:</dt>
          <dd class="col-sm-7">{{project.distribution | ifEmpty}}</dd>

          <dt class="col-sm-5">The formal business entity:</dt>
          <dd class="col-sm-7">{{project.formal | ifEmpty}}</dd>
        </dl>
      </div>
      <div class="col-lg-6 col-sm-12">
        <dl class="row">
          <dt class="col-sm-12">Your token gives the right:</dt>
          <dd class="col-sm-12">
            <p>{{project.tokenDescription | ifEmpty}}</p>
          </dd>
        </dl>
      </div>
    </div>
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
