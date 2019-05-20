;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-lajitong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M865.211019 208.760604c-19.250436 0-132.933615 0-163.728992 0s-102.33062-81.864496-102.33062-81.864496l-163.728992 0c0 0-62.054311 81.864496-102.33062 81.864496-42.819225 0-124.012432 0-143.262868 0-19.250436 0-20.529569 40.932248 0 40.932248 0 0 118.384247 0 163.728992 0 61.381999 0 102.33062-81.864496 102.33062-81.864496l122.796744 0c0 0 40.596604 81.864496 102.33062 81.864496 36.759205 0 184.195116 0 184.195116 0C885.740588 249.692852 884.461455 208.760604 865.211019 208.760604z"  ></path>' +
    '' +
    '<path d="M783.346523 352.023472c0 19.010983 0 392.341736 0 429.788603 0 38.981826-40.932248 40.932248-40.932248 40.932248l-429.788603 0c0 0-40.932248-2.526543-40.932248-40.932248 0-38.933731 0-412.503938 0-429.788603 0-19.170618-40.932248-19.107173-40.932248 0 0 19.0908 0 374.418528 0 429.788603 0 81.768305 81.864496 81.864496 81.864496 81.864496l450.494181 0c0 0 61.158918-2.558265 61.158918-61.398372s0-431.084109 0-450.254727C824.278771 332.852854 783.346523 332.996117 783.346523 352.023472z"  ></path>' +
    '' +
    '<path d="M455.88854 720.413704c0-20.849864 0-350.945931 0-368.390231 0-17.427928-40.932248-20.833491-40.932248 0 0 0 0 349.314781 0 368.390231S455.88854 741.263567 455.88854 720.413704z"  ></path>' +
    '' +
    '<path d="M640.083655 720.413704c0-19.107173 0-349.219613 0-368.390231 0-17.268292-40.932248-19.0908-40.932248 0 0 17.284665 0 349.314781 0 368.390231S640.083655 739.520877 640.083655 720.413704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duihao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M924.283927 336.970638c-22.550599-53.309136-54.821583-101.18554-95.924723-142.283564-41.104163-41.104163-88.976474-73.380264-142.289704-95.92984-55.206346-23.350824-113.829512-35.189454-174.252673-35.189454s-119.051443 11.837606-174.257789 35.189454c-53.309136 22.549575-101.181447 54.825676-142.284587 95.92984-41.10314 41.098024-73.379241 88.975451-95.924723 142.283564-23.349801 55.202253-35.189454 113.834628-35.189454 174.253696 0 60.423161 11.839653 119.05042 35.189454 174.257789 22.545482 53.309136 54.821583 101.180424 95.924723 142.283564 41.10314 41.104163 88.976474 73.380264 142.284587 95.925746 55.206346 23.349801 113.834628 35.18843 174.257789 35.18843s119.046327-11.837606 174.252673-35.18843c53.31323-22.545482 101.18554-54.821583 142.289704-95.925746 41.098024-41.10314 73.374124-88.975451 95.924723-142.283564 23.349801-55.207369 35.189454-113.834628 35.189454-174.257789C959.473381 450.804243 947.633728 392.172891 924.283927 336.970638zM748.652861 391.170051 477.101165 671.438269c-5.270027 5.437849-12.345166 8.433066-19.920702 8.433066-6.970762 0-13.635555-2.599198-18.767436-7.317663L274.074146 521.505491c-11.256368-10.346649-11.998265-27.928073-1.65264-39.190581 5.238304-5.697769 12.68388-8.966209 20.428262-8.966209 6.968715 0 13.632485 2.597151 18.764366 7.313569l144.447856 132.768863 252.750491-260.864286c5.275143-5.441942 12.353352-8.438183 19.930935-8.438183 7.240915 0 14.09195 2.775206 19.293415 7.814989C759.022023 362.589109 759.298316 380.186905 748.652861 391.170051z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)