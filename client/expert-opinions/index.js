new Vue({
  el: '#vue-container',
  
  template:
  `
  <div>
    <div class="opinions">
      <div class="opinion" v-for="opinion in project.rating">
        <div class="opinion_head">
          <div class="opinion_name active"><span>{{opinion.name}}</span></div>
            <div class="rating">
              <div class="rating_marker">
                <star-rating :increment="1" :fixed-points="2" :read-only="false" :star-size="22" :border-width="1" :show-rating="false" border-color="#429eae" inactive-color="#fff" active-color="#429eae" v-model="legal"></star-rating>
                <div class="rating_text">expert rating</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.idea}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.idea + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">idea</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.team}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.team + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">team</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.busmodel}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.busmodel + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">busmodel</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.market}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.market + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">market</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.tech}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.tech + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">tech</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.code}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.code + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">code</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">{{opinion.legal}}</div>
              <div class="count_marker">
                <div class="count_marker_empty">
                  <img :src="'img/mark_' + opinion.legal + '.svg'" class="count_marker_cell">
                </div>
                <div class="count_text">legal</div>
              </div>
            </div>

          <div class="opinion_arrow">
            <span><i class="icon-down-open"></i></span>
          </div>
        </div>
        <div class="opinion_body">
          <div class="opinion_body_wrap">
            <div class="opinion_info">
              <div class="person">
                <div class="person_img">
                  <img src="https://s3.amazonaws.com/icofaces/03d471300effbea2f9e681eadc804cdb3b564134.jpg">
                  <div class="icons">
                    <a href="#" class="icon-facebook"></a>
                    <a href="#" class="icon-twitter"></a>
                  </div>
                </div>
                
                <div class="person_info">
                  <h6>profile</h6>
                  <p>Experienced crypto investor, winner of Melonport portfolio managers competition</p>

                  <h6>expert rating details</h6>
                  <ul>
                    <li><a href="#">50 votes</a></li>
                    <li><a href="#">25 feedbacks</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="opinion_descr">
              <h6>review</h6>
              <p>{{opinion.review}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a class="btn btn-outline-info" :href="'/#/opinion/add/'+id" target="_top">Add your opinion</a>
    </div>
  </div>
  `,

  data: function data() {

    return {
      id: '',
      legal: 4,
      project: {}
    }
    
  },
  components: {
    'star-rating': VueStarRating.default
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
      // console.log(response.data)
      this.project = response.data
      // console.log(this.project)
    }, (err) => {
      console.log(err)
    })

    $(document).on('click', '.opinion_arrow, .opinion_name, .count_marker', function(){
      $(this).parents('.opinion').toggleClass('open')
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
  methods: {
    
    
  },
  filters: {
    ifEmpty: function (value) {
      if (!value) return '-'
      return value
    }
  }
})
