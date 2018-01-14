new Vue({
  el: '#vue-container',
  template:
  `
  <div class="">
    <br>
    <div class="owl-carousel">
      <div>
        <div class="team">
          <img src="https://www.factroom.ru/wp-content/uploads/2018/01/Depositphotos_166795604_m-2015-400x400.jpg">
          <div class="team_info">
            <h5>CEO</h5>
            <h3>Vitalik Buterin</h3>
            <a href="#"><i class="flaticon-social-media-2"></i></a>
            <a href="#"><i class="flaticon-social-media-1"></i></a>
            <a href="#"><i class="flaticon-social-media"></i></a>
          </div>
        </div>
      </div>
      <div>
        <div class="team">
          <img src="https://www.factroom.ru/wp-content/uploads/2018/01/Depositphotos_166795604_m-2015-400x400.jpg">
          <div class="team_info">
            <h5>CEO</h5>
            <h3>Vitalik Buterin</h3>
            <a href="#"><i class="flaticon-social-media-2"></i></a>
            <a href="#"><i class="flaticon-social-media-1"></i></a>
            <a href="#"><i class="flaticon-social-media"></i></a>
          </div>
        </div>
      </div>
      <div>
        <div class="team">
          <img src="https://www.factroom.ru/wp-content/uploads/2018/01/Depositphotos_166795604_m-2015-400x400.jpg">
          <div class="team_info">
            <h5>CEO</h5>
            <h3>Vitalik Buterin</h3>
            <a href="#"><i class="flaticon-social-media-2"></i></a>
            <a href="#"><i class="flaticon-social-media-1"></i></a>
            <a href="#"><i class="flaticon-social-media"></i></a>
          </div>
        </div>
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
    $(".owl-carousel").owlCarousel({
      center: true,
      items:2,
      loop:true,
      margin:10,
      responsive:{
          320:{
              items:1
          },
          640:{
              items:2
          },
          720:{
              items:3
          },
          1200:{
              items:4
          }
      }
    });
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
