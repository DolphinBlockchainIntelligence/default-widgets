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
            </div>
            <div class="project_info_descr">
              <h6>Description:</h6>
              <p>{{project.tokenDescription | ifEmpty}}</p>
            </div>
          </div>
          <div class="project_actions">
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
        4
      </div>
      <div class="tabs_content_wrap" id="5">
        <div class="events">
          <div class="event open">
            <div class="even head">
              <span class="event_type">Sale</span>
              <span class="event_start">1 Jul 2017</span>
              <span class="event_end">15 Jul 2017</span>
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
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <dl class="row">
          

         

          

          

          <dt class="col-sm-5">Project homeland:</dt>
          <dd class="col-sm-7">{{project.homeland | ifEmpty}}</dd>

          <dt class="col-sm-5">'Token's ticker code:</dt>
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
          
          <dt class="col-sm-12">Links:</dt>
          <dd class="col-sm-12">
            <ul class="list-unstyled">
              <li v-for="link in project.links"><a :href="link.url" target="_blank">{{link.type}}</a></li>
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
    $('.tabs a').on('click', function(e){
      e.preventDefault()
      var target = $(this).attr('href')
      $('.tabs a').removeClass('active')
      $(this).addClass('active')

      $('.tabs_content .tabs_content_wrap').removeClass('active')
      $(target).addClass('active')
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
