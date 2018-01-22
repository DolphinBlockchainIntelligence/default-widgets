new Vue({
  el: '#vue-container',
  template:
  `
  <div>
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
              <div v-if="project.category">
                <h6>Category</h6>
                <p>{{project.category}}</p>
              </div>
              <div v-if="project.industry">
                <h6>Industry</h6>
                <p>{{project.industry}}</p>
              </div>
              <div v-if="project.keywords">
                <h6>Keywords</h6>
                <p>
                  <span class="badge badge-pill badge-info" v-for="keyword in project.keywords">{{keyword}}</span>
                </p>
              </div>
              <div v-if="project.hashtags">
                <h6>Hashtags</h6>
                <p>
                  <span class="badge badge-pill badge-info" v-for="hashtag in project.hashtags">{{hashtag}}</span>
                </p>
              </div>
              <div v-if="project.formal">
                <h6>The formal business entity</h6>
                <p>{{project.formal}}</p>
              </div>
              <div v-if="project.homeland">
                <h6>Project homeland</h6>
                <p>{{project.homeland}}</p>
              </div>
            </div>
            <div class="project_info_descr">
              <div v-if="project.platform">
                <h6>Project platform</h6>
                <p>{{project.platform}}</p>
              </div>
              <div v-if="project.status">
                <h6>Project status</h6>
                <p>{{project.status}}</p>
              </div>
              <div v-if="project.description">
                <h6>Description</h6>
                <p>{{project.description}}</p>
              </div>
            </div>
          </div>
          <div class="project_actions">
            <a :href="'/base/upload/'+project.digestReport" class="btn btn-primary" v-if="project.digestReport" target="_blank">Digest</a>
            <a href="https://presale.dolphin.bi/orderreport" class="btn btn-outline-primary" v-else target="_blank">Digest</a>
            <a :href="'/base/upload/'+project.basicReport" class="btn btn-primary" v-if="project.basicReport" target="_blank">Basic</a>
            <a href="https://presale.dolphin.bi/orderreport" class="btn btn-outline-primary" v-else target="_blank">Basic</a>
            <a :href="'/base/upload/'+project.detailedReport" class="btn btn-primary" v-if="project.detailedReport" target="_blank">Detailed</a>
            <a href="https://presale.dolphin.bi/orderreport" class="btn btn-outline-primary" v-else target="_blank">Detailed</a>
            <div class="icons" v-if="projectComputed.links">
              <a :href="link.url" v-for="link in projectComputed.links" :class="link.dashedType" target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs_content_wrap" id="2">
        <div v-if="project.tokenName">
          <h6>Name of the token</h6>
          <p>{{project.tokenName}}</p>
        </div>
        <div v-if="project.symbol">
          <h6>Token's ticker code</h6>
          <p>{{project.symbol}}</p>
        </div>
        <div v-if="project.tokenPlatform">
          <h6>Project platform</h6>
          <p>{{project.tokenPlatform}}</p>
        </div>
        <div v-if="project.tokenDescription">
          <h6>Your token gives the right</h6>
          <p>{{project.tokenDescription}}</p>
        </div>
        <div v-if="project.emission">
          <h6>Total emission</h6>
          <p>{{project.emission}}</p>
        </div>
        <div v-if="project.distribution">
          <h6>Distribution of tokens</h6>
          <p>{{project.distribution}}</p>
        </div>
        <div v-if="project.extraemission">
          <h6>Extra emission</h6>
          <p v-for="extraEm in project.extraemission">{{extraEm}}</p>
        </div>
      </div>
      <div class="tabs_content_wrap" id="3">
        <div v-if="project.legalname">
          <h6>Legal Entity Name</h6>
          <p>{{project.legalname}}</p>
        </div>
        <div v-if="project.legallocation">
          <h6>Legal Entity Location</h6>
          <p>{{project.legallocation}}</p>
        </div>
        <div v-if="project.legalid">
          <h6>Legal Entity ID</h6>
          <p>{{project.legalid}}</p>
        </div>
        <div v-if="project.legaldate">
          <h6>Date of registration</h6>
          <p>{{project.legaldate}}</p>
        </div>
      </div>
      <div class="tabs_content_wrap" id="4" v-if="project.team">
        <div class="team" v-for="person in project.team">
          <div class="person">
            <div class="person_img" v-if="person.photo">
              <img :src="'/base/upload/'+person.photo">
            </div>
            <div class="person_info">
              <h3 v-if="person.name">{{person.name}}</h3>
              <h5 v-if="person.role">{{person.role}}</h5>
              <br>
              <div class="icons">
                <a :href="person.facebook" class="icon-facebook" target="_blank" v-if="person.facebook"></a>
                <a :href="person.twitter" class="icon-twitter" target="_blank" v-if="person.twitter"></a>
                <a :href="person.linkedin" class="icon-linkedin" target="_blank" v-if="person.linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs_content_wrap" id="5">
        <div class="events" v-for="sale in project.sales">
          <div class="event">
            <div class="event_head">
              <span class="event_type" v-if="sale.type">{{sale.type}}</span>
              <span class="event_start" v-if="sale.start">{{sale.start}}</span>
              <span class="event_end" v-if="sale.end">{{sale.end}}</span>
              <div class="event_arrow">
                <span><i class="icon-down-open"></i></span>
              </div>
            </div>
            <div class="event_body">
              <div class="event_info">
                <div v-if="sale.tosell">
                  <h6>Token to sell</h6>
                  <p>{{sale.tosell}}</p>
                </div>
                <div v-if="sale.softCap">
                  <h6>Softcap</h6>
                  <p>{{sale.softCap}} {{sale.caps}}</p>
                </div>
                <div v-if="sale.hardCap">
                  <h6>Hardcap</h6>
                  <p>{{sale.hardCap}} {{sale.caps}}</p>
                </div>
                <div v-if="sale.raised">
                  <h6>Actually raised</h6>
                  <p>{{sale.raised}}</p>
                </div>
                <div v-if="sale.real">
                  <h6>Actual finish date</h6>
                  <p>{{sale.real}}</p>
                </div>
                <div v-if="sale.acceptable">
                  <h6>Acceptable coins</h6>
                  <p>
                    <span class="badge badge-pill badge-info" v-for="coin in sale.acceptable">{{coin}}</span>
                  </p>
                </div>
                <div v-if="sale.erc20addr">
                  <h6>ERC20 token address</h6>
                  <p>{{sale.erc20addr}}</p>
                </div>
                <div v-if="sale.course">
                  <h6>Average price</h6>
                  <p>{{sale.course}} BTC</p>
                </div>
              </div>
              <div class="event_descr" v-if="sale.requirements">
                <h6>special requirements</h6>
                <p v-for="requirement in sale.requirements">{{requirement}}</p>
              </div>
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
    $(document).on('click', '.tabs a', function(e){
      e.preventDefault()
      var target = $(this).attr('href')
      $('.tabs a').removeClass('active')
      $(this).addClass('active')

      $('.tabs_content .tabs_content_wrap').removeClass('active')
      $(target).addClass('active')
    })

    $(document).on('click', '.event_head', function(){
     $(this).parent().toggleClass('open')
    });
  },
  computed: {
    projectComputed: function() {
      // try {
        var projectComputed = this.project

        if (projectComputed.links && projectComputed.links != []) {
          projectComputed.links.forEach(function(link){
            link.dashedType = 'icon-' + link.type.toLowerCase().split(' ').join('-')
          })
        }

        projectComputed.sales.forEach(function(sale){
          sale.start = moment(sale.start).format('D MMM YYYY')
          sale.end = moment(sale.end).format('D MMM YYYY')
          sale.real = moment(sale.real).format('D MMM YYYY')
        })

        projectComputed.legaldate = moment(projectComputed.legaldate).format('D MMM YYYY')

        return projectComputed
      // } catch(err) {}
    }
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
