(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const u of i.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Kf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Xl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ga = { exports: {} },
  Xo = {},
  wa = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ir = Symbol.for("react.element"),
  Zf = Symbol.for("react.portal"),
  Jf = Symbol.for("react.fragment"),
  qf = Symbol.for("react.strict_mode"),
  bf = Symbol.for("react.profiler"),
  ed = Symbol.for("react.provider"),
  td = Symbol.for("react.context"),
  nd = Symbol.for("react.forward_ref"),
  rd = Symbol.for("react.suspense"),
  od = Symbol.for("react.memo"),
  id = Symbol.for("react.lazy"),
  Ju = Symbol.iterator;
function ld(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ju && e[Ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xa = Object.assign,
  ka = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ka),
    (this.updater = n || Sa);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _a() {}
_a.prototype = Qn.prototype;
function Kl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ka),
    (this.updater = n || Sa);
}
var Zl = (Kl.prototype = new _a());
Zl.constructor = Kl;
xa(Zl, Qn.prototype);
Zl.isPureReactComponent = !0;
var qu = Array.isArray,
  Ea = Object.prototype.hasOwnProperty,
  Jl = { current: null },
  Ca = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pa(e, t, n) {
  var r,
    o = {},
    i = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ea.call(t, r) && !Ca.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), s = 0; s < l; s++) a[s] = arguments[s + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ir,
    type: e,
    key: i,
    ref: u,
    props: o,
    _owner: Jl.current,
  };
}
function ud(e, t) {
  return {
    $$typeof: Ir,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ql(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bu = /\/+/g;
function xi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sd("" + e.key)
    : t.toString(36);
}
function so(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (i) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ir:
          case Zf:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (o = o(u)),
      (e = r === "" ? "." + xi(u, 0) : r),
      qu(o)
        ? ((n = ""),
          e != null && (n = e.replace(bu, "$&/") + "/"),
          so(o, t, n, "", function (s) {
            return s;
          }))
        : o != null &&
          (ql(o) &&
            (o = ud(
              o,
              n +
                (!o.key || (u && u.key === o.key)
                  ? ""
                  : ("" + o.key).replace(bu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), qu(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + xi(i, l);
      u += so(i, t, n, a, o);
    }
  else if (((a = ld(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + xi(i, l++)), (u += so(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function Hr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    so(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function ad(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  ao = { transition: null },
  cd = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: ao,
    ReactCurrentOwner: Jl,
  };
q.Children = {
  map: Hr,
  forEach: function (e, t, n) {
    Hr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ql(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Qn;
q.Fragment = Jf;
q.Profiler = bf;
q.PureComponent = Kl;
q.StrictMode = qf;
q.Suspense = rd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cd;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xa({}, e.props),
    o = e.key,
    i = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (u = Jl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ea.call(t, a) &&
        !Ca.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Ir, type: e.type, key: o, ref: i, props: r, _owner: u };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: td,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ed, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Pa;
q.createFactory = function (e) {
  var t = Pa.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: nd, render: e };
};
q.isValidElement = ql;
q.lazy = function (e) {
  return { $$typeof: id, _payload: { _status: -1, _result: e }, _init: ad };
};
q.memo = function (e, t) {
  return { $$typeof: od, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = ao.transition;
  ao.transition = {};
  try {
    e();
  } finally {
    ao.transition = t;
  }
};
q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
q.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Me.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
q.useId = function () {
  return Me.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Me.current.useRef(e);
};
q.useState = function (e) {
  return Me.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Me.current.useTransition();
};
q.version = "18.2.0";
wa.exports = q;
var We = wa.exports;
const Yn = Xl(We);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd = We,
  dd = Symbol.for("react.element"),
  pd = Symbol.for("react.fragment"),
  hd = Object.prototype.hasOwnProperty,
  md = fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ja(e, t, n) {
  var r,
    o = {},
    i = null,
    u = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) hd.call(t, r) && !vd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: dd,
    type: e,
    key: i,
    ref: u,
    props: o,
    _owner: md.current,
  };
}
Xo.Fragment = pd;
Xo.jsx = ja;
Xo.jsxs = ja;
ga.exports = Xo;
var D = ga.exports,
  Ki = {},
  Ta = { exports: {} },
  Xe = {},
  Na = { exports: {} },
  Oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, z) {
    var T = R.length;
    R.push(z);
    e: for (; 0 < T; ) {
      var U = (T - 1) >>> 1,
        C = R[U];
      if (0 < o(C, z)) (R[U] = z), (R[T] = C), (T = U);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var z = R[0],
      T = R.pop();
    if (T !== z) {
      R[0] = T;
      e: for (var U = 0, C = R.length, I = C >>> 1; U < I; ) {
        var S = 2 * (U + 1) - 1,
          Q = R[S],
          w = S + 1,
          B = R[w];
        if (0 > o(Q, T))
          w < C && 0 > o(B, Q)
            ? ((R[U] = B), (R[w] = T), (U = w))
            : ((R[U] = Q), (R[S] = T), (U = S));
        else if (w < C && 0 > o(B, T)) (R[U] = B), (R[w] = T), (U = w);
        else break e;
      }
    }
    return z;
  }
  function o(R, z) {
    var T = R.sortIndex - z.sortIndex;
    return T !== 0 ? T : R.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      l = u.now();
    e.unstable_now = function () {
      return u.now() - l;
    };
  }
  var a = [],
    s = [],
    c = 1,
    p = null,
    d = 3,
    h = !1,
    y = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var z = n(s); z !== null; ) {
      if (z.callback === null) r(s);
      else if (z.startTime <= R)
        r(s), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(s);
    }
  }
  function x(R) {
    if (((g = !1), v(R), !y))
      if (n(a) !== null) (y = !0), K(k);
      else {
        var z = n(s);
        z !== null && oe(x, z.startTime - R);
      }
  }
  function k(R, z) {
    (y = !1), g && ((g = !1), m(j), (j = -1)), (h = !0);
    var T = d;
    try {
      for (
        v(z), p = n(a);
        p !== null && (!(p.expirationTime > z) || (R && !M()));

      ) {
        var U = p.callback;
        if (typeof U == "function") {
          (p.callback = null), (d = p.priorityLevel);
          var C = U(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof C == "function" ? (p.callback = C) : p === n(a) && r(a),
            v(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var I = !0;
      else {
        var S = n(s);
        S !== null && oe(x, S.startTime - z), (I = !1);
      }
      return I;
    } finally {
      (p = null), (d = T), (h = !1);
    }
  }
  var E = !1,
    P = null,
    j = -1,
    $ = 5,
    L = -1;
  function M() {
    return !(e.unstable_now() - L < $);
  }
  function A() {
    if (P !== null) {
      var R = e.unstable_now();
      L = R;
      var z = !0;
      try {
        z = P(!0, R);
      } finally {
        z ? H() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var H;
  if (typeof f == "function")
    H = function () {
      f(A);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      G = W.port2;
    (W.port1.onmessage = A),
      (H = function () {
        G.postMessage(null);
      });
  } else
    H = function () {
      _(A, 0);
    };
  function K(R) {
    (P = R), E || ((E = !0), H());
  }
  function oe(R, z) {
    j = _(function () {
      R(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), K(k));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = d;
      }
      var T = d;
      d = z;
      try {
        return R();
      } finally {
        d = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, z) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var T = d;
      d = R;
      try {
        return z();
      } finally {
        d = T;
      }
    }),
    (e.unstable_scheduleCallback = function (R, z, T) {
      var U = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? U + T : U))
          : (T = U),
        R)
      ) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return (
        (C = T + C),
        (R = {
          id: c++,
          callback: z,
          priorityLevel: R,
          startTime: T,
          expirationTime: C,
          sortIndex: -1,
        }),
        T > U
          ? ((R.sortIndex = T),
            t(s, R),
            n(a) === null &&
              R === n(s) &&
              (g ? (m(j), (j = -1)) : (g = !0), oe(x, T - U)))
          : ((R.sortIndex = C), t(a, R), y || h || ((y = !0), K(k))),
        R
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (R) {
      var z = d;
      return function () {
        var T = d;
        d = z;
        try {
          return R.apply(this, arguments);
        } finally {
          d = T;
        }
      };
    });
})(Oa);
Na.exports = Oa;
var yd = Na.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Aa = We,
  Ge = yd;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var za = new Set(),
  yr = {};
function pn(e, t) {
  Mn(e, t), Mn(e + "Capture", t);
}
function Mn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) za.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zi = Object.prototype.hasOwnProperty,
  gd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  es = {},
  ts = {};
function wd(e) {
  return Zi.call(ts, e)
    ? !0
    : Zi.call(es, e)
    ? !1
    : gd.test(e)
    ? (ts[e] = !0)
    : ((es[e] = !0), !1);
}
function Sd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xd(e, t, n, r) {
  if (t === null || typeof t > "u" || Sd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, o, i, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Te[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bl = /[\-:]([a-z])/g;
function eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bl, eu);
    Te[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bl, eu);
    Te[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bl, eu);
  Te[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tu(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xd(t, n, o, r) && (n = null),
    r || o === null
      ? wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vr = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  gn = Symbol.for("react.fragment"),
  nu = Symbol.for("react.strict_mode"),
  Ji = Symbol.for("react.profiler"),
  La = Symbol.for("react.provider"),
  Ra = Symbol.for("react.context"),
  ru = Symbol.for("react.forward_ref"),
  qi = Symbol.for("react.suspense"),
  bi = Symbol.for("react.suspense_list"),
  ou = Symbol.for("react.memo"),
  zt = Symbol.for("react.lazy"),
  Ia = Symbol.for("react.offscreen"),
  ns = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ns && e[ns]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  ki;
function rr(e) {
  if (ki === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ki = (t && t[1]) || "";
    }
  return (
    `
` +
    ki +
    e
  );
}
var _i = !1;
function Ei(e, t) {
  if (!e || _i) return "";
  _i = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          u = o.length - 1,
          l = i.length - 1;
        1 <= u && 0 <= l && o[u] !== i[l];

      )
        l--;
      for (; 1 <= u && 0 <= l; u--, l--)
        if (o[u] !== i[l]) {
          if (u !== 1 || l !== 1)
            do
              if ((u--, l--, 0 > l || o[u] !== i[l])) {
                var a =
                  `
` + o[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= u && 0 <= l);
          break;
        }
    }
  } finally {
    (_i = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function kd(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ei(e.type, !1)), e;
    case 11:
      return (e = Ei(e.type.render, !1)), e;
    case 1:
      return (e = Ei(e.type, !0)), e;
    default:
      return "";
  }
}
function el(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case yn:
      return "Portal";
    case Ji:
      return "Profiler";
    case nu:
      return "StrictMode";
    case qi:
      return "Suspense";
    case bi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ra:
        return (e.displayName || "Context") + ".Consumer";
      case La:
        return (e._context.displayName || "Context") + ".Provider";
      case ru:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ou:
        return (
          (t = e.displayName || null), t !== null ? t : el(e.type) || "Memo"
        );
      case zt:
        (t = e._payload), (e = e._init);
        try {
          return el(e(t));
        } catch {}
    }
  return null;
}
function _d(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return el(t);
    case 8:
      return t === nu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ma(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ed(e) {
  var t = Ma(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (u) {
          (r = "" + u), i.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Wr(e) {
  e._valueTracker || (e._valueTracker = Ed(e));
}
function $a(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ma(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ko(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tl(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function rs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Da(e, t) {
  (t = t.checked), t != null && tu(e, "checked", t, !1);
}
function nl(e, t) {
  Da(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rl(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function os(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rl(e, t, n) {
  (t !== "number" || ko(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var or = Array.isArray;
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function is(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (or(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function Fa(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ls(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ua(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function il(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ua(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qr,
  Ba = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qr = Qr || document.createElement("div"),
          Qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cd = ["Webkit", "ms", "Moz", "O"];
Object.keys(ur).forEach(function (e) {
  Cd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ur[t] = ur[e]);
  });
});
function Ha(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ur.hasOwnProperty(e) && ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function Va(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ha(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Pd = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ll(e, t) {
  if (t) {
    if (Pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function ul(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sl = null;
function iu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var al = null,
  An = null,
  zn = null;
function us(e) {
  if ((e = Dr(e))) {
    if (typeof al != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = bo(t)), al(e.stateNode, e.type, t));
  }
}
function Wa(e) {
  An ? (zn ? zn.push(e) : (zn = [e])) : (An = e);
}
function Qa() {
  if (An) {
    var e = An,
      t = zn;
    if (((zn = An = null), us(e), t)) for (e = 0; e < t.length; e++) us(t[e]);
  }
}
function Ya(e, t) {
  return e(t);
}
function Ga() {}
var Ci = !1;
function Xa(e, t, n) {
  if (Ci) return e(t, n);
  Ci = !0;
  try {
    return Ya(e, t, n);
  } finally {
    (Ci = !1), (An !== null || zn !== null) && (Ga(), Qa());
  }
}
function wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var cl = !1;
if (Ct)
  try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", {
      get: function () {
        cl = !0;
      },
    }),
      window.addEventListener("test", Zn, Zn),
      window.removeEventListener("test", Zn, Zn);
  } catch {
    cl = !1;
  }
function jd(e, t, n, r, o, i, u, l, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var sr = !1,
  _o = null,
  Eo = !1,
  fl = null,
  Td = {
    onError: function (e) {
      (sr = !0), (_o = e);
    },
  };
function Nd(e, t, n, r, o, i, u, l, a) {
  (sr = !1), (_o = null), jd.apply(Td, arguments);
}
function Od(e, t, n, r, o, i, u, l, a) {
  if ((Nd.apply(this, arguments), sr)) {
    if (sr) {
      var s = _o;
      (sr = !1), (_o = null);
    } else throw Error(O(198));
    Eo || ((Eo = !0), (fl = s));
  }
}
function hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ka(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ss(e) {
  if (hn(e) !== e) throw Error(O(188));
}
function Ad(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ss(o), e;
        if (i === r) return ss(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var u = !1, l = o.child; l; ) {
        if (l === n) {
          (u = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (u = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!u) {
        for (l = i.child; l; ) {
          if (l === n) {
            (u = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (u = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!u) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Za(e) {
  return (e = Ad(e)), e !== null ? Ja(e) : null;
}
function Ja(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ja(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qa = Ge.unstable_scheduleCallback,
  as = Ge.unstable_cancelCallback,
  zd = Ge.unstable_shouldYield,
  Ld = Ge.unstable_requestPaint,
  ve = Ge.unstable_now,
  Rd = Ge.unstable_getCurrentPriorityLevel,
  lu = Ge.unstable_ImmediatePriority,
  ba = Ge.unstable_UserBlockingPriority,
  Co = Ge.unstable_NormalPriority,
  Id = Ge.unstable_LowPriority,
  ec = Ge.unstable_IdlePriority,
  Ko = null,
  mt = null;
function Md(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : Fd,
  $d = Math.log,
  Dd = Math.LN2;
function Fd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($d(e) / Dd) | 0)) | 0;
}
var Yr = 64,
  Gr = 4194304;
function ir(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var l = u & ~o;
    l !== 0 ? (r = ir(l)) : ((i &= u), i !== 0 && (r = ir(i)));
  } else (u = n & ~o), u !== 0 ? (r = ir(u)) : i !== 0 && (r = ir(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - st(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Ud(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - st(i),
      l = 1 << u,
      a = o[u];
    a === -1
      ? (!(l & n) || l & r) && (o[u] = Ud(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function dl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tc() {
  var e = Yr;
  return (Yr <<= 1), !(Yr & 4194240) && (Yr = 64), e;
}
function Pi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n);
}
function Hd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - st(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function uu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function nc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rc,
  su,
  oc,
  ic,
  lc,
  pl = !1,
  Xr = [],
  Dt = null,
  Ft = null,
  Ut = null,
  Sr = new Map(),
  xr = new Map(),
  Rt = [],
  Vd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function cs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xr.delete(t.pointerId);
  }
}
function Jn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Dr(t)), t !== null && su(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Wd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Dt = Jn(Dt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ft = Jn(Ft, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ut = Jn(Ut, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Sr.set(i, Jn(Sr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), xr.set(i, Jn(xr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function uc(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ka(n)), t !== null)) {
          (e.blockedOn = t),
            lc(e.priority, function () {
              oc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function co(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sl = r), n.target.dispatchEvent(r), (sl = null);
    } else return (t = Dr(n)), t !== null && su(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function fs(e, t, n) {
  co(e) && n.delete(t);
}
function Qd() {
  (pl = !1),
    Dt !== null && co(Dt) && (Dt = null),
    Ft !== null && co(Ft) && (Ft = null),
    Ut !== null && co(Ut) && (Ut = null),
    Sr.forEach(fs),
    xr.forEach(fs);
}
function qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pl ||
      ((pl = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Qd)));
}
function kr(e) {
  function t(o) {
    return qn(o, e);
  }
  if (0 < Xr.length) {
    qn(Xr[0], e);
    for (var n = 1; n < Xr.length; n++) {
      var r = Xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && qn(Dt, e),
      Ft !== null && qn(Ft, e),
      Ut !== null && qn(Ut, e),
      Sr.forEach(t),
      xr.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    uc(n), n.blockedOn === null && Rt.shift();
}
var Ln = Nt.ReactCurrentBatchConfig,
  jo = !0;
function Yd(e, t, n, r) {
  var o = ne,
    i = Ln.transition;
  Ln.transition = null;
  try {
    (ne = 1), au(e, t, n, r);
  } finally {
    (ne = o), (Ln.transition = i);
  }
}
function Gd(e, t, n, r) {
  var o = ne,
    i = Ln.transition;
  Ln.transition = null;
  try {
    (ne = 4), au(e, t, n, r);
  } finally {
    (ne = o), (Ln.transition = i);
  }
}
function au(e, t, n, r) {
  if (jo) {
    var o = hl(e, t, n, r);
    if (o === null) Mi(e, t, r, To, n), cs(e, r);
    else if (Wd(o, e, t, n, r)) r.stopPropagation();
    else if ((cs(e, r), t & 4 && -1 < Vd.indexOf(e))) {
      for (; o !== null; ) {
        var i = Dr(o);
        if (
          (i !== null && rc(i),
          (i = hl(e, t, n, r)),
          i === null && Mi(e, t, r, To, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Mi(e, t, r, null, n);
  }
}
var To = null;
function hl(e, t, n, r) {
  if (((To = null), (e = iu(r)), (e = nn(e)), e !== null))
    if (((t = hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ka(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (To = e), null;
}
function sc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rd()) {
        case lu:
          return 1;
        case ba:
          return 4;
        case Co:
        case Id:
          return 16;
        case ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  cu = null,
  fo = null;
function ac() {
  if (fo) return fo;
  var e,
    t = cu,
    n = t.length,
    r,
    o = "value" in Mt ? Mt.value : Mt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === o[i - r]; r++);
  return (fo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function po(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kr() {
  return !0;
}
function ds() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, u) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Kr
        : ds),
      (this.isPropagationStopped = ds),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr));
      },
      persist: function () {},
      isPersistent: Kr,
    }),
    t
  );
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fu = Ke(Gn),
  $r = pe({}, Gn, { view: 0, detail: 0 }),
  Xd = Ke($r),
  ji,
  Ti,
  bn,
  Zo = pe({}, $r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: du,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== bn &&
            (bn && e.type === "mousemove"
              ? ((ji = e.screenX - bn.screenX), (Ti = e.screenY - bn.screenY))
              : (Ti = ji = 0),
            (bn = e)),
          ji);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ti;
    },
  }),
  ps = Ke(Zo),
  Kd = pe({}, Zo, { dataTransfer: 0 }),
  Zd = Ke(Kd),
  Jd = pe({}, $r, { relatedTarget: 0 }),
  Ni = Ke(Jd),
  qd = pe({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bd = Ke(qd),
  ep = pe({}, Gn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tp = Ke(ep),
  np = pe({}, Gn, { data: 0 }),
  hs = Ke(np),
  rp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  op = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
}
function du() {
  return lp;
}
var up = pe({}, $r, {
    key: function (e) {
      if (e.key) {
        var t = rp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = po(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? op[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: du,
    charCode: function (e) {
      return e.type === "keypress" ? po(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? po(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sp = Ke(up),
  ap = pe({}, Zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ms = Ke(ap),
  cp = pe({}, $r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: du,
  }),
  fp = Ke(cp),
  dp = pe({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pp = Ke(dp),
  hp = pe({}, Zo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mp = Ke(hp),
  vp = [9, 13, 27, 32],
  pu = Ct && "CompositionEvent" in window,
  ar = null;
Ct && "documentMode" in document && (ar = document.documentMode);
var yp = Ct && "TextEvent" in window && !ar,
  cc = Ct && (!pu || (ar && 8 < ar && 11 >= ar)),
  vs = " ",
  ys = !1;
function fc(e, t) {
  switch (e) {
    case "keyup":
      return vp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function gp(e, t) {
  switch (e) {
    case "compositionend":
      return dc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ys = !0), vs);
    case "textInput":
      return (e = t.data), e === vs && ys ? null : e;
    default:
      return null;
  }
}
function wp(e, t) {
  if (wn)
    return e === "compositionend" || (!pu && fc(e, t))
      ? ((e = ac()), (fo = cu = Mt = null), (wn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return cc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sp[e.type] : t === "textarea";
}
function pc(e, t, n, r) {
  Wa(r),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new fu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var cr = null,
  _r = null;
function xp(e) {
  Ec(e, 0);
}
function Jo(e) {
  var t = kn(e);
  if ($a(t)) return e;
}
function kp(e, t) {
  if (e === "change") return t;
}
var hc = !1;
if (Ct) {
  var Oi;
  if (Ct) {
    var Ai = "oninput" in document;
    if (!Ai) {
      var ws = document.createElement("div");
      ws.setAttribute("oninput", "return;"),
        (Ai = typeof ws.oninput == "function");
    }
    Oi = Ai;
  } else Oi = !1;
  hc = Oi && (!document.documentMode || 9 < document.documentMode);
}
function Ss() {
  cr && (cr.detachEvent("onpropertychange", mc), (_r = cr = null));
}
function mc(e) {
  if (e.propertyName === "value" && Jo(_r)) {
    var t = [];
    pc(t, _r, e, iu(e)), Xa(xp, t);
  }
}
function _p(e, t, n) {
  e === "focusin"
    ? (Ss(), (cr = t), (_r = n), cr.attachEvent("onpropertychange", mc))
    : e === "focusout" && Ss();
}
function Ep(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jo(_r);
}
function Cp(e, t) {
  if (e === "click") return Jo(t);
}
function Pp(e, t) {
  if (e === "input" || e === "change") return Jo(t);
}
function jp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : jp;
function Er(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Zi.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ks(e, t) {
  var n = xs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xs(n);
  }
}
function vc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? vc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function yc() {
  for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ko(e.document);
  }
  return t;
}
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tp(e) {
  var t = yc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && hu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ks(n, i));
        var u = ks(n, r);
        o &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Np = Ct && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  ml = null,
  fr = null,
  vl = !1;
function _s(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vl ||
    Sn == null ||
    Sn !== ko(r) ||
    ((r = Sn),
    "selectionStart" in r && hu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (fr && Er(fr, r)) ||
      ((fr = r),
      (r = No(ml, "onSelect")),
      0 < r.length &&
        ((t = new fu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function Zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xn = {
    animationend: Zr("Animation", "AnimationEnd"),
    animationiteration: Zr("Animation", "AnimationIteration"),
    animationstart: Zr("Animation", "AnimationStart"),
    transitionend: Zr("Transition", "TransitionEnd"),
  },
  zi = {},
  gc = {};
Ct &&
  ((gc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
  "TransitionEvent" in window || delete xn.transitionend.transition);
function qo(e) {
  if (zi[e]) return zi[e];
  if (!xn[e]) return e;
  var t = xn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gc) return (zi[e] = t[n]);
  return e;
}
var wc = qo("animationend"),
  Sc = qo("animationiteration"),
  xc = qo("animationstart"),
  kc = qo("transitionend"),
  _c = new Map(),
  Es =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Kt(e, t) {
  _c.set(e, t), pn(t, [e]);
}
for (var Li = 0; Li < Es.length; Li++) {
  var Ri = Es[Li],
    Op = Ri.toLowerCase(),
    Ap = Ri[0].toUpperCase() + Ri.slice(1);
  Kt(Op, "on" + Ap);
}
Kt(wc, "onAnimationEnd");
Kt(Sc, "onAnimationIteration");
Kt(xc, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(kc, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function Cs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Od(r, t, void 0, e), (e.currentTarget = null);
}
function Ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var l = r[u],
            a = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Cs(o, l, s), (i = a);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((l = r[u]),
            (a = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Cs(o, l, s), (i = a);
        }
    }
  }
  if (Eo) throw ((e = fl), (Eo = !1), (fl = null), e);
}
function ue(e, t) {
  var n = t[xl];
  n === void 0 && (n = t[xl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cc(t, e, 2, !1), n.add(r));
}
function Ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Cc(n, e, r, t);
}
var Jr = "_reactListening" + Math.random().toString(36).slice(2);
function Cr(e) {
  if (!e[Jr]) {
    (e[Jr] = !0),
      za.forEach(function (n) {
        n !== "selectionchange" && (zp.has(n) || Ii(n, !1, e), Ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jr] || ((t[Jr] = !0), Ii("selectionchange", !1, t));
  }
}
function Cc(e, t, n, r) {
  switch (sc(t)) {
    case 1:
      var o = Yd;
      break;
    case 4:
      o = Gd;
      break;
    default:
      o = au;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !cl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Mi(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var a = u.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = u.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            u = u.return;
          }
        for (; l !== null; ) {
          if (((u = nn(l)), u === null)) return;
          if (((a = u.tag), a === 5 || a === 6)) {
            r = i = u;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Xa(function () {
    var s = i,
      c = iu(n),
      p = [];
    e: {
      var d = _c.get(e);
      if (d !== void 0) {
        var h = fu,
          y = e;
        switch (e) {
          case "keypress":
            if (po(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = sp;
            break;
          case "focusin":
            (y = "focus"), (h = Ni);
            break;
          case "focusout":
            (y = "blur"), (h = Ni);
            break;
          case "beforeblur":
          case "afterblur":
            h = Ni;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = ps;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Zd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = fp;
            break;
          case wc:
          case Sc:
          case xc:
            h = bd;
            break;
          case kc:
            h = pp;
            break;
          case "scroll":
            h = Xd;
            break;
          case "wheel":
            h = mp;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = tp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ms;
        }
        var g = (t & 4) !== 0,
          _ = !g && e === "scroll",
          m = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              m !== null && ((x = wr(f, m)), x != null && g.push(Pr(f, x, v)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((d = new h(d, y, null, n, c)), p.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== sl &&
            (y = n.relatedTarget || n.fromElement) &&
            (nn(y) || y[Pt]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = s),
              (y = y ? nn(y) : null),
              y !== null &&
                ((_ = hn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = s)),
          h !== y)
        ) {
          if (
            ((g = ps),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = ms),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (_ = h == null ? d : kn(h)),
            (v = y == null ? d : kn(y)),
            (d = new g(x, f + "leave", h, n, c)),
            (d.target = _),
            (d.relatedTarget = v),
            (x = null),
            nn(c) === s &&
              ((g = new g(m, f + "enter", y, n, c)),
              (g.target = v),
              (g.relatedTarget = _),
              (x = g)),
            (_ = x),
            h && y)
          )
            t: {
              for (g = h, m = y, f = 0, v = g; v; v = vn(v)) f++;
              for (v = 0, x = m; x; x = vn(x)) v++;
              for (; 0 < f - v; ) (g = vn(g)), f--;
              for (; 0 < v - f; ) (m = vn(m)), v--;
              for (; f--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = vn(g)), (m = vn(m));
              }
              g = null;
            }
          else g = null;
          h !== null && Ps(p, d, h, g, !1),
            y !== null && _ !== null && Ps(p, _, y, g, !0);
        }
      }
      e: {
        if (
          ((d = s ? kn(s) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var k = kp;
        else if (gs(d))
          if (hc) k = Pp;
          else {
            k = Ep;
            var E = _p;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (k = Cp);
        if (k && (k = k(e, s))) {
          pc(p, k, n, c);
          break e;
        }
        E && E(e, d, s),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            rl(d, "number", d.value);
      }
      switch (((E = s ? kn(s) : window), e)) {
        case "focusin":
          (gs(E) || E.contentEditable === "true") &&
            ((Sn = E), (ml = s), (fr = null));
          break;
        case "focusout":
          fr = ml = Sn = null;
          break;
        case "mousedown":
          vl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vl = !1), _s(p, n, c);
          break;
        case "selectionchange":
          if (Np) break;
        case "keydown":
        case "keyup":
          _s(p, n, c);
      }
      var P;
      if (pu)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        wn
          ? fc(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (cc &&
          n.locale !== "ko" &&
          (wn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && wn && (P = ac())
            : ((Mt = c),
              (cu = "value" in Mt ? Mt.value : Mt.textContent),
              (wn = !0))),
        (E = No(s, j)),
        0 < E.length &&
          ((j = new hs(j, e, null, n, c)),
          p.push({ event: j, listeners: E }),
          P ? (j.data = P) : ((P = dc(n)), P !== null && (j.data = P)))),
        (P = yp ? gp(e, n) : wp(e, n)) &&
          ((s = No(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new hs("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    Ec(p, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = wr(e, n)),
      i != null && r.unshift(Pr(e, i, o)),
      (i = wr(e, t)),
      i != null && r.push(Pr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ps(e, t, n, r, o) {
  for (var i = t._reactName, u = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      s = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      o
        ? ((a = wr(n, i)), a != null && u.unshift(Pr(n, a, l)))
        : o || ((a = wr(n, i)), a != null && u.push(Pr(n, a, l)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Lp = /\r\n?/g,
  Rp = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lp,
      `
`
    )
    .replace(Rp, "");
}
function qr(e, t, n) {
  if (((t = js(t)), js(e) !== t && n)) throw Error(O(425));
}
function Oo() {}
var yl = null,
  gl = null;
function wl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Sl = typeof setTimeout == "function" ? setTimeout : void 0,
  Ip = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ts = typeof Promise == "function" ? Promise : void 0,
  Mp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ts < "u"
      ? function (e) {
          return Ts.resolve(null).then(e).catch($p);
        }
      : Sl;
function $p(e) {
  setTimeout(function () {
    throw e;
  });
}
function $i(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), kr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  kr(t);
}
function Bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ns(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  ht = "__reactFiber$" + Xn,
  jr = "__reactProps$" + Xn,
  Pt = "__reactContainer$" + Xn,
  xl = "__reactEvents$" + Xn,
  Dp = "__reactListeners$" + Xn,
  Fp = "__reactHandles$" + Xn;
function nn(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ns(e); e !== null; ) {
          if ((n = e[ht])) return n;
          e = Ns(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Dr(e) {
  return (
    (e = e[ht] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function bo(e) {
  return e[jr] || null;
}
var kl = [],
  _n = -1;
function Zt(e) {
  return { current: e };
}
function se(e) {
  0 > _n || ((e.current = kl[_n]), (kl[_n] = null), _n--);
}
function ie(e, t) {
  _n++, (kl[_n] = e.current), (e.current = t);
}
var Xt = {},
  ze = Zt(Xt),
  Ue = Zt(!1),
  sn = Xt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function Ao() {
  se(Ue), se(ze);
}
function Os(e, t, n) {
  if (ze.current !== Xt) throw Error(O(168));
  ie(ze, t), ie(Ue, n);
}
function Pc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, _d(e) || "Unknown", o));
  return pe({}, n, r);
}
function zo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (sn = ze.current),
    ie(ze, e),
    ie(Ue, Ue.current),
    !0
  );
}
function As(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Pc(e, t, sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Ue),
      se(ze),
      ie(ze, e))
    : se(Ue),
    ie(Ue, n);
}
var St = null,
  ei = !1,
  Di = !1;
function jc(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Up(e) {
  (ei = !0), jc(e);
}
function Jt() {
  if (!Di && St !== null) {
    Di = !0;
    var e = 0,
      t = ne;
    try {
      var n = St;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (ei = !1);
    } catch (o) {
      throw (St !== null && (St = St.slice(e + 1)), qa(lu, Jt), o);
    } finally {
      (ne = t), (Di = !1);
    }
  }
  return null;
}
var En = [],
  Cn = 0,
  Lo = null,
  Ro = 0,
  qe = [],
  be = 0,
  an = null,
  xt = 1,
  kt = "";
function en(e, t) {
  (En[Cn++] = Ro), (En[Cn++] = Lo), (Lo = e), (Ro = t);
}
function Tc(e, t, n) {
  (qe[be++] = xt), (qe[be++] = kt), (qe[be++] = an), (an = e);
  var r = xt;
  e = kt;
  var o = 32 - st(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - st(t) + o;
  if (30 < i) {
    var u = o - (o % 5);
    (i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (o -= u),
      (xt = (1 << (32 - st(t) + o)) | (n << o) | r),
      (kt = i + e);
  } else (xt = (1 << i) | (n << o) | r), (kt = e);
}
function mu(e) {
  e.return !== null && (en(e, 1), Tc(e, 1, 0));
}
function vu(e) {
  for (; e === Lo; )
    (Lo = En[--Cn]), (En[Cn] = null), (Ro = En[--Cn]), (En[Cn] = null);
  for (; e === an; )
    (an = qe[--be]),
      (qe[be] = null),
      (kt = qe[--be]),
      (qe[be] = null),
      (xt = qe[--be]),
      (qe[be] = null);
}
var Ye = null,
  Qe = null,
  ae = !1,
  ut = null;
function Nc(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Qe = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: xt, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function El(e) {
  if (ae) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!zs(e, t)) {
        if (_l(e)) throw Error(O(418));
        t = Bt(n.nextSibling);
        var r = Ye;
        t && zs(e, t)
          ? Nc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Ye = e));
      }
    } else {
      if (_l(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (Ye = e);
    }
  }
}
function Ls(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function br(e) {
  if (e !== Ye) return !1;
  if (!ae) return Ls(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wl(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (_l(e)) throw (Oc(), Error(O(418)));
    for (; t; ) Nc(e, t), (t = Bt(t.nextSibling));
  }
  if ((Ls(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ye ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Oc() {
  for (var e = Qe; e; ) e = Bt(e.nextSibling);
}
function Dn() {
  (Qe = Ye = null), (ae = !1);
}
function yu(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
var Bp = Nt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Io = Zt(null),
  Mo = null,
  Pn = null,
  gu = null;
function wu() {
  gu = Pn = Mo = null;
}
function Su(e) {
  var t = Io.current;
  se(Io), (e._currentValue = t);
}
function Cl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Rn(e, t) {
  (Mo = e),
    (gu = Pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (gu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (Mo === null) throw Error(O(308));
      (Pn = e), (Mo.dependencies = { lanes: 0, firstContext: e });
    } else Pn = Pn.next = e;
  return t;
}
var rn = null;
function xu(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function Ac(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), xu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function ku(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), xu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function ho(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uu(e, n);
  }
}
function Rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = u) : (i = i.next = u), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function $o(e, t, n, r) {
  var o = e.updateQueue;
  Lt = !1;
  var i = o.firstBaseUpdate,
    u = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      s = a.next;
    (a.next = null), u === null ? (i = s) : (u.next = s), (u = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== u &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (u = 0), (c = s = a = null), (l = i);
    do {
      var d = l.lane,
        h = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            g = l;
          switch (((d = t), (h = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                p = y.call(h, p, d);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(h, p, d) : y),
                d == null)
              )
                break e;
              p = pe({}, p, d);
              break e;
            case 2:
              Lt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = h), (a = p)) : (c = c.next = h),
          (u |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (u |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (fn |= u), (e.lanes = u), (e.memoizedState = p);
  }
}
function Is(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var Lc = new Aa.Component().refs;
function Pl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ti = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = Wt(e),
      i = Et(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (at(t, e, o, r), ho(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = Wt(e),
      i = Et(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (at(t, e, o, r), ho(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = Wt(e),
      o = Et(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ht(e, o, r)),
      t !== null && (at(t, e, r, n), ho(t, e, r));
  },
};
function Ms(e, t, n, r, o, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Er(n, r) || !Er(o, i)
      : !0
  );
}
function Rc(e, t, n) {
  var r = !1,
    o = Xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = nt(i))
      : ((o = Be(t) ? sn : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? $n(e, o) : Xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function $s(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ti.enqueueReplaceState(t, t.state, null);
}
function jl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Lc), ku(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = nt(i))
    : ((i = Be(t) ? sn : ze.current), (o.context = $n(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Pl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ti.enqueueReplaceState(o, o.state, null),
      $o(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function er(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (u) {
            var l = o.refs;
            l === Lc && (l = o.refs = {}),
              u === null ? delete l[i] : (l[i] = u);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function eo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ds(e) {
  var t = e._init;
  return t(e._payload);
}
function Ic(e) {
  function t(m, f) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [f]), (m.flags |= 16)) : v.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function o(m, f) {
    return (m = Qt(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, f, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((m.flags |= 2), f) : v)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function u(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, f, v, x) {
    return f === null || f.tag !== 6
      ? ((f = Qi(v, m.mode, x)), (f.return = m), f)
      : ((f = o(f, v)), (f.return = m), f);
  }
  function a(m, f, v, x) {
    var k = v.type;
    return k === gn
      ? c(m, f, v.props.children, x, v.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === zt &&
            Ds(k) === f.type))
      ? ((x = o(f, v.props)), (x.ref = er(m, f, v)), (x.return = m), x)
      : ((x = So(v.type, v.key, v.props, null, m.mode, x)),
        (x.ref = er(m, f, v)),
        (x.return = m),
        x);
  }
  function s(m, f, v, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Yi(v, m.mode, x)), (f.return = m), f)
      : ((f = o(f, v.children || [])), (f.return = m), f);
  }
  function c(m, f, v, x, k) {
    return f === null || f.tag !== 7
      ? ((f = un(v, m.mode, x, k)), (f.return = m), f)
      : ((f = o(f, v)), (f.return = m), f);
  }
  function p(m, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Qi("" + f, m.mode, v)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Vr:
          return (
            (v = So(f.type, f.key, f.props, null, m.mode, v)),
            (v.ref = er(m, null, f)),
            (v.return = m),
            v
          );
        case yn:
          return (f = Yi(f, m.mode, v)), (f.return = m), f;
        case zt:
          var x = f._init;
          return p(m, x(f._payload), v);
      }
      if (or(f) || Kn(f))
        return (f = un(f, m.mode, v, null)), (f.return = m), f;
      eo(m, f);
    }
    return null;
  }
  function d(m, f, v, x) {
    var k = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : l(m, f, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Vr:
          return v.key === k ? a(m, f, v, x) : null;
        case yn:
          return v.key === k ? s(m, f, v, x) : null;
        case zt:
          return (k = v._init), d(m, f, k(v._payload), x);
      }
      if (or(v) || Kn(v)) return k !== null ? null : c(m, f, v, x, null);
      eo(m, v);
    }
    return null;
  }
  function h(m, f, v, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(v) || null), l(f, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Vr:
          return (m = m.get(x.key === null ? v : x.key) || null), a(f, m, x, k);
        case yn:
          return (m = m.get(x.key === null ? v : x.key) || null), s(f, m, x, k);
        case zt:
          var E = x._init;
          return h(m, f, v, E(x._payload), k);
      }
      if (or(x) || Kn(x)) return (m = m.get(v) || null), c(f, m, x, k, null);
      eo(f, x);
    }
    return null;
  }
  function y(m, f, v, x) {
    for (
      var k = null, E = null, P = f, j = (f = 0), $ = null;
      P !== null && j < v.length;
      j++
    ) {
      P.index > j ? (($ = P), (P = null)) : ($ = P.sibling);
      var L = d(m, P, v[j], x);
      if (L === null) {
        P === null && (P = $);
        break;
      }
      e && P && L.alternate === null && t(m, P),
        (f = i(L, f, j)),
        E === null ? (k = L) : (E.sibling = L),
        (E = L),
        (P = $);
    }
    if (j === v.length) return n(m, P), ae && en(m, j), k;
    if (P === null) {
      for (; j < v.length; j++)
        (P = p(m, v[j], x)),
          P !== null &&
            ((f = i(P, f, j)), E === null ? (k = P) : (E.sibling = P), (E = P));
      return ae && en(m, j), k;
    }
    for (P = r(m, P); j < v.length; j++)
      ($ = h(P, m, j, v[j], x)),
        $ !== null &&
          (e && $.alternate !== null && P.delete($.key === null ? j : $.key),
          (f = i($, f, j)),
          E === null ? (k = $) : (E.sibling = $),
          (E = $));
    return (
      e &&
        P.forEach(function (M) {
          return t(m, M);
        }),
      ae && en(m, j),
      k
    );
  }
  function g(m, f, v, x) {
    var k = Kn(v);
    if (typeof k != "function") throw Error(O(150));
    if (((v = k.call(v)), v == null)) throw Error(O(151));
    for (
      var E = (k = null), P = f, j = (f = 0), $ = null, L = v.next();
      P !== null && !L.done;
      j++, L = v.next()
    ) {
      P.index > j ? (($ = P), (P = null)) : ($ = P.sibling);
      var M = d(m, P, L.value, x);
      if (M === null) {
        P === null && (P = $);
        break;
      }
      e && P && M.alternate === null && t(m, P),
        (f = i(M, f, j)),
        E === null ? (k = M) : (E.sibling = M),
        (E = M),
        (P = $);
    }
    if (L.done) return n(m, P), ae && en(m, j), k;
    if (P === null) {
      for (; !L.done; j++, L = v.next())
        (L = p(m, L.value, x)),
          L !== null &&
            ((f = i(L, f, j)), E === null ? (k = L) : (E.sibling = L), (E = L));
      return ae && en(m, j), k;
    }
    for (P = r(m, P); !L.done; j++, L = v.next())
      (L = h(P, m, j, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? j : L.key),
          (f = i(L, f, j)),
          E === null ? (k = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        P.forEach(function (A) {
          return t(m, A);
        }),
      ae && en(m, j),
      k
    );
  }
  function _(m, f, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === gn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Vr:
          e: {
            for (var k = v.key, E = f; E !== null; ) {
              if (E.key === k) {
                if (((k = v.type), k === gn)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (f = o(E, v.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === zt &&
                    Ds(k) === E.type)
                ) {
                  n(m, E.sibling),
                    (f = o(E, v.props)),
                    (f.ref = er(m, E, v)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            v.type === gn
              ? ((f = un(v.props.children, m.mode, x, v.key)),
                (f.return = m),
                (m = f))
              : ((x = So(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = er(m, f, v)),
                (x.return = m),
                (m = x));
          }
          return u(m);
        case yn:
          e: {
            for (E = v.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(m, f.sibling),
                    (f = o(f, v.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = Yi(v, m.mode, x)), (f.return = m), (m = f);
          }
          return u(m);
        case zt:
          return (E = v._init), _(m, f, E(v._payload), x);
      }
      if (or(v)) return y(m, f, v, x);
      if (Kn(v)) return g(m, f, v, x);
      eo(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = o(f, v)), (f.return = m), (m = f))
          : (n(m, f), (f = Qi(v, m.mode, x)), (f.return = m), (m = f)),
        u(m))
      : n(m, f);
  }
  return _;
}
var Fn = Ic(!0),
  Mc = Ic(!1),
  Fr = {},
  vt = Zt(Fr),
  Tr = Zt(Fr),
  Nr = Zt(Fr);
function on(e) {
  if (e === Fr) throw Error(O(174));
  return e;
}
function _u(e, t) {
  switch ((ie(Nr, t), ie(Tr, e), ie(vt, Fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : il(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = il(t, e));
  }
  se(vt), ie(vt, t);
}
function Un() {
  se(vt), se(Tr), se(Nr);
}
function $c(e) {
  on(Nr.current);
  var t = on(vt.current),
    n = il(t, e.type);
  t !== n && (ie(Tr, e), ie(vt, n));
}
function Eu(e) {
  Tr.current === e && (se(vt), se(Tr));
}
var fe = Zt(0);
function Do(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fi = [];
function Cu() {
  for (var e = 0; e < Fi.length; e++)
    Fi[e]._workInProgressVersionPrimary = null;
  Fi.length = 0;
}
var mo = Nt.ReactCurrentDispatcher,
  Ui = Nt.ReactCurrentBatchConfig,
  cn = 0,
  de = null,
  xe = null,
  _e = null,
  Fo = !1,
  dr = !1,
  Or = 0,
  Hp = 0;
function Ne() {
  throw Error(O(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function ju(e, t, n, r, o, i) {
  if (
    ((cn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (mo.current = e === null || e.memoizedState === null ? Yp : Gp),
    (e = n(r, o)),
    dr)
  ) {
    i = 0;
    do {
      if (((dr = !1), (Or = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (_e = xe = null),
        (t.updateQueue = null),
        (mo.current = Xp),
        (e = n(r, o));
    } while (dr);
  }
  if (
    ((mo.current = Uo),
    (t = xe !== null && xe.next !== null),
    (cn = 0),
    (_e = xe = de = null),
    (Fo = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Tu() {
  var e = Or !== 0;
  return (Or = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (de.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function rt() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = _e === null ? de.memoizedState : _e.next;
  if (t !== null) (_e = t), (xe = e);
  else {
    if (e === null) throw Error(O(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      _e === null ? (de.memoizedState = _e = e) : (_e = _e.next = e);
  }
  return _e;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = xe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var u = o.next;
      (o.next = i.next), (i.next = u);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (u = null),
      a = null,
      s = i;
    do {
      var c = s.lane;
      if ((cn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (u = r)) : (a = a.next = p),
          (de.lanes |= c),
          (fn |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (u = r) : (a.next = l),
      ct(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (de.lanes |= i), (fn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var u = (o = o.next);
    do (i = e(i, u.action)), (u = u.next);
    while (u !== o);
    ct(i, t.memoizedState) || (Fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Dc() {}
function Fc(e, t) {
  var n = de,
    r = rt(),
    o = t(),
    i = !ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Fe = !0)),
    (r = r.queue),
    Nu(Hc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zr(9, Bc.bind(null, n, r, o, t), void 0, null),
      Ee === null)
    )
      throw Error(O(349));
    cn & 30 || Uc(n, t, o);
  }
  return o;
}
function Uc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Vc(t) && Wc(e);
}
function Hc(e, t, n) {
  return n(function () {
    Vc(t) && Wc(e);
  });
}
function Vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function Wc(e) {
  var t = jt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function Fs(e) {
  var t = pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qp.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qc() {
  return rt().memoizedState;
}
function vo(e, t, n, r) {
  var o = pt();
  (de.flags |= e),
    (o.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ni(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var u = xe.memoizedState;
    if (((i = u.destroy), r !== null && Pu(r, u.deps))) {
      o.memoizedState = zr(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = zr(1 | t, n, i, r));
}
function Us(e, t) {
  return vo(8390656, 8, e, t);
}
function Nu(e, t) {
  return ni(2048, 8, e, t);
}
function Yc(e, t) {
  return ni(4, 2, e, t);
}
function Gc(e, t) {
  return ni(4, 4, e, t);
}
function Xc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ni(4, 4, Xc.bind(null, t, e), n)
  );
}
function Ou() {}
function Zc(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jc(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qc(e, t, n) {
  return cn & 21
    ? (ct(n, t) || ((n = tc()), (de.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Vp(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ui.transition;
  Ui.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Ui.transition = r);
  }
}
function bc() {
  return rt().memoizedState;
}
function Wp(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ef(e))
  )
    tf(t, n);
  else if (((n = Ac(e, t, n, r)), n !== null)) {
    var o = Ie();
    at(n, e, r, o), nf(n, t, r);
  }
}
function Qp(e, t, n) {
  var r = Wt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ef(e)) tf(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          l = i(u, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), ct(l, u))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), xu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ac(e, t, o, r)),
      n !== null && ((o = Ie()), at(n, e, r, o), nf(n, t, r));
  }
}
function ef(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function tf(e, t) {
  dr = Fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function nf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uu(e, n);
  }
}
var Uo = {
    readContext: nt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: nt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Us,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vo(4194308, 4, Xc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wp.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Fs,
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Fs(!1),
        t = e[0];
      return (e = Vp.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = pt();
      if (ae) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(O(349));
        cn & 30 || Uc(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Us(Hc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        zr(9, Bc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = Ee.identifierPrefix;
      if (ae) {
        var n = kt,
          r = xt;
        (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: nt,
    useCallback: Zc,
    useContext: nt,
    useEffect: Nu,
    useImperativeHandle: Kc,
    useInsertionEffect: Yc,
    useLayoutEffect: Gc,
    useMemo: Jc,
    useReducer: Bi,
    useRef: Qc,
    useState: function () {
      return Bi(Ar);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = rt();
      return qc(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Bi(Ar)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dc,
    useSyncExternalStore: Fc,
    useId: bc,
    unstable_isNewReconciler: !1,
  },
  Xp = {
    readContext: nt,
    useCallback: Zc,
    useContext: nt,
    useEffect: Nu,
    useImperativeHandle: Kc,
    useInsertionEffect: Yc,
    useLayoutEffect: Gc,
    useMemo: Jc,
    useReducer: Hi,
    useRef: Qc,
    useState: function () {
      return Hi(Ar);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = rt();
      return xe === null ? (t.memoizedState = e) : qc(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Hi(Ar)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dc,
    useSyncExternalStore: Fc,
    useId: bc,
    unstable_isNewReconciler: !1,
  };
function Bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += kd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Vi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Kp = typeof WeakMap == "function" ? WeakMap : Map;
function rf(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ho || ((Ho = !0), (Dl = r)), Tl(e, t);
    }),
    n
  );
}
function of(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Tl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Tl(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function Bs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kp();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ah.bind(null, e, t, n)), t.then(e, e));
}
function Hs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vs(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zp = Nt.ReactCurrentOwner,
  Fe = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Mc(t, null, n, r) : Fn(t, e.child, n, r);
}
function Ws(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Rn(t, o),
    (r = ju(e, t, n, r, i, o)),
    (n = Tu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Tt(e, t, o))
      : (ae && n && mu(t), (t.flags |= 1), Re(e, t, r, o), t.child)
  );
}
function Qs(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Du(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), lf(e, t, i, r, o))
      : ((e = So(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var u = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Er), n(u, r) && e.ref === t.ref)
    )
      return Tt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Er(i, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Tt(e, t, o);
  }
  return Nl(e, t, n, r, o);
}
function uf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(Tn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(Tn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ie(Tn, Ve),
        (Ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(Tn, Ve),
      (Ve |= r);
  return Re(e, t, o, n), t.child;
}
function sf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nl(e, t, n, r, o) {
  var i = Be(n) ? sn : ze.current;
  return (
    (i = $n(t, i)),
    Rn(t, o),
    (n = ju(e, t, n, r, i, o)),
    (r = Tu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Tt(e, t, o))
      : (ae && r && mu(t), (t.flags |= 1), Re(e, t, n, o), t.child)
  );
}
function Ys(e, t, n, r, o) {
  if (Be(n)) {
    var i = !0;
    zo(t);
  } else i = !1;
  if ((Rn(t, o), t.stateNode === null))
    yo(e, t), Rc(t, n, r), jl(t, n, r, o), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      l = t.memoizedProps;
    u.props = l;
    var a = u.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = nt(s))
      : ((s = Be(n) ? sn : ze.current), (s = $n(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((l !== r || a !== s) && $s(t, u, r, s)),
      (Lt = !1);
    var d = t.memoizedState;
    (u.state = d),
      $o(t, r, u, o),
      (a = t.memoizedState),
      l !== r || d !== a || Ue.current || Lt
        ? (typeof c == "function" && (Pl(t, n, c, r), (a = t.memoizedState)),
          (l = Lt || Ms(t, n, l, r, d, a, s))
            ? (p ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (u.props = r),
          (u.state = a),
          (u.context = s),
          (r = l))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      zc(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : it(t.type, l)),
      (u.props = s),
      (p = t.pendingProps),
      (d = u.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = nt(a))
        : ((a = Be(n) ? sn : ze.current), (a = $n(t, a)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((l !== p || d !== a) && $s(t, u, r, a)),
      (Lt = !1),
      (d = t.memoizedState),
      (u.state = d),
      $o(t, r, u, o);
    var y = t.memoizedState;
    l !== p || d !== y || Ue.current || Lt
      ? (typeof h == "function" && (Pl(t, n, h, r), (y = t.memoizedState)),
        (s = Lt || Ms(t, n, s, r, d, y, a) || !1)
          ? (c ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, y, a),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, y, a)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (u.props = r),
        (u.state = y),
        (u.context = a),
        (r = s))
      : (typeof u.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ol(e, t, n, r, i, o);
}
function Ol(e, t, n, r, o, i) {
  sf(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return o && As(t, n, !1), Tt(e, t, i);
  (r = t.stateNode), (Zp.current = t);
  var l =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = Fn(t, e.child, null, i)), (t.child = Fn(t, null, l, i)))
      : Re(e, t, l, i),
    (t.memoizedState = r.state),
    o && As(t, n, !0),
    t.child
  );
}
function af(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Os(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Os(e, t.context, !1),
    _u(e, t.containerInfo);
}
function Gs(e, t, n, r, o) {
  return Dn(), yu(o), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
function zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cf(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    u = (t.flags & 128) !== 0,
    l;
  if (
    ((l = u) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ie(fe, o & 1),
    e === null)
  )
    return (
      El(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = ii(u, r, 0, null)),
              (e = un(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zl(n)),
              (t.memoizedState = Al),
              e)
            : Au(t, u))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Jp(e, t, u, r, l, o, n);
  if (i) {
    (i = r.fallback), (u = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Qt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Qt(l, i)) : ((i = un(i, u, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? zl(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Al),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Qt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Au(e, t) {
  return (
    (t = ii({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function to(e, t, n, r) {
  return (
    r !== null && yu(r),
    Fn(t, e.child, null, n),
    (e = Au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jp(e, t, n, r, o, i, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vi(Error(O(422)))), to(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ii({ mode: "visible", children: r.children }, o, 0, null)),
        (i = un(i, o, u, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Fn(t, e.child, null, u),
        (t.child.memoizedState = zl(u)),
        (t.memoizedState = Al),
        i);
  if (!(t.mode & 1)) return to(e, t, u, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(O(419))), (r = Vi(i, r, void 0)), to(e, t, u, r);
  }
  if (((l = (u & e.childLanes) !== 0), Fe || l)) {
    if (((r = Ee), r !== null)) {
      switch (u & -u) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | u) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), jt(e, o), at(r, e, o, -1));
    }
    return $u(), (r = Vi(Error(O(421)))), to(e, t, u, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ch.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Qe = Bt(o.nextSibling)),
      (Ye = t),
      (ae = !0),
      (ut = null),
      e !== null &&
        ((qe[be++] = xt),
        (qe[be++] = kt),
        (qe[be++] = an),
        (xt = e.id),
        (kt = e.overflow),
        (an = t)),
      (t = Au(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cl(e.return, t, n);
}
function Wi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function ff(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Re(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
        else if (e.tag === 19) Xs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Do(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Wi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Do(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Wi(t, !0, n, null, i);
        break;
      case "together":
        Wi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qp(e, t, n) {
  switch (t.tag) {
    case 3:
      af(t), Dn();
      break;
    case 5:
      $c(t);
      break;
    case 1:
      Be(t.type) && zo(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ie(Io, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? cf(e, t, n)
          : (ie(fe, fe.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ff(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ie(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uf(e, t, n);
  }
  return Tt(e, t, n);
}
var df, Ll, pf, hf;
df = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ll = function () {};
pf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), on(vt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = tl(e, o)), (r = tl(e, r)), (i = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ol(e, o)), (r = ol(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Oo);
    }
    ll(n, r);
    var u;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var l = o[s];
          for (u in l) l.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (yr.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((l = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && a !== l && (a != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (u in l)
              !l.hasOwnProperty(u) ||
                (a && a.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in a)
              a.hasOwnProperty(u) &&
                l[u] !== a[u] &&
                (n || (n = {}), (n[u] = a[u]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (yr.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && ue("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
hf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bp(e, t, n) {
  var r = t.pendingProps;
  switch ((vu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Be(t.type) && Ao(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Un(),
        se(Ue),
        se(ze),
        Cu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (br(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ut !== null && (Bl(ut), (ut = null)))),
        Ll(e, t),
        Oe(t),
        null
      );
    case 5:
      Eu(t);
      var o = on(Nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Oe(t), null;
        }
        if (((e = on(vt.current)), br(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ht] = t), (r[jr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < lr.length; o++) ue(lr[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              rs(r, i), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              is(r, i), ue("invalid", r);
          }
          ll(n, i), (o = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var l = i[u];
              u === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      qr(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      qr(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : yr.hasOwnProperty(u) &&
                  l != null &&
                  u === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              Wr(r), os(r, i, !0);
              break;
            case "textarea":
              Wr(r), ls(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Oo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ua(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[ht] = t),
            (e[jr] = r),
            df(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = ul(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < lr.length; o++) ue(lr[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (o = r);
                break;
              case "details":
                ue("toggle", e), (o = r);
                break;
              case "input":
                rs(e, r), (o = tl(e, r)), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                is(e, r), (o = ol(e, r)), ue("invalid", e);
                break;
              default:
                o = r;
            }
            ll(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Va(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ba(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && gr(e, a)
                    : typeof a == "number" && gr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (yr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ue("scroll", e)
                      : a != null && tu(e, i, a, u));
              }
            switch (n) {
              case "input":
                Wr(e), os(e, r, !1);
                break;
              case "textarea":
                Wr(e), ls(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? On(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Oo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) hf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = on(Nr.current)), on(vt.current), br(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ht] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ht] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (se(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Qe !== null && t.mode & 1 && !(t.flags & 128))
          Oc(), Dn(), (t.flags |= 98560), (i = !1);
        else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[ht] = t;
          } else
            Dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (i = !1);
        } else ut !== null && (Bl(ut), (ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : $u())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Un(), Ll(e, t), e === null && Cr(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return Su(t.type._context), Oe(t), null;
    case 17:
      return Be(t.type) && Ao(), Oe(t), null;
    case 19:
      if ((se(fe), (i = t.memoizedState), i === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) tr(i, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = Do(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    tr(i, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > Hn &&
            ((t.flags |= 128), (r = !0), tr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Do(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              tr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !u.alternate && !ae)
            )
              return Oe(t), null;
          } else
            2 * ve() - i.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), tr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = i.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          ie(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Mu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function eh(e, t) {
  switch ((vu(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && Ao(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Un(),
        se(Ue),
        se(ze),
        Cu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eu(t), null;
    case 13:
      if (
        (se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(fe), null;
    case 4:
      return Un(), null;
    case 10:
      return Su(t.type._context), null;
    case 22:
    case 23:
      return Mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var no = !1,
  Ae = !1,
  th = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function Rl(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Ks = !1;
function nh(e, t) {
  if (((yl = jo), (e = yc()), hu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            l = -1,
            a = -1,
            s = 0,
            c = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = u + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = u + r),
                p.nodeType === 3 && (u += p.nodeValue.length),
                (h = p.firstChild) !== null;

            )
              (d = p), (p = h);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++s === o && (l = u),
                d === i && ++c === r && (a = u),
                (h = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gl = { focusedElem: e, selectionRange: n }, jo = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    _ = y.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (x) {
          me(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (y = Ks), (Ks = !1), y;
}
function pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Rl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ri(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Il(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ht], delete t[jr], delete t[xl], delete t[Dp], delete t[Fp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Oo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; ) Ml(e, t, n), (e = e.sibling);
}
function $l(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($l(e, t, n), e = e.sibling; e !== null; ) $l(e, t, n), (e = e.sibling);
}
var Pe = null,
  lt = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) yf(e, t, n), (n = n.sibling);
}
function yf(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(Ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || jn(n, t);
    case 6:
      var r = Pe,
        o = lt;
      (Pe = null),
        At(e, t, n),
        (Pe = r),
        (lt = o),
        Pe !== null &&
          (lt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (lt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $i(e.parentNode, n)
              : e.nodeType === 1 && $i(e, n),
            kr(e))
          : $i(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (o = lt),
        (Pe = n.stateNode.containerInfo),
        (lt = !0),
        At(e, t, n),
        (Pe = r),
        (lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && Rl(n, t, u),
            (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          me(n, t, l);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), At(e, t, n), (Ae = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new th()),
      t.forEach(function (r) {
        var o = fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          u = t,
          l = u;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Pe = l.stateNode), (lt = !1);
              break e;
            case 3:
              (Pe = l.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (Pe = l.stateNode.containerInfo), (lt = !0);
              break e;
          }
          l = l.return;
        }
        if (Pe === null) throw Error(O(160));
        yf(i, u, o), (Pe = null), (lt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (s) {
        me(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gf(t, e), (t = t.sibling);
}
function gf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), dt(e), r & 4)) {
        try {
          pr(3, e, e.return), ri(3, e);
        } catch (g) {
          me(e, e.return, g);
        }
        try {
          pr(5, e, e.return);
        } catch (g) {
          me(e, e.return, g);
        }
      }
      break;
    case 1:
      ot(t, e), dt(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        dt(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          gr(o, "");
        } catch (g) {
          me(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          u = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Da(o, i),
              ul(l, u);
            var s = ul(l, i);
            for (u = 0; u < a.length; u += 2) {
              var c = a[u],
                p = a[u + 1];
              c === "style"
                ? Va(o, p)
                : c === "dangerouslySetInnerHTML"
                ? Ba(o, p)
                : c === "children"
                ? gr(o, p)
                : tu(o, c, p, s);
            }
            switch (l) {
              case "input":
                nl(o, i);
                break;
              case "textarea":
                Fa(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? On(o, !!i.multiple, h, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? On(o, !!i.multiple, i.defaultValue, !0)
                      : On(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[jr] = i;
          } catch (g) {
            me(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ot(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          me(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          kr(t.containerInfo);
        } catch (g) {
          me(e, e.return, g);
        }
      break;
    case 4:
      ot(t, e), dt(e);
      break;
    case 13:
      ot(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ru = ve())),
        r & 4 && Js(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (s = Ae) || c), ot(t, e), (Ae = s)) : ot(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (p = F = c; F !== null; ) {
              switch (((d = F), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, d, d.return);
                  break;
                case 1:
                  jn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      me(r, n, g);
                    }
                  }
                  break;
                case 5:
                  jn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    bs(p);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (F = h)) : bs(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (o = p.stateNode),
                  s
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (u =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Ha("display", u)));
              } catch (g) {
                me(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (g) {
                me(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), dt(e), r & 4 && Js(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (gr(o, ""), (r.flags &= -33));
          var i = Zs(e);
          $l(e, i, o);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            l = Zs(e);
          Ml(e, l, u);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rh(e, t, n) {
  (F = e), wf(e);
}
function wf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var u = o.memoizedState !== null || no;
      if (!u) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ae;
        l = no;
        var s = Ae;
        if (((no = u), (Ae = a) && !s))
          for (F = o; F !== null; )
            (u = F),
              (a = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? ea(o)
                : a !== null
                ? ((a.return = u), (F = a))
                : ea(o);
        for (; i !== null; ) (F = i), wf(i), (i = i.sibling);
        (F = o), (no = l), (Ae = s);
      }
      qs(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : qs(e);
  }
}
function qs(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || ri(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Is(t, i, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Is(t, u, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && kr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ae || (t.flags & 512 && Il(t));
      } catch (d) {
        me(t, t.return, d);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function bs(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function ea(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ri(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, o, a);
            }
          }
          var i = t.return;
          try {
            Il(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Il(t);
          } catch (a) {
            me(t, u, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      F = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (F = l);
      break;
    }
    F = t.return;
  }
}
var oh = Math.ceil,
  Bo = Nt.ReactCurrentDispatcher,
  zu = Nt.ReactCurrentOwner,
  tt = Nt.ReactCurrentBatchConfig,
  ee = 0,
  Ee = null,
  we = null,
  je = 0,
  Ve = 0,
  Tn = Zt(0),
  ke = 0,
  Lr = null,
  fn = 0,
  oi = 0,
  Lu = 0,
  hr = null,
  De = null,
  Ru = 0,
  Hn = 1 / 0,
  wt = null,
  Ho = !1,
  Dl = null,
  Vt = null,
  ro = !1,
  $t = null,
  Vo = 0,
  mr = 0,
  Fl = null,
  go = -1,
  wo = 0;
function Ie() {
  return ee & 6 ? ve() : go !== -1 ? go : (go = ve());
}
function Wt(e) {
  return e.mode & 1
    ? ee & 2 && je !== 0
      ? je & -je
      : Bp.transition !== null
      ? (wo === 0 && (wo = tc()), wo)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sc(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < mr) throw ((mr = 0), (Fl = null), Error(O(185)));
  Mr(e, n, r),
    (!(ee & 2) || e !== Ee) &&
      (e === Ee && (!(ee & 2) && (oi |= n), ke === 4 && It(e, je)),
      He(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((Hn = ve() + 500), ei && Jt()));
}
function He(e, t) {
  var n = e.callbackNode;
  Bd(e, t);
  var r = Po(e, e === Ee ? je : 0);
  if (r === 0)
    n !== null && as(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && as(n), t === 1))
      e.tag === 0 ? Up(ta.bind(null, e)) : jc(ta.bind(null, e)),
        Mp(function () {
          !(ee & 6) && Jt();
        }),
        (n = null);
    else {
      switch (nc(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = ba;
          break;
        case 16:
          n = Co;
          break;
        case 536870912:
          n = ec;
          break;
        default:
          n = Co;
      }
      n = jf(n, Sf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sf(e, t) {
  if (((go = -1), (wo = 0), ee & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = Po(e, e === Ee ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wo(e, r);
  else {
    t = r;
    var o = ee;
    ee |= 2;
    var i = kf();
    (Ee !== e || je !== t) && ((wt = null), (Hn = ve() + 500), ln(e, t));
    do
      try {
        uh();
        break;
      } catch (l) {
        xf(e, l);
      }
    while (!0);
    wu(),
      (Bo.current = i),
      (ee = o),
      we !== null ? (t = 0) : ((Ee = null), (je = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = dl(e)), o !== 0 && ((r = o), (t = Ul(e, o)))), t === 1)
    )
      throw ((n = Lr), ln(e, 0), It(e, r), He(e, ve()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ih(o) &&
          ((t = Wo(e, r)),
          t === 2 && ((i = dl(e)), i !== 0 && ((r = i), (t = Ul(e, i)))),
          t === 1))
      )
        throw ((n = Lr), ln(e, 0), It(e, r), He(e, ve()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          tn(e, De, wt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = Ru + 500 - ve()), 10 < t))
          ) {
            if (Po(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Sl(tn.bind(null, e, De, wt), t);
            break;
          }
          tn(e, De, wt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var u = 31 - st(r);
            (i = 1 << u), (u = t[u]), u > o && (o = u), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Sl(tn.bind(null, e, De, wt), r);
            break;
          }
          tn(e, De, wt);
          break;
        case 5:
          tn(e, De, wt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return He(e, ve()), e.callbackNode === n ? Sf.bind(null, e) : null;
}
function Ul(e, t) {
  var n = hr;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = Wo(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && Bl(t)),
    e
  );
}
function Bl(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ct(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~Lu,
      t &= ~oi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ta(e) {
  if (ee & 6) throw Error(O(327));
  In();
  var t = Po(e, 0);
  if (!(t & 1)) return He(e, ve()), null;
  var n = Wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dl(e);
    r !== 0 && ((t = r), (n = Ul(e, r)));
  }
  if (n === 1) throw ((n = Lr), ln(e, 0), It(e, t), He(e, ve()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, De, wt),
    He(e, ve()),
    null
  );
}
function Iu(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Hn = ve() + 500), ei && Jt());
  }
}
function dn(e) {
  $t !== null && $t.tag === 0 && !(ee & 6) && In();
  var t = ee;
  ee |= 1;
  var n = tt.transition,
    r = ne;
  try {
    if (((tt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (tt.transition = n), (ee = t), !(ee & 6) && Jt();
  }
}
function Mu() {
  (Ve = Tn.current), se(Tn);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ip(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((vu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ao();
          break;
        case 3:
          Un(), se(Ue), se(ze), Cu();
          break;
        case 5:
          Eu(r);
          break;
        case 4:
          Un();
          break;
        case 13:
          se(fe);
          break;
        case 19:
          se(fe);
          break;
        case 10:
          Su(r.type._context);
          break;
        case 22:
        case 23:
          Mu();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (we = e = Qt(e.current, null)),
    (je = Ve = t),
    (ke = 0),
    (Lr = null),
    (Lu = oi = fn = 0),
    (De = hr = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = o), (r.next = u);
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function xf(e, t) {
  do {
    var n = we;
    try {
      if ((wu(), (mo.current = Uo), Fo)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Fo = !1;
      }
      if (
        ((cn = 0),
        (_e = xe = de = null),
        (dr = !1),
        (Or = 0),
        (zu.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (Lr = t), (we = null);
        break;
      }
      e: {
        var i = e,
          u = n.return,
          l = n,
          a = t;
        if (
          ((t = je),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            c = l,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Hs(u);
          if (h !== null) {
            (h.flags &= -257),
              Vs(h, u, l, i, t),
              h.mode & 1 && Bs(i, s, t),
              (t = h),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Bs(i, s, t), $u();
              break e;
            }
            a = Error(O(426));
          }
        } else if (ae && l.mode & 1) {
          var _ = Hs(u);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Vs(_, u, l, i, t),
              yu(Bn(a, l));
            break e;
          }
        }
        (i = a = Bn(a, l)),
          ke !== 4 && (ke = 2),
          hr === null ? (hr = [i]) : hr.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = rf(i, a, t);
              Rs(i, m);
              break e;
            case 1:
              l = a;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = of(i, l, t);
                Rs(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ef(n);
    } catch (k) {
      (t = k), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kf() {
  var e = Bo.current;
  return (Bo.current = Uo), e === null ? Uo : e;
}
function $u() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ee === null || (!(fn & 268435455) && !(oi & 268435455)) || It(Ee, je);
}
function Wo(e, t) {
  var n = ee;
  ee |= 2;
  var r = kf();
  (Ee !== e || je !== t) && ((wt = null), ln(e, t));
  do
    try {
      lh();
      break;
    } catch (o) {
      xf(e, o);
    }
  while (!0);
  if ((wu(), (ee = n), (Bo.current = r), we !== null)) throw Error(O(261));
  return (Ee = null), (je = 0), ke;
}
function lh() {
  for (; we !== null; ) _f(we);
}
function uh() {
  for (; we !== null && !zd(); ) _f(we);
}
function _f(e) {
  var t = Pf(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ef(e) : (we = t),
    (zu.current = null);
}
function Ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = eh(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (we = null);
        return;
      }
    } else if (((n = bp(n, t, Ve)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function tn(e, t, n) {
  var r = ne,
    o = tt.transition;
  try {
    (tt.transition = null), (ne = 1), sh(e, t, n, r);
  } finally {
    (tt.transition = o), (ne = r);
  }
  return null;
}
function sh(e, t, n, r) {
  do In();
  while ($t !== null);
  if (ee & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Hd(e, i),
    e === Ee && ((we = Ee = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ro ||
      ((ro = !0),
      jf(Co, function () {
        return In(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = tt.transition), (tt.transition = null);
    var u = ne;
    ne = 1;
    var l = ee;
    (ee |= 4),
      (zu.current = null),
      nh(e, n),
      gf(n, e),
      Tp(gl),
      (jo = !!yl),
      (gl = yl = null),
      (e.current = n),
      rh(n),
      Ld(),
      (ee = l),
      (ne = u),
      (tt.transition = i);
  } else e.current = n;
  if (
    (ro && ((ro = !1), ($t = e), (Vo = o)),
    (i = e.pendingLanes),
    i === 0 && (Vt = null),
    Md(n.stateNode),
    He(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ho) throw ((Ho = !1), (e = Dl), (Dl = null), e);
  return (
    Vo & 1 && e.tag !== 0 && In(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fl ? mr++ : ((mr = 0), (Fl = e))) : (mr = 0),
    Jt(),
    null
  );
}
function In() {
  if ($t !== null) {
    var e = nc(Vo),
      t = tt.transition,
      n = ne;
    try {
      if (((tt.transition = null), (ne = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (Vo = 0), ee & 6)) throw Error(O(331));
        var o = ee;
        for (ee |= 4, F = e.current; F !== null; ) {
          var i = F,
            u = i.child;
          if (F.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                for (F = s; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (F = p);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var d = c.sibling,
                        h = c.return;
                      if ((mf(c), c === s)) {
                        F = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (F = d);
                        break;
                      }
                      F = h;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
                  } while (g !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (F = u);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (F = m);
                break e;
              }
              F = i.return;
            }
        }
        var f = e.current;
        for (F = f; F !== null; ) {
          u = F;
          var v = u.child;
          if (u.subtreeFlags & 2064 && v !== null) (v.return = u), (F = v);
          else
            e: for (u = f; F !== null; ) {
              if (((l = F), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ri(9, l);
                  }
                } catch (k) {
                  me(l, l.return, k);
                }
              if (l === u) {
                F = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (F = x);
                break e;
              }
              F = l.return;
            }
        }
        if (
          ((ee = o), Jt(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(Ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (tt.transition = t);
    }
  }
  return !1;
}
function na(e, t, n) {
  (t = Bn(n, t)),
    (t = rf(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Ie()),
    e !== null && (Mr(e, 1, t), He(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) na(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        na(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Bn(n, e)),
            (e = of(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Ie()),
            t !== null && (Mr(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ah(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (je & n) === n &&
      (ke === 4 || (ke === 3 && (je & 130023424) === je && 500 > ve() - Ru)
        ? ln(e, 0)
        : (Lu |= n)),
    He(e, t);
}
function Cf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gr), (Gr <<= 1), !(Gr & 130023424) && (Gr = 4194304))
      : (t = 1));
  var n = Ie();
  (e = jt(e, t)), e !== null && (Mr(e, t, n), He(e, n));
}
function ch(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cf(e, n);
}
function fh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Cf(e, n);
}
var Pf;
Pf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), qp(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), ae && t.flags & 1048576 && Tc(t, Ro, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      yo(e, t), (e = t.pendingProps);
      var o = $n(t, ze.current);
      Rn(t, n), (o = ju(null, t, r, e, o, n));
      var i = Tu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), zo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ku(t),
            (o.updater = ti),
            (t.stateNode = o),
            (o._reactInternals = t),
            jl(t, r, e, n),
            (t = Ol(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && mu(t), Re(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (yo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = ph(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = Nl(null, t, r, e, n);
            break e;
          case 1:
            t = Ys(null, t, r, e, n);
            break e;
          case 11:
            t = Ws(null, t, r, e, n);
            break e;
          case 14:
            t = Qs(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Nl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Ys(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((af(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          zc(e, t),
          $o(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Bn(Error(O(423)), t)), (t = Gs(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Bn(Error(O(424)), t)), (t = Gs(e, t, r, n, o));
            break e;
          } else
            for (
              Qe = Bt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                ae = !0,
                ut = null,
                n = Mc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dn(), r === o)) {
            t = Tt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $c(t),
        e === null && El(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = o.children),
        wl(r, o) ? (u = null) : i !== null && wl(r, i) && (t.flags |= 32),
        sf(e, t),
        Re(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && El(t), null;
    case 13:
      return cf(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fn(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Ws(e, t, r, o, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (u = o.value),
          ie(Io, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (ct(i.value, u)) {
            if (i.children === o.children && !Ue.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                u = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Et(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Cl(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(O(341));
                (u.lanes |= n),
                  (l = u.alternate),
                  l !== null && (l.lanes |= n),
                  Cl(u, n, t),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        Re(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Rn(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        Qs(e, t, r, o, n)
      );
    case 15:
      return lf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        yo(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), zo(t)) : (e = !1),
        Rn(t, n),
        Rc(t, r, o),
        jl(t, r, o, n),
        Ol(null, t, r, !0, e, n)
      );
    case 19:
      return ff(e, t, n);
    case 22:
      return uf(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function jf(e, t) {
  return qa(e, t);
}
function dh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function et(e, t, n, r) {
  return new dh(e, t, n, r);
}
function Du(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ph(e) {
  if (typeof e == "function") return Du(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ru)) return 11;
    if (e === ou) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function So(e, t, n, r, o, i) {
  var u = 2;
  if (((r = e), typeof e == "function")) Du(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case gn:
        return un(n.children, o, i, t);
      case nu:
        (u = 8), (o |= 8);
        break;
      case Ji:
        return (
          (e = et(12, n, t, o | 2)), (e.elementType = Ji), (e.lanes = i), e
        );
      case qi:
        return (e = et(13, n, t, o)), (e.elementType = qi), (e.lanes = i), e;
      case bi:
        return (e = et(19, n, t, o)), (e.elementType = bi), (e.lanes = i), e;
      case Ia:
        return ii(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case La:
              u = 10;
              break e;
            case Ra:
              u = 9;
              break e;
            case ru:
              u = 11;
              break e;
            case ou:
              u = 14;
              break e;
            case zt:
              (u = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = et(u, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function un(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function ii(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = Ia),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qi(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Yi(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hh(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pi(0)),
    (this.expirationTimes = Pi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Fu(e, t, n, r, o, i, u, l, a) {
  return (
    (e = new hh(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = et(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ku(i),
    e
  );
}
function mh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tf(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (hn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return Pc(e, n, t);
  }
  return t;
}
function Nf(e, t, n, r, o, i, u, l, a) {
  return (
    (e = Fu(n, r, !0, e, o, i, u, l, a)),
    (e.context = Tf(null)),
    (n = e.current),
    (r = Ie()),
    (o = Wt(n)),
    (i = Et(r, o)),
    (i.callback = t ?? null),
    Ht(n, i, o),
    (e.current.lanes = o),
    Mr(e, o, r),
    He(e, r),
    e
  );
}
function li(e, t, n, r) {
  var o = t.current,
    i = Ie(),
    u = Wt(o);
  return (
    (n = Tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(i, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(o, t, u)),
    e !== null && (at(e, o, u, i), ho(e, o, u)),
    u
  );
}
function Qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ra(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uu(e, t) {
  ra(e, t), (e = e.alternate) && ra(e, t);
}
function vh() {
  return null;
}
var Of =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bu(e) {
  this._internalRoot = e;
}
ui.prototype.render = Bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  li(e, t, null, null);
};
ui.prototype.unmount = Bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      li(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function ui(e) {
  this._internalRoot = e;
}
ui.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ic();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    Rt.splice(n, 0, e), n === 0 && uc(e);
  }
};
function Hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function si(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function oa() {}
function yh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Qo(u);
        i.call(s);
      };
    }
    var u = Nf(t, r, e, 0, null, !1, !1, "", oa);
    return (
      (e._reactRootContainer = u),
      (e[Pt] = u.current),
      Cr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      u
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = Qo(a);
      l.call(s);
    };
  }
  var a = Fu(e, 0, !1, null, null, !1, !1, "", oa);
  return (
    (e._reactRootContainer = a),
    (e[Pt] = a.current),
    Cr(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      li(t, a, n, r);
    }),
    a
  );
}
function ai(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Qo(u);
        l.call(a);
      };
    }
    li(t, u, e, o);
  } else u = yh(n, t, e, o, r);
  return Qo(u);
}
rc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ir(t.pendingLanes);
        n !== 0 &&
          (uu(t, n | 1), He(t, ve()), !(ee & 6) && ((Hn = ve() + 500), Jt()));
      }
      break;
    case 13:
      dn(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var o = Ie();
          at(r, e, 1, o);
        }
      }),
        Uu(e, 1);
  }
};
su = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      at(t, e, 134217728, n);
    }
    Uu(e, 134217728);
  }
};
oc = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Ie();
      at(n, e, t, r);
    }
    Uu(e, t);
  }
};
ic = function () {
  return ne;
};
lc = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
al = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = bo(r);
            if (!o) throw Error(O(90));
            $a(r), nl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Fa(e, n);
      break;
    case "select":
      (t = n.value), t != null && On(e, !!n.multiple, t, !1);
  }
};
Ya = Iu;
Ga = dn;
var gh = { usingClientEntryPoint: !1, Events: [Dr, kn, bo, Wa, Qa, Iu] },
  nr = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wh = {
    bundleType: nr.bundleType,
    version: nr.version,
    rendererPackageName: nr.rendererPackageName,
    rendererConfig: nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Za(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: nr.findFiberByHostInstance || vh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oo.isDisabled && oo.supportsFiber)
    try {
      (Ko = oo.inject(wh)), (mt = oo);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gh;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hu(t)) throw Error(O(200));
  return mh(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Hu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = Of;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Pt] = t.current),
    Cr(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Za(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return dn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!si(t)) throw Error(O(200));
  return ai(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Hu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    u = Of;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Nf(t, null, e, 1, n ?? null, o, !1, i, u)),
    (e[Pt] = t.current),
    Cr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ui(t);
};
Xe.render = function (e, t, n) {
  if (!si(t)) throw Error(O(200));
  return ai(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!si(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (dn(function () {
        ai(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Iu;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!si(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ai(e, t, n, !1, r);
};
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function Af() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af);
    } catch (e) {
      console.error(e);
    }
}
Af(), (Ta.exports = Xe);
var Sh = Ta.exports,
  ia = Sh;
(Ki.createRoot = ia.createRoot), (Ki.hydrateRoot = ia.hydrateRoot);
const zf = "/assets/discord-me-kyCwcDYh.svg";
function xh({ playAudio: e, stopAudio: t, isPlaying: n }) {
  return D.jsx(D.Fragment, {
    children: D.jsx("nav", {
      className:
        "flex flex-row text-center sticky top-0 bg-blur backdrop-blur-lg z-[9999]",
      children: D.jsxs("ul", {
        className:
          "flex flex-row justify-between items-center w-full p-4 bg-amber-600 bg-opacity-30 text-white font-black md:text-2xl rounded-b-3xl",
        children: [
          D.jsx("a", {
            href: "#",
            children: D.jsx("img", {
              className: "w-16 h-16 rounded-full",
              src: zf,
              alt: "face of robin",
            }),
          }),
          D.jsx("li", {
            children: D.jsx("a", {
              className: "underline",
              href: "#projects",
              children: "Projects",
            }),
          }),
          D.jsx("button", {
            onClick: n ? t : !n && e,
            className:
              "text-white mx-2 p-2 hover:bg-white hover:text-black  hover:rounded-md ",
            children: "Toggle Audio",
          }),
        ],
      }),
    }),
  });
}
function gt({ src: e, link: t, ...n }) {
  return D.jsx("button", {
    className: "",
    children: D.jsx("a", {
      href: t,
      rel: "noreferrer",
      target: "_blank",
      children: D.jsx("img", {
        className:
          "p-2 m-2 w-16 h-16 rounded-full bg-slate-900 hover:bg-slate-700",
        ...n,
        src: e,
        alt: "Icon for a software I use",
      }),
    }),
  });
}
var Lf = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(We);
  })(typeof self < "u" ? self : Kf, (n) =>
    (() => {
      var r = {
          7403: (l, a, s) => {
            s.d(a, { default: () => R });
            var c = s(4087),
              p = s.n(c);
            const d = function (z) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(z);
              },
              h = function (z, T) {
                return Math.floor(Math.random() * (T - z + 1)) + z;
              };
            var y = "TYPE_CHARACTER",
              g = "REMOVE_CHARACTER",
              _ = "REMOVE_ALL",
              m = "REMOVE_LAST_VISIBLE_NODE",
              f = "PAUSE_FOR",
              v = "CALL_FUNCTION",
              x = "ADD_HTML_TAG_ELEMENT",
              k = "CHANGE_DELETE_SPEED",
              E = "CHANGE_DELAY",
              P = "CHANGE_CURSOR",
              j = "PASTE_STRING",
              $ = "HTML_TAG";
            function L(z) {
              return (
                (L =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (T) {
                        return typeof T;
                      }
                    : function (T) {
                        return T &&
                          typeof Symbol == "function" &&
                          T.constructor === Symbol &&
                          T !== Symbol.prototype
                          ? "symbol"
                          : typeof T;
                      }),
                L(z)
              );
            }
            function M(z, T) {
              var U = Object.keys(z);
              if (Object.getOwnPropertySymbols) {
                var C = Object.getOwnPropertySymbols(z);
                T &&
                  (C = C.filter(function (I) {
                    return Object.getOwnPropertyDescriptor(z, I).enumerable;
                  })),
                  U.push.apply(U, C);
              }
              return U;
            }
            function A(z) {
              for (var T = 1; T < arguments.length; T++) {
                var U = arguments[T] != null ? arguments[T] : {};
                T % 2
                  ? M(Object(U), !0).forEach(function (C) {
                      K(z, C, U[C]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      z,
                      Object.getOwnPropertyDescriptors(U)
                    )
                  : M(Object(U)).forEach(function (C) {
                      Object.defineProperty(
                        z,
                        C,
                        Object.getOwnPropertyDescriptor(U, C)
                      );
                    });
              }
              return z;
            }
            function H(z) {
              return (
                (function (T) {
                  if (Array.isArray(T)) return W(T);
                })(z) ||
                (function (T) {
                  if (
                    (typeof Symbol < "u" && T[Symbol.iterator] != null) ||
                    T["@@iterator"] != null
                  )
                    return Array.from(T);
                })(z) ||
                (function (T, U) {
                  if (T) {
                    if (typeof T == "string") return W(T, U);
                    var C = Object.prototype.toString.call(T).slice(8, -1);
                    return (
                      C === "Object" &&
                        T.constructor &&
                        (C = T.constructor.name),
                      C === "Map" || C === "Set"
                        ? Array.from(T)
                        : C === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)
                        ? W(T, U)
                        : void 0
                    );
                  }
                })(z) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function W(z, T) {
              (T == null || T > z.length) && (T = z.length);
              for (var U = 0, C = new Array(T); U < T; U++) C[U] = z[U];
              return C;
            }
            function G(z, T) {
              for (var U = 0; U < T.length; U++) {
                var C = T[U];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  "value" in C && (C.writable = !0),
                  Object.defineProperty(z, oe(C.key), C);
              }
            }
            function K(z, T, U) {
              return (
                (T = oe(T)) in z
                  ? Object.defineProperty(z, T, {
                      value: U,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (z[T] = U),
                z
              );
            }
            function oe(z) {
              var T = (function (U, C) {
                if (L(U) !== "object" || U === null) return U;
                var I = U[Symbol.toPrimitive];
                if (I !== void 0) {
                  var S = I.call(U, "string");
                  if (L(S) !== "object") return S;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(U);
              })(z);
              return L(T) === "symbol" ? T : String(T);
            }
            const R = (function () {
              function z(C, I) {
                var S = this;
                if (
                  ((function (w, B) {
                    if (!(w instanceof B))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, z),
                  K(this, "state", {
                    cursorAnimation: null,
                    lastFrameTime: null,
                    pauseUntil: null,
                    eventQueue: [],
                    eventLoop: null,
                    eventLoopPaused: !1,
                    reverseCalledEvents: [],
                    calledEvents: [],
                    visibleNodes: [],
                    initialOptions: null,
                    elements: {
                      container: null,
                      wrapper: document.createElement("span"),
                      cursor: document.createElement("span"),
                    },
                  }),
                  K(this, "options", {
                    strings: null,
                    cursor: "|",
                    delay: "natural",
                    pauseFor: 1500,
                    deleteSpeed: "natural",
                    loop: !1,
                    autoStart: !1,
                    devMode: !1,
                    skipAddStyles: !1,
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor",
                    stringSplitter: null,
                    onCreateTextNode: null,
                    onRemoveNode: null,
                  }),
                  K(this, "setupWrapperElement", function () {
                    S.state.elements.container &&
                      ((S.state.elements.wrapper.className =
                        S.options.wrapperClassName),
                      (S.state.elements.cursor.className =
                        S.options.cursorClassName),
                      (S.state.elements.cursor.innerHTML = S.options.cursor),
                      (S.state.elements.container.innerHTML = ""),
                      S.state.elements.container.appendChild(
                        S.state.elements.wrapper
                      ),
                      S.state.elements.container.appendChild(
                        S.state.elements.cursor
                      ));
                  }),
                  K(this, "start", function () {
                    return (S.state.eventLoopPaused = !1), S.runEventLoop(), S;
                  }),
                  K(this, "pause", function () {
                    return (S.state.eventLoopPaused = !0), S;
                  }),
                  K(this, "stop", function () {
                    return (
                      S.state.eventLoop &&
                        ((0, c.cancel)(S.state.eventLoop),
                        (S.state.eventLoop = null)),
                      S
                    );
                  }),
                  K(this, "pauseFor", function (w) {
                    return S.addEventToQueue(f, { ms: w }), S;
                  }),
                  K(this, "typeOutAllStrings", function () {
                    return typeof S.options.strings == "string"
                      ? (S.typeString(S.options.strings).pauseFor(
                          S.options.pauseFor
                        ),
                        S)
                      : (S.options.strings.forEach(function (w) {
                          S.typeString(w)
                            .pauseFor(S.options.pauseFor)
                            .deleteAll(S.options.deleteSpeed);
                        }),
                        S);
                  }),
                  K(this, "typeString", function (w) {
                    var B =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (d(w)) return S.typeOutHTMLString(w, B);
                    if (w) {
                      var N = (S.options || {}).stringSplitter,
                        J = typeof N == "function" ? N(w) : w.split("");
                      S.typeCharacters(J, B);
                    }
                    return S;
                  }),
                  K(this, "pasteString", function (w) {
                    var B =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return d(w)
                      ? S.typeOutHTMLString(w, B, !0)
                      : (w && S.addEventToQueue(j, { character: w, node: B }),
                        S);
                  }),
                  K(this, "typeOutHTMLString", function (w) {
                    var B =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      N = arguments.length > 2 ? arguments[2] : void 0,
                      J = (function (ce) {
                        var ye = document.createElement("div");
                        return (ye.innerHTML = ce), ye.childNodes;
                      })(w);
                    if (J.length > 0)
                      for (var V = 0; V < J.length; V++) {
                        var Z = J[V],
                          Y = Z.innerHTML;
                        Z && Z.nodeType !== 3
                          ? ((Z.innerHTML = ""),
                            S.addEventToQueue(x, { node: Z, parentNode: B }),
                            N ? S.pasteString(Y, Z) : S.typeString(Y, Z))
                          : Z.textContent &&
                            (N
                              ? S.pasteString(Z.textContent, B)
                              : S.typeString(Z.textContent, B));
                      }
                    return S;
                  }),
                  K(this, "deleteAll", function () {
                    var w =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return S.addEventToQueue(_, { speed: w }), S;
                  }),
                  K(this, "changeDeleteSpeed", function (w) {
                    if (!w) throw new Error("Must provide new delete speed");
                    return S.addEventToQueue(k, { speed: w }), S;
                  }),
                  K(this, "changeDelay", function (w) {
                    if (!w) throw new Error("Must provide new delay");
                    return S.addEventToQueue(E, { delay: w }), S;
                  }),
                  K(this, "changeCursor", function (w) {
                    if (!w) throw new Error("Must provide new cursor");
                    return S.addEventToQueue(P, { cursor: w }), S;
                  }),
                  K(this, "deleteChars", function (w) {
                    if (!w)
                      throw new Error(
                        "Must provide amount of characters to delete"
                      );
                    for (var B = 0; B < w; B++) S.addEventToQueue(g);
                    return S;
                  }),
                  K(this, "callFunction", function (w, B) {
                    if (!w || typeof w != "function")
                      throw new Error("Callback must be a function");
                    return S.addEventToQueue(v, { cb: w, thisArg: B }), S;
                  }),
                  K(this, "typeCharacters", function (w) {
                    var B =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!w || !Array.isArray(w))
                      throw new Error("Characters must be an array");
                    return (
                      w.forEach(function (N) {
                        S.addEventToQueue(y, { character: N, node: B });
                      }),
                      S
                    );
                  }),
                  K(this, "removeCharacters", function (w) {
                    if (!w || !Array.isArray(w))
                      throw new Error("Characters must be an array");
                    return (
                      w.forEach(function () {
                        S.addEventToQueue(g);
                      }),
                      S
                    );
                  }),
                  K(this, "addEventToQueue", function (w, B) {
                    var N =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return S.addEventToStateProperty(w, B, N, "eventQueue");
                  }),
                  K(this, "addReverseCalledEvent", function (w, B) {
                    var N =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return S.options.loop
                      ? S.addEventToStateProperty(
                          w,
                          B,
                          N,
                          "reverseCalledEvents"
                        )
                      : S;
                  }),
                  K(this, "addEventToStateProperty", function (w, B) {
                    var N =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      J = arguments.length > 3 ? arguments[3] : void 0,
                      V = { eventName: w, eventArgs: B || {} };
                    return (
                      (S.state[J] = N
                        ? [V].concat(H(S.state[J]))
                        : [].concat(H(S.state[J]), [V])),
                      S
                    );
                  }),
                  K(this, "runEventLoop", function () {
                    S.state.lastFrameTime ||
                      (S.state.lastFrameTime = Date.now());
                    var w = Date.now(),
                      B = w - S.state.lastFrameTime;
                    if (!S.state.eventQueue.length) {
                      if (!S.options.loop) return;
                      (S.state.eventQueue = H(S.state.calledEvents)),
                        (S.state.calledEvents = []),
                        (S.options = A({}, S.state.initialOptions));
                    }
                    if (
                      ((S.state.eventLoop = p()(S.runEventLoop)),
                      !S.state.eventLoopPaused)
                    ) {
                      if (S.state.pauseUntil) {
                        if (w < S.state.pauseUntil) return;
                        S.state.pauseUntil = null;
                      }
                      var N,
                        J = H(S.state.eventQueue),
                        V = J.shift();
                      if (
                        !(
                          B <=
                          (N =
                            V.eventName === m || V.eventName === g
                              ? S.options.deleteSpeed === "natural"
                                ? h(40, 80)
                                : S.options.deleteSpeed
                              : S.options.delay === "natural"
                              ? h(120, 160)
                              : S.options.delay)
                        )
                      ) {
                        var Z = V.eventName,
                          Y = V.eventArgs;
                        switch (
                          (S.logInDevMode({
                            currentEvent: V,
                            state: S.state,
                            delay: N,
                          }),
                          Z)
                        ) {
                          case j:
                          case y:
                            var ce = Y.character,
                              ye = Y.node,
                              b = document.createTextNode(ce),
                              he = b;
                            S.options.onCreateTextNode &&
                              typeof S.options.onCreateTextNode == "function" &&
                              (he = S.options.onCreateTextNode(ce, b)),
                              he &&
                                (ye
                                  ? ye.appendChild(he)
                                  : S.state.elements.wrapper.appendChild(he)),
                              (S.state.visibleNodes = [].concat(
                                H(S.state.visibleNodes),
                                [{ type: "TEXT_NODE", character: ce, node: he }]
                              ));
                            break;
                          case g:
                            J.unshift({
                              eventName: m,
                              eventArgs: { removingCharacterNode: !0 },
                            });
                            break;
                          case f:
                            var te = V.eventArgs.ms;
                            S.state.pauseUntil = Date.now() + parseInt(te);
                            break;
                          case v:
                            var ge = V.eventArgs,
                              qt = ge.cb,
                              Se = ge.thisArg;
                            qt.call(Se, { elements: S.state.elements });
                            break;
                          case x:
                            var bt = V.eventArgs,
                              yt = bt.node,
                              Le = bt.parentNode;
                            Le
                              ? Le.appendChild(yt)
                              : S.state.elements.wrapper.appendChild(yt),
                              (S.state.visibleNodes = [].concat(
                                H(S.state.visibleNodes),
                                [
                                  {
                                    type: $,
                                    node: yt,
                                    parentNode: Le || S.state.elements.wrapper,
                                  },
                                ]
                              ));
                            break;
                          case _:
                            var X = S.state.visibleNodes,
                              le = Y.speed,
                              Ot = [];
                            le &&
                              Ot.push({
                                eventName: k,
                                eventArgs: { speed: le, temp: !0 },
                              });
                            for (var mn = 0, ft = X.length; mn < ft; mn++)
                              Ot.push({
                                eventName: m,
                                eventArgs: { removingCharacterNode: !1 },
                              });
                            le &&
                              Ot.push({
                                eventName: k,
                                eventArgs: {
                                  speed: S.options.deleteSpeed,
                                  temp: !0,
                                },
                              }),
                              J.unshift.apply(J, Ot);
                            break;
                          case m:
                            var Yf = V.eventArgs.removingCharacterNode;
                            if (S.state.visibleNodes.length) {
                              var Si = S.state.visibleNodes.pop(),
                                Gf = Si.type,
                                Br = Si.node,
                                Xf = Si.character;
                              S.options.onRemoveNode &&
                                typeof S.options.onRemoveNode == "function" &&
                                S.options.onRemoveNode({
                                  node: Br,
                                  character: Xf,
                                }),
                                Br && Br.parentNode.removeChild(Br),
                                Gf === $ &&
                                  Yf &&
                                  J.unshift({ eventName: m, eventArgs: {} });
                            }
                            break;
                          case k:
                            S.options.deleteSpeed = V.eventArgs.speed;
                            break;
                          case E:
                            S.options.delay = V.eventArgs.delay;
                            break;
                          case P:
                            (S.options.cursor = V.eventArgs.cursor),
                              (S.state.elements.cursor.innerHTML =
                                V.eventArgs.cursor);
                        }
                        S.options.loop &&
                          (V.eventName === m ||
                            (V.eventArgs && V.eventArgs.temp) ||
                            (S.state.calledEvents = [].concat(
                              H(S.state.calledEvents),
                              [V]
                            ))),
                          (S.state.eventQueue = J),
                          (S.state.lastFrameTime = w);
                      }
                    }
                  }),
                  C)
                )
                  if (typeof C == "string") {
                    var Q = document.querySelector(C);
                    if (!Q) throw new Error("Could not find container element");
                    this.state.elements.container = Q;
                  } else this.state.elements.container = C;
                I && (this.options = A(A({}, this.options), I)),
                  (this.state.initialOptions = A({}, this.options)),
                  this.init();
              }
              var T, U;
              return (
                (T = z),
                (U = [
                  {
                    key: "init",
                    value: function () {
                      var C, I;
                      this.setupWrapperElement(),
                        this.addEventToQueue(
                          P,
                          { cursor: this.options.cursor },
                          !0
                        ),
                        this.addEventToQueue(_, null, !0),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((C =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (I = document.createElement("style")).appendChild(
                            document.createTextNode(C)
                          ),
                          document.head.appendChild(I),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                        this.options.autoStart === !0 &&
                          this.options.strings &&
                          this.typeOutAllStrings().start();
                    },
                  },
                  {
                    key: "logInDevMode",
                    value: function (C) {
                      this.options.devMode && console.log(C);
                    },
                  },
                ]) && G(T.prototype, U),
                Object.defineProperty(T, "prototype", { writable: !1 }),
                z
              );
            })();
          },
          8552: (l, a, s) => {
            var c = s(852)(s(5639), "DataView");
            l.exports = c;
          },
          1989: (l, a, s) => {
            var c = s(1789),
              p = s(401),
              d = s(7667),
              h = s(1327),
              y = s(1866);
            function g(_) {
              var m = -1,
                f = _ == null ? 0 : _.length;
              for (this.clear(); ++m < f; ) {
                var v = _[m];
                this.set(v[0], v[1]);
              }
            }
            (g.prototype.clear = c),
              (g.prototype.delete = p),
              (g.prototype.get = d),
              (g.prototype.has = h),
              (g.prototype.set = y),
              (l.exports = g);
          },
          8407: (l, a, s) => {
            var c = s(7040),
              p = s(4125),
              d = s(2117),
              h = s(7518),
              y = s(4705);
            function g(_) {
              var m = -1,
                f = _ == null ? 0 : _.length;
              for (this.clear(); ++m < f; ) {
                var v = _[m];
                this.set(v[0], v[1]);
              }
            }
            (g.prototype.clear = c),
              (g.prototype.delete = p),
              (g.prototype.get = d),
              (g.prototype.has = h),
              (g.prototype.set = y),
              (l.exports = g);
          },
          7071: (l, a, s) => {
            var c = s(852)(s(5639), "Map");
            l.exports = c;
          },
          3369: (l, a, s) => {
            var c = s(4785),
              p = s(1285),
              d = s(6e3),
              h = s(9916),
              y = s(5265);
            function g(_) {
              var m = -1,
                f = _ == null ? 0 : _.length;
              for (this.clear(); ++m < f; ) {
                var v = _[m];
                this.set(v[0], v[1]);
              }
            }
            (g.prototype.clear = c),
              (g.prototype.delete = p),
              (g.prototype.get = d),
              (g.prototype.has = h),
              (g.prototype.set = y),
              (l.exports = g);
          },
          3818: (l, a, s) => {
            var c = s(852)(s(5639), "Promise");
            l.exports = c;
          },
          8525: (l, a, s) => {
            var c = s(852)(s(5639), "Set");
            l.exports = c;
          },
          8668: (l, a, s) => {
            var c = s(3369),
              p = s(619),
              d = s(2385);
            function h(y) {
              var g = -1,
                _ = y == null ? 0 : y.length;
              for (this.__data__ = new c(); ++g < _; ) this.add(y[g]);
            }
            (h.prototype.add = h.prototype.push = p),
              (h.prototype.has = d),
              (l.exports = h);
          },
          6384: (l, a, s) => {
            var c = s(8407),
              p = s(7465),
              d = s(3779),
              h = s(7599),
              y = s(4758),
              g = s(4309);
            function _(m) {
              var f = (this.__data__ = new c(m));
              this.size = f.size;
            }
            (_.prototype.clear = p),
              (_.prototype.delete = d),
              (_.prototype.get = h),
              (_.prototype.has = y),
              (_.prototype.set = g),
              (l.exports = _);
          },
          2705: (l, a, s) => {
            var c = s(5639).Symbol;
            l.exports = c;
          },
          1149: (l, a, s) => {
            var c = s(5639).Uint8Array;
            l.exports = c;
          },
          577: (l, a, s) => {
            var c = s(852)(s(5639), "WeakMap");
            l.exports = c;
          },
          4963: (l) => {
            l.exports = function (a, s) {
              for (
                var c = -1, p = a == null ? 0 : a.length, d = 0, h = [];
                ++c < p;

              ) {
                var y = a[c];
                s(y, c, a) && (h[d++] = y);
              }
              return h;
            };
          },
          4636: (l, a, s) => {
            var c = s(2545),
              p = s(5694),
              d = s(1469),
              h = s(4144),
              y = s(5776),
              g = s(6719),
              _ = Object.prototype.hasOwnProperty;
            l.exports = function (m, f) {
              var v = d(m),
                x = !v && p(m),
                k = !v && !x && h(m),
                E = !v && !x && !k && g(m),
                P = v || x || k || E,
                j = P ? c(m.length, String) : [],
                $ = j.length;
              for (var L in m)
                (!f && !_.call(m, L)) ||
                  (P &&
                    (L == "length" ||
                      (k && (L == "offset" || L == "parent")) ||
                      (E &&
                        (L == "buffer" ||
                          L == "byteLength" ||
                          L == "byteOffset")) ||
                      y(L, $))) ||
                  j.push(L);
              return j;
            };
          },
          2488: (l) => {
            l.exports = function (a, s) {
              for (var c = -1, p = s.length, d = a.length; ++c < p; )
                a[d + c] = s[c];
              return a;
            };
          },
          2908: (l) => {
            l.exports = function (a, s) {
              for (var c = -1, p = a == null ? 0 : a.length; ++c < p; )
                if (s(a[c], c, a)) return !0;
              return !1;
            };
          },
          8470: (l, a, s) => {
            var c = s(7813);
            l.exports = function (p, d) {
              for (var h = p.length; h--; ) if (c(p[h][0], d)) return h;
              return -1;
            };
          },
          8866: (l, a, s) => {
            var c = s(2488),
              p = s(1469);
            l.exports = function (d, h, y) {
              var g = h(d);
              return p(d) ? g : c(g, y(d));
            };
          },
          4239: (l, a, s) => {
            var c = s(2705),
              p = s(9607),
              d = s(2333),
              h = c ? c.toStringTag : void 0;
            l.exports = function (y) {
              return y == null
                ? y === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : h && h in Object(y)
                ? p(y)
                : d(y);
            };
          },
          9454: (l, a, s) => {
            var c = s(4239),
              p = s(7005);
            l.exports = function (d) {
              return p(d) && c(d) == "[object Arguments]";
            };
          },
          939: (l, a, s) => {
            var c = s(2492),
              p = s(7005);
            l.exports = function d(h, y, g, _, m) {
              return (
                h === y ||
                (h == null || y == null || (!p(h) && !p(y))
                  ? h != h && y != y
                  : c(h, y, g, _, d, m))
              );
            };
          },
          2492: (l, a, s) => {
            var c = s(6384),
              p = s(7114),
              d = s(8351),
              h = s(6096),
              y = s(4160),
              g = s(1469),
              _ = s(4144),
              m = s(6719),
              f = "[object Arguments]",
              v = "[object Array]",
              x = "[object Object]",
              k = Object.prototype.hasOwnProperty;
            l.exports = function (E, P, j, $, L, M) {
              var A = g(E),
                H = g(P),
                W = A ? v : y(E),
                G = H ? v : y(P),
                K = (W = W == f ? x : W) == x,
                oe = (G = G == f ? x : G) == x,
                R = W == G;
              if (R && _(E)) {
                if (!_(P)) return !1;
                (A = !0), (K = !1);
              }
              if (R && !K)
                return (
                  M || (M = new c()),
                  A || m(E) ? p(E, P, j, $, L, M) : d(E, P, W, j, $, L, M)
                );
              if (!(1 & j)) {
                var z = K && k.call(E, "__wrapped__"),
                  T = oe && k.call(P, "__wrapped__");
                if (z || T) {
                  var U = z ? E.value() : E,
                    C = T ? P.value() : P;
                  return M || (M = new c()), L(U, C, j, $, M);
                }
              }
              return !!R && (M || (M = new c()), h(E, P, j, $, L, M));
            };
          },
          8458: (l, a, s) => {
            var c = s(3560),
              p = s(5346),
              d = s(3218),
              h = s(346),
              y = /^\[object .+?Constructor\]$/,
              g = Function.prototype,
              _ = Object.prototype,
              m = g.toString,
              f = _.hasOwnProperty,
              v = RegExp(
                "^" +
                  m
                    .call(f)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              );
            l.exports = function (x) {
              return !(!d(x) || p(x)) && (c(x) ? v : y).test(h(x));
            };
          },
          8749: (l, a, s) => {
            var c = s(4239),
              p = s(1780),
              d = s(7005),
              h = {};
            (h["[object Float32Array]"] =
              h["[object Float64Array]"] =
              h["[object Int8Array]"] =
              h["[object Int16Array]"] =
              h["[object Int32Array]"] =
              h["[object Uint8Array]"] =
              h["[object Uint8ClampedArray]"] =
              h["[object Uint16Array]"] =
              h["[object Uint32Array]"] =
                !0),
              (h["[object Arguments]"] =
                h["[object Array]"] =
                h["[object ArrayBuffer]"] =
                h["[object Boolean]"] =
                h["[object DataView]"] =
                h["[object Date]"] =
                h["[object Error]"] =
                h["[object Function]"] =
                h["[object Map]"] =
                h["[object Number]"] =
                h["[object Object]"] =
                h["[object RegExp]"] =
                h["[object Set]"] =
                h["[object String]"] =
                h["[object WeakMap]"] =
                  !1),
              (l.exports = function (y) {
                return d(y) && p(y.length) && !!h[c(y)];
              });
          },
          280: (l, a, s) => {
            var c = s(5726),
              p = s(6916),
              d = Object.prototype.hasOwnProperty;
            l.exports = function (h) {
              if (!c(h)) return p(h);
              var y = [];
              for (var g in Object(h))
                d.call(h, g) && g != "constructor" && y.push(g);
              return y;
            };
          },
          2545: (l) => {
            l.exports = function (a, s) {
              for (var c = -1, p = Array(a); ++c < a; ) p[c] = s(c);
              return p;
            };
          },
          1717: (l) => {
            l.exports = function (a) {
              return function (s) {
                return a(s);
              };
            };
          },
          4757: (l) => {
            l.exports = function (a, s) {
              return a.has(s);
            };
          },
          4429: (l, a, s) => {
            var c = s(5639)["__core-js_shared__"];
            l.exports = c;
          },
          7114: (l, a, s) => {
            var c = s(8668),
              p = s(2908),
              d = s(4757);
            l.exports = function (h, y, g, _, m, f) {
              var v = 1 & g,
                x = h.length,
                k = y.length;
              if (x != k && !(v && k > x)) return !1;
              var E = f.get(h),
                P = f.get(y);
              if (E && P) return E == y && P == h;
              var j = -1,
                $ = !0,
                L = 2 & g ? new c() : void 0;
              for (f.set(h, y), f.set(y, h); ++j < x; ) {
                var M = h[j],
                  A = y[j];
                if (_) var H = v ? _(A, M, j, y, h, f) : _(M, A, j, h, y, f);
                if (H !== void 0) {
                  if (H) continue;
                  $ = !1;
                  break;
                }
                if (L) {
                  if (
                    !p(y, function (W, G) {
                      if (!d(L, G) && (M === W || m(M, W, g, _, f)))
                        return L.push(G);
                    })
                  ) {
                    $ = !1;
                    break;
                  }
                } else if (M !== A && !m(M, A, g, _, f)) {
                  $ = !1;
                  break;
                }
              }
              return f.delete(h), f.delete(y), $;
            };
          },
          8351: (l, a, s) => {
            var c = s(2705),
              p = s(1149),
              d = s(7813),
              h = s(7114),
              y = s(8776),
              g = s(1814),
              _ = c ? c.prototype : void 0,
              m = _ ? _.valueOf : void 0;
            l.exports = function (f, v, x, k, E, P, j) {
              switch (x) {
                case "[object DataView]":
                  if (
                    f.byteLength != v.byteLength ||
                    f.byteOffset != v.byteOffset
                  )
                    return !1;
                  (f = f.buffer), (v = v.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    f.byteLength != v.byteLength || !P(new p(f), new p(v))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return d(+f, +v);
                case "[object Error]":
                  return f.name == v.name && f.message == v.message;
                case "[object RegExp]":
                case "[object String]":
                  return f == v + "";
                case "[object Map]":
                  var $ = y;
                case "[object Set]":
                  var L = 1 & k;
                  if (($ || ($ = g), f.size != v.size && !L)) return !1;
                  var M = j.get(f);
                  if (M) return M == v;
                  (k |= 2), j.set(f, v);
                  var A = h($(f), $(v), k, E, P, j);
                  return j.delete(f), A;
                case "[object Symbol]":
                  if (m) return m.call(f) == m.call(v);
              }
              return !1;
            };
          },
          6096: (l, a, s) => {
            var c = s(8234),
              p = Object.prototype.hasOwnProperty;
            l.exports = function (d, h, y, g, _, m) {
              var f = 1 & y,
                v = c(d),
                x = v.length;
              if (x != c(h).length && !f) return !1;
              for (var k = x; k--; ) {
                var E = v[k];
                if (!(f ? E in h : p.call(h, E))) return !1;
              }
              var P = m.get(d),
                j = m.get(h);
              if (P && j) return P == h && j == d;
              var $ = !0;
              m.set(d, h), m.set(h, d);
              for (var L = f; ++k < x; ) {
                var M = d[(E = v[k])],
                  A = h[E];
                if (g) var H = f ? g(A, M, E, h, d, m) : g(M, A, E, d, h, m);
                if (!(H === void 0 ? M === A || _(M, A, y, g, m) : H)) {
                  $ = !1;
                  break;
                }
                L || (L = E == "constructor");
              }
              if ($ && !L) {
                var W = d.constructor,
                  G = h.constructor;
                W == G ||
                  !("constructor" in d) ||
                  !("constructor" in h) ||
                  (typeof W == "function" &&
                    W instanceof W &&
                    typeof G == "function" &&
                    G instanceof G) ||
                  ($ = !1);
              }
              return m.delete(d), m.delete(h), $;
            };
          },
          1957: (l, a, s) => {
            var c =
              typeof s.g == "object" && s.g && s.g.Object === Object && s.g;
            l.exports = c;
          },
          8234: (l, a, s) => {
            var c = s(8866),
              p = s(9551),
              d = s(3674);
            l.exports = function (h) {
              return c(h, d, p);
            };
          },
          5050: (l, a, s) => {
            var c = s(7019);
            l.exports = function (p, d) {
              var h = p.__data__;
              return c(d) ? h[typeof d == "string" ? "string" : "hash"] : h.map;
            };
          },
          852: (l, a, s) => {
            var c = s(8458),
              p = s(7801);
            l.exports = function (d, h) {
              var y = p(d, h);
              return c(y) ? y : void 0;
            };
          },
          9607: (l, a, s) => {
            var c = s(2705),
              p = Object.prototype,
              d = p.hasOwnProperty,
              h = p.toString,
              y = c ? c.toStringTag : void 0;
            l.exports = function (g) {
              var _ = d.call(g, y),
                m = g[y];
              try {
                g[y] = void 0;
                var f = !0;
              } catch {}
              var v = h.call(g);
              return f && (_ ? (g[y] = m) : delete g[y]), v;
            };
          },
          9551: (l, a, s) => {
            var c = s(4963),
              p = s(479),
              d = Object.prototype.propertyIsEnumerable,
              h = Object.getOwnPropertySymbols,
              y = h
                ? function (g) {
                    return g == null
                      ? []
                      : ((g = Object(g)),
                        c(h(g), function (_) {
                          return d.call(g, _);
                        }));
                  }
                : p;
            l.exports = y;
          },
          4160: (l, a, s) => {
            var c = s(8552),
              p = s(7071),
              d = s(3818),
              h = s(8525),
              y = s(577),
              g = s(4239),
              _ = s(346),
              m = "[object Map]",
              f = "[object Promise]",
              v = "[object Set]",
              x = "[object WeakMap]",
              k = "[object DataView]",
              E = _(c),
              P = _(p),
              j = _(d),
              $ = _(h),
              L = _(y),
              M = g;
            ((c && M(new c(new ArrayBuffer(1))) != k) ||
              (p && M(new p()) != m) ||
              (d && M(d.resolve()) != f) ||
              (h && M(new h()) != v) ||
              (y && M(new y()) != x)) &&
              (M = function (A) {
                var H = g(A),
                  W = H == "[object Object]" ? A.constructor : void 0,
                  G = W ? _(W) : "";
                if (G)
                  switch (G) {
                    case E:
                      return k;
                    case P:
                      return m;
                    case j:
                      return f;
                    case $:
                      return v;
                    case L:
                      return x;
                  }
                return H;
              }),
              (l.exports = M);
          },
          7801: (l) => {
            l.exports = function (a, s) {
              return a == null ? void 0 : a[s];
            };
          },
          1789: (l, a, s) => {
            var c = s(4536);
            l.exports = function () {
              (this.__data__ = c ? c(null) : {}), (this.size = 0);
            };
          },
          401: (l) => {
            l.exports = function (a) {
              var s = this.has(a) && delete this.__data__[a];
              return (this.size -= s ? 1 : 0), s;
            };
          },
          7667: (l, a, s) => {
            var c = s(4536),
              p = Object.prototype.hasOwnProperty;
            l.exports = function (d) {
              var h = this.__data__;
              if (c) {
                var y = h[d];
                return y === "__lodash_hash_undefined__" ? void 0 : y;
              }
              return p.call(h, d) ? h[d] : void 0;
            };
          },
          1327: (l, a, s) => {
            var c = s(4536),
              p = Object.prototype.hasOwnProperty;
            l.exports = function (d) {
              var h = this.__data__;
              return c ? h[d] !== void 0 : p.call(h, d);
            };
          },
          1866: (l, a, s) => {
            var c = s(4536);
            l.exports = function (p, d) {
              var h = this.__data__;
              return (
                (this.size += this.has(p) ? 0 : 1),
                (h[p] = c && d === void 0 ? "__lodash_hash_undefined__" : d),
                this
              );
            };
          },
          5776: (l) => {
            var a = /^(?:0|[1-9]\d*)$/;
            l.exports = function (s, c) {
              var p = typeof s;
              return (
                !!(c = c ?? 9007199254740991) &&
                (p == "number" || (p != "symbol" && a.test(s))) &&
                s > -1 &&
                s % 1 == 0 &&
                s < c
              );
            };
          },
          7019: (l) => {
            l.exports = function (a) {
              var s = typeof a;
              return s == "string" ||
                s == "number" ||
                s == "symbol" ||
                s == "boolean"
                ? a !== "__proto__"
                : a === null;
            };
          },
          5346: (l, a, s) => {
            var c,
              p = s(4429),
              d = (c = /[^.]+$/.exec((p && p.keys && p.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + c
                : "";
            l.exports = function (h) {
              return !!d && d in h;
            };
          },
          5726: (l) => {
            var a = Object.prototype;
            l.exports = function (s) {
              var c = s && s.constructor;
              return s === ((typeof c == "function" && c.prototype) || a);
            };
          },
          7040: (l) => {
            l.exports = function () {
              (this.__data__ = []), (this.size = 0);
            };
          },
          4125: (l, a, s) => {
            var c = s(8470),
              p = Array.prototype.splice;
            l.exports = function (d) {
              var h = this.__data__,
                y = c(h, d);
              return !(
                y < 0 ||
                (y == h.length - 1 ? h.pop() : p.call(h, y, 1), --this.size, 0)
              );
            };
          },
          2117: (l, a, s) => {
            var c = s(8470);
            l.exports = function (p) {
              var d = this.__data__,
                h = c(d, p);
              return h < 0 ? void 0 : d[h][1];
            };
          },
          7518: (l, a, s) => {
            var c = s(8470);
            l.exports = function (p) {
              return c(this.__data__, p) > -1;
            };
          },
          4705: (l, a, s) => {
            var c = s(8470);
            l.exports = function (p, d) {
              var h = this.__data__,
                y = c(h, p);
              return (
                y < 0 ? (++this.size, h.push([p, d])) : (h[y][1] = d), this
              );
            };
          },
          4785: (l, a, s) => {
            var c = s(1989),
              p = s(8407),
              d = s(7071);
            l.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new c(),
                  map: new (d || p)(),
                  string: new c(),
                });
            };
          },
          1285: (l, a, s) => {
            var c = s(5050);
            l.exports = function (p) {
              var d = c(this, p).delete(p);
              return (this.size -= d ? 1 : 0), d;
            };
          },
          6e3: (l, a, s) => {
            var c = s(5050);
            l.exports = function (p) {
              return c(this, p).get(p);
            };
          },
          9916: (l, a, s) => {
            var c = s(5050);
            l.exports = function (p) {
              return c(this, p).has(p);
            };
          },
          5265: (l, a, s) => {
            var c = s(5050);
            l.exports = function (p, d) {
              var h = c(this, p),
                y = h.size;
              return h.set(p, d), (this.size += h.size == y ? 0 : 1), this;
            };
          },
          8776: (l) => {
            l.exports = function (a) {
              var s = -1,
                c = Array(a.size);
              return (
                a.forEach(function (p, d) {
                  c[++s] = [d, p];
                }),
                c
              );
            };
          },
          4536: (l, a, s) => {
            var c = s(852)(Object, "create");
            l.exports = c;
          },
          6916: (l, a, s) => {
            var c = s(5569)(Object.keys, Object);
            l.exports = c;
          },
          1167: (l, a, s) => {
            l = s.nmd(l);
            var c = s(1957),
              p = a && !a.nodeType && a,
              d = p && l && !l.nodeType && l,
              h = d && d.exports === p && c.process,
              y = (function () {
                try {
                  return (
                    (d && d.require && d.require("util").types) ||
                    (h && h.binding && h.binding("util"))
                  );
                } catch {}
              })();
            l.exports = y;
          },
          2333: (l) => {
            var a = Object.prototype.toString;
            l.exports = function (s) {
              return a.call(s);
            };
          },
          5569: (l) => {
            l.exports = function (a, s) {
              return function (c) {
                return a(s(c));
              };
            };
          },
          5639: (l, a, s) => {
            var c = s(1957),
              p =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
              d = c || p || Function("return this")();
            l.exports = d;
          },
          619: (l) => {
            l.exports = function (a) {
              return this.__data__.set(a, "__lodash_hash_undefined__"), this;
            };
          },
          2385: (l) => {
            l.exports = function (a) {
              return this.__data__.has(a);
            };
          },
          1814: (l) => {
            l.exports = function (a) {
              var s = -1,
                c = Array(a.size);
              return (
                a.forEach(function (p) {
                  c[++s] = p;
                }),
                c
              );
            };
          },
          7465: (l, a, s) => {
            var c = s(8407);
            l.exports = function () {
              (this.__data__ = new c()), (this.size = 0);
            };
          },
          3779: (l) => {
            l.exports = function (a) {
              var s = this.__data__,
                c = s.delete(a);
              return (this.size = s.size), c;
            };
          },
          7599: (l) => {
            l.exports = function (a) {
              return this.__data__.get(a);
            };
          },
          4758: (l) => {
            l.exports = function (a) {
              return this.__data__.has(a);
            };
          },
          4309: (l, a, s) => {
            var c = s(8407),
              p = s(7071),
              d = s(3369);
            l.exports = function (h, y) {
              var g = this.__data__;
              if (g instanceof c) {
                var _ = g.__data__;
                if (!p || _.length < 199)
                  return _.push([h, y]), (this.size = ++g.size), this;
                g = this.__data__ = new d(_);
              }
              return g.set(h, y), (this.size = g.size), this;
            };
          },
          346: (l) => {
            var a = Function.prototype.toString;
            l.exports = function (s) {
              if (s != null) {
                try {
                  return a.call(s);
                } catch {}
                try {
                  return s + "";
                } catch {}
              }
              return "";
            };
          },
          7813: (l) => {
            l.exports = function (a, s) {
              return a === s || (a != a && s != s);
            };
          },
          5694: (l, a, s) => {
            var c = s(9454),
              p = s(7005),
              d = Object.prototype,
              h = d.hasOwnProperty,
              y = d.propertyIsEnumerable,
              g = c(
                (function () {
                  return arguments;
                })()
              )
                ? c
                : function (_) {
                    return p(_) && h.call(_, "callee") && !y.call(_, "callee");
                  };
            l.exports = g;
          },
          1469: (l) => {
            var a = Array.isArray;
            l.exports = a;
          },
          8612: (l, a, s) => {
            var c = s(3560),
              p = s(1780);
            l.exports = function (d) {
              return d != null && p(d.length) && !c(d);
            };
          },
          4144: (l, a, s) => {
            l = s.nmd(l);
            var c = s(5639),
              p = s(5062),
              d = a && !a.nodeType && a,
              h = d && l && !l.nodeType && l,
              y = h && h.exports === d ? c.Buffer : void 0,
              g = (y ? y.isBuffer : void 0) || p;
            l.exports = g;
          },
          8446: (l, a, s) => {
            var c = s(939);
            l.exports = function (p, d) {
              return c(p, d);
            };
          },
          3560: (l, a, s) => {
            var c = s(4239),
              p = s(3218);
            l.exports = function (d) {
              if (!p(d)) return !1;
              var h = c(d);
              return (
                h == "[object Function]" ||
                h == "[object GeneratorFunction]" ||
                h == "[object AsyncFunction]" ||
                h == "[object Proxy]"
              );
            };
          },
          1780: (l) => {
            l.exports = function (a) {
              return (
                typeof a == "number" &&
                a > -1 &&
                a % 1 == 0 &&
                a <= 9007199254740991
              );
            };
          },
          3218: (l) => {
            l.exports = function (a) {
              var s = typeof a;
              return a != null && (s == "object" || s == "function");
            };
          },
          7005: (l) => {
            l.exports = function (a) {
              return a != null && typeof a == "object";
            };
          },
          6719: (l, a, s) => {
            var c = s(8749),
              p = s(1717),
              d = s(1167),
              h = d && d.isTypedArray,
              y = h ? p(h) : c;
            l.exports = y;
          },
          3674: (l, a, s) => {
            var c = s(4636),
              p = s(280),
              d = s(8612);
            l.exports = function (h) {
              return d(h) ? c(h) : p(h);
            };
          },
          479: (l) => {
            l.exports = function () {
              return [];
            };
          },
          5062: (l) => {
            l.exports = function () {
              return !1;
            };
          },
          75: function (l) {
            (function () {
              var a, s, c, p, d, h;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (l.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                ? ((l.exports = function () {
                    return (a() - d) / 1e6;
                  }),
                  (s = process.hrtime),
                  (p = (a = function () {
                    var y;
                    return 1e9 * (y = s())[0] + y[1];
                  })()),
                  (h = 1e9 * process.uptime()),
                  (d = p - h))
                : Date.now
                ? ((l.exports = function () {
                    return Date.now() - c;
                  }),
                  (c = Date.now()))
                : ((l.exports = function () {
                    return new Date().getTime() - c;
                  }),
                  (c = new Date().getTime()));
            }).call(this);
          },
          4087: (l, a, s) => {
            for (
              var c = s(75),
                p = typeof window > "u" ? s.g : window,
                d = ["moz", "webkit"],
                h = "AnimationFrame",
                y = p["request" + h],
                g = p["cancel" + h] || p["cancelRequest" + h],
                _ = 0;
              !y && _ < d.length;
              _++
            )
              (y = p[d[_] + "Request" + h]),
                (g = p[d[_] + "Cancel" + h] || p[d[_] + "CancelRequest" + h]);
            if (!y || !g) {
              var m = 0,
                f = 0,
                v = [];
              (y = function (x) {
                if (v.length === 0) {
                  var k = c(),
                    E = Math.max(0, 16.666666666666668 - (k - m));
                  (m = E + k),
                    setTimeout(function () {
                      var P = v.slice(0);
                      v.length = 0;
                      for (var j = 0; j < P.length; j++)
                        if (!P[j].cancelled)
                          try {
                            P[j].callback(m);
                          } catch ($) {
                            setTimeout(function () {
                              throw $;
                            }, 0);
                          }
                    }, Math.round(E));
                }
                return v.push({ handle: ++f, callback: x, cancelled: !1 }), f;
              }),
                (g = function (x) {
                  for (var k = 0; k < v.length; k++)
                    v[k].handle === x && (v[k].cancelled = !0);
                });
            }
            (l.exports = function (x) {
              return y.call(p, x);
            }),
              (l.exports.cancel = function () {
                g.apply(p, arguments);
              }),
              (l.exports.polyfill = function (x) {
                x || (x = p),
                  (x.requestAnimationFrame = y),
                  (x.cancelAnimationFrame = g);
              });
          },
          8156: (l) => {
            l.exports = n;
          },
        },
        o = {};
      function i(l) {
        var a = o[l];
        if (a !== void 0) return a.exports;
        var s = (o[l] = { id: l, loaded: !1, exports: {} });
        return (
          r[l].call(s.exports, s, s.exports, i), (s.loaded = !0), s.exports
        );
      }
      (i.n = (l) => {
        var a = l && l.__esModule ? () => l.default : () => l;
        return i.d(a, { a }), a;
      }),
        (i.d = (l, a) => {
          for (var s in a)
            i.o(a, s) &&
              !i.o(l, s) &&
              Object.defineProperty(l, s, { enumerable: !0, get: a[s] });
        }),
        (i.g = (function () {
          if (typeof globalThis == "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        })()),
        (i.o = (l, a) => Object.prototype.hasOwnProperty.call(l, a)),
        (i.nmd = (l) => ((l.paths = []), l.children || (l.children = []), l));
      var u = {};
      return (
        (() => {
          i.d(u, { default: () => v });
          var l = i(8156),
            a = i.n(l),
            s = i(7403),
            c = i(8446),
            p = i.n(c);
          function d(x) {
            return (
              (d =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (k) {
                      return typeof k;
                    }
                  : function (k) {
                      return k &&
                        typeof Symbol == "function" &&
                        k.constructor === Symbol &&
                        k !== Symbol.prototype
                        ? "symbol"
                        : typeof k;
                    }),
              d(x)
            );
          }
          function h(x, k) {
            for (var E = 0; E < k.length; E++) {
              var P = k[E];
              (P.enumerable = P.enumerable || !1),
                (P.configurable = !0),
                "value" in P && (P.writable = !0),
                Object.defineProperty(x, m(P.key), P);
            }
          }
          function y(x, k) {
            return (
              (y = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (E, P) {
                    return (E.__proto__ = P), E;
                  }),
              y(x, k)
            );
          }
          function g(x) {
            if (x === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return x;
          }
          function _(x) {
            return (
              (_ = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (k) {
                    return k.__proto__ || Object.getPrototypeOf(k);
                  }),
              _(x)
            );
          }
          function m(x) {
            var k = (function (E, P) {
              if (d(E) !== "object" || E === null) return E;
              var j = E[Symbol.toPrimitive];
              if (j !== void 0) {
                var $ = j.call(E, "string");
                if (d($) !== "object") return $;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(E);
            })(x);
            return d(k) === "symbol" ? k : String(k);
          }
          var f = (function (x) {
            (function (M, A) {
              if (typeof A != "function" && A !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (M.prototype = Object.create(A && A.prototype, {
                constructor: { value: M, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(M, "prototype", { writable: !1 }),
                A && y(M, A);
            })(L, x);
            var k,
              E,
              P,
              j,
              $ =
                ((P = L),
                (j = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var M,
                    A = _(P);
                  if (j) {
                    var H = _(this).constructor;
                    M = Reflect.construct(A, arguments, H);
                  } else M = A.apply(this, arguments);
                  return (function (W, G) {
                    if (G && (d(G) === "object" || typeof G == "function"))
                      return G;
                    if (G !== void 0)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return g(W);
                  })(this, M);
                });
            function L() {
              var M, A, H, W;
              (function (R, z) {
                if (!(R instanceof z))
                  throw new TypeError("Cannot call a class as a function");
              })(this, L);
              for (
                var G = arguments.length, K = new Array(G), oe = 0;
                oe < G;
                oe++
              )
                K[oe] = arguments[oe];
              return (
                (A = g((M = $.call.apply($, [this].concat(K))))),
                (W = { instance: null }),
                (H = m((H = "state"))) in A
                  ? Object.defineProperty(A, H, {
                      value: W,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (A[H] = W),
                M
              );
            }
            return (
              (k = L),
              (E = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var M = this,
                      A = new s.default(this.typewriter, this.props.options);
                    this.setState({ instance: A }, function () {
                      var H = M.props.onInit;
                      H && H(A);
                    });
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (M) {
                    p()(this.props.options, M.options) ||
                      this.setState({
                        instance: new s.default(
                          this.typewriter,
                          this.props.options
                        ),
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.instance && this.state.instance.stop();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var M = this,
                      A = this.props.component;
                    return a().createElement(A, {
                      ref: function (H) {
                        return (M.typewriter = H);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper",
                    });
                  },
                },
              ]) && h(k.prototype, E),
              Object.defineProperty(k, "prototype", { writable: !1 }),
              L
            );
          })(l.Component);
          f.defaultProps = { component: "div" };
          const v = f;
        })(),
        u.default
      );
    })()
  );
})(Lf);
var kh = Lf.exports;
const _h = Xl(kh);
function io({ image: e, title: t, description: n, ...r }) {
  return D.jsxs("section", {
    ...r,
    className:
      "min-h-80 flex flex-col justify-center items-center w-48 text-xs bg-black bg-opacity-30 p-4 rounded-md gap-4",
    children: [
      D.jsx("h1", { className: "text-2xl", children: t }),
      D.jsx("img", {
        className: "w-[20rem] h-[5rem] rounded-lg",
        src: e,
        alt: "Project Card Image",
      }),
      D.jsx("p", { className: "font-normal", children: n }),
    ],
  });
}
function Eh() {
  return D.jsx(D.Fragment, {
    children: D.jsxs("section", {
      className:
        "grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center bg-amber-600 bg-opacity-50 p-8 rounded-md",
      children: [
        D.jsx(io, {
          title: "This Bio.",
          image:
            "https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/i9lh8pow.png",
          description:
            "I used this bio as a test of a sort, to see if could create a fully mobile responsive website, that users could enjoy to go to.",
        }),
        D.jsx(io, {
          title: "Tic-Tac-Toe",
          image:
            "https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/3v4yuxsy.png",
          description:
            "I built this app to learn how to render lists on screens, and how to use React State, user input and 2 day binding, and more things I cannot remember.",
        }),
        D.jsx(io, {
          title: "About React Demo",
          image:
            "https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/1k9h22wo.png",
          description:
            "I bult this when I was originally starting off with React, to learn how to use components, and the really learning the fundementals of React.",
        }),
        D.jsx(io, {
          title: "Minecraft Server.",
          image:
            "https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/kc4l76w1.png",
          description:
            "I run a minecraft server for fun with my friends, and seting this up taught me about VPS's and how to use a server in general.",
        }),
      ],
    }),
  });
}
function Ch() {
  return D.jsxs(D.Fragment, {
    children: [
      D.jsxs("section", {
        id: "opChange hey-man-why-you-looking",
        className:
          "flex flex-col pt-8 items-center  gap-4 text-white text-center mt-8 text-6xl bg-amber-700 bg-opacity-50 rounded-2xl w-full md:max-w-[50%] md:min-h-[80dvh] m-auto pl-8 pr-8",
        children: [
          D.jsxs("h1", {
            className: "font-black",
            children: [
              "Hi, I'm",
              " ",
              D.jsx("span", {
                className:
                  " hover:animate-pulse text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text",
                children: "RobinTT",
              }),
            ],
          }),
          D.jsx("img", {
            className:
              "hover:scale-125 ease-out active:scale-75 w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-amber-600 select-none",
            src: zf,
            alt: "img",
            draggable: "false",
            id: "hey-man-why-you-looking",
          }),
          D.jsx("span", {
            className:
              "text-xs md:text-base max-w-[100%] md:max-w-[80%] bg-black p-4 rounded-3xl border-4 border-amber-600",
            children: D.jsx(_h, {
              options: {
                strings: [
                  "I am passionately dedicated to acquiring proficiency in a multitude of programming languages and frameworks, driven by my ultimate goal of creating software that resonates with and benefits people. I firmly believe that the versatility offered by various languages and frameworks is the key to addressing diverse challenges and catering to the unique needs of users, motivating me to explore this ever-evolving landscape continually.",
                ],
                delay: 30,
                autoStart: !0,
                loop: !0,
                deleteSpeed: 69e6,
                cursorClassName: "text-amber-500 animate-pulse",
              },
            }),
          }),
          D.jsxs("section", {
            id: "lefty",
            className: "text-center",
            children: [
              D.jsx("h1", {
                className: "font-black text-[50%]",
                children:
                  "These are the languages/frameworks I know or am learning.",
              }),
              D.jsx(gt, {
                link: "https://react.dev",
                src: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
              }),
              D.jsx(gt, {
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                src: "https://www.svgrepo.com/show/303263/css3-logo.svg",
              }),
              D.jsx(gt, {
                link: "https://html.com",
                src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
              }),
              D.jsx(gt, {
                link: "https://tailwindcss.com",
                src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
              }),
              D.jsx(gt, {
                link: "https://www.javascript.com/",
                src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
              }),
            ],
          }),
          D.jsxs("section", {
            id: "righty",
            className: "font-black text-[50%] text-center",
            children: [
              D.jsx("h1", { children: "These are some tools I use." }),
              D.jsx(gt, {
                link: "https://vitejs.dev",
                src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
              }),
              D.jsx(gt, {
                link: "https://code.visualstudio.com",
                src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
              }),
              D.jsx(gt, {
                link: "https://namecheap.com",
                src: "https://cdn.worldvectorlogo.com/logos/namecheap.svg",
              }),
              D.jsx(gt, {
                link: "https://e-z.gg",
                src: "https://r2.e-z.host/eztransparent.png",
              }),
            ],
          }),
        ],
      }),
      D.jsx("div", {
        id: "projects",
        children: D.jsxs("section", {
          className:
            "flex flex-col gap-2 justify-center items-center text-white text-center text-4xl font-black mt-4 mb-4",
          children: [
            D.jsx("h1", {
              className:
                "text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text",
              children: "Here are some of my projects:",
            }),
            D.jsx(Eh, {}),
          ],
        }),
      }),
    ],
  });
}
const Ph =
  "https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/jtwq9jyo.mp3";
var jh = (function () {
    function e(t) {
      var n = t.elementId,
        r = t.idleAnimation,
        o = t.index,
        i = t.size,
        u = t.trailCount;
      (this.lockX = 0), (this.lockY = 0), (this.angleX = 0), (this.angleY = 0);
      var l = document.getElementById(n);
      (this.index = o),
        (this.trailCount = u),
        (this.size = i),
        (this.x = 0),
        (this.y = 0),
        (this.idleAnimation = r),
        (this.angleSpeed = 1 / u),
        (this.scale = 1 - (1 / u) * o),
        (this.trail = document.createElement("span")),
        (this.range = i / 2 - (i / 2) * this.scale + 2),
        (this.trail.style.transform =
          this.index > 0
            ? "scale(".concat(this.scale, ", ").concat(this.scale, ")")
            : ""),
        l == null || l.appendChild(this.trail);
    }
    return (
      (e.prototype.lock = function () {
        (this.lockX = this.x),
          (this.lockY = this.y),
          (this.angleX = 2 * Math.PI * Math.random()),
          (this.angleY = 2 * Math.PI * Math.random());
      }),
      (e.prototype.draw = function (t, n) {
        this.idleAnimation &&
          t &&
          this.index >= this.trailCount - n &&
          ((this.angleX += this.angleSpeed),
          (this.angleY += this.angleSpeed),
          (this.y = this.lockY + Math.sin(this.angleY) * this.range),
          (this.x = this.lockX + Math.sin(this.angleX) * this.range)),
          (this.trail.style.top = "".concat(this.y - this.size / 2, "px")),
          (this.trail.style.left = "".concat(this.x - this.size / 2, "px"));
      }),
      e
    );
  })(),
  Rf = { exports: {} },
  re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ce = typeof Symbol == "function" && Symbol.for,
  Vu = Ce ? Symbol.for("react.element") : 60103,
  Wu = Ce ? Symbol.for("react.portal") : 60106,
  ci = Ce ? Symbol.for("react.fragment") : 60107,
  fi = Ce ? Symbol.for("react.strict_mode") : 60108,
  di = Ce ? Symbol.for("react.profiler") : 60114,
  pi = Ce ? Symbol.for("react.provider") : 60109,
  hi = Ce ? Symbol.for("react.context") : 60110,
  Qu = Ce ? Symbol.for("react.async_mode") : 60111,
  mi = Ce ? Symbol.for("react.concurrent_mode") : 60111,
  vi = Ce ? Symbol.for("react.forward_ref") : 60112,
  yi = Ce ? Symbol.for("react.suspense") : 60113,
  Th = Ce ? Symbol.for("react.suspense_list") : 60120,
  gi = Ce ? Symbol.for("react.memo") : 60115,
  wi = Ce ? Symbol.for("react.lazy") : 60116,
  Nh = Ce ? Symbol.for("react.block") : 60121,
  Oh = Ce ? Symbol.for("react.fundamental") : 60117,
  Ah = Ce ? Symbol.for("react.responder") : 60118,
  zh = Ce ? Symbol.for("react.scope") : 60119;
function Ze(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vu:
        switch (((e = e.type), e)) {
          case Qu:
          case mi:
          case ci:
          case di:
          case fi:
          case yi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hi:
              case vi:
              case wi:
              case gi:
              case pi:
                return e;
              default:
                return t;
            }
        }
      case Wu:
        return t;
    }
  }
}
function If(e) {
  return Ze(e) === mi;
}
re.AsyncMode = Qu;
re.ConcurrentMode = mi;
re.ContextConsumer = hi;
re.ContextProvider = pi;
re.Element = Vu;
re.ForwardRef = vi;
re.Fragment = ci;
re.Lazy = wi;
re.Memo = gi;
re.Portal = Wu;
re.Profiler = di;
re.StrictMode = fi;
re.Suspense = yi;
re.isAsyncMode = function (e) {
  return If(e) || Ze(e) === Qu;
};
re.isConcurrentMode = If;
re.isContextConsumer = function (e) {
  return Ze(e) === hi;
};
re.isContextProvider = function (e) {
  return Ze(e) === pi;
};
re.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vu;
};
re.isForwardRef = function (e) {
  return Ze(e) === vi;
};
re.isFragment = function (e) {
  return Ze(e) === ci;
};
re.isLazy = function (e) {
  return Ze(e) === wi;
};
re.isMemo = function (e) {
  return Ze(e) === gi;
};
re.isPortal = function (e) {
  return Ze(e) === Wu;
};
re.isProfiler = function (e) {
  return Ze(e) === di;
};
re.isStrictMode = function (e) {
  return Ze(e) === fi;
};
re.isSuspense = function (e) {
  return Ze(e) === yi;
};
re.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ci ||
    e === mi ||
    e === di ||
    e === fi ||
    e === yi ||
    e === Th ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === wi ||
        e.$$typeof === gi ||
        e.$$typeof === pi ||
        e.$$typeof === hi ||
        e.$$typeof === vi ||
        e.$$typeof === Oh ||
        e.$$typeof === Ah ||
        e.$$typeof === zh ||
        e.$$typeof === Nh))
  );
};
re.typeOf = Ze;
Rf.exports = re;
var Yu = Rf.exports;
function Lh(e) {
  function t(C, I, S, Q, w) {
    for (
      var B = 0,
        N = 0,
        J = 0,
        V = 0,
        Z,
        Y,
        ce = 0,
        ye = 0,
        b,
        he = (b = Z = 0),
        te = 0,
        ge = 0,
        qt = 0,
        Se = 0,
        bt = S.length,
        yt = bt - 1,
        Le,
        X = "",
        le = "",
        Ot = "",
        mn = "",
        ft;
      te < bt;

    ) {
      if (
        ((Y = S.charCodeAt(te)),
        te === yt &&
          N + V + J + B !== 0 &&
          (N !== 0 && (Y = N === 47 ? 10 : 47), (V = J = B = 0), bt++, yt++),
        N + V + J + B === 0)
      ) {
        if (
          te === yt &&
          (0 < ge && (X = X.replace(d, "")), 0 < X.trim().length)
        ) {
          switch (Y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += S.charAt(te);
          }
          Y = 59;
        }
        switch (Y) {
          case 123:
            for (
              X = X.trim(), Z = X.charCodeAt(0), b = 1, Se = ++te;
              te < bt;

            ) {
              switch ((Y = S.charCodeAt(te))) {
                case 123:
                  b++;
                  break;
                case 125:
                  b--;
                  break;
                case 47:
                  switch ((Y = S.charCodeAt(te + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (he = te + 1; he < yt; ++he)
                          switch (S.charCodeAt(he)) {
                            case 47:
                              if (
                                Y === 42 &&
                                S.charCodeAt(he - 1) === 42 &&
                                te + 2 !== he
                              ) {
                                te = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Y === 47) {
                                te = he + 1;
                                break e;
                              }
                          }
                        te = he;
                      }
                  }
                  break;
                case 91:
                  Y++;
                case 40:
                  Y++;
                case 34:
                case 39:
                  for (; te++ < yt && S.charCodeAt(te) !== Y; );
              }
              if (b === 0) break;
              te++;
            }
            switch (
              ((b = S.substring(Se, te)),
              Z === 0 && (Z = (X = X.replace(p, "").trim()).charCodeAt(0)),
              Z)
            ) {
              case 64:
                switch (
                  (0 < ge && (X = X.replace(d, "")), (Y = X.charCodeAt(1)), Y)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ge = I;
                    break;
                  default:
                    ge = K;
                }
                if (
                  ((b = t(I, ge, b, Y, w + 1)),
                  (Se = b.length),
                  0 < R &&
                    ((ge = n(K, X, qt)),
                    (ft = l(3, b, ge, I, H, A, Se, Y, w, Q)),
                    (X = ge.join("")),
                    ft !== void 0 &&
                      (Se = (b = ft.trim()).length) === 0 &&
                      ((Y = 0), (b = ""))),
                  0 < Se)
                )
                  switch (Y) {
                    case 115:
                      X = X.replace(E, u);
                    case 100:
                    case 109:
                    case 45:
                      b = X + "{" + b + "}";
                      break;
                    case 107:
                      (X = X.replace(f, "$1 $2")),
                        (b = X + "{" + b + "}"),
                        (b =
                          G === 1 || (G === 2 && i("@" + b, 3))
                            ? "@-webkit-" + b + "@" + b
                            : "@" + b);
                      break;
                    default:
                      (b = X + b), Q === 112 && (b = ((le += b), ""));
                  }
                else b = "";
                break;
              default:
                b = t(I, n(I, X, qt), b, Q, w + 1);
            }
            (Ot += b),
              (b = qt = ge = he = Z = 0),
              (X = ""),
              (Y = S.charCodeAt(++te));
            break;
          case 125:
          case 59:
            if (
              ((X = (0 < ge ? X.replace(d, "") : X).trim()),
              1 < (Se = X.length))
            )
              switch (
                (he === 0 &&
                  ((Z = X.charCodeAt(0)), Z === 45 || (96 < Z && 123 > Z)) &&
                  (Se = (X = X.replace(" ", ":")).length),
                0 < R &&
                  (ft = l(1, X, I, C, H, A, le.length, Q, w, Q)) !== void 0 &&
                  (Se = (X = ft.trim()).length) === 0 &&
                  (X = "\0\0"),
                (Z = X.charCodeAt(0)),
                (Y = X.charCodeAt(1)),
                Z)
              ) {
                case 0:
                  break;
                case 64:
                  if (Y === 105 || Y === 99) {
                    mn += X + S.charAt(te);
                    break;
                  }
                default:
                  X.charCodeAt(Se - 1) !== 58 &&
                    (le += o(X, Z, Y, X.charCodeAt(2)));
              }
            (qt = ge = he = Z = 0), (X = ""), (Y = S.charCodeAt(++te));
        }
      }
      switch (Y) {
        case 13:
        case 10:
          N === 47
            ? (N = 0)
            : 1 + Z === 0 &&
              Q !== 107 &&
              0 < X.length &&
              ((ge = 1), (X += "\0")),
            0 < R * T && l(0, X, I, C, H, A, le.length, Q, w, Q),
            (A = 1),
            H++;
          break;
        case 59:
        case 125:
          if (N + V + J + B === 0) {
            A++;
            break;
          }
        default:
          switch ((A++, (Le = S.charAt(te)), Y)) {
            case 9:
            case 32:
              if (V + B + N === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Le = "";
                    break;
                  default:
                    Y !== 32 && (Le = " ");
                }
              break;
            case 0:
              Le = "\\0";
              break;
            case 12:
              Le = "\\f";
              break;
            case 11:
              Le = "\\v";
              break;
            case 38:
              V + N + B === 0 && ((ge = qt = 1), (Le = "\f" + Le));
              break;
            case 108:
              if (V + N + B + W === 0 && 0 < he)
                switch (te - he) {
                  case 2:
                    ce === 112 && S.charCodeAt(te - 3) === 58 && (W = ce);
                  case 8:
                    ye === 111 && (W = ye);
                }
              break;
            case 58:
              V + N + B === 0 && (he = te);
              break;
            case 44:
              N + J + V + B === 0 && ((ge = 1), (Le += "\r"));
              break;
            case 34:
            case 39:
              N === 0 && (V = V === Y ? 0 : V === 0 ? Y : V);
              break;
            case 91:
              V + N + J === 0 && B++;
              break;
            case 93:
              V + N + J === 0 && B--;
              break;
            case 41:
              V + N + B === 0 && J--;
              break;
            case 40:
              if (V + N + B === 0) {
                if (Z === 0)
                  switch (2 * ce + 3 * ye) {
                    case 533:
                      break;
                    default:
                      Z = 1;
                  }
                J++;
              }
              break;
            case 64:
              N + J + V + B + he + b === 0 && (b = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + B + J))
                switch (N) {
                  case 0:
                    switch (2 * Y + 3 * S.charCodeAt(te + 1)) {
                      case 235:
                        N = 47;
                        break;
                      case 220:
                        (Se = te), (N = 42);
                    }
                    break;
                  case 42:
                    Y === 47 &&
                      ce === 42 &&
                      Se + 2 !== te &&
                      (S.charCodeAt(Se + 2) === 33 &&
                        (le += S.substring(Se, te + 1)),
                      (Le = ""),
                      (N = 0));
                }
          }
          N === 0 && (X += Le);
      }
      (ye = ce), (ce = Y), te++;
    }
    if (((Se = le.length), 0 < Se)) {
      if (
        ((ge = I),
        0 < R &&
          ((ft = l(2, le, ge, C, H, A, Se, Q, w, Q)),
          ft !== void 0 && (le = ft).length === 0))
      )
        return mn + le + Ot;
      if (((le = ge.join(",") + "{" + le + "}"), G * W !== 0)) {
        switch ((G !== 2 || i(le, 2) || (W = 0), W)) {
          case 111:
            le = le.replace(x, ":-moz-$1") + le;
            break;
          case 112:
            le =
              le.replace(v, "::-webkit-input-$1") +
              le.replace(v, "::-moz-$1") +
              le.replace(v, ":-ms-input-$1") +
              le;
        }
        W = 0;
      }
    }
    return mn + le + Ot;
  }
  function n(C, I, S) {
    var Q = I.trim().split(_);
    I = Q;
    var w = Q.length,
      B = C.length;
    switch (B) {
      case 0:
      case 1:
        var N = 0;
        for (C = B === 0 ? "" : C[0] + " "; N < w; ++N)
          I[N] = r(C, I[N], S).trim();
        break;
      default:
        var J = (N = 0);
        for (I = []; N < w; ++N)
          for (var V = 0; V < B; ++V) I[J++] = r(C[V] + " ", Q[N], S).trim();
    }
    return I;
  }
  function r(C, I, S) {
    var Q = I.charCodeAt(0);
    switch ((33 > Q && (Q = (I = I.trim()).charCodeAt(0)), Q)) {
      case 38:
        return I.replace(m, "$1" + C.trim());
      case 58:
        return C.trim() + I.replace(m, "$1" + C.trim());
      default:
        if (0 < 1 * S && 0 < I.indexOf("\f"))
          return I.replace(m, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + I;
  }
  function o(C, I, S, Q) {
    var w = C + ";",
      B = 2 * I + 3 * S + 4 * Q;
    if (B === 944) {
      C = w.indexOf(":", 9) + 1;
      var N = w.substring(C, w.length - 1).trim();
      return (
        (N = w.substring(0, C).trim() + N + ";"),
        G === 1 || (G === 2 && i(N, 1)) ? "-webkit-" + N + N : N
      );
    }
    if (G === 0 || (G === 2 && !i(w, 1))) return w;
    switch (B) {
      case 1015:
        return w.charCodeAt(10) === 97 ? "-webkit-" + w + w : w;
      case 951:
        return w.charCodeAt(3) === 116 ? "-webkit-" + w + w : w;
      case 963:
        return w.charCodeAt(5) === 110 ? "-webkit-" + w + w : w;
      case 1009:
        if (w.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + w + w;
      case 978:
        return "-webkit-" + w + "-moz-" + w + w;
      case 1019:
      case 983:
        return "-webkit-" + w + "-moz-" + w + "-ms-" + w + w;
      case 883:
        if (w.charCodeAt(8) === 45) return "-webkit-" + w + w;
        if (0 < w.indexOf("image-set(", 11))
          return w.replace(M, "$1-webkit-$2") + w;
        break;
      case 932:
        if (w.charCodeAt(4) === 45)
          switch (w.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                w.replace("-grow", "") +
                "-webkit-" +
                w +
                "-ms-" +
                w.replace("grow", "positive") +
                w
              );
            case 115:
              return (
                "-webkit-" + w + "-ms-" + w.replace("shrink", "negative") + w
              );
            case 98:
              return (
                "-webkit-" +
                w +
                "-ms-" +
                w.replace("basis", "preferred-size") +
                w
              );
          }
        return "-webkit-" + w + "-ms-" + w + w;
      case 964:
        return "-webkit-" + w + "-ms-flex-" + w + w;
      case 1023:
        if (w.charCodeAt(8) !== 99) break;
        return (
          (N = w
            .substring(w.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + N + "-webkit-" + w + "-ms-flex-pack" + N + w
        );
      case 1005:
        return y.test(w)
          ? w.replace(h, ":-webkit-") + w.replace(h, ":-moz-") + w
          : w;
      case 1e3:
        switch (
          ((N = w.substring(13).trim()),
          (I = N.indexOf("-") + 1),
          N.charCodeAt(0) + N.charCodeAt(I))
        ) {
          case 226:
            N = w.replace(k, "tb");
            break;
          case 232:
            N = w.replace(k, "tb-rl");
            break;
          case 220:
            N = w.replace(k, "lr");
            break;
          default:
            return w;
        }
        return "-webkit-" + w + "-ms-" + N + w;
      case 1017:
        if (w.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((I = (w = C).length - 10),
          (N = (w.charCodeAt(I) === 33 ? w.substring(0, I) : w)
            .substring(C.indexOf(":", 7) + 1)
            .trim()),
          (B = N.charCodeAt(0) + (N.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            w = w.replace(N, "-webkit-" + N) + ";" + w;
            break;
          case 207:
          case 102:
            w =
              w.replace(N, "-webkit-" + (102 < B ? "inline-" : "") + "box") +
              ";" +
              w.replace(N, "-webkit-" + N) +
              ";" +
              w.replace(N, "-ms-" + N + "box") +
              ";" +
              w;
        }
        return w + ";";
      case 938:
        if (w.charCodeAt(5) === 45)
          switch (w.charCodeAt(6)) {
            case 105:
              return (
                (N = w.replace("-items", "")),
                "-webkit-" + w + "-webkit-box-" + N + "-ms-flex-" + N + w
              );
            case 115:
              return "-webkit-" + w + "-ms-flex-item-" + w.replace(j, "") + w;
            default:
              return (
                "-webkit-" +
                w +
                "-ms-flex-line-pack" +
                w.replace("align-content", "").replace(j, "") +
                w
              );
          }
        break;
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (L.test(C) === !0)
          return (N = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115
            ? o(C.replace("stretch", "fill-available"), I, S, Q).replace(
                ":fill-available",
                ":stretch"
              )
            : w.replace(N, "-webkit-" + N) +
                w.replace(N, "-moz-" + N.replace("fill-", "")) +
                w;
        break;
      case 962:
        if (
          ((w =
            "-webkit-" + w + (w.charCodeAt(5) === 102 ? "-ms-" + w : "") + w),
          S + Q === 211 &&
            w.charCodeAt(13) === 105 &&
            0 < w.indexOf("transform", 10))
        )
          return (
            w.substring(0, w.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") +
            w
          );
    }
    return w;
  }
  function i(C, I) {
    var S = C.indexOf(I === 1 ? ":" : "{"),
      Q = C.substring(0, I !== 3 ? S : 10);
    return (
      (S = C.substring(S + 1, C.length - 1)),
      z(I !== 2 ? Q : Q.replace($, "$1"), S, I)
    );
  }
  function u(C, I) {
    var S = o(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return S !== I + ";"
      ? S.replace(P, " or ($1)").substring(4)
      : "(" + I + ")";
  }
  function l(C, I, S, Q, w, B, N, J, V, Z) {
    for (var Y = 0, ce = I, ye; Y < R; ++Y)
      switch ((ye = oe[Y].call(c, C, ce, S, Q, w, B, N, J, V, Z))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = ye;
      }
    if (ce !== I) return ce;
  }
  function a(C) {
    switch (C) {
      case void 0:
      case null:
        R = oe.length = 0;
        break;
      default:
        if (typeof C == "function") oe[R++] = C;
        else if (typeof C == "object")
          for (var I = 0, S = C.length; I < S; ++I) a(C[I]);
        else T = !!C | 0;
    }
    return a;
  }
  function s(C) {
    return (
      (C = C.prefix),
      C !== void 0 &&
        ((z = null),
        C ? (typeof C != "function" ? (G = 1) : ((G = 2), (z = C))) : (G = 0)),
      s
    );
  }
  function c(C, I) {
    var S = C;
    if ((33 > S.charCodeAt(0) && (S = S.trim()), (U = S), (S = [U]), 0 < R)) {
      var Q = l(-1, I, S, S, H, A, 0, 0, 0, 0);
      Q !== void 0 && typeof Q == "string" && (I = Q);
    }
    var w = t(K, S, I, 0, 0);
    return (
      0 < R &&
        ((Q = l(-2, w, S, S, H, A, w.length, 0, 0, 0)),
        Q !== void 0 && (w = Q)),
      (U = ""),
      (W = 0),
      (A = H = 1),
      w
    );
  }
  var p = /^\0+/g,
    d = /[\0\r\f]/g,
    h = /: */g,
    y = /zoo|gra/,
    g = /([,: ])(transform)/g,
    _ = /,\r+?/g,
    m = /([\t\r\n ])*\f?&/g,
    f = /@(k\w+)\s*(\S*)\s*/,
    v = /::(place)/g,
    x = /:(read-only)/g,
    k = /[svh]\w+-[tblr]{2}/,
    E = /\(\s*(.*)\s*\)/g,
    P = /([\s\S]*?);/g,
    j = /-self|flex-/g,
    $ = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    L = /stretch|:\s*\w+\-(?:conte|avail)/,
    M = /([^-])(image-set\()/,
    A = 1,
    H = 1,
    W = 0,
    G = 1,
    K = [],
    oe = [],
    R = 0,
    z = null,
    T = 0,
    U = "";
  return (c.use = a), (c.set = s), e !== void 0 && s(e), c;
}
var Rh = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function Ih(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Mh =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  la = Ih(function (e) {
    return (
      Mh.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Gu = Yu,
  $h = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Dh = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Fh = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Mf = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Xu = {};
Xu[Gu.ForwardRef] = Fh;
Xu[Gu.Memo] = Mf;
function ua(e) {
  return Gu.isMemo(e) ? Mf : Xu[e.$$typeof] || $h;
}
var Uh = Object.defineProperty,
  Bh = Object.getOwnPropertyNames,
  sa = Object.getOwnPropertySymbols,
  Hh = Object.getOwnPropertyDescriptor,
  Vh = Object.getPrototypeOf,
  aa = Object.prototype;
function $f(e, t, n) {
  if (typeof t != "string") {
    if (aa) {
      var r = Vh(t);
      r && r !== aa && $f(e, r, n);
    }
    var o = Bh(t);
    sa && (o = o.concat(sa(t)));
    for (var i = ua(e), u = ua(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!Dh[a] && !(n && n[a]) && !(u && u[a]) && !(i && i[a])) {
        var s = Hh(t, a);
        try {
          Uh(e, a, s);
        } catch {}
      }
    }
  }
  return e;
}
var Wh = $f;
const Qh = Xl(Wh);
var Je = {};
function _t() {
  return (_t =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var ca = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  Hl = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !Yu.typeOf(e)
    );
  },
  Yo = Object.freeze([]),
  Yt = Object.freeze({});
function Rr(e) {
  return typeof e == "function";
}
function fa(e) {
  return e.displayName || e.name || "Component";
}
function Ku(e) {
  return e && typeof e.styledComponentId == "string";
}
var Vn =
    (typeof process < "u" &&
      Je !== void 0 &&
      (Je.REACT_APP_SC_ATTR || Je.SC_ATTR)) ||
    "data-styled",
  Zu = typeof window < "u" && "HTMLElement" in window,
  Yh = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Je !== void 0 &&
      (Je.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Je.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? Je.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
          Je.REACT_APP_SC_DISABLE_SPEEDY
        : Je.SC_DISABLE_SPEEDY !== void 0 &&
          Je.SC_DISABLE_SPEEDY !== "" &&
          Je.SC_DISABLE_SPEEDY !== "false" &&
          Je.SC_DISABLE_SPEEDY));
function Ur(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var Gh = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, u = i; n >= u; )
            (u <<= 1) < 0 && Ur(16, "" + n);
          (this.groupSizes = new Uint32Array(u)),
            this.groupSizes.set(o),
            (this.length = u);
          for (var l = i; l < u; l++) this.groupSizes[l] = 0;
        }
        for (var a = this.indexOfGroup(n + 1), s = 0, c = r.length; s < c; s++)
          this.tag.insertRule(a, r[s]) && (this.groupSizes[n]++, a++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var u = o; u < i; u++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            u = i + o,
            l = i;
          l < u;
          l++
        )
          r +=
            this.tag.getRule(l) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  xo = new Map(),
  Go = new Map(),
  vr = 1,
  lo = function (e) {
    if (xo.has(e)) return xo.get(e);
    for (; Go.has(vr); ) vr++;
    var t = vr++;
    return xo.set(e, t), Go.set(t, e), t;
  },
  Xh = function (e) {
    return Go.get(e);
  },
  Kh = function (e, t) {
    t >= vr && (vr = t + 1), xo.set(e, t), Go.set(t, e);
  },
  Zh = "style[" + Vn + '][data-styled-version="5.3.11"]',
  Jh = new RegExp("^" + Vn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  qh = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, u = o.length; i < u; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  bh = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var u = n[o].trim();
      if (u) {
        var l = u.match(Jh);
        if (l) {
          var a = 0 | parseInt(l[1], 10),
            s = l[2];
          a !== 0 && (Kh(s, a), qh(e, s, l[3]), e.getTag().insertRules(a, r)),
            (r.length = 0);
        } else r.push(u);
      }
    }
  },
  em = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  Df = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (l) {
        for (var a = l.childNodes, s = a.length; s >= 0; s--) {
          var c = a[s];
          if (c && c.nodeType === 1 && c.hasAttribute(Vn)) return c;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Vn, "active"),
      r.setAttribute("data-styled-version", "5.3.11");
    var u = em();
    return u && r.setAttribute("nonce", u), n.insertBefore(r, i), r;
  },
  tm = (function () {
    function e(n) {
      var r = (this.element = Df(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, u = 0, l = i.length; u < l; u++) {
            var a = i[u];
            if (a.ownerNode === o) return a;
          }
          Ur(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  nm = (function () {
    function e(n) {
      var r = (this.element = Df(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  rm = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  da = Zu,
  om = { isServer: !Zu, useCSSOMInjection: !Yh },
  Ff = (function () {
    function e(n, r, o) {
      n === void 0 && (n = Yt),
        r === void 0 && (r = {}),
        (this.options = _t({}, om, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          Zu &&
          da &&
          ((da = !1),
          (function (i) {
            for (
              var u = document.querySelectorAll(Zh), l = 0, a = u.length;
              l < a;
              l++
            ) {
              var s = u[l];
              s &&
                s.getAttribute(Vn) !== "active" &&
                (bh(i, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this));
    }
    e.registerId = function (n) {
      return lo(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            _t({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (u = r.target),
            (n = o ? new rm(u) : i ? new tm(u) : new nm(u)),
            new Gh(n)))
        );
        var n, r, o, i, u;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((lo(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(lo(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(lo(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = "", u = 0; u < o; u++) {
            var l = Xh(u);
            if (l !== void 0) {
              var a = n.names.get(l),
                s = r.getGroup(u);
              if (a && s && a.size) {
                var c = Vn + ".g" + u + '[id="' + l + '"]',
                  p = "";
                a !== void 0 &&
                  a.forEach(function (d) {
                    d.length > 0 && (p += d + ",");
                  }),
                  (i +=
                    "" +
                    s +
                    c +
                    '{content:"' +
                    p +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  im = /(a)(d)/gi,
  pa = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Vl(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = pa(t % 52) + n;
  return (pa(t % 52) + n).replace(im, "$1-$2");
}
var Nn = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Uf = function (e) {
    return Nn(5381, e);
  };
function lm(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Rr(n) && !Ku(n)) return !1;
  }
  return !0;
}
var um = Uf("5.3.11"),
  sm = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && lm(t)),
        (this.componentId = n),
        (this.baseHash = Nn(um, n)),
        (this.baseStyle = r),
        Ff.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var u = Wn(this.rules, t, n, r).join(""),
              l = Vl(Nn(this.baseHash, u) >>> 0);
            if (!n.hasNameForId(o, l)) {
              var a = r(u, "." + l, void 0, o);
              n.insertRules(o, l, a);
            }
            i.push(l), (this.staticRulesId = l);
          }
        else {
          for (
            var s = this.rules.length,
              c = Nn(this.baseHash, r.hash),
              p = "",
              d = 0;
            d < s;
            d++
          ) {
            var h = this.rules[d];
            if (typeof h == "string") p += h;
            else if (h) {
              var y = Wn(h, t, n, r),
                g = Array.isArray(y) ? y.join("") : y;
              (c = Nn(c, g + d)), (p += g);
            }
          }
          if (p) {
            var _ = Vl(c >>> 0);
            if (!n.hasNameForId(o, _)) {
              var m = r(p, "." + _, void 0, o);
              n.insertRules(o, _, m);
            }
            i.push(_);
          }
        }
        return i.join(" ");
      }),
      e
    );
  })(),
  am = /^\s*\/\/.*$/gm,
  cm = [":", "[", ".", "#"];
function fm(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? Yt : e,
    u = i.options,
    l = u === void 0 ? Yt : u,
    a = i.plugins,
    s = a === void 0 ? Yo : a,
    c = new Lh(l),
    p = [],
    d = (function (g) {
      function _(m) {
        if (m)
          try {
            g(m + "}");
          } catch {}
      }
      return function (m, f, v, x, k, E, P, j, $, L) {
        switch (m) {
          case 1:
            if ($ === 0 && f.charCodeAt(0) === 64) return g(f + ";"), "";
            break;
          case 2:
            if (j === 0) return f + "/*|*/";
            break;
          case 3:
            switch (j) {
              case 102:
              case 112:
                return g(v[0] + f), "";
              default:
                return f + (L === 0 ? "/*|*/" : "");
            }
          case -2:
            f.split("/*|*/}").forEach(_);
        }
      };
    })(function (g) {
      p.push(g);
    }),
    h = function (g, _, m) {
      return (_ === 0 && cm.indexOf(m[n.length]) !== -1) || m.match(o)
        ? g
        : "." + t;
    };
  function y(g, _, m, f) {
    f === void 0 && (f = "&");
    var v = g.replace(am, ""),
      x = _ && m ? m + " " + _ + " { " + v + " }" : v;
    return (
      (t = f),
      (n = _),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (o = new RegExp("(\\" + n + "\\b){2,}")),
      c(m || !_ ? "" : _, x)
    );
  }
  return (
    c.use(
      [].concat(s, [
        function (g, _, m) {
          g === 2 &&
            m.length &&
            m[0].lastIndexOf(n) > 0 &&
            (m[0] = m[0].replace(r, h));
        },
        d,
        function (g) {
          if (g === -2) {
            var _ = p;
            return (p = []), _;
          }
        },
      ])
    ),
    (y.hash = s.length
      ? s
          .reduce(function (g, _) {
            return _.name || Ur(15), Nn(g, _.name);
          }, 5381)
          .toString()
      : ""),
    y
  );
}
var Bf = Yn.createContext();
Bf.Consumer;
var Hf = Yn.createContext(),
  dm = (Hf.Consumer, new Ff()),
  Wl = fm();
function pm() {
  return We.useContext(Bf) || dm;
}
function hm() {
  return We.useContext(Hf) || Wl;
}
var mm = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Wl);
        var u = r.name + i.hash;
        o.hasNameForId(r.id, u) ||
          o.insertRules(r.id, u, i(r.rules, u, "@keyframes"));
      }),
        (this.toString = function () {
          return Ur(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Wl), this.name + t.hash;
      }),
      e
    );
  })(),
  vm = /([A-Z])/,
  ym = /([A-Z])/g,
  gm = /^ms-/,
  wm = function (e) {
    return "-" + e.toLowerCase();
  };
function ha(e) {
  return vm.test(e) ? e.replace(ym, wm).replace(gm, "-ms-") : e;
}
var ma = function (e) {
  return e == null || e === !1 || e === "";
};
function Wn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], u = 0, l = e.length; u < l; u += 1)
      (o = Wn(e[u], t, n, r)) !== "" &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (ma(e)) return "";
  if (Ku(e)) return "." + e.styledComponentId;
  if (Rr(e)) {
    if (
      typeof (s = e) != "function" ||
      (s.prototype && s.prototype.isReactComponent) ||
      !t
    )
      return e;
    var a = e(t);
    return Wn(a, t, n, r);
  }
  var s;
  return e instanceof mm
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Hl(e)
    ? (function c(p, d) {
        var h,
          y,
          g = [];
        for (var _ in p)
          p.hasOwnProperty(_) &&
            !ma(p[_]) &&
            ((Array.isArray(p[_]) && p[_].isCss) || Rr(p[_])
              ? g.push(ha(_) + ":", p[_], ";")
              : Hl(p[_])
              ? g.push.apply(g, c(p[_], _))
              : g.push(
                  ha(_) +
                    ": " +
                    ((h = _),
                    (y = p[_]) == null || typeof y == "boolean" || y === ""
                      ? ""
                      : typeof y != "number" ||
                        y === 0 ||
                        h in Rh ||
                        h.startsWith("--")
                      ? String(y).trim()
                      : y + "px") +
                    ";"
                ));
        return d ? [d + " {"].concat(g, ["}"]) : g;
      })(e)
    : e.toString();
}
var va = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Sm(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Rr(e) || Hl(e)
    ? va(Wn(ca(Yo, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : va(Wn(ca(e, n)));
}
var xm = function (e, t, n) {
    return (
      n === void 0 && (n = Yt), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  km = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  _m = /(^-|-$)/g;
function Gi(e) {
  return e.replace(km, "-").replace(_m, "");
}
var Em = function (e) {
  return Vl(Uf(e) >>> 0);
};
function uo(e) {
  return typeof e == "string" && !0;
}
var Ql = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  Cm = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function Pm(e, t, n) {
  var r = e[n];
  Ql(t) && Ql(r) ? Vf(r, t) : (e[n] = t);
}
function Vf(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var u = i[o];
    if (Ql(u)) for (var l in u) Cm(l) && Pm(e, u[l], l);
  }
  return e;
}
var Wf = Yn.createContext();
Wf.Consumer;
var Xi = {};
function Qf(e, t, n) {
  var r = Ku(e),
    o = !uo(e),
    i = t.attrs,
    u = i === void 0 ? Yo : i,
    l = t.componentId,
    a =
      l === void 0
        ? (function (f, v) {
            var x = typeof f != "string" ? "sc" : Gi(f);
            Xi[x] = (Xi[x] || 0) + 1;
            var k = x + "-" + Em("5.3.11" + x + Xi[x]);
            return v ? v + "-" + k : k;
          })(t.displayName, t.parentComponentId)
        : l,
    s = t.displayName,
    c =
      s === void 0
        ? (function (f) {
            return uo(f) ? "styled." + f : "Styled(" + fa(f) + ")";
          })(e)
        : s,
    p =
      t.displayName && t.componentId
        ? Gi(t.displayName) + "-" + t.componentId
        : t.componentId || a,
    d = r && e.attrs ? Array.prototype.concat(e.attrs, u).filter(Boolean) : u,
    h = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (h = t.shouldForwardProp
      ? function (f, v, x) {
          return e.shouldForwardProp(f, v, x) && t.shouldForwardProp(f, v, x);
        }
      : e.shouldForwardProp);
  var y,
    g = new sm(n, p, r ? e.componentStyle : void 0),
    _ = g.isStatic && u.length === 0,
    m = function (f, v) {
      return (function (x, k, E, P) {
        var j = x.attrs,
          $ = x.componentStyle,
          L = x.defaultProps,
          M = x.foldedComponentIds,
          A = x.shouldForwardProp,
          H = x.styledComponentId,
          W = x.target,
          G = (function (Q, w, B) {
            Q === void 0 && (Q = Yt);
            var N = _t({}, w, { theme: Q }),
              J = {};
            return (
              B.forEach(function (V) {
                var Z,
                  Y,
                  ce,
                  ye = V;
                for (Z in (Rr(ye) && (ye = ye(N)), ye))
                  N[Z] = J[Z] =
                    Z === "className"
                      ? ((Y = J[Z]),
                        (ce = ye[Z]),
                        Y && ce ? Y + " " + ce : Y || ce)
                      : ye[Z];
              }),
              [N, J]
            );
          })(xm(k, We.useContext(Wf), L) || Yt, k, j),
          K = G[0],
          oe = G[1],
          R = (function (Q, w, B, N) {
            var J = pm(),
              V = hm(),
              Z = w
                ? Q.generateAndInjectStyles(Yt, J, V)
                : Q.generateAndInjectStyles(B, J, V);
            return Z;
          })($, P, K),
          z = E,
          T = oe.$as || k.$as || oe.as || k.as || W,
          U = uo(T),
          C = oe !== k ? _t({}, k, {}, oe) : k,
          I = {};
        for (var S in C)
          S[0] !== "$" &&
            S !== "as" &&
            (S === "forwardedAs"
              ? (I.as = C[S])
              : (A ? A(S, la, T) : !U || la(S)) && (I[S] = C[S]));
        return (
          k.style &&
            oe.style !== k.style &&
            (I.style = _t({}, k.style, {}, oe.style)),
          (I.className = Array.prototype
            .concat(M, H, R !== H ? R : null, k.className, oe.className)
            .filter(Boolean)
            .join(" ")),
          (I.ref = z),
          We.createElement(T, I)
        );
      })(y, f, v, _);
    };
  return (
    (m.displayName = c),
    ((y = Yn.forwardRef(m)).attrs = d),
    (y.componentStyle = g),
    (y.displayName = c),
    (y.shouldForwardProp = h),
    (y.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Yo),
    (y.styledComponentId = p),
    (y.target = r ? e.target : e),
    (y.withComponent = function (f) {
      var v = t.componentId,
        x = (function (E, P) {
          if (E == null) return {};
          var j,
            $,
            L = {},
            M = Object.keys(E);
          for ($ = 0; $ < M.length; $++)
            (j = M[$]), P.indexOf(j) >= 0 || (L[j] = E[j]);
          return L;
        })(t, ["componentId"]),
        k = v && v + "-" + (uo(f) ? f : Gi(fa(f)));
      return Qf(f, _t({}, x, { attrs: d, componentId: k }), n);
    }),
    Object.defineProperty(y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (f) {
        this._foldedDefaultProps = r ? Vf({}, e.defaultProps, f) : f;
      },
    }),
    Object.defineProperty(y, "toString", {
      value: function () {
        return "." + y.styledComponentId;
      },
    }),
    o &&
      Qh(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    y
  );
}
var Yl = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = Yt), !Yu.isValidElementType(r)))
      return Ur(1, String(r));
    var i = function () {
      return n(r, o, Sm.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (u) {
        return t(n, r, _t({}, o, {}, u));
      }),
      (i.attrs = function (u) {
        return t(
          n,
          r,
          _t({}, o, {
            attrs: Array.prototype.concat(o.attrs, u).filter(Boolean),
          })
        );
      }),
      i
    );
  })(Qf, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  Yl[e] = Yl(e);
});
const jm = Yl;
var Tm = function (e, t) {
    return (
      Object.defineProperty
        ? Object.defineProperty(e, "raw", { value: t })
        : (e.raw = t),
      e
    );
  },
  Gl = function () {
    return (
      (Gl =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      Gl.apply(this, arguments)
    );
  },
  Nm = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  Om = jm.div(
    ya ||
      (ya = Tm(
        [
          `
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  z-index: 9999;
  border-radius: 0;
  mix-blend-mode: `,
          `;

  span {
    position: absolute;
    display: block;
    border-radius: 100%;
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: `,
          `px;
    height: `,
          `px;
    background-color: `,
          `;
  }
`,
        ],
        [
          `
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  z-index: 9999;
  border-radius: 0;
  mix-blend-mode: `,
          `;

  span {
    position: absolute;
    display: block;
    border-radius: 100%;
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: `,
          `px;
    height: `,
          `px;
    background-color: `,
          `;
  }
`,
        ]
      )),
    function (e) {
      var t = e.inverted;
      return t ? "difference" : "unset";
    },
    function (e) {
      var t = e.size;
      return t;
    },
    function (e) {
      var t = e.size;
      return t;
    },
    function (e) {
      var t = e.inverted,
        n = e.color;
      return t ? "#fff" : n;
    }
  ),
  Am = function (e) {
    var t = e.color,
      n = t === void 0 ? "#fff" : t,
      r = e.id,
      o = r === void 0 ? "react-mouse-trail" : r,
      i = e.idleAnimation,
      u = i === void 0 ? !1 : i,
      l = e.idleAnimationCount,
      a = l === void 0 ? 5 : l,
      s = e.inverted,
      c = s === void 0 ? !0 : s,
      p = e.size,
      d = p === void 0 ? 20 : p,
      h = e.trailCount,
      y = h === void 0 ? 10 : h,
      g = Nm(e, [
        "color",
        "id",
        "idleAnimation",
        "idleAnimationCount",
        "inverted",
        "size",
        "trailCount",
      ]),
      _ = [],
      m = { x: 0, y: 0 },
      f,
      v,
      x = !1,
      k = function () {
        var A = m.x,
          H = m.y;
        _.forEach(function (W, G, K) {
          var oe = K[G + 1] || K[0];
          (W.x = A),
            (W.y = H),
            W.draw(x, a),
            (!x || G >= y - a) &&
              ((A += (oe.x - W.x) * 0.35), (H += (oe.y - W.y) * 0.35));
        });
      },
      E = function () {
        k(), (f = window.requestAnimationFrame(E));
      },
      P = function () {
        for (var A = 0; A < y; A++) {
          var H = new jh({
            elementId: o,
            idleAnimation: u,
            index: A,
            size: d,
            trailCount: y,
          });
          _.push(H);
        }
      },
      j = function (A) {
        (m.x = A.pageX), (m.y = A.pageY), L();
      },
      $ = function (A) {
        (m.x = A.touches[0].clientX), (m.y = A.touches[0].clientY), L();
      },
      L = function () {
        clearTimeout(v),
          (v = setTimeout(function () {
            x = !0;
            for (var A = 0, H = _; A < H.length; A++) {
              var W = H[A];
              W.lock();
            }
          }, y * 7.5)),
          (x = !1);
      },
      M = function (A) {
        for (; A != null && A.firstChild; )
          A == null || A.removeChild(A == null ? void 0 : A.firstChild);
      };
    return (
      We.useEffect(function () {
        return (
          window &&
            (P(),
            window.addEventListener("mousemove", j),
            window.addEventListener("touchmove", $),
            E()),
          function () {
            window.removeEventListener("mousemove", j),
              window.removeEventListener("touchmove", $),
              window.cancelAnimationFrame(f);
            var A = document.getElementById(o);
            M(A);
          }
        );
      }),
      Yn.createElement(Om, Gl({ color: n, id: o, inverted: c, size: d }, g))
    );
  },
  ya;
const zm =
  "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e%20.spinner_9y7u%20{%20animation:%20spinner_fUkk%202.4s%20linear%20infinite;%20animation-delay:%20-2.4s;%20fill:%20white;%20/*%20Added%20to%20make%20it%20white%20*/%20}%20.spinner_DF2s%20{%20animation-delay:%20-1.6s;%20fill:%20white;%20/*%20Added%20to%20make%20it%20white%20*/%20}%20.spinner_q27e%20{%20animation-delay:%20-0.8s;%20fill:%20white;%20/*%20Added%20to%20make%20it%20white%20*/%20}%20@keyframes%20spinner_fUkk%20{%208.33%25%20{%20x:%2013px;%20y:%201px;%20}%2025%25%20{%20x:%2013px;%20y:%201px;%20}%2033.3%25%20{%20x:%2013px;%20y:%2013px;%20}%2050%25%20{%20x:%2013px;%20y:%2013px;%20}%2058.33%25%20{%20x:%201px;%20y:%2013px;%20}%2075%25%20{%20x:%201px;%20y:%2013px;%20}%2083.33%25%20{%20x:%201px;%20y:%201px;%20}%20}%20%3c/style%3e%3crect%20class='spinner_9y7u'%20x='1'%20y='1'%20rx='1'%20width='10'%20height='10'%20/%3e%3crect%20class='spinner_9y7u%20spinner_DF2s'%20x='1'%20y='1'%20rx='1'%20width='10'%20height='10'%20/%3e%3crect%20class='spinner_9y7u%20spinner_q27e'%20x='1'%20y='1'%20rx='1'%20width='10'%20height='10'%20/%3e%3c/svg%3e";
function Lm() {
  return D.jsx(D.Fragment, {
    children: D.jsxs("section", {
      className:
        "flex flex-col justify-center items-center bg-amber-700 h-screen text-white text-4xl font-black",
      children: [
        D.jsx("h1", { children: "Loading..." }),
        D.jsx("img", { src: zm, alt: "Loading Spinner" }),
      ],
    }),
  });
}
function Rm() {
  const [e, t] = We.useState(!1);
  We.useEffect(() => {
    t(!0),
      setTimeout(() => {
        t(!1);
      }, 1e3);
  }, []);
  const n = {
      color: "orange",
      idleAnimation: !0,
      idleAnimationCount: 40,
      inverted: !0,
      size: 15,
      trailCount: 19,
    },
    r = We.useRef(null),
    [o, i] = We.useState(!0),
    u = () => {
      r.current.paused ? (r.current.play(), i(!1)) : r.current.pause();
    },
    l = () => {
      r.current.pause();
    };
  return D.jsx(D.Fragment, {
    children: e
      ? D.jsx(Lm, {})
      : D.jsxs(D.Fragment, {
          children: [
            D.jsx(Am, { ...n }),
            o &&
              D.jsx("div", {
                className: "bg-amber-700 text-8xl font-black text-center",
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                onClick: u,
                children: "Click To Enter",
              }),
            !o &&
              D.jsxs(D.Fragment, {
                children: [
                  D.jsx(xh, { playAudio: u, stopAudio: l, isPlaying: !1 }),
                  D.jsx("video", {
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    id: "myVideo",
                    poster:
                      "https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/9e138gir.png",
                    children: D.jsx("source", {
                      src: "/stars.mp4",
                      type: "video/mp4",
                    }),
                  }),
                  D.jsx(Ch, {}),
                ],
              }),
            D.jsxs("audio", {
              ref: r,
              autoPlay: !o,
              children: [
                D.jsx("source", { src: Ph, type: "audio/mp3" }),
                "Your browser does not support the audio element.",
              ],
            }),
          ],
        }),
  });
}
Ki.createRoot(document.getElementById("root")).render(
  D.jsx(Yn.StrictMode, { children: D.jsx(Rm, {}) })
);
