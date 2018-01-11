new Vue({
  el: '#vue-container',
  template:
  `
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <dl class="row">
          <dt class="col-sm-12">Links:</dt>
          <dd class="col-sm-12">
            <ul class="list-unstyled">
              <li v-for="link in project.links"><a :href="link.url">{{link.type}}</a></li>
            </ul>
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
