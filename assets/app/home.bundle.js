function Hh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ea = { exports: {} }, si = {}, ta = { exports: {} }, le = {};
var vd;
function Cg() {
  if (vd) return le;
  vd = 1;
  var n = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.provider"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), w = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object" ? null : (T = w && T[w] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var R = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, M = Object.assign, D = {};
  function A(T, V, oe) {
    this.props = T, this.context = V, this.refs = D, this.updater = oe || R;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(T, V) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, V, "setState");
  }, A.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function j() {
  }
  j.prototype = A.prototype;
  function B(T, V, oe) {
    this.props = T, this.context = V, this.refs = D, this.updater = oe || R;
  }
  var O = B.prototype = new j();
  O.constructor = B, M(O, A.prototype), O.isPureReactComponent = !0;
  var z = Array.isArray, b = Object.prototype.hasOwnProperty, ne = { current: null }, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(T, V, oe) {
    var ae, fe = {}, de = null, we = null;
    if (V != null) for (ae in V.ref !== void 0 && (we = V.ref), V.key !== void 0 && (de = "" + V.key), V) b.call(V, ae) && !re.hasOwnProperty(ae) && (fe[ae] = V[ae]);
    var pe = arguments.length - 2;
    if (pe === 1) fe.children = oe;
    else if (1 < pe) {
      for (var Pe = Array(pe), at = 0; at < pe; at++) Pe[at] = arguments[at + 2];
      fe.children = Pe;
    }
    if (T && T.defaultProps) for (ae in pe = T.defaultProps, pe) fe[ae] === void 0 && (fe[ae] = pe[ae]);
    return { $$typeof: n, type: T, key: de, ref: we, props: fe, _owner: ne.current };
  }
  function se(T, V) {
    return { $$typeof: n, type: T.type, key: V, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function q(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function ce(T) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(oe) {
      return V[oe];
    });
  }
  var ye = /\/+/g;
  function Ee(T, V) {
    return typeof T == "object" && T !== null && T.key != null ? ce("" + T.key) : V.toString(36);
  }
  function De(T, V, oe, ae, fe) {
    var de = typeof T;
    (de === "undefined" || de === "boolean") && (T = null);
    var we = !1;
    if (T === null) we = !0;
    else switch (de) {
      case "string":
      case "number":
        we = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case n:
          case i:
            we = !0;
        }
    }
    if (we) return we = T, fe = fe(we), T = ae === "" ? "." + Ee(we, 0) : ae, z(fe) ? (oe = "", T != null && (oe = T.replace(ye, "$&/") + "/"), De(fe, V, oe, "", function(at) {
      return at;
    })) : fe != null && (q(fe) && (fe = se(fe, oe + (!fe.key || we && we.key === fe.key ? "" : ("" + fe.key).replace(ye, "$&/") + "/") + T)), V.push(fe)), 1;
    if (we = 0, ae = ae === "" ? "." : ae + ":", z(T)) for (var pe = 0; pe < T.length; pe++) {
      de = T[pe];
      var Pe = ae + Ee(de, pe);
      we += De(de, V, oe, Pe, fe);
    }
    else if (Pe = S(T), typeof Pe == "function") for (T = Pe.call(T), pe = 0; !(de = T.next()).done; ) de = de.value, Pe = ae + Ee(de, pe++), we += De(de, V, oe, Pe, fe);
    else if (de === "object") throw V = String(T), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return we;
  }
  function je(T, V, oe) {
    if (T == null) return T;
    var ae = [], fe = 0;
    return De(T, ae, "", "", function(de) {
      return V.call(oe, de, fe++);
    }), ae;
  }
  function Se(T) {
    if (T._status === -1) {
      var V = T._result;
      V = V(), V.then(function(oe) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = oe);
      }, function(oe) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = oe);
      }), T._status === -1 && (T._status = 0, T._result = V);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var Me = { current: null }, I = { transition: null }, Q = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: I, ReactCurrentOwner: ne };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return le.Children = { map: je, forEach: function(T, V, oe) {
    je(T, function() {
      V.apply(this, arguments);
    }, oe);
  }, count: function(T) {
    var V = 0;
    return je(T, function() {
      V++;
    }), V;
  }, toArray: function(T) {
    return je(T, function(V) {
      return V;
    }) || [];
  }, only: function(T) {
    if (!q(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, le.Component = A, le.Fragment = s, le.Profiler = c, le.PureComponent = B, le.StrictMode = l, le.Suspense = m, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, le.act = W, le.cloneElement = function(T, V, oe) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var ae = M({}, T.props), fe = T.key, de = T.ref, we = T._owner;
    if (V != null) {
      if (V.ref !== void 0 && (de = V.ref, we = ne.current), V.key !== void 0 && (fe = "" + V.key), T.type && T.type.defaultProps) var pe = T.type.defaultProps;
      for (Pe in V) b.call(V, Pe) && !re.hasOwnProperty(Pe) && (ae[Pe] = V[Pe] === void 0 && pe !== void 0 ? pe[Pe] : V[Pe]);
    }
    var Pe = arguments.length - 2;
    if (Pe === 1) ae.children = oe;
    else if (1 < Pe) {
      pe = Array(Pe);
      for (var at = 0; at < Pe; at++) pe[at] = arguments[at + 2];
      ae.children = pe;
    }
    return { $$typeof: n, type: T.type, key: fe, ref: de, props: ae, _owner: we };
  }, le.createContext = function(T) {
    return T = { $$typeof: f, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: d, _context: T }, T.Consumer = T;
  }, le.createElement = K, le.createFactory = function(T) {
    var V = K.bind(null, T);
    return V.type = T, V;
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(T) {
    return { $$typeof: p, render: T };
  }, le.isValidElement = q, le.lazy = function(T) {
    return { $$typeof: g, _payload: { _status: -1, _result: T }, _init: Se };
  }, le.memo = function(T, V) {
    return { $$typeof: y, type: T, compare: V === void 0 ? null : V };
  }, le.startTransition = function(T) {
    var V = I.transition;
    I.transition = {};
    try {
      T();
    } finally {
      I.transition = V;
    }
  }, le.unstable_act = W, le.useCallback = function(T, V) {
    return Me.current.useCallback(T, V);
  }, le.useContext = function(T) {
    return Me.current.useContext(T);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(T) {
    return Me.current.useDeferredValue(T);
  }, le.useEffect = function(T, V) {
    return Me.current.useEffect(T, V);
  }, le.useId = function() {
    return Me.current.useId();
  }, le.useImperativeHandle = function(T, V, oe) {
    return Me.current.useImperativeHandle(T, V, oe);
  }, le.useInsertionEffect = function(T, V) {
    return Me.current.useInsertionEffect(T, V);
  }, le.useLayoutEffect = function(T, V) {
    return Me.current.useLayoutEffect(T, V);
  }, le.useMemo = function(T, V) {
    return Me.current.useMemo(T, V);
  }, le.useReducer = function(T, V, oe) {
    return Me.current.useReducer(T, V, oe);
  }, le.useRef = function(T) {
    return Me.current.useRef(T);
  }, le.useState = function(T) {
    return Me.current.useState(T);
  }, le.useSyncExternalStore = function(T, V, oe) {
    return Me.current.useSyncExternalStore(T, V, oe);
  }, le.useTransition = function() {
    return Me.current.useTransition();
  }, le.version = "18.3.1", le;
}
var wd;
function Xa() {
  return wd || (wd = 1, ta.exports = Cg()), ta.exports;
}
var xd;
function Eg() {
  if (xd) return si;
  xd = 1;
  var n = Xa(), i = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, y) {
    var g, w = {}, S = null, R = null;
    y !== void 0 && (S = "" + y), m.key !== void 0 && (S = "" + m.key), m.ref !== void 0 && (R = m.ref);
    for (g in m) l.call(m, g) && !d.hasOwnProperty(g) && (w[g] = m[g]);
    if (p && p.defaultProps) for (g in m = p.defaultProps, m) w[g] === void 0 && (w[g] = m[g]);
    return { $$typeof: i, type: p, key: S, ref: R, props: w, _owner: c.current };
  }
  return si.Fragment = s, si.jsx = f, si.jsxs = f, si;
}
var Sd;
function Mg() {
  return Sd || (Sd = 1, ea.exports = Eg()), ea.exports;
}
var U = Mg(), $ = Xa();
const Rg = /* @__PURE__ */ Hh($);
var Ds = {}, na = { exports: {} }, lt = {}, ra = { exports: {} }, ia = {};
var kd;
function Ag() {
  return kd || (kd = 1, (function(n) {
    function i(I, Q) {
      var W = I.length;
      I.push(Q);
      e: for (; 0 < W; ) {
        var T = W - 1 >>> 1, V = I[T];
        if (0 < c(V, Q)) I[T] = Q, I[W] = V, W = T;
        else break e;
      }
    }
    function s(I) {
      return I.length === 0 ? null : I[0];
    }
    function l(I) {
      if (I.length === 0) return null;
      var Q = I[0], W = I.pop();
      if (W !== Q) {
        I[0] = W;
        e: for (var T = 0, V = I.length, oe = V >>> 1; T < oe; ) {
          var ae = 2 * (T + 1) - 1, fe = I[ae], de = ae + 1, we = I[de];
          if (0 > c(fe, W)) de < V && 0 > c(we, fe) ? (I[T] = we, I[de] = W, T = de) : (I[T] = fe, I[ae] = W, T = ae);
          else if (de < V && 0 > c(we, W)) I[T] = we, I[de] = W, T = de;
          else break e;
        }
      }
      return Q;
    }
    function c(I, Q) {
      var W = I.sortIndex - Q.sortIndex;
      return W !== 0 ? W : I.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      n.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, p = f.now();
      n.unstable_now = function() {
        return f.now() - p;
      };
    }
    var m = [], y = [], g = 1, w = null, S = 3, R = !1, M = !1, D = !1, A = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(I) {
      for (var Q = s(y); Q !== null; ) {
        if (Q.callback === null) l(y);
        else if (Q.startTime <= I) l(y), Q.sortIndex = Q.expirationTime, i(m, Q);
        else break;
        Q = s(y);
      }
    }
    function z(I) {
      if (D = !1, O(I), !M) if (s(m) !== null) M = !0, Se(b);
      else {
        var Q = s(y);
        Q !== null && Me(z, Q.startTime - I);
      }
    }
    function b(I, Q) {
      M = !1, D && (D = !1, j(K), K = -1), R = !0;
      var W = S;
      try {
        for (O(Q), w = s(m); w !== null && (!(w.expirationTime > Q) || I && !ce()); ) {
          var T = w.callback;
          if (typeof T == "function") {
            w.callback = null, S = w.priorityLevel;
            var V = T(w.expirationTime <= Q);
            Q = n.unstable_now(), typeof V == "function" ? w.callback = V : w === s(m) && l(m), O(Q);
          } else l(m);
          w = s(m);
        }
        if (w !== null) var oe = !0;
        else {
          var ae = s(y);
          ae !== null && Me(z, ae.startTime - Q), oe = !1;
        }
        return oe;
      } finally {
        w = null, S = W, R = !1;
      }
    }
    var ne = !1, re = null, K = -1, se = 5, q = -1;
    function ce() {
      return !(n.unstable_now() - q < se);
    }
    function ye() {
      if (re !== null) {
        var I = n.unstable_now();
        q = I;
        var Q = !0;
        try {
          Q = re(!0, I);
        } finally {
          Q ? Ee() : (ne = !1, re = null);
        }
      } else ne = !1;
    }
    var Ee;
    if (typeof B == "function") Ee = function() {
      B(ye);
    };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), je = De.port2;
      De.port1.onmessage = ye, Ee = function() {
        je.postMessage(null);
      };
    } else Ee = function() {
      A(ye, 0);
    };
    function Se(I) {
      re = I, ne || (ne = !0, Ee());
    }
    function Me(I, Q) {
      K = A(function() {
        I(n.unstable_now());
      }, Q);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, n.unstable_continueExecution = function() {
      M || R || (M = !0, Se(b));
    }, n.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < I ? Math.floor(1e3 / I) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, n.unstable_getFirstCallbackNode = function() {
      return s(m);
    }, n.unstable_next = function(I) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = S;
      }
      var W = S;
      S = Q;
      try {
        return I();
      } finally {
        S = W;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(I, Q) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var W = S;
      S = I;
      try {
        return Q();
      } finally {
        S = W;
      }
    }, n.unstable_scheduleCallback = function(I, Q, W) {
      var T = n.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? T + W : T) : W = T, I) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = W + V, I = { id: g++, callback: Q, priorityLevel: I, startTime: W, expirationTime: V, sortIndex: -1 }, W > T ? (I.sortIndex = W, i(y, I), s(m) === null && I === s(y) && (D ? (j(K), K = -1) : D = !0, Me(z, W - T))) : (I.sortIndex = V, i(m, I), M || R || (M = !0, Se(b))), I;
    }, n.unstable_shouldYield = ce, n.unstable_wrapCallback = function(I) {
      var Q = S;
      return function() {
        var W = S;
        S = Q;
        try {
          return I.apply(this, arguments);
        } finally {
          S = W;
        }
      };
    };
  })(ia)), ia;
}
var Td;
function Dg() {
  return Td || (Td = 1, ra.exports = Ag()), ra.exports;
}
var Pd;
function Vg() {
  if (Pd) return lt;
  Pd = 1;
  var n = Xa(), i = Dg();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = /* @__PURE__ */ new Set(), c = {};
  function d(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, w = {};
  function S(e) {
    return m.call(w, e) ? !0 : m.call(g, e) ? !1 : y.test(e) ? w[e] = !0 : (g[e] = !0, !1);
  }
  function R(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function M(e, t, r, o) {
    if (t === null || typeof t > "u" || R(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null) switch (r.type) {
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
  function D(e, t, r, o, a, u, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = h;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new D(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new D(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new D(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new D(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new D(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new D(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      B
    );
    A[t] = new D(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, B);
    A[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, B);
    A[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, r, o) {
    var a = A.hasOwnProperty(t) ? A[t] : null;
    (a !== null ? a.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (M(t, r, a, o) && (r = null), o || a === null ? S(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (t = a.attributeName, o = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = /* @__PURE__ */ Symbol.for("react.element"), ne = /* @__PURE__ */ Symbol.for("react.portal"), re = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.provider"), ce = /* @__PURE__ */ Symbol.for("react.context"), ye = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ee = /* @__PURE__ */ Symbol.for("react.suspense"), De = /* @__PURE__ */ Symbol.for("react.suspense_list"), je = /* @__PURE__ */ Symbol.for("react.memo"), Se = /* @__PURE__ */ Symbol.for("react.lazy"), Me = /* @__PURE__ */ Symbol.for("react.offscreen"), I = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = I && e[I] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, T;
  function V(e) {
    if (T === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      T = t && t[1] || "";
    }
    return `
` + T + e;
  }
  var oe = !1;
  function ae(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (E) {
          var o = E;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (E) {
          o = E;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (E) {
          o = E;
        }
        e();
      }
    } catch (E) {
      if (E && o && typeof E.stack == "string") {
        for (var a = E.stack.split(`
`), u = o.stack.split(`
`), h = a.length - 1, v = u.length - 1; 1 <= h && 0 <= v && a[h] !== u[v]; ) v--;
        for (; 1 <= h && 0 <= v; h--, v--) if (a[h] !== u[v]) {
          if (h !== 1 || v !== 1)
            do
              if (h--, v--, 0 > v || a[h] !== u[v]) {
                var x = `
` + a[h].replace(" at new ", " at ");
                return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), x;
              }
            while (1 <= h && 0 <= v);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? V(e) : "";
  }
  function fe(e) {
    switch (e.tag) {
      case 5:
        return V(e.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ae(e.type, !1), e;
      case 11:
        return e = ae(e.type.render, !1), e;
      case 1:
        return e = ae(e.type, !0), e;
      default:
        return "";
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case ne:
        return "Portal";
      case se:
        return "Profiler";
      case K:
        return "StrictMode";
      case Ee:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return (e.displayName || "Context") + ".Consumer";
      case q:
        return (e._context.displayName || "Context") + ".Provider";
      case ye:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case je:
        return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
      case Se:
        t = e._payload, e = e._init;
        try {
          return de(e(t));
        } catch {
        }
    }
    return null;
  }
  function we(e) {
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
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return de(t);
      case 8:
        return t === K ? "StrictMode" : "Mode";
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
  function pe(e) {
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function at(e) {
    var t = Pe(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var a = r.get, u = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(h) {
        o = "" + h, u.call(this, h);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function xi(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function Tu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), o = "";
    return e && (o = Pe(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Si(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function oo(e, t) {
    var r = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Pu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    r = pe(t.value != null ? t.value : r), e._wrapperState = { initialChecked: o, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Cu(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function lo(e, t) {
    Cu(e, t);
    var r = pe(t.value), o = t.type;
    if (r != null) o === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ao(e, t.type, r) : t.hasOwnProperty("defaultValue") && ao(e, t.type, pe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Eu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function ao(e, t, r) {
    (t !== "number" || Si(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var xr = Array.isArray;
  function zn(e, t, r, o) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++) a = t.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + pe(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          e[a].selected = !0, o && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function uo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Mu(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(s(92));
        if (xr(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: pe(r) };
  }
  function Ru(e, t) {
    var r = pe(t.value), o = pe(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), o != null && (e.defaultValue = "" + o);
  }
  function Au(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Du(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function co(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Du(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ki, Vu = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, o, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, o, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ki = ki || document.createElement("div"), ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ki.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Sr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kr = {
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
    strokeWidth: !0
  }, Am = ["Webkit", "ms", "Moz", "O"];
  Object.keys(kr).forEach(function(e) {
    Am.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), kr[t] = kr[e];
    });
  });
  function Lu(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px";
  }
  function Nu(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var o = r.indexOf("--") === 0, a = Lu(r, t[r], o);
      r === "float" && (r = "cssFloat"), o ? e.setProperty(r, a) : e[r] = a;
    }
  }
  var Dm = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fo(e, t) {
    if (t) {
      if (Dm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function ho(e, t) {
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
  var po = null;
  function mo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var yo = null, Bn = null, Un = null;
  function _u(e) {
    if (e = Hr(e)) {
      if (typeof yo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Ki(t), yo(e.stateNode, e.type, t));
    }
  }
  function ju(e) {
    Bn ? Un ? Un.push(e) : Un = [e] : Bn = e;
  }
  function Iu() {
    if (Bn) {
      var e = Bn, t = Un;
      if (Un = Bn = null, _u(e), t) for (e = 0; e < t.length; e++) _u(t[e]);
    }
  }
  function Fu(e, t) {
    return e(t);
  }
  function Ou() {
  }
  var go = !1;
  function zu(e, t, r) {
    if (go) return e(t, r);
    go = !0;
    try {
      return Fu(e, t, r);
    } finally {
      go = !1, (Bn !== null || Un !== null) && (Ou(), Iu());
    }
  }
  function Tr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Ki(r);
    if (o === null) return null;
    r = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var vo = !1;
  if (p) try {
    var Pr = {};
    Object.defineProperty(Pr, "passive", { get: function() {
      vo = !0;
    } }), window.addEventListener("test", Pr, Pr), window.removeEventListener("test", Pr, Pr);
  } catch {
    vo = !1;
  }
  function Vm(e, t, r, o, a, u, h, v, x) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, E);
    } catch (N) {
      this.onError(N);
    }
  }
  var Cr = !1, Ti = null, Pi = !1, wo = null, Lm = { onError: function(e) {
    Cr = !0, Ti = e;
  } };
  function Nm(e, t, r, o, a, u, h, v, x) {
    Cr = !1, Ti = null, Vm.apply(Lm, arguments);
  }
  function _m(e, t, r, o, a, u, h, v, x) {
    if (Nm.apply(this, arguments), Cr) {
      if (Cr) {
        var E = Ti;
        Cr = !1, Ti = null;
      } else throw Error(s(198));
      Pi || (Pi = !0, wo = E);
    }
  }
  function xn(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Bu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Uu(e) {
    if (xn(e) !== e) throw Error(s(188));
  }
  function jm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = xn(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (o = a.return, o !== null) {
          r = o;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === r) return Uu(a), e;
          if (u === o) return Uu(a), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) r = a, o = u;
      else {
        for (var h = !1, v = a.child; v; ) {
          if (v === r) {
            h = !0, r = a, o = u;
            break;
          }
          if (v === o) {
            h = !0, o = a, r = u;
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v; ) {
            if (v === r) {
              h = !0, r = u, o = a;
              break;
            }
            if (v === o) {
              h = !0, o = u, r = a;
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function Wu(e) {
    return e = jm(e), e !== null ? $u(e) : null;
  }
  function $u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Hu = i.unstable_scheduleCallback, Ku = i.unstable_cancelCallback, Im = i.unstable_shouldYield, Fm = i.unstable_requestPaint, Ne = i.unstable_now, Om = i.unstable_getCurrentPriorityLevel, xo = i.unstable_ImmediatePriority, Gu = i.unstable_UserBlockingPriority, Ci = i.unstable_NormalPriority, zm = i.unstable_LowPriority, Xu = i.unstable_IdlePriority, Ei = null, Lt = null;
  function Bm(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
      Lt.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var kt = Math.clz32 ? Math.clz32 : $m, Um = Math.log, Wm = Math.LN2;
  function $m(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Um(e) / Wm | 0) | 0;
  }
  var Mi = 64, Ri = 4194304;
  function Er(e) {
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
  function Ai(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0, a = e.suspendedLanes, u = e.pingedLanes, h = r & 268435455;
    if (h !== 0) {
      var v = h & ~a;
      v !== 0 ? o = Er(v) : (u &= h, u !== 0 && (o = Er(u)));
    } else h = r & ~a, h !== 0 ? o = Er(h) : u !== 0 && (o = Er(u));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && (t & a) === 0 && (a = o & -o, u = t & -t, a >= u || a === 16 && (u & 4194240) !== 0)) return t;
    if ((o & 4) !== 0 && (o |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) r = 31 - kt(t), a = 1 << r, o |= e[r], t &= ~a;
    return o;
  }
  function Hm(e, t) {
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
  function Km(e, t) {
    for (var r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var h = 31 - kt(u), v = 1 << h, x = a[h];
      x === -1 ? ((v & r) === 0 || (v & o) !== 0) && (a[h] = Hm(v, t)) : x <= t && (e.expiredLanes |= v), u &= ~v;
    }
  }
  function So(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Yu() {
    var e = Mi;
    return Mi <<= 1, (Mi & 4194240) === 0 && (Mi = 64), e;
  }
  function ko(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Mr(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = r;
  }
  function Gm(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - kt(r), u = 1 << a;
      t[a] = 0, o[a] = -1, e[a] = -1, r &= ~u;
    }
  }
  function To(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var o = 31 - kt(r), a = 1 << o;
      a & t | e[o] & t && (e[o] |= t), r &= ~a;
    }
  }
  var me = 0;
  function Qu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Zu, Po, qu, Ju, bu, Co = !1, Di = [], Zt = null, qt = null, Jt = null, Rr = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), bt = [], Xm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ec(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ar.delete(t.pointerId);
    }
  }
  function Dr(e, t, r, o, a, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: o, nativeEvent: u, targetContainers: [a] }, t !== null && (t = Hr(t), t !== null && Po(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ym(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return Zt = Dr(Zt, e, t, r, o, a), !0;
      case "dragenter":
        return qt = Dr(qt, e, t, r, o, a), !0;
      case "mouseover":
        return Jt = Dr(Jt, e, t, r, o, a), !0;
      case "pointerover":
        var u = a.pointerId;
        return Rr.set(u, Dr(Rr.get(u) || null, e, t, r, o, a)), !0;
      case "gotpointercapture":
        return u = a.pointerId, Ar.set(u, Dr(Ar.get(u) || null, e, t, r, o, a)), !0;
    }
    return !1;
  }
  function tc(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var r = xn(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = Bu(r), t !== null) {
            e.blockedOn = t, bu(e.priority, function() {
              qu(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        po = o, r.target.dispatchEvent(o), po = null;
      } else return t = Hr(r), t !== null && Po(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function nc(e, t, r) {
    Vi(e) && r.delete(t);
  }
  function Qm() {
    Co = !1, Zt !== null && Vi(Zt) && (Zt = null), qt !== null && Vi(qt) && (qt = null), Jt !== null && Vi(Jt) && (Jt = null), Rr.forEach(nc), Ar.forEach(nc);
  }
  function Vr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Co || (Co = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Qm)));
  }
  function Lr(e) {
    function t(a) {
      return Vr(a, e);
    }
    if (0 < Di.length) {
      Vr(Di[0], e);
      for (var r = 1; r < Di.length; r++) {
        var o = Di[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (Zt !== null && Vr(Zt, e), qt !== null && Vr(qt, e), Jt !== null && Vr(Jt, e), Rr.forEach(t), Ar.forEach(t), r = 0; r < bt.length; r++) o = bt[r], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < bt.length && (r = bt[0], r.blockedOn === null); ) tc(r), r.blockedOn === null && bt.shift();
  }
  var Wn = z.ReactCurrentBatchConfig, Li = !0;
  function Zm(e, t, r, o) {
    var a = me, u = Wn.transition;
    Wn.transition = null;
    try {
      me = 1, Eo(e, t, r, o);
    } finally {
      me = a, Wn.transition = u;
    }
  }
  function qm(e, t, r, o) {
    var a = me, u = Wn.transition;
    Wn.transition = null;
    try {
      me = 4, Eo(e, t, r, o);
    } finally {
      me = a, Wn.transition = u;
    }
  }
  function Eo(e, t, r, o) {
    if (Li) {
      var a = Mo(e, t, r, o);
      if (a === null) Ho(e, t, o, Ni, r), ec(e, o);
      else if (Ym(a, e, t, r, o)) o.stopPropagation();
      else if (ec(e, o), t & 4 && -1 < Xm.indexOf(e)) {
        for (; a !== null; ) {
          var u = Hr(a);
          if (u !== null && Zu(u), u = Mo(e, t, r, o), u === null && Ho(e, t, o, Ni, r), u === a) break;
          a = u;
        }
        a !== null && o.stopPropagation();
      } else Ho(e, t, o, null, r);
    }
  }
  var Ni = null;
  function Mo(e, t, r, o) {
    if (Ni = null, e = mo(o), e = Sn(e), e !== null) if (t = xn(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = Bu(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ni = e, null;
  }
  function rc(e) {
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
        switch (Om()) {
          case xo:
            return 1;
          case Gu:
            return 4;
          case Ci:
          case zm:
            return 16;
          case Xu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null, Ro = null, _i = null;
  function ic() {
    if (_i) return _i;
    var e, t = Ro, r = t.length, o, a = "value" in en ? en.value : en.textContent, u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++) ;
    var h = r - e;
    for (o = 1; o <= h && t[r - o] === a[u - o]; o++) ;
    return _i = a.slice(e, 1 < o ? 1 - o : void 0);
  }
  function ji(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ii() {
    return !0;
  }
  function sc() {
    return !1;
  }
  function ut(e) {
    function t(r, o, a, u, h) {
      this._reactName = r, this._targetInst = a, this.type = o, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (r = e[v], this[v] = r ? r(u) : u[v]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ii : sc, this.isPropagationStopped = sc, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Ii);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Ii);
    }, persist: function() {
    }, isPersistent: Ii }), t;
  }
  var $n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ao = ut($n), Nr = W({}, $n, { view: 0, detail: 0 }), Jm = ut(Nr), Do, Vo, _r, Fi = W({}, Nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: No, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== _r && (_r && e.type === "mousemove" ? (Do = e.screenX - _r.screenX, Vo = e.screenY - _r.screenY) : Vo = Do = 0, _r = e), Do);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Vo;
  } }), oc = ut(Fi), bm = W({}, Fi, { dataTransfer: 0 }), ey = ut(bm), ty = W({}, Nr, { relatedTarget: 0 }), Lo = ut(ty), ny = W({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ry = ut(ny), iy = W({}, $n, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), sy = ut(iy), oy = W({}, $n, { data: 0 }), lc = ut(oy), ly = {
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
    MozPrintableKey: "Unidentified"
  }, ay = {
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
    224: "Meta"
  }, uy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function cy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = uy[e]) ? !!t[e] : !1;
  }
  function No() {
    return cy;
  }
  var fy = W({}, Nr, { key: function(e) {
    if (e.key) {
      var t = ly[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ay[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: No, charCode: function(e) {
    return e.type === "keypress" ? ji(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), dy = ut(fy), hy = W({}, Fi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ac = ut(hy), py = W({}, Nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: No }), my = ut(py), yy = W({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gy = ut(yy), vy = W({}, Fi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wy = ut(vy), xy = [9, 13, 27, 32], _o = p && "CompositionEvent" in window, jr = null;
  p && "documentMode" in document && (jr = document.documentMode);
  var Sy = p && "TextEvent" in window && !jr, uc = p && (!_o || jr && 8 < jr && 11 >= jr), cc = " ", fc = !1;
  function dc(e, t) {
    switch (e) {
      case "keyup":
        return xy.indexOf(t.keyCode) !== -1;
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
  function hc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Hn = !1;
  function ky(e, t) {
    switch (e) {
      case "compositionend":
        return hc(t);
      case "keypress":
        return t.which !== 32 ? null : (fc = !0, cc);
      case "textInput":
        return e = t.data, e === cc && fc ? null : e;
      default:
        return null;
    }
  }
  function Ty(e, t) {
    if (Hn) return e === "compositionend" || !_o && dc(e, t) ? (e = ic(), _i = Ro = en = null, Hn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return uc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Py = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Py[e.type] : t === "textarea";
  }
  function mc(e, t, r, o) {
    ju(o), t = Wi(t, "onChange"), 0 < t.length && (r = new Ao("onChange", "change", null, r, o), e.push({ event: r, listeners: t }));
  }
  var Ir = null, Fr = null;
  function Cy(e) {
    Nc(e, 0);
  }
  function Oi(e) {
    var t = Qn(e);
    if (Tu(t)) return e;
  }
  function Ey(e, t) {
    if (e === "change") return t;
  }
  var yc = !1;
  if (p) {
    var jo;
    if (p) {
      var Io = "oninput" in document;
      if (!Io) {
        var gc = document.createElement("div");
        gc.setAttribute("oninput", "return;"), Io = typeof gc.oninput == "function";
      }
      jo = Io;
    } else jo = !1;
    yc = jo && (!document.documentMode || 9 < document.documentMode);
  }
  function vc() {
    Ir && (Ir.detachEvent("onpropertychange", wc), Fr = Ir = null);
  }
  function wc(e) {
    if (e.propertyName === "value" && Oi(Fr)) {
      var t = [];
      mc(t, Fr, e, mo(e)), zu(Cy, t);
    }
  }
  function My(e, t, r) {
    e === "focusin" ? (vc(), Ir = t, Fr = r, Ir.attachEvent("onpropertychange", wc)) : e === "focusout" && vc();
  }
  function Ry(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Oi(Fr);
  }
  function Ay(e, t) {
    if (e === "click") return Oi(t);
  }
  function Dy(e, t) {
    if (e === "input" || e === "change") return Oi(t);
  }
  function Vy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Tt = typeof Object.is == "function" ? Object.is : Vy;
  function Or(e, t) {
    if (Tt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!m.call(t, a) || !Tt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function xc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Sc(e, t) {
    var r = xc(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (o = e + r.textContent.length, e <= t && o >= t) return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = xc(r);
    }
  }
  function kc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Tc() {
    for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Si(e.document);
    }
    return t;
  }
  function Fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ly(e) {
    var t = Tc(), r = e.focusedElem, o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && kc(r.ownerDocument.documentElement, r)) {
      if (o !== null && Fo(r)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = r.textContent.length, u = Math.min(o.start, a);
          o = o.end === void 0 ? u : Math.min(o.end, a), !e.extend && u > o && (a = o, o = u, u = a), a = Sc(r, u);
          var h = Sc(
            r,
            o
          );
          a && h && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), u > o ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ny = p && "documentMode" in document && 11 >= document.documentMode, Kn = null, Oo = null, zr = null, zo = !1;
  function Pc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    zo || Kn == null || Kn !== Si(o) || (o = Kn, "selectionStart" in o && Fo(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), zr && Or(zr, o) || (zr = o, o = Wi(Oo, "onSelect"), 0 < o.length && (t = new Ao("onSelect", "select", null, t, r), e.push({ event: t, listeners: o }), t.target = Kn)));
  }
  function zi(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var Gn = { animationend: zi("Animation", "AnimationEnd"), animationiteration: zi("Animation", "AnimationIteration"), animationstart: zi("Animation", "AnimationStart"), transitionend: zi("Transition", "TransitionEnd") }, Bo = {}, Cc = {};
  p && (Cc = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);
  function Bi(e) {
    if (Bo[e]) return Bo[e];
    if (!Gn[e]) return e;
    var t = Gn[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in Cc) return Bo[e] = t[r];
    return e;
  }
  var Ec = Bi("animationend"), Mc = Bi("animationiteration"), Rc = Bi("animationstart"), Ac = Bi("transitionend"), Dc = /* @__PURE__ */ new Map(), Vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function tn(e, t) {
    Dc.set(e, t), d(t, [e]);
  }
  for (var Uo = 0; Uo < Vc.length; Uo++) {
    var Wo = Vc[Uo], _y = Wo.toLowerCase(), jy = Wo[0].toUpperCase() + Wo.slice(1);
    tn(_y, "on" + jy);
  }
  tn(Ec, "onAnimationEnd"), tn(Mc, "onAnimationIteration"), tn(Rc, "onAnimationStart"), tn("dblclick", "onDoubleClick"), tn("focusin", "onFocus"), tn("focusout", "onBlur"), tn(Ac, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
  function Lc(e, t, r) {
    var o = e.type || "unknown-event";
    e.currentTarget = r, _m(o, t, void 0, e), e.currentTarget = null;
  }
  function Nc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r], a = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = o.length - 1; 0 <= h; h--) {
          var v = o[h], x = v.instance, E = v.currentTarget;
          if (v = v.listener, x !== u && a.isPropagationStopped()) break e;
          Lc(a, v, E), u = x;
        }
        else for (h = 0; h < o.length; h++) {
          if (v = o[h], x = v.instance, E = v.currentTarget, v = v.listener, x !== u && a.isPropagationStopped()) break e;
          Lc(a, v, E), u = x;
        }
      }
    }
    if (Pi) throw e = wo, Pi = !1, wo = null, e;
  }
  function ke(e, t) {
    var r = t[Zo];
    r === void 0 && (r = t[Zo] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    r.has(o) || (_c(t, e, 2, !1), r.add(o));
  }
  function $o(e, t, r) {
    var o = 0;
    t && (o |= 4), _c(r, e, o, t);
  }
  var Ui = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Ui]) {
      e[Ui] = !0, l.forEach(function(r) {
        r !== "selectionchange" && (Iy.has(r) || $o(r, !1, e), $o(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ui] || (t[Ui] = !0, $o("selectionchange", !1, t));
    }
  }
  function _c(e, t, r, o) {
    switch (rc(t)) {
      case 1:
        var a = Zm;
        break;
      case 4:
        a = qm;
        break;
      default:
        a = Eo;
    }
    r = a.bind(null, t, r, e), a = void 0, !vo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), o ? a !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: a }) : e.addEventListener(t, r, !0) : a !== void 0 ? e.addEventListener(t, r, { passive: a }) : e.addEventListener(t, r, !1);
  }
  function Ho(e, t, r, o, a) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var v = o.stateNode.containerInfo;
        if (v === a || v.nodeType === 8 && v.parentNode === a) break;
        if (h === 4) for (h = o.return; h !== null; ) {
          var x = h.tag;
          if ((x === 3 || x === 4) && (x = h.stateNode.containerInfo, x === a || x.nodeType === 8 && x.parentNode === a)) return;
          h = h.return;
        }
        for (; v !== null; ) {
          if (h = Sn(v), h === null) return;
          if (x = h.tag, x === 5 || x === 6) {
            o = u = h;
            continue e;
          }
          v = v.parentNode;
        }
      }
      o = o.return;
    }
    zu(function() {
      var E = u, N = mo(r), _ = [];
      e: {
        var L = Dc.get(e);
        if (L !== void 0) {
          var H = Ao, X = e;
          switch (e) {
            case "keypress":
              if (ji(r) === 0) break e;
            case "keydown":
            case "keyup":
              H = dy;
              break;
            case "focusin":
              X = "focus", H = Lo;
              break;
            case "focusout":
              X = "blur", H = Lo;
              break;
            case "beforeblur":
            case "afterblur":
              H = Lo;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = oc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = ey;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = my;
              break;
            case Ec:
            case Mc:
            case Rc:
              H = ry;
              break;
            case Ac:
              H = gy;
              break;
            case "scroll":
              H = Jm;
              break;
            case "wheel":
              H = wy;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = sy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = ac;
          }
          var Z = (t & 4) !== 0, _e = !Z && e === "scroll", P = Z ? L !== null ? L + "Capture" : null : L;
          Z = [];
          for (var k = E, C; k !== null; ) {
            C = k;
            var F = C.stateNode;
            if (C.tag === 5 && F !== null && (C = F, P !== null && (F = Tr(k, P), F != null && Z.push(Wr(k, F, C)))), _e) break;
            k = k.return;
          }
          0 < Z.length && (L = new H(L, X, null, r, N), _.push({ event: L, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (L = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", L && r !== po && (X = r.relatedTarget || r.fromElement) && (Sn(X) || X[Ut])) break e;
          if ((H || L) && (L = N.window === N ? N : (L = N.ownerDocument) ? L.defaultView || L.parentWindow : window, H ? (X = r.relatedTarget || r.toElement, H = E, X = X ? Sn(X) : null, X !== null && (_e = xn(X), X !== _e || X.tag !== 5 && X.tag !== 6) && (X = null)) : (H = null, X = E), H !== X)) {
            if (Z = oc, F = "onMouseLeave", P = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (Z = ac, F = "onPointerLeave", P = "onPointerEnter", k = "pointer"), _e = H == null ? L : Qn(H), C = X == null ? L : Qn(X), L = new Z(F, k + "leave", H, r, N), L.target = _e, L.relatedTarget = C, F = null, Sn(N) === E && (Z = new Z(P, k + "enter", X, r, N), Z.target = C, Z.relatedTarget = _e, F = Z), _e = F, H && X) t: {
              for (Z = H, P = X, k = 0, C = Z; C; C = Xn(C)) k++;
              for (C = 0, F = P; F; F = Xn(F)) C++;
              for (; 0 < k - C; ) Z = Xn(Z), k--;
              for (; 0 < C - k; ) P = Xn(P), C--;
              for (; k--; ) {
                if (Z === P || P !== null && Z === P.alternate) break t;
                Z = Xn(Z), P = Xn(P);
              }
              Z = null;
            }
            else Z = null;
            H !== null && jc(_, L, H, Z, !1), X !== null && _e !== null && jc(_, _e, X, Z, !0);
          }
        }
        e: {
          if (L = E ? Qn(E) : window, H = L.nodeName && L.nodeName.toLowerCase(), H === "select" || H === "input" && L.type === "file") var J = Ey;
          else if (pc(L)) if (yc) J = Dy;
          else {
            J = Ry;
            var ee = My;
          }
          else (H = L.nodeName) && H.toLowerCase() === "input" && (L.type === "checkbox" || L.type === "radio") && (J = Ay);
          if (J && (J = J(e, E))) {
            mc(_, J, r, N);
            break e;
          }
          ee && ee(e, L, E), e === "focusout" && (ee = L._wrapperState) && ee.controlled && L.type === "number" && ao(L, "number", L.value);
        }
        switch (ee = E ? Qn(E) : window, e) {
          case "focusin":
            (pc(ee) || ee.contentEditable === "true") && (Kn = ee, Oo = E, zr = null);
            break;
          case "focusout":
            zr = Oo = Kn = null;
            break;
          case "mousedown":
            zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zo = !1, Pc(_, r, N);
            break;
          case "selectionchange":
            if (Ny) break;
          case "keydown":
          case "keyup":
            Pc(_, r, N);
        }
        var te;
        if (_o) e: {
          switch (e) {
            case "compositionstart":
              var ie = "onCompositionStart";
              break e;
            case "compositionend":
              ie = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ie = "onCompositionUpdate";
              break e;
          }
          ie = void 0;
        }
        else Hn ? dc(e, r) && (ie = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (ie = "onCompositionStart");
        ie && (uc && r.locale !== "ko" && (Hn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Hn && (te = ic()) : (en = N, Ro = "value" in en ? en.value : en.textContent, Hn = !0)), ee = Wi(E, ie), 0 < ee.length && (ie = new lc(ie, e, null, r, N), _.push({ event: ie, listeners: ee }), te ? ie.data = te : (te = hc(r), te !== null && (ie.data = te)))), (te = Sy ? ky(e, r) : Ty(e, r)) && (E = Wi(E, "onBeforeInput"), 0 < E.length && (N = new lc("onBeforeInput", "beforeinput", null, r, N), _.push({ event: N, listeners: E }), N.data = te));
      }
      Nc(_, t);
    });
  }
  function Wr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Wi(e, t) {
    for (var r = t + "Capture", o = []; e !== null; ) {
      var a = e, u = a.stateNode;
      a.tag === 5 && u !== null && (a = u, u = Tr(e, r), u != null && o.unshift(Wr(e, u, a)), u = Tr(e, t), u != null && o.push(Wr(e, u, a))), e = e.return;
    }
    return o;
  }
  function Xn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function jc(e, t, r, o, a) {
    for (var u = t._reactName, h = []; r !== null && r !== o; ) {
      var v = r, x = v.alternate, E = v.stateNode;
      if (x !== null && x === o) break;
      v.tag === 5 && E !== null && (v = E, a ? (x = Tr(r, u), x != null && h.unshift(Wr(r, x, v))) : a || (x = Tr(r, u), x != null && h.push(Wr(r, x, v)))), r = r.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Fy = /\r\n?/g, Oy = /\u0000|\uFFFD/g;
  function Ic(e) {
    return (typeof e == "string" ? e : "" + e).replace(Fy, `
`).replace(Oy, "");
  }
  function $i(e, t, r) {
    if (t = Ic(t), Ic(e) !== t && r) throw Error(s(425));
  }
  function Hi() {
  }
  var Ko = null, Go = null;
  function Xo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Yo = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, Fc = typeof Promise == "function" ? Promise : void 0, By = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fc < "u" ? function(e) {
    return Fc.resolve(null).then(e).catch(Uy);
  } : Yo;
  function Uy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qo(e, t) {
    var r = t, o = 0;
    do {
      var a = r.nextSibling;
      if (e.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
        if (o === 0) {
          e.removeChild(a), Lr(t);
          return;
        }
        o--;
      } else r !== "$" && r !== "$?" && r !== "$!" || o++;
      r = a;
    } while (r);
    Lr(t);
  }
  function nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Oc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Yn = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + Yn, $r = "__reactProps$" + Yn, Ut = "__reactContainer$" + Yn, Zo = "__reactEvents$" + Yn, Wy = "__reactListeners$" + Yn, $y = "__reactHandles$" + Yn;
  function Sn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[Ut] || r[Nt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Oc(e); e !== null; ) {
          if (r = e[Nt]) return r;
          e = Oc(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Hr(e) {
    return e = e[Nt] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ki(e) {
    return e[$r] || null;
  }
  var qo = [], Zn = -1;
  function rn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Zn || (e.current = qo[Zn], qo[Zn] = null, Zn--);
  }
  function xe(e, t) {
    Zn++, qo[Zn] = e.current, e.current = t;
  }
  var sn = {}, Ye = rn(sn), nt = rn(!1), kn = sn;
  function qn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return sn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var a = {}, u;
    for (u in r) a[u] = t[u];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function rt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Gi() {
    Te(nt), Te(Ye);
  }
  function zc(e, t, r) {
    if (Ye.current !== sn) throw Error(s(168));
    xe(Ye, t), xe(nt, r);
  }
  function Bc(e, t, r) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return r;
    o = o.getChildContext();
    for (var a in o) if (!(a in t)) throw Error(s(108, we(e) || "Unknown", a));
    return W({}, r, o);
  }
  function Xi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, kn = Ye.current, xe(Ye, e), xe(nt, nt.current), !0;
  }
  function Uc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    r ? (e = Bc(e, t, kn), o.__reactInternalMemoizedMergedChildContext = e, Te(nt), Te(Ye), xe(Ye, e)) : Te(nt), xe(nt, r);
  }
  var Wt = null, Yi = !1, Jo = !1;
  function Wc(e) {
    Wt === null ? Wt = [e] : Wt.push(e);
  }
  function Hy(e) {
    Yi = !0, Wc(e);
  }
  function on() {
    if (!Jo && Wt !== null) {
      Jo = !0;
      var e = 0, t = me;
      try {
        var r = Wt;
        for (me = 1; e < r.length; e++) {
          var o = r[e];
          do
            o = o(!0);
          while (o !== null);
        }
        Wt = null, Yi = !1;
      } catch (a) {
        throw Wt !== null && (Wt = Wt.slice(e + 1)), Hu(xo, on), a;
      } finally {
        me = t, Jo = !1;
      }
    }
    return null;
  }
  var Jn = [], bn = 0, Qi = null, Zi = 0, pt = [], mt = 0, Tn = null, $t = 1, Ht = "";
  function Pn(e, t) {
    Jn[bn++] = Zi, Jn[bn++] = Qi, Qi = e, Zi = t;
  }
  function $c(e, t, r) {
    pt[mt++] = $t, pt[mt++] = Ht, pt[mt++] = Tn, Tn = e;
    var o = $t;
    e = Ht;
    var a = 32 - kt(o) - 1;
    o &= ~(1 << a), r += 1;
    var u = 32 - kt(t) + a;
    if (30 < u) {
      var h = a - a % 5;
      u = (o & (1 << h) - 1).toString(32), o >>= h, a -= h, $t = 1 << 32 - kt(t) + a | r << a | o, Ht = u + e;
    } else $t = 1 << u | r << a | o, Ht = e;
  }
  function bo(e) {
    e.return !== null && (Pn(e, 1), $c(e, 1, 0));
  }
  function el(e) {
    for (; e === Qi; ) Qi = Jn[--bn], Jn[bn] = null, Zi = Jn[--bn], Jn[bn] = null;
    for (; e === Tn; ) Tn = pt[--mt], pt[mt] = null, Ht = pt[--mt], pt[mt] = null, $t = pt[--mt], pt[mt] = null;
  }
  var ct = null, ft = null, Ce = !1, Pt = null;
  function Hc(e, t) {
    var r = wt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function Kc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, ft = nn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, ft = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Tn !== null ? { id: $t, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = wt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, ct = e, ft = null, !0) : !1;
      default:
        return !1;
    }
  }
  function tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function nl(e) {
    if (Ce) {
      var t = ft;
      if (t) {
        var r = t;
        if (!Kc(e, t)) {
          if (tl(e)) throw Error(s(418));
          t = nn(r.nextSibling);
          var o = ct;
          t && Kc(e, t) ? Hc(o, r) : (e.flags = e.flags & -4097 | 2, Ce = !1, ct = e);
        }
      } else {
        if (tl(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Ce = !1, ct = e;
      }
    }
  }
  function Gc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
  }
  function qi(e) {
    if (e !== ct) return !1;
    if (!Ce) return Gc(e), Ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xo(e.type, e.memoizedProps)), t && (t = ft)) {
      if (tl(e)) throw Xc(), Error(s(418));
      for (; t; ) Hc(e, t), t = nn(t.nextSibling);
    }
    if (Gc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ft = nn(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xc() {
    for (var e = ft; e; ) e = nn(e.nextSibling);
  }
  function er() {
    ft = ct = null, Ce = !1;
  }
  function rl(e) {
    Pt === null ? Pt = [e] : Pt.push(e);
  }
  var Ky = z.ReactCurrentBatchConfig;
  function Kr(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(s(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var a = o, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(h) {
          var v = a.refs;
          h === null ? delete v[u] : v[u] = h;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!r._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Ji(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Yc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qc(e) {
    function t(P, k) {
      if (e) {
        var C = P.deletions;
        C === null ? (P.deletions = [k], P.flags |= 16) : C.push(k);
      }
    }
    function r(P, k) {
      if (!e) return null;
      for (; k !== null; ) t(P, k), k = k.sibling;
      return null;
    }
    function o(P, k) {
      for (P = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? P.set(k.key, k) : P.set(k.index, k), k = k.sibling;
      return P;
    }
    function a(P, k) {
      return P = pn(P, k), P.index = 0, P.sibling = null, P;
    }
    function u(P, k, C) {
      return P.index = C, e ? (C = P.alternate, C !== null ? (C = C.index, C < k ? (P.flags |= 2, k) : C) : (P.flags |= 2, k)) : (P.flags |= 1048576, k);
    }
    function h(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function v(P, k, C, F) {
      return k === null || k.tag !== 6 ? (k = Yl(C, P.mode, F), k.return = P, k) : (k = a(k, C), k.return = P, k);
    }
    function x(P, k, C, F) {
      var J = C.type;
      return J === re ? N(P, k, C.props.children, F, C.key) : k !== null && (k.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Se && Yc(J) === k.type) ? (F = a(k, C.props), F.ref = Kr(P, k, C), F.return = P, F) : (F = ks(C.type, C.key, C.props, null, P.mode, F), F.ref = Kr(P, k, C), F.return = P, F);
    }
    function E(P, k, C, F) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== C.containerInfo || k.stateNode.implementation !== C.implementation ? (k = Ql(C, P.mode, F), k.return = P, k) : (k = a(k, C.children || []), k.return = P, k);
    }
    function N(P, k, C, F, J) {
      return k === null || k.tag !== 7 ? (k = Ln(C, P.mode, F, J), k.return = P, k) : (k = a(k, C), k.return = P, k);
    }
    function _(P, k, C) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Yl("" + k, P.mode, C), k.return = P, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case b:
            return C = ks(k.type, k.key, k.props, null, P.mode, C), C.ref = Kr(P, null, k), C.return = P, C;
          case ne:
            return k = Ql(k, P.mode, C), k.return = P, k;
          case Se:
            var F = k._init;
            return _(P, F(k._payload), C);
        }
        if (xr(k) || Q(k)) return k = Ln(k, P.mode, C, null), k.return = P, k;
        Ji(P, k);
      }
      return null;
    }
    function L(P, k, C, F) {
      var J = k !== null ? k.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number") return J !== null ? null : v(P, k, "" + C, F);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case b:
            return C.key === J ? x(P, k, C, F) : null;
          case ne:
            return C.key === J ? E(P, k, C, F) : null;
          case Se:
            return J = C._init, L(
              P,
              k,
              J(C._payload),
              F
            );
        }
        if (xr(C) || Q(C)) return J !== null ? null : N(P, k, C, F, null);
        Ji(P, C);
      }
      return null;
    }
    function H(P, k, C, F, J) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return P = P.get(C) || null, v(k, P, "" + F, J);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return P = P.get(F.key === null ? C : F.key) || null, x(k, P, F, J);
          case ne:
            return P = P.get(F.key === null ? C : F.key) || null, E(k, P, F, J);
          case Se:
            var ee = F._init;
            return H(P, k, C, ee(F._payload), J);
        }
        if (xr(F) || Q(F)) return P = P.get(C) || null, N(k, P, F, J, null);
        Ji(k, F);
      }
      return null;
    }
    function X(P, k, C, F) {
      for (var J = null, ee = null, te = k, ie = k = 0, $e = null; te !== null && ie < C.length; ie++) {
        te.index > ie ? ($e = te, te = null) : $e = te.sibling;
        var he = L(P, te, C[ie], F);
        if (he === null) {
          te === null && (te = $e);
          break;
        }
        e && te && he.alternate === null && t(P, te), k = u(he, k, ie), ee === null ? J = he : ee.sibling = he, ee = he, te = $e;
      }
      if (ie === C.length) return r(P, te), Ce && Pn(P, ie), J;
      if (te === null) {
        for (; ie < C.length; ie++) te = _(P, C[ie], F), te !== null && (k = u(te, k, ie), ee === null ? J = te : ee.sibling = te, ee = te);
        return Ce && Pn(P, ie), J;
      }
      for (te = o(P, te); ie < C.length; ie++) $e = H(te, P, ie, C[ie], F), $e !== null && (e && $e.alternate !== null && te.delete($e.key === null ? ie : $e.key), k = u($e, k, ie), ee === null ? J = $e : ee.sibling = $e, ee = $e);
      return e && te.forEach(function(mn) {
        return t(P, mn);
      }), Ce && Pn(P, ie), J;
    }
    function Z(P, k, C, F) {
      var J = Q(C);
      if (typeof J != "function") throw Error(s(150));
      if (C = J.call(C), C == null) throw Error(s(151));
      for (var ee = J = null, te = k, ie = k = 0, $e = null, he = C.next(); te !== null && !he.done; ie++, he = C.next()) {
        te.index > ie ? ($e = te, te = null) : $e = te.sibling;
        var mn = L(P, te, he.value, F);
        if (mn === null) {
          te === null && (te = $e);
          break;
        }
        e && te && mn.alternate === null && t(P, te), k = u(mn, k, ie), ee === null ? J = mn : ee.sibling = mn, ee = mn, te = $e;
      }
      if (he.done) return r(
        P,
        te
      ), Ce && Pn(P, ie), J;
      if (te === null) {
        for (; !he.done; ie++, he = C.next()) he = _(P, he.value, F), he !== null && (k = u(he, k, ie), ee === null ? J = he : ee.sibling = he, ee = he);
        return Ce && Pn(P, ie), J;
      }
      for (te = o(P, te); !he.done; ie++, he = C.next()) he = H(te, P, ie, he.value, F), he !== null && (e && he.alternate !== null && te.delete(he.key === null ? ie : he.key), k = u(he, k, ie), ee === null ? J = he : ee.sibling = he, ee = he);
      return e && te.forEach(function(Pg) {
        return t(P, Pg);
      }), Ce && Pn(P, ie), J;
    }
    function _e(P, k, C, F) {
      if (typeof C == "object" && C !== null && C.type === re && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case b:
            e: {
              for (var J = C.key, ee = k; ee !== null; ) {
                if (ee.key === J) {
                  if (J = C.type, J === re) {
                    if (ee.tag === 7) {
                      r(P, ee.sibling), k = a(ee, C.props.children), k.return = P, P = k;
                      break e;
                    }
                  } else if (ee.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Se && Yc(J) === ee.type) {
                    r(P, ee.sibling), k = a(ee, C.props), k.ref = Kr(P, ee, C), k.return = P, P = k;
                    break e;
                  }
                  r(P, ee);
                  break;
                } else t(P, ee);
                ee = ee.sibling;
              }
              C.type === re ? (k = Ln(C.props.children, P.mode, F, C.key), k.return = P, P = k) : (F = ks(C.type, C.key, C.props, null, P.mode, F), F.ref = Kr(P, k, C), F.return = P, P = F);
            }
            return h(P);
          case ne:
            e: {
              for (ee = C.key; k !== null; ) {
                if (k.key === ee) if (k.tag === 4 && k.stateNode.containerInfo === C.containerInfo && k.stateNode.implementation === C.implementation) {
                  r(P, k.sibling), k = a(k, C.children || []), k.return = P, P = k;
                  break e;
                } else {
                  r(P, k);
                  break;
                }
                else t(P, k);
                k = k.sibling;
              }
              k = Ql(C, P.mode, F), k.return = P, P = k;
            }
            return h(P);
          case Se:
            return ee = C._init, _e(P, k, ee(C._payload), F);
        }
        if (xr(C)) return X(P, k, C, F);
        if (Q(C)) return Z(P, k, C, F);
        Ji(P, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, k !== null && k.tag === 6 ? (r(P, k.sibling), k = a(k, C), k.return = P, P = k) : (r(P, k), k = Yl(C, P.mode, F), k.return = P, P = k), h(P)) : r(P, k);
    }
    return _e;
  }
  var tr = Qc(!0), Zc = Qc(!1), bi = rn(null), es = null, nr = null, il = null;
  function sl() {
    il = nr = es = null;
  }
  function ol(e) {
    var t = bi.current;
    Te(bi), e._currentValue = t;
  }
  function ll(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function rr(e, t) {
    es = e, il = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), e.firstContext = null);
  }
  function yt(e) {
    var t = e._currentValue;
    if (il !== e) if (e = { context: e, memoizedValue: t, next: null }, nr === null) {
      if (es === null) throw Error(s(308));
      nr = e, es.dependencies = { lanes: 0, firstContext: e };
    } else nr = nr.next = e;
    return t;
  }
  var Cn = null;
  function al(e) {
    Cn === null ? Cn = [e] : Cn.push(e);
  }
  function qc(e, t, r, o) {
    var a = t.interleaved;
    return a === null ? (r.next = r, al(t)) : (r.next = a.next, a.next = r), t.interleaved = r, Kt(e, o);
  }
  function Kt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var ln = !1;
  function ul(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Jc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Gt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ue & 2) !== 0) {
      var a = o.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), o.pending = t, Kt(e, r);
    }
    return a = o.interleaved, a === null ? (t.next = t, al(o)) : (t.next = a.next, a.next = t), o.interleaved = t, Kt(e, r);
  }
  function ts(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, r |= o, t.lanes = r, To(e, r);
    }
  }
  function bc(e, t) {
    var r = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, r === o)) {
      var a = null, u = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var h = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          u === null ? a = u = h : u = u.next = h, r = r.next;
        } while (r !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      r = { baseState: o.baseState, firstBaseUpdate: a, lastBaseUpdate: u, shared: o.shared, effects: o.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function ns(e, t, r, o) {
    var a = e.updateQueue;
    ln = !1;
    var u = a.firstBaseUpdate, h = a.lastBaseUpdate, v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var x = v, E = x.next;
      x.next = null, h === null ? u = E : h.next = E, h = x;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, v = N.lastBaseUpdate, v !== h && (v === null ? N.firstBaseUpdate = E : v.next = E, N.lastBaseUpdate = x));
    }
    if (u !== null) {
      var _ = a.baseState;
      h = 0, N = E = x = null, v = u;
      do {
        var L = v.lane, H = v.eventTime;
        if ((o & L) === L) {
          N !== null && (N = N.next = {
            eventTime: H,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var X = e, Z = v;
            switch (L = t, H = r, Z.tag) {
              case 1:
                if (X = Z.payload, typeof X == "function") {
                  _ = X.call(H, _, L);
                  break e;
                }
                _ = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = Z.payload, L = typeof X == "function" ? X.call(H, _, L) : X, L == null) break e;
                _ = W({}, _, L);
                break e;
              case 2:
                ln = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, L = a.effects, L === null ? a.effects = [v] : L.push(v));
        } else H = { eventTime: H, lane: L, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, N === null ? (E = N = H, x = _) : N = N.next = H, h |= L;
        if (v = v.next, v === null) {
          if (v = a.shared.pending, v === null) break;
          L = v, v = L.next, L.next = null, a.lastBaseUpdate = L, a.shared.pending = null;
        }
      } while (!0);
      if (N === null && (x = _), a.baseState = x, a.firstBaseUpdate = E, a.lastBaseUpdate = N, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          h |= a.lane, a = a.next;
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      Rn |= h, e.lanes = h, e.memoizedState = _;
    }
  }
  function ef(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], a = o.callback;
      if (a !== null) {
        if (o.callback = null, o = r, typeof a != "function") throw Error(s(191, a));
        a.call(o);
      }
    }
  }
  var Gr = {}, _t = rn(Gr), Xr = rn(Gr), Yr = rn(Gr);
  function En(e) {
    if (e === Gr) throw Error(s(174));
    return e;
  }
  function cl(e, t) {
    switch (xe(Yr, t), xe(Xr, e), xe(_t, Gr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : co(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = co(t, e);
    }
    Te(_t), xe(_t, t);
  }
  function ir() {
    Te(_t), Te(Xr), Te(Yr);
  }
  function tf(e) {
    En(Yr.current);
    var t = En(_t.current), r = co(t, e.type);
    t !== r && (xe(Xr, e), xe(_t, r));
  }
  function fl(e) {
    Xr.current === e && (Te(_t), Te(Xr));
  }
  var Re = rn(0);
  function rs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var dl = [];
  function hl() {
    for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
    dl.length = 0;
  }
  var is = z.ReactCurrentDispatcher, pl = z.ReactCurrentBatchConfig, Mn = 0, Ae = null, Oe = null, Ue = null, ss = !1, Qr = !1, Zr = 0, Gy = 0;
  function Qe() {
    throw Error(s(321));
  }
  function ml(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Tt(e[r], t[r])) return !1;
    return !0;
  }
  function yl(e, t, r, o, a, u) {
    if (Mn = u, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, is.current = e === null || e.memoizedState === null ? Zy : qy, e = r(o, a), Qr) {
      u = 0;
      do {
        if (Qr = !1, Zr = 0, 25 <= u) throw Error(s(301));
        u += 1, Ue = Oe = null, t.updateQueue = null, is.current = Jy, e = r(o, a);
      } while (Qr);
    }
    if (is.current = as, t = Oe !== null && Oe.next !== null, Mn = 0, Ue = Oe = Ae = null, ss = !1, t) throw Error(s(300));
    return e;
  }
  function gl() {
    var e = Zr !== 0;
    return Zr = 0, e;
  }
  function jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Ae.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function gt() {
    if (Oe === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ue === null ? Ae.memoizedState : Ue.next;
    if (t !== null) Ue = t, Oe = e;
    else {
      if (e === null) throw Error(s(310));
      Oe = e, e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, Ue === null ? Ae.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vl(e) {
    var t = gt(), r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Oe, a = o.baseQueue, u = r.pending;
    if (u !== null) {
      if (a !== null) {
        var h = a.next;
        a.next = u.next, u.next = h;
      }
      o.baseQueue = a = u, r.pending = null;
    }
    if (a !== null) {
      u = a.next, o = o.baseState;
      var v = h = null, x = null, E = u;
      do {
        var N = E.lane;
        if ((Mn & N) === N) x !== null && (x = x.next = { lane: 0, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null }), o = E.hasEagerState ? E.eagerState : e(o, E.action);
        else {
          var _ = {
            lane: N,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          };
          x === null ? (v = x = _, h = o) : x = x.next = _, Ae.lanes |= N, Rn |= N;
        }
        E = E.next;
      } while (E !== null && E !== u);
      x === null ? h = o : x.next = v, Tt(o, t.memoizedState) || (it = !0), t.memoizedState = o, t.baseState = h, t.baseQueue = x, r.lastRenderedState = o;
    }
    if (e = r.interleaved, e !== null) {
      a = e;
      do
        u = a.lane, Ae.lanes |= u, Rn |= u, a = a.next;
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function wl(e) {
    var t = gt(), r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch, a = r.pending, u = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var h = a = a.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== a);
      Tt(u, t.memoizedState) || (it = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), r.lastRenderedState = u;
    }
    return [u, o];
  }
  function nf() {
  }
  function rf(e, t) {
    var r = Ae, o = gt(), a = t(), u = !Tt(o.memoizedState, a);
    if (u && (o.memoizedState = a, it = !0), o = o.queue, xl(lf.bind(null, r, o, e), [e]), o.getSnapshot !== t || u || Ue !== null && Ue.memoizedState.tag & 1) {
      if (r.flags |= 2048, Jr(9, of.bind(null, r, o, a, t), void 0, null), We === null) throw Error(s(349));
      (Mn & 30) !== 0 || sf(r, t, a);
    }
    return a;
  }
  function sf(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function of(e, t, r, o) {
    t.value = r, t.getSnapshot = o, af(t) && uf(e);
  }
  function lf(e, t, r) {
    return r(function() {
      af(t) && uf(e);
    });
  }
  function af(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Tt(e, r);
    } catch {
      return !0;
    }
  }
  function uf(e) {
    var t = Kt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function cf(e) {
    var t = jt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Qy.bind(null, Ae, e), [t.memoizedState, e];
  }
  function Jr(e, t, r, o) {
    return e = { tag: e, create: t, destroy: r, deps: o, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (o = r.next, r.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function ff() {
    return gt().memoizedState;
  }
  function os(e, t, r, o) {
    var a = jt();
    Ae.flags |= e, a.memoizedState = Jr(1 | t, r, void 0, o === void 0 ? null : o);
  }
  function ls(e, t, r, o) {
    var a = gt();
    o = o === void 0 ? null : o;
    var u = void 0;
    if (Oe !== null) {
      var h = Oe.memoizedState;
      if (u = h.destroy, o !== null && ml(o, h.deps)) {
        a.memoizedState = Jr(t, r, u, o);
        return;
      }
    }
    Ae.flags |= e, a.memoizedState = Jr(1 | t, r, u, o);
  }
  function df(e, t) {
    return os(8390656, 8, e, t);
  }
  function xl(e, t) {
    return ls(2048, 8, e, t);
  }
  function hf(e, t) {
    return ls(4, 2, e, t);
  }
  function pf(e, t) {
    return ls(4, 4, e, t);
  }
  function mf(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function yf(e, t, r) {
    return r = r != null ? r.concat([e]) : null, ls(4, 4, mf.bind(null, t, e), r);
  }
  function Sl() {
  }
  function gf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && ml(t, o[1]) ? o[0] : (r.memoizedState = [e, t], e);
  }
  function vf(e, t) {
    var r = gt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && ml(t, o[1]) ? o[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function wf(e, t, r) {
    return (Mn & 21) === 0 ? (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = r) : (Tt(r, t) || (r = Yu(), Ae.lanes |= r, Rn |= r, e.baseState = !0), t);
  }
  function Xy(e, t) {
    var r = me;
    me = r !== 0 && 4 > r ? r : 4, e(!0);
    var o = pl.transition;
    pl.transition = {};
    try {
      e(!1), t();
    } finally {
      me = r, pl.transition = o;
    }
  }
  function xf() {
    return gt().memoizedState;
  }
  function Yy(e, t, r) {
    var o = dn(e);
    if (r = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null }, Sf(e)) kf(t, r);
    else if (r = qc(e, t, r, o), r !== null) {
      var a = be();
      Rt(r, e, o, a), Tf(r, t, o);
    }
  }
  function Qy(e, t, r) {
    var o = dn(e), a = { lane: o, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Sf(e)) kf(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, v = u(h, r);
        if (a.hasEagerState = !0, a.eagerState = v, Tt(v, h)) {
          var x = t.interleaved;
          x === null ? (a.next = a, al(t)) : (a.next = x.next, x.next = a), t.interleaved = a;
          return;
        }
      } catch {
      }
      r = qc(e, t, a, o), r !== null && (a = be(), Rt(r, e, o, a), Tf(r, t, o));
    }
  }
  function Sf(e) {
    var t = e.alternate;
    return e === Ae || t !== null && t === Ae;
  }
  function kf(e, t) {
    Qr = ss = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function Tf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, r |= o, t.lanes = r, To(e, r);
    }
  }
  var as = { readContext: yt, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, Zy = { readContext: yt, useCallback: function(e, t) {
    return jt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: yt, useEffect: df, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, os(
      4194308,
      4,
      mf.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return os(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return os(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = jt();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var o = jt();
    return t = r !== void 0 ? r(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = Yy.bind(null, Ae, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = jt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: cf, useDebugValue: Sl, useDeferredValue: function(e) {
    return jt().memoizedState = e;
  }, useTransition: function() {
    var e = cf(!1), t = e[0];
    return e = Xy.bind(null, e[1]), jt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var o = Ae, a = jt();
    if (Ce) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else {
      if (r = t(), We === null) throw Error(s(349));
      (Mn & 30) !== 0 || sf(o, t, r);
    }
    a.memoizedState = r;
    var u = { value: r, getSnapshot: t };
    return a.queue = u, df(lf.bind(
      null,
      o,
      u,
      e
    ), [e]), o.flags |= 2048, Jr(9, of.bind(null, o, u, r, t), void 0, null), r;
  }, useId: function() {
    var e = jt(), t = We.identifierPrefix;
    if (Ce) {
      var r = Ht, o = $t;
      r = (o & ~(1 << 32 - kt(o) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Zr++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = Gy++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, qy = {
    readContext: yt,
    useCallback: gf,
    useContext: yt,
    useEffect: xl,
    useImperativeHandle: yf,
    useInsertionEffect: hf,
    useLayoutEffect: pf,
    useMemo: vf,
    useReducer: vl,
    useRef: ff,
    useState: function() {
      return vl(qr);
    },
    useDebugValue: Sl,
    useDeferredValue: function(e) {
      var t = gt();
      return wf(t, Oe.memoizedState, e);
    },
    useTransition: function() {
      var e = vl(qr)[0], t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: nf,
    useSyncExternalStore: rf,
    useId: xf,
    unstable_isNewReconciler: !1
  }, Jy = { readContext: yt, useCallback: gf, useContext: yt, useEffect: xl, useImperativeHandle: yf, useInsertionEffect: hf, useLayoutEffect: pf, useMemo: vf, useReducer: wl, useRef: ff, useState: function() {
    return wl(qr);
  }, useDebugValue: Sl, useDeferredValue: function(e) {
    var t = gt();
    return Oe === null ? t.memoizedState = e : wf(t, Oe.memoizedState, e);
  }, useTransition: function() {
    var e = wl(qr)[0], t = gt().memoizedState;
    return [e, t];
  }, useMutableSource: nf, useSyncExternalStore: rf, useId: xf, unstable_isNewReconciler: !1 };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function kl(e, t, r, o) {
    t = e.memoizedState, r = r(o, t), r = r == null ? t : W({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var us = { isMounted: function(e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var o = be(), a = dn(e), u = Gt(o, a);
    u.payload = t, r != null && (u.callback = r), t = an(e, u, a), t !== null && (Rt(t, e, a, o), ts(t, e, a));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var o = be(), a = dn(e), u = Gt(o, a);
    u.tag = 1, u.payload = t, r != null && (u.callback = r), t = an(e, u, a), t !== null && (Rt(t, e, a, o), ts(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = be(), o = dn(e), a = Gt(r, o);
    a.tag = 2, t != null && (a.callback = t), t = an(e, a, o), t !== null && (Rt(t, e, o, r), ts(t, e, o));
  } };
  function Pf(e, t, r, o, a, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Or(r, o) || !Or(a, u) : !0;
  }
  function Cf(e, t, r) {
    var o = !1, a = sn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = yt(u) : (a = rt(t) ? kn : Ye.current, o = t.contextTypes, u = (o = o != null) ? qn(e, a) : sn), t = new t(r, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = us, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Ef(e, t, r, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, o), t.state !== e && us.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t, r, o) {
    var a = e.stateNode;
    a.props = r, a.state = e.memoizedState, a.refs = {}, ul(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? a.context = yt(u) : (u = rt(t) ? kn : Ye.current, a.context = qn(e, u)), a.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (kl(e, t, u, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && us.enqueueReplaceState(a, a.state, null), ns(e, r, a, o), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function sr(e, t) {
    try {
      var r = "", o = t;
      do
        r += fe(o), o = o.return;
      while (o);
      var a = r;
    } catch (u) {
      a = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Pl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Cl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var by = typeof WeakMap == "function" ? WeakMap : Map;
  function Mf(e, t, r) {
    r = Gt(-1, r), r.tag = 3, r.payload = { element: null };
    var o = t.value;
    return r.callback = function() {
      ys || (ys = !0, Bl = o), Cl(e, t);
    }, r;
  }
  function Rf(e, t, r) {
    r = Gt(-1, r), r.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      r.payload = function() {
        return o(a);
      }, r.callback = function() {
        Cl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (r.callback = function() {
      Cl(e, t), typeof o != "function" && (cn === null ? cn = /* @__PURE__ */ new Set([this]) : cn.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), r;
  }
  function Af(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new by();
      var a = /* @__PURE__ */ new Set();
      o.set(t, a);
    } else a = o.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), o.set(t, a));
    a.has(r) || (a.add(r), e = hg.bind(null, e, t, r), t.then(e, e));
  }
  function Df(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vf(e, t, r, o, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Gt(-1, 1), t.tag = 2, an(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var eg = z.ReactCurrentOwner, it = !1;
  function Je(e, t, r, o) {
    t.child = e === null ? Zc(t, null, r, o) : tr(t, e.child, r, o);
  }
  function Lf(e, t, r, o, a) {
    r = r.render;
    var u = t.ref;
    return rr(t, a), o = yl(e, t, r, o, u, a), r = gl(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Xt(e, t, a)) : (Ce && r && bo(t), t.flags |= 1, Je(e, t, o, a), t.child);
  }
  function Nf(e, t, r, o, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" && !Xl(u) && u.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = u, _f(e, t, u, o, a)) : (e = ks(r.type, null, o, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & a) === 0) {
      var h = u.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Or, r(h, o) && e.ref === t.ref) return Xt(e, t, a);
    }
    return t.flags |= 1, e = pn(u, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _f(e, t, r, o, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Or(u, o) && e.ref === t.ref) if (it = !1, t.pendingProps = o = u, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (it = !0);
      else return t.lanes = e.lanes, Xt(e, t, a);
    }
    return El(e, t, r, o, a);
  }
  function jf(e, t, r) {
    var o = t.pendingProps, a = o.children, u = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(lr, dt), dt |= r;
    else {
      if ((r & 1073741824) === 0) return e = u !== null ? u.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, xe(lr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = u !== null ? u.baseLanes : r, xe(lr, dt), dt |= o;
    }
    else u !== null ? (o = u.baseLanes | r, t.memoizedState = null) : o = r, xe(lr, dt), dt |= o;
    return Je(e, t, a, r), t.child;
  }
  function If(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function El(e, t, r, o, a) {
    var u = rt(r) ? kn : Ye.current;
    return u = qn(t, u), rr(t, a), r = yl(e, t, r, o, u, a), o = gl(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Xt(e, t, a)) : (Ce && o && bo(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function Ff(e, t, r, o, a) {
    if (rt(r)) {
      var u = !0;
      Xi(t);
    } else u = !1;
    if (rr(t, a), t.stateNode === null) fs(e, t), Cf(t, r, o), Tl(t, r, o, a), o = !0;
    else if (e === null) {
      var h = t.stateNode, v = t.memoizedProps;
      h.props = v;
      var x = h.context, E = r.contextType;
      typeof E == "object" && E !== null ? E = yt(E) : (E = rt(r) ? kn : Ye.current, E = qn(t, E));
      var N = r.getDerivedStateFromProps, _ = typeof N == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      _ || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (v !== o || x !== E) && Ef(t, h, o, E), ln = !1;
      var L = t.memoizedState;
      h.state = L, ns(t, o, h, a), x = t.memoizedState, v !== o || L !== x || nt.current || ln ? (typeof N == "function" && (kl(t, r, N, o), x = t.memoizedState), (v = ln || Pf(t, r, v, o, L, x, E)) ? (_ || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = x), h.props = o, h.state = x, h.context = E, o = v) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      h = t.stateNode, Jc(e, t), v = t.memoizedProps, E = t.type === t.elementType ? v : Ct(t.type, v), h.props = E, _ = t.pendingProps, L = h.context, x = r.contextType, typeof x == "object" && x !== null ? x = yt(x) : (x = rt(r) ? kn : Ye.current, x = qn(t, x));
      var H = r.getDerivedStateFromProps;
      (N = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (v !== _ || L !== x) && Ef(t, h, o, x), ln = !1, L = t.memoizedState, h.state = L, ns(t, o, h, a);
      var X = t.memoizedState;
      v !== _ || L !== X || nt.current || ln ? (typeof H == "function" && (kl(t, r, H, o), X = t.memoizedState), (E = ln || Pf(t, r, E, o, L, X, x) || !1) ? (N || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, X, x), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, X, x)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || v === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = X), h.props = o, h.state = X, h.context = x, o = E) : (typeof h.componentDidUpdate != "function" || v === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return Ml(e, t, r, o, u, a);
  }
  function Ml(e, t, r, o, a, u) {
    If(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return a && Uc(t, r, !1), Xt(e, t, u);
    o = t.stateNode, eg.current = t;
    var v = h && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && h ? (t.child = tr(t, e.child, null, u), t.child = tr(t, null, v, u)) : Je(e, t, v, u), t.memoizedState = o.state, a && Uc(t, r, !0), t.child;
  }
  function Of(e) {
    var t = e.stateNode;
    t.pendingContext ? zc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zc(e, t.context, !1), cl(e, t.containerInfo);
  }
  function zf(e, t, r, o, a) {
    return er(), rl(a), t.flags |= 256, Je(e, t, r, o), t.child;
  }
  var Rl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Al(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bf(e, t, r) {
    var o = t.pendingProps, a = Re.current, u = !1, h = (t.flags & 128) !== 0, v;
    if ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), v ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), xe(Re, a & 1), e === null)
      return nl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = o.children, e = o.fallback, u ? (o = t.mode, u = t.child, h = { mode: "hidden", children: h }, (o & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = h) : u = Ts(h, o, 0, null), e = Ln(e, o, r, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Al(r), t.memoizedState = Rl, e) : Dl(t, h));
    if (a = e.memoizedState, a !== null && (v = a.dehydrated, v !== null)) return tg(e, t, h, o, v, a, r);
    if (u) {
      u = o.fallback, h = t.mode, a = e.child, v = a.sibling;
      var x = { mode: "hidden", children: o.children };
      return (h & 1) === 0 && t.child !== a ? (o = t.child, o.childLanes = 0, o.pendingProps = x, t.deletions = null) : (o = pn(a, x), o.subtreeFlags = a.subtreeFlags & 14680064), v !== null ? u = pn(v, u) : (u = Ln(u, h, r, null), u.flags |= 2), u.return = t, o.return = t, o.sibling = u, t.child = o, o = u, u = t.child, h = e.child.memoizedState, h = h === null ? Al(r) : { baseLanes: h.baseLanes | r, cachePool: null, transitions: h.transitions }, u.memoizedState = h, u.childLanes = e.childLanes & ~r, t.memoizedState = Rl, o;
    }
    return u = e.child, e = u.sibling, o = pn(u, { mode: "visible", children: o.children }), (t.mode & 1) === 0 && (o.lanes = r), o.return = t, o.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function Dl(e, t) {
    return t = Ts({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cs(e, t, r, o) {
    return o !== null && rl(o), tr(t, e.child, null, r), e = Dl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function tg(e, t, r, o, a, u, h) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, o = Pl(Error(s(422))), cs(e, t, h, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = o.fallback, a = t.mode, o = Ts({ mode: "visible", children: o.children }, a, 0, null), u = Ln(u, a, h, null), u.flags |= 2, o.return = t, u.return = t, o.sibling = u, t.child = o, (t.mode & 1) !== 0 && tr(t, e.child, null, h), t.child.memoizedState = Al(h), t.memoizedState = Rl, u);
    if ((t.mode & 1) === 0) return cs(e, t, h, null);
    if (a.data === "$!") {
      if (o = a.nextSibling && a.nextSibling.dataset, o) var v = o.dgst;
      return o = v, u = Error(s(419)), o = Pl(u, o, void 0), cs(e, t, h, o);
    }
    if (v = (h & e.childLanes) !== 0, it || v) {
      if (o = We, o !== null) {
        switch (h & -h) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (o.suspendedLanes | h)) !== 0 ? 0 : a, a !== 0 && a !== u.retryLane && (u.retryLane = a, Kt(e, a), Rt(o, e, a, -1));
      }
      return Gl(), o = Pl(Error(s(421))), cs(e, t, h, o);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pg.bind(null, e), a._reactRetry = t, null) : (e = u.treeContext, ft = nn(a.nextSibling), ct = t, Ce = !0, Pt = null, e !== null && (pt[mt++] = $t, pt[mt++] = Ht, pt[mt++] = Tn, $t = e.id, Ht = e.overflow, Tn = t), t = Dl(t, o.children), t.flags |= 4096, t);
  }
  function Uf(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), ll(e.return, t, r);
  }
  function Vl(e, t, r, o, a) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: r, tailMode: a } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = o, u.tail = r, u.tailMode = a);
  }
  function Wf(e, t, r) {
    var o = t.pendingProps, a = o.revealOrder, u = o.tail;
    if (Je(e, t, o.children, r), o = Re.current, (o & 2) !== 0) o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uf(e, r, t);
        else if (e.tag === 19) Uf(e, r, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      o &= 1;
    }
    if (xe(Re, o), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && rs(e) === null && (a = r), r = r.sibling;
        r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Vl(t, !1, a, r, u);
        break;
      case "backwards":
        for (r = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && rs(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = r, r = a, a = e;
        }
        Vl(t, !0, r, null, u);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fs(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Xt(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = pn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = pn(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function ng(e, t, r) {
    switch (t.tag) {
      case 3:
        Of(t), er();
        break;
      case 5:
        tf(t);
        break;
      case 1:
        rt(t.type) && Xi(t);
        break;
      case 4:
        cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, a = t.memoizedProps.value;
        xe(bi, o._currentValue), o._currentValue = a;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (xe(Re, Re.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Bf(e, t, r) : (xe(Re, Re.current & 1), e = Xt(e, t, r), e !== null ? e.sibling : null);
        xe(Re, Re.current & 1);
        break;
      case 19:
        if (o = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (o) return Wf(e, t, r);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), xe(Re, Re.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, jf(e, t, r);
    }
    return Xt(e, t, r);
  }
  var $f, Ll, Hf, Kf;
  $f = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, Ll = function() {
  }, Hf = function(e, t, r, o) {
    var a = e.memoizedProps;
    if (a !== o) {
      e = t.stateNode, En(_t.current);
      var u = null;
      switch (r) {
        case "input":
          a = oo(e, a), o = oo(e, o), u = [];
          break;
        case "select":
          a = W({}, a, { value: void 0 }), o = W({}, o, { value: void 0 }), u = [];
          break;
        case "textarea":
          a = uo(e, a), o = uo(e, o), u = [];
          break;
        default:
          typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Hi);
      }
      fo(r, o);
      var h;
      r = null;
      for (E in a) if (!o.hasOwnProperty(E) && a.hasOwnProperty(E) && a[E] != null) if (E === "style") {
        var v = a[E];
        for (h in v) v.hasOwnProperty(h) && (r || (r = {}), r[h] = "");
      } else E !== "dangerouslySetInnerHTML" && E !== "children" && E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (c.hasOwnProperty(E) ? u || (u = []) : (u = u || []).push(E, null));
      for (E in o) {
        var x = o[E];
        if (v = a?.[E], o.hasOwnProperty(E) && x !== v && (x != null || v != null)) if (E === "style") if (v) {
          for (h in v) !v.hasOwnProperty(h) || x && x.hasOwnProperty(h) || (r || (r = {}), r[h] = "");
          for (h in x) x.hasOwnProperty(h) && v[h] !== x[h] && (r || (r = {}), r[h] = x[h]);
        } else r || (u || (u = []), u.push(
          E,
          r
        )), r = x;
        else E === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, v = v ? v.__html : void 0, x != null && v !== x && (u = u || []).push(E, x)) : E === "children" ? typeof x != "string" && typeof x != "number" || (u = u || []).push(E, "" + x) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && (c.hasOwnProperty(E) ? (x != null && E === "onScroll" && ke("scroll", e), u || v === x || (u = [])) : (u = u || []).push(E, x));
      }
      r && (u = u || []).push("style", r);
      var E = u;
      (t.updateQueue = E) && (t.flags |= 4);
    }
  }, Kf = function(e, t, r, o) {
    r !== o && (t.flags |= 4);
  };
  function br(e, t) {
    if (!Ce) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, o = 0;
    if (t) for (var a = e.child; a !== null; ) r |= a.lanes | a.childLanes, o |= a.subtreeFlags & 14680064, o |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) r |= a.lanes | a.childLanes, o |= a.subtreeFlags, o |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= o, e.childLanes = r, t;
  }
  function rg(e, t, r) {
    var o = t.pendingProps;
    switch (el(t), t.tag) {
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
        return Ze(t), null;
      case 1:
        return rt(t.type) && Gi(), Ze(t), null;
      case 3:
        return o = t.stateNode, ir(), Te(nt), Te(Ye), hl(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (qi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Pt !== null && ($l(Pt), Pt = null))), Ll(e, t), Ze(t), null;
      case 5:
        fl(t);
        var a = En(Yr.current);
        if (r = t.type, e !== null && t.stateNode != null) Hf(e, t, r, o, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return Ze(t), null;
          }
          if (e = En(_t.current), qi(t)) {
            o = t.stateNode, r = t.type;
            var u = t.memoizedProps;
            switch (o[Nt] = t, o[$r] = u, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                ke("cancel", o), ke("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", o);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Br.length; a++) ke(Br[a], o);
                break;
              case "source":
                ke("error", o);
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  o
                ), ke("load", o);
                break;
              case "details":
                ke("toggle", o);
                break;
              case "input":
                Pu(o, u), ke("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!u.multiple }, ke("invalid", o);
                break;
              case "textarea":
                Mu(o, u), ke("invalid", o);
            }
            fo(r, u), a = null;
            for (var h in u) if (u.hasOwnProperty(h)) {
              var v = u[h];
              h === "children" ? typeof v == "string" ? o.textContent !== v && (u.suppressHydrationWarning !== !0 && $i(o.textContent, v, e), a = ["children", v]) : typeof v == "number" && o.textContent !== "" + v && (u.suppressHydrationWarning !== !0 && $i(
                o.textContent,
                v,
                e
              ), a = ["children", "" + v]) : c.hasOwnProperty(h) && v != null && h === "onScroll" && ke("scroll", o);
            }
            switch (r) {
              case "input":
                xi(o), Eu(o, u, !0);
                break;
              case "textarea":
                xi(o), Au(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (o.onclick = Hi);
            }
            o = a, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            h = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Du(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = h.createElement(r, { is: o.is }) : (e = h.createElement(r), r === "select" && (h = e, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : e = h.createElementNS(e, r), e[Nt] = t, e[$r] = o, $f(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = ho(r, o), r) {
                case "dialog":
                  ke("cancel", e), ke("close", e), a = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), a = o;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Br.length; a++) ke(Br[a], e);
                  a = o;
                  break;
                case "source":
                  ke("error", e), a = o;
                  break;
                case "img":
                case "image":
                case "link":
                  ke(
                    "error",
                    e
                  ), ke("load", e), a = o;
                  break;
                case "details":
                  ke("toggle", e), a = o;
                  break;
                case "input":
                  Pu(e, o), a = oo(e, o), ke("invalid", e);
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, a = W({}, o, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  Mu(e, o), a = uo(e, o), ke("invalid", e);
                  break;
                default:
                  a = o;
              }
              fo(r, a), v = a;
              for (u in v) if (v.hasOwnProperty(u)) {
                var x = v[u];
                u === "style" ? Nu(e, x) : u === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && Vu(e, x)) : u === "children" ? typeof x == "string" ? (r !== "textarea" || x !== "") && Sr(e, x) : typeof x == "number" && Sr(e, "" + x) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? x != null && u === "onScroll" && ke("scroll", e) : x != null && O(e, u, x, h));
              }
              switch (r) {
                case "input":
                  xi(e), Eu(e, o, !1);
                  break;
                case "textarea":
                  xi(e), Au(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + pe(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, u = o.value, u != null ? zn(e, !!o.multiple, u, !1) : o.defaultValue != null && zn(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Hi);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) Kf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (r = En(Yr.current), En(_t.current), qi(t)) {
            if (o = t.stateNode, r = t.memoizedProps, o[Nt] = t, (u = o.nodeValue !== r) && (e = ct, e !== null)) switch (e.tag) {
              case 3:
                $i(o.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $i(o.nodeValue, r, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o), o[Nt] = t, t.stateNode = o;
        }
        return Ze(t), null;
      case 13:
        if (Te(Re), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ce && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Xc(), er(), t.flags |= 98560, u = !1;
          else if (u = qi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[Nt] = t;
            } else er(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), u = !1;
          } else Pt !== null && ($l(Pt), Pt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Re.current & 1) !== 0 ? ze === 0 && (ze = 3) : Gl())), t.updateQueue !== null && (t.flags |= 4), Ze(t), null);
      case 4:
        return ir(), Ll(e, t), e === null && Ur(t.stateNode.containerInfo), Ze(t), null;
      case 10:
        return ol(t.type._context), Ze(t), null;
      case 17:
        return rt(t.type) && Gi(), Ze(t), null;
      case 19:
        if (Te(Re), u = t.memoizedState, u === null) return Ze(t), null;
        if (o = (t.flags & 128) !== 0, h = u.rendering, h === null) if (o) br(u, !1);
        else {
          if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = rs(e), h !== null) {
              for (t.flags |= 128, br(u, !1), o = h.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = r, r = t.child; r !== null; ) u = r, e = o, u.flags &= 14680066, h = u.alternate, h === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = h.childLanes, u.lanes = h.lanes, u.child = h.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = h.memoizedProps, u.memoizedState = h.memoizedState, u.updateQueue = h.updateQueue, u.type = h.type, e = h.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return xe(Re, Re.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Ne() > ar && (t.flags |= 128, o = !0, br(u, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = rs(h), e !== null) {
            if (t.flags |= 128, o = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), br(u, !0), u.tail === null && u.tailMode === "hidden" && !h.alternate && !Ce) return Ze(t), null;
          } else 2 * Ne() - u.renderingStartTime > ar && r !== 1073741824 && (t.flags |= 128, o = !0, br(u, !1), t.lanes = 4194304);
          u.isBackwards ? (h.sibling = t.child, t.child = h) : (r = u.last, r !== null ? r.sibling = h : t.child = h, u.last = h);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Ne(), t.sibling = null, r = Re.current, xe(Re, o ? r & 1 | 2 : r & 1), t) : (Ze(t), null);
      case 22:
      case 23:
        return Kl(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ig(e, t) {
    switch (el(t), t.tag) {
      case 1:
        return rt(t.type) && Gi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ir(), Te(nt), Te(Ye), hl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return fl(t), null;
      case 13:
        if (Te(Re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          er();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Te(Re), null;
      case 4:
        return ir(), null;
      case 10:
        return ol(t.type._context), null;
      case 22:
      case 23:
        return Kl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ds = !1, qe = !1, sg = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function or(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (o) {
      Ve(e, t, o);
    }
    else r.current = null;
  }
  function Nl(e, t, r) {
    try {
      r();
    } catch (o) {
      Ve(e, t, o);
    }
  }
  var Gf = !1;
  function og(e, t) {
    if (Ko = Li, e = Tc(), Fo(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var o = r.getSelection && r.getSelection();
        if (o && o.rangeCount !== 0) {
          r = o.anchorNode;
          var a = o.anchorOffset, u = o.focusNode;
          o = o.focusOffset;
          try {
            r.nodeType, u.nodeType;
          } catch {
            r = null;
            break e;
          }
          var h = 0, v = -1, x = -1, E = 0, N = 0, _ = e, L = null;
          t: for (; ; ) {
            for (var H; _ !== r || a !== 0 && _.nodeType !== 3 || (v = h + a), _ !== u || o !== 0 && _.nodeType !== 3 || (x = h + o), _.nodeType === 3 && (h += _.nodeValue.length), (H = _.firstChild) !== null; )
              L = _, _ = H;
            for (; ; ) {
              if (_ === e) break t;
              if (L === r && ++E === a && (v = h), L === u && ++N === o && (x = h), (H = _.nextSibling) !== null) break;
              _ = L, L = _.parentNode;
            }
            _ = H;
          }
          r = v === -1 || x === -1 ? null : { start: v, end: x };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Go = { focusedElem: e, selectionRange: r }, Li = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
    else for (; G !== null; ) {
      t = G;
      try {
        var X = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (X !== null) {
              var Z = X.memoizedProps, _e = X.memoizedState, P = t.stateNode, k = P.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : Ct(t.type, Z), _e);
              P.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var C = t.stateNode.containerInfo;
            C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (F) {
        Ve(t, t.return, F);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, G = e;
        break;
      }
      G = t.return;
    }
    return X = Gf, Gf = !1, X;
  }
  function ei(e, t, r) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var a = o = o.next;
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          a.destroy = void 0, u !== void 0 && Nl(t, r, u);
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function hs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function _l(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      e.tag, e = r, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Xf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[$r], delete t[Zo], delete t[Wy], delete t[$y])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Yf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Qf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function jl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Hi));
    else if (o !== 4 && (e = e.child, e !== null)) for (jl(e, t, r), e = e.sibling; e !== null; ) jl(e, t, r), e = e.sibling;
  }
  function Il(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (Il(e, t, r), e = e.sibling; e !== null; ) Il(e, t, r), e = e.sibling;
  }
  var He = null, Et = !1;
  function un(e, t, r) {
    for (r = r.child; r !== null; ) Zf(e, t, r), r = r.sibling;
  }
  function Zf(e, t, r) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
      Lt.onCommitFiberUnmount(Ei, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        qe || or(r, t);
      case 6:
        var o = He, a = Et;
        He = null, un(e, t, r), He = o, Et = a, He !== null && (Et ? (e = He, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : He.removeChild(r.stateNode));
        break;
      case 18:
        He !== null && (Et ? (e = He, r = r.stateNode, e.nodeType === 8 ? Qo(e.parentNode, r) : e.nodeType === 1 && Qo(e, r), Lr(e)) : Qo(He, r.stateNode));
        break;
      case 4:
        o = He, a = Et, He = r.stateNode.containerInfo, Et = !0, un(e, t, r), He = o, Et = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && (o = r.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          a = o = o.next;
          do {
            var u = a, h = u.destroy;
            u = u.tag, h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Nl(r, t, h), a = a.next;
          } while (a !== o);
        }
        un(e, t, r);
        break;
      case 1:
        if (!qe && (or(r, t), o = r.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = r.memoizedProps, o.state = r.memoizedState, o.componentWillUnmount();
        } catch (v) {
          Ve(r, t, v);
        }
        un(e, t, r);
        break;
      case 21:
        un(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (qe = (o = qe) || r.memoizedState !== null, un(e, t, r), qe = o) : un(e, t, r);
        break;
      default:
        un(e, t, r);
    }
  }
  function qf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new sg()), t.forEach(function(o) {
        var a = mg.bind(null, e, o);
        r.has(o) || (r.add(o), o.then(a, a));
      });
    }
  }
  function Mt(e, t) {
    var r = t.deletions;
    if (r !== null) for (var o = 0; o < r.length; o++) {
      var a = r[o];
      try {
        var u = e, h = t, v = h;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              He = v.stateNode, Et = !1;
              break e;
            case 3:
              He = v.stateNode.containerInfo, Et = !0;
              break e;
            case 4:
              He = v.stateNode.containerInfo, Et = !0;
              break e;
          }
          v = v.return;
        }
        if (He === null) throw Error(s(160));
        Zf(u, h, a), He = null, Et = !1;
        var x = a.alternate;
        x !== null && (x.return = null), a.return = null;
      } catch (E) {
        Ve(a, t, E);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Jf(t, e), t = t.sibling;
  }
  function Jf(e, t) {
    var r = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Mt(t, e), It(e), o & 4) {
          try {
            ei(3, e, e.return), hs(3, e);
          } catch (Z) {
            Ve(e, e.return, Z);
          }
          try {
            ei(5, e, e.return);
          } catch (Z) {
            Ve(e, e.return, Z);
          }
        }
        break;
      case 1:
        Mt(t, e), It(e), o & 512 && r !== null && or(r, r.return);
        break;
      case 5:
        if (Mt(t, e), It(e), o & 512 && r !== null && or(r, r.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Sr(a, "");
          } catch (Z) {
            Ve(e, e.return, Z);
          }
        }
        if (o & 4 && (a = e.stateNode, a != null)) {
          var u = e.memoizedProps, h = r !== null ? r.memoizedProps : u, v = e.type, x = e.updateQueue;
          if (e.updateQueue = null, x !== null) try {
            v === "input" && u.type === "radio" && u.name != null && Cu(a, u), ho(v, h);
            var E = ho(v, u);
            for (h = 0; h < x.length; h += 2) {
              var N = x[h], _ = x[h + 1];
              N === "style" ? Nu(a, _) : N === "dangerouslySetInnerHTML" ? Vu(a, _) : N === "children" ? Sr(a, _) : O(a, N, _, E);
            }
            switch (v) {
              case "input":
                lo(a, u);
                break;
              case "textarea":
                Ru(a, u);
                break;
              case "select":
                var L = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!u.multiple;
                var H = u.value;
                H != null ? zn(a, !!u.multiple, H, !1) : L !== !!u.multiple && (u.defaultValue != null ? zn(
                  a,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : zn(a, !!u.multiple, u.multiple ? [] : "", !1));
            }
            a[$r] = u;
          } catch (Z) {
            Ve(e, e.return, Z);
          }
        }
        break;
      case 6:
        if (Mt(t, e), It(e), o & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, u = e.memoizedProps;
          try {
            a.nodeValue = u;
          } catch (Z) {
            Ve(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (Mt(t, e), It(e), o & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Lr(t.containerInfo);
        } catch (Z) {
          Ve(e, e.return, Z);
        }
        break;
      case 4:
        Mt(t, e), It(e);
        break;
      case 13:
        Mt(t, e), It(e), a = e.child, a.flags & 8192 && (u = a.memoizedState !== null, a.stateNode.isHidden = u, !u || a.alternate !== null && a.alternate.memoizedState !== null || (zl = Ne())), o & 4 && qf(e);
        break;
      case 22:
        if (N = r !== null && r.memoizedState !== null, e.mode & 1 ? (qe = (E = qe) || N, Mt(t, e), qe = E) : Mt(t, e), It(e), o & 8192) {
          if (E = e.memoizedState !== null, (e.stateNode.isHidden = E) && !N && (e.mode & 1) !== 0) for (G = e, N = e.child; N !== null; ) {
            for (_ = G = N; G !== null; ) {
              switch (L = G, H = L.child, L.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ei(4, L, L.return);
                  break;
                case 1:
                  or(L, L.return);
                  var X = L.stateNode;
                  if (typeof X.componentWillUnmount == "function") {
                    o = L, r = L.return;
                    try {
                      t = o, X.props = t.memoizedProps, X.state = t.memoizedState, X.componentWillUnmount();
                    } catch (Z) {
                      Ve(o, r, Z);
                    }
                  }
                  break;
                case 5:
                  or(L, L.return);
                  break;
                case 22:
                  if (L.memoizedState !== null) {
                    td(_);
                    continue;
                  }
              }
              H !== null ? (H.return = L, G = H) : td(_);
            }
            N = N.sibling;
          }
          e: for (N = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (N === null) {
                N = _;
                try {
                  a = _.stateNode, E ? (u = a.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (v = _.stateNode, x = _.memoizedProps.style, h = x != null && x.hasOwnProperty("display") ? x.display : null, v.style.display = Lu("display", h));
                } catch (Z) {
                  Ve(e, e.return, Z);
                }
              }
            } else if (_.tag === 6) {
              if (N === null) try {
                _.stateNode.nodeValue = E ? "" : _.memoizedProps;
              } catch (Z) {
                Ve(e, e.return, Z);
              }
            } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
              _.child.return = _, _ = _.child;
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              N === _ && (N = null), _ = _.return;
            }
            N === _ && (N = null), _.sibling.return = _.return, _ = _.sibling;
          }
        }
        break;
      case 19:
        Mt(t, e), It(e), o & 4 && qf(e);
        break;
      case 21:
        break;
      default:
        Mt(
          t,
          e
        ), It(e);
    }
  }
  function It(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Yf(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode;
            o.flags & 32 && (Sr(a, ""), o.flags &= -33);
            var u = Qf(e);
            Il(e, u, a);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, v = Qf(e);
            jl(e, v, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (x) {
        Ve(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lg(e, t, r) {
    G = e, bf(e);
  }
  function bf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; G !== null; ) {
      var a = G, u = a.child;
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || ds;
        if (!h) {
          var v = a.alternate, x = v !== null && v.memoizedState !== null || qe;
          v = ds;
          var E = qe;
          if (ds = h, (qe = x) && !E) for (G = a; G !== null; ) h = G, x = h.child, h.tag === 22 && h.memoizedState !== null ? nd(a) : x !== null ? (x.return = h, G = x) : nd(a);
          for (; u !== null; ) G = u, bf(u), u = u.sibling;
          G = a, ds = v, qe = E;
        }
        ed(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a, G = u) : ed(e);
    }
  }
  function ed(e) {
    for (; G !== null; ) {
      var t = G;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || hs(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !qe) if (r === null) o.componentDidMount();
              else {
                var a = t.elementType === t.type ? r.memoizedProps : Ct(t.type, r.memoizedProps);
                o.componentDidUpdate(a, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && ef(t, u, o);
              break;
            case 3:
              var h = t.updateQueue;
              if (h !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                ef(t, h, r);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (r === null && t.flags & 4) {
                r = v;
                var x = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && r.focus();
                    break;
                  case "img":
                    x.src && (r.src = x.src);
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
                var E = t.alternate;
                if (E !== null) {
                  var N = E.memoizedState;
                  if (N !== null) {
                    var _ = N.dehydrated;
                    _ !== null && Lr(_);
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
              throw Error(s(163));
          }
          qe || t.flags & 512 && _l(t);
        } catch (L) {
          Ve(t, t.return, L);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, G = r;
        break;
      }
      G = t.return;
    }
  }
  function td(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, G = r;
        break;
      }
      G = t.return;
    }
  }
  function nd(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              hs(4, t);
            } catch (x) {
              Ve(t, r, x);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (x) {
                Ve(t, a, x);
              }
            }
            var u = t.return;
            try {
              _l(t);
            } catch (x) {
              Ve(t, u, x);
            }
            break;
          case 5:
            var h = t.return;
            try {
              _l(t);
            } catch (x) {
              Ve(t, h, x);
            }
        }
      } catch (x) {
        Ve(t, t.return, x);
      }
      if (t === e) {
        G = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, G = v;
        break;
      }
      G = t.return;
    }
  }
  var ag = Math.ceil, ps = z.ReactCurrentDispatcher, Fl = z.ReactCurrentOwner, vt = z.ReactCurrentBatchConfig, ue = 0, We = null, Ie = null, Ke = 0, dt = 0, lr = rn(0), ze = 0, ti = null, Rn = 0, ms = 0, Ol = 0, ni = null, st = null, zl = 0, ar = 1 / 0, Yt = null, ys = !1, Bl = null, cn = null, gs = !1, fn = null, vs = 0, ri = 0, Ul = null, ws = -1, xs = 0;
  function be() {
    return (ue & 6) !== 0 ? Ne() : ws !== -1 ? ws : ws = Ne();
  }
  function dn(e) {
    return (e.mode & 1) === 0 ? 1 : (ue & 2) !== 0 && Ke !== 0 ? Ke & -Ke : Ky.transition !== null ? (xs === 0 && (xs = Yu()), xs) : (e = me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rc(e.type)), e);
  }
  function Rt(e, t, r, o) {
    if (50 < ri) throw ri = 0, Ul = null, Error(s(185));
    Mr(e, r, o), ((ue & 2) === 0 || e !== We) && (e === We && ((ue & 2) === 0 && (ms |= r), ze === 4 && hn(e, Ke)), ot(e, o), r === 1 && ue === 0 && (t.mode & 1) === 0 && (ar = Ne() + 500, Yi && on()));
  }
  function ot(e, t) {
    var r = e.callbackNode;
    Km(e, t);
    var o = Ai(e, e === We ? Ke : 0);
    if (o === 0) r !== null && Ku(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (r != null && Ku(r), t === 1) e.tag === 0 ? Hy(id.bind(null, e)) : Wc(id.bind(null, e)), By(function() {
        (ue & 6) === 0 && on();
      }), r = null;
      else {
        switch (Qu(o)) {
          case 1:
            r = xo;
            break;
          case 4:
            r = Gu;
            break;
          case 16:
            r = Ci;
            break;
          case 536870912:
            r = Xu;
            break;
          default:
            r = Ci;
        }
        r = dd(r, rd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function rd(e, t) {
    if (ws = -1, xs = 0, (ue & 6) !== 0) throw Error(s(327));
    var r = e.callbackNode;
    if (ur() && e.callbackNode !== r) return null;
    var o = Ai(e, e === We ? Ke : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ss(e, o);
    else {
      t = o;
      var a = ue;
      ue |= 2;
      var u = od();
      (We !== e || Ke !== t) && (Yt = null, ar = Ne() + 500, Dn(e, t));
      do
        try {
          fg();
          break;
        } catch (v) {
          sd(e, v);
        }
      while (!0);
      sl(), ps.current = u, ue = a, Ie !== null ? t = 0 : (We = null, Ke = 0, t = ze);
    }
    if (t !== 0) {
      if (t === 2 && (a = So(e), a !== 0 && (o = a, t = Wl(e, a))), t === 1) throw r = ti, Dn(e, 0), hn(e, o), ot(e, Ne()), r;
      if (t === 6) hn(e, o);
      else {
        if (a = e.current.alternate, (o & 30) === 0 && !ug(a) && (t = Ss(e, o), t === 2 && (u = So(e), u !== 0 && (o = u, t = Wl(e, u))), t === 1)) throw r = ti, Dn(e, 0), hn(e, o), ot(e, Ne()), r;
        switch (e.finishedWork = a, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Vn(e, st, Yt);
            break;
          case 3:
            if (hn(e, o), (o & 130023424) === o && (t = zl + 500 - Ne(), 10 < t)) {
              if (Ai(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & o) !== o) {
                be(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Yo(Vn.bind(null, e, st, Yt), t);
              break;
            }
            Vn(e, st, Yt);
            break;
          case 4:
            if (hn(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, a = -1; 0 < o; ) {
              var h = 31 - kt(o);
              u = 1 << h, h = t[h], h > a && (a = h), o &= ~u;
            }
            if (o = a, o = Ne() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ag(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = Yo(Vn.bind(null, e, st, Yt), o);
              break;
            }
            Vn(e, st, Yt);
            break;
          case 5:
            Vn(e, st, Yt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return ot(e, Ne()), e.callbackNode === r ? rd.bind(null, e) : null;
  }
  function Wl(e, t) {
    var r = ni;
    return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = Ss(e, t), e !== 2 && (t = st, st = r, t !== null && $l(t)), e;
  }
  function $l(e) {
    st === null ? st = e : st.push.apply(st, e);
  }
  function ug(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var o = 0; o < r.length; o++) {
          var a = r[o], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Tt(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function hn(e, t) {
    for (t &= ~Ol, t &= ~ms, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - kt(t), o = 1 << r;
      e[r] = -1, t &= ~o;
    }
  }
  function id(e) {
    if ((ue & 6) !== 0) throw Error(s(327));
    ur();
    var t = Ai(e, 0);
    if ((t & 1) === 0) return ot(e, Ne()), null;
    var r = Ss(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = So(e);
      o !== 0 && (t = o, r = Wl(e, o));
    }
    if (r === 1) throw r = ti, Dn(e, 0), hn(e, t), ot(e, Ne()), r;
    if (r === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, st, Yt), ot(e, Ne()), null;
  }
  function Hl(e, t) {
    var r = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      ue = r, ue === 0 && (ar = Ne() + 500, Yi && on());
    }
  }
  function An(e) {
    fn !== null && fn.tag === 0 && (ue & 6) === 0 && ur();
    var t = ue;
    ue |= 1;
    var r = vt.transition, o = me;
    try {
      if (vt.transition = null, me = 1, e) return e();
    } finally {
      me = o, vt.transition = r, ue = t, (ue & 6) === 0 && on();
    }
  }
  function Kl() {
    dt = lr.current, Te(lr);
  }
  function Dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, zy(r)), Ie !== null) for (r = Ie.return; r !== null; ) {
      var o = r;
      switch (el(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Gi();
          break;
        case 3:
          ir(), Te(nt), Te(Ye), hl();
          break;
        case 5:
          fl(o);
          break;
        case 4:
          ir();
          break;
        case 13:
          Te(Re);
          break;
        case 19:
          Te(Re);
          break;
        case 10:
          ol(o.type._context);
          break;
        case 22:
        case 23:
          Kl();
      }
      r = r.return;
    }
    if (We = e, Ie = e = pn(e.current, null), Ke = dt = t, ze = 0, ti = null, Ol = ms = Rn = 0, st = ni = null, Cn !== null) {
      for (t = 0; t < Cn.length; t++) if (r = Cn[t], o = r.interleaved, o !== null) {
        r.interleaved = null;
        var a = o.next, u = r.pending;
        if (u !== null) {
          var h = u.next;
          u.next = a, o.next = h;
        }
        r.pending = o;
      }
      Cn = null;
    }
    return e;
  }
  function sd(e, t) {
    do {
      var r = Ie;
      try {
        if (sl(), is.current = as, ss) {
          for (var o = Ae.memoizedState; o !== null; ) {
            var a = o.queue;
            a !== null && (a.pending = null), o = o.next;
          }
          ss = !1;
        }
        if (Mn = 0, Ue = Oe = Ae = null, Qr = !1, Zr = 0, Fl.current = null, r === null || r.return === null) {
          ze = 1, ti = t, Ie = null;
          break;
        }
        e: {
          var u = e, h = r.return, v = r, x = t;
          if (t = Ke, v.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var E = x, N = v, _ = N.tag;
            if ((N.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var L = N.alternate;
              L ? (N.updateQueue = L.updateQueue, N.memoizedState = L.memoizedState, N.lanes = L.lanes) : (N.updateQueue = null, N.memoizedState = null);
            }
            var H = Df(h);
            if (H !== null) {
              H.flags &= -257, Vf(H, h, v, u, t), H.mode & 1 && Af(u, E, t), t = H, x = E;
              var X = t.updateQueue;
              if (X === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(x), t.updateQueue = Z;
              } else X.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                Af(u, E, t), Gl();
                break e;
              }
              x = Error(s(426));
            }
          } else if (Ce && v.mode & 1) {
            var _e = Df(h);
            if (_e !== null) {
              (_e.flags & 65536) === 0 && (_e.flags |= 256), Vf(_e, h, v, u, t), rl(sr(x, v));
              break e;
            }
          }
          u = x = sr(x, v), ze !== 4 && (ze = 2), ni === null ? ni = [u] : ni.push(u), u = h;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = Mf(u, x, t);
                bc(u, P);
                break e;
              case 1:
                v = x;
                var k = u.type, C = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (cn === null || !cn.has(C)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var F = Rf(u, v, t);
                  bc(u, F);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ad(r);
      } catch (J) {
        t = J, Ie === r && r !== null && (Ie = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function od() {
    var e = ps.current;
    return ps.current = as, e === null ? as : e;
  }
  function Gl() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4), We === null || (Rn & 268435455) === 0 && (ms & 268435455) === 0 || hn(We, Ke);
  }
  function Ss(e, t) {
    var r = ue;
    ue |= 2;
    var o = od();
    (We !== e || Ke !== t) && (Yt = null, Dn(e, t));
    do
      try {
        cg();
        break;
      } catch (a) {
        sd(e, a);
      }
    while (!0);
    if (sl(), ue = r, ps.current = o, Ie !== null) throw Error(s(261));
    return We = null, Ke = 0, ze;
  }
  function cg() {
    for (; Ie !== null; ) ld(Ie);
  }
  function fg() {
    for (; Ie !== null && !Im(); ) ld(Ie);
  }
  function ld(e) {
    var t = fd(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? ad(e) : Ie = t, Fl.current = null;
  }
  function ad(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = rg(r, t, dt), r !== null) {
          Ie = r;
          return;
        }
      } else {
        if (r = ig(r, t), r !== null) {
          r.flags &= 32767, Ie = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ze = 6, Ie = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function Vn(e, t, r) {
    var o = me, a = vt.transition;
    try {
      vt.transition = null, me = 1, dg(e, t, r, o);
    } finally {
      vt.transition = a, me = o;
    }
    return null;
  }
  function dg(e, t, r, o) {
    do
      ur();
    while (fn !== null);
    if ((ue & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = r.lanes | r.childLanes;
    if (Gm(e, u), e === We && (Ie = We = null, Ke = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || gs || (gs = !0, dd(Ci, function() {
      return ur(), null;
    })), u = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || u) {
      u = vt.transition, vt.transition = null;
      var h = me;
      me = 1;
      var v = ue;
      ue |= 4, Fl.current = null, og(e, r), Jf(r, e), Ly(Go), Li = !!Ko, Go = Ko = null, e.current = r, lg(r), Fm(), ue = v, me = h, vt.transition = u;
    } else e.current = r;
    if (gs && (gs = !1, fn = e, vs = a), u = e.pendingLanes, u === 0 && (cn = null), Bm(r.stateNode), ot(e, Ne()), t !== null) for (o = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], o(a.value, { componentStack: a.stack, digest: a.digest });
    if (ys) throw ys = !1, e = Bl, Bl = null, e;
    return (vs & 1) !== 0 && e.tag !== 0 && ur(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ul ? ri++ : (ri = 0, Ul = e) : ri = 0, on(), null;
  }
  function ur() {
    if (fn !== null) {
      var e = Qu(vs), t = vt.transition, r = me;
      try {
        if (vt.transition = null, me = 16 > e ? 16 : e, fn === null) var o = !1;
        else {
          if (e = fn, fn = null, vs = 0, (ue & 6) !== 0) throw Error(s(331));
          var a = ue;
          for (ue |= 4, G = e.current; G !== null; ) {
            var u = G, h = u.child;
            if ((G.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var x = 0; x < v.length; x++) {
                  var E = v[x];
                  for (G = E; G !== null; ) {
                    var N = G;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(8, N, u);
                    }
                    var _ = N.child;
                    if (_ !== null) _.return = N, G = _;
                    else for (; G !== null; ) {
                      N = G;
                      var L = N.sibling, H = N.return;
                      if (Xf(N), N === E) {
                        G = null;
                        break;
                      }
                      if (L !== null) {
                        L.return = H, G = L;
                        break;
                      }
                      G = H;
                    }
                  }
                }
                var X = u.alternate;
                if (X !== null) {
                  var Z = X.child;
                  if (Z !== null) {
                    X.child = null;
                    do {
                      var _e = Z.sibling;
                      Z.sibling = null, Z = _e;
                    } while (Z !== null);
                  }
                }
                G = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && h !== null) h.return = u, G = h;
            else e: for (; G !== null; ) {
              if (u = G, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ei(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, G = P;
                break e;
              }
              G = u.return;
            }
          }
          var k = e.current;
          for (G = k; G !== null; ) {
            h = G;
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null) C.return = h, G = C;
            else e: for (h = k; G !== null; ) {
              if (v = G, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hs(9, v);
                }
              } catch (J) {
                Ve(v, v.return, J);
              }
              if (v === h) {
                G = null;
                break e;
              }
              var F = v.sibling;
              if (F !== null) {
                F.return = v.return, G = F;
                break e;
              }
              G = v.return;
            }
          }
          if (ue = a, on(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(Ei, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        me = r, vt.transition = t;
      }
    }
    return !1;
  }
  function ud(e, t, r) {
    t = sr(r, t), t = Mf(e, t, 1), e = an(e, t, 1), t = be(), e !== null && (Mr(e, 1, t), ot(e, t));
  }
  function Ve(e, t, r) {
    if (e.tag === 3) ud(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ud(t, e, r);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (cn === null || !cn.has(o))) {
          e = sr(r, e), e = Rf(t, e, 1), t = an(t, e, 1), e = be(), t !== null && (Mr(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function hg(e, t, r) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & r, We === e && (Ke & r) === r && (ze === 4 || ze === 3 && (Ke & 130023424) === Ke && 500 > Ne() - zl ? Dn(e, 0) : Ol |= r), ot(e, t);
  }
  function cd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ri, Ri <<= 1, (Ri & 130023424) === 0 && (Ri = 4194304)));
    var r = be();
    e = Kt(e, t), e !== null && (Mr(e, t, r), ot(e, r));
  }
  function pg(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), cd(e, r);
  }
  function mg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(t), cd(e, r);
  }
  var fd;
  fd = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || nt.current) it = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return it = !1, ng(e, t, r);
      it = (e.flags & 131072) !== 0;
    }
    else it = !1, Ce && (t.flags & 1048576) !== 0 && $c(t, Zi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        fs(e, t), e = t.pendingProps;
        var a = qn(t, Ye.current);
        rr(t, r), a = yl(null, t, o, e, a, r);
        var u = gl();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(o) ? (u = !0, Xi(t)) : u = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, ul(t), a.updater = us, t.stateNode = a, a._reactInternals = t, Tl(t, o, e, r), t = Ml(null, t, o, !0, u, r)) : (t.tag = 0, Ce && u && bo(t), Je(null, t, a, r), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (fs(e, t), e = t.pendingProps, a = o._init, o = a(o._payload), t.type = o, a = t.tag = gg(o), e = Ct(o, e), a) {
            case 0:
              t = El(null, t, o, e, r);
              break e;
            case 1:
              t = Ff(null, t, o, e, r);
              break e;
            case 11:
              t = Lf(null, t, o, e, r);
              break e;
            case 14:
              t = Nf(null, t, o, Ct(o.type, e), r);
              break e;
          }
          throw Error(s(
            306,
            o,
            ""
          ));
        }
        return t;
      case 0:
        return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : Ct(o, a), El(e, t, o, a, r);
      case 1:
        return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : Ct(o, a), Ff(e, t, o, a, r);
      case 3:
        e: {
          if (Of(t), e === null) throw Error(s(387));
          o = t.pendingProps, u = t.memoizedState, a = u.element, Jc(e, t), ns(t, o, null, r);
          var h = t.memoizedState;
          if (o = h.element, u.isDehydrated) if (u = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            a = sr(Error(s(423)), t), t = zf(e, t, o, r, a);
            break e;
          } else if (o !== a) {
            a = sr(Error(s(424)), t), t = zf(e, t, o, r, a);
            break e;
          } else for (ft = nn(t.stateNode.containerInfo.firstChild), ct = t, Ce = !0, Pt = null, r = Zc(t, null, o, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (er(), o === a) {
              t = Xt(e, t, r);
              break e;
            }
            Je(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return tf(t), e === null && nl(t), o = t.type, a = t.pendingProps, u = e !== null ? e.memoizedProps : null, h = a.children, Xo(o, a) ? h = null : u !== null && Xo(o, u) && (t.flags |= 32), If(e, t), Je(e, t, h, r), t.child;
      case 6:
        return e === null && nl(t), null;
      case 13:
        return Bf(e, t, r);
      case 4:
        return cl(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = tr(t, null, o, r) : Je(e, t, o, r), t.child;
      case 11:
        return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : Ct(o, a), Lf(e, t, o, a, r);
      case 7:
        return Je(e, t, t.pendingProps, r), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (o = t.type._context, a = t.pendingProps, u = t.memoizedProps, h = a.value, xe(bi, o._currentValue), o._currentValue = h, u !== null) if (Tt(u.value, h)) {
            if (u.children === a.children && !nt.current) {
              t = Xt(e, t, r);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var v = u.dependencies;
            if (v !== null) {
              h = u.child;
              for (var x = v.firstContext; x !== null; ) {
                if (x.context === o) {
                  if (u.tag === 1) {
                    x = Gt(-1, r & -r), x.tag = 2;
                    var E = u.updateQueue;
                    if (E !== null) {
                      E = E.shared;
                      var N = E.pending;
                      N === null ? x.next = x : (x.next = N.next, N.next = x), E.pending = x;
                    }
                  }
                  u.lanes |= r, x = u.alternate, x !== null && (x.lanes |= r), ll(
                    u.return,
                    r,
                    t
                  ), v.lanes |= r;
                  break;
                }
                x = x.next;
              }
            } else if (u.tag === 10) h = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (h = u.return, h === null) throw Error(s(341));
              h.lanes |= r, v = h.alternate, v !== null && (v.lanes |= r), ll(h, r, t), h = u.sibling;
            } else h = u.child;
            if (h !== null) h.return = u;
            else for (h = u; h !== null; ) {
              if (h === t) {
                h = null;
                break;
              }
              if (u = h.sibling, u !== null) {
                u.return = h.return, h = u;
                break;
              }
              h = h.return;
            }
            u = h;
          }
          Je(e, t, a.children, r), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, o = t.pendingProps.children, rr(t, r), a = yt(a), o = o(a), t.flags |= 1, Je(e, t, o, r), t.child;
      case 14:
        return o = t.type, a = Ct(o, t.pendingProps), a = Ct(o.type, a), Nf(e, t, o, a, r);
      case 15:
        return _f(e, t, t.type, t.pendingProps, r);
      case 17:
        return o = t.type, a = t.pendingProps, a = t.elementType === o ? a : Ct(o, a), fs(e, t), t.tag = 1, rt(o) ? (e = !0, Xi(t)) : e = !1, rr(t, r), Cf(t, o, a), Tl(t, o, a, r), Ml(null, t, o, !0, e, r);
      case 19:
        return Wf(e, t, r);
      case 22:
        return jf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function dd(e, t) {
    return Hu(e, t);
  }
  function yg(e, t, r, o) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wt(e, t, r, o) {
    return new yg(e, t, r, o);
  }
  function Xl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gg(e) {
    if (typeof e == "function") return Xl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ye) return 11;
      if (e === je) return 14;
    }
    return 2;
  }
  function pn(e, t) {
    var r = e.alternate;
    return r === null ? (r = wt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function ks(e, t, r, o, a, u) {
    var h = 2;
    if (o = e, typeof e == "function") Xl(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case re:
        return Ln(r.children, a, u, t);
      case K:
        h = 8, a |= 8;
        break;
      case se:
        return e = wt(12, r, t, a | 2), e.elementType = se, e.lanes = u, e;
      case Ee:
        return e = wt(13, r, t, a), e.elementType = Ee, e.lanes = u, e;
      case De:
        return e = wt(19, r, t, a), e.elementType = De, e.lanes = u, e;
      case Me:
        return Ts(r, a, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case q:
            h = 10;
            break e;
          case ce:
            h = 9;
            break e;
          case ye:
            h = 11;
            break e;
          case je:
            h = 14;
            break e;
          case Se:
            h = 16, o = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = wt(h, r, t, a), t.elementType = e, t.type = o, t.lanes = u, t;
  }
  function Ln(e, t, r, o) {
    return e = wt(7, e, o, t), e.lanes = r, e;
  }
  function Ts(e, t, r, o) {
    return e = wt(22, e, o, t), e.elementType = Me, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function Yl(e, t, r) {
    return e = wt(6, e, null, t), e.lanes = r, e;
  }
  function Ql(e, t, r) {
    return t = wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function vg(e, t, r, o, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ko(0), this.expirationTimes = ko(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ko(0), this.identifierPrefix = o, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Zl(e, t, r, o, a, u, h, v, x) {
    return e = new vg(e, t, r, v, x), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = wt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: o, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ul(u), e;
  }
  function wg(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: r };
  }
  function hd(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (rt(r)) return Bc(e, r, t);
    }
    return t;
  }
  function pd(e, t, r, o, a, u, h, v, x) {
    return e = Zl(r, o, !0, e, a, u, h, v, x), e.context = hd(null), r = e.current, o = be(), a = dn(r), u = Gt(o, a), u.callback = t ?? null, an(r, u, a), e.current.lanes = a, Mr(e, a, o), ot(e, o), e;
  }
  function Ps(e, t, r, o) {
    var a = t.current, u = be(), h = dn(a);
    return r = hd(r), t.context === null ? t.context = r : t.pendingContext = r, t = Gt(u, h), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = an(a, t, h), e !== null && (Rt(e, a, h, u), ts(e, a, h)), h;
  }
  function Cs(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function md(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ql(e, t) {
    md(e, t), (e = e.alternate) && md(e, t);
  }
  function xg() {
    return null;
  }
  var yd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Jl(e) {
    this._internalRoot = e;
  }
  Es.prototype.render = Jl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ps(e, t, null, null);
  }, Es.prototype.unmount = Jl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      An(function() {
        Ps(null, e, null, null);
      }), t[Ut] = null;
    }
  };
  function Es(e) {
    this._internalRoot = e;
  }
  Es.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < bt.length && t !== 0 && t < bt[r].priority; r++) ;
      bt.splice(r, 0, e), r === 0 && tc(e);
    }
  };
  function bl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gd() {
  }
  function Sg(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var u = o;
        o = function() {
          var E = Cs(h);
          u.call(E);
        };
      }
      var h = pd(t, o, e, 0, null, !1, !1, "", gd);
      return e._reactRootContainer = h, e[Ut] = h.current, Ur(e.nodeType === 8 ? e.parentNode : e), An(), h;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof o == "function") {
      var v = o;
      o = function() {
        var E = Cs(x);
        v.call(E);
      };
    }
    var x = Zl(e, 0, !1, null, null, !1, !1, "", gd);
    return e._reactRootContainer = x, e[Ut] = x.current, Ur(e.nodeType === 8 ? e.parentNode : e), An(function() {
      Ps(t, x, r, o);
    }), x;
  }
  function Rs(e, t, r, o, a) {
    var u = r._reactRootContainer;
    if (u) {
      var h = u;
      if (typeof a == "function") {
        var v = a;
        a = function() {
          var x = Cs(h);
          v.call(x);
        };
      }
      Ps(t, h, e, a);
    } else h = Sg(r, t, e, a, o);
    return Cs(h);
  }
  Zu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 && (To(t, r | 1), ot(t, Ne()), (ue & 6) === 0 && (ar = Ne() + 500, on()));
        }
        break;
      case 13:
        An(function() {
          var o = Kt(e, 1);
          if (o !== null) {
            var a = be();
            Rt(o, e, 1, a);
          }
        }), ql(e, 1);
    }
  }, Po = function(e) {
    if (e.tag === 13) {
      var t = Kt(e, 134217728);
      if (t !== null) {
        var r = be();
        Rt(t, e, 134217728, r);
      }
      ql(e, 134217728);
    }
  }, qu = function(e) {
    if (e.tag === 13) {
      var t = dn(e), r = Kt(e, t);
      if (r !== null) {
        var o = be();
        Rt(r, e, t, o);
      }
      ql(e, t);
    }
  }, Ju = function() {
    return me;
  }, bu = function(e, t) {
    var r = me;
    try {
      return me = e, t();
    } finally {
      me = r;
    }
  }, yo = function(e, t, r) {
    switch (t) {
      case "input":
        if (lo(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var o = r[t];
            if (o !== e && o.form === e.form) {
              var a = Ki(o);
              if (!a) throw Error(s(90));
              Tu(o), lo(o, a);
            }
          }
        }
        break;
      case "textarea":
        Ru(e, r);
        break;
      case "select":
        t = r.value, t != null && zn(e, !!r.multiple, t, !1);
    }
  }, Fu = Hl, Ou = An;
  var kg = { usingClientEntryPoint: !1, Events: [Hr, Qn, Ki, ju, Iu, Hl] }, ii = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Tg = { bundleType: ii.bundleType, version: ii.version, rendererPackageName: ii.rendererPackageName, rendererConfig: ii.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Wu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ii.findFiberByHostInstance || xg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!As.isDisabled && As.supportsFiber) try {
      Ei = As.inject(Tg), Lt = As;
    } catch {
    }
  }
  return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg, lt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bl(t)) throw Error(s(200));
    return wg(e, t, null, r);
  }, lt.createRoot = function(e, t) {
    if (!bl(e)) throw Error(s(299));
    var r = !1, o = "", a = yd;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Zl(e, 1, !1, null, null, r, !1, o, a), e[Ut] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new Jl(t);
  }, lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Wu(t), e = e === null ? null : e.stateNode, e;
  }, lt.flushSync = function(e) {
    return An(e);
  }, lt.hydrate = function(e, t, r) {
    if (!Ms(t)) throw Error(s(200));
    return Rs(null, e, t, !0, r);
  }, lt.hydrateRoot = function(e, t, r) {
    if (!bl(e)) throw Error(s(405));
    var o = r != null && r.hydratedSources || null, a = !1, u = "", h = yd;
    if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), t = pd(t, null, e, 1, r ?? null, a, !1, u, h), e[Ut] = t.current, Ur(e), o) for (e = 0; e < o.length; e++) r = o[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(
      r,
      a
    );
    return new Es(t);
  }, lt.render = function(e, t, r) {
    if (!Ms(t)) throw Error(s(200));
    return Rs(null, e, t, !1, r);
  }, lt.unmountComponentAtNode = function(e) {
    if (!Ms(e)) throw Error(s(40));
    return e._reactRootContainer ? (An(function() {
      Rs(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ut] = null;
      });
    }), !0) : !1;
  }, lt.unstable_batchedUpdates = Hl, lt.unstable_renderSubtreeIntoContainer = function(e, t, r, o) {
    if (!Ms(r)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Rs(e, t, r, !1, o);
  }, lt.version = "18.3.1-next-f1338f8080-20240426", lt;
}
var Cd;
function Lg() {
  if (Cd) return na.exports;
  Cd = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), na.exports = Vg(), na.exports;
}
var Ed;
function Ng() {
  if (Ed) return Ds;
  Ed = 1;
  var n = Lg();
  return Ds.createRoot = n.createRoot, Ds.hydrateRoot = n.hydrateRoot, Ds;
}
var _g = Ng();
const jg = /* @__PURE__ */ Hh(_g), Ya = $.createContext({});
function Qa(n) {
  const i = $.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const Ig = typeof window < "u", Za = Ig ? $.useLayoutEffect : $.useEffect, to = /* @__PURE__ */ $.createContext(null);
function qa(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Ks(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Bt = (n, i, s) => s > i ? i : s < n ? n : s;
let Ja = () => {
};
const gn = {}, Kh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n), Gh = (n) => typeof n == "object" && n !== null, Xh = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function Yh(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const St = /* @__NO_SIDE_EFFECTS__ */ (n) => n, yi = (...n) => n.reduce((i, s) => (l) => s(i(l))), di = /* @__NO_SIDE_EFFECTS__ */ (n, i, s) => {
  const l = i - n;
  return l ? (s - n) / l : 1;
};
class ba {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return qa(this.subscriptions, i), () => Ks(this.subscriptions, i);
  }
  notify(i, s, l) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](i, s, l);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, s, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ht = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, xt = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3, Qh = /* @__NO_SIDE_EFFECTS__ */ (n, i) => i ? n * (1e3 / i) : 0, Zh = (n, i, s) => (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n, Fg = 1e-7, Og = 12;
function zg(n, i, s, l, c) {
  let d, f, p = 0;
  do
    f = i + (s - i) / 2, d = Zh(f, l, c) - n, d > 0 ? s = f : i = f;
  while (Math.abs(d) > Fg && ++p < Og);
  return f;
}
// @__NO_SIDE_EFFECTS__
function gi(n, i, s, l) {
  if (n === i && s === l)
    return St;
  const c = (d) => zg(d, 0, 1, n, s);
  return (d) => d === 0 || d === 1 ? d : Zh(c(d), i, l);
}
const qh = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, Jh = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => 1 - n(1 - i), bh = /* @__PURE__ */ gi(0.33, 1.53, 0.69, 0.99), eu = /* @__PURE__ */ Jh(bh), ep = /* @__PURE__ */ qh(eu), tp = (n) => n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * eu(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), tu = (n) => 1 - Math.sin(Math.acos(n)), np = /* @__PURE__ */ Jh(tu), rp = /* @__PURE__ */ qh(tu), Bg = /* @__PURE__ */ gi(0.42, 0, 1, 1), Ug = /* @__PURE__ */ gi(0, 0, 0.58, 1), ip = /* @__PURE__ */ gi(0.42, 0, 0.58, 1), Wg = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] != "number", sp = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] == "number", $g = {
  linear: St,
  easeIn: Bg,
  easeInOut: ip,
  easeOut: Ug,
  circIn: tu,
  circInOut: rp,
  circOut: np,
  backIn: eu,
  backInOut: ep,
  backOut: bh,
  anticipate: tp
}, Hg = (n) => typeof n == "string", Md = (n) => {
  if (/* @__PURE__ */ sp(n)) {
    Ja(n.length === 4);
    const [i, s, l, c] = n;
    return /* @__PURE__ */ gi(i, s, l, c);
  } else if (Hg(n))
    return $g[n];
  return n;
}, Vs = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Kg(n) {
  let i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l = !1, c = !1;
  const d = /* @__PURE__ */ new WeakSet();
  let f = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(y) {
    d.has(y) && (m.schedule(y), n()), y(f);
  }
  const m = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (y, g = !1, w = !1) => {
      const R = w && l ? i : s;
      return g && d.add(y), R.add(y), y;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (y) => {
      s.delete(y), d.delete(y);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (y) => {
      if (f = y, l) {
        c = !0;
        return;
      }
      l = !0;
      const g = i;
      i = s, s = g, i.forEach(p), i.clear(), l = !1, c && (c = !1, m.process(y));
    }
  };
  return m;
}
const Gg = 40;
function op(n, i) {
  let s = !1, l = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => s = !0, f = Vs.reduce((O, z) => (O[z] = Kg(d), O), {}), { setup: p, read: m, resolveKeyframes: y, preUpdate: g, update: w, preRender: S, render: R, postRender: M } = f, D = () => {
    const O = gn.useManualTiming, z = O ? c.timestamp : performance.now();
    s = !1, O || (c.delta = l ? 1e3 / 60 : Math.max(Math.min(z - c.timestamp, Gg), 1)), c.timestamp = z, c.isProcessing = !0, p.process(c), m.process(c), y.process(c), g.process(c), w.process(c), S.process(c), R.process(c), M.process(c), c.isProcessing = !1, s && i && (l = !1, n(D));
  }, A = () => {
    s = !0, l = !0, c.isProcessing || n(D);
  };
  return { schedule: Vs.reduce((O, z) => {
    const b = f[z];
    return O[z] = (ne, re = !1, K = !1) => (s || A(), b.schedule(ne, re, K)), O;
  }, {}), cancel: (O) => {
    for (let z = 0; z < Vs.length; z++)
      f[Vs[z]].cancel(O);
  }, state: c, steps: f };
}
const { schedule: ve, cancel: vn, state: Ge, steps: sa } = /* @__PURE__ */ op(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let Is;
function Xg() {
  Is = void 0;
}
const et = {
  now: () => (Is === void 0 && et.set(Ge.isProcessing || gn.useManualTiming ? Ge.timestamp : performance.now()), Is),
  set: (n) => {
    Is = n, queueMicrotask(Xg);
  }
}, lp = (n) => (i) => typeof i == "string" && i.startsWith(n), ap = /* @__PURE__ */ lp("--"), Yg = /* @__PURE__ */ lp("var(--"), nu = (n) => Yg(n) ? Qg.test(n.split("/*")[0].trim()) : !1, Qg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Rd(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const gr = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, hi = {
  ...gr,
  transform: (n) => Bt(0, 1, n)
}, Ls = {
  ...gr,
  default: 1
}, ai = (n) => Math.round(n * 1e5) / 1e5, ru = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Zg(n) {
  return n == null;
}
const qg = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, iu = (n, i) => (s) => !!(typeof s == "string" && qg.test(s) && s.startsWith(n) || i && !Zg(s) && Object.prototype.hasOwnProperty.call(s, i)), up = (n, i, s) => (l) => {
  if (typeof l != "string")
    return l;
  const [c, d, f, p] = l.match(ru);
  return {
    [n]: parseFloat(c),
    [i]: parseFloat(d),
    [s]: parseFloat(f),
    alpha: p !== void 0 ? parseFloat(p) : 1
  };
}, Jg = (n) => Bt(0, 255, n), oa = {
  ...gr,
  transform: (n) => Math.round(Jg(n))
}, jn = {
  test: /* @__PURE__ */ iu("rgb", "red"),
  parse: /* @__PURE__ */ up("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) => "rgba(" + oa.transform(n) + ", " + oa.transform(i) + ", " + oa.transform(s) + ", " + ai(hi.transform(l)) + ")"
};
function bg(n) {
  let i = "", s = "", l = "", c = "";
  return n.length > 5 ? (i = n.substring(1, 3), s = n.substring(3, 5), l = n.substring(5, 7), c = n.substring(7, 9)) : (i = n.substring(1, 2), s = n.substring(2, 3), l = n.substring(3, 4), c = n.substring(4, 5), i += i, s += s, l += l, c += c), {
    red: parseInt(i, 16),
    green: parseInt(s, 16),
    blue: parseInt(l, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Sa = {
  test: /* @__PURE__ */ iu("#"),
  parse: bg,
  transform: jn.transform
}, vi = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), Qt = /* @__PURE__ */ vi("deg"), zt = /* @__PURE__ */ vi("%"), Y = /* @__PURE__ */ vi("px"), ev = /* @__PURE__ */ vi("vh"), tv = /* @__PURE__ */ vi("vw"), Ad = {
  ...zt,
  parse: (n) => zt.parse(n) / 100,
  transform: (n) => zt.transform(n * 100)
}, fr = {
  test: /* @__PURE__ */ iu("hsl", "hue"),
  parse: /* @__PURE__ */ up("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) => "hsla(" + Math.round(n) + ", " + zt.transform(ai(i)) + ", " + zt.transform(ai(s)) + ", " + ai(hi.transform(l)) + ")"
}, Fe = {
  test: (n) => jn.test(n) || Sa.test(n) || fr.test(n),
  parse: (n) => jn.test(n) ? jn.parse(n) : fr.test(n) ? fr.parse(n) : Sa.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? jn.transform(n) : fr.transform(n),
  getAnimatableNone: (n) => {
    const i = Fe.parse(n);
    return i.alpha = 0, Fe.transform(i);
  }
}, nv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function rv(n) {
  return isNaN(n) && typeof n == "string" && (n.match(ru)?.length || 0) + (n.match(nv)?.length || 0) > 0;
}
const cp = "number", fp = "color", iv = "var", sv = "var(", Dd = "${}", ov = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mr(n) {
  const i = n.toString(), s = [], l = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const p = i.replace(ov, (m) => (Fe.test(m) ? (l.color.push(d), c.push(fp), s.push(Fe.parse(m))) : m.startsWith(sv) ? (l.var.push(d), c.push(iv), s.push(m)) : (l.number.push(d), c.push(cp), s.push(parseFloat(m))), ++d, Dd)).split(Dd);
  return { values: s, split: p, indexes: l, types: c };
}
function lv(n) {
  return mr(n).values;
}
function dp({ split: n, types: i }) {
  const s = n.length;
  return (l) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (c += n[d], l[d] !== void 0) {
        const f = i[d];
        f === cp ? c += ai(l[d]) : f === fp ? c += Fe.transform(l[d]) : c += l[d];
      }
    return c;
  };
}
function av(n) {
  return dp(mr(n));
}
const uv = (n) => typeof n == "number" ? 0 : Fe.test(n) ? Fe.getAnimatableNone(n) : n, cv = (n, i) => typeof n == "number" ? i?.trim().endsWith("/") ? n : 0 : uv(n);
function fv(n) {
  const i = mr(n);
  return dp(i)(i.values.map((l, c) => cv(l, i.split[c])));
}
const Vt = {
  test: rv,
  parse: lv,
  createTransformer: av,
  getAnimatableNone: fv
};
function la(n, i, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (i - n) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? n + (i - n) * (2 / 3 - s) * 6 : n;
}
function dv({ hue: n, saturation: i, lightness: s, alpha: l }) {
  n /= 360, i /= 100, s /= 100;
  let c = 0, d = 0, f = 0;
  if (!i)
    c = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + i) : s + i - s * i, m = 2 * s - p;
    c = la(m, p, n + 1 / 3), d = la(m, p, n), f = la(m, p, n - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l
  };
}
function Gs(n, i) {
  return (s) => s > 0 ? i : n;
}
const ge = (n, i, s) => n + (i - n) * s, aa = (n, i, s) => {
  const l = n * n, c = s * (i * i - l) + l;
  return c < 0 ? 0 : Math.sqrt(c);
}, hv = [Sa, jn, fr], pv = (n) => hv.find((i) => i.test(n));
function Vd(n) {
  const i = pv(n);
  if (!i)
    return !1;
  let s = i.parse(n);
  return i === fr && (s = dv(s)), s;
}
const Ld = (n, i) => {
  const s = Vd(n), l = Vd(i);
  if (!s || !l)
    return Gs(n, i);
  const c = { ...s };
  return (d) => (c.red = aa(s.red, l.red, d), c.green = aa(s.green, l.green, d), c.blue = aa(s.blue, l.blue, d), c.alpha = ge(s.alpha, l.alpha, d), jn.transform(c));
}, ka = /* @__PURE__ */ new Set(["none", "hidden"]);
function mv(n, i) {
  return ka.has(n) ? (s) => s <= 0 ? n : i : (s) => s >= 1 ? i : n;
}
function yv(n, i) {
  return (s) => ge(n, i, s);
}
function su(n) {
  return typeof n == "number" ? yv : typeof n == "string" ? nu(n) ? Gs : Fe.test(n) ? Ld : wv : Array.isArray(n) ? hp : typeof n == "object" ? Fe.test(n) ? Ld : gv : Gs;
}
function hp(n, i) {
  const s = [...n], l = s.length, c = n.map((d, f) => su(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < l; f++)
      s[f] = c[f](d);
    return s;
  };
}
function gv(n, i) {
  const s = { ...n, ...i }, l = {};
  for (const c in s)
    n[c] !== void 0 && i[c] !== void 0 && (l[c] = su(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in l)
      s[d] = l[d](c);
    return s;
  };
}
function vv(n, i) {
  const s = [], l = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const d = i.types[c], f = n.indexes[d][l[d]], p = n.values[f] ?? 0;
    s[c] = p, l[d]++;
  }
  return s;
}
const wv = (n, i) => {
  const s = Vt.createTransformer(i), l = mr(n), c = mr(i);
  return l.indexes.var.length === c.indexes.var.length && l.indexes.color.length === c.indexes.color.length && l.indexes.number.length >= c.indexes.number.length ? ka.has(n) && !c.values.length || ka.has(i) && !l.values.length ? mv(n, i) : yi(hp(vv(l, c), c.values), s) : Gs(n, i);
};
function pp(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number" ? ge(n, i, s) : su(n)(n, i);
}
const xv = (n) => {
  const i = ({ timestamp: s }) => n(s);
  return {
    start: (s = !0) => ve.update(i, s),
    stop: () => vn(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ge.isProcessing ? Ge.timestamp : et.now()
  };
}, mp = (n, i, s = 10) => {
  let l = "";
  const c = Math.max(Math.round(i / s), 2);
  for (let d = 0; d < c; d++)
    l += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${l.substring(0, l.length - 2)})`;
}, Xs = 2e4;
function ou(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < Xs; )
    i += s, l = n.next(i);
  return i >= Xs ? 1 / 0 : i;
}
function Sv(n, i = 100, s) {
  const l = s({ ...n, keyframes: [0, i] }), c = Math.min(ou(l), Xs);
  return {
    type: "keyframes",
    ease: (d) => l.next(c * d).value / i,
    duration: /* @__PURE__ */ xt(c)
  };
}
const Le = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function Ta(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const kv = 12;
function Tv(n, i, s) {
  let l = s;
  for (let c = 1; c < kv; c++)
    l = l - n(l) / i(l);
  return l;
}
const ua = 1e-3;
function Pv({ duration: n = Le.duration, bounce: i = Le.bounce, velocity: s = Le.velocity, mass: l = Le.mass }) {
  let c, d, f = 1 - i;
  f = Bt(Le.minDamping, Le.maxDamping, f), n = Bt(Le.minDuration, Le.maxDuration, /* @__PURE__ */ xt(n)), f < 1 ? (c = (y) => {
    const g = y * f, w = g * n, S = g - s, R = Ta(y, f), M = Math.exp(-w);
    return ua - S / R * M;
  }, d = (y) => {
    const w = y * f * n, S = w * s + s, R = Math.pow(f, 2) * Math.pow(y, 2) * n, M = Math.exp(-w), D = Ta(Math.pow(y, 2), f);
    return (-c(y) + ua > 0 ? -1 : 1) * ((S - R) * M) / D;
  }) : (c = (y) => {
    const g = Math.exp(-y * n), w = (y - s) * n + 1;
    return -ua + g * w;
  }, d = (y) => {
    const g = Math.exp(-y * n), w = (s - y) * (n * n);
    return g * w;
  });
  const p = 5 / n, m = Tv(c, d, p);
  if (n = /* @__PURE__ */ ht(n), isNaN(m))
    return {
      stiffness: Le.stiffness,
      damping: Le.damping,
      duration: n
    };
  {
    const y = Math.pow(m, 2) * l;
    return {
      stiffness: y,
      damping: f * 2 * Math.sqrt(l * y),
      duration: n
    };
  }
}
const Cv = ["duration", "bounce"], Ev = ["stiffness", "damping", "mass"];
function Nd(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function Mv(n) {
  let i = {
    velocity: Le.velocity,
    stiffness: Le.stiffness,
    damping: Le.damping,
    mass: Le.mass,
    isResolvedFromDuration: !1,
    ...n
  };
  if (!Nd(n, Ev) && Nd(n, Cv))
    if (i.velocity = 0, n.visualDuration) {
      const s = n.visualDuration, l = 2 * Math.PI / (s * 1.2), c = l * l, d = 2 * Bt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = {
        ...i,
        mass: Le.mass,
        stiffness: c,
        damping: d
      };
    } else {
      const s = Pv({ ...n, velocity: 0 });
      i = {
        ...i,
        ...s,
        mass: Le.mass
      }, i.isResolvedFromDuration = !0;
    }
  return i;
}
function Ys(n = Le.visualDuration, i = Le.bounce) {
  const s = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: i
  } : n;
  let { restSpeed: l, restDelta: c } = s;
  const d = s.keyframes[0], f = s.keyframes[s.keyframes.length - 1], p = { done: !1, value: d }, { stiffness: m, damping: y, mass: g, duration: w, velocity: S, isResolvedFromDuration: R } = Mv({
    ...s,
    velocity: -/* @__PURE__ */ xt(s.velocity || 0)
  }), M = S || 0, D = y / (2 * Math.sqrt(m * g)), A = f - d, j = /* @__PURE__ */ xt(Math.sqrt(m / g)), B = Math.abs(A) < 5;
  l || (l = B ? Le.restSpeed.granular : Le.restSpeed.default), c || (c = B ? Le.restDelta.granular : Le.restDelta.default);
  let O, z, b, ne, re, K;
  if (D < 1)
    b = Ta(j, D), ne = (M + D * j * A) / b, O = (q) => {
      const ce = Math.exp(-D * j * q);
      return f - ce * (ne * Math.sin(b * q) + A * Math.cos(b * q));
    }, re = D * j * ne + A * b, K = D * j * A - ne * b, z = (q) => Math.exp(-D * j * q) * (re * Math.sin(b * q) + K * Math.cos(b * q));
  else if (D === 1) {
    O = (ce) => f - Math.exp(-j * ce) * (A + (M + j * A) * ce);
    const q = M + j * A;
    z = (ce) => Math.exp(-j * ce) * (j * q * ce - M);
  } else {
    const q = j * Math.sqrt(D * D - 1);
    O = (De) => {
      const je = Math.exp(-D * j * De), Se = Math.min(q * De, 300);
      return f - je * ((M + D * j * A) * Math.sinh(Se) + q * A * Math.cosh(Se)) / q;
    };
    const ce = (M + D * j * A) / q, ye = D * j * ce - A * q, Ee = D * j * A - ce * q;
    z = (De) => {
      const je = Math.exp(-D * j * De), Se = Math.min(q * De, 300);
      return je * (ye * Math.sinh(Se) + Ee * Math.cosh(Se));
    };
  }
  const se = {
    calculatedDuration: R && w || null,
    velocity: (q) => /* @__PURE__ */ ht(z(q)),
    next: (q) => {
      if (!R && D < 1) {
        const ye = Math.exp(-D * j * q), Ee = Math.sin(b * q), De = Math.cos(b * q), je = f - ye * (ne * Ee + A * De), Se = /* @__PURE__ */ ht(ye * (re * Ee + K * De));
        return p.done = Math.abs(Se) <= l && Math.abs(f - je) <= c, p.value = p.done ? f : je, p;
      }
      const ce = O(q);
      if (R)
        p.done = q >= w;
      else {
        const ye = /* @__PURE__ */ ht(z(q));
        p.done = Math.abs(ye) <= l && Math.abs(f - ce) <= c;
      }
      return p.value = p.done ? f : ce, p;
    },
    toString: () => {
      const q = Math.min(ou(se), Xs), ce = mp((ye) => se.next(q * ye).value, q, 30);
      return q + "ms " + ce;
    },
    toTransition: () => {
    }
  };
  return se;
}
Ys.applyToOptions = (n) => {
  const i = Sv(n, 100, Ys);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ ht(i.duration), n.type = "keyframes", n;
};
const Rv = 5;
function yp(n, i, s) {
  const l = Math.max(i - Rv, 0);
  return /* @__PURE__ */ Qh(s - n(l), i - l);
}
function Pa({ keyframes: n, velocity: i = 0, power: s = 0.8, timeConstant: l = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: p, max: m, restDelta: y = 0.5, restSpeed: g }) {
  const w = n[0], S = {
    done: !1,
    value: w
  }, R = (K) => p !== void 0 && K < p || m !== void 0 && K > m, M = (K) => p === void 0 ? m : m === void 0 || Math.abs(p - K) < Math.abs(m - K) ? p : m;
  let D = s * i;
  const A = w + D, j = f === void 0 ? A : f(A);
  j !== A && (D = j - w);
  const B = (K) => -D * Math.exp(-K / l), O = (K) => j + B(K), z = (K) => {
    const se = B(K), q = O(K);
    S.done = Math.abs(se) <= y, S.value = S.done ? j : q;
  };
  let b, ne;
  const re = (K) => {
    R(S.value) && (b = K, ne = Ys({
      keyframes: [S.value, M(S.value)],
      velocity: yp(O, K, S.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: d,
      restDelta: y,
      restSpeed: g
    }));
  };
  return re(0), {
    calculatedDuration: null,
    next: (K) => {
      let se = !1;
      return !ne && b === void 0 && (se = !0, z(K), re(K)), b !== void 0 && K >= b ? ne.next(K - b) : (!se && z(K), S);
    }
  };
}
function Av(n, i, s) {
  const l = [], c = s || gn.mix || pp, d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || St : i;
      p = yi(m, p);
    }
    l.push(p);
  }
  return l;
}
function Dv(n, i, { clamp: s = !0, ease: l, mixer: c } = {}) {
  const d = n.length;
  if (Ja(d === i.length), d === 1)
    return () => i[0];
  if (d === 2 && i[0] === i[1])
    return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const p = Av(i, l, c), m = p.length, y = (g) => {
    if (f && g < n[0])
      return i[0];
    let w = 0;
    if (m > 1)
      for (; w < n.length - 2 && !(g < n[w + 1]); w++)
        ;
    const S = /* @__PURE__ */ di(n[w], n[w + 1], g);
    return p[w](S);
  };
  return s ? (g) => y(Bt(n[0], n[d - 1], g)) : y;
}
function Vv(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const c = /* @__PURE__ */ di(0, i, l);
    n.push(ge(s, 1, c));
  }
}
function Lv(n) {
  const i = [0];
  return Vv(i, n.length - 1), i;
}
function Nv(n, i) {
  return n.map((s) => s * i);
}
function _v(n, i) {
  return n.map(() => i || ip).splice(0, n.length - 1);
}
function ui({ duration: n = 300, keyframes: i, times: s, ease: l = "easeInOut" }) {
  const c = /* @__PURE__ */ Wg(l) ? l.map(Md) : Md(l), d = {
    done: !1,
    value: i[0]
  }, f = Nv(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === i.length ? s : Lv(i),
    n
  ), p = Dv(f, i, {
    ease: Array.isArray(c) ? c : _v(i, c)
  });
  return {
    calculatedDuration: n,
    next: (m) => (d.value = p(m), d.done = m >= n, d)
  };
}
const jv = (n) => n !== null;
function no(n, { repeat: i, repeatType: s = "loop" }, l, c = 1) {
  const d = n.filter(jv), p = c < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : d.length - 1;
  return !p || l === void 0 ? d[p] : l;
}
const Iv = {
  decay: Pa,
  inertia: Pa,
  tween: ui,
  keyframes: ui,
  spring: Ys
};
function gp(n) {
  typeof n.type == "string" && (n.type = Iv[n.type]);
}
class lu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const Fv = (n) => n / 100;
class Qs extends lu {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== et.now() && this.tick(et.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    gp(i);
    const { type: s = ui, repeat: l = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = i;
    let { keyframes: p } = i;
    const m = s || ui;
    m !== ui && typeof p[0] != "number" && (this.mixKeyframes = yi(Fv, pp(p[0], p[1])), p = [0, 100]);
    const y = m({ ...i, keyframes: p });
    d === "mirror" && (this.mirroredGenerator = m({
      ...i,
      keyframes: [...p].reverse(),
      velocity: -f
    })), y.calculatedDuration === null && (y.calculatedDuration = ou(y));
    const { calculatedDuration: g } = y;
    this.calculatedDuration = g, this.resolvedDuration = g + c, this.totalDuration = this.resolvedDuration * (l + 1) - c, this.generator = y;
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s;
  }
  tick(i, s = !1) {
    const { generator: l, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: p, calculatedDuration: m } = this;
    if (this.startTime === null)
      return l.next(0);
    const { delay: y = 0, keyframes: g, repeat: w, repeatType: S, repeatDelay: R, type: M, onUpdate: D, finalKeyframe: A } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - c / this.speed, this.startTime)), s ? this.currentTime = i : this.updateTime(i);
    const j = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1), B = this.playbackSpeed >= 0 ? j < 0 : j > c;
    this.currentTime = Math.max(j, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let O = this.currentTime, z = l;
    if (w) {
      const K = Math.min(this.currentTime, c) / p;
      let se = Math.floor(K), q = K % 1;
      !q && K >= 1 && (q = 1), q === 1 && se--, se = Math.min(se, w + 1), se % 2 && (S === "reverse" ? (q = 1 - q, R && (q -= R / p)) : S === "mirror" && (z = f)), O = Bt(0, 1, q) * p;
    }
    let b;
    B ? (this.delayState.value = g[0], b = this.delayState) : b = z.next(O), d && !B && (b.value = d(b.value));
    let { done: ne } = b;
    !B && m !== null && (ne = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const re = this.holdTime === null && (this.state === "finished" || this.state === "running" && ne);
    return re && M !== Pa && (b.value = no(g, this.options, A, this.speed)), D && D(b.value), re && this.finish(), b;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return /* @__PURE__ */ xt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ xt(i);
  }
  get time() {
    return /* @__PURE__ */ xt(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ ht(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const i = this.currentTime;
    if (i <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(i);
    const s = this.generator.next(i).value;
    return yp((l) => this.generator.next(l).value, i, s);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const s = this.playbackSpeed !== i;
    s && this.driver && this.updateTime(et.now()), this.playbackSpeed = i, s && this.driver && (this.time = /* @__PURE__ */ xt(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = xv, startTime: s } = this.options;
    this.driver || (this.driver = i((c) => this.tick(c))), this.options.onPlay?.();
    const l = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = s ?? l), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(et.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(i) {
    return this.startTime = 0, this.tick(i, !0);
  }
  attachTimeline(i) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), i.observe(this);
  }
}
function Ov(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const In = (n) => n * 180 / Math.PI, Ca = (n) => {
  const i = In(Math.atan2(n[1], n[0]));
  return Ea(i);
}, zv = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: Ca,
  rotateZ: Ca,
  skewX: (n) => In(Math.atan(n[1])),
  skewY: (n) => In(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, Ea = (n) => (n = n % 360, n < 0 && (n += 360), n), _d = Ca, jd = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), Id = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), Bv = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: jd,
  scaleY: Id,
  scale: (n) => (jd(n) + Id(n)) / 2,
  rotateX: (n) => Ea(In(Math.atan2(n[6], n[5]))),
  rotateY: (n) => Ea(In(Math.atan2(-n[2], n[0]))),
  rotateZ: _d,
  rotate: _d,
  skewX: (n) => In(Math.atan(n[4])),
  skewY: (n) => In(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Ma(n) {
  return n.includes("scale") ? 1 : 0;
}
function Ra(n, i) {
  if (!n || n === "none")
    return Ma(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, c;
  if (s)
    l = Bv, c = s;
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    l = zv, c = p;
  }
  if (!c)
    return Ma(i);
  const d = l[i], f = c[1].split(",").map(Wv);
  return typeof d == "function" ? d(f) : f[d];
}
const Uv = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Ra(s, i);
};
function Wv(n) {
  return parseFloat(n.trim());
}
const vr = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], wr = /* @__PURE__ */ new Set([...vr, "pathRotation"]), Fd = (n) => n === gr || n === Y, $v = /* @__PURE__ */ new Set(["x", "y", "z"]), Hv = vr.filter((n) => !$v.has(n));
function Kv(n) {
  const i = [];
  return Hv.forEach((s) => {
    const l = n.getValue(s);
    l !== void 0 && (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
  }), i;
}
const yn = {
  // Dimensions
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0", boxSizing: l }) => {
    const c = n.max - n.min;
    return l === "border-box" ? c : c - parseFloat(i) - parseFloat(s);
  },
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0", boxSizing: l }) => {
    const c = n.max - n.min;
    return l === "border-box" ? c : c - parseFloat(i) - parseFloat(s);
  },
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  // Transform
  x: (n, { transform: i }) => Ra(i, "x"),
  y: (n, { transform: i }) => Ra(i, "y")
};
yn.translateX = yn.x;
yn.translateY = yn.y;
const Fn = /* @__PURE__ */ new Set();
let Aa = !1, Da = !1, Va = !1;
function vp() {
  if (Da) {
    const n = Array.from(Fn).filter((l) => l.needsMeasurement), i = new Set(n.map((l) => l.element)), s = /* @__PURE__ */ new Map();
    i.forEach((l) => {
      const c = Kv(l);
      c.length && (s.set(l, c), l.render());
    }), n.forEach((l) => l.measureInitialState()), i.forEach((l) => {
      l.render();
      const c = s.get(l);
      c && c.forEach(([d, f]) => {
        l.getValue(d)?.set(f);
      });
    }), n.forEach((l) => l.measureEndState()), n.forEach((l) => {
      l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
    });
  }
  Da = !1, Aa = !1, Fn.forEach((n) => n.complete(Va)), Fn.clear();
}
function wp() {
  Fn.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Da = !0);
  });
}
function Gv() {
  Va = !0, wp(), vp(), Va = !1;
}
class au {
  constructor(i, s, l, c, d, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = l, this.motionValue = c, this.element = d, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Fn.add(this), Aa || (Aa = !0, ve.read(wp), ve.resolveKeyframes(vp))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: s, element: l, motionValue: c } = this;
    if (i[0] === null) {
      const d = c?.get(), f = i[i.length - 1];
      if (d !== void 0)
        i[0] = d;
      else if (l && s) {
        const p = l.readValue(s, f);
        p != null && (i[0] = p);
      }
      i[0] === void 0 && (i[0] = f), c && d === void 0 && c.set(i[0]);
    }
    Ov(i);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(i = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), Fn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Fn.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Xv = (n) => n.startsWith("--");
function xp(n, i, s) {
  Xv(i) ? n.style.setProperty(i, s) : n.style[i] = s;
}
const Yv = {};
function Sp(n, i) {
  const s = /* @__PURE__ */ Yh(n);
  return () => Yv[i] ?? s();
}
const Qv = /* @__PURE__ */ Sp(() => window.ScrollTimeline !== void 0, "scrollTimeline"), kp = /* @__PURE__ */ Sp(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), li = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`, Od = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ li([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ li([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ li([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ li([0.33, 1.53, 0.69, 0.99])
};
function Tp(n, i) {
  if (n)
    return typeof n == "function" ? kp() ? mp(n, i) : "ease-out" : /* @__PURE__ */ sp(n) ? li(n) : Array.isArray(n) ? n.map((s) => Tp(s, i) || Od.easeOut) : Od[n];
}
function Zv(n, i, s, { delay: l = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: p = "easeOut", times: m } = {}, y = void 0) {
  const g = {
    [i]: s
  };
  m && (g.offset = m);
  const w = Tp(p, c);
  Array.isArray(w) && (g.easing = w);
  const S = {
    delay: l,
    duration: c,
    easing: Array.isArray(w) ? "linear" : w,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return y && (S.pseudoElement = y), n.animate(g, S);
}
function Pp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function qv({ type: n, ...i }) {
  return Pp(n) && kp() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Cp extends lu {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i)
      return;
    const { element: s, name: l, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: p, onComplete: m } = i;
    this.isPseudoElement = !!d, this.allowFlatten = f, this.options = i, Ja(typeof i.type != "string");
    const y = qv(i);
    this.animation = Zv(s, l, c, y, d), y.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const g = no(c, this.options, p, this.speed);
        this.updateMotionValue && this.updateMotionValue(g), xp(s, l, g), this.animation.cancel();
      }
      m?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ xt(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ xt(i);
  }
  get time() {
    return /* @__PURE__ */ xt(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const s = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ht(i), s && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), this.animation.playbackRate = i;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: i, rangeStart: s, rangeEnd: l, observe: c }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && Qv() ? (this.animation.timeline = i, s && (this.animation.rangeStart = s), l && (this.animation.rangeEnd = l), St) : c(this);
  }
}
const Ep = {
  anticipate: tp,
  backInOut: ep,
  circInOut: rp
};
function Jv(n) {
  return n in Ep;
}
function bv(n) {
  typeof n.ease == "string" && Jv(n.ease) && (n.ease = Ep[n.ease]);
}
const ca = 10;
class e0 extends Cp {
  constructor(i) {
    bv(i), gp(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(i) {
    const { motionValue: s, onUpdate: l, onComplete: c, element: d, ...f } = this.options;
    if (!s)
      return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const p = new Qs({
      ...f,
      autoplay: !1
    }), m = Math.max(ca, et.now() - this.startTime), y = Bt(0, ca, m - ca), g = p.sample(m).value, { name: w } = this.options;
    d && w && xp(d, w, g), s.setWithVelocity(p.sample(Math.max(0, m - y)).value, g, y), p.stop();
  }
}
const zd = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Vt.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function t0(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let s = 0; s < n.length; s++)
    if (n[s] !== i)
      return !0;
}
function n0(n, i, s, l) {
  const c = n[0];
  if (c === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const d = n[n.length - 1], f = zd(c, i), p = zd(d, i);
  return !f || !p ? !1 : t0(n) || (s === "spring" || Pp(s)) && l;
}
function La(n) {
  n.duration = 0, n.type = "keyframes";
}
const Mp = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), r0 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function i0(n) {
  for (let i = 0; i < n.length; i++)
    if (typeof n[i] == "string" && r0.test(n[i]))
      return !0;
  return !1;
}
const s0 = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), o0 = /* @__PURE__ */ Yh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function l0(n) {
  const { motionValue: i, name: s, repeatDelay: l, repeatType: c, damping: d, type: f, keyframes: p } = n;
  if (!(i?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: y, transformTemplate: g } = i.owner.getProps();
  return o0() && s && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Mp.has(s) || s0.has(s) && i0(p)) && (s !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !y && !l && c !== "mirror" && d !== 0 && f !== "inertia";
}
const a0 = 40;
class u0 extends lu {
  constructor({ autoplay: i = !0, delay: s = 0, type: l = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: f = "loop", keyframes: p, name: m, motionValue: y, element: g, ...w }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = et.now();
    const S = {
      autoplay: i,
      delay: s,
      type: l,
      repeat: c,
      repeatDelay: d,
      repeatType: f,
      name: m,
      motionValue: y,
      element: g,
      ...w
    }, R = g?.KeyframeResolver || au;
    this.keyframeResolver = new R(p, (M, D, A) => this.onKeyframesResolved(M, D, S, !A), m, y, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, s, l, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: p, delay: m, isHandoff: y, onUpdate: g } = l;
    this.resolvedAt = et.now();
    let w = !0;
    n0(i, d, f, p) || (w = !1, (gn.instantAnimations || !m) && g?.(no(i, l, s)), i[0] = i[i.length - 1], La(l), l.repeat = 0);
    const R = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > a0 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: s,
      ...l,
      keyframes: i
    }, M = w && !y && l0(R), D = R.motionValue?.owner?.current;
    let A;
    if (M)
      try {
        A = new e0({
          ...R,
          element: D
        });
      } catch {
        A = new Qs(R);
      }
    else
      A = new Qs(R);
    A.finished.then(() => {
      this.notifyFinished();
    }).catch(St), this.pendingTimeline && (this.stopTimeline = A.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = A;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Gv()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function Rp(n, i, s, l = 0, c = 1) {
  const d = Array.from(n).sort((y, g) => y.sortNodePosition(g)).indexOf(i), f = n.size, p = (f - 1) * l;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * l : p - d * l;
}
const Bd = 30, c0 = (n) => !isNaN(parseFloat(n));
class f0 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (l) => {
      const c = et.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(l), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = et.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = c0(this.current));
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new ba());
    const l = this.events[i].add(s);
    return i === "change" ? () => {
      l(), ve.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : l;
  }
  clearListeners() {
    for (const i in this.events)
      this.events[i].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(i, s) {
    this.passiveEffect = i, this.stopPassiveEffect = s;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(i) {
    this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i);
  }
  setWithVelocity(i, s, l) {
    this.set(s), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - l;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(i, s = !0) {
    this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const i = et.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Bd)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Bd);
    return /* @__PURE__ */ Qh(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(i) {
    return this.stop(), new Promise((s) => {
      this.hasAnimated = !0, this.animation = i(s), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yr(n, i) {
  return new f0(n, i);
}
function Ap(n, i) {
  if (n?.inherit && i) {
    const { inherit: s, ...l } = n;
    return { ...i, ...l };
  }
  return n;
}
function uu(n, i) {
  const s = n?.[i] ?? n?.default ?? n;
  return s !== n ? Ap(s, n) : s;
}
const d0 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, h0 = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), p0 = {
  type: "keyframes",
  duration: 0.8
}, m0 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, y0 = (n, { keyframes: i }) => i.length > 2 ? p0 : wr.has(n) ? n.startsWith("scale") ? h0(i[1]) : d0 : m0, g0 = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function v0(n) {
  for (const i in n)
    if (!g0.has(i))
      return !0;
  return !1;
}
const cu = (n, i, s, l = {}, c, d) => (f) => {
  const p = uu(l, n) || {}, m = p.delay || l.delay || 0;
  let { elapsed: y = 0 } = l;
  y = y - /* @__PURE__ */ ht(m);
  const g = {
    keyframes: Array.isArray(s) ? s : [null, s],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...p,
    delay: -y,
    onUpdate: (S) => {
      i.set(S), p.onUpdate && p.onUpdate(S);
    },
    onComplete: () => {
      f(), p.onComplete && p.onComplete();
    },
    name: n,
    motionValue: i,
    element: d ? void 0 : c
  };
  v0(p) || Object.assign(g, y0(n, g)), g.duration && (g.duration = /* @__PURE__ */ ht(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ ht(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let w = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (La(g), g.delay === 0 && (w = !0)), (gn.instantAnimations || gn.skipAnimations || c?.shouldSkipAnimations || p.skipAnimations) && (w = !0, La(g), g.delay = 0), g.allowFlatten = !p.type && !p.ease, w && !d && i.get() !== void 0) {
    const S = no(g.keyframes, p);
    if (S !== void 0) {
      ve.update(() => {
        g.onUpdate(S), g.onComplete();
      });
      return;
    }
  }
  return p.isSync ? new Qs(g) : new u0(g);
}, w0 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function x0(n) {
  const i = w0.exec(n);
  if (!i)
    return [,];
  const [, s, l, c] = i;
  return [`--${s ?? l}`, c];
}
function Dp(n, i, s = 1) {
  const [l, c] = x0(n);
  if (!l)
    return;
  const d = window.getComputedStyle(i).getPropertyValue(l);
  if (d) {
    const f = d.trim();
    return Kh(f) ? parseFloat(f) : f;
  }
  return nu(c) ? Dp(c, i, s + 1) : c;
}
function Ud(n) {
  const i = [{}, {}];
  return n?.values.forEach((s, l) => {
    i[0][l] = s.get(), i[1][l] = s.getVelocity();
  }), i;
}
function fu(n, i, s, l) {
  if (typeof i == "function") {
    const [c, d] = Ud(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  if (typeof i == "string" && (i = n.variants && n.variants[i]), typeof i == "function") {
    const [c, d] = Ud(l);
    i = i(s !== void 0 ? s : n.custom, c, d);
  }
  return i;
}
function On(n, i, s) {
  const l = n.getProps();
  return fu(l, i, s !== void 0 ? s : l.custom, n);
}
const Vp = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...vr
]), Na = (n) => Array.isArray(n);
function S0(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, yr(s));
}
function k0(n) {
  return Na(n) ? n[n.length - 1] || 0 : n;
}
function T0(n, i) {
  const s = On(n, i);
  let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...l };
  for (const f in d) {
    const p = k0(d[f]);
    S0(n, f, p);
  }
}
const Xe = (n) => !!(n && n.getVelocity);
function P0(n) {
  return !!(Xe(n) && n.add);
}
function _a(n, i) {
  const s = n.getValue("willChange");
  if (P0(s))
    return s.add(i);
  if (!s && gn.WillChange) {
    const l = new gn.WillChange("auto");
    n.addValue("willChange", l), l.add(i);
  }
}
function du(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const C0 = "framerAppearId", Lp = "data-" + du(C0);
function Np(n) {
  return n.props[Lp];
}
function E0({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return i[s] = !1, l;
}
function _p(n, i, { delay: s = 0, transitionOverride: l, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...p } = i;
  const m = n.getDefaultTransition();
  d = d ? Ap(d, m) : m;
  const y = d?.reduceMotion, g = d?.skipAnimations;
  l && (d = l);
  const w = [], S = c && n.animationState && n.animationState.getState()[c], R = d?.path;
  R && R.animateVisualElement(n, p, d, s, w);
  for (const M in p) {
    const D = n.getValue(M, n.latestValues[M] ?? null), A = p[M];
    if (A === void 0 || S && E0(S, M))
      continue;
    const j = {
      delay: s,
      ...uu(d || {}, M)
    };
    g && (j.skipAnimations = !0);
    const B = D.get();
    if (B !== void 0 && !D.isAnimating() && !Array.isArray(A) && A === B && !j.velocity) {
      ve.update(() => D.set(A));
      continue;
    }
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const ne = Np(n);
      if (ne) {
        const re = window.MotionHandoffAnimation(ne, M, ve);
        re !== null && (j.startTime = re, O = !0);
      }
    }
    _a(n, M);
    const z = y ?? n.shouldReduceMotion;
    D.start(cu(M, D, A, z && Vp.has(M) ? { type: !1 } : j, n, O));
    const b = D.animation;
    b && w.push(b);
  }
  if (f) {
    const M = () => ve.update(() => {
      f && T0(n, f);
    });
    w.length ? Promise.all(w).then(M) : M();
  }
  return w;
}
function ja(n, i, s = {}) {
  const l = On(n, i, s.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: c = n.getDefaultTransition() || {} } = l || {};
  s.transitionOverride && (c = s.transitionOverride);
  const d = l ? () => Promise.all(_p(n, l, s)) : () => Promise.resolve(), f = n.variantChildren && n.variantChildren.size ? (m = 0) => {
    const { delayChildren: y = 0, staggerChildren: g, staggerDirection: w } = c;
    return M0(n, i, m, y, g, w, s);
  } : () => Promise.resolve(), { when: p } = c;
  if (p) {
    const [m, y] = p === "beforeChildren" ? [d, f] : [f, d];
    return m().then(() => y());
  } else
    return Promise.all([d(), f(s.delay)]);
}
function M0(n, i, s = 0, l = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    m.notify("AnimationStart", i), p.push(ja(m, i, {
      ...f,
      delay: s + (typeof l == "function" ? 0 : l) + Rp(n.variantChildren, m, l, c, d)
    }).then(() => m.notify("AnimationComplete", i)));
  return Promise.all(p);
}
function R0(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const c = i.map((d) => ja(n, d, s));
    l = Promise.all(c);
  } else if (typeof i == "string")
    l = ja(n, i, s);
  else {
    const c = typeof i == "function" ? On(n, i, s.custom) : i;
    l = Promise.all(_p(n, c, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const A0 = {
  test: (n) => n === "auto",
  parse: (n) => n
}, jp = (n) => (i) => i.test(n), Ip = [gr, Y, zt, Qt, tv, ev, A0], Wd = (n) => Ip.find(jp(n));
function D0(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Xh(n) : !0;
}
const V0 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function L0(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [l] = s.match(ru) || [];
  if (!l)
    return n;
  const c = s.replace(l, "");
  let d = V0.has(i) ? 1 : 0;
  return l !== s && (d *= 100), i + "(" + d + c + ")";
}
const N0 = /\b([a-z-]*)\(.*?\)/gu, Ia = {
  ...Vt,
  getAnimatableNone: (n) => {
    const i = n.match(N0);
    return i ? i.map(L0).join(" ") : n;
  }
}, Fa = {
  ...Vt,
  getAnimatableNone: (n) => {
    const i = Vt.parse(n);
    return Vt.createTransformer(n)(i.map((l) => typeof l == "number" ? 0 : typeof l == "object" ? { ...l, alpha: 1 } : l));
  }
}, $d = {
  ...gr,
  transform: Math.round
}, _0 = {
  rotate: Qt,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Qt,
  rotateX: Qt,
  rotateY: Qt,
  rotateZ: Qt,
  scale: Ls,
  scaleX: Ls,
  scaleY: Ls,
  scaleZ: Ls,
  skew: Qt,
  skewX: Qt,
  skewY: Qt,
  distance: Y,
  translateX: Y,
  translateY: Y,
  translateZ: Y,
  x: Y,
  y: Y,
  z: Y,
  perspective: Y,
  transformPerspective: Y,
  opacity: hi,
  originX: Ad,
  originY: Ad,
  originZ: Y
}, Zs = {
  // Border props
  borderWidth: Y,
  borderTopWidth: Y,
  borderRightWidth: Y,
  borderBottomWidth: Y,
  borderLeftWidth: Y,
  borderRadius: Y,
  borderTopLeftRadius: Y,
  borderTopRightRadius: Y,
  borderBottomRightRadius: Y,
  borderBottomLeftRadius: Y,
  // Positioning props
  width: Y,
  maxWidth: Y,
  height: Y,
  maxHeight: Y,
  top: Y,
  right: Y,
  bottom: Y,
  left: Y,
  inset: Y,
  insetBlock: Y,
  insetBlockStart: Y,
  insetBlockEnd: Y,
  insetInline: Y,
  insetInlineStart: Y,
  insetInlineEnd: Y,
  // Spacing props
  padding: Y,
  paddingTop: Y,
  paddingRight: Y,
  paddingBottom: Y,
  paddingLeft: Y,
  paddingBlock: Y,
  paddingBlockStart: Y,
  paddingBlockEnd: Y,
  paddingInline: Y,
  paddingInlineStart: Y,
  paddingInlineEnd: Y,
  margin: Y,
  marginTop: Y,
  marginRight: Y,
  marginBottom: Y,
  marginLeft: Y,
  marginBlock: Y,
  marginBlockStart: Y,
  marginBlockEnd: Y,
  marginInline: Y,
  marginInlineStart: Y,
  marginInlineEnd: Y,
  // Typography
  fontSize: Y,
  // Misc
  backgroundPositionX: Y,
  backgroundPositionY: Y,
  ..._0,
  zIndex: $d,
  // SVG
  fillOpacity: hi,
  strokeOpacity: hi,
  numOctaves: $d
}, j0 = {
  ...Zs,
  // Color props
  color: Fe,
  backgroundColor: Fe,
  outlineColor: Fe,
  fill: Fe,
  stroke: Fe,
  // Border props
  borderColor: Fe,
  borderTopColor: Fe,
  borderRightColor: Fe,
  borderBottomColor: Fe,
  borderLeftColor: Fe,
  filter: Ia,
  WebkitFilter: Ia,
  mask: Fa,
  WebkitMask: Fa
}, Fp = (n) => j0[n], I0 = /* @__PURE__ */ new Set([Ia, Fa]);
function Op(n, i) {
  let s = Fp(n);
  return I0.has(s) || (s = Vt), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0;
}
const F0 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function O0(n, i, s) {
  let l = 0, c;
  for (; l < n.length && !c; ) {
    const d = n[l];
    typeof d == "string" && !F0.has(d) && mr(d).values.length && (c = n[l]), l++;
  }
  if (c && s)
    for (const d of i)
      n[d] = Op(s, c);
}
class z0 extends au {
  constructor(i, s, l, c, d) {
    super(i, s, l, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < i.length; g++) {
      let w = i[g];
      if (typeof w == "string" && (w = w.trim(), nu(w))) {
        const S = Dp(w, s.current);
        S !== void 0 && (i[g] = S), g === i.length - 1 && (this.finalKeyframe = w);
      }
    }
    if (this.resolveNoneKeyframes(), !Vp.has(l) || i.length !== 2)
      return;
    const [c, d] = i, f = Wd(c), p = Wd(d), m = Rd(c), y = Rd(d);
    if (m !== y && yn[l]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== p)
      if (Fd(f) && Fd(p))
        for (let g = 0; g < i.length; g++) {
          const w = i[g];
          typeof w == "string" && (i[g] = parseFloat(w));
        }
      else yn[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this, l = [];
    for (let c = 0; c < i.length; c++)
      (i[c] === null || D0(i[c])) && l.push(c);
    l.length && O0(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current)
      return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = yn[l](i.measureViewportBox(), window.getComputedStyle(i.current)), s[0] = this.measuredOrigin;
    const c = s[s.length - 1];
    c !== void 0 && i.getValue(l, c).jump(c, !1);
  }
  measureEndState() {
    const { element: i, name: s, unresolvedKeyframes: l } = this;
    if (!i || !i.current)
      return;
    const c = i.getValue(s);
    c && c.jump(this.measuredOrigin, !1);
    const d = l.length - 1, f = l[d];
    l[d] = yn[s](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([p, m]) => {
      i.getValue(p).set(m);
    }), this.resolveNoneKeyframes();
  }
}
function zp(n, i, s) {
  if (n == null)
    return [];
  if (n instanceof EventTarget)
    return [n];
  if (typeof n == "string") {
    let l = document;
    const c = s?.[n] ?? l.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n).filter((l) => l != null);
}
const Oa = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function Fs(n) {
  return Gh(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: hu } = /* @__PURE__ */ op(queueMicrotask, !1), Dt = {
  x: !1,
  y: !1
};
function Bp() {
  return Dt.x || Dt.y;
}
function B0(n) {
  return n === "x" || n === "y" ? Dt[n] ? null : (Dt[n] = !0, () => {
    Dt[n] = !1;
  }) : Dt.x || Dt.y ? null : (Dt.x = Dt.y = !0, () => {
    Dt.x = Dt.y = !1;
  });
}
function Up(n, i) {
  const s = zp(n), l = new AbortController(), c = {
    passive: !0,
    ...i,
    signal: l.signal
  };
  return [s, c, () => l.abort()];
}
function U0(n) {
  return !(n.pointerType === "touch" || Bp());
}
function W0(n, i, s = {}) {
  const [l, c, d] = Up(n, s);
  return l.forEach((f) => {
    let p = !1, m = !1, y;
    const g = () => {
      f.removeEventListener("pointerleave", M);
    }, w = (A) => {
      y && (y(A), y = void 0), g();
    }, S = (A) => {
      p = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), m && (m = !1, w(A));
    }, R = () => {
      p = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, M = (A) => {
      if (A.pointerType !== "touch") {
        if (p) {
          m = !0;
          return;
        }
        w(A);
      }
    }, D = (A) => {
      if (!U0(A))
        return;
      m = !1;
      const j = i(f, A);
      typeof j == "function" && (y = j, f.addEventListener("pointerleave", M, c));
    };
    f.addEventListener("pointerenter", D, c), f.addEventListener("pointerdown", R, c);
  }), d;
}
const Wp = (n, i) => i ? n === i ? !0 : Wp(n, i.parentElement) : !1, pu = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, $0 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function H0(n) {
  return $0.has(n.tagName) || n.isContentEditable === !0;
}
const K0 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function G0(n) {
  return K0.has(n.tagName) || n.isContentEditable === !0;
}
const Os = /* @__PURE__ */ new WeakSet();
function Hd(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function fa(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const X0 = (n, i) => {
  const s = n.currentTarget;
  if (!s)
    return;
  const l = Hd(() => {
    if (Os.has(s))
      return;
    fa(s, "down");
    const c = Hd(() => {
      fa(s, "up");
    }), d = () => fa(s, "cancel");
    s.addEventListener("keyup", c, i), s.addEventListener("blur", d, i);
  });
  s.addEventListener("keydown", l, i), s.addEventListener("blur", () => s.removeEventListener("keydown", l), i);
};
function Kd(n) {
  return pu(n) && !Bp();
}
const Gd = /* @__PURE__ */ new WeakSet();
function Y0(n, i, s = {}) {
  const [l, c, d] = Up(n, s), f = (p) => {
    const m = p.currentTarget;
    if (!Kd(p) || Gd.has(p))
      return;
    Os.add(m), s.stopPropagation && Gd.add(p);
    const y = i(m, p), g = { ...c, capture: !0 }, w = (M, D) => {
      window.removeEventListener("pointerup", S, g), window.removeEventListener("pointercancel", R, g), Os.has(m) && Os.delete(m), Kd(M) && typeof y == "function" && y(M, { success: D });
    }, S = (M) => {
      w(M, m === window || m === document || s.useGlobalTarget || Wp(m, M.target));
    }, R = (M) => {
      w(M, !1);
    };
    window.addEventListener("pointerup", S, g), window.addEventListener("pointercancel", R, g);
  };
  return l.forEach((p) => {
    (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c), Fs(p) && (p.addEventListener("focus", (y) => X0(y, c)), !H0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
  }), d;
}
function mu(n) {
  return Gh(n) && "ownerSVGElement" in n;
}
const zs = /* @__PURE__ */ new WeakMap();
let Bs;
const $p = (n, i, s) => (l, c) => c && c[0] ? c[0][n + "Size"] : mu(l) && "getBBox" in l ? l.getBBox()[i] : l[s], Q0 = /* @__PURE__ */ $p("inline", "width", "offsetWidth"), Z0 = /* @__PURE__ */ $p("block", "height", "offsetHeight");
function q0({ target: n, borderBoxSize: i }) {
  zs.get(n)?.forEach((s) => {
    s(n, {
      get width() {
        return Q0(n, i);
      },
      get height() {
        return Z0(n, i);
      }
    });
  });
}
function J0(n) {
  n.forEach(q0);
}
function b0() {
  typeof ResizeObserver > "u" || (Bs = new ResizeObserver(J0));
}
function e1(n, i) {
  Bs || b0();
  const s = zp(n);
  return s.forEach((l) => {
    let c = zs.get(l);
    c || (c = /* @__PURE__ */ new Set(), zs.set(l, c)), c.add(i), Bs?.observe(l);
  }), () => {
    s.forEach((l) => {
      const c = zs.get(l);
      c?.delete(i), c?.size || Bs?.unobserve(l);
    });
  };
}
const Us = /* @__PURE__ */ new Set();
let dr;
function t1() {
  dr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Us.forEach((i) => i(n));
  }, window.addEventListener("resize", dr);
}
function n1(n) {
  return Us.add(n), dr || t1(), () => {
    Us.delete(n), !Us.size && typeof dr == "function" && (window.removeEventListener("resize", dr), dr = void 0);
  };
}
function Xd(n, i) {
  return typeof n == "function" ? n1(n) : e1(n, i);
}
function r1(n) {
  return mu(n) && n.tagName === "svg";
}
const i1 = [...Ip, Fe, Vt], s1 = (n) => i1.find(jp(n)), Yd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), hr = () => ({
  x: Yd(),
  y: Yd()
}), Qd = () => ({ min: 0, max: 0 }), Be = () => ({
  x: Qd(),
  y: Qd()
}), o1 = /* @__PURE__ */ new WeakMap();
function ro(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function pi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const yu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], gu = ["initial", ...yu];
function io(n) {
  return ro(n.animate) || gu.some((i) => pi(n[i]));
}
function Hp(n) {
  return !!(io(n) || n.variants);
}
function l1(n, i, s) {
  for (const l in i) {
    const c = i[l], d = s[l];
    if (Xe(c))
      n.addValue(l, c);
    else if (Xe(d))
      n.addValue(l, yr(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(l)) {
        const f = n.getValue(l);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(l);
        n.addValue(l, yr(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const l in s)
    i[l] === void 0 && n.removeValue(l);
  return i;
}
const za = { current: null }, Kp = { current: !1 }, a1 = typeof window < "u";
function u1() {
  if (Kp.current = !0, !!a1)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => za.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      za.current = !1;
}
const Zd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let qs = {};
function Gp(n) {
  qs = n;
}
function c1() {
  return qs;
}
class f1 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(i, s, l) {
    return {};
  }
  constructor({ parent: i, props: s, presenceContext: l, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: f, visualState: p }, m = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = au, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const R = et.now();
      this.renderScheduledAt < R && (this.renderScheduledAt = R, ve.render(this.render, !1, !0));
    };
    const { latestValues: y, renderState: g } = p;
    this.latestValues = y, this.baseTarget = { ...y }, this.initialValues = s.initial ? { ...y } : {}, this.renderState = g, this.parent = i, this.props = s, this.presenceContext = l, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = m, this.blockInitialAnimation = !!f, this.isControllingVariants = io(s), this.isVariantNode = Hp(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: w, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const R in S) {
      const M = S[R];
      y[R] !== void 0 && Xe(M) && M.set(y[R]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const s in this.initialValues)
        this.values.get(s)?.jump(this.initialValues[s]), this.latestValues[s] = this.initialValues[s];
    this.current = i, o1.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, l) => this.bindToMotionValue(l, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Kp.current || u1(), this.shouldReduceMotion = za.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), vn(this.notifyUpdate), vn(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const i in this.events)
      this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), s.isMounted = !1);
    }
    this.current = null;
  }
  addChild(i) {
    this.children.add(i), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(i);
  }
  removeChild(i) {
    this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i);
  }
  bindToMotionValue(i, s) {
    if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), s.accelerate && Mp.has(i) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: p, times: m, ease: y, duration: g } = s.accelerate, w = new Cp({
        element: this.current,
        name: i,
        keyframes: p,
        times: m,
        ease: y,
        duration: /* @__PURE__ */ ht(g)
      }), S = f(w);
      this.valueSubscriptions.set(i, () => {
        S(), w.cancel();
      });
      return;
    }
    const l = wr.has(i);
    l && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (f) => {
      this.latestValues[i] = f, this.props.onUpdate && ve.preRender(this.notifyUpdate), l && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let d;
    typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, i, s)), this.valueSubscriptions.set(i, () => {
      c(), d && d();
    });
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in qs) {
      const s = qs[i];
      if (!s)
        continue;
      const { isEnabled: l, Feature: c } = s;
      if (!this.features[i] && c && l(this.props) && (this.features[i] = new c(this)), this.features[i]) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Be();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(i, s) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let l = 0; l < Zd.length; l++) {
      const c = Zd[l];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c, f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    this.prevMotionValues = l1(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return s.variantChildren && s.variantChildren.add(i), () => s.variantChildren.delete(i);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(i, s) {
    const l = this.values.get(i);
    s !== l && (l && this.removeValue(i), this.bindToMotionValue(i, s), this.values.set(i, s), this.latestValues[i] = s.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    s && (s(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let l = this.values.get(i);
    return l === void 0 && s !== void 0 && (l = yr(s === null ? void 0 : s, { owner: this }), this.addValue(i, l)), l;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, s) {
    let l = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return l != null && (typeof l == "string" && (Kh(l) || Xh(l)) ? l = parseFloat(l) : !s1(l) && Vt.test(s) && (l = Op(i, s)), this.setBaseTarget(i, Xe(l) ? l.get() : l)), Xe(l) ? l.get() : l;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(i) {
    const { initial: s } = this.props;
    let l;
    if (typeof s == "string" || typeof s == "object") {
      const d = fu(this.props, s, this.presenceContext?.custom);
      d && (l = d[i]);
    }
    if (s && l !== void 0)
      return l;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !Xe(c) ? c : this.initialValues[i] !== void 0 && l === void 0 ? void 0 : this.baseTarget[i];
  }
  on(i, s) {
    return this.events[i] || (this.events[i] = new ba()), this.events[i].add(s);
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    hu.render(this.render);
  }
}
class Xp extends f1 {
  constructor() {
    super(...arguments), this.KeyframeResolver = z0;
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    const l = i.style;
    return l ? l[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: l }) {
    delete s[i], delete l[i];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Xe(i) && (this.childSubscription = i.on("change", (s) => {
      this.current && (this.current.textContent = `${s}`);
    }));
  }
}
class wn {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
function Yp({ top: n, left: i, right: s, bottom: l }) {
  return {
    x: { min: i, max: s },
    y: { min: n, max: l }
  };
}
function d1({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function h1(n, i) {
  if (!i)
    return n;
  const s = i({ x: n.left, y: n.top }), l = i({ x: n.right, y: n.bottom });
  return {
    top: s.y,
    left: s.x,
    bottom: l.y,
    right: l.x
  };
}
function da(n) {
  return n === void 0 || n === 1;
}
function Ba({ scale: n, scaleX: i, scaleY: s }) {
  return !da(n) || !da(i) || !da(s);
}
function _n(n) {
  return Ba(n) || Qp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Qp(n) {
  return qd(n.x) || qd(n.y);
}
function qd(n) {
  return n && n !== "0%";
}
function Js(n, i, s) {
  const l = n - s, c = i * l;
  return s + c;
}
function Jd(n, i, s, l, c) {
  return c !== void 0 && (n = Js(n, c, l)), Js(n, s, l) + i;
}
function Ua(n, i = 0, s = 1, l, c) {
  n.min = Jd(n.min, i, s, l, c), n.max = Jd(n.max, i, s, l, c);
}
function Zp(n, { x: i, y: s }) {
  Ua(n.x, i.translate, i.scale, i.originPoint), Ua(n.y, s.translate, s.scale, s.originPoint);
}
const bd = 0.999999999999, eh = 1.0000000000001;
function p1(n, i, s, l = !1) {
  const c = s.length;
  if (!c)
    return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    d = s[p], f = d.projectionDelta;
    const { visualElement: m } = d.options;
    m && m.props.style && m.props.style.display === "contents" || (l && d.options.layoutScroll && d.scroll && d !== d.root && (Ot(n.x, -d.scroll.offset.x), Ot(n.y, -d.scroll.offset.y)), f && (i.x *= f.x.scale, i.y *= f.y.scale, Zp(n, f)), l && _n(d.latestValues) && Ws(n, d.latestValues, d.layout?.layoutBox));
  }
  i.x < eh && i.x > bd && (i.x = 1), i.y < eh && i.y > bd && (i.y = 1);
}
function Ot(n, i) {
  n.min += i, n.max += i;
}
function th(n, i, s, l, c = 0.5) {
  const d = ge(n.min, n.max, c);
  Ua(n, i, s, d, l);
}
function nh(n, i) {
  return typeof n == "string" ? parseFloat(n) / 100 * (i.max - i.min) : n;
}
function Ws(n, i, s) {
  const l = s ?? n;
  th(n.x, nh(i.x, l.x), i.scaleX, i.scale, i.originX), th(n.y, nh(i.y, l.y), i.scaleY, i.scale, i.originY);
}
function qp(n, i) {
  return Yp(h1(n.getBoundingClientRect(), i));
}
function m1(n, i, s) {
  const l = qp(n, s), { scroll: c } = i;
  return c && (Ot(l.x, c.offset.x), Ot(l.y, c.offset.y)), l;
}
const y1 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, g1 = vr.length;
function v1(n, i, s) {
  let l = "", c = !0;
  for (let f = 0; f < g1; f++) {
    const p = vr[f], m = n[p];
    if (m === void 0)
      continue;
    let y = !0;
    if (typeof m == "number")
      y = m === (p.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(m);
      y = p.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!y || s) {
      const g = Oa(m, Zs[p]);
      if (!y) {
        c = !1;
        const w = y1[p] || p;
        l += `${w}(${g}) `;
      }
      s && (i[p] = g);
    }
  }
  const d = n.pathRotation;
  return d && (c = !1, l += `rotate(${Oa(d, Zs.pathRotation)}) `), l = l.trim(), s ? l = s(i, c ? "" : l) : c && (l = "none"), l;
}
function vu(n, i, s) {
  const { style: l, vars: c, transformOrigin: d } = n;
  let f = !1, p = !1;
  for (const m in i) {
    const y = i[m];
    if (wr.has(m)) {
      f = !0;
      continue;
    } else if (ap(m)) {
      c[m] = y;
      continue;
    } else {
      const g = Oa(y, Zs[m]);
      m.startsWith("origin") ? (p = !0, d[m] = g) : l[m] = g;
    }
  }
  if (i.transform || (f || s ? l.transform = v1(i, n.transform, s) : l.transform && (l.transform = "none")), p) {
    const { originX: m = "50%", originY: y = "50%", originZ: g = 0 } = d;
    l.transformOrigin = `${m} ${y} ${g}`;
  }
}
function Jp(n, { style: i, vars: s }, l, c) {
  const d = n.style;
  let f;
  for (f in i)
    d[f] = i[f];
  c?.applyProjectionStyles(d, l);
  for (f in s)
    d.setProperty(f, s[f]);
}
function rh(n, i) {
  return i.max === i.min ? 0 : n / (i.max - i.min) * 100;
}
const oi = {
  correct: (n, i) => {
    if (!i.target)
      return n;
    if (typeof n == "string")
      if (Y.test(n))
        n = parseFloat(n);
      else
        return n;
    const s = rh(n, i.target.x), l = rh(n, i.target.y);
    return `${s}% ${l}%`;
  }
}, w1 = {
  correct: (n, { treeScale: i, projectionDelta: s }) => {
    const l = n, c = Vt.parse(n);
    if (c.length > 5)
      return l;
    const d = Vt.createTransformer(n), f = typeof c[0] != "number" ? 1 : 0, p = s.x.scale * i.x, m = s.y.scale * i.y;
    c[0 + f] /= p, c[1 + f] /= m;
    const y = ge(p, m, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= y), typeof c[3 + f] == "number" && (c[3 + f] /= y), d(c);
  }
}, Wa = {
  borderRadius: {
    ...oi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: oi,
  borderTopRightRadius: oi,
  borderBottomLeftRadius: oi,
  borderBottomRightRadius: oi,
  boxShadow: w1
};
function bp(n, { layout: i, layoutId: s }) {
  return wr.has(n) || n.startsWith("origin") || (i || s !== void 0) && (!!Wa[n] || n === "opacity");
}
function wu(n, i, s) {
  const l = n.style, c = i?.style, d = {};
  if (!l)
    return d;
  for (const f in l)
    (Xe(l[f]) || c && Xe(c[f]) || bp(f, n) || s?.getValue(f)?.liveStyle !== void 0) && (d[f] = l[f]);
  return d;
}
function x1(n) {
  return window.getComputedStyle(n);
}
class S1 extends Xp {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Jp;
  }
  readValueFromInstance(i, s) {
    if (wr.has(s))
      return this.projection?.isProjecting ? Ma(s) : Uv(i, s);
    {
      const l = x1(i), c = (ap(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return qp(i, s);
  }
  build(i, s, l) {
    vu(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return wu(i, s, l);
  }
}
const k1 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, T1 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function P1(n, i, s = 1, l = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? k1 : T1;
  n[d.offset] = `${-l}`, n[d.array] = `${i} ${s}`;
}
const C1 = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function em(n, {
  attrX: i,
  attrY: s,
  attrScale: l,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...p
}, m, y, g) {
  if (vu(n, p, y), m) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  n.attrs = n.style, n.style = {};
  const { attrs: w, style: S } = n;
  w.transform && (S.transform = w.transform, delete w.transform), (S.transform || w.transformOrigin) && (S.transformOrigin = w.transformOrigin ?? "50% 50%", delete w.transformOrigin), S.transform && (S.transformBox = g?.transformBox ?? "fill-box", delete w.transformBox);
  for (const R of C1)
    w[R] !== void 0 && (S[R] = w[R], delete w[R]);
  i !== void 0 && (w.x = i), s !== void 0 && (w.y = s), l !== void 0 && (w.scale = l), c !== void 0 && P1(w, c, d, f, !1);
}
const tm = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), nm = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function E1(n, i, s, l) {
  Jp(n, i, void 0, l);
  for (const c in i.attrs)
    n.setAttribute(tm.has(c) ? c : du(c), i.attrs[c]);
}
function rm(n, i, s) {
  const l = wu(n, i, s);
  for (const c in n)
    if (Xe(n[c]) || Xe(i[c])) {
      const d = vr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      l[d] = n[c];
    }
  return l;
}
class M1 extends Xp {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Be;
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (wr.has(s)) {
      const l = Fp(s);
      return l && l.default || 0;
    }
    return s = tm.has(s) ? s : du(s), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return rm(i, s, l);
  }
  build(i, s, l) {
    em(i, s, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(i, s, l, c) {
    E1(i, s, l, c);
  }
  mount(i) {
    this.isSVGTag = nm(i.tagName), super.mount(i);
  }
}
const R1 = gu.length;
function im(n) {
  if (!n)
    return;
  if (!n.isControllingVariants) {
    const s = n.parent ? im(n.parent) || {} : {};
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < R1; s++) {
    const l = gu[s], c = n.props[l];
    (pi(c) || c === !1) && (i[l] = c);
  }
  return i;
}
function sm(n, i) {
  if (!Array.isArray(i))
    return !1;
  const s = i.length;
  if (s !== n.length)
    return !1;
  for (let l = 0; l < s; l++)
    if (i[l] !== n[l])
      return !1;
  return !0;
}
const A1 = [...yu].reverse(), D1 = yu.length;
function V1(n) {
  return (i) => Promise.all(i.map(({ animation: s, options: l }) => R0(n, s, l)));
}
function L1(n) {
  let i = V1(n), s = ih(), l = !0, c = !1;
  const d = (y) => (g, w) => {
    const S = On(n, w, y === "exit" ? n.presenceContext?.custom : void 0);
    if (S) {
      const { transition: R, transitionEnd: M, ...D } = S;
      g = { ...g, ...D, ...M };
    }
    return g;
  };
  function f(y) {
    i = y(n);
  }
  function p(y) {
    const { props: g } = n, w = im(n.parent) || {}, S = [], R = /* @__PURE__ */ new Set();
    let M = {}, D = 1 / 0;
    for (let j = 0; j < D1; j++) {
      const B = A1[j], O = s[B], z = g[B] !== void 0 ? g[B] : w[B], b = pi(z), ne = B === y ? O.isActive : null;
      ne === !1 && (D = j);
      let re = z === w[B] && z !== g[B] && b;
      if (re && (l || c) && n.manuallyAnimateOnMount && (re = !1), O.protectedKeys = { ...M }, // If it isn't active and hasn't *just* been set as inactive
      !O.isActive && ne === null || // If we didn't and don't have any defined prop for this animation type
      !z && !O.prevProp || // Or if the prop doesn't define an animation
      ro(z) || typeof z == "boolean")
        continue;
      if (B === "exit" && O.isActive && ne !== !0) {
        O.prevResolvedValues && (M = {
          ...M,
          ...O.prevResolvedValues
        });
        continue;
      }
      const K = N1(O.prevProp, z);
      let se = K || // If we're making this variant active, we want to always make it active
      B === y && O.isActive && !re && b || // If we removed a higher-priority variant (i is in reverse order)
      j > D && b, q = !1;
      const ce = Array.isArray(z) ? z : [z];
      let ye = ce.reduce(d(B), {});
      ne === !1 && (ye = {});
      const { prevResolvedValues: Ee = {} } = O, De = {
        ...Ee,
        ...ye
      }, je = (I) => {
        se = !0, R.has(I) && (q = !0, R.delete(I)), O.needsAnimating[I] = !0;
        const Q = n.getValue(I);
        Q && (Q.liveStyle = !1);
      };
      for (const I in De) {
        const Q = ye[I], W = Ee[I];
        if (M.hasOwnProperty(I))
          continue;
        let T = !1;
        Na(Q) && Na(W) ? T = !sm(Q, W) || K : T = Q !== W, T ? Q != null ? je(I) : R.add(I) : Q !== void 0 && R.has(I) ? je(I) : O.protectedKeys[I] = !0;
      }
      O.prevProp = z, O.prevResolvedValues = ye, O.isActive && (M = { ...M, ...ye }), (l || c) && n.blockInitialAnimation && (se = !1);
      const Se = re && K;
      se && (!Se || q) && S.push(...ce.map((I) => {
        const Q = { type: B };
        if (typeof I == "string" && (l || c) && !Se && n.manuallyAnimateOnMount && n.parent) {
          const { parent: W } = n, T = On(W, I);
          if (W.enteringChildren && T) {
            const { delayChildren: V } = T.transition || {};
            Q.delay = Rp(W.enteringChildren, n, V);
          }
        }
        return {
          animation: I,
          options: Q
        };
      }));
    }
    if (R.size) {
      const j = {};
      if (typeof g.initial != "boolean") {
        const B = On(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        B && B.transition && (j.transition = B.transition);
      }
      R.forEach((B) => {
        const O = n.getBaseTarget(B), z = n.getValue(B);
        z && (z.liveStyle = !0), j[B] = O ?? null;
      }), S.push({ animation: j });
    }
    let A = !!S.length;
    return l && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (A = !1), l = !1, c = !1, A ? i(S) : Promise.resolve();
  }
  function m(y, g) {
    if (s[y].isActive === g)
      return Promise.resolve();
    n.variantChildren?.forEach((S) => S.animationState?.setActive(y, g)), s[y].isActive = g;
    const w = p(y);
    for (const S in s)
      s[S].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: p,
    setActive: m,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      s = ih(), c = !0;
    }
  };
}
function N1(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !sm(i, n) : !1;
}
function Nn(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function ih() {
  return {
    animate: Nn(!0),
    whileInView: Nn(),
    whileHover: Nn(),
    whileTap: Nn(),
    whileDrag: Nn(),
    whileFocus: Nn(),
    exit: Nn()
  };
}
function $a(n, i) {
  n.min = i.min, n.max = i.max;
}
function At(n, i) {
  $a(n.x, i.x), $a(n.y, i.y);
}
function sh(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
const om = 1e-4, _1 = 1 - om, j1 = 1 + om, lm = 0.01, I1 = 0 - lm, F1 = 0 + lm;
function tt(n) {
  return n.max - n.min;
}
function O1(n, i, s) {
  return Math.abs(n - i) <= s;
}
function oh(n, i, s, l = 0.5) {
  n.origin = l, n.originPoint = ge(i.min, i.max, n.origin), n.scale = tt(s) / tt(i), n.translate = ge(s.min, s.max, n.origin) - n.originPoint, (n.scale >= _1 && n.scale <= j1 || isNaN(n.scale)) && (n.scale = 1), (n.translate >= I1 && n.translate <= F1 || isNaN(n.translate)) && (n.translate = 0);
}
function ci(n, i, s, l) {
  oh(n.x, i.x, s.x, l ? l.originX : void 0), oh(n.y, i.y, s.y, l ? l.originY : void 0);
}
function lh(n, i, s, l = 0) {
  const c = l ? ge(s.min, s.max, l) : s.min;
  n.min = c + i.min, n.max = n.min + tt(i);
}
function z1(n, i, s, l) {
  lh(n.x, i.x, s.x, l?.x), lh(n.y, i.y, s.y, l?.y);
}
function ah(n, i, s, l = 0) {
  const c = l ? ge(s.min, s.max, l) : s.min;
  n.min = i.min - c, n.max = n.min + tt(i);
}
function bs(n, i, s, l) {
  ah(n.x, i.x, s.x, l?.x), ah(n.y, i.y, s.y, l?.y);
}
function uh(n, i, s, l, c) {
  return n -= i, n = Js(n, 1 / s, l), c !== void 0 && (n = Js(n, 1 / c, l)), n;
}
function B1(n, i = 0, s = 1, l = 0.5, c, d = n, f = n) {
  if (zt.test(i) && (i = parseFloat(i), i = ge(f.min, f.max, i / 100) - f.min), typeof i != "number")
    return;
  let p = ge(d.min, d.max, l);
  n === d && (p -= i), n.min = uh(n.min, i, s, p, c), n.max = uh(n.max, i, s, p, c);
}
function ch(n, i, [s, l, c], d, f) {
  B1(n, i[s], i[l], i[c], i.scale, d, f);
}
const U1 = ["x", "scaleX", "originX"], W1 = ["y", "scaleY", "originY"];
function fh(n, i, s, l) {
  ch(n.x, i, U1, s ? s.x : void 0, l ? l.x : void 0), ch(n.y, i, W1, s ? s.y : void 0, l ? l.y : void 0);
}
function dh(n) {
  return n.translate === 0 && n.scale === 1;
}
function am(n) {
  return dh(n.x) && dh(n.y);
}
function hh(n, i) {
  return n.min === i.min && n.max === i.max;
}
function $1(n, i) {
  return hh(n.x, i.x) && hh(n.y, i.y);
}
function ph(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function um(n, i) {
  return ph(n.x, i.x) && ph(n.y, i.y);
}
function mh(n) {
  return tt(n.x) / tt(n.y);
}
function yh(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
function Ft(n) {
  return [n("x"), n("y")];
}
function H1(n, i, s) {
  let l = "";
  const c = n.x.translate / i.x, d = n.y.translate / i.y, f = s?.z || 0;
  if ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `), s) {
    const { transformPerspective: y, rotate: g, pathRotation: w, rotateX: S, rotateY: R, skewX: M, skewY: D } = s;
    y && (l = `perspective(${y}px) ${l}`), g && (l += `rotate(${g}deg) `), w && (l += `rotate(${w}deg) `), S && (l += `rotateX(${S}deg) `), R && (l += `rotateY(${R}deg) `), M && (l += `skewX(${M}deg) `), D && (l += `skewY(${D}deg) `);
  }
  const p = n.x.scale * i.x, m = n.y.scale * i.y;
  return (p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || "none";
}
const cm = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], K1 = cm.length, gh = (n) => typeof n == "string" ? parseFloat(n) : n, vh = (n) => typeof n == "number" || Y.test(n);
function G1(n, i, s, l, c, d) {
  c ? (n.opacity = ge(0, s.opacity ?? 1, X1(l)), n.opacityExit = ge(i.opacity ?? 1, 0, Y1(l))) : d && (n.opacity = ge(i.opacity ?? 1, s.opacity ?? 1, l));
  for (let f = 0; f < K1; f++) {
    const p = cm[f];
    let m = wh(i, p), y = wh(s, p);
    if (m === void 0 && y === void 0)
      continue;
    m || (m = 0), y || (y = 0), m === 0 || y === 0 || vh(m) === vh(y) ? (n[p] = Math.max(ge(gh(m), gh(y), l), 0), (zt.test(y) || zt.test(m)) && (n[p] += "%")) : n[p] = y;
  }
  (i.rotate || s.rotate) && (n.rotate = ge(i.rotate || 0, s.rotate || 0, l));
}
function wh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const X1 = /* @__PURE__ */ fm(0, 0.5, np), Y1 = /* @__PURE__ */ fm(0.5, 0.95, St);
function fm(n, i, s) {
  return (l) => l < n ? 0 : l > i ? 1 : s(/* @__PURE__ */ di(n, i, l));
}
function Q1(n, i, s) {
  const l = Xe(n) ? n : yr(n);
  return l.start(cu("", l, i, s)), l.animation;
}
function mi(n, i, s, l = { passive: !0 }) {
  return n.addEventListener(i, s, l), () => n.removeEventListener(i, s, l);
}
const Z1 = (n, i) => n.depth - i.depth;
class q1 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    qa(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    Ks(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(Z1), this.isDirty = !1, this.children.forEach(i);
  }
}
function J1(n, i) {
  const s = et.now(), l = ({ timestamp: c }) => {
    const d = c - s;
    d >= i && (vn(l), n(d - i));
  };
  return ve.setup(l, !0), () => vn(l);
}
function $s(n) {
  return Xe(n) ? n.get() : n;
}
class b1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    qa(this.members, i);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const l = this.members[s];
      if (l === i || l === this.lead || l === this.prevLead)
        continue;
      const c = l.instance;
      (!c || c.isConnected === !1) && !l.snapshot && (Ks(this.members, l), l.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (Ks(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    for (let s = this.members.indexOf(i) - 1; s >= 0; s--) {
      const l = this.members[s];
      if (l.isPresent !== !1 && l.instance?.isConnected !== !1)
        return this.promote(l), !0;
    }
    return !1;
  }
  promote(i, s) {
    const l = this.lead;
    if (i !== l && (this.prevLead = l, this.lead = i, i.show(), l)) {
      l.updateSnapshot(), i.scheduleRender();
      const { layoutDependency: c } = l.options, { layoutDependency: d } = i.options;
      (c === void 0 || c !== d) && (i.resumeFrom = l, s && (l.preserveOpacity = !0), l.snapshot && (i.snapshot = l.snapshot, i.snapshot.latestValues = l.animationValues || l.latestValues), i.root?.isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      i.options.onExitComplete?.(), i.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => i.instance && i.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const Hs = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, ha = ["", "X", "Y", "Z"], ew = 1e3;
let tw = 0;
function pa(n, i, s, l) {
  const { latestValues: c } = i;
  c[n] && (s[n] = c[n], i.setStaticValue(n, 0), l && (l[n] = 0));
}
function dm(n) {
  if (n.hasCheckedOptimisedAppear = !0, n.root === n)
    return;
  const { visualElement: i } = n.options;
  if (!i)
    return;
  const s = Np(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", ve, !(c || d));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && dm(l);
}
function hm({ attachResizeListener: n, defaultParent: i, measureScroll: s, checkIsScrollRoot: l, resetTransform: c }) {
  return class {
    constructor(f = {}, p = i?.()) {
      this.id = tw++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(iw), this.nodes.forEach(cw), this.nodes.forEach(fw), this.nodes.forEach(sw);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new q1());
    }
    addEventListener(f, p) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new ba()), this.eventHandlers.get(f).add(p);
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f) {
      if (this.instance)
        return;
      this.isSVG = mu(f) && !r1(f), this.instance = f;
      const { layoutId: p, layout: m, visualElement: y } = this.options;
      if (y && !y.current && y.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0), n) {
        let g, w = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        ve.read(() => {
          w = window.innerWidth;
        }), n(f, () => {
          const R = window.innerWidth;
          R !== w && (w = R, this.root.updateBlockedByResize = !0, g && g(), g = J1(S, 250), Hs.hasAnimatedSinceResize && (Hs.hasAnimatedSinceResize = !1, this.nodes.forEach(kh)));
        });
      }
      p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && y && (p || m) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: w, hasRelativeLayoutChanged: S, layout: R }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const M = this.options.transition || y.getDefaultTransition() || yw, { onLayoutAnimationStart: D, onLayoutAnimationComplete: A } = y.getProps(), j = !this.targetLayout || !um(this.targetLayout, R), B = !w && S;
        if (this.options.layoutRoot || this.resumeFrom || B || w && (j || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const O = {
            ...uu(M, "layout"),
            onPlay: D,
            onComplete: A
          };
          (y.shouldReduceMotion || this.options.layoutRoot) && (O.delay = 0, O.type = !1), this.startAnimation(O), this.setAnimationOrigin(g, B, O.path);
        } else
          w || kh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = R;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), vn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(dw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && dm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const w = this.path[g];
        w.shouldResetTransform = !0, (typeof w.latestValues.x == "string" || typeof w.latestValues.y == "string") && (w.isLayoutDirty = !0), w.updateScroll("snapshot"), w.options.layoutRoot && w.willUpdate(!1);
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m)
        return;
      const y = this.getTransformTemplate();
      this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const m = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), m && this.nodes.forEach(lw), this.nodes.forEach(xh);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Sh);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(aw), this.nodes.forEach(uw), this.nodes.forEach(nw), this.nodes.forEach(rw)) : this.nodes.forEach(Sh), this.clearAllSnapshots();
      const p = et.now();
      Ge.delta = Bt(0, 1e3 / 60, p - Ge.timestamp), Ge.timestamp = p, Ge.isProcessing = !0, sa.update.process(Ge), sa.preRender.process(Ge), sa.render.process(Ge), Ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, hu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ow), this.sharedNodes.forEach(hw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !tt(this.snapshot.measuredBox.x) && !tt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++)
          this.path[m].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Be()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p && p.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (p = !1), p && this.instance) {
        const m = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, p = this.projectionDelta && !am(this.projectionDelta), m = this.getTransformTemplate(), y = m ? m(this.latestValues, "") : void 0, g = y !== this.prevTransformTemplateValue;
      f && this.instance && (p || _n(this.latestValues) || g) && (c(this.instance, y), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return f && (m = this.removeTransform(m)), gw(m), {
        animationId: this.root.animationId,
        measuredBox: p,
        layoutBox: m,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f)
        return Be();
      const p = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(vw))) {
        const { scroll: y } = this.root;
        y && (Ot(p.x, y.offset.x), Ot(p.y, y.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      const p = Be();
      if (At(p, f), this.scroll?.wasRoot)
        return p;
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m], { scroll: g, options: w } = y;
        y !== this.root && g && w.layoutScroll && (g.wasRoot && At(p, f), Ot(p.x, g.offset.x), Ot(p.y, g.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1, m) {
      const y = m || Be();
      At(y, f);
      for (let g = 0; g < this.path.length; g++) {
        const w = this.path[g];
        !p && w.options.layoutScroll && w.scroll && w !== w.root && (Ot(y.x, -w.scroll.offset.x), Ot(y.y, -w.scroll.offset.y)), _n(w.latestValues) && Ws(y, w.latestValues, w.layout?.layoutBox);
      }
      return _n(this.latestValues) && Ws(y, this.latestValues, this.layout?.layoutBox), y;
    }
    removeTransform(f) {
      const p = Be();
      At(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        if (!_n(y.latestValues))
          continue;
        let g;
        y.instance && (Ba(y.latestValues) && y.updateSnapshot(), g = Be(), At(g, y.measurePageBox())), fh(p, y.latestValues, y.snapshot?.layoutBox, g);
      }
      return _n(this.latestValues) && fh(p, this.latestValues), p;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: w } = this.options;
      if (!this.layout || !(g || w))
        return;
      this.resolvedRelativeTargetAt = Ge.timestamp;
      const S = this.getClosestProjectingParent();
      S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Be(), this.targetWithTransforms = Be()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), z1(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : At(this.target, this.layout.layoutBox), Zp(this.target, this.targetDelta)) : At(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ba(this.parent.latestValues) || Qp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, p, m) {
      this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Be(), this.relativeTargetOrigin = Be(), bs(this.relativeTargetOrigin, p, m, this.options.layoutAnchor || void 0), At(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(), p = !!this.resumingFrom || this !== f;
      let m = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Ge.timestamp && (m = !1), m)
        return;
      const { layout: y, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || g))
        return;
      At(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x, S = this.treeScale.y;
      p1(this.layoutCorrected, this.treeScale, this.path, p), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Be());
      const { target: R } = f;
      if (!R) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sh(this.prevProjectionDelta.x, this.projectionDelta.x), sh(this.prevProjectionDelta.y, this.projectionDelta.y)), ci(this.projectionDelta, this.layoutCorrected, R, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== S || !yh(this.projectionDelta.x, this.prevProjectionDelta.x) || !yh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", R));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if (this.options.visualElement?.scheduleRender(), f) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = hr(), this.projectionDelta = hr(), this.projectionDeltaWithTransform = hr();
    }
    setAnimationOrigin(f, p = !1, m) {
      const y = this.snapshot, g = y ? y.latestValues : {}, w = { ...this.latestValues }, S = hr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
      const R = Be(), M = y ? y.source : void 0, D = this.layout ? this.layout.source : void 0, A = M !== D, j = this.getStack(), B = !j || j.members.length <= 1, O = !!(A && !B && this.options.crossfade === !0 && !this.path.some(mw));
      this.animationProgress = 0;
      let z;
      const b = m?.interpolateProjection(f);
      this.mixTargetDelta = (ne) => {
        const re = ne / 1e3, K = b?.(re);
        K ? (S.x.translate = K.x, S.x.scale = ge(f.x.scale, 1, re), S.x.origin = f.x.origin, S.x.originPoint = f.x.originPoint, S.y.translate = K.y, S.y.scale = ge(f.y.scale, 1, re), S.y.origin = f.y.origin, S.y.originPoint = f.y.originPoint) : (Th(S.x, f.x, re), Th(S.y, f.y, re)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bs(R, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), pw(this.relativeTarget, this.relativeTargetOrigin, R, re), z && $1(this.relativeTarget, z) && (this.isProjectionDirty = !1), z || (z = Be()), At(z, this.relativeTarget)), A && (this.animationValues = w, G1(w, g, this.latestValues, re, O, B)), K && K.rotate !== void 0 && (this.animationValues || (this.animationValues = w), this.animationValues.pathRotation = K.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = re;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (vn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ve.update(() => {
        Hs.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = yr(0)), this.motionValue.jump(0, !1), this.currentAnimation = Q1(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (p) => {
            this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ew), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: p, target: m, layout: y, latestValues: g } = f;
      if (!(!p || !m || !y)) {
        if (this !== f && this.layout && y && pm(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
          m = this.target || Be();
          const w = tt(this.layout.layoutBox.x);
          m.x.min = f.target.x.min, m.x.max = m.x.min + w;
          const S = tt(this.layout.layoutBox.y);
          m.y.min = f.target.y.min, m.y.max = m.y.min + S;
        }
        At(p, m), Ws(p, g), ci(this.projectionDeltaWithTransform, this.layoutCorrected, p, g);
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new b1()), this.sharedNodes.get(f).add(p);
      const y = p.options.initialPromotionConfig;
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(p) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const y = this.getStack();
      y && y.promote(this, m), f && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({ transition: p });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let p = !1;
      const { latestValues: m } = f;
      if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0), !p)
        return;
      const y = {};
      m.z && pa("z", f, y, this.animationValues);
      for (let g = 0; g < ha.length; g++)
        pa(`rotate${ha[g]}`, f, y, this.animationValues), pa(`skew${ha[g]}`, f, y, this.animationValues);
      f.render();
      for (const g in y)
        f.setStaticValue(g, y[g]), this.animationValues && (this.animationValues[g] = y[g]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = $s(p?.pointerEvents) || "", f.transform = m ? m(this.latestValues, "") : "none";
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = $s(p?.pointerEvents) || ""), this.hasProjected && !_n(this.latestValues) && (f.transform = m ? m({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let w = H1(this.projectionDeltaWithTransform, this.treeScale, g);
      m && (w = m(g, w)), f.transform = w;
      const { x: S, y: R } = this.projectionDelta;
      f.transformOrigin = `${S.origin * 100}% ${R.origin * 100}% 0`, y.animationValues ? f.opacity = y === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = y === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const M in Wa) {
        if (g[M] === void 0)
          continue;
        const { correct: D, applyTo: A, isCSSVariable: j } = Wa[M], B = w === "none" ? g[M] : D(g[M], y);
        if (A) {
          const O = A.length;
          for (let z = 0; z < O; z++)
            f[A[z]] = B;
        } else
          j ? this.options.visualElement.renderState.vars[M] = B : f[M] = B;
      }
      this.options.layoutId && (f.pointerEvents = y === this ? $s(p?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(xh), this.root.sharedNodes.clear();
    }
  };
}
function nw(n) {
  n.updateLayout();
}
function rw(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: l } = n.layout, { animationType: c } = n.options, d = i.source !== n.layout.source;
    if (c === "size")
      Ft((g) => {
        const w = d ? i.measuredBox[g] : i.layoutBox[g], S = tt(w);
        w.min = s[g].min, w.max = w.min + S;
      });
    else if (c === "x" || c === "y") {
      const g = c === "x" ? "y" : "x";
      $a(d ? i.measuredBox[g] : i.layoutBox[g], s[g]);
    } else pm(c, i.layoutBox, s) && Ft((g) => {
      const w = d ? i.measuredBox[g] : i.layoutBox[g], S = tt(s[g]);
      w.max = w.min + S, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[g].max = n.relativeTarget[g].min + S);
    });
    const f = hr();
    ci(f, s, i.layoutBox);
    const p = hr();
    d ? ci(p, n.applyTransform(l, !0), i.measuredBox) : ci(p, s, i.layoutBox);
    const m = !am(f);
    let y = !1;
    if (!n.resumeFrom) {
      const g = n.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: w, layout: S } = g;
        if (w && S) {
          const R = n.options.layoutAnchor || void 0, M = Be();
          bs(M, i.layoutBox, w.layoutBox, R);
          const D = Be();
          bs(D, s, S.layoutBox, R), um(M, D) || (y = !0), g.options.layoutRoot && (n.relativeTarget = D, n.relativeTargetOrigin = M, n.relativeParent = g);
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: p,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: y
    });
  } else if (n.isLead()) {
    const { onExitComplete: s } = n.options;
    s && s();
  }
  n.options.transition = void 0;
}
function iw(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function sw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function ow(n) {
  n.clearSnapshot();
}
function xh(n) {
  n.clearMeasurements();
}
function lw(n) {
  n.isLayoutDirty = !0, n.updateLayout();
}
function Sh(n) {
  n.isLayoutDirty = !1;
}
function aw(n) {
  n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.layout, n.isLayoutDirty = !0);
}
function uw(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function kh(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function cw(n) {
  n.resolveTargetDelta();
}
function fw(n) {
  n.calcProjection();
}
function dw(n) {
  n.resetSkewAndRotation();
}
function hw(n) {
  n.removeLeadSnapshot();
}
function Th(n, i, s) {
  n.translate = ge(i.translate, 0, s), n.scale = ge(i.scale, 1, s), n.origin = i.origin, n.originPoint = i.originPoint;
}
function Ph(n, i, s, l) {
  n.min = ge(i.min, s.min, l), n.max = ge(i.max, s.max, l);
}
function pw(n, i, s, l) {
  Ph(n.x, i.x, s.x, l), Ph(n.y, i.y, s.y, l);
}
function mw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const yw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ch = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), Eh = Ch("applewebkit/") && !Ch("chrome/") ? Math.round : St;
function Mh(n) {
  n.min = Eh(n.min), n.max = Eh(n.max);
}
function gw(n) {
  Mh(n.x), Mh(n.y);
}
function pm(n, i, s) {
  return n === "position" || n === "preserve-aspect" && !O1(mh(i), mh(s), 0.2);
}
function vw(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const ww = hm({
  attachResizeListener: (n, i) => mi(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), ma = {
  current: void 0
}, mm = hm({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!ma.current) {
      const n = new ww({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), ma.current = n;
    }
    return ma.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), xu = $.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
function Rh(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function xw(...n) {
  return (i) => {
    let s = !1;
    const l = n.map((c) => {
      const d = Rh(c, i);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let c = 0; c < l.length; c++) {
          const d = l[c];
          typeof d == "function" ? d() : Rh(n[c], null);
        }
      };
  };
}
function Sw(...n) {
  return $.useCallback(xw(...n), n);
}
class kw extends $.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current;
    if (Fs(s) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const l = s.offsetParent, c = Fs(l) && l.offsetWidth || 0, d = Fs(l) && l.offsetHeight || 0, f = getComputedStyle(s), p = this.props.sizeRef.current;
      p.height = parseFloat(f.height), p.width = parseFloat(f.width), p.top = s.offsetTop, p.left = s.offsetLeft, p.right = c - p.width - p.left, p.bottom = d - p.height - p.top, p.direction = f.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Tw({ children: n, isPresent: i, anchorX: s, anchorY: l, root: c, pop: d }) {
  const f = $.useId(), p = $.useRef(null), m = $.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: y } = $.useContext(xu), g = n.props?.ref ?? n?.ref, w = Sw(p, g);
  return $.useInsertionEffect(() => {
    const { width: S, height: R, top: M, left: D, right: A, bottom: j, direction: B } = m.current;
    if (i || d === !1 || !p.current || !S || !R)
      return;
    const O = B === "rtl", z = s === "left" ? O ? `right: ${A}` : `left: ${D}` : O ? `left: ${D}` : `right: ${A}`, b = l === "bottom" ? `bottom: ${j}` : `top: ${M}`;
    p.current.dataset.motionPopId = f;
    const ne = document.createElement("style");
    y && (ne.nonce = y);
    const re = c ?? document.head;
    return re.appendChild(ne), ne.sheet && ne.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${R}px !important;
            ${z}px !important;
            ${b}px !important;
          }
        `), () => {
      p.current?.removeAttribute("data-motion-pop-id"), re.contains(ne) && re.removeChild(ne);
    };
  }, [i]), U.jsx(kw, { isPresent: i, childRef: p, sizeRef: m, pop: d, children: d === !1 ? n : $.cloneElement(n, { ref: w }) });
}
const Pw = ({ children: n, initial: i, isPresent: s, onExitComplete: l, custom: c, presenceAffectsLayout: d, mode: f, anchorX: p, anchorY: m, root: y }) => {
  const g = Qa(Cw), w = $.useId(), S = $.useRef(s), R = $.useRef(l);
  Za(() => {
    S.current = s, R.current = l;
  });
  let M = !0, D = $.useMemo(() => (M = !1, {
    id: w,
    initial: i,
    isPresent: s,
    custom: c,
    onExitComplete: (A) => {
      g.set(A, !0);
      for (const j of g.values())
        if (!j)
          return;
      l && l();
    },
    register: (A) => (g.set(A, !1), () => {
      g.delete(A), !S.current && !g.size && R.current?.();
    })
  }), [s, g, l]);
  return d && M && (D = { ...D }), $.useMemo(() => {
    g.forEach((A, j) => g.set(j, !1));
  }, [s]), $.useEffect(() => {
    !s && !g.size && l && l();
  }, [s]), n = U.jsx(Tw, { pop: f === "popLayout", isPresent: s, anchorX: p, anchorY: m, root: y, children: n }), U.jsx(to.Provider, { value: D, children: n });
};
function Cw() {
  return /* @__PURE__ */ new Map();
}
function ym(n = !0) {
  const i = $.useContext(to);
  if (i === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: l, register: c } = i, d = $.useId();
  $.useEffect(() => {
    if (n)
      return c(d);
  }, [n]);
  const f = $.useCallback(() => n && l && l(d), [d, l, n]);
  return !s && l ? [!1, f] : [!0];
}
const Ns = (n) => n.key || "";
function Ah(n) {
  const i = [];
  return $.Children.forEach(n, (s) => {
    $.isValidElement(s) && i.push(s);
  }), i;
}
const Ew = ({ children: n, custom: i, initial: s = !0, onExitComplete: l, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: f = !1, anchorX: p = "left", anchorY: m = "top", root: y }) => {
  const [g, w] = ym(f), S = $.useMemo(() => Ah(n), [n]), R = f && !g ? [] : S.map(Ns), M = $.useRef(!0), D = $.useRef(S), A = Qa(() => /* @__PURE__ */ new Map()), j = $.useRef(/* @__PURE__ */ new Set()), [B, O] = $.useState(S), [z, b] = $.useState(S);
  Za(() => {
    M.current = !1, D.current = S;
    for (let K = 0; K < z.length; K++) {
      const se = Ns(z[K]);
      R.includes(se) ? (A.delete(se), j.current.delete(se)) : A.get(se) !== !0 && A.set(se, !1);
    }
  }, [z, R.length, R.join("-")]);
  const ne = [];
  if (S !== B) {
    let K = [...S];
    for (let se = 0; se < z.length; se++) {
      const q = z[se], ce = Ns(q);
      R.includes(ce) || (K.splice(se, 0, q), ne.push(q));
    }
    return d === "wait" && ne.length && (K = ne), b(Ah(K)), O(S), null;
  }
  const { forceRender: re } = $.useContext(Ya);
  return U.jsx(U.Fragment, { children: z.map((K) => {
    const se = Ns(K), q = f && !g ? !1 : S === z || R.includes(se), ce = () => {
      if (j.current.has(se))
        return;
      if (A.has(se))
        j.current.add(se), A.set(se, !0);
      else
        return;
      let ye = !0;
      A.forEach((Ee) => {
        Ee || (ye = !1);
      }), ye && (re?.(), b(D.current), f && w?.(), l && l());
    };
    return U.jsx(Pw, { isPresent: q, initial: !M.current || s ? void 0 : !1, custom: i, presenceAffectsLayout: c, mode: d, root: y, onExitComplete: q ? void 0 : ce, anchorX: p, anchorY: m, children: K }, se);
  }) });
}, gm = $.createContext({ strict: !1 }), Dh = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Vh = !1;
function Mw() {
  if (Vh)
    return;
  const n = {};
  for (const i in Dh)
    n[i] = {
      isEnabled: (s) => Dh[i].some((l) => !!s[l])
    };
  Gp(n), Vh = !0;
}
function vm() {
  return Mw(), c1();
}
function Rw(n) {
  const i = vm();
  for (const s in n)
    i[s] = {
      ...i[s],
      ...n[s]
    };
  Gp(i);
}
const Aw = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function eo(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || Aw.has(n);
}
let wm = (n) => !eo(n);
function Dw(n) {
  typeof n == "function" && (wm = (i) => i.startsWith("on") ? !eo(i) : n(i));
}
try {
  Dw(require("@emotion/is-prop-valid").default);
} catch {
}
function Vw(n, i, s) {
  const l = {};
  for (const c in n)
    c === "values" && typeof n.values == "object" || Xe(n[c]) || (wm(c) || s === !0 && eo(c) || !i && !eo(c) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && c.startsWith("onDrag")) && (l[c] = n[c]);
  return l;
}
const so = /* @__PURE__ */ $.createContext({});
function Lw(n, i) {
  if (io(n)) {
    const { initial: s, animate: l } = n;
    return {
      initial: s === !1 || pi(s) ? s : void 0,
      animate: pi(l) ? l : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function Nw(n) {
  const { initial: i, animate: s } = Lw(n, $.useContext(so));
  return $.useMemo(() => ({ initial: i, animate: s }), [Lh(i), Lh(s)]);
}
function Lh(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Su = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function xm(n, i, s) {
  for (const l in i)
    !Xe(i[l]) && !bp(l, s) && (n[l] = i[l]);
}
function _w({ transformTemplate: n }, i) {
  return $.useMemo(() => {
    const s = Su();
    return vu(s, i, n), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function jw(n, i) {
  const s = n.style || {}, l = {};
  return xm(l, s, n), Object.assign(l, _w(n, i)), l;
}
function Iw(n, i) {
  const s = {}, l = jw(n, i);
  return n.drag && n.dragListener !== !1 && (s.draggable = !1, l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none", l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = l, s;
}
const Sm = () => ({
  ...Su(),
  attrs: {}
});
function Fw(n, i, s, l) {
  const c = $.useMemo(() => {
    const d = Sm();
    return em(d, i, nm(l), n.transformTemplate, n.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [i]);
  if (n.style) {
    const d = {};
    xm(d, n.style, n), c.style = { ...d, ...c.style };
  }
  return c;
}
const Ow = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ku(n) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof n != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    n.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Ow.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function zw(n, i, s, { latestValues: l }, c, d = !1, f) {
  const m = (f ?? ku(n) ? Fw : Iw)(i, l, c, n), y = Vw(i, typeof n == "string", d), g = n !== $.Fragment ? { ...y, ...m, ref: s } : {}, { children: w } = i, S = $.useMemo(() => Xe(w) ? w.get() : w, [w]);
  return $.createElement(n, {
    ...g,
    children: S
  });
}
function Bw({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, l, c) {
  return {
    latestValues: Uw(s, l, c, n),
    renderState: i()
  };
}
function Uw(n, i, s, l) {
  const c = {}, d = l(n, {});
  for (const S in d)
    c[S] = $s(d[S]);
  let { initial: f, animate: p } = n;
  const m = io(n), y = Hp(n);
  i && y && !m && n.inherit !== !1 && (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const w = g ? p : f;
  if (w && typeof w != "boolean" && !ro(w)) {
    const S = Array.isArray(w) ? w : [w];
    for (let R = 0; R < S.length; R++) {
      const M = fu(n, S[R]);
      if (M) {
        const { transitionEnd: D, transition: A, ...j } = M;
        for (const B in j) {
          let O = j[B];
          if (Array.isArray(O)) {
            const z = g ? O.length - 1 : 0;
            O = O[z];
          }
          O !== null && (c[B] = O);
        }
        for (const B in D)
          c[B] = D[B];
      }
    }
  }
  return c;
}
const km = (n) => (i, s) => {
  const l = $.useContext(so), c = $.useContext(to), d = () => Bw(n, i, l, c);
  return s ? d() : Qa(d);
}, Ww = /* @__PURE__ */ km({
  scrapeMotionValuesFromProps: wu,
  createRenderState: Su
}), $w = /* @__PURE__ */ km({
  scrapeMotionValuesFromProps: rm,
  createRenderState: Sm
}), Hw = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Kw(n, i, s) {
  const l = $.useRef(s);
  $.useInsertionEffect(() => {
    l.current = s;
  });
  const c = $.useRef(null);
  return $.useCallback((d) => {
    d && n.onMount?.(d), i && (d ? i.mount(d) : i.unmount());
    const f = l.current;
    if (typeof f == "function")
      if (d) {
        const p = f(d);
        typeof p == "function" && (c.current = p);
      } else c.current ? (c.current(), c.current = null) : f(d);
    else f && (f.current = d);
  }, [i]);
}
const Tm = $.createContext({});
function cr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function Gw(n, i, s, l, c, d) {
  const { visualElement: f } = $.useContext(so), p = $.useContext(gm), m = $.useContext(to), y = $.useContext(xu), g = y.reducedMotion, w = y.skipAnimations, S = $.useRef(null), R = $.useRef(!1);
  l = l || p.renderer, !S.current && l && (S.current = l(n, {
    visualState: i,
    parent: f,
    props: s,
    presenceContext: m,
    blockInitialAnimation: m ? m.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: w,
    isSVG: d
  }), R.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const M = S.current, D = $.useContext(Tm);
  M && !M.projection && c && (M.type === "html" || M.type === "svg") && Xw(S.current, s, c, D);
  const A = $.useRef(!1);
  $.useInsertionEffect(() => {
    M && A.current && M.update(s, m);
  });
  const j = s[Lp], B = $.useRef(!!j && typeof window < "u" && !window.MotionHandoffIsComplete?.(j) && window.MotionHasOptimisedAnimation?.(j));
  return Za(() => {
    R.current = !0, M && (A.current = !0, window.MotionIsMounted = !0, M.updateFeatures(), M.scheduleRenderMicrotask(), B.current && M.animationState && M.animationState.animateChanges());
  }), $.useEffect(() => {
    M && (!B.current && M.animationState && M.animationState.animateChanges(), B.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(j);
    }), B.current = !1), M.enteringChildren = void 0);
  }), M;
}
function Xw(n, i, s, l) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: y, layoutAnchor: g, layoutCrossfade: w } = i;
  n.projection = new s(n.latestValues, i["data-framer-portal-id"] ? void 0 : Pm(n.parent)), n.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!f || p && cr(p),
    visualElement: n,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: l,
    crossfade: w,
    layoutScroll: m,
    layoutRoot: y,
    layoutAnchor: g
  });
}
function Pm(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : Pm(n.parent);
}
function ya(n, { forwardMotionProps: i = !1, type: s } = {}, l, c) {
  l && Rw(l);
  const d = s ? s === "svg" : ku(n), f = d ? $w : Ww;
  function p(y, g) {
    let w;
    const S = {
      ...$.useContext(xu),
      ...y,
      layoutId: Yw(y)
    }, { isStatic: R } = S, M = Nw(y), D = f(y, R);
    if (!R && typeof window < "u") {
      Qw();
      const A = Zw(S);
      w = A.MeasureLayout, M.visualElement = Gw(n, D, S, c, A.ProjectionNode, d);
    }
    return U.jsxs(so.Provider, { value: M, children: [w && M.visualElement ? U.jsx(w, { visualElement: M.visualElement, ...S }) : null, zw(n, y, Kw(D, M.visualElement, g), D, R, i, d)] });
  }
  p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = $.forwardRef(p);
  return m[Hw] = n, m;
}
function Yw({ layoutId: n }) {
  const i = $.useContext(Ya).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Qw(n, i) {
  $.useContext(gm).strict;
}
function Zw(n) {
  const i = vm(), { drag: s, layout: l } = i;
  if (!s && !l)
    return {};
  const c = { ...s, ...l };
  return {
    MeasureLayout: s?.isEnabled(n) || l?.isEnabled(n) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function qw(n, i) {
  if (typeof Proxy > "u")
    return ya;
  const s = /* @__PURE__ */ new Map(), l = (d, f) => ya(d, f, n, i), c = (d, f) => l(d, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, f) => f === "create" ? l : (s.has(f) || s.set(f, ya(f, void 0, n, i)), s.get(f))
  });
}
const Jw = (n, i) => i.isSVG ?? ku(n) ? new M1(i) : new S1(i, {
  allowProjection: n !== $.Fragment
});
class bw extends wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = L1(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    ro(i) && (this.unmountControls = i.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(), { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let ex = 0;
class tx extends wn {
  constructor() {
    super(...arguments), this.id = ex++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext, { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === l)
      return;
    if (i && l === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: f } = this.node.getProps();
        if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
          const p = On(this.node, d, f);
          if (p) {
            const { transition: m, transitionEnd: y, ...g } = p;
            for (const w in g)
              this.node.getValue(w)?.jump(g[w]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !i);
    s && !i && c.then(() => {
      this.isExitComplete = !0, s(this.id);
    });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {
  }
}
const nx = {
  animation: {
    Feature: bw
  },
  exit: {
    Feature: tx
  }
};
function wi(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const rx = (n) => (i) => pu(i) && n(i, wi(i));
function fi(n, i, s, l) {
  return mi(n, i, rx(s), l);
}
const Cm = ({ current: n }) => n ? n.ownerDocument.defaultView : null, Nh = (n, i) => Math.abs(n - i);
function ix(n, i) {
  const s = Nh(n.x, i.x), l = Nh(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
const _h = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Em {
  constructor(i, s, { transformPagePoint: l, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: p } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (M) => {
      this.handleScroll(M.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = _s(this.lastRawMoveEventInfo, this.transformPagePoint));
      const M = ga(this.lastMoveEventInfo, this.history), D = this.startEvent !== null, A = ix(M.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!D && !A)
        return;
      const { point: j } = M, { timestamp: B } = Ge;
      this.history.push({ ...j, timestamp: B });
      const { onStart: O, onMove: z } = this.handlers;
      D || (O && O(this.lastMoveEvent, M), this.startEvent = this.lastMoveEvent), z && z(this.lastMoveEvent, M);
    }, this.handlePointerMove = (M, D) => {
      this.lastMoveEvent = M, this.lastRawMoveEventInfo = D, this.lastMoveEventInfo = _s(D, this.transformPagePoint), ve.update(this.updatePoint, !0);
    }, this.handlePointerUp = (M, D) => {
      this.end();
      const { onEnd: A, onSessionEnd: j, resumeAnimation: B } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && B && B(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const O = ga(M.type === "pointercancel" ? this.lastMoveEventInfo : _s(D, this.transformPagePoint), this.history);
      this.startEvent && A && A(M, O), j && j(M, O);
    }, !pu(i))
      return;
    this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = l, this.distanceThreshold = f, this.contextWindow = c || window;
    const m = wi(i), y = _s(m, this.transformPagePoint), { point: g } = y, { timestamp: w } = Ge;
    this.history = [{ ...g, timestamp: w }];
    const { onSessionStart: S } = s;
    S && S(i, ga(y, this.history));
    const R = { passive: !0, capture: !0 };
    this.removeListeners = yi(fi(this.contextWindow, "pointermove", this.handlePointerMove, R), fi(this.contextWindow, "pointerup", this.handlePointerUp, R), fi(this.contextWindow, "pointercancel", this.handlePointerUp, R)), p && this.startScrollTracking(p);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(i) {
    let s = i.parentElement;
    for (; s; ) {
      const l = getComputedStyle(s);
      (_h.has(l.overflowX) || _h.has(l.overflowY)) && this.scrollPositions.set(s, {
        x: s.scrollLeft,
        y: s.scrollTop
      }), s = s.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(i) {
    const s = this.scrollPositions.get(i);
    if (!s)
      return;
    const l = i === window, c = l ? { x: window.scrollX, y: window.scrollY } : {
      x: i.scrollLeft,
      y: i.scrollTop
    }, d = { x: c.x - s.x, y: c.y - s.y };
    d.x === 0 && d.y === 0 || (l ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(i, c), ve.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), vn(this.updatePoint);
  }
}
function _s(n, i) {
  return i ? { point: i(n.point) } : n;
}
function jh(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function ga({ point: n }, i) {
  return {
    point: n,
    delta: jh(n, Mm(i)),
    offset: jh(n, sx(i)),
    velocity: ox(i, 0.1)
  };
}
function sx(n) {
  return n[0];
}
function Mm(n) {
  return n[n.length - 1];
}
function ox(n, i) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let s = n.length - 1, l = null;
  const c = Mm(n);
  for (; s >= 0 && (l = n[s], !(c.timestamp - l.timestamp > /* @__PURE__ */ ht(i))); )
    s--;
  if (!l)
    return { x: 0, y: 0 };
  l === n[0] && n.length > 2 && c.timestamp - l.timestamp > /* @__PURE__ */ ht(i) * 2 && (l = n[1]);
  const d = /* @__PURE__ */ xt(c.timestamp - l.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (c.x - l.x) / d,
    y: (c.y - l.y) / d
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function lx(n, { min: i, max: s }, l) {
  return i !== void 0 && n < i ? n = l ? ge(i, n, l.min) : Math.max(n, i) : s !== void 0 && n > s && (n = l ? ge(s, n, l.max) : Math.min(n, s)), n;
}
function Ih(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
  };
}
function ax(n, { top: i, left: s, bottom: l, right: c }) {
  return {
    x: Ih(n.x, s, c),
    y: Ih(n.y, i, l)
  };
}
function Fh(n, i) {
  let s = i.min - n.min, l = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l };
}
function ux(n, i) {
  return {
    x: Fh(n.x, i.x),
    y: Fh(n.y, i.y)
  };
}
function cx(n, i) {
  let s = 0.5;
  const l = tt(n), c = tt(i);
  return c > l ? s = /* @__PURE__ */ di(i.min, i.max - l, n.min) : l > c && (s = /* @__PURE__ */ di(n.min, n.max - c, i.min)), Bt(0, 1, s);
}
function fx(n, i) {
  const s = {};
  return i.min !== void 0 && (s.min = i.min - n.min), i.max !== void 0 && (s.max = i.max - n.min), s;
}
const Ha = 0.35;
function dx(n = Ha) {
  return n === !1 ? n = 0 : n === !0 && (n = Ha), {
    x: Oh(n, "left", "right"),
    y: Oh(n, "top", "bottom")
  };
}
function Oh(n, i, s) {
  return {
    min: zh(n, i),
    max: zh(n, s)
  };
}
function zh(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const hx = /* @__PURE__ */ new WeakMap();
class px {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Be(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i;
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (w) => {
      s && this.snapToCursor(wi(w).point), this.stopAnimation();
    }, f = (w, S) => {
      const { drag: R, dragPropagation: M, onDragStart: D } = this.getProps();
      if (R && !M && (this.openDragLock && this.openDragLock(), this.openDragLock = B0(R), !this.openDragLock))
        return;
      this.latestPointerEvent = w, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ft((j) => {
        let B = this.getAxisMotionValue(j).get() || 0;
        if (zt.test(B)) {
          const { projection: O } = this.visualElement;
          if (O && O.layout) {
            const z = O.layout.layoutBox[j];
            z && (B = tt(z) * (parseFloat(B) / 100));
          }
        }
        this.originPoint[j] = B;
      }), D && ve.update(() => D(w, S), !1, !0), _a(this.visualElement, "transform");
      const { animationState: A } = this.visualElement;
      A && A.setActive("whileDrag", !0);
    }, p = (w, S) => {
      this.latestPointerEvent = w, this.latestPanInfo = S;
      const { dragPropagation: R, dragDirectionLock: M, onDirectionLock: D, onDrag: A } = this.getProps();
      if (!R && !this.openDragLock)
        return;
      const { offset: j } = S;
      if (M && this.currentDirection === null) {
        this.currentDirection = yx(j), this.currentDirection !== null && D && D(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, j), this.updateAxis("y", S.point, j), this.visualElement.render(), A && ve.update(() => A(w, S), !1, !0);
    }, m = (w, S) => {
      this.latestPointerEvent = w, this.latestPanInfo = S, this.stop(w, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, y = () => {
      const { dragSnapToOrigin: w } = this.getProps();
      (w || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Em(i, {
      onSessionStart: d,
      onStart: f,
      onMove: p,
      onSessionEnd: m,
      resumeAnimation: y
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: l,
      contextWindow: Cm(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(i, s) {
    const l = i || this.latestPointerEvent, c = s || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !l)
      return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && ve.postRender(() => p(l, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: l } = this.getProps();
    !l && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(i, s, l) {
    const { drag: c } = this.getProps();
    if (!l || !js(i, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + l[i];
    this.constraints && this.constraints[i] && (f = lx(f, this.constraints[i], this.elastic[i])), d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(), l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    i && cr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && l ? this.constraints = ax(l.layoutBox, i) : this.constraints = !1, this.elastic = dx(s), c !== this.constraints && !cr(i) && l && this.constraints && !this.hasMutatedConstraints && Ft((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = fx(l.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !cr(i))
      return !1;
    const l = i.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = m1(l, c.root, this.visualElement.getTransformPagePoint());
    let f = ux(c.layout.layoutBox, d);
    if (s) {
      const p = s(d1(f));
      this.hasMutatedConstraints = !!p, p && (f = Yp(p));
    }
    return f;
  }
  startAnimation(i) {
    const { drag: s, dragMomentum: l, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: p } = this.getProps(), m = this.constraints || {}, y = Ft((g) => {
      if (!js(g, s, this.currentDirection))
        return;
      let w = m && m[g] || {};
      (f === !0 || f === g) && (w = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, R = c ? 40 : 1e7, M = {
        type: "inertia",
        velocity: l ? i[g] : 0,
        bounceStiffness: S,
        bounceDamping: R,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...w
      };
      return this.startAxisValueAnimation(g, M);
    });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return _a(this.visualElement, i), l.start(cu(i, l, 0, s, this.visualElement, !1));
  }
  stopAnimation() {
    Ft((i) => this.getAxisMotionValue(i).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`, c = this.visualElement.getProps()[s];
    return c || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0);
  }
  snapToCursor(i) {
    Ft((s) => {
      const { drag: l } = this.getProps();
      if (!js(s, l, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, d = this.getAxisMotionValue(s);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[s], m = d.get() || 0;
        d.set(i[s] - ge(f, p, 0.5) + m);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: i, dragConstraints: s } = this.getProps(), { projection: l } = this.visualElement;
    if (!cr(s) || !l || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ft((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = cx({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", l.root && l.root.updateScroll(), l.updateLayout(), this.constraints = !1, this.resolveConstraints(), Ft((f) => {
      if (!js(f, i, null))
        return;
      const p = this.getAxisMotionValue(f), { min: m, max: y } = this.constraints[f];
      p.set(ge(m, y, c[f]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    hx.set(this.visualElement, this);
    const i = this.visualElement.current, s = fi(i, "pointerdown", (y) => {
      const { drag: g, dragListener: w = !0 } = this.getProps(), S = y.target, R = S !== i && G0(S);
      g && w && !R && this.start(y);
    });
    let l;
    const c = () => {
      const { dragConstraints: y } = this.getProps();
      cr(y) && y.current && (this.constraints = this.resolveRefConstraints(), l || (l = mx(i, y.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), ve.read(c);
    const p = mi(window, "resize", () => this.scalePositionWithinConstraints()), m = d.addEventListener("didUpdate", (({ delta: y, hasLayoutChanged: g }) => {
      this.isDragging && g && (Ft((w) => {
        const S = this.getAxisMotionValue(w);
        S && (this.originPoint[w] += y[w].translate, S.set(S.get() + y[w].translate));
      }), this.visualElement.render());
    }));
    return () => {
      p(), s(), f(), m && m(), l && l();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: l = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = Ha, dragMomentum: p = !0 } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p
    };
  }
}
function Bh(n) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    n();
  };
}
function mx(n, i, s) {
  const l = Xd(n, Bh(s)), c = Xd(i, Bh(s));
  return () => {
    l(), c();
  };
}
function js(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function yx(n, i = 10) {
  let s = null;
  return Math.abs(n.y) > i ? s = "y" : Math.abs(n.x) > i && (s = "x"), s;
}
class gx extends wn {
  constructor(i) {
    super(i), this.removeGroupControls = St, this.removeListeners = St, this.controls = new px(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || St;
  }
  update() {
    const { dragControls: i } = this.node.getProps(), { dragControls: s } = this.node.prevProps || {};
    i !== s && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const va = (n) => (i, s) => {
  n && ve.update(() => n(i, s), !1, !0);
};
class vx extends wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = St;
  }
  onPointerDown(i) {
    this.session = new Em(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Cm(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: va(i),
      onStart: va(s),
      onMove: va(l),
      onEnd: (d, f) => {
        delete this.session, c && ve.postRender(() => c(d, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = fi(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let wa = !1;
class wx extends $.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props, { projection: d } = i;
    d && (s.group && s.group.add(d), l && l.register && c && l.register(d), wa && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Hs.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: s, visualElement: l, drag: c, isPresent: d } = this.props, { projection: f } = l;
    return f && (f.isPresent = d, i.layoutDependency !== s && f.setOptions({
      ...f.options,
      layoutDependency: s
    }), wa = !0, c || i.layoutDependency !== s || s === void 0 || i.isPresent !== d ? f.willUpdate() : this.safeToRemove(), i.isPresent !== d && (d ? f.promote() : f.relegate() || ve.postRender(() => {
      const p = f.getStack();
      (!p || !p.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: s } = this.props, { projection: l } = i;
    l && (l.options.layoutAnchor = s, l.root.didUpdate(), hu.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: s, switchLayoutGroup: l } = this.props, { projection: c } = i;
    wa = !0, c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), l && l.deregister && l.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Rm(n) {
  const [i, s] = ym(), l = $.useContext(Ya);
  return U.jsx(wx, { ...n, layoutGroup: l, switchLayoutGroup: $.useContext(Tm), isPresent: i, safeToRemove: s });
}
const xx = {
  pan: {
    Feature: vx
  },
  drag: {
    Feature: gx,
    ProjectionNode: mm,
    MeasureLayout: Rm
  }
};
function Uh(n, i, s) {
  const { props: l } = n;
  n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s, d = l[c];
  d && ve.postRender(() => d(i, wi(i)));
}
class Sx extends wn {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = W0(i, (s, l) => (Uh(this.node, l, "Start"), (c) => Uh(this.node, c, "End"))));
  }
  unmount() {
  }
}
class kx extends wn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = yi(mi(this.node.current, "focus", () => this.onFocus()), mi(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Wh(n, i, s) {
  const { props: l } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled)
    return;
  n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s), d = l[c];
  d && ve.postRender(() => d(i, wi(i)));
}
class Tx extends wn {
  mount() {
    const { current: i } = this.node;
    if (!i)
      return;
    const { globalTapTarget: s, propagate: l } = this.node.props;
    this.unmount = Y0(i, (c, d) => (Wh(this.node, d, "Start"), (f, { success: p }) => Wh(this.node, f, p ? "End" : "Cancel")), {
      useGlobalTarget: s,
      stopPropagation: l?.tap === !1
    });
  }
  unmount() {
  }
}
const Ka = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakMap(), Px = (n) => {
  const i = Ka.get(n.target);
  i && i(n);
}, Cx = (n) => {
  n.forEach(Px);
};
function Ex({ root: n, ...i }) {
  const s = n || document;
  xa.has(s) || xa.set(s, {});
  const l = xa.get(s), c = JSON.stringify(i);
  return l[c] || (l[c] = new IntersectionObserver(Cx, { root: n, ...i })), l[c];
}
function Mx(n, i, s) {
  const l = Ex(i);
  return Ka.set(n, s), l.observe(n), () => {
    Ka.delete(n), l.unobserve(n);
  };
}
const Rx = {
  some: 0,
  all: 1
};
class Ax extends wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: i = {} } = this.node.getProps(), { root: s, margin: l, amount: c = "some", once: d } = i, f = {
      root: s ? s.current : void 0,
      rootMargin: l,
      threshold: typeof c == "number" ? c : Rx[c]
    }, p = (m) => {
      const { isIntersecting: y } = m;
      if (this.isInView === y || (this.isInView = y, d && !y && this.hasEnteredView))
        return;
      y && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", y);
      const { onViewportEnter: g, onViewportLeave: w } = this.node.getProps(), S = y ? g : w;
      S && S(m);
    };
    this.stopObserver = Mx(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(Dx(i, s)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function Dx({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const Vx = {
  inView: {
    Feature: Ax
  },
  tap: {
    Feature: Tx
  },
  focus: {
    Feature: kx
  },
  hover: {
    Feature: Sx
  }
}, Lx = {
  layout: {
    ProjectionNode: mm,
    MeasureLayout: Rm
  }
}, Nx = {
  ...nx,
  ...Vx,
  ...xx,
  ...Lx
}, _x = /* @__PURE__ */ qw(Nx, Jw), pr = _x, Ga = {
  es: {
    nav: {
      apps: "apps",
      revit: "revit tools",
      learning: "aprendizaje",
      support: "soporte",
      help: "ayuda",
      cta: "explorar",
      toggle: "Cambiar idioma a ingles",
      menu: "Abrir navegacion"
    },
    hero: {
      line1Strong: "pyMenvic reune",
      line1Muted: "herramientas",
      line2: "apps, soporte y notas para",
      line3Before: "flujos digitales",
      line3After: "practicos.",
      start: "Elige por donde empezar: Revit tools, apps, aprendizaje o soporte",
      openApps: "Abrir apps",
      year: "2026",
      corner: "apps · bim · soporte"
    }
  },
  en: {
    nav: {
      apps: "apps",
      revit: "revit tools",
      learning: "learning",
      support: "support",
      help: "find help",
      cta: "explore",
      toggle: "Switch language to Spanish",
      menu: "Open navigation"
    },
    hero: {
      line1Strong: "pyMenvic brings",
      line1Muted: "tools",
      line2: "apps, support, and notes for",
      line3Before: "practical",
      line3After: "digital workflows.",
      start: "Choose where to start: Revit tools, apps, learning, or support",
      openApps: "Open apps",
      year: "2026",
      corner: "apps · bim · support"
    }
  }
}, $h = [
  ["apps", "/apps/"],
  ["revit", "/revit-tools/"],
  ["learning", "/learning/"],
  ["support", "/support/"]
];
function jx() {
  return /* @__PURE__ */ U.jsx("svg", { className: "h-8 w-8 fill-[#1a1a1a]", viewBox: "0 0 64 64", "aria-hidden": "true", children: /* @__PURE__ */ U.jsx("path", { d: "M32 5c6.4 0 11.6 5.2 11.6 11.6 0 2.2-.6 4.3-1.7 6.1 1.8-1.1 3.9-1.7 6.1-1.7C54.6 21 60 26.4 60 33s-5.4 12-12 12c-2.2 0-4.2-.6-6-1.6 1 1.8 1.6 3.8 1.6 6C43.6 55.8 38.4 61 32 61S20.4 55.8 20.4 49.4c0-2.2.6-4.2 1.6-6-1.8 1-3.8 1.6-6 1.6C9.4 45 4 39.6 4 33s5.4-12 12-12c2.2 0 4.3.6 6.1 1.7-1.1-1.8-1.7-3.9-1.7-6.1C20.4 10.2 25.6 5 32 5Zm0 19.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" }) });
}
function Ix({ open: n }) {
  return /* @__PURE__ */ U.jsxs("span", { className: "relative block h-5 w-7", "aria-hidden": "true", children: [
    /* @__PURE__ */ U.jsx(
      pr.span,
      {
        className: "absolute left-0 top-1 h-[2px] w-7 rounded-full bg-[#1a1a1a]",
        animate: n ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
      }
    ),
    /* @__PURE__ */ U.jsx(
      pr.span,
      {
        className: "absolute left-0 top-1/2 h-[2px] w-7 rounded-full bg-[#1a1a1a]",
        animate: n ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }
      }
    ),
    /* @__PURE__ */ U.jsx(
      pr.span,
      {
        className: "absolute bottom-1 left-0 h-[2px] w-7 rounded-full bg-[#1a1a1a]",
        animate: n ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
      }
    )
  ] });
}
function Fx({ locale: n, onToggleLocale: i }) {
  const [s, l] = $.useState(!1), c = Ga[n].nav;
  return /* @__PURE__ */ U.jsxs("header", { className: "fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-[#f1f1f1]/80 to-transparent py-6 backdrop-blur-[2px] md:py-10", children: [
    /* @__PURE__ */ U.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-4 px-6 md:gap-x-8 md:px-12 lg:px-20", children: [
      /* @__PURE__ */ U.jsxs("a", { className: "col-span-7 flex items-center gap-3 md:col-span-3", href: "/", "aria-label": "pyMenvic home", children: [
        /* @__PURE__ */ U.jsx(jx, {}),
        /* @__PURE__ */ U.jsx("span", { className: "font-display text-[1.65rem] font-bold tracking-[-0.04em] text-[#1a1a1a]", children: "pyMenvic" })
      ] }),
      /* @__PURE__ */ U.jsx("nav", { className: "col-span-6 hidden items-center justify-center gap-7 md:flex", "aria-label": "Main navigation", children: $h.map(([d, f]) => /* @__PURE__ */ U.jsx("a", { href: f, className: "text-[0.78rem] font-semibold lowercase tracking-[-0.01em] text-zinc-700 transition-colors hover:text-black", children: c[d] }, f)) }),
      /* @__PURE__ */ U.jsxs("div", { className: "col-span-5 flex items-center justify-end gap-3 md:col-span-3", children: [
        /* @__PURE__ */ U.jsx("a", { className: "hidden text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex", href: "/support/", children: c.help }),
        /* @__PURE__ */ U.jsxs("a", { className: "hidden rounded-full bg-[#1a1a1a] px-4 py-2 text-[0.8rem] font-semibold lowercase text-white transition-transform hover:-translate-y-0.5 sm:inline-flex", href: "/apps/", children: [
          c.cta,
          " ",
          /* @__PURE__ */ U.jsx("span", { className: "ml-1", children: "→" })
        ] }),
        /* @__PURE__ */ U.jsxs(
          "button",
          {
            className: "hidden rounded-full border border-black/10 bg-white/45 px-3 py-2 text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex md:hidden",
            type: "button",
            "aria-label": c.toggle,
            onClick: i,
            children: [
              /* @__PURE__ */ U.jsx("span", { className: n === "es" ? "text-black" : "text-zinc-500", children: "ES" }),
              /* @__PURE__ */ U.jsx("span", { className: "px-1 text-zinc-400", children: "/" }),
              /* @__PURE__ */ U.jsx("span", { className: n === "en" ? "text-black" : "text-zinc-500", children: "EN" })
            ]
          }
        ),
        /* @__PURE__ */ U.jsx(
          "button",
          {
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/50 md:hidden",
            type: "button",
            "aria-label": c.menu,
            "aria-expanded": s,
            onClick: () => l((d) => !d),
            children: /* @__PURE__ */ U.jsx(Ix, { open: s })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ U.jsx(Ew, { children: s ? /* @__PURE__ */ U.jsx(
      pr.div,
      {
        initial: { opacity: 0, y: -18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -18 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        className: "mx-6 mt-5 rounded-[24px] border border-black/10 bg-white/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden",
        children: /* @__PURE__ */ U.jsxs("nav", { className: "grid gap-2", "aria-label": "Mobile navigation", children: [
          $h.map(([d, f]) => /* @__PURE__ */ U.jsx("a", { href: f, className: "rounded-2xl px-3 py-3 font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-[#1a1a1a]", children: c[d] }, f)),
          /* @__PURE__ */ U.jsx(
            "button",
            {
              className: "mt-2 rounded-2xl bg-[#1a1a1a] px-3 py-3 text-left font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-white",
              type: "button",
              onClick: i,
              children: n === "es" ? "switch to english" : "cambiar a espanol"
            }
          )
        ] })
      }
    ) : null })
  ] });
}
const Ox = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4";
function zx() {
  return /* @__PURE__ */ U.jsx("span", { className: "mx-1 inline-flex w-[16px] items-center justify-center rounded-full border-[2px] border-[#1a1a1a] align-middle md:mx-2 md:w-[42px] lg:w-[62px]", children: /* @__PURE__ */ U.jsx("span", { className: "h-2 w-2 rounded-full bg-[#1a1a1a]" }) });
}
function Bx() {
  return /* @__PURE__ */ U.jsx("svg", { className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ U.jsx("path", { d: "M7 17 17 7M9 7h8v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Ux({ locale: n, onToggleLocale: i }) {
  const s = Ga[n].hero;
  return /* @__PURE__ */ U.jsxs("section", { className: "relative flex min-h-[110vh] w-full flex-col items-center justify-start overflow-hidden bg-bg-base sm:min-h-[140vh]", children: [
    /* @__PURE__ */ U.jsxs("div", { className: "pointer-events-none absolute left-0 top-[15vh] z-0 h-[95vh] w-full sm:top-[20vh] sm:h-[120vh]", children: [
      /* @__PURE__ */ U.jsx("video", { autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "h-full w-full object-cover opacity-100", children: /* @__PURE__ */ U.jsx("source", { src: Ox, type: "video/mp4" }) }),
      /* @__PURE__ */ U.jsx("div", { className: "absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-bg-base to-transparent sm:h-32" }),
      /* @__PURE__ */ U.jsx("div", { className: "absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-bg-base to-transparent" })
    ] }),
    /* @__PURE__ */ U.jsx("div", { className: "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-x-4 px-8 pb-16 pt-[21vh] md:gap-x-8 md:px-16 lg:px-20", children: /* @__PURE__ */ U.jsxs("div", { className: "col-span-12 md:col-span-10 md:col-start-2", children: [
      /* @__PURE__ */ U.jsxs(
        pr.h1,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "font-display text-[clamp(3.35rem,10vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#8e8e8e]",
          children: [
            /* @__PURE__ */ U.jsx("span", { className: "text-[#1a1a1a]", children: s.line1Strong }),
            " ",
            /* @__PURE__ */ U.jsx("span", { children: s.line1Muted }),
            /* @__PURE__ */ U.jsx("br", {}),
            /* @__PURE__ */ U.jsx("span", { children: s.line2 }),
            /* @__PURE__ */ U.jsx("br", {}),
            /* @__PURE__ */ U.jsxs("span", { children: [
              s.line3Before,
              " ",
              /* @__PURE__ */ U.jsx(zx, {}),
              " ",
              s.line3After
            ] })
          ]
        }
      ),
      /* @__PURE__ */ U.jsx(
        pr.div,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.15 },
          className: "mt-9 w-full max-w-[560px]",
          children: /* @__PURE__ */ U.jsxs("div", { className: "flex items-center rounded-[6px] border border-black/[0.05] bg-white p-1 pl-4 shadow-sm", children: [
            /* @__PURE__ */ U.jsx("span", { className: "min-w-0 flex-1 text-sm font-medium text-zinc-500", children: s.start }),
            /* @__PURE__ */ U.jsx("a", { className: "relative h-9 w-9 rounded-full bg-[#1a1a1a] text-white", href: "/apps/", "aria-label": s.openApps, children: /* @__PURE__ */ U.jsx(Bx, {}) })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ U.jsxs(
      "button",
      {
        className: "absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/35 px-4 py-2 text-xs font-semibold uppercase text-[#1a1a1a] shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:bg-white/60 md:flex",
        type: "button",
        "aria-label": Ga[n].nav.toggle,
        onClick: i,
        children: [
          /* @__PURE__ */ U.jsx("span", { className: n === "es" ? "text-black" : "text-zinc-500", children: "ES" }),
          /* @__PURE__ */ U.jsx("span", { className: "text-zinc-400", children: "/" }),
          /* @__PURE__ */ U.jsx("span", { className: n === "en" ? "text-black" : "text-zinc-500", children: "EN" })
        ]
      }
    ),
    /* @__PURE__ */ U.jsx("span", { className: "absolute bottom-8 left-8 z-20 text-xs font-semibold tracking-[-0.02em] text-[#1a1a1a] md:left-12 lg:left-20", children: s.year }),
    /* @__PURE__ */ U.jsx("span", { className: "absolute bottom-8 right-8 z-20 text-xs font-semibold lowercase tracking-[-0.02em] text-[#1a1a1a] md:right-12 lg:right-20", children: s.corner })
  ] });
}
function Wx() {
  const [n, i] = $.useState(() => typeof window > "u" ? "es" : window.localStorage.getItem("pymenvic-locale") === "en" ? "en" : "es");
  $.useEffect(() => {
    window.localStorage.setItem("pymenvic-locale", n), document.documentElement.lang = n;
  }, [n]);
  const s = () => i((l) => l === "es" ? "en" : "es");
  return /* @__PURE__ */ U.jsxs("div", { className: "min-h-screen bg-bg-base selection:bg-brand-green selection:text-black", children: [
    /* @__PURE__ */ U.jsx(Fx, { locale: n, onToggleLocale: s }),
    /* @__PURE__ */ U.jsx("main", { children: /* @__PURE__ */ U.jsx(Ux, { locale: n, onToggleLocale: s }) })
  ] });
}
jg.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ U.jsx(Rg.StrictMode, { children: /* @__PURE__ */ U.jsx(Wx, {}) })
);
