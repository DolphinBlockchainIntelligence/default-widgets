new Vue({
  el: '#vue-container',
  template:
  `
    <table class="table">
      <tr v-for="link in project.links">
        <td><a :href="link.url" target="_blank">{{link.type}}</a></td>
      </tr>
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
