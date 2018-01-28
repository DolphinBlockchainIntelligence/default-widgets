new Vue({
  el: '#vue-container',
  template:
  `
  <div>
    <div class="opinions_average">
      <div class="opinions_average_count">
        <p>{{average.toFixed(1)}}</p>
        <span>based on {{count}} experts opinions</span>
      </div>
    </div>
  </div>
  `,
  data: function data() {
    return {
      id: '',
      average: 0,
      count: 0
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
    this.id = id
    axios.get('/base/rating/' + id, {
    }).then((response) => {
      this.count = response.data.rating.length
       var parameterSum = 0
       var parameterCount = 0
       response.data.rating.forEach(function(opinion){
        opinion._array.forEach(function(parameter){
          parameterSum += parameter.value
          parameterCount += 1
        })
       })
       if (parameterCount != 0) {
        this.average = parameterSum / parameterCount
       }
    }, (err) => {
      console.log(err)
    })
  },
  computed: {
    projectComputed: function() {
      try {
        var projectComputed = this.project
        projectComputed.links.forEach(function(link){
          link.dashedType = 'icon-' + link.type.toLowerCase().split(' ').join('-')
        })
        return projectComputed
      } catch(err) {}
    }
  },
  filters: {
    ifEmpty: function (value) {
      if (!value) return '-'
      return value
    }
  }
})
