new Vue({
  el: '#vue-container',
  template:
  `
  <div class="itrend-widgets">
    <div class="itrend-widget">
      <h3>Data</h3>
      <p>Social mentions: <strong>55</strong></p>
      <p>People: <strong>37</strong></p>
      <p>People: <strong>37</strong></p>
      <p>Links shared: <strong>21</strong></p>
      <p>News found: <strong>0</strong></p>
      <p>Terms tracked: <strong>1</strong></p>
      <div class="itrend-widget-ico" style="background-image: url('img/data.svg');"></div>
    </div>
    <div class="itrend-widget">
      <h3>Timeline</h3>
      <p>Today: <strong>0</strong> mentions</p>
      <p>This week: <strong>11</strong> mentions <strong class="negative">-75%</strong></p>
      <p>This mounth: <strong>55</strong> mentions</p>
      <div class="itrend-widget-ico" style="background-image: url('img/timeline.svg');"></div>
    </div>
    <div class="itrend-widget">
      <h3>Largest audiences</h3>
      <p>Rabobank: <strong>149,379</strong></p>
      <p>Dr.Shivarajkumar FC: <strong>11,084</strong></p>
      <p>Business Insider NL: <strong>8,036</strong></p>
      <p>Herwin Thole: <strong>2,954</strong></p>
      <p>Baaz Magazine: <strong>1,995</strong></p>
      <div class="itrend-widget-ico" style="background-image: url('img/people.svg');"></div>
    </div>
    <div class="itrend-widget">
      <h3>Most engaging authors</h3>
      <p>Peaks: <strong>50</strong> replies</p>
      <p>KKDSFC: <strong>13</strong> replies</p>
      <div class="itrend-widget-ico" style="background-image: url('img/chat.svg');"></div>
    </div>
    <!-- <div class="itrend-widgets-footer">
      <span>powered by</span>
      <img src="img/itrend-logo.png">
    </div> -->
  </div>
  `,
  data: function data() {
    return {
      url: '',
      data: [
        {
          'title': 'Data'
        }
      ]
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
