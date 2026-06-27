function Ia(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var Co = { exports: {} }, gr = {}, No = { exports: {} }, I = {};
var Ca;
function Mf() {
  if (Ca) return I;
  Ca = 1;
  var S = /* @__PURE__ */ Symbol.for("react.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), fe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), re = /* @__PURE__ */ Symbol.for("react.provider"), le = /* @__PURE__ */ Symbol.for("react.context"), ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), Ce = /* @__PURE__ */ Symbol.for("react.memo"), we = /* @__PURE__ */ Symbol.for("react.lazy"), ee = Symbol.iterator;
  function Z(c) {
    return c === null || typeof c != "object" ? null : (c = ee && c[ee] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var $e = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, J = {};
  function W(c, v, O) {
    this.props = c, this.context = v, this.refs = J, this.updater = O || $e;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, W.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function vt() {
  }
  vt.prototype = W.prototype;
  function st(c, v, O) {
    this.props = c, this.context = v, this.refs = J, this.updater = O || $e;
  }
  var qe = st.prototype = new vt();
  qe.constructor = st, We(qe, W.prototype), qe.isPureReactComponent = !0;
  var xe = Array.isArray, be = Object.prototype.hasOwnProperty, Ne = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, O) {
    var D, U = {}, A = null, K = null;
    if (v != null) for (D in v.ref !== void 0 && (K = v.ref), v.key !== void 0 && (A = "" + v.key), v) be.call(v, D) && !je.hasOwnProperty(D) && (U[D] = v[D]);
    var V = arguments.length - 2;
    if (V === 1) U.children = O;
    else if (1 < V) {
      for (var q = Array(V), Ue = 0; Ue < V; Ue++) q[Ue] = arguments[Ue + 2];
      U.children = q;
    }
    if (c && c.defaultProps) for (D in V = c.defaultProps, V) U[D] === void 0 && (U[D] = V[D]);
    return { $$typeof: S, type: c, key: A, ref: K, props: U, _owner: Ne.current };
  }
  function Nt(c, v) {
    return { $$typeof: S, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === S;
  }
  function Kt(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var at = /\/+/g;
  function Fe(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Kt("" + c.key) : v.toString(36);
  }
  function et(c, v, O, D, U) {
    var A = typeof c;
    (A === "undefined" || A === "boolean") && (c = null);
    var K = !1;
    if (c === null) K = !0;
    else switch (A) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case S:
          case M:
            K = !0;
        }
    }
    if (K) return K = c, U = U(K), c = D === "" ? "." + Fe(K, 0) : D, xe(U) ? (O = "", c != null && (O = c.replace(at, "$&/") + "/"), et(U, v, O, "", function(Ue) {
      return Ue;
    })) : U != null && (yt(U) && (U = Nt(U, O + (!U.key || K && K.key === U.key ? "" : ("" + U.key).replace(at, "$&/") + "/") + c)), v.push(U)), 1;
    if (K = 0, D = D === "" ? "." : D + ":", xe(c)) for (var V = 0; V < c.length; V++) {
      A = c[V];
      var q = D + Fe(A, V);
      K += et(A, v, O, q, U);
    }
    else if (q = Z(c), typeof q == "function") for (c = q.call(c), V = 0; !(A = c.next()).done; ) A = A.value, q = D + Fe(A, V++), K += et(A, v, O, q, U);
    else if (A === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function ct(c, v, O) {
    if (c == null) return c;
    var D = [], U = 0;
    return et(c, D, "", "", function(A) {
      return v.call(O, A, U++);
    }), D;
  }
  function Te(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ie = { current: null }, k = { transition: null }, R = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ne };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return I.Children = { map: ct, forEach: function(c, v, O) {
    ct(c, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var v = 0;
    return ct(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return ct(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!yt(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, I.Component = W, I.Fragment = m, I.Profiler = Q, I.PureComponent = st, I.StrictMode = fe, I.Suspense = $, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, I.act = C, I.cloneElement = function(c, v, O) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var D = We({}, c.props), U = c.key, A = c.ref, K = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (A = v.ref, K = Ne.current), v.key !== void 0 && (U = "" + v.key), c.type && c.type.defaultProps) var V = c.type.defaultProps;
      for (q in v) be.call(v, q) && !je.hasOwnProperty(q) && (D[q] = v[q] === void 0 && V !== void 0 ? V[q] : v[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) D.children = O;
    else if (1 < q) {
      V = Array(q);
      for (var Ue = 0; Ue < q; Ue++) V[Ue] = arguments[Ue + 2];
      D.children = V;
    }
    return { $$typeof: S, type: c.type, key: U, ref: A, props: D, _owner: K };
  }, I.createContext = function(c) {
    return c = { $$typeof: le, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: re, _context: c }, c.Consumer = c;
  }, I.createElement = Qe, I.createFactory = function(c) {
    var v = Qe.bind(null, c);
    return v.type = c, v;
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(c) {
    return { $$typeof: ae, render: c };
  }, I.isValidElement = yt, I.lazy = function(c) {
    return { $$typeof: we, _payload: { _status: -1, _result: c }, _init: Te };
  }, I.memo = function(c, v) {
    return { $$typeof: Ce, type: c, compare: v === void 0 ? null : v };
  }, I.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, I.unstable_act = C, I.useCallback = function(c, v) {
    return ie.current.useCallback(c, v);
  }, I.useContext = function(c) {
    return ie.current.useContext(c);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(c) {
    return ie.current.useDeferredValue(c);
  }, I.useEffect = function(c, v) {
    return ie.current.useEffect(c, v);
  }, I.useId = function() {
    return ie.current.useId();
  }, I.useImperativeHandle = function(c, v, O) {
    return ie.current.useImperativeHandle(c, v, O);
  }, I.useInsertionEffect = function(c, v) {
    return ie.current.useInsertionEffect(c, v);
  }, I.useLayoutEffect = function(c, v) {
    return ie.current.useLayoutEffect(c, v);
  }, I.useMemo = function(c, v) {
    return ie.current.useMemo(c, v);
  }, I.useReducer = function(c, v, O) {
    return ie.current.useReducer(c, v, O);
  }, I.useRef = function(c) {
    return ie.current.useRef(c);
  }, I.useState = function(c) {
    return ie.current.useState(c);
  }, I.useSyncExternalStore = function(c, v, O) {
    return ie.current.useSyncExternalStore(c, v, O);
  }, I.useTransition = function() {
    return ie.current.useTransition();
  }, I.version = "18.3.1", I;
}
var Na;
function To() {
  return Na || (Na = 1, No.exports = Mf()), No.exports;
}
var za;
function Of() {
  if (za) return gr;
  za = 1;
  var S = To(), M = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.fragment"), fe = Object.prototype.hasOwnProperty, Q = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function le(ae, $, Ce) {
    var we, ee = {}, Z = null, $e = null;
    Ce !== void 0 && (Z = "" + Ce), $.key !== void 0 && (Z = "" + $.key), $.ref !== void 0 && ($e = $.ref);
    for (we in $) fe.call($, we) && !re.hasOwnProperty(we) && (ee[we] = $[we]);
    if (ae && ae.defaultProps) for (we in $ = ae.defaultProps, $) ee[we] === void 0 && (ee[we] = $[we]);
    return { $$typeof: M, type: ae, key: Z, ref: $e, props: ee, _owner: Q.current };
  }
  return gr.Fragment = m, gr.jsx = le, gr.jsxs = le, gr;
}
var Pa;
function If() {
  return Pa || (Pa = 1, Co.exports = Of()), Co.exports;
}
var x = If(), Ln = To();
const Df = /* @__PURE__ */ Ia(Ln);
var jl = {}, zo = { exports: {} }, De = {}, Po = { exports: {} }, jo = {};
var ja;
function Ff() {
  return ja || (ja = 1, (function(S) {
    function M(k, R) {
      var C = k.length;
      k.push(R);
      e: for (; 0 < C; ) {
        var c = C - 1 >>> 1, v = k[c];
        if (0 < Q(v, R)) k[c] = R, k[C] = v, C = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function fe(k) {
      if (k.length === 0) return null;
      var R = k[0], C = k.pop();
      if (C !== R) {
        k[0] = C;
        e: for (var c = 0, v = k.length, O = v >>> 1; c < O; ) {
          var D = 2 * (c + 1) - 1, U = k[D], A = D + 1, K = k[A];
          if (0 > Q(U, C)) A < v && 0 > Q(K, U) ? (k[c] = K, k[A] = C, c = A) : (k[c] = U, k[D] = C, c = D);
          else if (A < v && 0 > Q(K, C)) k[c] = K, k[A] = C, c = A;
          else break e;
        }
      }
      return R;
    }
    function Q(k, R) {
      var C = k.sortIndex - R.sortIndex;
      return C !== 0 ? C : k.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var re = performance;
      S.unstable_now = function() {
        return re.now();
      };
    } else {
      var le = Date, ae = le.now();
      S.unstable_now = function() {
        return le.now() - ae;
      };
    }
    var $ = [], Ce = [], we = 1, ee = null, Z = 3, $e = !1, We = !1, J = !1, W = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, st = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qe(k) {
      for (var R = m(Ce); R !== null; ) {
        if (R.callback === null) fe(Ce);
        else if (R.startTime <= k) fe(Ce), R.sortIndex = R.expirationTime, M($, R);
        else break;
        R = m(Ce);
      }
    }
    function xe(k) {
      if (J = !1, qe(k), !We) if (m($) !== null) We = !0, Te(be);
      else {
        var R = m(Ce);
        R !== null && ie(xe, R.startTime - k);
      }
    }
    function be(k, R) {
      We = !1, J && (J = !1, vt(Qe), Qe = -1), $e = !0;
      var C = Z;
      try {
        for (qe(R), ee = m($); ee !== null && (!(ee.expirationTime > R) || k && !Kt()); ) {
          var c = ee.callback;
          if (typeof c == "function") {
            ee.callback = null, Z = ee.priorityLevel;
            var v = c(ee.expirationTime <= R);
            R = S.unstable_now(), typeof v == "function" ? ee.callback = v : ee === m($) && fe($), qe(R);
          } else fe($);
          ee = m($);
        }
        if (ee !== null) var O = !0;
        else {
          var D = m(Ce);
          D !== null && ie(xe, D.startTime - R), O = !1;
        }
        return O;
      } finally {
        ee = null, Z = C, $e = !1;
      }
    }
    var Ne = !1, je = null, Qe = -1, Nt = 5, yt = -1;
    function Kt() {
      return !(S.unstable_now() - yt < Nt);
    }
    function at() {
      if (je !== null) {
        var k = S.unstable_now();
        yt = k;
        var R = !0;
        try {
          R = je(!0, k);
        } finally {
          R ? Fe() : (Ne = !1, je = null);
        }
      } else Ne = !1;
    }
    var Fe;
    if (typeof st == "function") Fe = function() {
      st(at);
    };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), ct = et.port2;
      et.port1.onmessage = at, Fe = function() {
        ct.postMessage(null);
      };
    } else Fe = function() {
      W(at, 0);
    };
    function Te(k) {
      je = k, Ne || (Ne = !0, Fe());
    }
    function ie(k, R) {
      Qe = W(function() {
        k(S.unstable_now());
      }, R);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, S.unstable_continueExecution = function() {
      We || $e || (We = !0, Te(be));
    }, S.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Nt = 0 < k ? Math.floor(1e3 / k) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, S.unstable_getFirstCallbackNode = function() {
      return m($);
    }, S.unstable_next = function(k) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = Z;
      }
      var C = Z;
      Z = R;
      try {
        return k();
      } finally {
        Z = C;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var C = Z;
      Z = k;
      try {
        return R();
      } finally {
        Z = C;
      }
    }, S.unstable_scheduleCallback = function(k, R, C) {
      var c = S.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? c + C : c) : C = c, k) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = C + v, k = { id: we++, callback: R, priorityLevel: k, startTime: C, expirationTime: v, sortIndex: -1 }, C > c ? (k.sortIndex = C, M(Ce, k), m($) === null && k === m(Ce) && (J ? (vt(Qe), Qe = -1) : J = !0, ie(xe, C - c))) : (k.sortIndex = v, M($, k), We || $e || (We = !0, Te(be))), k;
    }, S.unstable_shouldYield = Kt, S.unstable_wrapCallback = function(k) {
      var R = Z;
      return function() {
        var C = Z;
        Z = R;
        try {
          return k.apply(this, arguments);
        } finally {
          Z = C;
        }
      };
    };
  })(jo)), jo;
}
var Ta;
function Uf() {
  return Ta || (Ta = 1, Po.exports = Ff()), Po.exports;
}
var Ra;
function Af() {
  if (Ra) return De;
  Ra = 1;
  var S = To(), M = Uf();
  function m(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var fe = /* @__PURE__ */ new Set(), Q = {};
  function re(e, t) {
    le(e, t), le(e + "Capture", t);
  }
  function le(e, t) {
    for (Q[e] = t, e = 0; e < t.length; e++) fe.add(t[e]);
  }
  var ae = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $ = Object.prototype.hasOwnProperty, Ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, we = {}, ee = {};
  function Z(e) {
    return $.call(ee, e) ? !0 : $.call(we, e) ? !1 : Ce.test(e) ? ee[e] = !0 : (we[e] = !0, !1);
  }
  function $e(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, t, n, r) {
    if (t === null || typeof t > "u" || $e(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
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
  function J(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new J(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    W[t] = new J(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new J(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new J(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new J(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new J(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      vt,
      st
    );
    W[t] = new J(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(vt, st);
    W[t] = new J(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(vt, st);
    W[t] = new J(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function qe(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (We(t, n, l, r) && (n = null), r || l === null ? Z(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var xe = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = /* @__PURE__ */ Symbol.for("react.element"), Ne = /* @__PURE__ */ Symbol.for("react.portal"), je = /* @__PURE__ */ Symbol.for("react.fragment"), Qe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Nt = /* @__PURE__ */ Symbol.for("react.profiler"), yt = /* @__PURE__ */ Symbol.for("react.provider"), Kt = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), Fe = /* @__PURE__ */ Symbol.for("react.suspense"), et = /* @__PURE__ */ Symbol.for("react.suspense_list"), ct = /* @__PURE__ */ Symbol.for("react.memo"), Te = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      c = t && t[1] || "";
    }
    return `
` + c + e;
  }
  var O = !1;
  function D(e, t) {
    if (!e || O) return "";
    O = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
        for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || l[o] !== i[u]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function U(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = D(e.type, !1), e;
      case 11:
        return e = D(e.type.render, !1), e;
      case 1:
        return e = D(e.type, !0), e;
      default:
        return "";
    }
  }
  function A(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case Ne:
        return "Portal";
      case Nt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Kt:
        return (e.displayName || "Context") + ".Consumer";
      case yt:
        return (e._context.displayName || "Context") + ".Provider";
      case at:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ct:
        return t = e.displayName || null, t !== null ? t : A(e.type) || "Memo";
      case Te:
        t = e._payload, e = e._init;
        try {
          return A(e(t));
        } catch {
        }
    }
    return null;
  }
  function K(e) {
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
        return A(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
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
  function V(e) {
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
  function q(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Ro(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = q(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function xr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return C({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Lo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = V(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Mo(e, t) {
    t = t.checked, t != null && qe(e, "checked", t, !1);
  }
  function Ll(e, t) {
    Mo(e, t);
    var n = V(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ml(e, t.type, V(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Oo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ml(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function un(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + V(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Io(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(m(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: V(n) };
  }
  function Do(e, t) {
    var n = V(t.value), r = V(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Fo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Uo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Ao = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
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
  }, Da = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function(e) {
    Da.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
    });
  });
  function Bo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function Vo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Bo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Fa = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dl(e, t) {
    if (t) {
      if (Fa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, t) {
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
  var Ul = null;
  function Al(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bl = null, sn = null, an = null;
  function Ho(e) {
    if (e = rr(e)) {
      if (typeof Bl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && (t = Wr(t), Bl(e.stateNode, e.type, t));
    }
  }
  function $o(e) {
    sn ? an ? an.push(e) : an = [e] : sn = e;
  }
  function Wo() {
    if (sn) {
      var e = sn, t = an;
      if (an = sn = null, Ho(e), t) for (e = 0; e < t.length; e++) Ho(t[e]);
    }
  }
  function Qo(e, t) {
    return e(t);
  }
  function Ko() {
  }
  var Vl = !1;
  function Yo(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Qo(e, t, n);
    } finally {
      Vl = !1, (sn !== null || an !== null) && (Ko(), Wo());
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (ae) try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      Hl = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    Hl = !1;
  }
  function Ua(e, t, n, r, l, i, o, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1, Sr = null, Er = !1, $l = null, Aa = { onError: function(e) {
    Un = !0, Sr = e;
  } };
  function Ba(e, t, n, r, l, i, o, u, s) {
    Un = !1, Sr = null, Ua.apply(Aa, arguments);
  }
  function Va(e, t, n, r, l, i, o, u, s) {
    if (Ba.apply(this, arguments), Un) {
      if (Un) {
        var p = Sr;
        Un = !1, Sr = null;
      } else throw Error(m(198));
      Er || (Er = !0, $l = p);
    }
  }
  function Yt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Go(e) {
    if (Yt(e) !== e) throw Error(m(188));
  }
  function Ha(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Yt(e), t === null) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Go(l), e;
          if (i === r) return Go(l), t;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (u === r) {
            o = !0, r = l, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (u === r) {
              o = !0, r = i, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zo(e) {
    return e = Ha(e), e !== null ? Jo(e) : null;
  }
  function Jo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Jo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qo = M.unstable_scheduleCallback, bo = M.unstable_cancelCallback, $a = M.unstable_shouldYield, Wa = M.unstable_requestPaint, ue = M.unstable_now, Qa = M.unstable_getCurrentPriorityLevel, Wl = M.unstable_ImmediatePriority, eu = M.unstable_UserBlockingPriority, _r = M.unstable_NormalPriority, Ka = M.unstable_LowPriority, tu = M.unstable_IdlePriority, Cr = null, ft = null;
  function Ya(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function") try {
      ft.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var tt = Math.clz32 ? Math.clz32 : Za, Xa = Math.log, Ga = Math.LN2;
  function Za(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xa(e) / Ga | 0) | 0;
  }
  var Nr = 64, zr = 4194304;
  function An(e) {
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
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? r = An(u) : (i &= o, i !== 0 && (r = An(i)));
    } else o = n & ~l, o !== 0 ? r = An(o) : i !== 0 && (r = An(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - tt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Ja(e, t) {
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
  function qa(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - tt(i), u = 1 << o, s = l[o];
      s === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = Ja(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
    }
  }
  function Ql(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function nu() {
    var e = Nr;
    return Nr <<= 1, (Nr & 4194240) === 0 && (Nr = 64), e;
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Bn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
  }
  function ba(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - tt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Yl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - tt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var H = 0;
  function ru(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var lu, Xl, iu, ou, uu, Gl = !1, jr = [], zt = null, Pt = null, jt = null, Vn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Tt = [], ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function su(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && Xl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function tc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return zt = $n(zt, e, t, n, r, l), !0;
      case "dragenter":
        return Pt = $n(Pt, e, t, n, r, l), !0;
      case "mouseover":
        return jt = $n(jt, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Vn.set(i, $n(Vn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Hn.set(i, $n(Hn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function au(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Xo(n), t !== null) {
            e.blockedOn = t, uu(e.priority, function() {
              iu(n);
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
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ul = r, n.target.dispatchEvent(r), Ul = null;
      } else return t = rr(n), t !== null && Xl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function cu(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function nc() {
    Gl = !1, zt !== null && Tr(zt) && (zt = null), Pt !== null && Tr(Pt) && (Pt = null), jt !== null && Tr(jt) && (jt = null), Vn.forEach(cu), Hn.forEach(cu);
  }
  function Wn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gl || (Gl = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, nc)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < jr.length) {
      Wn(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zt !== null && Wn(zt, e), Pt !== null && Wn(Pt, e), jt !== null && Wn(jt, e), Vn.forEach(t), Hn.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) au(n), n.blockedOn === null && Tt.shift();
  }
  var cn = xe.ReactCurrentBatchConfig, Rr = !0;
  function rc(e, t, n, r) {
    var l = H, i = cn.transition;
    cn.transition = null;
    try {
      H = 1, Zl(e, t, n, r);
    } finally {
      H = l, cn.transition = i;
    }
  }
  function lc(e, t, n, r) {
    var l = H, i = cn.transition;
    cn.transition = null;
    try {
      H = 4, Zl(e, t, n, r);
    } finally {
      H = l, cn.transition = i;
    }
  }
  function Zl(e, t, n, r) {
    if (Rr) {
      var l = Jl(e, t, n, r);
      if (l === null) mi(e, t, r, Lr, n), su(e, r);
      else if (tc(l, e, t, n, r)) r.stopPropagation();
      else if (su(e, r), t & 4 && -1 < ec.indexOf(e)) {
        for (; l !== null; ) {
          var i = rr(l);
          if (i !== null && lu(i), i = Jl(e, t, n, r), i === null && mi(e, t, r, Lr, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Lr = null;
  function Jl(e, t, n, r) {
    if (Lr = null, e = Al(r), e = Xt(e), e !== null) if (t = Yt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Xo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Lr = e, null;
  }
  function fu(e) {
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
        switch (Qa()) {
          case Wl:
            return 1;
          case eu:
            return 4;
          case _r:
          case Ka:
            return 16;
          case tu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null, ql = null, Mr = null;
  function du() {
    if (Mr) return Mr;
    var e, t = ql, n = t.length, r, l = "value" in Rt ? Rt.value : Rt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Or(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function pu() {
    return !1;
  }
  function Ae(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ir : pu, this.isPropagationStopped = pu, this;
    }
    return C(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
    }, persist: function() {
    }, isPersistent: Ir }), t;
  }
  var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bl = Ae(fn), Kn = C({}, fn, { view: 0, detail: 0 }), ic = Ae(Kn), ei, ti, Yn, Dr = C({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ri, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (ei = e.screenX - Yn.screenX, ti = e.screenY - Yn.screenY) : ti = ei = 0, Yn = e), ei);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ti;
  } }), mu = Ae(Dr), oc = C({}, Dr, { dataTransfer: 0 }), uc = Ae(oc), sc = C({}, Kn, { relatedTarget: 0 }), ni = Ae(sc), ac = C({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cc = Ae(ac), fc = C({}, fn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), dc = Ae(fc), pc = C({}, fn, { data: 0 }), hu = Ae(pc), mc = {
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
  }, hc = {
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
  }, vc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vc[e]) ? !!t[e] : !1;
  }
  function ri() {
    return yc;
  }
  var gc = C({}, Kn, { key: function(e) {
    if (e.key) {
      var t = mc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ri, charCode: function(e) {
    return e.type === "keypress" ? Or(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), wc = Ae(gc), xc = C({}, Dr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vu = Ae(xc), kc = C({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ri }), Sc = Ae(kc), Ec = C({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _c = Ae(Ec), Cc = C({}, Dr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nc = Ae(Cc), zc = [9, 13, 27, 32], li = ae && "CompositionEvent" in window, Xn = null;
  ae && "documentMode" in document && (Xn = document.documentMode);
  var Pc = ae && "TextEvent" in window && !Xn, yu = ae && (!li || Xn && 8 < Xn && 11 >= Xn), gu = " ", wu = !1;
  function xu(e, t) {
    switch (e) {
      case "keyup":
        return zc.indexOf(t.keyCode) !== -1;
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
  function ku(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dn = !1;
  function jc(e, t) {
    switch (e) {
      case "compositionend":
        return ku(t);
      case "keypress":
        return t.which !== 32 ? null : (wu = !0, gu);
      case "textInput":
        return e = t.data, e === gu && wu ? null : e;
      default:
        return null;
    }
  }
  function Tc(e, t) {
    if (dn) return e === "compositionend" || !li && xu(e, t) ? (e = du(), Mr = ql = Rt = null, dn = !1, e) : null;
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
        return yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rc[e.type] : t === "textarea";
  }
  function Eu(e, t, n, r) {
    $o(r), t = Vr(t, "onChange"), 0 < t.length && (n = new bl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gn = null, Zn = null;
  function Lc(e) {
    Vu(e, 0);
  }
  function Fr(e) {
    var t = yn(e);
    if (Ro(t)) return e;
  }
  function Mc(e, t) {
    if (e === "change") return t;
  }
  var _u = !1;
  if (ae) {
    var ii;
    if (ae) {
      var oi = "oninput" in document;
      if (!oi) {
        var Cu = document.createElement("div");
        Cu.setAttribute("oninput", "return;"), oi = typeof Cu.oninput == "function";
      }
      ii = oi;
    } else ii = !1;
    _u = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function Nu() {
    Gn && (Gn.detachEvent("onpropertychange", zu), Zn = Gn = null);
  }
  function zu(e) {
    if (e.propertyName === "value" && Fr(Zn)) {
      var t = [];
      Eu(t, Zn, e, Al(e)), Yo(Lc, t);
    }
  }
  function Oc(e, t, n) {
    e === "focusin" ? (Nu(), Gn = t, Zn = n, Gn.attachEvent("onpropertychange", zu)) : e === "focusout" && Nu();
  }
  function Ic(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Zn);
  }
  function Dc(e, t) {
    if (e === "click") return Fr(t);
  }
  function Fc(e, t) {
    if (e === "input" || e === "change") return Fr(t);
  }
  function Uc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var nt = typeof Object.is == "function" ? Object.is : Uc;
  function Jn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!$.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Pu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ju(e, t) {
    var n = Pu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
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
      n = Pu(n);
    }
  }
  function Tu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ru() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ac(e) {
    var t = Ru(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Tu(n.ownerDocument.documentElement, n)) {
      if (r !== null && ui(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ju(n, i);
          var o = ju(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Bc = ae && "documentMode" in document && 11 >= document.documentMode, pn = null, si = null, qn = null, ai = !1;
  function Lu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ai || pn == null || pn !== xr(r) || (r = pn, "selectionStart" in r && ui(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qn && Jn(qn, r) || (qn = r, r = Vr(si, "onSelect"), 0 < r.length && (t = new bl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
  }
  function Ur(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var mn = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, ci = {}, Mu = {};
  ae && (Mu = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
  function Ar(e) {
    if (ci[e]) return ci[e];
    if (!mn[e]) return e;
    var t = mn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mu) return ci[e] = t[n];
    return e;
  }
  var Ou = Ar("animationend"), Iu = Ar("animationiteration"), Du = Ar("animationstart"), Fu = Ar("transitionend"), Uu = /* @__PURE__ */ new Map(), Au = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Lt(e, t) {
    Uu.set(e, t), re(t, [e]);
  }
  for (var fi = 0; fi < Au.length; fi++) {
    var di = Au[fi], Vc = di.toLowerCase(), Hc = di[0].toUpperCase() + di.slice(1);
    Lt(Vc, "on" + Hc);
  }
  Lt(Ou, "onAnimationEnd"), Lt(Iu, "onAnimationIteration"), Lt(Du, "onAnimationStart"), Lt("dblclick", "onDoubleClick"), Lt("focusin", "onFocus"), Lt("focusout", "onBlur"), Lt(Fu, "onTransitionEnd"), le("onMouseEnter", ["mouseout", "mouseover"]), le("onMouseLeave", ["mouseout", "mouseover"]), le("onPointerEnter", ["pointerout", "pointerover"]), le("onPointerLeave", ["pointerout", "pointerover"]), re("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), re("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), re("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), re("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), re("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $c = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Bu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Va(r, t, void 0, e), e.currentTarget = null;
  }
  function Vu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], s = u.instance, p = u.currentTarget;
          if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
          Bu(l, u, p), i = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (u = r[o], s = u.instance, p = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
          Bu(l, u, p), i = s;
        }
      }
    }
    if (Er) throw e = $l, Er = !1, $l = null, e;
  }
  function X(e, t) {
    var n = t[xi];
    n === void 0 && (n = t[xi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Hu(t, e, 2, !1), n.add(r));
  }
  function pi(e, t, n) {
    var r = 0;
    t && (r |= 4), Hu(n, e, r, t);
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Br]) {
      e[Br] = !0, fe.forEach(function(n) {
        n !== "selectionchange" && ($c.has(n) || pi(n, !1, e), pi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || (t[Br] = !0, pi("selectionchange", !1, t));
    }
  }
  function Hu(e, t, n, r) {
    switch (fu(t)) {
      case 1:
        var l = rc;
        break;
      case 4:
        l = lc;
        break;
      default:
        l = Zl;
    }
    n = l.bind(null, t, n, e), l = void 0, !Hl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function mi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; u !== null; ) {
          if (o = Xt(u), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Yo(function() {
      var p = i, y = Al(n), g = [];
      e: {
        var h = Uu.get(e);
        if (h !== void 0) {
          var E = bl, N = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = wc;
              break;
            case "focusin":
              N = "focus", E = ni;
              break;
            case "focusout":
              N = "blur", E = ni;
              break;
            case "beforeblur":
            case "afterblur":
              E = ni;
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
              E = mu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = uc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Sc;
              break;
            case Ou:
            case Iu:
            case Du:
              E = cc;
              break;
            case Fu:
              E = _c;
              break;
            case "scroll":
              E = ic;
              break;
            case "wheel":
              E = Nc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = dc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = vu;
          }
          var z = (t & 4) !== 0, se = !z && e === "scroll", f = z ? h !== null ? h + "Capture" : null : h;
          z = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Dn(a, f), w != null && z.push(tr(a, w, d)))), se) break;
            a = a.return;
          }
          0 < z.length && (h = new E(h, N, null, n, y), g.push({ event: h, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && n !== Ul && (N = n.relatedTarget || n.fromElement) && (Xt(N) || N[gt])) break e;
          if ((E || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (N = n.relatedTarget || n.toElement, E = p, N = N ? Xt(N) : null, N !== null && (se = Yt(N), N !== se || N.tag !== 5 && N.tag !== 6) && (N = null)) : (E = null, N = p), E !== N)) {
            if (z = mu, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (z = vu, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), se = E == null ? h : yn(E), d = N == null ? h : yn(N), h = new z(w, a + "leave", E, n, y), h.target = se, h.relatedTarget = d, w = null, Xt(y) === p && (z = new z(f, a + "enter", N, n, y), z.target = d, z.relatedTarget = se, w = z), se = w, E && N) t: {
              for (z = E, f = N, a = 0, d = z; d; d = hn(d)) a++;
              for (d = 0, w = f; w; w = hn(w)) d++;
              for (; 0 < a - d; ) z = hn(z), a--;
              for (; 0 < d - a; ) f = hn(f), d--;
              for (; a--; ) {
                if (z === f || f !== null && z === f.alternate) break t;
                z = hn(z), f = hn(f);
              }
              z = null;
            }
            else z = null;
            E !== null && $u(g, h, E, z, !1), N !== null && se !== null && $u(g, se, N, z, !0);
          }
        }
        e: {
          if (h = p ? yn(p) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var P = Mc;
          else if (Su(h)) if (_u) P = Fc;
          else {
            P = Ic;
            var j = Oc;
          }
          else (E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Dc);
          if (P && (P = P(e, p))) {
            Eu(g, P, n, y);
            break e;
          }
          j && j(e, h, p), e === "focusout" && (j = h._wrapperState) && j.controlled && h.type === "number" && Ml(h, "number", h.value);
        }
        switch (j = p ? yn(p) : window, e) {
          case "focusin":
            (Su(j) || j.contentEditable === "true") && (pn = j, si = p, qn = null);
            break;
          case "focusout":
            qn = si = pn = null;
            break;
          case "mousedown":
            ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ai = !1, Lu(g, n, y);
            break;
          case "selectionchange":
            if (Bc) break;
          case "keydown":
          case "keyup":
            Lu(g, n, y);
        }
        var T;
        if (li) e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
        else dn ? xu(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
        L && (yu && n.locale !== "ko" && (dn || L !== "onCompositionStart" ? L === "onCompositionEnd" && dn && (T = du()) : (Rt = y, ql = "value" in Rt ? Rt.value : Rt.textContent, dn = !0)), j = Vr(p, L), 0 < j.length && (L = new hu(L, e, null, n, y), g.push({ event: L, listeners: j }), T ? L.data = T : (T = ku(n), T !== null && (L.data = T)))), (T = Pc ? jc(e, n) : Tc(e, n)) && (p = Vr(p, "onBeforeInput"), 0 < p.length && (y = new hu("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: p }), y.data = T));
      }
      Vu(g, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Dn(e, n), i != null && r.unshift(tr(e, i, l)), i = Dn(e, t), i != null && r.push(tr(e, i, l))), e = e.return;
    }
    return r;
  }
  function hn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $u(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n, s = u.alternate, p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && p !== null && (u = p, l ? (s = Dn(n, i), s != null && o.unshift(tr(n, s, u))) : l || (s = Dn(n, i), s != null && o.push(tr(n, s, u)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Wc = /\r\n?/g, Qc = /\u0000|\uFFFD/g;
  function Wu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wc, `
`).replace(Qc, "");
  }
  function Hr(e, t, n) {
    if (t = Wu(t), Wu(e) !== t && n) throw Error(m(425));
  }
  function $r() {
  }
  var hi = null, vi = null;
  function yi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gi = typeof setTimeout == "function" ? setTimeout : void 0, Kc = typeof clearTimeout == "function" ? clearTimeout : void 0, Qu = typeof Promise == "function" ? Promise : void 0, Yc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qu < "u" ? function(e) {
    return Qu.resolve(null).then(e).catch(Xc);
  } : gi;
  function Xc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Mt(e) {
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
  function Ku(e) {
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
  var vn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + vn, nr = "__reactProps$" + vn, gt = "__reactContainer$" + vn, xi = "__reactEvents$" + vn, Gc = "__reactListeners$" + vn, Zc = "__reactHandles$" + vn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[gt] || n[dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ku(e); e !== null; ) {
          if (n = e[dt]) return n;
          e = Ku(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[dt] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var ki = [], gn = -1;
  function Ot(e) {
    return { current: e };
  }
  function G(e) {
    0 > gn || (e.current = ki[gn], ki[gn] = null, gn--);
  }
  function Y(e, t) {
    gn++, ki[gn] = e.current, e.current = t;
  }
  var It = {}, ke = Ot(It), Re = Ot(!1), Gt = It;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Le(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    G(Re), G(ke);
  }
  function Yu(e, t, n) {
    if (ke.current !== It) throw Error(m(168));
    Y(ke, t), Y(Re, n);
  }
  function Xu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, K(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Gt = ke.current, Y(ke, e), Y(Re, Re.current), !0;
  }
  function Gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n ? (e = Xu(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, G(Re), G(ke), Y(ke, e)) : G(Re), Y(Re, n);
  }
  var wt = null, Yr = !1, Si = !1;
  function Zu(e) {
    wt === null ? wt = [e] : wt.push(e);
  }
  function Jc(e) {
    Yr = !0, Zu(e);
  }
  function Dt() {
    if (!Si && wt !== null) {
      Si = !0;
      var e = 0, t = H;
      try {
        var n = wt;
        for (H = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        wt = null, Yr = !1;
      } catch (l) {
        throw wt !== null && (wt = wt.slice(e + 1)), qo(Wl, Dt), l;
      } finally {
        H = t, Si = !1;
      }
    }
    return null;
  }
  var xn = [], kn = 0, Xr = null, Gr = 0, Ke = [], Ye = 0, Zt = null, xt = 1, kt = "";
  function Jt(e, t) {
    xn[kn++] = Gr, xn[kn++] = Xr, Xr = e, Gr = t;
  }
  function Ju(e, t, n) {
    Ke[Ye++] = xt, Ke[Ye++] = kt, Ke[Ye++] = Zt, Zt = e;
    var r = xt;
    e = kt;
    var l = 32 - tt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, xt = 1 << 32 - tt(t) + l | n << l | r, kt = i + e;
    } else xt = 1 << i | n << l | r, kt = e;
  }
  function Ei(e) {
    e.return !== null && (Jt(e, 1), Ju(e, 1, 0));
  }
  function _i(e) {
    for (; e === Xr; ) Xr = xn[--kn], xn[kn] = null, Gr = xn[--kn], xn[kn] = null;
    for (; e === Zt; ) Zt = Ke[--Ye], Ke[Ye] = null, kt = Ke[--Ye], Ke[Ye] = null, xt = Ke[--Ye], Ke[Ye] = null;
  }
  var Be = null, Ve = null, b = !1, rt = null;
  function qu(e, t) {
    var n = Je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function bu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Ve = Mt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Ve = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: xt, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ni(e) {
    if (b) {
      var t = Ve;
      if (t) {
        var n = t;
        if (!bu(e, t)) {
          if (Ci(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = Be;
          t && bu(e, t) ? qu(r, n) : (e.flags = e.flags & -4097 | 2, b = !1, Be = e);
        }
      } else {
        if (Ci(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, b = !1, Be = e;
      }
    }
  }
  function es(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Be = e;
  }
  function Zr(e) {
    if (e !== Be) return !1;
    if (!b) return es(e), b = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps)), t && (t = Ve)) {
      if (Ci(e)) throw ts(), Error(m(418));
      for (; t; ) qu(e, t), t = Mt(t.nextSibling);
    }
    if (es(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ve = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Be ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = Ve; e; ) e = Mt(e.nextSibling);
  }
  function Sn() {
    Ve = Be = null, b = !1;
  }
  function zi(e) {
    rt === null ? rt = [e] : rt.push(e);
  }
  var qc = xe.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var u = l.refs;
          o === null ? delete u[i] : u[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ns(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rs(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Wt(f, a), f.index = 0, f.sibling = null, f;
    }
    function i(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = wo(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === je ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Te && ns(P) === a.type) ? (w = l(a, d.props), w.ref = lr(f, a, d), w.return = f, w) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = xo(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7 ? (a = on(d, f.mode, w, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = wo("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case Ne:
            return a = xo(a, f.mode, d), a.return = f, a;
          case Te:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Mn(a) || R(a)) return a = on(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : u(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === P ? s(f, a, d, w) : null;
          case Ne:
            return d.key === P ? p(f, a, d, w) : null;
          case Te:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              w
            );
        }
        if (Mn(d) || R(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, u(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, P);
          case Ne:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, P);
          case Te:
            var j = w._init;
            return E(f, a, d, j(w._payload), P);
        }
        if (Mn(w) || R(w)) return f = f.get(d) || null, y(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function N(f, a, d, w) {
      for (var P = null, j = null, T = a, L = a = 0, ve = null; T !== null && L < d.length; L++) {
        T.index > L ? (ve = T, T = null) : ve = T.sibling;
        var B = h(f, T, d[L], w);
        if (B === null) {
          T === null && (T = ve);
          break;
        }
        e && T && B.alternate === null && t(f, T), a = i(B, a, L), j === null ? P = B : j.sibling = B, j = B, T = ve;
      }
      if (L === d.length) return n(f, T), b && Jt(f, L), P;
      if (T === null) {
        for (; L < d.length; L++) T = g(f, d[L], w), T !== null && (a = i(T, a, L), j === null ? P = T : j.sibling = T, j = T);
        return b && Jt(f, L), P;
      }
      for (T = r(f, T); L < d.length; L++) ve = E(T, f, L, d[L], w), ve !== null && (e && ve.alternate !== null && T.delete(ve.key === null ? L : ve.key), a = i(ve, a, L), j === null ? P = ve : j.sibling = ve, j = ve);
      return e && T.forEach(function(Qt) {
        return t(f, Qt);
      }), b && Jt(f, L), P;
    }
    function z(f, a, d, w) {
      var P = R(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var j = P = null, T = a, L = a = 0, ve = null, B = d.next(); T !== null && !B.done; L++, B = d.next()) {
        T.index > L ? (ve = T, T = null) : ve = T.sibling;
        var Qt = h(f, T, B.value, w);
        if (Qt === null) {
          T === null && (T = ve);
          break;
        }
        e && T && Qt.alternate === null && t(f, T), a = i(Qt, a, L), j === null ? P = Qt : j.sibling = Qt, j = Qt, T = ve;
      }
      if (B.done) return n(
        f,
        T
      ), b && Jt(f, L), P;
      if (T === null) {
        for (; !B.done; L++, B = d.next()) B = g(f, B.value, w), B !== null && (a = i(B, a, L), j === null ? P = B : j.sibling = B, j = B);
        return b && Jt(f, L), P;
      }
      for (T = r(f, T); !B.done; L++, B = d.next()) B = E(T, f, L, B.value, w), B !== null && (e && B.alternate !== null && T.delete(B.key === null ? L : B.key), a = i(B, a, L), j === null ? P = B : j.sibling = B, j = B);
      return e && T.forEach(function(Lf) {
        return t(f, Lf);
      }), b && Jt(f, L), P;
    }
    function se(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === je && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var P = d.key, j = a; j !== null; ) {
                if (j.key === P) {
                  if (P = d.type, P === je) {
                    if (j.tag === 7) {
                      n(f, j.sibling), a = l(j, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (j.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Te && ns(P) === j.type) {
                    n(f, j.sibling), a = l(j, d.props), a.ref = lr(f, j, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, j);
                  break;
                } else t(f, j);
                j = j.sibling;
              }
              d.type === je ? (a = on(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case Ne:
            e: {
              for (j = d.key; a !== null; ) {
                if (a.key === j) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = xo(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case Te:
            return j = d._init, se(f, a, j(d._payload), w);
        }
        if (Mn(d)) return N(f, a, d, w);
        if (R(d)) return z(f, a, d, w);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = wo(d, f.mode, w), a.return = f, f = a), o(f)) : n(f, a);
    }
    return se;
  }
  var En = rs(!0), ls = rs(!1), qr = Ot(null), br = null, _n = null, Pi = null;
  function ji() {
    Pi = _n = br = null;
  }
  function Ti(e) {
    var t = qr.current;
    G(qr), e._currentValue = t;
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Cn(e, t) {
    br = e, Pi = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Me = !0), e.firstContext = null);
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Pi !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
      if (br === null) throw Error(m(308));
      _n = e, br.dependencies = { lanes: 0, firstContext: e };
    } else _n = _n.next = e;
    return t;
  }
  var qt = null;
  function Li(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  function is(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, St(e, r);
  }
  function St(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ft = !1;
  function Mi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function os(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Et(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (F & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, St(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, St(e, n);
  }
  function el(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Yl(e, n);
    }
  }
  function us(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, p = s.next;
      s.next = null, o === null ? i = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== o && (u === null ? y.firstBaseUpdate = p : u.next = p, y.lastBaseUpdate = s));
    }
    if (i !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, u = i;
      do {
        var h = u.lane, E = u.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var N = e, z = u;
            switch (h = t, E = n, z.tag) {
              case 1:
                if (N = z.payload, typeof N == "function") {
                  g = N.call(E, g, h);
                  break e;
                }
                g = N;
                break e;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = z.payload, h = typeof N == "function" ? N.call(E, g, h) : N, h == null) break e;
                g = C({}, g, h);
                break e;
              case 2:
                Ft = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
        } else E = { eventTime: E, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (p = y = E, s = g) : y = y.next = E, o |= h;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      tn |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function ss(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var ir = {}, pt = Ot(ir), or = Ot(ir), ur = Ot(ir);
  function bt(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Oi(e, t) {
    switch (Y(ur, t), Y(or, e), Y(pt, ir), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Il(t, e);
    }
    G(pt), Y(pt, t);
  }
  function Nn() {
    G(pt), G(or), G(ur);
  }
  function as(e) {
    bt(ur.current);
    var t = bt(pt.current), n = Il(t, e.type);
    t !== n && (Y(or, e), Y(pt, n));
  }
  function Ii(e) {
    or.current === e && (G(pt), G(or));
  }
  var te = Ot(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
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
  var Di = [];
  function Fi() {
    for (var e = 0; e < Di.length; e++) Di[e]._workInProgressVersionPrimary = null;
    Di.length = 0;
  }
  var rl = xe.ReactCurrentDispatcher, Ui = xe.ReactCurrentBatchConfig, en = 0, ne = null, de = null, me = null, ll = !1, sr = !1, ar = 0, bc = 0;
  function Se() {
    throw Error(m(321));
  }
  function Ai(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Bi(e, t, n, r, l, i) {
    if (en = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? rf : lf, e = n(r, l), sr) {
      i = 0;
      do {
        if (sr = !1, ar = 0, 25 <= i) throw Error(m(301));
        i += 1, me = de = null, t.updateQueue = null, rl.current = of, e = n(r, l);
      } while (sr);
    }
    if (rl.current = ul, t = de !== null && de.next !== null, en = 0, me = de = ne = null, ll = !1, t) throw Error(m(300));
    return e;
  }
  function Vi() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return me === null ? ne.memoizedState = me = e : me = me.next = e, me;
  }
  function Ge() {
    if (de === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = me === null ? ne.memoizedState : me.next;
    if (t !== null) me = t, de = e;
    else {
      if (e === null) throw Error(m(310));
      de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? ne.memoizedState = me = e : me = me.next = e;
    }
    return me;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hi(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var u = o = null, s = null, p = i;
      do {
        var y = p.lane;
        if ((en & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (u = s = g, o = r) : s = s.next = g, ne.lanes |= y, tn |= y;
        }
        p = p.next;
      } while (p !== null && p !== i);
      s === null ? o = r : s.next = u, nt(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, ne.lanes |= i, tn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $i(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      nt(i, t.memoizedState) || (Me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function cs() {
  }
  function fs(e, t) {
    var n = ne, r = Ge(), l = t(), i = !nt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Me = !0), r = r.queue, Wi(ms.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || me !== null && me.memoizedState.tag & 1) {
      if (n.flags |= 2048, fr(9, ps.bind(null, n, r, l, t), void 0, null), he === null) throw Error(m(349));
      (en & 30) !== 0 || ds(n, t, l);
    }
    return l;
  }
  function ds(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ps(e, t, n, r) {
    t.value = n, t.getSnapshot = r, hs(t) && vs(e);
  }
  function ms(e, t, n) {
    return n(function() {
      hs(t) && vs(e);
    });
  }
  function hs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = St(e, 1);
    t !== null && ut(t, e, 1, -1);
  }
  function ys(e) {
    var t = mt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = nf.bind(null, ne, e), [t.memoizedState, e];
  }
  function fr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function gs() {
    return Ge().memoizedState;
  }
  function il(e, t, n, r) {
    var l = mt();
    ne.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ol(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var o = de.memoizedState;
      if (i = o.destroy, r !== null && Ai(r, o.deps)) {
        l.memoizedState = fr(t, n, i, r);
        return;
      }
    }
    ne.flags |= e, l.memoizedState = fr(1 | t, n, i, r);
  }
  function ws(e, t) {
    return il(8390656, 8, e, t);
  }
  function Wi(e, t) {
    return ol(2048, 8, e, t);
  }
  function xs(e, t) {
    return ol(4, 2, e, t);
  }
  function ks(e, t) {
    return ol(4, 4, e, t);
  }
  function Ss(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Es(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(4, 4, Ss.bind(null, t, e), n);
  }
  function Qi() {
  }
  function _s(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ai(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Cs(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ai(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ns(e, t, n) {
    return (en & 21) === 0 ? (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n) : (nt(n, t) || (n = nu(), ne.lanes |= n, tn |= n, e.baseState = !0), t);
  }
  function ef(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ui.transition;
    Ui.transition = {};
    try {
      e(!1), t();
    } finally {
      H = n, Ui.transition = r;
    }
  }
  function zs() {
    return Ge().memoizedState;
  }
  function tf(e, t, n) {
    var r = Ht(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ps(e)) js(t, n);
    else if (n = is(e, t, n, r), n !== null) {
      var l = Pe();
      ut(n, e, r, l), Ts(n, t, r);
    }
  }
  function nf(e, t, n) {
    var r = Ht(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ps(e)) js(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, u = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = u, nt(u, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Li(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = is(e, t, l, r), n !== null && (l = Pe(), ut(n, e, r, l), Ts(n, t, r));
    }
  }
  function Ps(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne;
  }
  function js(e, t) {
    sr = ll = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ts(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Yl(e, n);
    }
  }
  var ul = { readContext: Xe, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, rf = { readContext: Xe, useCallback: function(e, t) {
    return mt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Xe, useEffect: ws, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, il(
      4194308,
      4,
      Ss.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return il(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return il(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = mt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = mt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = tf.bind(null, ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = mt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ys, useDebugValue: Qi, useDeferredValue: function(e) {
    return mt().memoizedState = e;
  }, useTransition: function() {
    var e = ys(!1), t = e[0];
    return e = ef.bind(null, e[1]), mt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ne, l = mt();
    if (b) {
      if (n === void 0) throw Error(m(407));
      n = n();
    } else {
      if (n = t(), he === null) throw Error(m(349));
      (en & 30) !== 0 || ds(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, ws(ms.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, fr(9, ps.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = mt(), t = he.identifierPrefix;
    if (b) {
      var n = kt, r = xt;
      n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = bc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, lf = {
    readContext: Xe,
    useCallback: _s,
    useContext: Xe,
    useEffect: Wi,
    useImperativeHandle: Es,
    useInsertionEffect: xs,
    useLayoutEffect: ks,
    useMemo: Cs,
    useReducer: Hi,
    useRef: gs,
    useState: function() {
      return Hi(cr);
    },
    useDebugValue: Qi,
    useDeferredValue: function(e) {
      var t = Ge();
      return Ns(t, de.memoizedState, e);
    },
    useTransition: function() {
      var e = Hi(cr)[0], t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: cs,
    useSyncExternalStore: fs,
    useId: zs,
    unstable_isNewReconciler: !1
  }, of = { readContext: Xe, useCallback: _s, useContext: Xe, useEffect: Wi, useImperativeHandle: Es, useInsertionEffect: xs, useLayoutEffect: ks, useMemo: Cs, useReducer: $i, useRef: gs, useState: function() {
    return $i(cr);
  }, useDebugValue: Qi, useDeferredValue: function(e) {
    var t = Ge();
    return de === null ? t.memoizedState = e : Ns(t, de.memoizedState, e);
  }, useTransition: function() {
    var e = $i(cr)[0], t = Ge().memoizedState;
    return [e, t];
  }, useMutableSource: cs, useSyncExternalStore: fs, useId: zs, unstable_isNewReconciler: !1 };
  function lt(e, t) {
    if (e && e.defaultProps) {
      t = C({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ki(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Yt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Pe(), l = Ht(e), i = Et(r, l);
    i.payload = t, n != null && (i.callback = n), t = Ut(e, i, l), t !== null && (ut(t, e, l, r), el(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Pe(), l = Ht(e), i = Et(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ut(e, i, l), t !== null && (ut(t, e, l, r), el(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Pe(), r = Ht(e), l = Et(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Ut(e, l, r), t !== null && (ut(t, e, r, n), el(t, e, r));
  } };
  function Rs(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, i) : !0;
  }
  function Ls(e, t, n) {
    var r = !1, l = It, i = t.contextType;
    return typeof i == "object" && i !== null ? i = Xe(i) : (l = Le(t) ? Gt : ke.current, r = t.contextTypes, i = (r = r != null) ? wn(e, l) : It), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Ms(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Yi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Mi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Xe(i) : (i = Le(t) ? Gt : ke.current, l.context = wn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ki(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && sl.enqueueReplaceState(l, l.state, null), tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += U(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var uf = typeof WeakMap == "function" ? WeakMap : Map;
  function Os(e, t, n) {
    n = Et(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      hl || (hl = !0, co = r), Gi(e, t);
    }, n;
  }
  function Is(e, t, n) {
    n = Et(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Gi(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Gi(e, t), typeof r != "function" && (Bt === null ? Bt = /* @__PURE__ */ new Set([this]) : Bt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Ds(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new uf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = kf.bind(null, e, t, n), t.then(e, e));
  }
  function Fs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Us(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var sf = xe.ReactCurrentOwner, Me = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? ls(t, null, n, r) : En(t, e.child, n, r);
  }
  function As(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Cn(t, l), r = Bi(e, t, n, r, i, l), n = Vi(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (b && n && Ei(t), t.flags |= 1, ze(e, t, r, l), t.child);
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !go(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Vs(e, t, i, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jn, n(o, r) && e.ref === t.ref) return _t(e, t, l);
    }
    return t.flags |= 1, e = Wt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Vs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Jn(i, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Me = !0);
      else return t.lanes = e.lanes, _t(e, t, l);
    }
    return Zi(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(jn, He), He |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(jn, He), He |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(jn, He), He |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(jn, He), He |= r;
    return ze(e, t, l, n), t.child;
  }
  function $s(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Zi(e, t, n, r, l) {
    var i = Le(n) ? Gt : ke.current;
    return i = wn(t, i), Cn(t, l), n = Bi(e, t, n, r, i, l), r = Vi(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (b && r && Ei(t), t.flags |= 1, ze(e, t, n, l), t.child);
  }
  function Ws(e, t, n, r, l) {
    if (Le(n)) {
      var i = !0;
      Kr(t);
    } else i = !1;
    if (Cn(t, l), t.stateNode === null) cl(e, t), Ls(t, n, r), Yi(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, u = t.memoizedProps;
      o.props = u;
      var s = o.context, p = n.contextType;
      typeof p == "object" && p !== null ? p = Xe(p) : (p = Le(n) ? Gt : ke.current, p = wn(t, p));
      var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== p) && Ms(t, o, r, p), Ft = !1;
      var h = t.memoizedState;
      o.state = h, tl(t, r, o, l), s = t.memoizedState, u !== r || h !== s || Re.current || Ft ? (typeof y == "function" && (Ki(t, n, y, r), s = t.memoizedState), (u = Ft || Rs(t, n, u, r, h, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = p, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, os(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : lt(t.type, u), o.props = p, g = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Le(n) ? Gt : ke.current, s = wn(t, s));
      var E = n.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== g || h !== s) && Ms(t, o, r, s), Ft = !1, h = t.memoizedState, o.state = h, tl(t, r, o, l);
      var N = t.memoizedState;
      u !== g || h !== N || Re.current || Ft ? (typeof E == "function" && (Ki(t, n, E, r), N = t.memoizedState), (p = Ft || Rs(t, n, p, r, h, N, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, N, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, N, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), o.props = r, o.state = N, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ji(e, t, n, r, i, l);
  }
  function Ji(e, t, n, r, l, i) {
    $s(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Gu(t, n, !1), _t(e, t, i);
    r = t.stateNode, sf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = En(t, e.child, null, i), t.child = En(t, null, u, i)) : ze(e, t, u, i), t.memoizedState = r.state, l && Gu(t, n, !0), t.child;
  }
  function Qs(e) {
    var t = e.stateNode;
    t.pendingContext ? Yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yu(e, t.context, !1), Oi(e, t.containerInfo);
  }
  function Ks(e, t, n, r, l) {
    return Sn(), zi(l), t.flags |= 256, ze(e, t, n, r), t.child;
  }
  var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, t, n) {
    var r = t.pendingProps, l = te.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Y(te, l & 1), e === null)
      return Ni(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Sl(o, r, 0, null), e = on(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = bi(n), t.memoizedState = qi, e) : eo(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return af(e, t, o, r, u, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Wt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Wt(u, i) : (i = on(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? bi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
    }
    return i = e.child, e = i.sibling, r = Wt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function eo(e, t) {
    return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function al(e, t, n, r) {
    return r !== null && zi(r), En(t, e.child, null, n), e = eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function af(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Xi(Error(m(422))), al(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), i = on(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && En(t, e.child, null, o), t.child.memoizedState = bi(o), t.memoizedState = qi, i);
    if ((t.mode & 1) === 0) return al(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, i = Error(m(419)), r = Xi(i, r, void 0), al(e, t, o, r);
    }
    if (u = (o & e.childLanes) !== 0, Me || u) {
      if (r = he, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, St(e, l), ut(r, e, l, -1));
      }
      return yo(), r = Xi(Error(m(421))), al(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ve = Mt(l.nextSibling), Be = t, b = !0, rt = null, e !== null && (Ke[Ye++] = xt, Ke[Ye++] = kt, Ke[Ye++] = Zt, xt = e.id, kt = e.overflow, Zt = t), t = eo(t, r.children), t.flags |= 4096, t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ri(e.return, t, n);
  }
  function to(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function Gs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (ze(e, t, r.children, n), r = te.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
        else if (e.tag === 19) Xs(e, n, t);
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
      r &= 1;
    }
    if (Y(te, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), to(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        to(t, !0, n, null, i);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function cl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function _t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Wt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function cf(e, t, n) {
    switch (t.tag) {
      case 3:
        Qs(t), Sn();
        break;
      case 5:
        as(t);
        break;
      case 1:
        Le(t.type) && Kr(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        Y(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Y(te, te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ys(e, t, n) : (Y(te, te.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
        Y(te, te.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Gs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Y(te, te.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Hs(e, t, n);
    }
    return _t(e, t, n);
  }
  var Zs, no, Js, qs;
  Zs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, no = function() {
  }, Js = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, bt(pt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Rl(e, l), r = Rl(e, r), i = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      Dl(n, r);
      var o;
      n = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var u = l[p];
        for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Q.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (u = l?.[p], r.hasOwnProperty(p) && s !== u && (s != null || u != null)) if (p === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (i || (i = []), i.push(
          p,
          n
        )), n = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Q.hasOwnProperty(p) ? (s != null && p === "onScroll" && X("scroll", e), i || u === s || (i = [])) : (i = i || []).push(p, s));
      }
      n && (i = i || []).push("style", n);
      var p = i;
      (t.updateQueue = p) && (t.flags |= 4);
    }
  }, qs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function dr(e, t) {
    if (!b) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function ff(e, t, n) {
    var r = t.pendingProps;
    switch (_i(t), t.tag) {
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
        return Ee(t), null;
      case 1:
        return Le(t.type) && Qr(), Ee(t), null;
      case 3:
        return r = t.stateNode, Nn(), G(Re), G(ke), Fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rt !== null && (mo(rt), rt = null))), no(e, t), Ee(t), null;
      case 5:
        Ii(t);
        var l = bt(ur.current);
        if (n = t.type, e !== null && t.stateNode != null) Js(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return Ee(t), null;
          }
          if (e = bt(pt.current), Zr(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[dt] = t, r[nr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                X("cancel", r), X("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) X(bn[l], r);
                break;
              case "source":
                X("error", r);
                break;
              case "img":
              case "image":
              case "link":
                X(
                  "error",
                  r
                ), X("load", r);
                break;
              case "details":
                X("toggle", r);
                break;
              case "input":
                Lo(r, i), X("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, X("invalid", r);
                break;
              case "textarea":
                Io(r, i), X("invalid", r);
            }
            Dl(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Q.hasOwnProperty(o) && u != null && o === "onScroll" && X("scroll", r);
            }
            switch (n) {
              case "input":
                wr(r), Oo(r, i, !0);
                break;
              case "textarea":
                wr(r), Fo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $r);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[dt] = t, e[nr] = r, Zs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Fl(n, r), n) {
                case "dialog":
                  X("cancel", e), X("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  X("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) X(bn[l], e);
                  l = r;
                  break;
                case "source":
                  X("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  X(
                    "error",
                    e
                  ), X("load", e), l = r;
                  break;
                case "details":
                  X("toggle", e), l = r;
                  break;
                case "input":
                  Lo(e, r), l = Rl(e, r), X("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), X("invalid", e);
                  break;
                case "textarea":
                  Io(e, r), l = Ol(e, r), X("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(n, l), u = l;
              for (i in u) if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? Vo(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ao(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && On(e, s) : typeof s == "number" && On(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Q.hasOwnProperty(i) ? s != null && i === "onScroll" && X("scroll", e) : s != null && qe(e, i, s, o));
              }
              switch (n) {
                case "input":
                  wr(e), Oo(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Fo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + V(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? un(e, !!r.multiple, i, !1) : r.defaultValue != null && un(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
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
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ee(t), null;
      case 6:
        if (e && t.stateNode != null) qs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (n = bt(ur.current), bt(pt.current), Zr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (i = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r;
        }
        return Ee(t), null;
      case 13:
        if (G(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (b && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ts(), Sn(), t.flags |= 98560, i = !1;
          else if (i = Zr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(m(317));
              i[dt] = t;
            } else Sn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ee(t), i = !1;
          } else rt !== null && (mo(rt), rt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (te.current & 1) !== 0 ? pe === 0 && (pe = 3) : yo())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
      case 4:
        return Nn(), no(e, t), e === null && er(t.stateNode.containerInfo), Ee(t), null;
      case 10:
        return Ti(t.type._context), Ee(t), null;
      case 17:
        return Le(t.type) && Qr(), Ee(t), null;
      case 19:
        if (G(te), i = t.memoizedState, i === null) return Ee(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) dr(i, !1);
        else {
          if (pe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = nl(e), o !== null) {
              for (t.flags |= 128, dr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Y(te, te.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ue() > Tn && (t.flags |= 128, r = !0, dr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !b) return Ee(t), null;
          } else 2 * ue() - i.renderingStartTime > Tn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ue(), t.sibling = null, n = te.current, Y(te, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
      case 22:
      case 23:
        return vo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (He & 1073741824) !== 0 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function df(e, t) {
    switch (_i(t), t.tag) {
      case 1:
        return Le(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(), G(Re), G(ke), Fi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ii(t), null;
      case 13:
        if (G(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          Sn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return G(te), null;
      case 4:
        return Nn(), null;
      case 10:
        return Ti(t.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, _e = !1, pf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Pn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      oe(e, t, r);
    }
    else n.current = null;
  }
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      oe(e, t, r);
    }
  }
  var bs = !1;
  function mf(e, t) {
    if (hi = Rr, e = Ru(), ui(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, u = -1, s = -1, p = 0, y = 0, g = e, h = null;
          t: for (; ; ) {
            for (var E; g !== n || l !== 0 && g.nodeType !== 3 || (u = o + l), g !== i || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (E = g.firstChild) !== null; )
              h = g, g = E;
            for (; ; ) {
              if (g === e) break t;
              if (h === n && ++p === l && (u = o), h === i && ++y === r && (s = o), (E = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = E;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vi = { focusedElem: e, selectionRange: n }, Rr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
    else for (; _ !== null; ) {
      t = _;
      try {
        var N = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (N !== null) {
              var z = N.memoizedProps, se = N.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? z : lt(t.type, z), se);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = t.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        oe(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, _ = e;
        break;
      }
      _ = t.return;
    }
    return N = bs, bs = !1, N;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && ro(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ea(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ea(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[nr], delete t[xi], delete t[Gc], delete t[Zc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ta(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ta(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), e = e.sibling;
  }
  var ye = null, it = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) ra(e, t, n), n = n.sibling;
  }
  function ra(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function") try {
      ft.onCommitFiberUnmount(Cr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        _e || Pn(n, t);
      case 6:
        var r = ye, l = it;
        ye = null, At(e, t, n), ye = r, it = l, ye !== null && (it ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
      case 18:
        ye !== null && (it ? (e = ye, n = n.stateNode, e.nodeType === 8 ? wi(e.parentNode, n) : e.nodeType === 1 && wi(e, n), Qn(e)) : wi(ye, n.stateNode));
        break;
      case 4:
        r = ye, l = it, ye = n.stateNode.containerInfo, it = !0, At(e, t, n), ye = r, it = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ro(n, t, o), l = l.next;
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!_e && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          oe(n, t, u);
        }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, At(e, t, n), _e = r) : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function la(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new pf()), t.forEach(function(r) {
        var l = Ef.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ye = u.stateNode, it = !1;
              break e;
            case 3:
              ye = u.stateNode.containerInfo, it = !0;
              break e;
            case 4:
              ye = u.stateNode.containerInfo, it = !0;
              break e;
          }
          u = u.return;
        }
        if (ye === null) throw Error(m(160));
        ra(i, o, l), ye = null, it = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        oe(l, t, p);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ia(t, e), t = t.sibling;
  }
  function ia(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ot(t, e), ht(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (z) {
            oe(e, e.return, z);
          }
          try {
            pr(5, e, e.return);
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        break;
      case 1:
        ot(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return);
        break;
      case 5:
        if (ot(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && i.type === "radio" && i.name != null && Mo(l, i), Fl(u, o);
            var p = Fl(u, i);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? Vo(l, g) : y === "dangerouslySetInnerHTML" ? Ao(l, g) : y === "children" ? On(l, g) : qe(l, y, g, p);
            }
            switch (u) {
              case "input":
                Ll(l, i);
                break;
              case "textarea":
                Do(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null ? un(l, !!i.multiple, E, !1) : h !== !!i.multiple && (i.defaultValue != null ? un(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : un(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        break;
      case 6:
        if (ot(t, e), ht(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        break;
      case 3:
        if (ot(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Qn(t.containerInfo);
        } catch (z) {
          oe(e, e.return, z);
        }
        break;
      case 4:
        ot(t, e), ht(e);
        break;
      case 13:
        ot(t, e), ht(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ao = ue())), r & 4 && la(e);
        break;
      case 22:
        if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (p = _e) || y, ot(t, e), _e = p) : ot(t, e), ht(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0) for (_ = e, y = e.child; y !== null; ) {
            for (g = _ = y; _ !== null; ) {
              switch (h = _, E = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, h, h.return);
                  break;
                case 1:
                  Pn(h, h.return);
                  var N = h.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                    } catch (z) {
                      oe(r, n, z);
                    }
                  }
                  break;
                case 5:
                  Pn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    sa(g);
                    continue;
                  }
              }
              E !== null ? (E.return = h, _ = E) : sa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Bo("display", o));
                } catch (z) {
                  oe(e, e.return, z);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (z) {
                oe(e, e.return, z);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        ot(t, e), ht(e), r & 4 && la(e);
        break;
      case 21:
        break;
      default:
        ot(
          t,
          e
        ), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ta(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), r.flags &= -33);
            var i = na(e);
            oo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, u = na(e);
            io(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        oe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hf(e, t, n) {
    _ = e, oa(e);
  }
  function oa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || fl;
        if (!o) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || _e;
          u = fl;
          var p = _e;
          if (fl = o, (_e = s) && !p) for (_ = l; _ !== null; ) o = _, s = o.child, o.tag === 22 && o.memoizedState !== null ? aa(l) : s !== null ? (s.return = o, _ = s) : aa(l);
          for (; i !== null; ) _ = i, oa(i), i = i.sibling;
          _ = l, fl = u, _e = p;
        }
        ua(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, _ = i) : ua(e);
    }
  }
  function ua(e) {
    for (; _ !== null; ) {
      var t = _;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && ss(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ss(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var p = t.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && Qn(g);
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
              throw Error(m(163));
          }
          _e || t.flags & 512 && lo(t);
        } catch (h) {
          oe(t, t.return, h);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function sa(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function aa(e) {
    for (; _ !== null; ) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
            } catch (s) {
              oe(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                oe(t, l, s);
              }
            }
            var i = t.return;
            try {
              lo(t);
            } catch (s) {
              oe(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (s) {
              oe(t, o, s);
            }
        }
      } catch (s) {
        oe(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, _ = u;
        break;
      }
      _ = t.return;
    }
  }
  var vf = Math.ceil, pl = xe.ReactCurrentDispatcher, uo = xe.ReactCurrentOwner, Ze = xe.ReactCurrentBatchConfig, F = 0, he = null, ce = null, ge = 0, He = 0, jn = Ot(0), pe = 0, mr = null, tn = 0, ml = 0, so = 0, hr = null, Oe = null, ao = 0, Tn = 1 / 0, Ct = null, hl = !1, co = null, Bt = null, vl = !1, Vt = null, yl = 0, vr = 0, fo = null, gl = -1, wl = 0;
  function Pe() {
    return (F & 6) !== 0 ? ue() : gl !== -1 ? gl : gl = ue();
  }
  function Ht(e) {
    return (e.mode & 1) === 0 ? 1 : (F & 2) !== 0 && ge !== 0 ? ge & -ge : qc.transition !== null ? (wl === 0 && (wl = nu()), wl) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fu(e.type)), e);
  }
  function ut(e, t, n, r) {
    if (50 < vr) throw vr = 0, fo = null, Error(m(185));
    Bn(e, n, r), ((F & 2) === 0 || e !== he) && (e === he && ((F & 2) === 0 && (ml |= n), pe === 4 && $t(e, ge)), Ie(e, r), n === 1 && F === 0 && (t.mode & 1) === 0 && (Tn = ue() + 500, Yr && Dt()));
  }
  function Ie(e, t) {
    var n = e.callbackNode;
    qa(e, t);
    var r = Pr(e, e === he ? ge : 0);
    if (r === 0) n !== null && bo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && bo(n), t === 1) e.tag === 0 ? Jc(fa.bind(null, e)) : Zu(fa.bind(null, e)), Yc(function() {
        (F & 6) === 0 && Dt();
      }), n = null;
      else {
        switch (ru(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = eu;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = tu;
            break;
          default:
            n = _r;
        }
        n = wa(n, ca.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ca(e, t) {
    if (gl = -1, wl = 0, (F & 6) !== 0) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Pr(e, e === he ? ge : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = F;
      F |= 2;
      var i = pa();
      (he !== e || ge !== t) && (Ct = null, Tn = ue() + 500, rn(e, t));
      do
        try {
          wf();
          break;
        } catch (u) {
          da(e, u);
        }
      while (!0);
      ji(), pl.current = i, F = l, ce !== null ? t = 0 : (he = null, ge = 0, t = pe);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ql(e), l !== 0 && (r = l, t = po(e, l))), t === 1) throw n = mr, rn(e, 0), $t(e, r), Ie(e, ue()), n;
      if (t === 6) $t(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !yf(l) && (t = xl(e, r), t === 2 && (i = Ql(e), i !== 0 && (r = i, t = po(e, i))), t === 1)) throw n = mr, rn(e, 0), $t(e, r), Ie(e, ue()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ln(e, Oe, Ct);
            break;
          case 3:
            if ($t(e, r), (r & 130023424) === r && (t = ao + 500 - ue(), 10 < t)) {
              if (Pr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Pe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = gi(ln.bind(null, e, Oe, Ct), t);
              break;
            }
            ln(e, Oe, Ct);
            break;
          case 4:
            if ($t(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - tt(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = gi(ln.bind(null, e, Oe, Ct), r);
              break;
            }
            ln(e, Oe, Ct);
            break;
          case 5:
            ln(e, Oe, Ct);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ie(e, ue()), e.callbackNode === n ? ca.bind(null, e) : null;
  }
  function po(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = xl(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && mo(t)), e;
  }
  function mo(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e);
  }
  function yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!nt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
  function $t(e, t) {
    for (t &= ~so, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - tt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function fa(e) {
    if ((F & 6) !== 0) throw Error(m(327));
    Rn();
    var t = Pr(e, 0);
    if ((t & 1) === 0) return Ie(e, ue()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && (t = r, n = po(e, r));
    }
    if (n === 1) throw n = mr, rn(e, 0), $t(e, t), Ie(e, ue()), n;
    if (n === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Oe, Ct), Ie(e, ue()), null;
  }
  function ho(e, t) {
    var n = F;
    F |= 1;
    try {
      return e(t);
    } finally {
      F = n, F === 0 && (Tn = ue() + 500, Yr && Dt());
    }
  }
  function nn(e) {
    Vt !== null && Vt.tag === 0 && (F & 6) === 0 && Rn();
    var t = F;
    F |= 1;
    var n = Ze.transition, r = H;
    try {
      if (Ze.transition = null, H = 1, e) return e();
    } finally {
      H = r, Ze.transition = n, F = t, (F & 6) === 0 && Dt();
    }
  }
  function vo() {
    He = jn.current, G(jn);
  }
  function rn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Kc(n)), ce !== null) for (n = ce.return; n !== null; ) {
      var r = n;
      switch (_i(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Nn(), G(Re), G(ke), Fi();
          break;
        case 5:
          Ii(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          G(te);
          break;
        case 19:
          G(te);
          break;
        case 10:
          Ti(r.type._context);
          break;
        case 22:
        case 23:
          vo();
      }
      n = n.return;
    }
    if (he = e, ce = e = Wt(e.current, null), ge = He = t, pe = 0, mr = null, so = ml = tn = 0, Oe = hr = null, qt !== null) {
      for (t = 0; t < qt.length; t++) if (n = qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      qt = null;
    }
    return e;
  }
  function da(e, t) {
    do {
      var n = ce;
      try {
        if (ji(), rl.current = ul, ll) {
          for (var r = ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (en = 0, me = de = ne = null, sr = !1, ar = 0, uo.current = null, n === null || n.return === null) {
          pe = 1, mr = t, ce = null;
          break;
        }
        e: {
          var i = e, o = n.return, u = n, s = t;
          if (t = ge, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = u, g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = Fs(o);
            if (E !== null) {
              E.flags &= -257, Us(E, o, u, i, t), E.mode & 1 && Ds(i, p, t), t = E, s = p;
              var N = t.updateQueue;
              if (N === null) {
                var z = /* @__PURE__ */ new Set();
                z.add(s), t.updateQueue = z;
              } else N.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ds(i, p, t), yo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (b && u.mode & 1) {
            var se = Fs(o);
            if (se !== null) {
              (se.flags & 65536) === 0 && (se.flags |= 256), Us(se, o, u, i, t), zi(zn(s, u));
              break e;
            }
          }
          i = s = zn(s, u), pe !== 4 && (pe = 2), hr === null ? hr = [i] : hr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var f = Os(i, s, t);
                us(i, f);
                break e;
              case 1:
                u = s;
                var a = i.type, d = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bt === null || !Bt.has(d)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var w = Is(i, u, t);
                  us(i, w);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ha(n);
      } catch (P) {
        t = P, ce === n && n !== null && (ce = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = pl.current;
    return pl.current = ul, e === null ? ul : e;
  }
  function yo() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4), he === null || (tn & 268435455) === 0 && (ml & 268435455) === 0 || $t(he, ge);
  }
  function xl(e, t) {
    var n = F;
    F |= 2;
    var r = pa();
    (he !== e || ge !== t) && (Ct = null, rn(e, t));
    do
      try {
        gf();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if (ji(), F = n, pl.current = r, ce !== null) throw Error(m(261));
    return he = null, ge = 0, pe;
  }
  function gf() {
    for (; ce !== null; ) ma(ce);
  }
  function wf() {
    for (; ce !== null && !$a(); ) ma(ce);
  }
  function ma(e) {
    var t = ga(e.alternate, e, He);
    e.memoizedProps = e.pendingProps, t === null ? ha(e) : ce = t, uo.current = null;
  }
  function ha(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ff(n, t, He), n !== null) {
          ce = n;
          return;
        }
      } else {
        if (n = df(n, t), n !== null) {
          n.flags &= 32767, ce = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pe = 6, ce = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function ln(e, t, n) {
    var r = H, l = Ze.transition;
    try {
      Ze.transition = null, H = 1, xf(e, t, n, r);
    } finally {
      Ze.transition = l, H = r;
    }
    return null;
  }
  function xf(e, t, n, r) {
    do
      Rn();
    while (Vt !== null);
    if ((F & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ba(e, i), e === he && (ce = he = null, ge = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vl || (vl = !0, wa(_r, function() {
      return Rn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = Ze.transition, Ze.transition = null;
      var o = H;
      H = 1;
      var u = F;
      F |= 4, uo.current = null, mf(e, n), ia(n, e), Ac(vi), Rr = !!hi, vi = hi = null, e.current = n, hf(n), Wa(), F = u, H = o, Ze.transition = i;
    } else e.current = n;
    if (vl && (vl = !1, Vt = e, yl = l), i = e.pendingLanes, i === 0 && (Bt = null), Ya(n.stateNode), Ie(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = co, co = null, e;
    return (yl & 1) !== 0 && e.tag !== 0 && Rn(), i = e.pendingLanes, (i & 1) !== 0 ? e === fo ? vr++ : (vr = 0, fo = e) : vr = 0, Dt(), null;
  }
  function Rn() {
    if (Vt !== null) {
      var e = ru(yl), t = Ze.transition, n = H;
      try {
        if (Ze.transition = null, H = 16 > e ? 16 : e, Vt === null) var r = !1;
        else {
          if (e = Vt, Vt = null, yl = 0, (F & 6) !== 0) throw Error(m(331));
          var l = F;
          for (F |= 4, _ = e.current; _ !== null; ) {
            var i = _, o = i.child;
            if ((_.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (_ = p; _ !== null; ) {
                    var y = _;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, i);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, _ = g;
                    else for (; _ !== null; ) {
                      y = _;
                      var h = y.sibling, E = y.return;
                      if (ea(y), y === p) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = E, _ = h;
                        break;
                      }
                      _ = E;
                    }
                  }
                }
                var N = i.alternate;
                if (N !== null) {
                  var z = N.child;
                  if (z !== null) {
                    N.child = null;
                    do {
                      var se = z.sibling;
                      z.sibling = null, z = se;
                    } while (z !== null);
                  }
                }
                _ = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, _ = o;
            else e: for (; _ !== null; ) {
              if (i = _, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, i, i.return);
              }
              var f = i.sibling;
              if (f !== null) {
                f.return = i.return, _ = f;
                break e;
              }
              _ = i.return;
            }
          }
          var a = e.current;
          for (_ = a; _ !== null; ) {
            o = _;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, _ = d;
            else e: for (o = a; _ !== null; ) {
              if (u = _, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, u);
                }
              } catch (P) {
                oe(u, u.return, P);
              }
              if (u === o) {
                _ = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                w.return = u.return, _ = w;
                break e;
              }
              _ = u.return;
            }
          }
          if (F = l, Dt(), ft && typeof ft.onPostCommitFiberRoot == "function") try {
            ft.onPostCommitFiberRoot(Cr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        H = n, Ze.transition = t;
      }
    }
    return !1;
  }
  function va(e, t, n) {
    t = zn(n, t), t = Os(e, t, 1), e = Ut(e, t, 1), t = Pe(), e !== null && (Bn(e, 1, t), Ie(e, t));
  }
  function oe(e, t, n) {
    if (e.tag === 3) va(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r))) {
          e = zn(n, e), e = Is(t, e, 1), t = Ut(t, e, 1), e = Pe(), t !== null && (Bn(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function kf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ge & n) === n && (pe === 4 || pe === 3 && (ge & 130023424) === ge && 500 > ue() - ao ? rn(e, 0) : so |= n), Ie(e, t);
  }
  function ya(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = zr, zr <<= 1, (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Pe();
    e = St(e, t), e !== null && (Bn(e, t, n), Ie(e, n));
  }
  function Sf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ya(e, n);
  }
  function Ef(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), ya(e, n);
  }
  var ga;
  ga = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Me = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Me = !1, cf(e, t, n);
      Me = (e.flags & 131072) !== 0;
    }
    else Me = !1, b && (t.flags & 1048576) !== 0 && Ju(t, Gr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        cl(e, t), e = t.pendingProps;
        var l = wn(t, ke.current);
        Cn(t, n), l = Bi(null, t, r, e, l, n);
        var i = Vi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mi(t), l.updater = sl, t.stateNode = l, l._reactInternals = t, Yi(t, r, e, n), t = Ji(null, t, r, !0, i, n)) : (t.tag = 0, b && i && Ei(t), ze(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Cf(r), e = lt(r, e), l) {
            case 0:
              t = Zi(null, t, r, e, n);
              break e;
            case 1:
              t = Ws(null, t, r, e, n);
              break e;
            case 11:
              t = As(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Zi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Ws(e, t, r, l, n);
      case 3:
        e: {
          if (Qs(t), e === null) throw Error(m(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, os(e, t), tl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = zn(Error(m(423)), t), t = Ks(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(m(424)), t), t = Ks(e, t, r, n, l);
            break e;
          } else for (Ve = Mt(t.stateNode.containerInfo.firstChild), Be = t, b = !0, rt = null, n = ls(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Sn(), r === l) {
              t = _t(e, t, n);
              break e;
            }
            ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return as(t), e === null && Ni(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, yi(r, l) ? o = null : i !== null && yi(r, i) && (t.flags |= 32), $s(e, t), ze(e, t, o, n), t.child;
      case 6:
        return e === null && Ni(t), null;
      case 13:
        return Ys(e, t, n);
      case 4:
        return Oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = En(t, null, r, n) : ze(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), As(e, t, r, l, n);
      case 7:
        return ze(e, t, t.pendingProps, n), t.child;
      case 8:
        return ze(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ze(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Y(qr, r._currentValue), r._currentValue = o, i !== null) if (nt(i.value, o)) {
            if (i.children === l.children && !Re.current) {
              t = _t(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var u = i.dependencies;
            if (u !== null) {
              o = i.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (i.tag === 1) {
                    s = Et(-1, n & -n), s.tag = 2;
                    var p = i.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ri(
                    i.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(m(341));
              o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ri(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          ze(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Cn(t, n), l = Xe(l), r = r(l), t.flags |= 1, ze(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = lt(r, t.pendingProps), l = lt(r.type, l), Bs(e, t, r, l, n);
      case 15:
        return Vs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), cl(e, t), t.tag = 1, Le(r) ? (e = !0, Kr(t)) : e = !1, Cn(t, n), Ls(t, r, l), Yi(t, r, l, n), Ji(null, t, r, !0, e, n);
      case 19:
        return Gs(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function wa(e, t) {
    return qo(e, t);
  }
  function _f(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, t, n, r) {
    return new _f(e, t, n, r);
  }
  function go(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Cf(e) {
    if (typeof e == "function") return go(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === at) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function Wt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") go(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case je:
        return on(n.children, l, i, t);
      case Qe:
        o = 8, l |= 8;
        break;
      case Nt:
        return e = Je(12, n, t, l | 2), e.elementType = Nt, e.lanes = i, e;
      case Fe:
        return e = Je(13, n, t, l), e.elementType = Fe, e.lanes = i, e;
      case et:
        return e = Je(19, n, t, l), e.elementType = et, e.lanes = i, e;
      case ie:
        return Sl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case yt:
            o = 10;
            break e;
          case Kt:
            o = 9;
            break e;
          case at:
            o = 11;
            break e;
          case ct:
            o = 14;
            break e;
          case Te:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return t = Je(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function on(e, t, n, r) {
    return e = Je(7, e, r, t), e.lanes = n, e;
  }
  function Sl(e, t, n, r) {
    return e = Je(22, e, r, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wo(e, t, n) {
    return e = Je(6, e, null, t), e.lanes = n, e;
  }
  function xo(e, t, n) {
    return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Nf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ko(e, t, n, r, l, i, o, u, s) {
    return e = new Nf(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mi(i), e;
  }
  function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ne, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function xa(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Le(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Le(n)) return Xu(e, n, t);
    }
    return t;
  }
  function ka(e, t, n, r, l, i, o, u, s) {
    return e = ko(n, r, !0, e, l, i, o, u, s), e.context = xa(null), n = e.current, r = Pe(), l = Ht(n), i = Et(r, l), i.callback = t ?? null, Ut(n, i, l), e.current.lanes = l, Bn(e, l, r), Ie(e, r), e;
  }
  function El(e, t, n, r) {
    var l = t.current, i = Pe(), o = Ht(l);
    return n = xa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(l, t, o), e !== null && (ut(e, l, o, i), el(e, l, o)), o;
  }
  function _l(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Sa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function So(e, t) {
    Sa(e, t), (e = e.alternate) && Sa(e, t);
  }
  function Pf() {
    return null;
  }
  var Ea = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Eo(e) {
    this._internalRoot = e;
  }
  Cl.prototype.render = Eo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    El(e, t, null, null);
  }, Cl.prototype.unmount = Eo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      nn(function() {
        El(null, e, null, null);
      }), t[gt] = null;
    }
  };
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ou();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
      Tt.splice(n, 0, e), n === 0 && au(e);
    }
  };
  function _o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function _a() {
  }
  function jf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var p = _l(o);
          i.call(p);
        };
      }
      var o = ka(t, r, e, 0, null, !1, !1, "", _a);
      return e._reactRootContainer = o, e[gt] = o.current, er(e.nodeType === 8 ? e.parentNode : e), nn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var p = _l(s);
        u.call(p);
      };
    }
    var s = ko(e, 0, !1, null, null, !1, !1, "", _a);
    return e._reactRootContainer = s, e[gt] = s.current, er(e.nodeType === 8 ? e.parentNode : e), nn(function() {
      El(t, s, n, r);
    }), s;
  }
  function zl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = _l(o);
          u.call(s);
        };
      }
      El(t, o, e, l);
    } else o = jf(n, t, e, l, r);
    return _l(o);
  }
  lu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Yl(t, n | 1), Ie(t, ue()), (F & 6) === 0 && (Tn = ue() + 500, Dt()));
        }
        break;
      case 13:
        nn(function() {
          var r = St(e, 1);
          if (r !== null) {
            var l = Pe();
            ut(r, e, 1, l);
          }
        }), So(e, 1);
    }
  }, Xl = function(e) {
    if (e.tag === 13) {
      var t = St(e, 134217728);
      if (t !== null) {
        var n = Pe();
        ut(t, e, 134217728, n);
      }
      So(e, 134217728);
    }
  }, iu = function(e) {
    if (e.tag === 13) {
      var t = Ht(e), n = St(e, t);
      if (n !== null) {
        var r = Pe();
        ut(n, e, t, r);
      }
      So(e, t);
    }
  }, ou = function() {
    return H;
  }, uu = function(e, t) {
    var n = H;
    try {
      return H = e, t();
    } finally {
      H = n;
    }
  }, Bl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ll(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Ro(r), Ll(r, l);
            }
          }
        }
        break;
      case "textarea":
        Do(e, n);
        break;
      case "select":
        t = n.value, t != null && un(e, !!n.multiple, t, !1);
    }
  }, Qo = ho, Ko = nn;
  var Tf = { usingClientEntryPoint: !1, Events: [rr, yn, Wr, $o, Wo, ho] }, yr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Rf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Zo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Pf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      Cr = Pl.inject(Rf), ft = Pl;
    } catch {
    }
  }
  return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tf, De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_o(t)) throw Error(m(200));
    return zf(e, t, null, n);
  }, De.createRoot = function(e, t) {
    if (!_o(e)) throw Error(m(299));
    var n = !1, r = "", l = Ea;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ko(e, 1, !1, null, null, n, !1, r, l), e[gt] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new Eo(t);
  }, De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Zo(t), e = e === null ? null : e.stateNode, e;
  }, De.flushSync = function(e) {
    return nn(e);
  }, De.hydrate = function(e, t, n) {
    if (!Nl(t)) throw Error(m(200));
    return zl(null, e, t, !0, n);
  }, De.hydrateRoot = function(e, t, n) {
    if (!_o(e)) throw Error(m(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Ea;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ka(t, null, e, 1, n ?? null, l, !1, i, o), e[gt] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Cl(t);
  }, De.render = function(e, t, n) {
    if (!Nl(t)) throw Error(m(200));
    return zl(null, e, t, !1, n);
  }, De.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (nn(function() {
      zl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gt] = null;
      });
    }), !0) : !1;
  }, De.unstable_batchedUpdates = ho, De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Nl(n)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return zl(e, t, n, !1, r);
  }, De.version = "18.3.1-next-f1338f8080-20240426", De;
}
var La;
function Bf() {
  if (La) return zo.exports;
  La = 1;
  function S() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (M) {
        console.error(M);
      }
  }
  return S(), zo.exports = Af(), zo.exports;
}
var Ma;
function Vf() {
  if (Ma) return jl;
  Ma = 1;
  var S = Bf();
  return jl.createRoot = S.createRoot, jl.hydrateRoot = S.hydrateRoot, jl;
}
var Hf = Vf();
const $f = /* @__PURE__ */ Ia(Hf), Tl = {
  es: {
    nav: {
      apps: "apps",
      revit: "revit tools",
      learning: "aprendizaje",
      support: "soporte",
      help: "ayuda",
      cta: "ver tools",
      toggle: "Cambiar idioma a ingles",
      menu: "Abrir navegacion"
    },
    hero: {
      line1Strong: "pyMenvic Revit Tools",
      line1Muted: "lidera",
      line2: "un portfolio tecnico de",
      line3Before: "apps y soporte",
      line3After: "BIM.",
      start: "Proyecto principal: herramientas pyRevit para produccion Revit",
      openApps: "Abrir Revit Tools",
      year: "2026",
      corner: "revit · apps · soporte"
    },
    portfolio: {
      eyebrow: "hub tecnico / portfolio",
      title: "El proyecto profesional principal es pyMenvic Revit Tools.",
      text: "pyMenvic funciona como punto publico para herramientas de produccion BIM, apps mantenidas por Menvic y recursos de soporte. La prioridad profesional son las utilidades pyRevit para Revit; el resto del sitio documenta proyectos relacionados cuando necesitan una ruta publica clara.",
      primaryLabel: "Proyecto principal",
      primaryTitle: "pyMenvic Revit Tools",
      primaryText: "Utilities for Revit production: schedules, sheets, worksets, links, model setup, documentation support, and office standards.",
      primaryCta: "Open Revit Tools",
      secondaryTitle: "Otros proyectos documentados",
      secondary: [
        ["Apps", "Padel Score y previews seleccionadas con soporte, privacidad y compatibilidad visibles.", "/apps/"],
        ["Learning", "Notas cortas para workflows, configuracion y decisiones tecnicas mantenibles.", "/learning/"],
        ["Support", "Rutas directas para soporte, politicas, contacto y preguntas de herramientas.", "/support/"]
      ]
    }
  },
  en: {
    nav: {
      apps: "apps",
      revit: "revit tools",
      learning: "learning",
      support: "support",
      help: "find help",
      cta: "view tools",
      toggle: "Switch language to Spanish",
      menu: "Open navigation"
    },
    hero: {
      line1Strong: "pyMenvic Revit Tools",
      line1Muted: "leads",
      line2: "a technical portfolio of",
      line3Before: "apps and BIM",
      line3After: "support.",
      start: "Primary project: pyRevit utilities for Revit production",
      openApps: "Open Revit Tools",
      year: "2026",
      corner: "revit · apps · support"
    },
    portfolio: {
      eyebrow: "technical hub / portfolio",
      title: "The primary professional project is pyMenvic Revit Tools.",
      text: "pyMenvic is the public entry point for BIM production tools, selected Menvic apps, and support resources. The professional center is the pyRevit/Revit utility suite; the rest of the site documents related projects when they need a clear public route.",
      primaryLabel: "Primary project",
      primaryTitle: "pyMenvic Revit Tools",
      primaryText: "Utilities for Revit production: schedules, sheets, worksets, links, model setup, documentation support, and office standards.",
      primaryCta: "Open Revit Tools",
      secondaryTitle: "Other documented projects",
      secondary: [
        ["Apps", "Padel Score and selected previews with visible support, privacy, and compatibility notes.", "/apps/"],
        ["Learning", "Short notes for workflows, setup, and maintainable technical decisions.", "/learning/"],
        ["Support", "Direct routes for support, policies, contact, and tool questions.", "/support/"]
      ]
    }
  }
}, Oa = [
  ["apps", "/apps/"],
  ["revit", "/revit-tools/"],
  ["learning", "/learning/"],
  ["support", "/support/"]
];
function Wf() {
  return /* @__PURE__ */ x.jsx("svg", { className: "h-8 w-8 fill-[#1a1a1a]", viewBox: "0 0 64 64", "aria-hidden": "true", children: /* @__PURE__ */ x.jsx("path", { d: "M32 5c6.4 0 11.6 5.2 11.6 11.6 0 2.2-.6 4.3-1.7 6.1 1.8-1.1 3.9-1.7 6.1-1.7C54.6 21 60 26.4 60 33s-5.4 12-12 12c-2.2 0-4.2-.6-6-1.6 1 1.8 1.6 3.8 1.6 6C43.6 55.8 38.4 61 32 61S20.4 55.8 20.4 49.4c0-2.2.6-4.2 1.6-6-1.8 1-3.8 1.6-6 1.6C9.4 45 4 39.6 4 33s5.4-12 12-12c2.2 0 4.3.6 6.1 1.7-1.1-1.8-1.7-3.9-1.7-6.1C20.4 10.2 25.6 5 32 5Zm0 19.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" }) });
}
function Qf({ open: S }) {
  return /* @__PURE__ */ x.jsxs("span", { className: "relative block h-5 w-7", "aria-hidden": "true", children: [
    /* @__PURE__ */ x.jsx(
      "span",
      {
        className: `absolute left-0 top-1 h-[2px] w-7 rounded-full bg-[#1a1a1a] transition-transform duration-200 ${S ? "translate-y-1.5 rotate-45" : ""}`
      }
    ),
    /* @__PURE__ */ x.jsx(
      "span",
      {
        className: `absolute left-0 top-1/2 h-[2px] w-7 rounded-full bg-[#1a1a1a] transition-all duration-200 ${S ? "translate-x-2 opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ x.jsx(
      "span",
      {
        className: `absolute bottom-1 left-0 h-[2px] w-7 rounded-full bg-[#1a1a1a] transition-transform duration-200 ${S ? "-translate-y-1.5 -rotate-45" : ""}`
      }
    )
  ] });
}
function Kf({ locale: S, onToggleLocale: M }) {
  const [m, fe] = Ln.useState(!1), Q = Tl[S].nav;
  return /* @__PURE__ */ x.jsxs("header", { className: "fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-[#f1f1f1]/80 to-transparent py-6 backdrop-blur-[2px] md:py-10", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-4 px-6 md:gap-x-8 md:px-12 lg:px-20", children: [
      /* @__PURE__ */ x.jsxs("a", { className: "col-span-7 flex items-center gap-3 md:col-span-3", href: "/", "aria-label": "pyMenvic home", children: [
        /* @__PURE__ */ x.jsx(Wf, {}),
        /* @__PURE__ */ x.jsx("span", { className: "font-display text-[1.65rem] font-bold tracking-[-0.04em] text-[#1a1a1a]", children: "pyMenvic" })
      ] }),
      /* @__PURE__ */ x.jsx("nav", { className: "col-span-6 hidden items-center justify-center gap-7 md:flex", "aria-label": "Main navigation", children: Oa.map(([re, le]) => /* @__PURE__ */ x.jsx("a", { href: le, className: "text-[0.78rem] font-semibold lowercase tracking-[-0.01em] text-zinc-700 transition-colors hover:text-black", children: Q[re] }, le)) }),
      /* @__PURE__ */ x.jsxs("div", { className: "col-span-5 flex items-center justify-end gap-3 md:col-span-3", children: [
        /* @__PURE__ */ x.jsx("a", { className: "hidden text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex", href: "/support/", children: Q.help }),
        /* @__PURE__ */ x.jsxs("a", { className: "hidden rounded-full bg-[#1a1a1a] px-4 py-2 text-[0.8rem] font-semibold lowercase text-white transition-transform hover:-translate-y-0.5 sm:inline-flex", href: "/revit-tools/", children: [
          Q.cta,
          " ",
          /* @__PURE__ */ x.jsx("span", { className: "ml-1", children: "→" })
        ] }),
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            className: "hidden rounded-full border border-black/10 bg-white/45 px-3 py-2 text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex md:hidden",
            type: "button",
            "aria-label": Q.toggle,
            onClick: M,
            children: [
              /* @__PURE__ */ x.jsx("span", { className: S === "es" ? "text-black" : "text-zinc-500", children: "ES" }),
              /* @__PURE__ */ x.jsx("span", { className: "px-1 text-zinc-400", children: "/" }),
              /* @__PURE__ */ x.jsx("span", { className: S === "en" ? "text-black" : "text-zinc-500", children: "EN" })
            ]
          }
        ),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/50 md:hidden",
            type: "button",
            "aria-label": Q.menu,
            "aria-expanded": m,
            onClick: () => fe((re) => !re),
            children: /* @__PURE__ */ x.jsx(Qf, { open: m })
          }
        )
      ] })
    ] }),
    m ? /* @__PURE__ */ x.jsx("div", { className: "mx-6 mt-5 animate-[menu-enter_0.28s_cubic-bezier(0.22,1,0.36,1)_both] rounded-[24px] border border-black/10 bg-white/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden", children: /* @__PURE__ */ x.jsxs("nav", { className: "grid gap-2", "aria-label": "Mobile navigation", children: [
      Oa.map(([re, le]) => /* @__PURE__ */ x.jsx("a", { href: le, className: "rounded-2xl px-3 py-3 font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-[#1a1a1a]", children: Q[re] }, le)),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: "mt-2 rounded-2xl bg-[#1a1a1a] px-3 py-3 text-left font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-white",
          type: "button",
          onClick: M,
          children: S === "es" ? "switch to english" : "cambiar a espanol"
        }
      )
    ] }) }) : null
  ] });
}
const Yf = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4";
function Xf() {
  return /* @__PURE__ */ x.jsx("span", { className: "mx-1 inline-flex w-[16px] items-center justify-center rounded-full border-[2px] border-[#1a1a1a] align-middle md:mx-2 md:w-[42px] lg:w-[62px]", children: /* @__PURE__ */ x.jsx("span", { className: "h-2 w-2 rounded-full bg-[#1a1a1a]" }) });
}
function Gf() {
  return /* @__PURE__ */ x.jsx("svg", { className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ x.jsx("path", { d: "M7 17 17 7M9 7h8v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Zf({ locale: S, onToggleLocale: M }) {
  const m = Tl[S].hero, [fe, Q] = Ln.useState(!1);
  return Ln.useEffect(() => {
    const re = () => Q(!0);
    if ("requestIdleCallback" in window) {
      const ae = window.requestIdleCallback(re, { timeout: 1800 });
      return () => window.cancelIdleCallback(ae);
    }
    const le = window.setTimeout(re, 800);
    return () => window.clearTimeout(le);
  }, []), /* @__PURE__ */ x.jsxs("section", { className: "relative flex min-h-[110vh] w-full flex-col items-center justify-start overflow-hidden bg-bg-base sm:min-h-[140vh]", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "pointer-events-none absolute left-0 top-[46vh] z-0 h-[78vh] w-full sm:top-[28vh] sm:h-[112vh] lg:top-[20vh] lg:h-[120vh]", children: [
      fe ? /* @__PURE__ */ x.jsx("video", { autoPlay: !0, loop: !0, muted: !0, playsInline: !0, preload: "none", className: "h-full w-full object-cover opacity-100", children: /* @__PURE__ */ x.jsx("source", { src: Yf, type: "video/mp4" }) }) : null,
      /* @__PURE__ */ x.jsx("div", { className: "absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-bg-base to-transparent sm:h-32" }),
      /* @__PURE__ */ x.jsx("div", { className: "absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-bg-base to-transparent" })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-x-4 px-8 pb-16 pt-[21vh] md:gap-x-8 md:px-16 lg:px-20", children: /* @__PURE__ */ x.jsxs("div", { className: "col-span-12 md:col-span-10 md:col-start-2", children: [
      /* @__PURE__ */ x.jsxs(
        "h1",
        {
          className: "animate-[hero-enter_0.8s_ease-out_both] font-display text-[clamp(2.85rem,9vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#8e8e8e]",
          children: [
            /* @__PURE__ */ x.jsx("span", { className: "text-[#1a1a1a]", children: m.line1Strong }),
            " ",
            /* @__PURE__ */ x.jsx("span", { children: m.line1Muted }),
            /* @__PURE__ */ x.jsx("br", {}),
            /* @__PURE__ */ x.jsx("span", { children: m.line2 }),
            /* @__PURE__ */ x.jsx("br", {}),
            /* @__PURE__ */ x.jsxs("span", { children: [
              m.line3Before,
              " ",
              /* @__PURE__ */ x.jsx(Xf, {}),
              " ",
              m.line3After
            ] })
          ]
        }
      ),
      /* @__PURE__ */ x.jsx(
        "div",
        {
          className: "mt-9 w-full max-w-[560px] animate-[hero-enter_0.8s_ease-out_0.15s_both]",
          children: /* @__PURE__ */ x.jsxs("div", { className: "flex items-center rounded-[6px] border border-black/10 bg-white/90 p-1 pl-4 shadow-sm backdrop-blur-sm", children: [
            /* @__PURE__ */ x.jsx("span", { className: "min-w-0 flex-1 text-sm font-semibold text-zinc-700", children: m.start }),
            /* @__PURE__ */ x.jsx("a", { className: "relative h-9 w-9 rounded-full bg-[#1a1a1a] text-white", href: "/revit-tools/", "aria-label": m.openApps, children: /* @__PURE__ */ x.jsx(Gf, {}) })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ x.jsxs(
      "button",
      {
        className: "absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/35 px-4 py-2 text-xs font-semibold uppercase text-[#1a1a1a] shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:bg-white/60 md:flex",
        type: "button",
        "aria-label": Tl[S].nav.toggle,
        onClick: M,
        children: [
          /* @__PURE__ */ x.jsx("span", { className: S === "es" ? "text-black" : "text-zinc-500", children: "ES" }),
          /* @__PURE__ */ x.jsx("span", { className: "text-zinc-400", children: "/" }),
          /* @__PURE__ */ x.jsx("span", { className: S === "en" ? "text-black" : "text-zinc-500", children: "EN" })
        ]
      }
    ),
    /* @__PURE__ */ x.jsx("span", { className: "absolute bottom-8 left-8 z-20 text-xs font-semibold tracking-[-0.02em] text-[#1a1a1a] md:left-12 lg:left-20", children: m.year }),
    /* @__PURE__ */ x.jsx("span", { className: "absolute bottom-8 right-8 z-20 text-xs font-semibold lowercase tracking-[-0.02em] text-[#1a1a1a] md:right-12 lg:right-20", children: m.corner })
  ] });
}
function Jf({ locale: S }) {
  const M = Tl[S].portfolio;
  return /* @__PURE__ */ x.jsx("section", { className: "bg-[#1a1a1a] px-6 py-20 text-white md:px-12 md:py-28 lg:px-20", children: /* @__PURE__ */ x.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "max-w-[680px]", children: [
      /* @__PURE__ */ x.jsx("p", { className: "mb-5 w-fit rounded-[6px] border border-white/15 px-3 py-1.5 text-xs font-semibold lowercase text-zinc-300", children: M.eyebrow }),
      /* @__PURE__ */ x.jsx("h2", { className: "font-display text-[clamp(2.3rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-white", children: M.title }),
      /* @__PURE__ */ x.jsx("p", { className: "mt-7 max-w-[64ch] text-base leading-7 text-zinc-300 md:text-lg", children: M.text })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ x.jsxs("article", { className: "rounded-[8px] border border-white/14 bg-white/[0.06] p-5 md:p-6", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "mb-8 flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ x.jsx("span", { className: "rounded-[4px] bg-[#9fff00] px-2.5 py-1 text-xs font-bold lowercase text-black", children: M.primaryLabel }),
          /* @__PURE__ */ x.jsx("span", { className: "text-xs font-semibold lowercase text-zinc-400", children: "pyRevit / Revit / BIM" })
        ] }),
        /* @__PURE__ */ x.jsx("h3", { className: "font-display text-3xl font-semibold tracking-[-0.035em] md:text-4xl", children: M.primaryTitle }),
        /* @__PURE__ */ x.jsx("p", { className: "mt-4 max-w-[58ch] text-sm leading-6 text-zinc-300 md:text-base", children: M.primaryText }),
        /* @__PURE__ */ x.jsx(
          "a",
          {
            className: "mt-7 inline-flex min-h-11 items-center rounded-[6px] bg-white px-4 text-sm font-bold lowercase text-[#1a1a1a] transition-transform hover:-translate-y-0.5",
            href: "/revit-tools/",
            children: M.primaryCta
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("div", { children: [
        /* @__PURE__ */ x.jsx("h3", { className: "mb-3 text-sm font-semibold lowercase text-zinc-400", children: M.secondaryTitle }),
        /* @__PURE__ */ x.jsx("div", { className: "grid gap-3", children: M.secondary.map(([m, fe, Q]) => /* @__PURE__ */ x.jsxs(
          "a",
          {
            className: "group grid gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 text-white transition-colors hover:border-white/24 hover:bg-white/[0.07] md:grid-cols-[0.32fr_1fr_auto] md:items-center",
            href: Q,
            children: [
              /* @__PURE__ */ x.jsx("strong", { className: "font-display text-xl tracking-[-0.025em]", children: m }),
              /* @__PURE__ */ x.jsx("span", { className: "text-sm leading-6 text-zinc-400", children: fe }),
              /* @__PURE__ */ x.jsx("span", { className: "text-lg text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white", "aria-hidden": "true", children: "->" })
            ]
          },
          Q
        )) })
      ] })
    ] })
  ] }) });
}
function qf() {
  const [S, M] = Ln.useState(() => typeof window > "u" ? "es" : window.localStorage.getItem("pymenvic-locale") === "en" ? "en" : "es");
  Ln.useEffect(() => {
    window.localStorage.setItem("pymenvic-locale", S), document.documentElement.lang = S;
  }, [S]);
  const m = () => M((fe) => fe === "es" ? "en" : "es");
  return /* @__PURE__ */ x.jsxs("div", { className: "min-h-screen bg-bg-base selection:bg-brand-green selection:text-black", children: [
    /* @__PURE__ */ x.jsx(Kf, { locale: S, onToggleLocale: m }),
    /* @__PURE__ */ x.jsxs("main", { children: [
      /* @__PURE__ */ x.jsx(Zf, { locale: S, onToggleLocale: m }),
      /* @__PURE__ */ x.jsx(Jf, { locale: S })
    ] })
  ] });
}
$f.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ x.jsx(Df.StrictMode, { children: /* @__PURE__ */ x.jsx(qf, {}) })
);
