<!DOCTYPE html>
riot.tag2('html', '<head> <title>tofuness - eex</title> <meta charset="utf-8"> <link href="favicon.ico" rel="shortcut icon" type="image/x-icon"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"> </head> <body> <div id="about"> <div id="about-title"> <span id="eex">eex</span> is a collection of web eexperiments </div> <div id="about-description"> Built by <a href="https://github.com/tofuness">Dennis Jin</a> / <a href="https://tofuness.com">tofuness.com</a>.<span class="mobile-newline"></span> Open-sourced on <a href="https://github.com/tofuness/eex">Github</a>. </div> <div id="about-list"> <a class="about-item" href="life"> Canvas Life &#8625; <span class="latest">latest</span> </a> <a class="about-item" href="satoshi"> Satoshi Visualizer &#8625; </a> <a class="about-item" href="moire"> Moiré Pattern &#8625; </a> <a class="about-item" href="springy"> Springy Letters &#8625; </a> <a class="about-item" href="einstein"> Einstein Waves &#8625; </a> <a class="about-item" href="vectorfield"> Vector Field &#8625; </a> <a class="about-item" href="book"> Studies In a Dying Culture &#8625; </a> <a class="about-item" href="sine"> Sine Wave and Circles &#8625; </a> </div> </div> </body>', '* { box-sizing: border-box; } html { overflow-x: hidden; font-family: Arial, sans-serif; background: #111; } #about-description a, #about-description a:visited { color: #fff; text-decoration: none; box-shadow: 0 1px 0 #fff; } #about-description a:hover { color: #fff; box-shadow: 0 2px 0 #fff; } #eex { cursor: default; font-weight: 700; } #about { color: #fff; text-align: center; } #about-title { padding: 40px 20px 10px 20px; font-size: 18px; } #about-description { color: #999; font-size: 12px; line-height: 1.5; } #about-list { padding-top: 40px; width: 100%; } .about-item { padding: 0 20px; overflow: hidden; display: block; margin-bottom: 20px; width: 100%; white-space: nowrap; text-overflow: ellipsis; color: #666; font-size: 82px; text-decoration: none; text-align: center; transform: translateX(0); -webkit-transition: all 240ms cubic-bezier(0.165, 0.84, 0.44, 1); transition: all 240ms cubic-bezier(0.165, 0.84, 0.44, 1); } .about-item:hover { color: #fff; transform: translateX(10px); } .latest { padding: 0 10px; background: #999; } @media (max-width : 730px) { .mobile-newline:after { content: \'\\a\'; white-space: pre; } }', '', function(opts) {
/*!
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
(function(){
  var css = function (el, prop) {
    return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
  };

  var addEvent = function (el, type, fn) {
    if (el.addEventListener)
      el.addEventListener(type, fn, false);
		else
			el.attachEvent('on'+type, fn);
  };

  var extend = function(obj,ext){
    for(var key in ext)
      if(ext.hasOwnProperty(key))
        obj[key] = ext[key];
    return obj;
  };

  window.fitText = function (el, kompressor, options) {

    var settings = extend({
      'minFontSize' : -1/0,
      'maxFontSize' : 1/0
    },options);

    var fit = function (el) {
      var compressor = kompressor || 1;

      var resizer = function () {
        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
      };

      // Call once to set.
      resizer();

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer);
    };

    if (el.length)
      for(var i=0; i<el.length; i++)
        fit(el[i]);
    else
      fit(el);

    // return set of elements
    return el;
  };
})();

    window.onload = function() {
      var items = document.querySelectorAll('.about-item');
      for (var i = 0; i < items.length; i++) {
        window.fitText(items.item(i), 1.5, {
          maxFontSize: 82,
          minFontSize: 11
        });
      }
    }
});
