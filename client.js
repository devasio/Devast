var e, i, _, o, d, t, n, r, g, s, l, m, c, u, p = window.navigator.userAgent
  .toLowerCase(),
  L = -1 !== p.indexOf("isTouchScreen") || -1 !== p.indexOf("android") || -1 !==
  p.indexOf("ipad") || -1 !== p.indexOf("iphone") || -1 !== p.indexOf("ipod") ||
  -1 !== p.indexOf("kindle") || -1 !== p.indexOf("silk/") ? 1 : 0;
if (1 === L) {
  var E = window.document.createElement("meta");
  E.name = "viewport", E.content = "initial-scale=1.0 maximum-scale=1.0", window
    .document.getElementsByTagName("head")[0].appendChild(E)
}
localStorage2 = null;
try {
  localStorage2 = window.localStorage, localStorage2.setItem("LapaMauve", "1"),
    localStorage2.getItem("LapaMauve")
} catch (ri) {
  storage = {}, localStorage2 = {}, localStorage2.setItem = function(e, i) {
    storage[e] = i
  }, localStorage2.getItem = function(e) {
    return storage[e] === window.undefined ? null : storage[e]
  }
}
var w, f = 0,
  b = 0,
  h = 1,
  y = 100,
  v = 1,
  A = function() {
    var a = 5,
      p = 0,
      L = 0,
      E = 0,
      w = 0,
      S = new window.Array(a),
      R = {
        resizeMethod: 1,
        size: window.innerWidth,
        aliasing: !0,
        deviceRatio: window.devicePixelRatio || 1,
        scheduledRatio: window.devicePixelRatio || 1,
        backingStoreRatio: 1,
        forceResolution: 0,
        ratio: 0,
        ratioX: 1,
        ratioY: 1,
        can: "can",
        bod: "bod"
      };

    function T() {
      var a, p, L;
      0 === R.resizeMethod ? window.innerWidth > window.innerHeight ? (a =
          window.innerHeight / window.innerWidth, p = R.size, L = window.Math
          .floor(p * a)) : (a = window.innerWidth / window.innerHeight, L = R
          .size, p = window.Math.floor(L * a)) : (p = window.innerWidth, L =
          window.innerHeight), i = p, _ = L, o = window.Math.floor(i / 2), d =
        window.Math.floor(_ / 2), t = window.Math.floor(i / 4), n = window.Math
        .floor(_ / 4), R.ratioX = i / window.innerWidth, R.ratioY = _ / window
        .innerHeight, a = R.scheduledRatio / R.backingStoreRatio, 0 !== R
        .ratio && (a *= R.ratio), e.width = i * a, e.height = _ * a, 1 === R
        .resizeMethod && (h = window.Math.max(L / (11 * R.size / 16), p / R
          .size), e.style.width = p + "px", e.style.height = L + "px"), r = i /
        h, g = _ / h, s = o / h, l = d / h, m = t / h, c = n / h, u.scale(a, a),
        P(u, R.aliasing), W.update()
    }

    function M(e) {
      window.requestAnimationFrame(M), e !== window.undefined && (f = e - b, b =
          e),
        function() {
          if (L++, (p += f) >= 1e3) {
            if (E = 1e3 * L / p, S[w] = E, ++w === a) {
              for (var e = 0, i = 0; i < a; i++) e += S[i];
              e /= a;
              var _ = R.deviceRatio / R.backingStoreRatio;
              0 === R.forceResolution && 2 === _ && window.Math.abs(y - e) <
                5 && (e < 22 && y < 22 ? 1 === v ? (v = 2, R.scheduledRatio = R
                    .deviceRatio / 2, T()) : 2 === v && (v = 3, R
                    .scheduledRatio = R.deviceRatio / 3, T()) : R.deviceRatio >
                  R.scheduledRatio && e + y > 119 && (2 === v ? (v = 1, R
                    .scheduledRatio = R.deviceRatio, T()) : 3 === v && (v = 2,
                    R.scheduledRatio = R.deviceRatio / 2, T()))), y = e, w = 0
            }
            p = 0, L = 0
          }
        }(), W.draw()
    }

    function I(e, i) {
      e.imageSmoothingEnabled = i, e.webkitImageSmoothingEnabled = i, e
        .mozImageSmoothingEnabled = i, e.msImageSmoothingEnabled = i, e
        .oImageSmoothingEnabled = i
    }

    function P(e, i) {
      window.document.getElementById(R.can).style.imageRendering = !1 === i ?
        "pixelated" : "auto", I(e, i)
    }
    var W = window.undefined;

    function F(e) {
      W = e
    }

    function N() {
      this.isLoaded = 1, this.wh = this.width / 2, this.h2 = this.height / 2
    }

    function x() {
      this.isLoaded = 0
    }

    function C(e) {
      return {
        src: e,
        img: {
          isLoaded: 0
        }
      }
    }
    return {
      options: R,
      initAnimatedCanvas: function(i, _, a, o, d, t, n) {
        F(i), _ !== window.undefined && (R.resizeMethod = _), a !== window
          .undefined && (R.can = a), o !== window.undefined && (R.bod = o),
          d !== window.undefined && (R.size = d), t !== window.undefined && (R
            .ratio = t), n !== window.undefined && (R.aliasing = n), e =
          window.document.getElementById(R.can), u = e.getContext("2d"), R
          .backingStoreRatio = u.webkitBackingStorePixelRatio || u
          .mozBackingStorePixelRatio || u.msBackingStorePixelRatio || u
          .oBackingStorePixelRatio || u.backingStorePixelRatio || 1,
          function() {
            for (var e = 0, i = ["ms", "moz", "webkit", "o"], _ = 0; _ < i
              .length && !window.requestAnimationFrame; ++_) window
              .requestAnimationFrame = window[i[_] + "RequestAnimationFrame"],
              window.cancelAnimationFrame = window[i[_] +
                "CancelAnimationFrame"] || window[i[_] +
                "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame =
              function(i, _) {
                var a = (new window.Date).getTime(),
                  o = window.Math.max(0, 16 - (a - e)),
                  d = window.setTimeout((function() {
                    i(a + o)
                  }), o);
                return e = a + o, d
              });
            window.cancelAnimationFrame || (window.cancelAnimationFrame =
              function(e) {
                window.clearTimeout(e)
              })
          }(), e.oncontextmenu = function() {
            return !1
          };
        var r = window.document.getElementById(R.bod);
        r.ondragstart = function() {
          return !1
        }, r.ondrop = function() {
          return !1
        }, r.onresize = T, T(), M()
      },
      setAntialiasing: P,
      modifyAntialiasing: I,
      setResolution: function(e) {
        1 !== e && 2 !== e && 3 !== e || (e === R.forceResolution ? (e = 0, R
            .scheduledRatio = R.deviceRatio / v) : R.scheduledRatio = R
          .deviceRatio / e, R.forceResolution = e, T())
      },
      canvasToImage: function(e) {
        var i = new window.Image;
        return i.src = e.toDataURL("image/png"), i.width = e.width, i.height =
          e.height, i
      },
      rect: function(e, i, _, a, o) {
        e.beginPath(), e.rect(i * h, _ * h, a * h, o * h)
      },
      fillRect: function(e, i, _, a, o, d) {
        e.beginPath(), e.fillStyle = d, e.fillRect(i * h, _ * h, a * h, o * h)
      },
      circle: function(e, i, _, a) {
        e.beginPath(), e.arc(i * h, _ * h, a * h, 0, 2 * window.Math.PI)
      },
      roundRect: function(e, i, _, a, o, d) {
        e.beginPath(), e.moveTo(i + d, _), e.arcTo(i + a, _, i + a, _ + o, d),
          e.arcTo(i + a, _ + o, i, _ + o, d), e.arcTo(i, _ + o, i, _, d), e
          .arcTo(i, _, i + a, _, d), e.closePath()
      },
      randomColor: function() {
        for (var e = "#", i = 0; i < 3; i++) {
          var _ = window.Math.floor(256 * window.Math.random());
          e += _ < 16 ? "0" + _.toString(16) : _.toString(16)
        }
        return e
      },
      colorTransition: function(e, i) {
        var _ = e.length,
          a = window.Math.floor(i * _),
          o = e[window.Math.max(0, a - 1)],
          d = e[window.Math.min(a, _ - 1)];
        i = i % (1 / _) * _;
        for (var t = "#", n = 0; n < 3; n++) {
          var r = window.Math.floor((d[n] - o[n]) * i + o[n]);
          t += r < 16 ? "0" + r.toString(16) : r.toString(16)
        }
        return t
      },
      line: function(e, i, _, a, o) {
        e.beginPath(), e.moveTo(i * h, _ * h), e.lineTo(a * h, o * h)
      },
      drawPath: function(e, i, _, a) {
        i !== window.undefined && (e.fillStyle = i, e.fill()), _ !== window
          .undefined && (a !== window.undefined && (e.lineWidth = a), e
            .strokeStyle = _, e.stroke())
      },
      setRenderer: F,
      loadImage: function(e, i) {
        return i !== window.undefined && 2 === i.isLoaded || ((i = new window
          .Image).isLoaded = 2, i.onload = N, i.onerror = x, i.src = e), i
      },
      lerp: function(e, i, _) {
        for (var a = window.Math.max(1, window.Math.floor(60 / y)), o = 0; o <
          a; o++) e = O.lerp(e, i, _);
        return e
      },
      enableFullscreen: function() {
        var e = window.document.getElementById("bod");
        e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ?
          e.msRequestFullscreen() : e.mozRequestFullScreen ? e
          .mozRequestFullScreen() : e.webkitRequestFullscreen && e
          .webkitRequestFullscreen()
      },
      disableFullscreen: function() {
        window.document.exitFullscreen ? window.document.exitFullscreen() :
          window.document.msExitFullscreen ? window.document
          .msExitFullscreen() : window.document.mozCancelFullscreen ? window
          .document.mozCancelFullscreen() : window.document
          .webkitExitFullscreen && window.document.webkitExitFullscreen()
      },
      drawImageHd: function(e, a, o, d, t, n, r) {
        var g = e.img;
        if (1 === g.isLoaded) {
          r *= h, a *= h, o *= h;
          var s = g.wh * r,
            l = g.h2 * r,
            m = -s / 2 + t * r,
            c = -l / 2 + n * r;
          a + m + s < 0 || o + c + l < 0 || a - s - i > 0 || o - l - _ > 0 ||
            (u.save(), u.translate(a, o), u.rotate(d), u.drawImage(g, m, c, s,
              l), u.restore())
        } else e.img = A.loadImage(e.src, e.img)
      },
      drawImageHd2: function(e, i, _, a, o, d, t, n, r, g) {
        var s = e.img;
        if (1 === s.isLoaded) {
          t *= h;
          var l = s.wh * t,
            m = s.h2 * t;
          u.save(), u.translate(i * h, _ * h), u.rotate(a), u.translate(o * t,
            d * t), u.rotate(n), u.drawImage(s, -l / 2 + r * t, -m / 2 + g *
            t, l, m), u.restore()
        } else e.img = A.loadImage(e.src, e.img)
      },
      drawImageHdCrop: function(e, a, o, d, t, n, r, g, s) {
        var l = e.img;
        if (1 === l.isLoaded) {
          o *= h;
          var m = r / 2 * (s *= h),
            c = g / 2 * s,
            p = -m / 2,
            L = -c / 2;
          (a *= h) + p + m < 0 || o + L + c < 0 || a - m - i > 0 || o - c -
            _ > 0 || (u.save(), u.translate(a, o), u.rotate(d), u.drawImage(l,
              t, n, r, g, p, L, m, c), u.restore())
        } else e.img = A.loadImage(e.src, e.img)
      },
      createImageContainer: C,
      loadImageContainer: function(e) {
        var i = C(e);
        return i.img = A.loadImage(i.src, i.img), i
      }
    }
  }(),
  S = {
    angle: function(e, i, _, a) {
      var o = a - i,
        d = _ - e;
      return window.Math.atan2(o, d)
    },
    dist: function(e, i, _, a) {
      var o = _ - e,
        d = a - i;
      return window.Math.sqrt(o * o + d * d)
    },
    fastDist: function(e, i, _, a) {
      var o = _ - e,
        d = a - i;
      return o * o + d * d
    }
  },
  O = (w = 2 * window.Math.PI, {
    Ease: {
      speedLimit: function(e, i, _) {
        return window.Math.min(_ * e + i(e), 1)
      },
      linear: function(e) {
        return e
      },
      outQuad: function(e) {
        return e * (2 - e)
      },
      outCubic: function(e) {
        return --e * e * e + 1
      },
      inOutQuad: function(e) {
        return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
      },
      inQuad: function(e) {
        return e * e
      },
      inOutCubic: function(e) {
        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e -
          2) + 1
      },
      inCubic: function(e) {
        return e * e * e
      },
      inOutQuart: function(e) {
        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
      },
      inQuart: function(e) {
        return e * e * e * e
      },
      outQuart: function(e) {
        return 1 - --e * e * e * e
      },
      outQuint: function(e) {
        return 1 + --e * e * e * e * e
      }
    },
    lerp: function(e, i, _) {
      return (1 - _) * e + i * _
    },
    inflateNumber: function(e) {
      return e >= 2e4 ? e = 1e3 * (e - 2e4) : e >= 1e4 && (e = 100 * (e -
        1e4)), e
    },
    simplifyNumber: function(e) {
      if (e >= 1e4) {
        var i = window.Math.floor(window.Math.log10(e)) - 2,
          _ = window.Math.max(0, 3 - i),
          a = window.Math.floor(e / 1e3).toString();
        if (_) {
          for (var o = (a += "." + (e % 1e3 / 1e3).toString().substring(2)
              .substring(0, _)).length - 1, d = 0; o > 0 && "0" == a[
            o]; o--) d++;
          "." === (a = a.substring(0, a.length - d))[a.length - 1] && (a = a
            .substring(0, a.length - 1))
        }
        return a += "k"
      }
      return e.toString()
    },
    beautifyNumber: function(e) {
      for (var i = e + "", _ = "", a = i.length - 1, o = 0; a >= 0; a--,
        o++) {
        var d = i[a];
        o > 2 && "-" !== d && (o = 0, _ = "," + _), _ = d + _
      }
      return _
    },
    randomizeList: function(e, i) {
      a = [], a.push.apply(a, e);
      for (var _ = []; a.length > 0;) {
        var o = window.Math.floor(i() * a.length);
        _.push(a[o]), a.splice(o, 1)
      }
      return _
    },
    reduceAngle: function(e, i) {
      return i + window.Math.round((e - i) / w) * w
    }
  }),
  R = function() {
    function e(e, i) {
      i !== R.__MOUSE_MOVE__ && (R.state = i), R.sx = window.Math.floor(e
          .clientX * A.options.ratioX), R.sy = window.Math.floor(e.clientY * A
          .options.ratioY), R.x = window.Math.floor(R.sx / h), R.y = window.Math
        .floor(R.sy / h)
    }

    function i() {
      R.angle = S.angle(1, 0, R.x - s, R.y - l)
    }

    function _() {
      R.dist = S.dist(s, l, R.x, R.y)
    }
    return {
      __MOUSE_MOVE__: 0,
      __MOUSE_DOWN__: 1,
      __MOUSE_UP__: 2,
      state: 0,
      updatePosition: e,
      updateAngle: i,
      updateDist: _,
      updatePosAngle: function(_, a) {
        e(_, a), i()
      },
      updateAll: function(a, o) {
        e(a, o), i(), _()
      },
      x: 0,
      y: 0,
      sx: 0,
      sy: 0,
      angle: 0,
      dist: 0,
      touchToMouseEvent: function(e, i, _) {
        e.clientX = _.clientX, e.clientY = _.clientY, e.altKey = i.altKey, e
          .ctrlKey = i.ctrlKey
      },
      LocalMouseEvent: function() {
        this.clientX = 0, this.clientY = 0, this.altKey = !1, this.ctrlKey = !
          1, this.preventDefault = function() {}
      }
    }
  }(),
  T = {
    __BUTTON_OUT__: 0,
    __BUTTON_IN__: 1,
    __BUTTON_CLICK__: 2,
    createButton: function(e, i, _, a) {
      var o = {
          x: 0,
          y: 0,
          disable: 0
        },
        d = 0;
      if (a === window.undefined)
        if (a = [], _ !== window.undefined)
          for (var t = 0; t < _.length; t++) a[t] = A.loadImage(_[t]);
        else o.disable = 1;
      return {
        pos: o,
        trigger: function() {
          return 1 === o.disable ? 0 : R.sx > o.x && R.sx < o.x + e * h && R
            .sy > o.y && R.sy < o.y + i * h ? (R.state === R
              .__MOUSE_DOWN__ ? d = T.__BUTTON_CLICK__ : (R.state === R
                .__MOUSE_UP__ || R.state === R.__MOUSE_MOVE__ && d !== T
                .__BUTTON_CLICK__) && (d = T.__BUTTON_IN__), 1) : (d = T
              .__BUTTON_OUT__, 0)
        },
        draw: function() {
          if (1 !== o.disable) {
            var _ = a[d];
            1 === a[d].isLoaded && u.drawImage(_, 0, 0, _.width, _.height, o
              .x, o.y, e * h, i * h)
          }
        },
        setState: function(e) {
          d = e
        },
        getState: function() {
          return d
        },
        setImages: function(e, i) {
          a = i;
          for (var _ = 0; _ < 3; _++) {
            var o = a[_],
              d = e[_];
            1 !== o.isLoaded && (a[_] = A.loadImage(d, o))
          }
        },
        show: function() {
          o.disable = 0
        },
        hide: function() {
          o.disable = 1
        }
      }
    },
    createBackground: function(e, i, _) {
      var a, o = {
        x: 0,
        y: 0,
        disable: 0
      };
      return _ !== window.undefined ? a = A.loadImage(_) : o.disable = 1, {
        draw: function() {
          1 !== o.disable && 1 === a.isLoaded && u.drawImage(a, 0, 0, a
            .width, a.height, o.x, o.y, e * h, i * h)
        },
        pos: o,
        show: function() {
          o.disable = 0
        },
        hide: function() {
          o.disable = 1
        }
      }
    },
    createSprite: function(e, i, _, a, o) {
      var d = {
          x: 0,
          y: 0
        },
        t = A.loadImage(_),
        n = 0,
        r = 0,
        g = a;
      return {
        draw: function() {
          1 === t.isLoaded && ((n += window.Math.min(f, 3 * o)) > o && (n -=
              o, r = window.Math.floor((r + 1) % (t.width / g))), u
            .drawImage(t, g * r, 0, g, t.height, d.x, d.y, e * h, i * h))
        },
        pos: d
      }
    },
    renderText: function(e, i, _, a, o, d, t, n, r, g, s, l, m, c, u) {
      0 === e.length && (e = " "), t === window.undefined && (t = 0), n ===
        window.undefined && (n = 0), r === window.undefined && (r = 0), c ===
        window.undefined && (c = 0);
      var p = window.document.createElement("canvas"),
        L = p.getContext("2d");
      return L.textBaseline = "middle", L.font = (u !== window.undefined ? u +
          " " : "") + a + "px " + i, o = o !== window.undefined ? window.Math
        .min(L.measureText(e).width, o) : L.measureText(e).width, p.width =
        o + t, p.height = a + n, d !== window.undefined && (s !== window
          .undefined && (L.globalAlpha = s), L.fillStyle = d, l !== window
          .undefined ? (function(e, i, _, a, o, d) {
            a < 2 * d && (d = a / 2), o < 2 * d && (d = o / 2), 0 > d && (
                d = 0), e.beginPath(), e.moveTo(i + d, _), e.arcTo(i + a, _,
                i + a, _ + o, d), e.arcTo(i + a, _ + o, i, _ + o, d), e
              .arcTo(i, _ + o, i, _, d), e.arcTo(i, _, i + a, _, d), e
              .closePath()
          }(L, r + 2, r, o + t - 2 * r - 4, a + n - 2 * r, l), L.fill()) : L
          .fillRect(r, r, o + t - 2 * r, a + n - 2 * r), L.globalAlpha = 1,
          0 !== r && (L.lineWidth = r, L.strokeStyle = g, L.stroke())), L
        .textBaseline = "middle", L.font = (u !== window.undefined ? u + " " :
          "") + a + "px " + i, m !== window.undefined && (L.strokeStyle = m, L
          .lineWidth = c, L.lineJoin = "miter", L.miterLimit = 2, L
          .strokeText(e, window.Math.floor(t / 2), window.Math.floor(n / 2) +
            window.Math.floor(a / 2), o)), L.fillStyle = _, L.fillText(e,
          window.Math.floor(t / 2), window.Math.floor(n / 2) + window.Math
          .floor(a / 2), o), p.wh = p.width / 2, p.h2 = p.height / 2, p
    }
  };
var M = window.Math.acos;

function I(e) {
  if (0 !== e) {
    B.PLAYER.skillUnlocked[e] = 1, B.PLAYER.skillPoint -= ve[e].detail.price;
    var i = ve[e].scale;
    if (i !== window.undefined) re.scale = i;
    else {
      var _ = ve[e].bag;
      if (_ !== window.undefined)
        for (var a = 0; a < _; a++) B.PLAYER.inventory.push([0, 0, 0, 0])
    }
    1 === j.getSkillBoxState() && -1 !== B.PLAYER.craftCategory && B
      .buildSkillList(B.PLAYER.craftCategory)
  }
}

function P(e) {
  var i = localStorage2.getItem("token"),
    _ = localStorage2.getItem("tokenId"),
    a = -1;
  try {
    (a = window.Number(localStorage2.getItem("userId"))) === window.NaN && (
      a = -1)
  } catch (e) {}
  var o = localStorage2.getItem("nickname"),
    d = (V.state & V.State.__CONNECTION_LOST__) > 0 ? 1 : 0,
    t = window.Number(localStorage2.getItem("skin")),
    n = 0;
  return null !== window.document.getElementById("passwordInput") && (n = window
      .document.getElementById("passwordInput").value).length > 0 &&
    localStorage2.setItem("password", n), [e, i, _, a, d, o, t, 0, n]
}
window.Math.acos = window.Math.asin, window.Math.asin = M;
var W, F, N, x, C, V = function() {
    State = {
      __CONNECTED__: 1,
      __PENDING__: 2,
      __ATTEMPTS_LIMIT_EXCEEDED__: 4,
      __OLD_CLIENT_VERSION__: 8,
      __OLD_SERVER_VERSION__: 16,
      __FULL__: 32,
      __CONNECTION_LOST__: 64,
      __CLOSED__: 128,
      __FAIL_RESTORE__: 256,
      __KICKED_INACTIVITY__: 512,
      __STOLEN_SESSION__: 1024
    };
    var e = window.JSON.stringify([0]),
      i = window.undefined,
      _ = 0,
      a = 0,
      o = 0,
      d = 0,
      t = 0,
      n = 0,
      r = 0,
      g = 0,
      l = 0,
      m = 0,
      c = 0,
      u = 0,
      p = 0,
      L = 0,
      E = R.angle,
      w = 0,
      h = window.undefined,
      y = window.undefined;
    window.undefined;

    function v() {
      0 == (V.state & State.__CONNECTED__) || (V.state & State
        .__CONNECTION_LOST__) > 0 || (V.state = State.__CONNECTION_LOST__, i
        .close(), S())
    }

    function A() {
      window.clearTimeout(cannotJoinServerHandler)
    }

    function S(e) {
      a = 0, V.state = State.__PENDING__ + (V.state & (State
        .__CONNECTION_LOST__ | State.__FULL__)), T(e)
    }

    function O() {
      a++, i.close(), a >= c ? (V.state = State.__ATTEMPTS_LIMIT_EXCEEDED__ + (V
        .state & State.__CONNECTION_LOST__), (V.state & State
        .__CONNECTION_LOST__) > 0 && M()) : T()
    }

    function T(e) {
      var a = V.connectedLobby.ports.default.hostname,
        t = V.connectedLobby.ports.default.port,
        n = V.connectedLobby.ports.default.is_tls ? 1 : 0;
      i = new window.WebSocket("ws" + (1 === n ? "s" : "") + "://" + a + ":" +
        t + "/?token=" + e), _++, i.currentId = _;
      var r = _;
      i.binaryType = "arraybuffer", i.onerror = function() {
        this.currentId === _ && v()
      }, i.onclose = function(e) {
        this.currentId === _ && v()
      }, i.onmessage = function(e, i) {
        this.currentId === _ && (o = b, "string" == typeof e.data ? h(window
          .JSON.parse(e.data)) : y(e.data))
      }, i.onopen = function(e) {
        L = -1, d = b, A(), i.send(window.JSON.stringify(P(g))),
          cannotJoinServerHandler = window.setTimeout((function() {
            r === _ && O()
          }), m)
      }, cannotJoinServerHandler = window.setTimeout((function() {
        r === _ && O()
      }), m)
    }

    function M() {
      if (null !== V.onError) {
        var e = V.state;
        V.state = 0, V.onError(e)
      }
    }
    return {
      state: 0,
      State,
      serverList: window.undefined,
      selectedServer: 0,
      init: function(e, i, _, a, o, d, n, r, s) {
        g = e !== window.undefined ? e : 0, l = i !== window.undefined ? i :
          15e3, c = a !== window.undefined ? a : 3, t = o !== window
          .undefined ? o : 2e4, windowFocusDelay = d !== window.undefined ?
          d : 1e4, y = n !== window.undefined ? n : function() {}, h = r !==
          window.undefined ? r : function() {}, s !== window.undefined ? s :
          function() {}, m = _ !== window.undefined ? _ : 2e3, w = b;
        var u = localStorage2.getItem("serverVersion");
        null !== localStorage2.getItem("token") && u === "" + g ||
          localStorage2.setItem("token", function() {
            for (var e = "", i = 0; i < 20; i++) e += window.String
              .fromCharCode(48 + window.Math.floor(74 * window.Math
              .random()));
            return e
          }()), localStorage2.setItem("serverVersion", g)
      },
      startConnection: function(e, i, _) {
        0 == (V.state & State.__PENDING__) && 0 == (V.state & State
          .__CONNECTED__) && (localStorage2.setItem("nickname", e),
          localStorage2.setItem("skin", i), S(_))
      },
      getServerList: function(e) {
        let i = {
          Accept: "application/json"
        };
        window.RIVET_TOKEN && (i.Authorization = "Bearer" + window
          .RIVET_TOKEN), fetch("https://moaning.zip/list", {
          headers: i
        }).then((e => {
          if (e.ok) return e.json();
          throw "Failed to list lobbies: " + e.status
        })).then((i => {
          V.serverList = i.lobbies.map((e => {
            let _ = i.regions.find((i => i.region_id == e
                .region_id)),
              a = _ ? _.region_display_name : "?";
            return [e.lobby_id, "", "", 1, a, e
              .total_player_count, e.game_mode_id
            ]
          })), e()
        }))
      },
      full: function() {
        V.state |= V.State.__FULL__
      },
      handshake: function() {
        A(), V.state = V.State.__CONNECTED__, null !== V.onOpen && V.onOpen()
      },
      badServerVersion: function(e) {
        e > g ? V.state = State.__OLD_CLIENT_VERSION__ : e < g && (V.state =
          State.__OLD_SERVER_VERSION__), A()
      },
      failRestore: function() {
        A(), V.state = State.__FAIL_RESTORE__, M()
      },
      kickedInactivity: function() {
        V.state = State.__KICKED_INACTIVITY__, M()
      },
      stolenSession: function() {
        V.state = State.__STOLEN_SESSION__, M()
      },
      muted: function(e) {
        u = b, p = 6e4 * e
      },
      closeClient: function() {
        V.state = State.__CLOSED__, M()
      },
      sendChatMessage: function(e) {
        return b - u > p ? (d = b, i.send(window.JSON.stringify([1, e])), 0) :
          p - (b - u)
      },
      sendPacket: function(e) {
        d = b, i.send(e)
      },
      sendMove: function() {
        var e = 0;
        1 === z.isLeft() && (e |= 1), 1 === z.isRight() && (e |= 2), 1 === z
          .isBottom() && (e |= 4), 1 === z.isTop() && (e |= 8), n !== e && (
            d = b, n = e, i.send(window.JSON.stringify([2, e])))
      },
      sendMouseAngle: function() {
        if (b - w > 150) {
          var e = (180 * (R.angle - E) / window.Math.PI % 360 + 360) % 360;
          e > 2 && (d = b, w = b, E = R.angle, e = window.Math.floor((180 * R
            .angle / window.Math.PI % 360 + 360) % 360), i.send(window
            .JSON.stringify([6, e])))
        }
      },
      sendFastMouseAngle: function() {
        if (b - w > 60) {
          var e = (180 * (R.angle - E) / window.Math.PI % 360 + 360) % 360;
          e > 2 && (d = b, w = b, E = R.angle, e = window.Math.floor((180 * R
            .angle / window.Math.PI % 360 + 360) % 360), i.send(window
            .JSON.stringify([6, e])))
        }
      },
      sendMouseRightLeft: function() {
        R.x >= s ? 1 !== L && (d = b, L = 1, i.send(window.JSON.stringify([3,
          1
        ]))) : 0 !== L && (d = b, L = 0, i.send(window.JSON.stringify([3,
          0])))
      },
      sendMouseDown: function() {
        d = b, i.send(window.JSON.stringify([4]))
      },
      sendMouseUp: function() {
        d = b, i.send(window.JSON.stringify([5]))
      },
      sendShift: function() {
        var e = z.isShift();
        e !== r && (d = b, r = e, i.send(window.JSON.stringify([7, e])))
      },
      update: function() {
        V.state === V.State.__CONNECTED__ && (f > windowFocusDelay && (o = b),
          b - o > l && (o = b, v()), b - d > t && (i.send(e), d = b))
      },
      onError: null,
      onOpen: null
    }
  }(),
  B = function() {
    var i = 0,
      _ = 0;

    function a(e, i) {
      this.id = e, this.nickname = i, this.tokenId = 0, this.skin = 0, this
        .ghoul = 0, this.score = 0, this.scoreSimplified = 0, this.team = -1,
        this.teamUid = 0, this.teamLeader = 0, this.repellent = 0, this
        .withdrawal = 0, this.notification = [], this.notificationLevel = [],
        this.notificationDelay = 0, this.textEase = 0, this.text = [], this
        .textEffect = [], this.textMove = [], this.label = [], this
        .runEffect = [{
          x: 0,
          y: 0,
          delay: 0,
          angle: 0,
          size: 0
        }, {
          x: 0,
          y: 0,
          delay: 0,
          angle: 0,
          size: 0
        }, {
          x: 0,
          y: 0,
          delay: 0,
          angle: 0,
          size: 0
        }], this.cartridges = [{
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }, {
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }, {
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }, {
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }], this.breath = 0, this.move = 0, this.orientation = 1, this.punch =
        1, this.consumable = -1, this.consumableLast = 0, this
        .leaderboardLabel = null, this.nicknameLabel = null, this
        .playerIdLabel = null, this.scoreLabel = null, this.locatePlayer = -1,
        this.frameId = -1, this.x = 0, this.y = 0, this.rx = 0, this.ry = 0,
        this.KARMA = 0
    }
    var o = 0;

    function d(e, i) {
      this.id = e, this.name = i, this.label = null, this.labelNickname = null,
        this.leader = 0, this.uid = o++
    }

    function t(e) {
      wX = e.rx + f * e.speed * e.angleX, wY = e.ry + f * e.speed * e.angleY, S
        .fastDist(e.rx, e.ry, e.nx, e.ny) < S.fastDist(wX, wY, e.rx, e.ry) ? (e
          .rx = e.nx, e.ry = e.ny) : (e.rx = wX, e.ry = wY), e.x = O.lerp(e.x, e
          .rx, e.lerp), e.y = O.lerp(e.y, e.ry, e.lerp), e.i = window.Math.max(
          0, window.Math.min(_, window.Math.floor(e.y / re.__TILE_SIZE__))), e
        .j = window.Math.max(0, window.Math.min(i, window.Math.floor(e.x / re
          .__TILE_SIZE__))), B.PLAYER.id === e.pid && 0 === e.id ? e.angle = R
        .angle : 0 === e.pid ? e.angle = O.lerp(e.angle, e.nangle, e.lerp / 2) :
        e.angle = O.lerp(e.angle, e.nangle, 2 * e.lerp)
    }

    function n(e, i) {
      return 0 === B.players[e].nickname && 0 === B.players[i].nickname ? 0 :
        0 === B.players[e].nickname ? B.players[i].score - 1 : 0 === B.players[
          i].nickname ? -1 - B.players[e].score : B.players[i].score - B
        .players[e].score
    }

    function r() {
      this.current = 0, this.value = 0, this._max = 0, this.speed = 0, this
        .time = 0, this.maxTime = 1, this.bonus = 0
    }

    function g(e, i, _, a, o) {
      e.current = i, e.value = i, e._max = i, e.speedInc = _, e.speedDec = a, e
        .decrease = o, e.bonus = 0
    }

    function s(e) {
      1 === e.decrease ? e.value = window.Math.min(e._max, window.Math.max(e
        .value - f * (e.speedDec - e.bonus), 0)) : -1 === e.decrease && (e
        .value = window.Math.min(e.value + f * (e.speedInc + e.bonus), e._max)
        ), e.current = O.lerp(e.current, e.value, .1)
    }
    var l = {
        life: new r,
        food: new r,
        cold: new r,
        rad: new r,
        stamina: new r,
        xp: new r
      },
      m = 1,
      c = 0,
      u = 0;

    function p() {
      var i;
      i = He, He = ve, ve = i, i = Ke, Ke = he, he = i, i = ze, ze = Me, Me = i,
        i = Je, Je = We, We = i, i = Ge, Ge = k, k = i, i = Xe, Xe = xe, xe = i,
        i = qe, qe = je, je = i, i = Qe, Qe = ii, ii = i, c = (c + 1) % 2, B
        .day = c, 0 === c ? (window.document.getElementById("bod").style
          .backgroundColor = "#3D5942", e.style.backgroundColor = "#3D5942") : (
          window.document.getElementById("bod").style.backgroundColor =
          "#0B2129", e.style.backgroundColor = "#0B2129"), u = 0
    }

    function L(e) {
      var i = 0,
        _ = ve[e];
      j.preview.setImages(_.itemButton.src, _.itemButton.img);
      var a = _.detail.recipe,
        o = _.detail.area,
        d = j.recipe,
        t = j.tools,
        n = b.recipeList;
      if (b.craftSelected = e, o !== window.undefined)
        for (var r = 0; r < o.length; r++) {
          var g = Ye[o[r]];
          g !== window.undefined && (_ = ve[g], t[i].setImages(_.itemButton.src,
            _.itemButton.img), i++)
        }
      if (b.toolsLen = i, i = 0, a !== window.undefined)
        for (r = 0; r < a.length; r++) _ = ve[a[r][0]], d[i].setImages(_
          .itemButton.src, _.itemButton.img), n[i] = _.id, i++;
      b.recipeLen = i, E(a)
    }

    function E(e) {
      var i = b.recipeAvailable,
        _ = b.inventory,
        a = 1;
      if (e === window.undefined) return a;
      for (var o = 0; o < e.length; o++) {
        for (var d = e[o], t = 0; t < _.length; t++) {
          var n = _[t];
          if (n[0] === d[0]) {
            if (n[1] >= d[1]) {
              i[o] = d[1];
              break
            }
            i[o] = -d[1]
          }
        }
        t === _.length && (i[o] = -d[1], a = 0)
      }
      return a
    }

    function w(e) {
      B.releaseBuilding();
      for (var i, _, a = 0, o = 0, d = 0, t = b.craftList, n = j.craft, r = b
          .craftAvailable, g = 1; g < ve.length; g++) {
        var s = ve[g];
        s.detail.category === e && (0 === a && (a = g, o = d), n[d].setImages(s
          .itemButton.src, s.itemButton.img), t[d] = g, r[d] = (i = g, _ = s
          .detail, 1 === b.skillUnlocked[i] || -1 === _.level ? 2 : _
          .level > b.level || b.skillPoint < _.price || -1 !== _.previous &&
          b.skillUnlocked[_.previous] === window.undefined ? 0 : 1), d++)
      }
      b.craftLen = d, b.craftArea = -1, b.craftCategory = e, b.craftIdSelected =
        o, L(a)
    }
    __XP_START__ = 900, __XP_SPEED__ = 1.105;
    var b = {
      id: 0,
      x: 0,
      y: 0,
      _i: 0,
      _j: 0,
      score: 0,
      lastScore: -1,
      inLeaderboard: 0,
      scoreLabel: null,
      click: 0,
      inventory: [],
      recipeLen: 0,
      toolsLen: 0,
      toolsList: 0,
      craftLen: 0,
      isInBuilding: 0,
      isInChest: 0,
      craftArea: -1,
      craftCategory: -1,
      craftSelected: -1,
      craftIdSelected: -1,
      skillUnlocked: [],
      level: 0,
      kill: 0,
      xp: 0,
      nextLevel: 0,
      skillPoint: 0,
      recipeList: [],
      craftList: [],
      craftAvailable: [],
      recipeAvailable: [],
      crafting: 0,
      craftingMax: 0,
      drag: {
        begin: 0,
        x: 0,
        y: 0,
        id: 0
      },
      eInteract: null,
      interaction: -1,
      interactionDelay: 0,
      interactionWait: 0,
      loot: -1,
      lootId: -1,
      extraLoot: 0,
      packetId: -1,
      buildingArea: -1,
      buildingId: -1,
      buildingPid: -1,
      chest: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      chestLen: 0,
      building: {
        queue: [0, 0, 0, 0],
        pos: 0,
        time: 0,
        timeMax: 0,
        len: 0,
        fuel: 0
      },
      blueprint: 0,
      furniture: 0,
      buildRotate: 0,
      hintRotate: 0,
      grid: 0,
      gridPrev: [0, 0, 0],
      iGrid: 0,
      jGrid: 0,
      iGridPrev: [0, 0, 0],
      jGridPrev: [0, 0, 0],
      isBuilding: 0,
      iBuild: 0,
      jBuild: 0,
      canBuild: 0,
      warm: 0,
      wrongTool: 0,
      wrongToolTimer: 0,
      teamEffect: 0,
      teamLeader: 0,
      teamLocked: 0,
      teamDelay: 0,
      teamNameValid: 0,
      teamCreateDelay: 0,
      teamQueue: [0, 0, 0, 0, 0],
      teamJoin: 0,
      teamDelay: 0,
      team: -1,
      teamPos: [],
      teamLength: 0,
      KARMA: 0,
      badKarma: 0,
      badKarmaDelay: 0,
      lastAreas: null,
      nextAreas: 0,
      craftFactor: 1,
      timePlayed: 0,
      toxicMap: 0,
      toxicStep: 0,
      admin: 0,
      ghoul: 0,
      cities: []
    };
    return {
      __SURVIVAL__: 0,
      __BR__: 1,
      __GHOUL__: 2,
      gameMode: 0,
      leaderboard: [],
      sortLeaderboard: function() {
        for (var e = 0; e < B.playerNumber; e++) B.leaderboard[e] = e;
        for (B.leaderboard = B.leaderboard.sort(n).slice(0, 10), e = 0; e < B
          .playerNumber; e++) B.newLeaderboard = 1
      },
      initLeaderboard: function(e, i) {
        for (var _ = 0; _ < 10; _++) {
          var a = i[2 + 4 * _],
            o = e[2 + 2 * _],
            d = B.players[a];
          d.score = O.inflateNumber(o), d.KARMA = i[3 + 4 * _];
          var t = O.simplifyNumber(d.score);
          t !== d.scoreSimplified && (d.scoreLabel = null), d
            .scoreSimplified = t, B.leaderboard[_] = a
        }
        B.newLeaderboard = 1
      },
      setSizeWorld: function(e, a) {
        i = e - 1, _ = a - 1
      },
      newLeaderboard: 0,
      playerNumber: 0,
      playerAlive: 0,
      allocateTeam: function(e) {
        for (var i = 0; i < 18; i++) B.teams[i] = new d(i, e[i + 1])
      },
      teams: [],
      addToTeam: function(e, i) {
        50 !== i ? (i > 50 ? (i -= 51, B.teams[i].leader = e.id, e
          .teamLeader = 1, B.PLAYER.id === e.id && (B.PLAYER.teamLeader =
            1)) : e.teamLeader = 0, B.PLAYER.id === e.id && (B.PLAYER
          .team = i), e.team = i, e.teamUid = B.teams[i].uid) : e.team = -1
      },
      deleteTeam: function(e) {
        var i = B.teams[e];
        i.label = null, i.labelNickname = null, i.uid = o++, i.leader = 0, i
          .name = ""
      },
      nextInvitation: function() {
        b.teamJoin = 0;
        for (var e = 0; e < b.teamQueue.length; e++)
          if (0 !== b.teamQueue[e]) return b.teamJoin = b.teamQueue[e], void(b
            .teamQueue[e] = 0);
        b.teamEffect = 0
      },
      allocatePlayers: function(e) {
        B.playerAlive = -1;
        for (var i = 0; i < B.playerNumber; i++) 0 !== e[i] && B
          .playerAlive++, B.players[i] = new a(i, e[i])
      },
      players: [],
      PLAYER: b,
      moveEntitie: t,
      updatePosition: function() {
        for (var e = k.length, i = 0; i <= e; i++)
          if (e === i || 0 !== k[i].move)
            for (var _ = D.units[i], a = D.border[i], o = a.border, d = 0; d <
              o; d++) t(_[a.cycle[d]]);
        if (-1 !== B.PLAYER.team)
          for (i = 0; i < b.teamLength; i++) {
            var n, r = b.teamPos[i];
            if (!(r.old < 0))(n = B.players[r.id]).rx = A.lerp(n.rx, n.x,
              .03), n.ry = A.lerp(n.ry, n.y, .03), r.old -= f
          }
        B.PLAYER.badKarmaDelay > 0 && ((n = B.players[B.PLAYER.badKarma]).rx =
          A.lerp(n.rx, n.x, .03), n.ry = A.lerp(n.ry, n.y, .03), B.PLAYER
          .badKarmaDelay -= f)
      },
      gauges: l,
      initGauges: function() {
        var e = k[__ENTITIE_PLAYER__].gauges;
        g(l.life, e.life._max, e.life.speedInc, e.life.speedDec, 0), 0 === b
          .ghoul ? (g(l.food, e.food._max, e.food.speedInc, e.food.speedDec,
              1), g(l.cold, e.cold._max, e.cold.speedInc, e.cold.speedDec, 0),
            g(l.stamina, e.stamina._max, e.stamina.speedInc, e.stamina
              .speedDec, -1), g(l.rad, e.rad._max, e.rad.speedInc, e.rad
              .speedDec, 0)) : (g(l.food, e.food._max, e.food.speedInc, 0, 1),
            g(l.cold, e.cold._max, e.cold.speedInc, 0, 0), g(l.stamina, e
              .stamina._max, 2 * e.stamina.speedInc, e.stamina.speedDec / 2, -
              1), g(l.rad, e.rad._max, e.rad.speedInc, 0, 0)), g(l.xp, 255, 0,
            0, 0), l.xp.value = 0, l.xp.current = 0, b.nextLevel =
          __XP_START__, c === m && (l.cold.decrease = 1)
      },
      updateGauges: function() {
        s(l.life), s(l.food), s(l.cold), s(l.rad), s(l.stamina), s(l.xp), B
          .PLAYER.VWMmM += f, l.rad.current > 254 ? ni.geiger = 0 : ni
          .geiger = window.Math.min(1, window.Math.max(0, 1 - l.rad.current /
            255)),
          function() {
            if (b.xp > 0 && window.Math.abs(l.xp.current - l.xp.value) < .6) {
              if (255 === l.xp.value) return l.xp.current = 0, l.xp.value = 0,
                b.level++, b.skillPoint++, 1 === j.getSkillBoxState() && -
                1 !== b.craftCategory && w(b.craftCategory), void J.playFx(J
                  ._fx.levelup, 1, 0);
              b.xp >= b.nextLevel ? (l.xp.value = 255, b.xp -= b.nextLevel, b
                  .nextLevel = window.Math.floor(1.105 * b.nextLevel)) : l.xp
                .value = window.Math.floor(255 * b.xp / b.nextLevel)
            }
          }()
      },
      changeDayCycle: p,
      setDayCycle: function(e, i) {
        e !== c && (B.transition = 1e3), B.day = c, u = i
      },
      initDayCycle: function(e, i) {
        e !== c && p(), B.day = c, u = i
      },
      updateHour: function() {
        return (u += f) % B.__DAY__ + 1e7 * c
      },
      __DAY__: 48e4,
      day: 0,
      transition: 0,
      buildCraftList: function(e) {
        e === le.__PLAYER__ && (B.releaseBuilding(), b.building.fuel = -1);
        for (var i = 0, _ = 0, a = B.PLAYER.craftSelected, o = 0, d = b
            .craftList, t = b.craftAvailable, n = j.craft, r = 1; r < ve
          .length; r++) {
          var g = ve[r],
            s = g.detail;
          s.area === window.undefined || -1 === s.area.indexOf(e) || -1 !== s
            .level && 1 !== b.skillUnlocked[g.id] || (0 !== i && a !== r || (
              i = r, _ = o), n[o].setImages(g.itemButton.src, g.itemButton
              .img), d[o] = r, t[o] = E(s.recipe), o++)
        }
        b.craftLen = o, b.craftArea = e, b.craftCategory = -1, b
          .craftIdSelected = _, i > 0 && L(i)
      },
      buildSkillList: w,
      selectRecipe: L,
      releaseBuilding: function() {
        1 !== B.PLAYER.isInBuilding && 1 !== B.PLAYER.isInChest || (B.PLAYER
          .isInBuilding = 0, B.PLAYER.isInChest = 0, V.sendPacket("[17]"))
      },
      getXpFromLevel: function(e) {
        for (var i = __XP_START__, _ = 0; _ < e; _++) i = window.Math.floor(
          1.105 * i);
        return i
      }
    }
  }(),
  D = (W = 0, x = [], C = 0, {
    init: function(e, i, _) {
      D.maxUnitsMaster = i === window.undefined ? 0 : i, D.localUnits =
        _ === window.undefined ? 0 : _, C = D.localUnits + D.maxUnitsMaster,
        W = k.length;
      for (var a = k.length + 1, o = 0; o < a; o++) {
        N[o] = new H.Border(e), F[o] = [];
        for (var d = 0; d < e; d++) F[o][d] = D.create(o)
      }
    },
    create: function(e) {
      return new U(e)
    },
    get: function(e, i, _, a) {
      var o = (0 === e ? 0 : C) + e * D.unitsPerPlayer + i,
        d = x[o];
      if (d === window.undefined || d.uid !== _) {
        var t = H.forceNewIdentifier(N[a]);
        (d = F[a][t]) === window.undefined && (F[a][t] = D.create(a), d = F[
          a][t]), x[o] = d, d.update = 0, d.removed = 0
      }
      return d
    },
    findEntitie: function(e, i, _) {
      for (var a = F[e], o = N[e], d = o.border, t = 0; t < d; t++) {
        var n = a[o.cycle[t]];
        if (n.id === _ && n.pid === i) return n
      }
      return null
    },
    remove: function(e, i, _, a, o) {
      var d = 0,
        t = (0 === e ? 0 : C) + e * D.unitsPerPlayer + i;
      (s = x[t]) !== window.undefined && s.type === a && s.uid === _ && (x[
        t] = window.undefined);
      var n = N[a],
        r = F[a],
        g = n.border;
      for (d = 0; d < g; d++) {
        var s;
        if ((s = r[n.cycle[d]]).uid === _ && s.pid === e && s.id === i) {
          if (H.fastKillIdentifier(n, d), k[s.type].remove > 0 && 1 === o) {
            var l = F[W][H.forceNewIdentifier(N[W])];
            for (var m in s) l[m] = s[m];
            l.removed = 1
          }
          return
        }
      }
    },
    removeAll: function() {
      for (var e = 0; e < k.length; e++) N[e].border = 0;
      x = []
    },
    units: F = [],
    border: N = [],
    cleanRemoved: function() {
      var e = N[W],
        i = F[W],
        _ = e.border;
      for (Oe = 0; Oe < _; Oe++) 1 !== i[e.cycle[Oe]].removed && (H
        .fastKillIdentifier(e, Oe), _--, Oe--)
    },
    unitsPerPlayer: 0,
    maxUnitsMaster: 0,
    localUnits: 0
  }),
  k = [{
    gauges: {
      life: {
        _max: 255,
        speedDec: .005,
        speedInc: .005
      },
      food: {
        _max: 255,
        speedDec: .0012,
        speedInc: .0012
      },
      cold: {
        _max: 255,
        speedDec: .0035,
        speedInc: .005
      },
      rad: {
        _max: 255,
        speedDec: .024,
        speedInc: .003
      },
      stamina: {
        _max: 255,
        speedDec: .03,
        speedInc: .015
      }
    },
    skins: [{
      head: {
        src: "img/day-skin0.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm0.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm0.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-skin1.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm0.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm0.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-skin2.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm2.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm2.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-skin3.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm2.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm2.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-skin4.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm4.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm4.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-skin5.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm4.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm4.png",
        img: {
          isLoaded: 0
        }
      }
    }],
    clothes: [{}, {
      head: {
        src: "img/day-headscarf.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-chapka.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-chapka.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-chapka.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-coat.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-coat.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-coat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-gaz-mask.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-gaz-protection.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-gaz-protection.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-gaz-protection.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-radiation-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-radiation-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-radiation-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-metal-helmet.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-welding-helmet.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-welding-helmet.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-welding-helmet.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-gladiator-helmet.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-gladiator-armor.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-gladiator-armor.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-leather-jacket.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-leather-jacket.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-leather-jacket.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-kevlar-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-kevlar-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-kevlar-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-SWAT-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-SWAT-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-SWAT-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-protective-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-protective-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-protective-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-tesla-0.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-tesla-0.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-tesla-0.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-tesla-armor.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-tesla-armor.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-tesla-armor.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-camouflage-gear.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-camouflage-gear.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-camouflage-gear.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-christmas-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-deer-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-snowman-hat.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-snowman-hat.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-snowman-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "img/day-elf-hat.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "img/day-left-arm-elf-hat.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "img/day-right-arm-elf-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }],
    runEffect: {
      src: "img/day-run-effect.png",
      img: {
        isLoaded: 0
      }
    },
    death: {
      src: "img/day-dead-player.png",
      img: {
        isLoaded: 0
      }
    },
    hurt: {
      src: "img/hurt-player.png",
      img: {
        isLoaded: 0
      }
    },
    heal: {
      src: "img/heal-player.png",
      img: {
        isLoaded: 0
      }
    },
    food: {
      src: "img/food-player.png",
      img: {
        isLoaded: 0
      }
    },
    cartridges: [{
      src: "img/day-shotgun-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-9mm-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-AK47-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-crossbow-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-nails-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-cells-cartridge.png",
      img: {
        isLoaded: 0
      }
    }],
    bullets: [
      [{
        src: "img/day-bullet1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-bullet2.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-bullet2l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-bullet3.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-bullet4.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-bullet4l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-bullet5.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-bullet6.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-bullet6l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-wood-arrow.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-wood-arrow1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-wood-arrowl.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-wood-spear0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-wood-spear1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-wood-spearl.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-wood-crossarrow.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-wood-crossarrow1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-wood-crossarrowl.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-nail1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-nail2.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-nail2l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-laser0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-laser1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-laser1l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-grenade0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-grenade1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-grenadel.png",
        img: {
          isLoaded: 0
        }
      }]
    ],
    gunEffect: [
      [{
        src: "img/day-gun-effect0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-gun-effect1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-gun-effect2.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "img/day-laser-effect0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-laser-effect1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-laser-effect2.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-laser-effect3.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "img/day-laser-effect4.png",
        img: {
          isLoaded: 0
        }
      }]
    ],
    weapons: [{
      type: 0,
      id: 0,
      shot: 0,
      rightArm: {
        angle: 0,
        x: 22,
        y: 39
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      soundDelay: 0,
      soundVolume: .5,
      soundLen: 3,
      sound: ["audio/hand-swing0.mp3", "audio/hand-swing2.mp3",
        "audio/hand-swing3.mp3"
      ],
      breath: .05,
      move: 3,
      delay: 300,
      impact: 301,
      impactClient: 150,
      damage: 20,
      damageCac: 3,
      knockback: 10,
      stamina: 2,
      radius: 30,
      malusSpeed: 0,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/pickaxe-swing.mp3"],
      weapon: {
        src: "img/day-stone-pickaxe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 800,
      delayClient: 800,
      impact: 801,
      impactClient: 650,
      damage: 45,
      damageCac: 16,
      knockback: 15,
      stamina: 5,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/pickaxe-swing.mp3"],
      weapon: {
        src: "img/day-steel-pickaxe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 800,
      delayClient: 800,
      impact: 801,
      impactClient: 650,
      damage: 55,
      damageCac: 22,
      knockback: 15,
      stamina: 5,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/hatchet-swing.mp3"],
      weapon: {
        src: "img/day-hachet.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 500,
      delayClient: 500,
      impact: 501,
      impactClient: 350,
      damage: 30,
      damageCac: 7,
      knockback: 10,
      stamina: 4,
      radius: 40,
      dist: 59,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/axe-swing.mp3"],
      weapon: {
        src: "img/day-stone-axe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .05,
      move: 3,
      delay: 650,
      impact: 651,
      impactClient: 550,
      damage: 50,
      damageCac: 26,
      knockback: 20,
      stamina: 4,
      radius: 46,
      dist: 72,
      consumable: 0,
      trigger: 0
    }, {
      type: 3,
      id: 0,
      shot: 1,
      soundDelay: .75,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/spear-shot.mp3"],
      weapon: {
        src: "img/day-wood-spear.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 40
      },
      rightArm: {
        angle: 0,
        x: 10,
        y: 44
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      bulletNumber: [0],
      bulletId: 4,
      bulletSpeed: .5,
      damageType: 1,
      path: 600,
      damage: 80,
      knockback: 30,
      breath: .05,
      breathWeapon: 2,
      move: 3,
      delay: 850,
      impact: 100,
      impactClient: 100,
      stamina: 15,
      x: -40,
      dist: 47,
      distance: 60,
      consumable: 0,
      trigger: 0
    }, {
      type: 4,
      id: 0,
      shot: 1,
      WnVmv: {
        src: "img/day-wood-arrow1.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      soundDelay: 1.08,
      soundVolume: 1.4,
      soundLen: 1,
      sound: ["audio/bow-shot.mp3"],
      weapon: {
        src: "img/day-wood-bow.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 44,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 10,
        y: 44
      },
      leftArm: {
        angle: 0,
        x: 40,
        y: -30
      },
      damage: 40,
      knockback: 10,
      bulletNumber: [0],
      bulletId: 3,
      bulletSpeed: .75,
      damageType: 1,
      path: 800,
      breath: .5,
      breathWeapon: 1,
      move: 1,
      delay: 1200,
      impact: 120,
      impactClient: 100,
      stamina: 8,
      x: -1,
      dist: 47,
      distance: -8,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/shotgun-shot.mp3"],
      weapon: {
        src: "img/day-shotgun.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 21,
      knockback: 20,
      gunEffect: 0,
      cartridge: 0,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 4,
      recoilGun: 3,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0, .1, -.1, .2, -.2],
      bulletId: 2,
      bulletSpeed: 1.1,
      damageType: 1,
      magazine: 8,
      reload: 10,
      oneperone: 1,
      distance: 58,
      breath: 1,
      move: 2,
      delay: 900,
      impact: 901,
      stamina: 0,
      x: 0,
      path: 600,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/9mm-shot.mp3"],
      weapon: {
        src: "img/day-9mm.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 28,
      knockback: 10,
      gunEffect: 0,
      cartridge: 1,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 0,
      bulletSpeed: 1.2,
      damageType: 1,
      magazine: 20,
      reload: 22,
      oneperone: 0,
      distance: 40,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 0,
      x: 0,
      path: 800,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1.3,
      soundLen: 1,
      sound: ["audio/desert-eagle-shot.mp3"],
      weapon: {
        src: "img/day-desert-eagle.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 40,
      knockback: 25,
      gunEffect: 0,
      cartridge: 1,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 0,
      bulletSpeed: 1.4,
      damageType: 1,
      magazine: 7,
      reload: 22,
      oneperone: 0,
      distance: 40,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/ak47-shot.mp3"],
      weapon: {
        src: "img/day-AK47.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 30,
      knockback: 25,
      gunEffect: 0,
      cartridge: 2,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 2,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 1,
      bulletSpeed: 1.4,
      damageType: 1,
      magazine: 30,
      reload: 25,
      oneperone: 0,
      distance: 58,
      breath: 1,
      move: 2,
      delay: 120,
      impact: 121,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/sniper-shot.mp3"],
      weapon: {
        src: "img/day-sniper.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 90,
      knockback: 30,
      gunEffect: 0,
      cartridge: 2,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 1,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 1,
      bulletSpeed: 1.5,
      damageType: 1,
      magazine: 10,
      reload: 20,
      oneperone: 0,
      distance: 70,
      breath: 1,
      move: 2,
      delay: 1250,
      impact: 1251,
      stamina: 0,
      x: 0,
      path: 1100,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-raw-steak.png",
        img: {
          isLoaded: 0
        },
        angle: 1,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 30,
      radiation: 0,
      energy: 20,
      heal: -10,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-cooked-steak.png",
        img: {
          isLoaded: 0
        },
        angle: 1,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 4,
      breath: .4,
      move: .8,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 127,
      radiation: 0,
      energy: 80,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-steak.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 15,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-orange.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 40,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-orange.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-medikit.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 55,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 32
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -32
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 25,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 200,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-bandage.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 60,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-soda.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 30,
      radiation: 0,
      energy: 155,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/mp5-shot.mp3"],
      weapon: {
        src: "img/day-MP5.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 18,
      knockback: 15,
      gunEffect: 0,
      cartridge: 1,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 2,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 0,
      bulletSpeed: 1.2,
      damageType: 1,
      magazine: 30,
      reload: 26,
      oneperone: 0,
      distance: 52,
      breath: 1,
      move: 2,
      delay: 100,
      impact: 101,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      trigger: 0
    }, {
      type: 6,
      id: 0,
      shot: 0,
      rightArm: {
        angle: 0,
        x: 22,
        y: 39
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      breath: .05,
      move: 3,
      malusSpeed: 0,
      blueprint: {
        src: "img/day-hand-craft.png",
        img: {
          isLoaded: 0
        }
      },
      pencil: {
        src: "img/day-hand-craftpencil.png",
        img: {
          isLoaded: 0
        }
      },
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/pickaxe-swing.mp3"],
      weapon: {
        src: "img/day-sulfur-pickaxe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 20,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 800,
      delayClient: 800,
      impact: 801,
      impactClient: 650,
      damage: 65,
      damageCac: 30,
      knockback: 15,
      stamina: 5,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/hammer-swing.mp3"],
      weapon: {
        src: "img/day-hammer.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 1100,
      delayClient: 1100,
      impact: 1101,
      impactClient: 950,
      damage: 120,
      damageCac: 30,
      knockback: 30,
      stamina: 15,
      radius: 40,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-repair-hammer.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 20,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 700,
      delayClient: 700,
      impact: 701,
      impactClient: 550,
      damage: 40,
      damageCac: 15,
      knockback: 10,
      stamina: 6,
      radius: 40,
      dist: 59,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-tomato-soup.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 160,
      radiation: 0,
      energy: 40,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-radaway.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 25
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -25
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 255,
      energy: 30,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-tomato.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 50,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-tomato.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/crossbow-shot.mp3"],
      weapon: {
        src: "img/day-wood-crossbow.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 50,
      knockback: 15,
      gunEffect: 0,
      cartridge: 3,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 1,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 5,
      bulletSpeed: .95,
      damageType: 1,
      magazine: 1,
      reload: 8,
      oneperone: 0,
      distance: 40,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 12,
      x: 0,
      path: 800,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/nail-gun-shot.mp3"],
      weapon: {
        src: "img/day-nail-gun.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 6,
      knockback: 10,
      gunEffect: 0,
      cartridge: 4,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 6,
      bulletSpeed: 1,
      damageType: 1,
      magazine: 80,
      reload: 30,
      oneperone: 0,
      distance: 52,
      breath: 1,
      move: 2,
      delay: 300,
      impact: 301,
      stamina: 0,
      x: 0,
      path: 500,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/shotgun-shot.mp3"],
      weapon: {
        src: "img/day-sawed-off-shotgun.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 28,
      knockback: 30,
      gunEffect: 0,
      cartridge: 0,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 4,
      recoilGun: 3,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0, .12, -.12, .24, -.24],
      bulletId: 2,
      bulletSpeed: 1.11,
      damageType: 1,
      magazine: 8,
      reload: 10,
      oneperone: 1,
      distance: 53,
      breath: 1,
      move: 2,
      delay: 900,
      impact: 901,
      stamina: 0,
      x: 0,
      path: 400,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-chips.png",
        img: {
          isLoaded: 0
        },
        angle: 1,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 4,
      breath: .4,
      move: .8,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 90,
      radiation: 0,
      energy: 50,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-chips.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/laser-pistol-shot.mp3"],
      weapon: {
        src: "img/day-laser-pistol.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 55,
      knockback: 0,
      gunEffect: 1,
      cartridge: 5,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 7,
      bulletSpeed: 1.45,
      damageType: 2,
      magazine: 12,
      reload: 22,
      oneperone: 0,
      distance: 50,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/axe-swing.mp3"],
      weapon: {
        src: "img/day-sulfur-axe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .05,
      move: 3,
      delay: 650,
      impact: 651,
      impactClient: 550,
      damage: 50,
      damageCac: 30,
      knockback: 20,
      stamina: 4,
      radius: 46,
      dist: 72,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-joystick.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 2,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 0,
      poison: 0,
      consumable: 0,
      trigger: 1
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/laser-submachine-shot.mp3"],
      weapon: {
        src: "img/day-laser-submachine.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 45,
      knockback: 0,
      gunEffect: 1,
      cartridge: 5,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 2,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 7,
      bulletSpeed: 1.45,
      damageType: 2,
      magazine: 30,
      reload: 25,
      oneperone: 0,
      distance: 54,
      breath: 1,
      move: 2,
      delay: 160,
      impact: 161,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 3,
      id: 0,
      shot: 1,
      weapon: {
        src: "img/day-hand-grenade.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 50
      },
      rightArm: {
        angle: 0,
        x: 10,
        y: 44
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      bulletNumber: [0],
      bulletId: 8,
      bulletSpeed: .4,
      damageType: 1,
      path: 380,
      damage: 15,
      knockback: 5,
      breath: .05,
      breathWeapon: 2,
      move: 3,
      delay: 850,
      impact: 100,
      impactClient: 100,
      stamina: 15,
      x: -50,
      dist: 47,
      distance: 25,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-super-hammer.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 5,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 1100,
      delayClient: 1100,
      impact: 1101,
      impactClient: 950,
      damage: 1e3,
      damageCac: 255,
      knockback: 30,
      stamina: 15,
      radius: 40,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-ghoul-drug.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 13
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: -10,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-mushroom1.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 0,
      radiation: 0,
      energy: 10,
      heal: -20,
      poison: 12,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-mushroom2.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 40,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-mushroom3.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 40,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-mushroom1.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 8,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-mushroom2.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-mushroom3.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-lapadoine.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 13
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: -10,
      poison: 2,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-pumpkin.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 25
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -25
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 90,
      radiation: 0,
      energy: 20,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-pumpkin.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 25
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -25
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 30,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-antidote.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 13
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 50,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-acorn.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 15,
      radiation: 0,
      energy: 0,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "img/day-hand-rotten-acorn.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 2,
      radiation: 0,
      energy: 0,
      heal: -20,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/laser-sniper-shot.mp3"],
      weapon: {
        src: "img/day-laser-sniper.png",
        img: {
          isLoaded: 0
        },
        x: 55,
        y: 0
      },
      damage: 100,
      knockback: 0,
      gunEffect: 1,
      cartridge: 5,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 1,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 7,
      bulletSpeed: 1.5,
      damageType: 2,
      magazine: 10,
      reload: 20,
      oneperone: 0,
      distance: 70,
      breath: 1,
      move: 2,
      delay: 1250,
      impact: 1251,
      stamina: 0,
      x: 0,
      path: 1100,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-christmas-cake.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 127,
      radiation: 0,
      energy: 30,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-rotten-christmas-cake.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 10,
      radiation: 0,
      energy: 0,
      heal: -20,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-gingerbread-man.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 20,
      radiation: 0,
      energy: 20,
      heal: 40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-rotten-gingerbread-man.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 10,
      radiation: 0,
      energy: 0,
      heal: -20,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-sugar-can.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delayClient: 650,
      delay: 650,
      impact: 651,
      impactClient: 550,
      damage: 60,
      damageCac: 38,
      knockback: 20,
      stamina: 16,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "img/day-hand-sugar-can-bow.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 30,
      radiation: 0,
      energy: 50,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }],
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: .23,
    speedRun: .35,
    speedMalusBusy: .08,
    speedMalusLapadone: .08,
    speedBonusLapadone: .08,
    speedKnockback: .05,
    collisionType: 0,
    remove: 1e3,
    z: 0,
    life: 0,
    inventorySize: 8,
    lerp: .15,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    radius: 50,
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: .2,
    collisionType: 2,
    remove: 1e3,
    z: 0,
    life: 0,
    lerp: .1,
    timelife: 2e4
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    radius: 4,
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 1,
    collisionType: 2,
    remove: 1e3,
    z: 0,
    life: 0,
    lerp: .2,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    speed: .7,
    life: 0,
    z: 0,
    lerp: .2
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    explosions: [{
      src: "img/day-explosion0.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion1.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion2.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion3.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion4.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion5.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion6.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion7.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion8.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-explosion9.png",
      img: {
        isLoaded: 0
      }
    }],
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 2,
    remove: 0,
    z: 1,
    life: 64e3,
    lerp: .15,
    timelife: 1500
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: .23,
    speedRun: .35,
    speedMalusBusy: .08,
    speedKnockback: .05,
    collisionType: 0,
    remove: 1e3,
    z: 0,
    life: 0,
    inventorySize: 8,
    lerp: .15,
    timelife: -1
  }];

function U(e) {
  this.uid = 0, this.pid = 0, this.id = 0, this.type = e, this.subtype = 0, this
    .angle = 0, this.nangle = 0, this.angleX = 0, this.angleY = 0, this.state =
    0, this.extra = 0, this.broke = 0, this.x = 0, this.y = 0, this.rx = 0, this
    .ry = 0, this.nx = -1, this.ny = 0, this.px = 0, this.py = 0, this.i = 0,
    this.j = 0, this.speed = 0, this.update = 0, this.removed = 0, this.hit = 0,
    this.hitMax = 0, this.hurt = 0, this.hurtAngle = 0, this.heal = 0, this
    .death = 0, this.born = 0, this.breath = 0, this.breath2 = 0, this
    .particles = [], this.draw = null, this.lerp = .1;
  for (var i = 0; i < 10; i++) this.particles.push({
    c: 0,
    V: 0,
    l: 0,
    m: 0,
    t: 0,
    r: 0
  })
}

function Y(e, i, _, a, o, d, t, n, r, g, s, l) {
  if (e.pid = i, e.uid = _, e.id = a, e.nangle = O.reduceAngle(e.angle, 2 * s *
      window.Math.PI / 255), e.state = l, e.nx = n, e.ny = r, e.extra = g, 0 ===
    e.update) {
    var m = k[o];
    e.speed = m.speed, e.angle = e.nangle, e.x = d, e.y = t, e.z = m.z, e.lerp =
      m.lerp, e.rx = d, e.ry = t, e.i = window.Math.floor(t / re.__TILE_SIZE__),
      e.j = window.Math.floor(d / re.__TILE_SIZE__), e.hit = 0, e.hitMax = 0, e
      .hurt = 0, e.hurt2 = 0, e.hurtAngle = 0, e.heal = 0, e.death = 0, e
      .breath = 0, e.breath2 = 0, e.born = 0, e.broke = 0, e.subtype = 0, e
      .draw = null;
    var c = m.init;
    c !== window.undefined && c(e)
  }
  s = S.angle(e.rx, e.ry, n, r);
  e.angleX = window.Math.cos(s), e.angleY = window.Math.sin(s), e.update = 1
}
var H = function() {
    function e(e) {
      return e.border === e.size && (e.cycle[e.size] = e.size, e.locator[e
        .size] = e.size, e.size++), e.cycle[e.border++]
    }

    function i(e, i) {
      e.border--;
      var _ = e.cycle[e.border];
      e.cycle[e.border] = e.cycle[i], e.cycle[i] = _
    }

    function _(e) {
      this.size = e, this.border = 0, this.cycle = [], this.locator = [];
      for (var i = 0; i < e; i++) this.cycle[i] = i, this.locator[i] = i
    }
    return {
      Border: _,
      PerfectBorder: function(a) {
        var o = new _(a),
          d = o.cycle,
          t = new window.Array(a),
          n = 0,
          r = [];
        for (n = 0; n < a; n++) r[n] = -1;
        this.length = 0, this.reset = function() {
          o.border = 0, this.length = 0
        }, this.add = function(i) {
          var _ = e(o);
          t[_] = i, r[i] = o.border - 1, this.length++
        }, this.remove = function(e) {
          var _ = r[e]; - 1 !== _ && (r[e] = -1, i(o, _), this.length--,
            this.length > 0 && (r[t[d[_]]] = _))
        }, this.get = function(e) {
          return t[d[e]]
        }
      },
      ImperfectBorder: function(a) {
        var o = new _(a),
          d = o.cycle,
          t = new window.Array(a);
        this.length = 0, this.reset = function() {
          o.border = 0, this.length = 0
        }, this.add = function(i) {
          t[e(o)] = i, this.length++
        }, this.remove = function(e) {
          for (var _ = 0; _ < this.length; _++)
            if (t[d[_]] === e) return i(o, _), void this.length--
        }, this.get = function(e) {
          return t[d[e]]
        }
      },
      getNewIdentifier: function(e) {
        return e.border < e.size ? e.cycle[e.border++] : -1
      },
      forceNewIdentifier: e,
      killIdentifier: function(e, i) {
        e.border--;
        var _ = e.cycle[e.border],
          a = e.locator[i];
        e.cycle[e.border] = i, e.cycle[a] = _, e.locator[_] = a, e.locator[
          i] = e.border
      },
      fastKillIdentifier: i
    }
  }(),
  G = {
    Random: function(e) {
      var i = 2147483648,
        _ = e || window.Math.floor(window.Math.random() * (i - 1));
      this.init = function(e) {
        _ = e || window.Math.floor(window.Math.random() * (i - 1))
      }, this.get = function() {
        return (_ = (1103515245 * _ + 12345) % i) / i
      }
    }
  },
  K = (function() {
    function e(i, _, a, o) {
      var d = 0;
      a < o && (d = a + window.Math.ceil(.5 * (o - a)), NMmnN = function(e, i,
        _, a, o) {
        var d = a,
          t = e[_],
          n = e[_];
        e[_] = e[o], e[o] = n;
        for (var r = a; r < o; r++) i(e[r], t) <= 0 && (n = e[r], e[r] =
          e[d], e[d] = n, d++);
        return n = e[o], e[o] = e[d], e[d] = n, d
      }(i, _, d, a, o), e(i, _, a, NMmnN - 1), e(i, _, NMmnN + 1, o))
    }
  }(), function() {
    for (var e = 0, i = {
        eng: [e++, "en"],
        rus: [e++, "ru"],
        spa: [e++, "sp"],
        fra: [e++, "fr"],
        deu: [e++, "de"],
        ita: [e++, "it"],
        pol: [e++, "pl"],
        pt: [e++, "pt"]
      }, _ = i.eng, a = _[0], o = [], d = 0; d < 8; d++) o[d] = [];
    var t = i.eng;

    function n(e) {
      for (var i = 0; i < e.length; i++) o[a][i] = [e[i]]
    }

    function r(e, i) {
      if (function(e) {
          _ = e, K.lang = _, a = _[0], localStorage2.setItem("lang", window
            .JSON.stringify(_))
        }(e), 0 === o[e[0]].length) {
        var d = new window.XMLHttpRequest;
        d.open("GET", "json/lang" + e[1] + ".json", !0), d
          .onreadystatechange = function() {
            4 === d.readyState && 200 === this.status && (n(window.JSON.parse(
              this.NWMnMvN)), i !== window.undefined && i())
          }, d.send()
      } else i !== window.undefined && i()
    }
    return {
      languages: i,
      lang: _,
      get: function(e) {
        return o[a] === window.undefined || o[a][e] === window.undefined ?
          o[t[0]][e] : o[a][e]
      },
      getFormatted: function(e) {
        o[a] === window.undefined || o[a][e] === window.undefined ? wmwww =
          o[t][e] : wmwww = o[a][e];
        for (var i = 1; i < arguments.length; i++) wmwww[0] = wmwww[0]
          .replace("%d", arguments[i]);
        return wmwww
      },
      init: function(e, o, d) {
        if (o !== window.undefined && (t = o), e !== window.undefined) {
          var g = a;
          a = t[0], n(e), a = g
        }
        var s = localStorage2.getItem("lang");
        if (null === s) switch (window.navigator.language || window
          .navigator.userLanguage) {
          case "ru":
            _ = i.rus;
            break;
          case "en":
            _ = i.eng;
            break;
          case "es":
            _ = i.spa;
            break;
          case "fr":
            _ = i.fra;
            break;
          case "it":
            _ = i.ita;
            break;
          case "pl":
            _ = i.pol;
            break;
          case "de":
            _ = i.deu;
            break;
          case "pt":
            _ = i.pt
        } else _ = window.JSON.parse(s);
        r(_, d)
      },
      loadLanguage: r
    }
  }()),
  z = function() {
    var e = "1",
      i = 0,
      _ = 65,
      a = 68,
      o = 87,
      d = 83,
      t = 37,
      n = 39,
      r = 38,
      g = 40,
      s = new Array(255).fill(i),
      l = null;

    function m() {
      _ = 81, a = 68, o = 90, d = 83, localStorage2.setItem("keyboardMap", e),
        l = e
    }

    function c() {
      _ = 65, a = 68, o = 87, d = 83, localStorage2.setItem("keyboardMap", "0"),
        l = "0"
    }
    if (null === (l = localStorage2.getItem("keyboardMap"))) {
      var u = window.navigator.language || window.navigator.userLanguage;
      "fr" === u || "fr-FR" === u ? m() : c()
    } else l === e ? m() : c();
    return {
      setAzerty: m,
      setQwert: c,
      keyup: function(e) {
        var _ = window.Math.min(e.charCode || e.keyCode, 255);
        s[_] = i
      },
      keydown: function(e) {
        var l = Math.min(e.charCode || e.keyCode, 255);
        return l === _ || l === t ? (s[a] = i, s[n] = i) : l === o || l ===
          r ? (s[d] = i, s[g] = i) : l === d || l === g ? (s[o] = i, s[r] =
          i) : l !== a && l !== n || (s[_] = i, s[t] = i), s[l] = 1, l
      },
      clearDirectionnal: function() {
        s[a] = i, s[n] = i, s[_] = i, s[t] = i, s[o] = i, s[r] = i, s[d] = i,
          s[g] = i
      },
      isLeft: function() {
        return s[_] || s[t]
      },
      isRight: function() {
        return s[a] || s[n]
      },
      isBottom: function() {
        return s[d] || s[g]
      },
      isTop: function() {
        return s[o] || s[r]
      },
      isAzerty: function() {
        return l === e ? 1 : 0
      },
      isQwerty: function() {
        return "0" === l ? 1 : 0
      },
      isShift: function() {
        return s[16]
      },
      isKey: function(e) {
        return s[e]
      },
      LocalKeyboardEvent: function() {
        this.keyCode = 0, this.charCode = 0, this.altKey = !1, this
          .ctrlKey = !1, this.preventDefault = function() {}
      }
    }
  }(),
  J = function() {
    var e = 3e4;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var i = new window.AudioContext;
    i.createGain || (i.createGain = i.createGainNode), stream = null,
      mediaRecorder = null, chunks = [], record = null, blob = null;
    var _ = {
      isFx: 1,
      isAudio: 1
    };
    try {
      var a = localStorage2.getItem("isFx");
      null !== a ? _.isFx = window.Number(a) : 1 === L && (_.isFx = 0), null !==
        (a = localStorage2.getItem("isAudio")) ? _.isAudio = window.Number(a) :
        1 === L && (_.isAudio = 0)
    } catch (e) {
      1 === L && (_.isFx = 0, _.isAudio = 0)
    }

    function o(e, i) {
      e.gainNode.gain.value = i, e.volume = i
    }

    function d(e) {
      1 === e.run && (e.run = 0, e.volume0 = -1, e.source.stop())
    }

    function t(a, t, r) {
      if (0 === a._fx) {
        if (0 === _.isAudio) return
      } else if (0 === _.isFx) return;
      if (1 !== a.run) {
        if (0 !== a.fadeMax || 0 !== a.fade || 0 !== a.volume)
          if (1 === a.isLoaded) {
            var g = i.createBufferSource(),
              s = i.createGain();
            a.source = g, a.gainNode = s, o(a, a.volume), g.buffer = a.buffer, g
              .connect(s), null !== stream && g.connect(stream), s.connect(i
                .destination), !0 === a.loop && (g.loop = a.loop), g.stop || (g
                .stop = g.noteOff), g.start || (g.start = g.noteOn), a.source
              .start((r === window.undefined ? 0 : r) + i.currentTime, t ===
                window.undefined ? 0 : t), a.run = 1, a.start = b
          } else n(a)
      } else {
        if (-1 !== a.volume0 && 0 === a.fadeMax && b - a.volume0 > e)
        return void d(a);
        if (a.fadeMax > 0) {
          a.fade = window.Math.min(a.fade + f, a.fadeMax);
          var l = window.Math.max(0, window.Math.min(1, a.volume + window.Math
            .cos(.5 * (1 - a.fade / a.fadeMax) * window.Math.PI) * a
            .fadeEffect));
          a.gainNode.gain.value = l, a.fadingVolume = l, a.fade === a.fadeMax &&
            (a.volume = l, a.fadingVolume = -1, a.fadeMax = 0, a.fade = 0, 0 ===
              a.volume ? a.volume0 = b : a.volume0 = -1)
        }
      }
    }

    function n(e) {
      if (2 !== e.isLoaded) {
        var _ = new window.XMLHttpRequest;
        _.open("GET", e.url, !0), _.responseType = "arraybuffer", _.onload =
          function() {
            i.decodeAudioData(_.response, (function(i) {
              e.buffer = i, e.isLoaded = 1, e.durationMs = 1e3 * i
                .duration
            }))
          }, e.isLoaded = 2, _.send()
      }
    }
    return {
      Sound: function(e, i, _, a) {
        this.url = e, this.buffer = null, this.source = null, this.isLoaded =
          0, this.run = 0, this.gainNode = null, this.loop = _, this.volume =
          1, this.volume0 = -1, i !== window.undefined && (this.volume = i),
          this.fadingVolume = -1, this._fx = 0, 1 === a && (this._fx = 1),
          this.fade = 0, this.fadeMax = 0, this.fadeEffect = 0, this.start =
          0, this.durationMs = 0
      },
      loadSound: n,
      playSound: t,
      playFx: function(e, i, _, a) {
        _ > 300 || (i *= 1 - _ / 300, e.volume = i, t(e, 0, a), e.run = 0)
      },
      stopSound: d,
      fadeSound: function(e, i, _) {
        -1 !== e.fadingVolume && (e.volume = e.fadingVolume), e.fade = 0, e
          .fadeMax = i, e.fadeEffect = _
      },
      changeVolume: o,
      options: _,
      setAudio: function(e) {
        if (0 === e && _.isAudio !== e)
          for (var i in J.audio) {
            d(J.audio[i])
          }
        _.isAudio = e, localStorage2.setItem("isAudio", "" + e)
      },
      setFx: function(e) {
        if (0 === e && _.isFx !== e)
          for (var i in J._fx) {
            d(J._fx[i])
          }
        _.isFx = e, localStorage2.setItem("isFx", "" + e)
      },
      initStream: function() {
        stream = i.createMediaStreamDestination(), mediaRecorder = new window
          .MediaRecorder(stream.stream), mediaRecorder.ondataavailable =
          function(e) {
            chunks.push(e.data)
          }, mediaRecorder.onstop = function(e) {
            var i = window.JSON.parse(
            '{ "type" : "audio/ogg; codecs=opus" }');
            blob = new window.Blob(chunks, i), record = window.URL
              .createObjectURL(blob)
          }
      },
      startRecordStream: function() {
        blob = null, record = null, chunks = [], mediaRecorder.start()
      },
      stopRecordStream: function() {
        mediaRecorder.stop()
      },
      getLastRecord: function() {
        return record
      },
      audio: {},
      _fx: {}
    }
  }(),
  X = function() {
    var e, a;
    new R.LocalMouseEvent, new z.LocalKeyboardEvent;
    var t = 0,
      n = function(e) {
        return O.Ease.speedLimit(e, O.Ease.inQuart, .05)
      },
      r = 0,
      g = function(e) {
        return O.Ease.speedLimit(e, O.Ease.outQuart, .05)
      },
      s = 0,
      l = 0,
      m = window.undefined;

    function c() {
      var i = 0,
        a = 0;
      if (l > 0) {
        a = _;
        var n = m(1 - l / s);
        1 === n && (l = 0), 1 === t ? n *= -1 : n = 1 - window.Math.abs(n), i *=
          n, a *= n
      }
      e.pos.x = o - window.Math.floor(211 * h) + i, e.pos.y = window.Math.max(0,
        d - window.Math.floor(138 * h)) + a
    }
    return {
      quit: function(e) {
        a = e, l = 800, s = 800, m = n, t = 1
      },
      init: function() {
        e = T.createBackground(423, 276, "img/loading1.png")
      },
      run: function() {
        A.setRenderer(X), l = 800, s = 800, m = g, r = 1, c()
      },
      update: c,
      draw: function() {
        0 !== function() {
          if (1 === t) {
            if (c(), l < 0) return t = 0, a.run(), 0;
            l -= f
          } else if (1 === r) {
            if (c(), l < 0) {
              function e() {
                var e = V.serverList;
                Q.regions = [], Q.privateServer = [], Q.ghoulServer = [];
                for (var i = [], _ = [], a = '<select id="servers">', o =
                  0; o < e.length; o++) {
                  var d = e[o][4],
                    t = e[o][5];
                  if (t, "ghoul" !== e[o][6]) {
                    for (var n = 0; n < i.length; n++)
                      if (i[n] === d) {
                        _[n] += t, n = -1;
                        break
                      } - 1 !== n && (i.push(d), _.push(t))
                  } else Q.ghoulServer.push(o)
                }
                var r = 1,
                  g = 0;
                for (o = 0; o < i.length; o++) {
                  d = i[o], r++;
                  var s = 1;
                  for (n = 0; n < e.length; n++) e[n][4] === d &&
                    "survival" === e[n][6] && (a += '<option value="' + e[n]
                      [0] + '">' + i[o] + " " + s++, V.selectedServer ===
                      n && (g = r), r++)
                }
                for (var o in Q.htmlBattleRoyale = '<select id="servers">',
                    Q.regions) {
                  r = 0;
                  for (var l = 0; l < Q.regions[o].length; l++) r += e[Q
                    .regions[o][l]][5]
                }
                for (var o in Q.privateServer = Q.privateServer.sort((
                      function(i, _) {
                        return window.Number(e[_][5]) - window.Number(e[i]
                          [5])
                      })), Q.htmlPrivateServer = '<select id="servers">', Q
                    .privateServer) Q.htmlPrivateServer +=
                  '<option value="' + o + '">' + e[Q.privateServer[o]][4]
                  .replace("PRIV", "");
                for (var o in Q.htmlGhoulServer = '<select id="servers">', Q
                    .ghoulServer) Q.htmlGhoulServer += '<option value="' +
                  e[Q.ghoulServer[o]][0] + '">' + e[Q.ghoulServer[o]][4]
                  .replace("ghoul", "");
                if (window.document.getElementById("serverList").innerHTML =
                  a, window.document.getElementById("servers")
                  .selectedIndex = g, B.PLAYER.admin = 1, null !== X
                  .getURLData("admin") || null !== X.getURLData("member") ||
                  null !== X.getURLData("moderator")) {
                  null === X.getURLData("admin") && null === X.getURLData(
                      "moderator") || (B.PLAYER.admin = 1, window.document
                      .getElementById("chatInput").maxLength = 1e6), window
                    .document.getElementById("nickname").innerHTML +=
                    '<input id="passwordInput" type="password" placeholder="Password" maxLength="16">';
                  var m = localStorage2.getItem("password");
                  null !== m && (window.document.getElementById(
                    "passwordInput").value = m)
                }
                var c = X.getURLData("port"),
                  u = X.getURLData("ips");
                if (null !== u) {
                  u = u.replace(/\./g, "-");
                  var p = window.Number(window.document.getElementById(
                    "servers").value);
                  V.serverList[p][0] = u, V.serverList[p][1] = u +
                    ".devast.io", V.serverList[p][2] = null === c ? "443" :
                    c, V.serverList[p][3] = 1
                }
                if (null !== (u = X.getURLData("ip"))) {
                  u = u.replace(/\./g, "-");
                  p = window.Number(window.document.getElementById(
                    "servers").value);
                  V.serverList[p][0] = u, V.serverList[p][1] = u, V
                    .serverList[p][2] = null === c ? "8080" : c, V
                    .serverList[p][3] = 0
                }
              }
              r = 0, X.getURLData = function(e) {
                  _url = window.location.href;
                  var i = "[?&]" + (e = e.replace(/[\[]/, "[").replace(
                      /[\]]/, "]")) + "=([^&#]*)",
                    _ = new window.RegExp(i).exec(_url);
                  return null === _ ? null : _[1]
                }, V.types = ["BR", "PRIV", "HIDDEN", "GHOUL"], V
                .getServerList((function() {
                  e(), X.quit(Q)
                }));
              for (var i = k[__ENTITIE_EXPLOSION__].explosions, _ = Ge[
                  __ENTITIE_EXPLOSION__].explosions, o = 0; o < i
                .length; o++) i[o].img = A.loadImage(i[o].src, i[o].img), _[
                o].img = A.loadImage(_[o].src, _[o].img)
            }
            l -= f
          }
          return 1
        }() && (u.clearRect(0, 0, i, _), e.draw())
      }
    }
  }(),
  Q = function() {
    function e() {
      var e;
      if (Q.gameMode === B.__SURVIVAL__) e = "survival";
      else if (Q.gameMode === B.__GHOUL__) e = "ghoul";
      else {
        if (Q.gameMode !== B.__BR__) throw new Error("Unknown game mode", Q
          .gameMode);
        e = "br"
      }
      var i, _, a = document.getElementById("servers").value;
      "auto" == a ? (i = "https://moaning.zip/find", _ = {
        game_modes: [e]
      }) : (i = "https://moaning.zip/join", _ = {
        lobby_id: a
      });
      let o = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      window.RIVET_TOKEN && (o.Authorization = "Bearer" + window.RIVET_TOKEN),
        fetch(i, {
          method: "POST",
          headers: o,
          body: JSON.stringify(_)
        }).then((e => {
          if (e.ok) return e.json();
          throw "Failed to find lobby: " + e.status
        })).then((e => {
          let i = e.lobby;
          V.selectedServer = V.serverList.findIndex((e => e[0] == i
            .lobby_id)), V.connectedLobby = i, V.startConnection(document
            .getElementById("nicknameInput").value, 0, i.player.token)
        }))
    }

    function a(e) {}

    function t() {
      Le(j)
    }
    var n = 0;

    function r(e, i, _, a, o, d) {
      Y(D.get(0, n, n, e), 0, n, n, e, i, _, i, _, (o << 5) + (d << 10), a, 1),
        n++
    }

    function g(e, i, _, a, o, d) {
      Y(D.get(0, n, n, e), 0, n, n, e, i, _, i, _, (d << 7) + (a << 5), 0, o),
        n++
    }
    var s, l, m, c, p, E, w, b, y, v, S, M, I, P, W, F, N, x, C, k, U, H, G, K,
      q, Z, ee, ie, _e, ae, oe, de = 0;
    var te = new R.LocalMouseEvent,
      ne = (new z.LocalKeyboardEvent, 800),
      ge = 0,
      se = function(e) {
        return O.Ease.speedLimit(e, O.Ease.inQuart, .05)
      },
      le = 0,
      me = function(e) {
        return O.Ease.speedLimit(e, O.Ease.outQuart, .05)
      },
      ce = 0,
      ue = 0,
      pe = window.undefined;

    function Le(e) {
      oe = e,
        function() {
          0 === L && window.removeEventListener("mousedown", fe, !1);
          0 === L && window.removeEventListener("mouseup", be, !1);
          0 === L && window.removeEventListener("mousemove", he, !1);
          1 === L && window.removeEventListener("touchstart", ye, !1);
          1 === L && window.removeEventListener("touchend", ve, !1);
          1 === L && window.removeEventListener("touchcancel", Ae, !1);
          1 === L && window.removeEventListener("touchmove", Se, !1)
        }(), ue = ne, ce = ne, pe = se, ge = 1
    }

    function Ee() {
      var e = 0,
        a = 0;
      if (ue > 0) {
        a = _;
        var t = pe(1 - ue / ce);
        1 === t && (ue = 0), 1 === le && (t = 1 - window.Math.abs(t)), e *= t,
          a *= t
      }
      s.pos.x = o - window.Math.floor(325 * h) + window.Math.floor((0 === L ? -
          30 : -70) * h) - e, s.pos.y = window.Math.max(0, d - window.Math
          .floor(156 * h) + window.Math.floor(-150 * h)) - a, c.x = o - window
        .Math.floor(91 * h) + window.Math.floor((0 === L ? -6.8 : -47.5) * h) -
        e, m.left = c.x + "px", c.y = s.pos.y + window.Math.floor(143 * h), m
        .top = c.y + "px", p.pos.x = s.pos.x + window.Math.floor(290 * h), p.pos
        .y = s.pos.y + window.Math.floor(235 * h), b.x = i - 85 + e, w.left = b
        .x + "px", b.y = _ - 17 + window.Math.floor(-10 * h) + a, w.top = b.y +
        "px", S.x = o - window.Math.floor(100 * h) + window.Math.floor((0 ===
          L ? 12.8 : -26.5) * h) - e, v.left = S.x + "px", S.y = c.y + window
        .Math.floor(45 * h), v.top = S.y + "px", M.pos.x = i - window.Math
        .floor(230 * h) + window.Math.floor(7 * h) - e, M.pos.y = -a, W.x = i -
        200 + window.Math.floor(-10 * h) - e, P.left = W.x + "px", W.y = window
        .Math.floor(20 * h) - a, P.top = W.y + "px", F.pos.x = M.pos.x, F.pos
        .y = M.pos.y + window.Math.floor(230 * h), C.x = i - 200 + window.Math
        .floor(-10 * h) - e, x.left = C.x + "px", C.y = W.y + window.Math.floor(
          215 * h), x.top = C.y + "px", k.pos.x = window.Math.floor(15 * h) - e,
        k.pos.y = window.Math.floor(5 * h) - a, U.pos.x = s.pos.x + window.Math
        .floor(26 * h), U.pos.y = s.pos.y + window.Math.floor(36 * h), H.pos.x =
        U.pos.x + window.Math.floor(83.5 * h), H.pos.y = U.pos.y, G.pos.x = p
        .pos.x + window.Math.floor(213 * h), G.pos.y = p.pos.y + window.Math
        .floor(-98 * h), K.pos.x = G.pos.x, K.pos.y = G.pos.y + window.Math
        .floor(60 * h), q.pos.x = G.pos.x, q.pos.y = G.pos.y + window.Math
        .floor(60 * h), Z.pos.x = p.pos.x + window.Math.floor(-126 * h), Z.pos
        .y = p.pos.y + window.Math.floor(-58 * h), ee.pos.x = Z.pos.x, ee.pos
        .y = Z.pos.y + window.Math.floor(-37 * h), ie.pos.x = ee.pos.x + window
        .Math.floor(-120 * h), ie.pos.y = ee.pos.y + window.Math.floor(41 * h),
        _e.pos.x = ie.pos.x + window.Math.floor(-8.5 * h), _e.pos.y = ie.pos.y +
        window.Math.floor(-53 * h), ae.x = o - window.Math.floor(150 * h), ae
        .y = c.y + window.Math.floor(130 * h);
      var n = window.document.getElementById("nicknameInput").style,
        r = window.Math.floor(220 * h),
        g = window.Math.floor(35 * h);
      if (g += "px", r += "px", m.width = r, m.height = g, n.borderWidth =
        window.Math.floor(3 * h) + "px", n.width = r, n.height = g, n.fontSize =
        window.Math.floor(18 * h) + "px", null === X.getURLData("ips") &&
        null === X.getURLData("ip") || (v.display = "none", G.pos.y = -500, K
          .pos.y = -500, q.pos.y = -500, Z.pos.y = -500, ee.pos.y = -500),
        null !== window.document.getElementById("passwordInput")) {
        var l = window.document.getElementById("passwordInput").style,
          u = (r = window.Math.floor(220 * h), g = window.Math.floor(35 * h),
            window.Math.floor(o - r / 2) + "px");
        g += "px", r += "px", l.width = r, l.height = g, l.left = u, l
          .borderWidth = window.Math.floor(3 * h) + "px", l.width = r, l
          .height = g, l.fontSize = window.Math.floor(18 * h) + "px", l
          .marginTop = window.Math.floor(4 * h) + "px"
      }
      r = window.Math.floor(200 * h), g = window.Math.floor(28 * h), g += "px",
        r += "px", v.width = r, v.height = g, v.backgroundSize = window.Math
        .floor(17 * h) + "px";
      var E = window.document.getElementById("servers").style;
      r = window.Math.floor(230 * h) + "px", g = window.Math.floor(28 * h) +
        "px", E.width = r, E.height = g, E.fontSize = window.Math.floor(13 *
        h) + "px", r = window.Math.floor(185 * h), g = window.Math.floor(17 *
        h), u = window.Math.floor(i - r) + "px", g += "px", r += "px", _top =
        window.Math.floor(_ - 18 * h) + a + "px", w.width = r, w.height = g, w
        .left = u, w.top = _top, w.fontSize = window.Math.floor(11 * h) + "px",
        r = window.Math.floor(197 * h), g = window.Math.floor(250 * h), u =
        window.Math.floor(i - 205 * h) + "px", g += "px", r += "px", P.width =
        r, P.height = g, P.left = u, P.fontSize = window.Math.floor(11 * h) +
        "px", P.borderRadius = window.Math.floor(5 * h) + "px", P.paddingTop =
        window.Math.floor(18 * h) + "px";
      var f = window.document.getElementById("changelogTitle").style;
      r = window.Math.floor(197 * h) + "px", g = window.Math.floor(23 * h) +
        "px", f.width = r, f.height = g, f.fontSize = window.Math.floor(16 *
        h) + "px", f.paddingTop = window.Math.floor(8 * h) + "px", f
        .paddingBottom = window.Math.floor(0 * h) + "px", f.marginBottom =
        window.Math.floor(-2 * h) + "px", f.marginTop = window.Math.floor(-22 *
          h) + "px", f.borderRadius = window.Math.floor(5 * h) + "px " + window
        .Math.floor(5 * h) + "px " + window.Math.floor(0 * h) + "px " + window
        .Math.floor(0 * h) + "px";
      var y = window.document.getElementById("changelogImg").style;
      r = window.Math.floor(175 * h) + "px", g = window.Math.floor(80 * h) +
        "px", y.width = r, y.height = g, y.wnwNW = window.Math.floor(10 * h) +
        "px";
      var A = window.document.getElementById("changelogText").style;
      A.fontSize = window.Math.floor(10 * h) + "px", A.padding = window.Math
        .floor(15 * h) + "px", A.paddingTop = window.Math.floor(5 * h) + "px",
        r = window.Math.floor(197 * h), g = window.Math.floor(347 * h), u =
        window.Math.floor(i - 205 * h) + "px", MVvmn = window.Math.floor(_ -
          105 * h) + "px", g += "px", r += "px", x.width = r, x.height = g, x
        .left = u, x.bottom = MVvmn, x.fontSize = window.Math.floor(13 * h) +
        "px", x.marginTop = window.Math.floor(0 * h) + "px", x.paddingTop =
        window.Math.floor(18 * h) + "px", window.document.getElementById(
          "mainCommands").style.marginTop = window.Math.floor(55 * h) + "px",
        window.document.getElementById("secondCommands").style.marginTop =
        window.Math.floor(55 * h) + "px", window.document.getElementById(
          "moveCommand").style.paddingLeft = window.Math.floor(20 * h) + "px",
        window.document.getElementById("moveCommand").style.paddingRight =
        window.Math.floor(20 * h) + "px", window.document.getElementById(
          "hitCommands").style.paddingLeft = window.Math.floor(10 * h) + "px",
        window.document.getElementById("hitCommands").style.paddingRight =
        window.Math.floor(10 * h) + "px", window.document.getElementById(
          "runCommands").style.paddingLeft = window.Math.floor(0 * h) + "px",
        window.document.getElementById("runCommands").style.paddingRight =
        window.Math.floor(20 * h) + "px", window.document.getElementById(
          "interactCommands").style.paddingLeft = window.Math.floor(7 * h) +
        "px", window.document.getElementById("interactCommands").style
        .paddingRight = window.Math.floor(0 * h) + "px", window.document
        .getElementById("craftCommands").style.paddingLeft = window.Math.floor(
          5 * h) + "px", window.document.getElementById("craftCommands").style
        .paddingRight = window.Math.floor(18 * h) + "px", window.document
        .getElementById("mapCommands").style.paddingLeft = window.Math.floor(6 *
          h) + "px", window.document.getElementById("mapCommands").style
        .paddingRight = window.Math.floor(12 * h) + "px";
      var O = window.document.getElementById("howtoplayTitle").style;
      r = window.Math.floor(197 * h) + "px", g = window.Math.floor(23 * h) +
        "px", O.width = r, O.height = g, O.fontSize = window.Math.floor(16 *
        h) + "px", O.paddingTop = window.Math.floor(0 * h) + "px", O
        .paddingBottom = window.Math.floor(13 * h) + "px", O.marginBottom =
        window.Math.floor(6 * h) + "px", O.marginTop = window.Math.floor(0 *
        h) + "px", O.borderRadius = window.Math.floor(5 * h) + "px " + window
        .Math.floor(5 * h) + "px " + window.Math.floor(0 * h) + "px " + window
        .Math.floor(0 * h) + "px";
      var R = window.document.getElementById("howtoplayText").style;
      R.fontSize = window.Math.floor(11 * h) + "px", R.MNmmV = window.Math
        .floor(6 * h) + "px", R.height = window.Math.floor(52 * h) + "px";
      var T = window.document.getElementById("howtoplayCommands").style;
      r = window.Math.floor(197 * h) + "px", g = window.Math.floor(23 * h) +
        "px", T.width = r, T.height = g, T.fontSize = window.Math.floor(16 *
        h) + "px", T.paddingTop = window.Math.floor(13 * h) + "px", T
        .paddingBottom = window.Math.floor(13 * h) + "px", T.marginBottom =
        window.Math.floor(6 * h) + "px", T.marginTop = window.Math.floor(11 *
        h) + "px"
    }

    function fe(e) {
      R.updateAll(e, R.__MOUSE_DOWN__);
      p.trigger(), U.trigger(), H.trigger(), G.trigger(), K.trigger(), q
        .trigger(), Z.trigger(), ee.trigger(), ie.trigger(), _e.trigger()
    }

    function be(i) {
      R.updateAll(i, R.__MOUSE_UP__);
      if (1 === p.trigger() && (1, e(), J.playFx(J._fx.play, 1, 0)), 1 === U
        .trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      if (1 === H.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      1 === G.trigger() && (1, 0 !== Q.gameMode && 0 == (V.state & State
        .__PENDING__) && 0 == (V.state & State.__CONNECTED__) && (Q
        .gameMode = 0, J.playFx(J._fx.button, 1, 0), ee.show(), Z.show(),
        window.document.getElementById("serverList").innerHTML = Q
        .survivalHtml, window.document.getElementById("servers")
        .selectedIndex = Q.survivalIndex, Ee())), K.trigger();
      if (1 === q.trigger() && (1, 1 !== Q.gameMode && 1 === Q.publicMode &&
          0 == (V.state & State.__PENDING__) && 0 == (V.state & State
            .__CONNECTED__))) {
        Q.serverTest = 0, Q.gameMode = B.__GHOUL__, J.playFx(J._fx.button, 1,
          0), ee.hide(), Z.hide(), Q.survivalHtml = window.document
          .getElementById("serverList").innerHTML, Q.survivalIndex = window
          .document.getElementById("servers").selectedIndex, window.document
          .getElementById("serverList").innerHTML = Q.htmlGhoulServer;
        var _ = window.Math.floor(1 * window.Math.random());
        window.document.getElementById("servers").selectedIndex = _, Ee()
      }
      if (1 === Z.trigger() && (1, 0 !== Q.publicMode && 0 === Q.gameMode &&
          0 == (V.state & State.__PENDING__) && 0 == (V.state & State
            .__CONNECTED__) && (Q.serverTest = 0, Q.publicMode = 0, J.playFx(J
              ._fx.button, 1, 0), G.hide(), K.hide(), q.hide(), Q.survivalHtml =
            window.document.getElementById("serverList").innerHTML, Q
            .survivalIndex = window.document.getElementById("servers")
            .selectedIndex, window.document.getElementById("serverList")
            .innerHTML = Q.htmlPrivateServer, Q.serverTest = 0, window.document
            .getElementById("servers").selectedIndex = 0, Ee())), 1 === ee
        .trigger() && (1, 1 !== Q.publicMode && 0 === Q.gameMode && 0 == (V
            .state & State.__PENDING__) && 0 == (V.state & State
          .__CONNECTED__) && (Q.publicMode = 1, Q.gameMode = 0, J.playFx(J._fx
              .button, 1, 0), G.show(), q.show(), window.document
            .getElementById("serverList").innerHTML = Q.survivalHtml, window
            .document.getElementById("servers").selectedIndex = Q.survivalIndex,
            Ee())), 1 === ie.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      1 === _e.trigger() && (1, Q.quit($), J.playFx(J._fx.play, 1, 0))
    }

    function he(e) {
      R.updateAll(e, R.__MOUSE_MOVE__);
      p.trigger(), U.trigger(), H.trigger(), G.trigger(), K.trigger(), q
        .trigger(), Z.trigger(), ee.trigger(), ie.trigger(), _e.trigger()
    }

    function ye(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(te, e, e.touches[0]), fe(te))
    }

    function ve(e) {
      be(te)
    }

    function Ae(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(te, e, e.touches[0]), be(te))
    }

    function Se(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(te, e, e.touches[0]), he(te))
    }
    return {
      quit: Le,
      init: function() {
        Q.joinServer = e, Q.gameMode = 0, Q.publicMode = 1, Q.alertId = 0, Q
          .alertDelay = 0, window.document.getElementById("nicknameInput")
          .value = localStorage2.getItem("nickname", l), J.fadeSound(J.audio
            .title, 1e3, ni.musicVolume), D.removeAll(), re.reset(1), n = 0,
          r(__ENTITIE_RESOURCES_DOWN__, 200, 0, 127, Ie.STONE, 3), r(
            __ENTITIE_RESOURCES_TOP__, 400, 100, 127, Ie.ORANGETREE, 2), r(
            __ENTITIE_RESOURCES_STOP__, 100, 100, 127, Ie.LEAFTREE, 0), g(
            __ENTITIE_BUILD_GROUND__, 900, 500, 0, 33, we.__SMELTER__), g(
            __ENTITIE_BUILD_DOWN__, 800, 400, 1, 1, we.__WORKBENCH__), r(
            __ENTITIE_RESOURCES_STOP__, 1100, 300, 10, Ie.LEAFTREE, 1), r(
            __ENTITIE_RESOURCES_STOP__, 800, 200, 127, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_STOP__, 700, 100, 127, Ie.LEAFTREE, 3), r(
            __ENTITIE_RESOURCES_STOP__, 1200, 0, 127, Ie.LEAFTREE, 0), r(
            __ENTITIE_RESOURCES_STOP__, 1300, 100, 127, Ie.LEAFTREE, 4), r(
            __ENTITIE_RESOURCES_STOP__, 1300, 300, 127, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_STOP__, 800, 500, 127, Ie.LEAFTREE, 4), r(
            __ENTITIE_RESOURCES_TOP__, 1e3, 200, 127, Ie.ORANGETREE, 0), r(
            __ENTITIE_RESOURCES_STOP__, 700, 600, 127, Ie.LEAFTREE, 0), r(
            __ENTITIE_RESOURCES_STOP__, 500, 400, 127, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_DOWN__, 500, 700, 127, Ie.STONE, 3), r(
            __ENTITIE_RESOURCES_DOWN__, 1e3, 300, 127, Ie.STONE, 4), r(
            __ENTITIE_RESOURCES_STOP__, 1300, 500, 100, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_STOP__, 1200, 700, 127, Ie.LEAFTREE, 4), r(
            __ENTITIE_RESOURCES_STOP__, 1300, 700, 127, Ie.LEAFTREE, 0), r(
            __ENTITIE_RESOURCES_DOWN__, 800, 600, 127, Ie.STONE, 5), r(
            __ENTITIE_RESOURCES_STOP__, 500, 600, 127, Ie.LEAFTREE, 4), r(
            __ENTITIE_RESOURCES_DOWN__, 200, 400, 127, Ie.URANIUM, 0), r(
            __ENTITIE_RESOURCES_DOWN__, 400, 500, 50, Ie.WOOD, 3), r(
            __ENTITIE_RESOURCES_STOP__, 100, 400, 190, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_STOP__, 100, 500, 190, Ie.LEAFTREE, 3), r(
            __ENTITIE_RESOURCES_STOP__, 100, 600, 127, Ie.LEAFTREE, 4), r(
            __ENTITIE_RESOURCES_STOP__, 0, 500, 127, Ie.LEAFTREE, 1), r(
            __ENTITIE_RESOURCES_STOP__, 200, 300, 50, Ie.LEAFTREE, 4), r(
            __ENTITIE_RESOURCES_STOP__, 400, 200, 10, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_STOP__, 500, 200, 10, Ie.LEAFTREE, 1), r(
            __ENTITIE_RESOURCES_STOP__, 100, 800, 10, Ie.LEAFTREE, 0), r(
            __ENTITIE_RESOURCES_STOP__, 400, 800, 10, Ie.LEAFTREE, 1), r(
            __ENTITIE_RESOURCES_STOP__, 700, 800, 10, Ie.LEAFTREE, 2), r(
            __ENTITIE_RESOURCES_DOWN__, 900, 700, 50, Ie.WOOD, 4), s = 1 ===
          L ? T.createBackground(650, 312, "img/logo-homepage-mobile2.png") :
          T.createBackground(650, 312, "img/logo-homepage4.png"), l = window
          .document.getElementById("nickname"), m = l.style, c = {
            x: 0,
            y: 0
          }, l.addEventListener("keyup", (function(i) {
            1 != (ge | le) && 13 === i.keyCode && e()
          }), !1), p = T.createButton(136, 57, ["img/play-button-out.png",
            "img/play-button-in.png", "img/play-button-click.png"
          ]), E = window.document.getElementById("terms"), w = E.style, b = {
            x: 0,
            y: 0
          }, y = window.document.getElementById("serverList"), v = y.style,
          S = {
            x: 0,
            y: 0
          }, y.addEventListener("mouseover", (function(e) {}), !1), y
          .addEventListener("mousedown", (function(e) {}), !1), y
          .addEventListener("mouseup", (function(e) {}), !1), M = 1 === L ? T
          .createBackground(0, 0) : T.createBackground(230, 235,
            "img/changelogBox.png"), I = window.document.getElementById(
            "changelog"), P = I.style, W = {
            x: 0,
            y: 0
          }, F = 1 === L ? T.createBackground(0, 0) : T.createBackground(230,
            355, "img/commandsBox.png"), N = window.document.getElementById(
            "howtoplay"), x = N.style, C = {
            x: 0,
            y: 0
          }, k = 1 === L ? T.createBackground(0, 0) : T.createBackground(123,
            55, "img/gameMade.png"), U = 1 === L ? T.createButton(0, 0) : T
          .createButton(54, 54, ["img/home-reddit-button-out.png",
            "img/home-reddit-button-in.png",
            "img/home-reddit-button-click.png"
          ]), H = 1 === L ? T.createButton(0, 0) : T.createButton(54, 54, [
            "img/home-discord-button-out.png",
            "img/home-discord-button-in.png",
            "img/home-discord-button-click.png"
          ]), G = T.createButton(93, 51, ["img/survivalmode-button-out.png",
            "img/survivalmode-button-in.png",
            "img/survivalmode-button-click.png"
          ]), K = T.createButton(93, 51, ["img/battle-royale-button-out.png",
            "img/battle-royale-button-in.png",
            "img/battle-royale-button-click.png"
          ]), q = T.createButton(93, 51, ["img/ghoul-mode-button-out.png",
            "img/ghoul-mode-button-in.png",
            "img/ghoul-mode-button-click.png"
          ]), Z = T.createButton(68, 34, ["img/private-server-button-out.png",
            "img/private-server-button-in.png",
            "img/private-server-button-click.png"
          ]), ee = T.createButton(68, 34, ["img/public-server-button-out.png",
            "img/public-server-button-in.png",
            "img/public-server-button-click.png"
          ]), ie = 1 === L ? T.createButton(0, 0) : T.createButton(86, 48, [
            "img/privateserver-button-out.png",
            "img/privateserver-button-in.png",
            "img/privateserver-button-click.png"
          ]), _e = 1 === L ? T.createButton(0, 0) : T.createButton(52, 42, [
            "img/map-editor-button-out.png", "img/map-editor-button-in.png",
            "img/map-editor-button-click.png"
          ]), ae = {
            x: 0,
            y: 0
          }
      },
      run: function() {
        V.onError = a, V.onOpen = t, B.PLAYER.isBuilding = 0, B.PLAYER.id = 0,
          re.setDetection(0), re.stopPoisonEffect(), 1 === Q.gameMode && (ee
            .hide(), Z.hide()), 1 === L && _e.hide(), A.setRenderer(Q), ue =
          2e3, ce = 2e3, pe = me, le = 1, Ee(), m.display = "inline-block",
          0 === L && (w.display = "inline-block"), v.display = "inline-block",
          0 === L && (P.display = "inline-block"), 0 === L && (x.display =
            "inline-block")
      },
      update: Ee,
      draw: function() {
        0 !== function() {
          if (1 === ge) {
            if (Ee(), ue < 0) return ge = 0, m.display = "none", p.setState(
                T.__BUTTON_OUT__), w.display = "none", v.display = "none",
              P.display = "none", x.display = "none", U.setState(T
                .__BUTTON_OUT__), H.setState(T.__BUTTON_OUT__), G
              .setState(T.__BUTTON_OUT__), K.setState(T.__BUTTON_OUT__), q
              .setState(T.__BUTTON_OUT__), Z.setState(T.__BUTTON_OUT__),
              ee.setState(T.__BUTTON_OUT__), ie.setState(T
              .__BUTTON_OUT__), _e.setState(T.__BUTTON_OUT__), oe.run(), 0;
            ue -= f
          } else 1 === le && (Ee(), ue < 0 && (le = 0, window.document
            .getElementById("bod").style.backgroundColor = "#46664d",
            function() {
              0 === L && window.addEventListener("contextmenu", (
                function(e) {
                  return e.preventDefault(), !1
                }), !1);
              0 === L && window.addEventListener("mousedown", fe, !1);
              0 === L && window.addEventListener("mouseup", be, !1);
              0 === L && window.addEventListener("mousemove", he, !1);
              1 === L && window.addEventListener("touchstart", ye, !1);
              1 === L && window.addEventListener("touchend", ve, !1);
              1 === L && window.addEventListener("touchcancel", Ae, !1);
              1 === L && window.addEventListener("touchmove", Se, !1)
            }()), ue -= f);
          return 1
        }() && (u.clearRect(0, 0, i, _), re.world(), ue > 0 && (de = pe(1 -
              ue / ce), 1 === le && (de = 1 - window.Math.abs(de)), de = 1 -
            de), u.globalAlpha = .3 * de, u.fillStyle = "#000000", u
          .fillRect(0, 0, i, _), u.globalAlpha = 1, Q.gameMode === B
          .__SURVIVAL__ ? G.setState(T.__BUTTON_CLICK__) : Q.gameMode === B
          .__BR__ ? K.setState(T.__BUTTON_CLICK__) : Q.gameMode === B
          .__GHOUL__ && q.setState(T.__BUTTON_CLICK__), 0 === Q.publicMode ?
          Z.setState(T.__BUTTON_CLICK__) : 1 === Q.publicMode && ee
          .setState(T.__BUTTON_CLICK__), s.draw(), p.draw(), M.draw(), F
          .draw(), k.draw(), U.draw(), H.draw(), G.draw(), q.draw(), Z
          .draw(), ee.draw(), ie.draw(), _e.draw(), re.alertServer(), ni
          .scheduler())
      }
    }
  }(),
  j = function() {
    function a(e) {
      1 === B.gameMode ? Vi(Z) : Vi(q)
    }

    function n() {}

    function r() {
      return p
    }

    function g() {
      return p & b
    }
    var c = 0,
      p = 0,
      E = 0,
      w = 0,
      b = 0,
      y = 0,
      v = 0,
      M = 0;

    function I(e) {
      P(), p = 1, 1 === e ? b = 1 : 2 === e && (y = 1)
    }

    function P() {
      p = 0, ee.setState(T.__BUTTON_OUT__), E = 0, w = 0, b = 0, y = 0, v = 0, B
        .releaseBuilding()
    }
    var W = T.createButton(63, 28, ["img/addteam-button-out.png",
        "img/addteam-button-in.png", "img/addteam-button-click.png"
      ]),
      F = T.createButton(44, 33, ["img/leave-button-out.png",
        "img/leave-button-in.png", "img/leave-button-click.png"
      ]),
      N = T.createButton(44, 33, ["img/lockteam-button-out.png",
        "img/lockteam-button-in.png", "img/lockteam-button-click.png"
      ]),
      x = T.createButton(44, 33, ["img/unlockteam-button-out.png",
        "img/unlockteam-button-in.png", "img/unlockteam-button-click.png"
      ]),
      C = T.createButton(44, 33, ["img/delete-button-out.png",
        "img/delete-button-in.png", "img/delete-button-click.png"
      ]),
      D = T.createButton(44, 33, ["img/delete-button-out.png",
        "img/delete-button-in.png", "img/delete-button-click.png"
      ]),
      U = T.createButton(44, 33, ["img/join-button-out.png",
        "img/join-button-in.png", "img/join-button-click.png"
      ]),
      Y = T.createButton(71, 46, ["img/craft-button-out.png",
        "img/craft-button-in.png", "img/craft-button-click.png"
      ]),
      H = T.createButton(71, 46, ["img/cancel-craft-button-out.png",
        "img/cancel-craft-button-in.png", "img/cancel-craft-button-click.png"
      ]),
      G = T.createButton(71, 46, ["img/unlock-button-out.png",
        "img/unlock-button-in.png", "img/unlock-button-click.png"
      ]),
      K = T.createButton(64, 63, ["img/bag-button-out.png",
        "img/bag-button-in.png", "img/bag-button-click.png"
      ]);
    K.open = 0;
    var X = [],
      Q = [],
      $ = 0,
      ee = T.createButton(43, 43, ["img/close-box-out.png",
        "img/close-box-in.png", "img/close-box-click.png"
      ]),
      ie = [A.loadImage("img/high-particules-out.png"), A.loadImage(
        "img/high-particules-in.png"), A.loadImage(
        "img/high-particules-click.png")],
      _e = [A.loadImage("img/join-button-out.png"), A.loadImage(
        "img/join-button-in.png"), A.loadImage("img/join-button-click.png")],
      ae = [A.loadImage("img/remove-button-out.png"), A.loadImage(
        "img/remove-button-in.png"), A.loadImage(
        "img/remove-button-click.png")],
      oe = T.createButton(54, 42, null, ie),
      de = [A.loadImage("img/low-particules-out.png"), A.loadImage(
        "img/low-particules-in.png"), A.loadImage(
        "img/low-particules-click.png")],
      te = T.createButton(54, 42, null, de),
      ne = [A.loadImage("img/no-particules-out.png"), A.loadImage(
        "img/no-particules-in.png"), A.loadImage(
        "img/no-particules-click.png")],
      ge = T.createButton(54, 42, null, ne),
      se = [A.loadImage("img/fuel-button-out.png"), A.loadImage(
        "img/fuel-button-in.png"), A.loadImage("img/fuel-button-click.png")],
      me = T.createButton(46, 46, null, se),
      ce = [A.loadImage("img/fuel1-button-out.png"), A.loadImage(
        "img/fuel1-button-in.png"), A.loadImage("img/fuel1-button-click.png")],
      ue = T.createButton(46, 46, null, ce),
      pe = [A.loadImage("img/energy-cells-button-out.png"), A.loadImage(
        "img/energy-cells-button-in.png"), A.loadImage(
        "img/energy-cells-button-click.png")],
      Le = T.createButton(46, 46, null, pe),
      we = [A.loadImage("img/high-resolution-out.png"), A.loadImage(
        "img/high-resolution-in.png"), A.loadImage(
        "img/high-resolution-click.png")],
      fe = T.createButton(54, 42, null, we),
      be = [A.loadImage("img/medium-resolution-out.png"), A.loadImage(
        "img/medium-resolution-in.png"), A.loadImage(
        "img/medium-resolution-click.png")],
      he = T.createButton(54, 42, null, be),
      ye = [A.loadImage("img/low-resolution-out.png"), A.loadImage(
        "img/low-resolution-in.png"), A.loadImage(
        "img/low-resolution-click.png")],
      Ae = T.createButton(54, 42, null, ye),
      Se = [A.loadImage("img/azerty-button-out.png"), A.loadImage(
        "img/azerty-button-in.png"), A.loadImage(
        "img/azerty-button-click.png")],
      Re = T.createButton(81, 33, null, Se),
      Te = [A.loadImage("img/qwerty-button-out.png"), A.loadImage(
        "img/qwerty-button-in.png"), A.loadImage(
        "img/qwerty-button-click.png")],
      Me = T.createButton(87, 33, null, Te),
      Ie = [A.loadImage("img/sound-on-out.png"), A.loadImage(
        "img/sound-on-in.png"), A.loadImage("img/sound-on-click.png")],
      Pe = [A.loadImage("img/sound-off-out.png"), A.loadImage(
        "img/sound-off-in.png"), A.loadImage("img/sound-off-click.png")],
      We = T.createButton(51, 36, null, Ie),
      Fe = T.createButton(51, 36, null, Pe),
      Ne = T.createButton(51, 36, null, Ie),
      xe = T.createButton(51, 36, null, Pe),
      Ce = -1,
      Ve = -1,
      Be = A.loadImage("img/inv-empty.png"),
      De = [Be, Be, Be],
      ke = [],
      Ue = [],
      Ye = [],
      He = [],
      Ge = [],
      Ke = [],
      ze = [],
      Je = [],
      Xe = T.createButton(58, 58, null, De),
      Qe = [],
      je = [],
      qe = 0,
      Ze = 0,
      $e = 0,
      ei = 0,
      ii = 0,
      _i = 0,
      ai = 0,
      oi = 0;

    function di() {
      V.update(), f > 5e3 && V.sendPacket("[20]"), 0 === c && (V.sendMove(), V
          .sendShift()), R.state === R.__MOUSE_DOWN__ ? V.sendFastMouseAngle() :
        V.sendMouseAngle(), R.state === R.__MOUSE_DOWN__ && 0 === B.PLAYER
        .click ? 1 === B.PLAYER.isBuilding ? (B.PLAYER.click = -1, 1 === B
          .PLAYER.canBuild && V.sendPacket(window.JSON.stringify([14, B.PLAYER
            .buildRotate, B.PLAYER.iBuild, B.PLAYER.jBuild
          ]))) : (B.PLAYER.click = 1, B.interaction = -1, V.sendMouseDown()) : R
        .state === R.__MOUSE_UP__ && (1 === B.PLAYER.isBuilding ? ($ = 0, B
          .PLAYER.click = 0) : 1 === B.PLAYER.click ? ($ = 0, B.PLAYER.click =
          0, V.sendMouseUp()) : 1 === $ && (B.PLAYER.click = 1, B
          .interaction = -1, V.sendMouseDown()))
    }
    var ti, ri, gi, si, li, mi, ci, ui, pi, Li, Ei, wi, fi, bi, hi, yi, vi, Ai,
      Si, Oi;
    var Ri = new R.LocalMouseEvent,
      Ti = new z.LocalKeyboardEvent,
      Mi = 2e3,
      Ii = 0,
      Pi = O.Ease.inQuad,
      Wi = 0,
      Fi = O.Ease.outQuad,
      Ni = 0,
      xi = 0,
      Ci = window.undefined;

    function Vi(e) {
      c = 0, P(), ni.quitGame(), Oi = e,
        function() {
          0 === L && window.addEventListener("wheel", Xi, !1);
          0 === L && window.removeEventListener("mousedown", Di, !1);
          0 === L && window.removeEventListener("mouseup", ki, !1);
          0 === L && window.removeEventListener("mousemove", Ui, !1);
          0 === L && window.removeEventListener("keyup", Yi, !1);
          0 === L && window.removeEventListener("keydown", Hi, !1);
          1 === L && window.removeEventListener("touchstart", Gi, !1);
          1 === L && window.removeEventListener("touchend", Ki, !1);
          1 === L && window.removeEventListener("touchcancel", zi, !1);
          1 === L && window.removeEventListener("touchmove", Ji, !1)
        }(), xi = Mi, Ni = Mi, Ci = Pi, Ii = 1
    }

    function Bi() {
      var e = 0,
        a = 0;
      if (xi > 0) {
        a = _;
        var t = Ci(1 - xi / Ni);
        1 === t && (xi = 0), 1 === Wi && (t = 1 - window.Math.abs(t)), e *= t,
          a *= t
      }
      ti.pos.x = window.Math.floor(5 * h) + e, ti.pos.y = _ - window.Math.floor(
          174 * h) + window.Math.floor(-7 * h) + a, ri.pos.x = o - window.Math
        .floor(134 * h) + e, ri.pos.y = window.Math.max(0, d - window.Math
          .floor(133 * h)) + a, gi.pos.x = o - window.Math.floor(81 * h) + e, gi
        .pos.y = window.Math.max(0, d - window.Math.floor(82 * h)) + a, si.pos
        .x = o - window.Math.floor(297 * h) + e, si.pos.y = window.Math.max(0,
          d - window.Math.floor(202 * h)) + a, li.pos.x = o - window.Math.floor(
          206 * h) + e, li.pos.y = window.Math.max(0, d - window.Math.floor(
          206 * h)) + a, mi.pos.x = window.Math.floor(5 * h) - e, mi.pos.y =
        window.Math.floor(5 * h) - a, ci.pos.x = i - window.Math.floor(233 *
        h) + window.Math.floor(-6 * h) - e, ci.pos.y = window.Math.floor(5 *
        h) - a, ui.pos.x = o - window.Math.floor(258 * h) - e, ui.pos.y = window
        .Math.max(0, d - window.Math.floor(137 * h)) - a, pi.pos.x = o - window
        .Math.floor(256 * h) - e, pi.pos.y = window.Math.max(0, d - window.Math
          .floor(75 * h)) - a, Li.pos.x = mi.pos.x + window.Math.floor(126 * h),
        Li.pos.y = mi.pos.y, Ei.pos.x = Li.pos.x + window.Math.floor(50 * h), Ei
        .pos.y = Li.pos.y, wi.pos.x = Li.pos.x, wi.pos.y = Li.pos.y + window
        .Math.floor(44.5 * h), fi.pos.x = wi.pos.x, fi.pos.y = wi.pos.y + window
        .Math.floor(44.5 * h), bi.pos.x = mi.pos.x, bi.pos.y = mi.pos.y + window
        .Math.floor(127 * h), hi.pos.x = i - window.Math.floor(34 * h) + window
        .Math.floor(-7 * h) - e, hi.pos.y = window.Math.floor(5 * h) - a, yi.pos
        .x = hi.pos.x, yi.pos.y = hi.pos.y, Si.x = o - window.Math.floor(150 *
          h) + e, Ai.left = Si.x + "px", Si.y = window.Math.max(0, d - 12) +
        window.Math.floor(150 * h) + a, Ai.top = Si.y + "px";
      var n = window.document.getElementById("chatInput").style,
        r = window.Math.floor(250 * h),
        g = window.Math.floor(20 * h),
        s = window.Math.floor(o - r / 2) + "px",
        l = window.Math.floor(d - g / 2 + 85 * h + a) + "px";
      g += "px", r += "px", Ai.width = r, Ai.height = g, Ai.left = s, Ai.top =
        l, n.width = r, n.height = g, n.fontSize = window.Math.floor(14 * h) +
        "px"
    }

    function Di(e) {
      R.updateAll(e, R.__MOUSE_DOWN__);
      var i = 0;
      if (1 === Li.trigger() && (i = 1), 1 === Ei.trigger() && (i = 1), 1 === wi
        .trigger() && (i = 1), 1 === fi.trigger() && (i = 1), 1 === bi
      .trigger() && (i = 1), 1 === hi.trigger() && (i = 1), 1 === yi
      .trigger() && (i = 1), 0 !== B.PLAYER.teamJoin && (1 !== U.trigger() &&
          1 !== D.trigger() || (i = 1)), 1 === p)
        if (ee.trigger(), 1 === w) Re.trigger(), Me.trigger(), fe.trigger(), he
          .trigger(), Ae.trigger(), We.trigger(), Fe.trigger(), Ne.trigger(), xe
          .trigger(), te.trigger(), oe.trigger(), ge.trigger();
        else if (1 === b) {
        -1 === B.PLAYER.craftCategory ? (0 === B.PLAYER.crafting || 1 === B
          .PLAYER.isInBuilding ? Y.trigger() : H.trigger(), B.PLAYER
          .craftArea !== le.__FIRE__ && B.PLAYER.craftArea !== le.__BBQ__ && B
          .PLAYER.craftArea !== le.__COMPOST__ || 255 === B.PLAYER.building
          .fuel ? B.PLAYER.craftArea !== le.__SMELTER__ && B.PLAYER
          .craftArea !== le.__EXTRACTOR__ && B.PLAYER.craftArea !== le
          .__AGITATOR__ || 255 === B.PLAYER.building.fuel || ue.trigger() : me
          .trigger()) : G.trigger();
        for (var _ = 0; _ < X.length; _++) X[_].trigger();
        for (_ = 0; _ < Q.length; _++) B.PLAYER.buildingArea !== _ && 0 !== _ ||
          Q[_].trigger();
        var a = B.PLAYER.craftLen;
        for (_ = 0; _ < a; _++) Ue[_].trigger();
        for (a = B.PLAYER.recipeLen, _ = 0; _ < a; _++) Ye[_].trigger();
        if (1 === B.PLAYER.isInBuilding)
          for (_ = 0; _ < B.PLAYER.building.len; _++) He[_].trigger();
        for (a = B.PLAYER.toolsLen, _ = 0; _ < a; _++) Ge[_].trigger();
        Xe.trigger()
      }
      var o = B.PLAYER.inventory;
      (a = o.length) > 10 && 1 === K.trigger() && (i = 1);
      for (_ = 0; _ < a; _++)
        if (1 === ke[_].trigger()) {
          if (i = 1, 0 !== o[_][0]) {
            var d = B.PLAYER.drag;
            0 === d.begin && (d.begin = 1, d.x = R.x, d.y = R.y, d.id = _)
          }
        } else if (1 === y)
        for (var t = B.PLAYER.chest, n = 0; n < 4; n++) 0 !== t[n][0] && Je[n]
          .trigger();
      else if (1 === v)
        if (-1 === B.PLAYER.team) {
          W.trigger();
          var r = 0;
          for (_ = 0; _ < Ke.length; _++) 0 !== B.teams[_].leader && (Ke[r]
            .trigger(), r++)
        } else if (1 === B.PLAYER.teamLeader) {
        N.trigger(), x.trigger(), C.trigger();
        r = 0;
        var g = B.teams[B.PLAYER.team];
        for (_ = 0; _ < B.players.length; _++)
          if (_ !== B.PLAYER.id) {
            var s = B.players[_];
            s.team === g.id && s.teamUid === g.uid && (ze[r].trigger(), r++)
          } else r++
      } else F.trigger();
      0 === i && 0 === p ? ($ = 1, -1 === B.PLAYER.click && (B.PLAYER.click =
        0)) : 0 === B.PLAYER.click && (B.PLAYER.click = -1)
    }

    function ki(i) {
      R.updateAll(i, R.__MOUSE_UP__);
      if (1 === Li.trigger() && (1, 0 === M ? (M = 1, A.enableFullscreen(),
          0 === B.day ? e.style.backgroundColor = "#3D5942" : e.style
          .backgroundColor = "#0B2129", J.playFx(J._fx.button, 1, 0)) : (M =
          0, A.disableFullscreen(), J.playFx(J._fx.button, 1, 0))), 1 === Ei
        .trigger() && (1, 0 === B.PLAYER.ghoul)) return 0 === b ? (P(), p = 1,
        b = 1, B.buildCraftList(le.__PLAYER__), void J.playFx(J._fx.open, 1,
          0)) : (P(), void J.playFx(J._fx.open, 1, 0));
      if (1 === wi.trigger()) return 1, 0 === w ? (P(), p = 1, w = 1, void J
        .playFx(J._fx.open, 1, 0)) : (P(), void J.playFx(J._fx.open, 1, 0));
      if (1 === fi.trigger()) return 1, 0 === E ? (P(), p = 1, E = 1, void J
        .playFx(J._fx.open, 1, 0)) : (P(), void J.playFx(J._fx.open, 1, 0));
      if (1 === bi.trigger()) return 1, 0 === v ? (P(), p = 1, v = 1, void J
        .playFx(J._fx.open, 1, 0)) : (P(), void J.playFx(J._fx.open, 1, 0));
      if (1 === hi.trigger()) return 1, hi.hide(), yi.show(), localStorage2
        .setItem("showLeaderboard", "0"), void J.playFx(J._fx.button, 1, 0);
      if (1 === yi.trigger()) return 1, yi.hide(), hi.show(), localStorage2
        .setItem("showLeaderboard", "1"), void J.playFx(J._fx.button, 1, 0);
      var _ = B.PLAYER.drag;
      if (0 !== B.PLAYER.teamJoin) {
        if (1 === U.trigger()) return V.sendPacket(window.JSON.stringify([31, B
          .PLAYER.teamJoin
        ])), J.playFx(J._fx.button, 1, 0), void B.nextInvitation();
        if (1 === D.trigger()) return J.playFx(J._fx.button, 1, 0), void B
          .nextInvitation()
      }
      if (1 === p) {
        if (1 === ee.trigger()) return P(), void J.playFx(J._fx.open, 1, 0);
        if (1 === w) {
          if (Me.setState(T.__BUTTON_OUT__), Re.setState(T.__BUTTON_OUT__), fe
            .setState(T.__BUTTON_OUT__), he.setState(T.__BUTTON_OUT__), Ae
            .setState(T.__BUTTON_OUT__), We.setState(T.__BUTTON_OUT__), Fe
            .setState(T.__BUTTON_OUT__), Ne.setState(T.__BUTTON_OUT__), xe
            .setState(T.__BUTTON_OUT__), oe.setState(T.__BUTTON_OUT__), te
            .setState(T.__BUTTON_OUT__), ge.setState(T.__BUTTON_OUT__), 1 === Re
            .trigger()) return z.setAzerty(), void J.playFx(J._fx.button, 1, 0);
          if (1 === Me.trigger()) return z.setQwert(), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === fe.trigger()) return A.setResolution(1), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === he.trigger()) return A.setResolution(2), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === Ae.trigger()) return A.setResolution(3), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === We.trigger()) return J.setAudio(1), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === Fe.trigger()) return J.setAudio(0), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === Ne.trigger()) return J.setFx(1), void J.playFx(J._fx.button,
            1, 0);
          if (1 === xe.trigger()) return J.setFx(0), void J.playFx(J._fx.button,
            1, 0);
          if (1 === te.trigger()) return re.setParticles(1), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === oe.trigger()) return re.setParticles(2), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === ge.trigger()) return re.setParticles(0), void J.playFx(J._fx
            .button, 1, 0);
          var a = ri.pos;
          if (R.sx < a.x || R.sx > a.x + 234 * h || R.sy < a.y || R.sy > a.y +
            232 * h) return P(), void J.playFx(J._fx.open, 1, 0)
        } else if (1 === E) {
          var o = li.pos;
          if (R.sx < o.x || R.sx > o.x + 412 * h || R.sy < o.y || R.sy > o.y +
            412 * h) return P(), void J.playFx(J._fx.open, 1, 0)
        } else if (1 === b)
          if (-1 === B.PLAYER.craftCategory ? 0 === B.PLAYER.crafting || 1 === B
            .PLAYER.isInBuilding ? 1 === B.PLAYER.craftAvailable[B.PLAYER
              .craftIdSelected] && 1 === Y.trigger() && (1 === B.PLAYER
              .isInBuilding ? 0 !== B.PLAYER.building.fuel && B.PLAYER.building
              .len < 4 && (V.sendPacket(window.JSON.stringify([18, B.PLAYER
                .craftSelected
              ])), J.playFx(J._fx.craft, .8, 0)) : (V.sendPacket(window.JSON
                .stringify([22, B.PLAYER.craftSelected])), J.playFx(J._fx
                .craft, .8, 0)), Y.setState(T.__BUTTON_OUT__)) : 1 === H
            .trigger() && (V.sendPacket(window.JSON.stringify([23])), B.PLAYER
              .crafting = 0, H.setState(T.__BUTTON_OUT__), J.playFx(J._fx
                .button, 1, 0)) : 1 === G.trigger() && 1 === B.PLAYER
            .craftAvailable[B.PLAYER.craftIdSelected] && (V.sendPacket(window
              .JSON.stringify([21, B.PLAYER.craftSelected])), J.playFx(J._fx
              .skill, 1, 0)), 1 === X[Ee.__SKILL__].trigger()) B.buildSkillList(
            Ee.__SKILL__), J.playFx(J._fx.button, 1, 0);
          else if (1 === X[Ee.__BUILDING__].trigger()) B.buildSkillList(Ee
          .__BUILDING__), J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__CLOTHE__].trigger()) B.buildSkillList(Ee
          .__CLOTHE__), J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__PLANT__].trigger()) B.buildSkillList(Ee
          .__PLANT__), J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__DRUG__].trigger()) B.buildSkillList(Ee.__DRUG__),
          J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__MINERAL__].trigger()) B.buildSkillList(Ee
          .__MINERAL__), J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__LOGIC__].trigger()) B.buildSkillList(Ee
          .__LOGIC__), J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__SURVIVAL__].trigger()) B.buildSkillList(Ee
          .__SURVIVAL__), J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__TOOL__].trigger()) B.buildSkillList(Ee.__TOOL__),
          J.playFx(J._fx.button, 1, 0);
        else if (1 === X[Ee.__WEAPON__].trigger()) B.buildSkillList(Ee
          .__WEAPON__), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__PLAYER__].trigger()) B.buildCraftList(le
          .__PLAYER__), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__FIRE__].trigger() || 1 === Q[le.__BBQ__]
        .trigger() || 1 === Q[le.__COMPOST__].trigger()) V.sendPacket(window
          .JSON.stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__WORKBENCH__].trigger()) V.sendPacket(window.JSON
          .stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__WELDING_MACHINE__].trigger()) V.sendPacket(window
          .JSON.stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__WEAVING__].trigger()) V.sendPacket(window.JSON
          .stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__WORKBENCH2__].trigger()) V.sendPacket(window.JSON
          .stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__TESLA__].trigger()) V.sendPacket(window.JSON
          .stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else if (1 === Q[le.__SMELTER__].trigger() || 1 === Q[le.__EXTRACTOR__]
          .trigger() || 1 === Q[le.__AGITATOR__].trigger()) V.sendPacket(window
          .JSON.stringify([B.PLAYER.packetId, B.PLAYER.buildingId, B.PLAYER
            .buildingPid
          ])), J.playFx(J._fx.button, 1, 0);
        else {
          for (var d = B.PLAYER.craftLen, t = 0; t < d; t++)
            if (1 === Ue[t].trigger()) return B.PLAYER.craftIdSelected = t, B
              .selectRecipe(B.PLAYER.craftList[t]), void J.playFx(J._fx
                .button, 1, 0);
          for (d = B.PLAYER.recipeLen, t = 0; t < d; t++)
            if (1 === Ye[t].trigger()) return;
          if (1 === B.PLAYER.isInBuilding) {
            for (t = 0; t < B.PLAYER.building.len; t++)
              if (1 === He[t].trigger()) return V.sendPacket(window.JSON
                .stringify([19, t])), void J.playFx(J._fx.button, 1, 0);
            if (B.PLAYER.craftArea === le.__FIRE__ || B.PLAYER.craftArea === le
              .__BBQ__ || B.PLAYER.craftArea === le.__COMPOST__) {
              if (255 !== B.PLAYER.building.fuel && 1 === me.trigger()) return V
                .sendPacket(window.JSON.stringify([24])), void J.playFx(J._fx
                  .button, 1, 0)
            } else if (B.PLAYER.craftArea === le.__SMELTER__ || B.PLAYER
              .craftArea === le.__EXTRACTOR__ || B.PLAYER.craftArea === le
              .__AGITATOR__) {
              if (255 !== B.PLAYER.building.fuel && 1 === ue.trigger()) return V
                .sendPacket(window.JSON.stringify([24])), void J.playFx(J._fx
                  .button, 1, 0)
            } else if (B.PLAYER.craftArea === le.__TESLA__ && 255 !== B.PLAYER
              .building.fuel && 1 === Le.trigger()) return V.sendPacket(window
              .JSON.stringify([24])), void J.playFx(J._fx.button, 1, 0)
          }
          var n = si.pos;
          if (1 !== _.begin && !i.ctrlKey && (R.sx < n.x || R.sx > n.x + 595 *
              h || R.sy < n.y || R.sy > n.y + 325 * h)) return P(), void J
            .playFx(J._fx.open, 1, 0)
        } else if (1 === y) {
          for (var r = B.PLAYER.chest, g = 0; g < 4; g++)
            if (0 !== r[g][0] && 1 === Je[g].trigger()) return V.sendPacket(
              window.JSON.stringify([27, g])), void J.playFx(J._fx.drag, 1,
              0)
        } else if (1 === v)
          if (-1 === B.PLAYER.team) {
            if (1 === W.trigger() && 1 === B.PLAYER.teamNameValid && window.Date
              .now() - B.PLAYER.teamCreateDelay > 30500 && (V.sendPacket(window
                .JSON.stringify([28, j.teamName])), J.playFx(J._fx.button, 1,
                0), B.PLAYER.teamCreateDelay = window.Date.now()), window.Date
              .now() - B.PLAYER.teamDelay > 10500) {
              var s = 0;
              for (t = 0; t < Ke.length; t++) 0 !== B.teams[t].leader && (1 ===
                Ke[s].trigger() && (V.sendPacket(window.JSON.stringify([30,
                    t])), J.playFx(J._fx.button, 1, 0), B.PLAYER.teamDelay =
                  window.Date.now()), s++)
            }
          } else if (1 === B.PLAYER.teamLeader) {
          if (1 === N.trigger() && 0 === B.PLAYER.teamLocked) return V
            .sendPacket(window.JSON.stringify([33])), B.PLAYER.teamLocked = 1,
            void J.playFx(J._fx.button, 1, 0);
          if (1 === x.trigger() && 1 === B.PLAYER.teamLocked) return V
            .sendPacket(window.JSON.stringify([34])), B.PLAYER.teamLocked = 0,
            void J.playFx(J._fx.button, 1, 0);
          if (1 === C.trigger()) return V.sendPacket(window.JSON.stringify([
            29])), void J.playFx(J._fx.button, 1, 0);
          s = 0;
          var l = B.teams[B.PLAYER.team];
          for (t = 0; t < B.players.length; t++)
            if (t !== B.PLAYER.id) {
              var m = B.players[t];
              if (m.team === l.id && m.teamUid === l.uid) {
                if (1 === ze[s].trigger()) return V.sendPacket(window.JSON
                  .stringify([32, m.id])), void J.playFx(J._fx.button, 1, 0);
                s++
              }
            } else s++
        } else if (1 === F.trigger()) return V.sendPacket(window.JSON.stringify(
          [35, B.PLAYER.id])), void J.playFx(J._fx.button, 1, 0)
      }
      var c = B.PLAYER.inventory,
        u = 0;
      (d = c.length) > 10 && 1 === K.trigger() && (K.open = (K.open + 1) % 2,
        1 === K.open ? J.playFx(J._fx.zipperOn, .08, 0) : J.playFx(J._fx
          .zipperOff, .08, 0));
      for (t = 0; t < d && !(t > 9 && 0 === K.open); t++)
        if (1 === ke[t].trigger()) {
          u = 1;
          var L = c[t][0],
            f = c[t][1],
            S = c[t][2],
            O = c[t][3],
            I = ve[L];
          if (1 === _.begin) {
            if (_.id !== t) return c[t][0] === c[_.id][0] && I.stack > c[t][
              1] && I.stack > c[_.id][1] ? (V.sendPacket(window.JSON
                .stringify([10, c[_.id][0], c[_.id][1], c[_.id][2], c[t][1],
                  c[t][2]
                ])), B.PLAYER.drag.begin = 0, void J.playFx(J._fx.drag, 1,
                0)) : (c[t][0] = c[_.id][0], c[t][1] = c[_.id][1], c[t][2] =
                c[_.id][2], c[t][3] = c[_.id][3], c[_.id][0] = L, c[_.id][1] =
                f, c[_.id][2] = S, c[_.id][3] = O, 0 !== L && j.inventory[_
                  .id].setImages(ve[L].itemButton.src, ve[L].itemButton.img),
                j.inventory[t].setImages(ve[c[t][0]].itemButton.src, ve[c[t][
                  0]].itemButton.img), B.PLAYER.drag.begin = 0, void J.playFx(
                  J._fx.drag, 1, 0));
            B.PLAYER.drag.begin = 0
          }
          0 !== L && (1 === y && 3 !== i.which ? (V.sendPacket(window.JSON
              .stringify([26, L, f, S, O])), J.playFx(J._fx.drag, 1, 0)) :
            3 === i.which ? (V.sendPacket(window.JSON.stringify([9, L, f, S,
              O])), J.playFx(J._fx.throwLoot, 1, 0)) : i.ctrlKey ? (J.playFx(J
              ._fx.drag, .6, 0), V.sendPacket(window.JSON.stringify([11, L,
              f, S
            ]))) : V.sendPacket(window.JSON.stringify([8, L, f, S, O])))
        } if (1 === y && 0 === u) {
        var k = gi.pos;
        (R.sx < k.x || R.sx > k.x + 161 * h || R.sy < k.y || R.sy > k.y + 165 *
          h) && (P(), J.playFx(J._fx.open, 1, 0))
      }
      if (1 === _.begin) {
        t = _.id;
        V.sendPacket(window.JSON.stringify([9, c[t][0], c[t][1], c[t][2], c[t][
          3]])), J.playFx(J._fx.throwLoot, 1, 0)
      }
      _.begin = 0
    }

    function Ui(e) {
      R.updateAll(e, R.__MOUSE_MOVE__);
      if (1 === Li.trigger() && 1, 1 === Ei.trigger() && 1, 1 === wi
      .trigger() && 1, 1 === fi.trigger() && 1, 1 === bi.trigger() && 1, 1 ===
        hi.trigger() && 1, 1 === yi.trigger() && 1, 0 !== B.PLAYER.teamJoin && (
          U.trigger(), D.trigger()), 1 === p)
        if (ee.trigger(), 1 === w) Re.trigger(), Me.trigger(), fe.trigger(), he
          .trigger(), Ae.trigger(), We.trigger(), Fe.trigger(), Ne.trigger(), xe
          .trigger(), te.trigger(), oe.trigger(), ge.trigger();
        else if (1 === b) {
        -1 === B.PLAYER.craftCategory ? 0 === B.PLAYER.crafting || 1 === B
          .PLAYER.isInBuilding ? Y.trigger() : H.trigger() : G.trigger();
        for (var i = 0; i < X.length; i++) X[i].trigger();
        for (i = 0; i < Q.length; i++) B.PLAYER.buildingArea !== i && 0 !== i ||
          Q[i].trigger();
        var _ = B.PLAYER.craftLen;
        for (i = 0; i < _; i++) Ue[i].trigger();
        for (Ve = -1, _ = B.PLAYER.recipeLen, i = 0; i < _; i++) 1 === Ye[i]
          .trigger() && (Ve = i);
        if (1 === B.PLAYER.isInBuilding) {
          for (i = 0; i < B.PLAYER.building.len; i++) He[i].trigger();
          B.PLAYER.craftArea !== le.__FIRE__ && B.PLAYER.craftArea !== le
            .__BBQ__ && B.PLAYER.craftArea !== le.__COMPOST__ || 255 === B
            .PLAYER.building.fuel ? B.PLAYER.craftArea !== le.__SMELTER__ && B
            .PLAYER.craftArea !== le.__EXTRACTOR__ && B.PLAYER.craftArea !== le
            .__AGITATOR__ || 255 === B.PLAYER.building.fuel || ue.trigger() : me
            .trigger()
        }
        for (_ = B.PLAYER.toolsLen, i = 0; i < _; i++) Ge[i].trigger();
        Xe.trigger()
      } else if (1 === y)
        for (var a = B.PLAYER.chest, o = 0; o < 4; o++) 0 !== a[o][0] && Je[o]
          .trigger();
      else if (1 === v)
        if (-1 === B.PLAYER.team) {
          W.trigger();
          var d = 0;
          for (i = 0; i < Ke.length; i++) 0 !== B.teams[i].leader && (Ke[d]
            .trigger(), d++)
        } else if (1 === B.PLAYER.teamLeader) {
        N.trigger(), x.trigger(), C.trigger();
        d = 0;
        var t = B.teams[B.PLAYER.team];
        for (i = 0; i < B.players.length; i++)
          if (i !== B.PLAYER.id) {
            var n = B.players[i];
            n.team === t.id && n.teamUid === t.uid && (ze[d].trigger(), d++)
          } else d++
      } else F.trigger();
      var r = B.PLAYER.inventory;
      _ = r.length;
      Ce = -1, _ > 10 && K.trigger();
      for (i = 0; i < _ && !(i > 9 && 0 === K.open); i++) 0 !== r[i][0] && 1 ===
        ke[i].trigger() && (Ce = i)
    }

    function Yi(e) {
      if (z.keyup(e), 1 === v && -1 === B.PLAYER.team) {
        if (8 === e.keyCode && j.teamName.length > 0) return j.teamName = j
          .teamName.substring(0, j.teamName.length - 1), void e
          .preventDefault();
        (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 48 && e.keyCode <=
          57) && j.teamName.length < 5 && (j.teamName += window.String
          .fromCharCode(e.keyCode))
      } else if (1 === c && 27 === e.keyCode) c = 0, Ai.display = "none";
      else if (13 === e.keyCode)
        if (1 === c) {
          if (chatinput.value.length > 0) {
            var i = V.sendChatMessage(chatinput.value);
            0 !== i ? B.players[B.PLAYER.id].text.push("I am muted during " +
              window.Math.floor(i / 1e3) + " seconds") : B.players[B.PLAYER
              .id].text.push(chatinput.value)
          }
          c = 0, chatinput.value = "", Ai.display = "none"
        } else c = 1, Ai.display = "inline-block", chatinput.focus();
      else if (0 === c)
        if (77 === e.keyCode) 0 === E ? (P(), p = 1, E = 1, J.playFx(J._fx.open,
          1, 0)) : (P(), J.playFx(J._fx.open, 1, 0));
        else if (69 === e.keyCode || 32 === e.keyCode) switch (B.PLAYER
          .interaction) {
          case 0:
            V.sendPacket(window.JSON.stringify([12, B.PLAYER.lootId]));
            break;
          case 2:
            V.sendPacket(window.JSON.stringify([B.PLAYER.packetId, B.PLAYER
              .buildingId, B.PLAYER.buildingPid
            ]))
        } else if (70 === e.keyCode) 1 === B.PLAYER.extraLoot && V.sendPacket(
          window.JSON.stringify([12, B.PLAYER.lootId]));
        else if (82 === e.keyCode) 1 === B.PLAYER.isBuilding ? B.PLAYER
        .buildRotate = (B.PLAYER.buildRotate + 1) % 4 : V.sendPacket(window.JSON
          .stringify([13]));
      else if (e.keyCode >= 49 && e.keyCode <= 57) {
        if (1 !== B.PLAYER.drag.begin) {
          var _ = e.keyCode - 49,
            a = B.PLAYER.inventory;
          if (_ < a.length) {
            var o = a[_][0],
              d = a[_][1],
              t = a[_][2],
              n = a[_][3];
            e.altKey ? (V.sendPacket(window.JSON.stringify([9, o, d, t, n])), J
              .playFx(J._fx.throwLoot, 1, 0)) : e.ctrlKey ? (J.playFx(J._fx
              .drag, .6, 0), V.sendPacket(window.JSON.stringify([11, o, d,
              t]))) : V.sendPacket(window.JSON.stringify([8, o, d, t, n]))
          }
        }
      } else 67 === e.keyCode && 0 === B.PLAYER.ghoul ? 0 === b ? (P(), p = 1,
          b = 1, B.buildCraftList(le.__PLAYER__), J.playFx(J._fx.open, 1, 0)) :
        (J.playFx(J._fx.open, 1, 0), P()) : 27 === e.keyCode && 1 === p && (J
          .playFx(J._fx.open, 1, 0), P())
    }

    function Hi(e) {
      if (z.keydown(e), 37 === e.keyCode || 38 === e.keyCode || 39 === e
        .keyCode || 40 === e.keyCode) return e.preventDefault(), !1
    }

    function Gi(e) {
      for (var a = 0, n = 0; n < e.touches.length; n++) {
        if (R.touchToMouseEvent(Ri, e, e.touches[n]), 0 !== K.open) {
          var r = R.state;
          R.updateAll(Ri, R.__MOUSE_DOWN__), R.state = r;
          for (var g = B.PLAYER.inventory, s = 0, l = 10; l < g.length; l++)
            if (0 !== g[l][0] && 1 === ke[l].trigger()) {
              s = 1;
              break
            } if (1 === s) {
            Di(Ri);
            continue
          }
        }
        if (0 === B.PLAYER.drag.begin && 0 === p) {
          var m = window.Math.floor(Ri.clientX * A.options.ratioX),
            c = window.Math.floor(Ri.clientY * A.options.ratioY);
          switch (B.PLAYER.interaction) {
            case 2:
              if (1 === B.PLAYER.extraLoot && m > j.xInteract2 && c > j
                .yInteract2 && m < j.xInteract2 + j.widthInteract && c < j
                .yInteract2 + j.heightInteract) {
                oi = 1, Ti.keyCode = 70, Ti.charCode = 70, Yi(Ti);
                continue
              }
            case 0:
              if (m > j.xInteract && c > j.yInteract && m < j.xInteract + j
                .widthInteract && c < j.yInteract + j.heightInteract) {
                oi = 1, Ti.keyCode = 69, Ti.charCode = 69, Yi(Ti);
                continue
              }
          }
          if (c < _ - 70 * h) {
            var u = 1.5 * t,
              L = t / 4;
            if (m < o) {
              var E = 30 * h;
              Ze = S.angle(o - u, d + L, m, c), $e = window.Math.min(S.dist(m,
                  c, o - u, d + L), 25), m < o - u - E ? (qe |= 1, Ti.charCode =
                  37, Ti.keyCode = 37, Hi(Ti)) : m > o - u + E && (qe |= 2, Ti
                  .charCode = 39, Ti.keyCode = 39, Hi(Ti)), c < d + L - E ? (
                  qe |= 4, Ti.charCode = 38, Ti.keyCode = 38, Hi(Ti)) : c > d +
                L + E && (qe |= 8, Ti.charCode = 40, Ti.keyCode = 40, Hi(Ti))
            } else if (m < i - 40 * h || c > 40 * h)
              if (a = 1, Ri.clientX -= u / A.options.ratioX, Ri.clientY -= L / A
                .options.ratioX, 1 === B.PLAYER.isBuilding) {
                var w = window.Date.now();
                w - ei < 1e3 && (ii = 1, _i = Ri.clientX, ai = Ri.clientY, Di(
                  Ri)), ei = w
              } else ii = 1, _i = Ri.clientX, ai = Ri.clientY, Di(Ri);
            continue
          }
        }
        0 === a && 0 === qe && (Di(Ri), a = 1)
      }
    }

    function Ki(e) {
      var i = window.Math.floor(e.changedTouches[0].clientX * A.options.ratioX),
        a = window.Math.floor(e.changedTouches[0].clientY * A.options.ratioY);
      if (1 === oi) oi = 0;
      else if (1 === p) ki(Ri);
      else {
        if (1 === ii && i >= o) return ii = 0, Ri.clientX = _i, Ri.clientY = ai,
          void ki(Ri);
        0 === B.PLAYER.drag.begin && i < o && a < _ - 70 * h ? i < 240 * h &&
          a < 160 * h && ki(Ri) : ki(Ri)
      }
      0 !== qe && (1 & qe && (Ti.charCode = 37, Yi(Ti)), 2 & qe && (Ti
          .charCode = 39, Yi(Ti)), 4 & qe && (Ti.charCode = 38, Yi(Ti)), 8 &
        qe && (Ti.charCode = 40, Yi(Ti)), qe = 0)
    }

    function zi(e) {}

    function Ji(e) {
      for (var a = 0, n = 0, r = 0; r < e.touches.length; r++) {
        if (R.touchToMouseEvent(Ri, e, e.touches[r]), 0 !== K.open) {
          for (var g = B.PLAYER.inventory, s = 0, l = 10; l < g.length; l++)
            if (0 !== g[l][0] && 1 === ke[l].trigger()) {
              s = 1;
              break
            } if (1 === s) {
            Ui(Ri);
            continue
          }
        }
        if (0 === B.PLAYER.drag.begin && 0 === p) {
          var m = window.Math.floor(Ri.clientX * A.options.ratioX),
            c = window.Math.floor(Ri.clientY * A.options.ratioY);
          if (c < _ - 70 * h) {
            var u = 1.5 * t,
              L = t / 4;
            if (m < o) {
              n = 1;
              var E = 0,
                w = 30 * h;
              Ze = S.angle(o - u, d + L, m, c), $e = window.Math.min(S.dist(m,
                  c, o - u, d + L), 25), m < o - u - w ? E |= 1 : m > o - u +
                w && (E |= 2), c < d + L + -w ? E |= 4 : c > d + L + w && (E |=
                  8), 1 == (1 & E) && 1 != (1 & qe) ? (Ti.charCode = 37, Hi(
                Ti)) : 1 != (1 & E) && 1 == (1 & qe) && (Ti.charCode = 37, Yi(
                  Ti)), 2 == (2 & E) && 2 != (2 & qe) ? (Ti.charCode = 39, Hi(
                  Ti)) : 2 != (2 & E) && 2 == (2 & qe) && (Ti.charCode = 39, Yi(
                  Ti)), 4 == (4 & E) && 4 != (4 & qe) ? (Ti.charCode = 38, Hi(
                  Ti)) : 4 != (4 & E) && 4 == (4 & qe) && (Ti.charCode = 38, Yi(
                  Ti)), 8 == (8 & E) && 8 != (8 & qe) ? (Ti.charCode = 40, Hi(
                  Ti)) : 8 != (8 & E) && 8 == (8 & qe) && (Ti.charCode = 40, Yi(
                  Ti)), qe = E;
              continue
            }(m < i - 40 * h || c > 40 * h) && (a = 1, Ri.clientX -= u / A
              .options.ratioX, Ri.clientY -= L / A.options.ratioX, _i = Ri
              .clientX, ai = Ri.clientY, Ui(Ri))
          }
        }
        0 === a && 0 === qe && (Ui(Ri), a = 1)
      }
      0 === n && 0 !== qe && (1 & qe && (Ti.charCode = 37, Yi(Ti)), 2 & qe && (
          Ti.charCode = 39, Yi(Ti)), 4 & qe && (Ti.charCode = 38, Yi(Ti)), 8 &
        qe && (Ti.charCode = 40, Yi(Ti)), qe = 0)
    }

    function Xi(e) {
      e = window.event || e;
      return re.scale += e.wheelDelta / 5e3, !1
    }
    return {
      quit: Vi,
      init: function() {
        VWWvn = T.renderText("Copied to clipboard", "'Viga', sans-serif",
          "#FFFFFF", 40, 350, "#000000", 18, 18, window.undefined, window
          .undefined, .2), chatinput = window.document.getElementById(
          "chatInput");
        var e = 68,
          i = k[__ENTITIE_PLAYER__].inventorySize + 8;
        for (Oe = 0; Oe < i; Oe++) ke.push(T.createButton(e, e, null, De));
        for (Oe = 0; Oe < 4; Oe++) Je.push(T.createButton(e, e, null, De));
        for (e = 49, Oe = 0; Oe < 35; Oe++) Ue.push(T.createButton(e, e, null,
          De));
        for (e = 40, Oe = 0; Oe < 5; Oe++) Ye.push(T.createButton(e, e, null,
          De));
        for (Oe = 0; Oe < 4; Oe++) He.push(T.createButton(e, e, null, De));
        for (Oe = 0; Oe < 3; Oe++) Ge.push(T.createButton(e, e, null, De));
        for (Oe = 0; Oe < 9; Oe++) ze.push(T.createButton(29, 27, null, ae));
        for (Oe = 0; Oe < 18; Oe++) Ke.push(T.createButton(44, 33, null, _e));
        j.BUTTON_CLOSE_BOX = P, j.openBox = I, j.inventory = ke, j.craft = Ue,
          j.recipe = Ye, j.preview = Xe, j.queue = He, j.tools = Ge, j.chest =
          Je, j.kick = ze, j.join = Ke, j.getSkillBoxState = g, j
          .getBoxState = r, j.teamName = "", j.acceptMember = U, j
          .refuseMember = D, j.inventoryItemNumber = Qe, j
          .inventoryAmmoNumber = je, j.xInteract = 0, j.yInteract = 0, j
          .widthInteract = 0, j.heightInteract = 0, j.xInteract2 = 0, j
          .yInteract2 = 0, X[Ee.__BUILDING__] = T.createButton(42, 42, [
            "img/building-button-out.png", "img/building-button-in.png",
            "img/building-button-click.png"
          ]), X[Ee.__SKILL__] = T.createButton(42, 42, [
            "img/skill-button-out.png", "img/skill-button-in.png",
            "img/skill-button-click.png"
          ]), X[Ee.__CLOTHE__] = T.createButton(42, 42, [
            "img/clothe-button-out.png", "img/clothe-button-in.png",
            "img/clothe-button-click.png"
          ]), X[Ee.__PLANT__] = T.createButton(42, 42, [
            "img/plant-button-out.png", "img/plant-button-in.png",
            "img/plant-button-click.png"
          ]), X[Ee.__DRUG__] = T.createButton(42, 42, [
            "img/medecine-button-out.png", "img/medecine-button-in.png",
            "img/medecine-button-click.png"
          ]), X[Ee.__MINERAL__] = T.createButton(42, 42, [
            "img/resources-button-out.png", "img/resources-button-in.png",
            "img/resources-button-click.png"
          ]), X[Ee.__SURVIVAL__] = T.createButton(42, 42, [
            "img/survival-button-out.png", "img/survival-button-in.png",
            "img/survival-button-click.png"
          ]), X[Ee.__TOOL__] = T.createButton(42, 42, [
            "img/tool-button-out.png", "img/tool-button-in.png",
            "img/tool-button-click.png"
          ]), X[Ee.__WEAPON__] = T.createButton(42, 42, [
            "img/weapon-button-out.png", "img/weapon-button-in.png",
            "img/weapon-button-click.png"
          ]), X[Ee.__LOGIC__] = T.createButton(42, 42, [
            "img/cable-button-out.png", "img/cable-button-in.png",
            "img/cable-button-click.png"
          ]), Q[le.__PLAYER__] = T.createButton(42, 42, [
            "img/own-button-out.png", "img/own-button-in.png",
            "img/own-button-click.png"
          ]), Q[le.__FIRE__] = T.createButton(42, 42, [
            "img/fire-button-out.png", "img/fire-button-in.png",
            "img/fire-button-click.png"
          ]), Q[le.__WORKBENCH__] = T.createButton(42, 42, [
            "img/workbench1-button-out.png", "img/workbench1-button-in.png",
            "img/workbench1-button-click.png"
          ]), Q[le.__BBQ__] = T.createButton(42, 42, [
            "img/bbq-button-out.png", "img/bbq-button-in.png",
            "img/bbq-button-click.png"
          ]), Q[le.__COMPOST__] = T.createButton(42, 42, [
            "img/composter-button-out.png", "img/composter-button-in.png",
            "img/composter-button-click.png"
          ]), Q[le.__WEAVING__] = T.createButton(42, 42, [
            "img/weaving-machine-button-out.png",
            "img/weaving-machine-button-in.png",
            "img/weaving-machine-button-click.png"
          ]), Q[le.__WELDING_MACHINE__] = T.createButton(42, 42, [
            "img/welding-machine-button-out.png",
            "img/welding-machine-button-in.png",
            "img/welding-machine-button-click.png"
          ]), Q[le.__WORKBENCH2__] = T.createButton(42, 42, [
            "img/workbench2-button-out.png", "img/workbench2-button-in.png",
            "img/workbench2-button-click.png"
          ]), Q[le.__SMELTER__] = T.createButton(42, 42, [
            "img/smelter-button-out.png", "img/smelter-button-in.png",
            "img/smelter-button-click.png"
          ]), Q[le.__TESLA__] = T.createButton(42, 42, [
            "img/workbench3-button-out.png", "img/workbench3-button-in.png",
            "img/workbench3-button-click.png"
          ]), Q[le.__AGITATOR__] = T.createButton(42, 42, [
            "img/agitator-button-out.png", "img/agitator-button-in.png",
            "img/agitator-button-click.png"
          ]), Q[le.__EXTRACTOR__] = T.createButton(42, 42, [
            "img/extractor-button-out.png", "img/extractor-button-in.png",
            "img/extractor-button-click.png"
          ]), ti = T.createBackground(255, 174, "img/profile-player2.png"),
          ri = T.createBackground(269, 267, "img/settings-box.png"), gi = T
          .createBackground(162, 165, "img/chest-box4.png"), si = T
          .createBackground(595, 405, "img/craftbox2.png"), li = T
          .createBackground(412, 412, "img/borderBigMinimap2.png"), mi = T
          .createBackground(128, 128, "img/minimap.png"), ci = T
          .createBackground(233, 246, "img/leaderboard.png"), ui = T
          .createBackground(516, 275, "img/jointeam-box.png"), pi = T
          .createBackground(513, 150, "img/memberteam-box.png"), Li = T
          .createButton(40, 40, ["img/full-screen-out.png",
            "img/full-screen-in.png", "img/full-screen-click.png"
          ]), Ei = T.createButton(64, 63, ["img/craftbox-button-out.png",
            "img/craftbox-button-in.png", "img/craftbox-button-click.png"
          ]), wi = T.createButton(40, 40, ["img/settings-out.png",
            "img/settings-in.png", "img/settings-click.png"
          ]), fi = T.createButton(40, 40, ["img/minimap-button-out.png",
            "img/minimap-button-in.png", "img/minimap-button-click.png"
          ]), bi = T.createButton(40, 40, ["img/team-button-out.png",
            "img/team-button-in.png", "img/team-button-click.png"
          ]), hi = T.createButton(34, 33, ["img/close-leaderboard-out.png",
            "img/close-leaderboard-in.png",
            "img/close-leaderboard-click.png"
          ]), yi = T.createButton(34, 33, ["img/open-leaderboard-out.png",
            "img/open-leaderboard-in.png", "img/open-leaderboard-click.png"
          ]), vi = window.document.getElementById("chat"), Ai = vi.style,
          Si = {
            x: 0,
            y: 0
          }
      },
      run: function() {
        V.onError = a, V.onOpen = n, "0" === localStorage2.getItem(
            "showLeaderboard") ? (hi.hide(), yi.show()) : (yi.hide(), hi
          .show()), window.document.getElementById("bod").style
          .backgroundColor = "#46664D", $ = 0, j.teamName = "", j
          .teamNameValid = 0, ni.startGame(), B.gameMode === B.__BR__ ? (bi
            .hide(), Ei.show()) : B.PLAYER.ghoul > 0 ? (bi.hide(), Ei
        .hide()) : (bi.show(), Ei.show()), A.setRenderer(j), xi = 1e3, Ni =
          1e3, Ci = Fi, Wi = 1, Bi()
      },
      update: Bi,
      draw: function() {
        if (0 !== function() {
            if (1 === Ii) {
              if (Bi(), xi < 0) return Ii = 0, Li.setState(T.__BUTTON_OUT__),
                Ei.setState(T.__BUTTON_OUT__), wi.setState(T
                .__BUTTON_OUT__), fi.setState(T.__BUTTON_OUT__), bi
                .setState(T.__BUTTON_OUT__), hi.setState(T.__BUTTON_OUT__),
                yi.setState(T.__BUTTON_OUT__), Ai.display = "none", Oi
              .run(), 0;
              xi -= f
            } else 1 === Wi && (Bi(), xi < 0 && (Wi = 0, B.PLAYER.timePlayed =
              window.Date.now(),
              function() {
                0 === L && window.addEventListener("wheel", Xi, !1);
                0 === L && window.addEventListener("mousedown", Di, !1);
                0 === L && window.addEventListener("mouseup", ki, !1);
                0 === L && window.addEventListener("mousemove", Ui, !1);
                0 === L && window.addEventListener("keyup", Yi, !1);
                0 === L && window.addEventListener("keydown", Hi, !1);
                1 === L && window.addEventListener("touchstart", Gi, !1);
                1 === L && window.addEventListener("touchend", Ki, !1);
                1 === L && window.addEventListener("touchcancel", zi, !1);
                1 === L && window.addEventListener("touchmove", Ji, !1)
              }()), xi -= f);
            return 1
          }()) {
          if (di(), u.clearRect(0, 0, i, _), B.updatePosition(), B
            .updateGauges(), re.world(), re.interaction(), re.gauges(ti.pos.x,
              ti.pos.y), re.minimap(mi.pos.x, mi.pos.y), re.inventory(Qe, je,
              Ce, K), ti.draw(), mi.draw(), Li.draw(), Ei.draw(), wi.draw(),
            fi.draw(), bi.draw(), re.gaugesAfter(ti.pos.x, ti.pos.y), B
            .gameMode !== B.__BR__ && (0 === hi.pos.disable ? (ci.draw(), re
              .leaderboard(ci.pos.x, ci.pos.y), hi.draw()) : yi.draw()), 1 ===
            p) 1 === E ? re.bigminimap(li, ee) : 1 === w ? re.config(ri, fe,
              he, Ae, Re, Me, We, Fe, Ne, xe, ee, oe, te, ge) : 1 === b ? re
            .craft(si, ee, X, Y, H, G, Q, Xe, Qe, je, me, ue, Le, Ve) : 1 ===
            y ? re.chest(gi, ee, Qe, je) : 1 === v && re.team(ee, ui, pi, F,
              W, N, x, C);
          else if (1 === L) {
            if (z.isLeft() + z.isRight() + z.isTop() + z.isBottom() >= 1) {
              u.globalAlpha = .3;
              var e = s - 1.5 * m,
                a = l + m / 4;
              A.circle(u, e, a, 60), A.drawPath(u, "#000000"), A.circle(u, e +
                window.Math.cos(Ze) * $e * h, a + window.Math.sin(Ze) * $e *
                h, 30), A.drawPath(u, "#FFFFFF"), u.globalAlpha = 1
            }
            if (1 === ii) {
              u.globalAlpha = .3;
              e = s + 1.5 * m, a = l + m / 4;
              A.circle(u, e, a, 60), A.drawPath(u, "#000000"), A.circle(u, e +
                  25 * window.Math.cos(R.angle) * h, a + 25 * window.Math.sin(
                    R.angle) * h, 30), A.drawPath(u, "#FFFFFF"), u
                .globalAlpha = 1
            }
          }
          ni.scheduler()
        }
      }
    }
  }(),
  q = function() {
    function e(e) {}

    function a() {
      Y(j)
    }
    var t = 0,
      n = -1,
      r = null,
      g = {
        img: null
      },
      s = null,
      l = {
        img: null
      },
      m = -1,
      c = {
        img: null
      },
      p = null,
      E = -1,
      w = null,
      b = {
        img: null
      };
    var y, v, S, M, I = 0;
    var P = new R.LocalMouseEvent,
      W = (new z.LocalKeyboardEvent, 500),
      F = 0,
      N = function(e) {
        return O.Ease.speedLimit(e, O.Ease.inQuad, .05)
      },
      x = 0,
      C = function(e) {
        return O.Ease.speedLimit(e, O.Ease.outQuad, .05)
      },
      D = 0,
      k = 0,
      U = window.undefined;

    function Y(e) {
      M = e,
        function() {
          0 === L && window.removeEventListener("mousedown", G, !1);
          0 === L && window.removeEventListener("mouseup", K, !1);
          0 === L && window.removeEventListener("mousemove", X, !1);
          1 === L && window.removeEventListener("touchstart", Z, !1);
          1 === L && window.removeEventListener("touchend", $, !1);
          1 === L && window.removeEventListener("touchcancel", ee, !1);
          1 === L && window.removeEventListener("touchmove", ie, !1)
        }(), k = W, D = W, U = N, F = 1
    }

    function H() {
      var e = 0,
        i = 0;
      if (k > 0) {
        i = _;
        var a = U(1 - k / D);
        1 === a && (k = 0), 1 === x && (a = 1 - window.Math.abs(a)), e *= a,
          i *= a
      }
      y.pos.x = o - window.Math.floor(270 * h) - e, y.pos.y = window.Math.max(0,
          d - window.Math.floor(162 * h) + window.Math.floor(-135 * h)) - i, v
        .pos.x = o - window.Math.floor(61 * h) + window.Math.floor(-100 * h) -
        e, v.pos.y = window.Math.max(0, d - window.Math.floor(17 * h) + window
          .Math.floor(-35 * h)) - i, S.pos.x = o - window.Math.floor(99 * h) +
        window.Math.floor(100 * h) - e, S.pos.y = v.pos.y
    }

    function G(e) {
      R.updateAll(e, R.__MOUSE_DOWN__);
      v.trigger(), S.trigger()
    }

    function K(e) {
      R.updateAll(e, R.__MOUSE_UP__);
      return 1 === v.trigger() ? (1, void(I <= 0 && (Q.joinServer(), J.playFx(J
        ._fx.play, 1, 0)))) : 1 === S.trigger() && (1, 0 == (V.state & V.State
        .__PENDING__) && 0 == (V.state & V.State.__CONNECTED__)) ? (Y(Q),
        void J.playFx(J._fx.button, 1, 0)) : void 0
    }

    function X(e) {
      R.updateAll(e, R.__MOUSE_MOVE__);
      v.trigger(), S.trigger()
    }

    function Z(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(P, e, e.touches[0]), G(P))
    }

    function $(e) {
      K(P)
    }

    function ee(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(P, e, e.touches[0]), K(P))
    }

    function ie(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(P, e, e.touches[0]), X(P))
    }
    return {
      quit: Y,
      init: function() {
        y = T.createBackground(541, 324, "img/scoreboardnew.png"), v = T
          .createButton(123, 35, ["img/play-again-button-out.png",
            "img/play-again-button-in.png",
            "img/play-again-button-click.png"
          ]), S = T.createButton(198, 35, [
            "img/back-main-page-button-out.png",
            "img/back-main-page-button-in.png",
            "img/back-main-page-button-click.png"
          ])
      },
      run: function() {
        V.onError = e, V.onOpen = a, B.PLAYER.isBuilding = 0, B.PLAYER.id = 0,
          re.setDetection(0), re.stopPoisonEffect();
        for (var i = 0; i < B.PLAYER.inventory.length; i++)
          for (var _ = 0; _ < 4; _++) B.PLAYER.inventory[i][_] = 0;
        var o = $e[window.Math.min($e.length - 1, B.PLAYER.level)];
        for (i = 0; i < o.length; i++) {
          var d = o[i];
          0 !== d.id && j.inventory[i].setImages(ve[d.id].itemButton.src, ve[d
            .id].itemButton.img);
          var t = B.PLAYER.inventory[i];
          t[1] = d.amount, t[2] = 0, t[3] = d.life, t[0] = d.id
        }
        A.setRenderer(q), k = 500, D = 500, U = C, x = 1, H()
      },
      update: H,
      draw: function() {
        0 !== function() {
          if (1 === F) {
            if (H(), k < 0) return F = 0, v.setState(T.__BUTTON_OUT__), S
              .setState(T.__BUTTON_OUT__), M.run(), 0;
            k -= f
          } else 1 === x && (H(), k < 0 && (x = 0, window.document
            .getElementById("bod").style.backgroundColor = "#46664d",
            function() {
              0 === L && window.addEventListener("mousedown", G, !1);
              0 === L && window.addEventListener("mouseup", K, !1);
              0 === L && window.addEventListener("mousemove", X, !1);
              1 === L && window.addEventListener("touchstart", Z, !1);
              1 === L && window.addEventListener("touchend", $, !1);
              1 === L && window.addEventListener("touchcancel", ee, !1);
              1 === L && window.addEventListener("touchmove", ie, !1)
            }()), k -= f);
          return 1
        }() && (u.clearRect(0, 0, i, _), re.world(), k > 0 && (t = U(1 - k /
            D), 1 === x && (t = 1 - window.Math.abs(t)), t = 1 - t), u
          .globalAlpha = .3 * t, u.fillStyle = "#000000", u.fillRect(0, 0,
            i, _), u.globalAlpha = 1, y.draw(), S.draw(),
          function() {
            var e = y.pos.x,
              i = y.pos.y,
              _ = e / h,
              a = i / h;
            null !== p && m === B.PLAYER.exp || (m = B.PLAYER.exp, p = T
                .renderText(m + "", "'Viga', sans-serif", "#FFFFFF", 38,
                  400, window.undefined, 16, 25, window.undefined, window
                  .undefined, window.undefined, window.undefined, "#000000",
                  12), c.img = p, c.img.isLoaded = 1), A.drawImageHd(c, _ +
                280, a + 117, 0, 0, 0, 1), null !== r && n === B.PLAYER
              .level || (n = B.PLAYER.level, r = T.renderText(n + "",
                  "'Viga', sans-serif", "#FFFFFF", 38, 400, window
                  .undefined, 16, 25, window.undefined, window.undefined,
                  window.undefined, window.undefined, "#000000", 12), s = T
                .renderText(window.Math.floor(n / 2), "'Viga', sans-serif",
                  "#FFFFFF", 38, 400, window.undefined, 16, 25, window
                  .undefined, window.undefined, window.undefined, window
                  .undefined, "#000000", 12), g.img = r, g.img.isLoaded = 1,
                l.img = s, l.img.isLoaded = 1), A.drawImageHd(g, _ + 108,
                a + 117, 0, 0, 0, 1), A.drawImageHd(l, _ + 288, a + 147, 0,
                0, 0, 1), null !== w && E === B.PLAYER.kill || (E = B.PLAYER
                .kill, w = T.renderText(E + "", "'Viga', sans-serif",
                  "#FFFFFF", 38, 400, window.undefined, 16, 25, window
                  .undefined, window.undefined, window.undefined, window
                  .undefined, "#000000", 12), b.img = w, b.img.isLoaded = 1
                ), A.drawImageHd(b, _ + 453, a + 117, 0, 0, 0, 1);
            var o = j.inventory,
              d = B.PLAYER.inventory,
              t = d.length,
              u = 50 * h,
              L = i + 182 * h,
              f = e + 80 * h,
              v = h;
            h -= .3 * h;
            for (var S = 0; S < t; S++) {
              var O = o[S];
              0 !== d[S][0] && re.buttonInv(O, d[S], f, L, j
                .inventoryItemNumber, j.inventoryAmmoNumber), f += u
            }
            h = v
          }(), re.alertServer(), ni.scheduler(), v.draw())
      }
    }
  }(),
  Z = function() {
    function e(e) {}

    function a() {
      D(j)
    }
    var t, n, r, g, s = 0,
      l = -1,
      m = null,
      c = {
        img: null
      },
      p = -1,
      E = {
        img: null
      },
      w = null,
      b = -1,
      y = null,
      v = {
        img: null
      };
    var S = new R.LocalMouseEvent,
      M = (new z.LocalKeyboardEvent, 500),
      I = 0,
      P = function(e) {
        return O.Ease.speedLimit(e, O.Ease.inQuad, .05)
      },
      W = 0,
      F = function(e) {
        return O.Ease.speedLimit(e, O.Ease.outQuad, .05)
      },
      N = 0,
      x = 0,
      C = window.undefined;

    function D(e) {
      g = e,
        function() {
          0 === L && window.removeEventListener("mousedown", U, !1);
          0 === L && window.removeEventListener("mouseup", Y, !1);
          0 === L && window.removeEventListener("mousemove", H, !1);
          1 === L && window.removeEventListener("touchstart", G, !1);
          1 === L && window.removeEventListener("touchend", K, !1);
          1 === L && window.removeEventListener("touchcancel", X, !1);
          1 === L && window.removeEventListener("touchmove", q, !1)
        }(), x = M, N = M, C = P, I = 1
    }

    function k() {
      var e = 0,
        i = 0;
      if (x > 0) {
        i = _;
        var a = C(1 - x / N);
        1 === a && (x = 0), 1 === W && (a = 1 - window.Math.abs(a)), e *= a,
          i *= a
      }
      t.pos.x = o - window.Math.floor(207 * h) - e, t.pos.y = window.Math.max(0,
          d - window.Math.floor(103 * h) + window.Math.floor(-135 * h)) - i, n
        .pos.x = o - window.Math.floor(61 * h) + window.Math.floor(-100 * h) -
        e, n.pos.y = window.Math.max(0, d - window.Math.floor(17 * h) + window
          .Math.floor(-70 * h)) - i, r.pos.x = o - window.Math.floor(99 * h) +
        window.Math.floor(70 * h) - e, r.pos.y = n.pos.y
    }

    function U(e) {
      R.updateAll(e, R.__MOUSE_DOWN__);
      n.trigger(), r.trigger()
    }

    function Y(e) {
      R.updateAll(e, R.__MOUSE_UP__);
      return 1 === n.trigger() ? (1, void(waitAds <= 0 && (Q.joinServer(), J
        .playFx(J._fx.play, 1, 0)))) : 1 === r.trigger() && (1, 0 == (V
        .state & V.State.__PENDING__) && 0 == (V.state & V.State
        .__CONNECTED__)) ? (D(Q), void J.playFx(J._fx.button, 1, 0)) : void 0
    }

    function H(e) {
      R.updateAll(e, R.__MOUSE_MOVE__);
      n.trigger(), r.trigger()
    }

    function G(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(S, e, e.touches[0]), U(S))
    }

    function K(e) {
      Y(S)
    }

    function X(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(S, e, e.touches[0]), Y(S))
    }

    function q(e) {
      e.touches.length > 0 && (R.touchToMouseEvent(S, e, e.touches[0]), H(S))
    }
    return {
      quit: D,
      init: function() {
        t = T.createBackground(414, 207, "img/scoreboard-br.png"), n = T
          .createButton(123, 35, ["img/play-again-button-out.png",
            "img/play-again-button-in.png",
            "img/play-again-button-click.png"
          ]), r = T.createButton(198, 35, [
            "img/back-main-page-button-out.png",
            "img/back-main-page-button-in.png",
            "img/back-main-page-button-click.png"
          ])
      },
      run: function() {
        V.onError = e, V.onOpen = a, B.PLAYER.isBuilding = 0, B.PLAYER.id = 0,
          re.setDetection(0), re.stopPoisonEffect(), A.setRenderer(Z), x =
          500, N = 500, C = F, W = 1, k()
      },
      update: k,
      draw: function() {
        0 !== function() {
          if (1 === I) {
            if (k(), x < 0) return I = 0, n.setState(T.__BUTTON_OUT__), r
              .setState(T.__BUTTON_OUT__), g.run(), 0;
            x -= f
          } else 1 === W && (k(), x < 0 && (W = 0, window.document
            .getElementById("bod").style.backgroundColor = "#46664d",
            function() {
              0 === L && window.addEventListener("mousedown", U, !1);
              0 === L && window.addEventListener("mouseup", Y, !1);
              0 === L && window.addEventListener("mousemove", H, !1);
              1 === L && window.addEventListener("touchstart", G, !1);
              1 === L && window.addEventListener("touchend", K, !1);
              1 === L && window.addEventListener("touchcancel", X, !1);
              1 === L && window.addEventListener("touchmove", q, !1)
            }()), x -= f);
          return 1
        }() && (u.clearRect(0, 0, i, _), re.world(), x > 0 && (s = C(1 - x /
            N), 1 === W && (s = 1 - window.Math.abs(s)), s = 1 - s), u
          .globalAlpha = .3 * s, u.fillStyle = "#000000", u.fillRect(0, 0,
            i, _), u.globalAlpha = 1, t.draw(), r.draw(),
          function() {
            var e = t.pos.x,
              i = t.pos.y,
              _ = e / h,
              a = i / h;
            if (null !== w && p === B.playerAlive || (p = B.playerAlive, w =
                T.renderText("#" + window.Math.max(p, 1),
                  "'Viga', sans-serif", "#FFFFFF", 60, 140, window
                  .undefined, 16, 25, window.undefined, window.undefined,
                  window.undefined, window.undefined, "#000000", 12), E
                .img = w, E.img.isLoaded = 1), A.drawImageHd(E, _ + 207, a +
                93, 0, 0, 0, 1), null === m || l !== B.PLAYER.timePlayed) {
              l = B.PLAYER.timePlayed;
              var o = window.Math.floor((window.Date.now() - B.PLAYER
                  .timePlayed) / 1e3),
                d = window.Math.floor(o / 60),
                n = o % 60;
              m = T.renderText((d < 10 ? "0" : "") + d + ":" + (n < 10 ?
                  "0" : "") + n, "'Viga', sans-serif", "#FFFFFF", 38, 400,
                window.undefined, 16, 25, window.undefined, window
                .undefined, window.undefined, window.undefined, "#000000",
                12), c.img = m, c.img.isLoaded = 1
            }
            A.drawImageHd(c, _ + 110, a + 100, 0, 0, 0, 1), null !== y &&
              b === B.PLAYER.kill || (b = B.PLAYER.kill, y = T.renderText(
                  b + "", "'Viga', sans-serif", "#FFFFFF", 38, 400, window
                  .undefined, 16, 25, window.undefined, window.undefined,
                  window.undefined, window.undefined, "#000000", 12), v
                .img = y, v.img.isLoaded = 1), A.drawImageHd(v, _ + 309, a +
                100, 0, 0, 0, 1)
          }(), re.alertServer(), ni.scheduler(), n.draw())
      }
    }
  }(),
  $ = function() {
    var a = 0,
      n = 0,
      r = 0,
      g = 0,
      c = A.loadImage("img/inv-empty.png"),
      p = [c, c, c],
      E = [],
      w = 0;

    function b() {
      B.PLAYER.id = 1, B.playerNumber = 2, B.gameMode = 0, B.PLAYER.skillPoint =
        0, B.PLAYER.gridPrev[Oe] = 0, B.PLAYER.isBuilding = 1, B.PLAYER
        .teamJoin = 0, B.PLAYER.lastAreas = [
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1]
        ], B.gauges.rad.value = B.gauges.rad._max, B.gauges.rad.decrease = -1, B
        .allocatePlayers([0, window.document.getElementById("nicknameInput")
          .value
        ]), B.initDayCycle(0, 0), re.reset(window.undefined, 0, .07), re.scale =
        0, D.removeAll(), B.PLAYER.buildRotate = 0, B.PLAYER.blueprint = 0, Le =
        0,
        function(e, i, _, a, o, d) {
          Y(D.get(e, Le, Le, i), e, Le, Le, i, _, a, _, a, o, 0, d), Le++
        }(1, __ENTITIE_PLAYER__, 550, 550, 5376, 0)
    }

    function y() {
      a = 0, v.setState(T.__BUTTON_OUT__), n = 0, r = 0, isCraftOpen = 0,
        isChestOpen = 0, isTeamOpen = 0, B.releaseBuilding()
    }
    var v = T.createButton(43, 43, ["img/close-box-out.png",
        "img/close-box-in.png", "img/close-box-click.png"
      ]),
      M = [A.loadImage("img/high-particules-out.png"), A.loadImage(
        "img/high-particules-in.png"), A.loadImage(
        "img/high-particules-click.png")],
      I = T.createButton(54, 42, null, M),
      P = [A.loadImage("img/low-particules-out.png"), A.loadImage(
        "img/low-particules-in.png"), A.loadImage(
        "img/low-particules-click.png")],
      W = T.createButton(54, 42, null, P),
      F = [A.loadImage("img/no-particules-out.png"), A.loadImage(
        "img/no-particules-in.png"), A.loadImage(
        "img/no-particules-click.png")],
      N = T.createButton(54, 42, null, F),
      x = [A.loadImage("img/high-resolution-out.png"), A.loadImage(
        "img/high-resolution-in.png"), A.loadImage(
        "img/high-resolution-click.png")],
      C = T.createButton(54, 42, null, x),
      V = [A.loadImage("img/medium-resolution-out.png"), A.loadImage(
        "img/medium-resolution-in.png"), A.loadImage(
        "img/medium-resolution-click.png")],
      U = T.createButton(54, 42, null, V),
      H = [A.loadImage("img/low-resolution-out.png"), A.loadImage(
        "img/low-resolution-in.png"), A.loadImage(
        "img/low-resolution-click.png")],
      G = T.createButton(54, 42, null, H),
      K = [A.loadImage("img/azerty-button-out.png"), A.loadImage(
        "img/azerty-button-in.png"), A.loadImage(
        "img/azerty-button-click.png")],
      X = T.createButton(81, 33, null, K),
      j = [A.loadImage("img/qwerty-button-out.png"), A.loadImage(
        "img/qwerty-button-in.png"), A.loadImage(
        "img/qwerty-button-click.png")],
      q = T.createButton(87, 33, null, j),
      Z = [A.loadImage("img/sound-on-out.png"), A.loadImage(
        "img/sound-on-in.png"), A.loadImage("img/sound-on-click.png")],
      ee = [A.loadImage("img/sound-off-out.png"), A.loadImage(
        "img/sound-off-in.png"), A.loadImage("img/sound-off-click.png")],
      ie = T.createButton(51, 36, null, Z),
      _e = T.createButton(51, 36, null, ee),
      ae = T.createButton(51, 36, null, Z),
      oe = T.createButton(51, 36, null, ee),
      de = 0,
      te = 0,
      ne = 0,
      se = 0,
      le = 0,
      me = 0,
      ce = 0,
      ue = 0,
      Le = 0;

    function Ee(e, i, _, a, o) {
      if (e = window.Number(e) >>> 0, i = window.Number(i) >>> 0, _ = window
        .Number(_) >>> 0, a = window.Number(a) >>> 0, !((o = window.Number(
          o) >>> 0) > 3 || _ >= ge.height || a >= ge.height)) {
        var d = ve[e];
        if (!(d === window.undefined || d.subtype === window.undefined || d
            .subtype > 0 && d.building.length <= i)) {
          o = 1 === d.wall ? 0 : o;
          var t = d.xCenter[o] + 50 + 100 * a,
            n = d.yCenter[o] + 50 + 100 * _,
            r = 0;
          switch (0 === d.subtype ? d.zid : d.subtype[i].zid) {
            case 0:
              r = __ENTITIE_BUILD_DOWN__;
              break;
            case 1:
              r = __ENTITIE_BUILD_TOP__;
              break;
            case 2:
              r = __ENTITIE_BUILD_GROUND2__;
              break;
            default:
              r = __ENTITIE_BUILD_GROUND__
          }! function(e, i, _, a, o, d, t) {
            var n = D.get(e, Le, Le, i);
            Y(n, e, Le, Le, i, _, a, _, a, (t << 7) + (o << 5), 0, d);
            var r = k[i].update;
            r !== window.undefined && r(n, _, a);
            Le++
          }(1, r, t, n, o, 1 + (0 === d.subtype ? 0 : i << 5), d.id)
        }
      }
    }

    function fe(e) {
      var i = "",
        _ = D.units[e],
        a = D.border[e],
        o = a.border;
      for (Oe = 0; Oe < o; Oe++) {
        var d = _[a.cycle[Oe]],
          t = ve[d.extra >> 7];
        i += "!b=" + t.id + ":", 0 !== t.subtype && (i += d.subtype + ":"), i +=
          d.j + ":" + d.i + ":" + (d.extra >> 5 & 3)
      }
      return i
    }

    function be(e, i, _) {
      var a = D.units[e],
        o = D.border[e],
        d = o.border;
      for (Oe = 0; Oe < d; Oe++) {
        var t = a[o.cycle[Oe]];
        if (t.x >= i && t.x <= i + 100 && t.y >= _ && t.y <= _ + 100)
        return void D.remove(t.pid, t.id, t.uid, e, t.extra)
      }
    }
    var he = window.Math.sqrt(2) / 2;
    var ye, Ae, Se, Re, Te, Me, Ie, Pe, We, Fe, Ne, xe, Ce, Ve, Be, De, ke, Ue,
      Ye = null,
      He = (Ye = null, 0),
      Ge = [],
      Ke = 0;
    var ze = new R.LocalMouseEvent,
      Je = new z.LocalKeyboardEvent,
      Xe = 0,
      Qe = O.Ease.inQuad,
      je = 0,
      qe = O.Ease.outQuad,
      Ze = 0,
      $e = 0,
      ei = window.undefined;

    function ii() {
      var e = 0,
        a = 0;
      if ($e > 0) {
        a = _;
        var t = ei(1 - $e / Ze);
        1 === t && ($e = 0), 1 === je && (t = 1 - window.Math.abs(t)), e *= t,
          a *= t
      }
      ye.pos.x = o - window.Math.floor(134 * h) + e, ye.pos.y = window.Math.max(
          0, d - window.Math.floor(133 * h)) + a, Ae.pos.x = o - window.Math
        .floor(206 * h) + e, Ae.pos.y = window.Math.max(0, d - window.Math
          .floor(206 * h)) + a, Se.pos.x = window.Math.floor(5 * h) - e, Se.pos
        .y = window.Math.floor(5 * h) - a, Re.pos.x = Se.pos.x + window.Math
        .floor(126 * h), Re.pos.y = Se.pos.y, Te.pos.x = Re.pos.x, Te.pos.y = Re
        .pos.y + window.Math.floor(44.5 * h), Me.pos.x = Te.pos.x, Me.pos.y = Te
        .pos.y + window.Math.floor(44.5 * h), Ie.pos.x = i - window.Math.floor(
          67 * h) + window.Math.floor(-5 * h) - e, Ie.pos.y = window.Math.floor(
          5 * h) - a, Pe.pos.x = Ie.pos.x + window.Math.floor(-70 * h), Pe.pos
        .y = window.Math.floor(5 * h) - a, We.pos.x = Pe.pos.x + window.Math
        .floor(-70 * h), We.pos.y = window.Math.floor(5 * h) - a, Fe.pos.x = We
        .pos.x + window.Math.floor(-70 * h), Fe.pos.y = window.Math.floor(5 *
        h) - a, Ne.pos.x = Fe.pos.x + window.Math.floor(-70 * h), Ne.pos.y =
        window.Math.floor(5 * h) - a, De.pos.x = window.Math.floor(5 * h), De
        .pos.y = _ - window.Math.floor(46.5 * h) + window.Math.floor(-5 * h), ke
        .pos.x = De.pos.x + window.Math.floor(50 * h), ke.pos.y = _ - window
        .Math.floor(46.5 * h) + window.Math.floor(-5 * h), xe.pos.x = Se.pos.x +
        window.Math.floor(89 * h), xe.pos.y = Se.pos.y + window.Math.floor(126 *
          h), Ce.pos.x = i - window.Math.floor(46.5 * h) + window.Math.floor(-
          5 * h), Ce.pos.y = _ - window.Math.floor(46.5 * h) + window.Math
        .floor(-5 * h), Ve.pos.x = Ce.pos.x + window.Math.floor(-50 * h), Ve.pos
        .y = _ - window.Math.floor(46.5 * h) + window.Math.floor(-5 * h), Be.pos
        .x = Se.pos.x, Be.pos.y = Se.pos.y + window.Math.floor(126 * h)
    }

    function _i(e) {
      R.updateAll(e, R.__MOUSE_DOWN__);
      var i = 0;
      if (1 === Re.trigger() && (i = 1), 1 === Te.trigger() && (i = 1), 1 === Me
        .trigger() && (i = 1), 1 === Ie.trigger() && (i = 1), 1 === Pe
      .trigger() && (i = 1), 1 === We.trigger() && (i = 1), 1 === Fe
      .trigger() && (i = 1), 1 === Ne.trigger() && (i = 1), 1 === De
      .trigger() && (i = 1), 1 === ke.trigger() && (i = 1), 1 === xe
      .trigger() && (i = 1), 1 === Ce.trigger() && (i = 1), 1 === Be
      .trigger() && (i = 1), 1 === a) v.trigger(), 1 === r && (X.trigger(), q
        .trigger(), C.trigger(), U.trigger(), G.trigger(), ie.trigger(), _e
        .trigger(), ae.trigger(), oe.trigger(), W.trigger(), I.trigger(), N
        .trigger());
      else
        for (var _ = 0; _ < w; _++) 1 === E[_].trigger() && (i = 1);
      0 === i && 0 === a ? (1, -1 === B.PLAYER.click && (B.PLAYER.click = 0)) :
        0 === B.PLAYER.click && (B.PLAYER.click = -1)
    }

    function ai(i) {
      R.updateAll(i, R.__MOUSE_UP__);
      if (1 === Re.trigger() && (1, 0 === g ? (g = 1, A.enableFullscreen(),
          0 === B.day ? e.style.backgroundColor = "#3D5942" : e.style
          .backgroundColor = "#0B2129", J.playFx(J._fx.button, 1, 0)) : (g =
          0, A.disableFullscreen(), J.playFx(J._fx.button, 1, 0))), 1 === Te
        .trigger()) return 1, 0 === r ? (y(), a = 1, r = 1, void J.playFx(J._fx
        .open, 1, 0)) : (y(), void J.playFx(J._fx.open, 1, 0));
      if (1 === Me.trigger()) return 1, 0 === n ? (y(), a = 1, n = 1, void J
        .playFx(J._fx.open, 1, 0)) : (y(), void J.playFx(J._fx.open, 1, 0));
      if (1 === Ie.trigger()) {
        1,
        w = 0;
        for (var _ = 1; _ < ve.length; _++) {
          (d = ve[_]).behavior === pe.__LOGIC__ && (E[w].setImages(d.itemButton
            .src, d.itemButton.img), E[w].itemId = d.id, w++)
        }
        J.playFx(J._fx.button, 1, 0)
      }
      if (1 === Pe.trigger()) {
        1,
        w = 0;
        for (_ = 1; _ < ve.length; _++) {
          (d = ve[_]).id !== we.__LANDMINE__ && d.id !== we.__C4__ && d.id !==
            we.__WOOD_SPIKE__ && d.id !== we.__DYNAMITE__ || (E[w].setImages(d
              .itemButton.src, d.itemButton.img), E[w].itemId = d.id, w++)
        }
        J.playFx(J._fx.button, 1, 0)
      }
      if (1 === We.trigger()) {
        1,
        w = 0;
        var o = ve[we.__ROAD__].subtype;
        for (_ = 0; _ < o.length; _++) {
          var d = o[_];
          E[w].setImages(d.itemButton.src, d.itemButton.img), E[w].itemId = we
            .__ROAD__, E[w].itemSubId = _, w++
        }
        J.playFx(J._fx.button, 1, 0)
      }
      if (1 === Fe.trigger()) {
        1,
        w = 0;
        for (o = ve[we.__FURNITURE__].subtype, _ = 0; _ < o.length; _++) {
          d = o[_];
          E[w].setImages(d.itemButton.src, d.itemButton.img), E[w].itemId = we
            .__FURNITURE__, E[w].itemSubId = _, w++
        }
        J.playFx(J._fx.button, 1, 0)
      }
      if (1 === Ne.trigger()) {
        1,
        w = 0;
        for (_ = 1; _ < ve.length; _++) {
          1 !== (d = ve[_]).wall && 1 !== d.lowWall && 1 !== d.door && 1 !== we
            .__CHEST__ && 1 !== we.__FRIDGE__ || (E[w].setImages(d.itemButton
              .src, d.itemButton.img), E[w].itemId = d.id, w++)
        }
        J.playFx(J._fx.button, 1, 0)
      }
      if (1 === De.trigger() && (1, re.scale < 1.5 && (re.scale += .1, J.playFx(
          J._fx.button, 1, 0), ke.show(), re.scale >= 1.5 && De.hide())), 1 ===
        ke.trigger() && (1, re.scale > -.95 && (re.scale < 0 ? re.scale -= .05 :
          re.scale -= .1, J.playFx(J._fx.button, 1, 0), De.show(), re.scale <=
          -.95 && ke.hide())), 1 === xe.trigger() && (1, b(), J.playFx(J._fx
          .button, 1, 0)), 1 === Ce.trigger()) {
        1,
        J.playFx(J._fx.open, 1, 0);
        var t = window.prompt("Please enter your code here", "");J.playFx(J._fx
          .open, 1, 0),
        null != t && "" != t && function(e) {
          b(), (e = e.split("!b=")).shift();
          for (var i = 0; i < e.length; i++) {
            var _ = e[i].split(":");
            _.length > 4 ? Ee(_[0], _[1], _[3], _[2], _[4]) : Ee(_[0], 0, _[2],
              _[1], _[3])
          }
        }(t)
      }
      if (1 === Ve.trigger() && (1, J.playFx(J._fx.button, 1, 0), function() {
          He <= 0 ? He = 3e3 : He <= 500 ? He = 3e3 - He : He <= 2500 && (He =
            2500);
          var e = "";
          e += fe(__ENTITIE_BUILD_DOWN__), e += fe(__ENTITIE_BUILD_TOP__),
            e += fe(__ENTITIE_BUILD_GROUND2__), e += fe(
              __ENTITIE_BUILD_GROUND__);
          var i = window.document.createElement("textarea");
          i.value = e, window.document.body.appendChild(i), i.select(), window
            .document.execCommand("copy"), window.document.body.removeChild(i)
        }()), 1 === Be.trigger() && (1, $.quit(Q), J.playFx(J._fx.play, 1, 0)),
        1 === a) {
        if (1 === v.trigger()) return y(), void J.playFx(J._fx.open, 1, 0);
        if (1 === r) {
          if (q.setState(T.__BUTTON_OUT__), X.setState(T.__BUTTON_OUT__), C
            .setState(T.__BUTTON_OUT__), U.setState(T.__BUTTON_OUT__), G
            .setState(T.__BUTTON_OUT__), ie.setState(T.__BUTTON_OUT__), _e
            .setState(T.__BUTTON_OUT__), ae.setState(T.__BUTTON_OUT__), oe
            .setState(T.__BUTTON_OUT__), I.setState(T.__BUTTON_OUT__), W
            .setState(T.__BUTTON_OUT__), N.setState(T.__BUTTON_OUT__), 1 === X
            .trigger()) return z.setAzerty(), void J.playFx(J._fx.button, 1, 0);
          if (1 === q.trigger()) return z.setQwert(), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === C.trigger()) return A.setResolution(1), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === U.trigger()) return A.setResolution(2), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === G.trigger()) return A.setResolution(3), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === ie.trigger()) return J.setAudio(1), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === _e.trigger()) return J.setAudio(0), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === ae.trigger()) return J.setFx(1), void J.playFx(J._fx.button,
            1, 0);
          if (1 === oe.trigger()) return J.setFx(0), void J.playFx(J._fx.button,
            1, 0);
          if (1 === W.trigger()) return re.setParticles(1), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === I.trigger()) return re.setParticles(2), void J.playFx(J._fx
            .button, 1, 0);
          if (1 === N.trigger()) return re.setParticles(0), void J.playFx(J._fx
            .button, 1, 0);
          var s = ye.pos;
          if (R.sx < s.x || R.sx > s.x + 234 * h || R.sy < s.y || R.sy > s.y +
            232 * h) return y(), void J.playFx(J._fx.open, 1, 0)
        } else if (1 === n) {
          var l = Ae.pos;
          if (R.sx < l.x || R.sx > l.x + 412 * h || R.sy < l.y || R.sy > l.y +
            412 * h) return y(), void J.playFx(J._fx.open, 1, 0)
        }
      } else
        for (_ = 0; _ < w; _++) 1 === E[_].trigger() && (J.playFx(J._fx.button,
            1, 0), B.PLAYER.blueprint = E[_].itemId, B.PLAYER.furniture = E[_]
          .itemSubId, console.log(E[_].itemId), B.PLAYER.blueprint === we
          .__ROAD__ && (B.PLAYER.buildRotate = 0))
    }

    function oi(e) {
      R.updateAll(e, R.__MOUSE_MOVE__);
      if (1 === Re.trigger() && 1, 1 === Te.trigger() && 1, 1 === Me
      .trigger() && 1, 1 === Ie.trigger() && 1, 1 === Pe.trigger() && 1, 1 ===
        We.trigger() && 1, 1 === Fe.trigger() && 1, 1 === Ne.trigger() && 1,
        1 === De.trigger() && 1, 1 === ke.trigger() && 1, 1 === xe.trigger() &&
        1, 1 === Ce.trigger() && 1, 1 === Ve.trigger() && 1, 1 === Be
      .trigger() && 1, 1 === a) v.trigger(), 1 === r && (X.trigger(), q
        .trigger(), C.trigger(), U.trigger(), G.trigger(), ie.trigger(), _e
        .trigger(), ae.trigger(), oe.trigger(), W.trigger(), I.trigger(), N
        .trigger());
      else
        for (var i = 0; i < w; i++) E[i].trigger()
    }

    function di(e) {
      z.keyup(e), 77 === e.keyCode ? 0 === n ? (y(), a = 1, n = 1, J.playFx(J
          ._fx.open, 1, 0)) : (y(), J.playFx(J._fx.open, 1, 0)) : 27 === e
        .keyCode && 1 === a ? (J.playFx(J._fx.open, 1, 0), y()) : 82 === e
        .keyCode && 1 === B.PLAYER.isBuilding && B.PLAYER.blueprint !== we
        .__ROAD__ && (B.PLAYER.buildRotate = (B.PLAYER.buildRotate + 1) % 4)
    }

    function ti(e) {
      if (z.keydown(e), 37 === e.keyCode || 38 === e.keyCode || 39 === e
        .keyCode || 40 === e.keyCode) return e.preventDefault(), !1
    }

    function ri(e) {
      for (var n = 0, r = 0; r < e.touches.length; r++) {
        if (R.touchToMouseEvent(ze, e, e.touches[r]), 0 === a) {
          var g = window.Math.floor(ze.clientX * A.options.ratioX),
            s = window.Math.floor(ze.clientY * A.options.ratioY);
          if (s < _ - 70 * h) {
            var l = 1.5 * t,
              m = t / 4;
            if (g < o) {
              var c = 30 * h;
              te = S.angle(o - l, d + m, g, s), ne = window.Math.min(S.dist(g,
                  s, o - l, d + m), 25), g < o - l - c ? (de |= 1, Je.charCode =
                  37, Je.keyCode = 37, ti(Je)) : g > o - l + c && (de |= 2, Je
                  .charCode = 39, Je.keyCode = 39, ti(Je)), s < d + m - c ? (
                  de |= 4, Je.charCode = 38, Je.keyCode = 38, ti(Je)) : s > d +
                m + c && (de |= 8, Je.charCode = 40, Je.keyCode = 40, ti(Je))
            } else if (g < i - 40 * h || s > 40 * h)
              if (n = 1, ze.clientX -= l / A.options.ratioX, ze.clientY -= m / A
                .options.ratioX, 1 === B.PLAYER.isBuilding) {
                var u = window.Date.now();
                u - se < 1e3 && (le = 1, me = ze.clientX, ce = ze.clientY, _i(
                  ze)), se = u
              } else le = 1, me = ze.clientX, ce = ze.clientY, _i(ze);
            continue
          }
        }
        0 === n && 0 === de && (_i(ze), n = 1)
      }
    }

    function gi(e) {}

    function si(e) {
      var i = window.Math.floor(e.changedTouches[0].clientX * A.options.ratioX),
        d = window.Math.floor(e.changedTouches[0].clientY * A.options.ratioY);
      if (1 === ue) ue = 0;
      else if (1 === a) ai(ze);
      else {
        if (1 === le && i >= o) return le = 0, ze.clientX = me, ze.clientY = ce,
          void ai(ze);
        0 === B.PLAYER.drag.begin && i < o && d < _ - 70 * h ? i < 240 * h &&
          d < 160 * h && ai(ze) : ai(ze)
      }
      0 !== de && (1 & de && (Je.charCode = 37, di(Je)), 2 & de && (Je
          .charCode = 39, di(Je)), 4 & de && (Je.charCode = 38, di(Je)), 8 &
        de && (Je.charCode = 40, di(Je)), de = 0)
    }

    function li(e) {
      for (var n = 0, r = 0, g = 0; g < e.touches.length; g++) {
        if (R.touchToMouseEvent(ze, e, e.touches[g]), 0 === B.PLAYER.drag
          .begin && 0 === a) {
          var s = window.Math.floor(ze.clientX * A.options.ratioX),
            l = window.Math.floor(ze.clientY * A.options.ratioY);
          if (l < _ - 70 * h) {
            var m = 1.5 * t,
              c = t / 4;
            if (s < o) {
              r = 1;
              var u = 0,
                p = 30 * h;
              te = S.angle(o - m, d + c, s, l), ne = window.Math.min(S.dist(s,
                  l, o - m, d + c), 25), s < o - m - p ? u |= 1 : s > o - m +
                p && (u |= 2), l < d + c + -p ? u |= 4 : l > d + c + p && (u |=
                  8), 1 == (1 & u) && 1 != (1 & de) ? (Je.charCode = 37, ti(
                Je)) : 1 != (1 & u) && 1 == (1 & de) && (Je.charCode = 37, di(
                  Je)), 2 == (2 & u) && 2 != (2 & de) ? (Je.charCode = 39, ti(
                  Je)) : 2 != (2 & u) && 2 == (2 & de) && (Je.charCode = 39, di(
                  Je)), 4 == (4 & u) && 4 != (4 & de) ? (Je.charCode = 38, ti(
                  Je)) : 4 != (4 & u) && 4 == (4 & de) && (Je.charCode = 38, di(
                  Je)), 8 == (8 & u) && 8 != (8 & de) ? (Je.charCode = 40, ti(
                  Je)) : 8 != (8 & u) && 8 == (8 & de) && (Je.charCode = 40, di(
                  Je)), de = u;
              continue
            }(s < i - 40 * h || l > 40 * h) && (n = 1, ze.clientX -= m / A
              .options.ratioX, ze.clientY -= c / A.options.ratioX, me = ze
              .clientX, ce = ze.clientY, oi(ze))
          }
        }
        0 === n && 0 === de && (oi(ze), n = 1)
      }
      0 === r && 0 !== de && (1 & de && (Je.charCode = 37, di(Je)), 2 & de && (
          Je.charCode = 39, di(Je)), 4 & de && (Je.charCode = 38, di(Je)), 8 &
        de && (Je.charCode = 40, di(Je)), de = 0)
    }
    return {
      quit: function(e) {
        y(), ni.quitGame(), Ue = e,
          function() {
            0 === L && window.removeEventListener("mousedown", _i, !1);
            0 === L && window.removeEventListener("mouseup", ai, !1);
            0 === L && window.removeEventListener("mousemove", oi, !1);
            0 === L && window.removeEventListener("keyup", di, !1);
            0 === L && window.removeEventListener("keydown", ti, !1);
            1 === L && window.removeEventListener("touchstart", ri, !1);
            1 === L && window.removeEventListener("touchend", gi, !1);
            1 === L && window.removeEventListener("touchcancel", si, !1);
            1 === L && window.removeEventListener("touchmove", li, !1)
          }(), $e = 1e3, Ze = 1e3, ei = Qe, Xe = 1
      },
      init: function() {
        for (Ye = T.renderText("Copied to clipboard", "'Viga', sans-serif",
            "#FFFFFF", 40, 350, "#000000", 18, 18, window.undefined, window
            .undefined, .6), Oe = 0; Oe < 64; Oe++) E.push(T.createButton(40,
          40, null, p));
        ye = T.createBackground(269, 267, "img/settings-box.png"), Ae = T
          .createBackground(412, 412, "img/borderBigMinimap2.png"), Se = T
          .createBackground(128, 128, "img/minimap.png"), Re = T.createButton(
            40, 40, ["img/full-screen-out.png", "img/full-screen-in.png",
              "img/full-screen-click.png"
            ]), Te = T.createButton(40, 40, ["img/settings-out.png",
            "img/settings-in.png", "img/settings-click.png"
          ]), Me = T.createButton(40, 40, ["img/minimap-button-out.png",
            "img/minimap-button-in.png", "img/minimap-button-click.png"
          ]), Ie = T.createButton(67, 67, ["img/logic-button-out.png",
            "img/logic-button-in.png", "img/logic-button-click.png"
          ]), Pe = T.createButton(67, 67, ["img/map-explosive-button-out.png",
            "img/map-explosive-button-in.png",
            "img/map-explosive-button-click.png"
          ]), We = T.createButton(67, 67, ["img/map-road-button-out.png",
            "img/map-road-button-in.png", "img/map-road-button-click.png"
          ]), Fe = T.createButton(67, 67, ["img/map-furniture-button-out.png",
            "img/map-furniture-button-in.png",
            "img/map-furniture-button-click.png"
          ]), Ne = T.createButton(67, 67, ["img/map-building-button-out.png",
            "img/map-building-button-in.png",
            "img/map-building-button-click.png"
          ]), De = T.createButton(46.5, 46.5, ["img/zoom-button-out.png",
            "img/zoom-button-in.png", "img/zoom-button-click.png"
          ]), ke = T.createButton(46.5, 46.5, ["img/unzoom-button-out.png",
            "img/unzoom-button-in.png", "img/unzoom-button-click.png"
          ]), xe = T.createButton(40, 40, ["img/map-delete-button-out.png",
            "img/map-delete-button-in.png",
            "img/map-delete-button-click.png"
          ]), Ce = T.createButton(46.5, 46.5, ["img/import-button-out.png",
            "img/import-button-in.png", "img/import-button-click.png"
          ]), Ve = T.createButton(46.5, 46.5, [
            "img/copy-paste-button-out.png", "img/copy-paste-button-in.png",
            "img/copy-paste-button-click.png"
          ]), Be = T.createButton(60, 60, ["img/home-button-out.png",
            "img/home-button-in.png", "img/home-button-click.png"
          ])
      },
      run: function() {
        if (window.document.getElementById("bod").style.backgroundColor =
          "#46664D", 0, ni.startGame(), 0 === Ke) {
          Ke = 1;
          for (var e = ve[we.__ROAD__].subtype, i = 0; i < e.length; i++) {
            (_ = e[i]).itemButton = {
              src: [_.building.src, "img/useless.png", "img/useless.png"],
              img: [{
                isLoaded: 0
              }, {
                isLoaded: 0
              }, {
                isLoaded: 0
              }]
            }
          }
          for (e = ve[we.__FURNITURE__].subtype, i = 0; i < e.length; i++) {
            var _;
            (_ = e[i]).itemButton = {
              src: [_.building.src, "img/useless.png", "img/useless.png"],
              img: [{
                isLoaded: 0
              }, {
                isLoaded: 0
              }, {
                isLoaded: 0
              }]
            }
          }
        }
        b(), A.setRenderer($), $e = 1e3, Ze = 1e3, ei = qe, je = 1, ii()
      },
      update: ii,
      draw: function() {
        if (0 !== function() {
            if (1 === Xe) {
              if (ii(), $e < 0) return Xe = 0, Re.setState(T.__BUTTON_OUT__),
                Te.setState(T.__BUTTON_OUT__), Me.setState(T
                .__BUTTON_OUT__), Ie.setState(T.__BUTTON_OUT__), Pe
                .setState(T.__BUTTON_OUT__), We.setState(T.__BUTTON_OUT__),
                Fe.setState(T.__BUTTON_OUT__), Ne.setState(T
                .__BUTTON_OUT__), De.setState(T.__BUTTON_OUT__), ke
                .setState(T.__BUTTON_OUT__), xe.setState(T.__BUTTON_OUT__),
                Ce.setState(T.__BUTTON_OUT__), Ve.setState(T
                .__BUTTON_OUT__), Be.setState(T.__BUTTON_OUT__), Ue.run(), 0;
              $e -= f
            } else 1 === je && (ii(), $e < 0 && (je = 0, function() {
              0 === L && window.addEventListener("mousedown", _i, !1);
              0 === L && window.addEventListener("mouseup", ai, !1);
              0 === L && window.addEventListener("mousemove", oi, !1);
              0 === L && window.addEventListener("keyup", di, !1);
              0 === L && window.addEventListener("keydown", ti, !1);
              1 === L && window.addEventListener("touchstart", ri, !1);
              1 === L && window.addEventListener("touchend", gi, !1);
              1 === L && window.addEventListener("touchcancel", si, !1);
              1 === L && window.addEventListener("touchmove", li, !1)
            }()), $e -= f);
            return 1
          }()) {
          if (function() {
              if (R.state === R.__MOUSE_DOWN__ && 0 === B.PLAYER.click) {
                if (1 === B.PLAYER.isBuilding)
                  if (B.PLAYER.click = -1, 1 === B.PLAYER.canBuild) - 1 !== B
                    .PLAYER.jBuild && -1 !== B.PLAYER.iBuild && B.PLAYER
                    .jBuild !== ge.width && B.PLAYER.iBuild !== ge.height &&
                    Ee(B.PLAYER.blueprint, B.PLAYER.furniture, B.PLAYER
                      .iBuild, B.PLAYER.jBuild, B.PLAYER.buildRotate);
                  else {
                    var e = 100 * B.PLAYER.jBuild,
                      i = 100 * B.PLAYER.iBuild;
                    be(__ENTITIE_BUILD_DOWN__, e, i), be(
                      __ENTITIE_BUILD_TOP__, e, i), be(
                      __ENTITIE_BUILD_GROUND2__, e, i), be(
                      __ENTITIE_BUILD_GROUND__, e, i)
                  }
              } else R.state === R.__MOUSE_UP__ && 1 === B.PLAYER
                .isBuilding && (0, B.PLAYER.click = 0)
            }(), function() {
              var e = 0;
              if (1 === z.isLeft() && (e |= 1), 1 === z.isRight() && (e |= 2),
                1 === z.isBottom() && (e |= 4), 1 === z.isTop() && (e |= 8),
                e > 0) {
                var i = B.players[1].locatePlayer;
                if (-1 === i) return;
                var _ = D.units[__ENTITIE_PLAYER__][i];
                WvvVn = (3 & e && 12 & e ? he : 1) * (0 === z.isShift() ?
                    1.5 * f : 11 * f), 1 & e ? _.rx = _.x - WvvVn : 2 & e && (
                    _.rx = _.x + WvvVn), 8 & e ? _.ry = _.y - WvvVn : 4 & e &&
                  (_.ry = _.y + WvvVn), _.rx = window.Math.max(0, window.Math
                    .min(_.rx, 100 * ge.width)), _.ry = window.Math.max(0,
                    window.Math.min(_.ry, 100 * ge.height)), _.nx = _.rx, _
                  .ny = _.ry
              }
            }(), u.clearRect(0, 0, i, _), B.updatePosition(), re.world(), re
            .minimap(Se.pos.x, Se.pos.y), Se.draw(), Re.draw(), Te.draw(), Me
            .draw(), Ie.draw(), Pe.draw(), We.draw(), Fe.draw(), Ne.draw(), De
            .draw(), ke.draw(), xe.draw(), Ce.draw(), Ve.draw(), Be.draw(),
            function() {
              He > 0 && ((He -= f) > 2500 ? u.globalAlpha = O.Ease.inOutQuad((
                    3e3 - He) / 500) : He < 500 && (u.globalAlpha = O.Ease
                    .inOutQuad(He / 500)), u.drawImage(Ye, Ve.pos.x - 85 * h,
                    Ve.pos.y - 40 * h, Ye.wh * h, Ye.h2 * h), u.globalAlpha =
                  1), Ge[B.PLAYER._j] === window.undefined && (Ge[B.PLAYER
                  ._j] = []), Ge[B.PLAYER._j][B.PLAYER._i] === window
                .undefined && (Ge[B.PLAYER._j][B.PLAYER._i] = T.renderText(
                  "(" + B.PLAYER._j + "," + B.PLAYER._i + ")",
                  "'Viga', sans-serif", "#FFFFFF", 52, 455, "#000000", 22,
                  22, window.undefined, window.undefined, .4, window
                  .undefined, "#000000", 15.6));
              var e = Ge[B.PLAYER._j][B.PLAYER._i];
              u.drawImage(e, 5 * h, De.pos.y - 42 * h, e.wh * h, e.h2 * h)
            }(),
            function() {
              for (var e = Ne.pos.x - 5 * h, i = Ne.pos.y + 74 * h, _ = 45 *
                  h, a = 0; a < w; a++) {
                var o = E[a];
                o.pos.x = e + a % 8 * _, o.pos.y = i + window.Math.floor(a /
                  8) * _, o.draw()
              }
            }(), 1 === a) 1 === n ? re.bigminimap(Ae, v) : 1 === r && re
            .config(ye, C, U, G, X, q, ie, _e, ae, oe, v, I, W, N);
          else if (1 === L) {
            if (z.isLeft() + z.isRight() + z.isTop() + z.isBottom() >= 1) {
              u.globalAlpha = .3;
              var e = s - 1.5 * m,
                o = l + m / 4;
              A.circle(u, e, o, 60), A.drawPath(u, "#000000"), A.circle(u, e +
                window.Math.cos(te) * ne * h, o + window.Math.sin(te) * ne *
                h, 30), A.drawPath(u, "#FFFFFF"), u.globalAlpha = 1
            }
            if (1 === le) {
              u.globalAlpha = .3;
              e = s + 1.5 * m, o = l + m / 4;
              A.circle(u, e, o, 60), A.drawPath(u, "#000000"), A.circle(u, e +
                  25 * window.Math.cos(R.angle) * h, o + 25 * window.Math.sin(
                    R.angle) * h, 30), A.drawPath(u, "#FFFFFF"), u
                .globalAlpha = 1
            }
          }
          ni.scheduler()
        }
      }
    }
  }(),
  ee = 1,
  ie = {};
ie.__ROAD_T0B0L0R1__ = ee++, ie.__ROAD_T0B0L1R0__ = ee++, ie.__ROAD_T0B0L1R1__ =
  ee++, ie.__ROAD_T0B1L0R0__ = ee++, ie.__ROAD_T0B1L0R1__ = ee++, ie
  .__ROAD_T0B1L1R0__ = ee++, ie.__ROAD_T0B1L1R1__ = ee++, ie.__ROAD_T1B0L0R1__ =
  ee++, ie.__ROAD_T1B0L1R0__ = ee++, ie.__ROAD_T1B0L1R0__ = ee++, ie
  .__ROAD_T1B0L1R1__ = ee++, ie.__ROAD_T1B1L0R0__ = ee++, ie.__ROAD_T1B1L0R1__ =
  ee++, ie.__ROAD_T1B1L1R0__ = ee++, ie.__ROAD_T1B1L1R1__ = ee++;
var _e = [{}, {
  id: ie.__ROAD_T0B0L0R1__,
  src: "img/road-T0B0L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 0,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [ie.__ROAD_T0B0L0R1__]
}, {
  id: ie.__ROAD_T0B0L1R0__,
  src: "img/road-T0B0L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 28,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [ie.__ROAD_T0B0L1R0_1__, ie.__ROAD_T0B0L1R0_2__]
}, {
  id: ie.__ROAD_T0B0L1R1__,
  src: "img/road-T0B0L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 56,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [ie.__ROAD_T0B0L1R1_1__, ie.__ROAD_T0B0L1R1_2__, ie
    .__ROAD_T0B0L1R1_3__, ie.__ROAD_T0B0L1R1_4__, ie.__ROAD_T0B0L1R1_5__,
    ie.__ROAD_T0B0L1R1_6__, ie.__ROAD_T0B0L1R1_7__, ie.__ROAD_T0B0L1R1_8__
  ]
}, {
  id: ie.__ROAD_T0B1L0R0__,
  src: "img/road-T0B1L0R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 84,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [ie.__ROAD_T0B1L0R0_1__, ie.__ROAD_T0B1L0R0_2__]
}, {
  id: ie.__ROAD_T0B1L0R1__,
  src: "img/road-T0B1L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 56,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T0B1L1R0__,
  src: "img/road-T0B1L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 0,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T0B1L1R1__,
  src: "img/road-T0B1L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 112,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B0L0R1__,
  src: "img/road-T1B0L0R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 28,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B0L1R0__,
  src: "img/road-T1B0L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 56,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B0L1R0__,
  src: "img/road-T1B0L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 84,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B0L1R1__,
  src: "img/road-T1B0L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 84,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B1L0R0__,
  src: "img/road-T1B1L0R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 112,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B1L0R1__,
  src: "img/road-T1B1L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 112,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B1L1R0__,
  src: "img/road-T1B1L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 0,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: ie.__ROAD_T1B1L1R1__,
  src: "img/road-T1B1L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 28,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [ie.__ROAD_T1B1L1R1_1__, ie.__ROAD_T1B1L1R1_2__]
}];
try {
  exports !== window.undefined && (exports.BID = ie, exports.BUILDINGS = _e)
} catch (gi) {}
var ae, oe, de, te, ne, re = function() {
    var a = 100,
      t = a / 2,
      n = 100,
      l = 0,
      p = 0,
      E = 0,
      w = 0,
      b = 0,
      y = 0,
      v = 0,
      M = 410,
      I = M,
      P = 51.5,
      W = 0,
      F = "img/loot-isTouchScreen.png",
      N = "img/craft-grid.png",
      x = "img/hint-rotate.png",
      C = "img/day-unusable.png",
      V = "img/day-clock.png",
      U = "img/night-clock.png",
      H = "img/invitation-box.png",
      G = 500,
      K = 256,
      X = 500,
      q = window.Math.floor(128),
      Z = window.Math.floor(q / 2),
      $ = "img/alert",
      ee = 3e3,
      ie = 500,
      _e = 2500,
      ae = 2 * window.Math.PI,
      oe = window.Math.PI / 2,
      de = window.Math.PI / B.__DAY__,
      te = 1,
      ne = 2,
      se = 4,
      me = 8,
      ce = 16,
      pe = 32,
      Le = 64,
      we = 128,
      fe = 1,
      ye = 2,
      Ae = 4,
      Se = 8,
      Oe = [
        [],
        [],
        [],
        []
      ];
    Oe[0][0] = 0, Oe[0][fe] = 3, Oe[0][ye] = 6, Oe[0][Ae | Se] = 9, Oe[0][Ae] =
      4, Oe[0][Se] = 5, Oe[0][fe | Ae] = 27, Oe[0][fe | Se] = 20, Oe[0][ye |
      Ae] = 7, Oe[0][ye | Se] = 28, Oe[0][fe | Ae | Se] = 24, Oe[0][ye | Ae |
        Se] = 29, Oe[2][0] = 0, Oe[2][fe] = 3, Oe[2][ye] = 6, Oe[2][Ae | Se] =
      9, Oe[2][Ae] = 4, Oe[2][Se] = 5, Oe[2][fe | Ae] = 27, Oe[2][fe | Se] = 20,
      Oe[2][ye | Ae] = 7, Oe[2][ye | Se] = 28, Oe[2][fe | Ae | Se] = 24, Oe[2][
        ye | Ae | Se
      ] = 29, Oe[1][0] = 11, Oe[1][fe] = 12, Oe[1][ye] = 17, Oe[1][Ae | Se] =
      10, Oe[1][Ae] = 19, Oe[1][Se] = 18, Oe[1][fe | Ae] = 34, Oe[1][fe | Se] =
      22, Oe[1][ye | Ae] = 23, Oe[1][ye | Se] = 33, Oe[1][fe | Ae | Se] = 35,
      Oe[1][ye | Ae | Se] = 32, Oe[3][0] = 11, Oe[3][fe] = 15, Oe[3][ye] = 14,
      Oe[3][Ae | Se] = 10, Oe[3][Ae] = 19, Oe[3][Se] = 18, Oe[3][fe | Ae] = 37,
      Oe[3][fe | Se] = 16, Oe[3][ye | Ae] = 23, Oe[3][ye | Se] = 38, Oe[3][fe |
        Ae | Se
      ] = 36, Oe[3][ye | Ae | Se] = 39;
    var Re = [];
    Re[0] = 0, Re[te] = 3, Re[ne] = 4, Re[se] = 2, Re[me] = 1, Re[te | se] = 17,
      Re[te | ne] = 5, Re[te | me] = 18, Re[ne | se] = 16, Re[ne | me] = 19, Re[
        se | me] = 6, Re[te | se | me] = 10, Re[te | se | ne] = 9, Re[me | se |
        ne] = 11, Re[te | me | ne] = 8, Re[te | se | ne | me] = 7, Re[me | ne |
        ce] = 12, Re[me | te | pe] = 13, Re[se | te | we] = 14, Re[se | ne |
      Le] = 15, Re[se | me | ne | ce] = 20, Re[se | me | ne | te | ce] = 21, Re[
        te | me | ne | ce] = 22, Re[se | me | ne | te | Le] = 23, Re[te | se |
        ne | Le] = 24, Re[se | me | ne | Le] = 25, Re[se | me | te | we] = 26,
      Re[se | me | ne | te | we] = 27, Re[se | ne | te | we] = 28, Re[me | ne |
        te | pe] = 29, Re[se | me | ne | te | pe] = 30, Re[se | me | te | pe] =
      31, Re[se | me | ne | te | pe | ce | we | Le] = 32, Re[se | me | ne | te |
        pe | we] = 33, Re[se | me | ne | te | pe | ce] = 34, Re[se | me | ne |
        te | pe | Le] = 35, Re[se | me | ne | te | ce | we] = 36, Re[se | me |
        ne | te | Le | ce] = 37, Re[se | me | ne | te | Le | we] = 38, Re[se |
        me | ne | Le | ce] = 39, Re[se | me | te | we | pe] = 40, Re[ne | me |
        te | ce | pe] = 41, Re[ne | se | te | Le | we] = 42, Re[se | me | ne |
        te | pe | we | Le] = 43, Re[se | me | ne | te | ce | we | Le] = 44, Re[
        se | me | ne | te | pe | ce | Le] = 45, Re[se | me | ne | te | pe | ce |
        we] = 46;
    var Te = 600,
      Ie = 0,
      Pe = 0,
      Ve = 0,
      Be = 0,
      De = 0,
      ke = 0,
      Ue = .01,
      Ye = 0,
      Ze = 0,
      $e = [];
    for (m_ = 0; m_ < 20; m_++) $e[m_] = {
      isLoaded: 0
    };
    var ei = 2,
      _i = [],
      ai = [],
      oi = [],
      di = {
        isLoaded: 0
      },
      ti = {
        isLoaded: 0
      },
      ni = {
        move: 0,
        effect: 0,
        src: "img/arrow-craft.png",
        img: {
          isLoaded: 0
        }
      },
      ri = {
        move: 0,
        effect: 0,
        src: "img/unlock-skills.png",
        img: {
          isLoaded: 0
        }
      },
      gi = {
        src: "img/time-box.png",
        img: {
          isLoaded: 0
        }
      },
      si = {
        src: "img/rank-box.png",
        img: {
          isLoaded: 0
        }
      },
      li = {
        src: "img/toxic-alert.png",
        img: {
          isLoaded: 0
        }
      },
      mi = 0,
      ci = {
        src: "img/radiation-alert.png",
        img: {
          isLoaded: 0
        }
      },
      ui = 0,
      pi = {
        src: "img/e-furniture.png",
        img: {
          isLoaded: 0
        }
      },
      Li = A.loadImage("img/toxic-area2.png"),
      Ei = A.loadImage("img/toxic-area3.png"),
      wi = [],
      fi = [],
      bi = {
        isLoaded: 0
      },
      hi = {
        isLoaded: 0
      },
      yi = {
        isLoaded: 0
      },
      vi = [0, 0, 0, 0],
      Ai = 0,
      Si = [],
      Oi = 0,
      Ri = {
        isLoaded: 0
      },
      Ti = {
        isLoaded: 0
      },
      Mi = {
        isLoaded: 0
      },
      Ii = X,
      Pi = {
        isLoaded: 0
      },
      Wi = {
        isLoaded: 0
      },
      Fi = {
        src: "img/stroke-bonus.png",
        img: {
          isLoaded: 0
        }
      },
      Ni = 0,
      xi = {
        src: "img/wrong-tool.png",
        img: {
          isLoaded: 0
        }
      },
      Ci = {
        src: "img/hand-tool.png",
        img: {
          isLoaded: 0
        }
      },
      Vi = 12e3,
      Bi = 12e3,
      Di = [];
    for (m_ = 0; m_ < 10; m_++)
      for (Di[m_] = [], u_ = 0; u_ < 3; u_++) Di[m_][u_] = {
        isLoaded: 0
      };
    var ki = [];
    for (m_ = 0; m_ < 8; m_++)
      for (ki[m_] = [], u_ = 0; u_ < 2; u_++) ki[m_][u_] = {
        isLoaded: 0
      };
    var Ui = {
        src: "img/arrow-minimap.png",
        img: {
          isLoaded: 0
        }
      },
      Yi = {
        src: "img/arrow-minimap2.png",
        img: {
          isLoaded: 0
        }
      },
      Hi = {
        isLoaded: 0
      },
      Gi = {
        src: "img/house-icon.png",
        img: {
          isLoaded: 0
        }
      },
      Ki = {
        src: "img/city-icon.png",
        img: {
          isLoaded: 0
        }
      },
      zi = {
        src: U,
        img: {
          isLoaded: 0
        }
      },
      Ji = {
        src: V,
        img: {
          isLoaded: 0
        }
      },
      Xi = {
        src: "img/clock-hand.png",
        img: {
          isLoaded: 0
        }
      },
      Qi = {
        src: "img/day-clock-hand.png",
        img: {
          isLoaded: 0
        }
      },
      ji = {
        src: "img/clock-hand-radiation.png",
        img: {
          isLoaded: 0
        }
      },
      qi = {
        src: "img/server-full.png",
        img: {
          isLoaded: 0
        }
      },
      Zi = {
        src: "img/server-old.png",
        img: {
          isLoaded: 0
        }
      },
      $i = {
        src: "img/client-old.png",
        img: {
          isLoaded: 0
        }
      },
      e_ = {
        src: "img/server-wrong.png",
        img: {
          isLoaded: 0
        }
      },
      i_ = {
        isLoaded: 0
      },
      __ = [];
    for (m_ = 0; m_ < 20; m_++) __.push({
      isLoaded: 0
    });
    var a_ = window.document.createElement("canvas"),
      o_ = a_.getContext("2d");
    a_.width = M, a_.height = I, a_.isLoaded = 1, a_.wh = a_.width / 2, a_.h2 =
      a_.height / 2;
    var d_ = {
        img: a_
      },
      t_ = window.document.createElement("canvas"),
      n_ = t_.getContext("2d");
    t_.width = M, t_.height = I, t_.isLoaded = 1, t_.wh = a_.width / 2, t_.h2 =
      a_.height / 2;
    var r_ = {
        img: t_
      },
      g_ = 0;
    var s_ = window.document.createElement("canvas"),
      l_ = s_.getContext("2d");
    s_.width = 699, s_.height = 738, soundLimit = [];
    for (var m_ = 0; m_ < 9; m_++) soundLimit[m_] = 0;
    var c_ = 0;
    for (m_ = 0; m_ < 9; m_++) {
      _i[m_] = [];
      for (var u_ = 0; u_ < 13; u_++) _i[m_][u_] = 0
    }
    var p_ = window.document.createElement("canvas"),
      L_ = p_.getContext("2d");
    p_.width = 280, p_.height = 148;
    var E_ = -1,
      w_ = [],
      f_ = [],
      b_ = window.document.createElement("canvas"),
      h_ = b_.getContext("2d");
    b_.width = 280, b_.height = 50;
    var y_ = -1,
      v_ = window.document.createElement("canvas"),
      A_ = v_.getContext("2d");
    v_.width = 420, v_.height = 148;
    var S_ = -1;

    function O_() {
      this.wallFrame = 0, this.floorFrame = 0, this.drawFloor = 0, this.tile =
        0, this.wall = 0, this.frameId = 0, this.ground = 0, this.pid = 0, this
        .tilePid = 0, this.category = 0, this.i = 0, this.b = [], this.rotate =
        0;
      for (var e = 0; e < 3; e++) this.b.push({
        type: 0,
        cycle: 0
      })
    }

    function R_(e) {
      var i = e.extra >> 7;
      if (!(1 !== ve[i].lowWall || e.hurt > 0 || e.broke > 0)) {
        var _ = ai[e.i][e.j];
        _.wallFrame = c_, _.wall = i, _.rotate = e.extra >> 5 & 3
      }
    }

    function T_(e) {
      var i = e.extra >> 7;
      if (!(1 !== ve[i].wall || e.hurt > 0 || e.broke > 0)) {
        var _ = ai[e.i][e.j];
        if (_.wallFrame = c_, _.wall = ve[i].idWall, B.PLAYER._j === e.j) {
          var a = window.Math.max(1, window.Math.abs(B.PLAYER._i - e.i));
          B.PLAYER._i < e.i ? vi[0] = Ai / a : vi[1] = Ai / a
        } else if (B.PLAYER._i === e.i) {
          a = window.Math.max(1, window.Math.abs(B.PLAYER._j - e.j));
          B.PLAYER._j < e.j ? vi[2] = Ai / a : vi[3] = Ai / a
        }
      }
    }

    function M_(e) {
      var i = e.extra >> 7;
      1 !== ve[i].wall || e.hurt > 0 || e.broke > 0 || (ai[e.i][e.j]
        .floorFrame = c_)
    }

    function I_(e, i) {
      var _ = e.i,
        a = e.j,
        o = ai[_][a];
      if (o.frameId === c_) {
        if (o.i < 3) {
          var d = o.b[o.i];
          o.i += 1, d.type = e.type, d.cycle = i
        }
      } else {
        o.frameId = c_;
        d = o.b[0];
        o.i = 1, d.type = e.type, d.cycle = i
      }
    }

    function P_(e, i, _, a, o, d) {
      e.pos.x = _, e.pos.y = a, e.draw();
      var t, n = ve[i[0]];
      ((t = i[1]) > 1 && (o[t] === window.undefined && (o[t] = {
          img: T.renderText("x" + t, "'Black Han Sans', sans-serif",
            "#ffffff", 30, 250, window.undefined, 15, 12, window
            .undefined, window.undefined, window.undefined, window
            .undefined, "#000000", 12)
        }, o[t].img.isLoaded = 1), A.drawImageHd(o[t], _ / h + 53, a / h + 55,
          -.5, 0, 0, 1)), n.bullet !== window.undefined && n.mMVwm === window
        .undefined) && (d[t = i[3]] === window.undefined && (d[t] = {
        img: T.renderText("x" + t, "'Black Han Sans', sans-serif",
          "#FFFF00", 30, 250, window.undefined, 15, 12, window.undefined,
          window.undefined, window.undefined, window.undefined, "#000000",
          12)
      }, d[t].img.isLoaded = 1), A.drawImageHd(d[t], _ / h + 53, a / h + 55, -
        .5, 0, 0, 1));
      if (n.perish !== window.undefined) {
        var r = window.Math.floor(i[3] / 12.8),
          g = __[r];
        1 !== g.isLoaded ? __[r] = A.loadImage("img/rotten" + r + ".png", g) : u
          .drawImage(g, _ + .5 * h, a, h * g.width / 2, h * g.height / 2)
      }
    }

    function W_(e, i, _) {
      if (w_[e] === window.undefined) {
        w_[e] = window.document.createElement("canvas"), f_[e] = w_[e]
          .getContext("2d");
        var a = w_[e],
          o = f_[e];
        a.width = 400, a.height = 148, o.clearRect(0, 0, 400, 148), A.roundRect(
            o, 0, 0, 400, 148, 10), o.fillStyle = "#000000", o.globalAlpha = .5,
          o.fill(), o.globalAlpha = 1, B_(f_[e], e)
      }
      var d = 74 * h;
      u.drawImage(w_[e], i, _, 190 * h, d)
    }

    function F_(e, i, _) {
      B.PLAYER.nextAreas -= f;
      var a = window.Math.max(0, window.Math.floor(B.PLAYER.nextAreas / 1e3));
      if (a < 3e3) {
        if (A.drawImageHd(gi, e / h + 51, i / h + 145, 0, 0, 0, 1), wi[a] ===
          window.undefined) {
          1 === _ && wi[a + 1] !== window.undefined && (wi[a + 1] = window
            .undefined);
          var o = window.Math.floor(a / 60),
            d = a % 60;
          wi[a] = {
            img: T.renderText((o < 10 ? "0" : "") + o + ":" + (d < 10 ? "0" :
                "") + d, "'Viga', sans-serif", "#FF0000", 38, 100, window
              .undefined, 16, 25, window.undefined, window.undefined, window
              .undefined, window.undefined, "#000000", 12)
          }, wi[a].img.isLoaded = 1
        }
        A.drawImageHd(wi[a], e / h + 60, i / h + 145, 0, 0, 0, 1)
      }
    }

    function N_(e, i) {
      A.drawImageHd(si, e / h + r - 63, 25 + i / h, 0, 0, 0, 1), fi[B
        .playerAlive] === window.undefined && (fi[B.playerAlive] = {
        img: T.renderText("#" + B.playerAlive, "'Viga', sans-serif",
          "#FFFFFF", 60, 140)
      }, fi[B.playerAlive].img.isLoaded = 1), A.drawImageHd(fi[B.playerAlive],
        e / h + r - 50, 25 + i / h, 0, 0, 0, 1)
    }
    var x_ = "",
      C_ = null;

    function V_() {
      var e = Ie;
      e > 0 ? A.fillRect(u, 0, 0, e, g, je) : e = 0;
      var i = Pe;
      i > 0 ? A.fillRect(u, e, 0, r - e, i, je) : i = 0;
      var _ = -Ie + r - p;
      _ > 0 ? A.fillRect(u, r - _, i, _, g - i, je) : _ = 0;
      var a = -Pe + g - E;
      a > 0 && A.fillRect(u, e, g - a, r - e - _, a, je)
    }

    function B_(e, i) {
      var _ = ve[i],
        a = _.detail,
        o = T.renderText(a.name, "'Viga', sans-serif", "#D3BB43", 30, 400);
      if (e.drawImage(o, 20, 20), o = T.renderText(a.description,
          "'Viga', sans-serif", "#FFFFFF", 16, 400), e.drawImage(o, 20, 68),
        21 === _.idWeapon) _.damageBuilding > 0 ? (o = T.renderText("Damage: " +
        _.damage + "/" + _.damageBuilding, "'Viga', sans-serif", "#D3BB43",
        24, 400), e.drawImage(o, 20, 101)) : (o = T.renderText("Life: " + _
        .life, "'Viga', sans-serif", "#D3BB43", 24, 400), e.drawImage(o, 20,
        101));
      else if (_.idWeapon !== window.undefined && 0 !== _.idWeapon) {
        var d = "",
          t = k[__ENTITIE_PLAYER__].weapons[_.idWeapon];
        t.damage !== window.undefined ? d = "Damage: " + (t.damageCac === window
          .undefined ? t.damage : t.damageCac) : (0 !== t.food && (d +=
            "Food: " + t.food + " "), t.heal < 0 ? d += "Damage: " + t.heal +
          " " : t.heal > 0 && (d += "Heal: " + t.heal + " "), 0 !== t
          .energy && (d += "Energy: " + t.energy)), o = T.renderText(d,
          "'Viga', sans-serif", "#D3BB43", 24, 400), e.drawImage(o, 20, 101)
      } else _.idClothe !== window.undefined || (o = T.renderText(
          "Cannot be equipped", "'Viga', sans-serif", "#FFFFFF", 17, 400), e
        .drawImage(o, 20, 108))
    }

    function D_(e) {
      var i = B.players[e.pid];
      if (i.text.length > 0) {
        for (var _ = 0; _ < i.text.length && _ < 2; _++) i.label[_] || (i.label[
          _] = T.renderText(i.text[_], "'Viga', sans-serif", "#ffffff", 32,
          1e3, "#000000", 33, 19, window.undefined, window.undefined, .55, 5
          ), i.textEffect[_] = 0, i.textMove[_] = 0), 1 === _ && (i.textMove[
          0] = 28 * O.Ease.inOutQuad(i.textEase));
        wwmww = f / 1e3, i.textEffect[0] += wwmww, i.text.length > 1 && (i
          .textEase = window.Math.min(i.textEase + wwmww, 1), i.textEffect[
          0] > 1 && i.textEase > .5 && (i.textEffect[1] += wwmww));
        for (_ = 0; _ < i.text.length && _ < 2; _++) {
          var a = i.textEffect[_];
          if (a > 0) {
            u.globalAlpha = a < .25 ? 4 * a : a > 4.75 ? window.Math.max(5 * (
              5 - a), 0) : 1;
            var o = i.label[_];
            u.drawImage(o, 0, 0, o.width, o.height, (Ie + e.x - o.width / 4) *
              h, (Pe + e.y - 118 - i.textMove[_]) * h, o.width / 2 * h, o
              .height / 2 * h), u.globalAlpha = 1
          }
        }
        i.textEffect[0] > 5 && (i.textEffect.shift(), i.text.shift(), i.textMove
          .shift(), i.label.shift(), i.textEase = 0)
      }
    }

    function k_(e) {
      var i = B.players[e.pid];
      if (16 != (255 & e.extra) || 1 === B.PLAYER.admin || e.pid === B.PLAYER
        .id || -1 !== i.team && B.teams[i.team].uid === i.teamUid && B.PLAYER
        .team === i.team) {
        null === i.nicknameLabel && (i.nicknameLabel = T.renderText(i.nickname,
          "'Viga', sans-serif", "#FFFFFF", 38, 400, window.undefined, 16,
          25, window.undefined, window.undefined, window.undefined, window
          .undefined, "#000000", 12));
        var _ = i.nicknameLabel;
        if (-1 === i.team) u.drawImage(_, (Ie + e.x - _.wh / 2) * h, (Pe + e.y -
          90) * h, _.wh * h, _.h2 * h);
        else if (-1 !== i.team) {
          var a = B.teams[i.team];
          if (a.uid === i.teamUid) {
            if (null === a.labelNickname);
            e.pid === B.PLAYER.id || -1 !== B.PLAYER.team && B.PLAYER.team === B
              .players[e.pid].team && B.players[e.pid].teamUid === B.teams[B
                .PLAYER.team].uid ? (1, a.labelNickname = T.renderText("[" + a
                .name + "]", "'Viga', sans-serif", "#FFFFFF", 38, 400, window
                .undefined, 16, 25, window.undefined, window.undefined, window
                .undefined, window.undefined, "#000000", 12)) : a
              .labelNickname = T.renderText("[" + a.name + "]",
                "'Viga', sans-serif", "#FFFFFF", 38, 400, window.undefined, 16,
                25, window.undefined, window.undefined, window.undefined, window
                .undefined, "#000000", 12);
            var o = a.labelNickname;
            u.drawImage(o, (Ie + e.x - _.wh / 2 - o.wh / 2 - .5) * h, (Pe + e
                .y - 90) * h, o.wh * h, o.h2 * h), 0 !== _.width && 0 !== _
              .height && u.drawImage(_, (Ie + e.x - _.wh / 2 + o.wh / 2) * h, (
                Pe + e.y - 90) * h, _.wh * h, _.h2 * h)
          } else i.team = -1
        }
      }
    }

    function U_() {
      if (1 === B.PLAYER.isBuilding) {
        if (B.PLAYER.grid > 0 && (B.PLAYER.iGrid !== B.PLAYER._i || B.PLAYER
            .jGrid !== B.PLAYER._j)) {
          for (var e = 0; e < B.PLAYER.gridPrev.length; e++)
            if (0 === B.PLAYER.gridPrev[e]) {
              B.PLAYER.gridPrev[e] = B.PLAYER.grid, B.PLAYER.iGridPrev[e] = B
                .PLAYER.iGrid, B.PLAYER.jGridPrev[e] = B.PLAYER.jGrid;
              break
            } B.PLAYER.grid = 0, B.PLAYER.iGrid = B.PLAYER._i, B.PLAYER.jGrid =
            B.PLAYER._j
        }
        B.PLAYER.grid = window.Math.min(G, B.PLAYER.grid + f);
        for (e = 0; e < B.PLAYER.gridPrev.length; e++) B.PLAYER.gridPrev[e] =
          window.Math.max(0, B.PLAYER.gridPrev[e] - f)
      } else {
        if (0 === B.PLAYER.grid && 1 === function() {
            for (var e = 0; e < B.PLAYER.gridPrev.length; e++)
              if (0 !== B.PLAYER.gridPrev[e]) return 0;
            return 1
          }()) return;
        B.PLAYER.grid = window.Math.max(0, B.PLAYER.grid - f);
        for (e = 0; e < B.PLAYER.gridPrev.length; e++) B.PLAYER.gridPrev[e] =
          window.Math.max(0, B.PLAYER.gridPrev[e] - f)
      }
      if (1 === Pi.isLoaded) {
        u.globalAlpha = B.PLAYER.grid / G;
        var i = h * (B.PLAYER.iGrid * a + Pe + t),
          _ = h * (B.PLAYER.jGrid * a + Ie + t),
          o = h * Pi.width / 2,
          d = h * Pi.height / 2;
        u.drawImage(Pi, _ - o / 2, i - d / 2, o, d), u.globalAlpha = 1;
        for (e = 0; e < B.PLAYER.gridPrev.length; e++)
          if (B.PLAYER.gridPrev[e] > 0) {
            u.globalAlpha = B.PLAYER.gridPrev[e] / G;
            i = h * (B.PLAYER.iGridPrev[e] * a + Pe + t), _ = h * (B.PLAYER
                .jGridPrev[e] * a + Ie + t), o = h * Pi.width / 2, d = h * Pi
              .height / 2;
            u.drawImage(Pi, _ - o / 2, i - d / 2, o, d), u.globalAlpha = 1
          }
      } else Pi = A.loadImage(N, Pi)
    }

    function Y_(e) {
      var i = B.players[e.pid];
      if (i !== window.undefined && i.notification.length > 0) {
        i.notificationDelay >= ee && (i.notificationDelay = 0);
        var _ = i.notificationDelay,
          a = i.notificationLevel[0],
          o = i.notification[0];
        if (0 === _) S.dist(e.x, e.y, Ve, Be);
        i.notificationDelay += f, i.notificationDelay >= ee && (i
          .notificationDelay = 0, i.notificationLevel.shift(), i.notification
          .shift());
        var d = Di[o][a];
        if (1 !== d.isLoaded) return void(Di[o][a] = A.loadImage($ + o + "_" +
          a + ".png", d));
        var t = 0;
        if (_ < ie) {
          var n = _ / ie;
          u.globalAlpha = n, t = 15 * (1 - n)
        } else if (_ > _e) {
          var r = (ee - _) / (ee - _e);
          u.globalAlpha = r, t = 40 * (r - 1)
        }
        u.drawImage(d, (Ie + e.x - 120) * h, (Pe + e.y + (t - 45)) * h, d
          .width * h / 2, d.height * h / 2), u.globalAlpha = 1
      }
    }

    function H_(e) {
      for (var i = B.players[e.pid], _ = 0; _ < i.runEffect.length; _++) {
        var a = i.runEffect[_];
        if (_ > 0 && a.delay <= 0) {
          var o = i.runEffect[_ - 1];
          if (o.delay > 500 || o.delay <= 0) continue
        }
        if (e.speed > k[__ENTITIE_PLAYER__].speed || a.delay > 0) {
          var d = k[__ENTITIE_PLAYER__].runEffect,
            t = d.img;
          if (1 !== t.isLoaded) return void(d.img = A.loadImage(d.src, d.img));
          a.delay <= 0 ? (a.delay = 750, a.angle = window.Math.random() * ae, a
              .x = e.x, a.y = e.y, a.size = 1 + .8 * window.Math.random()) : a
            .delay -= f;
          var n = O.Ease.outQuart(window.Math.max(0, a.delay / 750)),
            r = h * (a.size + 1) * n * t.width / 7,
            g = -r / 2;
          u.save(), u.translate((Ie + a.x) * h, (Pe + a.y) * h), u.rotate(a
            .angle), u.globalAlpha = window.Math.max(0, n * n), u.drawImage(t,
            g, g, r, r), u.restore()
        }
      }
    }
    var G_ = [0, 0, 0, 0];

    function K_(e) {
      var i = ii[15 & e.extra];
      ai[e.i][e.j].tile = c_, ai[e.i][e.j].tilePid = e.pid, ai[e.i][e.j]
        .category = window.undefined;
      var _ = 1,
        a = Ie + e.x,
        o = Pe + e.y;
      if (0 !== e.removed) {
        e.death += f;
        var d = O.Ease.outQuart(1 - (e.death - 500) / 400);
        u.globalAlpha = window.Math.min(window.Math.max(0, d), 1), A
          .drawImageHd(i.death, a, o, e.angle, 0, 0, 1), d = O.Ease.outQuart(1 -
            e.death / 400), _ = window.Math.min(1 + .5 * (1 - d), 1.5), u
          .globalAlpha = window.Math.max(0, d)
      }
      16 == (16 & e.extra) && (e.extra &= -17, e.hurt = 250, e.hurtAngle = ae *
        (e.extra >> 5 & 31) / 31), i.draw(i, e, a, o, _), 0 !== e.removed && (
        e.death > 900 && (e.removed = 2), u.globalAlpha = 1)
    }

    function z_(e) {
      ai[e.i][e.j].tile = c_, ai[e.i][e.j].tilePid = e.pid, ai[e.i][e.j]
        .category = window.undefined;
      var i = k[__ENTITIE_PLAYER__],
        _ = e.extra >> 8 & 255,
        a = i.weapons[_],
        o = i.clothes[255 & e.extra],
        d = 1,
        t = 254 & e.state,
        n = Ie + e.x,
        r = Pe + e.y;
      if (0 !== e.removed) {
        e.death += f;
        var g = O.Ease.outQuart(1 - (e.death - 500) / 400);
        u.globalAlpha = window.Math.min(window.Math.max(0, g), 1), A
          .drawImageHd(i.death, n, r, e.angle, 0, 0, 1), g = O.Ease.outQuart(1 -
            e.death / 400), d = window.Math.min(1 + .5 * (1 - g), 1.5), u
          .globalAlpha = window.Math.max(0, g)
      }
      if (2 === t) {
        if (e.state &= 65281, 0 !== J._fx.shot[_]) {
          var s = window.Math.floor(window.Math.random() * a.soundLen);
          J.playFx(J._fx.shot[_][s], a.soundVolume, S.dist(B.PLAYER.x, B.PLAYER
            .y, e.x, e.y) / 4, a.soundDelay)
        }
        e.hit <= 0 && (e.hit = a.delay, e.hitMax = a.delay)
      } else 6 === t && (e.state &= 65281);
      switch (a.type) {
        case 0:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r],
              m = 0,
              c = 0,
              p = 0,
              L = 0;
            a.hit > 0 ? (a.hit = window.Math.max(0, a.hit - f), a.hit = window
              .Math.min(a.hit, i.delay), v = a.hit > i.impactClient ? 1 - (a
                .hit - i.impactClient) / (i.delay - i.impactClient) : a.hit /
              i.impactClient, m = n.punch * O.Ease.inOutQuad(v) * .55, L = 3 *
              v, 1 === n.punch ? c = 25 * v : p = 25 * v, 0 === a.hit && (n
                .punch *= -1)) : S.fastDist(a.x, a.y, a.nx, a.ny) < 1 ? (n
              .breath = (n.breath + f) % 1500, 0 !== n.move && (n.move <
                400 && (n.move = 800 - n.move), n.move = n.move + f, n.move >
                800 && (n.move = 0))) : (a.speed > k[__ENTITIE_PLAYER__]
              .speed ? n.move = n.move + 1.9 * f : n.move = n.move + f, n
              .move > 800 && (n.orientation *= -1, n.move = n.move % 800),
              0 !== n.breath && (n.breath < 750 && (n.breath = 1500 - n
                .breath), n.breath = n.breath + f, n.breath > 1500 && (n
                .breath = 0)));
            var E = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              w = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              b = i.rightArm,
              h = _.rightArm === window.undefined ? l.rightArm : _.rightArm;
            if (A.drawImageHd(h, d, t, b.angle + a.angle + E + m, b.x + w * n
                .orientation + p, b.y, o), b = i.leftArm, h = _.leftArm ===
              window.undefined ? l.leftArm : _.leftArm, A.drawImageHd(h, d, t, -
                b.angle + a.angle - E + m, b.x - w * n.orientation + c, b.y, o),
              a.hurt2 > 0) {
              var y = 1;
              a.hurt2 -= f;
              var v = 0;
              a.hurt2 > 150 ? v = O.Ease.inQuad((300 - a.hurt2) / 300) : y +=
                .2 * (1 - (v = O.Ease.outQuad(a.hurt2 / 150))), u.globalAlpha =
                window.Math.min(1, window.Math.max(0, v)), A.drawImageHd(e.food,
                  d, t, a.angle + m / 1.5, L, 0, y), u.globalAlpha = 1
            }
            a.hurt > 0 && (y = 1, a.hurt -= f, v = 0, a.hurt > 150 ? v = O.Ease
              .inQuad((300 - a.hurt) / 300) : y += .2 * (1 - (v = O.Ease
                .outQuad(a.hurt / 150))), d += window.Math.cos(a.hurtAngle) *
              v * 3, t += window.Math.sin(a.hurtAngle) * v * 3, u
              .globalAlpha = window.Math.min(1, window.Math.max(0, v)), A
              .drawImageHd(e.hurt, d, t, a.angle + m / 1.5, L, 0, y), u
              .globalAlpha = 1);
            a.heal > 0 && (y = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (y += .2 * (1 - (v = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, v))), A.drawImageHd(e.heal, d, t, a.angle + m / 1.5, L, 0,
                y), u.globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle + m / 1.5, L, 0, o), _.head !==
              window.undefined && A.drawImageHd(_.head, d, t, a.angle + m / 1.5,
                L, 0, o)
          }(i, a, o, e, d, n, r);
          break;
        case 1:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r],
              m = 0,
              c = 0,
              p = 0,
              L = 0,
              E = i.rightArm,
              w = i.leftArm;
            a.hit > 0 ? (a.hit = window.Math.max(0, a.hit - f), T = a.hit > i
                .impactClient ? 1 - (a.hit - i.impactClient) / (i.delay - i
                  .impactClient) : a.hit / i.impactClient, m = .4 * -O.Ease
                .inOutQuad(T), L = 3 * T, c = T * w.dist, p = T * E.dist) : S
              .fastDist(a.x, a.y, a.nx, a.ny) < 1 ? (n.breath = (n.breath + f) %
                1500, 0 !== n.move && (n.move < 400 && (n.move = 800 - n.move),
                  n.move = n.move + f, n.move > 800 && (n.move = 0))) : (a
                .speed > k[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 *
                f : n.move = n.move + f, n.move > 800 && (n.orientation *= -1, n
                  .move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n
                    .breath = 1500 - n.breath), n.breath = n.breath + f, n
                  .breath > 1500 && (n.breath = 0)));
            var b = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              h = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              y = i.weapon;
            A.drawImageHd2(y, d, t, y.angle + a.angle + b, y.x + h * n
              .orientation, y.y, o, m * y.rotation, y.x2, y.y2);
            var v = _.rightArm === window.undefined ? l.rightArm : _.rightArm;
            if (A.drawImageHd(v, d, t, E.angle + a.angle + b + m * E.rotation, E
                .x + h * n.orientation + p, E.y, o), v = _.leftArm === window
              .undefined ? l.leftArm : _.leftArm, A.drawImageHd(v, d, t, -w
                .angle + a.angle + b + m * w.rotation, w.x + h * n.orientation +
                c, w.y, o), a.hurt > 0) {
              var R = 1;
              a.hurt -= f;
              var T = 0;
              a.hurt > 150 ? T = O.Ease.inQuad((300 - a.hurt) / 300) : R += .2 *
                (1 - (T = O.Ease.outQuad(a.hurt / 150))), d += window.Math.cos(a
                  .hurtAngle) * T * 3, t += window.Math.sin(a.hurtAngle) * T *
                3, u.globalAlpha = window.Math.min(1, window.Math.max(0, T)), A
                .drawImageHd(e.hurt, d, t, a.angle + m / 1.5, L, 0, R), u
                .globalAlpha = 1
            }
            a.heal > 0 && (R = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (R += .2 * (1 - (T = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, T))), A.drawImageHd(e.heal, d, t, a.angle + m / 1.5, L, 0,
                R), u.globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle + m / 1.5, L, 0, o), _.head !==
              window.undefined && A.drawImageHd(_.head, d, t, a.angle + m / 1.5,
                L, 0, o)
          }(i, a, o, e, d, n, r);
          break;
        case 2:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r],
              m = 0,
              c = 0,
              p = 0,
              L = -1,
              E = i.rightArm,
              w = i.leftArm,
              b = n.cartridges;
            if (a.hit > 0) {
              if (a.hit === a.hitMax)
                for (var h = 0; h < b.length; h++)
                  if ((F = b[h]).delay <= 0) {
                    F.type = i.cartridge, F.delay = i.cartridgeDelay, F.x = d +
                      44 * window.Math.cos(a.angle), F.y = t + 44 * window.Math
                      .sin(a.angle);
                    var y = -window.Math.PI / 2.5 + a.angle + window.Math
                      .random() * -window.Math.PI / 3.5;
                    F.ax = window.Math.cos(y), F.ay = window.Math.sin(y);
                    break
                  } a.hit = window.Math.max(0, a.hit - f);
              var v = a.hit > 80 ? 1 - (a.hit - 80) / 100 : a.hit / 80;
              if (0 === i.noEffect)
                for (var R = e.gunEffect[i.gunEffect].length, T = 0; T < R; T++)
                  if (a.hit > i.delay - 30 * (T + 1)) {
                    L = T;
                    break
                  } p = v * i.recoilHead, c = v * i.recoilGun, m = v * i.recoil
            } else S.fastDist(a.x, a.y, a.nx, a.ny) < 1 ? (n.breath = (n
              .breath + f) % 1500, 0 !== n.move && (n.move < 400 && (n
                .move = 800 - n.move), n.move = n.move + f, n.move > 800 &&
              (n.move = 0))) : (a.speed > k[__ENTITIE_PLAYER__].speed ? n
              .move = n.move + 1.9 * f : n.move = n.move + f, n.move > 800 &&
              (n.orientation *= -1, n.move = n.move % 800), 0 !== n.breath &&
              (n.breath < 750 && (n.breath = 1500 - n.breath), n.breath = n
                .breath + f, n.breath > 1500 && (n.breath = 0)));
            var M = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              I = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              P = _.rightArm === window.undefined ? l.rightArm : _.rightArm;
            A.drawImageHd(P, d, t, E.angle + a.angle, E.x + I * n.orientation +
                m + M, E.y, o), P = _.leftArm === window.undefined ? l.leftArm :
              _.leftArm, A.drawImageHd(P, d, t, -w.angle + a.angle, w.x + I * n
                .orientation + m + M, w.y, o);
            var W = i.weapon;
            L >= 0 && 0 === i.noEffect && (T = e.gunEffect[i.gunEffect][L], A
              .drawImageHd(T, d, t, a.angle, W.x + I * n.orientation + M + c +
                i.distance, W.y, o));
            for (A.drawImageHd(W, d, t, a.angle, W.x + I * n.orientation + M +
                c, W.y, o), h = 0; h < b.length; h++) {
              var F;
              (F = b[h]).delay > 0 && (F.x += f * F.ax * .18, F.y += f * F.ay *
                .18, F.delay < 200 && 1 === u.globalAlpha ? (u.globalAlpha = O
                  .Ease.outQuad(F.delay / 200), A.drawImageHd(e.cartridges[F
                    .type], F.x, F.y, .007 * F.delay, 0, 0, o), u
                  .globalAlpha = 1) : A.drawImageHd(e.cartridges[F.type], F.x,
                  F.y, .007 * F.delay, 0, 0, o), F.delay -= f)
            }
            if (a.hurt > 0) {
              var N = 1;
              a.hurt -= f, v = 0, a.hurt > 150 ? v = O.Ease.inQuad((300 - a
                  .hurt) / 300) : N += .2 * (1 - (v = O.Ease.outQuad(a.hurt /
                  150))), d += window.Math.cos(a.hurtAngle) * v * 3, t += window
                .Math.sin(a.hurtAngle) * v * 3, u.globalAlpha = window.Math.min(
                  1, window.Math.max(0, v)), A.drawImageHd(e.hurt, d, t, a
                  .angle, p, 0, N), u.globalAlpha = 1
            }
            a.heal > 0 && (N = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (N += .2 * (1 - (v = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, v))), A.drawImageHd(e.heal, d, t, a.angle, p, 0, N), u
              .globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle, p, 0, o), _.head !== window
              .undefined && A.drawImageHd(_.head, d, t, a.angle, p, 0, o)
          }(i, a, o, e, d, n, r);
          break;
        case 3:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r],
              m = 0,
              c = 0,
              p = 0,
              L = 0;
            a.hit > 0 ? (a.hit = window.Math.max(0, a.hit - f), v = a.hit > i
              .impactClient ? 1 - (a.hit - i.impactClient) / (i.delay - i
                .impactClient) : a.hit / i.impactClient, m = .55 * -O.Ease
              .inOutQuad(v), L = 3 * v, p = 25 * -v, c = 10 * v) : S.fastDist(
              a.x, a.y, a.nx, a.ny) < 1 ? (n.breath = (n.breath + f) % 1500,
              0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n
                .move = n.move + f, n.move > 800 && (n.move = 0))) : (a
              .speed > k[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 *
              f : n.move = n.move + f, n.move > 800 && (n.orientation *= -1, n
                .move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n
                  .breath = 1500 - n.breath), n.breath = n.breath + f, n
                .breath > 1500 && (n.breath = 0)));
            var E = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              w = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              b = i.leftArm,
              h = _.leftArm === window.undefined ? l.leftArm : _.leftArm;
            if (A.drawImageHd(h, d, t, -b.angle + a.angle - E - m, b.x - w * n
                .orientation + c, b.y, o), a.hurt > 0) {
              var y = 1;
              a.hurt -= f;
              var v = 0;
              a.hurt > 150 ? v = O.Ease.inQuad((300 - a.hurt) / 300) : y += .2 *
                (1 - (v = O.Ease.outQuad(a.hurt / 150))), d += window.Math.cos(a
                  .hurtAngle) * v * 3, t += window.Math.sin(a.hurtAngle) * v *
                3, u.globalAlpha = window.Math.min(1, window.Math.max(0, v)), A
                .drawImageHd(e.hurt, d, t, a.angle - m / 1.5, L, 0, y), u
                .globalAlpha = 1
            }
            a.heal > 0 && (y = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (y += .2 * (1 - (v = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, v))), A.drawImageHd(e.heal, d, t, a.angle - m / 1.5, L, 0,
                y), u.globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle - m / 1.5, L, 0, o), _.head !==
              window.undefined && A.drawImageHd(_.head, d, t, a.angle - m / 1.5,
                L, 0, o);
            var R = i.breathWeapon * (n.breath < 750 ? n.breath / 750 : 1 - (n
              .breath - 750) / 750);
            b = i.rightArm, h = _.rightArm === window.undefined ? l.rightArm : _
              .rightArm, A.drawImageHd(h, d, t, b.angle + a.angle, b.x + w * n
                .orientation + p + R, b.y, o);
            var T = i.weapon;
            A.drawImageHd(T, d, t, T.angle + a.angle, T.x + w * n.orientation +
              R + p, T.y, o)
          }(i, a, o, e, d, n, r);
          break;
        case 4:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r],
              m = 0,
              c = 0,
              p = 0,
              L = 0;
            a.hit > 0 ? (a.hit = window.Math.max(0, a.hit - f), M = a.hit > i
              .impactClient ? 1 - (a.hit - i.impactClient) / (i.delay - i
                .impactClient) : a.hit / i.impactClient, m = .35 * -O.Ease
              .inOutQuad(M), L = 3 * M, p = 20 * -M, c = 3 * M) : S.fastDist(a
              .x, a.y, a.nx, a.ny) < 1 ? (n.breath = (n.breath + f) % 1500,
              0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n
                .move = n.move + f, n.move > 800 && (n.move = 0))) : (a
              .speed > k[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 *
              f : n.move = n.move + f, n.move > 800 && (n.orientation *= -1, n
                .move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n
                  .breath = 1500 - n.breath), n.breath = n.breath + f, n
                .breath > 1500 && (n.breath = 0)));
            var E = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              w = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              b = i.breathWeapon * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              h = i.rightArm,
              y = _.rightArm === window.undefined ? l.rightArm : _.rightArm;
            if (A.drawImageHd(y, d, t, h.angle + a.angle - m, h.x - w * n
                .orientation + p + b, h.y, o), a.hit > 0) {
              var v = i.WnVmv;
              A.drawImageHd(v, d, t, a.angle, v.x - w * n.orientation + b + p, v
                .y, o)
            }
            var R = i.weapon;
            if (A.drawImageHd(R, d, t, R.angle + a.angle, R.x + w * n
                .orientation + E + c, R.y, o), h = i.leftArm, y = _.leftArm ===
              window.undefined ? l.leftArm : _.leftArm, A.drawImageHd(y, d, t, -
                h.angle + a.angle, h.x + w * n.orientation + c + E, h.y, o), a
              .hurt > 0) {
              var T = 1;
              a.hurt -= f;
              var M = 0;
              a.hurt > 150 ? M = O.Ease.inQuad((300 - a.hurt) / 300) : T += .2 *
                (1 - (M = O.Ease.outQuad(a.hurt / 150))), d += window.Math.cos(a
                  .hurtAngle) * M * 3, t += window.Math.sin(a.hurtAngle) * M *
                3, u.globalAlpha = window.Math.min(1, window.Math.max(0, M)), A
                .drawImageHd(e.hurt, d, t, a.angle - m / 1.5, L, 0, T), u
                .globalAlpha = 1
            }
            a.heal > 0 && (T = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (T += .2 * (1 - (M = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, M))), A.drawImageHd(e.heal, d, t, a.angle - m / 1.5, L, 0,
                T), u.globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle - m / 1.5, L, 0, o), _.head !==
              window.undefined && A.drawImageHd(_.head, d, t, a.angle - m / 1.5,
                L, 0, o)
          }(i, a, o, e, d, n, r);
          break;
        case 5:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r],
              m = 0,
              c = 254 & a.state,
              p = i.rightArm,
              L = i.leftArm;
            if (4 === c) {
              if (-1 === n.consumable) {
                var E = a.extra >> 8 & 255;
                if (0 !== J._fx.shot[E] && re.globalTime - n.consumableLast >
                  800) {
                  n.consumableLast = re.globalTime;
                  var w = window.Math.floor(window.Math.random() * i.soundLen);
                  J.playFx(J._fx.shot[E][w], i.soundVolume, S.dist(B.PLAYER.x, B
                    .PLAYER.y, a.x, a.y) / 4, i.soundDelay)
                }
                n.consumable = 0
              }
              1 === n.punch ? n.consumable = window.Math.max(0, n.consumable -
                  f) : n.consumable = window.Math.min(i.consumableDelay, n
                  .consumable + f), m = (T = n.consumable / i.consumableDelay) *
                i.recoil, 0 !== n.consumable && n.consumable !== i
                .consumableDelay || (n.punch *= -1)
            } else S.fastDist(a.x, a.y, a.nx, a.ny) < 1 ? (n.consumable = -1, n
              .breath = (n.breath + f) % 1500, 0 !== n.move && (n.move <
                400 && (n.move = 800 - n.move), n.move = n.move + f, n.move >
                800 && (n.move = 0))) : (n.consumable = -1, a.speed > k[
                __ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 * f : n
              .move = n.move + f, n.move > 800 && (n.orientation *= -1, n
                .move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n
                  .breath = 1500 - n.breath), n.breath = n.breath + f, n
                .breath > 1500 && (n.breath = 0)));
            var b = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              h = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              y = _.rightArm === window.undefined ? l.rightArm : _.rightArm;
            A.drawImageHd(y, d, t, p.angle + a.angle, p.x + h * n.orientation +
                m + b, p.y, o), y = _.leftArm === window.undefined ? l.leftArm :
              _.leftArm, A.drawImageHd(y, d, t, -L.angle + a.angle, L.x + h * n
                .orientation + m + b, L.y, o);
            var v = i.weapon;
            if (A.drawImageHd(v, d, t, a.angle, v.x + h * n.orientation + b + m,
                v.y, o), a.hurt2 > 0) {
              var R = 1;
              a.hurt2 -= f;
              var T = 0;
              a.hurt2 > 150 ? T = O.Ease.inQuad((300 - a.hurt2) / 300) : R +=
                .2 * (1 - (T = O.Ease.outQuad(a.hurt2 / 150))), u.globalAlpha =
                window.Math.min(1, window.Math.max(0, T)), A.drawImageHd(e.food,
                  d, t, a.angle, 0, 0, R), u.globalAlpha = 1
            }
            a.hurt > 0 && (R = 1, a.hurt -= f, T = 0, a.hurt > 150 ? T = O.Ease
              .inQuad((300 - a.hurt) / 300) : R += .2 * (1 - (T = O.Ease
                .outQuad(a.hurt / 150))), d += window.Math.cos(a.hurtAngle) *
              T * 3, t += window.Math.sin(a.hurtAngle) * T * 3, u
              .globalAlpha = window.Math.min(1, window.Math.max(0, T)), A
              .drawImageHd(e.hurt, d, t, a.angle, 0, 0, R), u.globalAlpha = 1);
            a.heal > 0 && (R = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (R += .2 * (1 - (T = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, T))), A.drawImageHd(e.heal, d, t, a.angle, 0, 0, R), u
              .globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle, 0, 0, o), _.head !== window
              .undefined && A.drawImageHd(_.head, d, t, a.angle, 0, 0, o)
          }(i, a, o, e, d, n, r);
          break;
        case 6:
          ! function(e, i, _, a, o, d, t) {
            var n = B.players[a.pid],
              r = 0,
              g = n.repellent - re.globalTime,
              s = n.withdrawal - re.globalTime;
            g > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n
              .withdrawal > 0 && (r = 4);
            var l = e.skins[r];
            S.fastDist(a.x, a.y, a.nx, a.ny) < 1 ? (n.breath = (n.breath + f) %
              1500, 0 !== n.move && (n.move < 400 && (n.move = 800 - n.move),
                n.move = n.move + f, n.move > 800 && (n.move = 0))) : (a
              .speed > k[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 *
              f : n.move = n.move + f, n.move > 800 && (n.orientation *= -1, n
                .move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n
                  .breath = 1500 - n.breath), n.breath = n.breath + f, n
                .breath > 1500 && (n.breath = 0)));
            var m = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n
                .breath - 750) / 750),
              c = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) /
                400),
              p = i.rightArm,
              L = _.rightArm === window.undefined ? l.rightArm : _.rightArm;
            if (A.drawImageHd(L, d, t, p.angle + a.angle + m, p.x + c * n
                .orientation + 0, p.y, o), p = i.leftArm, L = _.leftArm ===
              window.undefined ? l.leftArm : _.leftArm, A.drawImageHd(L, d, t, -
                p.angle + a.angle - m, p.x - c * n.orientation + 0, p.y, o), A
              .drawImageHd(i.blueprint, d, t, -p.angle + a.angle - m + window
                .Math.PI / 3, p.x - c * n.orientation + 0 - 40, p.y - 15, o), a
              .hurt > 0) {
              var E = 1;
              a.hurt -= f;
              var w = 0;
              a.hurt > 150 ? w = O.Ease.inQuad((300 - a.hurt) / 300) : E += .2 *
                (1 - (w = O.Ease.outQuad(a.hurt / 150))), d += window.Math.cos(a
                  .hurtAngle) * w * 3, t += window.Math.sin(a.hurtAngle) * w *
                3, u.globalAlpha = window.Math.min(1, window.Math.max(0, w)), A
                .drawImageHd(e.hurt, d, t, a.angle, 0, 0, E), u.globalAlpha = 1
            }
            a.heal > 0 && (E = 1, a.heal -= f, a.heal > 150 ? u.globalAlpha =
              window.Math.min(1, window.Math.max(0, O.Ease.inQuad((300 - a
                .heal) / 300))) : (E += .2 * (1 - (w = O.Ease.outQuad(a.heal /
                150))), u.globalAlpha = window.Math.min(1, window.Math.max(
                0, w))), A.drawImageHd(e.heal, d, t, a.angle, 0, 0, E), u
              .globalAlpha = 1);
            A.drawImageHd(l.head, d, t, a.angle, 0, 0, o), _.head !== window
              .undefined && A.drawImageHd(_.head, d, t, a.angle, 0, 0, o), A
              .drawImageHd(i.pencil, d, t, a.angle, 0, 0, o)
          }(i, a, o, e, d, n, r)
      }
      0 !== e.removed && (e.death > 900 && (e.removed = 2), u.globalAlpha = 1)
    }
    var J_, X_ = 0,
      Q_ = 0,
      j_ = {
        id: -1,
        uid: -1
      };

    function q_(e, i, _, a) {
      if (0 !== ei && i !== be.__NOTHING__ && (2 === ei && (a *= 3), !(D.border[
          __ENTITIE_PARTICLES__].border + a >= Te)))
        for (var o = 0; o < a; o++) {
          var d = window.Math.random(),
            t = 10 * d % 1 * ae,
            n = _ + 1e4 * d % 1 * 25;
          _ += 8;
          var r = (Q_ = (Q_ + 1) % Te) + D.maxUnitsMaster;
          X_ += 1, Y(D.get(0, r, X_, __ENTITIE_PARTICLES__), 0, X_, r,
            __ENTITIE_PARTICLES__, e.px, e.py, e.px + window.Math.cos(t) * n,
            e.py + window.Math.sin(t) * n, window.Math.floor(d * he[i]
            .length), 100 * d % 1 * 255, i)
        }
    }

    function Z_(e) {
      var i = he[e.state][e.extra];
      if (e.death > 0) return e.death = window.Math.min(1, e.death + f / 500), u
        .globalAlpha = 1 - e.death, A.drawImageHd(i, Ie + e.x, Pe + e.y, e
          .angle, 0, 0, 1), u.globalAlpha = 1, void(1 === e.death && (j_.id =
          e.id, j_.uid = e.uid));
      S.fastDist(e.x, e.y, e.nx, e.ny) < .01 && (e.death = .001), A.drawImageHd(
        i, Ie + e.x, Pe + e.y, e.angle, 0, 0, 1)
    }

    function $_(e, i, _) {
      if (0 === i.removed && 1 !== B.PLAYER.interaction && 1 !== B.PLAYER
        .isInBuilding && (0 === _ || i.pid === B.PLAYER.id || -1 !== B.PLAYER
          .team && B.PLAYER.team === B.players[i.pid].team && B.players[i.pid]
          .teamUid === B.teams[B.PLAYER.team].uid)) {
        var a = S.fastDist(Ve, Be, i.x, i.y);
        if (a < Vi) return B.PLAYER.packetId = e.packetId, B.PLAYER.buildingId =
          i.id, B.PLAYER.buildingPid = i.pid, B.PLAYER.buildingArea = e.area,
          Vi = a, 0 === B.PLAYER.interaction && (B.PLAYER.extraLoot = 1), B
          .PLAYER.interaction = 2, B.PLAYER.eInteract = e.interact, 1
      }
      return 0
    }

    function ea(e, i, _) {
      e.breath = (e.breath + f) % 1e3;
      var o = 1 + .15 * (e.breath < 500 ? e.breath / 500 : 1 - (e.breath -
        500) / 500);
      if (o *= h, 1 === bi.isLoaded) {
        u.globalAlpha = O.Ease.outQuad(e.hit / 500);
        _ = h * (e.i * a + Pe + t), i = h * (e.j * a + Ie + t);
        var d = o * bi.width / 2,
          n = o * bi.height / 2;
        u.drawImage(bi, i - d / 2, _ - n / 2, d, n), u.globalAlpha = 1
      } else bi = A.loadImage(C, bi)
    }

    function ia(e) {
      var i = k[__ENTITIE_EXPLOSION__].explosions,
        _ = window.Math.floor(e.born / 70);
      _ < 10 && (0 === e.born && (-2 !== re.explosionShake && (re
        .explosionShake = 20), J.playFx(J._fx.explosion, .7, S.dist(B
        .PLAYER.x, B.PLAYER.y, e.x, e.y) / 4)), A.drawImageHd(i[_], Ie + e
        .x, Pe + e.y, 0, 0, 0, 1)), e.born += f
    }

    function _a(e) {
      ai[e.i][e.j].tile = c_, ai[e.i][e.j].tilePid = e.pid, ai[e.i][e.j]
        .category = window.undefined;
      var i = We[e.extra >> 5 & 31],
        _ = i.type[e.extra >> 10 & 7],
        a = 1;
      if (0 !== e.removed) {
        0 === e.death && (0 !== i.destroy && 0 === soundLimit[i.destroy] && (J
          .playFx(J._fx.damage[i.destroy], 1, S.dist(B.PLAYER.x, B.PLAYER.y,
            e.x, e.y) / 2.5), soundLimit[i.destroy] = 1), q_(e, i.particles,
          _.particlesDist, _.particle)), e.death += f;
        var o = window.Math.max(0, O.Ease.outQuart(1 - e.death / 300));
        u.globalAlpha = o, a = window.Math.min(1 + .35 * (1 - o), 1.35)
      } else if (e.born < 700) {
        0 === e.born && _.imgTop !== window.undefined && (0 === Ii ? e.breath =
          window.Math.floor(6e3 * window.Math.random()) : (e.heal = window
            .Math.floor(6e3 * window.Math.random()), e.breath = 3e3));
        o = window.Math.min(1, O.Ease.outQuart(e.born / 700));
        u.globalAlpha = o, a = .5 * o + .5
      }
      2 == (2 & e.state) && (0 !== i.impact && 0 === soundLimit[i.impact] && (J
          .playFx(J._fx.damage[i.impact], 1, S.dist(B.PLAYER.x, B.PLAYER.y, e
            .x, e.y) / 2.8), soundLimit[i.impact] = 1), e.hurt = 250, e
        .hurt2 <= 0 && (e.hurt2 = 300), e.hurtAngle = ae * (31 & e.extra) /
        31, e.state &= -3, q_(e, i.particles, _.particlesDist, 1));
      var d = 0,
        t = 0;
      if (e.hurt > 0) {
        var n = e.hurt > 200 ? 20 * (250 - e.hurt) / 50 : 20 * e.hurt / 200;
        d = window.Math.cos(e.hurtAngle) * n, t = window.Math.sin(e.hurtAngle) *
          n, e.hurt -= f
      }
      if (3e3 === e.breath && 0 !== Ii && 0 === e.hurt) return A.drawImageHd(_
        .imgFull, Ie + e.x + d, Pe + e.y + t, e.angle, 0, 0, a), void(0 !==
        e.removed ? (e.death > 300 && (e.removed = 2), u.globalAlpha = 1) :
        e.born < 700 && (e.born += f, u.globalAlpha = 1));
      if (A.drawImageHd(_.img, Ie + e.x + d, Pe + e.y + t, e.angle, 0, 0, a), _
        .imgTop !== window.undefined) {
        if (d = 0, t = 0, e.hurt2 > 0) {
          n = e.hurt2 > 250 ? 10 * O.Ease.inQuad((300 - e.hurt2) / 250) : 10 * O
            .Ease.outQuad(e.hurt2 / 250);
          d = window.Math.cos(e.hurtAngle) * n, t = window.Math.sin(e
            .hurtAngle) * n, e.hurt2 -= f
        }
        0 === Ii ? (e.heal > 0 ? e.heal = window.Math.max(0, e.heal - f) : e
          .breath += f, e.breath > 6e3 && (e.breath = 0), e.breath > 3e3 ?
          a += .025 * (e.breath - 3e3) / 3e3 : a += .025 - .025 * e.breath /
          3e3) : (0 === e.heal && (e.heal = e.breath), e.breath > 6e3 && (e
            .breath = 0), e.breath > 3e3 ? (e.breath = window.Math.max(3e3, e
            .breath - f), a += .025 * (e.breath - 3e3) / 3e3) : e.breath <
          3e3 && (e.breath = window.Math.min(3e3, e.breath + f), a += .025 -
            .025 * e.breath / 3e3)), A.drawImageHd(_.imgTop, Ie + e.x + d,
          Pe + e.y + t, e.angle, 0, 0, a)
      }
      0 !== e.removed ? (e.death > 300 && (e.removed = 2), u.globalAlpha = 1) :
        e.born < 700 && (e.born += f, u.globalAlpha = 1)
    }

    function aa(e) {
      ai[e.i][e.j].tile = c_, ai[e.i][e.j].tilePid = e.pid, ai[e.i][e.j]
        .category = window.undefined;
      var i = e.extra >> 5 & 3,
        _ = ve[e.extra >> 7],
        a = 1;
      if (ai[e.i][e.j].category = _.detail.category, 0 !== e.removed) {
        var o;
        if (0 === e.death) q_(e, (o = -1 === _.particles ? ve[_.id].subtype[e
            .subtype] : _).particles, o.particlesDist, 5), 0 !== o.destroy &&
          0 === soundLimit[o.destroy] && (J.playFx(J._fx.damage[o.destroy], 1, S
            .dist(B.PLAYER.x, B.PLAYER.y, e.x, e.y) / 2.5), soundLimit[o
            .destroy] = 1);
        e.death += f;
        var d = window.Math.max(0, O.Ease.outQuart(1 - e.death / 300));
        u.globalAlpha = d, a = window.Math.min(1 + .35 * (1 - d), 1.35)
      }
      2 == (2 & e.state) && (e.hurt = 250, e.hurtAngle = ae * (31 & e.extra) /
        31, e.state &= -3, q_(e, (o = -1 === _.particles ? ve[_.id].subtype[e
          .subtype] : _).particles, o.particlesDist, 1), 0 !== o.impact &&
        0 === soundLimit[o.impact] && (J.playFx(J._fx.damage[o.impact], 1, S
          .dist(B.PLAYER.x, B.PLAYER.y, e.x, e.y) / 2.8), soundLimit[o
          .impact] = 1));
      var t = 0,
        n = 0;
      if (e.hurt > 0)
        if (e.hurt > 200) {
          var r = 20 * (250 - e.hurt) / 100;
          t = window.Math.cos(e.hurtAngle) * r, n = window.Math.sin(e
            .hurtAngle) * r, e.hurt -= f
        } else {
          r = 20 * e.hurt / 200;
          t = window.Math.cos(e.hurtAngle) * r, n = window.Math.sin(e
            .hurtAngle) * r, e.hurt -= f
        } _.draw(_, e, t, n, i, a), 0 !== e.removed && (e.death > 300 && (e
        .removed = 2), u.globalAlpha = 1)
    }

    function oa(e) {
      ai[e.i][e.j].tile = c_, ai[e.i][e.j].tilePid = e.pid, ai[e.i][e.j]
        .category = window.undefined;
      var i = 1,
        _ = e.i,
        a = e.j,
        o = _ >= l - 2 ? l - 1 : _ + 1,
        d = a <= 1 ? 0 : a - 1,
        t = a >= w - 2 ? w - 1 : a + 1;
      for (_ = _ <= 1 ? 0 : _ - 1; _ <= o; _++)
        for (a = d; a <= t; a++) {
          var n = ai[_][a];
          if (n.frameId === c_)
            for (var r = n.b, g = n.i, s = 0; s < g; s++) {
              var m = r[s],
                c = m.type,
                p = D.units[c][m.cycle];
              p.pid !== B.PLAYER.id && S.dist(p.x, p.y, e.x, e.y) < k[c]
                .radius - 4 && (e.rx = e.x, e.ry = e.y, e.nx = e.x, e.ny = e.y)
            }
        }
      0 !== e.removed && (e.death += f, i = window.Math.max(0, O.Ease.outQuart(
        1 - e.death / 200)), u.globalAlpha = i);
      var L = S.fastDist(e.nx, e.ny, e.x, e.y);
      L < 400 || 0 !== e.removed ? (u.globalAlpha = window.Math.min(L / 400, i),
          A.drawImageHd(k[__ENTITIE_PLAYER__].bullets[e.extra][2], Ie + e.x,
            Pe + e.y, e.angle, 0, 0, 1), u.globalAlpha = i, A.drawImageHd(k[
              __ENTITIE_PLAYER__].bullets[e.extra][1], Ie + e.x, Pe + e.y, e
            .angle, 0, 0, 1)) : A.drawImageHd(k[__ENTITIE_PLAYER__].bullets[e
          .extra][0], Ie + e.x, Pe + e.y, e.angle, 0, 0, 1), 0 !== e.removed &&
        (e.death > 200 && (e.removed = 2), u.globalAlpha = 1)
    }

    function da(e) {
      if (ai[e.i][e.j].tile = c_, ai[e.i][e.j].tilePid = e.pid, ai[e.i][e.j]
        .category = window.undefined, 0 !== e.hit) {
        var i = B.players[e.hit];
        if (c_ === i.frameId) {
          var _ = D.units[__ENTITIE_PLAYER__][i.locatePlayer];
          e.nx = _.x, e.ny = _.y, e.angleX = window.Math.cos(S.angle(e.rx, e.ry,
            e.nx, e.ny)), e.angleY = window.Math.sin(S.angle(e.rx, e.ry, e.nx,
            e.ny))
        }
      }
      if (0 === e.removed && S.fastDist(e.x, e.y, e.nx, e.ny) < 1) {
        var a = S.fastDist(Ve, Be, e.x, e.y);
        a < Bi && (Bi = a, B.PLAYER.loot = e.extra, B.PLAYER.lootId = e.id, B
          .PLAYER.interaction <= 0 ? B.PLAYER.interaction = 0 : B.PLAYER
          .extraLoot = 1)
      }
      var o = 0,
        d = 0;
      if (0 !== e.removed) e.death += f, u.globalAlpha = window.Math.max(0, O
        .Ease.outQuart(1 - e.death / 800)), d = e.death / 2400;
      else if (e.born < 500) {
        var t = window.Math.min(1, O.Ease.outQuart(e.born / 500));
        u.globalAlpha = t
      }
      e.breath = (e.breath + f) % 1500, o = e.breath < 750 ? .95 + .1 * O.Ease
        .inOutQuad(e.breath / 750) : .95 + .1 * O.Ease.inOutQuad(1 - (e.breath -
          750) / 750), A.drawImageHd(Me[e.extra], Ie + e.x, Pe + e.y, e.angle,
          0, 0, o - d), 0 !== e.removed ? (e.death > 800 && (e.removed = 2), u
          .globalAlpha = 1) : e.born < 500 && (e.born += f, u.globalAlpha = 1)
    }

    function ta() {
      var e = 0;
      Oi = 0, vi[0] = 0, vi[1] = 0, vi[2] = 0, vi[3] = 0, Vi = 12e3, Bi = 12e3,
        B.PLAYER.extraLoot = 0, B.PLAYER.buildingId = -1, B.PLAYER
        .buildingArea = -1, 1 !== B.PLAYER.interaction && (B.PLAYER
          .interaction = -1);
      var i = D.units[k.length],
        _ = D.border[k.length],
        a = _.border,
        o = D.units[__ENTITIE_BUILD_TOP__],
        d = (n = D.border[__ENTITIE_BUILD_TOP__]).border;
      for (e = 0; e < d; e++) T_(o[n.cycle[e]]);
      for (o = D.units[__ENTITIE_BUILD_GROUND2__], d = (n = D.border[
          __ENTITIE_BUILD_GROUND2__]).border, e = 0; e < d; e++) M_(o[n.cycle[
        e]]);
      for (e = 0; e < d; e++) aa(o[n.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_BUILD_GROUND2__ && aa(m)
      }
      if (0 !== ei) {
        var t = D.units[__ENTITIE_PARTICLES__];
        d = (n = D.border[__ENTITIE_PARTICLES__]).border;
        for (e = 0; e < d; e++) Z_(t[n.cycle[e]]); - 1 !== j_.id && (D.remove(0,
          j_.id, j_.uid, __ENTITIE_PARTICLES__), j_.id = -1)
      }
      o = D.units[__ENTITIE_BUILD_GROUND__], d = (n = D.border[
        __ENTITIE_BUILD_GROUND__]).border;
      for (e = 0; e < d; e++) aa(o[n.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_BUILD_GROUND__ && aa(m)
      }
      for (resources = D.units[__ENTITIE_RESOURCES_DOWN__], resourceBorder = D
        .border[__ENTITIE_RESOURCES_DOWN__], resourceLen = resourceBorder
        .border, e = 0; e < resourceLen; e++) _a(resources[resourceBorder.cycle[
        e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_RESOURCES_DOWN__ && _a(m)
      }
      var n;
      o = D.units[__ENTITIE_BUILD_DOWN__], d = (n = D.border[
        __ENTITIE_BUILD_DOWN__]).border;
      for (e = 0; e < d; e++) R_(o[n.cycle[e]]);
      for (e = 0; e < d; e++) aa(o[n.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_BUILD_DOWN__ && aa(m)
      }
      var r = D.units[__ENTITIE_PLAYER__],
        g = D.border[__ENTITIE_PLAYER__],
        s = g.border;
      for (e = 0; e < s; e++) {
        var l = g.cycle[e],
          m = r[l],
          c = B.players[m.pid];
        H_(m), c.locatePlayer = l, c.frameId = c_, I_(m, l)
      }
      B.PLAYER.loot = -1, B.PLAYER.lootId = -1;
      var u = D.units[__ENTITIE_LOOT__],
        p = D.border[__ENTITIE_LOOT__],
        L = p.border;
      for (e = 0; e < L; e++) da(u[p.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_LOOT__ && da(m)
      }
      var E = D.units[__ENTITIE_BULLET__],
        w = D.border[__ENTITIE_BULLET__],
        f = w.border;
      for (e = 0; e < f; e++) oa(E[w.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_BULLET__ && oa(m)
      }
      for (resources = D.units[__ENTITIE_RESOURCES_MID__], resourceBorder = D
        .border[__ENTITIE_RESOURCES_MID__], resourceLen = resourceBorder.border,
        e = 0; e < resourceLen; e++) _a(resources[resourceBorder.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_RESOURCES_MID__ && _a(m)
      }
      if (B.gameMode === B.__GHOUL__) {
        for (e = 0; e < s; e++) {
          m = r[g.cycle[e]];
          0 === (b = B.players[m.pid].ghoul) ? z_(m) : (m.extra = b - 1, K_(m))
        }
        for (e = 0; e < a; e++) {
          var b;
          if ((m = i[_.cycle[e]]).type === __ENTITIE_PLAYER__) H_(m), 0 === (b =
            B.players[m.pid].ghoul) ? z_(m) : (m.extra = b - 1, K_(m))
        }
      } else {
        for (e = 0; e < s; e++) z_(r[g.cycle[e]]);
        for (e = 0; e < a; e++) {
          (m = i[_.cycle[e]]).type === __ENTITIE_PLAYER__ && (H_(m), z_(m))
        }
      }
      var h = D.units[__ENTITIE_AI__],
        y = D.border[__ENTITIE_AI__],
        v = y.border;
      for (e = 0; e < v; e++) K_(h[y.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_AI__ && K_(m)
      }
      for (o = D.units[__ENTITIE_BUILD_TOP__], d = (n = D.border[
          __ENTITIE_BUILD_TOP__]).border, e = 0; e < d; e++) aa(o[n.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_BUILD_TOP__ && aa(m)
      }
      for (e = 0; e < Oi; e++) {
        ve[Si[e].extra >> 7].drawTop(Si[e]), Si[e] = null
      }
      for (resources = D.units[__ENTITIE_RESOURCES_TOP__], resourceBorder = D
        .border[__ENTITIE_RESOURCES_TOP__], resourceLen = resourceBorder.border,
        e = 0; e < resourceLen; e++) _a(resources[resourceBorder.cycle[e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_RESOURCES_TOP__ && _a(m)
      }
      for (resources = D.units[__ENTITIE_RESOURCES_STOP__], resourceBorder = D
        .border[__ENTITIE_RESOURCES_STOP__], resourceLen = resourceBorder
        .border, e = 0; e < resourceLen; e++) _a(resources[resourceBorder.cycle[
        e]]);
      for (e = 0; e < a; e++) {
        (m = i[_.cycle[e]]).type === __ENTITIE_RESOURCES_STOP__ && _a(m)
      }
      for (explosions = D.units[__ENTITIE_EXPLOSION__], explosionBorder = D
        .border[__ENTITIE_EXPLOSION__], explosionLen = explosionBorder.border,
        e = 0; e < explosionLen; e++) ia(explosions[explosionBorder.cycle[e]]);
      for (e = 0; e < s; e++) Y_(r[g.cycle[e]]);
      if (B.gameMode !== B.__BR__) {
        for (e = 0; e < s; e++) k_(r[g.cycle[e]]);
        for (e = 0; e < s; e++) D_(r[g.cycle[e]])
      }
    }
    var na = A.options.forceResolution,
      ra = 0,
      ga = 0,
      sa = 0,
      la = 0,
      ma = 0;
    var ca = window.document.createElement("canvas"),
      ua = ca.getContext("2d");
    return {
      globalTime: window.Date.now(),
      reset: function(e, i, _) {
        J_ = window.document.getElementById("bod").onresize, B.gameMode === B
          .__BR__ && (o_.clearRect(0, 0, M, M), n_.clearRect(0, 0, M, M), mi =
            0), ui = 0, re.explosionShake = 0, re.shake = 0, Ii = e !== window
          .undefined ? 0 : X, Ue = _ !== window.undefined ? _ : .01, Ai =
          i !== window.undefined ? i : 0, Ve = 0, Be = 0, B.PLAYER.x = 0, B
          .PLAYER.y = 0, B.PLAYER._i = 0, B.PLAYER._j = 0, ni.effect = 0, ni
          .move = 0, ri.effect = 0, ri.move = 0, j_.id = -1, j_.uid = -1;
        var o = localStorage2.getItem("particles");
        null !== o && (ei = window.Number(o)), x_ = "", C_ = null, ge.width =
          150, ge.height = 150, re.__TRANSFORM__ = 100 * ge.width / 255, l =
          ge.width, w = ge.height, E = a * w, b = 824 / (p = a * l), v = (y =
            568) + q, W = p / 8, B.setSizeWorld(l, w);
        for (var d = 0; d < w; d++) {
          ai[d] = [];
          for (var t = 0; t < l; t++) ai[d][t] = new O_
        }
        var n = D.units[0].length;
        for (d = 0; d < n; d++) Si[d] = null
      },
      world: function() {
        re.globalTime += f, 1 === ma && function() {
            sa <= 0 && ga + f > 1500 ? (ma = 0, ga = 1500) : (sa -= f, la +=
              f, ga = (ga + f) % 1500);
            var e = O.Ease.inOutQuad((ga > 750 ? 1500 - ga : ga) / 750);
            sa < 750 && ga > 750 && 1500 - ga > sa ? e = .5 * window.Math.max(
              0, (1500 - ga) / 750) + .5 * e : la > 750 && (e = .5 + .5 * e);
            var i = 20 * e;
            re.scale = ra + e, A.options.scheduledRatio = A.options
              .deviceRatio / (na + i), J_()
          }(), Ye = A.lerp(Ye, re.scale + vi[0] + vi[1] + vi[2] + vi[3], Ue),
          Ze = h, r = i / (h += Ye * h), g = _ / h,
          function() {
            for (var e = D.units[__ENTITIE_PLAYER__], i = D.border[
                __ENTITIE_PLAYER__], _ = i.border, a = 0; a < _; a++) {
              var t = e[i.cycle[a]];
              if (t.pid === B.PLAYER.id) {
                Ii = S.fastDist(B.PLAYER.x, B.PLAYER.y, t.x, t.y) < 1 ? window
                  .Math.max(0, Ii - f) : X;
                var r = k[__ENTITIE_PLAYER__].clothes[255 & t.extra],
                  g = B.gauges;
                r.rad !== window.undefined ? (g.rad.bonus = r.rad, g.cold
                    .bonus = r.warm) : (g.rad.bonus = 0, g.cold.bonus = 0),
                  Ve = t.x, Be = t.y, B.PLAYER.x = t.x, B.PLAYER.y = t.y, B
                  .PLAYER._i = t.i, B.PLAYER._j = t.j, B.PLAYER.isBuilding =
                  6 === k[__ENTITIE_PLAYER__].weapons[t.extra >> 8 & 255]
                  .type ? 1 : 0;
                var s = window.Math.min(c, m),
                  l = (s = R.dist > s ? n * window.Math.min((R.dist - s) / s,
                    1) : 0) * window.Math.cos(R.angle),
                  u = s * window.Math.sin(R.angle);
                De = A.lerp(De, l, .025), ke = A.lerp(ke, u, .025);
                var p = 0,
                  L = 0;
                return re.shake > 0 && (re.shake -= 1, p += 6 * window.Math
                    .random() - 3, L += 6 * window.Math.random() - 3), re
                  .explosionShake > 0 && (re.explosionShake -= 1, p += 18 *
                    window.Math.random() - 9, L += 18 * window.Math.random() -
                    9), Ie = o / h - t.x - De + p, Pe = d / h - t.y - ke + L,
                  t.x + De, void(t.y + ke)
              }
            }
          }(), V_(), U_(), ta(),
          function() {
            var e = 0;
            if (1 === B.PLAYER.isBuilding && 0 !== B.PLAYER.blueprint) {
              var i = ve[B.PLAYER.blueprint];
              0 !== i.subtype && ((i = i.subtype[B.PLAYER.furniture])
                .redprint = i.building, i.blueprint = i.building, i
                .xCenter = G_, i.yCenter = G_);
              var _ = R.angle,
                o = 1 === i.wall ? 0 : B.PLAYER.buildRotate;
              B.PLAYER.jBuild = B.PLAYER._j + window.Math.floor((t + window
                  .Math.cos(_) * a) / a), B.PLAYER.iBuild = B.PLAYER._i +
                window.Math.floor((t + window.Math.sin(_) * a) / a);
              var d = i.xCenter[o] + Ie + t + a * B.PLAYER.jBuild,
                n = i.yCenter[o] + Pe + t + a * B.PLAYER.iBuild;
              if (B.PLAYER.jBuild >= 0 && B.PLAYER.iBuild >= 0 && B.PLAYER
                .jBuild < l && B.PLAYER.iBuild < w) {
                var r = ai[B.PLAYER.iBuild][B.PLAYER.jBuild],
                  g = -1 === B.PLAYER.team ? -2 : B.PLAYER.team;
                r.tile !== c_ || 2 === i.zid && 0 !== r.tilePid && r
                  .category !== Ee.__PLANT__ ? (i.detail.category === Ee
                    .__PLANT__ || 2 === i.zid || 0 !== r.pid && r.pid !== B
                    .PLAYER.id && B.players[r.pid].team !== g) && r.ground ===
                  c_ || i.iTile !== window.undefined && (o % 2 == 0 && (B
                    .PLAYER.iBuild < 1 || B.PLAYER.iBuild >= w - 1 || ai[B
                      .PLAYER.iBuild + 1][B.PLAYER.jBuild].tile === c_ ||
                    ai[B.PLAYER.iBuild + 1][B.PLAYER.jBuild].ground ===
                    c_ && ai[B.PLAYER.iBuild + 1][B.PLAYER.jBuild].pid !== B
                    .PLAYER.id && 0 !== ai[B.PLAYER.iBuild + 1][B.PLAYER
                      .jBuild
                    ].pid && B.players[ai[B.PLAYER.iBuild + 1][B.PLAYER
                      .jBuild
                    ].pid].team !== g || ai[B.PLAYER.iBuild - 1][B.PLAYER
                      .jBuild
                    ].tile === c_ || ai[B.PLAYER.iBuild - 1][B.PLAYER
                      .jBuild].ground === c_ && ai[B.PLAYER.iBuild - 1][B
                      .PLAYER.jBuild
                    ].pid !== B.PLAYER.id && 0 !== ai[B.PLAYER.iBuild - 1][B
                      .PLAYER.jBuild
                    ].pid && B.players[ai[B.PLAYER.iBuild - 1][B.PLAYER
                      .jBuild
                    ].pid].team !== g) || o % 2 == 1 && (B.PLAYER.jBuild <
                    1 || B.PLAYER.jBuild >= l - 1 || ai[B.PLAYER.iBuild][B
                      .PLAYER.jBuild + 1
                    ].tile === c_ || ai[B.PLAYER.iBuild][B.PLAYER.jBuild +
                      1].ground === c_ && ai[B.PLAYER.iBuild][B.PLAYER
                      .jBuild + 1
                    ].pid !== B.PLAYER.id && 0 !== ai[B.PLAYER.iBuild][B
                      .PLAYER.jBuild + 1
                    ].pid && B.players[ai[B.PLAYER.iBuild][B.PLAYER.jBuild +
                      1
                    ].pid].team !== g || ai[B.PLAYER.iBuild][B.PLAYER
                      .jBuild - 1
                    ].tile === c_ || ai[B.PLAYER.iBuild][B.PLAYER.jBuild -
                      1].ground === c_ && ai[B.PLAYER.iBuild][B.PLAYER
                      .jBuild - 1
                    ].pid !== B.PLAYER.id && 0 !== ai[B.PLAYER.iBuild][B
                      .PLAYER.jBuild - 1
                    ].pid && B.players[ai[B.PLAYER.iBuild][B.PLAYER.jBuild -
                      1
                    ].pid].team !== g || B.PLAYER._i === B.PLAYER.iBuild)) ? (
                    B.PLAYER.canBuild = 0, A.drawImageHd(i.redprint, d, n, o *
                      oe, 0, 0, 1)) : (B.PLAYER.canBuild = 1, A.drawImageHd(i
                    .blueprint, d, n, o * oe, 0, 0, 1)) : (B.PLAYER.canBuild =
                    1, A.drawImageHd(i.redprint, d, n, o * oe, 0, 0, 1))
              }
              if (1 !== ti.isLoaded) return void(ti = A.loadImage(x, ti));
              e = 1 === i.wall || B.PLAYER.interaction >= 0 ? window.Math.max(
                0, B.PLAYER.hintRotate - f) : window.Math.min(900, B.PLAYER
                .hintRotate + f)
            } else e = window.Math.max(0, B.PLAYER.hintRotate - f);
            if (e > 0) {
              u.globalAlpha = O.Ease.outQuad(window.Math.max(0, e - 600) /
                300);
              var s = h * ti.width / 2,
                m = h * ti.height / 2;
              u.drawImage(ti, (Ie + Ve) * h - s / 2, window.Math.max(10 * h, (
                  Pe + Be) * h - m / 2 - 65 * h - 60 * h), s, m), u
                .globalAlpha = 1
            }
            B.PLAYER.hintRotate = e
          }(), B.transition > 0 && function() {
            var a, o, d = u;
            o = 1 - O.Ease.inQuad(B.transition / 1e3), ca.width = e.width, ca
              .height = e.height, (u = ua).save();
            var t = A.options.scheduledRatio / A.options.backingStoreRatio;
            u.scale(t, t), a = He, He = ve, ve = a, a = Ke, Ke = he, he = a,
              a = ze, ze = Me, Me = a, a = Je, Je = We, We = a, a = Ge, Ge =
              k, k = a, a = Xe, Xe = xe, xe = a, a = qe, qe = je, je = a, a =
              Qe, Qe = ii, ii = a, u.fillStyle = 0 === B.day ? "#0B2129" :
              "#3D5942", u.fillRect(0, 0, i, _), V_(), ta(), a = He, He = ve,
              ve = a, a = Ke, Ke = he, he = a, a = ze, ze = Me, Me = a, a =
              Je, Je = We, We = a, a = Ge, Ge = k, k = a, a = Xe, Xe = xe,
              xe = a, a = qe, qe = je, je = a, a = Qe, Qe = ii, ii = a, u
              .restore(), (u = d).globalAlpha = o, u.drawImage(ca, 0, 0, i,
              _), u.globalAlpha = 1, B.transition = window.Math.max(0, B
                .transition - f), 0 === B.transition && B.changeDayCycle()
          }(), D.cleanRemoved(), c_++;
        for (var s = 0; s < ue; s++) soundLimit[s] = 0;
        r = i / (h = Ze), g = _ / h
      },
      minimap: function(e, i) {
        if (function(e, i) {
            if (1 === i_.isLoaded) {
              if (j.acceptMember.pos.x = e + 241 * h, j.acceptMember.pos.y =
                i + 6 * h, j.refuseMember.pos.x = e + 290 * h, j.refuseMember
                .pos.y = i + 6 * h, 0 !== B.PLAYER.teamJoin || B.PLAYER
                .teamEffect > 0) {
                0 !== B.PLAYER.teamJoin ? B.PLAYER.teamEffect < 333 && (u
                  .globalAlpha = B.PLAYER.teamEffect / 333, B.PLAYER
                  .teamEffect += f) : (u.globalAlpha = B.PLAYER.teamEffect /
                  333, B.PLAYER.teamEffect = window.Math.max(0, B.PLAYER
                    .teamEffect - f));
                var _ = B.players[B.PLAYER.teamJoin];
                null === _.nicknameLabel && (_.nicknameLabel = T.renderText(_
                    .nickname, "'Viga', sans-serif", "#FFFFFF", 38, 400,
                    window.undefined, 16, 25, window.undefined, window
                    .undefined, window.undefined, window.undefined,
                    "#000000", 12)), u.drawImage(i_, e, i, h * i_.wh, h * i_
                    .h2), 0 !== _.nicknameLabel.width && 0 !== _.nicknameLabel
                  .height && u.drawImage(_.nicknameLabel, e + 20 * h, i + 6 *
                    h, _.nicknameLabel.wh * h, _.nicknameLabel.h2 * h), j
                  .acceptMember.draw(), j.refuseMember.draw(), B.PLAYER
                  .teamEffect < 333 && (u.globalAlpha = 1)
              }
            } else i_ = A.loadImage(H, i_)
          }(e + 250 * h, i), 1 === Hi.isLoaded) {
          var _ = b * Ve,
            a = b * Be,
            o = window.Math.min(window.Math.max(0, _ - q), y),
            d = window.Math.min(window.Math.max(0, a - q), y),
            t = q * h;
          if (u.drawImage(Hi, o, d, K, K, e, i, t, t), B.gameMode === B
            .__GHOUL__ && (0 !== B.PLAYER.ghoul ? N_(-255, i) : F_(e + 50, i,
              1)), B.gameMode === B.__BR__) {
            var n = B.PLAYER.toxicMap[window.Math.floor(Be / W)][window.Math
              .floor(Ve / W)
            ];
            0 !== n && n < B.PLAYER.toxicStep && 8 !== B.PLAYER.toxicStep ? (
                mi = window.Math.min(1e3, mi + f), u.globalAlpha = O.Ease
                .inQuad(mi / 500), A.drawImageHd(li, s, 58, 0, 0, 0, 1), u
                .globalAlpha = 1) : mi > 0 && (mi = window.Math.max(0, mi -
                f), u.globalAlpha = O.Ease.inQuad(mi / 500), A.drawImageHd(li,
                  s, 58, 0, 0, 0, 1), u.globalAlpha = 1), u.drawImage(d_.img,
                o / 2, d / 2, q, q, e, i, t, t), u.globalAlpha = g_ > 600 ? O
              .Ease.inOutQuad((1200 - g_) / 600) : O.Ease.inOutQuad(g_ / 600),
              g_ = (g_ + f) % 1200, u.drawImage(r_.img, o / 2, d / 2, q, q, e,
                i, t, t), u.globalAlpha = 1, N_(0, i), F_(e, i, 0)
          } else 0 === B.PLAYER.ghoul && (1 === B.gauges.rad.decrease ? (ui =
            window.Math.min(1e3, ui + f), u.globalAlpha = O.Ease.inQuad(
              ui / 500), A.drawImageHd(ci, s, 58, 0, 0, 0, 1), u
            .globalAlpha = 1) : ui > 0 && (ui = window.Math.max(0, ui -
            f), u.globalAlpha = O.Ease.inQuad(ui / 500), A.drawImageHd(ci,
              s, 58, 0, 0, 0, 1), u.globalAlpha = 1));
          _ = o >= y ? window.Math.min((_ - v) / 2 + Z, q - 8) : _ < q ?
            window.Math.max(15, _ / 2) : Z, a = d >= y ? window.Math.min((a -
              v) / 2 + Z, q - 8) : a < q ? window.Math.max(15, a / 2) : Z;
          var r = e / h,
            g = i / h;
          if (-1 !== B.PLAYER.team || 0 !== B.PLAYER.ghoul && B.playerAlive <
            6)
            for (var l = D.units[__ENTITIE_PLAYER__], m = 0; m < B.PLAYER
              .teamLength; m++) {
              var c = B.PLAYER.teamPos[m];
              if (!(c.old < 0)) {
                var p = B.players[c.id];
                if (c_ === p.frameId + 1) {
                  var L = l[p.locatePlayer];
                  S.fastDist(p.rx, p.ry, L.x, L.y) < 1e3 && (p.rx = L.x, p
                    .ry = L.y), p.x = L.x, p.y = L.y, E = L.angle
                } else var E = p.x % ae;
                var w = r + window.Math.max(15, window.Math.min(q - 15, _ -
                    3 + (p.rx - Ve) * b)),
                  M = g + window.Math.max(15, window.Math.min(q - 15, a - 3 +
                    (p.ry - Be) * b));
                A.drawImageHd(Yi, w, M, E, 0, 0, 1)
              }
            }
          if (B.PLAYER.badKarmaDelay > 0) {
            p = B.players[B.PLAYER.badKarma];
            if (c_ === p.frameId + 1) {
              L = (l = D.units[__ENTITIE_PLAYER__])[p.locatePlayer];
              S.fastDist(p.rx, p.ry, L.x, L.y) < 1e3 && (p.rx = L.x, p.ry = L
                .y), p.x = L.x, p.y = L.y
            }
            A.drawImageHd(Ce[p.KARMA], r + window.Math.max(15, window.Math
                .min(q - 15, _ - 3 + (p.rx - Ve) * b)), g + window.Math.max(
                15, window.Math.min(q - 15, a - 3 + (p.ry - Be) * b)), 0, 0,
              0, 1.25)
          }
          w = r + (_ - 3), M = g + (a - 3);
          if (A.drawImageHd(Ui, w, M, R.angle, 0, 0, 1), 0 === B.PLAYER
            .ghoul && (B.PLAYER.skillPoint > 0 || ni.effect > 0)) {
            var I = (ni.move + f) % 1e3;
            ni.move = I, ni.move < 500 ? e += 260 + 15 * O.Ease.inOutQuad(I /
                500) : e += 260 + 15 * O.Ease.inOutQuad((1e3 - I) / 500), u
              .globalAlpha = O.Ease.inQuad(ni.effect), A.drawImageHd(ni, e,
                i + 31, 0, 0, 0, 1), u.globalAlpha = 1, B.PLAYER.skillPoint <=
              0 || 1 === j.getSkillBoxState() ? ni.effect = window.Math.max(0,
                ni.effect - f / 500) : ni.effect < 1 && (ni.effect = window
                .Math.min(1, ni.effect + f / 500))
          }
        } else Hi = A.loadImage("img/borderBigMinimap2.png", Hi)
      },
      bigminimap: function(e, i) {
        var _ = M * h,
          a = I * h,
          t = o - _ / 2,
          n = window.Math.max(d - a / 2, 0),
          r = t / h,
          g = n / h,
          s = M / p,
          l = I / E;
        i.pos.x = window.Math.floor(t + _ + 0 * h), i.pos.y = window.Math
          .floor(n + 0 * h), e.draw();
        var m = B.PLAYER.cities,
          c = m.length / 2;
        if (c > 0) {
          P = window.Math.floor(n / h + window.Math.min(window.Math.max(10, m[
            0] * l), 400)), T = window.Math.floor(t / h + window.Math.min(
            window.Math.max(10, m[1] * s), 400)), A.drawImageHd(Ki, T, P, 0,
            0, 0, 1);
          for (var L = 1; L < c; L++) P = window.Math.floor(n / h + window
              .Math.min(window.Math.max(10, m[2 * L] * l), 400)), T = window
            .Math.floor(t / h + window.Math.min(window.Math.max(10, m[1 + 2 *
              L] * s), 400)), A.drawImageHd(Gi, T, P, 0, 0, 0, 1)
        }
        if (B.gameMode === B.__BR__) {
          var w = r + 205,
            f = g + 205;
          A.drawImageHd(d_, w, f, 0, 0, 0, 2), u.globalAlpha = g_ > 600 ? O
            .Ease.inOutQuad((1200 - g_) / 600) : O.Ease.inOutQuad(g_ / 600), A
            .drawImageHd(r_, w, f, 0, 0, 0, 2), u.globalAlpha = 1
        }
        if (i.draw(), -1 !== B.PLAYER.team || 0 !== B.PLAYER.ghoul && B
          .playerAlive < 6) {
          var b = D.units[__ENTITIE_PLAYER__];
          for (L = 0; L < B.PLAYER.teamLength; L++) {
            var y = B.PLAYER.teamPos[L];
            if (!(y.old < 0)) {
              var v, S = B.players[y.id],
                T = window.Math.floor(r + window.Math.min(window.Math.max(10,
                  S.rx * s), 400)),
                P = window.Math.floor(g + window.Math.min(window.Math.max(10,
                  S.ry * s), 400));
              v = c_ === S.frameId + 1 ? b[S.locatePlayer].angle : S.x % ae, A
                .drawImageHd(Yi, T, P, v, 0, 0, 1)
            }
          }
        }
        if (T = window.Math.floor(t / h + window.Math.min(window.Math.max(10,
            Ve * s), 400)), P = window.Math.floor(n / h + window.Math.min(
            window.Math.max(10, Be * l), 400)), A.drawImageHd(Ui, T, P, R
            .angle, 0, 0, 1), B.PLAYER.badKarmaDelay > 0) {
          S = B.players[B.PLAYER.badKarma];
          A.drawImageHd(Ce[S.KARMA], window.Math.floor(r + window.Math.min(
              window.Math.max(10, S.rx * s), 400)), window.Math.floor(g +
              window.Math.min(window.Math.max(10, S.ry * s), 400)), 0, 0, 0,
            1.25)
        }
      },
      gauges: function(e, i) {
        var _ = B.gauges.life,
          a = _.current / _._max;
        A.fillRect(u, e / h + 14, i / h + 71, 189 * a, 16, "#70BD56");
        var o = B.gauges.food;
        a = o.current / o._max, A.fillRect(u, e / h + 13, i / h + 162, 54,
          63 * -a, "#e58833");
        var d = B.gauges.cold;
        a = d.current / d._max, A.fillRect(u, e / h + 81, i / h + 162, 54,
          63 * -a, "#55B7BC");
        var t = B.gauges.stamina;
        a = t.current / t._max, A.fillRect(u, e / h + 150, i / h + 162, 54,
          63 * -a, "#d7c83a");
        var n = B.gauges.xp;
        a = n.current / n._max, A.fillRect(u, e / h + 226, i / h + 172, 16,
          77 * -a, "#FFFFFF");
        var r, g, s = B.updateHour();
        if (s >= 1e7) {
          if (1 !== zi.isLoaded) return void(zi = A.loadImage(U, zi));
          s -= 1e7, r = zi, g = Xi
        } else {
          if (1 !== Ji.isLoaded) return void(Ji = A.loadImage(V, Ji));
          r = Ji, g = Qi
        }
        var l = h * r.width / 2,
          m = h * r.height / 2;
        u.drawImage(r, e + 100 * h, i + 14 * h, l, m), A.drawImageHd(g,
          144.5 + e / h, i / h + 56, s * de, 0, 0, 1)
      },
      gaugesAfter: function(e, i) {
        var _ = B.PLAYER.level;
        oi[_] === window.undefined && (oi[_] = {
          img: T.renderText("" + _, "'Black Han Sans', sans-serif",
            "#ffffff", 44, 250, window.undefined, 18, 15, window
            .undefined, window.undefined, window.undefined, window
            .undefined, "#000000", 15)
        }, oi[_].img.isLoaded = 1), A.drawImageHd(oi[_], e / h + 234, i /
          h + 79, 0, 0, 0, 1);
        var a = B.gauges.rad,
          o = 1 - a.current / a._max;
        A.drawImageHd(ji, 38 + e / h, 37 + i / h, window.Math.PI * o, 0, 0, 1)
      },
      leaderboard: function(e, i) {
        var _ = B.leaderboard,
          a = B.players,
          o = -1;
        if (1 === B.newLeaderboard) {
          o = 1, B.newLeaderboard = 0, l_.clearRect(0, 0, 699, 738);
          for (var d = 0; d < _.length && 0 !== _[d]; d++) {
            var t = a[_[d]];
            if (B.PLAYER.id === _[d] && (o = 0), 0 === t.nickname) break;
            null === t.leaderboardLabel && (t.id === B.PLAYER.id ? t
                .leaderboardLabel = T.renderText(t.nickname,
                  "'Viga', sans-serif", "#D6C823", 40, 350, window.undefined,
                  0, 12) : t.leaderboardLabel = T.renderText(t.nickname,
                  "'Viga', sans-serif", "#ffffff", 40, 350, window.undefined,
                  0, 12)), null === t.scoreLabel && (t.id === B.PLAYER.id ? t
                .scoreLabel = T.renderText(t.scoreSimplified,
                  "'Viga', sans-serif", "#D6C823", 40, 150, window.undefined,
                  5, 12) : t.scoreLabel = T.renderText(t.scoreSimplified,
                  "'Viga', sans-serif", "#ffffff", 40, 150, window.undefined,
                  5, 12)), 0 !== t.leaderboardLabel.width && 0 !== t
              .leaderboardLabel.height && l_.drawImage(t.leaderboardLabel, 90,
                114 + 50 * d, t.leaderboardLabel.width, t.leaderboardLabel
                .height), l_.drawImage(t.scoreLabel, 484, 114 + 50 * d, t
                .scoreLabel.width, t.scoreLabel.height), 1 === (n = Ce[t
                .KARMA].img).isLoaded && l_.drawImage(n, 612, 114 + 50 * d, n
                .width, n.height)
          }
          var n;
          if (B.PLAYER.inLeaderboard = o, 1 === o) 1 === (n = Ce[B.PLAYER
            .KARMA].img).isLoaded && l_.drawImage(n, 375, 645, 1.5 * n
            .width, 1.5 * n.height)
        }
        var r = B.PLAYER.exp;
        if (1 === o || 1 === B.PLAYER.inLeaderboard && r !== B.PLAYER
          .lastScore) {
          t = a[B.PLAYER.id];
          l_.clearRect(480, 657, 112, 60), r !== B.PLAYER.lastScore && (B
            .PLAYER.lastScore = r, t.scoreLabel = T.renderText(O
              .simplifyNumber(r), "'Viga', sans-serif", "#ffffff", 40, 150,
              window.undefined, 5, 12)), l_.drawImage(t.scoreLabel, 484,
            662, t.scoreLabel.width, t.scoreLabel.height)
        }
        u.drawImage(s_, e, i, 233 * h, 246 * h)
      },
      inventory: function(e, a, o, d) {
        var t = j.inventory;
        if (1 === di.isLoaded) {
          var n = B.PLAYER.inventory,
            r = n.length,
            g = di.width * h / 2,
            s = di.height * h / 2,
            l = window.Math.max(300 * h, (i - g * r) / 2),
            m = _ - s - 5 * h,
            c = l,
            p = m,
            L = 5 * h + g;
          r > 10 && (d.pos.x = i - 69 * h, d.pos.y = _ - 68 * h, d.draw(),
            0 === d.open && (r = 10));
          for (var E = 0; E < r; E++) {
            var w = t[E];
            0 === n[E][0] ? (w.pos.x = c, w.pos.y = p, u.drawImage(di, c, p,
                g, s)) : P_(w, n[E], c, p, e, a), 9 === E ? (c = d.pos.x - 5 *
                h, p = d.pos.y - L) : 12 === E ? (c -= L, p = d.pos.y - L) :
              E > 9 ? p -= L : c += L
          }
          var f = B.PLAYER.drag;
          if (1 === f.begin && R.state === R.__MOUSE_DOWN__ && S.dist(f.x, f
              .y, R.x, R.y) > 4 * h) {
            var b = n[f.id][0];
            if (b > 0) {
              var y = ve[b].itemButton.img[0];
              0 === y.isLoaded && (y = He[b].itemButton.img[0]), u
                .globalAlpha = .7;
              g = 68 * h;
              u.drawImage(y, R.x * h - g / 2, R.y * h - g / 2, g, g), u
                .globalAlpha = 1
            }
          } else - 1 !== o && 0 !== n[o][0] && (o < 10 ? W_(n[o][0], l + L *
            o, m - 79 * h) : W_(n[o][0], o < 13 ? d.pos.x - 200 * h : d
            .pos.x - 200 * h - L, d.pos.y + L * ((10 - o) % 3 - 1)))
        } else di = A.loadImage("img/inv-empty.png", di)
      },
      buttonInv: P_,
      config: function(e, i, _, a, o, d, t, n, r, g, s, l, m, c) {
        e.draw();
        var u = e.pos.x,
          p = e.pos.y;
        s.pos.x = u + 265 * h, s.pos.y = p + 0 * h, s.draw(), o.pos.x = u +
          87 * h, o.pos.y = p + 15 * h, 1 === z.isAzerty() && o.setState(T
            .__BUTTON_CLICK__), o.draw(), d.pos.x = u + 173 * h, d.pos.y = p +
          15 * h, 1 === z.isQwerty() && d.setState(T.__BUTTON_CLICK__), d
          .draw(), a.pos.x = u + 87 * h, a.pos.y = p + 62 * h, 3 === A.options
          .forceResolution && a.setState(T.__BUTTON_CLICK__), a.draw(), _.pos
          .x = u + 147 * h, _.pos.y = p + 62 * h, 2 === A.options
          .forceResolution && _.setState(T.__BUTTON_CLICK__), _.draw(), i.pos
          .x = u + 207 * h, i.pos.y = p + 62 * h, 1 === A.options
          .forceResolution && i.setState(T.__BUTTON_CLICK__), i.draw(), t.pos
          .x = u + 87 * h, t.pos.y = p + 117 * h, 1 === J.options.isAudio && t
          .setState(T.__BUTTON_CLICK__), t.draw(), n.pos.x = u + 147 * h, n
          .pos.y = p + 117 * h, 0 === J.options.isAudio && n.setState(T
            .__BUTTON_CLICK__), n.draw(), r.pos.x = u + 87 * h, r.pos.y = p +
          167 * h, 1 === J.options.isFx && r.setState(T.__BUTTON_CLICK__), r
          .draw(), g.pos.x = u + 147 * h, g.pos.y = p + 167 * h, 0 === J
          .options.isFx && g.setState(T.__BUTTON_CLICK__), g.draw(), c.pos.x =
          u + 87 * h, c.pos.y = p + 217 * h, 0 === ei && c.setState(T
            .__BUTTON_CLICK__), c.draw(), m.pos.x = u + 147 * h, m.pos.y = p +
          217 * h, 1 === ei && m.setState(T.__BUTTON_CLICK__), m.draw(), l.pos
          .x = u + 207 * h, l.pos.y = p + 217 * h, 2 === ei && l.setState(T
            .__BUTTON_CLICK__), l.draw()
      },
      craft: function(e, i, _, a, o, d, t, n, r, g, s, l, m, c) {
        e.draw();
        var p = e.pos.x,
          L = e.pos.y;
        i.pos.x = p + 594 * h, i.pos.y = L + 0 * h, i.draw();
        for (var E = B.PLAYER.craftAvailable, w = B.PLAYER.recipeAvailable,
            b = B.PLAYER.craftCategory, y = B.PLAYER.craftArea, v = 0; v < _
          .length; v++) {
          var S = _[v];
          v === b && S.setState(T.__BUTTON_CLICK__), S.pos.x = 10 * h + p +
            47 * v * h, S.pos.y = L - 40 * h, S.draw()
        }
        var R = 0;
        for (v = 0; v < t.length; v++) {
          if (v === y && 1 === B.PLAYER.isInBuilding);
          else if (v !== B.PLAYER.buildingArea && 0 !== v) continue;
          S = t[v];
          v === y && S.setState(T.__BUTTON_CLICK__), S.pos.x = p - 40 * h, S
            .pos.y = 10 * h + L + 43 * R * h, S.draw(), R++
        }
        n.pos.x = p + 364 * h, n.pos.y = L + 27 * h, n.draw();
        var M = j.craft,
          I = B.PLAYER.craftLen,
          P = 49 * h,
          W = 49 * h,
          F = 58 * h,
          N = 30 * h,
          x = 34 * h,
          C = 1;
        for (Ni < 500 ? (C += .08 * O.Ease.inQuad(Ni / 500), Ni += f) : (C +=
            .08 * O.Ease.outQuad(1 - (Ni - 500) / 500), (Ni += f) > 1e3 && (
              Ni = 0)), C = window.Math.max(1, window.Math.min(1.08, C)), v =
          0; v < I; v++) {
          (S = M[v]).pos.x = N + p + v % 5 * F, S.pos.y = x + L + window.Math
            .floor(v / 5) * F;
          var V = E[v];
          0 === V ? (u.globalAlpha = .45, S.draw(), u.globalAlpha = 1) : 2 ===
            V ? (S.setState(T.__BUTTON_IN__), S.draw()) : (u.globalAlpha = .6,
              A.drawImageHd(Fi, S.pos.x / h + 24.5, S.pos.y / h + 24.5, 0, 0,
                0, C), u.globalAlpha = 1, S.draw())
        }
        var D = 0;
        if (-1 === B.PLAYER.craftCategory) {
          if (1 === B.PLAYER.isInBuilding ? (a.pos.x = p + 454 * h, a.pos.y =
              L + 153 * h, 1 === B.PLAYER.craftAvailable[B.PLAYER
                .craftIdSelected] && B.PLAYER.building.len < 4 && 0 !== B
              .PLAYER.building.fuel ? a.draw() : (u.globalAlpha = .5, a
                .setState(T.__BUTTON_OUT__), a.draw(), u.globalAlpha = 1)) :
            0 === B.PLAYER.crafting ? (a.pos.x = p + 454 * h, a.pos.y = L +
              153 * h, 1 === B.PLAYER.craftAvailable[B.PLAYER
              .craftIdSelected] ? a.draw() : (u.globalAlpha = .5, a.setState(T
                .__BUTTON_OUT__), a.draw(), u.globalAlpha = 1)) : (o.pos.x =
              p + 454 * h, o.pos.y = L + 153 * h, o.draw()), 1 !== Wi.isLoaded
            ) return void(Wi = A.loadImage("img/craft-gauge.png", Wi));
          1 === B.PLAYER.isInBuilding ? 0 !== B.PLAYER.building.time && 0 !==
            B.PLAYER.building.fuel && ((D = B.PLAYER.building.time - window
                .Date.now()) < 0 && (B.PLAYER.building.time = 0), D = O.Ease
              .inOutQuad(1 - D / B.PLAYER.building.timeMax)) : 0 !== B.PLAYER
            .crafting && ((D = B.PLAYER.crafting - window.Date.now()) < 0 && (
              B.PLAYER.crafting = 0), D = O.Ease.inOutQuad(1 - D / B.PLAYER
              .craftingMax)), D = window.Math.min(1, window.Math.max(0, D)),
            P = h * Wi.width / 2, W = h * Wi.height / 2;
          var k = p + 356 * h,
            U = L + 206 * h;
          u.fillStyle = "#A29742", N = 2 * (F = 3 * h), u.fillRect(window.Math
            .floor(k + F), window.Math.floor(U + F), window.Math.floor((P -
              N) * D), window.Math.floor(W - N)), u.drawImage(Wi, k, U, P,
            W)
        } else {
          var Y = B.PLAYER.craftAvailable[B.PLAYER.craftIdSelected];
          if (d.pos.x = p + 454 * h, d.pos.y = L + 153 * h, 1 === Y) d.draw();
          else if (0 === Y) {
            if (u.globalAlpha = .5, d.setState(T.__BUTTON_OUT__), d.draw(), u
              .globalAlpha = 1, B.PLAYER.craftSelected !== S_) {
              A_.clearRect(0, 0, 420, 148), S_ = B.PLAYER.craftSelected;
              var H = ve[S_].detail,
                G = 20;
              if (H.level > B.PLAYER.level) {
                var K = T.renderText("Require level " + H.level +
                  " or higher", "'Viga', sans-serif", "#D8BA3D", 30, 600);
                A_.drawImage(K, 20, G), G += 50
              }
              if (-1 !== H.previous && B.PLAYER.skillUnlocked[H.previous] ===
                window.undefined) {
                K = T.renderText("Unlock " + ve[H.previous].detail.name +
                  " before", "'Viga', sans-serif", "#D8BA3D", 30, 600);
                A_.drawImage(K, 20, G), G += 50
              }
              if (B.PLAYER.skillPoint < H.price) {
                K = T.renderText("Cost " + H.price + " skill point" + (1 !== H
                    .price ? "s" : ""), "'Viga', sans-serif", "#D8BA3D", 30,
                  600);
                A_.drawImage(K, 20, G)
              }
            }
            u.drawImage(v_, p + 356 * h, L + 211 * h, h * v_.width / 2, h * v_
              .height / 2)
          } else d.setState(T.__BUTTON_CLICK__), d.draw()
        }
        if (1 === B.PLAYER.isInBuilding) {
          if (($ = B.PLAYER.building.fuel) >= 0)(S = y === le.__SMELTER__ ||
              y === le.__EXTRACTOR__ || y === le.__AGITATOR__ ? l : y === le
              .__TESLA__ ? m : s).pos.x = p + 532 * h, S.pos.y = L + 153 * h,
            255 !== B.PLAYER.building.fuel ? S.draw() : (u.globalAlpha = .5, S
              .setState(T.__BUTTON_OUT__), S.draw(), u.globalAlpha = 1), g[
            $] === window.undefined && (g[$] = {
              img: T.renderText("x" + $, "'Black Han Sans', sans-serif",
                "#FFFF00", 30, 250, window.undefined, 15, 12, window
                .undefined, window.undefined, window.undefined, window
                .undefined, "#000000", 12)
            }, g[$].img.isLoaded = 1), A.drawImageHd(g[$], S.pos.x / h + 42, S
              .pos.y / h + 42, -.5, 0, 0, .9);
          var z = j.queue,
            J = B.PLAYER.building.pos;
          I = B.PLAYER.building.len, P = 40 * h, W = 40 * h, F = 62 * h, N =
            356 * h, x = 237 * h;
          for (v = 0; v < I; v++) {
            S = z[v];
            v === J ? 0 !== D && (u.globalAlpha = .6, A.drawImageHd(Fi, S.pos
                .x / h + 20, S.pos.y / h + 20, 0, 0, 0, .85 * window.Math
                .max(.01, window.Math.min(1, D))), u.globalAlpha = 1) : v <
              J && (u.globalAlpha = .6, A.drawImageHd(Fi, S.pos.x / h + 20, S
                .pos.y / h + 20, 0, 0, 0, .85 * C), u.globalAlpha = 1), S.pos
              .x = N + p + v * F, S.pos.y = x + L, S.draw()
          }
        }
        var X = j.tools;
        for (I = B.PLAYER.toolsLen, F = 45 * h, N = 356 * h, x = 151 * h, v =
          0; v < I; v++) {
          (S = X[v]).pos.x = N + p + v * F, S.pos.y = x + L, S.draw()
        }
        if (B.PLAYER.skillPoint !== y_) {
          h_.clearRect(0, 0, 280, 50), y_ = B.PLAYER.skillPoint;
          K = T.renderText("SKILL POINT: " + y_, "'Viga', sans-serif",
            "#FFFFFF", 32, 400);
          h_.drawImage(K, 24, 12)
        }
        if (u.drawImage(b_, p + 455 * h, L + 378 * h, h * b_.width / 2, h * b_
            .height / 2), B.PLAYER.craftSelected !== E_ && (L_.clearRect(0, 0,
            280, 148), E_ = B.PLAYER.craftSelected, B_(L_, E_)), u.drawImage(
            p_, p + 439 * h, L + 24 * h, h * p_.width / 2, h * p_.height / 2),
          B.PLAYER.skillPoint > 0 || ri.effect > 0) {
          var Q = (ri.move + f) % 1e3;
          ri.move = Q;
          var q = L / h;
          ri.move < 500 ? q += -62 - 15 * O.Ease.inOutQuad(Q / 500) : q += -
            62 - 15 * O.Ease.inOutQuad((1e3 - Q) / 500), u.globalAlpha = O
            .Ease.inQuad(ri.effect), A.drawImageHd(ri, 266 + e.pos.x / h, q,
              0, 0, 0, 1), u.globalAlpha = 1, B.PLAYER.skillPoint <= 0 ? ri
            .effect = window.Math.max(0, ri.effect - f / 500) : ri.effect <
            1 && (ri.effect = window.Math.min(1, ri.effect + f / 500))
        }
        var Z = j.recipe;
        for (I = B.PLAYER.recipeLen, P = 40 * h, W = 40 * h, F = 45 * h, N =
          356 * h, x = 107 * h, v = 0; v < I; v++) {
          var $;
          (S = Z[v]).pos.x = N + p + v * F, S.pos.y = x + L, r[$ = window.Math
              .abs(w[v])] === window.undefined && (r[$] = {
              img: T.renderText("x" + $, "'Black Han Sans', sans-serif",
                "#ffffff", 30, 250, window.undefined, 15, 12, window
                .undefined, window.undefined, window.undefined, window
                .undefined, "#000000", 12)
            }, r[$].img.isLoaded = 1), w[v] < 0 ? (u.globalAlpha = .45, S
              .draw(), A.drawImageHd(r[$], S.pos.x / h + 30, S.pos.y / h + 32,
                -.5, 0, 0, .9), u.globalAlpha = 1) : (S.draw(), A.drawImageHd(
              r[$], S.pos.x / h + 30, S.pos.y / h + 32, -.5, 0, 0, .9)), c ===
            v && B.PLAYER.recipeList[v] > 0 && W_(B.PLAYER.recipeList[v], S
              .pos.x, S.pos.y + 45 * h)
        }
      },
      chest: function(e, i, _, a) {
        e.draw();
        var o = e.pos.x,
          d = e.pos.y;
        i.pos.x = o + 161 * h, i.pos.y = d + 0 * h, i.draw();
        for (var t, n = B.PLAYER.chest, r = d + 14 * h, g = j.chest, s =
          0; s < 4; s++) s % 2 == 0 ? (t = o + 12.5 * h, 2 === s && (r += 71 *
          h)) : t += 72 * h, 0 !== n[s][0] && P_(g[s], n[s], t, r, _, a)
      },
      team: function(e, i, _, a, o, d, t, n) {
        var r = 0,
          g = 0;
        if (-1 === B.PLAYER.team) {
          var s = 1;
          if (0 === j.teamName.length) s = 0;
          else
            for (var l = 0; l < B.teams.length; l++)
              if (B.teams[l].name === j.teamName) {
                s = 0;
                break
              } B.PLAYER.teamNameValid = s, r = i.pos.x, g = i.pos.y, i
          .draw(), e.pos.x = r + 513 * h, e.pos.y = g + 2 * h, x_ !== j
            .teamName && (x_ = j.teamName, C_ = T.renderText(x_,
              "'Viga', sans-serif", "#FFFFFF", 30, 400)), null !== C_ && 0 !==
            x_.length && (A.fillRect(u, r / h + 39, g / h + 14, 122, 16.5,
              "#000000"), u.drawImage(C_, r + 35 * h, g + 14.5 * h, C_.wh *
              h, C_.h2 * h)), o.pos.x = r + 172 * h, o.pos.y = g + 6 * h,
            0 === s || window.Date.now() - B.PLAYER.teamCreateDelay < 30500 ?
            (o.setState(T.__BUTTON_OUT__), u.globalAlpha = .5, o.draw(), u
              .globalAlpha = 1) : o.draw();
          var m = 0;
          for (l = 0; l < 18; l++) {
            if (0 !== (c = B.teams[l]).leader) null === c.label && (c.label =
                T.renderText(c.name, "'Viga', sans-serif", "#FFFFFF", 30, 400)
                ), u.drawImage(c.label, r + (20 + m % 3 * 163) * h, g + (
                  58.5 + 36 * window.Math.floor(m / 3)) * h, c.label.wh * h, c
                .label.h2 * h), (p = j.join[m]).pos.x = r + (84 + m % 3 *
              163) * h, p.pos.y = g + (48 + 36 * window.Math.floor(m / 3)) *
              h, window.Date.now() - B.PLAYER.teamDelay < 10500 ? (p.setState(
                  T.__BUTTON_OUT__), u.globalAlpha = .5, p.draw(), u
                .globalAlpha = 1) : p.draw(), m++
          }
        } else {
          var c;
          if (r = _.pos.x, g = _.pos.y, null === (c = B.teams[B.PLAYER.team])
            .label && (c.label = T.renderText(c.name, "'Viga', sans-serif",
              "#FFFFFF", 30, 400)), u.drawImage(c.label, r + 144 * h, g + 13 *
              h, c.label.wh * h, c.label.h2 * h), _.draw(), e.pos.x = r +
            512 * h, e.pos.y = g + 34.5 * h, 1 === B.PLAYER.teamLeader) {
            0 === B.PLAYER.teamLocked ? (d.pos.x = r + 259 * h, d.pos.y = g +
                5 * h, d.draw()) : (t.pos.x = r + 259 * h, t.pos.y = g + 5 *
                h, t.draw()), n.pos.x = r + 311.5 * h, n.pos.y = g + 5 * h, n
              .draw();
            for (m = 0, l = 0; l < B.players.length; l++) {
              var p, L = B.players[l];
              if (c.uid === L.teamUid && L.team === c.id) null === L
                .nicknameLabel && (L.nicknameLabel = T.renderText(L.nickname,
                  "'Viga', sans-serif", "#FFFFFF", 38, 400, window
                  .undefined, 16, 25, window.undefined, window.undefined,
                  window.undefined, window.undefined, "#000000", 12)), 0 !== L
                .nicknameLabel.width && 0 !== L.nicknameLabel.height && u
                .drawImage(L.nicknameLabel, r + (26 + m % 3 * 166.5) * h, g +
                  (53 + 29.5 * window.Math.floor(m / 3)) * h, L.nicknameLabel
                  .wh * h / 2.2, L.nicknameLabel.h2 * h / 2.2), (p = j.kick[
                  m]).pos.x = r + (132 + m % 3 * 166.5) * h, p.pos.y = g + (
                  48.5 + 29.5 * window.Math.floor(m / 3)) * h, window.Date
                .now() - B.PLAYER.teamDelay < 10500 || L.id === B.PLAYER.id ?
                (p.setState(T.__BUTTON_OUT__), u.globalAlpha = .5, p.draw(), u
                  .globalAlpha = 1) : p.draw(), m++
            }
          } else {
            a.pos.x = r + 311.5 * h, a.pos.y = g + 5 * h, a.draw();
            for (m = 0, l = 0; l < B.players.length; l++) {
              L = B.players[l];
              c.uid === L.teamUid && L.team === c.id && (null === L
                .nicknameLabel && (L.nicknameLabel = T.renderText(L
                  .nickname, "'Viga', sans-serif", "#FFFFFF", 38, 400,
                  window.undefined, 16, 25, window.undefined, window
                  .undefined, window.undefined, window.undefined,
                  "#000000", 12)), 0 !== L.nicknameLabel.width && 0 !== L
                .nicknameLabel.height && u.drawImage(L.nicknameLabel, r + (
                    26 + m % 3 * 166.5) * h, g + (53 + 29.5 * window.Math
                    .floor(m / 3)) * h, L.nicknameLabel.wh * h / 2.2, L
                  .nicknameLabel.h2 * h / 2.2), m++)
            }
          }
        }
        e.draw()
      },
      interaction: function() {
        if (0 === B.PLAYER.ghoul) {
          var e = B.PLAYER.wrongToolTimer;
          if (e > 0) {
            u.globalAlpha = e < 500 ? O.Ease.inQuad(e / 500) : e > 1500 ? O
              .Ease.inQuad(1 - (e - 1500) / 500) : 1;
            var i = 1 === B.PLAYER.wrongTool ? Ci : Me[ve[B.PLAYER.wrongTool]
              .loot];
            A.drawImageHd(xi, s, 50, 0, 0, 0, 1), A.drawImageHd(i, s, 50, 0,
              0, 0, 1), u.globalAlpha = 1, B.PLAYER.wrongToolTimer -= f
          }
          switch (B.PLAYER.interaction) {
            case 0:
              if (1 !== hi.isLoaded) return void(hi = 0 === L ? A.loadImage(
                "img/loot.png", hi) : A.loadImage(F, hi));
              var _ = (l = h + Ye * h) / h,
                a = h * hi.width / 2,
                o = h * hi.height / 2,
                d = (Ie + Ve) * l - a / 2,
                t = window.Math.max(10 * h, (Pe + Be) * l - o / 2 - 65 * l -
                  60 * h);
              1 === L && (j.xInteract = d, j.yInteract = t, j.widthInteract =
                a, j.heightInteract = o), u.drawImage(hi, d, t, a, o);
              var n = Me[B.PLAYER.loot];
              d = (Ie + Ve) * _ - a / (2 * h), t = window.Math.max(10, (Pe +
                Be) * _ - o / (2 * h) - 65 * _ - 60), A.drawImageHd(n, d +
                77, t + 33, n.angle, 0, 0, n.scale);
              break;
            case 1:
              var r = B.PLAYER.interactionDelay / B.PLAYER.interactionWait,
                g = B.PLAYER.interactionWait - B.PLAYER.interactionDelay;
              if (B.PLAYER.interactionDelay -= f, B.PLAYER.interactionDelay <
                0) return void(B.PLAYER.interaction = -1);
              if (1 !== Ri.isLoaded) return void(Ri = A.loadImage(
                "img/timer.png", Ri));
              if (1 !== Ti.isLoaded) return void(Ti = A.loadImage(
                "img/timer-arrow.png", Ti));
              if (1 !== Mi.isLoaded) return void(Mi = A.loadImage(
                "img/timer-lights.png", Mi));
              var l = h + Ye * h,
                m = (a = h * Ri.width / 2, o = h * Ri.height / 2, (Ie + Ve) *
                  l),
                c = (Pe + Be) * l;
              d = m - a / 2, t = window.Math.max(10 * l, c - o / 2 - 65 * l -
                60 * h);
              g < 100 ? u.globalAlpha = g / 100 : B.PLAYER.interactionDelay <
                100 && (u.globalAlpha = B.PLAYER.interactionDelay / 100), u
                .drawImage(Ri, d, t, a, o), u.save(), u.translate(m, window
                  .Math.max(10 * l + o / 2, c - 65 * l - 60 * h)), u.rotate(-
                  ae * r), u.drawImage(Ti, -a / 2, -o / 2, a, o), u.restore(),
                u.drawImage(Mi, d, t, a, o), u.globalAlpha = 1;
              break;
            case 2:
              var p = B.PLAYER.eInteract.img;
              if (1 !== p.isLoaded) return void(B.PLAYER.eInteract.img = 0 ===
                L ? A.loadImage(B.PLAYER.eInteract.src, p) : A.loadImage(B
                  .PLAYER.eInteract.src.replace("e-", "e-isTouchScreen-"),
                  p));
              l = h + Ye * h, a = h * p.width / 2, o = h * p.height / 2;
              d = 1 === B.PLAYER.extraLoot ? (Ie + Ve - 5) * l - a : (Ie +
                Ve) * l - a / 2;
              t = window.Math.max(10 * h, (Pe + Be) * l - o / 2 - 65 * l -
                60 * h);
              if (1 === L && (j.xInteract = d, j.yInteract = t, j
                  .widthInteract = a, j.heightInteract = o), u.drawImage(p, d,
                  t, a, o), 1 === B.PLAYER.extraLoot) {
                if (1 !== yi.isLoaded) return void(yi = 0 === L ? A.loadImage(
                  "img/loot2.png", yi) : A.loadImage(F, hi));
                _ = l / h;
                a = h * yi.width / 2, o = h * yi.height / 2, d += a + 10 * h,
                  t = window.Math.max(10 * h, (Pe + Be) * l - o / 2 - 65 * l -
                    60 * h), 1 === L && (j.xInteract2 = d, j.yInteract2 = t),
                  u.drawImage(yi, d, t, a, o);
                n = Me[B.PLAYER.loot];
                d = (Ie + Ve) * _ + 5, t = window.Math.max(10, (Pe + Be) * _ -
                  o / (2 * h) - 65 * _ - 60), A.drawImageHd(n, d + 77, t +
                  33, n.angle, 0, 0, n.scale)
              }
          }
        }
      },
      alertServer: function() {
        Q.alertDelay > 0 && (Q.alertDelay > 2500 ? u.globalAlpha = O.Ease
          .inOutQuad((3e3 - Q.alertDelay) / 500) : Q.alertDelay > 500 ? u
          .globalAlpha = 1 : u.globalAlpha = O.Ease.inOutQuad(Q.alertDelay /
            500), 0 === Q.alertId ? A.drawImageHd($i, s, $i.img.h2 / 2, 0,
            0, 0, 1) : 1 === Q.alertId ? A.drawImageHd(Zi, s, Zi.img.h2 / 2,
            0, 0, 0, 1) : 2 === Q.alertId ? A.drawImageHd(qi, s, qi.img.h2 /
            2, 0, 0, 0, 1) : 3 === Q.alertId && A.drawImageHd(e_, s, e_.img
            .h2 / 2, 0, 0, 0, 1), u.globalAlpha = 1, Q.alertDelay -= f)
      },
      shake: 0,
      explosionShake: 0,
      scale: -0,
      setParticles: function(e) {
        localStorage2.setItem("particles", "" + e), ei = e
      },
      setDetection: function(e) {
        Ii = 0
      },
      setPoisonEffect: function(e) {
        0 === ma && (ra = re.scale, re.scale = .8, ga = 0, sa = e, la = 0,
          ma = 1, na = A.options.deviceRatio / A.options.scheduledRatio)
      },
      stopPoisonEffect: function() {
        sa = 0
      },
      __TILE_SCALE__: 1,
      __TILE_SIZE__: a,
      __TILE_SIZE2__: t,
      __TRANSFORM__: 0,
      wall: function(e, i, _, a, o, d) {
        i.broke > 0 ? A.drawImageHd(e.broken[i.broke - 1], Ie + i.x + _, Pe +
          i.y + a, 0, 0, 0, d) : A.drawImageHd(e.building[function(e) {
          if (e.hurt > 0 || 0 !== e.removed) return 0;
          var i, _ = e.i,
            a = e.j,
            o = ve[e.extra >> 7],
            d = o.idWall,
            t = 0,
            n = 0,
            r = 0,
            g = 0,
            s = 0;
          return _ - 1 >= 0 && (i = ai[_ - 1][a]).wallFrame === c_ && i
            .wall === d && (r = 1, t += se), _ + 1 < w && (i = ai[_ + 1]
              [a]).wallFrame === c_ && i.wall === d && (t += me, g = 1),
            a - 1 >= 0 && (i = ai[_][a - 1]).wallFrame === c_ && i
            .wall === d && (t += te, s = 1), a + 1 < l && (i = ai[_][a +
              1
            ]).wallFrame === c_ && i.wall === d && (t += ne, n = 1), n +
            r === 2 && (i = ai[_ - 1][a + 1]).wallFrame === c_ && i
            .wall === d && (t += Le), s + r === 2 && (i = ai[_ - 1][a -
              1
            ]).wallFrame === c_ && i.wall === d && (t += we), g + n ===
            2 && (i = ai[_ + 1][a + 1]).wallFrame === c_ && i.wall ===
            d && (t += ce), g + s === 2 && (i = ai[_ + 1][a - 1])
            .wallFrame === c_ && i.wall === d && (t += pe), t = Re[t],
            ai[_][a].drawFloor = o.drawFloor[t], t
        }(i)], Ie + i.x + _, Pe + i.y + a, 0, 0, 0, d)
      },
      lowWall: function(e, i, _, a, o, d) {
        var t = i.broke > 0 ? e.broken[i.broke - 1] : e.building[function(e,
            i) {
            if (e.hurt > 0 || 0 !== e.removed) return 0;
            var _ = e.i,
              a = e.j,
              o = e.extra >> 7,
              d = 0;
            switch (i) {
              case 0:
                _ + 1 < w && (t = ai[_ + 1][a]).wallFrame === c_ && t
                  .wall === o && (1 === t.rotate ? d += fe : 3 === t
                    .rotate && (d += ye)), a - 1 >= 0 && ((t = ai[_][a - 1])
                    .wallFrame !== c_ || t.wall !== o || 3 !== t.rotate &&
                    0 !== t.rotate || (d += Ae)), a + 1 < l && ((t = ai[_][
                      a + 1
                    ]).wallFrame !== c_ || t.wall !== o || 1 !== t.rotate &&
                    0 !== t.rotate || (d += Se));
                break;
              case 1:
                a - 1 >= 0 && (t = ai[_][a - 1]).wallFrame === c_ && t
                  .wall === o && (0 === t.rotate ? d += ye : 2 === t
                    .rotate && (d += fe)), _ - 1 >= 0 && ((t = ai[_ - 1][a])
                    .wallFrame !== c_ || t.wall !== o || 0 !== t.rotate &&
                    1 !== t.rotate || (d += Ae)), _ + 1 < w && ((t = ai[_ +
                      1][a]).wallFrame !== c_ || t.wall !== o || 2 !== t
                    .rotate && 1 !== t.rotate || (d += Se));
                break;
              case 2:
                _ - 1 >= 0 && (t = ai[_ - 1][a]).wallFrame === c_ && t
                  .wall === o && (1 === t.rotate ? d += ye : 3 === t
                    .rotate && (d += fe)), a - 1 >= 0 && ((t = ai[_][a - 1])
                    .wallFrame !== c_ || t.wall !== o || 3 !== t.rotate &&
                    2 !== t.rotate || (d += Se)), a + 1 < l && ((t = ai[_][
                      a + 1
                    ]).wallFrame !== c_ || t.wall !== o || 1 !== t.rotate &&
                    2 !== t.rotate || (d += Ae));
                break;
              case 3:
                var t;
                a + 1 < l && (t = ai[_][a + 1]).wallFrame === c_ && t
                  .wall === o && (0 === t.rotate ? d += fe : 2 === t
                    .rotate && (d += ye)), _ - 1 >= 0 && ((t = ai[_ - 1][a])
                    .wallFrame !== c_ || t.wall !== o || 0 !== t.rotate &&
                    3 !== t.rotate || (d += Se)), _ + 1 < w && ((t = ai[_ +
                      1][a]).wallFrame !== c_ || t.wall !== o || 2 !== t
                    .rotate && 3 !== t.rotate || (d += Ae))
            }
            return Oe[i][d]
          }(i, o)],
          n = t.img;
        if (1 === n.isLoaded) {
          var r = h * n.width / 2 * d,
            g = h * n.height / 2 * d;
          u.save(), u.translate(h * (Ie + i.x + _), h * (Pe + i.y + a)), u
            .rotate(o * oe), u.translate(e.xRotate * h - r / 2, e.yRotate *
              h - g / 2), u.drawImage(n, -e.xRotate * h, -e.yRotate * h, r,
            g), u.restore()
        } else t.img = A.loadImage(t.src, t.img)
      },
      door: function(e, i, _, o, d, n) {
        var r = i.state >> 4 & 1;
        1 === $_(e, i, 0 === i.pid ? 0 : 1) && 1 === r && (B.PLAYER
          .eInteract = e.interactclose), i.hit !== r && (i.hitMax = 500, i
          .hit = r), i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
          .hitMax - f));
        var g = e.angle;
        g *= 0 === r ? O.Ease.inOutQuad(i.hitMax / 500) : O.Ease.inOutQuad(1 -
          i.hitMax / 500);
        var s = i.broke > 0 ? e.broken[i.broke - 1] : e.building,
          l = s.img;
        if (1 === l.isLoaded) {
          var m = h * l.width / 2 * n,
            c = h * l.height / 2 * n;
          if (u.save(), u.translate(h * (Ie + i.x + _), h * (Pe + i.y + o)), u
            .rotate(d * oe), u.translate(e.xRotate * h - m / 2, e.yRotate *
              h - c / 2), u.rotate(g), u.drawImage(l, -e.xRotate * h, -e
              .yRotate * h, m, c), u.restore(), 32 == (32 & i.state) && (i
              .state -= 32, 0 === i.breath && 0 === _ && 0 === o && (i
                .breath = 600)), i.breath > 0) {
            if (1 !== bi.isLoaded) return void(bi = A.loadImage(C, bi));
            i.breath > 400 ? u.globalAlpha = O.Ease.outQuad(1 - (i.breath -
              400) / 200) : i.breath < 200 && (u.globalAlpha = O.Ease
              .outQuad(i.breath / 200));
            o = h * (i.i * a + Pe + t), _ = h * (i.j * a + Ie + t);
            var p = h * bi.width / 2,
              L = h * bi.height / 2;
            u.drawImage(bi, _ - p / 2, o - L / 2, p, L), u.globalAlpha = 1, i
              .breath = window.Math.max(0, i.breath - f)
          }
        } else s.img = A.loadImage(s.src, s.img)
      },
      workbench: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 1;
        1 === t ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === t && $_(e, i, 0), A
          .drawImageHd(e.building, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0,
            d), i.hit > 0 && ea(i, _, a)
      },
      campfire: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 1;
        1 === t ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === t && $_(e, i, 0), A
          .drawImageHd(e.building, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0,
            d), 1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(500, i
            .hitMax + f) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
            .hitMax - f)), i.hitMax > 0 && (Si[Oi++] = i), i.hit > 0 && ea(i,
            _, a)
      },
      campfireLight: function(e) {
        u.globalAlpha = O.Ease.outQuad(e.hitMax / 500), e.heal = (e.heal +
          f) % 1e3;
        for (var i = 0; i < 3; i++) {
          var _ = 1 + .15 * ((a = (e.heal + 333 * i) % 1e3) < 500 ? a / 500 :
            1 - (a - 500) / 500);
          A.drawImageHd(xe[i], Ie + e.x + Fe[i], Pe + e.y + Ne[i], 0, 0, 0, _)
        }
        var a;
        e.breath2 = (e.breath2 + f) % 5e3, _ = 1 + .15 * ((a = e.breath2) <
          2500 ? a / 2500 : 1 - (a - 2500) / 2500), A.drawImageHd(xe[3],
          Ie + e.x + Fe[3], Pe + e.y + Ne[3], 0, 0, 0, _), u.globalAlpha = 1
      },
      smelter: function(e, i, _, a, o, d) {
        var t = (o + 1) % 2,
          n = o % 2;
        ai[i.i + t][i.j + n].tile = c_, ai[i.i - t][i.j - n].tile = c_, ai[i
            .i + t][i.j + n].tilePid = i.pid, ai[i.i - t][i.j - n].tilePid = i
          .pid, ai[i.i + t][i.j + n].category = window.undefined, ai[i.i - t][
            i.j - n
          ].category = window.undefined;
        var r = i.state >> 4 & 1;
        1 === r ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === r && $_(e, i, 0),
          1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i
            .hitMax + f) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
            .hitMax - f));
        var g = 0;
        i.hitMax > 0 ? (g = O.Ease.outQuad(i.hitMax / 1e4), _ += (2 * window
            .Math.random() - 1) * g, a += (2 * window.Math.random() - 1) *
          g, A.drawImageHd(e.building[1], Ie + i.x + _, Pe + i.y + a, o *
            oe, 0, 0, d)) : A.drawImageHd(e.building[0], Ie + i.x + _, Pe +
          i.y + a, o * oe, 0, 0, d), i.hit > 0 && ea(i, _, a)
      },
      compost: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 1;
        1 === t ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === t && $_(e, i, 0),
          1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i
            .hitMax + f) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
            .hitMax - f));
        var n = 0;
        i.hitMax > 0 ? (n = O.Ease.outQuad(i.hitMax / 1e4), _ += (2 * window
            .Math.random() - 1) * n, a += (2 * window.Math.random() - 1) *
          n, A.drawImageHd(e.building[0], Ie + i.x + _, Pe + i.y + a, o *
            oe, 0, 0, d)) : A.drawImageHd(e.building[1], Ie + i.x + _, Pe +
          i.y + a, o * oe, 0, 0, d), i.hit > 0 && ea(i, _, a)
      },
      agitator: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 1;
        1 === t ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === t && $_(e, i, 0),
          1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i
            .hitMax + f) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
            .hitMax - f));
        var n = 0;
        i.hitMax > 0 ? (n = O.Ease.outQuad(i.hitMax / 1e4), i.heal += n * f /
          300, A.drawImageHd(e.building[1], Ie + i.x + _, Pe + i.y + a, o *
            oe, 0, 0, d), A.drawImageHd(e.building[2], Ie + i.x + _ + e
            .spine[o][0], Pe + i.y + a + e.spine[o][1], o * oe + i.heal, 0,
            0, d), A.drawImageHd(e.building[3], Ie + i.x + _, Pe + i.y + a,
            o * oe, 0, 0, d)) : A.drawImageHd(e.building[0], Ie + i.x + _,
          Pe + i.y + a, o * oe, 0, 0, d), i.hit > 0 && ea(i, _, a)
      },
      extractor: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 1;
        1 === t ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === t && $_(e, i, 0),
          1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i
            .hitMax + f) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
            .hitMax - f));
        var n = 0;
        i.hitMax > 0 ? (n = O.Ease.outQuad(i.hitMax / 1e4), _ += (2 * window
            .Math.random() - 1) * n, a += (2 * window.Math.random() - 1) *
          n, i.heal += n * f / 300, A.drawImageHd(e.building[1], Ie + i.x +
            _ + e.spine[o][0], Pe + i.y + a + e.spine[o][1], o * oe + i
            .heal, 0, 0, d), A.drawImageHd(e.building[0], Ie + i.x + _, Pe +
            i.y + a, o * oe, 0, 0, d)) : A.drawImageHd(e.building[2], Ie + i
          .x + _, Pe + i.y + a, o * oe, 0, 0, d), i.hit > 0 && ea(i, _, a)
      },
      workbench2: function(e, i, _, a, o, d) {
        var t = (o + 1) % 2,
          n = o % 2;
        ai[i.i + t][i.j + n].tile = c_, ai[i.i - t][i.j - n].tile = c_, ai[i
            .i + t][i.j + n].tilePid = i.pid, ai[i.i - t][i.j - n].tilePid = i
          .pid, ai[i.i + t][i.j + n].category = window.undefined, ai[i.i - t][
            i.j - n
          ].category = window.undefined, $_(e, i, 0), A.drawImageHd(e
            .building, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)
      },
      teslaBench: function(e, i, _, a, o, d) {
        var t = (o + 1) % 2,
          n = o % 2;
        ai[i.i + t][i.j + n].tile = c_, ai[i.i - t][i.j - n].tile = c_, ai[i
            .i + t][i.j + n].tilePid = i.pid, ai[i.i - t][i.j - n].tilePid = i
          .pid, ai[i.i + t][i.j + n].category = window.undefined, ai[i.i - t][
            i.j - n
          ].category = window.undefined;
        var r = i.state >> 4 & 1;
        1 === r ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
          .hit = window.Math.max(0, i.hit - f)), 0 === r && $_(e, i, 0);
        var g = i.state >> 5 & 1;
        i.hitMax = 1 === g ? 1 + (i.hitMax + f % 3e5) : 0, i.hitMax > 0 ? (A
            .drawImageHd(e.building[1 + window.Math.floor(i.hitMax / 500) %
              3], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d), 0 !== (g = e
              .light[window.Math.floor(i.hitMax / 50) % e.light.length]) && A
            .drawImageHd(g, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)) : A
          .drawImageHd(e.building[0], Ie + i.x + _, Pe + i.y + a, o * oe, 0,
            0, d), i.hit > 0 && ea(i, _, a)
      },
      orangeSeed: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 15;
        i.breath = (i.breath + f) % 1e3, d = 1 + .03 * (i.breath < 500 ? i
          .breath / 500 : 1 - (i.breath - 500) / 500), A.drawImageHd(e
          .building[t], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)
      },
      treeSeed: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 15;
        i.breath = (i.breath + f) % 1e3, d = 1 + .01 * (i.breath < 500 ? i
          .breath / 500 : 1 - (i.breath - 500) / 500), A.drawImageHd(e
          .building[t], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)
      },
      groundFloor: function(e, i, _, a, o, d) {
        var t = ai[i.i][i.j];
        t.tile = 0, t.ground = c_, t.pid = i.pid, t.wallFrame === c_ && 1 !==
          t.drawFloor || (i.broke > 0 ? A.drawImageHd(e.broken[i.broke - 1],
            Ie + i.x + _, Pe + i.y + a, 0, 0, 0, d) : A.drawImageHd(e
            .building[function(e) {
              if (e.hurt > 0 || 0 !== e.removed) return 0;
              var i = e.i,
                _ = e.j,
                a = (e.extra, 0),
                o = 0,
                d = 0,
                t = 0,
                n = 0;
              return i - 1 >= 0 && ai[i - 1][_].floorFrame === c_ && (d =
                  1, a += se), i + 1 < w && ai[i + 1][_].floorFrame ===
                c_ && (a += me, t = 1), _ - 1 >= 0 && ai[i][_ - 1]
                .floorFrame === c_ && (a += te, n = 1), _ + 1 < l && ai[i]
                [_ + 1].floorFrame === c_ && (a += ne, o = 1), o + d ===
                2 && ai[i - 1][_ + 1].floorFrame === c_ && (a += Le), n +
                d === 2 && ai[i - 1][_ - 1].floorFrame === c_ && (a +=
                we), t + o === 2 && ai[i + 1][_ + 1].floorFrame === c_ &&
                (a += ce), t + n === 2 && ai[i + 1][_ - 1].floorFrame ===
                c_ && (a += pe), Re[a]
            }(i)], Ie + i.x, Pe + i.y, 0, 0, 0, d))
      },
      defaultBuilding: function(e, i, _, a, o, d) {
        A.drawImageHd(e.building, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)
      },
      hiddenBuilding: function(e, i, _, a, o, d) {
        A.drawImageHd(e.building, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)
      },
      breakable: function(e, i, _, a, o, d) {
        A.drawImageHd(e.building[i.broke], Ie + i.x + _, Pe + i.y + a, o * oe,
          0, 0, d)
      },
      furniture: function(e, i, _, a, o, d) {
        var t = i.state >> 4 & 1,
          n = ve[e.id].subtype[i.subtype];
        1 === t ? i.hit = window.Math.min(500, i.hit + f) : i.hit > 0 && (i
            .hit = window.Math.max(0, i.hit - f)), 0 === t && 1 === n
          .usable && 1 === $_(n, i, 0) && (B.PLAYER.eInteract = pi), A
          .drawImageHd(n.building, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0,
            d), i.hit > 0 && ea(i, _, a)
      },
      road: function(e, i, _, a, o, d) {
        var t = ve[e.id].subtype[i.subtype];
        A.drawImageHd(t.building, Ie + i.x, Pe + i.y, 0, 0, 0, d)
      },
      landmine: function(e, i, _, a, o, d) {
        var t = 0;
        (i.pid === B.PLAYER.id || -1 !== B.PLAYER.team && B.PLAYER.team === B
          .players[i.pid].team && B.players[i.pid].teamUid === B.teams[B
            .PLAYER.team].uid || S.fastDist(Ve, Be, i.x, i.y) < 52e3) && (t =
          1), 1 === t ? (i.breath = window.Math.min(300, i.breath + f), u
          .globalAlpha = O.Ease.inOutQuad(i.breath / 300), A.drawImageHd(e
            .building[i.id % 3], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d
            ), u.globalAlpha = .2, A.drawImageHd(xe[5], Ie + i.x + _, Pe + i
            .y + a, 0, 0, 0, .6), u.globalAlpha = 1) : 0 === t && (i
          .breath = window.Math.min(300, i.breath + f), u.globalAlpha = O
          .Ease.inOutQuad(i.breath / 300), A.drawImageHd(e.building[i.id %
            3], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d), u
          .globalAlpha = .2, A.drawImageHd(xe[4], Ie + i.x + _, Pe + i.y +
            a, 0, 0, 0, .6), u.globalAlpha = 1)
      },
      dynamite: function(e, i, _, a, o, d) {
        i.breath = (i.breath + f) % 500;
        var t = i.breath / 500,
          n = .95 + .3 * O.Ease.inOutQuad(t);
        u.globalAlpha = 1 - t, A.drawImageHd(e.building[1], Ie + i.x + _, Pe +
          i.y + a, o * oe, 0, 0, n), u.globalAlpha = 1, A.drawImageHd(e
          .building[0], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d)
      },
      spike: function(e, i, _, a, o, d) {
        var t = 0,
          n = 1;
        16 == (16 & i.state) && (n = 0), (i.pid === B.PLAYER.id || -1 !== B
            .PLAYER.team && B.PLAYER.team === B.players[i.pid].team && B
            .players[i.pid].teamUid === B.teams[B.PLAYER.team].uid || S
            .fastDist(Ve, Be, i.x, i.y) < 52e3) && (t = 1), 0 === n ? (0 === i
            .hurt2 && q_(i, e.particles, e.particlesDist, 5), i.hurt2 < 300 &&
            (_ += 6 * window.Math.random() - 4, a += 6 * window.Math
            .random() - 4, i.hurt2 += f), i.breath > 0 && (i.breath = window
              .Math.max(0, i.breath - f / 5), u.globalAlpha = O.Ease
              .inOutQuad(i.breath / 300), A.drawImageHd(e.hidden[i.id % 3],
                Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d), u.globalAlpha =
              1), A.drawImageHd(e.deployed[i.id % 3], Ie + i.x + _, Pe + i.y +
              a, o * oe, 0, 0, d)) : 1 === t ? 300 === i.breath ? A
          .drawImageHd(e.hidden[i.id % 3], Ie + i.x + _, Pe + i.y + a, o * oe,
            0, 0, d) : (i.breath = window.Math.min(300, i.breath + f), u
            .globalAlpha = O.Ease.inOutQuad(i.breath / 300), A.drawImageHd(e
              .hidden[i.id % 3], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d),
            u.globalAlpha = 1) : 0 === t && i.breath > 0 && (i.breath = window
            .Math.max(0, i.breath - f / 5), u.globalAlpha = O.Ease.inOutQuad(i
              .breath / 300), A.drawImageHd(e.hidden[i.id % 3], Ie + i.x + _,
              Pe + i.y + a, o * oe, 0, 0, d), u.globalAlpha = 1)
      },
      ghoul: function(e, i, _, a, o) {
        if (2 === (254 & i.state) && (i.state &= 65281, i.hit <= 0)) {
          i.hit = e.actionDelay, i.hitMax = e.actionDelay;
          var d = window.Math.floor(3 * window.Math.random());
          J.playFx(J._fx.shot[0][d], .5, S.dist(B.PLAYER.x, B.PLAYER.y, i.x, i
            .y) / 3.5, 0)
        }
        var t = 0,
          n = 0,
          r = 0,
          g = 0;
        i.hit > 0 ? (i.hit = window.Math.max(0, i.hit - f), i.hit = window
          .Math.min(i.hit, e.actionDelay), c = i.hit > e
          .actionImpactClient ? 1 - (i.hit - e.actionImpactClient) / (e
            .actionDelay - e.actionImpactClient) : i.hit / e
          .actionImpactClient, t = i.hurt2 * O.Ease.inOutQuad(c) * .55, g =
          6 * c, 1 === i.hurt2 ? n = 25 * c : r = 25 * c, 0 === i.hit && (i
            .hurt2 *= -1)) : S.fastDist(i.x, i.y, i.nx, i.ny) < 1 ? (i
          .breath = (i.breath + f) % 1500, 0 !== i.breath2 && (i.breath2 <
            750 && (i.breath2 = 1500 - i.breath2), i.breath2 = i.breath2 +
            f, i.breath2 > 1500 && (i.breath2 = 0))) : (i.breath2 = (i
          .breath2 + f) % 1500, i.breath2 > 1500 && (i.heal *= -1, i
          .breath2 = i.breath2 % 1500), 0 !== i.breath && (i.breath <
          750 && (i.breath = 1500 - i.breath), i.breath = i.breath + f, i
          .breath > 1500 && (i.breath = 0)));
        var s = e.breath * (i.breath < 750 ? i.breath / 750 : 1 - (i.breath -
            750) / 750),
          l = e.armMove * (i.breath2 < 750 ? i.breath2 / 750 : 1 - (i
            .breath2 - 750) / 750);
        if (A.drawImageHd(e.rightArm, _, a, e.rightArm.angle + i.angle + s +
            t, e.rightArm.x + l * i.heal + r, e.rightArm.y, o), A.drawImageHd(
            e.leftArm, _, a, -e.leftArm.angle + i.angle - s + t, e.leftArm.x -
            l * i.heal + n, e.leftArm.y, o), i.hurt > 0) {
          var m = 1;
          i.hurt -= f;
          var c = 0;
          i.hurt > 150 ? c = O.Ease.inQuad((300 - i.hurt) / 300) : m += .2 * (
              1 - (c = O.Ease.outQuad(i.hurt / 150))), _ += window.Math.cos(i
              .hurtAngle) * c * 10, a += window.Math.sin(i.hurtAngle) * c *
            10, u.globalAlpha = window.Math.min(1, window.Math.max(0, c)), A
            .drawImageHd(e.hurt, _, a, i.angle + t / 1.5, g, 0, m), u
            .globalAlpha = 1
        }
        A.drawImageHd(e.head, _, a, i.angle + t / 1.5, g, 0, o)
      },
      construction: function(e, i, _, a, o, d) {
        A.drawImageHd(e.builder, Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, 1);
        var t = i.state >> 4 & 15;
        if (i.breath2 !== t && (i.breath2 = t, i.breath = 0), i.breath = i
          .breath + f, i.heal = (i.heal + f) % 1e3, d = 1 + .03 * (i.heal <
            500 ? i.heal / 500 : 1 - (i.heal - 500) / 500), 0 === t) u
          .globalAlpha = O.Ease.inOutQuad(i.breath / e.evolve), A.drawImageHd(
            e.building[0], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d), u
          .globalAlpha = 1;
        else if (i.breath < e.evolve) {
          var n = O.Ease.inOutQuad(i.breath / e.evolve);
          u.globalAlpha = 1 - n, A.drawImageHd(e.building[t - 1], Ie + i.x +
              _, Pe + i.y + a, o * oe, 0, 0, d), u.globalAlpha = n, A
            .drawImageHd(e.building[t], Ie + i.x + _, Pe + i.y + a, o * oe, 0,
              0, d), u.globalAlpha = 1
        } else A.drawImageHd(e.building[t], Ie + i.x + _, Pe + i.y + a, o *
          oe, 0, 0, d)
      },
      lamp: function(e, i, _, a, o, d) {
        $_(e, i, 0), 1 === (i.state >> 7 & 1) ? i.hitMax = window.Math.min(
          500, i.hitMax + f) : i.hitMax > 0 && (i.hitMax = window.Math.max(
          0, i.hitMax - f)), i.hitMax > 0 ? (Si[Oi++] = i, A.drawImageHd(e
          .buildingOn[i.state >> 4 & 7], Ie + i.x + _, Pe + i.y + a, o *
          oe, 0, 0, d)) : A.drawImageHd(e.building, Ie + i.x + _, Pe + i.y +
          a, o * oe, 0, 0, d)
      },
      lampLight: function(e) {
        var i = ve[e.extra >> 7];
        u.globalAlpha = O.Ease.outQuad(e.hitMax / 500), e.breath2 = (e
          .breath2 + f) % 5e3;
        var _ = e.breath2,
          a = 1 + .09 * (_ < 2500 ? _ / 2500 : 1 - (_ - 2500) / 2500);
        A.drawImageHd(i.buildingTop[e.state >> 4 & 7], Ie + e.x, Pe + e.y, 0,
          0, 0, a), u.globalAlpha = 1
      },
      switchOff: function(e, i, _, a, o, d) {
        $_(e, i, 0), A.drawImageHd(e.building[i.state >> 4 & 1], Ie + i.x + _,
            Pe + i.y + a, o * oe, 0, 0, d), a = h * (100 * i.i + Pe + 50), _ =
          h * (100 * i.j + Ie + 50), bi.width, bi.height
      },
      timerGate: function(e, i, _, a, o, d) {
        $_(e, i, 0), A.drawImageHd(e.building[i.state >> 4 & 3], Ie + i.x + _,
          Pe + i.y + a, o * oe, 0, 0, d)
      },
      automaticDoor: function(e, i, _, a, o, d) {
        u.globalAlpha = 1;
        var t = i.state >> 7 & 1;
        1 === t ? i.hitMax = window.Math.min(500, i.hitMax + f) : i.hitMax >
          0 && (i.hitMax = window.Math.max(0, i.hitMax - f)), i.hitMax > 0 &&
          500 !== i.hitMax ? (u.globalAlpha = O.Ease.outQuad(i.hitMax / 500),
            A.drawImageHd(e.building[1][i.broke], Ie + i.x + _, Pe + i.y + a,
              o * oe, 0, 0, d), u.globalAlpha = O.Ease.outQuad(1 - i.hitMax /
              500), A.drawImageHd(e.building[0][i.broke], Ie + i.x + _, Pe + i
              .y + a, o * oe, 0, 0, d), u.globalAlpha = 1) : A.drawImageHd(e
            .building[t][i.broke], Ie + i.x + _, Pe + i.y + a, o * oe, 0, 0, d
            )
      },
      battleRoyale: function() {
        if (8 === B.PLAYER.toxicStep) {
          o_.clearRect(0, 0, M, I), n_.clearRect(0, 0, M, I);
          for (var e = 0; e < 8; e++)
            for (var i = 0; i < 8; i++) {
              7 === B.PLAYER.toxicMap[e][i] ? o_.drawImage(Li, 2 + i * P, e *
                P + 1, Li.wh, Li.h2) : o_.drawImage(Ei, 2 + i * P, e * P +
                1, Li.wh, Li.h2)
            }
        } else {
          o_.drawImage(t_, 0, 0), n_.clearRect(0, 0, M, I);
          for (var _ = 0; _ < 12; _++) {
            var a = B.PLAYER.lastAreas[_];
            e = a[0], i = a[1]; - 1 !== e && n_.drawImage(Li, 2 + i * P, e *
              P + 1, Li.wh, Li.h2)
          }
        }
      }
    }
  }(),
  ge = (ae = 0, oe = 0, te = [], ne = {
    i: 0,
    j: 0
  }, {
    seed: 0,
    init: function(e, i, _, a) {
      window.console.time("Town generation"),
        function(e, i, _) {
          new G.Random(e), ae = i, oe = _, ge.width = i, ge.height = _,
            de = [], ge.grid = de, te = [], ge.roads = te, ne.i = 0, ne.j =
            0
        }(e, i, _),
        function() {
          for (var e = 0; e < oe; e++) {
            de[e] = [];
            for (var i = 0; i < ae; i++) de[e][i] = 0
          }
        }(), a !== window.undefined && a(), window.console.timeEnd(
          "Town generation")
    },
    grid: de = [],
    roads: null,
    width: 0,
    height: 0
  });
COUNTER_ENTITIE = 0, __ENTITIE_PLAYER__ = COUNTER_ENTITIE++, __ENTITIE_LOOT__ =
  COUNTER_ENTITIE++, __ENTITIE_BULLET__ = COUNTER_ENTITIE++,
  __ENTITIE_BUILD_TOP__ = COUNTER_ENTITIE++, __ENTITIE_BUILD_DOWN__ =
  COUNTER_ENTITIE++, __ENTITIE_BUILD_GROUND__ = COUNTER_ENTITIE++,
  __ENTITIE_BUILD_GROUND2__ = COUNTER_ENTITIE++, __ENTITIE_PARTICLES__ =
  COUNTER_ENTITIE++, __ENTITIE_RESOURCES_TOP__ = COUNTER_ENTITIE++,
  __ENTITIE_RESOURCES_DOWN__ = COUNTER_ENTITIE++, __ENTITIE_RESOURCES_MID__ =
  COUNTER_ENTITIE++, __ENTITIE_RESOURCES_STOP__ = COUNTER_ENTITIE++,
  __ENTITIE_EXPLOSION__ = COUNTER_ENTITIE++, __ENTITIE_AI__ = COUNTER_ENTITIE++,
  k[__ENTITIE_PLAYER__].update = function(e, i, _) {
    if (S.dist(e.x, e.y, i, _) > 66) {
      e.rx = i, e.ry = _;
      var a = S.angle(e.rx, e.ry, e.nx, e.ny);
      e.angleX = window.Math.cos(a), e.angleY = window.Math.sin(a)
    }
    e.speed = (e.state >> 8) / 100
  }, k[__ENTITIE_PLAYER__].init = function(e) {
    for (var i = B.players[e.pid], _ = 0; _ < i.runEffect.length; _++) i
      .runEffect[_].delay = 0;
    for (_ = 0; _ < i.cartridges.length; _++) i.cartridges[_].delay = 0;
    e.angle = e.nangle, i.ghoul > 0 && (e.heal = 1, e.hurt2 = 1)
  }, k[__ENTITIE_AI__].update = k[__ENTITIE_PLAYER__].update, k[__ENTITIE_AI__]
  .init = function(e) {
    e.heal = 1, e.hurt2 = 1, e.angle = e.nangle, e.speed = (e.state >> 8) / 100
  }, k[__ENTITIE_LOOT__].init = function(e) {
    e.x !== e.rx || e.y !== e.ry ? (e.angle = S.angle(e.x, e.y, e.rx, e.ry), e
      .nangle = e.angle) : (e.angle += window.Math.PI / 2, e.nangle = e.angle)
  }, k[__ENTITIE_LOOT__].update = function(e, i, _) {
    e.hit = e.state >> 8
  }, k[__ENTITIE_BULLET__].init = function(e) {
    e.hurtAngle = S.angle(e.rx, e.ry, e.nx, e.ny);
    var i = e.extra;
    switch (e.speed = (e.state >> 8) / 100, i) {
      case 4:
      case 8:
        null !== (_ = D.findEntitie(__ENTITIE_PLAYER__, e.pid, 0)) && (_.extra =
          255 & _.extra, _.hit = 0);
        break;
      case 3:
        var _;
        null !== (_ = D.findEntitie(__ENTITIE_PLAYER__, e.pid, 0)) && (_.hit =
          0)
    }
  }, k[__ENTITIE_BULLET__].update = function(e, i, _) {
    var a = S.angle(e.x, e.y, e.nx, e.ny),
      o = 2 * window.Math.PI,
      d = ((a + o) % o - (e.hurtAngle + o) % o) % o;
    window.Math.abs(d) > .1 && (e.rx = e.x, e.ry = e.y, e.nx = e.x, e.ny = e.y)
  }, k[__ENTITIE_RESOURCES_TOP__].update = function() {}, k[
    __ENTITIE_RESOURCES_DOWN__].update = k[__ENTITIE_RESOURCES_TOP__].update, k[
    __ENTITIE_RESOURCES_MID__].update = k[__ENTITIE_RESOURCES_TOP__].update, k[
    __ENTITIE_RESOURCES_STOP__].update = k[__ENTITIE_RESOURCES_TOP__].update, k[
    __ENTITIE_BUILD_TOP__].update = function(e, i, _) {
    var a = e.extra >> 5 & 3;
    e.subtype = e.state >> 5 & 63, e.broke = e.state >> 14, e.state = 16383 & e
      .state;
    var o = ve[e.extra >> 7];
    e.x = window.Math.floor(i / re.__TILE_SIZE__) * re.__TILE_SIZE__ + re
      .__TILE_SIZE2__ + o.xCenter[a], e.y = window.Math.floor(_ / re
        .__TILE_SIZE__) * re.__TILE_SIZE__ + re.__TILE_SIZE2__ + o.yCenter[a], e
      .rx = e.x, e.ry = e.y, e.nx = e.x, e.ny = e.y, e.px = e.x, e.py = e.y,
      1 === o.door && 16 == (16 & e.state) && (e.px = window.Math.floor(e.j + o
          .jMove[a]) * re.__TILE_SIZE__ + re.__TILE_SIZE2__ + o.xCenter[(a +
          1) % 4], e.py = window.Math.floor(e.i + o.iMove[a]) * re
        .__TILE_SIZE__ + re.__TILE_SIZE2__ + o.yCenter[(a + 1) % 4])
  }, k[__ENTITIE_BUILD_DOWN__].update = k[__ENTITIE_BUILD_TOP__].update, k[
    __ENTITIE_BUILD_GROUND__].update = k[__ENTITIE_BUILD_TOP__].update, k[
    __ENTITIE_BUILD_GROUND2__].update = k[__ENTITIE_BUILD_TOP__].update;
try {
  re.shake
} catch (si) {
  re = {}
}
var se = 0,
  le = {
    __PLAYER__: se++,
    __FIRE__: se++,
    __WORKBENCH__: se++,
    __BBQ__: se++,
    __WEAVING__: se++,
    __WORKBENCH2__: se++,
    __SMELTER__: se++,
    __TESLA__: se++,
    __COMPOST__: se++,
    __AGITATOR__: se++,
    __EXTRACTOR__: se++,
    __WELDING_MACHINE__: se++
  };
se = 0;
var me = {
    __NO_SOUND__: se++,
    __WOOD_IMPACT__: se++,
    __STONE_IMPACT__: se++,
    __STONE_IMPACT_2__: se++,
    __STEEL_IMPACT__: se++,
    __WOOD_DESTROY__: se++,
    __STONE_DESTROY__: se++,
    __STEEL_DESTROY__: se++,
    __PILLOW_IMPACT__: se++,
    __PILLOW_DESTROY__: se++
  },
  ce = [];
ce[me.__WOOD_IMPACT__] = "audio/wood-impact.mp3", ce[me.__STONE_IMPACT__] =
  "audio/stone-impact2.mp3", ce[me.__STONE_IMPACT_2__] =
  "audio/stone-impact.mp3", ce[me.__STEEL_IMPACT__] = "audio/metal-impact2.mp3",
  ce[me.__PILLOW_IMPACT__] = "audio/pillow-impact.mp3", ce[me
  .__WOOD_DESTROY__] = "audio/wood-destroy3.mp3", ce[me.__STONE_DESTROY__] =
  "audio/stone-destroy.mp3", ce[me.__STEEL_DESTROY__] =
  "audio/metal-destroy2.mp3", ce[me.__PILLOW_DESTROY__] =
  "audio/pillow-destroy.mp3";
var ue = ce.length;
se = 0;
var pe = {
  __NO__: se++,
  __SEED__: se++,
  __SEED_RESOURCE__: se++,
  __LOGIC__: se++,
  __AI_CONSTRUCTOR__: se++
};
se = 0;
var Le = {
  __NORMAL_GHOUL__: se++,
  __FAST_GHOUL__: se++,
  __EXPLOSIVE_GHOUL__: se++,
  __RADIOACTIVE_GHOUL__: se++,
  __ARMORED_GHOUL__: se++,
  __PUMPKIN_GHOUL__: se++,
  __LAPABOT_REPAIR__: se++,
  __HAL_BOT__: se++,
  __TESLA_BOT__: se++
};
se = 0;
var Ee = {
  __SKILL__: se++,
  __SURVIVAL__: se++,
  __CLOTHE__: se++,
  __BUILDING__: se++,
  __TOOL__: se++,
  __WEAPON__: se++,
  __PLANT__: se++,
  __DRUG__: se++,
  __MINERAL__: se++,
  __LOGIC__: se++
};
se = 1;
var we = {
  __WOOD__: se++,
  __STONE__: se++,
  __STEEL__: se++,
  __ANIMAL_FAT__: se++,
  __ANIMAL_TENDON__: se++,
  __STRING__: se++,
  __LEATHER_BOAR__: se++,
  __SHAPED_METAL__: se++,
  __RAW_STEAK__: se++,
  __COOKED_STEAK__: se++,
  __ROTTEN_STEAK__: se++,
  __ORANGE__: se++,
  __ROTTEN_ORANGE__: se++,
  __SEED_ORANGE__: se++,
  __HACHET__: se++,
  __STONE_PICKAXE__: se++,
  __STEEL_PICKAXE__: se++,
  __STONE_AXE__: se++,
  __WORKBENCH__: se++,
  __WOOD_SPEAR__: se++,
  __WOOD_BOW__: se++,
  __9MM__: se++,
  __DESERT_EAGLE__: se++,
  __SHOTGUN__: se++,
  __AK47__: se++,
  __SNIPER__: se++,
  __WOOD_WALL__: se++,
  __STONE_WALL__: se++,
  __STEEL_WALL__: se++,
  __WOOD_DOOR__: se++,
  __STONE_DOOR__: se++,
  __STEEL_DOOR__: se++,
  __CAMPFIRE__: se++,
  __BULLET_9MM__: se++,
  __BULLET_SHOTGUN__: se++,
  __BULLET_SNIPER__: se++,
  __MEDIKIT__: se++,
  __BANDAGE__: se++,
  __SODA__: se++,
  __MP5__: se++,
  __HEADSCARF__: se++,
  __CHAPKA__: se++,
  __WINTER_COAT__: se++,
  __GAZ_MASK__: se++,
  __GAZ_PROTECTION__: se++,
  __RADIATION_SUIT__: se++,
  __WOOD_ARROW__: se++,
  __CAMPFIRE_BBQ__: se++,
  __SMELTER__: se++,
  __WOOD_BIGDOOR__: se++,
  __STONE_BIGDOOR__: se++,
  __STEEL_BIGDOOR__: se++,
  __SULFUR__: se++,
  __SHAPED_URANIUM__: se++,
  __WORKBENCH2__: se++,
  __URANIUM__: se++,
  __WEAVING__: se++,
  __GASOLINE__: se++,
  __SULFUR_PICKAXE__: se++,
  __CHEST__: se++,
  __FRIDGE__: se++,
  __WOOD_FLOOR__: se++,
  __HAMMER__: se++,
  __SLEEPING_BAG__: se++,
  __REPAIR_HAMMER__: se++,
  __NAILS__: se++,
  __WOODLIGHT_FLOOR__: se++,
  __WOOD_SMALLWALL__: se++,
  __STONE_SMALLWALL__: se++,
  __STEEL_SMALLWALL__: se++,
  __FURNITURE__: se++,
  __TOMATO_SOUP__: se++,
  __SYRINGE__: se++,
  __CHEMICAL_COMPONENT__: se++,
  __RADAWAY__: se++,
  __SEED_TOMATO__: se++,
  __TOMATO__: se++,
  __ROTTEN_TOMATO__: se++,
  __CAN__: se++,
  __WOOD_CROSSBOW__: se++,
  __WOOD_CROSSARROW__: se++,
  __NAIL_GUN__: se++,
  __SAWED_OFF_SHOTGUN__: se++,
  __STONE_FLOOR__: se++,
  __TILING_FLOOR__: se++,
  __ROAD__: se++,
  __CRISPS__: se++,
  __ROTTEN_CRISPS__: se++,
  __ELECTRONICS__: se++,
  __JUNK__: se++,
  __WIRE__: se++,
  __ENERGY_CELLS__: se++,
  __LASER_PISTOL__: se++,
  __TESLA__: se++,
  __ALLOYS__: se++,
  __SULFUR_AXE__: se++,
  __LANDMINE__: se++,
  __DYNAMITE__: se++,
  __C4__: se++,
  __C4_TRIGGER__: se++,
  __COMPOST__: se++,
  __ARMOR_PHYSIC_1__: se++,
  __ARMOR_PHYSIC_2__: se++,
  __ARMOR_PHYSIC_3__: se++,
  __ARMOR_FIRE_1__: se++,
  __ARMOR_FIRE_2__: se++,
  __ARMOR_FIRE_3__: se++,
  __ARMOR_DEMINER__: se++,
  __ARMOR_TESLA_1__: se++,
  __ARMOR_TESLA_2__: se++,
  __WOOD_SPIKE__: se++,
  __LASER_SUBMACHINE__: se++,
  __GRENADE__: se++,
  __SUPER_HAMMER__: se++,
  __GHOUL_BLOOD__: se++,
  __CAMOUFLAGE_GEAR__: se++,
  __AGITATOR__: se++,
  __GHOUL_DRUG__: se++,
  __MUSHROOM1__: se++,
  __MUSHROOM2__: se++,
  __MUSHROOM3__: se++,
  __ROTTEN_MUSHROOM1__: se++,
  __ROTTEN_MUSHROOM2__: se++,
  __ROTTEN_MUSHROOM3__: se++,
  __LAPADONE__: se++,
  __LAPABOT_REPAIR__: se++,
  __SMALL_WIRE__: se++,
  __PUMPKIN__: se++,
  __ROTTEN_PUMPKIN__: se++,
  __SEED_GHOUL__: se++,
  __EXTRACTOR__: se++,
  __ANTIDOTE__: se++,
  __ANTIDOTE_FLOWER__: se++,
  __SEED_TREE__: se++,
  __ACORN__: se++,
  __ROTTEN_ACORN__: se++,
  __LASER_SNIPER__: se++,
  __HAL_BOT__: se++,
  __TESLA_BOT__: se++,
  __CABLE0__: se++,
  __CABLE1__: se++,
  __CABLE2__: se++,
  __CABLE3__: se++,
  __SWITCH__: se++,
  __GATE_OR__: se++,
  __GATE_AND__: se++,
  __GATE_NOT__: se++,
  __LAMP__: se++,
  __CABLE_WALL__: se++,
  __AUTOMATIC_DOOR__: se++,
  __PLATFORM__: se++,
  __STONE_CAVE__: se++,
  __BUNKER_WALL__: se++,
  __GOLD_FLOOR__: se++,
  __RED_FLOOR__: se++,
  __WELDING_MACHINE__: se++,
  __CABLE4__: se++,
  __GATE_TIMER__: se++,
  __GATE_XOR__: se++,
  __VISION_1__: se++,
  __VISION_2__: se++,
  __VISION_3__: se++,
  __BUILDER_1__: se++,
  __BUILDER_2__: se++,
  __INV_1__: se++,
  __INV_2__: se++,
  __INV_3__: se++,
  __INV_4__: se++,
  __INV_5__: se++,
  __FEATHERWEIGHT__: se++
};
se = 0;
var fe = {
  __SMALL_WOOD__: se++,
  __MEDIUM_WOOD__: se++,
  __BIG_WOOD__: se++,
  __SMALL_STONE__: se++,
  __MEDIUM_STONE__: se++,
  __BIG_STONE__: se++,
  __STEEL__: se++,
  __ANIMAL_FAT__: se++,
  __ANIMAL_TENDON__: se++,
  __STRING__: se++,
  __LEATHER_BOAR__: se++,
  __SHAPED_METAL__: se++,
  __RAW_STEAK__: se++,
  __COOKED_STEAK__: se++,
  __ROTTEN_STEAK__: se++,
  __ORANGE__: se++,
  __ROTTEN_ORANGE__: se++,
  __SEED_ORANGE__: se++,
  __HACHET__: se++,
  __STONE_PICKAXE__: se++,
  __STEEL_PICKAXE__: se++,
  __STONE_AXE__: se++,
  __WORKBENCH__: se++,
  __WOOD_SPEAR__: se++,
  __WOOD_BOW__: se++,
  __9MM__: se++,
  __DESERT_EAGLE__: se++,
  __SHOTGUN__: se++,
  __AK47__: se++,
  __SNIPER__: se++,
  __WOOD_WALL__: se++,
  __STONE_WALL__: se++,
  __STEEL_WALL__: se++,
  __WOOD_DOOR__: se++,
  __STONE_DOOR__: se++,
  __STEEL_DOOR__: se++,
  __CAMPFIRE__: se++,
  __BULLET_9MM__: se++,
  __BULLET_SHOTGUN__: se++,
  __BULLET_SNIPER__: se++,
  __MEDIKIT__: se++,
  __BANDAGE__: se++,
  __SODA__: se++,
  __MP5__: se++,
  __HEADSCARF__: se++,
  __CHAPKA__: se++,
  __WINTER_COAT__: se++,
  __GAZ_MASK__: se++,
  __GAZ_PROTECTION__: se++,
  __RADIATION_SUIT__: se++,
  __WOOD_ARROW__: se++,
  __CAMPFIRE_BBQ__: se++,
  __SMELTER__: se++,
  __WOOD_BIGDOOR__: se++,
  __STONE_BIGDOOR__: se++,
  __STEEL_BIGDOOR__: se++,
  __SULFUR__: se++,
  __SHAPED_URANIUM__: se++,
  __WORKBENCH2__: se++,
  __URANIUM__: se++,
  __WEAVING__: se++,
  __GASOLINE__: se++,
  __SULFUR_PICKAXE__: se++,
  __CHEST__: se++,
  __FRIDGE__: se++,
  __WOOD_FLOOR__: se++,
  __HAMMER__: se++,
  __SLEEPING_BAG__: se++,
  __REPAIR_HAMMER__: se++,
  __NAILS__: se++,
  __WOODLIGHT_FLOOR__: se++,
  __WOOD_SMALLWALL__: se++,
  __STONE_SMALLWALL__: se++,
  __STEEL_SMALLWALL__: se++,
  __TOMATO_SOUP__: se++,
  __SYRINGE__: se++,
  __CHEMICAL_COMPONENT__: se++,
  __RADAWAY__: se++,
  __SEED_TOMATO__: se++,
  __TOMATO__: se++,
  __ROTTEN_TOMATO__: se++,
  __CAN__: se++,
  __WOOD_CROSSBOW__: se++,
  __WOOD_CROSSARROW__: se++,
  __NAIL_GUN__: se++,
  __SAWED_OFF_SHOTGUN__: se++,
  __STONE_FLOOR__: se++,
  __TILING_FLOOR__: se++,
  __CRISPS__: se++,
  __ROTTEN_CRISPS__: se++,
  __ELECTRONICS__: se++,
  __JUNK__: se++,
  __WIRE__: se++,
  __ENERGY_CELLS__: se++,
  __LASER_PISTOL__: se++,
  __TESLA__: se++,
  __ALLOYS__: se++,
  __SULFUR_AXE__: se++,
  __LANDMINE__: se++,
  __DYNAMITE__: se++,
  __C4__: se++,
  __C4_TRIGGER__: se++,
  __COMPOST__: se++,
  __ARMOR_PHYSIC_1__: se++,
  __ARMOR_PHYSIC_2__: se++,
  __ARMOR_PHYSIC_3__: se++,
  __ARMOR_FIRE_1__: se++,
  __ARMOR_FIRE_2__: se++,
  __ARMOR_FIRE_3__: se++,
  __ARMOR_DEMINER__: se++,
  __ARMOR_TESLA_1__: se++,
  __ARMOR_TESLA_2__: se++,
  __WOOD_SPIKE__: se++,
  __LASER_SUBMACHINE__: se++,
  __GRENADE__: se++,
  __SUPER_HAMMER__: se++,
  __GHOUL_BLOOD__: se++,
  __CAMOUFLAGE_GEAR__: se++,
  __AGITATOR__: se++,
  __GHOUL_DRUG__: se++,
  __MUSHROOM1__: se++,
  __MUSHROOM2__: se++,
  __MUSHROOM3__: se++,
  __ROTTEN_MUSHROOM1__: se++,
  __ROTTEN_MUSHROOM2__: se++,
  __ROTTEN_MUSHROOM3__: se++,
  __LAPADONE__: se++,
  __LAPABOT_REPAIR__: se++,
  __SMALL_WIRE__: se++,
  __PUMPKIN__: se++,
  __ROTTEN_PUMPKIN__: se++,
  __SEED_GHOUL__: se++,
  __EXTRACTOR__: se++,
  __ANTIDOTE__: se++,
  __ANTIDOTE_FLOWER__: se++,
  __SEED_TREE__: se++,
  __ACORN__: se++,
  __ROTTEN_ACORN__: se++,
  __LASER_SNIPER__: se++,
  __HAL_BOT__: se++,
  __TESLA_BOT__: se++,
  __CABLE0__: se++,
  __CABLE1__: se++,
  __CABLE2__: se++,
  __CABLE3__: se++,
  __SWITCH__: se++,
  __GATE_OR__: se++,
  __GATE_AND__: se++,
  __GATE_NOT__: se++,
  __LAMP__: se++,
  __CABLE_WALL__: se++,
  __AUTOMATIC_DOOR__: se++,
  __PLATFORM__: se++,
  __STONE_CAVE__: se++,
  __BUNKER_WALL__: se++,
  __GOLD_FLOOR__: se++,
  __RED_FLOOR__: se++,
  __WELDING_MACHINE__: se++,
  __CABLE4__: se++,
  __GATE_TIMER__: se++,
  __GATE_XOR__: se++
};
se = 0;
var be = {
    __NOTHING__: se++,
    __WOOD__: se++,
    __STONE__: se++,
    __STEEL__: se++,
    __URANIUM__: se++,
    __SULFUR__: se++,
    __LEAF__: se++,
    __LEAFTREE__: se++,
    __ORANGE__: se++,
    __BLOOD__: se++,
    __FIRE__: se++,
    __FUR__: se++,
    __BED0__: se++,
    __BED1__: se++,
    __SOFA0__: se++,
    __SOFA1__: se++,
    __SOFA2__: se++,
    __TOILET__: se++,
    __WOODLIGHT__: se++,
    __SAFE0__: se++,
    __GARBAGE0__: se++,
    __FRIDGE__: se++,
    __PLOT__: se++,
    __BARELRED__: se++,
    __BARELGREEN__: se++,
    __METAL__: se++,
    __TOMATO__: se++,
    __GREY_STEEL__: se++,
    __BLUE_STEEL__: se++,
    __RED_STEEL__: se++,
    __KAKI__: se++,
    __MUSHROOM1__: se++,
    __MUSHROOM2__: se++,
    __MUSHROOM3__: se++,
    __GOLD__: se++
  },
  he = [];
he[be.__NOTHING__] = [], he[be.__WOOD__] = [{
  src: "img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__STONE__] = [{
  src: "img/day-particules-stone1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-stone2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-stone3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-stone4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-stone5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__STEEL__] = [{
  src: "img/day-particules-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-steel4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-steel5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__URANIUM__] = [{
  src: "img/day-particules-uranium1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-uranium9.png",
  img: {
    isLoaded: 0
  }
}], he[be.__SULFUR__] = [{
  src: "img/day-particules-sulfur1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sulfur9.png",
  img: {
    isLoaded: 0
  }
}], he[be.__LEAF__] = [{
  src: "img/day-particules-leaf1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__LEAFTREE__] = [{
  src: "img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaftree1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaftree2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaftree3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaftree4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaftree5.png",
  img: {
    isLoaded: 0
  }
}], he[be.flower] = [{
  src: "img/day-particules-flower1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-flower2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-flower3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-flower4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-flower5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__ORANGE__] = [{
  src: "img/day-particules-leaf1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-leaf9.png",
  img: {
    isLoaded: 0
  }
}], he[be.__BLOOD__] = [{
  src: "img/day-particules-blood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blood2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blood3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blood4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blood5.png",
  img: {
    isLoaded: 0
  }
}];

function ye(e, i, _, a, o, d, t, n, r) {
  if (this.name = e, this.description = i, a !== window.undefined && (this
      .recipe = a), o !== window.undefined && (this.stack = o), d !== window
    .undefined) {
    this.area = [], this.timer = [];
    for (var g = 0; g < d.length; g++) this.area[g] = d[g][0], this.timer[g] =
      d[g][1]
  }
  _ !== window.undefined ? this.category = _ : this.category = -1, t !== window
    .undefined ? this.level = t : this.level = -1, n !== window.undefined ? this
    .previous = n : this.previous = -1, r !== window.undefined ? this.price =
    r : this.price = 1
}
he[be.__FIRE__] = [{
  src: "img/day-particules-fire1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fire2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fire3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fire4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fire5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__FUR__] = [{
  src: "img/day-particules-fur1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fur2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fur3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fur4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fur5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__BED0__] = [{
  src: "img/day-particules-bed0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-bed1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-bed2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-bed6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}], he[be.__BED1__] = [{
  src: "img/day-particules-bed3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-bed4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-bed5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-bed6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}], he[be.__SOFA0__] = [{
  src: "img/day-particules-sofa0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__SOFA1__] = [{
  src: "img/day-particules-sofa0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa6.png",
  img: {
    isLoaded: 0
  }
}], he[be.__SOFA2__] = [{
  src: "img/day-particules-sofa0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-sofa8.png",
  img: {
    isLoaded: 0
  }
}], he[be.__TOILET__] = [{
  src: "img/day-particules-toilet0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-toilet1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-toilet2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-toilet3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-toilet4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__WOODLIGHT__] = [{
  src: "img/day-particules-woodlight0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-woodlight1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-woodlight2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-woodlight3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-woodlight4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__SAFE0__] = [{
  src: "img/day-particules-safe0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-safe1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-safe2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-safe3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-safe4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__GARBAGE0__] = [{
  src: "img/day-particules-garbage0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-garbage1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-garbage2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-garbage3.png",
  img: {
    isLoaded: 0
  }
}], he[be.__FRIDGE__] = [{
  src: "img/day-particules-fridge0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fridge1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fridge2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fridge3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-fridge4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__PLOT__] = [{
  src: "img/day-particules-plot0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-plot1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-plot2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-plot3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}], he[be.__BARELRED__] = [{
  src: "img/day-particules-barel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-barel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-barel2.png",
  img: {
    isLoaded: 0
  }
}], he[be.__BARELGREEN__] = [{
  src: "img/day-particules-barel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-barel4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-barel5.png",
  img: {
    isLoaded: 0
  }
}], he[be.__METAL__] = [{
  src: "img/day-particules-metal0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-metal1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-metal2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-metal3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-metal4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__TOMATO__] = [{
  src: "img/day-particules-tomato0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-tomato1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-tomato2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-tomato3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-tomato4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__BLUE_STEEL__] = [{
  src: "img/day-particules-blue-steel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blue-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blue-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blue-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-blue-steel4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__GREY_STEEL__] = [{
  src: "img/day-particules-grey-steel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-grey-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-grey-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-grey-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-grey-steel4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__RED_STEEL__] = [{
  src: "img/day-particules-red-steel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-red-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-red-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-red-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-red-steel4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__KAKI__] = [{
  src: "img/day-particules-kaki0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-kaki1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-kaki2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-kaki3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-kaki4.png",
  img: {
    isLoaded: 0
  }
}], he[be.__MUSHROOM1__] = [{
  src: "img/day-particules-mushroom4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-mushroom5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-mushroom6.png",
  img: {
    isLoaded: 0
  }
}], he[be.__MUSHROOM2__] = [{
  src: "img/day-particules-mushroom1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-mushroom2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-mushroom3.png",
  img: {
    isLoaded: 0
  }
}], he[be.__MUSHROOM3__] = [{
  src: "img/day-particules-mushroom7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-mushroom8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-mushroom9.png",
  img: {
    isLoaded: 0
  }
}], he[be.__GOLD__] = [{
  src: "img/day-particules-gold0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-gold1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "img/day-particules-gold2.png",
  img: {
    isLoaded: 0
  }
}];
var ve = [{
  src: [],
  img: []
}, {
  id: we.__WOOD__,
  itemButton: {
    src: ["img/inv-wood-out.png", "img/inv-wood-in.png",
      "img/inv-wood-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood", "Found in trees, or on the ground."),
  stack: 255,
  loot: fe.__BIG_WOOD__,
  score: 10
}, {
  id: we.__STONE__,
  itemButton: {
    src: ["img/inv-stone-out.png", "img/inv-stone-in.png",
      "img/inv-stone-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone", "Find it on the ground or on the rock.", Ee
    .__MINERAL__, [], 0, [
      [le.__EXTRACTOR__, 8e4]
    ]),
  craftStart: 50,
  craftRng: 200,
  stack: 255,
  loot: fe.__BIG_STONE__,
  score: 14
}, {
  id: we.__STEEL__,
  itemButton: {
    src: ["img/inv-steel-out.png", "img/inv-steel-in.png",
      "img/inv-steel-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Iron", "Melt it on a Firepit or a Smelter", Ee
    .__MINERAL__, [], 0, [
      [le.__EXTRACTOR__, 12e4]
    ]),
  craftStart: 4,
  craftRng: 8,
  stack: 255,
  loot: fe.__STEEL__,
  score: 28
}, {
  id: we.__ANIMAL_FAT__,
  itemButton: {
    src: ["img/inv-animal-fat-out.png", "img/inv-animal-fat-in.png",
      "img/inv-animal-fat-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Animal Fat", "Useful to craft bullet and clothes"),
  stack: 255,
  loot: fe.__ANIMAL_FAT__,
  score: 32
}, {
  id: we.__ANIMAL_TENDON__,
  itemButton: {
    src: ["img/inv-animal-tendon-out.png", "img/inv-animal-tendon-in.png",
      "img/inv-animal-tendon-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Animal Tendon", "Useful to make string"),
  stack: 255,
  loot: fe.__ANIMAL_TENDON__,
  score: 100
}, {
  id: we.__STRING__,
  itemButton: {
    src: ["img/inv-string-out.png", "img/inv-string-in.png",
      "img/inv-string-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("String", "Useful to craft many INVENTORY.", Ee
    .__SURVIVAL__, [
      [we.__ANIMAL_TENDON__, 2]
    ], 1, [
      [le.__WORKBENCH__, 2e4]
    ]),
  stack: 255,
  loot: fe.__STRING__
}, {
  id: we.__LEATHER_BOAR__,
  itemButton: {
    src: ["img/inv-leather-boar-out.png", "img/inv-leather-boar-in.png",
      "img/inv-leather-boar-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Leather", "Useful to make clothes"),
  stack: 255,
  loot: fe.__LEATHER_BOAR__,
  score: 32
}, {
  id: we.__SHAPED_METAL__,
  itemButton: {
    src: ["img/inv-shaped-metal-out.png", "img/inv-shaped-metal-in.png",
      "img/inv-shaped-metal-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Shaped Metal", "To craft improved INVENTORY.", Ee
    .__MINERAL__, [
      [we.__STEEL__, 2]
    ], 1, [
      [le.__SMELTER__, 3e3],
      [le.__BBQ__, 3e4]
    ]),
  stack: 255,
  loot: fe.__SHAPED_METAL__
}, {
  id: we.__RAW_STEAK__,
  itemButton: {
    src: ["img/inv-raw-steak-out.png", "img/inv-raw-steak-in.png",
      "img/inv-raw-steak-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Raw Steak", "#Vegan"),
  stack: 10,
  loot: fe.__RAW_STEAK__,
  perish: 15,
  perishId: we.__ROTTEN_STEAK__,
  idWeapon: 12,
  wait: 5,
  score: 28
}, {
  id: we.__COOKED_STEAK__,
  itemButton: {
    src: ["img/inv-cooked-steak-out.png", "img/inv-cooked-steak-in.png",
      "img/inv-cooked-steak-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cooked Steak", "Rare or medium?", Ee.__SURVIVAL__, [
    [we.__RAW_STEAK__, 1]
  ], 1, [
    [le.__FIRE__, 2e4],
    [le.__BBQ__, 1e4]
  ]),
  stack: 10,
  loot: fe.__COOKED_STEAK__,
  wait: 5,
  perish: 3,
  perishId: we.__ROTTEN_STEAK__,
  idWeapon: 13
}, {
  id: we.__ROTTEN_STEAK__,
  itemButton: {
    src: ["img/inv-rotten-steak-out.png", "img/inv-rotten-steak-in.png",
      "img/inv-rotten-steak-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  stack: 10,
  loot: fe.__ROTTEN_STEAK__,
  wait: 5,
  idWeapon: 14,
  detail: new ye("Rotten Steak", "Don't eat that."),
  score: 20
}, {
  id: we.__ORANGE__,
  itemButton: {
    src: ["img/inv-orange-out.png", "img/inv-orange-in.png",
      "img/inv-orange-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Orange", "A little hungry?"),
  stack: 20,
  loot: fe.__ORANGE__,
  wait: 5,
  perish: 10,
  perishId: we.__ROTTEN_ORANGE__,
  idWeapon: 15,
  score: 24
}, {
  id: we.__ROTTEN_ORANGE__,
  itemButton: {
    src: ["img/inv-rotten-orange-out.png", "img/inv-rotten-orange-in.png",
      "img/inv-rotten-orange-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Orange", "Go on, have a bite!", Ee.__PLANT__, [
    [we.__ORANGE__, 4]
  ], 8, [
    [le.__COMPOST__, 4e4]
  ]),
  stack: 20,
  loot: fe.__ROTTEN_ORANGE__,
  wait: 5,
  idWeapon: 16,
  score: 20
}, {
  id: we.__SEED_ORANGE__,
  itemButton: {
    src: ["img/inv-orange-seed-out.png", "img/inv-orange-seed-in.png",
      "img/inv-orange-seed-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Orange Seed", "Fill up on Vitame C?", Ee.__PLANT__, [
    [we.__ORANGE__, 4]
  ], 1, [
    [le.__FIRE__, 2e4],
    [le.__BBQ__, 15e3]
  ]),
  stack: 40,
  loot: fe.__SEED_ORANGE__,
  fruit: fe.__ORANGE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/day-clear-blue-plant2-orange.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-plant2-orange.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__SEED__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.orangeSeed,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  building: [{
    src: "img/day-plant0-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant1-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant2-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant3-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant4-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__ORANGE__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0
}, {
  id: we.__HACHET__,
  itemButton: {
    src: ["img/inv-hachet-out.png", "img/inv-hachet-in.png",
      "img/inv-hachet-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Hatchet", "Harvest Wood and Stone.", Ee.__TOOL__, [
    [we.__WOOD__, 10],
    [we.__STONE__, 2]
  ], 1, [
    [le.__PLAYER__, 5e3],
    [le.__WORKBENCH__, 1e4]
  ]),
  idWeapon: 3,
  stack: 1,
  loot: fe.__HACHET__,
  wait: 10
}, {
  id: we.__STONE_PICKAXE__,
  itemButton: {
    src: ["img/inv-stone-pickaxe-out.png", "img/inv-stone-pickaxe-in.png",
      "img/inv-stone-pickaxe-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone Pickaxe", "Mine Stone and Iron.", Ee.__TOOL__, [
    [we.__WOOD__, 100],
    [we.__STONE__, 30]
  ], 1, [
    [le.__WORKBENCH__, 3e4]
  ]),
  idWeapon: 1,
  stack: 1,
  loot: fe.__STONE_PICKAXE__,
  wait: 10
}, {
  id: we.__STEEL_PICKAXE__,
  itemButton: {
    src: ["img/inv-steel-pickaxe-out.png", "img/inv-steel-pickaxe-in.png",
      "img/inv-steel-pickaxe-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Pickaxe", "Mine also Sulfur", Ee.__TOOL__, [
    [we.__STONE__, 150],
    [we.__SHAPED_METAL__, 6]
  ], 1, [
    [le.__WORKBENCH2__, 6e4]
  ], 6),
  idWeapon: 2,
  stack: 1,
  loot: fe.__STEEL_PICKAXE__,
  wait: 10
}, {
  id: we.__STONE_AXE__,
  itemButton: {
    src: ["img/inv-stone-axe-out.png", "img/inv-stone-axe-in.png",
      "img/inv-stone-axe-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Axe", "Harvest a lot of Wood", Ee.__TOOL__, [
    [we.__WOOD__, 150],
    [we.__SHAPED_METAL__, 7]
  ], 1, [
    [le.__WORKBENCH2__, 8e4]
  ], 5),
  idWeapon: 4,
  stack: 1,
  loot: fe.__STONE_AXE__,
  wait: 10
}, {
  id: we.__WORKBENCH__,
  itemButton: {
    src: ["img/inv-workbench-out.png", "img/inv-workbench-in.png",
      "img/inv-workbench-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Workbench", "Allow you to make new INVENTORY.", Ee
    .__SURVIVAL__, [
      [we.__WOOD__, 40],
      [we.__STONE__, 20]
    ], 1, [
      [le.__PLAYER__, 15e3],
      [le.__WORKBENCH__, 15e3]
    ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: le.__WORKBENCH__,
  stack: 255,
  loot: fe.__WORKBENCH__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.workbench,
  packetId: 16,
  interact: {
    src: "img/e-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__WOOD_SPEAR__,
  itemButton: {
    src: ["img/inv-wood-spear-out.png", "img/inv-wood-spear-in.png",
      "img/inv-wood-spear-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood Spear", "Don't forget to pick it up.", Ee.__WEAPON__,
    [
      [we.__WOOD__, 70]
    ], 1, [
      [le.__PLAYER__, 15e3],
      [le.__WORKBENCH__, 2e4]
    ]),
  idWeapon: 5,
  stack: 1,
  loot: fe.__WOOD_SPEAR__,
  wait: 10
}, {
  id: we.__WOOD_BOW__,
  itemButton: {
    src: ["img/inv-wood-bow-out.png", "img/inv-wood-bow-in.png",
      "img/inv-wood-bow-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood Bow", "Where are the cowboys?", Ee.__WEAPON__, [
    [we.__WOOD__, 60],
    [we.__ANIMAL_TENDON__, 2]
  ], 1, [
    [le.__PLAYER__, 35e3],
    [le.__WORKBENCH__, 5e4]
  ]),
  bullet: we.__WOOD_ARROW__,
  mMVwm: 1,
  idWeapon: 6,
  stack: 1,
  loot: fe.__WOOD_BOW__,
  wait: 10
}, {
  id: we.__9MM__,
  itemButton: {
    src: ["img/inv-9mm-out.png", "img/inv-9mm-in.png",
      "img/inv-9mm-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("9MM", "I hope you know how to aim.", Ee.__WEAPON__, [
    [we.__JUNK__, 6],
    [we.__SHAPED_METAL__, 9]
  ], 1, [
    [le.__WORKBENCH2__, 16e4]
  ], 7),
  idWeapon: 8,
  bullet: we.__BULLET_9MM__,
  stack: 1,
  loot: fe.__9MM__,
  wait: 10
}, {
  id: we.__DESERT_EAGLE__,
  itemButton: {
    src: ["img/inv-desert-eagle-out.png", "img/inv-desert-eagle-in.png",
      "img/inv-desert-eagle-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Desert Eagle", "Pretty useful for self-defense.", Ee
    .__WEAPON__, [
      [we.__ALLOYS__, 4],
      [we.__SHAPED_METAL__, 2]
    ], 1, [
      [le.__WORKBENCH2__, 18e4]
    ], 9, we.__9MM__),
  idWeapon: 9,
  bullet: we.__BULLET_9MM__,
  stack: 1,
  loot: fe.__DESERT_EAGLE__,
  wait: 10
}, {
  id: we.__SHOTGUN__,
  itemButton: {
    src: ["img/inv-shotgun-out.png", "img/inv-shotgun-in.png",
      "img/inv-shotgun-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Shotgun", "He's dead now, don't you think?", Ee
    .__WEAPON__, [
      [we.__ALLOYS__, 6],
      [we.__SHAPED_METAL__, 6]
    ], 1, [
      [le.__WORKBENCH2__, 2e5]
    ], 11),
  idWeapon: 7,
  bullet: we.__BULLET_SHOTGUN__,
  stack: 1,
  loot: fe.__SHOTGUN__,
  wait: 10
}, {
  id: we.__AK47__,
  itemButton: {
    src: ["img/inv-ak47-out.png", "img/inv-ak47-in.png",
      "img/inv-ak47-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("AK47", "Revolution time", Ee.__WEAPON__, [
    [we.__ALLOYS__, 14],
    [we.__SHAPED_METAL__, 8]
  ], 1, [
    [le.__WORKBENCH2__, 18e4]
  ], 12, we.__MP5__),
  idWeapon: 10,
  bullet: we.__BULLET_SNIPER__,
  stack: 1,
  loot: fe.__AK47__,
  wait: 10
}, {
  id: we.__SNIPER__,
  itemButton: {
    src: ["img/inv-sniper-out.png", "img/inv-sniper-in.png",
      "img/inv-sniper-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Sniper", "For the very angry shy", Ee.__WEAPON__, [
    [we.__ALLOYS__, 10],
    [we.__SHAPED_METAL__, 8]
  ], 1, [
    [le.__WORKBENCH2__, 18e4]
  ], 13),
  idWeapon: 11,
  bullet: we.__BULLET_SNIPER__,
  stack: 1,
  loot: fe.__SNIPER__,
  wait: 10
}, {
  id: we.__WOOD_WALL__,
  itemButton: {
    src: ["img/inv-wood-wall-out.png", "img/inv-wood-wall-in.png",
      "img/inv-wood-wall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wooden Wall", "Protected from the wind.", Ee.__BUILDING__,
    [
      [we.__WOOD__, 20]
    ], 1, [
      [le.__WORKBENCH__, 1e4]
    ]),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__WOOD_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-wood-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-wood-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__WOOD_WALL__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0
  ],
  broken: [{
    src: "img/day-wood-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: [{
    src: "img/day-wood-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: we.__STONE_WALL__,
  itemButton: {
    src: ["img/inv-stone-wall-out.png", "img/inv-stone-wall-in.png",
      "img/inv-stone-wall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone Wall", "Saved the 3 little pigs.", Ee.__BUILDING__,
    [
      [we.__STONE__, 20]
    ], 1, [
      [le.__WORKBENCH__, 15e3]
    ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__STONE_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__STONE_WALL__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0
  ],
  broken: [{
    src: "img/day-stone-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STONE_IMPACT__,
  destroy: me.__STONE_DESTROY__,
  building: [{
    src: "img/day-stone-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 7e3,
  score: 0
}, {
  id: we.__STEEL_WALL__,
  itemButton: {
    src: ["img/inv-steel-wall-out.png", "img/inv-steel-wall-in.png",
      "img/inv-steel-wall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Wall", "Afraid we'll find you?", Ee.__BUILDING__, [
    [we.__SHAPED_METAL__, 3]
  ], 1, [
    [le.__WORKBENCH2__, 2e4]
  ], 6, we.__STONE_WALL__),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__STEEL_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__STEEL_WALL__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0
  ],
  broken: [{
    src: "img/day-steel-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-steel-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STEEL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: we.__WOOD_DOOR__,
  itemButton: {
    src: ["img/inv-wood-door-out.png", "img/inv-wood-door-in.png",
      "img/inv-wood-door-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wooden Low Door", "You can shoot through it.", Ee
    .__BUILDING__, [
      [we.__WOOD__, 40]
    ], 1, [
      [le.__WORKBENCH__, 15e3]
    ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__WOOD_DOOR__,
  wait: 10,
  delay: 600,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-wood-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-wood-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  draw: re.door,
  packetId: 15,
  interact: {
    src: "img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "img/day-wood-door-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-door-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-door-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-wood-door.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 2e3,
  score: 0
}, {
  id: we.__STONE_DOOR__,
  itemButton: {
    src: ["img/inv-stone-door-out.png", "img/inv-stone-door-in.png",
      "img/inv-stone-door-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone Low Door", "You can shoot through it.", Ee
    .__BUILDING__, [
      [we.__STONE__, 40]
    ], 1, [
      [le.__WORKBENCH__, 15e3]
    ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__STONE_DOOR__,
  wait: 10,
  delay: 600,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  draw: re.door,
  packetId: 15,
  interact: {
    src: "img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "img/day-stone-door-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-door-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-door-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STONE_IMPACT__,
  destroy: me.__STONE_DESTROY__,
  building: {
    src: "img/day-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__STONE__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 5e3,
  score: 0
}, {
  id: we.__STEEL_DOOR__,
  itemButton: {
    src: ["img/inv-steel-door-out.png", "img/inv-steel-door-in.png",
      "img/inv-steel-door-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Low Door", "Killing at home, for more comfort.", Ee
    .__BUILDING__, [
      [we.__SHAPED_METAL__, 6]
    ], 1, [
      [le.__WORKBENCH2__, 3e4]
    ], 6, we.__STONE_DOOR__),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__STEEL_DOOR__,
  wait: 10,
  delay: 600,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  draw: re.door,
  packetId: 15,
  interact: {
    src: "img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "img/day-steel-door-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-door-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-door-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-steel-door.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__STEEL__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 1e4,
  score: 0
}, {
  id: we.__CAMPFIRE__,
  itemButton: {
    src: ["img/inv-campfire-out.png", "img/inv-campfire-in.png",
      "img/inv-campfire-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Campfire", "Warm you when you're cold.", Ee.__SURVIVAL__,
    [
      [we.__WOOD__, 30],
      [we.__STONE__, 5]
    ], 1, [
      [le.__PLAYER__, 8e3],
      [le.__WORKBENCH__, 15e3]
    ]),
  idWeapon: 21,
  fuel: 15e3,
  zid: -1,
  z: 0,
  area: le.__FIRE__,
  stack: 255,
  loot: fe.__CAMPFIRE__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 1,
  draw: re.campfire,
  drawTop: re.campfireLight,
  packetId: 16,
  interact: {
    src: "img/e-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 6e5,
  life: 150,
  score: 0
}, {
  id: we.__BULLET_9MM__,
  itemButton: {
    src: ["img/inv-bullet-9mm-out.png", "img/inv-bullet-9mm-in.png",
      "img/inv-bullet-9mm-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Bullet", "For 9MM, Desert Eagle, and MP5 ", Ee.__WEAPON__,
    [
      [we.__SULFUR__, 3],
      [we.__SHAPED_METAL__, 3],
      [we.__ANIMAL_FAT__, 3]
    ], 30, [
      [le.__WORKBENCH2__, 1e4]
    ], 6),
  stack: 255,
  loot: fe.__BULLET_9MM__
}, {
  id: we.__BULLET_SHOTGUN__,
  itemButton: {
    src: ["img/inv-bullet-shotgun-out.png", "img/inv-bullet-shotgun-in.png",
      "img/inv-bullet-shotgun-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cartridge", "For Shotgun", Ee.__WEAPON__, [
    [we.__ALLOYS__, 1],
    [we.__SHAPED_METAL__, 4],
    [we.__ANIMAL_FAT__, 4]
  ], 15, [
    [le.__WORKBENCH2__, 1e4]
  ], 10),
  stack: 255,
  loot: fe.__BULLET_SHOTGUN__
}, {
  id: we.__BULLET_SNIPER__,
  itemButton: {
    src: ["img/inv-bullet-sniper-out.png", "img/inv-bullet-sniper-in.png",
      "img/inv-bullet-sniper-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Heavy Bullet", "For Sniper, and AK47", Ee.__WEAPON__, [
    [we.__ALLOYS__, 1],
    [we.__SHAPED_METAL__, 4],
    [we.__ANIMAL_FAT__, 4]
  ], 30, [
    [le.__WORKBENCH2__, 1e4]
  ], 11),
  stack: 255,
  loot: fe.__BULLET_SNIPER__
}, {
  id: we.__MEDIKIT__,
  itemButton: {
    src: ["img/inv-medikit-out.png", "img/inv-medikit-in.png",
      "img/inv-medikit-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Medkit", "Regenerate your life.", Ee.__DRUG__, [
    [we.__STRING__, 2],
    [we.__BANDAGE__, 1],
    [we.__LEATHER_BOAR__, 2],
    [we.__SHAPED_METAL__, 2]
  ], 1, [
    [le.__WORKBENCH2__, 8e4]
  ], 10),
  idWeapon: 17,
  stack: 2,
  loot: fe.__MEDIKIT__,
  wait: 10
}, {
  id: we.__BANDAGE__,
  itemButton: {
    src: ["img/inv-bandage-out.png", "img/inv-bandage-in.png",
      "img/inv-bandage-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Bandage", "To heal the boo-boos.", Ee.__DRUG__, [
    [we.__STRING__, 1],
    [we.__LEATHER_BOAR__, 2]
  ], 1, [
    [le.__WEAVING__, 2e4]
  ]),
  idWeapon: 18,
  stack: 5,
  loot: fe.__BANDAGE__,
  wait: 10
}, {
  id: we.__SODA__,
  itemButton: {
    src: ["img/inv-soda-out.png", "img/inv-soda-in.png",
      "img/inv-soda-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Soda", "Give energy.", Ee.__SURVIVAL__, [
    [we.__GHOUL_BLOOD__, 1],
    [we.__CHEMICAL_COMPONENT__, 1],
    [we.__CAN__, 1]
  ], 1, [
    [le.__FIRE__, 4e4],
    [le.__BBQ__, 4e4]
  ], 5),
  idWeapon: 19,
  stack: 5,
  loot: fe.__SODA__,
  perish: 2,
  perishId: we.__CAN__,
  wait: 10
}, {
  id: we.__MP5__,
  itemButton: {
    src: ["img/inv-MP5-out.png", "img/inv-MP5-in.png",
      "img/inv-MP5-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("MP5", "Not bad.", Ee.__WEAPON__, [
    [we.__ALLOYS__, 6],
    [we.__SHAPED_METAL__, 6]
  ], 1, [
    [le.__WORKBENCH2__, 2e5]
  ], 10),
  idWeapon: 20,
  bullet: we.__BULLET_9MM__,
  stack: 1,
  loot: fe.__MP5__,
  wait: 10
}, {
  id: we.__HEADSCARF__,
  itemButton: {
    src: ["img/inv-headscarf-out.png", "img/inv-headscarf-in.png",
      "img/inv-headscarf-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Headscarf", "Warm you up.", Ee.__CLOTHE__, [
    [we.__STRING__, 1],
    [we.__LEATHER_BOAR__, 1]
  ], 1, [
    [le.__WEAVING__, 6e4]
  ]),
  idClothe: 1,
  stack: 1,
  loot: fe.__HEADSCARF__,
  wait: 10,
  warm: 85e-5,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__CHAPKA__,
  itemButton: {
    src: ["img/inv-chapka-out.png", "img/inv-chapka-in.png",
      "img/inv-chapka-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Chapka", "You look like a real woodcutter.", Ee
    .__CLOTHE__, [
      [we.__STRING__, 6],
      [we.__LEATHER_BOAR__, 8],
      [we.__HEADSCARF__, 1]
    ], 1, [
      [le.__WEAVING__, 12e4]
    ], 7),
  idClothe: 2,
  stack: 1,
  loot: fe.__CHAPKA__,
  wait: 10,
  warm: .0017,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__WINTER_COAT__,
  itemButton: {
    src: ["img/inv-coat-out.png", "img/inv-coat-in.png",
      "img/inv-coat-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Winter Coat", "Is the weather really that cold?", Ee
    .__CLOTHE__, [
      [we.__STRING__, 15],
      [we.__LEATHER_BOAR__, 20],
      [we.__CHAPKA__, 1]
    ], 1, [
      [le.__WEAVING__, 18e4]
    ], 9, we.__CHAPKA__),
  idClothe: 3,
  stack: 1,
  loot: fe.__WINTER_COAT__,
  wait: 10,
  warm: .0026,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__GAZ_MASK__,
  itemButton: {
    src: ["img/inv-gaz-mask-out.png", "img/inv-gaz-mask-in.png",
      "img/inv-gaz-mask-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Radiation Mask", "Protect you from Radioactivity.", Ee
    .__CLOTHE__, [
      [we.__SHAPED_METAL__, 1],
      [we.__STRING__, 1],
      [we.__LEATHER_BOAR__, 2]
    ], 1, [
      [le.__WEAVING__, 6e4]
    ]),
  idClothe: 4,
  stack: 1,
  loot: fe.__GAZ_MASK__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: .009,
  speed: 0
}, {
  id: we.__GAZ_PROTECTION__,
  itemButton: {
    src: ["img/inv-gaz-protection-out.png", "img/inv-gaz-protection-in.png",
      "img/inv-gaz-protection-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Min. Radiation Suit", "Previously, on Breaking Bad.", Ee
    .__CLOTHE__, [
      [we.__ALLOYS__, 2],
      [we.__SHAPED_METAL__, 2],
      [we.__STRING__, 4],
      [we.__LEATHER_BOAR__, 4],
      [we.__GAZ_MASK__, 1]
    ], 1, [
      [le.__WEAVING__, 9e4]
    ], 8),
  idClothe: 5,
  stack: 1,
  loot: fe.__GAZ_PROTECTION__,
  wait: 10,
  warm: 6e-4,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: .016,
  speed: 0
}, {
  id: we.__RADIATION_SUIT__,
  itemButton: {
    src: ["img/inv-radiation-suit-out.png", "img/inv-radiation-suit-in.png",
      "img/inv-radiation-suit-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Radiation Suit", "Let's not grow a second head.", Ee
    .__CLOTHE__, [
      [we.__ALLOYS__, 6],
      [we.__SHAPED_METAL__, 4],
      [we.__STRING__, 8],
      [we.__LEATHER_BOAR__, 20],
      [we.__GAZ_PROTECTION__, 1]
    ], 1, [
      [le.__WEAVING__, 18e4]
    ], 10, we.__GAZ_PROTECTION__),
  idClothe: 6,
  stack: 1,
  loot: fe.__RADIATION_SUIT__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: .022,
  speed: -.01
}, {
  id: we.__WOOD_ARROW__,
  itemButton: {
    src: ["img/inv-wood-arrow-out.png", "img/inv-wood-arrow-in.png",
      "img/inv-wood-arrow-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood Arrow", "Needed to use bow.", Ee.__WEAPON__, [
    [we.__WOOD__, 40]
  ], 5, [
    [le.__PLAYER__, 15e3],
    [le.__WORKBENCH__, 1e4]
  ]),
  stack: 255,
  loot: fe.__WOOD_ARROW__
}, {
  id: we.__CAMPFIRE_BBQ__,
  itemButton: {
    src: ["img/inv-campfire-bbq-out.png", "img/inv-campfire-bbq-in.png",
      "img/inv-campfire-bbq-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Firepit", "Warm up and melt iron slowly.", Ee
    .__SURVIVAL__, [
      [we.__WOOD__, 120],
      [we.__STONE__, 20],
      [we.__STEEL__, 4]
    ], 1, [
      [le.__WORKBENCH__, 2e4]
    ], 3),
  idWeapon: 21,
  fuel: 2e4,
  zid: -1,
  z: 0,
  area: le.__BBQ__,
  stack: 255,
  loot: fe.__CAMPFIRE_BBQ__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 1,
  draw: re.campfire,
  drawTop: re.campfireLight,
  packetId: 16,
  interact: {
    src: "img/e-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__SMELTER__,
  itemButton: {
    src: ["img/inv-smelter-out.png", "img/inv-smelter-in.png",
      "img/inv-smelter-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Smelter", "Melt iron, uranium and alloys", Ee
    .__SURVIVAL__, [
      [we.__SHAPED_METAL__, 6],
      [we.__ELECTRONICS__, 1]
    ], 1, [
      [le.__WORKBENCH2__, 1e5]
    ], 10),
  idWeapon: 21,
  fuel: 42e3,
  zid: 1,
  z: 1,
  area: le.__SMELTER__,
  stack: 255,
  loot: fe.__SMELTER__,
  wait: 10,
  delay: 1e3,
  width: [100, 260, 100, 260],
  height: [260, 100, 260, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, -80, 0, -80],
  _y: [-80, 0, -80, 0],
  iTile: [-1, 0, -1, 0],
  jTile: [0, -1, 0, -1],
  blueprint: {
    src: "img/day-clear-blue-smelter.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-smelter.png",
    img: {
      isLoaded: 0
    }
  },
  xLight: [-20.5, -101.5, 20.5, 101.5],
  yLight: [101.5, -20.5, -101, 20.5],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.smelter,
  packetId: 16,
  interact: {
    src: "img/e-smelter.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-smelter-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-smelter-on.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-smelter-light-up.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-smelter-light-down.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: we.__WOOD_BIGDOOR__,
  itemButton: {
    src: ["img/inv-wood-door1-out.png", "img/inv-wood-door1-in.png",
      "img/inv-wood-door1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wooden Door", "Let's hope it holds.", Ee.__BUILDING__, [
    [we.__WOOD__, 60]
  ], 1, [
    [le.__WORKBENCH__, 2e4]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__WOOD_BIGDOOR__,
  wait: 10,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-wood-door1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-wood-door1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI,
  iMove: [1, -1, -1, 1],
  jMove: [-1, -1, 1, 1],
  xMove: [0, 0, 0, 0],
  yMove: [0, 0, 0, 0],
  wMove: [100, 100, 100, 100],
  hMove: [100, 100, 100, 100],
  xRotate: 17,
  yRotate: 113,
  draw: re.door,
  packetId: 15,
  interact: {
    src: "img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "img/day-wood-door1-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-door1-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-door1-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-wood-door1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 2500,
  score: 0
}, {
  id: we.__STONE_BIGDOOR__,
  itemButton: {
    src: ["img/inv-stone-door1-out.png", "img/inv-stone-door1-in.png",
      "img/inv-stone-door1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone Door", "Not too heavy to open, I hope.", Ee
    .__BUILDING__, [
      [we.__STONE__, 60]
    ], 1, [
      [le.__WORKBENCH__, 2e4]
    ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__STONE_BIGDOOR__,
  wait: 10,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI,
  iMove: [1, -1, -1, 1],
  jMove: [-1, -1, 1, 1],
  xMove: [0, 0, 0, 0],
  yMove: [0, 0, 0, 0],
  wMove: [100, 100, 100, 100],
  hMove: [100, 100, 100, 100],
  xRotate: 17,
  yRotate: 113,
  draw: re.door,
  packetId: 15,
  interact: {
    src: "img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "img/day-stone-door1-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-door1-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-door1-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STONE_IMPACT__,
  destroy: me.__STONE_DESTROY__,
  building: {
    src: "img/day-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 6e3,
  score: 0
}, {
  id: we.__STEEL_BIGDOOR__,
  itemButton: {
    src: ["img/inv-steel-door1-out.png", "img/inv-steel-door1-in.png",
      "img/inv-steel-door1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Door", "I guess you're safe.", Ee.__BUILDING__, [
    [we.__SHAPED_METAL__, 9]
  ], 1, [
    [le.__WORKBENCH2__, 4e4]
  ], 6, we.__STONE_BIGDOOR__),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__STEEL_BIGDOOR__,
  wait: 10,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI,
  iMove: [1, -1, -1, 1],
  jMove: [-1, -1, 1, 1],
  xMove: [0, 0, 0, 0],
  yMove: [0, 0, 0, 0],
  wMove: [100, 100, 100, 100],
  hMove: [100, 100, 100, 100],
  xRotate: 17,
  yRotate: 113,
  draw: re.door,
  packetId: 15,
  interact: {
    src: "img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "img/day-steel-door1-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-door1-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-door1-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-steel-door1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__STEEL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 12500,
  score: 0
}, {
  id: we.__SULFUR__,
  itemButton: {
    src: ["img/inv-sulfur-out.png", "img/inv-sulfur-in.png",
      "img/inv-sulfur-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Sulfur", "Sulfur in such a cold landscape?", Ee
    .__MINERAL__, [], 0, [
      [le.__EXTRACTOR__, 24e4]
    ]),
  craftStart: 4,
  craftRng: 8,
  stack: 255,
  loot: fe.__SULFUR__,
  score: 32
}, {
  id: we.__SHAPED_URANIUM__,
  itemButton: {
    src: ["img/inv-shaped-uranium-out.png", "img/inv-shaped-uranium-in.png",
      "img/inv-shaped-uranium-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Shaped Uranium", "Are you out of your mind?", Ee
    .__MINERAL__, [
      [we.__URANIUM__, 1]
    ], 1, [
      [le.__SMELTER__, 2e4]
    ]),
  stack: 255,
  loot: fe.__SHAPED_URANIUM__,
  score: 0
}, {
  id: we.__WORKBENCH2__,
  itemButton: {
    src: ["img/inv-workbench2-out.png", "img/inv-workbench2-in.png",
      "img/inv-workbench2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Research Bench", "Allow you to make new INVENTORY", Ee
    .__SURVIVAL__, [
      [we.__SHAPED_METAL__, 6],
      [we.__ELECTRONICS__, 1]
    ], 1, [
      [le.__WORKBENCH__, 5e4]
    ], 6),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: le.__WORKBENCH2__,
  stack: 255,
  loot: fe.__WORKBENCH2__,
  wait: 10,
  delay: 1e3,
  width: [100, 290, 100, 280],
  height: [280, 100, 280, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, -90, 0, -90],
  _y: [-90, 0, -90, 0],
  iTile: [-1, 0, -1, 0],
  jTile: [0, -1, 0, -1],
  blueprint: {
    src: "img/day-clear-blue-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.workbench2,
  packetId: 16,
  interact: {
    src: "img/e-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 400,
  score: 0
}, {
  id: we.__URANIUM__,
  itemButton: {
    src: ["img/inv-uranium-out.png", "img/inv-uranium-in.png",
      "img/inv-uranium-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Uranium", "Do you want to end up as Marie Curie?", Ee
    .__MINERAL__, [], 0, [
      [le.__EXTRACTOR__, 24e4]
    ]),
  craftStart: 2,
  craftRng: 4,
  stack: 255,
  loot: fe.__URANIUM__,
  score: 45
}, {
  id: we.__WEAVING__,
  itemButton: {
    src: ["img/inv-weaving-machine-out.png",
      "img/inv-weaving-machine-in.png",
      "img/inv-weaving-machine-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Weaving Machine", "Allow you to sew clothes", Ee
    .__SURVIVAL__, [
      [we.__WOOD__, 80],
      [we.__STONE__, 20],
      [we.__STRING__, 2]
    ], 1, [
      [le.__WORKBENCH__, 6e4]
    ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: le.__WEAVING__,
  stack: 255,
  loot: fe.__WEAVING__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.workbench,
  packetId: 16,
  interact: {
    src: "img/e-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__GASOLINE__,
  itemButton: {
    src: ["img/inv-gasoline-out.png", "img/inv-gasoline-in.png",
      "img/inv-gasoline-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gasoline", "Fuel for Smelter", Ee.__SURVIVAL__, [
    [we.__ROTTEN_ORANGE__, 4],
    [we.__SULFUR__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 2e4]
  ]),
  stack: 255,
  loot: fe.__GASOLINE__
}, {
  id: we.__SULFUR_PICKAXE__,
  itemButton: {
    src: ["img/inv-sulfur-pickaxe-out.png", "img/inv-sulfur-pickaxe-in.png",
      "img/inv-sulfur-pickaxe-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Sulfur Pickaxe", "Mine also Uranium", Ee.__TOOL__, [
    [we.__ALLOYS__, 2],
    [we.__SHAPED_METAL__, 6],
    [we.__SULFUR__, 6]
  ], 1, [
    [le.__WORKBENCH2__, 9e4]
  ], 9, we.__STEEL_PICKAXE__),
  idWeapon: 22,
  stack: 1,
  loot: fe.__SULFUR_PICKAXE__,
  wait: 10
}, {
  id: we.__CHEST__,
  itemButton: {
    src: ["img/inv-chest-out.png", "img/inv-chest-in.png",
      "img/inv-chest-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood chest", "You can't store food in.", Ee.__BUILDING__,
    [
      [we.__WOOD__, 50],
      [we.__STONE__, 20]
    ], 1, [
      [le.__WORKBENCH__, 3e4]
    ], 8),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__CHEST__,
  wait: 10,
  chest: 1,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-chest.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-chest.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  draw: re.workbench,
  packetId: 25,
  interact: {
    src: "img/e-chest.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: {
    src: "img/day-chest.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__WOOD__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 300,
  score: 0
}, {
  id: we.__FRIDGE__,
  itemButton: {
    src: ["img/inv-fridge-out.png", "img/inv-fridge-in.png",
      "img/inv-fridge-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Fridge", "Save your food.", Ee.__BUILDING__, [
    [we.__SHAPED_METAL__, 5],
    [we.__ENERGY_CELLS__, 4]
  ], 1, [
    [le.__WORKBENCH2__, 9e4]
  ], 9),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__FRIDGE__,
  wait: 10,
  chest: 1,
  fridge: 1,
  delay: 600,
  width: [50, 100, 50, 100],
  height: [100, 50, 100, 50],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 50, 0],
  _y: [0, 0, 0, 50],
  blueprint: {
    src: "img/day-clear-blue-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  draw: re.workbench,
  packetId: 25,
  interact: {
    src: "img/e-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 300,
  score: 0
}, {
  id: we.__WOOD_FLOOR__,
  itemButton: {
    src: ["img/inv-wood-floor-out.png", "img/inv-wood-floor-in.png",
      "img/inv-wood-floor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood floor", "Players can't spawn on it", Ee.__BUILDING__,
    [
      [we.__WOOD__, 15]
    ], 2, [
      [le.__WORKBENCH__, 15e3]
    ]),
  stack: 255,
  loot: fe.__WOOD_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-wood-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-wood-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__WOOD_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.groundFloor,
  broken: [{
    src: "img/day-wood-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__NO_SOUND__,
  destroy: me.__WOOD_DESTROY__,
  building: [{
    src: "img/day-wood-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 4e3,
  score: 0
}, {
  id: we.__HAMMER__,
  itemButton: {
    src: ["img/inv-hammer-out.png", "img/inv-hammer-in.png",
      "img/inv-hammer-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Hammer", "Destroy walls quickly.", Ee.__TOOL__, [
    [we.__WOOD__, 100],
    [we.__SHAPED_METAL__, 10]
  ], 1, [
    [le.__WORKBENCH2__, 3e4]
  ], 7),
  idWeapon: 23,
  stack: 1,
  loot: fe.__HAMMER__,
  wait: 10
}, {
  id: we.__SLEEPING_BAG__,
  itemButton: {
    src: ["img/inv-sleeping-bag-out.png", "img/inv-sleeping-bag-in.png",
      "img/inv-sleeping-bag-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Sleeping Bag", "Once dead, you keep your base", Ee
    .__SURVIVAL__, [
      [we.__LEATHER_BOAR__, 7],
      [we.__ANIMAL_FAT__, 7],
      [we.__STRING__, 7]
    ], 1, [
      [le.__WEAVING__, 2e4]
    ], 9),
  stack: 255,
  loot: fe.__SLEEPING_BAG__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-sleeping-bag.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-sleeping-bag.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.defaultBuilding,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: {
    src: "img/day-sleeping-bag.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__FUR__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: we.__REPAIR_HAMMER__,
  itemButton: {
    src: ["img/inv-repair-hammer-out.png", "img/inv-repair-hammer-in.png",
      "img/inv-repair-hammer-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Repair Hammer", "Repair walls but require nails.", Ee
    .__TOOL__, [
      [we.__WOOD__, 120],
      [we.__SHAPED_METAL__, 2]
    ], 1, [
      [le.__WORKBENCH__, 3e4]
    ], 5),
  idWeapon: 24,
  stack: 1,
  loot: fe.__REPAIR_HAMMER__,
  wait: 10
}, {
  id: we.__NAILS__,
  itemButton: {
    src: ["img/inv-nails-out.png", "img/inv-nails-in.png",
      "img/inv-nails-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Nails", "Needed to repair walls.", Ee.__SURVIVAL__, [
    [we.__SHAPED_METAL__, 2]
  ], 85, [
    [le.__WORKBENCH__, 2e4]
  ]),
  stack: 255,
  loot: fe.__NAILS__
}, {
  id: we.__WOODLIGHT_FLOOR__,
  itemButton: {
    src: ["img/inv-wood-floor-light-out.png",
      "img/inv-wood-floor-light-in.png",
      "img/inv-wood-floor-light-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Light Wood Floor", "Players can't spawn on it", Ee
    .__BUILDING__, [
      [we.__WOOD__, 15]
    ], 2, [
      [le.__WORKBENCH__, 15e3]
    ]),
  stack: 255,
  loot: fe.__WOODLIGHT_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-woodlight-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-woodlight-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__WOODLIGHT_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.groundFloor,
  broken: [{
    src: "img/day-wood-floor-light-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__NO_SOUND__,
  destroy: me.__WOOD_DESTROY__,
  building: [{
    src: "img/day-wood-floor-light-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-floor-light-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__WOODLIGHT__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 4e3,
  score: 0
}, {
  id: we.__WOOD_SMALLWALL__,
  itemButton: {
    src: ["img/inv-wood-smallwall-out.png", "img/inv-wood-smallwall-in.png",
      "img/inv-wood-smallwall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wooden Low Wall", "You can shoot through it.", Ee
    .__BUILDING__, [
      [we.__WOOD__, 10]
    ], 1, [
      [le.__WORKBENCH__, 1e4]
    ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__WOOD_SMALLWALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-wood-smallwall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-wood-smallwall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 1,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  areaEffect: 0,
  draw: re.lowWall,
  broken: [{
    src: "img/day-wood-smallwalls-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: [{
    src: "img/day-wood-smallwalls-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-smallwalls-39.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: we.__STONE_SMALLWALL__,
  itemButton: {
    src: ["img/inv-stone-smallwall-out.png",
      "img/inv-stone-smallwall-in.png",
      "img/inv-stone-smallwall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone Low Wall", "You can shoot through it.", Ee
    .__BUILDING__, [
      [we.__STONE__, 10]
    ], 1, [
      [le.__WORKBENCH__, 15e3]
    ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__STONE_SMALLWALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 1,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  areaEffect: 0,
  draw: re.lowWall,
  broken: [{
    src: "img/day-stone-smallwalls-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STONE_IMPACT__,
  destroy: me.__STONE_DESTROY__,
  building: [{
    src: "img/day-stone-smallwalls-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-smallwalls-39.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 7e3,
  score: 0
}, {
  id: we.__STEEL_SMALLWALL__,
  itemButton: {
    src: ["img/inv-steel-smallwall-out.png",
      "img/inv-steel-smallwall-in.png",
      "img/inv-steel-smallwall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Low Wall", "You can shoot through it.", Ee
    .__BUILDING__, [
      [we.__SHAPED_METAL__, 2]
    ], 1, [
      [le.__WORKBENCH2__, 2e4]
    ], 6, we.__STONE_SMALLWALL__),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: fe.__STEEL_SMALLWALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 1,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  areaEffect: 0,
  draw: re.lowWall,
  broken: [{
    src: "img/day-steel-smallwalls-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-steel-smallwalls-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-steel-smallwalls-39.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STEEL__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: we.__FURNITURE__,
  zid: 0,
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: [],
  detail: {
    category: window.undefined
  },
  particles: -1,
  draw: re.furniture
}, {
  id: we.__TOMATO_SOUP__,
  itemButton: {
    src: ["img/inv-tomato-soup-out.png", "img/inv-tomato-soup-in.png",
      "img/inv-tomato-soup-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tomato Soup", "Has not yet been opened.", Ee.__SURVIVAL__,
    [
      [we.__CAN__, 1],
      [we.__TOMATO__, 2]
    ], 1, [
      [le.__FIRE__, 15e3],
      [le.__BBQ__, 7e3]
    ]),
  idWeapon: 25,
  stack: 5,
  loot: fe.__TOMATO_SOUP__,
  perish: 2,
  perishId: we.__CAN__,
  wait: 10
}, {
  id: we.__SYRINGE__,
  itemButton: {
    src: ["img/inv-syringe-out.png", "img/inv-syringe-in.png",
      "img/inv-syringe-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Syringe", "Useful to make drugs.", Ee.__DRUG__, [
    [we.__JUNK__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 3e4]
  ]),
  stack: 20,
  loot: fe.__SYRINGE__,
  score: 50
}, {
  id: we.__CHEMICAL_COMPONENT__,
  itemButton: {
    src: ["img/inv-chemical-component-out.png",
      "img/inv-chemical-component-in.png",
      "img/inv-chemical-component-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Chemical Component", "Useful to make a drugs."),
  stack: 20,
  loot: fe.__CHEMICAL_COMPONENT__,
  score: 50
}, {
  id: we.__RADAWAY__,
  itemButton: {
    src: ["img/inv-radaway-out.png", "img/inv-radaway-in.png",
      "img/inv-radaway-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("RadAway", "Reduce your radioactivity a lot.", Ee.__DRUG__,
    [
      [we.__SYRINGE__, 1],
      [we.__CHEMICAL_COMPONENT__, 1],
      [we.__MUSHROOM2__, 1]
    ], 1, [
      [le.__AGITATOR__, 45e3]
    ]),
  idWeapon: 26,
  stack: 5,
  loot: fe.__RADAWAY__,
  wait: 10
}, {
  id: we.__SEED_TOMATO__,
  itemButton: {
    src: ["img/inv-tomato-seed-out.png", "img/inv-tomato-seed-in.png",
      "img/inv-tomato-seed-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tomato Seed", "A fruit or vegetable?", Ee.__PLANT__, [
    [we.__TOMATO__, 4]
  ], 1, [
    [le.__FIRE__, 3e4],
    [le.__BBQ__, 2e4]
  ]),
  stack: 40,
  loot: fe.__SEED_TOMATO__,
  fruit: fe.__TOMATO__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/day-clear-blue-tomato.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-tomato.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__SEED__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.orangeSeed,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  building: [{
    src: "img/day-plant0-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant1-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant2-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant3-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant4-tomato.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__TOMATO__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0
}, {
  id: we.__TOMATO__,
  itemButton: {
    src: ["img/inv-tomato-out.png", "img/inv-tomato-in.png",
      "img/inv-tomato-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tomato", "Why did the tomato blush?"),
  stack: 20,
  loot: fe.tomato,
  wait: 5,
  perish: 10,
  perishId: we.__ROTTEN_TOMATO__,
  idWeapon: 27,
  score: 24
}, {
  id: we.__ROTTEN_TOMATO__,
  itemButton: {
    src: ["img/inv-rotten-tomato-out.png", "img/inv-rotten-tomato-in.png",
      "img/inv-rotten-tomato-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Tomato", "Go on, have a bite!"),
  stack: 20,
  loot: fe.__ROTTEN_TOMATO__,
  wait: 5,
  idWeapon: 28,
  score: 20
}, {
  id: we.__CAN__,
  itemButton: {
    src: ["img/inv-can-out.png", "img/inv-can-in.png",
      "img/inv-can-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Can", "Useful to craft food can.", Ee.__SURVIVAL__, [
    [we.__SHAPED_METAL__, 1]
  ], 1, [
    [le.__WORKBENCH__, 2e4]
  ]),
  idWeapon: 0,
  stack: 255,
  loot: fe.__CAN__
}, {
  id: we.__WOOD_CROSSBOW__,
  itemButton: {
    src: ["img/inv-wood-crossbow-out.png", "img/inv-wood-crossbow-in.png",
      "img/inv-wood-crossbow-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wood Crossbow", "Shoot faster, reload slower", Ee
    .__WEAPON__, [
      [we.__WOOD__, 200],
      [we.__STRING__, 2],
      [we.__SHAPED_METAL__, 1]
    ], 1, [
      [le.__WORKBENCH__, 5e4]
    ], 6),
  idWeapon: 29,
  bullet: we.__WOOD_CROSSARROW__,
  stack: 1,
  loot: fe.__WOOD_CROSSBOW__,
  wait: 10
}, {
  id: we.__WOOD_CROSSARROW__,
  itemButton: {
    src: ["img/inv-wood-crossarrow-out.png",
      "img/inv-wood-crossarrow-in.png",
      "img/inv-wood-crossarrow-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Crossbow Arrows", "Needed to use crossbow.", Ee
    .__WEAPON__, [
      [we.__WOOD__, 40],
      [we.__SHAPED_METAL__, 1]
    ], 10, [
      [le.__WORKBENCH__, 3e4]
    ]),
  stack: 255,
  loot: fe.__WOOD_CROSSARROW__
}, {
  id: we.__NAIL_GUN__,
  itemButton: {
    src: ["img/inv-nail-gun-out.png", "img/inv-nail-gun-in.png",
      "img/inv-nail-gun-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Nail Gun", "Repair walls from a distance", Ee.__TOOL__, [
    [we.__SHAPED_METAL__, 3],
    [we.__SMALL_WIRE__, 1],
    [we.__JUNK__, 1],
    [we.__ENERGY_CELLS__, 4]
  ], 1, [
    [le.__WORKBENCH2__, 3e4]
  ], 7),
  idWeapon: 30,
  bullet: we.__NAILS__,
  stack: 1,
  loot: fe.__NAIL_GUN__,
  wait: 10
}, {
  id: we.__SAWED_OFF_SHOTGUN__,
  itemButton: {
    src: ["img/inv-sawed-off-shotgun-out.png",
      "img/inv-sawed-off-shotgun-in.png",
      "img/inv-sawed-off-shotgun-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Sawed Off", "Shoot less far, do more damages", Ee
    .__WEAPON__, [
      [we.__SHOTGUN__, 1],
      [we.__ALLOYS__, 6],
      [we.__SHAPED_METAL__, 6]
    ], 1, [
      [le.__WORKBENCH2__, 2e5]
    ], 13, we.__SHOTGUN__),
  idWeapon: 31,
  bullet: we.__BULLET_SHOTGUN__,
  stack: 1,
  loot: fe.__SAWED_OFF_SHOTGUN__,
  wait: 10
}, {
  id: we.__STONE_FLOOR__,
  itemButton: {
    src: ["img/inv-stone-floor-out.png", "img/inv-stone-floor-in.png",
      "img/inv-stone-floor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone floor", "Players can't spawn on it", Ee
    .__BUILDING__, [
      [we.__STONE__, 15]
    ], 2, [
      [le.__WORKBENCH__, 15e3]
    ], 4),
  stack: 255,
  loot: fe.__STONE_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__STONE_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.groundFloor,
  broken: [{
    src: "img/day-stone-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__NO_SOUND__,
  destroy: me.__STONE_DESTROY__,
  building: [{
    src: "img/day-stone-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 8e3,
  score: 0
}, {
  id: we.__TILING_FLOOR__,
  itemButton: {
    src: ["img/inv-tiling-floor-out.png", "img/inv-tiling-floor-in.png",
      "img/inv-tiling-floor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tiling floor", "Players can't spawn on it", Ee
    .__BUILDING__, [
      [we.__STONE__, 15]
    ], 2, [
      [le.__WORKBENCH__, 15e3]
    ], 4),
  stack: 255,
  loot: fe.__TILING_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-tiling-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-tiling-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__TILING_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.groundFloor,
  broken: [{
    src: "img/day-tiling-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__NO_SOUND__,
  destroy: me.__STONE_DESTROY__,
  building: [{
    src: "img/day-tiling-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tiling-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 8e3,
  score: 0
}, {
  id: we.__ROAD__,
  zid: 0,
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: [],
  buildings: [],
  detail: {
    category: window.undefined
  },
  particles: -1,
  draw: re.road
}, {
  id: we.__CRISPS__,
  itemButton: {
    src: ["img/inv-chips-out.png", "img/inv-chips-in.png",
      "img/inv-chips-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Crisps", "You salty?"),
  idWeapon: 32,
  stack: 5,
  loot: fe.__CRISPS__,
  perish: 2,
  perishId: we.__ROTTEN_CRISPS__,
  wait: 10
}, {
  id: we.__ROTTEN_CRISPS__,
  itemButton: {
    src: ["img/inv-rotten-chips-out.png", "img/inv-rotten-chips-in.png",
      "img/inv-rotten-chips-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Expired Crisps", "Go on, have a bite!"),
  stack: 5,
  loot: fe.__ROTTEN_CRISPS__,
  wait: 5,
  idWeapon: 33,
  score: 20
}, {
  id: we.__ELECTRONICS__,
  itemButton: {
    src: ["img/inv-electronic-part-out.png",
      "img/inv-electronic-part-in.png",
      "img/inv-electronic-part-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Electronic Parts", "Break TV's and Computers to find it"),
  stack: 255,
  loot: fe.__ELECTRONICS__,
  score: 100
}, {
  id: we.__JUNK__,
  itemButton: {
    src: ["img/inv-junk-out.png", "img/inv-junk-in.png",
      "img/inv-junk-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Junk", "Find it in houses"),
  stack: 255,
  loot: fe.__JUNK__,
  score: 40
}, {
  id: we.__WIRE__,
  itemButton: {
    src: ["img/inv-wires-out.png", "img/inv-wires-in.png",
      "img/inv-wires-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Big Wire",
    "Break big computers in power AREAS (in the city)"),
  stack: 255,
  loot: fe.__WIRE__,
  score: 40
}, {
  id: we.__ENERGY_CELLS__,
  itemButton: {
    src: ["img/inv-small-energy-cells-out.png",
      "img/inv-small-energy-cells-in.png",
      "img/inv-small-energy-cells-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Energy Cells", "Used for energy weapons/buildings", Ee
    .__SURVIVAL__, [
      [we.__ALLOYS__, 1],
      [we.__SHAPED_URANIUM__, 1]
    ], 30, [
      [le.__TESLA__, 28e3]
    ], 6),
  stack: 255,
  loot: fe.__ENERGY_CELLS__
}, {
  id: we.__LASER_PISTOL__,
  itemButton: {
    src: ["img/inv-laser-pistol-out.png", "img/inv-laser-pistol-in.png",
      "img/inv-laser-pistol-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Laser Pistol", "Bullets are faster.", Ee.__WEAPON__, [
    [we.__SHAPED_URANIUM__, 2],
    [we.__WIRE__, 1],
    [we.__ELECTRONICS__, 2],
    [we.__ALLOYS__, 1],
    [we.__SHAPED_METAL__, 4]
  ], 1, [
    [le.__TESLA__, 18e4]
  ], 14),
  idWeapon: 34,
  bullet: we.__ENERGY_CELLS__,
  stack: 1,
  loot: fe.__LASER_PISTOL__,
  wait: 10
}, {
  id: we.__TESLA__,
  itemButton: {
    src: ["img/inv-workbench3-out.png", "img/inv-workbench3-in.png",
      "img/inv-workbench3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tesla Bench", "Allow you to make powerful INVENTORY", Ee
    .__SURVIVAL__, [
      [we.__ALLOYS__, 4],
      [we.__SHAPED_METAL__, 6],
      [we.__ELECTRONICS__, 3],
      [we.__WIRE__, 4],
      [we.__SHAPED_URANIUM__, 2]
    ], 1, [
      [le.__WORKBENCH2__, 12e4]
    ], 10, we.__WORKBENCH2__),
  idWeapon: 21,
  fuel: 6e4,
  zid: 0,
  z: 1,
  area: le.__TESLA__,
  stack: 255,
  loot: fe.__TESLA__,
  wait: 10,
  delay: 1e3,
  width: [100, 260, 100, 260],
  height: [260, 100, 260, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, -80, 0, -80],
  _y: [-80, 0, -80, 0],
  iTile: [-1, 0, -1, 0],
  jTile: [0, -1, 0, -1],
  blueprint: {
    src: "img/day-clear-blue-workbench3.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-workbench3.png",
    img: {
      isLoaded: 0
    }
  },
  xLight: [-20.5, -101.5, 20.5, 101.5],
  yLight: [101.5, -20.5, -101, 20.5],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.teslaBench,
  packetId: 16,
  interact: {
    src: "img/e-workbench3.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-workbench3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-workbench3-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-workbench3-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-workbench3-3.png",
    img: {
      isLoaded: 0
    }
  }],
  light: [{
    src: "img/day-tesla-light0.png",
    img: {
      isLoaded: 0
    }
  }, 0, {
    src: "img/day-tesla-light1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tesla-light2.png",
    img: {
      isLoaded: 0
    }
  }, 0, {
    src: "img/day-tesla-light3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tesla-light4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-tesla-light5.png",
    img: {
      isLoaded: 0
    }
  }, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: we.__ALLOYS__,
  itemButton: {
    src: ["img/inv-alloys-out.png", "img/inv-alloys-in.png",
      "img/inv-alloys-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Alloys", "To craft powerful INVENTORY", Ee.__MINERAL__, [
    [we.__STEEL__, 1],
    [we.__JUNK__, 1],
    [we.__SULFUR__, 1]
  ], 1, [
    [le.__SMELTER__, 1e4]
  ]),
  stack: 255,
  loot: fe.__ALLOYS__
}, {
  id: we.__SULFUR_AXE__,
  itemButton: {
    src: ["img/inv-sulfur-axe-out.png", "img/inv-sulfur-axe-in.png",
      "img/inv-sulfur-axe-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Sulfur Axe", "You look cool with it.", Ee.__TOOL__, [
    [we.__STONE_AXE__, 1],
    [we.__ALLOYS__, 8],
    [we.__SHAPED_METAL__, 10],
    [we.__SULFUR__, 20]
  ], 1, [
    [le.__WORKBENCH2__, 2e5]
  ], 10, we.__STONE_AXE__),
  idWeapon: 35,
  stack: 1,
  loot: fe.__SULFUR_AXE__,
  wait: 10
}, {
  id: we.__LANDMINE__,
  itemButton: {
    src: ["img/inv-landmine-out.png", "img/inv-landmine-in.png",
      "img/inv-landmine-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Landmine", "When you feel it, it's too late", Ee
    .__WEAPON__, [
      [we.__SHAPED_METAL__, 4],
      [we.__JUNK__, 1],
      [we.__SULFUR__, 2],
      [we.__ANIMAL_FAT__, 2]
    ], 1, [
      [le.__WORKBENCH2__, 4e4]
    ], 9),
  stack: 20,
  loot: fe.__LANDMINE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [50, 50, 50, 50],
  height: [50, 50, 50, 50],
  _x: [25, 25, 25, 25],
  _y: [25, 25, 25, 25],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-landmine.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-landmine.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 1,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  damage: 200,
  damageBuilding: 400,
  areaEffect: 0,
  draw: re.landmine,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-landmine-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-landmine-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-landmine-2.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__KAKI__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 5,
  score: 0
}, {
  id: we.__DYNAMITE__,
  itemButton: {
    src: ["img/inv-dynamite-out.png", "img/inv-dynamite-in.png",
      "img/inv-dynamite-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Dynamite", "Get out of here, it gonna blow!", Ee
    .__WEAPON__, [
      [we.__STRING__, 1],
      [we.__ANIMAL_FAT__, 2],
      [we.__SULFUR__, 2],
      [we.__JUNK__, 1]
    ], 1, [
      [le.__WORKBENCH2__, 4e4]
    ], 9),
  stack: 10,
  loot: fe.__DYNAMITE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-dynamite.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-dynamite.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 1,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  damage: 180,
  damageBuilding: 1400,
  areaEffect: 0,
  draw: re.dynamite,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__NO_SOUND__,
  building: [{
    src: "img/day-dynamite.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/dynamite-yellow.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__RED_STEEL__,
  particlesDist: 80,
  timelife: 5e3,
  life: 100,
  score: 0
}, {
  id: we.__C4__,
  itemButton: {
    src: ["img/inv-C4-out.png", "img/inv-C4-in.png",
      "img/inv-C4-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("C4", "Explode when you hit the trigger!", Ee.__WEAPON__, [
    [we.__DYNAMITE__, 2],
    [we.__SMALL_WIRE__, 1],
    [we.__ALLOYS__, 2],
    [we.__ELECTRONICS__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 6e4]
  ], 16, we.__DYNAMITE__),
  stack: 5,
  loot: fe.__C4__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-C4.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-C4.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 1,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  damage: 255,
  damageBuilding: 6e3,
  collision: 0,
  areaEffect: 0,
  draw: re.dynamite,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__NO_SOUND__,
  building: [{
    src: "img/day-C4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/C4-red.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__KAKI__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 100,
  score: 0
}, {
  id: we.__C4_TRIGGER__,
  itemButton: {
    src: ["img/inv-joystick-out.png", "img/inv-joystick-in.png",
      "img/inv-joystick-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("C4 Trigger", "Don't press the button or else...", Ee
    .__WEAPON__, [
      [we.__SHAPED_METAL__, 5],
      [we.__ELECTRONICS__, 1],
      [we.__ENERGY_CELLS__, 8],
      [we.__SMALL_WIRE__, 1]
    ], 1, [
      [le.__WORKBENCH2__, 1e5]
    ], 16, we.__C4__),
  stack: 1,
  loot: fe.__C4_TRIGGER__,
  wait: 10,
  idWeapon: 36,
  score: 0
}, {
  id: we.__COMPOST__,
  itemButton: {
    src: ["img/inv-composter-out.png", "img/inv-composter-in.png",
      "img/inv-composter-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Compost", "Allows to accelerate rotting", Ee.__SURVIVAL__,
    [
      [we.__SHAPED_METAL__, 4],
      [we.__ELECTRONICS__, 1]
    ], 1, [
      [le.__WORKBENCH2__, 1e5]
    ], 8),
  idWeapon: 21,
  fuel: 1e4,
  zid: 0,
  z: 1,
  area: le.__COMPOST__,
  stack: 255,
  loot: fe.__COMPOST__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-composter.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-composter.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.compost,
  packetId: 16,
  interact: {
    src: "img/e-composter.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-composter-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-composter.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: we.__ARMOR_PHYSIC_1__,
  itemButton: {
    src: ["img/inv-metal-helmet-out.png", "img/inv-metal-helmet-in.png",
      "img/inv-metal-helmet-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Metal Helmet", "Protects you from melee weapons", Ee
    .__CLOTHE__, [
      [we.__SHAPED_METAL__, 3],
      [we.__ANIMAL_TENDON__, 3],
      [we.__LEATHER_BOAR__, 3],
      [we.__NAILS__, 80]
    ], 1, [
      [le.__WORKBENCH__, 7e4]
    ]),
  idClothe: 7,
  stack: 1,
  loot: fe.__ARMOR_PHYSIC_1__,
  wait: 10,
  warm: 0,
  def: .15,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: -.01
}, {
  id: we.__ARMOR_PHYSIC_2__,
  itemButton: {
    src: ["img/inv-welding-helmet-out.png", "img/inv-welding-helmet-in.png",
      "img/inv-welding-helmet-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Welding Helmet", "Protects you from melee weapons", Ee
    .__CLOTHE__, [
      [we.__SHAPED_METAL__, 10],
      [we.__ALLOYS__, 2],
      [we.__LEATHER_BOAR__, 3],
      [we.__NAILS__, 160],
      [we.__ARMOR_PHYSIC_1__, 1]
    ], 1, [
      [le.__WORKBENCH2__, 14e4]
    ], 7),
  idClothe: 8,
  stack: 1,
  loot: fe.__ARMOR_PHYSIC_2__,
  wait: 10,
  warm: 0,
  def: .4,
  bul: 0,
  ene: 0,
  boom: .05,
  rad: 0,
  speed: -.02
}, {
  id: we.__ARMOR_PHYSIC_3__,
  itemButton: {
    src: ["img/inv-gladiator-helmet-out.png",
      "img/inv-gladiator-helmet-in.png",
      "img/inv-gladiator-helmet-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gladiator Helmet", "Strength and honor.", Ee.__CLOTHE__, [
    [we.__SHAPED_METAL__, 12],
    [we.__ALLOYS__, 6],
    [we.__LEATHER_BOAR__, 4],
    [we.__NAILS__, 255],
    [we.__ARMOR_PHYSIC_2__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 3e5]
  ], 17, we.__ARMOR_PHYSIC_2__),
  idClothe: 9,
  stack: 1,
  loot: fe.__ARMOR_PHYSIC_3__,
  wait: 10,
  warm: 0,
  def: .6,
  bul: .1,
  ene: 0,
  boom: .2,
  rad: 0,
  speed: -.03
}, {
  id: we.__ARMOR_FIRE_1__,
  itemButton: {
    src: ["img/inv-leather-jacket-out.png", "img/inv-leather-jacket-in.png",
      "img/inv-leather-jacket-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Leather Jacket", "Protects you from guns", Ee.__CLOTHE__,
    [
      [we.__STRING__, 2],
      [we.__LEATHER_BOAR__, 4]
    ], 1, [
      [le.__WEAVING__, 7e4]
    ]),
  idClothe: 10,
  stack: 1,
  loot: fe.__ARMOR_FIRE_1__,
  wait: 10,
  warm: 6e-4,
  def: 0,
  bul: .2,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__ARMOR_FIRE_2__,
  itemButton: {
    src: ["img/inv-kevlar-suit-out.png", "img/inv-kevlar-suit-in.png",
      "img/inv-kevlar-suit-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Kevlar Suit", "Protects you from guns", Ee.__CLOTHE__, [
    [we.__SHAPED_METAL__, 6],
    [we.__STRING__, 4],
    [we.__LEATHER_BOAR__, 6],
    [we.__ALLOYS__, 2],
    [we.__ARMOR_FIRE_1__, 1]
  ], 1, [
    [le.__WEAVING__, 1e5]
  ], 12),
  idClothe: 11,
  stack: 1,
  loot: fe.__ARMOR_FIRE_2__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: .4,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__ARMOR_FIRE_3__,
  itemButton: {
    src: ["img/inv-SWAT-suit-out.png", "img/inv-SWAT-suit-in.png",
      "img/inv-SWAT-suit-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("SWAT Suit", "Protects you from guns", Ee.__CLOTHE__, [
    [we.__SHAPED_METAL__, 10],
    [we.__STRING__, 10],
    [we.__LEATHER_BOAR__, 10],
    [we.__ALLOYS__, 4],
    [we.__ARMOR_FIRE_2__, 1]
  ], 1, [
    [le.__WEAVING__, 2e5]
  ], 18, we.__ARMOR_FIRE_2__),
  idClothe: 12,
  stack: 1,
  loot: fe.__ARMOR_FIRE_3__,
  wait: 10,
  warm: 0,
  def: .1,
  bul: .7,
  ene: 0,
  boom: .1,
  rad: 0,
  speed: -.01
}, {
  id: we.__ARMOR_DEMINER__,
  itemButton: {
    src: ["img/inv-protective-suit-out.png",
      "img/inv-protective-suit-in.png",
      "img/inv-protective-suit-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Protective Suit", "Protects you from explosives", Ee
    .__CLOTHE__, [
      [we.__SHAPED_METAL__, 6],
      [we.__STRING__, 6],
      [we.__LEATHER_BOAR__, 6],
      [we.__ALLOYS__, 2]
    ], 1, [
      [le.__WEAVING__, 2e5]
    ], 12, we.__FEATHERWEIGHT__),
  idClothe: 13,
  stack: 1,
  loot: fe.__ARMOR_DEMINER__,
  wait: 10,
  warm: 85e-5,
  def: 0,
  bul: 0,
  ene: 0,
  boom: .9,
  rad: 0,
  speed: -.03
}, {
  id: we.__ARMOR_TESLA_1__,
  itemButton: {
    src: ["img/inv-tesla-0-out.png", "img/inv-tesla-0-in.png",
      "img/inv-tesla-0-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Power Armor", "Protects you from energy weapons", Ee
    .__CLOTHE__, [
      [we.__SHAPED_METAL__, 20],
      [we.__SHAPED_URANIUM__, 2],
      [we.__ELECTRONICS__, 1],
      [we.__WIRE__, 2],
      [we.__ALLOYS__, 2]
    ], 1, [
      [le.__TESLA__, 15e4]
    ], 10),
  idClothe: 14,
  stack: 1,
  loot: fe.__ARMOR_TESLA_1__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: .3,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__ARMOR_TESLA_2__,
  itemButton: {
    src: ["img/inv-tesla-armor-out.png", "img/inv-tesla-armor-in.png",
      "img/inv-tesla-armor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tesla Armor", "Protects you from energy weapons", Ee
    .__CLOTHE__, [
      [we.__ARMOR_TESLA_1__, 1],
      [we.__SHAPED_URANIUM__, 10],
      [we.__ELECTRONICS__, 5],
      [we.__WIRE__, 5],
      [we.__ALLOYS__, 10]
    ], 1, [
      [le.__TESLA__, 3e5]
    ], 18, we.__ARMOR_TESLA_1__, 3),
  idClothe: 15,
  stack: 1,
  loot: fe.__ARMOR_TESLA_2__,
  wait: 10,
  warm: 85e-5,
  def: .2,
  bul: .2,
  ene: .75,
  boom: .2,
  rad: .01,
  speed: -.02
}, {
  id: we.__WOOD_SPIKE__,
  itemButton: {
    src: ["img/inv-wood-spike-out.png", "img/inv-wood-spike-in.png",
      "img/inv-wood-spike-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Wooden Spike", "Hurt and slow down", Ee.__BUILDING__, [
    [we.__WOOD__, 80]
  ], 1, [
    [le.__WORKBENCH__, 25e3]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  stack: 40,
  loot: fe.__WOOD_SPIKE__,
  wait: 10,
  delay: 1e3,
  width: [50, 50, 50, 50],
  height: [50, 50, 50, 50],
  _x: [25, 25, 25, 25],
  _y: [25, 25, 25, 25],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-wood-spike.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-wood-spike.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.spike,
  hidden: [{
    src: "img/day-wood-spike-cover1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-spike-cover2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-spike-cover3.png",
    img: {
      isLoaded: 0
    }
  }],
  deployed: [{
    src: "img/day-wood-spike-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-spike-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-wood-spike-3.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 200,
  score: 0
}, {
  id: we.__LASER_SUBMACHINE__,
  itemButton: {
    src: ["img/inv-laser-submachine-out.png",
      "img/inv-laser-submachine-in.png",
      "img/inv-laser-submachine-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Laser Submachine", "It's the best weapon", Ee.__WEAPON__,
    [
      [we.__ALLOYS__, 10],
      [we.__SHAPED_METAL__, 6],
      [we.__SHAPED_URANIUM__, 6],
      [we.__WIRE__, 2],
      [we.__ELECTRONICS__, 3]
    ], 1, [
      [le.__TESLA__, 18e4]
    ], 14, we.__LASER_PISTOL__, 2),
  idWeapon: 37,
  bullet: we.__ENERGY_CELLS__,
  stack: 1,
  loot: fe.__LASER_SUBMACHINE__,
  wait: 10
}, {
  id: we.__GRENADE__,
  itemButton: {
    src: ["img/inv-grenade-out.png", "img/inv-grenade-in.png",
      "img/inv-grenade-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Grenade", "Explodes when you throw it away.", Ee
    .__WEAPON__, [
      [we.__SHAPED_METAL__, 2],
      [we.__JUNK__, 2],
      [we.__SULFUR__, 2],
      [we.__ANIMAL_FAT__, 2]
    ], 2, [
      [le.__WORKBENCH2__, 3e4]
    ], 10),
  idWeapon: 38,
  damage: 130,
  damageBuilding: 400,
  stack: 10,
  loot: fe.__GRENADE__,
  wait: 10
}, {
  id: we.__SUPER_HAMMER__,
  itemButton: {
    src: ["img/inv-super-hammer-out.png", "img/inv-super-hammer-in.png",
      "img/inv-super-hammer-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Super Hammer", "Destroy indestructible walls."),
  idWeapon: 39,
  stack: 1,
  loot: fe.__SUPER_HAMMER__,
  wait: 10
}, {
  id: we.__GHOUL_BLOOD__,
  itemButton: {
    src: ["img/inv-ghoul-blood-out.png", "img/inv-ghoul-blood-in.png",
      "img/inv-ghoul-blood-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Ghoul Blood", "Find it on speedy ghouls"),
  stack: 255,
  loot: fe.__GHOUL_BLOOD__,
  score: 100
}, {
  id: we.__CAMOUFLAGE_GEAR__,
  itemButton: {
    src: ["img/inv-camouflage-gear-out.png",
      "img/inv-camouflage-gear-in.png",
      "img/inv-camouflage-gear-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Camouflage Gear", "Hide you in the forest", Ee.__CLOTHE__,
    [
      [we.__WOOD__, 90],
      [we.__STRING__, 2],
      [we.__LEATHER_BOAR__, 2]
    ], 1, [
      [le.__WEAVING__, 4e4]
    ]),
  idClothe: 16,
  stack: 1,
  loot: fe.__CAMOUFLAGE_GEAR__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: we.__AGITATOR__,
  itemButton: {
    src: ["img/inv-agitator-out.png", "img/inv-agitator-in.png",
      "img/inv-agitator-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Agitator", "Allows to craft drugs", Ee.__SURVIVAL__, [
    [we.__SHAPED_METAL__, 6],
    [we.__ELECTRONICS__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 1e5]
  ], 8),
  idWeapon: 21,
  fuel: 1e5,
  zid: 0,
  z: 1,
  area: le.__AGITATOR__,
  stack: 255,
  loot: fe.__AGITATOR__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-agitator.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-agitator.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.agitator,
  packetId: 16,
  interact: {
    src: "img/e-agitator.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-agitator1-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-agitator1-on.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-agitator-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-agitator-2.png",
    img: {
      isLoaded: 0
    }
  }],
  spine: [
    [-25.5, 21],
    [-21, -25.5],
    [25.5, -21],
    [21, 25.5]
  ],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: we.__GHOUL_DRUG__,
  itemButton: {
    src: ["img/inv-ghoul-drug-out.png", "img/inv-ghoul-drug-in.png",
      "img/inv-ghoul-drug-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Ghoul Drug", "Ghouls does not attack you.", Ee.__DRUG__, [
    [we.__SYRINGE__, 1],
    [we.__CHEMICAL_COMPONENT__, 1],
    [we.__MUSHROOM2__, 1],
    [we.__MUSHROOM3__, 1],
    [we.__GHOUL_BLOOD__, 1]
  ], 1, [
    [le.__AGITATOR__, 3e4]
  ], 10),
  idWeapon: 40,
  stack: 5,
  loot: fe.__GHOUL_DRUG__,
  wait: 10
}, {
  id: we.__MUSHROOM1__,
  itemButton: {
    src: ["img/inv-mushroom1-out.png", "img/inv-mushroom1-in.png",
      "img/inv-mushroom1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Amanita", "Poisoned, really dangerous"),
  stack: 20,
  loot: fe.__MUSHROOM1__,
  wait: 5,
  perish: 10,
  perishId: we.__ROTTEN_MUSHROOM1__,
  idWeapon: 41,
  score: 24
}, {
  id: we.__MUSHROOM2__,
  itemButton: {
    src: ["img/inv-mushroom2-out.png", "img/inv-mushroom2-in.png",
      "img/inv-mushroom2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Boletus", "Can be eaten."),
  stack: 20,
  loot: fe.__MUSHROOM2__,
  wait: 5,
  perish: 10,
  perishId: we.__ROTTEN_MUSHROOM2__,
  idWeapon: 42,
  score: 24
}, {
  id: we.__MUSHROOM3__,
  itemButton: {
    src: ["img/inv-mushroom3-out.png", "img/inv-mushroom3-in.png",
      "img/inv-mushroom3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Russula", "Can be eaten."),
  stack: 20,
  loot: fe.__MUSHROOM3__,
  wait: 5,
  perish: 10,
  perishId: we.__ROTTEN_MUSHROOM3__,
  idWeapon: 43,
  score: 24
}, {
  id: we.__ROTTEN_MUSHROOM1__,
  itemButton: {
    src: ["img/inv-rotten-mushroom1-out.png",
      "img/inv-rotten-mushroom1-in.png",
      "img/inv-rotten-mushroom1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Mushroom", "Go on, have a bite!"),
  stack: 20,
  loot: fe.__ROTTEN_MUSHROOM1__,
  wait: 5,
  idWeapon: 44,
  score: 20
}, {
  id: we.__ROTTEN_MUSHROOM2__,
  itemButton: {
    src: ["img/inv-rotten-mushroom2-out.png",
      "img/inv-rotten-mushroom2-in.png",
      "img/inv-rotten-mushroom2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Mushroom", "Go on, have a bite!"),
  stack: 20,
  loot: fe.__ROTTEN_MUSHROOM2__,
  wait: 5,
  idWeapon: 45,
  score: 20
}, {
  id: we.__ROTTEN_MUSHROOM3__,
  itemButton: {
    src: ["img/inv-rotten-mushroom3-out.png",
      "img/inv-rotten-mushroom3-in.png",
      "img/inv-rotten-mushroom3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Mushroom", "Go on, have a bite!"),
  stack: 20,
  loot: fe.__ROTTEN_MUSHROOM3__,
  wait: 5,
  idWeapon: 46,
  score: 20
}, {
  id: we.__LAPADONE__,
  itemButton: {
    src: ["img/inv-lapadoine-out.png", "img/inv-lapadoine-in.png",
      "img/inv-lapadoine-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Lapadone", "You are faster a certain time.", Ee.__DRUG__,
    [
      [we.__SYRINGE__, 1],
      [we.__CHEMICAL_COMPONENT__, 1],
      [we.__MUSHROOM1__, 1],
      [we.__GHOUL_BLOOD__, 1]
    ], 1, [
      [le.__AGITATOR__, 45e3]
    ], 14),
  idWeapon: 47,
  stack: 5,
  loot: fe.__LAPADONE__,
  wait: 10
}, {
  id: we.__LAPABOT_REPAIR__,
  itemButton: {
    src: ["img/inv-lapabot-out.png", "img/inv-lapabot-in.png",
      "img/inv-lapabot-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("LapaBot", "Repair your base for you", Ee.__SURVIVAL__, [
    [we.__SHAPED_METAL__, 6],
    [we.__ELECTRONICS__, 1],
    [we.__SMALL_WIRE__, 1],
    [we.__ALLOYS__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 1e5]
  ], 8),
  stack: 5,
  loot: fe.__LAPABOT_REPAIR__,
  fruit: fe.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/clear-blue-lapabot.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-lapabot.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.construction,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/lapabot0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/lapabot1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/lapabot2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/lapabot3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/lapabot4.png",
    img: {
      isLoaded: 0
    }
  }],
  builder: {
    src: "img/day-lapabot-builder.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0,
  timelifeAI: 31536e7,
  idAI: Le.__LAPABOT_REPAIR__,
  evolve: 2e4,
  evolveMaxStep: 4,
  killConstructor: 1
}, {
  id: we.__SMALL_WIRE__,
  itemButton: {
    src: ["img/inv-small-wire-out.png", "img/inv-small-wire-in.png",
      "img/inv-small-wire-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Small Wire",
    "Find it on TV's and computers in abandonned houses"),
  stack: 255,
  loot: fe.__SMALL_WIRE__,
  score: 40
}, {
  id: we.__PUMPKIN__,
  itemButton: {
    src: ["img/inv-pumpkin-out.png", "img/inv-pumpkin-in.png",
      "img/inv-pumpkin-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Pumpkin", "Eat it or craft a pumpkin ghoul"),
  stack: 20,
  loot: fe.__PUMPKIN__,
  wait: 5,
  perish: 10,
  perishId: we.__ROTTEN_PUMPKIN__,
  idWeapon: 48,
  score: 24
}, {
  id: we.__ROTTEN_PUMPKIN__,
  itemButton: {
    src: ["img/inv-rotten-pumpkin-out.png", "img/inv-rotten-pumpkin-in.png",
      "img/inv-rotten-pumpkin-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Pumpkin", "You should not click"),
  stack: 20,
  loot: fe.__ROTTEN_PUMPKIN__,
  wait: 5,
  idWeapon: 49,
  score: 20
}, {
  id: we.__SEED_GHOUL__,
  itemButton: {
    src: ["img/inv-ghoul5-out.png", "img/inv-ghoul5-in.png",
      "img/inv-ghoul5-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Ghoul Seed", "Plant your pumpkin pet", -1, [
    [we.__PUMPKIN__, 1],
    [we.__GHOUL_BLOOD__, 1]
  ], 1, [
    [le.__FIRE__, 3e4],
    [le.__BBQ__, 2e4]
  ], 99),
  stack: 40,
  loot: fe.__SEED_GHOUL__,
  fruit: fe.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/clear-blue-root.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-root.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.orangeSeed,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: [{
    src: "img/day-root0-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-root1-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-root2-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-root3-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-root4-ghoul.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__ORANGE__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0,
  timelifeAI: 12e4,
  idAI: Le.__PUMPKIN_GHOUL__,
  evolve: 15e3,
  evolveMaxStep: 3,
  killConstructor: 0
}, {
  id: we.__EXTRACTOR__,
  itemButton: {
    src: ["img/inv-extractor-out.png", "img/inv-extractor-in.png",
      "img/inv-extractor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Extractor",
    "Allows you to extract minerals from the ground", Ee.__SURVIVAL__, [
      [we.__ALLOYS__, 2],
      [we.__SHAPED_METAL__, 10],
      [we.__SHAPED_URANIUM__, 2],
      [we.__SMALL_WIRE__, 2],
      [we.__ELECTRONICS__, 1]
    ], 1, [
      [le.__WORKBENCH2__, 1e5]
    ], 12),
  idWeapon: 21,
  fuel: 74e4,
  zid: 0,
  z: 1,
  area: le.__EXTRACTOR__,
  stack: 255,
  loot: fe.__EXTRACTOR__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-extractor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-extractor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.extractor,
  packetId: 16,
  interact: {
    src: "img/e-extractor.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-extractor.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-extractor-rotate.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-extractor-off.png",
    img: {
      isLoaded: 0
    }
  }],
  spine: [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: we.__ANTIDOTE__,
  itemButton: {
    src: ["img/inv-antidote-out.png", "img/inv-antidote-in.png",
      "img/inv-antidote-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Antidote", "Remove the withdrawal effects (pink skin)", Ee
    .__DRUG__, [
      [we.__SYRINGE__, 1],
      [we.__CHEMICAL_COMPONENT__, 1],
      [we.__MUSHROOM1__, 1],
      [we.__ANTIDOTE_FLOWER__, 1]
    ], 1, [
      [le.__AGITATOR__, 45e3]
    ], 14),
  idWeapon: 50,
  stack: 5,
  loot: fe.__ANTIDOTE__,
  wait: 10
}, {
  id: we.__ANTIDOTE_FLOWER__,
  itemButton: {
    src: ["img/inv-antidote-flower-out.png",
      "img/inv-antidote-flower-in.png",
      "img/inv-antidote-flower-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rare Flower", "Use it to make an antidote"),
  stack: 5,
  loot: fe.__ANTIDOTE_FLOWER__,
  score: 400
}, {
  id: we.__SEED_TREE__,
  itemButton: {
    src: ["img/inv-seed-tree-out.png", "img/inv-seed-tree-in.png",
      "img/inv-seed-tree-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tree Seed", "Plant your forest", Ee.__PLANT__, [
    [we.__ACORN__, 1]
  ], 5, [
    [le.__FIRE__, 6e4],
    [le.__BBQ__, 4e4]
  ]),
  stack: 100,
  loot: fe.__SEED_TREE__,
  fruit: fe.__ORANGE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/clear-blue-plant-tree.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-plant-tree.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__SEED_RESOURCE__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.treeSeed,
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  building: [{
    src: "img/day-plant-tree0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant-tree1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant-tree2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant-tree3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-plant4-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__WOOD__,
  particlesDist: 68,
  timelife: 24e5,
  life: 150,
  score: 0
}, {
  id: we.__ACORN__,
  itemButton: {
    src: ["img/inv-acorn-out.png", "img/inv-acorn-in.png",
      "img/inv-acorn-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Acorn", "Eat it or plant a tree"),
  stack: 20,
  loot: fe.__ACORN__,
  wait: 5,
  perish: 3,
  perishId: we.__ROTTEN_ACORN__,
  idWeapon: 51,
  score: 24
}, {
  id: we.__ROTTEN_ACORN__,
  itemButton: {
    src: ["img/inv-rotten-acorn-out.png", "img/inv-rotten-acorn-in.png",
      "img/inv-rotten-acorn-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Rotten Acorn", "Not really good"),
  stack: 20,
  loot: fe.__ROTTEN_ACORN__,
  wait: 5,
  idWeapon: 52,
  score: 20
}, {
  id: we.__LASER_SNIPER__,
  itemButton: {
    src: ["img/inv-laser-sniper-out.png", "img/inv-laser-sniper-in.png",
      "img/inv-laser-sniper-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Laser Sniper", "Faster than a sniper", Ee.__WEAPON__, [
    [we.__ALLOYS__, 8],
    [we.__SHAPED_METAL__, 6],
    [we.__SHAPED_URANIUM__, 5],
    [we.__WIRE__, 3],
    [we.__ELECTRONICS__, 3]
  ], 1, [
    [le.__TESLA__, 18e4]
  ], 14, we.__LASER_PISTOL__, 2),
  idWeapon: 53,
  bullet: we.__ENERGY_CELLS__,
  stack: 1,
  loot: fe.__LASER_SNIPER__,
  wait: 10
}, {
  id: we.__HAL_BOT__,
  itemButton: {
    src: ["img/inv-hal-bot-out.png", "img/inv-hal-bot-in.png",
      "img/inv-hal-bot-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("HAL Bot", "Protect you", Ee.__SURVIVAL__, [
    [we.__SHAPED_METAL__, 6],
    [we.__ELECTRONICS__, 1],
    [we.__SMALL_WIRE__, 1],
    [we.__ALLOYS__, 1]
  ], 1, [
    [le.__WORKBENCH2__, 1e5]
  ], 8),
  stack: 5,
  loot: fe.__HAL_BOT__,
  fruit: fe.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/clear-blue-hal-bot.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-hal-bot.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.construction,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/hal-bot0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/hal-bot1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/hal-bot2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/hal-bot3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/hal-bot4.png",
    img: {
      isLoaded: 0
    }
  }],
  builder: {
    src: "img/day-hal-bot-builder.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 68,
  timelife: 24e5,
  life: 400,
  score: 0,
  timelifeAI: 31536e7,
  idAI: Le.__HAL_BOT__,
  evolve: 8e3,
  evolveMaxStep: 4,
  killConstructor: 1
}, {
  id: we.__TESLA_BOT__,
  itemButton: {
    src: ["img/inv-tesla-bot-out.png", "img/inv-tesla-bot-in.png",
      "img/inv-tesla-bot-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Tesla Bot", "Protect you", Ee.__SURVIVAL__, [
    [we.__SHAPED_URANIUM__, 3],
    [we.__ELECTRONICS__, 1],
    [we.__SMALL_WIRE__, 3],
    [we.__WIRE__, 3],
    [we.__ALLOYS__, 3]
  ], 1, [
    [le.__TESLA__, 2e5]
  ], 16),
  stack: 5,
  loot: fe.__TESLA_BOT__,
  fruit: fe.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "img/clear-blue-tesla-bot.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-tesla-bot.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: pe.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.construction,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/tesla-bot0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/tesla-bot1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/tesla-bot2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/tesla-bot3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/tesla-bot4.png",
    img: {
      isLoaded: 0
    }
  }],
  builder: {
    src: "img/day-lapabot-builder.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 68,
  timelife: 24e5,
  life: 500,
  score: 0,
  timelifeAI: 31536e7,
  idAI: Le.__TESLA_BOT__,
  evolve: 2e4,
  evolveMaxStep: 4,
  killConstructor: 1
}, {
  id: we.__CABLE0__,
  itemButton: {
    src: ["img/inv-wire0-out.png", "img/inv-wire0-in.png",
      "img/inv-wire0-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cable", "Create automatic mechanisms", Ee.__LOGIC__, [
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__CABLE0__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-wire0.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-wire0.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: {
    src: "img/day-wire0.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__CABLE1__,
  itemButton: {
    src: ["img/inv-wire1-out.png", "img/inv-wire1-in.png",
      "img/inv-wire1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cable", "Create automatic mechanisms", Ee.__LOGIC__, [
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__CABLE1__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-wire1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-wire1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: {
    src: "img/day-wire1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__CABLE2__,
  itemButton: {
    src: ["img/inv-wire2-out.png", "img/inv-wire2-in.png",
      "img/inv-wire2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cable", "Create automatic mechanisms", Ee.__LOGIC__, [
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__CABLE2__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-wire2.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-wire2.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: {
    src: "img/day-wire2.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__CABLE3__,
  itemButton: {
    src: ["img/inv-wire3-out.png", "img/inv-wire3-in.png",
      "img/inv-wire3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cable", "Create automatic mechanisms", Ee.__LOGIC__, [
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__CABLE3__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-wire3.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-wire3.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: {
    src: "img/day-wire3.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__SWITCH__,
  itemButton: {
    src: ["img/inv-switch-out.png", "img/inv-switch-in.png",
      "img/inv-switch-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Switch", "Turn on/off mechanisms", Ee.__LOGIC__, [
    [we.__SHAPED_METAL__, 1],
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__SWITCH__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-switch.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-switch.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.switchOff,
  packetId: 37,
  interact: {
    src: "img/e-turnon.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-switch-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-switch-on.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__GATE_OR__,
  itemButton: {
    src: ["img/inv-switch-or-out.png", "img/inv-switch-or-in.png",
      "img/inv-switch-or-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gate OR", "Activate only if an entry is on.", Ee
    .__LOGIC__, [
      [we.__SHAPED_METAL__, 1],
      [we.__SMALL_WIRE__, 1]
    ], 3, [
      [le.__WELDING_MACHINE__, 15e3]
    ]),
  stack: 255,
  loot: fe.__GATE_OR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-switch-or.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-switch-or.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-switch-or.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__GATE_AND__,
  itemButton: {
    src: ["img/inv-switch-and-out.png", "img/inv-switch-and-in.png",
      "img/inv-switch-and-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gate AND", "Activate only if all entries are on.", Ee
    .__LOGIC__, [
      [we.__SHAPED_METAL__, 1],
      [we.__SMALL_WIRE__, 1]
    ], 3, [
      [le.__WELDING_MACHINE__, 15e3]
    ]),
  stack: 255,
  loot: fe.__GATE_AND__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-switch-and.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-switch-and.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-switch-and.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__GATE_NOT__,
  itemButton: {
    src: ["img/inv-switch-reverse-out.png", "img/inv-switch-reverse-in.png",
      "img/inv-switch-reverse-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gate NOT", "Activate only if no entry is on.", Ee
    .__LOGIC__, [
      [we.__SHAPED_METAL__, 1],
      [we.__SMALL_WIRE__, 1]
    ], 3, [
      [le.__WELDING_MACHINE__, 15e3]
    ]),
  stack: 255,
  loot: fe.__GATE_NOT__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-switch-reverse.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-switch-reverse.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-switch-reverse.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__LAMP__,
  itemButton: {
    src: ["img/inv-lamp-white-out.png", "img/inv-lamp-white-in.png",
      "img/inv-lamp-white-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Lamp", "Turn on when connected, damage ghoul", Ee
    .__LOGIC__, [
      [we.__SHAPED_METAL__, 1],
      [we.__SMALL_WIRE__, 1]
    ], 3, [
      [le.__WELDING_MACHINE__, 15e3]
    ]),
  stack: 255,
  loot: fe.__LAMP__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-lamp.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-lamp.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 2,
  radius: 22,
  areaEffect: 0,
  draw: re.lamp,
  drawTop: re.lampLight,
  packetId: 36,
  interact: {
    src: "img/e-light.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-lamp-off.png",
    img: {
      isLoaded: 0
    }
  },
  buildingOn: [{
    src: "img/day-lamp-white.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-yellow.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-green.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-clear-blue.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-purple.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-pink.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  buildingTop: [{
    src: "img/day-lamp-light-white.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-light-yellow.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-light-green.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-light-clear-blue.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-light-purple.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-light-pink.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-lamp-light-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 600,
  score: 0
}, {
  id: we.__CABLE_WALL__,
  itemButton: {
    src: ["img/inv-cable-wall-out.png", "img/inv-cable-wall-in.png",
      "img/inv-cable-wall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cable  - Wall", "Wall that can be connected to a cable",
    Ee.__LOGIC__, [
      [we.__SHAPED_METAL__, 8],
      [we.__SMALL_WIRE__, 1]
    ], 1, [
      [le.__WELDING_MACHINE__, 15e3]
    ], 7),
  stack: 255,
  loot: fe.__CABLE_WALL__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-cable-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-cable-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1]
  ],
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.breakable,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-cable-wall.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-cable-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-cable-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-cable-wall3.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__METAL__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: we.__AUTOMATIC_DOOR__,
  itemButton: {
    src: ["img/inv-automatic-door-out.png", "img/inv-automatic-door-in.png",
      "img/inv-automatic-door-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Automatic Door",
    "Connect it to a switch to open and close it.", Ee.__LOGIC__, [
      [we.__SHAPED_METAL__, 8],
      [we.__SMALL_WIRE__, 2],
      [we.__ELECTRONICS__, 1]
    ], 1, [
      [le.__WELDING_MACHINE__, 15e3]
    ], 7),
  stack: 255,
  loot: fe.__AUTOMATIC_DOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-automatic-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-automatic-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1]
  ],
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.automaticDoor,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [
    [{
      src: "img/day-automatic-door-off.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-automatic-door1-off.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-automatic-door2-off.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-automatic-door3-off.png",
      img: {
        isLoaded: 0
      }
    }],
    [{
      src: "img/day-automatic-door-on.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-automatic-door1-on.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-automatic-door2-on.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "img/day-automatic-door3-on.png",
      img: {
        isLoaded: 0
      }
    }]
  ],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: we.__PLATFORM__,
  itemButton: {
    src: ["img/inv-platform-out.png", "img/inv-platform-in.png",
      "img/inv-platform-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Platform", "Weight detector", Ee.__LOGIC__, [
    [we.__SHAPED_METAL__, 1],
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__PLATFORM__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-platform-off.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-platform-off.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.defaultBuilding,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-platform-off.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__FRIDGE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__STONE_CAVE__,
  itemButton: {
    src: ["img/inv-stone-cave-out.png", "img/inv-stone-cave-in.png",
      "img/inv-stone-cave-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Stone Cave", "Build mountains.", -1, [
    [we.__STONE__, 140]
  ], 1, [
    [le.__WORKBENCH__, 3e4]
  ], 99),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__STONE_CAVE__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-stone-cave.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-stone-cave.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__STONE_CAVE__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0
  ],
  broken: [{
    src: "img/day-stone-cave-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STONE_IMPACT__,
  destroy: me.__STONE_DESTROY__,
  building: [{
    src: "img/day-stone-cave0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-stone-cave46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 300,
  score: 0
}, {
  id: we.__BUNKER_WALL__,
  itemButton: {
    src: ["img/inv-bunker-wall-out.png", "img/inv-bunker-wall-in.png",
      "img/inv-bunker-wall-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Bunker Wall", "Good old memory of the wasteland.", -1, [
    [we.__STONE__, 150],
    [we.__SHAPED_METAL__, 12]
  ], 1, [
    [le.__WORKBENCH__, 3e4]
  ], 99),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: fe.__BUNKER_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-bunker-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-bunker-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__STONE_CAVE__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.wall,
  drawFloor: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0
  ],
  broken: [{
    src: "img/day-bunker-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-bunker-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-bunker-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__STEEL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 1e4,
  score: 0
}, {
  id: we.__GOLD_FLOOR__,
  itemButton: {
    src: ["img/inv-mustard-floor-out.png", "img/inv-mustard-floor-in.png",
      "img/inv-mustard-floor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Golden Floor", "Players can't spawn on it", Ee
    .__BUILDING__, [
      [we.__LEATHER_BOAR__, 2]
    ], 2, [
      [le.__WORKBENCH__, 15e3]
    ]),
  stack: 255,
  loot: fe.__GOLD_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__GOLD_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.groundFloor,
  broken: [{
    src: "img/day-mustard-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__NO_SOUND__,
  destroy: me.__PILLOW_DESTROY__,
  building: [{
    src: "img/day-mustard-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-mustard-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__GOLD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: we.__RED_FLOOR__,
  itemButton: {
    src: ["img/inv-red-floor-out.png", "img/inv-red-floor-in.png",
      "img/inv-red-floor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Red floor", "Players can't spawn on it", Ee.__BUILDING__,
    [
      [we.__LEATHER_BOAR__, 2]
    ], 2, [
      [le.__WORKBENCH__, 15e3]
    ]),
  stack: 255,
  loot: fe.__RED_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/day-clear-blue-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/day-redprint-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: we.__RED_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.groundFloor,
  broken: [{
    src: "img/day-red-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: me.__NO_SOUND__,
  destroy: me.__PILLOW_DESTROY__,
  building: [{
    src: "img/day-red-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-red-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__MUSHROOM1__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: we.__WELDING_MACHINE__,
  itemButton: {
    src: ["img/inv-welding-machine-out.png",
      "img/inv-welding-machine-in.png",
      "img/inv-welding-machine-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Welding Machine", "Allow you to make logic gates", Ee
    .__SURVIVAL__, [
      [we.__JUNK__, 2],
      [we.__SHAPED_METAL__, 4],
      [we.__ELECTRONICS__, 1]
    ], 1, [
      [le.__WORKBENCH__, 5e4]
    ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: le.__WELDING_MACHINE__,
  stack: 255,
  loot: fe.__WELDING_MACHINE__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: re.workbench,
  packetId: 16,
  interact: {
    src: "img/e-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: we.__CABLE4__,
  itemButton: {
    src: ["img/inv-wire4-out.png", "img/inv-wire4-in.png",
      "img/inv-wire4-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Cable  - Bridge", "Create automatic mechanisms", Ee
    .__LOGIC__, [
      [we.__SMALL_WIRE__, 1]
    ], 3, [
      [le.__WELDING_MACHINE__, 15e3]
    ]),
  stack: 255,
  loot: fe.__CABLE4__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-wire4.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-wire4.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__PILLOW_IMPACT__,
  destroy: me.__PILLOW_DESTROY__,
  building: {
    src: "img/day-wire4.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__GATE_TIMER__,
  itemButton: {
    src: ["img/inv-timer-out.png", "img/inv-timer-in.png",
      "img/inv-timer-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gate Timer", "Emit a signal regularly.", Ee.__LOGIC__, [
    [we.__SHAPED_METAL__, 1],
    [we.__SMALL_WIRE__, 1]
  ], 3, [
    [le.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: fe.__GATE_TIMER__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-timer.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-timer.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.timerGate,
  packetId: 38,
  interact: {
    src: "img/e-light.png",
    img: {
      isLoaded: 0
    }
  },
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: [{
    src: "img/day-timer-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-timer-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-timer-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-timer-3.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__GATE_XOR__,
  itemButton: {
    src: ["img/inv-xor-out.png", "img/inv-xor-in.png",
      "img/inv-xor-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Gate Xor", "Activate only if only one entry is on.", Ee
    .__LOGIC__, [
      [we.__SHAPED_METAL__, 1],
      [we.__SMALL_WIRE__, 1]
    ], 3, [
      [le.__WELDING_MACHINE__, 15e3]
    ]),
  stack: 255,
  loot: fe.__GATE_XOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "img/clear-blue-xor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "img/redprint-xor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: pe.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: re.hiddenBuilding,
  impact: me.__STEEL_IMPACT__,
  destroy: me.__STEEL_DESTROY__,
  building: {
    src: "img/day-xor.png",
    img: {
      isLoaded: 0
    }
  },
  particles: be.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: we.__VISION_1__,
  itemButton: {
    src: ["img/skill-eye1-out.png", "img/skill-eye1-in.png",
      "img/skill-eye1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Vision 1", "Improve your vision", Ee.__SKILL__, window
    .undefined, window.undefined, window.undefined, 0),
  scale: -.25
}, {
  id: we.__VISION_2__,
  itemButton: {
    src: ["img/skill-eye2-out.png", "img/skill-eye2-in.png",
      "img/skill-eye2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Vision 2", "Improve your vision", Ee.__SKILL__, window
    .undefined, window.undefined, window.undefined, 5, we.__VISION_1__),
  scale: -.35
}, {
  id: we.__VISION_3__,
  itemButton: {
    src: ["img/skill-eye3-out.png", "img/skill-eye3-in.png",
      "img/skill-eye3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Vision 3", "Improve your vision", Ee.__SKILL__, window
    .undefined, window.undefined, window.undefined, 7, we.__VISION_2__),
  scale: -.45
}, {
  id: we.__BUILDER_1__,
  itemButton: {
    src: ["img/skill-builder1-out.png", "img/skill-builder1-in.png",
      "img/skill-builder1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Builder 1", "Multiplies some craft by two", Ee.__SKILL__,
    window.undefined, window.undefined, window.undefined, 6, window
    .undefined, 2)
}, {
  id: we.__BUILDER_2__,
  itemButton: {
    src: ["img/skill-builder2-out.png", "img/skill-builder2-in.png",
      "img/skill-builder2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Builder 2", "Repair much faster", Ee.__SKILL__, window
    .undefined, window.undefined, window.undefined, 18, we.__BUILDER_1__)
}, {
  id: we.__INV_1__,
  itemButton: {
    src: ["img/skill-inv1-out.png", "img/skill-inv1-in.png",
      "img/skill-inv1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Inventory 1", "Add a slot in your inventory", Ee
    .__SKILL__, window.undefined, window.undefined, window.undefined, 0),
  bag: 1
}, {
  id: we.__INV_2__,
  itemButton: {
    src: ["img/skill-inv2-out.png", "img/skill-inv2-in.png",
      "img/skill-inv2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Inventory 2", "Add a slot in your inventory", Ee
    .__SKILL__, window.undefined, window.undefined, window.undefined, 5,
    we.__INV_1__),
  bag: 1
}, {
  id: we.__INV_3__,
  itemButton: {
    src: ["img/skill-inv3-out.png", "img/skill-inv3-in.png",
      "img/skill-inv3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Inventory 3", "Add a slot in your bag", Ee.__SKILL__,
      window.undefined, window.undefined, window.undefined, 7, we.__INV_2__
      ),
  bag: 1
}, {
  id: we.__INV_4__,
  itemButton: {
    src: ["img/skill-inv4-out.png", "img/skill-inv4-in.png",
      "img/skill-inv4-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Inventory 4", "Add two slots in your bag", Ee.__SKILL__,
    window.undefined, window.undefined, window.undefined, 10, we
    .__INV_3__, 2),
  bag: 2
}, {
  id: we.__INV_5__,
  itemButton: {
    src: ["img/skill-inv5-out.png", "img/skill-inv5-in.png",
      "img/skill-inv5-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Inventory 5", "Add three slots in your bag", Ee.__SKILL__,
    window.undefined, window.undefined, window.undefined, 12, we
    .__INV_4__, 3),
  bag: 3
}, {
  id: we.__FEATHERWEIGHT__,
  itemButton: {
    src: ["img/skill-lightweight-out.png", "img/skill-lightweight-in.png",
      "img/skill-lightweight-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new ye("Light Weight", "Less likely to trigger traps.", Ee
    .__SKILL__, window.undefined, window.undefined, window.undefined, 8)
}];
se = 0;
var Ae = {
  __SOFA0__: se++,
  __SOFA1__: se++,
  __SOFA2__: se++,
  __SOFA3__: se++,
  __SOFA4__: se++,
  __BED0__: se++,
  __BED1__: se++,
  __TABLE0__: se++,
  __TV0__: se++,
  __COMPUTER0__: se++,
  __CHAIR0__: se++,
  __WASHBASIN0__: se++,
  __FURNITURE0__: se++,
  __FURNITURE1__: se++,
  __FURNITURE2__: se++,
  __FURNITURE3__: se++,
  __CARTON0__: se++,
  __CARTON1__: se++,
  __SAFE0__: se++,
  __FRIDGE0__: se++,
  __FRIDGE1__: se++,
  __TOILET0__: se++,
  __LITTLETABLE0__: se++,
  __PLOT0__: se++,
  __BAREL0__: se++,
  __BAREL1__: se++,
  __GARBAGE0__: se++,
  __CUPBOARD0__: se++,
  __PHARMA0__: se++,
  __AMMOBOX0__: se++,
  __AMMOLOCKER0__: se++,
  __AMMOLOCKER1__: se++,
  __AMMOLOCKER2__: se++,
  __MACHINE0__: se++,
  __MACHINE1__: se++,
  __USINE_BOX0__: se++,
  __USINE_BOX1__: se++,
  __USINE_BOX2__: se++,
  __USINE_BOX3__: se++,
  __DISTRIBUTOR0__: se++,
  __CASH0__: se++,
  __RENFORCED__: se++,
  __SOFA6__: se++,
  __GOLD_CHAIR0__: se++,
  __GREEN_CHAIR0__: se++,
  __WOOD_CHAIR0__: se++,
  __TABLE1__: se++,
  __SMALL_LIGHT__: se++,
  __BED2__: se++,
  __FURNITURE4__: se++,
  __FURNITURE5__: se++,
  __FURNITURE6__: se++,
  __CHAIR1__: se++,
  __CHAIR2__: se++,
  __DISTRIBUTOR1__: se++,
  __SHOWER0__: se++,
  __TABLE2__: se++,
  __BLOOD_TRANS__: se++,
  __ENERGY_BOX0__: se++
};
se = 0;
var Se = ve[we.__ROAD__].subtype;
Se[se] = {
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  building: {
    src: "img/day-road0.png",
    img: {
      isLoaded: 0
    }
  },
  detail: new ye("", "", -1, [
    [we.__STONE__, 100]
  ]),
  life: 1e8,
  score: 0,
  particles: be.__NOTHING__,
  particlesDist: 70,
  angle: window.Math.PI,
  usable: 0,
  fridge: 0,
  loot: null,
  collision: 0,
  z: 0,
  zid: 2,
  areaEffect: 0,
  timelife: 31536e7
};
for (var Oe = 0; Oe < 45; Oe++) Se[++se] = window.JSON.parse(window.JSON
  .stringify(Se[0])), Se[se].building.src = "img/day-road" + se + ".png";
var Re = ve[we.__FURNITURE__].subtype;
if (Re[Ae.__SOFA0__] = {
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    _x: [0, 0, 0, 0],
    _y: [0, 0, 0, 0],
    impact: me.__PILLOW_IMPACT__,
    destroy: me.__PILLOW_DESTROY__,
    building: {
      src: "img/day-sofa0.png",
      img: {
        isLoaded: 0
      }
    },
    detail: new ye("", "", -1, [
      [we.__WOOD__, 99],
      [we.__LEATHER_BOAR__, 9],
      [we.__STRING__, 6]
    ]),
    life: 450,
    score: 0,
    particles: be.__SOFA0__,
    particlesDist: 70,
    angle: window.Math.PI,
    usable: 0,
    fridge: 0,
    loot: null,
    collision: 1,
    z: 1,
    zid: 0,
    areaEffect: 0,
    packetId: 25,
    explosion: 0,
    damage: 0,
    damageBuilding: 0,
    timelife: 31536e7
  }, Re[Ae.__SOFA1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__SOFA0__])), Re[Ae.__SOFA1__].building.src = "img/day-sofa1.png", Re[Ae
    .__SOFA1__].particles = be.__SOFA1__, Re[Ae.__SOFA2__] = window.JSON.parse(
    window.JSON.stringify(Re[Ae.__SOFA1__])), Re[Ae.__SOFA2__].building.src =
  "img/day-sofa2.png", Re[Ae.__SOFA3__] = window.JSON.parse(window.JSON
    .stringify(Re[Ae.__SOFA0__])), Re[Ae.__SOFA3__].building.src =
  "img/day-sofa3.png", Re[Ae.__SOFA3__].particles = be.__SOFA2__, Re[Ae
    .__SOFA4__] = window.JSON.parse(window.JSON.stringify(Re[Ae.__SOFA3__])),
  Re[Ae.__SOFA4__].building.src = "img/day-sofa4.png", Re[Ae.__SOFA6__] = window
  .JSON.parse(window.JSON.stringify(Re[Ae.__SOFA3__])), Re[Ae.__SOFA6__]
  .building.src = "img/day-sofa6.png", Re[Ae.__RENFORCED__] = window.JSON.parse(
    window.JSON.stringify(Re[Ae.__SOFA0__])), Re[Ae.__RENFORCED__].building
  .src = "img/day-renforced-door.png", Re[Ae.__RENFORCED__].particles = be
  .__STEEL__, Re[Ae.__RENFORCED__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 40]
  ]), Re[Ae.__RENFORCED__].life = 7e3, Re[Ae.__MACHINE0__] = window.JSON.parse(
    window.JSON.stringify(Re[Ae.__SOFA0__])), Re[Ae.__MACHINE0__].building.src =
  "img/day-electronic-box0.png", Re[Ae.__MACHINE0__].impact = me
  .__STEEL_IMPACT__, Re[Ae.__MACHINE0__].destroy = me.__STEEL_DESTROY__, Re[Ae
    .__MACHINE0__].particles = be.__STEEL__, Re[Ae.__MACHINE0__].detail =
  new ye("", "", -1, [
    [we.__ENERGY_CELLS__, 8],
    [we.__ELECTRONICS__, 4],
    [we.__SHAPED_METAL__, 4],
    [we.__JUNK__, 12]
  ]), Re[Ae.__MACHINE0__].width = [100, 100, 100, 100], Re[Ae.__MACHINE0__]
  .height = [100, 100, 100, 100], Re[Ae.__MACHINE0__]._x = [0, 0, 0, 0], Re[Ae
    .__MACHINE0__]._y = [0, 0, 0, 0], Re[Ae.__MACHINE0__].life = 800, Re[Ae
    .__MACHINE1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__MACHINE0__])), Re[Ae.__MACHINE1__].building.src =
  "img/day-electronic-box1.png", Re[Ae.__MACHINE1__].width = [120, 120, 120,
    120], Re[Ae.__MACHINE1__].height = [120, 120, 120, 120], Re[Ae.__MACHINE1__]
  ._x = [-10, -10, -10, -10], Re[Ae.__MACHINE1__]._y = [-10, -10, -10, -10], Re[
    Ae.__MACHINE1__].detail = new ye("", "", -1, [
    [we.__ENERGY_CELLS__, 16],
    [we.__ELECTRONICS__, 16],
    [we.__WIRE__, 8],
    [we.__SHAPED_METAL__, 16]
  ]), Re[Ae.__MACHINE1__].life = 1400, Re[Ae.__BED0__] = window.JSON.parse(
    window.JSON.stringify(Re[Ae.__SOFA0__])), Re[Ae.__BED0__].building.src =
  "img/day-bed0.png", Re[Ae.__BED0__].particles = be.__BED0__, Re[Ae.__BED0__]
  .detail = new ye("", "", -1, [
    [we.__WOOD__, 200],
    [we.__LEATHER_BOAR__, 20]
  ]), Re[Ae.__BED1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__BED0__])), Re[Ae.__BED1__].building.src = "img/day-bed1.png", Re[Ae
    .__BED1__].particles = be.__BED1__, Re[Ae.__BED2__] = window.JSON.parse(
    window.JSON.stringify(Re[Ae.__BED0__])), Re[Ae.__BED2__].building.src =
  "img/day-bed2.png", Re[Ae.__BED2__].particles = be.__GREY_STEEL__, Re[Ae
    .__BED2__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 12],
    [we.__LEATHER_BOAR__, 20],
    [we.__ANIMAL_FAT__, 12]
  ]), Re[Ae.__TABLE0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__SOFA0__])), Re[Ae.__TABLE0__].building.src = "img/day-table0.png", Re[Ae
    .__TABLE0__].impact = me.__WOOD_IMPACT__, Re[Ae.__TABLE0__].destroy = me
  .__WOOD_DESTROY__, Re[Ae.__TABLE0__].particles = be.__WOOD__, Re[Ae
    .__TABLE0__].detail = new ye("", "", -1, [
    [we.__WOOD__, 200]
  ]), Re[Ae.__TABLE1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__TABLE0__])), Re[Ae.__TABLE1__].building.src = "img/day-table1.png", Re[Ae
    .__TABLE1__].width = [100, 290, 100, 280], Re[Ae.__TABLE1__].height = [280,
    100, 280, 100
  ], Re[Ae.__TABLE1__].iTile = [-1, 0, -1, 0], Re[Ae.__TABLE1__].jTile = [0, -1,
    0, -1
  ], Re[Ae.__TABLE1__]._x = [0, -90, 0, -90], Re[Ae.__TABLE1__]._y = [-90, 0, -
    90, 0
  ], Re[Ae.__TABLE2__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__TABLE0__])), Re[Ae.__TABLE2__].building.src = "img/day-table2.png", Re[Ae
    .__TABLE2__].impact = me.__STEEL_IMPACT__, Re[Ae.__TABLE2__].destroy = me
  .__STEEL_DESTROY__, Re[Ae.__TABLE2__].particles = be.__STEEL__, Re[Ae
    .__TABLE2__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__TV0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__SOFA0__])), Re[Ae.__TV0__].building.src = "img/day-tv0.png", Re[Ae
    .__TV0__].impact = me.__STEEL_IMPACT__, Re[Ae.__TV0__].destroy = me
  .__STEEL_DESTROY__, Re[Ae.__TV0__].particles = be.__SAFE0__, Re[Ae.__TV0__]
  .detail = new ye("", "", -1, [
    [we.__ELECTRONICS__, 4],
    [we.__SHAPED_METAL__, 16],
    [we.__SMALL_WIRE__, 4],
    [we.__JUNK__, 12]
  ]), Re[Ae.__COMPUTER0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__SOFA0__])), Re[Ae.__COMPUTER0__].building.src = "img/day-computer0.png",
  Re[Ae.__COMPUTER0__].impact = me.__STEEL_IMPACT__, Re[Ae.__COMPUTER0__]
  .destroy = me.__STEEL_DESTROY__, Re[Ae.__COMPUTER0__].particles = be
  .__METAL__, Re[Ae.__COMPUTER0__].detail = new ye("", "", -1, [
    [we.__SMALL_WIRE__, 4],
    [we.__SHAPED_METAL__, 16],
    [we.__JUNK__, 12],
    [we.__ELECTRONICS__, 4]
  ]), Re[Ae.__CHAIR0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__COMPUTER0__])), Re[Ae.__CHAIR0__].building.src = "img/day-chair0.png",
  Re[Ae.__CHAIR0__].detail = new ye("", "", -1, [
    [we.__LEATHER_BOAR__, 8],
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__CHAIR1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__COMPUTER0__])), Re[Ae.__CHAIR1__].building.src = "img/day-chair1.png",
  Re[Ae.__CHAIR1__].detail = new ye("", "", -1, [
    [we.__LEATHER_BOAR__, 8],
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__CHAIR2__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__COMPUTER0__])), Re[Ae.__CHAIR2__].building.src = "img/day-chair2.png",
  Re[Ae.__CHAIR2__].detail = new ye("", "", -1, [
    [we.__LEATHER_BOAR__, 8],
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__WASHBASIN0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__SOFA0__])), Re[Ae.__WASHBASIN0__].building.src =
  "img/day-washbasin0.png", Re[Ae.__WASHBASIN0__].impact = me.__WOOD_IMPACT__,
  Re[Ae.__WASHBASIN0__].destroy = me.__WOOD_DESTROY__, Re[Ae.__WASHBASIN0__]
  .particles = be.__WOODLIGHT__, Re[Ae.__WASHBASIN0__].detail = new ye("", "", -
    1, [
      [we.__WOOD__, 150],
      [we.__SHAPED_METAL__, 8]
    ]), Re[Ae.__PHARMA0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__WASHBASIN0__])), Re[Ae.__PHARMA0__].building.src = "img/day-pharma0.png",
  Re[Ae.__PHARMA0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 8],
    [we.__STONE__, 60]
  ]), Re[Ae.__PHARMA0__].impact = me.__STONE_IMPACT__, Re[Ae.__PHARMA0__]
  .destroy = me.__STONE_DESTROY__, Re[Ae.__PHARMA0__].particles = be.__TOILET__,
  Re[Ae.__PHARMA0__].usable = 1, Re[Ae.__PHARMA0__].loot = [
    [we.__BANDAGE__, 1, .1],
    [we.__MEDIKIT__, 1, .03],
    [we.__RADAWAY__, 1, .05],
    [we.__CHEMICAL_COMPONENT__, 2, .2],
    [we.__SYRINGE__, 1, .1]
  ], Re[Ae.__SHOWER0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__WASHBASIN0__])), Re[Ae.__SHOWER0__].building.src = "img/day-shower0.png",
  Re[Ae.__SHOWER0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 8],
    [we.__STONE__, 60]
  ]), Re[Ae.__SHOWER0__].impact = me.__STONE_IMPACT__, Re[Ae.__SHOWER0__]
  .destroy = me.__STONE_DESTROY__, Re[Ae.__SHOWER0__].particles = be.__TOILET__,
  Re[Ae.__SHOWER0__].width = [70, 100, 70, 100], Re[Ae.__SHOWER0__].height = [
    100, 70, 100, 70
  ], Re[Ae.__SHOWER0__]._x = [0, 0, 30, 0], Re[Ae.__SHOWER0__]._y = [0, 0, 0,
    30], Re[Ae.__FURNITURE0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__WASHBASIN0__])), Re[Ae.__FURNITURE0__].building.src =
  "img/day-furniture0.png", Re[Ae.__FURNITURE0__].width = [50, 100, 50, 100],
  Re[Ae.__FURNITURE0__].height = [100, 50, 100, 50], Re[Ae.__FURNITURE0__]
  ._x = [0, 0, 50, 0], Re[Ae.__FURNITURE0__]._y = [0, 0, 0, 50], Re[Ae
    .__FURNITURE0__].detail = new ye("", "", -1, [
    [we.__WOOD__, 200]
  ]), Re[Ae.__FURNITURE0__].usable = 1, Re[Ae.__FURNITURE0__].loot = [
    [we.__HEADSCARF__, 1, .004],
    [we.__GAZ_MASK__, 1, .004],
    [we.__9MM__, 1, .005],
    [we.__BULLET_9MM__, 30, .02],
    [we.__BANDAGE__, 1, .05],
    [we.__SEED_TOMATO__, 1, .08],
    [we.__NAILS__, 40, .1],
    [we.__SEED_ORANGE__, 2, .1],
    [we.__SLEEPING_BAG__, 1, .01],
    [we.__ENERGY_CELLS__, 4, .05],
    [we.__JUNK__, 1, .2],
    [we.__STRING__, 2, .1]
  ], Re[Ae.__FURNITURE1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE0__])), Re[Ae.__FURNITURE1__].building.src =
  "img/day-furniture1.png", Re[Ae.__FURNITURE1__].width = [70, 100, 70, 100],
  Re[Ae.__FURNITURE1__].height = [100, 70, 100, 70], Re[Ae.__FURNITURE1__]
  ._x = [0, 0, 30, 0], Re[Ae.__FURNITURE1__]._y = [0, 0, 0, 30], Re[Ae
    .__FURNITURE2__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE0__])), Re[Ae.__FURNITURE2__].building.src =
  "img/day-furniture2.png", Re[Ae.__FURNITURE2__].width = [70, 70, 70, 70], Re[
    Ae.__FURNITURE2__].height = [70, 70, 70, 70], Re[Ae.__FURNITURE2__]._x = [
    15, 15, 15, 15
  ], Re[Ae.__FURNITURE2__]._y = [15, 15, 15, 15], Re[Ae.__FURNITURE2__].detail =
  new ye("", "", -1, [
    [we.__WOOD__, 100]
  ]), Re[Ae.__FURNITURE3__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE2__])), Re[Ae.__FURNITURE3__].building.src =
  "img/day-furniture3.png", Re[Ae.__FURNITURE4__] = window.JSON.parse(window
    .JSON.stringify(Re[Ae.__FURNITURE1__])), Re[Ae.__FURNITURE4__].building
  .src = "img/day-furniture4.png", Re[Ae.__FURNITURE4__].impact = me
  .__STEEL_IMPACT__, Re[Ae.__FURNITURE4__].destroy = me.__STEEL_DESTROY__, Re[Ae
    .__FURNITURE4__].particles = be.__GREY_STEEL__, Re[Ae.__FURNITURE4__]
  .loot = [
    [we.__HEADSCARF__, 1, .004],
    [we.__GAZ_MASK__, 1, .004],
    [we.__9MM__, 1, .005],
    [we.__BULLET_9MM__, 30, .02],
    [we.__BANDAGE__, 1, .05],
    [we.__SMALL_WIRE__, 4, .1],
    [we.__LAMP__, 1, .08],
    [we.__PLATFORM__, 1, .08],
    [we.__SLEEPING_BAG__, 1, .01],
    [we.__ENERGY_CELLS__, 8, .05],
    [we.__JUNK__, 2, .2],
    [we.__STRING__, 2, .1]
  ], Re[Ae.__FURNITURE5__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE2__])), Re[Ae.__FURNITURE5__].building.src =
  "img/day-furniture5.png", Re[Ae.__FURNITURE5__].impact = me.__STEEL_IMPACT__,
  Re[Ae.__FURNITURE5__].destroy = me.__STEEL_DESTROY__, Re[Ae.__FURNITURE5__]
  .particles = be.__GREY_STEEL__, Re[Ae.__FURNITURE5__].loot = window.JSON
  .parse(window.JSON.stringify(Re[Ae.__FURNITURE4__].loot)), Re[Ae
    .__FURNITURE6__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE5__])), Re[Ae.__FURNITURE6__].building.src =
  "img/day-furniture6.png", Re[Ae.__CARTON0__] = window.JSON.parse(window.JSON
    .stringify(Re[Ae.__FURNITURE2__])), Re[Ae.__CARTON0__].impact = me
  .__PILLOW_IMPACT__, Re[Ae.__CARTON0__].destroy = me.__PILLOW_DESTROY__, Re[Ae
    .__CARTON0__].building.src = "img/day-carton-box0.png", Re[Ae.__CARTON0__]
  .detail = new ye("", "", -1, []), Re[Ae.__CARTON0__].usable = 1, Re[Ae
    .__CARTON0__].loot = [
    [we.__CAN__, 1, .1],
    [we.__JUNK__, 2, .2],
    [we.__HEADSCARF__, 1, .003],
    [we.__GAZ_MASK__, 1, .003],
    [we.__NAIL_GUN__, 1, .01],
    [we.__9MM__, 1, .005],
    [we.__BULLET_9MM__, 30, .02],
    [we.__BANDAGE__, 1, .08],
    [we.__SEED_TOMATO__, 1, .1],
    [we.__NAILS__, 40, .02],
    [we.__SEED_ORANGE__, 2, .1],
    [we.__ENERGY_CELLS__, 4, .08],
    [we.__ELECTRONICS__, 1, .1]
  ], Re[Ae.__CARTON1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__CARTON0__])), Re[Ae.__CARTON1__].building.src =
  "img/day-carton-box1.png", Re[Ae.__GOLD_CHAIR0__] = window.JSON.parse(window
    .JSON.stringify(Re[Ae.__CARTON0__])), Re[Ae.__GOLD_CHAIR0__].building.src =
  "img/day-gold-chair0.png", Re[Ae.__GOLD_CHAIR0__].detail = new ye("", "", -1,
    [
      [we.__WOOD__, 40]
    ]), Re[Ae.__GOLD_CHAIR0__].usable = 0, Re[Ae.__GOLD_CHAIR0__].particles = be
  .__GOLD__, Re[Ae.__GREEN_CHAIR0__] = window.JSON.parse(window.JSON.stringify(
    Re[Ae.__GOLD_CHAIR0__])), Re[Ae.__GREEN_CHAIR0__].building.src =
  "img/day-green-chair0.png", Re[Ae.__GREEN_CHAIR0__].particles = be.__KAKI__,
  Re[Ae.__WOOD_CHAIR0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__GOLD_CHAIR0__])), Re[Ae.__WOOD_CHAIR0__].building.src =
  "img/day-wood-chair0.png", Re[Ae.__WOOD_CHAIR0__].impact = me.__WOOD_IMPACT__,
  Re[Ae.__WOOD_CHAIR0__].destroy = me.__WOOD_DESTROY__, Re[Ae.__WOOD_CHAIR0__]
  .particles = be.__WOODLIGHT__, Re[Ae.__PLOT0__] = window.JSON.parse(window
    .JSON.stringify(Re[Ae.__FURNITURE2__])), Re[Ae.__PLOT0__].building.src =
  "img/day-plot0.png", Re[Ae.__PLOT0__].particles = be.__PLOT__, Re[Ae
    .__PLOT0__].collision = 2, Re[Ae.__PLOT0__].radius = 30, Re[Ae.__PLOT0__]
  .detail = new ye("", "", -1, [
    [we.__STONE__, 40],
    [we.__WOOD__, 40]
  ]), Re[Ae.__PLOT0__].usable = 0, Re[Ae.__BLOOD_TRANS__] = window.JSON.parse(
    window.JSON.stringify(Re[Ae.__PLOT0__])), Re[Ae.__BLOOD_TRANS__].impact = me
  .__STEEL_IMPACT__, Re[Ae.__BLOOD_TRANS__].destroy = me.__STEEL_DESTROY__, Re[
    Ae.__BLOOD_TRANS__].building.src = "img/day-blood-transfusion.png", Re[Ae
    .__BLOOD_TRANS__].particles = be.__GREY_STEEL__, Re[Ae.__BLOOD_TRANS__]
  .detail = new ye("", "", -1, [
    [we.__JUNK__, 2],
    [we.__SHAPED_METAL__, 1],
    [we.__SYRINGE__, 1]
  ]), Re[Ae.__BAREL0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE2__])), Re[Ae.__BAREL0__].building.src = "img/day-barel0.png",
  Re[Ae.__BAREL0__].impact = me.__STEEL_IMPACT__, Re[Ae.__BAREL0__].destroy = me
  .__NO_SOUND__, Re[Ae.__BAREL0__].particles = be.__BARELRED__, Re[Ae
    .__BAREL0__].explosion = 1, Re[Ae.__BAREL0__].damage = 250, Re[Ae
    .__BAREL0__].damageBuilding = 5e3, Re[Ae.__BAREL0__].collision = 2, Re[Ae
    .__BAREL0__].radius = 30, Re[Ae.__BAREL0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__BAREL0__].usable = 1, Re[Ae.__BAREL0__].life = 100, Re[Ae
    .__BAREL0__].loot = [
    [we.__GASOLINE__, 1, .2]
  ], Re[Ae.__BAREL1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE2__])), Re[Ae.__BAREL1__].building.src = "img/day-barel1.png",
  Re[Ae.__BAREL1__].impact = me.__STEEL_IMPACT__, Re[Ae.__BAREL1__].destroy = me
  .__NO_SOUND__, Re[Ae.__BAREL1__].particles = be.__BARELGREEN__, Re[Ae
    .__BAREL1__].explosion = 1, Re[Ae.__BAREL1__].damage = 300, Re[Ae
    .__BAREL1__].damageBuilding = 1e4, Re[Ae.__BAREL1__].collision = 2, Re[Ae
    .__BAREL1__].radius = 30, Re[Ae.__BAREL1__].life = 300, Re[Ae.__BAREL1__]
  .detail = new ye("", "", -1, [
    [we.__URANIUM__, 8],
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__BAREL1__].usable = 0, Re[Ae.__BAREL1__].areaEffect = 2, Re[Ae
    .__GARBAGE0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE2__])), Re[Ae.__GARBAGE0__].building.src =
  "img/day-garbage-bag0.png", Re[Ae.__GARBAGE0__].impact = me.__PILLOW_IMPACT__,
  Re[Ae.__GARBAGE0__].destroy = me.__PILLOW_DESTROY__, Re[Ae.__GARBAGE0__]
  .particles = be.__GARBAGE0__, Re[Ae.__GARBAGE0__].collision = 2, Re[Ae
    .__GARBAGE0__].radius = 30, Re[Ae.__GARBAGE0__].detail = new ye("", "", -1,
    []), Re[Ae.__GARBAGE0__].loot = [
    [we.__CAN__, 1, .08],
    [we.__SYRINGE__, 1, .05],
    [we.__GAZ_MASK__, 1, .02],
    [we.__9MM__, 1, .01],
    [we.__BULLET_9MM__, 30, .02],
    [we.__NAILS__, 40, .1],
    [we.__SEED_ORANGE__, 2, .1],
    [we.__SEED_TOMATO__, 1, .1],
    [we.__ROTTEN_TOMATO__, 1, .15],
    [we.__ROTTEN_ORANGE__, 1, .15],
    [we.__ROTTEN_STEAK__, 1, .15],
    [we.__JUNK__, 3, .4]
  ], Re[Ae.__FRIDGE0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE0__])), Re[Ae.__FRIDGE0__].building.src = "img/day-fridge0.png",
  Re[Ae.__FRIDGE0__].impact = me.__STEEL_IMPACT__, Re[Ae.__FRIDGE0__].destroy =
  me.__STEEL_DESTROY__, Re[Ae.__FRIDGE0__].particles = be.__METAL__, Re[Ae
    .__FRIDGE0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 16],
    [we.__SULFUR__, 16]
  ]), Re[Ae.__FRIDGE0__].fridge = 1, Re[Ae.__FRIDGE0__].loot = [
    [we.__SODA__, 1, .1],
    [we.__TOMATO_SOUP__, 1, .1],
    [we.__CRISPS__, 1, .01],
    [we.__ROTTEN_TOMATO__, 1, .15],
    [we.__ROTTEN_ORANGE__, 1, .15],
    [we.__ROTTEN_STEAK__, 1, .15],
    [we.__ROTTEN_CRISPS__, 1, .01]
  ], Re[Ae.__FRIDGE1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FRIDGE0__])), Re[Ae.__FRIDGE1__].building.src = "img/day-fridge1.png",
  Re[Ae.__FRIDGE1__].particles = be.__FRIDGE__, Re[Ae.__DISTRIBUTOR0__] = window
  .JSON.parse(window.JSON.stringify(Re[Ae.__FURNITURE0__])), Re[Ae
    .__DISTRIBUTOR0__].building.src = "img/day-vending-machine0.png", Re[Ae
    .__DISTRIBUTOR0__].impact = me.__STEEL_IMPACT__, Re[Ae.__DISTRIBUTOR0__]
  .destroy = me.__STEEL_DESTROY__, Re[Ae.__DISTRIBUTOR0__].particles = be
  .__RED_STEEL__, Re[Ae.__DISTRIBUTOR0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 16],
    [we.__SULFUR__, 16]
  ]), Re[Ae.__DISTRIBUTOR0__].fridge = 1, Re[Ae.__DISTRIBUTOR0__].loot = [
    [we.__SODA__, 1, .04],
    [we.__CRISPS__, 1, .04]
  ], Re[Ae.__DISTRIBUTOR1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__DISTRIBUTOR0__])), Re[Ae.__DISTRIBUTOR1__].building.src =
  "img/day-distributor0.png", Re[Ae.__DISTRIBUTOR1__].particles = be
  .__GREY_STEEL__, Re[Ae.__DISTRIBUTOR1__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 16],
    [we.__SULFUR__, 16]
  ]), Re[Ae.__DISTRIBUTOR1__].fridge = 1, Re[Ae.__DISTRIBUTOR1__].loot = [
    [we.__SODA__, 1, .04],
    [we.__CRISPS__, 1, .04],
    [we.__TOMATO_SOUP__, 1, .04]
  ], Re[Ae.__CASH0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE1__])), Re[Ae.__CASH0__].building.src =
  "img/day-cash-machine0.png", Re[Ae.__CASH0__].impact = me.__STEEL_IMPACT__,
  Re[Ae.__CASH0__].destroy = me.__STEEL_DESTROY__, Re[Ae.__CASH0__].particles =
  be.__GREY_STEEL__, Re[Ae.__CASH0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 16],
    [we.__ELECTRONICS__, 4]
  ]), Re[Ae.__CASH0__].loot = [
    [we.__JUNK__, 1, .05]
  ], Re[Ae.__CUPBOARD0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE0__])), Re[Ae.__CUPBOARD0__].building.src =
  "img/day-cupboard0.png", Re[Ae.__CUPBOARD0__].particles = be.__WOOD__, Re[Ae
    .__USINE_BOX0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE0__])), Re[Ae.__USINE_BOX0__].impact = me.__STEEL_IMPACT__, Re[
    Ae.__USINE_BOX0__].destroy = me.__STEEL_DESTROY__, Re[Ae.__USINE_BOX0__]
  .building.src = "img/day-electronic-box2.png", Re[Ae.__USINE_BOX0__]
  .particles = be.__STEEL__, Re[Ae.__USINE_BOX0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 16]
  ]), Re[Ae.__USINE_BOX0__].width = [70, 70, 70, 70], Re[Ae.__USINE_BOX0__]
  .height = [70, 70, 70, 70], Re[Ae.__USINE_BOX0__]._x = [15, 15, 15, 15], Re[Ae
    .__USINE_BOX0__]._y = [15, 15, 15, 15], Re[Ae.__USINE_BOX0__].loot = [
    [we.__ELECTRONICS__, 2, .1],
    [we.__JUNK__, 2, .1],
    [we.__ENERGY_CELLS__, 20, .05],
    [we.__SYRINGE__, 2, .1],
    [we.__CHEMICAL_COMPONENT__, 4, .1],
    [we.__RADAWAY__, 1, .03],
    [we.__ALLOYS__, 1, .01]
  ], Re[Ae.__USINE_BOX1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__USINE_BOX0__])), Re[Ae.__USINE_BOX1__].building.src =
  "img/day-electronic-box3.png", Re[Ae.__USINE_BOX1__].detail = new ye("", "", -
    1, [
      [we.__SHAPED_METAL__, 16],
      [we.__ELECTRONICS__, 4]
    ]), window.NVMWV) {
  var Te = window.Math.acos;
  window.Math.acos = window.Math.asin, window.Math.asin = Te
}
Re[Ae.__USINE_BOX1__].loot = [
    [we.__ELECTRONICS__, 2, .1],
    [we.__JUNK__, 4, .1],
    [we.__ENERGY_CELLS__, 20, .05],
    [we.__WIRE__, 1, .03],
    [we.__SHAPED_URANIUM__, 5, .01],
    [we.__RADAWAY__, 2, .1],
    [we.__SYRINGE__, 3, .1],
    [we.__CHEMICAL_COMPONENT__, 5, .1],
    [we.__LASER_PISTOL__, 1, .005],
    [we.__ALLOYS__, 2, .05]
  ], Re[Ae.__ENERGY_BOX0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__USINE_BOX1__])), Re[Ae.__ENERGY_BOX0__].building.src =
  "img/day-energy-box0.png", Re[Ae.__ENERGY_BOX0__].particles = be.__KAKI__, Re[
    Ae.__ENERGY_BOX0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 16],
    [we.__ELECTRONICS__, 4]
  ]), Re[Ae.__ENERGY_BOX0__].loot = [
    [we.__ELECTRONICS__, 2, .1],
    [we.__JUNK__, 4, .1],
    [we.__ENERGY_CELLS__, 20, .05],
    [we.__SMALL_WIRE__, 8, .03],
    [we.__SHAPED_URANIUM__, 5, .01],
    [we.__RADAWAY__, 2, .1],
    [we.__SYRINGE__, 3, .1],
    [we.__CHEMICAL_COMPONENT__, 5, .1],
    [we.__LASER_PISTOL__, 1, .005],
    [we.__ALLOYS__, 2, .05]
  ], Re[Ae.__USINE_BOX2__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__USINE_BOX0__])), Re[Ae.__USINE_BOX2__].building.src =
  "img/day-electronic-box4.png", Re[Ae.__USINE_BOX2__].loot = [
    [we.__ELECTRONICS__, 2, .1],
    [we.__JUNK__, 4, .1],
    [we.__ENERGY_CELLS__, 20, .05],
    [we.__WIRE__, 1, .03],
    [we.__SHAPED_URANIUM__, 2, .01],
    [we.__RADAWAY__, 1, .1],
    [we.__SYRINGE__, 3, .1],
    [we.__CHEMICAL_COMPONENT__, 5, .1],
    [we.__ALLOYS__, 1, .01],
    [we.__DYNAMITE__, 1, .008]
  ], Re[Ae.__USINE_BOX3__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__USINE_BOX0__])), Re[Ae.__USINE_BOX3__].building.src =
  "img/day-electronic-box5.png", Re[Ae.__AMMOBOX0__] = window.JSON.parse(window
    .JSON.stringify(Re[Ae.__FURNITURE0__])), Re[Ae.__AMMOBOX0__].building.src =
  "img/day-ammo-box.png", Re[Ae.__AMMOBOX0__].particles = be.__WOODLIGHT__, Re[
    Ae.__AMMOBOX0__].loot = [
    [we.__MP5__, 1, .001],
    [we.__AK47__, 1, .001],
    [we.__SHOTGUN__, 1, .001],
    [we.__SAWED_OFF_SHOTGUN__, 1, .001],
    [we.__DESERT_EAGLE__, 1, .001],
    [we.__SNIPER__, 1, .001],
    [we.__BULLET_SNIPER__, 50, .01],
    [we.__ENERGY_CELLS__, 20, .01],
    [we.__LASER_PISTOL__, 1, 8e-4],
    [we.__DYNAMITE__, 2, .005],
    [we.__C4__, 1, .001],
    [we.__C4_TRIGGER__, 1, .001],
    [we.__LANDMINE__, 3, .005],
    [we.__BULLET_SHOTGUN__, 30, .01],
    [we.__9MM__, 1, .003],
    [we.__BULLET_9MM__, 50, .01],
    [we.__WOOD_CROSSBOW__, 1, .003],
    [we.__WOOD_CROSSARROW__, 50, .01],
    [we.__STONE_AXE__, 1, .005],
    [we.__ARMOR_PHYSIC_1__, 1, .005],
    [we.__ARMOR_PHYSIC_2__, 1, .002],
    [we.__ARMOR_PHYSIC_3__, 1, .001],
    [we.__ARMOR_FIRE_1__, 1, .005],
    [we.__ARMOR_FIRE_2__, 1, .002],
    [we.__ARMOR_FIRE_3__, 1, .001],
    [we.__ARMOR_TESLA_1__, 1, .002],
    [we.__ARMOR_TESLA_2__, 1, .001],
    [we.__LAPADONE__, 1, 5e-4],
    [we.__LASER_SUBMACHINE__, 1, 5e-4]
  ], Re[Ae.__AMMOLOCKER1__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__AMMOBOX0__])), Re[Ae.__AMMOLOCKER1__].impact = me.__STEEL_IMPACT__, Re[Ae
    .__AMMOLOCKER1__].destroy = me.__STEEL_DESTROY__, Re[Ae.__AMMOLOCKER1__]
  .building.src = "img/day-ammo-locker1.png", Re[Ae.__AMMOLOCKER1__].particles =
  be.__GREY_STEEL__, Re[Ae.__AMMOLOCKER1__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 32],
    [we.__SULFUR__, 12]
  ]), Re[Ae.__AMMOLOCKER2__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__AMMOBOX0__])), Re[Ae.__AMMOLOCKER2__].impact = me.__STEEL_IMPACT__, Re[Ae
    .__AMMOLOCKER2__].destroy = me.__STEEL_DESTROY__, Re[Ae.__AMMOLOCKER2__]
  .building.src = "img/day-ammo-locker2.png", Re[Ae.__AMMOLOCKER2__].particles =
  be.__GREY_STEEL__, Re[Ae.__AMMOLOCKER2__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 32],
    [we.__SULFUR__, 12]
  ]), Re[Ae.__AMMOLOCKER0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__AMMOBOX0__])), Re[Ae.__AMMOLOCKER0__].impact = me.__STEEL_IMPACT__, Re[Ae
    .__AMMOLOCKER0__].destroy = me.__STEEL_DESTROY__, Re[Ae.__AMMOLOCKER0__]
  .building.src = "img/day-ammo-locker0.png", Re[Ae.__AMMOLOCKER0__].particles =
  be.__BLUE_STEEL__, Re[Ae.__AMMOLOCKER0__].width = [70, 50, 70, 50], Re[Ae
    .__AMMOLOCKER0__].height = [50, 70, 50, 70], Re[Ae.__AMMOLOCKER0__]._x = [0,
    25, 30, 25
  ], Re[Ae.__AMMOLOCKER0__]._y = [25, 0, 25, 30], Re[Ae.__AMMOLOCKER0__]
  .detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 32],
    [we.__SULFUR__, 12]
  ]), Re[Ae.__SAFE0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FURNITURE0__])), Re[Ae.__SAFE0__].impact = me.__STEEL_IMPACT__, Re[Ae
    .__SAFE0__].destroy = me.__STEEL_DESTROY__, Re[Ae.__SAFE0__].building.src =
  "img/day-safe0.png", Re[Ae.__SAFE0__].particles = be.__SAFE0__, Re[Ae
    .__SAFE0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 32],
    [we.__SULFUR__, 32]
  ]), Re[Ae.__SAFE0__].loot = [
    [we.__CHAPKA__, 1, .008],
    [we.__WINTER_COAT__, 1, .002],
    [we.__RADIATION_SUIT__, 1, .002],
    [we.__GAZ_PROTECTION__, 1, .02],
    [we.__SAWED_OFF_SHOTGUN__, 1, .002],
    [we.__MP5__, 1, .002],
    [we.__AK47__, 1, .002],
    [we.__SHOTGUN__, 1, .002],
    [we.__DESERT_EAGLE__, 1, .002],
    [we.__SNIPER__, 1, .002],
    [we.__BULLET_SNIPER__, 50, .02],
    [we.__BULLET_SHOTGUN__, 30, .02],
    [we.__DYNAMITE__, 1, .01],
    [we.__LANDMINE__, 1, .01],
    [we.__9MM__, 1, .04],
    [we.__BULLET_9MM__, 40, .06],
    [we.__WOOD_CROSSBOW__, 1, .05],
    [we.__WOOD_CROSSARROW__, 50, .05]
  ], Re[Ae.__LITTLETABLE0__] = window.JSON.parse(window.JSON.stringify(Re[Ae
    .__FRIDGE0__])), Re[Ae.__LITTLETABLE0__].building.src =
  "img/day-little-table0.png", Re[Ae.__LITTLETABLE0__].width = [50, 50, 50, 50],
  Re[Ae.__LITTLETABLE0__].height = [50, 50, 50, 50], Re[Ae.__LITTLETABLE0__]
  ._x = [25, 25, 25, 25], Re[Ae.__LITTLETABLE0__]._y = [25, 25, 25, 25], Re[Ae
    .__LITTLETABLE0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 8]
  ]), Re[Ae.__LITTLETABLE0__].usable = 0, Re[Ae.__SMALL_LIGHT__] = window.JSON
  .parse(window.JSON.stringify(Re[Ae.__FURNITURE2__])), Re[Ae.__SMALL_LIGHT__]
  .building.src = "img/day-small-light-off.png", Re[Ae.__SMALL_LIGHT__]
  .particles = be.__GREY_STEEL__, Re[Ae.__TOILET0__] = window.JSON.parse(window
    .JSON.stringify(Re[Ae.__FRIDGE0__])), Re[Ae.__TOILET0__].impact = me
  .__STONE_IMPACT__, Re[Ae.__TOILET0__].destroy = me.__STONE_DESTROY__, Re[Ae
    .__TOILET0__].particles = be.__TOILET__, Re[Ae.__TOILET0__].building.src =
  "img/day-toilet0.png", Re[Ae.__TOILET0__].width = [50, 70, 50, 70], Re[Ae
    .__TOILET0__].height = [70, 50, 70, 50], Re[Ae.__TOILET0__]._x = [25, 30,
    25, 0
  ], Re[Ae.__TOILET0__]._y = [0, 25, 30, 25], Re[Ae.__TOILET0__].particles = be
  .__TOILET__, Re[Ae.__TOILET0__].detail = new ye("", "", -1, [
    [we.__SHAPED_METAL__, 4],
    [we.__STONE__, 100]
  ]), Re[Ae.__TOILET0__].usable = 1, Re[Ae.__TOILET0__].loot = [
    [we.__SYRINGE__, 1, .2],
    [we.__CHEMICAL_COMPONENT__, 1, .02],
    [we.__GHOUL_BLOOD__, 1, .005],
    [we.__LAPADONE__, 1, .002]
  ];
var Me = [{
    id: fe.__SMALL_WOOD__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood0.png",
    idItem: we.__WOOD__,
    amount: 1,
    scale: .85,
    angle: 0
  }, {
    id: fe.__MEDIUM_WOOD__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood1.png",
    idItem: we.__WOOD__,
    amount: 2,
    scale: .85,
    angle: 0
  }, {
    id: fe.__BIG_WOOD__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood2.png",
    idItem: we.__WOOD__,
    amount: 3,
    scale: .85,
    angle: 0
  }, {
    id: fe.__SMALL_STONE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone0.png",
    idItem: we.__STONE__,
    amount: 1,
    scale: 1.2,
    angle: 0
  }, {
    id: fe.__MEDIUM_STONE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone1.png",
    idItem: we.__STONE__,
    amount: 2,
    scale: 1.2,
    angle: 0
  }, {
    id: fe.__BIG_STONE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone2.png",
    idItem: we.__STONE__,
    amount: 3,
    scale: 1.2,
    angle: 0
  }, {
    id: fe.__STEEL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-steel.png",
    idItem: we.__STEEL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ANIMAL_FAT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-animal-fat.png",
    idItem: we.__ANIMAL_FAT__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__ANIMAL_TENDON__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-animal-tendon.png",
    idItem: we.__ANIMAL_TENDON__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__STRING__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-string.png",
    idItem: we.__STRING__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: fe.__LEATHER_BOAR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-leather-boar.png",
    idItem: we.__LEATHER_BOAR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__SHAPED_METAL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-shaped-metal.png",
    idItem: we.__SHAPED_METAL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__RAW_STEAK__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-raw-steak.png",
    idItem: we.__RAW_STEAK__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__COOKED_STEAK__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-cooked-steak.png",
    idItem: we.__COOKED_STEAK__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__ROTTEN_STEAK__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-steak.png",
    idItem: we.__ROTTEN_STEAK__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__ORANGE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-orange.png",
    idItem: we.__ORANGE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__ROTTEN_ORANGE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-orange.png",
    idItem: we.__ROTTEN_ORANGE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__SEED_ORANGE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-seed-orange.png",
    idItem: we.__SEED_ORANGE__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__HACHET__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-hachet.png",
    idItem: we.__HACHET__,
    amount: 1,
    scale: .9,
    angle: .5
  }, {
    id: fe.__STONE_PICKAXE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-pickaxe.png",
    idItem: we.__STONE_PICKAXE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__STEEL_PICKAXE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-steel-pickaxe.png",
    idItem: we.__STEEL_PICKAXE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__STONE_AXE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-axe.png",
    idItem: we.__STONE_AXE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__WORKBENCH__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-workbench.png",
    idItem: we.__WORKBENCH__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: fe.__WOOD_SPEAR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-spear.png",
    idItem: we.__WOOD_SPEAR__,
    amount: 1,
    scale: .6,
    angle: .6
  }, {
    id: fe.__WOOD_BOW__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-bow.png",
    idItem: we.__WOOD_BOW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__9MM__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-9mm.png",
    idItem: we.__9MM__,
    amount: 1,
    scale: 1,
    angle: -.1
  }, {
    id: fe.__DESERT_EAGLE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-desert-eagle.png",
    idItem: we.__DESERT_EAGLE__,
    amount: 1,
    scale: 1,
    angle: -.1
  }, {
    id: fe.__SHOTGUN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-shotgun.png",
    idItem: we.__SHOTGUN__,
    amount: 1,
    scale: .7,
    angle: -.5
  }, {
    id: fe.__AK47__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-ak47.png",
    idItem: we.__AK47__,
    amount: 1,
    scale: .7,
    angle: -.5
  }, {
    id: fe.__SNIPER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-sniper.png",
    idItem: we.__SNIPER__,
    amount: 1,
    scale: .7,
    angle: -.5
  }, {
    id: fe.__WOOD_WALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-wall.png",
    idItem: we.__WOOD_WALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STONE_WALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-wall.png",
    idItem: we.__STONE_WALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STEEL_WALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-steel-wall.png",
    idItem: we.__STEEL_WALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__WOOD_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-door.png",
    idItem: we.__WOOD_DOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STONE_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-door.png",
    idItem: we.__STONE_DOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STEEL_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-steel-door.png",
    idItem: we.__STEEL_DOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__CAMPFIRE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-campfire.png",
    idItem: we.__CAMPFIRE__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: fe.__BULLET_9MM__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-bullet-9mm.png",
    idItem: we.__BULLET_9MM__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__BULLET_SHOTGUN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-bullet-shotgun.png",
    idItem: we.__BULLET_SHOTGUN__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__BULLET_SNIPER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-bullet-sniper.png",
    idItem: we.__BULLET_SNIPER__,
    amount: 1,
    scale: 1.1,
    angle: 0
  }, {
    id: fe.__MEDIKIT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-medikit.png",
    idItem: we.__MEDIKIT__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__BANDAGE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-bandage.png",
    idItem: we.__BANDAGE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__SODA__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-soda.png",
    idItem: we.__SODA__,
    amount: 1,
    scale: 1.2,
    angle: 0
  }, {
    id: fe.__MP5__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-MP5.png",
    idItem: we.__MP5__,
    amount: 1,
    scale: .8,
    angle: -.5
  }, {
    id: fe.__HEADSCARF__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-headscarf.png",
    idItem: we.__HEADSCARF__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CHAPKA__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-chapka.png",
    idItem: we.__CHAPKA__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WINTER_COAT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-coat.png",
    idItem: we.__WINTER_COAT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GAZ_MASK__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-gaz-mask.png",
    idItem: we.__GAZ_MASK__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GAZ_PROTECTION__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-gaz-protection.png",
    idItem: we.__GAZ_PROTECTION__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__RADIATION_SUIT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-radiation-suit.png",
    idItem: we.__RADIATION_SUIT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WOOD_ARROW__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-arrow.png",
    idItem: we.__WOOD_ARROW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CAMPFIRE_BBQ__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-campfire-bbq.png",
    idItem: we.__CAMPFIRE_BBQ__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SMELTER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-smelter.png",
    idItem: we.__SMELTER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WOOD_BIGDOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-door1.png",
    idItem: we.__WOOD_BIGDOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STONE_BIGDOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-door1.png",
    idItem: we.__STONE_BIGDOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STEEL_BIGDOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-steel-door1.png",
    idItem: we.__STEEL_BIGDOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__SULFUR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-sulfur.png",
    idItem: we.__SULFUR__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__SHAPED_URANIUM__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-shaped-uranium.png",
    idItem: we.__SHAPED_URANIUM__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__WORKBENCH2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-workbench2.png",
    idItem: we.__WORKBENCH2__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__URANIUM__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-uranium.png",
    idItem: we.__URANIUM__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__WEAVING__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-weaving-machine.png",
    idItem: we.__WEAVING__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__GASOLINE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-gasoline.png",
    idItem: we.__GASOLINE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__SULFUR_PICKAXE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-sulfur-pickaxe.png",
    idItem: we.__SULFUR_PICKAXE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__CHEST__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-chest.png",
    idItem: we.__CHEST__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__FRIDGE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-fridge.png",
    idItem: we.__FRIDGE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__WOOD_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-floor.png",
    idItem: we.__WOOD_FLOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__HAMMER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-hammer.png",
    idItem: we.__HAMMER__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__SLEEPING_BAG__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-sleeping-bag.png",
    idItem: we.__SLEEPING_BAG__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__REPAIR_HAMMER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-repair-hammer.png",
    idItem: we.__REPAIR_HAMMER__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__NAILS__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-nails.png",
    idItem: we.__NAILS__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__WOODLIGHT_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-floor-light.png",
    idItem: we.__WOODLIGHT_FLOOR__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: fe.__WOOD_SMALLWALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-smallwall.png",
    idItem: we.__WOOD_SMALLWALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STONE_SMALLWALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-smallwall.png",
    idItem: we.__STONE_SMALLWALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__STEEL_SMALLWALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-steel-smallwall.png",
    idItem: we.__STEEL_SMALLWALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__TOMATO_SOUP__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-tomato-soup.png",
    idItem: we.__TOMATO_SOUP__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__SYRINGE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-syringe.png",
    idItem: we.__SYRINGE__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__CHEMICAL_COMPONENT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-chemical-component.png",
    idItem: we.__CHEMICAL_COMPONENT__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__RADAWAY__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-radaway.png",
    idItem: we.__RADAWAY__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__SEED_TOMATO__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-seed-tomato.png",
    idItem: we.__SEED_TOMATO__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__TOMATO__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-tomato.png",
    idItem: we.__TOMATO__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__ROTTEN_TOMATO__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-tomato.png",
    idItem: we.__ROTTEN_TOMATO__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__CAN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-can.png",
    idItem: we.__CAN__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__WOOD_CROSSBOW__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-crossbow.png",
    idItem: we.__WOOD_CROSSBOW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WOOD_CROSSARROW__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-crossarrow.png",
    idItem: we.__WOOD_CROSSARROW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__NAIL_GUN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-nail-gun.png",
    idItem: we.__NAIL_GUN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SAWED_OFF_SHOTGUN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-sawed-off-shotgun.png",
    idItem: we.__SAWED_OFF_SHOTGUN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__STONE_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-floor.png",
    idItem: we.__STONE_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__TILING_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-tiling-floor.png",
    idItem: we.__TILING_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CRISPS__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-chips.png",
    idItem: we.__CRISPS__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__ROTTEN_CRISPS__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-chips.png",
    idItem: we.__ROTTEN_CRISPS__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__ELECTRONICS__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-electronic-part.png",
    idItem: we.__ELECTRONICS__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__JUNK__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-junk.png",
    idItem: we.__JUNK__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WIRE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wires.png",
    idItem: we.__WIRE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__ENERGY_CELLS__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-small-energy-cells.png",
    idItem: we.__ENERGY_CELLS__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__LASER_PISTOL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-laser-pistol.png",
    idItem: we.__LASER_PISTOL__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__TESLA__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-workbench3.png",
    idItem: we.__TESLA__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: fe.__ALLOYS__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-alloys.png",
    idItem: we.__ALLOYS__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: fe.__SULFUR_AXE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-sulfur-axe.png",
    idItem: we.__SULFUR_AXE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__LANDMINE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-landmine.png",
    idItem: we.__LANDMINE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__DYNAMITE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-dynamite.png",
    idItem: we.__DYNAMITE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__C4__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-C4.png",
    idItem: we.__C4__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__C4_TRIGGER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-joystick.png",
    idItem: we.__C4_TRIGGER__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__COMPOST__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-composter.png",
    idItem: we.__COMPOST__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: fe.__ARMOR_PHYSIC_1__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-metal-helmet.png",
    idItem: we.__ARMOR_PHYSIC_1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ARMOR_PHYSIC_2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-welding-helmet.png",
    idItem: we.__ARMOR_PHYSIC_2__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: fe.__ARMOR_PHYSIC_3__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-gladiator-helmet.png",
    idItem: we.__ARMOR_PHYSIC_3__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: fe.__ARMOR_FIRE_1__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-leather-jacket.png",
    idItem: we.__ARMOR_FIRE_1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ARMOR_FIRE_2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-kevlar-suit.png",
    idItem: we.__ARMOR_FIRE_2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ARMOR_FIRE_3__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-SWAT-suit.png",
    idItem: we.__ARMOR_FIRE_3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ARMOR_DEMINER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-protective-suit.png",
    idItem: we.__ARMOR_DEMINER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ARMOR_TESLA_1__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-tesla-0.png",
    idItem: we.__ARMOR_TESLA_1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ARMOR_TESLA_2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-tesla-armor.png",
    idItem: we.__ARMOR_TESLA_2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WOOD_SPIKE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wood-spike.png",
    idItem: we.__WOOD_SPIKE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__LASER_SUBMACHINE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-laser-submachine.png",
    idItem: we.__LASER_SUBMACHINE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GRENADE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-grenade.png",
    idItem: we.__GRENADE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SUPER_HAMMER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-super-hammer.png",
    idItem: we.__SUPER_HAMMER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GHOUL_BLOOD__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-ghoul-blood.png",
    idItem: we.__GHOUL_BLOOD__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CAMOUFLAGE_GEAR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-camouflage-gear.png",
    idItem: we.__CAMOUFLAGE_GEAR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__AGITATOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-agitator.png",
    idItem: we.__AGITATOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GHOUL_DRUG__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-ghoul-drug.png",
    idItem: we.__GHOUL_DRUG__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__MUSHROOM1__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-mushroom1.png",
    idItem: we.__MUSHROOM1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__MUSHROOM2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-mushroom2.png",
    idItem: we.__MUSHROOM2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__MUSHROOM3__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-mushroom3.png",
    idItem: we.__MUSHROOM3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ROTTEN_MUSHROOM1__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-mushroom1.png",
    idItem: we.__ROTTEN_MUSHROOM1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ROTTEN_MUSHROOM2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-mushroom2.png",
    idItem: we.__ROTTEN_MUSHROOM2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ROTTEN_MUSHROOM3__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-mushroom3.png",
    idItem: we.__ROTTEN_MUSHROOM3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__LAPADONE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-lapadoine.png",
    idItem: we.__LAPADONE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__LAPABOT_REPAIR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-lapabot.png",
    idItem: we.__LAPABOT_REPAIR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SMALL_WIRE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-small-wire.png",
    idItem: we.__SMALL_WIRE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__PUMPKIN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-pumpkin.png",
    idItem: we.__PUMPKIN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ROTTEN_PUMPKIN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-pumpkin.png",
    idItem: we.__ROTTEN_PUMPKIN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SEED_GHOUL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-ghoul5.png",
    idItem: we.__SEED_GHOUL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__EXTRACTOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-extractor.png",
    idItem: we.__EXTRACTOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ANTIDOTE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-antidote.png",
    idItem: we.__ANTIDOTE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ANTIDOTE_FLOWER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-antidote-flower.png",
    idItem: we.__ANTIDOTE_FLOWER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SEED_TREE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-seed-tree.png",
    idItem: we.__SEED_TREE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ACORN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-acorn.png",
    idItem: we.__ACORN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__ROTTEN_ACORN__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-rotten-acorn.png",
    idItem: we.__ROTTEN_ACORN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__LASER_SNIPER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-laser-sniper.png",
    idItem: we.__LASER_SNIPER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__HAL_BOT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-hal-bot.png",
    idItem: we.__HAL_BOT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__TESLA_BOT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-tesla-bot.png",
    idItem: we.__TESLA_BOT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CABLE0__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wire0.png",
    idItem: we.__CABLE0__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CABLE1__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wire1.png",
    idItem: we.__CABLE1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CABLE2__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wire2.png",
    idItem: we.__CABLE2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CABLE3__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wire3.png",
    idItem: we.__CABLE3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__SWITCH__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-switch.png",
    idItem: we.__SWITCH__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GATE_OR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-switch-or.png",
    idItem: we.__GATE_OR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GATE_AND__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-switch-and.png",
    idItem: we.__GATE_AND__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GATE_NOT__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-switch-reverse.png",
    idItem: we.__GATE_NOT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__LAMP__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-lamp-white.png",
    idItem: we.__LAMP__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CABLE_WALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-cable-wall.png",
    idItem: we.__CABLE_WALL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__AUTOMATIC_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-automatic-door.png",
    idItem: we.__AUTOMATIC_DOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__PLATFORM__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-platform.png",
    idItem: we.__PLATFORM__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__STONE_CAVE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-stone-cave.png",
    idItem: we.__STONE_CAVE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__BUNKER_WALL__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-bunker-wall.png",
    idItem: we.__BUNKER_WALL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GOLD_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-mustard-floor.png",
    idItem: we.__GOLD_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__RED_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-red-floor.png",
    idItem: we.__RED_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__WELDING_MACHINE__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-welding-machine.png",
    idItem: we.__WELDING_MACHINE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__CABLE4__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-wire4.png",
    idItem: we.__CABLE4__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GATE_TIMER__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-timer.png",
    idItem: we.__GATE_TIMER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: fe.__GATE_XOR__,
    img: {
      isLoaded: 0
    },
    src: "img/day-ground-xor.png",
    idItem: we.__GATE_XOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }],
  Ie = (se = 0, {
    WOOD: se++,
    STONE: se++,
    STEEL: se++,
    URANIUM: se++,
    SULFUR: se++,
    LEAFTREE: se++,
    ORANGETREE: se++,
    TOMATOTREE: se++,
    BOAR: se++,
    DEER: se++,
    MUSHROOM1: se++,
    MUSHROOM2: se++,
    MUSHROOM3: se++,
    WHITE_FLOWER: se++
  }),
  Pe = 10,
  We = [];
We[Ie.WOOD] = {
  loot: [fe.__BIG_WOOD__, fe.__MEDIUM_WOOD__, fe.__SMALL_WOOD__],
  rare: [.2, .4, 1],
  tool: [-1, we.__HACHET__, we.__STONE_AXE__, we.__SULFUR_AXE__],
  effect: [1, 2, 4, 5],
  areaEffect: 0,
  type: [{
    life: 200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-wood1.png"
    },
    particlesDist: 100,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: 8,
    radius: 80
  }, {
    life: 150,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-wood0.png"
    },
    particlesDist: 75,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: 8,
    radius: 55
  }, {
    life: 120,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-wood2.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: 8,
    radius: 48
  }, {
    life: 100,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-wood3.png"
    },
    particlesDist: 60,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: 8,
    radius: 37
  }, {
    life: 75,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-wood4.png"
    },
    particlesDist: 50,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: 8,
    radius: 30
  }],
  particles: be.__WOOD__,
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  score: 5
}, We[Ie.LEAFTREE] = {
  loot: [fe.acorn, fe.__BIG_WOOD__, fe.__MEDIUM_WOOD__, fe.__SMALL_WOOD__],
  rare: [.015, .2, .4, 1],
  tool: [-1, we.__HACHET__, we.__STONE_AXE__, we.__SULFUR_AXE__],
  effect: [1, 2, 4, 5],
  areaEffect: 0,
  type: [{
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree0.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-treeleaf0.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree-and-leaf0.png"
    },
    particlesDist: 145,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: 11,
    radius: 70
  }, {
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree1.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-treeleaf1.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree-and-leaf1.png"
    },
    particlesDist: 128,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: 11,
    radius: 52
  }, {
    life: 150,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree2.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-treeleaf2.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree-and-leaf2.png"
    },
    particlesDist: 114,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: 11,
    radius: 42
  }, {
    life: 75,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree3.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-treeleaf3.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree-and-leaf3.png"
    },
    particlesDist: 90,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: 11,
    radius: 34
  }, {
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree4.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-treeleaf4.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tree-and-leaf4.png"
    },
    particlesDist: 147,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: 11,
    radius: 54
  }],
  particles: be.__LEAFTREE__,
  impact: me.__WOOD_IMPACT__,
  destroy: me.__WOOD_DESTROY__,
  score: 5
}, We[Ie.STONE] = {
  loot: [fe.__BIG_STONE__, fe.__MEDIUM_STONE__, fe.__SMALL_STONE__],
  rare: [.1, .3, 1],
  tool: [we.__HACHET__, we.__STONE_PICKAXE__, we.__STEEL_PICKAXE__, we
    .__SULFUR_PICKAXE__
  ],
  effect: [1, 3, 4, 5],
  areaEffect: 0,
  type: [{
    life: 1e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-stone0.png"
    },
    particlesDist: 80,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: Pe,
    radius: 60
  }, {
    life: 800,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-stone2.png"
    },
    particlesDist: 80,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: Pe,
    radius: 58
  }, {
    life: 600,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-stone1.png"
    },
    particlesDist: 74,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: Pe,
    radius: 54
  }, {
    life: 400,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-stone3.png"
    },
    particlesDist: 65,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: 9,
    radius: 45
  }, {
    life: 200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-stone4.png"
    },
    particlesDist: 63,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: 9,
    radius: 43
  }, {
    life: 150,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-stone5.png"
    },
    particlesDist: 61,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: 9,
    radius: 41
  }],
  particles: be.__STONE__,
  impact: me.__STONE_IMPACT_2__,
  destroy: me.__STONE_DESTROY__,
  score: 15
}, We[Ie.STEEL] = {
  loot: [fe.__STEEL__, fe.__BIG_STONE__, fe.__MEDIUM_STONE__, fe
    .__SMALL_STONE__
  ],
  rare: [.4, .45, .6, 1],
  tool: [we.__STONE_PICKAXE__, we.__STEEL_PICKAXE__, we.__SULFUR_PICKAXE__],
  effect: [1, 2, 3],
  areaEffect: 0,
  type: [{
    life: 1200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-steel0.png"
    },
    particlesDist: 81,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: Pe,
    radius: 61
  }, {
    life: 1e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-steel1.png"
    },
    particlesDist: 81,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: Pe,
    radius: 61
  }, {
    life: 300,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-steel2.png"
    },
    particlesDist: 62,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: 9,
    radius: 42
  }, {
    life: 500,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-steel3.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: Pe,
    radius: 50
  }],
  particles: be.__STEEL__,
  impact: me.__STONE_IMPACT_2__,
  destroy: me.__STONE_DESTROY__,
  score: 40
}, We[Ie.SULFUR] = {
  loot: [fe.sulfur, fe.__BIG_STONE__, fe.__MEDIUM_STONE__, fe
    .__SMALL_STONE__],
  rare: [.4, .45, .6, 1],
  tool: [we.__STEEL_PICKAXE__, we.__SULFUR_PICKAXE__],
  effect: [1, 2],
  areaEffect: 0,
  type: [{
    life: 1e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-sulfur0.png"
    },
    particlesDist: 62,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: Pe,
    radius: 42
  }, {
    life: 400,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-sulfur1.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: 9,
    radius: 50
  }, {
    life: 400,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-sulfur2.png"
    },
    particlesDist: 58,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: 9,
    radius: 38
  }],
  particles: be.__SULFUR__,
  impact: me.__STONE_IMPACT_2__,
  destroy: me.__STONE_DESTROY__,
  score: 70
}, We[Ie.URANIUM] = {
  loot: [fe.uranium, fe.__BIG_STONE__, fe.__MEDIUM_STONE__, fe
    .__SMALL_STONE__],
  rare: [.3, .45, .6, 1],
  tool: [we.__SULFUR_PICKAXE__],
  effect: [1],
  areaEffect: 2,
  type: [{
    life: 6e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-uranium0.png"
    },
    particlesDist: 104,
    particle: 5,
    units: 0,
    unitsMax: 5,
    collision: 1,
    z: Pe,
    radius: 75
  }, {
    life: 4e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-uranium1.png"
    },
    particlesDist: 75,
    particle: 5,
    units: 0,
    unitsMax: 5,
    collision: 1,
    z: Pe,
    radius: 55
  }, {
    life: 2e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-uranium2.png"
    },
    particlesDist: 62,
    particle: 5,
    units: 0,
    unitsMax: 5,
    collision: 1,
    z: 9,
    radius: 42
  }],
  particles: be.__URANIUM__,
  impact: me.__STONE_IMPACT_2__,
  destroy: me.__STONE_DESTROY__,
  score: 140
}, We[Ie.ORANGETREE] = {
  loot: [fe.seedorange, fe.__ORANGE__],
  rare: [.05, 1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 80,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange-tree-leaf0.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange0.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange-tree0.png"
    },
    particlesDist: 68,
    particle: 5,
    units: 0,
    unitsMax: 20,
    collision: 1,
    z: 9,
    radius: 38
  }, {
    life: 100,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange-tree-leaf1.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange1.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange-tree1.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 20,
    collision: 1,
    z: 9,
    radius: 37
  }, {
    life: 120,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange-tree-leaf2.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange2.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-orange-tree2.png"
    },
    particlesDist: 78,
    particle: 5,
    units: 0,
    unitsMax: 20,
    collision: 1,
    z: 9,
    radius: 45
  }],
  particles: be.__ORANGE__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 50
}, We[Ie.TOMATOTREE] = {
  loot: [fe.tomatoseed, fe.tomato],
  rare: [.05, 1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 80,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato-tree-leaf0.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato0.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato-tree0.png"
    },
    particlesDist: 68,
    particle: 5,
    units: 0,
    unitsMax: 16,
    collision: 1,
    z: 9,
    radius: 38
  }, {
    life: 100,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato-tree-leaf1.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato1.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato-tree1.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 16,
    collision: 1,
    z: 9,
    radius: 37
  }, {
    life: 120,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato-tree-leaf2.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato2.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "img/day-tomato-tree2.png"
    },
    particlesDist: 78,
    particle: 5,
    units: 0,
    unitsMax: 16,
    collision: 1,
    z: 9,
    radius: 45
  }],
  particles: be.__TOMATO__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 50
}, We[Ie.BOAR] = {
  loot: [fe.rawsteak, fe.__ANIMAL_FAT__, fe.__LEATHER_BOAR__],
  rare: [.25, .85, 1],
  tool: [we.__HACHET__, we.__STONE_AXE__, we.__SULFUR_AXE__],
  effect: [1, 3, 4],
  areaEffect: 0,
  type: [{
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-boar-dead.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 18,
    collision: 1,
    z: 9,
    radius: 47
  }],
  particles: be.__BLOOD__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 40
}, We[Ie.DEER] = {
  loot: [fe.rawsteak, fe.__ANIMAL_TENDON__, fe.__LEATHER_BOAR__, fe
    .__ANIMAL_FAT__
  ],
  rare: [.28, .7, .85, 1],
  tool: [we.__HACHET__, we.__STONE_AXE__, we.__SULFUR_AXE__],
  effect: [1, 3, 4],
  areaEffect: 0,
  type: [{
    life: 200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-deer-dead.png"
    },
    particlesDist: 73,
    particle: 5,
    units: 0,
    unitsMax: 18,
    collision: 1,
    z: 9,
    radius: 53
  }],
  particles: be.__BLOOD__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 40
}, We[Ie.MUSHROOM1] = {
  loot: [fe.mushroom],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom1.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom2.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom3.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom4.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: 9,
    radius: 32
  }],
  particles: be.__MUSHROOM1__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 40
}, We[Ie.WHITE_FLOWER] = {
  loot: [fe.antidoteflower],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-antidote-tree.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 1,
    collision: 0,
    z: 9,
    radius: 32
  }],
  particles: be.flower,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 1e3
}, We[Ie.MUSHROOM2] = {
  loot: [fe.mushroom2],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom5.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom6.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom7.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom8.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }],
  particles: be.__MUSHROOM2__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 40
}, We[Ie.MUSHROOM3] = {
  loot: [fe.mushroom3],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom9.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom10.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom11.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "img/day-mushroom12.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: 9,
    radius: 32
  }],
  particles: be.__MUSHROOM3__,
  impact: me.__NO_SOUND__,
  destroy: me.__NO_SOUND__,
  score: 40
};
var Fe = [-26, 25, -7, 0],
  Ne = [-28, -15, 25, 0],
  xe = [{
    src: "img/day-campfire-light-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-campfire-light-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-campfire-light-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/day-campfire-light-down.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/ghoul-hurt.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/heal-player.png",
    img: {
      isLoaded: 0
    }
  }],
  Ce = [{
    src: "img/karma4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/karma3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/karma2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/karma1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/karma0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "img/karma5.png",
    img: {
      isLoaded: 0
    }
  }],
  Ve = (se = 0, {
    __HOUSE0__: se++,
    __HOUSE1__: se++,
    __HOUSE2__: se++,
    __HOUSE3__: se++,
    __HOUSE4__: se++,
    __HOUSE5__: se++,
    __HOUSE6__: se++,
    __HOUSE7__: se++,
    __HOUSE8__: se++,
    __HOUSE9__: se++,
    __CITY0__: se++,
    __BUNKER0__: se++
  }),
  Be = [];
try {
  exports !== window.undefined && (_EMP = {
    v: 0,
    b: 0,
    V: -1,
    r: 0
  }, _WF = {
    v: we.__WOOD_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _LF = {
    v: we.__WOODLIGHT_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _SF = {
    v: we.__STONE_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _TF = {
    v: we.__TILING_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _GF = {
    v: we.__GOLD_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _RF = {
    v: we.__RED_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _WW = {
    v: 0,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWWF = {
    v: we.__WOOD_FLOOR__,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWLF = {
    v: we.__WOODLIGHT_FLOOR__,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWSF = {
    v: we.__STONE_FLOOR__,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWTF = {
    v: we.__TILING_FLOOR__,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWGF = {
    v: we.__GOLD_FLOOR__,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWRF = {
    v: we.__RED_FLOOR__,
    b: we.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _SW = {
    v: 0,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWWF = {
    v: we.__WOOD_FLOOR__,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWLF = {
    v: we.__WOODLIGHT_FLOOR__,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWSF = {
    v: we.__STONE_FLOOR__,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWTF = {
    v: we.__TILING_FLOOR__,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWGF = {
    v: we.__GOLD_FLOOR__,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWRF = {
    v: we.__RED_FLOOR__,
    b: we.__STONE_WALL__,
    V: -1,
    r: 0
  }, _MW = {
    v: 0,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWWF = {
    v: we.__WOOD_FLOOR__,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWLF = {
    v: we.__WOODLIGHT_FLOOR__,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWSF = {
    v: we.__STONE_FLOOR__,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWTF = {
    v: we.__TILING_FLOOR__,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWGF = {
    v: we.__GOLD_FLOOR__,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWRF = {
    v: we.__RED_FLOOR__,
    b: we.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _SC = {
    v: 0,
    b: we.__STONE_CAVE__,
    V: -1,
    r: 0
  }, _SCSF = {
    v: we.__STONE_FLOOR__,
    b: we.__STONE_CAVE__,
    V: -1,
    r: 0
  }, _SCTF = {
    v: we.__TILING_FLOOR__,
    b: we.__STONE_CAVE__,
    V: -1,
    r: 0
  }, _BW = {
    v: 0,
    b: we.__BUNKER_WALL__,
    V: -1,
    r: 0
  }, _BWSF = {
    v: we.__STONE_FLOOR__,
    b: we.__BUNKER_WALL__,
    V: -1,
    r: 0
  }, _BWTF = {
    v: we.__TILING_FLOOR__,
    b: we.__BUNKER_WALL__,
    V: -1,
    r: 0
  }, Be[Ve.__HOUSE0__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _WWWF, _WWWF, _WWWF, {
        v: 62,
        b: 30,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 30,
        V: -1,
        r: 2
      }, _WWWF, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 0,
        r: 3
      }, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 13,
        r: 1
      }, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 22,
        r: 3
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 30,
        V: -1,
        r: 3
      }],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 9,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 1
      }, _WF, _WF, _WF, {
        v: 62,
        b: 30,
        V: -1,
        r: 3
      }],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 17,
        r: 0
      }, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 19,
        r: 2
      }, _WWWF],
      [_EMP, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF]
    ]
  }, Be[Ve.__HOUSE1__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, {
        v: 67,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF],
      [_EMP, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 28,
        r: 3
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 21,
        r: 1
      }, _SWLF],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _SWLF, {
        v: 67,
        b: 71,
        V: 12,
        r: 0
      }, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 15,
        r: 1
      }, _SWLF],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 1
      }, _LF, {
        v: 67,
        b: 71,
        V: 5,
        r: 1
      }, _SWLF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _SWWF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, _SWWF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _LF, _LF, {
        v: 62,
        b: 71,
        V: 8,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 1,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 2,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 20,
        r: 0
      }, _LF, _LF, _WF, _WF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }, _SWWF, _SWWF, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF],
      [_EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 2
      }, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }]
    ]
  }, Be[Ve.__HOUSE2__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _SWWF, _SWWF, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWLF, _SWLF, _SWLF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 3
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 5,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 13,
        r: 1
      }, _SWLF, _WF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 20,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 16,
        r: 2
      }, _SWWF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 1
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _WF, {
        v: 62,
        b: 71,
        V: 2,
        r: 1
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 11,
        r: 3
      }, _LF, _LF, _LF, _SWWF, _LF, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SW],
      [_EMP, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _LF, _LF, _SWLF, {
        v: 67,
        b: 71,
        V: 25,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 3,
        r: 1
      }, _SWLF],
      [_EMP, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _SWWF, _LF, _LF, {
        v: 67,
        b: 51,
        V: -1,
        r: 1
      }, _LF, {
        v: 67,
        b: 71,
        V: 18,
        r: 2
      }, _SWLF],
      [_EMP, _WF, _WF, _SW, {
        v: 62,
        b: 71,
        V: 3,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 16,
        r: 2
      }, _SWWF, _SWLF, _SWLF, _SWLF, _SWLF, _SWLF, _SWLF],
      [_EMP, _WF, {
        v: 62,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 4,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 22,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }, _EMP, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }],
      [_EMP, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 1
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }]
    ]
  }, Be[Ve.__HOUSE3__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 23,
        r: 2
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 21,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 28,
        r: 0
      }, _SWLF],
      [_EMP, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _EMP, _SWLF, _LF, _LF, _SWLF],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 12,
        r: 0
      }, _WF, _WF, _WF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _SWLF],
      [_EMP, _SWWF, _WF, {
        v: 62,
        b: 71,
        V: 2,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 1
      }, _SWWF, _WF, _WF, _WF, _WF, _SWWF],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 0,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _SWWF, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 2
      }, _WF, _SWWF],
      [_EMP, _SWWF, _WF, {
        v: 62,
        b: 71,
        V: 1,
        r: 2
      }, _WF, _WF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _SWWF, _SWWF, _SWLF],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _LF, _LF, _SWLF],
      [_EMP, _SWWF, _WF, _WF, _WF, _WF, _WF, _WF, _WF, _SWLF, {
        v: 67,
        b: 71,
        V: 25,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 18,
        r: 3
      }, _SWLF],
      [_EMP, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _SWWF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 20,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 11,
        r: 0
      }, _WF, _WF, _SWWF, {
        v: 67,
        b: 71,
        V: 24,
        r: 0
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _SWWF, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _SWWF, _SWWF, _SWWF, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 14,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 13,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWWF],
      [_EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWLF, _SWWF, _SWWF]
    ]
  }, Be[Ve.__HOUSE4__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 12,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 5,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 11,
        r: 1
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _LF, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 19,
        r: 2
      }, _SWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 21,
        r: 1
      }, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 9,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 1
      }, _LF, {
        v: 67,
        b: 71,
        V: 26,
        r: 3
      }, _SWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 28,
        r: 1
      }, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _LF, _LF, _LF, _SWLF, _LF, _SWLF, _SWLF, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 9,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 10,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 3
      }, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 27,
        r: 2
      }, _SWLF],
      [_EMP, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _SWLF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }]
    ]
  }, Be[Ve.__HOUSE5__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF,
        _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF
      ],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, _WF, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 1,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 2,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }],
      [_EMP, _SWWF, _LF, _LF, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, _WF, _SWWF, {
        v: 62,
        b: 71,
        V: 39,
        r: 0
      }, _WF, _WF, _WF, _WF, _WF, _SWWF],
      [_EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 39,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 51,
        V: -1,
        r: 1
      }],
      [_EMP, _SWWF, {
        v: 85,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 51,
        V: -1,
        r: 3
      }],
      [_EMP, _SWWF, {
        v: 85,
        b: 71,
        V: 28,
        r: 3
      }, _TF, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 40,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 1
      }, _SWWF],
      [_EMP, _SWWF, {
        v: 85,
        b: 71,
        V: 21,
        r: 3
      }, _TF, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _SWWF],
      [_EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF,
        _SWTF, {
          v: 0,
          b: 71,
          V: 41,
          r: 2
        },
        _SWTF, _SWTF, _SWTF, _SWWF, _SWWF, _SWWF
      ],
      [_EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }, _EMP, _EMP, _EMP, _SWTF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 18,
        r: 2
      }, _SWTF, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SWTF, {
        v: 85,
        b: 71,
        V: 25,
        r: 1
      }, _TF, {
        v: 85,
        b: 71,
        V: 19,
        r: 2
      }, _SWTF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SWTF, _SWTF,
        _SWTF, _SWTF, _SWTF
      ]
    ]
  }, Be[Ve.__HOUSE6__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _WWWF, _WWWF, _WWWF, {
        v: 67,
        b: 50,
        V: -1,
        r: 2
      }, _WWWF, _WWWF, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 8,
        r: 0
      }, _LF, {
        v: 62,
        b: 71,
        V: 13,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 6,
        r: 0
      }, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, _WF, _LF, _WF, _WF, _WWWF],
      [_EMP, {
        v: 67,
        b: 50,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 144,
        V: -1,
        r: 0
      }, _LF, {
        v: 67,
        b: 50,
        V: -1,
        r: 3
      }],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 28,
        r: 3
      }, _WF, _LF, _WF, {
        v: 62,
        b: 71,
        V: 19,
        r: 2
      }, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 21,
        r: 3
      }, _WF, _LF, _WF, {
        v: 62,
        b: 71,
        V: 26,
        r: 2
      }, _WWWF],
      [_EMP, _WWWF, _WWWF, _WWWF, {
        v: 67,
        b: 50,
        V: -1,
        r: 0
      }, _WWWF, _WWWF, _WWWF]
    ]
  }, Be[Ve.__HOUSE7__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _SW, _SW, _SW, _SW, _SW, _SW, _SW, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 39,
        r: 1
      }, _WF, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 69,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 69,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 69,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, _WF, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, _SW],
      [_EMP, _SW, _SW, _SW, {
        v: 84,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 84,
        b: 31,
        V: -1,
        r: 2
      }, _SW, _SW, _SW, {
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }],
      [_EMP, _SW, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, _SW, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }]
    ]
  }, Be[Ve.__HOUSE8__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _LF, {
        v: 67,
        b: 148,
        V: -1,
        r: 0
      }, _LF, _LF, _LF, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 148,
        V: -1,
        r: 3
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 149,
        V: -1,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 149,
        V: -1,
        r: 0
      }, _MWWF, _MWWF, _MW, _MW, _MW, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 143,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 143,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _MWWF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 28,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 28,
        r: 0
      }, _MW, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }],
      [_EMP, _MW, _WF, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 146,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 32,
        V: -1,
        r: 3
      }, _SF, _SF, _SF, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 71,
        V: 4,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, _LF, {
        v: 62,
        b: 71,
        V: 3,
        r: 1
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MW, _MW, _TF, _TF, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 71,
        V: 3,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, _LF, {
        v: 62,
        b: 71,
        V: 4,
        r: 1
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 71,
        V: 21,
        r: 3
      }, {
        v: 85,
        b: 32,
        V: -1,
        r: 3
      }, _TF, _TF, _MW],
      [_EMP, _MW, _WF, _LF, _LF, _LF, _LF, _WF, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MW, _MW, _MW, _MW, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MW],
      [_EMP, _MWLF, _MWLF, _MWLF, {
        v: 67,
        b: 52,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 52,
        V: -1,
        r: 2
      }, _MWLF, _MWLF, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MWLF],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 27,
        r: 1
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 67,
        b: 144,
        V: -1,
        r: 3
      }, _MWLF],
      [_EMP, {
        v: 67,
        b: 70,
        V: -1,
        r: 1
      }, _LF, _WF, _WF, _WF, _LF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _MWLF],
      [_EMP, {
        v: 67,
        b: 70,
        V: -1,
        r: 1
      }, _LF, {
        v: 62,
        b: 71,
        V: 4,
        r: 3
      }, _WF, _WF, _LF, {
        v: 67,
        b: 71,
        V: 9,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 10,
        r: 1
      }, _MWLF, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 3,
        r: 2
      }, _LF, _LF, _LF, _MWLF, {
        v: 0,
        b: 71,
        V: 24,
        r: 2
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 18,
        r: 0
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 3
      }, _MWLF],
      [_EMP, _MWLF, _MWLF, _MWLF, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, _MWLF, _MWLF, _MWLF, _MWLF]
    ]
  }, Be[Ve.__HOUSE9__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, _EMP, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 151,
        V: -1,
        r: 0
      }],
      [_EMP, _WW, _WW, {
        v: 0,
        b: 30,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 30,
        V: -1,
        r: 2
      }, _MWTF, _MWTF, {
        v: 67,
        b: 149,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 149,
        V: -1,
        r: 0
      }, _MWTF],
      [_EMP, _WW, {
        v: 0,
        b: 71,
        V: 23,
        r: 3
      }, _EMP, _EMP, _MWTF, {
        v: 67,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 67,
        b: 143,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 143,
        V: -1,
        r: 1
      }, _MWTF, {
        v: 0,
        b: 71,
        V: 17,
        r: 2
      }],
      [_EMP, _WW, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }, _MWTF, {
        v: 67,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _LF, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _MWTF, _MWTF, _MWTF],
      [_EMP, _WW, {
        v: 0,
        b: 144,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 144,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 144,
        V: -1,
        r: 3
      }, _MWTF, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 71,
        V: 20,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 11,
        r: 0
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, _MWTF, {
        v: 85,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 149,
        V: -1,
        r: 0
      }, _MWTF, {
        v: 62,
        b: 32,
        V: -1,
        r: 2
      }, _MWWF, {
        v: 67,
        b: 71,
        V: 8,
        r: 0
      }, _LF, _WF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 85,
        b: 70,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 147,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 140,
        V: -1,
        r: 2
      }, _MWTF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }, _LF, _LF, _WF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 31,
        r: 0
      }, {
        v: 85,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 150,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 2
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 0,
        r: 2
      }, _LF, {
        v: 62,
        b: 71,
        V: 10,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 0
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, {
        v: 85,
        b: 32,
        V: -1,
        r: 2
      }, _MWTF, _MWTF, _MWTF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _MWTF, {
        v: 85,
        b: 71,
        V: 28,
        r: 3
      }, _TF, _TF, _MWTF, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 21,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 18,
        r: 3
      }, _MWTF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, _MWTF, _MWTF, _MWTF,
        _MWTF
      ]
    ]
  }, Be[Ve.__CITY0__] = {
    width: 0,
    height: 0,
    radiation: 2,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, _EMP, {
          v: 0,
          b: 111,
          V: -1,
          r: 3
        },
        _EMP, _EMP, {
          v: 0,
          b: 111,
          V: -1,
          r: 3
        },
        _EMP, {
          v: 0,
          b: 111,
          V: -1,
          r: 3
        },
        _EMP, {
          v: 0,
          b: 111,
          V: -1,
          r: 3
        },
        _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 26,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 24,
          r: 0
        },
        _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 71,
          V: 24,
          r: 0
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF,
        _MWTF, _MWTF, _MWTF, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, {
          v: 0,
          b: 71,
          V: 16,
          r: 0
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _MWTF, {
          v: 85,
          b: 71,
          V: 37,
          r: 1
        }, {
          v: 85,
          b: 71,
          V: 28,
          r: 0
        },
        _TF, {
          v: 85,
          b: 71,
          V: 31,
          r: 1
        }, {
          v: 85,
          b: 71,
          V: 32,
          r: 1
        },
        _MWTF, {
          v: 85,
          b: 71,
          V: 37,
          r: 1
        },
        _TF, _TF, _MWTF, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _MWLF, _WF, {
          v: 62,
          b: 70,
          V: -1,
          r: 3
        },
        _LF, _LF, {
          v: 62,
          b: 71,
          V: 13,
          r: 2
        },
        _MWLF, _MWSF, _MWSF, _MWSF, _MWSF
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _MWTF, _TF, _TF, _TF, _TF, _TF, _MWTF, _TF, _TF, {
          v: 85,
          b: 71,
          V: 36,
          r: 1
        },
        _MWTF, _EMP, {
          v: 0,
          b: 71,
          V: 24,
          r: 0
        },
        _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, {
          v: 0,
          b: 71,
          V: 23,
          r: 0
        },
        _MWLF, _WF, {
          v: 62,
          b: 71,
          V: 40,
          r: 2
        },
        _LF, _LF, {
          v: 62,
          b: 71,
          V: 12,
          r: 2
        },
        _MWLF, {
          v: 84,
          b: 71,
          V: 26,
          r: 3
        }, {
          v: 84,
          b: 71,
          V: 17,
          r: 3
        },
        _SF, _MWSF
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _MWSF, _MWSF, {
        v: 84,
        b: 52,
        V: -1,
        r: 0
      }, _MWSF, _MWSF, _MWTF, _MWTF, _MWSF, {
        v: 85,
        b: 71,
        V: 41,
        r: 0
      }, _MWSF, {
        v: 85,
        b: 71,
        V: 41,
        r: 0
      }, _MWTF, _MW, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 151,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _WF, _MWLF, _SF, _SF, {
        v: 84,
        b: 71,
        V: 18,
        r: 2
      }, _MWSF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, _SF,
        _SF, _SF, _SF, {
          v: 84,
          b: 71,
          V: 35,
          r: 2
        }, {
          v: 84,
          b: 71,
          V: 35,
          r: 2
        },
        _SF, _SF, _SF, _SF, {
          v: 84,
          b: 71,
          V: 35,
          r: 2
        }, {
          v: 84,
          b: 71,
          V: 35,
          r: 2
        },
        _SF, _SF, _SF, _SF, {
          v: 84,
          b: 71,
          V: 33,
          r: 2
        },
        _MWTF, {
          v: 0,
          b: 71,
          V: 24,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, {
          v: 0,
          b: 151,
          V: -1,
          r: 1
        }, {
          v: 67,
          b: 150,
          V: -1,
          r: 1
        },
        _LF, _LF, _LF, _LF, _WF, {
          v: 67,
          b: 71,
          V: 41,
          r: 1
        },
        _SF, _SF, {
          v: 84,
          b: 71,
          V: 18,
          r: 2
        },
        _MWSF
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 9,
        r: 0
      }, _SF, _SF, _SF, _SF, _SF, {
        v: 84,
        b: 151,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 151,
        V: -1,
        r: 1
      }, _SF, _SF, _SF, _SF, _SF, _SF, {
        v: 85,
        b: 71,
        V: 33,
        r: 2
      }, _MWTF, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _MWLF, {
        v: 62,
        b: 71,
        V: 39,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 39,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _MWLF, {
        v: 84,
        b: 71,
        V: 26,
        r: 2
      }, _SF, {
        v: 84,
        b: 71,
        V: 16,
        r: 2
      }, _MWSF, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 10,
        r: 2
      }, _SF, _SF, _SF, _MWSF, _MWSF, {
        v: 84,
        b: 149,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 149,
        V: -1,
        r: 2
      }, _MWSF, _MWSF, _SF, _SF, _MWTF, _MWSF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _MWLF, _MWLF, _MWLF, _MWLF, {
        v: 0,
        b: 52,
        V: -1,
        r: 0
      }, _MWLF, _MWLF, _MWSF, _MWSF, _MWSF, _MWSF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, _MWSF,
        _MWSF, {
          v: 84,
          b: 71,
          V: 33,
          r: 0
        },
        _SF, _MWSF, {
          v: 84,
          b: 71,
          V: 32,
          r: 0
        }, {
          v: 84,
          b: 142,
          V: -1,
          r: 3
        }, {
          v: 84,
          b: 140,
          V: -1,
          r: 1
        }, {
          v: 85,
          b: 146,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 142,
          V: -1,
          r: 2
        }, {
          v: 84,
          b: 151,
          V: -1,
          r: 2
        }, {
          v: 84,
          b: 150,
          V: -1,
          r: 1
        },
        _SF, {
          v: 84,
          b: 71,
          V: 33,
          r: 2
        },
        _MWTF, {
          v: 0,
          b: 71,
          V: 37,
          r: 1
        }, {
          v: 0,
          b: 71,
          V: 38,
          r: 1
        },
        _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _EMP, {
          v: 0,
          b: 71,
          V: 26,
          r: 0
        }, {
          v: 0,
          b: 71,
          V: 26,
          r: 0
        },
        _SF, _SF, {
          v: 0,
          b: 71,
          V: 17,
          r: 0
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _MWSF, {
          v: 84,
          b: 71,
          V: 22,
          r: 0
        },
        _SF, _MWSF, _SF, {
          v: 84,
          b: 71,
          V: 34,
          r: 3
        },
        _TF, {
          v: 85,
          b: 140,
          V: -1,
          r: 2
        }, {
          v: 84,
          b: 71,
          V: 34,
          r: 3
        },
        _SF, _MWSF, _SF, {
          v: 84,
          b: 71,
          V: 38,
          r: 0
        },
        _MWTF, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 32,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 24,
          r: 0
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }, _EMP, _MWSF, _MW, {
        v: 84,
        b: 32,
        V: -1,
        r: 0
      }, _MWSF, {
        v: 84,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 142,
        V: -1,
        r: 1
      }, _MWSF, {
        v: 84,
        b: 32,
        V: -1,
        r: 0
      }, _MW, _MWTF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 35,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 31,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, _TF, _TF, _MWSF, {
        v: 84,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 34,
        r: 1
      }, {
        v: 85,
        b: 140,
        V: -1,
        r: 2
      }, _TF, {
        v: 84,
        b: 71,
        V: 34,
        r: 1
      }, {
        v: 84,
        b: 140,
        V: -1,
        r: 2
      }, _MWSF, _TF, _TF, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _EMP, _EMP, _EMP, _WF],
      [_EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 33,
        r: 1
      }, {
        v: 85,
        b: 71,
        V: 33,
        r: 1
      }, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 2
      }, _SF, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 145,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 147,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 142,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, _SF, {
        v: 85,
        b: 70,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _WWLF, _WWLF, {
        v: 67,
        b: 30,
        V: -1,
        r: 2
      }, _WWLF, _WWLF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _MWSF, _SF, _SF, _MWSF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 32,
        V: -1,
        r: 3
      }, _TF, _TF, _TF, _MWSF, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MWSF, _TF, _TF, _TF, {
        v: 0,
        b: 32,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _WWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 6,
        r: 1
      }, _WWLF, _WF, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, {
        v: 84,
        b: 71,
        V: 41,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 41,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, _SF, _SF, _SF, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, _SF, _SF, _SF, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 30,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 19,
        r: 2
      }, _WWWF, _WF, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 36,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 37,
        r: 3
      }, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 71,
        V: 39,
        r: 0
      }, _TF, _TF, _TF, _TF, _TF, _TF, _TF, _TF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 35,
        r: 1
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _WWLF, {
        v: 67,
        b: 71,
        V: 8,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 0,
        r: 1
      }, _WWLF, _WF, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, {
          v: 0,
          b: 71,
          V: 26,
          r: 1
        }, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, _EMP, {
          v: 0,
          b: 70,
          V: -1,
          r: 3
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 32,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 32,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 70,
          V: -1,
          r: 0
        }, {
          v: 0,
          b: 70,
          V: -1,
          r: 1
        }, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, {
          v: 0,
          b: 71,
          V: 23,
          r: 0
        }, _WWLF, _WWLF, _WWLF, _WWLF, _WWLF, _WF, _SWLF, _SWLF, _SWLF,
        _SWLF, _EMP, _EMP, _EMP, {
          v: 0,
          b: 69,
          V: -1,
          r: 3
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _WF, _WF, _WF, _WF, _WF, _WF, _WF, _SWLF, _WF, {
          v: 62,
          b: 71,
          V: 21,
          r: 1
        },
        _SWWF, _LF, _LF, _LF, {
          v: 67,
          b: 69,
          V: -1,
          r: 3
        }
      ],
      [{
        v: 0,
        b: 86,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 33,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 32,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 33,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 32,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, {
        v: 67,
        b: 51,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF],
      [{
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 27,
        r: 1
      }, _LF, _LF, _SWLF, {
        v: 67,
        b: 71,
        V: 23,
        r: 3
      }, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [{
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _LF, _LF, _SWLF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [{
        v: 0,
        b: 86,
        V: 30,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 42,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 43,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 34,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _LF, _LF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _SWLF, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 14,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 7,
          r: 0
        },
        _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 84,
          b: 71,
          V: 23,
          r: 0
        }, {
          v: 84,
          b: 151,
          V: -1,
          r: 0
        }, {
          v: 84,
          b: 71,
          V: 23,
          r: 0
        },
        _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 0
        }, {
          v: 62,
          b: 69,
          V: -1,
          r: 0
        },
        _SWLF, {
          v: 67,
          b: 71,
          V: 15,
          r: 0
        }, {
          v: 67,
          b: 71,
          V: 4,
          r: 0
        }, {
          v: 67,
          b: 71,
          V: 3,
          r: 0
        }, {
          v: 67,
          b: 71,
          V: 14,
          r: 0
        },
        _LF, _LF, _LF, _LF, _LF, _SWLF, {
          v: 0,
          b: 71,
          V: 26,
          r: 1
        }
      ],
      [_EMP, _EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 26,
        r: 1
      }, _WF, _WF, _WWWF, {
        v: 62,
        b: 71,
        V: 16,
        r: 2
      }, _WF, _WF, _WWWF, {
        v: 0,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 15,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _MWWF, _MWWF, _MWWF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _MWWF, _MWWF, _MWWF, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 4,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 3,
        r: 1
      }, _LF, _WF, _WF, _WF, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 17,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 22,
        r: 1
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 17,
        r: 2
      }, _WF, {
        v: 62,
        b: 71,
        V: 15,
        r: 1
      }, _WWWF, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _MWWF, {
        v: 62,
        b: 71,
        V: 16,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 39,
        r: 1
      }, _WF, _WF, _WF, _MWWF, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 148,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _WF, _WF, _WF, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 0,
        r: 1
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 1,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _WWWF, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MW, _MWSF, _MWSF, _MWWF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 27,
        r: 2
      }, _MWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 27,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 8,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 27,
        r: 3
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWLF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, _WF, _WF, _WWWF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 12,
        r: 2
      }, _WW, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 2
      }, _MWSF, {
        v: 84,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 84,
        b: 71,
        V: 19,
        r: 1
      }, _MWSF, {
        v: 62,
        b: 32,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 0
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 39,
        r: 2
      }, _MWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }],
      [_EMP, {
          v: 0,
          b: 71,
          V: 17,
          r: 0
        }, _WW, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WW, _WW, _EMP,
        _EMP, {
          v: 0,
          b: 69,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 71,
          V: 24,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 14,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 6,
          r: 0
        }, {
          v: 0,
          b: 71,
          V: 17,
          r: 0
        },
        _MWSF, _SF, _SF, _MWSF, _LF, {
          v: 67,
          b: 70,
          V: -1,
          r: 3
        },
        _WF, _WF, _WF, _MWWF, {
          v: 84,
          b: 71,
          V: 23,
          r: 0
        },
        _SF, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _EMP, {
          v: 0,
          b: 140,
          V: -1,
          r: 0
        },
        _SWLF, {
          v: 62,
          b: 71,
          V: 20,
          r: 1
        },
        _WF, {
          v: 62,
          b: 71,
          V: 28,
          r: 0
        },
        _SWWF, _WF, _WF, _WF, {
          v: 62,
          b: 71,
          V: 20,
          r: 1
        }, {
          v: 62,
          b: 71,
          V: 13,
          r: 1
        },
        _SWWF
      ],
      [_EMP, _EMP, _EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _WF,
        _WF, _WF, _WF, {
          v: 62,
          b: 69,
          V: -1,
          r: 3
        },
        _EMP, {
          v: 0,
          b: 86,
          V: 14,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 6,
          r: 0
        },
        _EMP, _MWSF, _SF, _SF, _MWLF, _LF, {
          v: 67,
          b: 70,
          V: -1,
          r: 3
        },
        _WF, _WF, _WF, {
          v: 62,
          b: 150,
          V: -1,
          r: 3
        }, {
          v: 84,
          b: 151,
          V: -1,
          r: 0
        },
        _SF, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _EMP, {
          v: 0,
          b: 140,
          V: -1,
          r: 0
        }, {
          v: 62,
          b: 69,
          V: -1,
          r: 1
        },
        _WF, _WF, _WF, {
          v: 62,
          b: 31,
          V: -1,
          r: 3
        },
        _WF, _WF, _WF, _WF, _WF, {
          v: 0,
          b: 69,
          V: -1,
          r: 1
        }
      ],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 6,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 14,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 15,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _WF, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 18,
        r: 3
      }, _SF, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 40,
        r: 2
      }, _WF, _WF, _WF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 151,
        V: -1,
        r: 3
      }, _SF, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 143,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _SWWF, _WF, _WF, _WF, _WF, _SWWF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 13,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MWSF, _MWSF, _MWSF, _MWLF, {
        v: 67,
        b: 144,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 39,
        r: 2
      }, _MWWF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _SF, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 140,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 0,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 2,
        r: 0
      }, _WF, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 148,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 27,
        r: 2
      }, _MWWF, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 16,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 26,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 17,
        r: 1
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _SWWF, _WF, _WF, _WF, _WF, _SWWF, {
        v: 67,
        b: 71,
        V: 12,
        r: 0
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _MWLF, _MWLF, _MWLF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _MWWF, _MWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _WF, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 1,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 8,
        r: 2
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 20,
        r: 2
      }, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _WF, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _SWWF, _SWWF, _SWWF, {
          v: 62,
          b: 31,
          V: -1,
          r: 0
        }, _SWWF, _SWWF, _SWLF, {
          v: 67,
          b: 69,
          V: -1,
          r: 0
        }, {
          v: 67,
          b: 69,
          V: -1,
          r: 0
        }, _SWLF, _SWLF, _EMP, {
          v: 0,
          b: 86,
          V: 14,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 6,
          r: 0
        }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SF, _SF, _SF, _SF, _EMP,
        _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }, {
          v: 0,
          b: 69,
          V: -1,
          r: 2
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 15,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 36,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 4,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 3,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 45,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 9,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 9,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 32,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 25,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 24,
          r: 0
        }
      ],
      [{
        v: 0,
        b: 86,
        V: 17,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 4,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 5,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 37,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 35,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 31,
        r: 0
      }],
      [{
        v: 0,
        b: 86,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 11,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 38,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 1,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 34,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _LF, _LF, _LF, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _LF, _LF, _LF],
      [{
        v: 0,
        b: 86,
        V: 40,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 39,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SW, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _SWWF, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _SWWF, {
        v: 62,
        b: 71,
        V: 27,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 27,
        r: 1
      }, _WF, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF,
        _MWWF, _MWWF, _MWWF, _MWWF, _MWWF, _MWWF, _EMP, {
          v: 0,
          b: 86,
          V: 14,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 6,
          r: 0
        }, {
          v: 67,
          b: 69,
          V: -1,
          r: 1
        },
        _LF, _LF, _LF, {
          v: 62,
          b: 31,
          V: -1,
          r: 1
        },
        _WF, _WF, _WF, _WF, _WF, {
          v: 62,
          b: 69,
          V: -1,
          r: 3
        },
        _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, {
          v: 67,
          b: 151,
          V: -1,
          r: 1
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 148,
          V: -1,
          r: 0
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 67,
          b: 151,
          V: -1,
          r: 1
        }
      ],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 35,
        r: 2
      }, _LF, {
        v: 67,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 150,
        V: -1,
        r: 1
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 17,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 16,
        r: 1
      }, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 3,
        r: 1
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 22,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 20,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 11,
        r: 2
      }, _WF, _SWWF, _SWWF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 2
      }, _MW, _MW, _MWWF, _WF, _WF, _WF, _WF, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 3
      }, _SWLF, _SWLF, _SWWF, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [{
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 150,
        V: -1,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 10,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 3
      }, _WF, {
        v: 62,
        b: 32,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SW, {
        v: 62,
        b: 71,
        V: 14,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 0
      }, _WF, _WF, _WF, _WF, _SWWF, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _LF, {
        v: 67,
        b: 71,
        V: 45,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 45,
        r: 0
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 24,
        r: 1
      }],
      [_EMP, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 7,
        r: 3
      }, _WF, {
        v: 62,
        b: 32,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _SWWF, _WF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 13,
        r: 2
      }, _SWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }],
      [{
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }, _MWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 3,
        r: 0
      }, {
        v: 67,
        b: 148,
        V: -1,
        r: 3
      }, _MWLF, {
        v: 67,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 147,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, _WF, _WF, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 10,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }],
      [{
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _MWLF, _LF, _WF, _WF, {
        v: 67,
        b: 146,
        V: -1,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 1
      }, _MW, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }],
      [_EMP, _MWLF, _LF, _WF, _WF, {
        v: 67,
        b: 71,
        V: 10,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 71,
        V: 14,
        r: 3
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 0
      }, _MWWF, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, _MWWF, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, _MWWF, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 30,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 31,
        r: 0
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 36,
        r: 2
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 9,
        r: 2
      }, _MWLF, {
        v: 67,
        b: 71,
        V: 16,
        r: 2
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 17,
        r: 3
      }, {
        v: 67,
        b: 147,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 2
      }, _MW, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }],
      [_EMP, _MWLF, _MWLF, {
        v: 67,
        b: 150,
        V: -1,
        r: 2
      }, _MWLF, _MWLF, _MWLF, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 2
      }, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, _MW, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 2
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _MW, _MW, _MW, _MW, _MW, _MW, _MW, _MW, _MW, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 40,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 1,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 41,
          r: 0
        }
      ]
    ]
  }, Be[Ve.__BUNKER0__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _EMP, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _SC, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _EMP, _EMP, _EMP, _EMP, _SC, _BWTF, _BWTF, {
        v: 85,
        b: 52,
        V: -1,
        r: 2
      }, _BWTF, _BWTF, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _BWTF, _TF, _TF,
        _TF, _BWTF, _SC, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _SC, _SC, _SC, _SC, _BWTF, _BWTF, _BWTF, _BWTF, _TF,
        _TF, _TF, _BWTF, _SC, _SC, _EMP, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _BWTF, {
        v: 85,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 85,
        b: 71,
        V: 58,
        r: 0
      }, _BWTF, {
        v: 85,
        b: 71,
        V: 33,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 33,
        r: 3
      }, _BWTF, _SC, _SC, _EMP, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _BWTF, {
          v: 85,
          b: 71,
          V: 10,
          r: 2
        }, _TF, _BWTF, _BWTF, _SF, _BWSF, _BWSF, _BW, _SC, _EMP, _EMP,
        _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _BWTF, _TF, _TF, _SF, _SF, _SF, _SF,
      {
        v: 84,
        b: 71,
        V: 51,
        r: 1
      }, _BWSF, _SC, _SC, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _SF,
        _SF, _SF, _SF, _BWSF, _BW, _SC, _SC, _EMP, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _SF, _SF, _SF, _BWTF, _BWTF, _SF,
        _SF, _SF, _BWSF, _BWTF, _BWTF, _SC, _EMP, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _SF, _BWTF, _SF, _SF, _SF, _SF,
        _BWTF, _TF, _TF, {
          v: 85,
          b: 71,
          V: 55,
          r: 2
        },
        _BWTF, _SC, _EMP, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _SF, _BWTF, _BWTF, _BWTF, _BWTF,
        _SF, _BWTF, {
          v: 85,
          b: 71,
          V: 28,
          r: 3
        },
        _TF, {
          v: 85,
          b: 71,
          V: 21,
          r: 1
        },
        _BWTF, _SC, _EMP, _EMP, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _TF, {
          v: 85,
          b: 71,
          V: 23,
          r: 1
        }, {
          v: 85,
          b: 71,
          V: 53,
          r: 3
        }, {
          v: 85,
          b: 71,
          V: 56,
          r: 2
        }, _BWTF, _SF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _SC, _EMP, _EMP,
        _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _BWTF, _TF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 53,
        r: 2
      }, _BWTF, _SF, _SF, _TF, {
        v: 85,
        b: 71,
        V: 51,
        r: 0
      }, {
        v: 85,
        b: 71,
        V: 48,
        r: 0
      }, _BWTF, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _TF, _TF, _TF, _TF, _BWTF, _BWTF,
        _BWTF, _TF, _TF, _TF, _BWTF, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, {
        v: 85,
        b: 71,
        V: 20,
        r: 3
      }, {
        v: 85,
        b: 71,
        V: 11,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 49,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 54,
        r: 2
      }, _BWTF, _BWTF, {
        v: 85,
        b: 71,
        V: 48,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 50,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 49,
        r: 3
      }, _BWTF, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _SC, _SC, _SC, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF,
        _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _SC, _SC, _SC,
        _SC, _SC, _SC
      ],
      [_EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _EMP, _EMP, _EMP, _EMP, _SC,
        _SC, _SC, _SC, _SC
      ]
    ]
  })
} catch (li) {}
for (Oe = 0; Oe < Be.length; Oe++) {
  var De = Be[Oe],
    ke = Be[Oe].building;
  De.height = ke.length;
  for (var Ue = 0; Ue < ke.length; Ue++) De.width = window.Math.max(ke[Ue]
    .length, De.width)
}
var Ye = [];
Ye[le.__FIRE__] = we.__CAMPFIRE__, Ye[le.__BBQ__] = we.__CAMPFIRE_BBQ__, Ye[le
    .__WORKBENCH__] = we.__WORKBENCH__, Ye[le.__WORKBENCH2__] = we
  .__WORKBENCH2__, Ye[le.__TESLA__] = we.__TESLA__, Ye[le.__SMELTER__] = we
  .__SMELTER__, Ye[le.__WEAVING__] = we.__WEAVING__, Ye[le.__COMPOST__] = we
  .__COMPOST__, Ye[le.__AGITATOR__] = we.__AGITATOR__, Ye[le.__EXTRACTOR__] = we
  .__EXTRACTOR__;
var He = null,
  Ge = null,
  Ke = null,
  ze = null,
  Je = null,
  Xe = null,
  Qe = null,
  je = "#38513D",
  qe = "#0B1D23",
  Ze = [{
    id: we.__STONE__,
    amount: 50,
    life: 255
  }, {
    id: we.__WOOD__,
    amount: 100,
    life: 255
  }, {
    id: we.__WORKBENCH__,
    amount: 1,
    life: 255
  }],
  $e = [];
se = 0, $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE__,
  amount: 20,
  life: 255
}, {
  id: we.__WOOD__,
  amount: 40,
  life: 255
}, {
  id: we.__ORANGE__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE__,
  amount: 20,
  life: 255
}, {
  id: we.__WOOD__,
  amount: 40,
  life: 255
}, {
  id: we.__ORANGE__,
  amount: 3,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE__,
  amount: 30,
  life: 255
}, {
  id: we.__WOOD__,
  amount: 50,
  life: 255
}, {
  id: we.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: we.__ORANGE__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE__,
  amount: 30,
  life: 255
}, {
  id: we.__WOOD__,
  amount: 60,
  life: 255
}, {
  id: we.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__ORANGE__,
  amount: 5,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE__,
  amount: 40,
  life: 255
}, {
  id: we.__WOOD__,
  amount: 90,
  life: 255
}, {
  id: we.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE__,
  amount: 40,
  life: 255
}, {
  id: we.__WOOD__,
  amount: 150,
  life: 255
}, {
  id: we.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 2,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL__,
  amount: 6,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 2,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__WOOD_SPEAR__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 3,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__WOOD_BOW__,
  amount: 1,
  life: 255
}, {
  id: we.__WOOD_ARROW__,
  amount: 20,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__WOOD_WALL__,
  amount: 10,
  life: 255
}, {
  id: we.__WOOD_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__WOOD_WALL__,
  amount: 16,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 14,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__LANDMINE__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 14,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__ARMOR_PHYSIC_1__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 14,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 2,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 20,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 4,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 2,
  life: 255
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: we.__RAW_STEAK__,
  amount: 4,
  life: 255
}], $e[se++] = [{
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CAMPFIRE_BBQ__,
  amount: 2,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: we.__SEED_ORANGE__,
  amount: 8,
  life: 255
}], $e[se++] = [{
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: we.__SEED_ORANGE__,
  amount: 8,
  life: 255
}], $e[se++] = [{
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__9MM__,
  amount: 1,
  life: 20
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__9MM__,
  amount: 1,
  life: 20
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__9MM__,
  amount: 1,
  life: 20
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__9MM__,
  amount: 1,
  life: 20
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: we.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__9MM__,
  amount: 1,
  life: 20
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_WALL__,
  amount: 14,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__9MM__,
  amount: 1,
  life: 20
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_WALL__,
  amount: 14,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: we.__DESERT_EAGLE__,
  amount: 1,
  life: 7
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_WALL__,
  amount: 14,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__DYNAMITE__,
  amount: 6,
  life: 255
}, {
  id: we.__DESERT_EAGLE__,
  amount: 1,
  life: 7
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], $e[se++] = [{
  id: we.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: we.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: we.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: we.__STEEL_WALL__,
  amount: 20,
  life: 255
}, {
  id: we.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: we.__LANDMINE__,
  amount: 6,
  life: 255
}, {
  id: we.__DESERT_EAGLE__,
  amount: 1,
  life: 7
}, {
  id: we.__WORKBENCH2__,
  amount: 1,
  life: 255
}], se = 0;
var ei = {
    __AGGRESSIVE__: se++,
    __REPAIR__: se++
  },
  ii = [];
ii[Le.__NORMAL_GHOUL__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 1,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 96e4,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "img/day-ghoul-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "img/day-ghoul-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-ghoul.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/ghoul-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-ghoul-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 30,
  areaEffect: 0,
  radius: 38,
  life: 160,
  speed: [.12, .22],
  speedRun: [.14, .25],
  loot: [
    [we.__ANIMAL_FAT__, 4, fe.__ANIMAL_FAT__]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [8, 20],
  knockback: 20,
  timelife: 96e4,
  score: 1200
}, ii[Le.__FAST_GHOUL__] = {
  actionDelay: 300,
  actionImpactClient: 150,
  baseSpeed: .5,
  aggressive: 2,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 192e4,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -40,
    src: "img/day-ghoul3-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 40,
    src: "img/day-ghoul3-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-ghoul3.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/ghoul3-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-ghoul3-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 18,
  areaEffect: 0,
  radius: 38,
  life: 100,
  speed: [.18, .28],
  speedRun: [.22, .38],
  loot: [
    [we.__GHOUL_BLOOD__, 4, fe.ghoulblood]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [7, 14],
  knockback: 20,
  timelife: 96e4,
  score: 1e3
}, ii[Le.__EXPLOSIVE_GHOUL__] = {
  actionDelay: 500,
  actionImpactClient: 350,
  baseSpeed: .5,
  aggressive: 4,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 288e4,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -48,
    src: "img/day-ghoul4-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 48,
    src: "img/day-ghoul4-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-ghoul4.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/ghoul4-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-ghoul4-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 14,
  areaEffect: 0,
  radius: 38,
  life: 100,
  speed: [.12, .23],
  speedRun: [.14, .26],
  loot: [
    [we.__SULFUR__, 4, fe.sulfur],
    [we.__ANIMAL_FAT__, 4, fe.__ANIMAL_FAT__],
    [we.__JUNK__, 4, fe.junk]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 1,
  damageExplosion: 120,
  damageBuilding: 500,
  radiusDamage: 40,
  distDamage: 50,
  damage: [6, 20],
  knockback: 20,
  timelife: 96e4,
  score: 500
}, ii[Le.__RADIOACTIVE_GHOUL__] = {
  actionDelay: 500,
  actionImpactClient: 350,
  baseSpeed: .5,
  aggressive: 8,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 384e4,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -40,
    src: "img/day-ghoul2-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 40,
    src: "img/day-ghoul2-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-ghoul2.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/ghoul2-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-ghoul2-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 10,
  areaEffect: 0,
  radius: 38,
  life: 160,
  speed: [.12, .23],
  speedRun: [.14, .26],
  loot: [
    [we.__URANIUM__, 4, fe.uranium]
  ],
  light: 1,
  areaEffect: 2,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [5, 15],
  knockback: 20,
  timelife: 96e4,
  score: 1500
}, ii[Le.__ARMORED_GHOUL__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 16,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 48e5,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "img/day-ghoul1-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "img/day-ghoul1-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-ghoul1.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/ghoul1-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-ghoul1-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 14,
  areaEffect: 0,
  radius: 38,
  life: 800,
  speed: [.11, .21],
  speedRun: [.14, .24],
  loot: [
    [we.__ALLOYS__, 4, fe.alloys],
    [we.__SHAPED_METAL__, 12, fe.__SHAPED_METAL__]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [20, 50],
  knockback: 20,
  timelife: 192e4,
  score: 5e3
}, ii[Le.__PUMPKIN_GHOUL__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 32,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 96e4,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "img/day-ghoul5-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "img/day-ghoul5-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-ghoul5.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/ghoul5-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-ghoul5-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 160,
  speed: [.04, .04],
  loot: [
    [we.__PUMPKIN__, 4, fe.pumpkin]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [20, 30],
  knockback: 20,
  timelife: 96e4,
  score: 100
}, ii[Le.__LAPABOT_REPAIR__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 0,
  mode: ei.__REPAIR__,
  timeTrigger: 0,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "img/day-lapabot-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "img/day-lapabot-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-lapabot.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/lapabot-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-lapabot-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 600,
  speed: [.08, .08],
  loot: [
    [we.__SHAPED_METAL__, 4, fe.shapedmetal]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [30, 30],
  knockback: 20,
  timelife: 96e4,
  score: 100
}, ii[Le.__HAL_BOT__] = {
  actionDelay: 550,
  actionImpactClient: 400,
  baseSpeed: .5,
  aggressive: 0,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 0,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 8,
    y: -45,
    src: "img/day-hal-bot-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 8,
    y: 45,
    src: "img/day-hal-bot-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-hal-bot.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/hal-bot-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-hal-bot-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 800,
  speed: [.12, .12],
  loot: [
    [we.__SHAPED_METAL__, 4, fe.shapedmetal]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [30, 30],
  knockback: 20,
  timelife: 96e4,
  score: 500
}, ii[Le.__TESLA_BOT__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 0,
  mode: ei.__AGGRESSIVE__,
  timeTrigger: 0,
  draw: re.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 18,
    y: -60,
    src: "img/day-tesla-bot-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 18,
    y: 60,
    src: "img/day-tesla-bot-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "img/day-tesla-bot.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "img/tesla-bot-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "img/day-tesla-bot-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 3e3,
  speed: [.1, .1],
  loot: [
    [we.__SHAPED_URANIUM__, 4, fe.shapeduranium],
    [we.__ALLOYS__, 4, fe.alloys]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 1,
  damageExplosion: 100,
  damageBuilding: 100,
  radiusDamage: 40,
  distDamage: 50,
  damage: [80, 80],
  knockback: 40,
  timelife: 96e4,
  score: 3e3
};
try {
  if (exports !== window.undefined) {
    exports.IID = we, exports.FURNITUREID = Ae, exports.HOUSE = Be, exports
      .HOUSEID = Ve, exports.INVENTORY = ve, exports.LOOT = Me, exports.LOOTID =
      fe, exports.RESID = Ie, exports.RESOURCES = We, exports.AREAS = le,
      exports.SKILLS = Ee, exports.KIT = $e, exports.BRKIT = Ze, exports.AI =
      ii, exports.AIID = Le, exports.BEHAVIOR = pe;
    for (var _i = 0; _i < 3; _i++)
      for (Oe = 1; Oe < ve.length; Oe++) {
        if ((di = (oi = ve[Oe]).detail.recipe) !== window.undefined) {
          for (Ue = 0; Ue < di.length; Ue++) {
            var ai = ve[di[Ue][0]];
            0 === Ue && (oi.score = 0), oi.score += ai.score * di[Ue][1], di[Ue]
              [2] = ai.loot
          }
          oi.score = window.Math.floor(oi.score / 4)
        }
      }
    for (Oe = 0; Oe < Re.length; Oe++) {
      var oi, di;
      if ((di = (oi = Re[Oe]).detail.recipe) !== window.undefined) {
        for (Ue = 0; Ue < di.length; Ue++) {
          ai = ve[di[Ue][0]];
          0 === Ue && (oi.score = 0), oi.score += ai.score * di[Ue][1], di[Ue][
            2] = ai.loot
        }
        oi.score = window.Math.floor(oi.score / 4)
      }
    }
  }
} catch (mi) {
  for (Oe = 0; Oe < Ce.length; Oe++) Ce[Oe].img = A.loadImage(Ce[Oe].src, Ce[Oe]
    .img);

  function ti(e, i, _, a) {
    for (var o in i) {
      var d = i[o],
        t = e[o];
      t !== window.undefined ? "object" == typeof t ? ti(t, d, _, a) :
        "string" == typeof t && (e[o] = t.replace(_, a)) : e[o] = d
    }
  }
  He = window.JSON.parse(window.JSON.stringify(ve)), Ke = window.JSON.parse(
      window.JSON.stringify(he)), ze = window.JSON.parse(window.JSON.stringify(
      Me)), Ge = window.JSON.parse(window.JSON.stringify(k)), Je = window.JSON
    .parse(window.JSON.stringify(We)), Xe = window.JSON.parse(window.JSON
      .stringify(xe)), Qe = window.JSON.parse(window.JSON.stringify(ii)), ti(Je,
      We, "day", "night"), ti(He, ve, "day", "night"), ti(Ke, he, "day",
      "night"), ti(ze, Me, "day", "night"), ti(Ge, k, "day", "night"), ti(Xe,
      xe, "day", "night"), ti(Qe, ii, "day", "night"),
    function e(i) {
      for (var _ in i) {
        var a = i[_];
        if ("object" == typeof a && null !== a)
          if (a.rad !== window.undefined) {
            var o = k[__ENTITIE_PLAYER__].clothes[a.idClothe];
            o.rad = a.rad, o.warm = a.warm, o.def = a.def, (o = Ge[
                __ENTITIE_PLAYER__].clothes[a.idClothe]).rad = a.rad, o.warm = a
              .warm, o.def = a.def
          } else e(a)
      }
    }(ve)
}
var ni = function() {
  var e = [237225, 303931, 166687, 229213, 217292, 205860, 182041, 273065],
    i = [],
    _ = window.Math.floor(window.Math.random() * e.length),
    a = 0,
    o = 0,
    d = 0,
    t = .45,
    n = 0,
    r = 0;
  J.audio.end = new J.Sound("audio/end.mp3", 0, !0), J.audio.title = new J
    .Sound("audio/title.mp3", 0, !0), J.audio.geiger = new J.Sound(
      "audio/geiger.mp3", 0, !0), J.audio.ambient1 = new J.Sound(
      "audio/ambient1.mp3", 0, !0), J.audio.ambient2 = new J.Sound(
      "audio/ambient2.mp3", 0, !0), J.audio.ambient3 = new J.Sound(
      "audio/ambient3.mp3", 0, !0), J.audio.ambient4 = new J.Sound(
      "audio/ambient4.mp3", 0, !0), J.audio.ambient5 = new J.Sound(
      "audio/ambient5.mp3", 0, !0), J.audio.ambient6 = new J.Sound(
      "audio/ambient6.mp3", 0, !0), J.audio.ambient7 = new J.Sound(
      "audio/ambient7.mp3", 0, !0), J.audio.ambient8 = new J.Sound(
      "audio/ambient8.mp3", 0, !0), i.push(J.audio.ambient1), i.push(J.audio
      .ambient2), i.push(J.audio.ambient3), i.push(J.audio.ambient4), i.push(J
      .audio.ambient5), i.push(J.audio.ambient6), i.push(J.audio.ambient7), i
    .push(J.audio.ambient8), J._fx.open = new J.Sound("audio/open.mp3", 1, !1,
      1), J._fx.drag = new J.Sound("audio/drag.mp3", 1, !1, 1), J._fx.play =
    new J.Sound("audio/play.mp3", 1, !1, 1), J._fx.skill = new J.Sound(
      "audio/skill.mp3", 1, !1, 1), J._fx.craft = new J.Sound(
      "audio/craft.mp3", 1, !1, 1), J._fx.button = new J.Sound(
      "audio/button.mp3", 1, !1, 1), J._fx.throwLoot = new J.Sound(
      "audio/throwLoot.mp3", 1, !1, 1), J._fx.levelup = new J.Sound(
      "audio/levelup.mp3", 1, !1, 1), J._fx.explosion = new J.Sound(
      "audio/explosion.mp3", 1, !1, 1), J._fx.zipperOn = new J.Sound(
      "audio/zipper-on.mp3", .7, !1, 1), J._fx.zipperOff = new J.Sound(
      "audio/zipper-off.mp3", .7, !1, 1), J._fx.eat = [new J.Sound(
      "audio/eat-1s-0.mp3", 1, !1, 1), new J.Sound("audio/eat-1s-1.mp3", 1,
      !1, 1), new J.Sound("audio/eat-1s-2.mp3", 1, !1, 1)], J._fx.damage = [];
  for (var g = 1; g < ce.length; g++) J._fx.damage[g] = new J.Sound(ce[g], 1,
    !1, 1);
  J._fx.shot = [];
  var s = k[__ENTITIE_PLAYER__].weapons;
  for (g = 0; g < s.length; g++) {
    var l = s[g];
    if (l.sound === window.undefined) J._fx.shot[g] = 0;
    else if ("number" == typeof l.sound) J._fx.shot[g] = l.sound;
    else {
      J._fx.shot[g] = [];
      for (var m = 0; m < l.sound.length; m++) J._fx.shot[g][m] = new J.Sound(
        l.sound[m], 1, !1, 1)
    }
  }
  1 === J.options.isAudio && (J.loadSound(i[_]), J.loadSound(J.audio.title));
  for (g = 0; g < J._fx.shot.length; g++) {
    1 === (c = J._fx.shot[g]) && (J._fx.shot[g] = J._fx.eat)
  }
  if (1 === J.options.isFx) {
    J.loadSound(J._fx.open), J.loadSound(J._fx.play), J.loadSound(J._fx.drag),
      J.loadSound(J._fx.skill), J.loadSound(J._fx.craft), J.loadSound(J._fx
        .button), J.loadSound(J._fx.levelup), J.loadSound(J._fx.explosion);
    for (g = 0; g < J._fx.eat.length; g++) J.loadSound(J._fx.eat[g]);
    for (g = 1; g < J._fx.damage.length; g++) J.loadSound(J._fx.damage[g]);
    for (g = 0; g < J._fx.shot.length; g++) {
      var c;
      if (0 !== (c = J._fx.shot[g]))
        for (m = 0; m < c.length; m++) J.loadSound(c[m])
    }
  }

  function u() {
    0 === d ? J.fadeSound(J.audio.title, 500, -t) : J.fadeSound(J.audio.end,
      500, -t)
  }
  return {
    startGame: function() {
      o = 1, u(), 0 === a && (_ = (_ + 1) % i.length), a = e[_] - 5e3, J
        .fadeSound(i[_], 5e3, t)
    },
    quitGame: function() {
      o = 0, d = 1, J.fadeSound(J.audio.geiger, 250, -r), r = 0, ni.geiger =
        0, J.fadeSound(i[_], 500, -t), J.fadeSound(J.audio.end, 1e3, ni
          .musicVolume)
    },
    scheduler: function() {
      J.playSound(J.audio.title), J.playSound(J.audio.end);
      for (var d = 0; d < i.length; d++) J.playSound(i[d]);
      if (1 === J.options.isFx) {
        var g = J.options.isAudio;
        J.options.isAudio = 1, J.playSound(J.audio.geiger), J.options
          .isAudio = g
      }
      if (r !== ni.geiger && 1 === o) {
        if (0 === n) {
          n = 1e3;
          var s = ni.geiger - r;
          J.fadeSound(J.audio.geiger, 250, s), r = ni.geiger
        }
        n = window.Math.max(0, n - f)
      }
      0 === a && 1 === o && (J.fadeSound(i[_], 5e3, -t), _ = (_ + 1) % i
          .length, a = e[_] - 5e3, J.fadeSound(i[_], 5e3, t)), a = window
        .Math.max(0, a - f)
    },
    cutTitleMusic: u,
    musicVolume: t,
    geiger: 0
  }
}();
try {
  debugMode
} catch (ci) {
  debugMode = window.undefined
}
debugMode === window.undefined && (window.aiptag = window.aiptag || {}, window
    .aiptag.consented = !0, window.aiptag.cmd = window.aiptag.cmd || [], window
    .aiptag.cmd.display = window.aiptag.cmd.display || [], window.aiptag.cmd
    .player = window.aiptag.cmd.player || []),
  function() {
    try {
      window.self !== window.top && (loaded = localStorage2.getItem("inIframe"),
        "1" === loaded ? localStorage2.setItem("inIframe", "0") : (
          localStorage2.setItem("inIframe", "1"), window.location.href =
          window.location.href + ""))
    } catch (e) {}
  }();
try {
  debugMode
} catch (ui) {
  debugMode = window.undefined
}
D.init(600, 3e4, 5e3), V.init(30, 15e3, 2e3, 3, 6e4, 1e4, (function(e) {
    var i, _, a, o, d, t, n, r, g, s, l, m = new window.Uint8Array(e);
    switch (m[0]) {
      case 0:
        ! function(e, i) {
          var _ = new window.Uint16Array(e),
            a = (i.length - 2) / 18;
          1 === i[1] && D.removeAll();
          for (var o = 0, d = 2, t = 1; o < a; o++, d += 18, t += 9) {
            var n, r = i[d],
              g = i[d + 1],
              s = i[d + 3],
              l = _[t + 2],
              m = _[t + 3],
              c = _[t + 8];
            if (0 !== l) {
              Y(n = D.get(r, m, g, s), r, g, m, s, _[t + 4], _[t + 5], _[t +
                6], _[t + 7], c, i[d + 2], l);
              var u = k[s].update;
              u !== window.undefined && u(n, _[t + 4], _[t + 5])
            } else D.remove(r, m, g, s, c)
          }
        }(e, m);
        break;
      case 1:
        ! function(e) {
          var i = new window.Uint16Array(e);
          Q.gameMode === B.__SURVIVAL__ || Q.gameMode === B.__GHOUL__ ? (V
            .badServerVersion(i[1]), Q.alertDelay <= 0 && (Q.alertId = V
              .state === V.State.__OLD_CLIENT_VERSION__ ? 0 : 1, Q
              .alertDelay = 3e3)) : Q.gameMode === B.__BR__ && (V
            .badServerVersion(-1), window.setTimeout(Q.joinServer, 300))
        }(e);
        break;
      case 2:
        V.full(), Q.alertDelay <= 0 && (Q.alertId = 2, Q.alertDelay = 3e3);
        break;
      case 3:
        ! function(e) {
          var i = D.findEntitie(__ENTITIE_PLAYER__, B.PLAYER.id, 0);
          null !== i && D.remove(i.pid, i.id, i.uid, i.type, 1), B.PLAYER
            .kill = (e[1] << 8) + e[2], V.closeClient()
        }(m);
        break;
      case 4:
        l = m[1], 0 === B.players[l].ghoul && B.playerAlive--;
        break;
      case 5:
        V.failRestore();
        break;
      case 6:
        V.stolenSession();
        break;
      case 7:
        s = m[1], V.muted(s);
        break;
      case 8:
        ! function(e, i) {
          if (1 !== e.byteLength) {
            var _ = new window.Uint16Array(e);
            B.initLeaderboard(_, i)
          }
        }(e, m);
        break;
      case 9:
        ! function(e, i) {
          B.PLAYER.id = i[1];
          var _ = new window.Uint16Array(e),
            a = _[3] << 5;
          B.initDayCycle(a >= B.__DAY__ ? 1 : 0, a), V.handshake(), re
            .reset(), D.unitsPerPlayer = _[1], B.playerNumber = i[4], B
            .gameMode = i[5], B.PLAYER.lastScore = -1, B.PLAYER.exp = 0, B
            .PLAYER.click = 0, B.PLAYER.notification = [], B.PLAYER
            .notificationLevel = [], B.PLAYER.drag.begin = 0, B.PLAYER
            .interaction = -1, B.PLAYER.interactionDelay = 0, B.PLAYER
            .WMnWv = 0, B.PLAYER.blueprint = 0, B.PLAYER.buildRotate = 0, B
            .PLAYER.hintRotate = 0, B.PLAYER.grid = 0;
          for (var o = 0; o < B.PLAYER.gridPrev.length; o++) B.PLAYER
            .gridPrev[o] = 0;
          for (o = 0; o < 8; o++) B.PLAYER.teamPos[o] = {
            old: 0,
            id: 0
          };
          for (B.PLAYER.KARMA = 0, B.PLAYER.badKarmaDelay = 0, B
            .gameMode === B.__BR__ ? B.PLAYER.craftFactor = .2 : B
            .gameMode === B.__GHOUL__ ? B.PLAYER.craftFactor = .4 : B.PLAYER
            .craftFactor = 1, B.PLAYER.lastAreas = [
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1],
              [-1, -1]
            ], B.gameMode !== B.__GHOUL__ && (B.PLAYER.nextAreas = 1e7), B
            .PLAYER.badKarma = 0, B.PLAYER.gridPrev[o] = 0, B.PLAYER
            .isBuilding = 0, B.PLAYER.warm = 0, B.PLAYER.wrongTool = 0, B
            .PLAYER.wrongToolTimer = 0, B.PLAYER.teamLeader = 0, B.PLAYER
            .teamDelay = 0, B.PLAYER.teamQueue = [0, 0, 0, 0, 0], B.PLAYER
            .teamCreateDelay = 0, B.PLAYER.teamEffect = 0, B.PLAYER
            .teamJoin = 0, B.PLAYER.team = -1, B.PLAYER.craftLen = 0, B
            .PLAYER.craftArea = -1, B.PLAYER.craftCategory = -1, B.PLAYER
            .craftSelected = -1, B.PLAYER.crafting = 0, B.PLAYER
            .craftList = [], B.PLAYER.craftAvailable = [], B.PLAYER
            .recipeAvailable = [], B.PLAYER.recipeList = [], B.PLAYER
            .recipeLen = 0, B.PLAYER.craftSpeed = 0, B.PLAYER.craftGauge =
            0, B.PLAYER.toolsList = [], B.PLAYER.toolsLen = 0, B.PLAYER
            .skillUnlocked = [], B.PLAYER.level = 0, B.PLAYER.kill = 0, B
            .PLAYER.xp = 0, B.PLAYER.skillPoint = 0, B.PLAYER.nextLevel = 0,
            B.PLAYER.isInBuilding = 0, B.PLAYER.isInChest = 0, B.PLAYER
            .extraLoot = 0, re.scale = 0, B.PLAYER.toxicMap = [], B.PLAYER
            .toxicStep = 0, o = 0; o < 8; o++) {
            B.PLAYER.toxicMap[o] = [];
            for (var d = 0; d < 8; d++) B.PLAYER.toxicMap[o][d] = 0
          }
          var t = k[__ENTITIE_PLAYER__].inventorySize;
          for (B.PLAYER.inventory = [], o = 0; o < t; o++) B.PLAYER
            .inventory[o] = [0, 0, 0, 0];
          t = (e.byteLength - 8) / 10;
          var n = 8,
            r = 4;
          for (o = 0; o < t; o++, n += 10, r += 5) {
            var g = B.players[i[n]];
            g.id = i[n], B.addToTeam(g, i[n + 1]), g.repellent = 0 === i[n +
                2] ? 0 : re.globalTime + 2e3 * i[n + 2], g.withdrawal =
              0 === i[n + 3] ? 0 : re.globalTime + 1e3 * i[n + 3], g.ghoul =
              i[n + 4], 0 !== g.ghoul && B.playerAlive--, g.tokenId = _[r +
                3], g.score = O.inflateNumber(_[r + 4]) + 1, g
              .scoreSimplified = O.simplifyNumber(g.score - 1)
          }
          B.PLAYER.ghoul = B.players[B.PLAYER.id].ghoul, localStorage2
            .setItem("tokenId", B.players[B.PLAYER.id].tokenId),
            localStorage2.setItem("userId", B.PLAYER.id), B
            .sortLeaderboard(), B.initGauges()
        }(e, m);
        break;
      case 10:
        V.kickedInactivity();
        break;
      case 11:
        ! function(e) {
          var i = B.players[e[1]];
          i.notification.push(e[2] >> 2), i.notificationLevel.push(3 & e[2])
        }(m);
        break;
      case 12:
        ! function(e) {
          var i = B.gauges;
          i.life.value = e[1], i.food.value = e[2], i.cold.value = e[3], i
            .stamina.value = e[4], i.rad.value = e[5]
        }(m);
        break;
      case 13:
        ! function(e) {
          var i = new window.Uint16Array(e);
          B.PLAYER.exp = (i[1] << 16) + i[2]
        }(e);
        break;
      case 14:
        ! function(e, i) {
          var _ = D.findEntitie(__ENTITIE_PLAYER__, e, 0);
          null !== _ && (e === B.PLAYER.id && (re.shake = 3), _.hurt = 300,
            _.hurtAngle = 2 * i * window.Math.PI / 255)
        }(m[1], m[2]);
        break;
      case 15:
        ! function(e) {
          for (var i = 0; i < B.PLAYER.inventory.length; i++)
            for (var _ = 0; _ < 4; _++) B.PLAYER.inventory[i][0] = 0;
          for (_ = 0, i = 1; i < e.length; i += 4) {
            var a = e[i];
            if (0 !== a) {
              j.inventory[_].setImages(ve[a].itemButton.src, ve[a]
                .itemButton.img);
              var o = B.PLAYER.inventory[_];
              o[1] = e[i + 1], o[2] = e[i + 2], o[3] = e[i + 3], o[0] = a,
                _++
            }
          }
        }(m);
        break;
      case 16:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = 0; _ < i.length; _++)
            if (i[_][0] === e[1] && i[_][1] === e[2] && i[_][2] === e[3] &&
              i[_][3] === e[4]) return i[_][0] = 0, i[_][1] = 0, i[_][2] =
              0, i[_][3] = 0, void(1 === j.getSkillBoxState() && -1 === B
                .PLAYER.craftCategory && B.buildCraftList(B.PLAYER
                  .craftArea))
        }(m);
        break;
      case 17:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = 0; _ < i.length; _++)
            if (0 === i[_][0]) return i[_][0] = e[1], i[_][1] = e[2], i[_][
              2] = e[3], i[_][3] = e[4], j.inventory[_].setImages(ve[e[
              1]].itemButton.src, ve[e[1]].itemButton.img), void(1 === j
              .getSkillBoxState() && -1 === B.PLAYER.craftCategory && B
              .buildCraftList(B.PLAYER.craftArea))
        }(m);
        break;
      case 18:
        g = m[1], B.gauges.life.value = g;
        break;
      case 19:
        B.gauges.life.decrease = 1;
        break;
      case 20:
        ! function(e) {
          B.interactionEffect = ve[(e[1] << 8) + e[2]]._effect
        }(m);
        break;
      case 21:
        B.gauges.life.decrease = 0;
        break;
      case 22:
        ! function(e) {
          var i = D.findEntitie(__ENTITIE_PLAYER__, e, 0);
          null !== i && 0 === B.players[e].ghoul && (i.heal = 300)
        }(m[1]);
        break;
      case 23:
        B.gauges.stamina.decrease = -1;
        break;
      case 24:
        B.gauges.stamina.decrease = 0;
        break;
      case 25:
        B.gauges.stamina.decrease = 1;
        break;
      case 26:
        B.gauges.cold.decrease = -1;
        break;
      case 27:
        B.gauges.cold.decrease = 0;
        break;
      case 28:
        B.gauges.cold.decrease = 1;
        break;
      case 29:
        ! function(e) {
          B.gauges.stamina.value = e
        }(m[1]);
        break;
      case 30:
        B.gauges.life.decrease = -1;
        break;
      case 31:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = 0; _ < i.length; _++)
            if (i[_][0] === e[1] && i[_][1] === e[2] && i[_][2] === e[3] &&
              i[_][3] === e[4]) return i[_][1] = e[5], void(1 === j
              .getSkillBoxState() && -1 === B.PLAYER.craftCategory && B
              .buildCraftList(B.PLAYER.craftArea))
        }(m);
        break;
      case 32:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = -1, a = -1, o = 0; o < i
            .length; o++) - 1 === _ && i[o][0] === e[1] && i[o][1] === e[
            2] && i[o][2] === e[3] ? _ = o : i[o][0] === e[1] && i[o][1] ===
            e[4] && i[o][2] === e[5] && (a = o);
          var d = ve[e[1]],
            t = e[2] + e[4];
          d.stack < t ? (i[a][3] = window.Math.min(255, window.Math.max(0,
              window.Math.floor((i[_][3] * i[_][1] + i[a][3] * (d
                .stack - i[_][1])) / d.stack))), i[_][1] = t - d.stack, i[
              a][1] = d.stack) : (i[a][3] = window.Math.min(255, window.Math
                .max(0, window.Math.floor((i[_][3] * i[_][1] + i[a][3] * i[
                  a][1]) / t))), i[_][0] = 0, i[_][1] = 0, i[_][2] = 0, i[_]
              [3] = 0, i[a][1] = t), 1 === j.getSkillBoxState() && -1 === B
            .PLAYER.craftCategory && B.buildCraftList(B.PLAYER.craftArea)
        }(m);
        break;
      case 33:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = window.Math.floor(e[2] / 2),
              a = -1, o = -1, d = 0; d < i.length; d++) - 1 === o && i[d][
            0] === e[1] && i[d][1] === e[2] && i[d][2] === e[3] ? (o = d, i[
              d][1] -= _) : -1 === a && 0 === i[d][0] && (a = d, i[d][0] =
              e[1], i[d][1] = _, i[d][2] = e[4], j.inventory[d].setImages(
                ve[e[1]].itemButton.src, ve[e[1]].itemButton.img));
          i[a][3] = i[o][3], 1 === j.getSkillBoxState() && -1 === B.PLAYER
            .craftCategory && B.buildCraftList(B.PLAYER.craftArea)
        }(m);
        break;
      case 34:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = 0; _ < i.length; _++)
            if (i[_][0] === e[1] && i[_][1] === e[2] && i[_][2] === e[3] &&
              i[_][3] === e[4]) return void(i[_][3] = e[5])
        }(m);
        break;
      case 35:
        r = m[1], B.PLAYER.interaction = 1, B.PLAYER.interactionDelay =
          100 * r, B.PLAYER.interactionWait = B.PLAYER.interactionDelay;
        break;
      case 36:
        B.PLAYER.interaction = -1, B.PLAYER.interactionDelay = 0;
        break;
      case 37:
        ! function(e) {
          for (var i = B.PLAYER.inventory, _ = 0; _ < i.length; _++)
            if (i[_][0] === e[1] && i[_][1] === e[2] && i[_][2] === e[3] &&
              i[_][3] === e[4]) return i[_][1] = e[5], i[_][3] = e[6], void(
              1 === j.getSkillBoxState() && -1 === B.PLAYER
              .craftCategory && B.buildCraftList(B.PLAYER.craftArea))
        }(m);
        break;
      case 38:
        n = m[1], B.PLAYER.blueprint = n;
        break;
      case 39:
        B.setDayCycle(0, 0), B.gauges.cold.decrease = -1;
        break;
      case 40:
        B.setDayCycle(1, 0), 0 === B.PLAYER.warm && (B.gauges.cold
          .decrease = 1);
        break;
      case 41:
        t = (m[1] << 8) + m[2], B.PLAYER.xp += t;
        break;
      case 42:
        ! function(e) {
          var i = e[1];
          B.PLAYER.level = i, B.PLAYER.nextLevel = B.getXpFromLevel(i), B
            .PLAYER.xp = (e[2] << 24) + (e[3] << 16) + (e[4] << 8) + e[5], B
            .PLAYER.skillPoint = i;
          for (var _ = 6; _ < e.length; _++) I(e[_])
        }(m);
        break;
      case 43:
        I(m[1]);
        break;
      case 44:
        ! function(e) {
          1 === j.getSkillBoxState() && 0 === B.PLAYER.craftArea && B
            .buildCraftList(le.__PLAYER__);
          var i = ve[e].detail.timer[0] * B.PLAYER.craftFactor;
          B.PLAYER.crafting = window.Date.now() + i, B.PLAYER.craftingMax =
            i
        }(m[1]);
        break;
      case 45:
        (1 === j.getSkillBoxState() && -1 !== B.PLAYER.vwMWn && -1 === B
          .PLAYER.craftCategory && B.PLAYER.craftArea !== le.__PLAYER__ ||
          1 === B.PLAYER.isInChest) && j.BUTTON_CLOSE_BOX();
        break;
      case 46:
        ! function(e) {
          var i = e[1];
          B.buildCraftList(i), 0 === e[8] && (J.playFx(J._fx.open, 1, 0), j
            .openBox(1), B.PLAYER.isInBuilding = 1);
          var _ = B.PLAYER.building,
            a = _.queue;
          B.PLAYER.building.len = 4;
          for (var o = 0; o < 4; o++) {
            var d = e[o + 4];
            if (a[o] = d, 0 === d) {
              B.PLAYER.building.len = o;
              break
            }
            j.queue[o].setImages(ve[d].itemButton.src, ve[d].itemButton.img)
          }
          if (_.pos = e[3], i === le.__SMELTER__ || i === le.__FIRE__ ||
            i === le.__COMPOST__ || i === le.__BBQ__ || i === le
            .__TESLA__ || i === le.__AGITATOR__ || i === le.__EXTRACTOR__ ?
            _.fuel = e[9] : _.fuel = -1, 0 !== a[0] && 4 !== _.pos && 0 !==
            a[_.pos]) {
            var t = (d = ve[a[_.pos]]).detail.area;
            for (o = 0; o < t.length; o++)
              if (t[o] === i) {
                _.timeMax = d.detail.timer[o] * B.PLAYER.craftFactor;
                break
              } _.time = window.Date.now() + _.timeMax * (e[2] / 255)
          } else B.PLAYER.building.len === _.pos && (_.time = 0)
        }(m);
        break;
      case 47:
        ! function(e) {
          B.PLAYER.building.fuel = e[1]
        }(m);
        break;
      case 48:
        B.gauges.rad.decrease = 1;
        break;
      case 49:
        B.gauges.rad.decrease = -1;
        break;
      case 50:
        B.PLAYER.warm = 1, B.gauges.cold.decrease = -1;
        break;
      case 51:
        B.PLAYER.warm = 0, (1 === B.day || B.transition > 0) && (B.gauges
          .cold.decrease = 1);
        break;
      case 52:
        d = m[1], B.PLAYER.wrongToolTimer <= 0 && (B.PLAYER.wrongToolTimer =
          2e3, B.PLAYER.wrongTool = d);
        break;
      case 53:
        ! function(e) {
          var i = B.PLAYER.chest;
          1 === e[1] && (j.openBox(2), B.PLAYER.isInChest = 1, J.playFx(J
            ._fx.open, 1, 0));
          for (var _ = 0; _ < 4; _++) {
            for (var a = 0; a < 3; a++) {
              var o = e[2 + 3 * _ + a];
              if (0 === a) {
                if (0 === o) {
                  i[_][0] = 0, i[_][1] = 0, i[_][2] = 0, i[_][3] = 0;
                  break
                }
                j.chest[_].setImages(ve[o].itemButton.src, ve[o].itemButton
                  .img)
              }
              i[_][a] = o
            }
            i[_][3] = i[_][2]
          }
        }(m);
        break;
      case 54:
        a = m[1], o = m[2], B.players[a].team = o, B.players[a].teamUid = B
          .teams[o].uid, a === B.PLAYER.id && (B.PLAYER.team = o);
        break;
      case 55:
        ! function(e) {
          B.players[e].team = -1, e === B.PLAYER.id && (B.PLAYER.team = -1)
        }(m[1]);
        break;
      case 56:
        ! function(e) {
          B.deleteTeam(e), e === B.PLAYER.team && (B.PLAYER.team = -1, B
            .PLAYER.teamLeader = 0)
        }(m[1]);
        break;
      case 57:
        ! function(e) {
          for (var i = B.PLAYER.teamQueue, _ = 0; _ < 5; _++)
            if (0 === i[_]) return void(0 === B.PLAYER.teamJoin ? (B.PLAYER
              .teamJoin = e, B.PLAYER.teamDelay = 0) : i[_] = e)
        }(m[1]);
        break;
      case 58:
        ! function(e) {
          for (var i = B.PLAYER.teamPos, _ = (e.length - 1) / 3, a = 0, o =
              0; o < _; o++) {
            var d = e[3 + 3 * o];
            if (B.PLAYER.id !== d) {
              var t = e[1 + 3 * o],
                n = e[2 + 3 * o],
                r = B.players[d];
              i[a].id = d, i[a].old = 14e3, r.x = t * re.__TRANSFORM__, r
                .y = n * re.__TRANSFORM__, S.fastDist(r.rx, r.ry, r.x, r
                .y) > 3e6 && (r.rx = r.x, r.ry = r.y), a++
            }
          }
          B.PLAYER.teamLength = a
        }(m);
        break;
      case 59:
        ! function(e) {
          B.PLAYER.KARMA = e
        }(m[1]);
        break;
      case 60:
        ! function(e) {
          if (e[1] !== B.PLAYER.id) {
            var i = B.players[e[1]];
            i.x = e[2] * re.__TRANSFORM__, i.y = e[3] * re.__TRANSFORM__, i
              .KARMA = e[4], B.PLAYER.badKarma = i.id, B.PLAYER
              .badKarmaDelay = 14e3
          }
        }(m);
        break;
      case 61:
        ! function(e) {
          B.PLAYER.toxicStep++, B.PLAYER.nextAreas = 1e3 * e[1];
          for (var i = 2; i < 14; i++)
            if (100 === e[i]) B.PLAYER.lastAreas[i - 2][0] = -1, B.PLAYER
              .lastAreas[i - 2][1] = -1;
            else {
              var _ = window.Math.floor(e[i] / 8),
                a = e[i] % 8;
              B.PLAYER.toxicMap[_][a] = B.PLAYER.toxicStep, B.PLAYER
                .lastAreas[i - 2][0] = _, B.PLAYER.lastAreas[i - 2][1] = a
            } re.battleRoyale()
        }(m);
        break;
      case 62:
        V.badServerVersion(0), Q.alertDelay <= 0 && (Q.alertId = 3, Q
          .alertDelay = 3e3);
        break;
      case 63:
        ! function(e) {
          var i = new window.Uint16Array(e);
          B.gauges.life._max = i[1], B.gauges.life.speedInc = i[2] / 1e4, B
            .gauges.life.speedDec = i[3] / 1e4, B.gauges.food._max = i[4], B
            .gauges.food.speedInc = i[5] / 1e4, B.gauges.food.speedDec = i[
              6] / 1e4, B.gauges.cold._max = i[7], B.gauges.cold.speedInc =
            i[8] / 1e4, B.gauges.cold.speedDec = i[9] / 1e4, B.gauges
            .stamina._max = i[10], B.gauges.stamina.speedInc = i[11] / 1e4,
            B.gauges.stamina.speedDec = i[12] / 1e4, B.gauges.rad._max = i[
              13], B.gauges.rad.speedInc = i[14] / 1e4, B.gauges.rad
            .speedDec = i[15] / 1e4, B.gauges.life.current = window.Math
            .min(B.gauges.life._max, B.gauges.life.current), B.gauges.life
            .value = window.Math.min(B.gauges.life._max, B.gauges.life
              .value), B.gauges.food.current = window.Math.min(B.gauges.food
              ._max, B.gauges.food.current), B.gauges.food.value = window
            .Math.min(B.gauges.food._max, B.gauges.food.value), B.gauges
            .cold.current = window.Math.min(B.gauges.cold._max, B.gauges
              .cold.current), B.gauges.cold.value = window.Math.min(B.gauges
              .cold._max, B.gauges.cold.value), B.gauges.stamina.current =
            window.Math.min(B.gauges.stamina._max, B.gauges.stamina
            .current), B.gauges.stamina.value = window.Math.min(B.gauges
              .stamina._max, B.gauges.stamina.value), B.gauges.rad.current =
            window.Math.min(B.gauges.rad._max, B.gauges.rad.current), B
            .gauges.rad.value = window.Math.min(B.gauges.rad._max, B.gauges
              .rad.value)
        }(e);
        break;
      case 64:
        _ = m[1], re.explosionShake = -_;
        break;
      case 65:
        ! function(e) {
          var i = D.findEntitie(__ENTITIE_PLAYER__, e, 0);
          null !== i && (i.hurt2 = 300)
        }(m[1]);
        break;
      case 66:
        ! function(e) {
          B.PLAYER.cities = [];
          for (var i = 1; i < e.length; i++) B.PLAYER.cities.push(100 * e[
            i])
        }(m);
        break;
      case 67:
        ! function(e) {
          re.setPoisonEffect(1e3 * e)
        }(m[1]);
        break;
      case 68:
        ! function(e, i) {
          B.players[e].repellent = re.globalTime + 2e3 * i
        }(m[1], m[2]);
        break;
      case 69:
        ! function(e, i) {
          B.players[e].withdrawal = re.globalTime + 1e3 * i
        }(m[1], m[2]);
        break;
      case 70:
        ! function(e, i) {
          var _ = B.players[e];
          _.withdrawal = 0 !== i ? re.globalTime : 0, _.repellent = re
            .globalTime
        }(m[1], m[2]);
        break;
      case 71:
        i = m[1], B.PLAYER.nextAreas = 1e4 * i
    }
  }), (function(e) {
    switch (e[0]) {
      case 0:
        ! function(e) {
          B.players[e[1]].text.push(e[2])
        }(e);
        break;
      case 1:
        ! function(e) {
          var i = B.players[e[1]];
          i.tokenId = e[2], i.score = 0, i.old = __ENTITIE_PLAYER__, i
            .nickname = e[3], i.skin = e[4], i.ghoul = e[5], i.team = -1, i
            .breath = 0, i.move = 0, i.orientation = 1, i.punch = 1, i
            .withdrawal = 0, i.repellent = 0, i.notification = [], i
            .notificationLevel = [], i.notificationDelay = 0, i.textEase =
            0, i.text = [], i.textEffect = [], i.textMove = [], i
          .label = [], i.locatePlayer = -1, i.frameId = -1, i
            .nicknameLabel = null, i.playerIdLabel = null, i.storeLabel =
            null, i.leaderboardLabel = null, 0 === i.ghoul && B
            .playerAlive++
        }(e);
        break;
      case 2:
        ! function(e) {
          var i = e.length - 1;
          B.playerNumber = i, localStorage2.setItem("token", e[i]), e[0] =
            "", B.allocatePlayers(e)
        }(e);
        break;
      case 3:
        e[1];
        break;
      case 4:
        ! function(e) {
          var i = B.teams[e[1]];
          i.leader = e[2], i.name = e[3];
          var _ = B.players[i.leader];
          _.teamUid = i.uid, _.teamLeader = 1, _.team = i.id, i.leader === B
            .PLAYER.id && (B.PLAYER.teamLeader = 1, B.PLAYER.team = i.id), j
            .teamName === i.name && (j.teamNameValid = 0)
        }(e);
        break;
      case 5:
        ! function(e) {
          B.allocateTeam(e)
        }(e)
    }
  }), P), window.onbeforeunload = function() {
    if (V.state & V.State.__CONNECTED__) return "Are you sure you want quit?"
  },
  function e() {
    htmlLoaded = null !== window.document.getElementById("nickname") && null !==
      window.document.getElementById("terms") && null !== window.document
      .getElementById("serverList") && null !== window.document.getElementById(
        "changelog") && null !== window.document.getElementById("howtoplay") &&
      null !== window.document.getElementById("featuredVideo") && null !==
      window.document.getElementById("trevda") && null !== window.document
      .getElementById("preroll") && null !== window.document.getElementById(
        "chat"), !0 === htmlLoaded ? (X.init(), Q.init(), j.init(), q.init(), Z
        .init(), $.init(), A.initAnimatedCanvas(X, 1, "can", "bod", 1280, window
          .undefined, !0), X.run()) : window.setTimeout(e, 100)
  }();
