const _0xcfd327 = (function () {
    let z = true
    return function (k, F) {
      const b = z
        ? function () {
            if (F) {
              const S = F.apply(k, arguments)
              return (F = null), S
            }
          }
        : function () {}
      return (z = false), b
    }
  })(),
  _0x3f7d03 = _0xcfd327(this, function () {
    return _0x3f7d03
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3f7d03)
      .search('(((.+)+)+)+$')
  })
_0x3f7d03()
const _0x211af2 = (function () {
  const F = (function () {
      const J = {
        AagDM: function (h, f) {
          return h === f
        },
        PMemY: 'vUemR',
      }
      let p = true
      return function (h, f) {
        const A = p
          ? function () {
              if (J.AagDM(J.PMemY, 'JUVAs')) {
                if (k) {
                  const U = w.apply(O, arguments)
                  return (J = null), U
                }
              } else {
                if (f) {
                  const U = f.apply(h, arguments)
                  return (f = null), U
                }
              }
            }
          : function () {}
        return (p = false), A
      }
    })(),
    b = F(this, function () {
      return b
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(b)
        .search('(((.+)+)+)+$')
    })
  b()
  const S = (function () {
      let p = true
      return function (h, f) {
        const E = p
          ? function () {
              if (f) {
                const U = f.apply(h, arguments)
                return (f = null), U
              }
            }
          : function () {}
        return (p = false), E
      }
    })(),
    w = S(this, function () {
      let J
      try {
        const f = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        J = f()
      } catch (A) {
        J = window
      }
      const p = (J.console = J.console || {}),
        h = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
      for (let E = 0; E < h.length; E++) {
        const U = S.constructor.prototype.bind(S),
          i = h[E],
          I = p[i] || U
        U['__proto__'] = S.bind(S)
        U.toString = I.toString.bind(I)
        p[i] = U
      }
    })
  w()
  let O = true
  return function (J, p) {
    const f = O
      ? function () {
          if (p) {
            const U = p.apply(J, arguments)
            return (p = null), U
          }
        }
      : function () {}
    return (O = false), f
  }
})()
;(function () {
  _0x211af2(this, function () {
    const z = new RegExp('function *\\( *\\)'),
      k = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      F = _0x228449('init')
    if (!z.test(F + 'chain') || !k.test(F + 'input')) {
      F('0')
    } else {
      _0x228449()
    }
  })()
})()
const _0xaa98a = (function () {
    let z = true
    return function (k, F) {
      const S = z
        ? function () {
            if (F) {
              const J = F.apply(k, arguments)
              return (F = null), J
            }
          }
        : function () {}
      return (z = false), S
    }
  })(),
  _0x5cafff = _0xaa98a(this, function () {
    const B = function () {
        let F
        try {
          F = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (S) {
          F = window
        }
        return F
      },
      R = B(),
      z = (R.console = R.console || {}),
      k = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let F = 0; F < k.length; F++) {
      const b = _0xaa98a.constructor.prototype.bind(_0xaa98a),
        S = k[F],
        w = z[S] || b
      b['__proto__'] = _0xaa98a.bind(_0xaa98a)
      b.toString = w.toString.bind(w)
      z[S] = b
    }
  })
_0x5cafff()
let counter = 0,
  Title = 'smuki',
  direction = true
aniTitle = setInterval(function () {
  if (counter == Title.length) {
    direction = false
  }
  counter == false && (direction = true)
  counter = direction == true ? ++counter : --counter
  newtitle = counter == 0 ? '' : Title.slice(0, counter)
  document.title = '' + newtitle
}, 400)
window.oncontextmenu = function () {
  return false
}
;(function () {
  const B = function () {
      let z
      try {
        z = Function('return (function() {}.constructor("return this")( ));')()
      } catch (k) {
        z = window
      }
      return z
    },
    R = B()
  R.setInterval(_0x228449, 4000)
})()
$(document).keydown(function (B) {
  if (B.keyCode == 123) {
    return false
  } else {
    if (
      (B.ctrlKey && B.shiftKey && B.keyCode == 73) ||
      (B.ctrlKey && B.shiftKey && B.keyCode == 74)
    ) {
      return false
    }
  }
})
function ap() {
  var z = document.getElementById('audio')
  z.volume = 0.3
  z.play()
}
function vp() {
  var z = document.getElementById('video')
  z.play()
}
function _0x228449(Y) {
  function R(z) {
    if (typeof z === 'string') {
      return function (S) {}.constructor('while (true) {}').apply('counter')
    } else {
      if (('' + z / z).length !== 1 || z % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    R(++z)
  }
  try {
    if (Y) {
      return R
    } else {
      R(0)
    }
  } catch (k) {}
}
