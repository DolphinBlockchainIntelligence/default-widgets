new Vue({
  el: '#vue-container',
  template:
  `
  <div class="container">

    <div class="tabs">
      <a href="#1" class="active">Project</a>
      <a href="#2">Token</a>
      <a href="#3">Legal</a>
      <a href="#4">Team</a>
      <a href="#5">Events</a>
    </div>
    <div class="tabs_content">
      <div class="tabs_content_wrap active" id="1">
        <div class="project_wrap">
          <div class="project_info">
            <div class="project_info_main">
              <h6>Category:</h6>
              <p>{{project.category}}</p>

              <h6>Industry:</h6>
              <p>{{project.category}}</p>

              <h6>Keywords:</h6>
              <p>
                <span class="badge badge-pill badge-info" v-for="keyword in project.keywords">{{keyword}}</span>
              </p>

              <h6>Project platform:</h6>
              <p>{{project.coins | ifEmpty}}</p>

              <h6>Release date of MVP:</h6>
              <p>{{project.release | ifEmpty}}</p>

              <h6>Project homeland:</h6>
              <p>{{project.homeland | ifEmpty}}</p>

              <h6>'Token's ticker code:</h6>
              <p>{{project.symbol | ifEmpty}}</p>

              <h6>Token platform:</h6>
              <p>{{project.tokenPlatform | ifEmpty}}</p>

              <h6>Total emission:</h6>
              <p>{{project.emission | ifEmpty}}</p>

              <h6>Distribution of tokens:</h6>
              <p>{{project.distribution | ifEmpty}}</p>

              <h6>The formal business entity:</h6>
              <p>{{project.formal | ifEmpty}}</p>
            </div>
            <div class="project_info_descr">
              <h6>Description:</h6>
              <p>{{project.tokenDescription | ifEmpty}}</p>
            </div>
          </div>
          <div class="project_actions">
            <button type="button" class="btn btn-primary">Digest</button>
            <button type="button" class="btn btn-outline-primary">Basic</button>
            <button type="button" class="btn btn-outline-primary">Detailed</button>
            <h6>Links</h6>
            <ul class="list-unstyled">
              <li v-for="link in project.links"><a :href="link.url" target="_blank">{{link.type}}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tabs_content_wrap" id="2">
        2
      </div>
      <div class="tabs_content_wrap" id="3">
        3
      </div>
      <div class="tabs_content_wrap" id="4">
        <div class="team">
          <div class="person">
            <div class="person_img">
              <img src="https://s3.amazonaws.com/icofaces/03d471300effbea2f9e681eadc804cdb3b564134.jpg">
            </div>
            <div class="person_info">
              <h5>CEO</h5>
              <h3>Vitalik Buterin</h3>
              <a href="#"><i class="flaticon-social-media-2"></i></a>
              <a href="#"><i class="flaticon-social-media-1"></i></a>
              <a href="#"><i class="flaticon-social-media"></i></a>
            </div>
          </div>
          <div class="person">
            <div class="person_img">
              <img src="https://s3.amazonaws.com/icofaces/03d471300effbea2f9e681eadc804cdb3b564134.jpg">
            </div>
            <div class="person_info">
              <h5>CEO</h5>
              <h3>Vitalik Buterin</h3>
              <a href="#"><i class="flaticon-social-media-2"></i></a>
              <a href="#"><i class="flaticon-social-media-1"></i></a>
              <a href="#"><i class="flaticon-social-media"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs_content_wrap" id="5">
        <div class="events">
          <div class="event open">
            <div class="event_head">
              <span class="event_type">Sale</span>
              <span class="event_start">1 Jul 2017</span>
              <span class="event_end">15 Jul 2017</span>
              <div class="event_arrow">
                <span><i>></i></span>
              </div>
            </div>
            <div class="event_body">
              <h6>Category:</h6>
              <p>{{project.category}}</p>

              <h6>Industry:</h6>
              <p>{{project.category}}</p>
            </div>
          </div>
          <div class="event">
            <div class="event_head">
              <span class="event_type">Presale</span>
              <span class="event_start">1 Jul 2017</span>
              <span class="event_end">15 Jul 2017</span>
              <div class="event_arrow">
                <span><i>></i></span>
              </div>
            </div>
            <div class="event_body">
              <h6>Category:</h6>
              <p>{{project.category}}</p>

              <h6>Industry:</h6>
              <p>{{project.category}}</p>
            </div>
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
    $('.tabs a').on('click', function(e){
      e.preventDefault()
      var target = $(this).attr('href')
      $('.tabs a').removeClass('active')
      $(this).addClass('active')

      $('.tabs_content .tabs_content_wrap').removeClass('active')
      $(target).addClass('active')
    })

    $('.event_head').on('click', function(){
      $(this).parent().toggleClass('open')
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
