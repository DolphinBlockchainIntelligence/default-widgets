new Vue({
  el: '#vue-container',
  template:
  `
  <div class="iframe-wrapper">
    <iframe :src="'https://widget.similarweb.com/traffic/'+url" frameborder="0" width="100%" height="800"></iframe>
  </div>
  `,
  data: function data() {
    return {
      url: ''
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
    this.url = getParameterByName('url', window.location.href)
  }
})
