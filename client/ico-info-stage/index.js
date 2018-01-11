new Vue({
  el: '#vue-container',
  template:
  `
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <dl class="row">
          <dt class="col-sm-5">Sale type:</dt>
          <dd class="col-sm-7">{{project.category}}</dd>

          <dt class="col-sm-5">Sale start - finish dates:</dt>
          <dd class="col-sm-7">{{project.release | ifEmpty}} {{project.release | ifEmpty}}</dd>

          <dt class="col-sm-5">SoftCap:</dt>
          <dd class="col-sm-7">{{project.symbol | ifEmpty}}</dd>

          <dt class="col-sm-5">HardCap:</dt>
          <dd class="col-sm-7">{{project.symbol | ifEmpty}}</dd>

          <dt class="col-sm-5">Acceptable coins:</dt>
          <dd class="col-sm-7">{{project.symbol | ifEmpty}}</dd>

          <dt class="col-sm-5">Special requirements:</dt>
          <dd class="col-sm-7">{{project.symbol | ifEmpty}}</dd>

          <dt class="col-sm-5">Raised cap:</dt>
          <dd class="col-sm-7">{{project.symbol | ifEmpty}}</dd>

          <dt class="col-sm-5">Actual finish date:</dt>
          <dd class="col-sm-7">{{project.release | ifEmpty}} {{project.release | ifEmpty}}</dd>
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
