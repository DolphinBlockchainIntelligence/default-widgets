new Vue({
  el: '#vue-container',
  template:
  `
  <div class="itrend-widgets">

    <template name="peaks" v-if="id == '5a78a6d15b82e50001b5ae12'">
      <div class="itrend-widget">
        <h3>Data</h3>
        <p>Social mentions: <strong>1</strong></p>
        <p>People: <strong>1</strong></p>
        <p>Links shared: <strong>0</strong></p>
        <p>Images shared: <strong>1</strong></p>
        <p>News found: <strong>0</strong></p>
        <p>Terms tracked: <strong>1</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/data.svg');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Timeline</h3>
        <p>Today: <strong>1</strong> mentions <strong class="negative">-50%</strong></p>
        <p>This week: <strong>6</strong> mentions <strong class="negative">-57%</strong></p>
        <p>This month: <strong>21</strong> mentions</p>
        <div class="itrend-widget-ico" style="background-image: url('img/timeline.svg');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Largest audiences</h3>
        <p>Pawan Naidu: <strong>7</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/people.svg');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Most engaging authors</h3>
        <p>Ram Ayyapp: <strong>1</strong> replies</p>
        <p>Varun Tej: <strong>1</strong> replies</p>
        <p>Peaks: <strong>1</strong> replies</p>
        <div class="itrend-widget-ico" style="background-image: url('img/chat.svg');"></div>
      </div>
    </template>

    <template name="tellow" v-if="id == '5a74890501bf07000150410c'">
      <div class="itrend-widget">
        <h3>Data</h3>
        <p>Social mentions: <strong>0</strong></p>
        <p>People: <strong>0</strong></p>
        <p>Links shared: <strong>0</strong></p>
        <p>Images shared: <strong>0</strong></p>
        <p>News found: <strong>0</strong></p>
        <p>Terms tracked: <strong>1</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/data-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Timeline</h3>
        <p>Today: <strong>0</strong> mentions</p>
        <p>This week: <strong>1</strong> mentions <strong class="negative">-75%</strong></p>
        <p>This month: <strong>5</strong> mentions</p>
        <div class="itrend-widget-ico" style="background-image: url('img/timeline-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Largest audiences</h3>
      </div>
      <div class="itrend-widget">
        <h3>Most engaging authors</h3>
      </div>
    </template>

    <template name="headstart" v-if="id == '5a73628f8f45f500017ebb7b'">
      <div class="itrend-widget">
        <h3>Data</h3>
        <p>Social mentions: <strong>3</strong></p>
        <p>People: <strong>3</strong></p>
        <p>Links shared: <strong>1</strong></p>
        <p>Images shared: <strong>0</strong></p>
        <p>News found: <strong>0</strong></p>
        <p>Terms tracked: <strong>1</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/data-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Timeline</h3>
        <p>Today: <strong>3</strong> mentions <strong class="negative">-84%</strong></p></p>
        <p>This week: <strong>61</strong> mentions <strong class="positive">+1,120%</strong></p>
        <p>This month: <strong>66</strong> mentions</p>
        <div class="itrend-widget-ico" style="background-image: url('img/timeline-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Largest audiences</h3>
        <p>G. Amsterdam: <strong>2,181</strong></p>
        <p>CryptoHolland: <strong>272</strong></p>
        <p>f0nky: <strong>9</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/audience-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Most engaging authors</h3>
        <p>ICO HeadStart: <strong>2</strong> replies</p>
        <p>MrMoorfield: <strong>1</strong> replies</p>
        <p>tehMoonwalkeR: <strong>1</strong> replies</p>
        <p>Liz: <strong>1</strong> replies</p>
        <div class="itrend-widget-ico" style="background-image: url('img/engage-128.gif');"></div>
      </div>
    </template>
  </div>
  `,
  data: function data() {
    return {
      id: '',
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
    this.id = getParameterByName('id', window.location.href)
  }
})
