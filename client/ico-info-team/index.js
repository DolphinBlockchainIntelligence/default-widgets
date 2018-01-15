new Vue({
  el: '#vue-container',
  template:
  `
  <div class="">
    <br>
    <div class="owl-carousel">
      <div>
        <div class="team">
          <img src="https://s3.amazonaws.com/icofaces/13bcabb8b9eb954b4ce7a92de6c7ee9638004d30.jpg">
          <div class="team_info">
            <h5>CEO</h5>
            <h3>Sasha Ivanov</h3>
            <a href="#"><i class="flaticon-social-media-2"></i></a>
            <a href="#"><i class="flaticon-social-media-1"></i></a>
            <a href="#"><i class="flaticon-social-media"></i></a>
          </div>
        </div>
      </div>
      <div>
        <div class="team">
          <img src="https://s3.amazonaws.com/icofaces/03d471300effbea2f9e681eadc804cdb3b564134.jpg">
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
          <img src="https://s3.amazonaws.com/icofaces/9ee1b5be9a66f6713dbc84192328a95d3a16336e.jpg">
          <div class="team_info">
            <h5>CEO</h5>
            <h3>Patrick Dai</h3>
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
