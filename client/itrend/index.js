new Vue({
  el: '#vue-container',
  template:
  `
  <div class="itrend-widgets">


    <template v-if="id == '5a78a6d15b82e50001b5ae12'">
      <div class="itrend-widget">
        <h3>Data</h3>
        <p>Social mentions: <strong>55</strong></p>
        <p>People: <strong>37</strong></p>
        <p>Links shared: <strong>21</strong></p>
        <p>Images shared: <strong>3</strong></p>
        <p>News found: <strong>0</strong></p>
        <p>Terms tracked: <strong>1</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/data.svg');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Timeline</h3>
        <p>Today: <strong>0</strong> mentions</p>
        <p>This week: <strong>11</strong> mentions <strong class="negative">-75%</strong></p>
        <p>This month: <strong>55</strong> mentions</p>
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
        <p>Rabobank: <strong>3</strong> replies</p>
        <p>The Podium: <strong>3</strong> replies</p>
        <p>Stella Braber: <strong>3</strong> replies</p>
        <div class="itrend-widget-ico" style="background-image: url('img/chat.svg');"></div>
      </div>
    </template>


    <template v-if="id == '5a74890501bf07000150410c'">
      <div class="itrend-widget">
        <h3>Data</h3>
        <p>Social mentions: <strong>6</strong></p>
        <p>People: <strong>5</strong></p>
        <p>Links shared: <strong>4</strong></p>
        <p>Images shared: <strong>0</strong></p>
        <p>News found: <strong>0</strong></p>
        <p>Terms tracked: <strong>1</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/data-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Timeline</h3>
        <p>Today: <strong>0</strong> mentions</p>
        <p>This week: <strong>4</strong> mentions <strong class="positive">+100%</strong></p>
        <p>This month: <strong>6</strong> mentions</p>
        <div class="itrend-widget-ico" style="background-image: url('img/timeline-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Largest audiences</h3>
        <p>Martijn Pennekamp: <strong>8,391</strong></p>
        <p>Starten.nl: <strong>390</strong></p>
        <p>Sijbrand Tieleman: <strong>379</strong></p>
        <p>Stella Braber: <strong>214</strong></p>
        <p>Peaks: <strong>191</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/audience-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Most engaging authors</h3>
        <p>Rabobank: <strong>3</strong> replies</p>
        <p>Peaks: <strong>3</strong> replies</p>
        <p>Stella Braber: <strong>2</strong> replies</p>
        <div class="itrend-widget-ico" style="background-image: url('img/engage-128.gif');"></div>
      </div>
    </template>


    <template v-if="id == '5a73628f8f45f500017ebb7b'">
      <div class="itrend-widget">
        <h3>Data</h3>
        <p>Social mentions: <strong>7</strong></p>
        <p>People: <strong>7</strong></p>
        <p>Links shared: <strong>12</strong></p>
        <p>Images shared: <strong>0</strong></p>
        <p>News found: <strong>0</strong></p>
        <p>Terms tracked: <strong>1</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/data-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Timeline</h3>
        <p>Today: <strong>7</strong> mentions <strong class="positive">+600%</strong></p></p>
        <p>This week: <strong>12</strong> mentions <strong class="positive">+9%</strong></p>
        <p>This month: <strong>24</strong> mentions</p>
        <div class="itrend-widget-ico" style="background-image: url('img/timeline-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Largest audiences</h3>
        <p>mocho17: <strong>90,898</strong></p>
        <p>G. Amsterdam: <strong>2,179</strong></p>
        <p>leogarzon: <strong>418</strong></p>
        <p>tim moorehead: <strong>389</strong></p>
        <p>Liz: <strong>120</strong></p>
        <div class="itrend-widget-ico" style="background-image: url('img/audience-128.gif');"></div>
      </div>
      <div class="itrend-widget">
        <h3>Most engaging authors</h3>
        <p>mocho17: <strong>5</strong> replies</p>
        <p>CryptOrangutang: <strong>1</strong> replies</p>
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
