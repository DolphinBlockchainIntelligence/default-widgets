new Vue({
  el: '#vue-container',
  template:
  `
  <div>
    <div class="opinions">
      <div class="opinion open">
        <div class="opinion_head">
          <div class="opinion_name active"><span>Timothy Papandopolus</span></div>

            <div class="rating">
              <div class="rating_marker">
                <div class="rating_marker_empty"></div>
                <div class="rating_marker_full" style="width: 20%"></div>
                <div class="rating_text">expert rating</div>
              </div>
            </div>

            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
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
              <p>Idea is quite qood. Team is weak (not a lot of competence in marketing for such ind of project), business model and addressable market is also weak, tech is good - MVP is available and works fine, a lot of commits, code quality is good.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="opinion">
        <div class="opinion_head">
          <div class="opinion_name active"><span>Lee Chen</span></div>

            <div class="rating">
              <div class="rating_marker">
                <div class="rating_marker_empty"></div>
                <div class="rating_marker_full" style="width: 20%"></div>
                <div class="rating_text">expert rating</div>
              </div>
            </div>

            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">-</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 0%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
              </div>
            </div>
            <div class="count">
              <div class="count_info">3</div>
              <div class="count_marker">
                <div class="count_marker_empty"></div>
                <div class="count_marker_full" style="width: 10%"></div>
                <div class="count_text">text</div>
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
              <p>Idea is quite qood. Team is weak (not a lot of competence in marketing for such ind of project), business model and addressable market is also weak, tech is good - MVP is available and works fine, a lot of commits, code quality is good.</p>
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

    $('.opinion_head').on('click', function(){
      $(this).parent().toggleClass('open')
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
