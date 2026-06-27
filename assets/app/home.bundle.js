function x1(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Xy = { exports: {} }, Hh = {}, qy = { exports: {} }, Ot = {};
var YR;
function QL() {
  if (YR) return Ot;
  YR = 1;
  var a = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), p = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), M = Symbol.iterator;
  function A(j) {
    return j === null || typeof j != "object" ? null : (j = M && j[M] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, X = {};
  function q(j, te, at) {
    this.props = j, this.context = te, this.refs = X, this.updater = at || F;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(j, te) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, te, "setState");
  }, q.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = q.prototype;
  function ae(j, te, at) {
    this.props = j, this.context = te, this.refs = X, this.updater = at || F;
  }
  var ne = ae.prototype = new ie();
  ne.constructor = ae, B(ne, q.prototype), ne.isPureReactComponent = !0;
  var oe = Array.isArray, pe = Object.prototype.hasOwnProperty, we = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(j, te, at) {
    var nt, wt = {}, Et = null, gt = null;
    if (te != null) for (nt in te.ref !== void 0 && (gt = te.ref), te.key !== void 0 && (Et = "" + te.key), te) pe.call(te, nt) && !ge.hasOwnProperty(nt) && (wt[nt] = te[nt]);
    var Ct = arguments.length - 2;
    if (Ct === 1) wt.children = at;
    else if (1 < Ct) {
      for (var Rt = Array(Ct), Kt = 0; Kt < Ct; Kt++) Rt[Kt] = arguments[Kt + 2];
      wt.children = Rt;
    }
    if (j && j.defaultProps) for (nt in Ct = j.defaultProps, Ct) wt[nt] === void 0 && (wt[nt] = Ct[nt]);
    return { $$typeof: a, type: j, key: Et, ref: gt, props: wt, _owner: we.current };
  }
  function Ue(j, te) {
    return { $$typeof: a, type: j.type, key: te, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function Te(j) {
    return typeof j == "object" && j !== null && j.$$typeof === a;
  }
  function rt(j) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(at) {
      return te[at];
    });
  }
  var tt = /\/+/g;
  function ze(j, te) {
    return typeof j == "object" && j !== null && j.key != null ? rt("" + j.key) : te.toString(36);
  }
  function yt(j, te, at, nt, wt) {
    var Et = typeof j;
    (Et === "undefined" || Et === "boolean") && (j = null);
    var gt = !1;
    if (j === null) gt = !0;
    else switch (Et) {
      case "string":
      case "number":
        gt = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case a:
          case l:
            gt = !0;
        }
    }
    if (gt) return gt = j, wt = wt(gt), j = nt === "" ? "." + ze(gt, 0) : nt, oe(wt) ? (at = "", j != null && (at = j.replace(tt, "$&/") + "/"), yt(wt, te, at, "", function(Kt) {
      return Kt;
    })) : wt != null && (Te(wt) && (wt = Ue(wt, at + (!wt.key || gt && gt.key === wt.key ? "" : ("" + wt.key).replace(tt, "$&/") + "/") + j)), te.push(wt)), 1;
    if (gt = 0, nt = nt === "" ? "." : nt + ":", oe(j)) for (var Ct = 0; Ct < j.length; Ct++) {
      Et = j[Ct];
      var Rt = nt + ze(Et, Ct);
      gt += yt(Et, te, at, Rt, wt);
    }
    else if (Rt = A(j), typeof Rt == "function") for (j = Rt.call(j), Ct = 0; !(Et = j.next()).done; ) Et = Et.value, Rt = nt + ze(Et, Ct++), gt += yt(Et, te, at, Rt, wt);
    else if (Et === "object") throw te = String(j), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return gt;
  }
  function ht(j, te, at) {
    if (j == null) return j;
    var nt = [], wt = 0;
    return yt(j, nt, "", "", function(Et) {
      return te.call(at, Et, wt++);
    }), nt;
  }
  function vt(j) {
    if (j._status === -1) {
      var te = j._result;
      te = te(), te.then(function(at) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = at);
      }, function(at) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = at);
      }), j._status === -1 && (j._status = 0, j._result = te);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var He = { current: null }, le = { transition: null }, ke = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: le, ReactCurrentOwner: we };
  function ye() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ot.Children = { map: ht, forEach: function(j, te, at) {
    ht(j, function() {
      te.apply(this, arguments);
    }, at);
  }, count: function(j) {
    var te = 0;
    return ht(j, function() {
      te++;
    }), te;
  }, toArray: function(j) {
    return ht(j, function(te) {
      return te;
    }) || [];
  }, only: function(j) {
    if (!Te(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Ot.Component = q, Ot.Fragment = c, Ot.Profiler = g, Ot.PureComponent = ae, Ot.StrictMode = p, Ot.Suspense = D, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, Ot.act = ye, Ot.cloneElement = function(j, te, at) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var nt = B({}, j.props), wt = j.key, Et = j.ref, gt = j._owner;
    if (te != null) {
      if (te.ref !== void 0 && (Et = te.ref, gt = we.current), te.key !== void 0 && (wt = "" + te.key), j.type && j.type.defaultProps) var Ct = j.type.defaultProps;
      for (Rt in te) pe.call(te, Rt) && !ge.hasOwnProperty(Rt) && (nt[Rt] = te[Rt] === void 0 && Ct !== void 0 ? Ct[Rt] : te[Rt]);
    }
    var Rt = arguments.length - 2;
    if (Rt === 1) nt.children = at;
    else if (1 < Rt) {
      Ct = Array(Rt);
      for (var Kt = 0; Kt < Rt; Kt++) Ct[Kt] = arguments[Kt + 2];
      nt.children = Ct;
    }
    return { $$typeof: a, type: j.type, key: wt, ref: Et, props: nt, _owner: gt };
  }, Ot.createContext = function(j) {
    return j = { $$typeof: v, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: E, _context: j }, j.Consumer = j;
  }, Ot.createElement = Ee, Ot.createFactory = function(j) {
    var te = Ee.bind(null, j);
    return te.type = j, te;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(j) {
    return { $$typeof: w, render: j };
  }, Ot.isValidElement = Te, Ot.lazy = function(j) {
    return { $$typeof: k, _payload: { _status: -1, _result: j }, _init: vt };
  }, Ot.memo = function(j, te) {
    return { $$typeof: b, type: j, compare: te === void 0 ? null : te };
  }, Ot.startTransition = function(j) {
    var te = le.transition;
    le.transition = {};
    try {
      j();
    } finally {
      le.transition = te;
    }
  }, Ot.unstable_act = ye, Ot.useCallback = function(j, te) {
    return He.current.useCallback(j, te);
  }, Ot.useContext = function(j) {
    return He.current.useContext(j);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(j) {
    return He.current.useDeferredValue(j);
  }, Ot.useEffect = function(j, te) {
    return He.current.useEffect(j, te);
  }, Ot.useId = function() {
    return He.current.useId();
  }, Ot.useImperativeHandle = function(j, te, at) {
    return He.current.useImperativeHandle(j, te, at);
  }, Ot.useInsertionEffect = function(j, te) {
    return He.current.useInsertionEffect(j, te);
  }, Ot.useLayoutEffect = function(j, te) {
    return He.current.useLayoutEffect(j, te);
  }, Ot.useMemo = function(j, te) {
    return He.current.useMemo(j, te);
  }, Ot.useReducer = function(j, te, at) {
    return He.current.useReducer(j, te, at);
  }, Ot.useRef = function(j) {
    return He.current.useRef(j);
  }, Ot.useState = function(j) {
    return He.current.useState(j);
  }, Ot.useSyncExternalStore = function(j, te, at) {
    return He.current.useSyncExternalStore(j, te, at);
  }, Ot.useTransition = function() {
    return He.current.useTransition();
  }, Ot.version = "18.3.1", Ot;
}
var Yh = { exports: {} };
Yh.exports;
var WR;
function XL() {
  return WR || (WR = 1, (function(a, l) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = "18.3.1", p = /* @__PURE__ */ Symbol.for("react.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.provider"), b = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.offscreen"), q = Symbol.iterator, ie = "@@iterator";
      function ae(T) {
        if (T === null || typeof T != "object")
          return null;
        var L = q && T[q] || T[ie];
        return typeof L == "function" ? L : null;
      }
      var ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, oe = {
        transition: null
      }, pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, we = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, Ee = null;
      function Ue(T) {
        Ee = T;
      }
      ge.setExtraStackFrame = function(T) {
        Ee = T;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var T = "";
        Ee && (T += Ee);
        var L = ge.getCurrentStack;
        return L && (T += L() || ""), T;
      };
      var Te = !1, rt = !1, tt = !1, ze = !1, yt = !1, ht = {
        ReactCurrentDispatcher: ne,
        ReactCurrentBatchConfig: oe,
        ReactCurrentOwner: we
      };
      ht.ReactDebugCurrentFrame = ge, ht.ReactCurrentActQueue = pe;
      function vt(T) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          le("warn", T, G);
        }
      }
      function He(T) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          le("error", T, G);
        }
      }
      function le(T, L, G) {
        {
          var Z = ht.ReactDebugCurrentFrame, me = Z.getStackAddendum();
          me !== "" && (L += "%s", G = G.concat([me]));
          var Xe = G.map(function(xe) {
            return String(xe);
          });
          Xe.unshift("Warning: " + L), Function.prototype.apply.call(console[T], console, Xe);
        }
      }
      var ke = {};
      function ye(T, L) {
        {
          var G = T.constructor, Z = G && (G.displayName || G.name) || "ReactClass", me = Z + "." + L;
          if (ke[me])
            return;
          He("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, Z), ke[me] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(T) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(T, L, G) {
          ye(T, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(T, L, G, Z) {
          ye(T, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(T, L, G, Z) {
          ye(T, "setState");
        }
      }, te = Object.assign, at = {};
      Object.freeze(at);
      function nt(T, L, G) {
        this.props = T, this.context = L, this.refs = at, this.updater = G || j;
      }
      nt.prototype.isReactComponent = {}, nt.prototype.setState = function(T, L) {
        if (typeof T != "object" && typeof T != "function" && T != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, L, "setState");
      }, nt.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate");
      };
      {
        var wt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Et = function(T, L) {
          Object.defineProperty(nt.prototype, T, {
            get: function() {
              vt("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var gt in wt)
          wt.hasOwnProperty(gt) && Et(gt, wt[gt]);
      }
      function Ct() {
      }
      Ct.prototype = nt.prototype;
      function Rt(T, L, G) {
        this.props = T, this.context = L, this.refs = at, this.updater = G || j;
      }
      var Kt = Rt.prototype = new Ct();
      Kt.constructor = Rt, te(Kt, nt.prototype), Kt.isPureReactComponent = !0;
      function Pn() {
        var T = {
          current: null
        };
        return Object.seal(T), T;
      }
      var Ar = Array.isArray;
      function Rn(T) {
        return Ar(T);
      }
      function sr(T) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && T[Symbol.toStringTag] || T.constructor.name || "Object";
          return G;
        }
      }
      function Wn(T) {
        try {
          return Gn(T), !1;
        } catch {
          return !0;
        }
      }
      function Gn(T) {
        return "" + T;
      }
      function Jr(T) {
        if (Wn(T))
          return He("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(T)), Gn(T);
      }
      function Ca(T, L, G) {
        var Z = T.displayName;
        if (Z)
          return Z;
        var me = L.displayName || L.name || "";
        return me !== "" ? G + "(" + me + ")" : G;
      }
      function yi(T) {
        return T.displayName || "Context";
      }
      function er(T) {
        if (T == null)
          return null;
        if (typeof T.tag == "number" && He("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
          return T.displayName || T.name || null;
        if (typeof T == "string")
          return T;
        switch (T) {
          case E:
            return "Fragment";
          case g:
            return "Portal";
          case w:
            return "Profiler";
          case v:
            return "StrictMode";
          case M:
            return "Suspense";
          case A:
            return "SuspenseList";
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case b:
              var L = T;
              return yi(L) + ".Consumer";
            case D:
              var G = T;
              return yi(G._context) + ".Provider";
            case k:
              return Ca(T, T.render, "ForwardRef");
            case F:
              var Z = T.displayName || null;
              return Z !== null ? Z : er(T.type) || "Memo";
            case B: {
              var me = T, Xe = me._payload, xe = me._init;
              try {
                return er(xe(Xe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var bn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, na, Vn;
      Vn = {};
      function br(T) {
        if (bn.call(T, "ref")) {
          var L = Object.getOwnPropertyDescriptor(T, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return T.ref !== void 0;
      }
      function gi(T) {
        if (bn.call(T, "key")) {
          var L = Object.getOwnPropertyDescriptor(T, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return T.key !== void 0;
      }
      function ra(T, L) {
        var G = function() {
          Rr || (Rr = !0, He("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: G,
          configurable: !0
        });
      }
      function Ta(T, L) {
        var G = function() {
          na || (na = !0, He("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: G,
          configurable: !0
        });
      }
      function Se(T) {
        if (typeof T.ref == "string" && we.current && T.__self && we.current.stateNode !== T.__self) {
          var L = er(we.current.type);
          Vn[L] || (He('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, T.ref), Vn[L] = !0);
        }
      }
      var Ye = function(T, L, G, Z, me, Xe, xe) {
        var Je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: T,
          key: L,
          ref: G,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: Xe
        };
        return Je._store = {}, Object.defineProperty(Je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.defineProperty(Je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: me
        }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
      };
      function Tt(T, L, G) {
        var Z, me = {}, Xe = null, xe = null, Je = null, _t = null;
        if (L != null) {
          br(L) && (xe = L.ref, Se(L)), gi(L) && (Jr(L.key), Xe = "" + L.key), Je = L.__self === void 0 ? null : L.__self, _t = L.__source === void 0 ? null : L.__source;
          for (Z in L)
            bn.call(L, Z) && !Kn.hasOwnProperty(Z) && (me[Z] = L[Z]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          me.children = G;
        else if (Ut > 1) {
          for (var sn = Array(Ut), Zt = 0; Zt < Ut; Zt++)
            sn[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(sn), me.children = sn;
        }
        if (T && T.defaultProps) {
          var xt = T.defaultProps;
          for (Z in xt)
            me[Z] === void 0 && (me[Z] = xt[Z]);
        }
        if (Xe || xe) {
          var Jt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          Xe && ra(me, Jt), xe && Ta(me, Jt);
        }
        return Ye(T, Xe, xe, Je, _t, we.current, me);
      }
      function Yt(T, L) {
        var G = Ye(T.type, L, T.ref, T._self, T._source, T._owner, T.props);
        return G;
      }
      function an(T, L, G) {
        if (T == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
        var Z, me = te({}, T.props), Xe = T.key, xe = T.ref, Je = T._self, _t = T._source, Ut = T._owner;
        if (L != null) {
          br(L) && (xe = L.ref, Ut = we.current), gi(L) && (Jr(L.key), Xe = "" + L.key);
          var sn;
          T.type && T.type.defaultProps && (sn = T.type.defaultProps);
          for (Z in L)
            bn.call(L, Z) && !Kn.hasOwnProperty(Z) && (L[Z] === void 0 && sn !== void 0 ? me[Z] = sn[Z] : me[Z] = L[Z]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          me.children = G;
        else if (Zt > 1) {
          for (var xt = Array(Zt), Jt = 0; Jt < Zt; Jt++)
            xt[Jt] = arguments[Jt + 2];
          me.children = xt;
        }
        return Ye(T.type, Xe, xe, Je, _t, Ut, me);
      }
      function gn(T) {
        return typeof T == "object" && T !== null && T.$$typeof === p;
      }
      var cn = ".", tr = ":";
      function on(T) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, Z = T.replace(L, function(me) {
          return G[me];
        });
        return "$" + Z;
      }
      var Qt = !1, Xt = /\/+/g;
      function Si(T) {
        return T.replace(Xt, "$&/");
      }
      function Dr(T, L) {
        return typeof T == "object" && T !== null && T.key != null ? (Jr(T.key), on("" + T.key)) : L.toString(36);
      }
      function Ni(T, L, G, Z, me) {
        var Xe = typeof T;
        (Xe === "undefined" || Xe === "boolean") && (T = null);
        var xe = !1;
        if (T === null)
          xe = !0;
        else
          switch (Xe) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (T.$$typeof) {
                case p:
                case g:
                  xe = !0;
              }
          }
        if (xe) {
          var Je = T, _t = me(Je), Ut = Z === "" ? cn + Dr(Je, 0) : Z;
          if (Rn(_t)) {
            var sn = "";
            Ut != null && (sn = Si(Ut) + "/"), Ni(_t, L, sn, "", function(Fd) {
              return Fd;
            });
          } else _t != null && (gn(_t) && (_t.key && (!Je || Je.key !== _t.key) && Jr(_t.key), _t = Yt(
            _t,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (_t.key && (!Je || Je.key !== _t.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Si("" + _t.key) + "/"
            ) : "") + Ut
          )), L.push(_t));
          return 1;
        }
        var Zt, xt, Jt = 0, Sn = Z === "" ? cn : Z + tr;
        if (Rn(T))
          for (var jo = 0; jo < T.length; jo++)
            Zt = T[jo], xt = Sn + Dr(Zt, jo), Jt += Ni(Zt, L, G, xt, me);
        else {
          var Cu = ae(T);
          if (typeof Cu == "function") {
            var to = T;
            Cu === to.entries && (Qt || vt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Tu = Cu.call(to), _l, jd = 0; !(_l = Tu.next()).done; )
              Zt = _l.value, xt = Sn + Dr(Zt, jd++), Jt += Ni(Zt, L, G, xt, me);
          } else if (Xe === "object") {
            var Fc = String(T);
            throw new Error("Objects are not valid as a React child (found: " + (Fc === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : Fc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Za(T, L, G) {
        if (T == null)
          return T;
        var Z = [], me = 0;
        return Ni(T, Z, "", "", function(Xe) {
          return L.call(G, Xe, me++);
        }), Z;
      }
      function El(T) {
        var L = 0;
        return Za(T, function() {
          L++;
        }), L;
      }
      function Cl(T, L, G) {
        Za(T, function() {
          L.apply(this, arguments);
        }, G);
      }
      function Mo(T) {
        return Za(T, function(L) {
          return L;
        }) || [];
      }
      function Oo(T) {
        if (!gn(T))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return T;
      }
      function Tl(T) {
        var L = {
          $$typeof: b,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: T,
          _currentValue2: T,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        L.Provider = {
          $$typeof: D,
          _context: L
        };
        var G = !1, Z = !1, me = !1;
        {
          var Xe = {
            $$typeof: b,
            _context: L
          };
          Object.defineProperties(Xe, {
            Provider: {
              get: function() {
                return Z || (Z = !0, He("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(xe) {
                L.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(xe) {
                L._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(xe) {
                L._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(xe) {
                L._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, He("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(xe) {
                me || (vt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), me = !0);
              }
            }
          }), L.Consumer = Xe;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Lr = -1, Nr = 0, ur = 1, xa = 2;
      function ia(T) {
        if (T._status === Lr) {
          var L = T._result, G = L();
          if (G.then(function(Xe) {
            if (T._status === Nr || T._status === Lr) {
              var xe = T;
              xe._status = ur, xe._result = Xe;
            }
          }, function(Xe) {
            if (T._status === Nr || T._status === Lr) {
              var xe = T;
              xe._status = xa, xe._result = Xe;
            }
          }), T._status === Lr) {
            var Z = T;
            Z._status = Nr, Z._result = G;
          }
        }
        if (T._status === ur) {
          var me = T._result;
          return me === void 0 && He(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, me), "default" in me || He(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, me), me.default;
        } else
          throw T._result;
      }
      function wa(T) {
        var L = {
          // We use these fields to store the result.
          _status: Lr,
          _result: T
        }, G = {
          $$typeof: B,
          _payload: L,
          _init: ia
        };
        {
          var Z, me;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Xe) {
                He("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Xe, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return me;
              },
              set: function(Xe) {
                He("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), me = Xe, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function Ra(T) {
        T != null && T.$$typeof === F ? He("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof T != "function" ? He("forwardRef requires a render function but was given %s.", T === null ? "null" : typeof T) : T.length !== 0 && T.length !== 2 && He("forwardRef render functions accept exactly two parameters: props and ref. %s", T.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), T != null && (T.defaultProps != null || T.propTypes != null) && He("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: k,
          render: T
        };
        {
          var G;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(Z) {
              G = Z, !T.name && !T.displayName && (T.displayName = Z);
            }
          });
        }
        return L;
      }
      var N;
      N = /* @__PURE__ */ Symbol.for("react.module.reference");
      function se(T) {
        return !!(typeof T == "string" || typeof T == "function" || T === E || T === w || yt || T === v || T === M || T === A || ze || T === X || Te || rt || tt || typeof T == "object" && T !== null && (T.$$typeof === B || T.$$typeof === F || T.$$typeof === D || T.$$typeof === b || T.$$typeof === k || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        T.$$typeof === N || T.getModuleId !== void 0));
      }
      function Re(T, L) {
        se(T) || He("memo: The first argument must be a component. Instead received: %s", T === null ? "null" : typeof T);
        var G = {
          $$typeof: F,
          type: T,
          compare: L === void 0 ? null : L
        };
        {
          var Z;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Z;
            },
            set: function(me) {
              Z = me, !T.name && !T.displayName && (T.displayName = me);
            }
          });
        }
        return G;
      }
      function Ve() {
        var T = ne.current;
        return T === null && He(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), T;
      }
      function dt(T) {
        var L = Ve();
        if (T._context !== void 0) {
          var G = T._context;
          G.Consumer === T ? He("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === T && He("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(T);
      }
      function ut(T) {
        var L = Ve();
        return L.useState(T);
      }
      function kt(T, L, G) {
        var Z = Ve();
        return Z.useReducer(T, L, G);
      }
      function bt(T) {
        var L = Ve();
        return L.useRef(T);
      }
      function Dn(T, L) {
        var G = Ve();
        return G.useEffect(T, L);
      }
      function ln(T, L) {
        var G = Ve();
        return G.useInsertionEffect(T, L);
      }
      function fn(T, L) {
        var G = Ve();
        return G.useLayoutEffect(T, L);
      }
      function cr(T, L) {
        var G = Ve();
        return G.useCallback(T, L);
      }
      function aa(T, L) {
        var G = Ve();
        return G.useMemo(T, L);
      }
      function oa(T, L, G) {
        var Z = Ve();
        return Z.useImperativeHandle(T, L, G);
      }
      function pt(T, L) {
        {
          var G = Ve();
          return G.useDebugValue(T, L);
        }
      }
      function St() {
        var T = Ve();
        return T.useTransition();
      }
      function la(T) {
        var L = Ve();
        return L.useDeferredValue(T);
      }
      function xl() {
        var T = Ve();
        return T.useId();
      }
      function wl(T, L, G) {
        var Z = Ve();
        return Z.useSyncExternalStore(T, L, G);
      }
      var Ao = 0, ms, Lo, ei, yu, Pr, zc, jc;
      function ys() {
      }
      ys.__reactDisabledLog = !0;
      function No() {
        {
          if (Ao === 0) {
            ms = console.log, Lo = console.info, ei = console.warn, yu = console.error, Pr = console.group, zc = console.groupCollapsed, jc = console.groupEnd;
            var T = {
              configurable: !0,
              enumerable: !0,
              value: ys,
              writable: !0
            };
            Object.defineProperties(console, {
              info: T,
              log: T,
              warn: T,
              error: T,
              group: T,
              groupCollapsed: T,
              groupEnd: T
            });
          }
          Ao++;
        }
      }
      function Ei() {
        {
          if (Ao--, Ao === 0) {
            var T = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: te({}, T, {
                value: ms
              }),
              info: te({}, T, {
                value: Lo
              }),
              warn: te({}, T, {
                value: ei
              }),
              error: te({}, T, {
                value: yu
              }),
              group: te({}, T, {
                value: Pr
              }),
              groupCollapsed: te({}, T, {
                value: zc
              }),
              groupEnd: te({}, T, {
                value: jc
              })
            });
          }
          Ao < 0 && He("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var sa = ht.ReactCurrentDispatcher, ua;
      function gs(T, L, G) {
        {
          if (ua === void 0)
            try {
              throw Error();
            } catch (me) {
              var Z = me.stack.trim().match(/\n( *(at )?)/);
              ua = Z && Z[1] || "";
            }
          return `
` + ua + T;
        }
      }
      var Rl = !1, Po;
      {
        var Ss = typeof WeakMap == "function" ? WeakMap : Map;
        Po = new Ss();
      }
      function Es(T, L) {
        if (!T || Rl)
          return "";
        {
          var G = Po.get(T);
          if (G !== void 0)
            return G;
        }
        var Z;
        Rl = !0;
        var me = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Xe;
        Xe = sa.current, sa.current = null, No();
        try {
          if (L) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (Sn) {
                Z = Sn;
              }
              Reflect.construct(T, [], xe);
            } else {
              try {
                xe.call();
              } catch (Sn) {
                Z = Sn;
              }
              T.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              Z = Sn;
            }
            T();
          }
        } catch (Sn) {
          if (Sn && Z && typeof Sn.stack == "string") {
            for (var Je = Sn.stack.split(`
`), _t = Z.stack.split(`
`), Ut = Je.length - 1, sn = _t.length - 1; Ut >= 1 && sn >= 0 && Je[Ut] !== _t[sn]; )
              sn--;
            for (; Ut >= 1 && sn >= 0; Ut--, sn--)
              if (Je[Ut] !== _t[sn]) {
                if (Ut !== 1 || sn !== 1)
                  do
                    if (Ut--, sn--, sn < 0 || Je[Ut] !== _t[sn]) {
                      var Zt = `
` + Je[Ut].replace(" at new ", " at ");
                      return T.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", T.displayName)), typeof T == "function" && Po.set(T, Zt), Zt;
                    }
                  while (Ut >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          Rl = !1, sa.current = Xe, Ei(), Error.prepareStackTrace = me;
        }
        var xt = T ? T.displayName || T.name : "", Jt = xt ? gs(xt) : "";
        return typeof T == "function" && Po.set(T, Jt), Jt;
      }
      function Ja(T, L, G) {
        return Es(T, !1);
      }
      function Ud(T) {
        var L = T.prototype;
        return !!(L && L.isReactComponent);
      }
      function eo(T, L, G) {
        if (T == null)
          return "";
        if (typeof T == "function")
          return Es(T, Ud(T));
        if (typeof T == "string")
          return gs(T);
        switch (T) {
          case M:
            return gs("Suspense");
          case A:
            return gs("SuspenseList");
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case k:
              return Ja(T.render);
            case F:
              return eo(T.type, L, G);
            case B: {
              var Z = T, me = Z._payload, Xe = Z._init;
              try {
                return eo(Xe(me), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var jt = {}, Cs = ht.ReactDebugCurrentFrame;
      function Vt(T) {
        if (T) {
          var L = T._owner, G = eo(T.type, T._source, L ? L.type : null);
          Cs.setExtraStackFrame(G);
        } else
          Cs.setExtraStackFrame(null);
      }
      function gu(T, L, G, Z, me) {
        {
          var Xe = Function.call.bind(bn);
          for (var xe in T)
            if (Xe(T, xe)) {
              var Je = void 0;
              try {
                if (typeof T[xe] != "function") {
                  var _t = Error((Z || "React class") + ": " + G + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _t.name = "Invariant Violation", _t;
                }
                Je = T[xe](L, xe, Z, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                Je = Ut;
              }
              Je && !(Je instanceof Error) && (Vt(me), He("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", G, xe, typeof Je), Vt(null)), Je instanceof Error && !(Je.message in jt) && (jt[Je.message] = !0, Vt(me), He("Failed %s type: %s", G, Je.message), Vt(null));
            }
        }
      }
      function ba(T) {
        if (T) {
          var L = T._owner, G = eo(T.type, T._source, L ? L.type : null);
          Ue(G);
        } else
          Ue(null);
      }
      var st;
      st = !1;
      function Ts() {
        if (we.current) {
          var T = er(we.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
      function fr(T) {
        if (T !== void 0) {
          var L = T.fileName.replace(/^.*[\\\/]/, ""), G = T.lineNumber;
          return `

Check your code at ` + L + ":" + G + ".";
        }
        return "";
      }
      function Da(T) {
        return T != null ? fr(T.__source) : "";
      }
      var Vr = {};
      function ka(T) {
        var L = Ts();
        if (!L) {
          var G = typeof T == "string" ? T : T.displayName || T.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
      function dn(T, L) {
        if (!(!T._store || T._store.validated || T.key != null)) {
          T._store.validated = !0;
          var G = ka(L);
          if (!Vr[G]) {
            Vr[G] = !0;
            var Z = "";
            T && T._owner && T._owner !== we.current && (Z = " It was passed a child from " + er(T._owner.type) + "."), ba(T), He('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Z), ba(null);
          }
        }
      }
      function qt(T, L) {
        if (typeof T == "object") {
          if (Rn(T))
            for (var G = 0; G < T.length; G++) {
              var Z = T[G];
              gn(Z) && dn(Z, L);
            }
          else if (gn(T))
            T._store && (T._store.validated = !0);
          else if (T) {
            var me = ae(T);
            if (typeof me == "function" && me !== T.entries)
              for (var Xe = me.call(T), xe; !(xe = Xe.next()).done; )
                gn(xe.value) && dn(xe.value, L);
          }
        }
      }
      function Vo(T) {
        {
          var L = T.type;
          if (L == null || typeof L == "string")
            return;
          var G;
          if (typeof L == "function")
            G = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === k || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === F))
            G = L.propTypes;
          else
            return;
          if (G) {
            var Z = er(L);
            gu(G, T.props, "prop", Z, T);
          } else if (L.PropTypes !== void 0 && !st) {
            st = !0;
            var me = er(L);
            He("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && He("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(T) {
        {
          for (var L = Object.keys(T.props), G = 0; G < L.length; G++) {
            var Z = L[G];
            if (Z !== "children" && Z !== "key") {
              ba(T), He("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), ba(null);
              break;
            }
          }
          T.ref !== null && (ba(T), He("Invalid attribute `ref` supplied to `React.Fragment`."), ba(null));
        }
      }
      function Ur(T, L, G) {
        var Z = se(T);
        if (!Z) {
          var me = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = Da(L);
          Xe ? me += Xe : me += Ts();
          var xe;
          T === null ? xe = "null" : Rn(T) ? xe = "array" : T !== void 0 && T.$$typeof === p ? (xe = "<" + (er(T.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof T, He("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, me);
        }
        var Je = Tt.apply(this, arguments);
        if (Je == null)
          return Je;
        if (Z)
          for (var _t = 2; _t < arguments.length; _t++)
            qt(arguments[_t], T);
        return T === E ? Qn(Je) : Vo(Je), Je;
      }
      var Pi = !1;
      function bl(T) {
        var L = Ur.bind(null, T);
        return L.type = T, Pi || (Pi = !0, vt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return vt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: T
            }), T;
          }
        }), L;
      }
      function Su(T, L, G) {
        for (var Z = an.apply(this, arguments), me = 2; me < arguments.length; me++)
          qt(arguments[me], Z.type);
        return Vo(Z), Z;
      }
      function Eu(T, L) {
        var G = oe.transition;
        oe.transition = {};
        var Z = oe.transition;
        oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          T();
        } finally {
          if (oe.transition = G, G === null && Z._updatedFibers) {
            var me = Z._updatedFibers.size;
            me > 10 && vt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Z._updatedFibers.clear();
          }
        }
      }
      var Uo = !1, Dl = null;
      function zd(T) {
        if (Dl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), G = a && a[L];
            Dl = G.call(a, "timers").setImmediate;
          } catch {
            Dl = function(me) {
              Uo === !1 && (Uo = !0, typeof MessageChannel > "u" && He("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Xe = new MessageChannel();
              Xe.port1.onmessage = me, Xe.port2.postMessage(void 0);
            };
          }
        return Dl(T);
      }
      var Vi = 0, ca = !1;
      function _a(T) {
        {
          var L = Vi;
          Vi++, pe.current === null && (pe.current = []);
          var G = pe.isBatchingLegacy, Z;
          try {
            if (pe.isBatchingLegacy = !0, Z = T(), !G && pe.didScheduleLegacyUpdate) {
              var me = pe.current;
              me !== null && (pe.didScheduleLegacyUpdate = !1, zo(me));
            }
          } catch (xt) {
            throw Ui(L), xt;
          } finally {
            pe.isBatchingLegacy = G;
          }
          if (Z !== null && typeof Z == "object" && typeof Z.then == "function") {
            var Xe = Z, xe = !1, Je = {
              then: function(xt, Jt) {
                xe = !0, Xe.then(function(Sn) {
                  Ui(L), Vi === 0 ? xs(Sn, xt, Jt) : xt(Sn);
                }, function(Sn) {
                  Ui(L), Jt(Sn);
                });
              }
            };
            return !ca && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (ca = !0, He("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Je;
          } else {
            var _t = Z;
            if (Ui(L), Vi === 0) {
              var Ut = pe.current;
              Ut !== null && (zo(Ut), pe.current = null);
              var sn = {
                then: function(xt, Jt) {
                  pe.current === null ? (pe.current = [], xs(_t, xt, Jt)) : xt(_t);
                }
              };
              return sn;
            } else {
              var Zt = {
                then: function(xt, Jt) {
                  xt(_t);
                }
              };
              return Zt;
            }
          }
        }
      }
      function Ui(T) {
        T !== Vi - 1 && He("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Vi = T;
      }
      function xs(T, L, G) {
        {
          var Z = pe.current;
          if (Z !== null)
            try {
              zo(Z), zd(function() {
                Z.length === 0 ? (pe.current = null, L(T)) : xs(T, L, G);
              });
            } catch (me) {
              G(me);
            }
          else
            L(T);
        }
      }
      var ws = !1;
      function zo(T) {
        if (!ws) {
          ws = !0;
          var L = 0;
          try {
            for (; L < T.length; L++) {
              var G = T[L];
              do
                G = G(!0);
              while (G !== null);
            }
            T.length = 0;
          } catch (Z) {
            throw T = T.slice(L + 1), Z;
          } finally {
            ws = !1;
          }
        }
      }
      var kl = Ur, Rs = Su, bs = bl, fa = {
        map: Za,
        forEach: Cl,
        count: El,
        toArray: Mo,
        only: Oo
      };
      l.Children = fa, l.Component = nt, l.Fragment = E, l.Profiler = w, l.PureComponent = Rt, l.StrictMode = v, l.Suspense = M, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, l.act = _a, l.cloneElement = Rs, l.createContext = Tl, l.createElement = kl, l.createFactory = bs, l.createRef = Pn, l.forwardRef = Ra, l.isValidElement = gn, l.lazy = wa, l.memo = Re, l.startTransition = Eu, l.unstable_act = _a, l.useCallback = cr, l.useContext = dt, l.useDebugValue = pt, l.useDeferredValue = la, l.useEffect = Dn, l.useId = xl, l.useImperativeHandle = oa, l.useInsertionEffect = ln, l.useLayoutEffect = fn, l.useMemo = aa, l.useReducer = kt, l.useRef = bt, l.useState = ut, l.useSyncExternalStore = wl, l.useTransition = St, l.version = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Yh, Yh.exports)), Yh.exports;
}
var GR;
function ev() {
  return GR || (GR = 1, process.env.NODE_ENV === "production" ? qy.exports = QL() : qy.exports = XL()), qy.exports;
}
var KR;
function qL() {
  if (KR) return Hh;
  KR = 1;
  var a = ev(), l = /* @__PURE__ */ Symbol.for("react.element"), c = /* @__PURE__ */ Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, g = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(w, D, b) {
    var k, M = {}, A = null, F = null;
    b !== void 0 && (A = "" + b), D.key !== void 0 && (A = "" + D.key), D.ref !== void 0 && (F = D.ref);
    for (k in D) p.call(D, k) && !E.hasOwnProperty(k) && (M[k] = D[k]);
    if (w && w.defaultProps) for (k in D = w.defaultProps, D) M[k] === void 0 && (M[k] = D[k]);
    return { $$typeof: l, type: w, key: A, ref: F, props: M, _owner: g.current };
  }
  return Hh.Fragment = c, Hh.jsx = v, Hh.jsxs = v, Hh;
}
var Ih = {};
var QR;
function ZL() {
  return QR || (QR = 1, process.env.NODE_ENV !== "production" && (function() {
    var a = ev(), l = /* @__PURE__ */ Symbol.for("react.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), g = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.provider"), w = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), M = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.offscreen"), B = Symbol.iterator, X = "@@iterator";
    function q(N) {
      if (N === null || typeof N != "object")
        return null;
      var se = B && N[B] || N[X];
      return typeof se == "function" ? se : null;
    }
    var ie = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ae(N) {
      {
        for (var se = arguments.length, Re = new Array(se > 1 ? se - 1 : 0), Ve = 1; Ve < se; Ve++)
          Re[Ve - 1] = arguments[Ve];
        ne("error", N, Re);
      }
    }
    function ne(N, se, Re) {
      {
        var Ve = ie.ReactDebugCurrentFrame, dt = Ve.getStackAddendum();
        dt !== "" && (se += "%s", Re = Re.concat([dt]));
        var ut = Re.map(function(kt) {
          return String(kt);
        });
        ut.unshift("Warning: " + se), Function.prototype.apply.call(console[N], console, ut);
      }
    }
    var oe = !1, pe = !1, we = !1, ge = !1, Ee = !1, Ue;
    Ue = /* @__PURE__ */ Symbol.for("react.module.reference");
    function Te(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === p || N === E || Ee || N === g || N === b || N === k || ge || N === F || oe || pe || we || typeof N == "object" && N !== null && (N.$$typeof === A || N.$$typeof === M || N.$$typeof === v || N.$$typeof === w || N.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === Ue || N.getModuleId !== void 0));
    }
    function rt(N, se, Re) {
      var Ve = N.displayName;
      if (Ve)
        return Ve;
      var dt = se.displayName || se.name || "";
      return dt !== "" ? Re + "(" + dt + ")" : Re;
    }
    function tt(N) {
      return N.displayName || "Context";
    }
    function ze(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && ae("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case E:
          return "Profiler";
        case g:
          return "StrictMode";
        case b:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case w:
            var se = N;
            return tt(se) + ".Consumer";
          case v:
            var Re = N;
            return tt(Re._context) + ".Provider";
          case D:
            return rt(N, N.render, "ForwardRef");
          case M:
            var Ve = N.displayName || null;
            return Ve !== null ? Ve : ze(N.type) || "Memo";
          case A: {
            var dt = N, ut = dt._payload, kt = dt._init;
            try {
              return ze(kt(ut));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var yt = Object.assign, ht = 0, vt, He, le, ke, ye, j, te;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function nt() {
      {
        if (ht === 0) {
          vt = console.log, He = console.info, le = console.warn, ke = console.error, ye = console.group, j = console.groupCollapsed, te = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: at,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        ht++;
      }
    }
    function wt() {
      {
        if (ht--, ht === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: yt({}, N, {
              value: vt
            }),
            info: yt({}, N, {
              value: He
            }),
            warn: yt({}, N, {
              value: le
            }),
            error: yt({}, N, {
              value: ke
            }),
            group: yt({}, N, {
              value: ye
            }),
            groupCollapsed: yt({}, N, {
              value: j
            }),
            groupEnd: yt({}, N, {
              value: te
            })
          });
        }
        ht < 0 && ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Et = ie.ReactCurrentDispatcher, gt;
    function Ct(N, se, Re) {
      {
        if (gt === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Ve = dt.stack.trim().match(/\n( *(at )?)/);
            gt = Ve && Ve[1] || "";
          }
        return `
` + gt + N;
      }
    }
    var Rt = !1, Kt;
    {
      var Pn = typeof WeakMap == "function" ? WeakMap : Map;
      Kt = new Pn();
    }
    function Ar(N, se) {
      if (!N || Rt)
        return "";
      {
        var Re = Kt.get(N);
        if (Re !== void 0)
          return Re;
      }
      var Ve;
      Rt = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ut;
      ut = Et.current, Et.current = null, nt();
      try {
        if (se) {
          var kt = function() {
            throw Error();
          };
          if (Object.defineProperty(kt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(kt, []);
            } catch (pt) {
              Ve = pt;
            }
            Reflect.construct(N, [], kt);
          } else {
            try {
              kt.call();
            } catch (pt) {
              Ve = pt;
            }
            N.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            Ve = pt;
          }
          N();
        }
      } catch (pt) {
        if (pt && Ve && typeof pt.stack == "string") {
          for (var bt = pt.stack.split(`
`), Dn = Ve.stack.split(`
`), ln = bt.length - 1, fn = Dn.length - 1; ln >= 1 && fn >= 0 && bt[ln] !== Dn[fn]; )
            fn--;
          for (; ln >= 1 && fn >= 0; ln--, fn--)
            if (bt[ln] !== Dn[fn]) {
              if (ln !== 1 || fn !== 1)
                do
                  if (ln--, fn--, fn < 0 || bt[ln] !== Dn[fn]) {
                    var cr = `
` + bt[ln].replace(" at new ", " at ");
                    return N.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", N.displayName)), typeof N == "function" && Kt.set(N, cr), cr;
                  }
                while (ln >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        Rt = !1, Et.current = ut, wt(), Error.prepareStackTrace = dt;
      }
      var aa = N ? N.displayName || N.name : "", oa = aa ? Ct(aa) : "";
      return typeof N == "function" && Kt.set(N, oa), oa;
    }
    function Rn(N, se, Re) {
      return Ar(N, !1);
    }
    function sr(N) {
      var se = N.prototype;
      return !!(se && se.isReactComponent);
    }
    function Wn(N, se, Re) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Ar(N, sr(N));
      if (typeof N == "string")
        return Ct(N);
      switch (N) {
        case b:
          return Ct("Suspense");
        case k:
          return Ct("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case D:
            return Rn(N.render);
          case M:
            return Wn(N.type, se, Re);
          case A: {
            var Ve = N, dt = Ve._payload, ut = Ve._init;
            try {
              return Wn(ut(dt), se, Re);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Jr = {}, Ca = ie.ReactDebugCurrentFrame;
    function yi(N) {
      if (N) {
        var se = N._owner, Re = Wn(N.type, N._source, se ? se.type : null);
        Ca.setExtraStackFrame(Re);
      } else
        Ca.setExtraStackFrame(null);
    }
    function er(N, se, Re, Ve, dt) {
      {
        var ut = Function.call.bind(Gn);
        for (var kt in N)
          if (ut(N, kt)) {
            var bt = void 0;
            try {
              if (typeof N[kt] != "function") {
                var Dn = Error((Ve || "React class") + ": " + Re + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              bt = N[kt](se, kt, Ve, Re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              bt = ln;
            }
            bt && !(bt instanceof Error) && (yi(dt), ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", Re, kt, typeof bt), yi(null)), bt instanceof Error && !(bt.message in Jr) && (Jr[bt.message] = !0, yi(dt), ae("Failed %s type: %s", Re, bt.message), yi(null));
          }
      }
    }
    var bn = Array.isArray;
    function Kn(N) {
      return bn(N);
    }
    function Rr(N) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, Re = se && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Re;
      }
    }
    function na(N) {
      try {
        return Vn(N), !1;
      } catch {
        return !0;
      }
    }
    function Vn(N) {
      return "" + N;
    }
    function br(N) {
      if (na(N))
        return ae("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(N)), Vn(N);
    }
    var gi = ie.ReactCurrentOwner, ra = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ta, Se;
    function Ye(N) {
      if (Gn.call(N, "ref")) {
        var se = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Tt(N) {
      if (Gn.call(N, "key")) {
        var se = Object.getOwnPropertyDescriptor(N, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Yt(N, se) {
      typeof N.ref == "string" && gi.current;
    }
    function an(N, se) {
      {
        var Re = function() {
          Ta || (Ta = !0, ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Re.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Re,
          configurable: !0
        });
      }
    }
    function gn(N, se) {
      {
        var Re = function() {
          Se || (Se = !0, ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        Re.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Re,
          configurable: !0
        });
      }
    }
    var cn = function(N, se, Re, Ve, dt, ut, kt) {
      var bt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: N,
        key: se,
        ref: Re,
        props: kt,
        // Record the component responsible for creating this element.
        _owner: ut
      };
      return bt._store = {}, Object.defineProperty(bt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(bt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(bt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(bt.props), Object.freeze(bt)), bt;
    };
    function tr(N, se, Re, Ve, dt) {
      {
        var ut, kt = {}, bt = null, Dn = null;
        Re !== void 0 && (br(Re), bt = "" + Re), Tt(se) && (br(se.key), bt = "" + se.key), Ye(se) && (Dn = se.ref, Yt(se, dt));
        for (ut in se)
          Gn.call(se, ut) && !ra.hasOwnProperty(ut) && (kt[ut] = se[ut]);
        if (N && N.defaultProps) {
          var ln = N.defaultProps;
          for (ut in ln)
            kt[ut] === void 0 && (kt[ut] = ln[ut]);
        }
        if (bt || Dn) {
          var fn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          bt && an(kt, fn), Dn && gn(kt, fn);
        }
        return cn(N, bt, Dn, dt, Ve, gi.current, kt);
      }
    }
    var on = ie.ReactCurrentOwner, Qt = ie.ReactDebugCurrentFrame;
    function Xt(N) {
      if (N) {
        var se = N._owner, Re = Wn(N.type, N._source, se ? se.type : null);
        Qt.setExtraStackFrame(Re);
      } else
        Qt.setExtraStackFrame(null);
    }
    var Si;
    Si = !1;
    function Dr(N) {
      return typeof N == "object" && N !== null && N.$$typeof === l;
    }
    function Ni() {
      {
        if (on.current) {
          var N = ze(on.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Za(N) {
      return "";
    }
    var El = {};
    function Cl(N) {
      {
        var se = Ni();
        if (!se) {
          var Re = typeof N == "string" ? N : N.displayName || N.name;
          Re && (se = `

Check the top-level render call using <` + Re + ">.");
        }
        return se;
      }
    }
    function Mo(N, se) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Re = Cl(se);
        if (El[Re])
          return;
        El[Re] = !0;
        var Ve = "";
        N && N._owner && N._owner !== on.current && (Ve = " It was passed a child from " + ze(N._owner.type) + "."), Xt(N), ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Re, Ve), Xt(null);
      }
    }
    function Oo(N, se) {
      {
        if (typeof N != "object")
          return;
        if (Kn(N))
          for (var Re = 0; Re < N.length; Re++) {
            var Ve = N[Re];
            Dr(Ve) && Mo(Ve, se);
          }
        else if (Dr(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var dt = q(N);
          if (typeof dt == "function" && dt !== N.entries)
            for (var ut = dt.call(N), kt; !(kt = ut.next()).done; )
              Dr(kt.value) && Mo(kt.value, se);
        }
      }
    }
    function Tl(N) {
      {
        var se = N.type;
        if (se == null || typeof se == "string")
          return;
        var Re;
        if (typeof se == "function")
          Re = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === M))
          Re = se.propTypes;
        else
          return;
        if (Re) {
          var Ve = ze(se);
          er(Re, N.props, "prop", Ve, N);
        } else if (se.PropTypes !== void 0 && !Si) {
          Si = !0;
          var dt = ze(se);
          ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(N) {
      {
        for (var se = Object.keys(N.props), Re = 0; Re < se.length; Re++) {
          var Ve = se[Re];
          if (Ve !== "children" && Ve !== "key") {
            Xt(N), ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), Xt(null);
            break;
          }
        }
        N.ref !== null && (Xt(N), ae("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    var Nr = {};
    function ur(N, se, Re, Ve, dt, ut) {
      {
        var kt = Te(N);
        if (!kt) {
          var bt = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (bt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Za();
          Dn ? bt += Dn : bt += Ni();
          var ln;
          N === null ? ln = "null" : Kn(N) ? ln = "array" : N !== void 0 && N.$$typeof === l ? (ln = "<" + (ze(N.type) || "Unknown") + " />", bt = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof N, ae("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, bt);
        }
        var fn = tr(N, se, Re, dt, ut);
        if (fn == null)
          return fn;
        if (kt) {
          var cr = se.children;
          if (cr !== void 0)
            if (Ve)
              if (Kn(cr)) {
                for (var aa = 0; aa < cr.length; aa++)
                  Oo(cr[aa], N);
                Object.freeze && Object.freeze(cr);
              } else
                ae("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oo(cr, N);
        }
        if (Gn.call(se, "key")) {
          var oa = ze(N), pt = Object.keys(se).filter(function(xl) {
            return xl !== "key";
          }), St = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[oa + St]) {
            var la = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            ae(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, St, oa, la, oa), Nr[oa + St] = !0;
          }
        }
        return N === p ? Lr(fn) : Tl(fn), fn;
      }
    }
    function xa(N, se, Re) {
      return ur(N, se, Re, !0);
    }
    function ia(N, se, Re) {
      return ur(N, se, Re, !1);
    }
    var wa = ia, Ra = xa;
    Ih.Fragment = p, Ih.jsx = wa, Ih.jsxs = Ra;
  })()), Ih;
}
var XR;
function JL() {
  return XR || (XR = 1, process.env.NODE_ENV === "production" ? Xy.exports = qL() : Xy.exports = ZL()), Xy.exports;
}
var Me = JL(), Le = ev();
const eN = /* @__PURE__ */ x1(Le);
var wd = {}, Zy = { exports: {} }, Ji = {}, Jy = { exports: {} }, YE = {};
var qR;
function tN() {
  return qR || (qR = 1, (function(a) {
    function l(le, ke) {
      var ye = le.length;
      le.push(ke);
      e: for (; 0 < ye; ) {
        var j = ye - 1 >>> 1, te = le[j];
        if (0 < g(te, ke)) le[j] = ke, le[ye] = te, ye = j;
        else break e;
      }
    }
    function c(le) {
      return le.length === 0 ? null : le[0];
    }
    function p(le) {
      if (le.length === 0) return null;
      var ke = le[0], ye = le.pop();
      if (ye !== ke) {
        le[0] = ye;
        e: for (var j = 0, te = le.length, at = te >>> 1; j < at; ) {
          var nt = 2 * (j + 1) - 1, wt = le[nt], Et = nt + 1, gt = le[Et];
          if (0 > g(wt, ye)) Et < te && 0 > g(gt, wt) ? (le[j] = gt, le[Et] = ye, j = Et) : (le[j] = wt, le[nt] = ye, j = nt);
          else if (Et < te && 0 > g(gt, ye)) le[j] = gt, le[Et] = ye, j = Et;
          else break e;
        }
      }
      return ke;
    }
    function g(le, ke) {
      var ye = le.sortIndex - ke.sortIndex;
      return ye !== 0 ? ye : le.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      a.unstable_now = function() {
        return E.now();
      };
    } else {
      var v = Date, w = v.now();
      a.unstable_now = function() {
        return v.now() - w;
      };
    }
    var D = [], b = [], k = 1, M = null, A = 3, F = !1, B = !1, X = !1, q = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(le) {
      for (var ke = c(b); ke !== null; ) {
        if (ke.callback === null) p(b);
        else if (ke.startTime <= le) p(b), ke.sortIndex = ke.expirationTime, l(D, ke);
        else break;
        ke = c(b);
      }
    }
    function oe(le) {
      if (X = !1, ne(le), !B) if (c(D) !== null) B = !0, vt(pe);
      else {
        var ke = c(b);
        ke !== null && He(oe, ke.startTime - le);
      }
    }
    function pe(le, ke) {
      B = !1, X && (X = !1, ie(Ee), Ee = -1), F = !0;
      var ye = A;
      try {
        for (ne(ke), M = c(D); M !== null && (!(M.expirationTime > ke) || le && !rt()); ) {
          var j = M.callback;
          if (typeof j == "function") {
            M.callback = null, A = M.priorityLevel;
            var te = j(M.expirationTime <= ke);
            ke = a.unstable_now(), typeof te == "function" ? M.callback = te : M === c(D) && p(D), ne(ke);
          } else p(D);
          M = c(D);
        }
        if (M !== null) var at = !0;
        else {
          var nt = c(b);
          nt !== null && He(oe, nt.startTime - ke), at = !1;
        }
        return at;
      } finally {
        M = null, A = ye, F = !1;
      }
    }
    var we = !1, ge = null, Ee = -1, Ue = 5, Te = -1;
    function rt() {
      return !(a.unstable_now() - Te < Ue);
    }
    function tt() {
      if (ge !== null) {
        var le = a.unstable_now();
        Te = le;
        var ke = !0;
        try {
          ke = ge(!0, le);
        } finally {
          ke ? ze() : (we = !1, ge = null);
        }
      } else we = !1;
    }
    var ze;
    if (typeof ae == "function") ze = function() {
      ae(tt);
    };
    else if (typeof MessageChannel < "u") {
      var yt = new MessageChannel(), ht = yt.port2;
      yt.port1.onmessage = tt, ze = function() {
        ht.postMessage(null);
      };
    } else ze = function() {
      q(tt, 0);
    };
    function vt(le) {
      ge = le, we || (we = !0, ze());
    }
    function He(le, ke) {
      Ee = q(function() {
        le(a.unstable_now());
      }, ke);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(le) {
      le.callback = null;
    }, a.unstable_continueExecution = function() {
      B || F || (B = !0, vt(pe));
    }, a.unstable_forceFrameRate = function(le) {
      0 > le || 125 < le ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ue = 0 < le ? Math.floor(1e3 / le) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, a.unstable_getFirstCallbackNode = function() {
      return c(D);
    }, a.unstable_next = function(le) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = A;
      }
      var ye = A;
      A = ke;
      try {
        return le();
      } finally {
        A = ye;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(le, ke) {
      switch (le) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          le = 3;
      }
      var ye = A;
      A = le;
      try {
        return ke();
      } finally {
        A = ye;
      }
    }, a.unstable_scheduleCallback = function(le, ke, ye) {
      var j = a.unstable_now();
      switch (typeof ye == "object" && ye !== null ? (ye = ye.delay, ye = typeof ye == "number" && 0 < ye ? j + ye : j) : ye = j, le) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = ye + te, le = { id: k++, callback: ke, priorityLevel: le, startTime: ye, expirationTime: te, sortIndex: -1 }, ye > j ? (le.sortIndex = ye, l(b, le), c(D) === null && le === c(b) && (X ? (ie(Ee), Ee = -1) : X = !0, He(oe, ye - j))) : (le.sortIndex = te, l(D, le), B || F || (B = !0, vt(pe))), le;
    }, a.unstable_shouldYield = rt, a.unstable_wrapCallback = function(le) {
      var ke = A;
      return function() {
        var ye = A;
        A = ke;
        try {
          return le.apply(this, arguments);
        } finally {
          A = ye;
        }
      };
    };
  })(YE)), YE;
}
var WE = {};
var ZR;
function nN() {
  return ZR || (ZR = 1, (function(a) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, c = 5;
      function p(Se, Ye) {
        var Tt = Se.length;
        Se.push(Ye), v(Se, Ye, Tt);
      }
      function g(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function E(Se) {
        if (Se.length === 0)
          return null;
        var Ye = Se[0], Tt = Se.pop();
        return Tt !== Ye && (Se[0] = Tt, w(Se, Tt, 0)), Ye;
      }
      function v(Se, Ye, Tt) {
        for (var Yt = Tt; Yt > 0; ) {
          var an = Yt - 1 >>> 1, gn = Se[an];
          if (D(gn, Ye) > 0)
            Se[an] = Ye, Se[Yt] = gn, Yt = an;
          else
            return;
        }
      }
      function w(Se, Ye, Tt) {
        for (var Yt = Tt, an = Se.length, gn = an >>> 1; Yt < gn; ) {
          var cn = (Yt + 1) * 2 - 1, tr = Se[cn], on = cn + 1, Qt = Se[on];
          if (D(tr, Ye) < 0)
            on < an && D(Qt, tr) < 0 ? (Se[Yt] = Qt, Se[on] = Ye, Yt = on) : (Se[Yt] = tr, Se[cn] = Ye, Yt = cn);
          else if (on < an && D(Qt, Ye) < 0)
            Se[Yt] = Qt, Se[on] = Ye, Yt = on;
          else
            return;
        }
      }
      function D(Se, Ye) {
        var Tt = Se.sortIndex - Ye.sortIndex;
        return Tt !== 0 ? Tt : Se.id - Ye.id;
      }
      var b = 1, k = 2, M = 3, A = 4, F = 5;
      function B(Se, Ye) {
      }
      var X = typeof performance == "object" && typeof performance.now == "function";
      if (X) {
        var q = performance;
        a.unstable_now = function() {
          return q.now();
        };
      } else {
        var ie = Date, ae = ie.now();
        a.unstable_now = function() {
          return ie.now() - ae;
        };
      }
      var ne = 1073741823, oe = -1, pe = 250, we = 5e3, ge = 1e4, Ee = ne, Ue = [], Te = [], rt = 1, tt = null, ze = M, yt = !1, ht = !1, vt = !1, He = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ye(Se) {
        for (var Ye = g(Te); Ye !== null; ) {
          if (Ye.callback === null)
            E(Te);
          else if (Ye.startTime <= Se)
            E(Te), Ye.sortIndex = Ye.expirationTime, p(Ue, Ye);
          else
            return;
          Ye = g(Te);
        }
      }
      function j(Se) {
        if (vt = !1, ye(Se), !ht)
          if (g(Ue) !== null)
            ht = !0, Vn(te);
          else {
            var Ye = g(Te);
            Ye !== null && br(j, Ye.startTime - Se);
          }
      }
      function te(Se, Ye) {
        ht = !1, vt && (vt = !1, gi()), yt = !0;
        var Tt = ze;
        try {
          var Yt;
          if (!l) return at(Se, Ye);
        } finally {
          tt = null, ze = Tt, yt = !1;
        }
      }
      function at(Se, Ye) {
        var Tt = Ye;
        for (ye(Tt), tt = g(Ue); tt !== null && !(tt.expirationTime > Tt && (!Se || Ca())); ) {
          var Yt = tt.callback;
          if (typeof Yt == "function") {
            tt.callback = null, ze = tt.priorityLevel;
            var an = tt.expirationTime <= Tt, gn = Yt(an);
            Tt = a.unstable_now(), typeof gn == "function" ? tt.callback = gn : tt === g(Ue) && E(Ue), ye(Tt);
          } else
            E(Ue);
          tt = g(Ue);
        }
        if (tt !== null)
          return !0;
        var cn = g(Te);
        return cn !== null && br(j, cn.startTime - Tt), !1;
      }
      function nt(Se, Ye) {
        switch (Se) {
          case b:
          case k:
          case M:
          case A:
          case F:
            break;
          default:
            Se = M;
        }
        var Tt = ze;
        ze = Se;
        try {
          return Ye();
        } finally {
          ze = Tt;
        }
      }
      function wt(Se) {
        var Ye;
        switch (ze) {
          case b:
          case k:
          case M:
            Ye = M;
            break;
          default:
            Ye = ze;
            break;
        }
        var Tt = ze;
        ze = Ye;
        try {
          return Se();
        } finally {
          ze = Tt;
        }
      }
      function Et(Se) {
        var Ye = ze;
        return function() {
          var Tt = ze;
          ze = Ye;
          try {
            return Se.apply(this, arguments);
          } finally {
            ze = Tt;
          }
        };
      }
      function gt(Se, Ye, Tt) {
        var Yt = a.unstable_now(), an;
        if (typeof Tt == "object" && Tt !== null) {
          var gn = Tt.delay;
          typeof gn == "number" && gn > 0 ? an = Yt + gn : an = Yt;
        } else
          an = Yt;
        var cn;
        switch (Se) {
          case b:
            cn = oe;
            break;
          case k:
            cn = pe;
            break;
          case F:
            cn = Ee;
            break;
          case A:
            cn = ge;
            break;
          case M:
          default:
            cn = we;
            break;
        }
        var tr = an + cn, on = {
          id: rt++,
          callback: Ye,
          priorityLevel: Se,
          startTime: an,
          expirationTime: tr,
          sortIndex: -1
        };
        return an > Yt ? (on.sortIndex = an, p(Te, on), g(Ue) === null && on === g(Te) && (vt ? gi() : vt = !0, br(j, an - Yt))) : (on.sortIndex = tr, p(Ue, on), !ht && !yt && (ht = !0, Vn(te))), on;
      }
      function Ct() {
      }
      function Rt() {
        !ht && !yt && (ht = !0, Vn(te));
      }
      function Kt() {
        return g(Ue);
      }
      function Pn(Se) {
        Se.callback = null;
      }
      function Ar() {
        return ze;
      }
      var Rn = !1, sr = null, Wn = -1, Gn = c, Jr = -1;
      function Ca() {
        var Se = a.unstable_now() - Jr;
        return !(Se < Gn);
      }
      function yi() {
      }
      function er(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? Gn = Math.floor(1e3 / Se) : Gn = c;
      }
      var bn = function() {
        if (sr !== null) {
          var Se = a.unstable_now();
          Jr = Se;
          var Ye = !0, Tt = !0;
          try {
            Tt = sr(Ye, Se);
          } finally {
            Tt ? Kn() : (Rn = !1, sr = null);
          }
        } else
          Rn = !1;
      }, Kn;
      if (typeof ke == "function")
        Kn = function() {
          ke(bn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), na = Rr.port2;
        Rr.port1.onmessage = bn, Kn = function() {
          na.postMessage(null);
        };
      } else
        Kn = function() {
          He(bn, 0);
        };
      function Vn(Se) {
        sr = Se, Rn || (Rn = !0, Kn());
      }
      function br(Se, Ye) {
        Wn = He(function() {
          Se(a.unstable_now());
        }, Ye);
      }
      function gi() {
        le(Wn), Wn = -1;
      }
      var ra = yi, Ta = null;
      a.unstable_IdlePriority = F, a.unstable_ImmediatePriority = b, a.unstable_LowPriority = A, a.unstable_NormalPriority = M, a.unstable_Profiling = Ta, a.unstable_UserBlockingPriority = k, a.unstable_cancelCallback = Pn, a.unstable_continueExecution = Rt, a.unstable_forceFrameRate = er, a.unstable_getCurrentPriorityLevel = Ar, a.unstable_getFirstCallbackNode = Kt, a.unstable_next = wt, a.unstable_pauseExecution = Ct, a.unstable_requestPaint = ra, a.unstable_runWithPriority = nt, a.unstable_scheduleCallback = gt, a.unstable_shouldYield = Ca, a.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(WE)), WE;
}
var JR;
function w1() {
  return JR || (JR = 1, process.env.NODE_ENV === "production" ? Jy.exports = tN() : Jy.exports = nN()), Jy.exports;
}
var eb;
function rN() {
  if (eb) return Ji;
  eb = 1;
  var a = ev(), l = w1();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), g = {};
  function E(n, r) {
    v(n, r), v(n + "Capture", r);
  }
  function v(n, r) {
    for (g[n] = r, n = 0; n < r.length; n++) p.add(r[n]);
  }
  var w = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, M = {};
  function A(n) {
    return D.call(M, n) ? !0 : D.call(k, n) ? !1 : b.test(n) ? M[n] = !0 : (k[n] = !0, !1);
  }
  function F(n, r, s, f) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function B(n, r, s, f) {
    if (r === null || typeof r > "u" || F(n, r, s, f)) return !0;
    if (f) return !1;
    if (s !== null) switch (s.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function X(n, r, s, f, h, y, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = x;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    q[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    q[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    q[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    q[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    q[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    q[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    q[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    q[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    q[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ie = /[\-:]([a-z])/g;
  function ae(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ie,
      ae
    );
    q[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ie, ae);
    q[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ie, ae);
    q[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    q[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    q[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ne(n, r, s, f) {
    var h = q.hasOwnProperty(r) ? q[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, s, h, f) && (s = null), f || h === null ? A(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : h.mustUseProperty ? n[h.propertyName] = s === null ? h.type === 3 ? !1 : "" : s : (r = h.attributeName, f = h.attributeNamespace, s === null ? n.removeAttribute(r) : (h = h.type, s = h === 3 || h === 4 && s === !0 ? "" : "" + s, f ? n.setAttributeNS(f, r, s) : n.setAttribute(r, s))));
  }
  var oe = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pe = /* @__PURE__ */ Symbol.for("react.element"), we = /* @__PURE__ */ Symbol.for("react.portal"), ge = /* @__PURE__ */ Symbol.for("react.fragment"), Ee = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ue = /* @__PURE__ */ Symbol.for("react.profiler"), Te = /* @__PURE__ */ Symbol.for("react.provider"), rt = /* @__PURE__ */ Symbol.for("react.context"), tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), ze = /* @__PURE__ */ Symbol.for("react.suspense"), yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ht = /* @__PURE__ */ Symbol.for("react.memo"), vt = /* @__PURE__ */ Symbol.for("react.lazy"), He = /* @__PURE__ */ Symbol.for("react.offscreen"), le = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = le && n[le] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ye = Object.assign, j;
  function te(n) {
    if (j === void 0) try {
      throw Error();
    } catch (s) {
      var r = s.stack.trim().match(/\n( *(at )?)/);
      j = r && r[1] || "";
    }
    return `
` + j + n;
  }
  var at = !1;
  function nt(n, r) {
    if (!n || at) return "";
    at = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (K) {
          var f = K;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (K) {
          f = K;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (K) {
          f = K;
        }
        n();
      }
    } catch (K) {
      if (K && f && typeof K.stack == "string") {
        for (var h = K.stack.split(`
`), y = f.stack.split(`
`), x = h.length - 1, O = y.length - 1; 1 <= x && 0 <= O && h[x] !== y[O]; ) O--;
        for (; 1 <= x && 0 <= O; x--, O--) if (h[x] !== y[O]) {
          if (x !== 1 || O !== 1)
            do
              if (x--, O--, 0 > O || h[x] !== y[O]) {
                var P = `
` + h[x].replace(" at new ", " at ");
                return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
              }
            while (1 <= x && 0 <= O);
          break;
        }
      }
    } finally {
      at = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? te(n) : "";
  }
  function wt(n) {
    switch (n.tag) {
      case 5:
        return te(n.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = nt(n.type, !1), n;
      case 11:
        return n = nt(n.type.render, !1), n;
      case 1:
        return n = nt(n.type, !0), n;
      default:
        return "";
    }
  }
  function Et(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ge:
        return "Fragment";
      case we:
        return "Portal";
      case Ue:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case ze:
        return "Suspense";
      case yt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case rt:
        return (n.displayName || "Context") + ".Consumer";
      case Te:
        return (n._context.displayName || "Context") + ".Provider";
      case tt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ht:
        return r = n.displayName || null, r !== null ? r : Et(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return Et(n(r));
        } catch {
        }
    }
    return null;
  }
  function gt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Et(r);
      case 8:
        return r === Ee ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ct(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Rt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Kt(n) {
    var r = Rt(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var h = s.get, y = s.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(x) {
        f = "" + x, y.call(this, x);
      } }), Object.defineProperty(n, r, { enumerable: s.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(x) {
        f = "" + x;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Pn(n) {
    n._valueTracker || (n._valueTracker = Kt(n));
  }
  function Ar(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var s = r.getValue(), f = "";
    return n && (f = Rt(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== s ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function sr(n, r) {
    var s = r.checked;
    return ye({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    s = Ct(r.value != null ? r.value : s), n._wrapperState = { initialChecked: f, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && ne(n, "checked", r, !1);
  }
  function Jr(n, r) {
    Gn(n, r);
    var s = Ct(r.value), f = r.type;
    if (s != null) f === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? yi(n, r.type, s) : r.hasOwnProperty("defaultValue") && yi(n, r.type, Ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ca(n, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, s || r === n.value || (n.value = r), n.defaultValue = r;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function yi(n, r, s) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var er = Array.isArray;
  function bn(n, r, s, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < s.length; h++) r["$" + s[h]] = !0;
      for (s = 0; s < n.length; s++) h = r.hasOwnProperty("$" + n[s].value), n[s].selected !== h && (n[s].selected = h), h && f && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + Ct(s), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === s) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(c(91));
    return ye({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rr(n, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null) throw Error(c(92));
        if (er(s)) {
          if (1 < s.length) throw Error(c(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), s = r;
    }
    n._wrapperState = { initialValue: Ct(s) };
  }
  function na(n, r) {
    var s = Ct(r.value), f = Ct(r.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), r.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), f != null && (n.defaultValue = "" + f);
  }
  function Vn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function br(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gi(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? br(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ra, Ta = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, f, h);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ra = ra || document.createElement("div"), ra.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ra.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Se(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ye = {
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
  }, Tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ye).forEach(function(n) {
    Tt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ye[r] = Ye[n];
    });
  });
  function Yt(n, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Ye.hasOwnProperty(n) && Ye[n] ? ("" + r).trim() : r + "px";
  }
  function an(n, r) {
    n = n.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var f = s.indexOf("--") === 0, h = Yt(s, r[s], f);
      s === "float" && (s = "cssFloat"), f ? n.setProperty(s, h) : n[s] = h;
    }
  }
  var gn = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (gn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(c(62));
    }
  }
  function tr(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var on = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, Si = null, Dr = null;
  function Ni(n) {
    if (n = Ke(n)) {
      if (typeof Xt != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = En(r), Xt(n.stateNode, n.type, r));
    }
  }
  function Za(n) {
    Si ? Dr ? Dr.push(n) : Dr = [n] : Si = n;
  }
  function El() {
    if (Si) {
      var n = Si, r = Dr;
      if (Dr = Si = null, Ni(n), r) for (n = 0; n < r.length; n++) Ni(r[n]);
    }
  }
  function Cl(n, r) {
    return n(r);
  }
  function Mo() {
  }
  var Oo = !1;
  function Tl(n, r, s) {
    if (Oo) return n(r, s);
    Oo = !0;
    try {
      return Cl(n, r, s);
    } finally {
      Oo = !1, (Si !== null || Dr !== null) && (Mo(), El());
    }
  }
  function Lr(n, r) {
    var s = n.stateNode;
    if (s === null) return null;
    var f = En(s);
    if (f === null) return null;
    s = f[r];
    e: switch (r) {
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
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (s && typeof s != "function") throw Error(c(231, r, typeof s));
    return s;
  }
  var Nr = !1;
  if (w) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      Nr = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    Nr = !1;
  }
  function xa(n, r, s, f, h, y, x, O, P) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, K);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var ia = !1, wa = null, Ra = !1, N = null, se = { onError: function(n) {
    ia = !0, wa = n;
  } };
  function Re(n, r, s, f, h, y, x, O, P) {
    ia = !1, wa = null, xa.apply(se, arguments);
  }
  function Ve(n, r, s, f, h, y, x, O, P) {
    if (Re.apply(this, arguments), ia) {
      if (ia) {
        var K = wa;
        ia = !1, wa = null;
      } else throw Error(c(198));
      Ra || (Ra = !0, N = K);
    }
  }
  function dt(n) {
    var r = n, s = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (s = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? s : null;
  }
  function ut(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (dt(n) !== n) throw Error(c(188));
  }
  function bt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = dt(n), r === null) throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var s = n, f = r; ; ) {
      var h = s.return;
      if (h === null) break;
      var y = h.alternate;
      if (y === null) {
        if (f = h.return, f !== null) {
          s = f;
          continue;
        }
        break;
      }
      if (h.child === y.child) {
        for (y = h.child; y; ) {
          if (y === s) return kt(h), n;
          if (y === f) return kt(h), r;
          y = y.sibling;
        }
        throw Error(c(188));
      }
      if (s.return !== f.return) s = h, f = y;
      else {
        for (var x = !1, O = h.child; O; ) {
          if (O === s) {
            x = !0, s = h, f = y;
            break;
          }
          if (O === f) {
            x = !0, f = h, s = y;
            break;
          }
          O = O.sibling;
        }
        if (!x) {
          for (O = y.child; O; ) {
            if (O === s) {
              x = !0, s = y, f = h;
              break;
            }
            if (O === f) {
              x = !0, f = y, s = h;
              break;
            }
            O = O.sibling;
          }
          if (!x) throw Error(c(189));
        }
      }
      if (s.alternate !== f) throw Error(c(190));
    }
    if (s.tag !== 3) throw Error(c(188));
    return s.stateNode.current === s ? n : r;
  }
  function Dn(n) {
    return n = bt(n), n !== null ? ln(n) : null;
  }
  function ln(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ln(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = l.unstable_scheduleCallback, cr = l.unstable_cancelCallback, aa = l.unstable_shouldYield, oa = l.unstable_requestPaint, pt = l.unstable_now, St = l.unstable_getCurrentPriorityLevel, la = l.unstable_ImmediatePriority, xl = l.unstable_UserBlockingPriority, wl = l.unstable_NormalPriority, Ao = l.unstable_LowPriority, ms = l.unstable_IdlePriority, Lo = null, ei = null;
  function yu(n) {
    if (ei && typeof ei.onCommitFiberRoot == "function") try {
      ei.onCommitFiberRoot(Lo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Pr = Math.clz32 ? Math.clz32 : ys, zc = Math.log, jc = Math.LN2;
  function ys(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (zc(n) / jc | 0) | 0;
  }
  var No = 64, Ei = 4194304;
  function sa(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ua(n, r) {
    var s = n.pendingLanes;
    if (s === 0) return 0;
    var f = 0, h = n.suspendedLanes, y = n.pingedLanes, x = s & 268435455;
    if (x !== 0) {
      var O = x & ~h;
      O !== 0 ? f = sa(O) : (y &= x, y !== 0 && (f = sa(y)));
    } else x = s & ~h, x !== 0 ? f = sa(x) : y !== 0 && (f = sa(y));
    if (f === 0) return 0;
    if (r !== 0 && r !== f && (r & h) === 0 && (h = f & -f, y = r & -r, h >= y || h === 16 && (y & 4194240) !== 0)) return r;
    if ((f & 4) !== 0 && (f |= s & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= f; 0 < r; ) s = 31 - Pr(r), h = 1 << s, f |= n[s], r &= ~h;
    return f;
  }
  function gs(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Rl(n, r) {
    for (var s = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var x = 31 - Pr(y), O = 1 << x, P = h[x];
      P === -1 ? ((O & s) === 0 || (O & f) !== 0) && (h[x] = gs(O, r)) : P <= r && (n.expiredLanes |= O), y &= ~O;
    }
  }
  function Po(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ss() {
    var n = No;
    return No <<= 1, (No & 4194240) === 0 && (No = 64), n;
  }
  function Es(n) {
    for (var r = [], s = 0; 31 > s; s++) r.push(n);
    return r;
  }
  function Ja(n, r, s) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Pr(r), n[r] = s;
  }
  function Ud(n, r) {
    var s = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < s; ) {
      var h = 31 - Pr(s), y = 1 << h;
      r[h] = 0, f[h] = -1, n[h] = -1, s &= ~y;
    }
  }
  function eo(n, r) {
    var s = n.entangledLanes |= r;
    for (n = n.entanglements; s; ) {
      var f = 31 - Pr(s), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), s &= ~h;
    }
  }
  var jt = 0;
  function Cs(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Vt, gu, ba, st, Ts, fr = !1, Da = [], Vr = null, ka = null, dn = null, qt = /* @__PURE__ */ new Map(), Vo = /* @__PURE__ */ new Map(), Qn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Pi(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Vr = null;
        break;
      case "dragenter":
      case "dragleave":
        ka = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vo.delete(r.pointerId);
    }
  }
  function bl(n, r, s, f, h, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: s, eventSystemFlags: f, nativeEvent: y, targetContainers: [h] }, r !== null && (r = Ke(r), r !== null && gu(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function Su(n, r, s, f, h) {
    switch (r) {
      case "focusin":
        return Vr = bl(Vr, n, r, s, f, h), !0;
      case "dragenter":
        return ka = bl(ka, n, r, s, f, h), !0;
      case "mouseover":
        return dn = bl(dn, n, r, s, f, h), !0;
      case "pointerover":
        var y = h.pointerId;
        return qt.set(y, bl(qt.get(y) || null, n, r, s, f, h)), !0;
      case "gotpointercapture":
        return y = h.pointerId, Vo.set(y, bl(Vo.get(y) || null, n, r, s, f, h)), !0;
    }
    return !1;
  }
  function Eu(n) {
    var r = Pl(n.target);
    if (r !== null) {
      var s = dt(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = ut(s), r !== null) {
            n.blockedOn = r, Ts(n.priority, function() {
              ba(s);
            });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Uo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var s = Rs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var f = new s.constructor(s.type, s);
        on = f, s.target.dispatchEvent(f), on = null;
      } else return r = Ke(s), r !== null && gu(r), n.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function Dl(n, r, s) {
    Uo(n) && s.delete(r);
  }
  function zd() {
    fr = !1, Vr !== null && Uo(Vr) && (Vr = null), ka !== null && Uo(ka) && (ka = null), dn !== null && Uo(dn) && (dn = null), qt.forEach(Dl), Vo.forEach(Dl);
  }
  function Vi(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, zd)));
  }
  function ca(n) {
    function r(h) {
      return Vi(h, n);
    }
    if (0 < Da.length) {
      Vi(Da[0], n);
      for (var s = 1; s < Da.length; s++) {
        var f = Da[s];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Vr !== null && Vi(Vr, n), ka !== null && Vi(ka, n), dn !== null && Vi(dn, n), qt.forEach(r), Vo.forEach(r), s = 0; s < Qn.length; s++) f = Qn[s], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Qn.length && (s = Qn[0], s.blockedOn === null); ) Eu(s), s.blockedOn === null && Qn.shift();
  }
  var _a = oe.ReactCurrentBatchConfig, Ui = !0;
  function xs(n, r, s, f) {
    var h = jt, y = _a.transition;
    _a.transition = null;
    try {
      jt = 1, zo(n, r, s, f);
    } finally {
      jt = h, _a.transition = y;
    }
  }
  function ws(n, r, s, f) {
    var h = jt, y = _a.transition;
    _a.transition = null;
    try {
      jt = 4, zo(n, r, s, f);
    } finally {
      jt = h, _a.transition = y;
    }
  }
  function zo(n, r, s, f) {
    if (Ui) {
      var h = Rs(n, r, s, f);
      if (h === null) qc(n, r, f, kl, s), Pi(n, f);
      else if (Su(h, n, r, s, f)) f.stopPropagation();
      else if (Pi(n, f), r & 4 && -1 < Ur.indexOf(n)) {
        for (; h !== null; ) {
          var y = Ke(h);
          if (y !== null && Vt(y), y = Rs(n, r, s, f), y === null && qc(n, r, f, kl, s), y === h) break;
          h = y;
        }
        h !== null && f.stopPropagation();
      } else qc(n, r, f, null, s);
    }
  }
  var kl = null;
  function Rs(n, r, s, f) {
    if (kl = null, n = Qt(f), n = Pl(n), n !== null) if (r = dt(n), r === null) n = null;
    else if (s = r.tag, s === 13) {
      if (n = ut(r), n !== null) return n;
      n = null;
    } else if (s === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return kl = n, null;
  }
  function bs(n) {
    switch (n) {
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
        switch (St()) {
          case la:
            return 1;
          case xl:
            return 4;
          case wl:
          case Ao:
            return 16;
          case ms:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fa = null, T = null, L = null;
  function G() {
    if (L) return L;
    var n, r = T, s = r.length, f, h = "value" in fa ? fa.value : fa.textContent, y = h.length;
    for (n = 0; n < s && r[n] === h[n]; n++) ;
    var x = s - n;
    for (f = 1; f <= x && r[s - f] === h[y - f]; f++) ;
    return L = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function Z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function me() {
    return !0;
  }
  function Xe() {
    return !1;
  }
  function xe(n) {
    function r(s, f, h, y, x) {
      this._reactName = s, this._targetInst = h, this.type = f, this.nativeEvent = y, this.target = x, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (s = n[O], this[O] = s ? s(y) : y[O]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? me : Xe, this.isPropagationStopped = Xe, this;
    }
    return ye(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = me);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = me);
    }, persist: function() {
    }, isPersistent: me }), r;
  }
  var Je = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _t = xe(Je), Ut = ye({}, Je, { view: 0, detail: 0 }), sn = xe(Ut), Zt, xt, Jt, Sn = ye({}, Ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Id, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Zt = n.screenX - Jt.screenX, xt = n.screenY - Jt.screenY) : xt = Zt = 0, Jt = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : xt;
  } }), jo = xe(Sn), Cu = ye({}, Sn, { dataTransfer: 0 }), to = xe(Cu), Tu = ye({}, Ut, { relatedTarget: 0 }), _l = xe(Tu), jd = ye({}, Je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fc = xe(jd), Fd = ye({}, Je, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), av = xe(Fd), Bd = ye({}, Je, { data: 0 }), Hd = xe(Bd), ov = {
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
  }, lv = {
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
  }, _g = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function no(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = _g[n]) ? !!r[n] : !1;
  }
  function Id() {
    return no;
  }
  var $d = ye({}, Ut, { key: function(n) {
    if (n.key) {
      var r = ov[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? lv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Id, charCode: function(n) {
    return n.type === "keypress" ? Z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Yd = xe($d), Wd = ye({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sv = xe(Wd), Bc = ye({}, Ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Id }), uv = xe(Bc), ti = ye({}, Je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ro = xe(ti), Un = ye({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), io = xe(Un), Gd = [9, 13, 27, 32], Ds = w && "CompositionEvent" in window, xu = null;
  w && "documentMode" in document && (xu = document.documentMode);
  var wu = w && "TextEvent" in window && !xu, cv = w && (!Ds || xu && 8 < xu && 11 >= xu), fv = " ", Hc = !1;
  function dv(n, r) {
    switch (n) {
      case "keyup":
        return Gd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ks = !1;
  function hv(n, r) {
    switch (n) {
      case "compositionend":
        return pv(r);
      case "keypress":
        return r.which !== 32 ? null : (Hc = !0, fv);
      case "textInput":
        return n = r.data, n === fv && Hc ? null : n;
      default:
        return null;
    }
  }
  function Mg(n, r) {
    if (ks) return n === "compositionend" || !Ds && dv(n, r) ? (n = G(), L = T = fa = null, ks = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Og = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Og[n.type] : r === "textarea";
  }
  function Kd(n, r, s, f) {
    Za(f), r = Mu(r, "onChange"), 0 < r.length && (s = new _t("onChange", "change", null, s, f), n.push({ event: s, listeners: r }));
  }
  var Ma = null, Ml = null;
  function mv(n) {
    Ll(n, 0);
  }
  function Ru(n) {
    var r = pa(n);
    if (Ar(r)) return n;
  }
  function Ag(n, r) {
    if (n === "change") return r;
  }
  var yv = !1;
  if (w) {
    var Qd;
    if (w) {
      var Xd = "oninput" in document;
      if (!Xd) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), Xd = typeof gv.oninput == "function";
      }
      Qd = Xd;
    } else Qd = !1;
    yv = Qd && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    Ma && (Ma.detachEvent("onpropertychange", Ev), Ml = Ma = null);
  }
  function Ev(n) {
    if (n.propertyName === "value" && Ru(Ml)) {
      var r = [];
      Kd(r, Ml, n, Qt(n)), Tl(mv, r);
    }
  }
  function Lg(n, r, s) {
    n === "focusin" ? (Sv(), Ma = r, Ml = s, Ma.attachEvent("onpropertychange", Ev)) : n === "focusout" && Sv();
  }
  function Cv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ru(Ml);
  }
  function Ng(n, r) {
    if (n === "click") return Ru(r);
  }
  function Tv(n, r) {
    if (n === "input" || n === "change") return Ru(r);
  }
  function Pg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var da = typeof Object.is == "function" ? Object.is : Pg;
  function bu(n, r) {
    if (da(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(n), f = Object.keys(r);
    if (s.length !== f.length) return !1;
    for (f = 0; f < s.length; f++) {
      var h = s[f];
      if (!D.call(r, h) || !da(n[h], r[h])) return !1;
    }
    return !0;
  }
  function xv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ic(n, r) {
    var s = xv(n);
    n = 0;
    for (var f; s; ) {
      if (s.nodeType === 3) {
        if (f = n + s.textContent.length, n <= r && f >= r) return { node: s, offset: r - n };
        n = f;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = xv(s);
    }
  }
  function Fo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Fo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Du() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function $c(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function _s(n) {
    var r = Du(), s = n.focusedElem, f = n.selectionRange;
    if (r !== s && s && s.ownerDocument && Fo(s.ownerDocument.documentElement, s)) {
      if (f !== null && $c(s)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (r = s.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = s.textContent.length, y = Math.min(f.start, h);
          f = f.end === void 0 ? y : Math.min(f.end, h), !n.extend && y > f && (h = f, f = y, y = h), h = Ic(s, y);
          var x = Ic(
            s,
            f
          );
          h && x && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), y > f ? (n.addRange(r), n.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), n.addRange(r)));
        }
      }
      for (r = [], n = s; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) n = r[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Vg = w && "documentMode" in document && 11 >= document.documentMode, Ms = null, qd = null, ku = null, Zd = !1;
  function Jd(n, r, s) {
    var f = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Zd || Ms == null || Ms !== Rn(f) || (f = Ms, "selectionStart" in f && $c(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), ku && bu(ku, f) || (ku = f, f = Mu(qd, "onSelect"), 0 < f.length && (r = new _t("onSelect", "select", null, r, s), n.push({ event: r, listeners: f }), r.target = Ms)));
  }
  function Yc(n, r) {
    var s = {};
    return s[n.toLowerCase()] = r.toLowerCase(), s["Webkit" + n] = "webkit" + r, s["Moz" + n] = "moz" + r, s;
  }
  var Ol = { animationend: Yc("Animation", "AnimationEnd"), animationiteration: Yc("Animation", "AnimationIteration"), animationstart: Yc("Animation", "AnimationStart"), transitionend: Yc("Transition", "TransitionEnd") }, dr = {}, ep = {};
  w && (ep = document.createElement("div").style, "AnimationEvent" in window || (delete Ol.animationend.animation, delete Ol.animationiteration.animation, delete Ol.animationstart.animation), "TransitionEvent" in window || delete Ol.transitionend.transition);
  function Wc(n) {
    if (dr[n]) return dr[n];
    if (!Ol[n]) return n;
    var r = Ol[n], s;
    for (s in r) if (r.hasOwnProperty(s) && s in ep) return dr[n] = r[s];
    return n;
  }
  var wv = Wc("animationend"), Rv = Wc("animationiteration"), bv = Wc("animationstart"), Dv = Wc("transitionend"), tp = /* @__PURE__ */ new Map(), Gc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function zi(n, r) {
    tp.set(n, r), E(r, [n]);
  }
  for (var np = 0; np < Gc.length; np++) {
    var Al = Gc[np], Ug = Al.toLowerCase(), zg = Al[0].toUpperCase() + Al.slice(1);
    zi(Ug, "on" + zg);
  }
  zi(wv, "onAnimationEnd"), zi(Rv, "onAnimationIteration"), zi(bv, "onAnimationStart"), zi("dblclick", "onDoubleClick"), zi("focusin", "onFocus"), zi("focusout", "onBlur"), zi(Dv, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _u = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(_u));
  function Kc(n, r, s) {
    var f = n.type || "unknown-event";
    n.currentTarget = s, Ve(f, r, void 0, n), n.currentTarget = null;
  }
  function Ll(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var f = n[s], h = f.event;
      f = f.listeners;
      e: {
        var y = void 0;
        if (r) for (var x = f.length - 1; 0 <= x; x--) {
          var O = f[x], P = O.instance, K = O.currentTarget;
          if (O = O.listener, P !== y && h.isPropagationStopped()) break e;
          Kc(h, O, K), y = P;
        }
        else for (x = 0; x < f.length; x++) {
          if (O = f[x], P = O.instance, K = O.currentTarget, O = O.listener, P !== y && h.isPropagationStopped()) break e;
          Kc(h, O, K), y = P;
        }
      }
    }
    if (Ra) throw n = N, Ra = !1, N = null, n;
  }
  function Wt(n, r) {
    var s = r[Lu];
    s === void 0 && (s = r[Lu] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    s.has(f) || (kv(r, n, 2, !1), s.add(f));
  }
  function Qc(n, r, s) {
    var f = 0;
    r && (f |= 4), kv(s, n, f, r);
  }
  var Xc = "_reactListening" + Math.random().toString(36).slice(2);
  function Os(n) {
    if (!n[Xc]) {
      n[Xc] = !0, p.forEach(function(s) {
        s !== "selectionchange" && (rp.has(s) || Qc(s, !1, n), Qc(s, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Xc] || (r[Xc] = !0, Qc("selectionchange", !1, r));
    }
  }
  function kv(n, r, s, f) {
    switch (bs(r)) {
      case 1:
        var h = xs;
        break;
      case 4:
        h = ws;
        break;
      default:
        h = zo;
    }
    s = h.bind(null, r, s, n), h = void 0, !Nr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, s, { capture: !0, passive: h }) : n.addEventListener(r, s, !0) : h !== void 0 ? n.addEventListener(r, s, { passive: h }) : n.addEventListener(r, s, !1);
  }
  function qc(n, r, s, f, h) {
    var y = f;
    if ((r & 1) === 0 && (r & 2) === 0 && f !== null) e: for (; ; ) {
      if (f === null) return;
      var x = f.tag;
      if (x === 3 || x === 4) {
        var O = f.stateNode.containerInfo;
        if (O === h || O.nodeType === 8 && O.parentNode === h) break;
        if (x === 4) for (x = f.return; x !== null; ) {
          var P = x.tag;
          if ((P === 3 || P === 4) && (P = x.stateNode.containerInfo, P === h || P.nodeType === 8 && P.parentNode === h)) return;
          x = x.return;
        }
        for (; O !== null; ) {
          if (x = Pl(O), x === null) return;
          if (P = x.tag, P === 5 || P === 6) {
            f = y = x;
            continue e;
          }
          O = O.parentNode;
        }
      }
      f = f.return;
    }
    Tl(function() {
      var K = y, fe = Qt(s), he = [];
      e: {
        var ce = tp.get(n);
        if (ce !== void 0) {
          var Oe = _t, je = n;
          switch (n) {
            case "keypress":
              if (Z(s) === 0) break e;
            case "keydown":
            case "keyup":
              Oe = Yd;
              break;
            case "focusin":
              je = "focus", Oe = _l;
              break;
            case "focusout":
              je = "blur", Oe = _l;
              break;
            case "beforeblur":
            case "afterblur":
              Oe = _l;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Oe = jo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Oe = to;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Oe = uv;
              break;
            case wv:
            case Rv:
            case bv:
              Oe = Fc;
              break;
            case Dv:
              Oe = ro;
              break;
            case "scroll":
              Oe = sn;
              break;
            case "wheel":
              Oe = io;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = av;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = sv;
          }
          var Ie = (r & 4) !== 0, An = !Ie && n === "scroll", H = Ie ? ce !== null ? ce + "Capture" : null : ce;
          Ie = [];
          for (var U = K, Y; U !== null; ) {
            Y = U;
            var de = Y.stateNode;
            if (Y.tag === 5 && de !== null && (Y = de, H !== null && (de = Lr(U, H), de != null && Ie.push(As(U, de, Y)))), An) break;
            U = U.return;
          }
          0 < Ie.length && (ce = new Oe(ce, je, null, s, fe), he.push({ event: ce, listeners: Ie }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", ce && s !== on && (je = s.relatedTarget || s.fromElement) && (Pl(je) || je[ao])) break e;
          if ((Oe || ce) && (ce = fe.window === fe ? fe : (ce = fe.ownerDocument) ? ce.defaultView || ce.parentWindow : window, Oe ? (je = s.relatedTarget || s.toElement, Oe = K, je = je ? Pl(je) : null, je !== null && (An = dt(je), je !== An || je.tag !== 5 && je.tag !== 6) && (je = null)) : (Oe = null, je = K), Oe !== je)) {
            if (Ie = jo, de = "onMouseLeave", H = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = sv, de = "onPointerLeave", H = "onPointerEnter", U = "pointer"), An = Oe == null ? ce : pa(Oe), Y = je == null ? ce : pa(je), ce = new Ie(de, U + "leave", Oe, s, fe), ce.target = An, ce.relatedTarget = Y, de = null, Pl(fe) === K && (Ie = new Ie(H, U + "enter", je, s, fe), Ie.target = Y, Ie.relatedTarget = An, de = Ie), An = de, Oe && je) t: {
              for (Ie = Oe, H = je, U = 0, Y = Ie; Y; Y = Bo(Y)) U++;
              for (Y = 0, de = H; de; de = Bo(de)) Y++;
              for (; 0 < U - Y; ) Ie = Bo(Ie), U--;
              for (; 0 < Y - U; ) H = Bo(H), Y--;
              for (; U--; ) {
                if (Ie === H || H !== null && Ie === H.alternate) break t;
                Ie = Bo(Ie), H = Bo(H);
              }
              Ie = null;
            }
            else Ie = null;
            Oe !== null && _v(he, ce, Oe, Ie, !1), je !== null && An !== null && _v(he, An, je, Ie, !0);
          }
        }
        e: {
          if (ce = K ? pa(K) : window, Oe = ce.nodeName && ce.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && ce.type === "file") var Fe = Ag;
          else if (vv(ce)) if (yv) Fe = Tv;
          else {
            Fe = Cv;
            var Ze = Lg;
          }
          else (Oe = ce.nodeName) && Oe.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && (Fe = Ng);
          if (Fe && (Fe = Fe(n, K))) {
            Kd(he, Fe, s, fe);
            break e;
          }
          Ze && Ze(n, ce, K), n === "focusout" && (Ze = ce._wrapperState) && Ze.controlled && ce.type === "number" && yi(ce, "number", ce.value);
        }
        switch (Ze = K ? pa(K) : window, n) {
          case "focusin":
            (vv(Ze) || Ze.contentEditable === "true") && (Ms = Ze, qd = K, ku = null);
            break;
          case "focusout":
            ku = qd = Ms = null;
            break;
          case "mousedown":
            Zd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zd = !1, Jd(he, s, fe);
            break;
          case "selectionchange":
            if (Vg) break;
          case "keydown":
          case "keyup":
            Jd(he, s, fe);
        }
        var et;
        if (Ds) e: {
          switch (n) {
            case "compositionstart":
              var lt = "onCompositionStart";
              break e;
            case "compositionend":
              lt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              lt = "onCompositionUpdate";
              break e;
          }
          lt = void 0;
        }
        else ks ? dv(n, s) && (lt = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (lt = "onCompositionStart");
        lt && (cv && s.locale !== "ko" && (ks || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && ks && (et = G()) : (fa = fe, T = "value" in fa ? fa.value : fa.textContent, ks = !0)), Ze = Mu(K, lt), 0 < Ze.length && (lt = new Hd(lt, n, null, s, fe), he.push({ event: lt, listeners: Ze }), et ? lt.data = et : (et = pv(s), et !== null && (lt.data = et)))), (et = wu ? hv(n, s) : Mg(n, s)) && (K = Mu(K, "onBeforeInput"), 0 < K.length && (fe = new Hd("onBeforeInput", "beforeinput", null, s, fe), he.push({ event: fe, listeners: K }), fe.data = et));
      }
      Ll(he, r);
    });
  }
  function As(n, r, s) {
    return { instance: n, listener: r, currentTarget: s };
  }
  function Mu(n, r) {
    for (var s = r + "Capture", f = []; n !== null; ) {
      var h = n, y = h.stateNode;
      h.tag === 5 && y !== null && (h = y, y = Lr(n, s), y != null && f.unshift(As(n, y, h)), y = Lr(n, r), y != null && f.push(As(n, y, h))), n = n.return;
    }
    return f;
  }
  function Bo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _v(n, r, s, f, h) {
    for (var y = r._reactName, x = []; s !== null && s !== f; ) {
      var O = s, P = O.alternate, K = O.stateNode;
      if (P !== null && P === f) break;
      O.tag === 5 && K !== null && (O = K, h ? (P = Lr(s, y), P != null && x.unshift(As(s, P, O))) : h || (P = Lr(s, y), P != null && x.push(As(s, P, O)))), s = s.return;
    }
    x.length !== 0 && n.push({ event: r, listeners: x });
  }
  var Mv = /\r\n?/g, jg = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(Mv, `
`).replace(jg, "");
  }
  function Zc(n, r, s) {
    if (r = Ov(r), Ov(n) !== r && s) throw Error(c(425));
  }
  function Ho() {
  }
  var Ou = null, Nl = null;
  function Jc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ef = typeof setTimeout == "function" ? setTimeout : void 0, ip = typeof clearTimeout == "function" ? clearTimeout : void 0, Av = typeof Promise == "function" ? Promise : void 0, Ls = typeof queueMicrotask == "function" ? queueMicrotask : typeof Av < "u" ? function(n) {
    return Av.resolve(null).then(n).catch(tf);
  } : ef;
  function tf(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ns(n, r) {
    var s = r, f = 0;
    do {
      var h = s.nextSibling;
      if (n.removeChild(s), h && h.nodeType === 8) if (s = h.data, s === "/$") {
        if (f === 0) {
          n.removeChild(h), ca(r);
          return;
        }
        f--;
      } else s !== "$" && s !== "$?" && s !== "$!" || f++;
      s = h;
    } while (s);
    ca(r);
  }
  function Oa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Lv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return n;
          r--;
        } else s === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Io = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + Io, Au = "__reactProps$" + Io, ao = "__reactContainer$" + Io, Lu = "__reactEvents$" + Io, Ps = "__reactListeners$" + Io, Fg = "__reactHandles$" + Io;
  function Pl(n) {
    var r = n[Aa];
    if (r) return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[ao] || s[Aa]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (n = Lv(n); n !== null; ) {
          if (s = n[Aa]) return s;
          n = Lv(n);
        }
        return r;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function Ke(n) {
    return n = n[Aa] || n[ao], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function pa(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function En(n) {
    return n[Au] || null;
  }
  var At = [], ji = -1;
  function Fi(n) {
    return { current: n };
  }
  function un(n) {
    0 > ji || (n.current = At[ji], At[ji] = null, ji--);
  }
  function Ge(n, r) {
    ji++, At[ji] = n.current, n.current = r;
  }
  var kr = {}, wn = Fi(kr), Xn = Fi(!1), ni = kr;
  function ri(n, r) {
    var s = n.type.contextTypes;
    if (!s) return kr;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, y;
    for (y in s) h[y] = r[y];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Vs() {
    un(Xn), un(wn);
  }
  function Nv(n, r, s) {
    if (wn.current !== kr) throw Error(c(168));
    Ge(wn, r), Ge(Xn, s);
  }
  function Nu(n, r, s) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return s;
    f = f.getChildContext();
    for (var h in f) if (!(h in r)) throw Error(c(108, gt(n) || "Unknown", h));
    return ye({}, s, f);
  }
  function nr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kr, ni = wn.current, Ge(wn, n), Ge(Xn, Xn.current), !0;
  }
  function nf(n, r, s) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    s ? (n = Nu(n, r, ni), f.__reactInternalMemoizedMergedChildContext = n, un(Xn), un(wn), Ge(wn, n)) : un(Xn), Ge(Xn, s);
  }
  var La = null, Us = !1, oo = !1;
  function rf(n) {
    La === null ? La = [n] : La.push(n);
  }
  function $o(n) {
    Us = !0, rf(n);
  }
  function Na() {
    if (!oo && La !== null) {
      oo = !0;
      var n = 0, r = jt;
      try {
        var s = La;
        for (jt = 1; n < s.length; n++) {
          var f = s[n];
          do
            f = f(!0);
          while (f !== null);
        }
        La = null, Us = !1;
      } catch (h) {
        throw La !== null && (La = La.slice(n + 1)), fn(la, Na), h;
      } finally {
        jt = r, oo = !1;
      }
    }
    return null;
  }
  var Yo = [], Wo = 0, Go = null, lo = 0, jn = [], Bi = 0, Ci = null, Pa = 1, Va = "";
  function Vl(n, r) {
    Yo[Wo++] = lo, Yo[Wo++] = Go, Go = n, lo = r;
  }
  function Pv(n, r, s) {
    jn[Bi++] = Pa, jn[Bi++] = Va, jn[Bi++] = Ci, Ci = n;
    var f = Pa;
    n = Va;
    var h = 32 - Pr(f) - 1;
    f &= ~(1 << h), s += 1;
    var y = 32 - Pr(r) + h;
    if (30 < y) {
      var x = h - h % 5;
      y = (f & (1 << x) - 1).toString(32), f >>= x, h -= x, Pa = 1 << 32 - Pr(r) + h | s << h | f, Va = y + n;
    } else Pa = 1 << y | s << h | f, Va = n;
  }
  function af(n) {
    n.return !== null && (Vl(n, 1), Pv(n, 1, 0));
  }
  function of(n) {
    for (; n === Go; ) Go = Yo[--Wo], Yo[Wo] = null, lo = Yo[--Wo], Yo[Wo] = null;
    for (; n === Ci; ) Ci = jn[--Bi], jn[Bi] = null, Va = jn[--Bi], jn[Bi] = null, Pa = jn[--Bi], jn[Bi] = null;
  }
  var ii = null, ai = null, mn = !1, Hi = null;
  function ap(n, r) {
    var s = Gi(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ii = n, ai = Oa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ii = n, ai = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = Ci !== null ? { id: Pa, overflow: Va } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Gi(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, ii = n, ai = null, !0) : !1;
      default:
        return !1;
    }
  }
  function op(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function lp(n) {
    if (mn) {
      var r = ai;
      if (r) {
        var s = r;
        if (!Vv(n, r)) {
          if (op(n)) throw Error(c(418));
          r = Oa(s.nextSibling);
          var f = ii;
          r && Vv(n, r) ? ap(f, s) : (n.flags = n.flags & -4097 | 2, mn = !1, ii = n);
        }
      } else {
        if (op(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, mn = !1, ii = n;
      }
    }
  }
  function qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ii = n;
  }
  function lf(n) {
    if (n !== ii) return !1;
    if (!mn) return qn(n), mn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Jc(n.type, n.memoizedProps)), r && (r = ai)) {
      if (op(n)) throw Pu(), Error(c(418));
      for (; r; ) ap(n, r), r = Oa(r.nextSibling);
    }
    if (qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                ai = Oa(n.nextSibling);
                break e;
              }
              r--;
            } else s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ai = null;
      }
    } else ai = ii ? Oa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Pu() {
    for (var n = ai; n; ) n = Oa(n.nextSibling);
  }
  function Ko() {
    ai = ii = null, mn = !1;
  }
  function so(n) {
    Hi === null ? Hi = [n] : Hi.push(n);
  }
  var Bg = oe.ReactCurrentBatchConfig;
  function Ul(n, r, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(c(309));
          var f = s.stateNode;
        }
        if (!f) throw Error(c(147, n));
        var h = f, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(x) {
          var O = h.refs;
          x === null ? delete O[y] : O[y] = x;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string") throw Error(c(284));
      if (!s._owner) throw Error(c(290, n));
    }
    return n;
  }
  function sf(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zl(n) {
    function r(H, U) {
      if (n) {
        var Y = H.deletions;
        Y === null ? (H.deletions = [U], H.flags |= 16) : Y.push(U);
      }
    }
    function s(H, U) {
      if (!n) return null;
      for (; U !== null; ) r(H, U), U = U.sibling;
      return null;
    }
    function f(H, U) {
      for (H = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? H.set(U.key, U) : H.set(U.index, U), U = U.sibling;
      return H;
    }
    function h(H, U) {
      return H = nl(H, U), H.index = 0, H.sibling = null, H;
    }
    function y(H, U, Y) {
      return H.index = Y, n ? (Y = H.alternate, Y !== null ? (Y = Y.index, Y < U ? (H.flags |= 2, U) : Y) : (H.flags |= 2, U)) : (H.flags |= 1048576, U);
    }
    function x(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function O(H, U, Y, de) {
      return U === null || U.tag !== 6 ? (U = zp(Y, H.mode, de), U.return = H, U) : (U = h(U, Y), U.return = H, U);
    }
    function P(H, U, Y, de) {
      var Fe = Y.type;
      return Fe === ge ? fe(H, U, Y.props.children, de, Y.key) : U !== null && (U.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === vt && Uv(Fe) === U.type) ? (de = h(U, Y.props), de.ref = Ul(H, U, Y), de.return = H, de) : (de = fc(Y.type, Y.key, Y.props, null, H.mode, de), de.ref = Ul(H, U, Y), de.return = H, de);
    }
    function K(H, U, Y, de) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== Y.containerInfo || U.stateNode.implementation !== Y.implementation ? (U = Bf(Y, H.mode, de), U.return = H, U) : (U = h(U, Y.children || []), U.return = H, U);
    }
    function fe(H, U, Y, de, Fe) {
      return U === null || U.tag !== 7 ? (U = vo(Y, H.mode, de, Fe), U.return = H, U) : (U = h(U, Y), U.return = H, U);
    }
    function he(H, U, Y) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = zp("" + U, H.mode, Y), U.return = H, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case pe:
            return Y = fc(U.type, U.key, U.props, null, H.mode, Y), Y.ref = Ul(H, null, U), Y.return = H, Y;
          case we:
            return U = Bf(U, H.mode, Y), U.return = H, U;
          case vt:
            var de = U._init;
            return he(H, de(U._payload), Y);
        }
        if (er(U) || ke(U)) return U = vo(U, H.mode, Y, null), U.return = H, U;
        sf(H, U);
      }
      return null;
    }
    function ce(H, U, Y, de) {
      var Fe = U !== null ? U.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return Fe !== null ? null : O(H, U, "" + Y, de);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case pe:
            return Y.key === Fe ? P(H, U, Y, de) : null;
          case we:
            return Y.key === Fe ? K(H, U, Y, de) : null;
          case vt:
            return Fe = Y._init, ce(
              H,
              U,
              Fe(Y._payload),
              de
            );
        }
        if (er(Y) || ke(Y)) return Fe !== null ? null : fe(H, U, Y, de, null);
        sf(H, Y);
      }
      return null;
    }
    function Oe(H, U, Y, de, Fe) {
      if (typeof de == "string" && de !== "" || typeof de == "number") return H = H.get(Y) || null, O(U, H, "" + de, Fe);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case pe:
            return H = H.get(de.key === null ? Y : de.key) || null, P(U, H, de, Fe);
          case we:
            return H = H.get(de.key === null ? Y : de.key) || null, K(U, H, de, Fe);
          case vt:
            var Ze = de._init;
            return Oe(H, U, Y, Ze(de._payload), Fe);
        }
        if (er(de) || ke(de)) return H = H.get(Y) || null, fe(U, H, de, Fe, null);
        sf(U, de);
      }
      return null;
    }
    function je(H, U, Y, de) {
      for (var Fe = null, Ze = null, et = U, lt = U = 0, ar = null; et !== null && lt < Y.length; lt++) {
        et.index > lt ? (ar = et, et = null) : ar = et.sibling;
        var Ht = ce(H, et, Y[lt], de);
        if (Ht === null) {
          et === null && (et = ar);
          break;
        }
        n && et && Ht.alternate === null && r(H, et), U = y(Ht, U, lt), Ze === null ? Fe = Ht : Ze.sibling = Ht, Ze = Ht, et = ar;
      }
      if (lt === Y.length) return s(H, et), mn && Vl(H, lt), Fe;
      if (et === null) {
        for (; lt < Y.length; lt++) et = he(H, Y[lt], de), et !== null && (U = y(et, U, lt), Ze === null ? Fe = et : Ze.sibling = et, Ze = et);
        return mn && Vl(H, lt), Fe;
      }
      for (et = f(H, et); lt < Y.length; lt++) ar = Oe(et, H, lt, Y[lt], de), ar !== null && (n && ar.alternate !== null && et.delete(ar.key === null ? lt : ar.key), U = y(ar, U, lt), Ze === null ? Fe = ar : Ze.sibling = ar, Ze = ar);
      return n && et.forEach(function(al) {
        return r(H, al);
      }), mn && Vl(H, lt), Fe;
    }
    function Ie(H, U, Y, de) {
      var Fe = ke(Y);
      if (typeof Fe != "function") throw Error(c(150));
      if (Y = Fe.call(Y), Y == null) throw Error(c(151));
      for (var Ze = Fe = null, et = U, lt = U = 0, ar = null, Ht = Y.next(); et !== null && !Ht.done; lt++, Ht = Y.next()) {
        et.index > lt ? (ar = et, et = null) : ar = et.sibling;
        var al = ce(H, et, Ht.value, de);
        if (al === null) {
          et === null && (et = ar);
          break;
        }
        n && et && al.alternate === null && r(H, et), U = y(al, U, lt), Ze === null ? Fe = al : Ze.sibling = al, Ze = al, et = ar;
      }
      if (Ht.done) return s(
        H,
        et
      ), mn && Vl(H, lt), Fe;
      if (et === null) {
        for (; !Ht.done; lt++, Ht = Y.next()) Ht = he(H, Ht.value, de), Ht !== null && (U = y(Ht, U, lt), Ze === null ? Fe = Ht : Ze.sibling = Ht, Ze = Ht);
        return mn && Vl(H, lt), Fe;
      }
      for (et = f(H, et); !Ht.done; lt++, Ht = Y.next()) Ht = Oe(et, H, lt, Ht.value, de), Ht !== null && (n && Ht.alternate !== null && et.delete(Ht.key === null ? lt : Ht.key), U = y(Ht, U, lt), Ze === null ? Fe = Ht : Ze.sibling = Ht, Ze = Ht);
      return n && et.forEach(function(Sm) {
        return r(H, Sm);
      }), mn && Vl(H, lt), Fe;
    }
    function An(H, U, Y, de) {
      if (typeof Y == "object" && Y !== null && Y.type === ge && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case pe:
            e: {
              for (var Fe = Y.key, Ze = U; Ze !== null; ) {
                if (Ze.key === Fe) {
                  if (Fe = Y.type, Fe === ge) {
                    if (Ze.tag === 7) {
                      s(H, Ze.sibling), U = h(Ze, Y.props.children), U.return = H, H = U;
                      break e;
                    }
                  } else if (Ze.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === vt && Uv(Fe) === Ze.type) {
                    s(H, Ze.sibling), U = h(Ze, Y.props), U.ref = Ul(H, Ze, Y), U.return = H, H = U;
                    break e;
                  }
                  s(H, Ze);
                  break;
                } else r(H, Ze);
                Ze = Ze.sibling;
              }
              Y.type === ge ? (U = vo(Y.props.children, H.mode, de, Y.key), U.return = H, H = U) : (de = fc(Y.type, Y.key, Y.props, null, H.mode, de), de.ref = Ul(H, U, Y), de.return = H, H = de);
            }
            return x(H);
          case we:
            e: {
              for (Ze = Y.key; U !== null; ) {
                if (U.key === Ze) if (U.tag === 4 && U.stateNode.containerInfo === Y.containerInfo && U.stateNode.implementation === Y.implementation) {
                  s(H, U.sibling), U = h(U, Y.children || []), U.return = H, H = U;
                  break e;
                } else {
                  s(H, U);
                  break;
                }
                else r(H, U);
                U = U.sibling;
              }
              U = Bf(Y, H.mode, de), U.return = H, H = U;
            }
            return x(H);
          case vt:
            return Ze = Y._init, An(H, U, Ze(Y._payload), de);
        }
        if (er(Y)) return je(H, U, Y, de);
        if (ke(Y)) return Ie(H, U, Y, de);
        sf(H, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, U !== null && U.tag === 6 ? (s(H, U.sibling), U = h(U, Y), U.return = H, H = U) : (s(H, U), U = zp(Y, H.mode, de), U.return = H, H = U), x(H)) : s(H, U);
    }
    return An;
  }
  var kn = zl(!0), be = zl(!1), Ti = Fi(null), oi = null, zs = null, sp = null;
  function up() {
    sp = zs = oi = null;
  }
  function cp(n) {
    var r = Ti.current;
    un(Ti), n._currentValue = r;
  }
  function fp(n, r, s) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === s) break;
      n = n.return;
    }
  }
  function Cn(n, r) {
    oi = n, sp = zs = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Bn = !0), n.firstContext = null);
  }
  function Ii(n) {
    var r = n._currentValue;
    if (sp !== n) if (n = { context: n, memoizedValue: r, next: null }, zs === null) {
      if (oi === null) throw Error(c(308));
      zs = n, oi.dependencies = { lanes: 0, firstContext: n };
    } else zs = zs.next = n;
    return r;
  }
  var jl = null;
  function dp(n) {
    jl === null ? jl = [n] : jl.push(n);
  }
  function pp(n, r, s, f) {
    var h = r.interleaved;
    return h === null ? (s.next = s, dp(r)) : (s.next = h.next, h.next = s), r.interleaved = s, xi(n, f);
  }
  function xi(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; ) n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var wi = !1;
  function hp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function uo(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Qo(n, r, s) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (Lt & 2) !== 0) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, xi(n, s);
    }
    return h = f.interleaved, h === null ? (r.next = r, dp(f)) : (r.next = h.next, h.next = r), f.interleaved = r, xi(n, s);
  }
  function uf(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, eo(n, s);
    }
  }
  function jv(n, r) {
    var s = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, s === f)) {
      var h = null, y = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var x = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          y === null ? h = y = x : y = y.next = x, s = s.next;
        } while (s !== null);
        y === null ? h = y = r : y = y.next = r;
      } else h = y = r;
      s = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: y, shared: f.shared, effects: f.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
  }
  function Vu(n, r, s, f) {
    var h = n.updateQueue;
    wi = !1;
    var y = h.firstBaseUpdate, x = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var P = O, K = P.next;
      P.next = null, x === null ? y = K : x.next = K, x = P;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, O = fe.lastBaseUpdate, O !== x && (O === null ? fe.firstBaseUpdate = K : O.next = K, fe.lastBaseUpdate = P));
    }
    if (y !== null) {
      var he = h.baseState;
      x = 0, fe = K = P = null, O = y;
      do {
        var ce = O.lane, Oe = O.eventTime;
        if ((f & ce) === ce) {
          fe !== null && (fe = fe.next = {
            eventTime: Oe,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var je = n, Ie = O;
            switch (ce = r, Oe = s, Ie.tag) {
              case 1:
                if (je = Ie.payload, typeof je == "function") {
                  he = je.call(Oe, he, ce);
                  break e;
                }
                he = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Ie.payload, ce = typeof je == "function" ? je.call(Oe, he, ce) : je, ce == null) break e;
                he = ye({}, he, ce);
                break e;
              case 2:
                wi = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, ce = h.effects, ce === null ? h.effects = [O] : ce.push(O));
        } else Oe = { eventTime: Oe, lane: ce, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, fe === null ? (K = fe = Oe, P = he) : fe = fe.next = Oe, x |= ce;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          ce = O, O = ce.next, ce.next = null, h.lastBaseUpdate = ce, h.shared.pending = null;
        }
      } while (!0);
      if (fe === null && (P = he), h.baseState = P, h.firstBaseUpdate = K, h.lastBaseUpdate = fe, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          x |= h.lane, h = h.next;
        while (h !== r);
      } else y === null && (h.shared.lanes = 0);
      Ba |= x, n.lanes = x, n.memoizedState = he;
    }
  }
  function vp(n, r, s) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var f = n[r], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = s, typeof h != "function") throw Error(c(191, h));
        h.call(f);
      }
    }
  }
  var Uu = {}, Ua = Fi(Uu), zu = Fi(Uu), ju = Fi(Uu);
  function Fl(n) {
    if (n === Uu) throw Error(c(174));
    return n;
  }
  function mp(n, r) {
    switch (Ge(ju, r), Ge(zu, n), Ge(Ua, Uu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gi(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gi(r, n);
    }
    un(Ua), Ge(Ua, r);
  }
  function Bl() {
    un(Ua), un(zu), un(ju);
  }
  function Fv(n) {
    Fl(ju.current);
    var r = Fl(Ua.current), s = gi(r, n.type);
    r !== s && (Ge(zu, n), Ge(Ua, s));
  }
  function cf(n) {
    zu.current === n && (un(Ua), un(zu));
  }
  var Tn = Fi(0);
  function ff(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Fu = [];
  function Qe() {
    for (var n = 0; n < Fu.length; n++) Fu[n]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var Dt = oe.ReactCurrentDispatcher, Ft = oe.ReactCurrentBatchConfig, en = 0, Bt = null, Fn = null, rr = null, df = !1, Bu = !1, Hl = 0, ue = 0;
  function zt() {
    throw Error(c(321));
  }
  function it(n, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < n.length; s++) if (!da(n[s], r[s])) return !1;
    return !0;
  }
  function Xo(n, r, s, f, h, y) {
    if (en = y, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? Df : Gu, n = s(f, h), Bu) {
      y = 0;
      do {
        if (Bu = !1, Hl = 0, 25 <= y) throw Error(c(301));
        y += 1, rr = Fn = null, r.updateQueue = null, Dt.current = kf, n = s(f, h);
      } while (Bu);
    }
    if (Dt.current = Gl, r = Fn !== null && Fn.next !== null, en = 0, rr = Fn = Bt = null, df = !1, r) throw Error(c(300));
    return n;
  }
  function ha() {
    var n = Hl !== 0;
    return Hl = 0, n;
  }
  function _r() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rr === null ? Bt.memoizedState = rr = n : rr = rr.next = n, rr;
  }
  function _n() {
    if (Fn === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = rr === null ? Bt.memoizedState : rr.next;
    if (r !== null) rr = r, Fn = n;
    else {
      if (n === null) throw Error(c(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, rr === null ? Bt.memoizedState = rr = n : rr = rr.next = n;
    }
    return rr;
  }
  function co(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function qo(n) {
    var r = _n(), s = r.queue;
    if (s === null) throw Error(c(311));
    s.lastRenderedReducer = n;
    var f = Fn, h = f.baseQueue, y = s.pending;
    if (y !== null) {
      if (h !== null) {
        var x = h.next;
        h.next = y.next, y.next = x;
      }
      f.baseQueue = h = y, s.pending = null;
    }
    if (h !== null) {
      y = h.next, f = f.baseState;
      var O = x = null, P = null, K = y;
      do {
        var fe = K.lane;
        if ((en & fe) === fe) P !== null && (P = P.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), f = K.hasEagerState ? K.eagerState : n(f, K.action);
        else {
          var he = {
            lane: fe,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          P === null ? (O = P = he, x = f) : P = P.next = he, Bt.lanes |= fe, Ba |= fe;
        }
        K = K.next;
      } while (K !== null && K !== y);
      P === null ? x = f : P.next = O, da(f, r.memoizedState) || (Bn = !0), r.memoizedState = f, r.baseState = x, r.baseQueue = P, s.lastRenderedState = f;
    }
    if (n = s.interleaved, n !== null) {
      h = n;
      do
        y = h.lane, Bt.lanes |= y, Ba |= y, h = h.next;
      while (h !== n);
    } else h === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function Il(n) {
    var r = _n(), s = r.queue;
    if (s === null) throw Error(c(311));
    s.lastRenderedReducer = n;
    var f = s.dispatch, h = s.pending, y = r.memoizedState;
    if (h !== null) {
      s.pending = null;
      var x = h = h.next;
      do
        y = n(y, x.action), x = x.next;
      while (x !== h);
      da(y, r.memoizedState) || (Bn = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), s.lastRenderedState = y;
    }
    return [y, f];
  }
  function pf() {
  }
  function hf(n, r) {
    var s = Bt, f = _n(), h = r(), y = !da(f.memoizedState, h);
    if (y && (f.memoizedState = h, Bn = !0), f = f.queue, Hu(yf.bind(null, s, f, n), [n]), f.getSnapshot !== r || y || rr !== null && rr.memoizedState.tag & 1) {
      if (s.flags |= 2048, $l(9, mf.bind(null, s, f, h, r), void 0, null), Zn === null) throw Error(c(349));
      (en & 30) !== 0 || vf(s, r, h);
    }
    return h;
  }
  function vf(n, r, s) {
    n.flags |= 16384, n = { getSnapshot: r, value: s }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
  }
  function mf(n, r, s, f) {
    r.value = s, r.getSnapshot = f, gf(r) && Sf(n);
  }
  function yf(n, r, s) {
    return s(function() {
      gf(r) && Sf(n);
    });
  }
  function gf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var s = r();
      return !da(n, s);
    } catch {
      return !0;
    }
  }
  function Sf(n) {
    var r = xi(n, 1);
    r !== null && Br(r, n, 1, -1);
  }
  function Ef(n) {
    var r = _r();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: co, lastRenderedState: n }, r.queue = n, n = n.dispatch = Wl.bind(null, Bt, n), [r.memoizedState, n];
  }
  function $l(n, r, s, f) {
    return n = { tag: n, create: r, destroy: s, deps: f, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (f = s.next, s.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function Cf() {
    return _n().memoizedState;
  }
  function js(n, r, s, f) {
    var h = _r();
    Bt.flags |= n, h.memoizedState = $l(1 | r, s, void 0, f === void 0 ? null : f);
  }
  function Fs(n, r, s, f) {
    var h = _n();
    f = f === void 0 ? null : f;
    var y = void 0;
    if (Fn !== null) {
      var x = Fn.memoizedState;
      if (y = x.destroy, f !== null && it(f, x.deps)) {
        h.memoizedState = $l(r, s, y, f);
        return;
      }
    }
    Bt.flags |= n, h.memoizedState = $l(1 | r, s, y, f);
  }
  function Tf(n, r) {
    return js(8390656, 8, n, r);
  }
  function Hu(n, r) {
    return Fs(2048, 8, n, r);
  }
  function xf(n, r) {
    return Fs(4, 2, n, r);
  }
  function Iu(n, r) {
    return Fs(4, 4, n, r);
  }
  function Yl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function wf(n, r, s) {
    return s = s != null ? s.concat([n]) : null, Fs(4, 4, Yl.bind(null, r, n), s);
  }
  function $u() {
  }
  function Rf(n, r) {
    var s = _n();
    r = r === void 0 ? null : r;
    var f = s.memoizedState;
    return f !== null && r !== null && it(r, f[1]) ? f[0] : (s.memoizedState = [n, r], n);
  }
  function bf(n, r) {
    var s = _n();
    r = r === void 0 ? null : r;
    var f = s.memoizedState;
    return f !== null && r !== null && it(r, f[1]) ? f[0] : (n = n(), s.memoizedState = [n, r], n);
  }
  function yp(n, r, s) {
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Bn = !0), n.memoizedState = s) : (da(s, r) || (s = Ss(), Bt.lanes |= s, Ba |= s, n.baseState = !0), r);
  }
  function Yu(n, r) {
    var s = jt;
    jt = s !== 0 && 4 > s ? s : 4, n(!0);
    var f = Ft.transition;
    Ft.transition = {};
    try {
      n(!1), r();
    } finally {
      jt = s, Ft.transition = f;
    }
  }
  function gp() {
    return _n().memoizedState;
  }
  function Wu(n, r, s) {
    var f = Ha(n);
    if (s = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null }, li(n)) Bv(r, s);
    else if (s = pp(n, r, s, f), s !== null) {
      var h = $n();
      Br(s, n, f, h), rn(s, r, f);
    }
  }
  function Wl(n, r, s) {
    var f = Ha(n), h = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (li(n)) Bv(r, h);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
        var x = r.lastRenderedState, O = y(x, s);
        if (h.hasEagerState = !0, h.eagerState = O, da(O, x)) {
          var P = r.interleaved;
          P === null ? (h.next = h, dp(r)) : (h.next = P.next, P.next = h), r.interleaved = h;
          return;
        }
      } catch {
      }
      s = pp(n, r, h, f), s !== null && (h = $n(), Br(s, n, f, h), rn(s, r, f));
    }
  }
  function li(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function Bv(n, r) {
    Bu = df = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function rn(n, r, s) {
    if ((s & 4194240) !== 0) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, eo(n, s);
    }
  }
  var Gl = { readContext: Ii, useCallback: zt, useContext: zt, useEffect: zt, useImperativeHandle: zt, useInsertionEffect: zt, useLayoutEffect: zt, useMemo: zt, useReducer: zt, useRef: zt, useState: zt, useDebugValue: zt, useDeferredValue: zt, useTransition: zt, useMutableSource: zt, useSyncExternalStore: zt, useId: zt, unstable_isNewReconciler: !1 }, Df = { readContext: Ii, useCallback: function(n, r) {
    return _r().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ii, useEffect: Tf, useImperativeHandle: function(n, r, s) {
    return s = s != null ? s.concat([n]) : null, js(
      4194308,
      4,
      Yl.bind(null, r, n),
      s
    );
  }, useLayoutEffect: function(n, r) {
    return js(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return js(4, 2, n, r);
  }, useMemo: function(n, r) {
    var s = _r();
    return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
  }, useReducer: function(n, r, s) {
    var f = _r();
    return r = s !== void 0 ? s(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Wu.bind(null, Bt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = _r();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ef, useDebugValue: $u, useDeferredValue: function(n) {
    return _r().memoizedState = n;
  }, useTransition: function() {
    var n = Ef(!1), r = n[0];
    return n = Yu.bind(null, n[1]), _r().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, s) {
    var f = Bt, h = _r();
    if (mn) {
      if (s === void 0) throw Error(c(407));
      s = s();
    } else {
      if (s = r(), Zn === null) throw Error(c(349));
      (en & 30) !== 0 || vf(f, r, s);
    }
    h.memoizedState = s;
    var y = { value: s, getSnapshot: r };
    return h.queue = y, Tf(yf.bind(
      null,
      f,
      y,
      n
    ), [n]), f.flags |= 2048, $l(9, mf.bind(null, f, y, s, r), void 0, null), s;
  }, useId: function() {
    var n = _r(), r = Zn.identifierPrefix;
    if (mn) {
      var s = Va, f = Pa;
      s = (f & ~(1 << 32 - Pr(f) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = Hl++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = ue++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Gu = {
    readContext: Ii,
    useCallback: Rf,
    useContext: Ii,
    useEffect: Hu,
    useImperativeHandle: wf,
    useInsertionEffect: xf,
    useLayoutEffect: Iu,
    useMemo: bf,
    useReducer: qo,
    useRef: Cf,
    useState: function() {
      return qo(co);
    },
    useDebugValue: $u,
    useDeferredValue: function(n) {
      var r = _n();
      return yp(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = qo(co)[0], r = _n().memoizedState;
      return [n, r];
    },
    useMutableSource: pf,
    useSyncExternalStore: hf,
    useId: gp,
    unstable_isNewReconciler: !1
  }, kf = { readContext: Ii, useCallback: Rf, useContext: Ii, useEffect: Hu, useImperativeHandle: wf, useInsertionEffect: xf, useLayoutEffect: Iu, useMemo: bf, useReducer: Il, useRef: Cf, useState: function() {
    return Il(co);
  }, useDebugValue: $u, useDeferredValue: function(n) {
    var r = _n();
    return Fn === null ? r.memoizedState = n : yp(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Il(co)[0], r = _n().memoizedState;
    return [n, r];
  }, useMutableSource: pf, useSyncExternalStore: hf, useId: gp, unstable_isNewReconciler: !1 };
  function va(n, r) {
    if (n && n.defaultProps) {
      r = ye({}, r), n = n.defaultProps;
      for (var s in n) r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  function Sp(n, r, s, f) {
    r = n.memoizedState, s = s(f, r), s = s == null ? r : ye({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var _f = { isMounted: function(n) {
    return (n = n._reactInternals) ? dt(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var f = $n(), h = Ha(n), y = uo(f, h);
    y.payload = r, s != null && (y.callback = s), r = Qo(n, y, h), r !== null && (Br(r, n, h, f), uf(r, n, h));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var f = $n(), h = Ha(n), y = uo(f, h);
    y.tag = 1, y.payload = r, s != null && (y.callback = s), r = Qo(n, y, h), r !== null && (Br(r, n, h, f), uf(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = $n(), f = Ha(n), h = uo(s, f);
    h.tag = 2, r != null && (h.callback = r), r = Qo(n, h, f), r !== null && (Br(r, n, f, s), uf(r, n, f));
  } };
  function Hv(n, r, s, f, h, y, x) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, y, x) : r.prototype && r.prototype.isPureReactComponent ? !bu(s, f) || !bu(h, y) : !0;
  }
  function Mf(n, r, s) {
    var f = !1, h = kr, y = r.contextType;
    return typeof y == "object" && y !== null ? y = Ii(y) : (h = zn(r) ? ni : wn.current, f = r.contextTypes, y = (f = f != null) ? ri(n, h) : kr), r = new r(s, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = _f, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Iv(n, r, s, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, f), r.state !== n && _f.enqueueReplaceState(r, r.state, null);
  }
  function Ku(n, r, s, f) {
    var h = n.stateNode;
    h.props = s, h.state = n.memoizedState, h.refs = {}, hp(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? h.context = Ii(y) : (y = zn(r) ? ni : wn.current, h.context = ri(n, y)), h.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Sp(n, r, y, s), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && _f.enqueueReplaceState(h, h.state, null), Vu(n, s, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Kl(n, r) {
    try {
      var s = "", f = r;
      do
        s += wt(f), f = f.return;
      while (f);
      var h = s;
    } catch (y) {
      h = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function Ep(n, r, s) {
    return { value: n, source: null, stack: s ?? null, digest: r ?? null };
  }
  function Cp(n, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var Of = typeof WeakMap == "function" ? WeakMap : Map;
  function $v(n, r, s) {
    s = uo(-1, s), s.tag = 3, s.payload = { element: null };
    var f = r.value;
    return s.callback = function() {
      Ws || (Ws = !0, ql = f), Cp(n, r);
    }, s;
  }
  function Tp(n, r, s) {
    s = uo(-1, s), s.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      s.payload = function() {
        return f(h);
      }, s.callback = function() {
        Cp(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (s.callback = function() {
      Cp(n, r), typeof f != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), s;
  }
  function xp(n, r, s) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Of();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(s) || (h.add(s), n = Kg.bind(null, n, r, s), r.then(n, n));
  }
  function Yv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zo(n, r, s, f, h) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = uo(-1, 1), r.tag = 2, Qo(s, r, 1))), s.lanes |= 1), n) : (n.flags |= 65536, n.lanes = h, n);
  }
  var Qu = oe.ReactCurrentOwner, Bn = !1;
  function pr(n, r, s, f) {
    r.child = n === null ? be(r, null, s, f) : kn(r, n.child, s, f);
  }
  function si(n, r, s, f, h) {
    s = s.render;
    var y = r.ref;
    return Cn(r, h), f = Xo(n, r, s, f, y, h), s = ha(), n !== null && !Bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Yi(n, r, h)) : (mn && s && af(r), r.flags |= 1, pr(n, r, f, h), r.child);
  }
  function Ql(n, r, s, f, h) {
    if (n === null) {
      var y = s.type;
      return typeof y == "function" && !Up(y) && y.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = y, mt(n, r, y, f, h)) : (n = fc(s.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, (n.lanes & h) === 0) {
      var x = y.memoizedProps;
      if (s = s.compare, s = s !== null ? s : bu, s(x, f) && n.ref === r.ref) return Yi(n, r, h);
    }
    return r.flags |= 1, n = nl(y, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function mt(n, r, s, f, h) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (bu(y, f) && n.ref === r.ref) if (Bn = !1, r.pendingProps = f = y, (n.lanes & h) !== 0) (n.flags & 131072) !== 0 && (Bn = !0);
      else return r.lanes = n.lanes, Yi(n, r, h);
    }
    return Wv(n, r, s, f, h);
  }
  function Xu(n, r, s) {
    var f = r.pendingProps, h = f.children, y = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(Is, Ri), Ri |= s;
    else {
      if ((s & 1073741824) === 0) return n = y !== null ? y.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ge(Is, Ri), Ri |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = y !== null ? y.baseLanes : s, Ge(Is, Ri), Ri |= f;
    }
    else y !== null ? (f = y.baseLanes | s, r.memoizedState = null) : f = s, Ge(Is, Ri), Ri |= f;
    return pr(n, r, h, s), r.child;
  }
  function wp(n, r) {
    var s = r.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Wv(n, r, s, f, h) {
    var y = zn(s) ? ni : wn.current;
    return y = ri(r, y), Cn(r, h), s = Xo(n, r, s, f, y, h), f = ha(), n !== null && !Bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Yi(n, r, h)) : (mn && f && af(r), r.flags |= 1, pr(n, r, s, h), r.child);
  }
  function Gv(n, r, s, f, h) {
    if (zn(s)) {
      var y = !0;
      nr(r);
    } else y = !1;
    if (Cn(r, h), r.stateNode === null) $i(n, r), Mf(r, s, f), Ku(r, s, f, h), f = !0;
    else if (n === null) {
      var x = r.stateNode, O = r.memoizedProps;
      x.props = O;
      var P = x.context, K = s.contextType;
      typeof K == "object" && K !== null ? K = Ii(K) : (K = zn(s) ? ni : wn.current, K = ri(r, K));
      var fe = s.getDerivedStateFromProps, he = typeof fe == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      he || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (O !== f || P !== K) && Iv(r, x, f, K), wi = !1;
      var ce = r.memoizedState;
      x.state = ce, Vu(r, f, x, h), P = r.memoizedState, O !== f || ce !== P || Xn.current || wi ? (typeof fe == "function" && (Sp(r, s, fe, f), P = r.memoizedState), (O = wi || Hv(r, s, O, f, ce, P, K)) ? (he || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = P), x.props = f, x.state = P, x.context = K, f = O) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      x = r.stateNode, zv(n, r), O = r.memoizedProps, K = r.type === r.elementType ? O : va(r.type, O), x.props = K, he = r.pendingProps, ce = x.context, P = s.contextType, typeof P == "object" && P !== null ? P = Ii(P) : (P = zn(s) ? ni : wn.current, P = ri(r, P));
      var Oe = s.getDerivedStateFromProps;
      (fe = typeof Oe == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (O !== he || ce !== P) && Iv(r, x, f, P), wi = !1, ce = r.memoizedState, x.state = ce, Vu(r, f, x, h);
      var je = r.memoizedState;
      O !== he || ce !== je || Xn.current || wi ? (typeof Oe == "function" && (Sp(r, s, Oe, f), je = r.memoizedState), (K = wi || Hv(r, s, K, f, ce, je, P) || !1) ? (fe || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(f, je, P), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(f, je, P)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || O === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = je), x.props = f, x.state = je, x.context = P, f = K) : (typeof x.componentDidUpdate != "function" || O === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return qu(n, r, s, f, y, h);
  }
  function qu(n, r, s, f, h, y) {
    wp(n, r);
    var x = (r.flags & 128) !== 0;
    if (!f && !x) return h && nf(r, s, !1), Yi(n, r, y);
    f = r.stateNode, Qu.current = r;
    var O = x && typeof s.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && x ? (r.child = kn(r, n.child, null, y), r.child = kn(r, null, O, y)) : pr(n, r, O, y), r.memoizedState = f.state, h && nf(r, s, !0), r.child;
  }
  function Bs(n) {
    var r = n.stateNode;
    r.pendingContext ? Nv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Nv(n, r.context, !1), mp(n, r.containerInfo);
  }
  function Kv(n, r, s, f, h) {
    return Ko(), so(h), r.flags |= 256, pr(n, r, s, f), r.child;
  }
  var Af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Rp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Lf(n, r, s) {
    var f = r.pendingProps, h = Tn.current, y = !1, x = (r.flags & 128) !== 0, O;
    if ((O = x) || (O = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), O ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Ge(Tn, h & 1), n === null)
      return lp(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (x = f.children, n = f.fallback, y ? (f = r.mode, y = r.child, x = { mode: "hidden", children: x }, (f & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = x) : y = rl(x, f, 0, null), n = vo(n, f, s, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Rp(s), r.memoizedState = Af, n) : bp(r, x));
    if (h = n.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return Qv(n, r, x, f, O, h, s);
    if (y) {
      y = f.fallback, x = r.mode, h = n.child, O = h.sibling;
      var P = { mode: "hidden", children: f.children };
      return (x & 1) === 0 && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = P, r.deletions = null) : (f = nl(h, P), f.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? y = nl(O, y) : (y = vo(y, x, s, null), y.flags |= 2), y.return = r, f.return = r, f.sibling = y, r.child = f, f = y, y = r.child, x = n.child.memoizedState, x = x === null ? Rp(s) : { baseLanes: x.baseLanes | s, cachePool: null, transitions: x.transitions }, y.memoizedState = x, y.childLanes = n.childLanes & ~s, r.memoizedState = Af, f;
    }
    return y = n.child, n = y.sibling, f = nl(y, { mode: "visible", children: f.children }), (r.mode & 1) === 0 && (f.lanes = s), f.return = r, f.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function bp(n, r) {
    return r = rl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zu(n, r, s, f) {
    return f !== null && so(f), kn(r, n.child, null, s), n = bp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, s, f, h, y, x) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, f = Ep(Error(c(422))), Zu(n, r, x, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = f.fallback, h = r.mode, f = rl({ mode: "visible", children: f.children }, h, 0, null), y = vo(y, h, x, null), y.flags |= 2, f.return = r, y.return = r, f.sibling = y, r.child = f, (r.mode & 1) !== 0 && kn(r, n.child, null, x), r.child.memoizedState = Rp(x), r.memoizedState = Af, y);
    if ((r.mode & 1) === 0) return Zu(n, r, x, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f) var O = f.dgst;
      return f = O, y = Error(c(419)), f = Ep(y, f, void 0), Zu(n, r, x, f);
    }
    if (O = (x & n.childLanes) !== 0, Bn || O) {
      if (f = Zn, f !== null) {
        switch (x & -x) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
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
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = (h & (f.suspendedLanes | x)) !== 0 ? 0 : h, h !== 0 && h !== y.retryLane && (y.retryLane = h, xi(n, h), Br(f, n, h, -1));
      }
      return Vp(), f = Ep(Error(c(421))), Zu(n, r, x, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Qg.bind(null, n), h._reactRetry = r, null) : (n = y.treeContext, ai = Oa(h.nextSibling), ii = r, mn = !0, Hi = null, n !== null && (jn[Bi++] = Pa, jn[Bi++] = Va, jn[Bi++] = Ci, Pa = n.id, Va = n.overflow, Ci = r), r = bp(r, f.children), r.flags |= 4096, r);
  }
  function Dp(n, r, s) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), fp(n.return, r, s);
  }
  function zr(n, r, s, f, h) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: s, tailMode: h } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = f, y.tail = s, y.tailMode = h);
  }
  function za(n, r, s) {
    var f = r.pendingProps, h = f.revealOrder, y = f.tail;
    if (pr(n, r, f.children, s), f = Tn.current, (f & 2) !== 0) f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Dp(n, s, r);
        else if (n.tag === 19) Dp(n, s, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      f &= 1;
    }
    if (Ge(Tn, f), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (s = r.child, h = null; s !== null; ) n = s.alternate, n !== null && ff(n) === null && (h = s), s = s.sibling;
        s = h, s === null ? (h = r.child, r.child = null) : (h = s.sibling, s.sibling = null), zr(r, !1, h, s, y);
        break;
      case "backwards":
        for (s = null, h = r.child, r.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && ff(n) === null) {
            r.child = h;
            break;
          }
          n = h.sibling, h.sibling = s, s = h, h = n;
        }
        zr(r, !0, s, null, y);
        break;
      case "together":
        zr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function $i(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Yi(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), Ba |= r.lanes, (s & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, s = nl(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; ) n = n.sibling, s = s.sibling = nl(n, n.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function Ju(n, r, s) {
    switch (r.tag) {
      case 3:
        Bs(r), Ko();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        zn(r.type) && nr(r);
        break;
      case 4:
        mp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        Ge(Ti, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Ge(Tn, Tn.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Lf(n, r, s) : (Ge(Tn, Tn.current & 1), n = Yi(n, r, s), n !== null ? n.sibling : null);
        Ge(Tn, Tn.current & 1);
        break;
      case 19:
        if (f = (s & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (f) return za(n, r, s);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Ge(Tn, Tn.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xu(n, r, s);
    }
    return Yi(n, r, s);
  }
  var Wi, Hn, Xv, qv;
  Wi = function(n, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, Hn = function() {
  }, Xv = function(n, r, s, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, Fl(Ua.current);
      var y = null;
      switch (s) {
        case "input":
          h = sr(n, h), f = sr(n, f), y = [];
          break;
        case "select":
          h = ye({}, h, { value: void 0 }), f = ye({}, f, { value: void 0 }), y = [];
          break;
        case "textarea":
          h = Kn(n, h), f = Kn(n, f), y = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Ho);
      }
      cn(s, f);
      var x;
      s = null;
      for (K in h) if (!f.hasOwnProperty(K) && h.hasOwnProperty(K) && h[K] != null) if (K === "style") {
        var O = h[K];
        for (x in O) O.hasOwnProperty(x) && (s || (s = {}), s[x] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (g.hasOwnProperty(K) ? y || (y = []) : (y = y || []).push(K, null));
      for (K in f) {
        var P = f[K];
        if (O = h?.[K], f.hasOwnProperty(K) && P !== O && (P != null || O != null)) if (K === "style") if (O) {
          for (x in O) !O.hasOwnProperty(x) || P && P.hasOwnProperty(x) || (s || (s = {}), s[x] = "");
          for (x in P) P.hasOwnProperty(x) && O[x] !== P[x] && (s || (s = {}), s[x] = P[x]);
        } else s || (y || (y = []), y.push(
          K,
          s
        )), s = P;
        else K === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, O = O ? O.__html : void 0, P != null && O !== P && (y = y || []).push(K, P)) : K === "children" ? typeof P != "string" && typeof P != "number" || (y = y || []).push(K, "" + P) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (g.hasOwnProperty(K) ? (P != null && K === "onScroll" && Wt("scroll", n), y || O === P || (y = [])) : (y = y || []).push(K, P));
      }
      s && (y = y || []).push("style", s);
      var K = y;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, qv = function(n, r, s, f) {
    s !== f && (r.flags |= 4);
  };
  function ec(n, r) {
    if (!mn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
        s === null ? n.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = n.tail;
        for (var f = null; s !== null; ) s.alternate !== null && (f = s), s = s.sibling;
        f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, s = 0, f = 0;
    if (r) for (var h = n.child; h !== null; ) s |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) s |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = s, r;
  }
  function Zv(n, r, s) {
    var f = r.pendingProps;
    switch (of(r), r.tag) {
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
        return ir(r), null;
      case 1:
        return zn(r.type) && Vs(), ir(r), null;
      case 3:
        return f = r.stateNode, Bl(), un(Xn), un(wn), Qe(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (lf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Hi !== null && (Zl(Hi), Hi = null))), Hn(n, r), ir(r), null;
      case 5:
        cf(r);
        var h = Fl(ju.current);
        if (s = r.type, n !== null && r.stateNode != null) Xv(n, r, s, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return ir(r), null;
          }
          if (n = Fl(Ua.current), lf(r)) {
            f = r.stateNode, s = r.type;
            var y = r.memoizedProps;
            switch (f[Aa] = r, f[Au] = y, n = (r.mode & 1) !== 0, s) {
              case "dialog":
                Wt("cancel", f), Wt("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < _u.length; h++) Wt(_u[h], f);
                break;
              case "source":
                Wt("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  f
                ), Wt("load", f);
                break;
              case "details":
                Wt("toggle", f);
                break;
              case "input":
                Wn(f, y), Wt("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!y.multiple }, Wt("invalid", f);
                break;
              case "textarea":
                Rr(f, y), Wt("invalid", f);
            }
            cn(s, y), h = null;
            for (var x in y) if (y.hasOwnProperty(x)) {
              var O = y[x];
              x === "children" ? typeof O == "string" ? f.textContent !== O && (y.suppressHydrationWarning !== !0 && Zc(f.textContent, O, n), h = ["children", O]) : typeof O == "number" && f.textContent !== "" + O && (y.suppressHydrationWarning !== !0 && Zc(
                f.textContent,
                O,
                n
              ), h = ["children", "" + O]) : g.hasOwnProperty(x) && O != null && x === "onScroll" && Wt("scroll", f);
            }
            switch (s) {
              case "input":
                Pn(f), Ca(f, y, !0);
                break;
              case "textarea":
                Pn(f), Vn(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (f.onclick = Ho);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            x = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = br(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = x.createElement(s, { is: f.is }) : (n = x.createElement(s), s === "select" && (x = n, f.multiple ? x.multiple = !0 : f.size && (x.size = f.size))) : n = x.createElementNS(n, s), n[Aa] = r, n[Au] = f, Wi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (x = tr(s, f), s) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < _u.length; h++) Wt(_u[h], n);
                  h = f;
                  break;
                case "source":
                  Wt("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), h = f;
                  break;
                case "details":
                  Wt("toggle", n), h = f;
                  break;
                case "input":
                  Wn(n, f), h = sr(n, f), Wt("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = ye({}, f, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  Rr(n, f), h = Kn(n, f), Wt("invalid", n);
                  break;
                default:
                  h = f;
              }
              cn(s, h), O = h;
              for (y in O) if (O.hasOwnProperty(y)) {
                var P = O[y];
                y === "style" ? an(n, P) : y === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && Ta(n, P)) : y === "children" ? typeof P == "string" ? (s !== "textarea" || P !== "") && Se(n, P) : typeof P == "number" && Se(n, "" + P) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (g.hasOwnProperty(y) ? P != null && y === "onScroll" && Wt("scroll", n) : P != null && ne(n, y, P, x));
              }
              switch (s) {
                case "input":
                  Pn(n), Ca(n, f, !1);
                  break;
                case "textarea":
                  Pn(n), Vn(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + Ct(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, y = f.value, y != null ? bn(n, !!f.multiple, y, !1) : f.defaultValue != null && bn(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Ho);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (s = Fl(ju.current), Fl(Ua.current), lf(r)) {
            if (f = r.stateNode, s = r.memoizedProps, f[Aa] = r, (y = f.nodeValue !== s) && (n = ii, n !== null)) switch (n.tag) {
              case 3:
                Zc(f.nodeValue, s, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Zc(f.nodeValue, s, (n.mode & 1) !== 0);
            }
            y && (r.flags |= 4);
          } else f = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(f), f[Aa] = r, r.stateNode = f;
        }
        return ir(r), null;
      case 13:
        if (un(Tn), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mn && ai !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Pu(), Ko(), r.flags |= 98560, y = !1;
          else if (y = lf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!y) throw Error(c(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y) throw Error(c(317));
              y[Aa] = r;
            } else Ko(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), y = !1;
          } else Hi !== null && (Zl(Hi), Hi = null), y = !0;
          if (!y) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Tn.current & 1) !== 0 ? On === 0 && (On = 3) : Vp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Bl(), Hn(n, r), n === null && Os(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return cp(r.type._context), ir(r), null;
      case 17:
        return zn(r.type) && Vs(), ir(r), null;
      case 19:
        if (un(Tn), y = r.memoizedState, y === null) return ir(r), null;
        if (f = (r.flags & 128) !== 0, x = y.rendering, x === null) if (f) ec(y, !1);
        else {
          if (On !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (x = ff(n), x !== null) {
              for (r.flags |= 128, ec(y, !1), f = x.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = s, s = r.child; s !== null; ) y = s, n = f, y.flags &= 14680066, x = y.alternate, x === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = x.childLanes, y.lanes = x.lanes, y.child = x.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = x.memoizedProps, y.memoizedState = x.memoizedState, y.updateQueue = x.updateQueue, y.type = x.type, n = x.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
              return Ge(Tn, Tn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          y.tail !== null && pt() > Ys && (r.flags |= 128, f = !0, ec(y, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = ff(x), n !== null) {
            if (r.flags |= 128, f = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), ec(y, !0), y.tail === null && y.tailMode === "hidden" && !x.alternate && !mn) return ir(r), null;
          } else 2 * pt() - y.renderingStartTime > Ys && s !== 1073741824 && (r.flags |= 128, f = !0, ec(y, !1), r.lanes = 4194304);
          y.isBackwards ? (x.sibling = r.child, r.child = x) : (s = y.last, s !== null ? s.sibling = x : r.child = x, y.last = x);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = pt(), r.sibling = null, s = Tn.current, Ge(Tn, f ? s & 1 | 2 : s & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return Pp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && (r.mode & 1) !== 0 ? (Ri & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function Nf(n, r) {
    switch (of(r), r.tag) {
      case 1:
        return zn(r.type) && Vs(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Bl(), un(Xn), un(wn), Qe(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return cf(r), null;
      case 13:
        if (un(Tn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(c(340));
          Ko();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return un(Tn), null;
      case 4:
        return Bl(), null;
      case 10:
        return cp(r.type._context), null;
      case 22:
      case 23:
        return Pp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var tc = !1, Mr = !1, Hg = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
  function Hs(n, r) {
    var s = n.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (f) {
      yn(n, r, f);
    }
    else s.current = null;
  }
  function Pf(n, r, s) {
    try {
      s();
    } catch (f) {
      yn(n, r, f);
    }
  }
  var Jv = !1;
  function em(n, r) {
    if (Ou = Ui, n = Du(), $c(n)) {
      if ("selectionStart" in n) var s = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        s = (s = n.ownerDocument) && s.defaultView || window;
        var f = s.getSelection && s.getSelection();
        if (f && f.rangeCount !== 0) {
          s = f.anchorNode;
          var h = f.anchorOffset, y = f.focusNode;
          f = f.focusOffset;
          try {
            s.nodeType, y.nodeType;
          } catch {
            s = null;
            break e;
          }
          var x = 0, O = -1, P = -1, K = 0, fe = 0, he = n, ce = null;
          t: for (; ; ) {
            for (var Oe; he !== s || h !== 0 && he.nodeType !== 3 || (O = x + h), he !== y || f !== 0 && he.nodeType !== 3 || (P = x + f), he.nodeType === 3 && (x += he.nodeValue.length), (Oe = he.firstChild) !== null; )
              ce = he, he = Oe;
            for (; ; ) {
              if (he === n) break t;
              if (ce === s && ++K === h && (O = x), ce === y && ++fe === f && (P = x), (Oe = he.nextSibling) !== null) break;
              he = ce, ce = he.parentNode;
            }
            he = Oe;
          }
          s = O === -1 || P === -1 ? null : { start: O, end: P };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Nl = { focusedElem: n, selectionRange: s }, Ui = !1, Pe = r; Pe !== null; ) if (r = Pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Pe = n;
    else for (; Pe !== null; ) {
      r = Pe;
      try {
        var je = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (je !== null) {
              var Ie = je.memoizedProps, An = je.memoizedState, H = r.stateNode, U = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : va(r.type, Ie), An);
              H.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          case 3:
            var Y = r.stateNode.containerInfo;
            Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (de) {
        yn(r, r.return, de);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Pe = n;
        break;
      }
      Pe = r.return;
    }
    return je = Jv, Jv = !1, je;
  }
  function nc(n, r, s) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var y = h.destroy;
          h.destroy = void 0, y !== void 0 && Pf(r, s, y);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function rc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & n) === n) {
          var f = s.create;
          s.destroy = f();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function kp(n) {
    var r = n.ref;
    if (r !== null) {
      var s = n.stateNode;
      n.tag, n = s, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Vf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Vf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[Au], delete r[Lu], delete r[Ps], delete r[Fg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function ic(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function fo(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || ic(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ja(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(n, r) : s.insertBefore(n, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(n, s)) : (r = s, r.appendChild(n)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Ho));
    else if (f !== 4 && (n = n.child, n !== null)) for (ja(n, r, s), n = n.sibling; n !== null; ) ja(n, r, s), n = n.sibling;
  }
  function Fa(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Fa(n, r, s), n = n.sibling; n !== null; ) Fa(n, r, s), n = n.sibling;
  }
  var Mn = null, jr = !1;
  function Fr(n, r, s) {
    for (s = s.child; s !== null; ) tm(n, r, s), s = s.sibling;
  }
  function tm(n, r, s) {
    if (ei && typeof ei.onCommitFiberUnmount == "function") try {
      ei.onCommitFiberUnmount(Lo, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        Mr || Hs(s, r);
      case 6:
        var f = Mn, h = jr;
        Mn = null, Fr(n, r, s), Mn = f, jr = h, Mn !== null && (jr ? (n = Mn, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : Mn.removeChild(s.stateNode));
        break;
      case 18:
        Mn !== null && (jr ? (n = Mn, s = s.stateNode, n.nodeType === 8 ? Ns(n.parentNode, s) : n.nodeType === 1 && Ns(n, s), ca(n)) : Ns(Mn, s.stateNode));
        break;
      case 4:
        f = Mn, h = jr, Mn = s.stateNode.containerInfo, jr = !0, Fr(n, r, s), Mn = f, jr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mr && (f = s.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var y = h, x = y.destroy;
            y = y.tag, x !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && Pf(s, r, x), h = h.next;
          } while (h !== f);
        }
        Fr(n, r, s);
        break;
      case 1:
        if (!Mr && (Hs(s, r), f = s.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = s.memoizedProps, f.state = s.memoizedState, f.componentWillUnmount();
        } catch (O) {
          yn(s, r, O);
        }
        Fr(n, r, s);
        break;
      case 21:
        Fr(n, r, s);
        break;
      case 22:
        s.mode & 1 ? (Mr = (f = Mr) || s.memoizedState !== null, Fr(n, r, s), Mr = f) : Fr(n, r, s);
        break;
      default:
        Fr(n, r, s);
    }
  }
  function nm(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new Hg()), r.forEach(function(f) {
        var h = fm.bind(null, n, f);
        s.has(f) || (s.add(f), f.then(h, h));
      });
    }
  }
  function ma(n, r) {
    var s = r.deletions;
    if (s !== null) for (var f = 0; f < s.length; f++) {
      var h = s[f];
      try {
        var y = n, x = r, O = x;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              Mn = O.stateNode, jr = !1;
              break e;
            case 3:
              Mn = O.stateNode.containerInfo, jr = !0;
              break e;
            case 4:
              Mn = O.stateNode.containerInfo, jr = !0;
              break e;
          }
          O = O.return;
        }
        if (Mn === null) throw Error(c(160));
        tm(y, x, h), Mn = null, jr = !1;
        var P = h.alternate;
        P !== null && (P.return = null), h.return = null;
      } catch (K) {
        yn(h, r, K);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) _p(r, n), r = r.sibling;
  }
  function _p(n, r) {
    var s = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ma(r, n), ui(n), f & 4) {
          try {
            nc(3, n, n.return), rc(3, n);
          } catch (Ie) {
            yn(n, n.return, Ie);
          }
          try {
            nc(5, n, n.return);
          } catch (Ie) {
            yn(n, n.return, Ie);
          }
        }
        break;
      case 1:
        ma(r, n), ui(n), f & 512 && s !== null && Hs(s, s.return);
        break;
      case 5:
        if (ma(r, n), ui(n), f & 512 && s !== null && Hs(s, s.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Se(h, "");
          } catch (Ie) {
            yn(n, n.return, Ie);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var y = n.memoizedProps, x = s !== null ? s.memoizedProps : y, O = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null) try {
            O === "input" && y.type === "radio" && y.name != null && Gn(h, y), tr(O, x);
            var K = tr(O, y);
            for (x = 0; x < P.length; x += 2) {
              var fe = P[x], he = P[x + 1];
              fe === "style" ? an(h, he) : fe === "dangerouslySetInnerHTML" ? Ta(h, he) : fe === "children" ? Se(h, he) : ne(h, fe, he, K);
            }
            switch (O) {
              case "input":
                Jr(h, y);
                break;
              case "textarea":
                na(h, y);
                break;
              case "select":
                var ce = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!y.multiple;
                var Oe = y.value;
                Oe != null ? bn(h, !!y.multiple, Oe, !1) : ce !== !!y.multiple && (y.defaultValue != null ? bn(
                  h,
                  !!y.multiple,
                  y.defaultValue,
                  !0
                ) : bn(h, !!y.multiple, y.multiple ? [] : "", !1));
            }
            h[Au] = y;
          } catch (Ie) {
            yn(n, n.return, Ie);
          }
        }
        break;
      case 6:
        if (ma(r, n), ui(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          h = n.stateNode, y = n.memoizedProps;
          try {
            h.nodeValue = y;
          } catch (Ie) {
            yn(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (ma(r, n), ui(n), f & 4 && s !== null && s.memoizedState.isDehydrated) try {
          ca(r.containerInfo);
        } catch (Ie) {
          yn(n, n.return, Ie);
        }
        break;
      case 4:
        ma(r, n), ui(n);
        break;
      case 13:
        ma(r, n), ui(n), h = n.child, h.flags & 8192 && (y = h.memoizedState !== null, h.stateNode.isHidden = y, !y || h.alternate !== null && h.alternate.memoizedState !== null || (Ap = pt())), f & 4 && nm(n);
        break;
      case 22:
        if (fe = s !== null && s.memoizedState !== null, n.mode & 1 ? (Mr = (K = Mr) || fe, ma(r, n), Mr = K) : ma(r, n), ui(n), f & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !fe && (n.mode & 1) !== 0) for (Pe = n, fe = n.child; fe !== null; ) {
            for (he = Pe = fe; Pe !== null; ) {
              switch (ce = Pe, Oe = ce.child, ce.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nc(4, ce, ce.return);
                  break;
                case 1:
                  Hs(ce, ce.return);
                  var je = ce.stateNode;
                  if (typeof je.componentWillUnmount == "function") {
                    f = ce, s = ce.return;
                    try {
                      r = f, je.props = r.memoizedProps, je.state = r.memoizedState, je.componentWillUnmount();
                    } catch (Ie) {
                      yn(f, s, Ie);
                    }
                  }
                  break;
                case 5:
                  Hs(ce, ce.return);
                  break;
                case 22:
                  if (ce.memoizedState !== null) {
                    ac(he);
                    continue;
                  }
              }
              Oe !== null ? (Oe.return = ce, Pe = Oe) : ac(he);
            }
            fe = fe.sibling;
          }
          e: for (fe = null, he = n; ; ) {
            if (he.tag === 5) {
              if (fe === null) {
                fe = he;
                try {
                  h = he.stateNode, K ? (y = h.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (O = he.stateNode, P = he.memoizedProps.style, x = P != null && P.hasOwnProperty("display") ? P.display : null, O.style.display = Yt("display", x));
                } catch (Ie) {
                  yn(n, n.return, Ie);
                }
              }
            } else if (he.tag === 6) {
              if (fe === null) try {
                he.stateNode.nodeValue = K ? "" : he.memoizedProps;
              } catch (Ie) {
                yn(n, n.return, Ie);
              }
            } else if ((he.tag !== 22 && he.tag !== 23 || he.memoizedState === null || he === n) && he.child !== null) {
              he.child.return = he, he = he.child;
              continue;
            }
            if (he === n) break e;
            for (; he.sibling === null; ) {
              if (he.return === null || he.return === n) break e;
              fe === he && (fe = null), he = he.return;
            }
            fe === he && (fe = null), he.sibling.return = he.return, he = he.sibling;
          }
        }
        break;
      case 19:
        ma(r, n), ui(n), f & 4 && nm(n);
        break;
      case 21:
        break;
      default:
        ma(
          r,
          n
        ), ui(n);
    }
  }
  function ui(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = n.return; s !== null; ) {
            if (ic(s)) {
              var f = s;
              break e;
            }
            s = s.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (Se(h, ""), f.flags &= -33);
            var y = fo(n);
            Fa(n, y, h);
            break;
          case 3:
          case 4:
            var x = f.stateNode.containerInfo, O = fo(n);
            ja(n, O, x);
            break;
          default:
            throw Error(c(161));
        }
      } catch (P) {
        yn(n, n.return, P);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ig(n, r, s) {
    Pe = n, Mp(n);
  }
  function Mp(n, r, s) {
    for (var f = (n.mode & 1) !== 0; Pe !== null; ) {
      var h = Pe, y = h.child;
      if (h.tag === 22 && f) {
        var x = h.memoizedState !== null || tc;
        if (!x) {
          var O = h.alternate, P = O !== null && O.memoizedState !== null || Mr;
          O = tc;
          var K = Mr;
          if (tc = x, (Mr = P) && !K) for (Pe = h; Pe !== null; ) x = Pe, P = x.child, x.tag === 22 && x.memoizedState !== null ? Op(h) : P !== null ? (P.return = x, Pe = P) : Op(h);
          for (; y !== null; ) Pe = y, Mp(y), y = y.sibling;
          Pe = h, tc = O, Mr = K;
        }
        rm(n);
      } else (h.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = h, Pe = y) : rm(n);
    }
  }
  function rm(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Mr || rc(5, r);
              break;
            case 1:
              var f = r.stateNode;
              if (r.flags & 4 && !Mr) if (s === null) f.componentDidMount();
              else {
                var h = r.elementType === r.type ? s.memoizedProps : va(r.type, s.memoizedProps);
                f.componentDidUpdate(h, s.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var y = r.updateQueue;
              y !== null && vp(r, y, f);
              break;
            case 3:
              var x = r.updateQueue;
              if (x !== null) {
                if (s = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    s = r.child.stateNode;
                    break;
                  case 1:
                    s = r.child.stateNode;
                }
                vp(r, x, s);
              }
              break;
            case 5:
              var O = r.stateNode;
              if (s === null && r.flags & 4) {
                s = O;
                var P = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    P.autoFocus && s.focus();
                    break;
                  case "img":
                    P.src && (s.src = P.src);
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
              if (r.memoizedState === null) {
                var K = r.alternate;
                if (K !== null) {
                  var fe = K.memoizedState;
                  if (fe !== null) {
                    var he = fe.dehydrated;
                    he !== null && ca(he);
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
              throw Error(c(163));
          }
          Mr || r.flags & 512 && kp(r);
        } catch (ce) {
          yn(r, r.return, ce);
        }
      }
      if (r === n) {
        Pe = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, Pe = s;
        break;
      }
      Pe = r.return;
    }
  }
  function ac(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if (r === n) {
        Pe = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, Pe = s;
        break;
      }
      Pe = r.return;
    }
  }
  function Op(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              rc(4, r);
            } catch (P) {
              yn(r, s, P);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (P) {
                yn(r, h, P);
              }
            }
            var y = r.return;
            try {
              kp(r);
            } catch (P) {
              yn(r, y, P);
            }
            break;
          case 5:
            var x = r.return;
            try {
              kp(r);
            } catch (P) {
              yn(r, x, P);
            }
        }
      } catch (P) {
        yn(r, r.return, P);
      }
      if (r === n) {
        Pe = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Pe = O;
        break;
      }
      Pe = r.return;
    }
  }
  var $g = Math.ceil, Jo = oe.ReactCurrentDispatcher, Xl = oe.ReactCurrentOwner, hr = oe.ReactCurrentBatchConfig, Lt = 0, Zn = null, In = null, vr = 0, Ri = 0, Is = Fi(0), On = 0, oc = null, Ba = 0, $s = 0, Uf = 0, lc = null, ci = null, Ap = 0, Ys = 1 / 0, bi = null, Ws = !1, ql = null, el = null, zf = !1, po = null, sc = 0, tl = 0, Gs = null, uc = -1, Or = 0;
  function $n() {
    return (Lt & 6) !== 0 ? pt() : uc !== -1 ? uc : uc = pt();
  }
  function Ha(n) {
    return (n.mode & 1) === 0 ? 1 : (Lt & 2) !== 0 && vr !== 0 ? vr & -vr : Bg.transition !== null ? (Or === 0 && (Or = Ss()), Or) : (n = jt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : bs(n.type)), n);
  }
  function Br(n, r, s, f) {
    if (50 < tl) throw tl = 0, Gs = null, Error(c(185));
    Ja(n, s, f), ((Lt & 2) === 0 || n !== Zn) && (n === Zn && ((Lt & 2) === 0 && ($s |= s), On === 4 && ya(n, vr)), fi(n, f), s === 1 && Lt === 0 && (r.mode & 1) === 0 && (Ys = pt() + 500, Us && Na()));
  }
  function fi(n, r) {
    var s = n.callbackNode;
    Rl(n, r);
    var f = ua(n, n === Zn ? vr : 0);
    if (f === 0) s !== null && cr(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (s != null && cr(s), r === 1) n.tag === 0 ? $o(Lp.bind(null, n)) : rf(Lp.bind(null, n)), Ls(function() {
        (Lt & 6) === 0 && Na();
      }), s = null;
      else {
        switch (Cs(f)) {
          case 1:
            s = la;
            break;
          case 4:
            s = xl;
            break;
          case 16:
            s = wl;
            break;
          case 536870912:
            s = ms;
            break;
          default:
            s = wl;
        }
        s = pm(s, jf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function jf(n, r) {
    if (uc = -1, Or = 0, (Lt & 6) !== 0) throw Error(c(327));
    var s = n.callbackNode;
    if (Ks() && n.callbackNode !== s) return null;
    var f = ua(n, n === Zn ? vr : 0);
    if (f === 0) return null;
    if ((f & 30) !== 0 || (f & n.expiredLanes) !== 0 || r) r = Ff(n, f);
    else {
      r = f;
      var h = Lt;
      Lt |= 2;
      var y = am();
      (Zn !== n || vr !== r) && (bi = null, Ys = pt() + 500, ho(n, r));
      do
        try {
          om();
          break;
        } catch (O) {
          im(n, O);
        }
      while (!0);
      up(), Jo.current = y, Lt = h, In !== null ? r = 0 : (Zn = null, vr = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (h = Po(n), h !== 0 && (f = h, r = cc(n, h))), r === 1) throw s = oc, ho(n, 0), ya(n, f), fi(n, pt()), s;
      if (r === 6) ya(n, f);
      else {
        if (h = n.current.alternate, (f & 30) === 0 && !Yg(h) && (r = Ff(n, f), r === 2 && (y = Po(n), y !== 0 && (f = y, r = cc(n, y))), r === 1)) throw s = oc, ho(n, 0), ya(n, f), fi(n, pt()), s;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            es(n, ci, bi);
            break;
          case 3:
            if (ya(n, f), (f & 130023424) === f && (r = Ap + 500 - pt(), 10 < r)) {
              if (ua(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                $n(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = ef(es.bind(null, n, ci, bi), r);
              break;
            }
            es(n, ci, bi);
            break;
          case 4:
            if (ya(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var x = 31 - Pr(f);
              y = 1 << x, x = r[x], x > h && (h = x), f &= ~y;
            }
            if (f = h, f = pt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * $g(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = ef(es.bind(null, n, ci, bi), f);
              break;
            }
            es(n, ci, bi);
            break;
          case 5:
            es(n, ci, bi);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return fi(n, pt()), n.callbackNode === s ? jf.bind(null, n) : null;
  }
  function cc(n, r) {
    var s = lc;
    return n.current.memoizedState.isDehydrated && (ho(n, r).flags |= 256), n = Ff(n, r), n !== 2 && (r = ci, ci = s, r !== null && Zl(r)), n;
  }
  function Zl(n) {
    ci === null ? ci = n : ci.push.apply(ci, n);
  }
  function Yg(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var f = 0; f < s.length; f++) {
          var h = s[f], y = h.getSnapshot;
          h = h.value;
          try {
            if (!da(y(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ya(n, r) {
    for (r &= ~Uf, r &= ~$s, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - Pr(r), f = 1 << s;
      n[s] = -1, r &= ~f;
    }
  }
  function Lp(n) {
    if ((Lt & 6) !== 0) throw Error(c(327));
    Ks();
    var r = ua(n, 0);
    if ((r & 1) === 0) return fi(n, pt()), null;
    var s = Ff(n, r);
    if (n.tag !== 0 && s === 2) {
      var f = Po(n);
      f !== 0 && (r = f, s = cc(n, f));
    }
    if (s === 1) throw s = oc, ho(n, 0), ya(n, r), fi(n, pt()), s;
    if (s === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, es(n, ci, bi), fi(n, pt()), null;
  }
  function Np(n, r) {
    var s = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = s, Lt === 0 && (Ys = pt() + 500, Us && Na());
    }
  }
  function Jl(n) {
    po !== null && po.tag === 0 && (Lt & 6) === 0 && Ks();
    var r = Lt;
    Lt |= 1;
    var s = hr.transition, f = jt;
    try {
      if (hr.transition = null, jt = 1, n) return n();
    } finally {
      jt = f, hr.transition = s, Lt = r, (Lt & 6) === 0 && Na();
    }
  }
  function Pp() {
    Ri = Is.current, un(Is);
  }
  function ho(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, ip(s)), In !== null) for (s = In.return; s !== null; ) {
      var f = s;
      switch (of(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Vs();
          break;
        case 3:
          Bl(), un(Xn), un(wn), Qe();
          break;
        case 5:
          cf(f);
          break;
        case 4:
          Bl();
          break;
        case 13:
          un(Tn);
          break;
        case 19:
          un(Tn);
          break;
        case 10:
          cp(f.type._context);
          break;
        case 22:
        case 23:
          Pp();
      }
      s = s.return;
    }
    if (Zn = n, In = n = nl(n.current, null), vr = Ri = r, On = 0, oc = null, Uf = $s = Ba = 0, ci = lc = null, jl !== null) {
      for (r = 0; r < jl.length; r++) if (s = jl[r], f = s.interleaved, f !== null) {
        s.interleaved = null;
        var h = f.next, y = s.pending;
        if (y !== null) {
          var x = y.next;
          y.next = h, f.next = x;
        }
        s.pending = f;
      }
      jl = null;
    }
    return n;
  }
  function im(n, r) {
    do {
      var s = In;
      try {
        if (up(), Dt.current = Gl, df) {
          for (var f = Bt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          df = !1;
        }
        if (en = 0, rr = Fn = Bt = null, Bu = !1, Hl = 0, Xl.current = null, s === null || s.return === null) {
          On = 1, oc = r, In = null;
          break;
        }
        e: {
          var y = n, x = s.return, O = s, P = r;
          if (r = vr, O.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var K = P, fe = O, he = fe.tag;
            if ((fe.mode & 1) === 0 && (he === 0 || he === 11 || he === 15)) {
              var ce = fe.alternate;
              ce ? (fe.updateQueue = ce.updateQueue, fe.memoizedState = ce.memoizedState, fe.lanes = ce.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var Oe = Yv(x);
            if (Oe !== null) {
              Oe.flags &= -257, Zo(Oe, x, O, y, r), Oe.mode & 1 && xp(y, K, r), r = Oe, P = K;
              var je = r.updateQueue;
              if (je === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(P), r.updateQueue = Ie;
              } else je.add(P);
              break e;
            } else {
              if ((r & 1) === 0) {
                xp(y, K, r), Vp();
                break e;
              }
              P = Error(c(426));
            }
          } else if (mn && O.mode & 1) {
            var An = Yv(x);
            if (An !== null) {
              (An.flags & 65536) === 0 && (An.flags |= 256), Zo(An, x, O, y, r), so(Kl(P, O));
              break e;
            }
          }
          y = P = Kl(P, O), On !== 4 && (On = 2), lc === null ? lc = [y] : lc.push(y), y = x;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var H = $v(y, P, r);
                jv(y, H);
                break e;
              case 1:
                O = P;
                var U = y.type, Y = y.stateNode;
                if ((y.flags & 128) === 0 && (typeof U.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (el === null || !el.has(Y)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var de = Tp(y, O, r);
                  jv(y, de);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        sm(s);
      } catch (Fe) {
        r = Fe, In === s && s !== null && (In = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function am() {
    var n = Jo.current;
    return Jo.current = Gl, n === null ? Gl : n;
  }
  function Vp() {
    (On === 0 || On === 3 || On === 2) && (On = 4), Zn === null || (Ba & 268435455) === 0 && ($s & 268435455) === 0 || ya(Zn, vr);
  }
  function Ff(n, r) {
    var s = Lt;
    Lt |= 2;
    var f = am();
    (Zn !== n || vr !== r) && (bi = null, ho(n, r));
    do
      try {
        Wg();
        break;
      } catch (h) {
        im(n, h);
      }
    while (!0);
    if (up(), Lt = s, Jo.current = f, In !== null) throw Error(c(261));
    return Zn = null, vr = 0, On;
  }
  function Wg() {
    for (; In !== null; ) lm(In);
  }
  function om() {
    for (; In !== null && !aa(); ) lm(In);
  }
  function lm(n) {
    var r = dm(n.alternate, n, Ri);
    n.memoizedProps = n.pendingProps, r === null ? sm(n) : In = r, Xl.current = null;
  }
  function sm(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (s = Zv(s, r, Ri), s !== null) {
          In = s;
          return;
        }
      } else {
        if (s = Nf(s, r), s !== null) {
          s.flags &= 32767, In = s;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, In = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        In = r;
        return;
      }
      In = r = n;
    } while (r !== null);
    On === 0 && (On = 5);
  }
  function es(n, r, s) {
    var f = jt, h = hr.transition;
    try {
      hr.transition = null, jt = 1, Gg(n, r, s, f);
    } finally {
      hr.transition = h, jt = f;
    }
    return null;
  }
  function Gg(n, r, s, f) {
    do
      Ks();
    while (po !== null);
    if ((Lt & 6) !== 0) throw Error(c(327));
    s = n.finishedWork;
    var h = n.finishedLanes;
    if (s === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = s.lanes | s.childLanes;
    if (Ud(n, y), n === Zn && (In = Zn = null, vr = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || zf || (zf = !0, pm(wl, function() {
      return Ks(), null;
    })), y = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || y) {
      y = hr.transition, hr.transition = null;
      var x = jt;
      jt = 1;
      var O = Lt;
      Lt |= 4, Xl.current = null, em(n, s), _p(s, n), _s(Nl), Ui = !!Ou, Nl = Ou = null, n.current = s, Ig(s), oa(), Lt = O, jt = x, hr.transition = y;
    } else n.current = s;
    if (zf && (zf = !1, po = n, sc = h), y = n.pendingLanes, y === 0 && (el = null), yu(s.stateNode), fi(n, pt()), r !== null) for (f = n.onRecoverableError, s = 0; s < r.length; s++) h = r[s], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Ws) throw Ws = !1, n = ql, ql = null, n;
    return (sc & 1) !== 0 && n.tag !== 0 && Ks(), y = n.pendingLanes, (y & 1) !== 0 ? n === Gs ? tl++ : (tl = 0, Gs = n) : tl = 0, Na(), null;
  }
  function Ks() {
    if (po !== null) {
      var n = Cs(sc), r = hr.transition, s = jt;
      try {
        if (hr.transition = null, jt = 16 > n ? 16 : n, po === null) var f = !1;
        else {
          if (n = po, po = null, sc = 0, (Lt & 6) !== 0) throw Error(c(331));
          var h = Lt;
          for (Lt |= 4, Pe = n.current; Pe !== null; ) {
            var y = Pe, x = y.child;
            if ((Pe.flags & 16) !== 0) {
              var O = y.deletions;
              if (O !== null) {
                for (var P = 0; P < O.length; P++) {
                  var K = O[P];
                  for (Pe = K; Pe !== null; ) {
                    var fe = Pe;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nc(8, fe, y);
                    }
                    var he = fe.child;
                    if (he !== null) he.return = fe, Pe = he;
                    else for (; Pe !== null; ) {
                      fe = Pe;
                      var ce = fe.sibling, Oe = fe.return;
                      if (Vf(fe), fe === K) {
                        Pe = null;
                        break;
                      }
                      if (ce !== null) {
                        ce.return = Oe, Pe = ce;
                        break;
                      }
                      Pe = Oe;
                    }
                  }
                }
                var je = y.alternate;
                if (je !== null) {
                  var Ie = je.child;
                  if (Ie !== null) {
                    je.child = null;
                    do {
                      var An = Ie.sibling;
                      Ie.sibling = null, Ie = An;
                    } while (Ie !== null);
                  }
                }
                Pe = y;
              }
            }
            if ((y.subtreeFlags & 2064) !== 0 && x !== null) x.return = y, Pe = x;
            else e: for (; Pe !== null; ) {
              if (y = Pe, (y.flags & 2048) !== 0) switch (y.tag) {
                case 0:
                case 11:
                case 15:
                  nc(9, y, y.return);
              }
              var H = y.sibling;
              if (H !== null) {
                H.return = y.return, Pe = H;
                break e;
              }
              Pe = y.return;
            }
          }
          var U = n.current;
          for (Pe = U; Pe !== null; ) {
            x = Pe;
            var Y = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && Y !== null) Y.return = x, Pe = Y;
            else e: for (x = U; Pe !== null; ) {
              if (O = Pe, (O.flags & 2048) !== 0) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rc(9, O);
                }
              } catch (Fe) {
                yn(O, O.return, Fe);
              }
              if (O === x) {
                Pe = null;
                break e;
              }
              var de = O.sibling;
              if (de !== null) {
                de.return = O.return, Pe = de;
                break e;
              }
              Pe = O.return;
            }
          }
          if (Lt = h, Na(), ei && typeof ei.onPostCommitFiberRoot == "function") try {
            ei.onPostCommitFiberRoot(Lo, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        jt = s, hr.transition = r;
      }
    }
    return !1;
  }
  function um(n, r, s) {
    r = Kl(s, r), r = $v(n, r, 1), n = Qo(n, r, 1), r = $n(), n !== null && (Ja(n, 1, r), fi(n, r));
  }
  function yn(n, r, s) {
    if (n.tag === 3) um(n, n, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        um(r, n, s);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (el === null || !el.has(f))) {
          n = Kl(s, n), n = Tp(r, n, 1), r = Qo(r, n, 1), n = $n(), r !== null && (Ja(r, 1, n), fi(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Kg(n, r, s) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = $n(), n.pingedLanes |= n.suspendedLanes & s, Zn === n && (vr & s) === s && (On === 4 || On === 3 && (vr & 130023424) === vr && 500 > pt() - Ap ? ho(n, 0) : Uf |= s), fi(n, r);
  }
  function cm(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ei, Ei <<= 1, (Ei & 130023424) === 0 && (Ei = 4194304)));
    var s = $n();
    n = xi(n, r), n !== null && (Ja(n, r, s), fi(n, s));
  }
  function Qg(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), cm(n, s);
  }
  function fm(n, r) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (s = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), cm(n, s);
  }
  var dm;
  dm = function(n, r, s) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xn.current) Bn = !0;
    else {
      if ((n.lanes & s) === 0 && (r.flags & 128) === 0) return Bn = !1, Ju(n, r, s);
      Bn = (n.flags & 131072) !== 0;
    }
    else Bn = !1, mn && (r.flags & 1048576) !== 0 && Pv(r, lo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        $i(n, r), n = r.pendingProps;
        var h = ri(r, wn.current);
        Cn(r, s), h = Xo(null, r, f, n, h, s);
        var y = ha();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(f) ? (y = !0, nr(r)) : y = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, hp(r), h.updater = _f, r.stateNode = h, h._reactInternals = r, Ku(r, f, n, s), r = qu(null, r, f, !0, y, s)) : (r.tag = 0, mn && y && af(r), pr(null, r, h, s), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch ($i(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = qg(f), n = va(f, n), h) {
            case 0:
              r = Wv(null, r, f, n, s);
              break e;
            case 1:
              r = Gv(null, r, f, n, s);
              break e;
            case 11:
              r = si(null, r, f, n, s);
              break e;
            case 14:
              r = Ql(null, r, f, va(f.type, n), s);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : va(f, h), Wv(n, r, f, h, s);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : va(f, h), Gv(n, r, f, h, s);
      case 3:
        e: {
          if (Bs(r), n === null) throw Error(c(387));
          f = r.pendingProps, y = r.memoizedState, h = y.element, zv(n, r), Vu(r, f, null, s);
          var x = r.memoizedState;
          if (f = x.element, y.isDehydrated) if (y = { element: f, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
            h = Kl(Error(c(423)), r), r = Kv(n, r, f, s, h);
            break e;
          } else if (f !== h) {
            h = Kl(Error(c(424)), r), r = Kv(n, r, f, s, h);
            break e;
          } else for (ai = Oa(r.stateNode.containerInfo.firstChild), ii = r, mn = !0, Hi = null, s = be(r, null, f, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Ko(), f === h) {
              r = Yi(n, r, s);
              break e;
            }
            pr(n, r, f, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fv(r), n === null && lp(r), f = r.type, h = r.pendingProps, y = n !== null ? n.memoizedProps : null, x = h.children, Jc(f, h) ? x = null : y !== null && Jc(f, y) && (r.flags |= 32), wp(n, r), pr(n, r, x, s), r.child;
      case 6:
        return n === null && lp(r), null;
      case 13:
        return Lf(n, r, s);
      case 4:
        return mp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = kn(r, null, f, s) : pr(n, r, f, s), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : va(f, h), si(n, r, f, h, s);
      case 7:
        return pr(n, r, r.pendingProps, s), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, y = r.memoizedProps, x = h.value, Ge(Ti, f._currentValue), f._currentValue = x, y !== null) if (da(y.value, x)) {
            if (y.children === h.children && !Xn.current) {
              r = Yi(n, r, s);
              break e;
            }
          } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
            var O = y.dependencies;
            if (O !== null) {
              x = y.child;
              for (var P = O.firstContext; P !== null; ) {
                if (P.context === f) {
                  if (y.tag === 1) {
                    P = uo(-1, s & -s), P.tag = 2;
                    var K = y.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var fe = K.pending;
                      fe === null ? P.next = P : (P.next = fe.next, fe.next = P), K.pending = P;
                    }
                  }
                  y.lanes |= s, P = y.alternate, P !== null && (P.lanes |= s), fp(
                    y.return,
                    s,
                    r
                  ), O.lanes |= s;
                  break;
                }
                P = P.next;
              }
            } else if (y.tag === 10) x = y.type === r.type ? null : y.child;
            else if (y.tag === 18) {
              if (x = y.return, x === null) throw Error(c(341));
              x.lanes |= s, O = x.alternate, O !== null && (O.lanes |= s), fp(x, s, r), x = y.sibling;
            } else x = y.child;
            if (x !== null) x.return = y;
            else for (x = y; x !== null; ) {
              if (x === r) {
                x = null;
                break;
              }
              if (y = x.sibling, y !== null) {
                y.return = x.return, x = y;
                break;
              }
              x = x.return;
            }
            y = x;
          }
          pr(n, r, h.children, s), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, f = r.pendingProps.children, Cn(r, s), h = Ii(h), f = f(h), r.flags |= 1, pr(n, r, f, s), r.child;
      case 14:
        return f = r.type, h = va(f, r.pendingProps), h = va(f.type, h), Ql(n, r, f, h, s);
      case 15:
        return mt(n, r, r.type, r.pendingProps, s);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : va(f, h), $i(n, r), r.tag = 1, zn(f) ? (n = !0, nr(r)) : n = !1, Cn(r, s), Mf(r, f, h), Ku(r, f, h, s), qu(null, r, f, !0, n, s);
      case 19:
        return za(n, r, s);
      case 22:
        return Xu(n, r, s);
    }
    throw Error(c(156, r.tag));
  };
  function pm(n, r) {
    return fn(n, r);
  }
  function Xg(n, r, s, f) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Gi(n, r, s, f) {
    return new Xg(n, r, s, f);
  }
  function Up(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function qg(n) {
    if (typeof n == "function") return Up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === tt) return 11;
      if (n === ht) return 14;
    }
    return 2;
  }
  function nl(n, r) {
    var s = n.alternate;
    return s === null ? (s = Gi(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function fc(n, r, s, f, h, y) {
    var x = 2;
    if (f = n, typeof n == "function") Up(n) && (x = 1);
    else if (typeof n == "string") x = 5;
    else e: switch (n) {
      case ge:
        return vo(s.children, h, y, r);
      case Ee:
        x = 8, h |= 8;
        break;
      case Ue:
        return n = Gi(12, s, r, h | 2), n.elementType = Ue, n.lanes = y, n;
      case ze:
        return n = Gi(13, s, r, h), n.elementType = ze, n.lanes = y, n;
      case yt:
        return n = Gi(19, s, r, h), n.elementType = yt, n.lanes = y, n;
      case He:
        return rl(s, h, y, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Te:
            x = 10;
            break e;
          case rt:
            x = 9;
            break e;
          case tt:
            x = 11;
            break e;
          case ht:
            x = 14;
            break e;
          case vt:
            x = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = Gi(x, s, r, h), r.elementType = n, r.type = f, r.lanes = y, r;
  }
  function vo(n, r, s, f) {
    return n = Gi(7, n, f, r), n.lanes = s, n;
  }
  function rl(n, r, s, f) {
    return n = Gi(22, n, f, r), n.elementType = He, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function zp(n, r, s) {
    return n = Gi(6, n, null, r), n.lanes = s, n;
  }
  function Bf(n, r, s) {
    return r = Gi(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function hm(n, r, s, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Es(0), this.expirationTimes = Es(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Es(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Hf(n, r, s, f, h, y, x, O, P) {
    return n = new hm(n, r, s, O, P), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = Gi(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: f, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hp(y), n;
  }
  function Zg(n, r, s) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: we, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: s };
  }
  function jp(n) {
    if (!n) return kr;
    n = n._reactInternals;
    e: {
      if (dt(n) !== n || n.tag !== 1) throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (zn(s)) return Nu(n, s, r);
    }
    return r;
  }
  function vm(n, r, s, f, h, y, x, O, P) {
    return n = Hf(s, f, !0, n, h, y, x, O, P), n.context = jp(null), s = n.current, f = $n(), h = Ha(s), y = uo(f, h), y.callback = r ?? null, Qo(s, y, h), n.current.lanes = h, Ja(n, h, f), fi(n, f), n;
  }
  function If(n, r, s, f) {
    var h = r.current, y = $n(), x = Ha(h);
    return s = jp(s), r.context === null ? r.context = s : r.pendingContext = s, r = uo(y, x), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = Qo(h, r, x), n !== null && (Br(n, h, x, y), uf(n, h, x)), x;
  }
  function $f(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function Fp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function Yf(n, r) {
    Fp(n, r), (n = n.alternate) && Fp(n, r);
  }
  function mm() {
    return null;
  }
  var ts = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Bp(n) {
    this._internalRoot = n;
  }
  Wf.prototype.render = Bp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(c(409));
    If(n, r, null, null);
  }, Wf.prototype.unmount = Bp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Jl(function() {
        If(null, n, null, null);
      }), r[ao] = null;
    }
  };
  function Wf(n) {
    this._internalRoot = n;
  }
  Wf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = st();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < Qn.length && r !== 0 && r < Qn[s].priority; s++) ;
      Qn.splice(s, 0, n), s === 0 && Eu(n);
    }
  };
  function Hp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Gf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ym() {
  }
  function Jg(n, r, s, f, h) {
    if (h) {
      if (typeof f == "function") {
        var y = f;
        f = function() {
          var K = $f(x);
          y.call(K);
        };
      }
      var x = vm(r, f, n, 0, null, !1, !1, "", ym);
      return n._reactRootContainer = x, n[ao] = x.current, Os(n.nodeType === 8 ? n.parentNode : n), Jl(), x;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof f == "function") {
      var O = f;
      f = function() {
        var K = $f(P);
        O.call(K);
      };
    }
    var P = Hf(n, 0, !1, null, null, !1, !1, "", ym);
    return n._reactRootContainer = P, n[ao] = P.current, Os(n.nodeType === 8 ? n.parentNode : n), Jl(function() {
      If(r, P, s, f);
    }), P;
  }
  function dc(n, r, s, f, h) {
    var y = s._reactRootContainer;
    if (y) {
      var x = y;
      if (typeof h == "function") {
        var O = h;
        h = function() {
          var P = $f(x);
          O.call(P);
        };
      }
      If(r, x, n, h);
    } else x = Jg(s, r, n, h, f);
    return $f(x);
  }
  Vt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = sa(r.pendingLanes);
          s !== 0 && (eo(r, s | 1), fi(r, pt()), (Lt & 6) === 0 && (Ys = pt() + 500, Na()));
        }
        break;
      case 13:
        Jl(function() {
          var f = xi(n, 1);
          if (f !== null) {
            var h = $n();
            Br(f, n, 1, h);
          }
        }), Yf(n, 1);
    }
  }, gu = function(n) {
    if (n.tag === 13) {
      var r = xi(n, 134217728);
      if (r !== null) {
        var s = $n();
        Br(r, n, 134217728, s);
      }
      Yf(n, 134217728);
    }
  }, ba = function(n) {
    if (n.tag === 13) {
      var r = Ha(n), s = xi(n, r);
      if (s !== null) {
        var f = $n();
        Br(s, n, r, f);
      }
      Yf(n, r);
    }
  }, st = function() {
    return jt;
  }, Ts = function(n, r) {
    var s = jt;
    try {
      return jt = n, r();
    } finally {
      jt = s;
    }
  }, Xt = function(n, r, s) {
    switch (r) {
      case "input":
        if (Jr(n, s), r = s.name, s.type === "radio" && r != null) {
          for (s = n; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var f = s[r];
            if (f !== n && f.form === n.form) {
              var h = En(f);
              if (!h) throw Error(c(90));
              Ar(f), Jr(f, h);
            }
          }
        }
        break;
      case "textarea":
        na(n, s);
        break;
      case "select":
        r = s.value, r != null && bn(n, !!s.multiple, r, !1);
    }
  }, Cl = Np, Mo = Jl;
  var eS = { usingClientEntryPoint: !1, Events: [Ke, pa, En, Za, El, Np] }, pc = { findFiberByHostInstance: Pl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gm = { bundleType: pc.bundleType, version: pc.version, rendererPackageName: pc.rendererPackageName, rendererConfig: pc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: pc.findFiberByHostInstance || mm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!il.isDisabled && il.supportsFiber) try {
      Lo = il.inject(gm), ei = il;
    } catch {
    }
  }
  return Ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eS, Ji.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hp(r)) throw Error(c(200));
    return Zg(n, r, null, s);
  }, Ji.createRoot = function(n, r) {
    if (!Hp(n)) throw Error(c(299));
    var s = !1, f = "", h = ts;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Hf(n, 1, !1, null, null, s, !1, f, h), n[ao] = r.current, Os(n.nodeType === 8 ? n.parentNode : n), new Bp(r);
  }, Ji.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = Dn(r), n = n === null ? null : n.stateNode, n;
  }, Ji.flushSync = function(n) {
    return Jl(n);
  }, Ji.hydrate = function(n, r, s) {
    if (!Gf(r)) throw Error(c(200));
    return dc(null, n, r, !0, s);
  }, Ji.hydrateRoot = function(n, r, s) {
    if (!Hp(n)) throw Error(c(405));
    var f = s != null && s.hydratedSources || null, h = !1, y = "", x = ts;
    if (s != null && (s.unstable_strictMode === !0 && (h = !0), s.identifierPrefix !== void 0 && (y = s.identifierPrefix), s.onRecoverableError !== void 0 && (x = s.onRecoverableError)), r = vm(r, null, n, 1, s ?? null, h, !1, y, x), n[ao] = r.current, Os(n), f) for (n = 0; n < f.length; n++) s = f[n], h = s._getVersion, h = h(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, h] : r.mutableSourceEagerHydrationData.push(
      s,
      h
    );
    return new Wf(r);
  }, Ji.render = function(n, r, s) {
    if (!Gf(r)) throw Error(c(200));
    return dc(null, n, r, !1, s);
  }, Ji.unmountComponentAtNode = function(n) {
    if (!Gf(n)) throw Error(c(40));
    return n._reactRootContainer ? (Jl(function() {
      dc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ao] = null;
      });
    }), !0) : !1;
  }, Ji.unstable_batchedUpdates = Np, Ji.unstable_renderSubtreeIntoContainer = function(n, r, s, f) {
    if (!Gf(s)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return dc(n, r, s, !1, f);
  }, Ji.version = "18.3.1-next-f1338f8080-20240426", Ji;
}
var ea = {};
var tb;
function iN() {
  return tb || (tb = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = ev(), l = w1(), c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function g(e) {
      p = e;
    }
    function E(e) {
      if (!p) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        w("warn", e, i);
      }
    }
    function v(e) {
      if (!p) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        w("error", e, i);
      }
    }
    function w(e, t, i) {
      {
        var o = c.ReactDebugCurrentFrame, u = o.getStackAddendum();
        u !== "" && (t += "%s", i = i.concat([u]));
        var d = i.map(function(m) {
          return String(m);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var D = 0, b = 1, k = 2, M = 3, A = 4, F = 5, B = 6, X = 7, q = 8, ie = 9, ae = 10, ne = 11, oe = 12, pe = 13, we = 14, ge = 15, Ee = 16, Ue = 17, Te = 18, rt = 19, tt = 21, ze = 22, yt = 23, ht = 24, vt = 25, He = !0, le = !1, ke = !1, ye = !1, j = !1, te = !0, at = !0, nt = !0, wt = !0, Et = /* @__PURE__ */ new Set(), gt = {}, Ct = {};
    function Rt(e, t) {
      Kt(e, t), Kt(e + "Capture", t);
    }
    function Kt(e, t) {
      gt[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), gt[e] = t;
      {
        var i = e.toLowerCase();
        Ct[i] = e, e === "onDoubleClick" && (Ct.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        Et.add(t[o]);
    }
    var Pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ar = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function sr(e) {
      try {
        return Wn(e), !1;
      } catch {
        return !0;
      }
    }
    function Wn(e) {
      return "" + e;
    }
    function Gn(e, t) {
      if (sr(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Wn(e);
    }
    function Jr(e) {
      if (sr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Wn(e);
    }
    function Ca(e, t) {
      if (sr(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Wn(e);
    }
    function yi(e, t) {
      if (sr(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Wn(e);
    }
    function er(e) {
      if (sr(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Wn(e);
    }
    function bn(e) {
      if (sr(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), Wn(e);
    }
    var Kn = 0, Rr = 1, na = 2, Vn = 3, br = 4, gi = 5, ra = 6, Ta = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Se = Ta + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ye = new RegExp("^[" + Ta + "][" + Se + "]*$"), Tt = {}, Yt = {};
    function an(e) {
      return Ar.call(Yt, e) ? !0 : Ar.call(Tt, e) ? !1 : Ye.test(e) ? (Yt[e] = !0, !0) : (Tt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function gn(e, t, i) {
      return t !== null ? t.type === Kn : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, i, o) {
      if (i !== null && i.type === Kn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tr(e, t, i, o) {
      if (t === null || typeof t > "u" || cn(e, t, i, o))
        return !0;
      if (o)
        return !1;
      if (i !== null)
        switch (i.type) {
          case Vn:
            return !t;
          case br:
            return t === !1;
          case gi:
            return isNaN(t);
          case ra:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function on(e) {
      return Xt.hasOwnProperty(e) ? Xt[e] : null;
    }
    function Qt(e, t, i, o, u, d, m) {
      this.acceptsBooleans = t === na || t === Vn || t === br, this.attributeName = o, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = m;
    }
    var Xt = {}, Si = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Si.forEach(function(e) {
      Xt[e] = new Qt(
        e,
        Kn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      Xt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        na,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        na,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        Vn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        br,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        ra,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        gi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Dr = /[\-\:]([a-z])/g, Ni = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Dr, Ni);
      Xt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Dr, Ni);
      Xt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Dr, Ni);
      Xt[t] = new Qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Za = "xlinkHref";
    Xt[Za] = new Qt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Xt[e] = new Qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var El = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Cl = !1;
    function Mo(e) {
      !Cl && El.test(e) && (Cl = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Oo(e, t, i, o) {
      if (o.mustUseProperty) {
        var u = o.propertyName;
        return e[u];
      } else {
        Gn(i, t), o.sanitizeURL && Mo("" + i);
        var d = o.attributeName, m = null;
        if (o.type === br) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : tr(t, i, o, !1) ? S : S === "" + i ? i : S;
          }
        } else if (e.hasAttribute(d)) {
          if (tr(t, i, o, !1))
            return e.getAttribute(d);
          if (o.type === Vn)
            return i;
          m = e.getAttribute(d);
        }
        return tr(t, i, o, !1) ? m === null ? i : m : m === "" + i ? i : m;
      }
    }
    function Tl(e, t, i, o) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Gn(i, t), u === "" + i ? i : u;
      }
    }
    function Lr(e, t, i, o) {
      var u = on(t);
      if (!gn(t, u, o)) {
        if (tr(t, i, u, o) && (i = null), o || u === null) {
          if (an(t)) {
            var d = t;
            i === null ? e.removeAttribute(d) : (Gn(i, t), e.setAttribute(d, "" + i));
          }
          return;
        }
        var m = u.mustUseProperty;
        if (m) {
          var S = u.propertyName;
          if (i === null) {
            var C = u.type;
            e[S] = C === Vn ? !1 : "";
          } else
            e[S] = i;
          return;
        }
        var R = u.attributeName, _ = u.attributeNamespace;
        if (i === null)
          e.removeAttribute(R);
        else {
          var z = u.type, V;
          z === Vn || z === br && i === !0 ? V = "" : (Gn(i, R), V = "" + i, u.sanitizeURL && Mo(V.toString())), _ ? e.setAttributeNS(_, R, V) : e.setAttribute(R, V);
        }
      }
    }
    var Nr = /* @__PURE__ */ Symbol.for("react.element"), ur = /* @__PURE__ */ Symbol.for("react.portal"), xa = /* @__PURE__ */ Symbol.for("react.fragment"), ia = /* @__PURE__ */ Symbol.for("react.strict_mode"), wa = /* @__PURE__ */ Symbol.for("react.profiler"), Ra = /* @__PURE__ */ Symbol.for("react.provider"), N = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), Re = /* @__PURE__ */ Symbol.for("react.suspense"), Ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), dt = /* @__PURE__ */ Symbol.for("react.memo"), ut = /* @__PURE__ */ Symbol.for("react.lazy"), kt = /* @__PURE__ */ Symbol.for("react.scope"), bt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), ln = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), fn = /* @__PURE__ */ Symbol.for("react.cache"), cr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), aa = Symbol.iterator, oa = "@@iterator";
    function pt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = aa && e[aa] || e[oa];
      return typeof t == "function" ? t : null;
    }
    var St = Object.assign, la = 0, xl, wl, Ao, ms, Lo, ei, yu;
    function Pr() {
    }
    Pr.__reactDisabledLog = !0;
    function zc() {
      {
        if (la === 0) {
          xl = console.log, wl = console.info, Ao = console.warn, ms = console.error, Lo = console.group, ei = console.groupCollapsed, yu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        la++;
      }
    }
    function jc() {
      {
        if (la--, la === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: St({}, e, {
              value: xl
            }),
            info: St({}, e, {
              value: wl
            }),
            warn: St({}, e, {
              value: Ao
            }),
            error: St({}, e, {
              value: ms
            }),
            group: St({}, e, {
              value: Lo
            }),
            groupCollapsed: St({}, e, {
              value: ei
            }),
            groupEnd: St({}, e, {
              value: yu
            })
          });
        }
        la < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ys = c.ReactCurrentDispatcher, No;
    function Ei(e, t, i) {
      {
        if (No === void 0)
          try {
            throw Error();
          } catch (u) {
            var o = u.stack.trim().match(/\n( *(at )?)/);
            No = o && o[1] || "";
          }
        return `
` + No + e;
      }
    }
    var sa = !1, ua;
    {
      var gs = typeof WeakMap == "function" ? WeakMap : Map;
      ua = new gs();
    }
    function Rl(e, t) {
      if (!e || sa)
        return "";
      {
        var i = ua.get(e);
        if (i !== void 0)
          return i;
      }
      var o;
      sa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ys.current, ys.current = null, zc();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (Q) {
              o = Q;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (Q) {
              o = Q;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            o = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && o && typeof Q.stack == "string") {
          for (var S = Q.stack.split(`
`), C = o.stack.split(`
`), R = S.length - 1, _ = C.length - 1; R >= 1 && _ >= 0 && S[R] !== C[_]; )
            _--;
          for (; R >= 1 && _ >= 0; R--, _--)
            if (S[R] !== C[_]) {
              if (R !== 1 || _ !== 1)
                do
                  if (R--, _--, _ < 0 || S[R] !== C[_]) {
                    var z = `
` + S[R].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ua.set(e, z), z;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        sa = !1, ys.current = d, jc(), Error.prepareStackTrace = u;
      }
      var V = e ? e.displayName || e.name : "", W = V ? Ei(V) : "";
      return typeof e == "function" && ua.set(e, W), W;
    }
    function Po(e, t, i) {
      return Rl(e, !0);
    }
    function Ss(e, t, i) {
      return Rl(e, !1);
    }
    function Es(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ja(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Rl(e, Es(e));
      if (typeof e == "string")
        return Ei(e);
      switch (e) {
        case Re:
          return Ei("Suspense");
        case Ve:
          return Ei("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            return Ss(e.render);
          case dt:
            return Ja(e.type, t, i);
          case ut: {
            var o = e, u = o._payload, d = o._init;
            try {
              return Ja(d(u), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Ud(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return Ei(e.type);
        case Ee:
          return Ei("Lazy");
        case pe:
          return Ei("Suspense");
        case rt:
          return Ei("SuspenseList");
        case D:
        case k:
        case ge:
          return Ss(e.type);
        case ne:
          return Ss(e.type.render);
        case b:
          return Po(e.type);
        default:
          return "";
      }
    }
    function eo(e) {
      try {
        var t = "", i = e;
        do
          t += Ud(i), i = i.return;
        while (i);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function jt(e, t, i) {
      var o = e.displayName;
      if (o)
        return o;
      var u = t.displayName || t.name || "";
      return u !== "" ? i + "(" + u + ")" : i;
    }
    function Cs(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case xa:
          return "Fragment";
        case ur:
          return "Portal";
        case wa:
          return "Profiler";
        case ia:
          return "StrictMode";
        case Re:
          return "Suspense";
        case Ve:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return Cs(t) + ".Consumer";
          case Ra:
            var i = e;
            return Cs(i._context) + ".Provider";
          case se:
            return jt(e, e.render, "ForwardRef");
          case dt:
            var o = e.displayName || null;
            return o !== null ? o : Vt(e.type) || "Memo";
          case ut: {
            var u = e, d = u._payload, m = u._init;
            try {
              return Vt(m(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function gu(e, t, i) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? i + "(" + o + ")" : i);
    }
    function ba(e) {
      return e.displayName || "Context";
    }
    function st(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case ie:
          var o = i;
          return ba(o) + ".Consumer";
        case ae:
          var u = i;
          return ba(u._context) + ".Provider";
        case Te:
          return "DehydratedFragment";
        case ne:
          return gu(i, i.render, "ForwardRef");
        case X:
          return "Fragment";
        case F:
          return i;
        case A:
          return "Portal";
        case M:
          return "Root";
        case B:
          return "Text";
        case Ee:
          return Vt(i);
        case q:
          return i === ia ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case oe:
          return "Profiler";
        case tt:
          return "Scope";
        case pe:
          return "Suspense";
        case rt:
          return "SuspenseList";
        case vt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case b:
        case D:
        case Ue:
        case k:
        case we:
        case ge:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var Ts = c.ReactDebugCurrentFrame, fr = null, Da = !1;
    function Vr() {
      {
        if (fr === null)
          return null;
        var e = fr._debugOwner;
        if (e !== null && typeof e < "u")
          return st(e);
      }
      return null;
    }
    function ka() {
      return fr === null ? "" : eo(fr);
    }
    function dn() {
      Ts.getCurrentStack = null, fr = null, Da = !1;
    }
    function qt(e) {
      Ts.getCurrentStack = e === null ? null : ka, fr = e, Da = !1;
    }
    function Vo() {
      return fr;
    }
    function Qn(e) {
      Da = e;
    }
    function Ur(e) {
      return "" + e;
    }
    function Pi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return bn(e), e;
        default:
          return "";
      }
    }
    var bl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Su(e, t) {
      bl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Eu(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Uo(e) {
      return e._valueTracker;
    }
    function Dl(e) {
      e._valueTracker = null;
    }
    function zd(e) {
      var t = "";
      return e && (Eu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Vi(e) {
      var t = Eu(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      bn(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var u = i.get, d = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(S) {
            bn(S), o = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var m = {
          getValue: function() {
            return o;
          },
          setValue: function(S) {
            bn(S), o = "" + S;
          },
          stopTracking: function() {
            Dl(e), delete e[t];
          }
        };
        return m;
      }
    }
    function ca(e) {
      Uo(e) || (e._valueTracker = Vi(e));
    }
    function _a(e) {
      if (!e)
        return !1;
      var t = Uo(e);
      if (!t)
        return !0;
      var i = t.getValue(), o = zd(e);
      return o !== i ? (t.setValue(o), !0) : !1;
    }
    function Ui(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var xs = !1, ws = !1, zo = !1, kl = !1;
    function Rs(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function bs(e, t) {
      var i = e, o = t.checked, u = St({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? i._wrapperState.initialChecked
      });
      return u;
    }
    function fa(e, t) {
      Su("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ws && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), ws = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xs && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), xs = !0);
      var i = e, o = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Pi(t.value != null ? t.value : o),
        controlled: Rs(t)
      };
    }
    function T(e, t) {
      var i = e, o = t.checked;
      o != null && Lr(i, "checked", o, !1);
    }
    function L(e, t) {
      var i = e;
      {
        var o = Rs(t);
        !i._wrapperState.controlled && o && !kl && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), kl = !0), i._wrapperState.controlled && !o && !zo && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), zo = !0);
      }
      T(e, t);
      var u = Pi(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != u) && (i.value = Ur(u)) : i.value !== Ur(u) && (i.value = Ur(u));
      else if (d === "submit" || d === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Xe(i, t.type, u) : t.hasOwnProperty("defaultValue") && Xe(i, t.type, Pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, i) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var m = Ur(o._wrapperState.initialValue);
        i || m !== o.value && (o.value = m), o.defaultValue = m;
      }
      var S = o.name;
      S !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, S !== "" && (o.name = S);
    }
    function Z(e, t) {
      var i = e;
      L(i, t), me(i, t);
    }
    function me(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        Gn(i, "name");
        for (var u = o.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var m = u[d];
          if (!(m === e || m.form !== e.form)) {
            var S = Vm(m);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            _a(m), L(m, S);
          }
        }
      }
    }
    function Xe(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ui(e.ownerDocument) !== e) && (i == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(i) && (e.defaultValue = Ur(i)));
    }
    var xe = !1, Je = !1, _t = !1;
    function Ut(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? a.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Je || (Je = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (_t || (_t = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xe && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xe = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Ur(Pi(t.value)));
    }
    var Zt = Array.isArray;
    function xt(e) {
      return Zt(e);
    }
    var Jt;
    Jt = !1;
    function Sn() {
      var e = Vr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var jo = ["value", "defaultValue"];
    function Cu(e) {
      {
        Su("select", e);
        for (var t = 0; t < jo.length; t++) {
          var i = jo[t];
          if (e[i] != null) {
            var o = xt(e[i]);
            e.multiple && !o ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, Sn()) : !e.multiple && o && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, Sn());
          }
        }
      }
    }
    function to(e, t, i, o) {
      var u = e.options;
      if (t) {
        for (var d = i, m = {}, S = 0; S < d.length; S++)
          m["$" + d[S]] = !0;
        for (var C = 0; C < u.length; C++) {
          var R = m.hasOwnProperty("$" + u[C].value);
          u[C].selected !== R && (u[C].selected = R), R && o && (u[C].defaultSelected = !0);
        }
      } else {
        for (var _ = Ur(Pi(i)), z = null, V = 0; V < u.length; V++) {
          if (u[V].value === _) {
            u[V].selected = !0, o && (u[V].defaultSelected = !0);
            return;
          }
          z === null && !u[V].disabled && (z = u[V]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function Tu(e, t) {
      return St({}, t, {
        value: void 0
      });
    }
    function _l(e, t) {
      var i = e;
      Cu(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function jd(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var o = t.value;
      o != null ? to(i, !!t.multiple, o, !1) : t.defaultValue != null && to(i, !!t.multiple, t.defaultValue, !0);
    }
    function Fc(e, t) {
      var i = e, o = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? to(i, !!t.multiple, u, !1) : o !== !!t.multiple && (t.defaultValue != null ? to(i, !!t.multiple, t.defaultValue, !0) : to(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Fd(e, t) {
      var i = e, o = t.value;
      o != null && to(i, !!t.multiple, o, !1);
    }
    var av = !1;
    function Bd(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = St({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ur(i._wrapperState.initialValue)
      });
      return o;
    }
    function Hd(e, t) {
      var i = e;
      Su("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !av && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component"), av = !0);
      var o = t.value;
      if (o == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (xt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), o = d;
      }
      i._wrapperState = {
        initialValue: Pi(o)
      };
    }
    function ov(e, t) {
      var i = e, o = Pi(t.value), u = Pi(t.defaultValue);
      if (o != null) {
        var d = Ur(o);
        d !== i.value && (i.value = d), t.defaultValue == null && i.defaultValue !== d && (i.defaultValue = d);
      }
      u != null && (i.defaultValue = Ur(u));
    }
    function lv(e, t) {
      var i = e, o = i.textContent;
      o === i._wrapperState.initialValue && o !== "" && o !== null && (i.value = o);
    }
    function _g(e, t) {
      ov(e, t);
    }
    var no = "http://www.w3.org/1999/xhtml", Id = "http://www.w3.org/1998/Math/MathML", $d = "http://www.w3.org/2000/svg";
    function Yd(e) {
      switch (e) {
        case "svg":
          return $d;
        case "math":
          return Id;
        default:
          return no;
      }
    }
    function Wd(e, t) {
      return e == null || e === no ? Yd(t) : e === $d && t === "foreignObject" ? no : e;
    }
    var sv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, o, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, o, u);
        });
      } : e;
    }, Bc, uv = sv(function(e, t) {
      if (e.namespaceURI === $d && !("innerHTML" in e)) {
        Bc = Bc || document.createElement("div"), Bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ti = 1, ro = 3, Un = 8, io = 9, Gd = 11, Ds = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === ro) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, xu = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, wu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function cv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wu).forEach(function(e) {
      fv.forEach(function(t) {
        wu[cv(t, e)] = wu[e];
      });
    });
    function Hc(e, t, i) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !i && typeof t == "number" && t !== 0 && !(wu.hasOwnProperty(e) && wu[e]) ? t + "px" : (yi(t, e), ("" + t).trim());
    }
    var dv = /([A-Z])/g, pv = /^ms-/;
    function ks(e) {
      return e.replace(dv, "-$1").toLowerCase().replace(pv, "-ms-");
    }
    var hv = function() {
    };
    {
      var Mg = /^(?:webkit|moz|o)[A-Z]/, Og = /^-ms-/, vv = /-(.)/g, Kd = /;\s*$/, Ma = {}, Ml = {}, mv = !1, Ru = !1, Ag = function(e) {
        return e.replace(vv, function(t, i) {
          return i.toUpperCase();
        });
      }, yv = function(e) {
        Ma.hasOwnProperty(e) && Ma[e] || (Ma[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ag(e.replace(Og, "ms-"))
        ));
      }, Qd = function(e) {
        Ma.hasOwnProperty(e) && Ma[e] || (Ma[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Xd = function(e, t) {
        Ml.hasOwnProperty(t) && Ml[t] || (Ml[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kd, "")));
      }, gv = function(e, t) {
        mv || (mv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Sv = function(e, t) {
        Ru || (Ru = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      hv = function(e, t) {
        e.indexOf("-") > -1 ? yv(e) : Mg.test(e) ? Qd(e) : Kd.test(t) && Xd(e, t), typeof t == "number" && (isNaN(t) ? gv(e, t) : isFinite(t) || Sv(e, t));
      };
    }
    var Ev = hv;
    function Lg(e) {
      {
        var t = "", i = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var u = e[o];
            if (u != null) {
              var d = o.indexOf("--") === 0;
              t += i + (d ? o : ks(o)) + ":", t += Hc(o, u, d), i = ";";
            }
          }
        return t || null;
      }
    }
    function Cv(e, t) {
      var i = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var u = o.indexOf("--") === 0;
          u || Ev(o, t[o]);
          var d = Hc(o, t[o], u);
          o === "float" && (o = "cssFloat"), u ? i.setProperty(o, d) : i[o] = d;
        }
    }
    function Ng(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Tv(e) {
      var t = {};
      for (var i in e)
        for (var o = xu[i] || [i], u = 0; u < o.length; u++)
          t[o[u]] = i;
      return t;
    }
    function Pg(e, t) {
      {
        if (!t)
          return;
        var i = Tv(e), o = Tv(t), u = {};
        for (var d in i) {
          var m = i[d], S = o[d];
          if (S && m !== S) {
            var C = m + "," + S;
            if (u[C])
              continue;
            u[C] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ng(e[m]) ? "Removing" : "Updating", m, S);
          }
        }
      }
    }
    var da = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, bu = St({
      menuitem: !0
    }, da), xv = "__html";
    function Ic(e, t) {
      if (t) {
        if (bu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(xv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Fo(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var Du = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, $c = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, _s = {}, Vg = new RegExp("^(aria)-[" + Se + "]*$"), Ms = new RegExp("^(aria)[A-Z][" + Se + "]*$");
    function qd(e, t) {
      {
        if (Ar.call(_s, t) && _s[t])
          return !0;
        if (Ms.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), o = $c.hasOwnProperty(i) ? i : null;
          if (o == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _s[t] = !0, !0;
          if (t !== o)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), _s[t] = !0, !0;
        }
        if (Vg.test(t)) {
          var u = t.toLowerCase(), d = $c.hasOwnProperty(u) ? u : null;
          if (d == null)
            return _s[t] = !0, !1;
          if (t !== d)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), _s[t] = !0, !0;
        }
      }
      return !0;
    }
    function ku(e, t) {
      {
        var i = [];
        for (var o in t) {
          var u = qd(e, o);
          u || i.push(o);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : i.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Zd(e, t) {
      Fo(e, t) || ku(e, t);
    }
    var Jd = !1;
    function Yc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jd && (Jd = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ol = function() {
    };
    {
      var dr = {}, ep = /^on./, Wc = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + Se + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + Se + "]*$");
      Ol = function(e, t, i, o) {
        if (Ar.call(dr, t) && dr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, m = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = m.hasOwnProperty(u) ? m[u] : null;
          if (S != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, S), dr[t] = !0, !0;
          if (ep.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (ep.test(t))
          return Wc.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (wv.test(t) || Rv.test(t))
          return !0;
        if (u === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (u === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (u === "is" && i !== null && i !== void 0 && typeof i != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), dr[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var C = on(t), R = C !== null && C.type === Kn;
        if (Du.hasOwnProperty(u)) {
          var _ = Du[u];
          if (_ !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, _), dr[t] = !0, !0;
        } else if (!R && t !== u)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), dr[t] = !0, !0;
        return typeof i == "boolean" && cn(t, i, C, !1) ? (i ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), dr[t] = !0, !0) : R ? !0 : cn(t, i, C, !1) ? (dr[t] = !0, !1) : ((i === "false" || i === "true") && C !== null && C.type === Vn && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), dr[t] = !0), !0);
      };
    }
    var bv = function(e, t, i) {
      {
        var o = [];
        for (var u in t) {
          var d = Ol(e, u, t[u], i);
          d || o.push(u);
        }
        var m = o.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        o.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : o.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function Dv(e, t, i) {
      Fo(e, t) || bv(e, t, i);
    }
    var tp = 1, Gc = 2, zi = 4, np = tp | Gc | zi, Al = null;
    function Ug(e) {
      Al !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Al = e;
    }
    function zg() {
      Al === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Al = null;
    }
    function _u(e) {
      return e === Al;
    }
    function rp(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ro ? t.parentNode : t;
    }
    var Kc = null, Ll = null, Wt = null;
    function Qc(e) {
      var t = qs(e);
      if (t) {
        if (typeof Kc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var o = Vm(i);
          Kc(t.stateNode, t.type, o);
        }
      }
    }
    function Xc(e) {
      Kc = e;
    }
    function Os(e) {
      Ll ? Wt ? Wt.push(e) : Wt = [e] : Ll = e;
    }
    function kv() {
      return Ll !== null || Wt !== null;
    }
    function qc() {
      if (Ll) {
        var e = Ll, t = Wt;
        if (Ll = null, Wt = null, Qc(e), t)
          for (var i = 0; i < t.length; i++)
            Qc(t[i]);
      }
    }
    var As = function(e, t) {
      return e(t);
    }, Mu = function() {
    }, Bo = !1;
    function _v() {
      var e = kv();
      e && (Mu(), qc());
    }
    function Mv(e, t, i) {
      if (Bo)
        return e(t, i);
      Bo = !0;
      try {
        return As(e, t, i);
      } finally {
        Bo = !1, _v();
      }
    }
    function jg(e, t, i) {
      As = e, Mu = i;
    }
    function Ov(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Zc(e, t, i) {
      switch (e) {
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
          return !!(i.disabled && Ov(t));
        default:
          return !1;
      }
    }
    function Ho(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var o = Vm(i);
      if (o === null)
        return null;
      var u = o[t];
      if (Zc(t, e.type, o))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ou = !1;
    if (Pn)
      try {
        var Nl = {};
        Object.defineProperty(Nl, "passive", {
          get: function() {
            Ou = !0;
          }
        }), window.addEventListener("test", Nl, Nl), window.removeEventListener("test", Nl, Nl);
      } catch {
        Ou = !1;
      }
    function Jc(e, t, i, o, u, d, m, S, C) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, R);
      } catch (_) {
        this.onError(_);
      }
    }
    var ef = Jc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ip = document.createElement("react");
      ef = function(t, i, o, u, d, m, S, C, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), z = !1, V = !0, W = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          ip.removeEventListener(ee, qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function qe() {
          z = !0, J(), i.apply(o, De), V = !1;
        }
        var We, Pt = !1, Mt = !1;
        function I($) {
          if (We = $.error, Pt = !0, We === null && $.colno === 0 && $.lineno === 0 && (Mt = !0), $.defaultPrevented && We != null && typeof We == "object")
            try {
              We._suppressLogging = !0;
            } catch {
            }
        }
        var ee = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), ip.addEventListener(ee, qe, !1), _.initEvent(ee, !1, !1), ip.dispatchEvent(_), Q && Object.defineProperty(window, "event", Q), z && V && (Pt ? Mt && (We = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : We = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(We)), window.removeEventListener("error", I), !z)
          return J(), Jc.apply(this, arguments);
      };
    }
    var Av = ef, Ls = !1, tf = null, Ns = !1, Oa = null, Lv = {
      onError: function(e) {
        Ls = !0, tf = e;
      }
    };
    function Io(e, t, i, o, u, d, m, S, C) {
      Ls = !1, tf = null, Av.apply(Lv, arguments);
    }
    function Aa(e, t, i, o, u, d, m, S, C) {
      if (Io.apply(this, arguments), Ls) {
        var R = Lu();
        Ns || (Ns = !0, Oa = R);
      }
    }
    function Au() {
      if (Ns) {
        var e = Oa;
        throw Ns = !1, Oa = null, e;
      }
    }
    function ao() {
      return Ls;
    }
    function Lu() {
      if (Ls) {
        var e = tf;
        return Ls = !1, tf = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ps(e) {
      return e._reactInternals;
    }
    function Fg(e) {
      return e._reactInternals !== void 0;
    }
    function Pl(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), pa = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), At = (
      /*                       */
      4
    ), ji = (
      /*                */
      16
    ), Fi = (
      /*                 */
      32
    ), un = (
      /*                     */
      64
    ), Ge = (
      /*                   */
      128
    ), kr = (
      /*            */
      256
    ), wn = (
      /*                          */
      512
    ), Xn = (
      /*                     */
      1024
    ), ni = (
      /*                      */
      2048
    ), ri = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), Vs = (
      /*             */
      16384
    ), Nv = (
      /*               */
      32767
    ), Nu = (
      /*                   */
      32768
    ), nr = (
      /*                */
      65536
    ), nf = (
      /* */
      131072
    ), La = (
      /*                       */
      1048576
    ), Us = (
      /*                    */
      2097152
    ), oo = (
      /*                 */
      4194304
    ), rf = (
      /*                */
      8388608
    ), $o = (
      /*               */
      16777216
    ), Na = (
      /*              */
      33554432
    ), Yo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      At | Xn | 0
    ), Wo = En | At | ji | Fi | wn | ri | zn, Go = At | un | wn | zn, lo = ni | ji, jn = oo | rf | Us, Bi = c.ReactCurrentOwner;
    function Ci(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (En | ri)) !== Ke && (i = t.return), o = t.return;
        while (o);
      }
      return t.tag === M ? i : null;
    }
    function Pa(e) {
      if (e.tag === pe) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Va(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function Vl(e) {
      return Ci(e) === e;
    }
    function Pv(e) {
      {
        var t = Bi.current;
        if (t !== null && t.tag === b) {
          var i = t, o = i.stateNode;
          o._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(i) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ps(e);
      return u ? Ci(u) === u : !1;
    }
    function af(e) {
      if (Ci(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function of(e) {
      var t = e.alternate;
      if (!t) {
        var i = Ci(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var o = e, u = t; ; ) {
        var d = o.return;
        if (d === null)
          break;
        var m = d.alternate;
        if (m === null) {
          var S = d.return;
          if (S !== null) {
            o = u = S;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (var C = d.child; C; ) {
            if (C === o)
              return af(d), e;
            if (C === u)
              return af(d), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (o.return !== u.return)
          o = d, u = m;
        else {
          for (var R = !1, _ = d.child; _; ) {
            if (_ === o) {
              R = !0, o = d, u = m;
              break;
            }
            if (_ === u) {
              R = !0, u = d, o = m;
              break;
            }
            _ = _.sibling;
          }
          if (!R) {
            for (_ = m.child; _; ) {
              if (_ === o) {
                R = !0, o = m, u = d;
                break;
              }
              if (_ === u) {
                R = !0, u = m, o = d;
                break;
              }
              _ = _.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (o.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (o.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function ii(e) {
      var t = of(e);
      return t !== null ? ai(t) : null;
    }
    function ai(e) {
      if (e.tag === F || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = ai(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function mn(e) {
      var t = of(e);
      return t !== null ? Hi(t) : null;
    }
    function Hi(e) {
      if (e.tag === F || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var i = Hi(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var ap = l.unstable_scheduleCallback, Vv = l.unstable_cancelCallback, op = l.unstable_shouldYield, lp = l.unstable_requestPaint, qn = l.unstable_now, lf = l.unstable_getCurrentPriorityLevel, Pu = l.unstable_ImmediatePriority, Ko = l.unstable_UserBlockingPriority, so = l.unstable_NormalPriority, Bg = l.unstable_LowPriority, Ul = l.unstable_IdlePriority, sf = l.unstable_yieldValue, Uv = l.unstable_setDisableYieldValue, zl = null, kn = null, be = null, Ti = !1, oi = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function zs(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        at && (e = St({}, e, {
          getLaneLabelMap: jl,
          injectProfilingHooks: Ii
        })), zl = t.inject(e), kn = t;
      } catch (i) {
        v("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function sp(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(zl, e, t);
        } catch (i) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", i));
        }
    }
    function up(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & Ge) === Ge;
          if (nt) {
            var o;
            switch (t) {
              case zr:
                o = Pu;
                break;
              case za:
                o = Ko;
                break;
              case $i:
                o = so;
                break;
              case Yi:
                o = Ul;
                break;
              default:
                o = so;
                break;
            }
            kn.onCommitFiberRoot(zl, e, o, i);
          }
        } catch (u) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", u));
        }
    }
    function cp(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(zl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function fp(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(zl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Cn(e) {
      if (typeof sf == "function" && (Uv(e), g(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(zl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Ii(e) {
      be = e;
    }
    function jl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Hl; i++) {
          var o = Bv(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function dp(e) {
      be !== null && typeof be.markCommitStarted == "function" && be.markCommitStarted(e);
    }
    function pp() {
      be !== null && typeof be.markCommitStopped == "function" && be.markCommitStopped();
    }
    function xi(e) {
      be !== null && typeof be.markComponentRenderStarted == "function" && be.markComponentRenderStarted(e);
    }
    function wi() {
      be !== null && typeof be.markComponentRenderStopped == "function" && be.markComponentRenderStopped();
    }
    function hp(e) {
      be !== null && typeof be.markComponentPassiveEffectMountStarted == "function" && be.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      be !== null && typeof be.markComponentPassiveEffectMountStopped == "function" && be.markComponentPassiveEffectMountStopped();
    }
    function uo(e) {
      be !== null && typeof be.markComponentPassiveEffectUnmountStarted == "function" && be.markComponentPassiveEffectUnmountStarted(e);
    }
    function Qo() {
      be !== null && typeof be.markComponentPassiveEffectUnmountStopped == "function" && be.markComponentPassiveEffectUnmountStopped();
    }
    function uf(e) {
      be !== null && typeof be.markComponentLayoutEffectMountStarted == "function" && be.markComponentLayoutEffectMountStarted(e);
    }
    function jv() {
      be !== null && typeof be.markComponentLayoutEffectMountStopped == "function" && be.markComponentLayoutEffectMountStopped();
    }
    function Vu(e) {
      be !== null && typeof be.markComponentLayoutEffectUnmountStarted == "function" && be.markComponentLayoutEffectUnmountStarted(e);
    }
    function vp() {
      be !== null && typeof be.markComponentLayoutEffectUnmountStopped == "function" && be.markComponentLayoutEffectUnmountStopped();
    }
    function Uu(e, t, i) {
      be !== null && typeof be.markComponentErrored == "function" && be.markComponentErrored(e, t, i);
    }
    function Ua(e, t, i) {
      be !== null && typeof be.markComponentSuspended == "function" && be.markComponentSuspended(e, t, i);
    }
    function zu(e) {
      be !== null && typeof be.markLayoutEffectsStarted == "function" && be.markLayoutEffectsStarted(e);
    }
    function ju() {
      be !== null && typeof be.markLayoutEffectsStopped == "function" && be.markLayoutEffectsStopped();
    }
    function Fl(e) {
      be !== null && typeof be.markPassiveEffectsStarted == "function" && be.markPassiveEffectsStarted(e);
    }
    function mp() {
      be !== null && typeof be.markPassiveEffectsStopped == "function" && be.markPassiveEffectsStopped();
    }
    function Bl(e) {
      be !== null && typeof be.markRenderStarted == "function" && be.markRenderStarted(e);
    }
    function Fv() {
      be !== null && typeof be.markRenderYielded == "function" && be.markRenderYielded();
    }
    function cf() {
      be !== null && typeof be.markRenderStopped == "function" && be.markRenderStopped();
    }
    function Tn(e) {
      be !== null && typeof be.markRenderScheduled == "function" && be.markRenderScheduled(e);
    }
    function ff(e, t) {
      be !== null && typeof be.markForceUpdateScheduled == "function" && be.markForceUpdateScheduled(e, t);
    }
    function Fu(e, t) {
      be !== null && typeof be.markStateUpdateScheduled == "function" && be.markStateUpdateScheduled(e, t);
    }
    var Qe = (
      /*                         */
      0
    ), Dt = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), en = (
      /*               */
      8
    ), Bt = (
      /*              */
      16
    ), Fn = Math.clz32 ? Math.clz32 : Bu, rr = Math.log, df = Math.LN2;
    function Bu(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (rr(t) / df | 0) | 0;
    }
    var Hl = 31, ue = (
      /*                        */
      0
    ), zt = (
      /*                          */
      0
    ), it = (
      /*                        */
      1
    ), Xo = (
      /*    */
      2
    ), ha = (
      /*             */
      4
    ), _r = (
      /*            */
      8
    ), _n = (
      /*                     */
      16
    ), co = (
      /*                */
      32
    ), qo = (
      /*                       */
      4194240
    ), Il = (
      /*                        */
      64
    ), pf = (
      /*                        */
      128
    ), hf = (
      /*                        */
      256
    ), vf = (
      /*                        */
      512
    ), mf = (
      /*                        */
      1024
    ), yf = (
      /*                        */
      2048
    ), gf = (
      /*                        */
      4096
    ), Sf = (
      /*                        */
      8192
    ), Ef = (
      /*                        */
      16384
    ), $l = (
      /*                       */
      32768
    ), Cf = (
      /*                       */
      65536
    ), js = (
      /*                       */
      131072
    ), Fs = (
      /*                       */
      262144
    ), Tf = (
      /*                       */
      524288
    ), Hu = (
      /*                       */
      1048576
    ), xf = (
      /*                       */
      2097152
    ), Iu = (
      /*                            */
      130023424
    ), Yl = (
      /*                             */
      4194304
    ), wf = (
      /*                             */
      8388608
    ), $u = (
      /*                             */
      16777216
    ), Rf = (
      /*                             */
      33554432
    ), bf = (
      /*                             */
      67108864
    ), yp = Yl, Yu = (
      /*          */
      134217728
    ), gp = (
      /*                          */
      268435455
    ), Wu = (
      /*               */
      268435456
    ), Wl = (
      /*                        */
      536870912
    ), li = (
      /*                   */
      1073741824
    );
    function Bv(e) {
      {
        if (e & it)
          return "Sync";
        if (e & Xo)
          return "InputContinuousHydration";
        if (e & ha)
          return "InputContinuous";
        if (e & _r)
          return "DefaultHydration";
        if (e & _n)
          return "Default";
        if (e & co)
          return "TransitionHydration";
        if (e & qo)
          return "Transition";
        if (e & Iu)
          return "Retry";
        if (e & Yu)
          return "SelectiveHydration";
        if (e & Wu)
          return "IdleHydration";
        if (e & Wl)
          return "Idle";
        if (e & li)
          return "Offscreen";
      }
    }
    var rn = -1, Gl = Il, Df = Yl;
    function Gu(e) {
      switch (Zo(e)) {
        case it:
          return it;
        case Xo:
          return Xo;
        case ha:
          return ha;
        case _r:
          return _r;
        case _n:
          return _n;
        case co:
          return co;
        case Il:
        case pf:
        case hf:
        case vf:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Ef:
        case $l:
        case Cf:
        case js:
        case Fs:
        case Tf:
        case Hu:
        case xf:
          return e & qo;
        case Yl:
        case wf:
        case $u:
        case Rf:
        case bf:
          return e & Iu;
        case Yu:
          return Yu;
        case Wu:
          return Wu;
        case Wl:
          return Wl;
        case li:
          return li;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function kf(e, t) {
      var i = e.pendingLanes;
      if (i === ue)
        return ue;
      var o = ue, u = e.suspendedLanes, d = e.pingedLanes, m = i & gp;
      if (m !== ue) {
        var S = m & ~u;
        if (S !== ue)
          o = Gu(S);
        else {
          var C = m & d;
          C !== ue && (o = Gu(C));
        }
      } else {
        var R = i & ~u;
        R !== ue ? o = Gu(R) : d !== ue && (o = Gu(d));
      }
      if (o === ue)
        return ue;
      if (t !== ue && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ue) {
        var _ = Zo(o), z = Zo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === _n && (z & qo) !== ue
        )
          return t;
      }
      (o & ha) !== ue && (o |= i & _n);
      var V = e.entangledLanes;
      if (V !== ue)
        for (var W = e.entanglements, Q = o & V; Q > 0; ) {
          var J = Bn(Q), De = 1 << J;
          o |= W[J], Q &= ~De;
        }
      return o;
    }
    function va(e, t) {
      for (var i = e.eventTimes, o = rn; t > 0; ) {
        var u = Bn(t), d = 1 << u, m = i[u];
        m > o && (o = m), t &= ~d;
      }
      return o;
    }
    function Sp(e, t) {
      switch (e) {
        case it:
        case Xo:
        case ha:
          return t + 250;
        case _r:
        case _n:
        case co:
        case Il:
        case pf:
        case hf:
        case vf:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Ef:
        case $l:
        case Cf:
        case js:
        case Fs:
        case Tf:
        case Hu:
        case xf:
          return t + 5e3;
        case Yl:
        case wf:
        case $u:
        case Rf:
        case bf:
          return rn;
        case Yu:
        case Wu:
        case Wl:
        case li:
          return rn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function _f(e, t) {
      for (var i = e.pendingLanes, o = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, m = i; m > 0; ) {
        var S = Bn(m), C = 1 << S, R = d[S];
        R === rn ? ((C & o) === ue || (C & u) !== ue) && (d[S] = Sp(C, t)) : R <= t && (e.expiredLanes |= C), m &= ~C;
      }
    }
    function Hv(e) {
      return Gu(e.pendingLanes);
    }
    function Mf(e) {
      var t = e.pendingLanes & ~li;
      return t !== ue ? t : t & li ? li : ue;
    }
    function Iv(e) {
      return (e & it) !== ue;
    }
    function Ku(e) {
      return (e & gp) !== ue;
    }
    function Kl(e) {
      return (e & Iu) === e;
    }
    function Ep(e) {
      var t = it | ha | _n;
      return (e & t) === ue;
    }
    function Cp(e) {
      return (e & qo) === e;
    }
    function Of(e, t) {
      var i = Xo | ha | _r | _n;
      return (t & i) !== ue;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== ue;
    }
    function Tp(e) {
      return (e & qo) !== ue;
    }
    function xp() {
      var e = Gl;
      return Gl <<= 1, (Gl & qo) === ue && (Gl = Il), e;
    }
    function Yv() {
      var e = Df;
      return Df <<= 1, (Df & Iu) === ue && (Df = Yl), e;
    }
    function Zo(e) {
      return e & -e;
    }
    function Qu(e) {
      return Zo(e);
    }
    function Bn(e) {
      return 31 - Fn(e);
    }
    function pr(e) {
      return Bn(e);
    }
    function si(e, t) {
      return (e & t) !== ue;
    }
    function Ql(e, t) {
      return (e & t) === t;
    }
    function mt(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      return e & ~t;
    }
    function wp(e, t) {
      return e & t;
    }
    function Wv(e) {
      return e;
    }
    function Gv(e, t) {
      return e !== zt && e < t ? e : t;
    }
    function qu(e) {
      for (var t = [], i = 0; i < Hl; i++)
        t.push(e);
      return t;
    }
    function Bs(e, t, i) {
      e.pendingLanes |= t, t !== Wl && (e.suspendedLanes = ue, e.pingedLanes = ue);
      var o = e.eventTimes, u = pr(t);
      o[u] = i;
    }
    function Kv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, o = t; o > 0; ) {
        var u = Bn(o), d = 1 << u;
        i[u] = rn, o &= ~d;
      }
    }
    function Af(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Rp(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ue, e.pingedLanes = ue, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, u = e.eventTimes, d = e.expirationTimes, m = i; m > 0; ) {
        var S = Bn(m), C = 1 << S;
        o[S] = ue, u[S] = rn, d[S] = rn, m &= ~C;
      }
    }
    function Lf(e, t) {
      for (var i = e.entangledLanes |= t, o = e.entanglements, u = i; u; ) {
        var d = Bn(u), m = 1 << d;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[d] & t && (o[d] |= t), u &= ~m;
      }
    }
    function bp(e, t) {
      var i = Zo(t), o;
      switch (i) {
        case ha:
          o = Xo;
          break;
        case _n:
          o = _r;
          break;
        case Il:
        case pf:
        case hf:
        case vf:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Ef:
        case $l:
        case Cf:
        case js:
        case Fs:
        case Tf:
        case Hu:
        case xf:
        case Yl:
        case wf:
        case $u:
        case Rf:
        case bf:
          o = co;
          break;
        case Wl:
          o = Wu;
          break;
        default:
          o = zt;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== zt ? zt : o;
    }
    function Zu(e, t, i) {
      if (oi)
        for (var o = e.pendingUpdatersLaneMap; i > 0; ) {
          var u = pr(i), d = 1 << u, m = o[u];
          m.add(t), i &= ~d;
        }
    }
    function Qv(e, t) {
      if (oi)
        for (var i = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var u = pr(t), d = 1 << u, m = i[u];
          m.size > 0 && (m.forEach(function(S) {
            var C = S.alternate;
            (C === null || !o.has(C)) && o.add(S);
          }), m.clear()), t &= ~d;
        }
    }
    function Dp(e, t) {
      return null;
    }
    var zr = it, za = ha, $i = _n, Yi = Wl, Ju = zt;
    function Wi() {
      return Ju;
    }
    function Hn(e) {
      Ju = e;
    }
    function Xv(e, t) {
      var i = Ju;
      try {
        return Ju = e, t();
      } finally {
        Ju = i;
      }
    }
    function qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ec(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function Zv(e) {
      var t = Zo(e);
      return ir(zr, t) ? ir(za, t) ? Ku(t) ? $i : Yi : za : zr;
    }
    function Nf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var tc;
    function Mr(e) {
      tc = e;
    }
    function Hg(e) {
      tc(e);
    }
    var Pe;
    function Hs(e) {
      Pe = e;
    }
    var Pf;
    function Jv(e) {
      Pf = e;
    }
    var em;
    function nc(e) {
      em = e;
    }
    var rc;
    function kp(e) {
      rc = e;
    }
    var Vf = !1, ic = [], fo = null, ja = null, Fa = null, Mn = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), Fr = [], tm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function nm(e) {
      return tm.indexOf(e) > -1;
    }
    function ma(e, t, i, o, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [o]
      };
    }
    function _p(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fo = null;
          break;
        case "dragenter":
        case "dragleave":
          ja = null;
          break;
        case "mouseover":
        case "mouseout":
          Fa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          Mn.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          jr.delete(o);
          break;
        }
      }
    }
    function ui(e, t, i, o, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var m = ma(t, i, o, u, d);
        if (t !== null) {
          var S = qs(t);
          S !== null && Pe(S);
        }
        return m;
      }
      e.eventSystemFlags |= o;
      var C = e.targetContainers;
      return u !== null && C.indexOf(u) === -1 && C.push(u), e;
    }
    function Ig(e, t, i, o, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return fo = ui(fo, e, t, i, o, d), !0;
        }
        case "dragenter": {
          var m = u;
          return ja = ui(ja, e, t, i, o, m), !0;
        }
        case "mouseover": {
          var S = u;
          return Fa = ui(Fa, e, t, i, o, S), !0;
        }
        case "pointerover": {
          var C = u, R = C.pointerId;
          return Mn.set(R, ui(Mn.get(R) || null, e, t, i, o, C)), !0;
        }
        case "gotpointercapture": {
          var _ = u, z = _.pointerId;
          return jr.set(z, ui(jr.get(z) || null, e, t, i, o, _)), !0;
        }
      }
      return !1;
    }
    function Mp(e) {
      var t = mc(e.target);
      if (t !== null) {
        var i = Ci(t);
        if (i !== null) {
          var o = i.tag;
          if (o === pe) {
            var u = Pa(i);
            if (u !== null) {
              e.blockedOn = u, rc(e.priority, function() {
                Pf(i);
              });
              return;
            }
          } else if (o === M) {
            var d = i.stateNode;
            if (Nf(d)) {
              e.blockedOn = Va(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rm(e) {
      for (var t = em(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < Fr.length && ir(t, Fr[o].priority); o++)
        ;
      Fr.splice(o, 0, i), o === 0 && Mp(i);
    }
    function ac(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], o = $s(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (o === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          Ug(d), u.target.dispatchEvent(d), zg();
        } else {
          var m = qs(o);
          return m !== null && Pe(m), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Op(e, t, i) {
      ac(e) && i.delete(t);
    }
    function $g() {
      Vf = !1, fo !== null && ac(fo) && (fo = null), ja !== null && ac(ja) && (ja = null), Fa !== null && ac(Fa) && (Fa = null), Mn.forEach(Op), jr.forEach(Op);
    }
    function Jo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vf || (Vf = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, $g)));
    }
    function Xl(e) {
      if (ic.length > 0) {
        Jo(ic[0], e);
        for (var t = 1; t < ic.length; t++) {
          var i = ic[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      fo !== null && Jo(fo, e), ja !== null && Jo(ja, e), Fa !== null && Jo(Fa, e);
      var o = function(S) {
        return Jo(S, e);
      };
      Mn.forEach(o), jr.forEach(o);
      for (var u = 0; u < Fr.length; u++) {
        var d = Fr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; Fr.length > 0; ) {
        var m = Fr[0];
        if (m.blockedOn !== null)
          break;
        Mp(m), m.blockedOn === null && Fr.shift();
      }
    }
    var hr = c.ReactCurrentBatchConfig, Lt = !0;
    function Zn(e) {
      Lt = !!e;
    }
    function In() {
      return Lt;
    }
    function vr(e, t, i) {
      var o = Uf(t), u;
      switch (o) {
        case zr:
          u = Ri;
          break;
        case za:
          u = Is;
          break;
        case $i:
        default:
          u = On;
          break;
      }
      return u.bind(null, t, i, e);
    }
    function Ri(e, t, i, o) {
      var u = Wi(), d = hr.transition;
      hr.transition = null;
      try {
        Hn(zr), On(e, t, i, o);
      } finally {
        Hn(u), hr.transition = d;
      }
    }
    function Is(e, t, i, o) {
      var u = Wi(), d = hr.transition;
      hr.transition = null;
      try {
        Hn(za), On(e, t, i, o);
      } finally {
        Hn(u), hr.transition = d;
      }
    }
    function On(e, t, i, o) {
      Lt && oc(e, t, i, o);
    }
    function oc(e, t, i, o) {
      var u = $s(e, t, i, o);
      if (u === null) {
        lS(e, t, o, Ba, i), _p(e, o);
        return;
      }
      if (Ig(u, e, t, i, o)) {
        o.stopPropagation();
        return;
      }
      if (_p(e, o), t & zi && nm(e)) {
        for (; u !== null; ) {
          var d = qs(u);
          d !== null && Hg(d);
          var m = $s(e, t, i, o);
          if (m === null && lS(e, t, o, Ba, i), m === u)
            break;
          u = m;
        }
        u !== null && o.stopPropagation();
        return;
      }
      lS(e, t, o, null, i);
    }
    var Ba = null;
    function $s(e, t, i, o) {
      Ba = null;
      var u = rp(o), d = mc(u);
      if (d !== null) {
        var m = Ci(d);
        if (m === null)
          d = null;
        else {
          var S = m.tag;
          if (S === pe) {
            var C = Pa(m);
            if (C !== null)
              return C;
            d = null;
          } else if (S === M) {
            var R = m.stateNode;
            if (Nf(R))
              return Va(m);
            d = null;
          } else m !== d && (d = null);
        }
      }
      return Ba = d, null;
    }
    function Uf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return zr;
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
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return za;
        case "message": {
          var t = lf();
          switch (t) {
            case Pu:
              return zr;
            case Ko:
              return za;
            case so:
            case Bg:
              return $i;
            case Ul:
              return Yi;
            default:
              return $i;
          }
        }
        default:
          return $i;
      }
    }
    function lc(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ci(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function Ap(e, t, i, o) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: o
      }), i;
    }
    function Ys(e, t, i, o) {
      return e.addEventListener(t, i, {
        passive: o
      }), i;
    }
    var bi = null, Ws = null, ql = null;
    function el(e) {
      return bi = e, Ws = sc(), !0;
    }
    function zf() {
      bi = null, Ws = null, ql = null;
    }
    function po() {
      if (ql)
        return ql;
      var e, t = Ws, i = t.length, o, u = sc(), d = u.length;
      for (e = 0; e < i && t[e] === u[e]; e++)
        ;
      var m = i - e;
      for (o = 1; o <= m && t[i - o] === u[d - o]; o++)
        ;
      var S = o > 1 ? 1 - o : void 0;
      return ql = u.slice(e, S), ql;
    }
    function sc() {
      return "value" in bi ? bi.value : bi.textContent;
    }
    function tl(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Gs() {
      return !0;
    }
    function uc() {
      return !1;
    }
    function Or(e) {
      function t(i, o, u, d, m) {
        this._reactName = i, this._targetInst = u, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var C = e[S];
            C ? this[S] = C(d) : this[S] = d[S];
          }
        var R = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return R ? this.isDefaultPrevented = Gs : this.isDefaultPrevented = uc, this.isPropagationStopped = uc, this;
      }
      return St(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Gs);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Gs);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Gs
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ha = Or($n), Br = St({}, $n, {
      view: 0,
      detail: 0
    }), fi = Or(Br), jf, cc, Zl;
    function Yg(e) {
      e !== Zl && (Zl && e.type === "mousemove" ? (jf = e.screenX - Zl.screenX, cc = e.screenY - Zl.screenY) : (jf = 0, cc = 0), Zl = e);
    }
    var ya = St({}, Br, {
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
      getModifierState: yn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Yg(e), jf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : cc;
      }
    }), Lp = Or(ya), Np = St({}, ya, {
      dataTransfer: 0
    }), Jl = Or(Np), Pp = St({}, Br, {
      relatedTarget: 0
    }), ho = Or(Pp), im = St({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), am = Or(im), Vp = St({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ff = Or(Vp), Wg = St({}, $n, {
      data: 0
    }), om = Or(Wg), lm = om, sm = {
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
    }, es = {
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
    };
    function Gg(e) {
      if (e.key) {
        var t = sm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = tl(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? es[e.keyCode] || "Unidentified" : "";
    }
    var Ks = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function um(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var o = Ks[e];
      return o ? !!i[o] : !1;
    }
    function yn(e) {
      return um;
    }
    var Kg = St({}, Br, {
      key: Gg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? tl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cm = Or(Kg), Qg = St({}, ya, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), fm = Or(Qg), dm = St({}, Br, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yn
    }), pm = Or(dm), Xg = St({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gi = Or(Xg), Up = St({}, ya, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), qg = Or(Up), nl = [9, 13, 27, 32], fc = 229, vo = Pn && "CompositionEvent" in window, rl = null;
    Pn && "documentMode" in document && (rl = document.documentMode);
    var zp = Pn && "TextEvent" in window && !rl, Bf = Pn && (!vo || rl && rl > 8 && rl <= 11), hm = 32, Hf = String.fromCharCode(hm);
    function Zg() {
      Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Rt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var jp = !1;
    function vm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function If(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function $f(e, t) {
      return e === "keydown" && t.keyCode === fc;
    }
    function Fp(e, t) {
      switch (e) {
        case "keyup":
          return nl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== fc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Yf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mm(e) {
      return e.locale === "ko";
    }
    var ts = !1;
    function Bp(e, t, i, o, u) {
      var d, m;
      if (vo ? d = If(t) : ts ? Fp(t, o) && (d = "onCompositionEnd") : $f(t, o) && (d = "onCompositionStart"), !d)
        return null;
      Bf && !mm(o) && (!ts && d === "onCompositionStart" ? ts = el(u) : d === "onCompositionEnd" && ts && (m = po()));
      var S = xm(i, d);
      if (S.length > 0) {
        var C = new om(d, t, null, o, u);
        if (e.push({
          event: C,
          listeners: S
        }), m)
          C.data = m;
        else {
          var R = Yf(o);
          R !== null && (C.data = R);
        }
      }
    }
    function Wf(e, t) {
      switch (e) {
        case "compositionend":
          return Yf(t);
        case "keypress":
          var i = t.which;
          return i !== hm ? null : (jp = !0, Hf);
        case "textInput":
          var o = t.data;
          return o === Hf && jp ? null : o;
        default:
          return null;
      }
    }
    function Hp(e, t) {
      if (ts) {
        if (e === "compositionend" || !vo && Fp(e, t)) {
          var i = po();
          return zf(), ts = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Bf && !mm(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Gf(e, t, i, o, u) {
      var d;
      if (zp ? d = Wf(t, o) : d = Hp(t, o), !d)
        return null;
      var m = xm(i, "onBeforeInput");
      if (m.length > 0) {
        var S = new lm("onBeforeInput", "beforeinput", null, o, u);
        e.push({
          event: S,
          listeners: m
        }), S.data = d;
      }
    }
    function ym(e, t, i, o, u, d, m) {
      Bp(e, t, i, o, u), Gf(e, t, i, o, u);
    }
    var Jg = {
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
      week: !0
    };
    function dc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Jg[e.type] : t === "textarea";
    }
    function eS(e) {
      if (!Pn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), i = typeof o[t] == "function";
      }
      return i;
    }
    function pc() {
      Rt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function gm(e, t, i, o) {
      Os(o);
      var u = xm(t, "onChange");
      if (u.length > 0) {
        var d = new Ha("onChange", "change", null, i, o);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var il = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function s(e) {
      var t = [];
      gm(t, n, e, rp(e)), Mv(f, t);
    }
    function f(e) {
      TT(e, 0);
    }
    function h(e) {
      var t = Jf(e);
      if (_a(t))
        return e;
    }
    function y(e, t) {
      if (e === "change")
        return t;
    }
    var x = !1;
    Pn && (x = eS("input") && (!document.documentMode || document.documentMode > 9));
    function O(e, t) {
      il = e, n = t, il.attachEvent("onpropertychange", K);
    }
    function P() {
      il && (il.detachEvent("onpropertychange", K), il = null, n = null);
    }
    function K(e) {
      e.propertyName === "value" && h(n) && s(e);
    }
    function fe(e, t, i) {
      e === "focusin" ? (P(), O(t, i)) : e === "focusout" && P();
    }
    function he(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(n);
    }
    function ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Oe(e, t) {
      if (e === "click")
        return h(t);
    }
    function je(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function Ie(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Xe(e, "number", e.value);
    }
    function An(e, t, i, o, u, d, m) {
      var S = i ? Jf(i) : window, C, R;
      if (r(S) ? C = y : dc(S) ? x ? C = je : (C = he, R = fe) : ce(S) && (C = Oe), C) {
        var _ = C(t, i);
        if (_) {
          gm(e, _, o, u);
          return;
        }
      }
      R && R(t, S, i), t === "focusout" && Ie(S);
    }
    function H() {
      Kt("onMouseEnter", ["mouseout", "mouseover"]), Kt("onMouseLeave", ["mouseout", "mouseover"]), Kt("onPointerEnter", ["pointerout", "pointerover"]), Kt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function U(e, t, i, o, u, d, m) {
      var S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (S && !_u(o)) {
        var R = o.relatedTarget || o.fromElement;
        if (R && (mc(R) || nh(R)))
          return;
      }
      if (!(!C && !S)) {
        var _;
        if (u.window === u)
          _ = u;
        else {
          var z = u.ownerDocument;
          z ? _ = z.defaultView || z.parentWindow : _ = window;
        }
        var V, W;
        if (C) {
          var Q = o.relatedTarget || o.toElement;
          if (V = i, W = Q ? mc(Q) : null, W !== null) {
            var J = Ci(W);
            (W !== J || W.tag !== F && W.tag !== B) && (W = null);
          }
        } else
          V = null, W = i;
        if (V !== W) {
          var De = Lp, qe = "onMouseLeave", We = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = fm, qe = "onPointerLeave", We = "onPointerEnter", Pt = "pointer");
          var Mt = V == null ? _ : Jf(V), I = W == null ? _ : Jf(W), ee = new De(qe, Pt + "leave", V, o, u);
          ee.target = Mt, ee.relatedTarget = I;
          var $ = null, ve = mc(u);
          if (ve === i) {
            var Ne = new De(We, Pt + "enter", W, o, u);
            Ne.target = I, Ne.relatedTarget = Mt, $ = Ne;
          }
          Dk(e, ee, $, V, W);
        }
      }
    }
    function Y(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var de = typeof Object.is == "function" ? Object.is : Y;
    function Fe(e, t) {
      if (de(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), o = Object.keys(t);
      if (i.length !== o.length)
        return !1;
      for (var u = 0; u < i.length; u++) {
        var d = i[u];
        if (!Ar.call(t, d) || !de(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function Ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function et(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function lt(e, t) {
      for (var i = Ze(e), o = 0, u = 0; i; ) {
        if (i.nodeType === ro) {
          if (u = o + i.textContent.length, o <= t && u >= t)
            return {
              node: i,
              offset: t - o
            };
          o = u;
        }
        i = Ze(et(i));
      }
    }
    function ar(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, o = i.getSelection && i.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var u = o.anchorNode, d = o.anchorOffset, m = o.focusNode, S = o.focusOffset;
      try {
        u.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return Ht(e, u, d, m, S);
    }
    function Ht(e, t, i, o, u) {
      var d = 0, m = -1, S = -1, C = 0, R = 0, _ = e, z = null;
      e: for (; ; ) {
        for (var V = null; _ === t && (i === 0 || _.nodeType === ro) && (m = d + i), _ === o && (u === 0 || _.nodeType === ro) && (S = d + u), _.nodeType === ro && (d += _.nodeValue.length), (V = _.firstChild) !== null; )
          z = _, _ = V;
        for (; ; ) {
          if (_ === e)
            break e;
          if (z === t && ++C === i && (m = d), z === o && ++R === u && (S = d), (V = _.nextSibling) !== null)
            break;
          _ = z, z = _.parentNode;
        }
        _ = V;
      }
      return m === -1 || S === -1 ? null : {
        start: m,
        end: S
      };
    }
    function al(e, t) {
      var i = e.ownerDocument || document, o = i && i.defaultView || window;
      if (o.getSelection) {
        var u = o.getSelection(), d = e.textContent.length, m = Math.min(t.start, d), S = t.end === void 0 ? m : Math.min(t.end, d);
        if (!u.extend && m > S) {
          var C = S;
          S = m, m = C;
        }
        var R = lt(e, m), _ = lt(e, S);
        if (R && _) {
          if (u.rangeCount === 1 && u.anchorNode === R.node && u.anchorOffset === R.offset && u.focusNode === _.node && u.focusOffset === _.offset)
            return;
          var z = i.createRange();
          z.setStart(R.node, R.offset), u.removeAllRanges(), m > S ? (u.addRange(z), u.extend(_.node, _.offset)) : (z.setEnd(_.node, _.offset), u.addRange(z));
        }
      }
    }
    function Sm(e) {
      return e && e.nodeType === ro;
    }
    function fT(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Sm(e) ? !1 : Sm(t) ? fT(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function uk(e) {
      return e && e.ownerDocument && fT(e.ownerDocument.documentElement, e);
    }
    function ck(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function dT() {
      for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
        if (ck(t))
          e = t.contentWindow;
        else
          return t;
        t = Ui(e.document);
      }
      return t;
    }
    function tS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fk() {
      var e = dT();
      return {
        focusedElem: e,
        selectionRange: tS(e) ? pk(e) : null
      };
    }
    function dk(e) {
      var t = dT(), i = e.focusedElem, o = e.selectionRange;
      if (t !== i && uk(i)) {
        o !== null && tS(i) && hk(i, o);
        for (var u = [], d = i; d = d.parentNode; )
          d.nodeType === ti && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var m = 0; m < u.length; m++) {
          var S = u[m];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function pk(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ar(e), t || {
        start: 0,
        end: 0
      };
    }
    function hk(e, t) {
      var i = t.start, o = t.end;
      o === void 0 && (o = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(o, e.value.length)) : al(e, t);
    }
    var vk = Pn && "documentMode" in document && document.documentMode <= 11;
    function mk() {
      Rt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Kf = null, nS = null, Ip = null, rS = !1;
    function yk(e) {
      if ("selectionStart" in e && tS(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function gk(e) {
      return e.window === e ? e.document : e.nodeType === io ? e : e.ownerDocument;
    }
    function pT(e, t, i) {
      var o = gk(i);
      if (!(rS || Kf == null || Kf !== Ui(o))) {
        var u = yk(Kf);
        if (!Ip || !Fe(Ip, u)) {
          Ip = u;
          var d = xm(nS, "onSelect");
          if (d.length > 0) {
            var m = new Ha("onSelect", "select", null, t, i);
            e.push({
              event: m,
              listeners: d
            }), m.target = Kf;
          }
        }
      }
    }
    function Sk(e, t, i, o, u, d, m) {
      var S = i ? Jf(i) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (dc(S) || S.contentEditable === "true") && (Kf = S, nS = i, Ip = null);
          break;
        case "focusout":
          Kf = null, nS = null, Ip = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          rS = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          rS = !1, pT(e, o, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (vk)
            break;
        // falls through
        case "keydown":
        case "keyup":
          pT(e, o, u);
      }
    }
    function Em(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var Qf = {
      animationend: Em("Animation", "AnimationEnd"),
      animationiteration: Em("Animation", "AnimationIteration"),
      animationstart: Em("Animation", "AnimationStart"),
      transitionend: Em("Transition", "TransitionEnd")
    }, iS = {}, hT = {};
    Pn && (hT = document.createElement("div").style, "AnimationEvent" in window || (delete Qf.animationend.animation, delete Qf.animationiteration.animation, delete Qf.animationstart.animation), "TransitionEvent" in window || delete Qf.transitionend.transition);
    function Cm(e) {
      if (iS[e])
        return iS[e];
      if (!Qf[e])
        return e;
      var t = Qf[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in hT)
          return iS[e] = t[i];
      return e;
    }
    var vT = Cm("animationend"), mT = Cm("animationiteration"), yT = Cm("animationstart"), gT = Cm("transitionend"), ST = /* @__PURE__ */ new Map(), ET = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Qs(e, t) {
      ST.set(e, t), Rt(t, [e]);
    }
    function Ek() {
      for (var e = 0; e < ET.length; e++) {
        var t = ET[e], i = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        Qs(i, "on" + o);
      }
      Qs(vT, "onAnimationEnd"), Qs(mT, "onAnimationIteration"), Qs(yT, "onAnimationStart"), Qs("dblclick", "onDoubleClick"), Qs("focusin", "onFocus"), Qs("focusout", "onBlur"), Qs(gT, "onTransitionEnd");
    }
    function Ck(e, t, i, o, u, d, m) {
      var S = ST.get(t);
      if (S !== void 0) {
        var C = Ha, R = t;
        switch (t) {
          case "keypress":
            if (tl(o) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            C = cm;
            break;
          case "focusin":
            R = "focus", C = ho;
            break;
          case "focusout":
            R = "blur", C = ho;
            break;
          case "beforeblur":
          case "afterblur":
            C = ho;
            break;
          case "click":
            if (o.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Lp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Jl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = pm;
            break;
          case vT:
          case mT:
          case yT:
            C = am;
            break;
          case gT:
            C = Gi;
            break;
          case "scroll":
            C = fi;
            break;
          case "wheel":
            C = qg;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = fm;
            break;
        }
        var _ = (d & zi) !== 0;
        {
          var z = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", V = Rk(i, S, o.type, _, z);
          if (V.length > 0) {
            var W = new C(S, R, null, o, u);
            e.push({
              event: W,
              listeners: V
            });
          }
        }
      }
    }
    Ek(), H(), pc(), mk(), Zg();
    function Tk(e, t, i, o, u, d, m) {
      Ck(e, t, i, o, u, d);
      var S = (d & np) === 0;
      S && (U(e, t, i, o, u), An(e, t, i, o, u), Sk(e, t, i, o, u), ym(e, t, i, o, u));
    }
    var $p = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], aS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat($p));
    function CT(e, t, i) {
      var o = e.type || "unknown-event";
      e.currentTarget = i, Aa(o, t, void 0, e), e.currentTarget = null;
    }
    function xk(e, t, i) {
      var o;
      if (i)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], m = d.instance, S = d.currentTarget, C = d.listener;
          if (m !== o && e.isPropagationStopped())
            return;
          CT(e, C, S), o = m;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var _ = t[R], z = _.instance, V = _.currentTarget, W = _.listener;
          if (z !== o && e.isPropagationStopped())
            return;
          CT(e, W, V), o = z;
        }
    }
    function TT(e, t) {
      for (var i = (t & zi) !== 0, o = 0; o < e.length; o++) {
        var u = e[o], d = u.event, m = u.listeners;
        xk(d, m, i);
      }
      Au();
    }
    function wk(e, t, i, o, u) {
      var d = rp(i), m = [];
      Tk(m, e, o, i, d, t), TT(m, t);
    }
    function xn(e, t) {
      aS.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, o = eM(t), u = kk(e);
      o.has(u) || (xT(t, e, Gc, i), o.add(u));
    }
    function oS(e, t, i) {
      aS.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= zi), xT(i, e, o, t);
    }
    var Tm = "_reactListening" + Math.random().toString(36).slice(2);
    function Yp(e) {
      if (!e[Tm]) {
        e[Tm] = !0, Et.forEach(function(i) {
          i !== "selectionchange" && (aS.has(i) || oS(i, !1, e), oS(i, !0, e));
        });
        var t = e.nodeType === io ? e : e.ownerDocument;
        t !== null && (t[Tm] || (t[Tm] = !0, oS("selectionchange", !1, t)));
      }
    }
    function xT(e, t, i, o, u) {
      var d = vr(e, t, i), m = void 0;
      Ou && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, o ? m !== void 0 ? Ap(e, t, d, m) : ci(e, t, d) : m !== void 0 ? Ys(e, t, d, m) : lc(e, t, d);
    }
    function wT(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function lS(e, t, i, o, u) {
      var d = o;
      if ((t & tp) === 0 && (t & Gc) === 0) {
        var m = u;
        if (o !== null) {
          var S = o;
          e: for (; ; ) {
            if (S === null)
              return;
            var C = S.tag;
            if (C === M || C === A) {
              var R = S.stateNode.containerInfo;
              if (wT(R, m))
                break;
              if (C === A)
                for (var _ = S.return; _ !== null; ) {
                  var z = _.tag;
                  if (z === M || z === A) {
                    var V = _.stateNode.containerInfo;
                    if (wT(V, m))
                      return;
                  }
                  _ = _.return;
                }
              for (; R !== null; ) {
                var W = mc(R);
                if (W === null)
                  return;
                var Q = W.tag;
                if (Q === F || Q === B) {
                  S = d = W;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            S = S.return;
          }
        }
      }
      Mv(function() {
        return wk(e, t, i, d);
      });
    }
    function Wp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function Rk(e, t, i, o, u, d) {
      for (var m = t !== null ? t + "Capture" : null, S = o ? m : t, C = [], R = e, _ = null; R !== null; ) {
        var z = R, V = z.stateNode, W = z.tag;
        if (W === F && V !== null && (_ = V, S !== null)) {
          var Q = Ho(R, S);
          Q != null && C.push(Wp(R, Q, _));
        }
        if (u)
          break;
        R = R.return;
      }
      return C;
    }
    function xm(e, t) {
      for (var i = t + "Capture", o = [], u = e; u !== null; ) {
        var d = u, m = d.stateNode, S = d.tag;
        if (S === F && m !== null) {
          var C = m, R = Ho(u, i);
          R != null && o.unshift(Wp(u, R, C));
          var _ = Ho(u, t);
          _ != null && o.push(Wp(u, _, C));
        }
        u = u.return;
      }
      return o;
    }
    function Xf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function bk(e, t) {
      for (var i = e, o = t, u = 0, d = i; d; d = Xf(d))
        u++;
      for (var m = 0, S = o; S; S = Xf(S))
        m++;
      for (; u - m > 0; )
        i = Xf(i), u--;
      for (; m - u > 0; )
        o = Xf(o), m--;
      for (var C = u; C--; ) {
        if (i === o || o !== null && i === o.alternate)
          return i;
        i = Xf(i), o = Xf(o);
      }
      return null;
    }
    function RT(e, t, i, o, u) {
      for (var d = t._reactName, m = [], S = i; S !== null && S !== o; ) {
        var C = S, R = C.alternate, _ = C.stateNode, z = C.tag;
        if (R !== null && R === o)
          break;
        if (z === F && _ !== null) {
          var V = _;
          if (u) {
            var W = Ho(S, d);
            W != null && m.unshift(Wp(S, W, V));
          } else if (!u) {
            var Q = Ho(S, d);
            Q != null && m.push(Wp(S, Q, V));
          }
        }
        S = S.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function Dk(e, t, i, o, u) {
      var d = o && u ? bk(o, u) : null;
      o !== null && RT(e, t, o, d, !1), u !== null && i !== null && RT(e, i, u, d, !0);
    }
    function kk(e, t) {
      return e + "__bubble";
    }
    var Ki = !1, Gp = "dangerouslySetInnerHTML", wm = "suppressContentEditableWarning", Xs = "suppressHydrationWarning", bT = "autoFocus", hc = "children", vc = "style", Rm = "__html", sS, bm, Kp, DT, Dm, kT, _T;
    sS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, bm = function(e, t) {
      Zd(e, t), Yc(e, t), Dv(e, t, {
        registrationNameDependencies: gt,
        possibleRegistrationNames: Ct
      });
    }, kT = Pn && !document.documentMode, Kp = function(e, t, i) {
      if (!Ki) {
        var o = km(i), u = km(t);
        u !== o && (Ki = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(o)));
      }
    }, DT = function(e) {
      if (!Ki) {
        Ki = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Dm = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, _T = function(e, t) {
      var i = e.namespaceURI === no ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var _k = /\r\n?/g, Mk = /\u0000|\uFFFD/g;
    function km(e) {
      er(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(_k, `
`).replace(Mk, "");
    }
    function _m(e, t, i, o) {
      var u = km(t), d = km(e);
      if (d !== u && (o && (Ki || (Ki = !0, v('Text content did not match. Server: "%s" Client: "%s"', d, u))), i && He))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function MT(e) {
      return e.nodeType === io ? e : e.ownerDocument;
    }
    function Ok() {
    }
    function Mm(e) {
      e.onclick = Ok;
    }
    function Ak(e, t, i, o, u) {
      for (var d in o)
        if (o.hasOwnProperty(d)) {
          var m = o[d];
          if (d === vc)
            m && Object.freeze(m), Cv(t, m);
          else if (d === Gp) {
            var S = m ? m[Rm] : void 0;
            S != null && uv(t, S);
          } else if (d === hc)
            if (typeof m == "string") {
              var C = e !== "textarea" || m !== "";
              C && Ds(t, m);
            } else typeof m == "number" && Ds(t, "" + m);
          else d === wm || d === Xs || d === bT || (gt.hasOwnProperty(d) ? m != null && (typeof m != "function" && Dm(d, m), d === "onScroll" && xn("scroll", t)) : m != null && Lr(t, d, m, u));
        }
    }
    function Lk(e, t, i, o) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], m = t[u + 1];
        d === vc ? Cv(e, m) : d === Gp ? uv(e, m) : d === hc ? Ds(e, m) : Lr(e, d, m, o);
      }
    }
    function Nk(e, t, i, o) {
      var u, d = MT(i), m, S = o;
      if (S === no && (S = Yd(e)), S === no) {
        if (u = Fo(e, t), !u && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = d.createElement("div");
          C.innerHTML = "<script><\/script>";
          var R = C.firstChild;
          m = C.removeChild(R);
        } else if (typeof t.is == "string")
          m = d.createElement(e, {
            is: t.is
          });
        else if (m = d.createElement(e), e === "select") {
          var _ = m;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        m = d.createElementNS(S, e);
      return S === no && !u && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !Ar.call(sS, e) && (sS[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function Pk(e, t) {
      return MT(t).createTextNode(e);
    }
    function Vk(e, t, i, o) {
      var u = Fo(t, i);
      bm(t, i);
      var d;
      switch (t) {
        case "dialog":
          xn("cancel", e), xn("close", e), d = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e), d = i;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < $p.length; m++)
            xn($p[m], e);
          d = i;
          break;
        case "source":
          xn("error", e), d = i;
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e), d = i;
          break;
        case "details":
          xn("toggle", e), d = i;
          break;
        case "input":
          fa(e, i), d = bs(e, i), xn("invalid", e);
          break;
        case "option":
          Ut(e, i), d = i;
          break;
        case "select":
          _l(e, i), d = Tu(e, i), xn("invalid", e);
          break;
        case "textarea":
          Hd(e, i), d = Bd(e, i), xn("invalid", e);
          break;
        default:
          d = i;
      }
      switch (Ic(t, d), Ak(t, e, o, d, u), t) {
        case "input":
          ca(e), G(e, i, !1);
          break;
        case "textarea":
          ca(e), lv(e);
          break;
        case "option":
          sn(e, i);
          break;
        case "select":
          jd(e, i);
          break;
        default:
          typeof d.onClick == "function" && Mm(e);
          break;
      }
    }
    function Uk(e, t, i, o, u) {
      bm(t, o);
      var d = null, m, S;
      switch (t) {
        case "input":
          m = bs(e, i), S = bs(e, o), d = [];
          break;
        case "select":
          m = Tu(e, i), S = Tu(e, o), d = [];
          break;
        case "textarea":
          m = Bd(e, i), S = Bd(e, o), d = [];
          break;
        default:
          m = i, S = o, typeof m.onClick != "function" && typeof S.onClick == "function" && Mm(e);
          break;
      }
      Ic(t, S);
      var C, R, _ = null;
      for (C in m)
        if (!(S.hasOwnProperty(C) || !m.hasOwnProperty(C) || m[C] == null))
          if (C === vc) {
            var z = m[C];
            for (R in z)
              z.hasOwnProperty(R) && (_ || (_ = {}), _[R] = "");
          } else C === Gp || C === hc || C === wm || C === Xs || C === bT || (gt.hasOwnProperty(C) ? d || (d = []) : (d = d || []).push(C, null));
      for (C in S) {
        var V = S[C], W = m?.[C];
        if (!(!S.hasOwnProperty(C) || V === W || V == null && W == null))
          if (C === vc)
            if (V && Object.freeze(V), W) {
              for (R in W)
                W.hasOwnProperty(R) && (!V || !V.hasOwnProperty(R)) && (_ || (_ = {}), _[R] = "");
              for (R in V)
                V.hasOwnProperty(R) && W[R] !== V[R] && (_ || (_ = {}), _[R] = V[R]);
            } else
              _ || (d || (d = []), d.push(C, _)), _ = V;
          else if (C === Gp) {
            var Q = V ? V[Rm] : void 0, J = W ? W[Rm] : void 0;
            Q != null && J !== Q && (d = d || []).push(C, Q);
          } else C === hc ? (typeof V == "string" || typeof V == "number") && (d = d || []).push(C, "" + V) : C === wm || C === Xs || (gt.hasOwnProperty(C) ? (V != null && (typeof V != "function" && Dm(C, V), C === "onScroll" && xn("scroll", e)), !d && W !== V && (d = [])) : (d = d || []).push(C, V));
      }
      return _ && (Pg(_, S[vc]), (d = d || []).push(vc, _)), d;
    }
    function zk(e, t, i, o, u) {
      i === "input" && u.type === "radio" && u.name != null && T(e, u);
      var d = Fo(i, o), m = Fo(i, u);
      switch (Lk(e, t, d, m), i) {
        case "input":
          L(e, u);
          break;
        case "textarea":
          ov(e, u);
          break;
        case "select":
          Fc(e, u);
          break;
      }
    }
    function jk(e) {
      {
        var t = e.toLowerCase();
        return Du.hasOwnProperty(t) && Du[t] || null;
      }
    }
    function Fk(e, t, i, o, u, d, m) {
      var S, C;
      switch (S = Fo(t, i), bm(t, i), t) {
        case "dialog":
          xn("cancel", e), xn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < $p.length; R++)
            xn($p[R], e);
          break;
        case "source":
          xn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e);
          break;
        case "details":
          xn("toggle", e);
          break;
        case "input":
          fa(e, i), xn("invalid", e);
          break;
        case "option":
          Ut(e, i);
          break;
        case "select":
          _l(e, i), xn("invalid", e);
          break;
        case "textarea":
          Hd(e, i), xn("invalid", e);
          break;
      }
      Ic(t, i);
      {
        C = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, z = 0; z < _.length; z++) {
          var V = _[z].name.toLowerCase();
          switch (V) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              C.add(_[z].name);
          }
        }
      }
      var W = null;
      for (var Q in i)
        if (i.hasOwnProperty(Q)) {
          var J = i[Q];
          if (Q === hc)
            typeof J == "string" ? e.textContent !== J && (i[Xs] !== !0 && _m(e.textContent, J, d, m), W = [hc, J]) : typeof J == "number" && e.textContent !== "" + J && (i[Xs] !== !0 && _m(e.textContent, J, d, m), W = [hc, "" + J]);
          else if (gt.hasOwnProperty(Q))
            J != null && (typeof J != "function" && Dm(Q, J), Q === "onScroll" && xn("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var De = void 0, qe = on(Q);
            if (i[Xs] !== !0) {
              if (!(Q === wm || Q === Xs || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Gp) {
                  var We = e.innerHTML, Pt = J ? J[Rm] : void 0;
                  if (Pt != null) {
                    var Mt = _T(e, Pt);
                    Mt !== We && Kp(Q, We, Mt);
                  }
                } else if (Q === vc) {
                  if (C.delete(Q), kT) {
                    var I = Lg(J);
                    De = e.getAttribute("style"), I !== De && Kp(Q, De, I);
                  }
                } else if (S && !j)
                  C.delete(Q.toLowerCase()), De = Tl(e, Q, J), J !== De && Kp(Q, De, J);
                else if (!gn(Q, qe, S) && !tr(Q, J, qe, S)) {
                  var ee = !1;
                  if (qe !== null)
                    C.delete(qe.attributeName), De = Oo(e, Q, J, qe);
                  else {
                    var $ = o;
                    if ($ === no && ($ = Yd(t)), $ === no)
                      C.delete(Q.toLowerCase());
                    else {
                      var ve = jk(Q);
                      ve !== null && ve !== Q && (ee = !0, C.delete(ve)), C.delete(Q);
                    }
                    De = Tl(e, Q, J);
                  }
                  var Ne = j;
                  !Ne && J !== De && !ee && Kp(Q, De, J);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && i[Xs] !== !0 && DT(C), t) {
        case "input":
          ca(e), G(e, i, !0);
          break;
        case "textarea":
          ca(e), lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Mm(e);
          break;
      }
      return W;
    }
    function Bk(e, t, i) {
      var o = e.nodeValue !== t;
      return o;
    }
    function uS(e, t) {
      {
        if (Ki)
          return;
        Ki = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function cS(e, t) {
      {
        if (Ki)
          return;
        Ki = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function fS(e, t, i) {
      {
        if (Ki)
          return;
        Ki = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function dS(e, t) {
      {
        if (t === "" || Ki)
          return;
        Ki = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Hk(e, t, i) {
      switch (t) {
        case "input":
          Z(e, i);
          return;
        case "textarea":
          _g(e, i);
          return;
        case "select":
          Fd(e, i);
          return;
      }
    }
    var Qp = function() {
    }, Xp = function() {
    };
    {
      var Ik = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], OT = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], $k = OT.concat(["button"]), Yk = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AT = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Xp = function(e, t) {
        var i = St({}, e || AT), o = {
          tag: t
        };
        return OT.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), $k.indexOf(t) !== -1 && (i.pTagInButtonScope = null), Ik.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = o, t === "form" && (i.formTag = o), t === "a" && (i.aTagInScope = o), t === "button" && (i.buttonTagInScope = o), t === "nobr" && (i.nobrTagInScope = o), t === "p" && (i.pTagInButtonScope = o), t === "li" && (i.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = o), i;
      };
      var Wk = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Yk.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Gk = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, LT = {};
      Qp = function(e, t, i) {
        i = i || AT;
        var o = i.current, u = o && o.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = Wk(e, u) ? null : o, m = d ? null : Gk(e, i), S = d || m;
        if (S) {
          var C = S.tag, R = !!d + "|" + e + "|" + C;
          if (!LT[R]) {
            LT[R] = !0;
            var _ = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", d) {
              var V = "";
              C === "table" && e === "tr" && (V += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, C, z, V);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, C);
          }
        }
      };
    }
    var Om = "suppressHydrationWarning", Am = "$", Lm = "/$", qp = "$?", Zp = "$!", Kk = "style", pS = null, hS = null;
    function Qk(e) {
      var t, i, o = e.nodeType;
      switch (o) {
        case io:
        case Gd: {
          t = o === io ? "#document" : "#fragment";
          var u = e.documentElement;
          i = u ? u.namespaceURI : Wd(null, "");
          break;
        }
        default: {
          var d = o === Un ? e.parentNode : e, m = d.namespaceURI || null;
          t = d.tagName, i = Wd(m, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), C = Xp(null, S);
        return {
          namespace: i,
          ancestorInfo: C
        };
      }
    }
    function Xk(e, t, i) {
      {
        var o = e, u = Wd(o.namespace, t), d = Xp(o.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function m2(e) {
      return e;
    }
    function qk(e) {
      pS = In(), hS = fk();
      var t = null;
      return Zn(!1), t;
    }
    function Zk(e) {
      dk(hS), Zn(pS), pS = null, hS = null;
    }
    function Jk(e, t, i, o, u) {
      var d;
      {
        var m = o;
        if (Qp(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, C = Xp(m.ancestorInfo, e);
          Qp(null, S, C);
        }
        d = m.namespace;
      }
      var R = Nk(e, t, i, d);
      return th(u, R), TS(R, t), R;
    }
    function e_(e, t) {
      e.appendChild(t);
    }
    function t_(e, t, i, o, u) {
      switch (Vk(e, t, i, o), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function n_(e, t, i, o, u, d) {
      {
        var m = d;
        if (typeof o.children != typeof i.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var S = "" + o.children, C = Xp(m.ancestorInfo, t);
          Qp(null, S, C);
        }
      }
      return Uk(e, t, i, o);
    }
    function vS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function r_(e, t, i, o) {
      {
        var u = i;
        Qp(null, e, u.ancestorInfo);
      }
      var d = Pk(e, t);
      return th(o, d), d;
    }
    function i_() {
      var e = window.event;
      return e === void 0 ? $i : Uf(e.type);
    }
    var mS = typeof setTimeout == "function" ? setTimeout : void 0, a_ = typeof clearTimeout == "function" ? clearTimeout : void 0, yS = -1, NT = typeof Promise == "function" ? Promise : void 0, o_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof NT < "u" ? function(e) {
      return NT.resolve(null).then(e).catch(l_);
    } : mS;
    function l_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function s_(e, t, i, o) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function u_(e, t, i, o, u, d) {
      zk(e, t, i, o, u), TS(e, u);
    }
    function PT(e) {
      Ds(e, "");
    }
    function c_(e, t, i) {
      e.nodeValue = i;
    }
    function f_(e, t) {
      e.appendChild(t);
    }
    function d_(e, t) {
      var i;
      e.nodeType === Un ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var o = e._reactRootContainer;
      o == null && i.onclick === null && Mm(i);
    }
    function p_(e, t, i) {
      e.insertBefore(t, i);
    }
    function h_(e, t, i) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function v_(e, t) {
      e.removeChild(t);
    }
    function m_(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function gS(e, t) {
      var i = t, o = 0;
      do {
        var u = i.nextSibling;
        if (e.removeChild(i), u && u.nodeType === Un) {
          var d = u.data;
          if (d === Lm)
            if (o === 0) {
              e.removeChild(u), Xl(t);
              return;
            } else
              o--;
          else (d === Am || d === qp || d === Zp) && o++;
        }
        i = u;
      } while (i);
      Xl(t);
    }
    function y_(e, t) {
      e.nodeType === Un ? gS(e.parentNode, t) : e.nodeType === ti && gS(e, t), Xl(e);
    }
    function g_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function S_(e) {
      e.nodeValue = "";
    }
    function E_(e, t) {
      e = e;
      var i = t[Kk], o = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Hc("display", o);
    }
    function C_(e, t) {
      e.nodeValue = t;
    }
    function T_(e) {
      e.nodeType === ti ? e.textContent = "" : e.nodeType === io && e.documentElement && e.removeChild(e.documentElement);
    }
    function x_(e, t, i) {
      return e.nodeType !== ti || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function w_(e, t) {
      return t === "" || e.nodeType !== ro ? null : e;
    }
    function R_(e) {
      return e.nodeType !== Un ? null : e;
    }
    function VT(e) {
      return e.data === qp;
    }
    function SS(e) {
      return e.data === Zp;
    }
    function b_(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, o, u;
      return t && (i = t.dgst, o = t.msg, u = t.stck), {
        message: o,
        digest: i,
        stack: u
      };
    }
    function D_(e, t) {
      e._reactRetry = t;
    }
    function Nm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ti || t === ro)
          break;
        if (t === Un) {
          var i = e.data;
          if (i === Am || i === Zp || i === qp)
            break;
          if (i === Lm)
            return null;
        }
      }
      return e;
    }
    function Jp(e) {
      return Nm(e.nextSibling);
    }
    function k_(e) {
      return Nm(e.firstChild);
    }
    function __(e) {
      return Nm(e.firstChild);
    }
    function M_(e) {
      return Nm(e.nextSibling);
    }
    function O_(e, t, i, o, u, d, m) {
      th(d, e), TS(e, i);
      var S;
      {
        var C = u;
        S = C.namespace;
      }
      var R = (d.mode & Dt) !== Qe;
      return Fk(e, t, i, S, o, R, m);
    }
    function A_(e, t, i, o) {
      return th(i, e), i.mode & Dt, Bk(e, t);
    }
    function L_(e, t) {
      th(t, e);
    }
    function N_(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Un) {
          var o = t.data;
          if (o === Lm) {
            if (i === 0)
              return Jp(t);
            i--;
          } else (o === Am || o === Zp || o === qp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function UT(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Un) {
          var o = t.data;
          if (o === Am || o === Zp || o === qp) {
            if (i === 0)
              return t;
            i--;
          } else o === Lm && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function P_(e) {
      Xl(e);
    }
    function V_(e) {
      Xl(e);
    }
    function U_(e) {
      return e !== "head" && e !== "body";
    }
    function z_(e, t, i, o) {
      var u = !0;
      _m(t.nodeValue, i, o, u);
    }
    function j_(e, t, i, o, u, d) {
      if (t[Om] !== !0) {
        var m = !0;
        _m(o.nodeValue, u, d, m);
      }
    }
    function F_(e, t) {
      t.nodeType === ti ? uS(e, t) : t.nodeType === Un || cS(e, t);
    }
    function B_(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === ti ? uS(i, t) : t.nodeType === Un || cS(i, t));
      }
    }
    function H_(e, t, i, o, u) {
      (u || t[Om] !== !0) && (o.nodeType === ti ? uS(i, o) : o.nodeType === Un || cS(i, o));
    }
    function I_(e, t, i) {
      fS(e, t);
    }
    function $_(e, t) {
      dS(e, t);
    }
    function Y_(e, t, i) {
      {
        var o = e.parentNode;
        o !== null && fS(o, t);
      }
    }
    function W_(e, t) {
      {
        var i = e.parentNode;
        i !== null && dS(i, t);
      }
    }
    function G_(e, t, i, o, u, d) {
      (d || t[Om] !== !0) && fS(i, o);
    }
    function K_(e, t, i, o, u) {
      (u || t[Om] !== !0) && dS(i, o);
    }
    function Q_(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function X_(e) {
      Yp(e);
    }
    var qf = Math.random().toString(36).slice(2), Zf = "__reactFiber$" + qf, ES = "__reactProps$" + qf, eh = "__reactContainer$" + qf, CS = "__reactEvents$" + qf, q_ = "__reactListeners$" + qf, Z_ = "__reactHandles$" + qf;
    function J_(e) {
      delete e[Zf], delete e[ES], delete e[CS], delete e[q_], delete e[Z_];
    }
    function th(e, t) {
      t[Zf] = e;
    }
    function Pm(e, t) {
      t[eh] = e;
    }
    function zT(e) {
      e[eh] = null;
    }
    function nh(e) {
      return !!e[eh];
    }
    function mc(e) {
      var t = e[Zf];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[eh] || i[Zf], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var u = UT(e); u !== null; ) {
              var d = u[Zf];
              if (d)
                return d;
              u = UT(u);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function qs(e) {
      var t = e[Zf] || e[eh];
      return t && (t.tag === F || t.tag === B || t.tag === pe || t.tag === M) ? t : null;
    }
    function Jf(e) {
      if (e.tag === F || e.tag === B)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Vm(e) {
      return e[ES] || null;
    }
    function TS(e, t) {
      e[ES] = t;
    }
    function eM(e) {
      var t = e[CS];
      return t === void 0 && (t = e[CS] = /* @__PURE__ */ new Set()), t;
    }
    var jT = {}, FT = c.ReactDebugCurrentFrame;
    function Um(e) {
      if (e) {
        var t = e._owner, i = Ja(e.type, e._source, t ? t.type : null);
        FT.setExtraStackFrame(i);
      } else
        FT.setExtraStackFrame(null);
    }
    function mo(e, t, i, o, u) {
      {
        var d = Function.call.bind(Ar);
        for (var m in e)
          if (d(e, m)) {
            var S = void 0;
            try {
              if (typeof e[m] != "function") {
                var C = Error((o || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              S = e[m](t, m, o, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              S = R;
            }
            S && !(S instanceof Error) && (Um(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, m, typeof S), Um(null)), S instanceof Error && !(S.message in jT) && (jT[S.message] = !0, Um(u), v("Failed %s type: %s", i, S.message), Um(null));
          }
      }
    }
    var xS = [], zm;
    zm = [];
    var ns = -1;
    function Zs(e) {
      return {
        current: e
      };
    }
    function di(e, t) {
      if (ns < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== zm[ns] && v("Unexpected Fiber popped."), e.current = xS[ns], xS[ns] = null, zm[ns] = null, ns--;
    }
    function pi(e, t, i) {
      ns++, xS[ns] = e.current, zm[ns] = i, e.current = t;
    }
    var wS;
    wS = {};
    var ga = {};
    Object.freeze(ga);
    var rs = Zs(ga), ol = Zs(!1), RS = ga;
    function ed(e, t, i) {
      return i && ll(t) ? RS : rs.current;
    }
    function BT(e, t, i) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function td(e, t) {
      {
        var i = e.type, o = i.contextTypes;
        if (!o)
          return ga;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var m in o)
          d[m] = t[m];
        {
          var S = st(e) || "Unknown";
          mo(o, d, "context", S);
        }
        return u && BT(e, t, d), d;
      }
    }
    function jm() {
      return ol.current;
    }
    function ll(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Fm(e) {
      di(ol, e), di(rs, e);
    }
    function bS(e) {
      di(ol, e), di(rs, e);
    }
    function HT(e, t, i) {
      {
        if (rs.current !== ga)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        pi(rs, t, e), pi(ol, i, e);
      }
    }
    function IT(e, t, i) {
      {
        var o = e.stateNode, u = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var d = st(e) || "Unknown";
            wS[d] || (wS[d] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var m = o.getChildContext();
        for (var S in m)
          if (!(S in u))
            throw new Error((st(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var C = st(e) || "Unknown";
          mo(u, m, "child context", C);
        }
        return St({}, i, m);
      }
    }
    function Bm(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ga;
        return RS = rs.current, pi(rs, i, e), pi(ol, ol.current, e), !0;
      }
    }
    function $T(e, t, i) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var u = IT(e, t, RS);
          o.__reactInternalMemoizedMergedChildContext = u, di(ol, e), di(rs, e), pi(rs, u, e), pi(ol, i, e);
        } else
          di(ol, e), pi(ol, i, e);
      }
    }
    function tM(e) {
      {
        if (!Vl(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case b: {
              var i = t.type;
              if (ll(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Js = 0, Hm = 1, is = null, DS = !1, kS = !1;
    function YT(e) {
      is === null ? is = [e] : is.push(e);
    }
    function nM(e) {
      DS = !0, YT(e);
    }
    function WT() {
      DS && eu();
    }
    function eu() {
      if (!kS && is !== null) {
        kS = !0;
        var e = 0, t = Wi();
        try {
          var i = !0, o = is;
          for (Hn(zr); e < o.length; e++) {
            var u = o[e];
            do
              u = u(i);
            while (u !== null);
          }
          is = null, DS = !1;
        } catch (d) {
          throw is !== null && (is = is.slice(e + 1)), ap(Pu, eu), d;
        } finally {
          Hn(t), kS = !1;
        }
      }
      return null;
    }
    var nd = [], rd = 0, Im = null, $m = 0, Ia = [], $a = 0, yc = null, as = 1, os = "";
    function rM(e) {
      return Sc(), (e.flags & La) !== Ke;
    }
    function iM(e) {
      return Sc(), $m;
    }
    function aM() {
      var e = os, t = as, i = t & ~oM(t);
      return i.toString(32) + e;
    }
    function gc(e, t) {
      Sc(), nd[rd++] = $m, nd[rd++] = Im, Im = e, $m = t;
    }
    function GT(e, t, i) {
      Sc(), Ia[$a++] = as, Ia[$a++] = os, Ia[$a++] = yc, yc = e;
      var o = as, u = os, d = Ym(o) - 1, m = o & ~(1 << d), S = i + 1, C = Ym(t) + d;
      if (C > 30) {
        var R = d - d % 5, _ = (1 << R) - 1, z = (m & _).toString(32), V = m >> R, W = d - R, Q = Ym(t) + W, J = S << W, De = J | V, qe = z + u;
        as = 1 << Q | De, os = qe;
      } else {
        var We = S << d, Pt = We | m, Mt = u;
        as = 1 << C | Pt, os = Mt;
      }
    }
    function _S(e) {
      Sc();
      var t = e.return;
      if (t !== null) {
        var i = 1, o = 0;
        gc(e, i), GT(e, i, o);
      }
    }
    function Ym(e) {
      return 32 - Fn(e);
    }
    function oM(e) {
      return 1 << Ym(e) - 1;
    }
    function MS(e) {
      for (; e === Im; )
        Im = nd[--rd], nd[rd] = null, $m = nd[--rd], nd[rd] = null;
      for (; e === yc; )
        yc = Ia[--$a], Ia[$a] = null, os = Ia[--$a], Ia[$a] = null, as = Ia[--$a], Ia[$a] = null;
    }
    function lM() {
      return Sc(), yc !== null ? {
        id: as,
        overflow: os
      } : null;
    }
    function sM(e, t) {
      Sc(), Ia[$a++] = as, Ia[$a++] = os, Ia[$a++] = yc, as = t.id, os = t.overflow, yc = e;
    }
    function Sc() {
      Ir() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Hr = null, Ya = null, yo = !1, Ec = !1, tu = null;
    function uM() {
      yo && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function KT() {
      Ec = !0;
    }
    function cM() {
      return Ec;
    }
    function fM(e) {
      var t = e.stateNode.containerInfo;
      return Ya = __(t), Hr = e, yo = !0, tu = null, Ec = !1, !0;
    }
    function dM(e, t, i) {
      return Ya = M_(t), Hr = e, yo = !0, tu = null, Ec = !1, i !== null && sM(e, i), !0;
    }
    function QT(e, t) {
      switch (e.tag) {
        case M: {
          F_(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var i = (e.mode & Dt) !== Qe;
          H_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case pe: {
          var o = e.memoizedState;
          o.dehydrated !== null && B_(o.dehydrated, t);
          break;
        }
      }
    }
    function XT(e, t) {
      QT(e, t);
      var i = mL();
      i.stateNode = t, i.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [i], e.flags |= ji) : o.push(i);
    }
    function OS(e, t) {
      {
        if (Ec)
          return;
        switch (e.tag) {
          case M: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var o = t.type;
                t.pendingProps, I_(i, o);
                break;
              case B:
                var u = t.pendingProps;
                $_(i, u);
                break;
            }
            break;
          }
          case F: {
            var d = e.type, m = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case F: {
                var C = t.type, R = t.pendingProps, _ = (e.mode & Dt) !== Qe;
                G_(
                  d,
                  m,
                  S,
                  C,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case B: {
                var z = t.pendingProps, V = (e.mode & Dt) !== Qe;
                K_(
                  d,
                  m,
                  S,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  V
                );
                break;
              }
            }
            break;
          }
          case pe: {
            var W = e.memoizedState, Q = W.dehydrated;
            if (Q !== null) switch (t.tag) {
              case F:
                var J = t.type;
                t.pendingProps, Y_(Q, J);
                break;
              case B:
                var De = t.pendingProps;
                W_(Q, De);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function qT(e, t) {
      t.flags = t.flags & ~ri | En, OS(e, t);
    }
    function ZT(e, t) {
      switch (e.tag) {
        case F: {
          var i = e.type;
          e.pendingProps;
          var o = x_(t, i);
          return o !== null ? (e.stateNode = o, Hr = e, Ya = k_(o), !0) : !1;
        }
        case B: {
          var u = e.pendingProps, d = w_(t, u);
          return d !== null ? (e.stateNode = d, Hr = e, Ya = null, !0) : !1;
        }
        case pe: {
          var m = R_(t);
          if (m !== null) {
            var S = {
              dehydrated: m,
              treeContext: lM(),
              retryLane: li
            };
            e.memoizedState = S;
            var C = yL(m);
            return C.return = e, e.child = C, Hr = e, Ya = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function AS(e) {
      return (e.mode & Dt) !== Qe && (e.flags & Ge) === Ke;
    }
    function LS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function NS(e) {
      if (yo) {
        var t = Ya;
        if (!t) {
          AS(e) && (OS(Hr, e), LS()), qT(Hr, e), yo = !1, Hr = e;
          return;
        }
        var i = t;
        if (!ZT(e, t)) {
          AS(e) && (OS(Hr, e), LS()), t = Jp(i);
          var o = Hr;
          if (!t || !ZT(e, t)) {
            qT(Hr, e), yo = !1, Hr = e;
            return;
          }
          XT(o, i);
        }
      }
    }
    function pM(e, t, i) {
      var o = e.stateNode, u = !Ec, d = O_(o, e.type, e.memoizedProps, t, i, e, u);
      return e.updateQueue = d, d !== null;
    }
    function hM(e) {
      var t = e.stateNode, i = e.memoizedProps, o = A_(t, i, e);
      if (o) {
        var u = Hr;
        if (u !== null)
          switch (u.tag) {
            case M: {
              var d = u.stateNode.containerInfo, m = (u.mode & Dt) !== Qe;
              z_(
                d,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case F: {
              var S = u.type, C = u.memoizedProps, R = u.stateNode, _ = (u.mode & Dt) !== Qe;
              j_(
                S,
                C,
                R,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return o;
    }
    function vM(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      L_(i, e);
    }
    function mM(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return N_(i);
    }
    function JT(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== M && t.tag !== pe; )
        t = t.return;
      Hr = t;
    }
    function Wm(e) {
      if (e !== Hr)
        return !1;
      if (!yo)
        return JT(e), yo = !0, !1;
      if (e.tag !== M && (e.tag !== F || U_(e.type) && !vS(e.type, e.memoizedProps))) {
        var t = Ya;
        if (t)
          if (AS(e))
            ex(e), LS();
          else
            for (; t; )
              XT(e, t), t = Jp(t);
      }
      return JT(e), e.tag === pe ? Ya = mM(e) : Ya = Hr ? Jp(e.stateNode) : null, !0;
    }
    function yM() {
      return yo && Ya !== null;
    }
    function ex(e) {
      for (var t = Ya; t; )
        QT(e, t), t = Jp(t);
    }
    function id() {
      Hr = null, Ya = null, yo = !1, Ec = !1;
    }
    function tx() {
      tu !== null && (Kw(tu), tu = null);
    }
    function Ir() {
      return yo;
    }
    function PS(e) {
      tu === null ? tu = [e] : tu.push(e);
    }
    var gM = c.ReactCurrentBatchConfig, SM = null;
    function EM() {
      return gM.transition;
    }
    var go = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var CM = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & en && (t = i), i = i.return;
        return t;
      }, Cc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, rh = [], ih = [], ah = [], oh = [], lh = [], sh = [], Tc = /* @__PURE__ */ new Set();
      go.recordUnsafeLifecycleWarnings = function(e, t) {
        Tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && ih.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ah.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && oh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && lh.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && sh.push(e));
      }, go.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(V) {
          e.add(st(V) || "Component"), Tc.add(V.type);
        }), rh = []);
        var t = /* @__PURE__ */ new Set();
        ih.length > 0 && (ih.forEach(function(V) {
          t.add(st(V) || "Component"), Tc.add(V.type);
        }), ih = []);
        var i = /* @__PURE__ */ new Set();
        ah.length > 0 && (ah.forEach(function(V) {
          i.add(st(V) || "Component"), Tc.add(V.type);
        }), ah = []);
        var o = /* @__PURE__ */ new Set();
        oh.length > 0 && (oh.forEach(function(V) {
          o.add(st(V) || "Component"), Tc.add(V.type);
        }), oh = []);
        var u = /* @__PURE__ */ new Set();
        lh.length > 0 && (lh.forEach(function(V) {
          u.add(st(V) || "Component"), Tc.add(V.type);
        }), lh = []);
        var d = /* @__PURE__ */ new Set();
        if (sh.length > 0 && (sh.forEach(function(V) {
          d.add(st(V) || "Component"), Tc.add(V.type);
        }), sh = []), t.size > 0) {
          var m = Cc(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (o.size > 0) {
          var S = Cc(o);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var C = Cc(d);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var R = Cc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (i.size > 0) {
          var _ = Cc(i);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (u.size > 0) {
          var z = Cc(u);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var Gm = /* @__PURE__ */ new Map(), nx = /* @__PURE__ */ new Set();
      go.recordLegacyContextWarning = function(e, t) {
        var i = CM(e);
        if (i === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!nx.has(e.type)) {
          var o = Gm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], Gm.set(i, o)), o.push(e));
        }
      }, go.flushLegacyContextWarning = function() {
        Gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              o.add(st(d) || "Component"), nx.add(d.type);
            });
            var u = Cc(o);
            try {
              qt(i), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              dn();
            }
          }
        });
      }, go.discardPendingWarnings = function() {
        rh = [], ih = [], ah = [], oh = [], lh = [], sh = [], Gm = /* @__PURE__ */ new Map();
      };
    }
    var VS, US, zS, jS, FS, rx = function(e, t) {
    };
    VS = !1, US = !1, zS = {}, jS = {}, FS = {}, rx = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = st(t) || "Component";
        jS[i] || (jS[i] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function TM(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function uh(e, t, i) {
      var o = i.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & en || te) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !TM(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var u = st(e) || "Component";
          zS[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, o), zS[u] = !0);
        }
        if (i._owner) {
          var d = i._owner, m;
          if (d) {
            var S = d;
            if (S.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = S.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = m;
          Ca(o, "ref");
          var R = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var _ = function(z) {
            var V = C.refs;
            z === null ? delete V[R] : V[R] = z;
          };
          return _._stringRef = R, _;
        } else {
          if (typeof o != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + o + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return o;
    }
    function Km(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qm(e) {
      {
        var t = st(e) || "Component";
        if (FS[t])
          return;
        FS[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function ix(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function ax(e) {
      function t(I, ee) {
        if (e) {
          var $ = I.deletions;
          $ === null ? (I.deletions = [ee], I.flags |= ji) : $.push(ee);
        }
      }
      function i(I, ee) {
        if (!e)
          return null;
        for (var $ = ee; $ !== null; )
          t(I, $), $ = $.sibling;
        return null;
      }
      function o(I, ee) {
        for (var $ = /* @__PURE__ */ new Map(), ve = ee; ve !== null; )
          ve.key !== null ? $.set(ve.key, ve) : $.set(ve.index, ve), ve = ve.sibling;
        return $;
      }
      function u(I, ee) {
        var $ = Oc(I, ee);
        return $.index = 0, $.sibling = null, $;
      }
      function d(I, ee, $) {
        if (I.index = $, !e)
          return I.flags |= La, ee;
        var ve = I.alternate;
        if (ve !== null) {
          var Ne = ve.index;
          return Ne < ee ? (I.flags |= En, ee) : Ne;
        } else
          return I.flags |= En, ee;
      }
      function m(I) {
        return e && I.alternate === null && (I.flags |= En), I;
      }
      function S(I, ee, $, ve) {
        if (ee === null || ee.tag !== B) {
          var Ne = PE($, I.mode, ve);
          return Ne.return = I, Ne;
        } else {
          var _e = u(ee, $);
          return _e.return = I, _e;
        }
      }
      function C(I, ee, $, ve) {
        var Ne = $.type;
        if (Ne === xa)
          return _(I, ee, $.props.children, ve, $.key);
        if (ee !== null && (ee.elementType === Ne || // Keep this check inline so it only runs on the false path:
        cR(ee, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ne == "object" && Ne !== null && Ne.$$typeof === ut && ix(Ne) === ee.type)) {
          var _e = u(ee, $.props);
          return _e.ref = uh(I, ee, $), _e.return = I, _e._debugSource = $._source, _e._debugOwner = $._owner, _e;
        }
        var ot = NE($, I.mode, ve);
        return ot.ref = uh(I, ee, $), ot.return = I, ot;
      }
      function R(I, ee, $, ve) {
        if (ee === null || ee.tag !== A || ee.stateNode.containerInfo !== $.containerInfo || ee.stateNode.implementation !== $.implementation) {
          var Ne = VE($, I.mode, ve);
          return Ne.return = I, Ne;
        } else {
          var _e = u(ee, $.children || []);
          return _e.return = I, _e;
        }
      }
      function _(I, ee, $, ve, Ne) {
        if (ee === null || ee.tag !== X) {
          var _e = du($, I.mode, ve, Ne);
          return _e.return = I, _e;
        } else {
          var ot = u(ee, $);
          return ot.return = I, ot;
        }
      }
      function z(I, ee, $) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var ve = PE("" + ee, I.mode, $);
          return ve.return = I, ve;
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case Nr: {
              var Ne = NE(ee, I.mode, $);
              return Ne.ref = uh(I, null, ee), Ne.return = I, Ne;
            }
            case ur: {
              var _e = VE(ee, I.mode, $);
              return _e.return = I, _e;
            }
            case ut: {
              var ot = ee._payload, ft = ee._init;
              return z(I, ft(ot), $);
            }
          }
          if (xt(ee) || pt(ee)) {
            var nn = du(ee, I.mode, $, null);
            return nn.return = I, nn;
          }
          Km(I, ee);
        }
        return typeof ee == "function" && Qm(I), null;
      }
      function V(I, ee, $, ve) {
        var Ne = ee !== null ? ee.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Ne !== null ? null : S(I, ee, "" + $, ve);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Nr:
              return $.key === Ne ? C(I, ee, $, ve) : null;
            case ur:
              return $.key === Ne ? R(I, ee, $, ve) : null;
            case ut: {
              var _e = $._payload, ot = $._init;
              return V(I, ee, ot(_e), ve);
            }
          }
          if (xt($) || pt($))
            return Ne !== null ? null : _(I, ee, $, ve, null);
          Km(I, $);
        }
        return typeof $ == "function" && Qm(I), null;
      }
      function W(I, ee, $, ve, Ne) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var _e = I.get($) || null;
          return S(ee, _e, "" + ve, Ne);
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case Nr: {
              var ot = I.get(ve.key === null ? $ : ve.key) || null;
              return C(ee, ot, ve, Ne);
            }
            case ur: {
              var ft = I.get(ve.key === null ? $ : ve.key) || null;
              return R(ee, ft, ve, Ne);
            }
            case ut:
              var nn = ve._payload, It = ve._init;
              return W(I, ee, $, It(nn), Ne);
          }
          if (xt(ve) || pt(ve)) {
            var Jn = I.get($) || null;
            return _(ee, Jn, ve, Ne, null);
          }
          Km(ee, ve);
        }
        return typeof ve == "function" && Qm(ee), null;
      }
      function Q(I, ee, $) {
        {
          if (typeof I != "object" || I === null)
            return ee;
          switch (I.$$typeof) {
            case Nr:
            case ur:
              rx(I, $);
              var ve = I.key;
              if (typeof ve != "string")
                break;
              if (ee === null) {
                ee = /* @__PURE__ */ new Set(), ee.add(ve);
                break;
              }
              if (!ee.has(ve)) {
                ee.add(ve);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ve);
              break;
            case ut:
              var Ne = I._payload, _e = I._init;
              Q(_e(Ne), ee, $);
              break;
          }
        }
        return ee;
      }
      function J(I, ee, $, ve) {
        for (var Ne = null, _e = 0; _e < $.length; _e++) {
          var ot = $[_e];
          Ne = Q(ot, Ne, I);
        }
        for (var ft = null, nn = null, It = ee, Jn = 0, $t = 0, Yn = null; It !== null && $t < $.length; $t++) {
          It.index > $t ? (Yn = It, It = null) : Yn = It.sibling;
          var vi = V(I, It, $[$t], ve);
          if (vi === null) {
            It === null && (It = Yn);
            break;
          }
          e && It && vi.alternate === null && t(I, It), Jn = d(vi, Jn, $t), nn === null ? ft = vi : nn.sibling = vi, nn = vi, It = Yn;
        }
        if ($t === $.length) {
          if (i(I, It), Ir()) {
            var Xr = $t;
            gc(I, Xr);
          }
          return ft;
        }
        if (It === null) {
          for (; $t < $.length; $t++) {
            var Ea = z(I, $[$t], ve);
            Ea !== null && (Jn = d(Ea, Jn, $t), nn === null ? ft = Ea : nn.sibling = Ea, nn = Ea);
          }
          if (Ir()) {
            var Mi = $t;
            gc(I, Mi);
          }
          return ft;
        }
        for (var Oi = o(I, It); $t < $.length; $t++) {
          var mi = W(Oi, I, $t, $[$t], ve);
          mi !== null && (e && mi.alternate !== null && Oi.delete(mi.key === null ? $t : mi.key), Jn = d(mi, Jn, $t), nn === null ? ft = mi : nn.sibling = mi, nn = mi);
        }
        if (e && Oi.forEach(function(xd) {
          return t(I, xd);
        }), Ir()) {
          var ps = $t;
          gc(I, ps);
        }
        return ft;
      }
      function De(I, ee, $, ve) {
        var Ne = pt($);
        if (typeof Ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (US || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), US = !0), $.entries === Ne && (VS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), VS = !0);
          var _e = Ne.call($);
          if (_e)
            for (var ot = null, ft = _e.next(); !ft.done; ft = _e.next()) {
              var nn = ft.value;
              ot = Q(nn, ot, I);
            }
        }
        var It = Ne.call($);
        if (It == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, Yn = ee, vi = 0, Xr = 0, Ea = null, Mi = It.next(); Yn !== null && !Mi.done; Xr++, Mi = It.next()) {
          Yn.index > Xr ? (Ea = Yn, Yn = null) : Ea = Yn.sibling;
          var Oi = V(I, Yn, Mi.value, ve);
          if (Oi === null) {
            Yn === null && (Yn = Ea);
            break;
          }
          e && Yn && Oi.alternate === null && t(I, Yn), vi = d(Oi, vi, Xr), $t === null ? Jn = Oi : $t.sibling = Oi, $t = Oi, Yn = Ea;
        }
        if (Mi.done) {
          if (i(I, Yn), Ir()) {
            var mi = Xr;
            gc(I, mi);
          }
          return Jn;
        }
        if (Yn === null) {
          for (; !Mi.done; Xr++, Mi = It.next()) {
            var ps = z(I, Mi.value, ve);
            ps !== null && (vi = d(ps, vi, Xr), $t === null ? Jn = ps : $t.sibling = ps, $t = ps);
          }
          if (Ir()) {
            var xd = Xr;
            gc(I, xd);
          }
          return Jn;
        }
        for (var Bh = o(I, Yn); !Mi.done; Xr++, Mi = It.next()) {
          var vl = W(Bh, I, Xr, Mi.value, ve);
          vl !== null && (e && vl.alternate !== null && Bh.delete(vl.key === null ? Xr : vl.key), vi = d(vl, vi, Xr), $t === null ? Jn = vl : $t.sibling = vl, $t = vl);
        }
        if (e && Bh.forEach(function(KL) {
          return t(I, KL);
        }), Ir()) {
          var GL = Xr;
          gc(I, GL);
        }
        return Jn;
      }
      function qe(I, ee, $, ve) {
        if (ee !== null && ee.tag === B) {
          i(I, ee.sibling);
          var Ne = u(ee, $);
          return Ne.return = I, Ne;
        }
        i(I, ee);
        var _e = PE($, I.mode, ve);
        return _e.return = I, _e;
      }
      function We(I, ee, $, ve) {
        for (var Ne = $.key, _e = ee; _e !== null; ) {
          if (_e.key === Ne) {
            var ot = $.type;
            if (ot === xa) {
              if (_e.tag === X) {
                i(I, _e.sibling);
                var ft = u(_e, $.props.children);
                return ft.return = I, ft._debugSource = $._source, ft._debugOwner = $._owner, ft;
              }
            } else if (_e.elementType === ot || // Keep this check inline so it only runs on the false path:
            cR(_e, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === ut && ix(ot) === _e.type) {
              i(I, _e.sibling);
              var nn = u(_e, $.props);
              return nn.ref = uh(I, _e, $), nn.return = I, nn._debugSource = $._source, nn._debugOwner = $._owner, nn;
            }
            i(I, _e);
            break;
          } else
            t(I, _e);
          _e = _e.sibling;
        }
        if ($.type === xa) {
          var It = du($.props.children, I.mode, ve, $.key);
          return It.return = I, It;
        } else {
          var Jn = NE($, I.mode, ve);
          return Jn.ref = uh(I, ee, $), Jn.return = I, Jn;
        }
      }
      function Pt(I, ee, $, ve) {
        for (var Ne = $.key, _e = ee; _e !== null; ) {
          if (_e.key === Ne)
            if (_e.tag === A && _e.stateNode.containerInfo === $.containerInfo && _e.stateNode.implementation === $.implementation) {
              i(I, _e.sibling);
              var ot = u(_e, $.children || []);
              return ot.return = I, ot;
            } else {
              i(I, _e);
              break;
            }
          else
            t(I, _e);
          _e = _e.sibling;
        }
        var ft = VE($, I.mode, ve);
        return ft.return = I, ft;
      }
      function Mt(I, ee, $, ve) {
        var Ne = typeof $ == "object" && $ !== null && $.type === xa && $.key === null;
        if (Ne && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Nr:
              return m(We(I, ee, $, ve));
            case ur:
              return m(Pt(I, ee, $, ve));
            case ut:
              var _e = $._payload, ot = $._init;
              return Mt(I, ee, ot(_e), ve);
          }
          if (xt($))
            return J(I, ee, $, ve);
          if (pt($))
            return De(I, ee, $, ve);
          Km(I, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? m(qe(I, ee, "" + $, ve)) : (typeof $ == "function" && Qm(I), i(I, ee));
      }
      return Mt;
    }
    var ad = ax(!0), ox = ax(!1);
    function xM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, o = Oc(i, i.pendingProps);
        for (t.child = o, o.return = t; i.sibling !== null; )
          i = i.sibling, o = o.sibling = Oc(i, i.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function wM(e, t) {
      for (var i = e.child; i !== null; )
        fL(i, t), i = i.sibling;
    }
    var BS = Zs(null), HS;
    HS = {};
    var Xm = null, od = null, IS = null, qm = !1;
    function Zm() {
      Xm = null, od = null, IS = null, qm = !1;
    }
    function lx() {
      qm = !0;
    }
    function sx() {
      qm = !1;
    }
    function ux(e, t, i) {
      pi(BS, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== HS && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = HS;
    }
    function $S(e, t) {
      var i = BS.current;
      di(BS, t), e._currentValue = i;
    }
    function YS(e, t, i) {
      for (var o = e; o !== null; ) {
        var u = o.alternate;
        if (Ql(o.childLanes, t) ? u !== null && !Ql(u.childLanes, t) && (u.childLanes = mt(u.childLanes, t)) : (o.childLanes = mt(o.childLanes, t), u !== null && (u.childLanes = mt(u.childLanes, t))), o === i)
          break;
        o = o.return;
      }
      o !== i && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function RM(e, t, i) {
      bM(e, t, i);
    }
    function bM(e, t, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var u = void 0, d = o.dependencies;
        if (d !== null) {
          u = o.child;
          for (var m = d.firstContext; m !== null; ) {
            if (m.context === t) {
              if (o.tag === b) {
                var S = Qu(i), C = ls(rn, S);
                C.tag = ey;
                var R = o.updateQueue;
                if (R !== null) {
                  var _ = R.shared, z = _.pending;
                  z === null ? C.next = C : (C.next = z.next, z.next = C), _.pending = C;
                }
              }
              o.lanes = mt(o.lanes, i);
              var V = o.alternate;
              V !== null && (V.lanes = mt(V.lanes, i)), YS(o.return, i, e), d.lanes = mt(d.lanes, i);
              break;
            }
            m = m.next;
          }
        } else if (o.tag === ae)
          u = o.type === e.type ? null : o.child;
        else if (o.tag === Te) {
          var W = o.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = mt(W.lanes, i);
          var Q = W.alternate;
          Q !== null && (Q.lanes = mt(Q.lanes, i)), YS(W, i, e), u = o.sibling;
        } else
          u = o.child;
        if (u !== null)
          u.return = o;
        else
          for (u = o; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var J = u.sibling;
            if (J !== null) {
              J.return = u.return, u = J;
              break;
            }
            u = u.return;
          }
        o = u;
      }
    }
    function ld(e, t) {
      Xm = e, od = null, IS = null;
      var i = e.dependencies;
      if (i !== null) {
        var o = i.firstContext;
        o !== null && (si(i.lanes, t) && wh(), i.firstContext = null);
      }
    }
    function or(e) {
      qm && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (IS !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (od === null) {
          if (Xm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          od = i, Xm.dependencies = {
            lanes: ue,
            firstContext: i
          };
        } else
          od = od.next = i;
      }
      return t;
    }
    var xc = null;
    function WS(e) {
      xc === null ? xc = [e] : xc.push(e);
    }
    function DM() {
      if (xc !== null) {
        for (var e = 0; e < xc.length; e++) {
          var t = xc[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var o = i.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = o, i.next = d;
            }
            t.pending = i;
          }
        }
        xc = null;
      }
    }
    function cx(e, t, i, o) {
      var u = t.interleaved;
      return u === null ? (i.next = i, WS(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Jm(e, o);
    }
    function kM(e, t, i, o) {
      var u = t.interleaved;
      u === null ? (i.next = i, WS(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
    }
    function _M(e, t, i, o) {
      var u = t.interleaved;
      return u === null ? (i.next = i, WS(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Jm(e, o);
    }
    function Qi(e, t) {
      return Jm(e, t);
    }
    var MM = Jm;
    function Jm(e, t) {
      e.lanes = mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = mt(i.lanes, t)), i === null && (e.flags & (En | ri)) !== Ke && oR(e);
      for (var o = e, u = e.return; u !== null; )
        u.childLanes = mt(u.childLanes, t), i = u.alternate, i !== null ? i.childLanes = mt(i.childLanes, t) : (u.flags & (En | ri)) !== Ke && oR(e), o = u, u = u.return;
      if (o.tag === M) {
        var d = o.stateNode;
        return d;
      } else
        return null;
    }
    var fx = 0, dx = 1, ey = 2, GS = 3, ty = !1, KS, ny;
    KS = !1, ny = null;
    function QS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ue
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function px(e, t) {
      var i = t.updateQueue, o = e.updateQueue;
      if (i === o) {
        var u = {
          baseState: o.baseState,
          firstBaseUpdate: o.firstBaseUpdate,
          lastBaseUpdate: o.lastBaseUpdate,
          shared: o.shared,
          effects: o.effects
        };
        t.updateQueue = u;
      }
    }
    function ls(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: fx,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function nu(e, t, i) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var u = o.shared;
      if (ny === u && !KS && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), KS = !0), kA()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, MM(e, i);
      } else
        return _M(e, u, t, i);
    }
    function ry(e, t, i) {
      var o = t.updateQueue;
      if (o !== null) {
        var u = o.shared;
        if (Tp(i)) {
          var d = u.lanes;
          d = wp(d, e.pendingLanes);
          var m = mt(d, i);
          u.lanes = m, Lf(e, m);
        }
      }
    }
    function XS(e, t) {
      var i = e.updateQueue, o = e.alternate;
      if (o !== null) {
        var u = o.updateQueue;
        if (i === u) {
          var d = null, m = null, S = i.firstBaseUpdate;
          if (S !== null) {
            var C = S;
            do {
              var R = {
                eventTime: C.eventTime,
                lane: C.lane,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null
              };
              m === null ? d = m = R : (m.next = R, m = R), C = C.next;
            } while (C !== null);
            m === null ? d = m = t : (m.next = t, m = t);
          } else
            d = m = t;
          i = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: m,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var _ = i.lastBaseUpdate;
      _ === null ? i.firstBaseUpdate = t : _.next = t, i.lastBaseUpdate = t;
    }
    function OM(e, t, i, o, u, d) {
      switch (i.tag) {
        case dx: {
          var m = i.payload;
          if (typeof m == "function") {
            lx();
            var S = m.call(d, o, u);
            {
              if (e.mode & en) {
                Cn(!0);
                try {
                  m.call(d, o, u);
                } finally {
                  Cn(!1);
                }
              }
              sx();
            }
            return S;
          }
          return m;
        }
        case GS:
          e.flags = e.flags & ~nr | Ge;
        // Intentional fallthrough
        case fx: {
          var C = i.payload, R;
          if (typeof C == "function") {
            lx(), R = C.call(d, o, u);
            {
              if (e.mode & en) {
                Cn(!0);
                try {
                  C.call(d, o, u);
                } finally {
                  Cn(!1);
                }
              }
              sx();
            }
          } else
            R = C;
          return R == null ? o : St({}, o, R);
        }
        case ey:
          return ty = !0, o;
      }
      return o;
    }
    function iy(e, t, i, o) {
      var u = e.updateQueue;
      ty = !1, ny = u.shared;
      var d = u.firstBaseUpdate, m = u.lastBaseUpdate, S = u.shared.pending;
      if (S !== null) {
        u.shared.pending = null;
        var C = S, R = C.next;
        C.next = null, m === null ? d = R : m.next = R, m = C;
        var _ = e.alternate;
        if (_ !== null) {
          var z = _.updateQueue, V = z.lastBaseUpdate;
          V !== m && (V === null ? z.firstBaseUpdate = R : V.next = R, z.lastBaseUpdate = C);
        }
      }
      if (d !== null) {
        var W = u.baseState, Q = ue, J = null, De = null, qe = null, We = d;
        do {
          var Pt = We.lane, Mt = We.eventTime;
          if (Ql(o, Pt)) {
            if (qe !== null) {
              var ee = {
                eventTime: Mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zt,
                tag: We.tag,
                payload: We.payload,
                callback: We.callback,
                next: null
              };
              qe = qe.next = ee;
            }
            W = OM(e, u, We, W, t, i);
            var $ = We.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            We.lane !== zt) {
              e.flags |= un;
              var ve = u.effects;
              ve === null ? u.effects = [We] : ve.push(We);
            }
          } else {
            var I = {
              eventTime: Mt,
              lane: Pt,
              tag: We.tag,
              payload: We.payload,
              callback: We.callback,
              next: null
            };
            qe === null ? (De = qe = I, J = W) : qe = qe.next = I, Q = mt(Q, Pt);
          }
          if (We = We.next, We === null) {
            if (S = u.shared.pending, S === null)
              break;
            var Ne = S, _e = Ne.next;
            Ne.next = null, We = _e, u.lastBaseUpdate = Ne, u.shared.pending = null;
          }
        } while (!0);
        qe === null && (J = W), u.baseState = J, u.firstBaseUpdate = De, u.lastBaseUpdate = qe;
        var ot = u.shared.interleaved;
        if (ot !== null) {
          var ft = ot;
          do
            Q = mt(Q, ft.lane), ft = ft.next;
          while (ft !== ot);
        } else d === null && (u.shared.lanes = ue);
        Vh(Q), e.lanes = Q, e.memoizedState = W;
      }
      ny = null;
    }
    function AM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function hx() {
      ty = !1;
    }
    function ay() {
      return ty;
    }
    function vx(e, t, i) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u], m = d.callback;
          m !== null && (d.callback = null, AM(m, i));
        }
    }
    var ch = {}, ru = Zs(ch), fh = Zs(ch), oy = Zs(ch);
    function ly(e) {
      if (e === ch)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function mx() {
      var e = ly(oy.current);
      return e;
    }
    function qS(e, t) {
      pi(oy, t, e), pi(fh, e, e), pi(ru, ch, e);
      var i = Qk(t);
      di(ru, e), pi(ru, i, e);
    }
    function sd(e) {
      di(ru, e), di(fh, e), di(oy, e);
    }
    function ZS() {
      var e = ly(ru.current);
      return e;
    }
    function yx(e) {
      ly(oy.current);
      var t = ly(ru.current), i = Xk(t, e.type);
      t !== i && (pi(fh, e, e), pi(ru, i, e));
    }
    function JS(e) {
      fh.current === e && (di(ru, e), di(fh, e));
    }
    var LM = 0, gx = 1, Sx = 1, dh = 2, So = Zs(LM);
    function e0(e, t) {
      return (e & t) !== 0;
    }
    function ud(e) {
      return e & gx;
    }
    function t0(e, t) {
      return e & gx | t;
    }
    function NM(e, t) {
      return e | t;
    }
    function iu(e, t) {
      pi(So, t, e);
    }
    function cd(e) {
      di(So, e);
    }
    function PM(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function sy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === pe) {
          var i = t.memoizedState;
          if (i !== null) {
            var o = i.dehydrated;
            if (o === null || VT(o) || SS(o))
              return t;
          }
        } else if (t.tag === rt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ge) !== Ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Xi = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), sl = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), $r = (
      /*   */
      8
    ), n0 = [];
    function r0() {
      for (var e = 0; e < n0.length; e++) {
        var t = n0[e];
        t._workInProgressVersionPrimary = null;
      }
      n0.length = 0;
    }
    function VM(e, t) {
      var i = t._getVersion, o = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var Ae = c.ReactCurrentDispatcher, ph = c.ReactCurrentBatchConfig, i0, fd;
    i0 = /* @__PURE__ */ new Set();
    var wc = ue, tn = null, gr = null, Sr = null, uy = !1, hh = !1, vh = 0, UM = 0, zM = 25, re = null, Wa = null, au = -1, a0 = !1;
    function Gt() {
      {
        var e = re;
        Wa === null ? Wa = [e] : Wa.push(e);
      }
    }
    function Ce() {
      {
        var e = re;
        Wa !== null && (au++, Wa[au] !== e && jM(e));
      }
    }
    function dd(e) {
      e != null && !xt(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function jM(e) {
      {
        var t = st(tn);
        if (!i0.has(t) && (i0.add(t), Wa !== null)) {
          for (var i = "", o = 30, u = 0; u <= au; u++) {
            for (var d = Wa[u], m = u === au ? e : d, S = u + 1 + ". " + d; S.length < o; )
              S += " ";
            S += m + `
`, i += S;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function hi() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function o0(e, t) {
      if (a0)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!de(e[i], t[i]))
          return !1;
      return !0;
    }
    function pd(e, t, i, o, u, d) {
      wc = d, tn = t, Wa = e !== null ? e._debugHookTypes : null, au = -1, a0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? Ae.current = Bx : Wa !== null ? Ae.current = Fx : Ae.current = jx;
      var m = i(o, u);
      if (hh) {
        var S = 0;
        do {
          if (hh = !1, vh = 0, S >= zM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, a0 = !1, gr = null, Sr = null, t.updateQueue = null, au = -1, Ae.current = Hx, m = i(o, u);
        } while (hh);
      }
      Ae.current = Ty, t._debugHookTypes = Wa;
      var C = gr !== null && gr.next !== null;
      if (wc = ue, tn = null, gr = null, Sr = null, re = null, Wa = null, au = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== Qe && v("Internal React error: Expected static flag was missing. Please notify the React team."), uy = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function hd() {
      var e = vh !== 0;
      return vh = 0, e;
    }
    function Ex(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Bt) !== Qe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Xu(e.lanes, i);
    }
    function Cx() {
      if (Ae.current = Ty, uy) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        uy = !1;
      }
      wc = ue, tn = null, gr = null, Sr = null, Wa = null, au = -1, re = null, Nx = !1, hh = !1, vh = 0;
    }
    function ul() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? tn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Ga() {
      var e;
      if (gr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var i;
      if (Sr === null ? i = tn.memoizedState : i = Sr.next, i !== null)
        Sr = i, i = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var o = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? tn.memoizedState = Sr = o : Sr = Sr.next = o;
      }
      return Sr;
    }
    function Tx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function l0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function s0(e, t, i) {
      var o = ul(), u;
      i !== void 0 ? u = i(t) : u = t, o.memoizedState = o.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      o.queue = d;
      var m = d.dispatch = IM.bind(null, tn, d);
      return [o.memoizedState, m];
    }
    function u0(e, t, i) {
      var o = Ga(), u = o.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = gr, m = d.baseQueue, S = u.pending;
      if (S !== null) {
        if (m !== null) {
          var C = m.next, R = S.next;
          m.next = R, S.next = C;
        }
        d.baseQueue !== m && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = m = S, u.pending = null;
      }
      if (m !== null) {
        var _ = m.next, z = d.baseState, V = null, W = null, Q = null, J = _;
        do {
          var De = J.lane;
          if (Ql(wc, De)) {
            if (Q !== null) {
              var We = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zt,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              Q = Q.next = We;
            }
            if (J.hasEagerState)
              z = J.eagerState;
            else {
              var Pt = J.action;
              z = e(z, Pt);
            }
          } else {
            var qe = {
              lane: De,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            Q === null ? (W = Q = qe, V = z) : Q = Q.next = qe, tn.lanes = mt(tn.lanes, De), Vh(De);
          }
          J = J.next;
        } while (J !== null && J !== _);
        Q === null ? V = z : Q.next = W, de(z, o.memoizedState) || wh(), o.memoizedState = z, o.baseState = V, o.baseQueue = Q, u.lastRenderedState = z;
      }
      var Mt = u.interleaved;
      if (Mt !== null) {
        var I = Mt;
        do {
          var ee = I.lane;
          tn.lanes = mt(tn.lanes, ee), Vh(ee), I = I.next;
        } while (I !== Mt);
      } else m === null && (u.lanes = ue);
      var $ = u.dispatch;
      return [o.memoizedState, $];
    }
    function c0(e, t, i) {
      var o = Ga(), u = o.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, m = u.pending, S = o.memoizedState;
      if (m !== null) {
        u.pending = null;
        var C = m.next, R = C;
        do {
          var _ = R.action;
          S = e(S, _), R = R.next;
        } while (R !== C);
        de(S, o.memoizedState) || wh(), o.memoizedState = S, o.baseQueue === null && (o.baseState = S), u.lastRenderedState = S;
      }
      return [S, d];
    }
    function y2(e, t, i) {
    }
    function g2(e, t, i) {
    }
    function f0(e, t, i) {
      var o = tn, u = ul(), d, m = Ir();
      if (m) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = i(), fd || d !== i() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), fd = !0);
      } else {
        if (d = t(), !fd) {
          var S = t();
          de(d, S) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), fd = !0);
        }
        var C = By();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Of(C, wc) || xx(o, t, d);
      }
      u.memoizedState = d;
      var R = {
        value: d,
        getSnapshot: t
      };
      return u.queue = R, hy(Rx.bind(null, o, R, e), [e]), o.flags |= ni, mh(mr | $r, wx.bind(null, o, R, d, t), void 0, null), d;
    }
    function cy(e, t, i) {
      var o = tn, u = Ga(), d = t();
      if (!fd) {
        var m = t();
        de(d, m) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), fd = !0);
      }
      var S = u.memoizedState, C = !de(S, d);
      C && (u.memoizedState = d, wh());
      var R = u.queue;
      if (gh(Rx.bind(null, o, R, e), [e]), R.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        o.flags |= ni, mh(mr | $r, wx.bind(null, o, R, d, t), void 0, null);
        var _ = By();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Of(_, wc) || xx(o, t, d);
      }
      return d;
    }
    function xx(e, t, i) {
      e.flags |= Vs;
      var o = {
        getSnapshot: t,
        value: i
      }, u = tn.updateQueue;
      if (u === null)
        u = Tx(), tn.updateQueue = u, u.stores = [o];
      else {
        var d = u.stores;
        d === null ? u.stores = [o] : d.push(o);
      }
    }
    function wx(e, t, i, o) {
      t.value = i, t.getSnapshot = o, bx(t) && Dx(e);
    }
    function Rx(e, t, i) {
      var o = function() {
        bx(t) && Dx(e);
      };
      return i(o);
    }
    function bx(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var o = t();
        return !de(i, o);
      } catch {
        return !0;
      }
    }
    function Dx(e) {
      var t = Qi(e, it);
      t !== null && xr(t, e, it, rn);
    }
    function fy(e) {
      var t = ul();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: l0,
        lastRenderedState: e
      };
      t.queue = i;
      var o = i.dispatch = $M.bind(null, tn, i);
      return [t.memoizedState, o];
    }
    function d0(e) {
      return u0(l0);
    }
    function p0(e) {
      return c0(l0);
    }
    function mh(e, t, i, o) {
      var u = {
        tag: e,
        create: t,
        destroy: i,
        deps: o,
        // Circular
        next: null
      }, d = tn.updateQueue;
      if (d === null)
        d = Tx(), tn.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var m = d.lastEffect;
        if (m === null)
          d.lastEffect = u.next = u;
        else {
          var S = m.next;
          m.next = u, u.next = S, d.lastEffect = u;
        }
      }
      return u;
    }
    function h0(e) {
      var t = ul();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function dy(e) {
      var t = Ga();
      return t.memoizedState;
    }
    function yh(e, t, i, o) {
      var u = ul(), d = o === void 0 ? null : o;
      tn.flags |= e, u.memoizedState = mh(mr | t, i, void 0, d);
    }
    function py(e, t, i, o) {
      var u = Ga(), d = o === void 0 ? null : o, m = void 0;
      if (gr !== null) {
        var S = gr.memoizedState;
        if (m = S.destroy, d !== null) {
          var C = S.deps;
          if (o0(d, C)) {
            u.memoizedState = mh(t, i, m, d);
            return;
          }
        }
      }
      tn.flags |= e, u.memoizedState = mh(mr | t, i, m, d);
    }
    function hy(e, t) {
      return (tn.mode & Bt) !== Qe ? yh(Na | ni | rf, $r, e, t) : yh(ni | rf, $r, e, t);
    }
    function gh(e, t) {
      return py(ni, $r, e, t);
    }
    function v0(e, t) {
      return yh(At, sl, e, t);
    }
    function vy(e, t) {
      return py(At, sl, e, t);
    }
    function m0(e, t) {
      var i = At;
      return i |= oo, (tn.mode & Bt) !== Qe && (i |= $o), yh(i, yr, e, t);
    }
    function my(e, t) {
      return py(At, yr, e, t);
    }
    function kx(e, t) {
      if (typeof t == "function") {
        var i = t, o = e();
        return i(o), function() {
          i(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function y0(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = i != null ? i.concat([e]) : null, u = At;
      return u |= oo, (tn.mode & Bt) !== Qe && (u |= $o), yh(u, yr, kx.bind(null, t, e), o);
    }
    function yy(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = i != null ? i.concat([e]) : null;
      return py(At, yr, kx.bind(null, t, e), o);
    }
    function FM(e, t) {
    }
    var gy = FM;
    function g0(e, t) {
      var i = ul(), o = t === void 0 ? null : t;
      return i.memoizedState = [e, o], e;
    }
    function Sy(e, t) {
      var i = Ga(), o = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (o0(o, d))
          return u[0];
      }
      return i.memoizedState = [e, o], e;
    }
    function S0(e, t) {
      var i = ul(), o = t === void 0 ? null : t, u = e();
      return i.memoizedState = [u, o], u;
    }
    function Ey(e, t) {
      var i = Ga(), o = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (o0(o, d))
          return u[0];
      }
      var m = e();
      return i.memoizedState = [m, o], m;
    }
    function E0(e) {
      var t = ul();
      return t.memoizedState = e, e;
    }
    function _x(e) {
      var t = Ga(), i = gr, o = i.memoizedState;
      return Ox(t, o, e);
    }
    function Mx(e) {
      var t = Ga();
      if (gr === null)
        return t.memoizedState = e, e;
      var i = gr.memoizedState;
      return Ox(t, i, e);
    }
    function Ox(e, t, i) {
      var o = !Ep(wc);
      if (o) {
        if (!de(i, t)) {
          var u = xp();
          tn.lanes = mt(tn.lanes, u), Vh(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, wh()), e.memoizedState = i, i;
    }
    function BM(e, t, i) {
      var o = Wi();
      Hn(qv(o, za)), e(!0);
      var u = ph.transition;
      ph.transition = {};
      var d = ph.transition;
      ph.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(o), ph.transition = u, u === null && d._updatedFibers) {
          var m = d._updatedFibers.size;
          m > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function C0() {
      var e = fy(!1), t = e[0], i = e[1], o = BM.bind(null, i), u = ul();
      return u.memoizedState = o, [t, o];
    }
    function Ax() {
      var e = d0(), t = e[0], i = Ga(), o = i.memoizedState;
      return [t, o];
    }
    function Lx() {
      var e = p0(), t = e[0], i = Ga(), o = i.memoizedState;
      return [t, o];
    }
    var Nx = !1;
    function HM() {
      return Nx;
    }
    function T0() {
      var e = ul(), t = By(), i = t.identifierPrefix, o;
      if (Ir()) {
        var u = aM();
        o = ":" + i + "R" + u;
        var d = vh++;
        d > 0 && (o += "H" + d.toString(32)), o += ":";
      } else {
        var m = UM++;
        o = ":" + i + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function Cy() {
      var e = Ga(), t = e.memoizedState;
      return t;
    }
    function IM(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = cu(e), u = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Px(e))
        Vx(t, u);
      else {
        var d = cx(e, t, u, o);
        if (d !== null) {
          var m = _i();
          xr(d, e, o, m), Ux(d, t, o);
        }
      }
      zx(e, o);
    }
    function $M(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = cu(e), u = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Px(e))
        Vx(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === ue && (d === null || d.lanes === ue)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var S;
            S = Ae.current, Ae.current = Eo;
            try {
              var C = t.lastRenderedState, R = m(C, i);
              if (u.hasEagerState = !0, u.eagerState = R, de(R, C)) {
                kM(e, t, u, o);
                return;
              }
            } catch {
            } finally {
              Ae.current = S;
            }
          }
        }
        var _ = cx(e, t, u, o);
        if (_ !== null) {
          var z = _i();
          xr(_, e, o, z), Ux(_, t, o);
        }
      }
      zx(e, o);
    }
    function Px(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function Vx(e, t) {
      hh = uy = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function Ux(e, t, i) {
      if (Tp(i)) {
        var o = t.lanes;
        o = wp(o, e.pendingLanes);
        var u = mt(o, i);
        t.lanes = u, Lf(e, u);
      }
    }
    function zx(e, t, i) {
      Fu(e, t);
    }
    var Ty = {
      readContext: or,
      useCallback: hi,
      useContext: hi,
      useEffect: hi,
      useImperativeHandle: hi,
      useInsertionEffect: hi,
      useLayoutEffect: hi,
      useMemo: hi,
      useReducer: hi,
      useRef: hi,
      useState: hi,
      useDebugValue: hi,
      useDeferredValue: hi,
      useTransition: hi,
      useMutableSource: hi,
      useSyncExternalStore: hi,
      useId: hi,
      unstable_isNewReconciler: le
    }, jx = null, Fx = null, Bx = null, Hx = null, cl = null, Eo = null, xy = null;
    {
      var x0 = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ct = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      jx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Gt(), dd(t), g0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Gt(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Gt(), dd(t), hy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", Gt(), dd(i), y0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Gt(), dd(t), v0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Gt(), dd(t), m0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Gt(), dd(t);
          var i = Ae.current;
          Ae.current = cl;
          try {
            return S0(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", Gt();
          var o = Ae.current;
          Ae.current = cl;
          try {
            return s0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", Gt(), h0(e);
        },
        useState: function(e) {
          re = "useState", Gt();
          var t = Ae.current;
          Ae.current = cl;
          try {
            return fy(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Gt(), E0(e);
        },
        useTransition: function() {
          return re = "useTransition", Gt(), C0();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", Gt(), f0(e, t, i);
        },
        useId: function() {
          return re = "useId", Gt(), T0();
        },
        unstable_isNewReconciler: le
      }, Fx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Ce(), g0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Ce(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Ce(), hy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", Ce(), y0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Ce(), v0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Ce(), m0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Ce();
          var i = Ae.current;
          Ae.current = cl;
          try {
            return S0(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", Ce();
          var o = Ae.current;
          Ae.current = cl;
          try {
            return s0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ce(), h0(e);
        },
        useState: function(e) {
          re = "useState", Ce();
          var t = Ae.current;
          Ae.current = cl;
          try {
            return fy(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Ce(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ce(), E0(e);
        },
        useTransition: function() {
          return re = "useTransition", Ce(), C0();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", Ce(), f0(e, t, i);
        },
        useId: function() {
          return re = "useId", Ce(), T0();
        },
        unstable_isNewReconciler: le
      }, Bx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Ce(), Sy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Ce(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Ce(), gh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", Ce(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Ce(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Ce(), my(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Ce();
          var i = Ae.current;
          Ae.current = Eo;
          try {
            return Ey(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", Ce();
          var o = Ae.current;
          Ae.current = Eo;
          try {
            return u0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ce(), dy();
        },
        useState: function(e) {
          re = "useState", Ce();
          var t = Ae.current;
          Ae.current = Eo;
          try {
            return d0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Ce(), gy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ce(), _x(e);
        },
        useTransition: function() {
          return re = "useTransition", Ce(), Ax();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", Ce(), cy(e, t);
        },
        useId: function() {
          return re = "useId", Ce(), Cy();
        },
        unstable_isNewReconciler: le
      }, Hx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Ce(), Sy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Ce(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Ce(), gh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", Ce(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Ce(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Ce(), my(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Ce();
          var i = Ae.current;
          Ae.current = xy;
          try {
            return Ey(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", Ce();
          var o = Ae.current;
          Ae.current = xy;
          try {
            return c0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ce(), dy();
        },
        useState: function(e) {
          re = "useState", Ce();
          var t = Ae.current;
          Ae.current = xy;
          try {
            return p0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Ce(), gy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ce(), Mx(e);
        },
        useTransition: function() {
          return re = "useTransition", Ce(), Lx();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", Ce(), cy(e, t);
        },
        useId: function() {
          return re = "useId", Ce(), Cy();
        },
        unstable_isNewReconciler: le
      }, cl = {
        readContext: function(e) {
          return x0(), or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ct(), Gt(), g0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ct(), Gt(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ct(), Gt(), hy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", ct(), Gt(), y0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ct(), Gt(), v0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ct(), Gt(), m0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ct(), Gt();
          var i = Ae.current;
          Ae.current = cl;
          try {
            return S0(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", ct(), Gt();
          var o = Ae.current;
          Ae.current = cl;
          try {
            return s0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", ct(), Gt(), h0(e);
        },
        useState: function(e) {
          re = "useState", ct(), Gt();
          var t = Ae.current;
          Ae.current = cl;
          try {
            return fy(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ct(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ct(), Gt(), E0(e);
        },
        useTransition: function() {
          return re = "useTransition", ct(), Gt(), C0();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", ct(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", ct(), Gt(), f0(e, t, i);
        },
        useId: function() {
          return re = "useId", ct(), Gt(), T0();
        },
        unstable_isNewReconciler: le
      }, Eo = {
        readContext: function(e) {
          return x0(), or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ct(), Ce(), Sy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ct(), Ce(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ct(), Ce(), gh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", ct(), Ce(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ct(), Ce(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ct(), Ce(), my(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ct(), Ce();
          var i = Ae.current;
          Ae.current = Eo;
          try {
            return Ey(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", ct(), Ce();
          var o = Ae.current;
          Ae.current = Eo;
          try {
            return u0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", ct(), Ce(), dy();
        },
        useState: function(e) {
          re = "useState", ct(), Ce();
          var t = Ae.current;
          Ae.current = Eo;
          try {
            return d0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ct(), Ce(), gy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ct(), Ce(), _x(e);
        },
        useTransition: function() {
          return re = "useTransition", ct(), Ce(), Ax();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", ct(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", ct(), Ce(), cy(e, t);
        },
        useId: function() {
          return re = "useId", ct(), Ce(), Cy();
        },
        unstable_isNewReconciler: le
      }, xy = {
        readContext: function(e) {
          return x0(), or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ct(), Ce(), Sy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ct(), Ce(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ct(), Ce(), gh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return re = "useImperativeHandle", ct(), Ce(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ct(), Ce(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ct(), Ce(), my(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ct(), Ce();
          var i = Ae.current;
          Ae.current = Eo;
          try {
            return Ey(e, t);
          } finally {
            Ae.current = i;
          }
        },
        useReducer: function(e, t, i) {
          re = "useReducer", ct(), Ce();
          var o = Ae.current;
          Ae.current = Eo;
          try {
            return c0(e, t, i);
          } finally {
            Ae.current = o;
          }
        },
        useRef: function(e) {
          return re = "useRef", ct(), Ce(), dy();
        },
        useState: function(e) {
          re = "useState", ct(), Ce();
          var t = Ae.current;
          Ae.current = Eo;
          try {
            return p0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ct(), Ce(), gy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ct(), Ce(), Mx(e);
        },
        useTransition: function() {
          return re = "useTransition", ct(), Ce(), Lx();
        },
        useMutableSource: function(e, t, i) {
          return re = "useMutableSource", ct(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return re = "useSyncExternalStore", ct(), Ce(), cy(e, t);
        },
        useId: function() {
          return re = "useId", ct(), Ce(), Cy();
        },
        unstable_isNewReconciler: le
      };
    }
    var ou = l.unstable_now, Ix = 0, wy = -1, Sh = -1, Ry = -1, w0 = !1, by = !1;
    function $x() {
      return w0;
    }
    function YM() {
      by = !0;
    }
    function WM() {
      w0 = !1, by = !1;
    }
    function GM() {
      w0 = by, by = !1;
    }
    function Yx() {
      return Ix;
    }
    function Wx() {
      Ix = ou();
    }
    function R0(e) {
      Sh = ou(), e.actualStartTime < 0 && (e.actualStartTime = ou());
    }
    function Gx(e) {
      Sh = -1;
    }
    function Dy(e, t) {
      if (Sh >= 0) {
        var i = ou() - Sh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Sh = -1;
      }
    }
    function fl(e) {
      if (wy >= 0) {
        var t = ou() - wy;
        wy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case M:
              var o = i.stateNode;
              o.effectDuration += t;
              return;
            case oe:
              var u = i.stateNode;
              u.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function b0(e) {
      if (Ry >= 0) {
        var t = ou() - Ry;
        Ry = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case M:
              var o = i.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case oe:
              var u = i.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function dl() {
      wy = ou();
    }
    function D0() {
      Ry = ou();
    }
    function k0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Co(e, t) {
      if (e && e.defaultProps) {
        var i = St({}, t), o = e.defaultProps;
        for (var u in o)
          i[u] === void 0 && (i[u] = o[u]);
        return i;
      }
      return t;
    }
    var _0 = {}, M0, O0, A0, L0, N0, Kx, ky, P0, V0, U0, Eh;
    {
      M0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), Eh = /* @__PURE__ */ new Set();
      var Qx = /* @__PURE__ */ new Set();
      ky = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          Qx.has(i) || (Qx.add(i), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Kx = function(e, t) {
        if (t === void 0) {
          var i = Vt(e) || "Component";
          N0.has(i) || (N0.add(i), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(_0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(_0);
    }
    function z0(e, t, i, o) {
      var u = e.memoizedState, d = i(o, u);
      {
        if (e.mode & en) {
          Cn(!0);
          try {
            d = i(o, u);
          } finally {
            Cn(!1);
          }
        }
        Kx(t, d);
      }
      var m = d == null ? u : St({}, u, d);
      if (e.memoizedState = m, e.lanes === ue) {
        var S = e.updateQueue;
        S.baseState = m;
      }
    }
    var j0 = {
      isMounted: Pv,
      enqueueSetState: function(e, t, i) {
        var o = Ps(e), u = _i(), d = cu(o), m = ls(u, d);
        m.payload = t, i != null && (ky(i, "setState"), m.callback = i);
        var S = nu(o, m, d);
        S !== null && (xr(S, o, d, u), ry(S, o, d)), Fu(o, d);
      },
      enqueueReplaceState: function(e, t, i) {
        var o = Ps(e), u = _i(), d = cu(o), m = ls(u, d);
        m.tag = dx, m.payload = t, i != null && (ky(i, "replaceState"), m.callback = i);
        var S = nu(o, m, d);
        S !== null && (xr(S, o, d, u), ry(S, o, d)), Fu(o, d);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Ps(e), o = _i(), u = cu(i), d = ls(o, u);
        d.tag = ey, t != null && (ky(t, "forceUpdate"), d.callback = t);
        var m = nu(i, d, u);
        m !== null && (xr(m, i, u, o), ry(m, i, u)), ff(i, u);
      }
    };
    function Xx(e, t, i, o, u, d, m) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var C = S.shouldComponentUpdate(o, d, m);
        {
          if (e.mode & en) {
            Cn(!0);
            try {
              C = S.shouldComponentUpdate(o, d, m);
            } finally {
              Cn(!1);
            }
          }
          C === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(i, o) || !Fe(u, d) : !0;
    }
    function KM(e, t, i) {
      var o = e.stateNode;
      {
        var u = Vt(t) || "Component", d = o.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), o.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), o.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Eh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === Qe && (Eh.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Eh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === Qe && (Eh.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), o.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !V0.has(t) && (V0.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof o.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof o.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof o.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof o.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof o.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var m = o.props !== i;
        o.props !== void 0 && m && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), o.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !A0.has(t) && (A0.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof o.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof o.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var S = o.state;
        S && (typeof S != "object" || xt(S)) && v("%s.state: must be set to an object or null", u), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function qx(e, t) {
      t.updater = j0, e.stateNode = t, Pl(t, e), t._reactInternalInstance = _0;
    }
    function Zx(e, t, i) {
      var o = !1, u = ga, d = ga, m = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === N && m._context === void 0
        );
        if (!S && !U0.has(t)) {
          U0.add(t);
          var C = "";
          m === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? C = " However, it is set to a " + typeof m + "." : m.$$typeof === Ra ? C = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", C);
        }
      }
      if (typeof m == "object" && m !== null)
        d = or(m);
      else {
        u = ed(e, t, !0);
        var R = t.contextTypes;
        o = R != null, d = o ? td(e, u) : ga;
      }
      var _ = new t(i, d);
      if (e.mode & en) {
        Cn(!0);
        try {
          _ = new t(i, d);
        } finally {
          Cn(!1);
        }
      }
      var z = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      qx(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var V = Vt(t) || "Component";
          O0.has(V) || (O0.add(V), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, _.state === null ? "null" : "undefined", V));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var W = null, Q = null, J = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), W !== null || Q !== null || J !== null) {
            var De = Vt(t) || "Component", qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            L0.has(De) || (L0.add(De), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, qe, W !== null ? `
  ` + W : "", Q !== null ? `
  ` + Q : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return o && BT(e, u, d), _;
    }
    function QM(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", st(e) || "Component"), j0.enqueueReplaceState(t, t.state, null));
    }
    function Jx(e, t, i, o) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== u) {
        {
          var d = st(e) || "Component";
          M0.has(d) || (M0.add(d), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        j0.enqueueReplaceState(t, t.state, null);
      }
    }
    function F0(e, t, i, o) {
      KM(e, t, i);
      var u = e.stateNode;
      u.props = i, u.state = e.memoizedState, u.refs = {}, QS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = or(d);
      else {
        var m = ed(e, t, !0);
        u.context = td(e, m);
      }
      {
        if (u.state === i) {
          var S = Vt(t) || "Component";
          P0.has(S) || (P0.add(S), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & en && go.recordLegacyContextWarning(e, u), go.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (z0(e, t, C, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (QM(e, u), iy(e, i, u, o), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var R = At;
        R |= oo, (e.mode & Bt) !== Qe && (R |= $o), e.flags |= R;
      }
    }
    function XM(e, t, i, o) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var m = u.context, S = t.contextType, C = ga;
      if (typeof S == "object" && S !== null)
        C = or(S);
      else {
        var R = ed(e, t, !0);
        C = td(e, R);
      }
      var _ = t.getDerivedStateFromProps, z = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !z && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== i || m !== C) && Jx(e, u, i, C), hx();
      var V = e.memoizedState, W = u.state = V;
      if (iy(e, i, u, o), W = e.memoizedState, d === i && V === W && !jm() && !ay()) {
        if (typeof u.componentDidMount == "function") {
          var Q = At;
          Q |= oo, (e.mode & Bt) !== Qe && (Q |= $o), e.flags |= Q;
        }
        return !1;
      }
      typeof _ == "function" && (z0(e, t, _, i), W = e.memoizedState);
      var J = ay() || Xx(e, t, d, i, V, W, C);
      if (J) {
        if (!z && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var De = At;
          De |= oo, (e.mode & Bt) !== Qe && (De |= $o), e.flags |= De;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var qe = At;
          qe |= oo, (e.mode & Bt) !== Qe && (qe |= $o), e.flags |= qe;
        }
        e.memoizedProps = i, e.memoizedState = W;
      }
      return u.props = i, u.state = W, u.context = C, J;
    }
    function qM(e, t, i, o, u) {
      var d = t.stateNode;
      px(e, t);
      var m = t.memoizedProps, S = t.type === t.elementType ? m : Co(t.type, m);
      d.props = S;
      var C = t.pendingProps, R = d.context, _ = i.contextType, z = ga;
      if (typeof _ == "object" && _ !== null)
        z = or(_);
      else {
        var V = ed(t, i, !0);
        z = td(t, V);
      }
      var W = i.getDerivedStateFromProps, Q = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !Q && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (m !== C || R !== z) && Jx(t, d, o, z), hx();
      var J = t.memoizedState, De = d.state = J;
      if (iy(t, o, d, u), De = t.memoizedState, m === C && J === De && !jm() && !ay() && !ke)
        return typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= At), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof W == "function" && (z0(t, i, W, o), De = t.memoizedState);
      var qe = ay() || Xx(t, i, S, o, J, De, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return qe ? (!Q && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, De, z), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, De, z)), typeof d.componentDidUpdate == "function" && (t.flags |= At), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= At), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = o, t.memoizedState = De), d.props = o, d.state = De, d.context = z, qe;
    }
    function Rc(e, t) {
      return {
        value: e,
        source: t,
        stack: eo(t),
        digest: null
      };
    }
    function B0(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function ZM(e, t) {
      return !0;
    }
    function H0(e, t) {
      try {
        var i = ZM(e, t);
        if (i === !1)
          return;
        var o = t.value, u = t.source, d = t.stack, m = d !== null ? d : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(o);
        }
        var S = u ? st(u) : null, C = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === M)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = st(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var z = C + `
` + m + `

` + ("" + R);
        console.error(z);
      } catch (V) {
        setTimeout(function() {
          throw V;
        });
      }
    }
    var JM = typeof WeakMap == "function" ? WeakMap : Map;
    function ew(e, t, i) {
      var o = ls(rn, i);
      o.tag = GS, o.payload = {
        element: null
      };
      var u = t.value;
      return o.callback = function() {
        YA(u), H0(e, t);
      }, o;
    }
    function I0(e, t, i) {
      var o = ls(rn, i);
      o.tag = GS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        o.payload = function() {
          return u(d);
        }, o.callback = function() {
          fR(e), H0(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
        fR(e), H0(e, t), typeof u != "function" && IA(this);
        var C = t.value, R = t.stack;
        this.componentDidCatch(C, {
          componentStack: R !== null ? R : ""
        }), typeof u != "function" && (si(e.lanes, it) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", st(e) || "Unknown"));
      }), o;
    }
    function tw(e, t, i) {
      var o = e.pingCache, u;
      if (o === null ? (o = e.pingCache = new JM(), u = /* @__PURE__ */ new Set(), o.set(t, u)) : (u = o.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(t, u))), !u.has(i)) {
        u.add(i);
        var d = WA.bind(null, e, t, i);
        oi && Uh(e, i), t.then(d, d);
      }
    }
    function eO(e, t, i, o) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(i), e.updateQueue = d;
      } else
        u.add(i);
    }
    function tO(e, t) {
      var i = e.tag;
      if ((e.mode & Dt) === Qe && (i === D || i === ne || i === ge)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function nw(e) {
      var t = e;
      do {
        if (t.tag === pe && PM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function rw(e, t, i, o, u) {
      if ((e.mode & Dt) === Qe) {
        if (e === t)
          e.flags |= nr;
        else {
          if (e.flags |= Ge, i.flags |= nf, i.flags &= -52805, i.tag === b) {
            var d = i.alternate;
            if (d === null)
              i.tag = Ue;
            else {
              var m = ls(rn, it);
              m.tag = ey, nu(i, m, it);
            }
          }
          i.lanes = mt(i.lanes, it);
        }
        return e;
      }
      return e.flags |= nr, e.lanes = u, e;
    }
    function nO(e, t, i, o, u) {
      if (i.flags |= Nu, oi && Uh(e, u), o !== null && typeof o == "object" && typeof o.then == "function") {
        var d = o;
        tO(i), Ir() && i.mode & Dt && KT();
        var m = nw(t);
        if (m !== null) {
          m.flags &= ~kr, rw(m, t, i, e, u), m.mode & Dt && tw(e, d, u), eO(m, e, d);
          return;
        } else {
          if (!Iv(u)) {
            tw(e, d, u), TE();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = S;
        }
      } else if (Ir() && i.mode & Dt) {
        KT();
        var C = nw(t);
        if (C !== null) {
          (C.flags & nr) === Ke && (C.flags |= kr), rw(C, t, i, e, u), PS(Rc(o, i));
          return;
        }
      }
      o = Rc(o, i), PA(o);
      var R = t;
      do {
        switch (R.tag) {
          case M: {
            var _ = o;
            R.flags |= nr;
            var z = Qu(u);
            R.lanes = mt(R.lanes, z);
            var V = ew(R, _, z);
            XS(R, V);
            return;
          }
          case b:
            var W = o, Q = R.type, J = R.stateNode;
            if ((R.flags & Ge) === Ke && (typeof Q.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !nR(J))) {
              R.flags |= nr;
              var De = Qu(u);
              R.lanes = mt(R.lanes, De);
              var qe = I0(R, W, De);
              XS(R, qe);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function rO() {
      return null;
    }
    var Ch = c.ReactCurrentOwner, To = !1, $0, Th, Y0, W0, G0, bc, K0, _y, xh;
    $0 = {}, Th = {}, Y0 = {}, W0 = {}, G0 = {}, bc = !1, K0 = {}, _y = {}, xh = {};
    function Di(e, t, i, o) {
      e === null ? t.child = ox(t, null, i, o) : t.child = ad(t, e.child, i, o);
    }
    function iO(e, t, i, o) {
      t.child = ad(t, e.child, null, o), t.child = ad(t, null, i, o);
    }
    function iw(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && mo(
          d,
          o,
          // Resolved props
          "prop",
          Vt(i)
        );
      }
      var m = i.render, S = t.ref, C, R;
      ld(t, u), xi(t);
      {
        if (Ch.current = t, Qn(!0), C = pd(e, t, m, o, S, u), R = hd(), t.mode & en) {
          Cn(!0);
          try {
            C = pd(e, t, m, o, S, u), R = hd();
          } finally {
            Cn(!1);
          }
        }
        Qn(!1);
      }
      return wi(), e !== null && !To ? (Ex(e, t, u), ss(e, t, u)) : (Ir() && R && _S(t), t.flags |= pa, Di(e, t, C, u), t.child);
    }
    function aw(e, t, i, o, u) {
      if (e === null) {
        var d = i.type;
        if (uL(d) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var m = d;
          return m = Td(d), t.tag = ge, t.type = m, q0(t, d), ow(e, t, m, o, u);
        }
        {
          var S = d.propTypes;
          if (S && mo(
            S,
            o,
            // Resolved props
            "prop",
            Vt(d)
          ), i.defaultProps !== void 0) {
            var C = Vt(d) || "Unknown";
            xh[C] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", C), xh[C] = !0);
          }
        }
        var R = LE(i.type, null, o, t, t.mode, u);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var _ = i.type, z = _.propTypes;
        z && mo(
          z,
          o,
          // Resolved props
          "prop",
          Vt(_)
        );
      }
      var V = e.child, W = rE(e, u);
      if (!W) {
        var Q = V.memoizedProps, J = i.compare;
        if (J = J !== null ? J : Fe, J(Q, o) && e.ref === t.ref)
          return ss(e, t, u);
      }
      t.flags |= pa;
      var De = Oc(V, o);
      return De.ref = t.ref, De.return = t, t.child = De, De;
    }
    function ow(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ut) {
          var m = d, S = m._payload, C = m._init;
          try {
            d = C(S);
          } catch {
            d = null;
          }
          var R = d && d.propTypes;
          R && mo(
            R,
            o,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(d)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Fe(_, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (To = !1, t.pendingProps = o = _, rE(e, u))
            (e.flags & nf) !== Ke && (To = !0);
          else return t.lanes = e.lanes, ss(e, t, u);
      }
      return Q0(e, t, i, o, u);
    }
    function lw(e, t, i) {
      var o = t.pendingProps, u = o.children, d = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || ye)
        if ((t.mode & Dt) === Qe) {
          var m = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, Hy(t, i);
        } else if (si(i, li)) {
          var z = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var V = d !== null ? d.baseLanes : i;
          Hy(t, V);
        } else {
          var S = null, C;
          if (d !== null) {
            var R = d.baseLanes;
            C = mt(R, i);
          } else
            C = i;
          t.lanes = t.childLanes = li;
          var _ = {
            baseLanes: C,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Hy(t, C), null;
        }
      else {
        var W;
        d !== null ? (W = mt(d.baseLanes, i), t.memoizedState = null) : W = i, Hy(t, W);
      }
      return Di(e, t, u, i), t.child;
    }
    function aO(e, t, i) {
      var o = t.pendingProps;
      return Di(e, t, o, i), t.child;
    }
    function oO(e, t, i) {
      var o = t.pendingProps.children;
      return Di(e, t, o, i), t.child;
    }
    function lO(e, t, i) {
      {
        t.flags |= At;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return Di(e, t, d, i), t.child;
    }
    function sw(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= wn, t.flags |= Us);
    }
    function Q0(e, t, i, o, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && mo(
          d,
          o,
          // Resolved props
          "prop",
          Vt(i)
        );
      }
      var m;
      {
        var S = ed(t, i, !0);
        m = td(t, S);
      }
      var C, R;
      ld(t, u), xi(t);
      {
        if (Ch.current = t, Qn(!0), C = pd(e, t, i, o, m, u), R = hd(), t.mode & en) {
          Cn(!0);
          try {
            C = pd(e, t, i, o, m, u), R = hd();
          } finally {
            Cn(!1);
          }
        }
        Qn(!1);
      }
      return wi(), e !== null && !To ? (Ex(e, t, u), ss(e, t, u)) : (Ir() && R && _S(t), t.flags |= pa, Di(e, t, C, u), t.child);
    }
    function uw(e, t, i, o, u) {
      {
        switch (wL(t)) {
          case !1: {
            var d = t.stateNode, m = t.type, S = new m(t.memoizedProps, d.context), C = S.state;
            d.updater.enqueueSetState(d, C, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= nr;
            var R = new Error("Simulated error coming from DevTools"), _ = Qu(u);
            t.lanes = mt(t.lanes, _);
            var z = I0(t, Rc(R, t), _);
            XS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var V = i.propTypes;
          V && mo(
            V,
            o,
            // Resolved props
            "prop",
            Vt(i)
          );
        }
      }
      var W;
      ll(i) ? (W = !0, Bm(t)) : W = !1, ld(t, u);
      var Q = t.stateNode, J;
      Q === null ? (Oy(e, t), Zx(t, i, o), F0(t, i, o, u), J = !0) : e === null ? J = XM(t, i, o, u) : J = qM(e, t, i, o, u);
      var De = X0(e, t, i, J, W, u);
      {
        var qe = t.stateNode;
        J && qe.props !== o && (bc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", st(t) || "a component"), bc = !0);
      }
      return De;
    }
    function X0(e, t, i, o, u, d) {
      sw(e, t);
      var m = (t.flags & Ge) !== Ke;
      if (!o && !m)
        return u && $T(t, i, !1), ss(e, t, d);
      var S = t.stateNode;
      Ch.current = t;
      var C;
      if (m && typeof i.getDerivedStateFromError != "function")
        C = null, Gx();
      else {
        xi(t);
        {
          if (Qn(!0), C = S.render(), t.mode & en) {
            Cn(!0);
            try {
              S.render();
            } finally {
              Cn(!1);
            }
          }
          Qn(!1);
        }
        wi();
      }
      return t.flags |= pa, e !== null && m ? iO(e, t, C, d) : Di(e, t, C, d), t.memoizedState = S.state, u && $T(t, i, !0), t.child;
    }
    function cw(e) {
      var t = e.stateNode;
      t.pendingContext ? HT(e, t.pendingContext, t.pendingContext !== t.context) : t.context && HT(e, t.context, !1), qS(e, t.containerInfo);
    }
    function sO(e, t, i) {
      if (cw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, u = t.memoizedState, d = u.element;
      px(e, t), iy(t, o, null, i);
      var m = t.memoizedState;
      t.stateNode;
      var S = m.element;
      if (u.isDehydrated) {
        var C = {
          element: S,
          isDehydrated: !1,
          cache: m.cache,
          pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
          transitions: m.transitions
        }, R = t.updateQueue;
        if (R.baseState = C, t.memoizedState = C, t.flags & kr) {
          var _ = Rc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return fw(e, t, S, i, _);
        } else if (S !== d) {
          var z = Rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return fw(e, t, S, i, z);
        } else {
          fM(t);
          var V = ox(t, null, S, i);
          t.child = V;
          for (var W = V; W; )
            W.flags = W.flags & ~En | ri, W = W.sibling;
        }
      } else {
        if (id(), S === d)
          return ss(e, t, i);
        Di(e, t, S, i);
      }
      return t.child;
    }
    function fw(e, t, i, o, u) {
      return id(), PS(u), t.flags |= kr, Di(e, t, i, o), t.child;
    }
    function uO(e, t, i) {
      yx(t), e === null && NS(t);
      var o = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, m = u.children, S = vS(o, u);
      return S ? m = null : d !== null && vS(o, d) && (t.flags |= Fi), sw(e, t), Di(e, t, m, i), t.child;
    }
    function cO(e, t) {
      return e === null && NS(t), null;
    }
    function fO(e, t, i, o) {
      Oy(e, t);
      var u = t.pendingProps, d = i, m = d._payload, S = d._init, C = S(m);
      t.type = C;
      var R = t.tag = cL(C), _ = Co(C, u), z;
      switch (R) {
        case D:
          return q0(t, C), t.type = C = Td(C), z = Q0(null, t, C, _, o), z;
        case b:
          return t.type = C = DE(C), z = uw(null, t, C, _, o), z;
        case ne:
          return t.type = C = kE(C), z = iw(null, t, C, _, o), z;
        case we: {
          if (t.type !== t.elementType) {
            var V = C.propTypes;
            V && mo(
              V,
              _,
              // Resolved for outer only
              "prop",
              Vt(C)
            );
          }
          return z = aw(
            null,
            t,
            C,
            Co(C.type, _),
            // The inner type can have defaults too
            o
          ), z;
        }
      }
      var W = "";
      throw C !== null && typeof C == "object" && C.$$typeof === ut && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function dO(e, t, i, o, u) {
      Oy(e, t), t.tag = b;
      var d;
      return ll(i) ? (d = !0, Bm(t)) : d = !1, ld(t, u), Zx(t, i, o), F0(t, i, o, u), X0(null, t, i, !0, d, u);
    }
    function pO(e, t, i, o) {
      Oy(e, t);
      var u = t.pendingProps, d;
      {
        var m = ed(t, i, !1);
        d = td(t, m);
      }
      ld(t, o);
      var S, C;
      xi(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var R = Vt(i) || "Unknown";
          $0[R] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), $0[R] = !0);
        }
        t.mode & en && go.recordLegacyContextWarning(t, null), Qn(!0), Ch.current = t, S = pd(null, t, i, u, d, o), C = hd(), Qn(!1);
      }
      if (wi(), t.flags |= pa, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var _ = Vt(i) || "Unknown";
        Th[_] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Th[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var z = Vt(i) || "Unknown";
          Th[z] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Th[z] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var V = !1;
        return ll(i) ? (V = !0, Bm(t)) : V = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, QS(t), qx(t, S), F0(t, i, u, o), X0(null, t, i, !0, V, o);
      } else {
        if (t.tag = D, t.mode & en) {
          Cn(!0);
          try {
            S = pd(null, t, i, u, d, o), C = hd();
          } finally {
            Cn(!1);
          }
        }
        return Ir() && C && _S(t), Di(null, t, S, o), q0(t, i), t.child;
      }
    }
    function q0(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", o = Vr();
          o && (i += `

Check the render method of \`` + o + "`.");
          var u = o || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), G0[u] || (G0[u] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var m = Vt(t) || "Unknown";
          xh[m] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), xh[m] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var S = Vt(t) || "Unknown";
          W0[S] || (v("%s: Function components do not support getDerivedStateFromProps.", S), W0[S] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = Vt(t) || "Unknown";
          Y0[C] || (v("%s: Function components do not support contextType.", C), Y0[C] = !0);
        }
      }
    }
    var Z0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: zt
    };
    function J0(e) {
      return {
        baseLanes: e,
        cachePool: rO(),
        transitions: null
      };
    }
    function hO(e, t) {
      var i = null;
      return {
        baseLanes: mt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function vO(e, t, i, o) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return e0(e, dh);
    }
    function mO(e, t) {
      return Xu(e.childLanes, t);
    }
    function dw(e, t, i) {
      var o = t.pendingProps;
      RL(t) && (t.flags |= Ge);
      var u = So.current, d = !1, m = (t.flags & Ge) !== Ke;
      if (m || vO(u, e) ? (d = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (u = NM(u, Sx)), u = ud(u), iu(t, u), e === null) {
        NS(t);
        var S = t.memoizedState;
        if (S !== null) {
          var C = S.dehydrated;
          if (C !== null)
            return CO(t, C);
        }
        var R = o.children, _ = o.fallback;
        if (d) {
          var z = yO(t, R, _, i), V = t.child;
          return V.memoizedState = J0(i), t.memoizedState = Z0, z;
        } else
          return eE(t, R);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var Q = W.dehydrated;
          if (Q !== null)
            return TO(e, t, m, o, Q, W, i);
        }
        if (d) {
          var J = o.fallback, De = o.children, qe = SO(e, t, De, J, i), We = t.child, Pt = e.child.memoizedState;
          return We.memoizedState = Pt === null ? J0(i) : hO(Pt, i), We.childLanes = mO(e, i), t.memoizedState = Z0, qe;
        } else {
          var Mt = o.children, I = gO(e, t, Mt, i);
          return t.memoizedState = null, I;
        }
      }
    }
    function eE(e, t, i) {
      var o = e.mode, u = {
        mode: "visible",
        children: t
      }, d = tE(u, o);
      return d.return = e, e.child = d, d;
    }
    function yO(e, t, i, o) {
      var u = e.mode, d = e.child, m = {
        mode: "hidden",
        children: t
      }, S, C;
      return (u & Dt) === Qe && d !== null ? (S = d, S.childLanes = ue, S.pendingProps = m, e.mode & Ft && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), C = du(i, u, o, null)) : (S = tE(m, u), C = du(i, u, o, null)), S.return = e, C.return = e, S.sibling = C, e.child = S, C;
    }
    function tE(e, t, i) {
      return pR(e, t, ue, null);
    }
    function pw(e, t) {
      return Oc(e, t);
    }
    function gO(e, t, i, o) {
      var u = e.child, d = u.sibling, m = pw(u, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Dt) === Qe && (m.lanes = o), m.return = t, m.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= ji) : S.push(d);
      }
      return t.child = m, m;
    }
    function SO(e, t, i, o, u) {
      var d = t.mode, m = e.child, S = m.sibling, C = {
        mode: "hidden",
        children: i
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Dt) === Qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== m
      ) {
        var _ = t.child;
        R = _, R.childLanes = ue, R.pendingProps = C, t.mode & Ft && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = m.selfBaseDuration, R.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
      } else
        R = pw(m, C), R.subtreeFlags = m.subtreeFlags & jn;
      var z;
      return S !== null ? z = Oc(S, o) : (z = du(o, d, u, null), z.flags |= En), z.return = t, R.return = t, R.sibling = z, t.child = R, z;
    }
    function My(e, t, i, o) {
      o !== null && PS(o), ad(t, e.child, null, i);
      var u = t.pendingProps, d = u.children, m = eE(t, d);
      return m.flags |= En, t.memoizedState = null, m;
    }
    function EO(e, t, i, o, u) {
      var d = t.mode, m = {
        mode: "visible",
        children: i
      }, S = tE(m, d), C = du(o, d, u, null);
      return C.flags |= En, S.return = t, C.return = t, S.sibling = C, t.child = S, (t.mode & Dt) !== Qe && ad(t, e.child, null, u), C;
    }
    function CO(e, t, i) {
      return (e.mode & Dt) === Qe ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = it) : SS(t) ? e.lanes = _r : e.lanes = li, null;
    }
    function TO(e, t, i, o, u, d, m) {
      if (i)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var I = B0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return My(e, t, m, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var ee = o.children, $ = o.fallback, ve = EO(e, t, ee, $, m), Ne = t.child;
          return Ne.memoizedState = J0(m), t.memoizedState = Z0, ve;
        }
      else {
        if (uM(), (t.mode & Dt) === Qe)
          return My(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (SS(u)) {
          var S, C, R;
          {
            var _ = b_(u);
            S = _.digest, C = _.message, R = _.stack;
          }
          var z;
          C ? z = new Error(C) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var V = B0(z, S, R);
          return My(e, t, m, V);
        }
        var W = si(m, e.childLanes);
        if (To || W) {
          var Q = By();
          if (Q !== null) {
            var J = bp(Q, m);
            if (J !== zt && J !== d.retryLane) {
              d.retryLane = J;
              var De = rn;
              Qi(e, J), xr(Q, e, J, De);
            }
          }
          TE();
          var qe = B0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return My(e, t, m, qe);
        } else if (VT(u)) {
          t.flags |= Ge, t.child = e.child;
          var We = GA.bind(null, e);
          return D_(u, We), null;
        } else {
          dM(t, u, d.treeContext);
          var Pt = o.children, Mt = eE(t, Pt);
          return Mt.flags |= ri, Mt;
        }
      }
    }
    function hw(e, t, i) {
      e.lanes = mt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = mt(o.lanes, t)), YS(e.return, t, i);
    }
    function xO(e, t, i) {
      for (var o = t; o !== null; ) {
        if (o.tag === pe) {
          var u = o.memoizedState;
          u !== null && hw(o, i, e);
        } else if (o.tag === rt)
          hw(o, i, e);
        else if (o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    function wO(e) {
      for (var t = e, i = null; t !== null; ) {
        var o = t.alternate;
        o !== null && sy(o) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function RO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !K0[e])
        if (K0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function bO(e, t) {
      e !== void 0 && !_y[e] && (e !== "collapsed" && e !== "hidden" ? (_y[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_y[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vw(e, t) {
      {
        var i = xt(e), o = !i && typeof pt(e) == "function";
        if (i || o) {
          var u = i ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function DO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (xt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!vw(e[i], i))
              return;
        } else {
          var o = pt(e);
          if (typeof o == "function") {
            var u = o.call(e);
            if (u)
              for (var d = u.next(), m = 0; !d.done; d = u.next()) {
                if (!vw(d.value, m))
                  return;
                m++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function nE(e, t, i, o, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = i, d.tailMode = u);
    }
    function mw(e, t, i) {
      var o = t.pendingProps, u = o.revealOrder, d = o.tail, m = o.children;
      RO(u), bO(d, u), DO(m, u), Di(e, t, m, i);
      var S = So.current, C = e0(S, dh);
      if (C)
        S = t0(S, dh), t.flags |= Ge;
      else {
        var R = e !== null && (e.flags & Ge) !== Ke;
        R && xO(t, t.child, i), S = ud(S);
      }
      if (iu(t, S), (t.mode & Dt) === Qe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var _ = wO(t.child), z;
            _ === null ? (z = t.child, t.child = null) : (z = _.sibling, _.sibling = null), nE(
              t,
              !1,
              // isBackwards
              z,
              _,
              d
            );
            break;
          }
          case "backwards": {
            var V = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var Q = W.alternate;
              if (Q !== null && sy(Q) === null) {
                t.child = W;
                break;
              }
              var J = W.sibling;
              W.sibling = V, V = W, W = J;
            }
            nE(
              t,
              !0,
              // isBackwards
              V,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            nE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kO(e, t, i) {
      qS(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = ad(t, null, o, i) : Di(e, t, o, i), t.child;
    }
    var yw = !1;
    function _O(e, t, i) {
      var o = t.type, u = o._context, d = t.pendingProps, m = t.memoizedProps, S = d.value;
      {
        "value" in d || yw || (yw = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && mo(C, d, "prop", "Context.Provider");
      }
      if (ux(t, u, S), m !== null) {
        var R = m.value;
        if (de(R, S)) {
          if (m.children === d.children && !jm())
            return ss(e, t, i);
        } else
          RM(t, u, i);
      }
      var _ = d.children;
      return Di(e, t, _, i), t.child;
    }
    var gw = !1;
    function MO(e, t, i) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (gw || (gw = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ld(t, i);
      var m = or(o);
      xi(t);
      var S;
      return Ch.current = t, Qn(!0), S = d(m), Qn(!1), wi(), t.flags |= pa, Di(e, t, S, i), t.child;
    }
    function wh() {
      To = !0;
    }
    function Oy(e, t) {
      (t.mode & Dt) === Qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function ss(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), Gx(), Vh(t.lanes), si(i, t.childLanes) ? (xM(e, t), t.child) : null;
    }
    function OO(e, t, i) {
      {
        var o = t.return;
        if (o === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === o.child)
          o.child = i;
        else {
          var u = o.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = i;
        }
        var d = o.deletions;
        return d === null ? (o.deletions = [e], o.flags |= ji) : d.push(e), i.flags |= En, i;
      }
    }
    function rE(e, t) {
      var i = e.lanes;
      return !!si(i, t);
    }
    function AO(e, t, i) {
      switch (t.tag) {
        case M:
          cw(t), t.stateNode, id();
          break;
        case F:
          yx(t);
          break;
        case b: {
          var o = t.type;
          ll(o) && Bm(t);
          break;
        }
        case A:
          qS(t, t.stateNode.containerInfo);
          break;
        case ae: {
          var u = t.memoizedProps.value, d = t.type._context;
          ux(t, d, u);
          break;
        }
        case oe:
          {
            var m = si(i, t.childLanes);
            m && (t.flags |= At);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case pe: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return iu(t, ud(So.current)), t.flags |= Ge, null;
            var R = t.child, _ = R.childLanes;
            if (si(i, _))
              return dw(e, t, i);
            iu(t, ud(So.current));
            var z = ss(e, t, i);
            return z !== null ? z.sibling : null;
          } else
            iu(t, ud(So.current));
          break;
        }
        case rt: {
          var V = (e.flags & Ge) !== Ke, W = si(i, t.childLanes);
          if (V) {
            if (W)
              return mw(e, t, i);
            t.flags |= Ge;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), iu(t, So.current), W)
            break;
          return null;
        }
        case ze:
        case yt:
          return t.lanes = ue, lw(e, t, i);
      }
      return ss(e, t, i);
    }
    function Sw(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return OO(e, t, LE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, u = t.pendingProps;
        if (o !== u || jm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          To = !0;
        else {
          var d = rE(e, i);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ge) === Ke)
            return To = !1, AO(e, t, i);
          (e.flags & nf) !== Ke ? To = !0 : To = !1;
        }
      } else if (To = !1, Ir() && rM(t)) {
        var m = t.index, S = iM();
        GT(t, S, m);
      }
      switch (t.lanes = ue, t.tag) {
        case k:
          return pO(e, t, t.type, i);
        case Ee: {
          var C = t.elementType;
          return fO(e, t, C, i);
        }
        case D: {
          var R = t.type, _ = t.pendingProps, z = t.elementType === R ? _ : Co(R, _);
          return Q0(e, t, R, z, i);
        }
        case b: {
          var V = t.type, W = t.pendingProps, Q = t.elementType === V ? W : Co(V, W);
          return uw(e, t, V, Q, i);
        }
        case M:
          return sO(e, t, i);
        case F:
          return uO(e, t, i);
        case B:
          return cO(e, t);
        case pe:
          return dw(e, t, i);
        case A:
          return kO(e, t, i);
        case ne: {
          var J = t.type, De = t.pendingProps, qe = t.elementType === J ? De : Co(J, De);
          return iw(e, t, J, qe, i);
        }
        case X:
          return aO(e, t, i);
        case q:
          return oO(e, t, i);
        case oe:
          return lO(e, t, i);
        case ae:
          return _O(e, t, i);
        case ie:
          return MO(e, t, i);
        case we: {
          var We = t.type, Pt = t.pendingProps, Mt = Co(We, Pt);
          if (t.type !== t.elementType) {
            var I = We.propTypes;
            I && mo(
              I,
              Mt,
              // Resolved for outer only
              "prop",
              Vt(We)
            );
          }
          return Mt = Co(We.type, Mt), aw(e, t, We, Mt, i);
        }
        case ge:
          return ow(e, t, t.type, t.pendingProps, i);
        case Ue: {
          var ee = t.type, $ = t.pendingProps, ve = t.elementType === ee ? $ : Co(ee, $);
          return dO(e, t, ee, ve, i);
        }
        case rt:
          return mw(e, t, i);
        case tt:
          break;
        case ze:
          return lw(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function vd(e) {
      e.flags |= At;
    }
    function Ew(e) {
      e.flags |= wn, e.flags |= Us;
    }
    var Cw, iE, Tw, xw;
    Cw = function(e, t, i, o) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === F || u.tag === B)
          e_(e, u.stateNode);
        else if (u.tag !== A) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, iE = function(e, t) {
    }, Tw = function(e, t, i, o, u) {
      var d = e.memoizedProps;
      if (d !== o) {
        var m = t.stateNode, S = ZS(), C = n_(m, i, d, o, u, S);
        t.updateQueue = C, C && vd(t);
      }
    }, xw = function(e, t, i, o) {
      i !== o && vd(t);
    };
    function Rh(e, t) {
      if (!Ir())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, o = null; i !== null; )
              i.alternate !== null && (o = i), i = i.sibling;
            o === null ? e.tail = null : o.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = ue, o = Ke;
      if (t) {
        if ((e.mode & Ft) !== Qe) {
          for (var C = e.selfBaseDuration, R = e.child; R !== null; )
            i = mt(i, mt(R.lanes, R.childLanes)), o |= R.subtreeFlags & jn, o |= R.flags & jn, C += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = C;
        } else
          for (var _ = e.child; _ !== null; )
            i = mt(i, mt(_.lanes, _.childLanes)), o |= _.subtreeFlags & jn, o |= _.flags & jn, _.return = e, _ = _.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & Ft) !== Qe) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, m = e.child; m !== null; )
            i = mt(i, mt(m.lanes, m.childLanes)), o |= m.subtreeFlags, o |= m.flags, u += m.actualDuration, d += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            i = mt(i, mt(S.lanes, S.childLanes)), o |= S.subtreeFlags, o |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = i, t;
    }
    function LO(e, t, i) {
      if (yM() && (t.mode & Dt) !== Qe && (t.flags & Ge) === Ke)
        return ex(t), id(), t.flags |= kr | Nu | nr, !1;
      var o = Wm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (vM(t), Yr(t), (t.mode & Ft) !== Qe) {
            var u = i !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (id(), (t.flags & Ge) === Ke && (t.memoizedState = null), t.flags |= At, Yr(t), (t.mode & Ft) !== Qe) {
            var m = i !== null;
            if (m) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return tx(), !0;
    }
    function ww(e, t, i) {
      var o = t.pendingProps;
      switch (MS(t), t.tag) {
        case k:
        case Ee:
        case ge:
        case D:
        case ne:
        case X:
        case q:
        case oe:
        case ie:
        case we:
          return Yr(t), null;
        case b: {
          var u = t.type;
          return ll(u) && Fm(t), Yr(t), null;
        }
        case M: {
          var d = t.stateNode;
          if (sd(t), bS(t), r0(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var m = Wm(t);
            if (m)
              vd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== Ke) && (t.flags |= Xn, tx());
            }
          }
          return iE(e, t), Yr(t), null;
        }
        case F: {
          JS(t);
          var C = mx(), R = t.type;
          if (e !== null && t.stateNode != null)
            Tw(e, t, R, o, C), e.ref !== t.ref && Ew(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var _ = ZS(), z = Wm(t);
            if (z)
              pM(t, C, _) && vd(t);
            else {
              var V = Jk(R, o, C, _, t);
              Cw(V, t, !1, !1), t.stateNode = V, t_(V, R, o, C) && vd(t);
            }
            t.ref !== null && Ew(t);
          }
          return Yr(t), null;
        }
        case B: {
          var W = o;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            xw(e, t, Q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = mx(), De = ZS(), qe = Wm(t);
            qe ? hM(t) && vd(t) : t.stateNode = r_(W, J, De, t);
          }
          return Yr(t), null;
        }
        case pe: {
          cd(t);
          var We = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = LO(e, t, We);
            if (!Pt)
              return t.flags & nr ? t : null;
          }
          if ((t.flags & Ge) !== Ke)
            return t.lanes = i, (t.mode & Ft) !== Qe && k0(t), t;
          var Mt = We !== null, I = e !== null && e.memoizedState !== null;
          if (Mt !== I && Mt) {
            var ee = t.child;
            if (ee.flags |= zn, (t.mode & Dt) !== Qe) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              $ || e0(So.current, Sx) ? NA() : TE();
            }
          }
          var ve = t.updateQueue;
          if (ve !== null && (t.flags |= At), Yr(t), (t.mode & Ft) !== Qe && Mt) {
            var Ne = t.child;
            Ne !== null && (t.treeBaseDuration -= Ne.treeBaseDuration);
          }
          return null;
        }
        case A:
          return sd(t), iE(e, t), e === null && X_(t.stateNode.containerInfo), Yr(t), null;
        case ae:
          var _e = t.type._context;
          return $S(_e, t), Yr(t), null;
        case Ue: {
          var ot = t.type;
          return ll(ot) && Fm(t), Yr(t), null;
        }
        case rt: {
          cd(t);
          var ft = t.memoizedState;
          if (ft === null)
            return Yr(t), null;
          var nn = (t.flags & Ge) !== Ke, It = ft.rendering;
          if (It === null)
            if (nn)
              Rh(ft, !1);
            else {
              var Jn = VA() && (e === null || (e.flags & Ge) === Ke);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var Yn = sy($t);
                  if (Yn !== null) {
                    nn = !0, t.flags |= Ge, Rh(ft, !1);
                    var vi = Yn.updateQueue;
                    return vi !== null && (t.updateQueue = vi, t.flags |= At), t.subtreeFlags = Ke, wM(t, i), iu(t, t0(So.current, dh)), t.child;
                  }
                  $t = $t.sibling;
                }
              ft.tail !== null && qn() > Yw() && (t.flags |= Ge, nn = !0, Rh(ft, !1), t.lanes = yp);
            }
          else {
            if (!nn) {
              var Xr = sy(It);
              if (Xr !== null) {
                t.flags |= Ge, nn = !0;
                var Ea = Xr.updateQueue;
                if (Ea !== null && (t.updateQueue = Ea, t.flags |= At), Rh(ft, !0), ft.tail === null && ft.tailMode === "hidden" && !It.alternate && !Ir())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              qn() * 2 - ft.renderingStartTime > Yw() && i !== li && (t.flags |= Ge, nn = !0, Rh(ft, !1), t.lanes = yp);
            }
            if (ft.isBackwards)
              It.sibling = t.child, t.child = It;
            else {
              var Mi = ft.last;
              Mi !== null ? Mi.sibling = It : t.child = It, ft.last = It;
            }
          }
          if (ft.tail !== null) {
            var Oi = ft.tail;
            ft.rendering = Oi, ft.tail = Oi.sibling, ft.renderingStartTime = qn(), Oi.sibling = null;
            var mi = So.current;
            return nn ? mi = t0(mi, dh) : mi = ud(mi), iu(t, mi), Oi;
          }
          return Yr(t), null;
        }
        case tt:
          break;
        case ze:
        case yt: {
          CE(t);
          var ps = t.memoizedState, xd = ps !== null;
          if (e !== null) {
            var Bh = e.memoizedState, vl = Bh !== null;
            vl !== xd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ye && (t.flags |= zn);
          }
          return !xd || (t.mode & Dt) === Qe ? Yr(t) : si(hl, li) && (Yr(t), t.subtreeFlags & (En | At) && (t.flags |= zn)), null;
        }
        case ht:
          return null;
        case vt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function NO(e, t, i) {
      switch (MS(t), t.tag) {
        case b: {
          var o = t.type;
          ll(o) && Fm(t);
          var u = t.flags;
          return u & nr ? (t.flags = u & ~nr | Ge, (t.mode & Ft) !== Qe && k0(t), t) : null;
        }
        case M: {
          t.stateNode, sd(t), bS(t), r0();
          var d = t.flags;
          return (d & nr) !== Ke && (d & Ge) === Ke ? (t.flags = d & ~nr | Ge, t) : null;
        }
        case F:
          return JS(t), null;
        case pe: {
          cd(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            id();
          }
          var S = t.flags;
          return S & nr ? (t.flags = S & ~nr | Ge, (t.mode & Ft) !== Qe && k0(t), t) : null;
        }
        case rt:
          return cd(t), null;
        case A:
          return sd(t), null;
        case ae:
          var C = t.type._context;
          return $S(C, t), null;
        case ze:
        case yt:
          return CE(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function Rw(e, t, i) {
      switch (MS(t), t.tag) {
        case b: {
          var o = t.type.childContextTypes;
          o != null && Fm(t);
          break;
        }
        case M: {
          t.stateNode, sd(t), bS(t), r0();
          break;
        }
        case F: {
          JS(t);
          break;
        }
        case A:
          sd(t);
          break;
        case pe:
          cd(t);
          break;
        case rt:
          cd(t);
          break;
        case ae:
          var u = t.type._context;
          $S(u, t);
          break;
        case ze:
        case yt:
          CE(t);
          break;
      }
    }
    var bw = null;
    bw = /* @__PURE__ */ new Set();
    var Ay = !1, Wr = !1, PO = typeof WeakSet == "function" ? WeakSet : Set, Be = null, md = null, yd = null;
    function VO(e) {
      Io(null, function() {
        throw e;
      }), Lu();
    }
    var UO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ft)
        try {
          dl(), t.componentWillUnmount();
        } finally {
          fl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Dw(e, t) {
      try {
        lu(yr, e);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function aE(e, t, i) {
      try {
        UO(e, i);
      } catch (o) {
        pn(e, t, o);
      }
    }
    function zO(e, t, i) {
      try {
        i.componentDidMount();
      } catch (o) {
        pn(e, t, o);
      }
    }
    function kw(e, t) {
      try {
        Mw(e);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function gd(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var o;
          try {
            if (nt && wt && e.mode & Ft)
              try {
                dl(), o = i(null);
              } finally {
                fl(e);
              }
            else
              o = i(null);
          } catch (u) {
            pn(e, t, u);
          }
          typeof o == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          i.current = null;
    }
    function Ly(e, t, i) {
      try {
        i();
      } catch (o) {
        pn(e, t, o);
      }
    }
    var _w = !1;
    function jO(e, t) {
      qk(e.containerInfo), Be = t, FO();
      var i = _w;
      return _w = !1, i;
    }
    function FO() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        (e.subtreeFlags & Yo) !== Ke && t !== null ? (t.return = e, Be = t) : BO();
      }
    }
    function BO() {
      for (; Be !== null; ) {
        var e = Be;
        qt(e);
        try {
          HO(e);
        } catch (i) {
          pn(e, e.return, i);
        }
        dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function HO(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Xn) !== Ke) {
        switch (qt(e), e.tag) {
          case D:
          case ne:
          case ge:
            break;
          case b: {
            if (t !== null) {
              var o = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !bc && (d.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(e) || "instance"), d.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(e) || "instance"));
              var m = d.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Co(e.type, o), u);
              {
                var S = bw;
                m === void 0 && !S.has(e.type) && (S.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", st(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case M: {
            {
              var C = e.stateNode;
              T_(C.containerInfo);
            }
            break;
          }
          case F:
          case B:
          case A:
          case Ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        dn();
      }
    }
    function xo(e, t, i) {
      var o = t.updateQueue, u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next, m = d;
        do {
          if ((m.tag & e) === e) {
            var S = m.destroy;
            m.destroy = void 0, S !== void 0 && ((e & $r) !== Xi ? uo(t) : (e & yr) !== Xi && Vu(t), (e & sl) !== Xi && zh(!0), Ly(t, i, S), (e & sl) !== Xi && zh(!1), (e & $r) !== Xi ? Qo() : (e & yr) !== Xi && vp());
          }
          m = m.next;
        } while (m !== d);
      }
    }
    function lu(e, t) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var u = o.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & $r) !== Xi ? hp(t) : (e & yr) !== Xi && uf(t);
            var m = d.create;
            (e & sl) !== Xi && zh(!0), d.destroy = m(), (e & sl) !== Xi && zh(!1), (e & $r) !== Xi ? zv() : (e & yr) !== Xi && jv();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var C = void 0;
                (d.tag & yr) !== Ke ? C = "useLayoutEffect" : (d.tag & sl) !== Ke ? C = "useInsertionEffect" : C = "useEffect";
                var R = void 0;
                S === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? R = `

It looks like you wrote ` + C + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + C + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + S, v("%s must not return anything besides a function, which is used for clean-up.%s", C, R);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function IO(e, t) {
      if ((t.flags & At) !== Ke)
        switch (t.tag) {
          case oe: {
            var i = t.stateNode.passiveEffectDuration, o = t.memoizedProps, u = o.id, d = o.onPostCommit, m = Yx(), S = t.alternate === null ? "mount" : "update";
            $x() && (S = "nested-update"), typeof d == "function" && d(u, S, i, m);
            var C = t.return;
            e: for (; C !== null; ) {
              switch (C.tag) {
                case M:
                  var R = C.stateNode;
                  R.passiveEffectDuration += i;
                  break e;
                case oe:
                  var _ = C.stateNode;
                  _.passiveEffectDuration += i;
                  break e;
              }
              C = C.return;
            }
            break;
          }
        }
    }
    function $O(e, t, i, o) {
      if ((i.flags & Go) !== Ke)
        switch (i.tag) {
          case D:
          case ne:
          case ge: {
            if (!Wr)
              if (i.mode & Ft)
                try {
                  dl(), lu(yr | mr, i);
                } finally {
                  fl(i);
                }
              else
                lu(yr | mr, i);
            break;
          }
          case b: {
            var u = i.stateNode;
            if (i.flags & At && !Wr)
              if (t === null)
                if (i.type === i.elementType && !bc && (u.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(i) || "instance"), u.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(i) || "instance")), i.mode & Ft)
                  try {
                    dl(), u.componentDidMount();
                  } finally {
                    fl(i);
                  }
                else
                  u.componentDidMount();
              else {
                var d = i.elementType === i.type ? t.memoizedProps : Co(i.type, t.memoizedProps), m = t.memoizedState;
                if (i.type === i.elementType && !bc && (u.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(i) || "instance"), u.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(i) || "instance")), i.mode & Ft)
                  try {
                    dl(), u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    fl(i);
                  }
                else
                  u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
              }
            var S = i.updateQueue;
            S !== null && (i.type === i.elementType && !bc && (u.props !== i.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(i) || "instance"), u.state !== i.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(i) || "instance")), vx(i, S, u));
            break;
          }
          case M: {
            var C = i.updateQueue;
            if (C !== null) {
              var R = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case F:
                    R = i.child.stateNode;
                    break;
                  case b:
                    R = i.child.stateNode;
                    break;
                }
              vx(i, C, R);
            }
            break;
          }
          case F: {
            var _ = i.stateNode;
            if (t === null && i.flags & At) {
              var z = i.type, V = i.memoizedProps;
              s_(_, z, V);
            }
            break;
          }
          case B:
            break;
          case A:
            break;
          case oe: {
            {
              var W = i.memoizedProps, Q = W.onCommit, J = W.onRender, De = i.stateNode.effectDuration, qe = Yx(), We = t === null ? "mount" : "update";
              $x() && (We = "nested-update"), typeof J == "function" && J(i.memoizedProps.id, We, i.actualDuration, i.treeBaseDuration, i.actualStartTime, qe);
              {
                typeof Q == "function" && Q(i.memoizedProps.id, We, De, qe), BA(i);
                var Pt = i.return;
                e: for (; Pt !== null; ) {
                  switch (Pt.tag) {
                    case M:
                      var Mt = Pt.stateNode;
                      Mt.effectDuration += De;
                      break e;
                    case oe:
                      var I = Pt.stateNode;
                      I.effectDuration += De;
                      break e;
                  }
                  Pt = Pt.return;
                }
              }
            }
            break;
          }
          case pe: {
            ZO(e, i);
            break;
          }
          case rt:
          case Ue:
          case tt:
          case ze:
          case yt:
          case vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || i.flags & wn && Mw(i);
    }
    function YO(e) {
      switch (e.tag) {
        case D:
        case ne:
        case ge: {
          if (e.mode & Ft)
            try {
              dl(), Dw(e, e.return);
            } finally {
              fl(e);
            }
          else
            Dw(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && zO(e, e.return, t), kw(e, e.return);
          break;
        }
        case F: {
          kw(e, e.return);
          break;
        }
      }
    }
    function WO(e, t) {
      for (var i = null, o = e; ; ) {
        if (o.tag === F) {
          if (i === null) {
            i = o;
            try {
              var u = o.stateNode;
              t ? g_(u) : E_(o.stateNode, o.memoizedProps);
            } catch (m) {
              pn(e, e.return, m);
            }
          }
        } else if (o.tag === B) {
          if (i === null)
            try {
              var d = o.stateNode;
              t ? S_(d) : C_(d, o.memoizedProps);
            } catch (m) {
              pn(e, e.return, m);
            }
        } else if (!((o.tag === ze || o.tag === yt) && o.memoizedState !== null && o !== e)) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          i === o && (i = null), o = o.return;
        }
        i === o && (i = null), o.sibling.return = o.return, o = o.sibling;
      }
    }
    function Mw(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, o;
        if (e.tag === F ? o = i : o = i, typeof t == "function") {
          var u;
          if (e.mode & Ft)
            try {
              dl(), u = t(o);
            } finally {
              fl(e);
            }
          else
            u = t(o);
          typeof u == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", st(e)), t.current = o;
      }
    }
    function GO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Ow(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ow(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var i = e.stateNode;
          i !== null && J_(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function KO(e) {
      for (var t = e.return; t !== null; ) {
        if (Aw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Aw(e) {
      return e.tag === F || e.tag === M || e.tag === A;
    }
    function Lw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Aw(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== B && t.tag !== Te; ) {
          if (t.flags & En || t.child === null || t.tag === A)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & En))
          return t.stateNode;
      }
    }
    function QO(e) {
      var t = KO(e);
      switch (t.tag) {
        case F: {
          var i = t.stateNode;
          t.flags & Fi && (PT(i), t.flags &= ~Fi);
          var o = Lw(e);
          lE(e, o, i);
          break;
        }
        case M:
        case A: {
          var u = t.stateNode.containerInfo, d = Lw(e);
          oE(e, d, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function oE(e, t, i) {
      var o = e.tag, u = o === F || o === B;
      if (u) {
        var d = e.stateNode;
        t ? h_(i, d, t) : d_(i, d);
      } else if (o !== A) {
        var m = e.child;
        if (m !== null) {
          oE(m, t, i);
          for (var S = m.sibling; S !== null; )
            oE(S, t, i), S = S.sibling;
        }
      }
    }
    function lE(e, t, i) {
      var o = e.tag, u = o === F || o === B;
      if (u) {
        var d = e.stateNode;
        t ? p_(i, d, t) : f_(i, d);
      } else if (o !== A) {
        var m = e.child;
        if (m !== null) {
          lE(m, t, i);
          for (var S = m.sibling; S !== null; )
            lE(S, t, i), S = S.sibling;
        }
      }
    }
    var Gr = null, wo = !1;
    function XO(e, t, i) {
      {
        var o = t;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case F: {
              Gr = o.stateNode, wo = !1;
              break e;
            }
            case M: {
              Gr = o.stateNode.containerInfo, wo = !0;
              break e;
            }
            case A: {
              Gr = o.stateNode.containerInfo, wo = !0;
              break e;
            }
          }
          o = o.return;
        }
        if (Gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Nw(e, t, i), Gr = null, wo = !1;
      }
      GO(i);
    }
    function su(e, t, i) {
      for (var o = i.child; o !== null; )
        Nw(e, t, o), o = o.sibling;
    }
    function Nw(e, t, i) {
      switch (fp(i), i.tag) {
        case F:
          Wr || gd(i, t);
        // eslint-disable-next-line-no-fallthrough
        case B: {
          {
            var o = Gr, u = wo;
            Gr = null, su(e, t, i), Gr = o, wo = u, Gr !== null && (wo ? m_(Gr, i.stateNode) : v_(Gr, i.stateNode));
          }
          return;
        }
        case Te: {
          Gr !== null && (wo ? y_(Gr, i.stateNode) : gS(Gr, i.stateNode));
          return;
        }
        case A: {
          {
            var d = Gr, m = wo;
            Gr = i.stateNode.containerInfo, wo = !0, su(e, t, i), Gr = d, wo = m;
          }
          return;
        }
        case D:
        case ne:
        case we:
        case ge: {
          if (!Wr) {
            var S = i.updateQueue;
            if (S !== null) {
              var C = S.lastEffect;
              if (C !== null) {
                var R = C.next, _ = R;
                do {
                  var z = _, V = z.destroy, W = z.tag;
                  V !== void 0 && ((W & sl) !== Xi ? Ly(i, t, V) : (W & yr) !== Xi && (Vu(i), i.mode & Ft ? (dl(), Ly(i, t, V), fl(i)) : Ly(i, t, V), vp())), _ = _.next;
                } while (_ !== R);
              }
            }
          }
          su(e, t, i);
          return;
        }
        case b: {
          if (!Wr) {
            gd(i, t);
            var Q = i.stateNode;
            typeof Q.componentWillUnmount == "function" && aE(i, t, Q);
          }
          su(e, t, i);
          return;
        }
        case tt: {
          su(e, t, i);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            i.mode & Dt
          ) {
            var J = Wr;
            Wr = J || i.memoizedState !== null, su(e, t, i), Wr = J;
          } else
            su(e, t, i);
          break;
        }
        default: {
          su(e, t, i);
          return;
        }
      }
    }
    function qO(e) {
      e.memoizedState;
    }
    function ZO(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var o = t.alternate;
        if (o !== null) {
          var u = o.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && V_(d);
          }
        }
      }
    }
    function Pw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new PO()), t.forEach(function(o) {
          var u = KA.bind(null, e, o);
          if (!i.has(o)) {
            if (i.add(o), oi)
              if (md !== null && yd !== null)
                Uh(yd, md);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(u, u);
          }
        });
      }
    }
    function JO(e, t, i) {
      md = i, yd = e, qt(t), Vw(t, e), qt(t), md = null, yd = null;
    }
    function Ro(e, t, i) {
      var o = t.deletions;
      if (o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u];
          try {
            XO(e, t, d);
          } catch (C) {
            pn(d, t, C);
          }
        }
      var m = Vo();
      if (t.subtreeFlags & Wo)
        for (var S = t.child; S !== null; )
          qt(S), Vw(S, e), S = S.sibling;
      qt(m);
    }
    function Vw(e, t, i) {
      var o = e.alternate, u = e.flags;
      switch (e.tag) {
        case D:
        case ne:
        case we:
        case ge: {
          if (Ro(t, e), pl(e), u & At) {
            try {
              xo(sl | mr, e, e.return), lu(sl | mr, e);
            } catch (ot) {
              pn(e, e.return, ot);
            }
            if (e.mode & Ft) {
              try {
                dl(), xo(yr | mr, e, e.return);
              } catch (ot) {
                pn(e, e.return, ot);
              }
              fl(e);
            } else
              try {
                xo(yr | mr, e, e.return);
              } catch (ot) {
                pn(e, e.return, ot);
              }
          }
          return;
        }
        case b: {
          Ro(t, e), pl(e), u & wn && o !== null && gd(o, o.return);
          return;
        }
        case F: {
          Ro(t, e), pl(e), u & wn && o !== null && gd(o, o.return);
          {
            if (e.flags & Fi) {
              var d = e.stateNode;
              try {
                PT(d);
              } catch (ot) {
                pn(e, e.return, ot);
              }
            }
            if (u & At) {
              var m = e.stateNode;
              if (m != null) {
                var S = e.memoizedProps, C = o !== null ? o.memoizedProps : S, R = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    u_(m, _, R, C, S, e);
                  } catch (ot) {
                    pn(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case B: {
          if (Ro(t, e), pl(e), u & At) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, V = e.memoizedProps, W = o !== null ? o.memoizedProps : V;
            try {
              c_(z, W, V);
            } catch (ot) {
              pn(e, e.return, ot);
            }
          }
          return;
        }
        case M: {
          if (Ro(t, e), pl(e), u & At && o !== null) {
            var Q = o.memoizedState;
            if (Q.isDehydrated)
              try {
                P_(t.containerInfo);
              } catch (ot) {
                pn(e, e.return, ot);
              }
          }
          return;
        }
        case A: {
          Ro(t, e), pl(e);
          return;
        }
        case pe: {
          Ro(t, e), pl(e);
          var J = e.child;
          if (J.flags & zn) {
            var De = J.stateNode, qe = J.memoizedState, We = qe !== null;
            if (De.isHidden = We, We) {
              var Pt = J.alternate !== null && J.alternate.memoizedState !== null;
              Pt || LA();
            }
          }
          if (u & At) {
            try {
              qO(e);
            } catch (ot) {
              pn(e, e.return, ot);
            }
            Pw(e);
          }
          return;
        }
        case ze: {
          var Mt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var I = Wr;
            Wr = I || Mt, Ro(t, e), Wr = I;
          } else
            Ro(t, e);
          if (pl(e), u & zn) {
            var ee = e.stateNode, $ = e.memoizedState, ve = $ !== null, Ne = e;
            if (ee.isHidden = ve, ve && !Mt && (Ne.mode & Dt) !== Qe) {
              Be = Ne;
              for (var _e = Ne.child; _e !== null; )
                Be = _e, tA(_e), _e = _e.sibling;
            }
            WO(Ne, ve);
          }
          return;
        }
        case rt: {
          Ro(t, e), pl(e), u & At && Pw(e);
          return;
        }
        case tt:
          return;
        default: {
          Ro(t, e), pl(e);
          return;
        }
      }
    }
    function pl(e) {
      var t = e.flags;
      if (t & En) {
        try {
          QO(e);
        } catch (i) {
          pn(e, e.return, i);
        }
        e.flags &= ~En;
      }
      t & ri && (e.flags &= ~ri);
    }
    function eA(e, t, i) {
      md = i, yd = t, Be = e, Uw(e, t, i), md = null, yd = null;
    }
    function Uw(e, t, i) {
      for (var o = (e.mode & Dt) !== Qe; Be !== null; ) {
        var u = Be, d = u.child;
        if (u.tag === ze && o) {
          var m = u.memoizedState !== null, S = m || Ay;
          if (S) {
            sE(e, t, i);
            continue;
          } else {
            var C = u.alternate, R = C !== null && C.memoizedState !== null, _ = R || Wr, z = Ay, V = Wr;
            Ay = S, Wr = _, Wr && !V && (Be = u, nA(u));
            for (var W = d; W !== null; )
              Be = W, Uw(
                W,
                // New root; bubble back up to here and stop.
                t,
                i
              ), W = W.sibling;
            Be = u, Ay = z, Wr = V, sE(e, t, i);
            continue;
          }
        }
        (u.subtreeFlags & Go) !== Ke && d !== null ? (d.return = u, Be = d) : sE(e, t, i);
      }
    }
    function sE(e, t, i) {
      for (; Be !== null; ) {
        var o = Be;
        if ((o.flags & Go) !== Ke) {
          var u = o.alternate;
          qt(o);
          try {
            $O(t, u, o, i);
          } catch (m) {
            pn(o, o.return, m);
          }
          dn();
        }
        if (o === e) {
          Be = null;
          return;
        }
        var d = o.sibling;
        if (d !== null) {
          d.return = o.return, Be = d;
          return;
        }
        Be = o.return;
      }
    }
    function tA(e) {
      for (; Be !== null; ) {
        var t = Be, i = t.child;
        switch (t.tag) {
          case D:
          case ne:
          case we:
          case ge: {
            if (t.mode & Ft)
              try {
                dl(), xo(yr, t, t.return);
              } finally {
                fl(t);
              }
            else
              xo(yr, t, t.return);
            break;
          }
          case b: {
            gd(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && aE(t, t.return, o);
            break;
          }
          case F: {
            gd(t, t.return);
            break;
          }
          case ze: {
            var u = t.memoizedState !== null;
            if (u) {
              zw(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Be = i) : zw(e);
      }
    }
    function zw(e) {
      for (; Be !== null; ) {
        var t = Be;
        if (t === e) {
          Be = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Be = i;
          return;
        }
        Be = t.return;
      }
    }
    function nA(e) {
      for (; Be !== null; ) {
        var t = Be, i = t.child;
        if (t.tag === ze) {
          var o = t.memoizedState !== null;
          if (o) {
            jw(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Be = i) : jw(e);
      }
    }
    function jw(e) {
      for (; Be !== null; ) {
        var t = Be;
        qt(t);
        try {
          YO(t);
        } catch (o) {
          pn(t, t.return, o);
        }
        if (dn(), t === e) {
          Be = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Be = i;
          return;
        }
        Be = t.return;
      }
    }
    function rA(e, t, i, o) {
      Be = t, iA(t, e, i, o);
    }
    function iA(e, t, i, o) {
      for (; Be !== null; ) {
        var u = Be, d = u.child;
        (u.subtreeFlags & lo) !== Ke && d !== null ? (d.return = u, Be = d) : aA(e, t, i, o);
      }
    }
    function aA(e, t, i, o) {
      for (; Be !== null; ) {
        var u = Be;
        if ((u.flags & ni) !== Ke) {
          qt(u);
          try {
            oA(t, u, i, o);
          } catch (m) {
            pn(u, u.return, m);
          }
          dn();
        }
        if (u === e) {
          Be = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Be = d;
          return;
        }
        Be = u.return;
      }
    }
    function oA(e, t, i, o) {
      switch (t.tag) {
        case D:
        case ne:
        case ge: {
          if (t.mode & Ft) {
            D0();
            try {
              lu($r | mr, t);
            } finally {
              b0(t);
            }
          } else
            lu($r | mr, t);
          break;
        }
      }
    }
    function lA(e) {
      Be = e, sA();
    }
    function sA() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        if ((Be.flags & ji) !== Ke) {
          var i = e.deletions;
          if (i !== null) {
            for (var o = 0; o < i.length; o++) {
              var u = i[o];
              Be = u, fA(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var m = d.child;
                if (m !== null) {
                  d.child = null;
                  do {
                    var S = m.sibling;
                    m.sibling = null, m = S;
                  } while (m !== null);
                }
              }
            }
            Be = e;
          }
        }
        (e.subtreeFlags & lo) !== Ke && t !== null ? (t.return = e, Be = t) : uA();
      }
    }
    function uA() {
      for (; Be !== null; ) {
        var e = Be;
        (e.flags & ni) !== Ke && (qt(e), cA(e), dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function cA(e) {
      switch (e.tag) {
        case D:
        case ne:
        case ge: {
          e.mode & Ft ? (D0(), xo($r | mr, e, e.return), b0(e)) : xo($r | mr, e, e.return);
          break;
        }
      }
    }
    function fA(e, t) {
      for (; Be !== null; ) {
        var i = Be;
        qt(i), pA(i, t), dn();
        var o = i.child;
        o !== null ? (o.return = i, Be = o) : dA(e);
      }
    }
    function dA(e) {
      for (; Be !== null; ) {
        var t = Be, i = t.sibling, o = t.return;
        if (Ow(t), t === e) {
          Be = null;
          return;
        }
        if (i !== null) {
          i.return = o, Be = i;
          return;
        }
        Be = o;
      }
    }
    function pA(e, t) {
      switch (e.tag) {
        case D:
        case ne:
        case ge: {
          e.mode & Ft ? (D0(), xo($r, e, t), b0(e)) : xo($r, e, t);
          break;
        }
      }
    }
    function hA(e) {
      switch (e.tag) {
        case D:
        case ne:
        case ge: {
          try {
            lu(yr | mr, e);
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
      }
    }
    function vA(e) {
      switch (e.tag) {
        case D:
        case ne:
        case ge: {
          try {
            lu($r | mr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function mA(e) {
      switch (e.tag) {
        case D:
        case ne:
        case ge: {
          try {
            xo(yr | mr, e, e.return);
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && aE(e, e.return, t);
          break;
        }
      }
    }
    function yA(e) {
      switch (e.tag) {
        case D:
        case ne:
        case ge:
          try {
            xo($r | mr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var bh = Symbol.for;
      bh("selector.component"), bh("selector.has_pseudo_class"), bh("selector.role"), bh("selector.test_id"), bh("selector.text");
    }
    var gA = [];
    function SA() {
      gA.forEach(function(e) {
        return e();
      });
    }
    var EA = c.ReactCurrentActQueue;
    function CA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function Fw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && EA.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var TA = Math.ceil, uE = c.ReactCurrentDispatcher, cE = c.ReactCurrentOwner, Kr = c.ReactCurrentBatchConfig, bo = c.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), Bw = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Ka = (
      /*                */
      4
    ), us = 0, Dh = 1, Dc = 2, Ny = 3, kh = 4, Hw = 5, fE = 6, Nt = Er, ki = null, Ln = null, Cr = ue, hl = ue, dE = Zs(ue), Tr = us, _h = null, Py = ue, Mh = ue, Vy = ue, Oh = null, qi = null, pE = 0, Iw = 500, $w = 1 / 0, xA = 500, cs = null;
    function Ah() {
      $w = qn() + xA;
    }
    function Yw() {
      return $w;
    }
    var Uy = !1, hE = null, Sd = null, kc = !1, uu = null, Lh = ue, vE = [], mE = null, wA = 50, Nh = 0, yE = null, gE = !1, zy = !1, RA = 50, Ed = 0, jy = null, Ph = rn, Fy = ue, Ww = !1;
    function By() {
      return ki;
    }
    function _i() {
      return (Nt & (Qr | Ka)) !== Er ? qn() : (Ph !== rn || (Ph = qn()), Ph);
    }
    function cu(e) {
      var t = e.mode;
      if ((t & Dt) === Qe)
        return it;
      if ((Nt & Qr) !== Er && Cr !== ue)
        return Qu(Cr);
      var i = EM() !== SM;
      if (i) {
        if (Kr.transition !== null) {
          var o = Kr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return Fy === zt && (Fy = xp()), Fy;
      }
      var u = Wi();
      if (u !== zt)
        return u;
      var d = i_();
      return d;
    }
    function bA(e) {
      var t = e.mode;
      return (t & Dt) === Qe ? it : Yv();
    }
    function xr(e, t, i, o) {
      XA(), Ww && v("useInsertionEffect must not schedule updates."), gE && (zy = !0), Bs(e, i, o), (Nt & Qr) !== ue && e === ki ? JA(t) : (oi && Zu(e, t, i), eL(t), e === ki && ((Nt & Qr) === Er && (Mh = mt(Mh, i)), Tr === kh && fu(e, Cr)), Zi(e, o), i === it && Nt === Er && (t.mode & Dt) === Qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !bo.isBatchingLegacy && (Ah(), WT()));
    }
    function DA(e, t, i) {
      var o = e.current;
      o.lanes = t, Bs(e, t, i), Zi(e, i);
    }
    function kA(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Nt & Qr) !== Er
      );
    }
    function Zi(e, t) {
      var i = e.callbackNode;
      _f(e, t);
      var o = kf(e, e === ki ? Cr : ue);
      if (o === ue) {
        i !== null && sR(i), e.callbackNode = null, e.callbackPriority = zt;
        return;
      }
      var u = Zo(o), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(bo.current !== null && i !== RE)) {
        i == null && d !== it && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && sR(i);
      var m;
      if (u === it)
        e.tag === Js ? (bo.isBatchingLegacy !== null && (bo.didScheduleLegacyUpdate = !0), nM(Qw.bind(null, e))) : YT(Qw.bind(null, e)), bo.current !== null ? bo.current.push(eu) : o_(function() {
          (Nt & (Qr | Ka)) === Er && eu();
        }), m = null;
      else {
        var S;
        switch (Zv(o)) {
          case zr:
            S = Pu;
            break;
          case za:
            S = Ko;
            break;
          case $i:
            S = so;
            break;
          case Yi:
            S = Ul;
            break;
          default:
            S = so;
            break;
        }
        m = bE(S, Gw.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = m;
    }
    function Gw(e, t) {
      if (WM(), Ph = rn, Fy = ue, (Nt & (Qr | Ka)) !== Er)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, o = ds();
      if (o && e.callbackNode !== i)
        return null;
      var u = kf(e, e === ki ? Cr : ue);
      if (u === ue)
        return null;
      var d = !Of(e, u) && !$v(e, u) && !t, m = d ? zA(e, u) : Iy(e, u);
      if (m !== us) {
        if (m === Dc) {
          var S = Mf(e);
          S !== ue && (u = S, m = SE(e, S));
        }
        if (m === Dh) {
          var C = _h;
          throw _c(e, ue), fu(e, u), Zi(e, qn()), C;
        }
        if (m === fE)
          fu(e, u);
        else {
          var R = !Of(e, u), _ = e.current.alternate;
          if (R && !MA(_)) {
            if (m = Iy(e, u), m === Dc) {
              var z = Mf(e);
              z !== ue && (u = z, m = SE(e, z));
            }
            if (m === Dh) {
              var V = _h;
              throw _c(e, ue), fu(e, u), Zi(e, qn()), V;
            }
          }
          e.finishedWork = _, e.finishedLanes = u, _A(e, m, u);
        }
      }
      return Zi(e, qn()), e.callbackNode === i ? Gw.bind(null, e) : null;
    }
    function SE(e, t) {
      var i = Oh;
      if (Nf(e)) {
        var o = _c(e, t);
        o.flags |= kr, Q_(e.containerInfo);
      }
      var u = Iy(e, t);
      if (u !== Dc) {
        var d = qi;
        qi = i, d !== null && Kw(d);
      }
      return u;
    }
    function Kw(e) {
      qi === null ? qi = e : qi.push.apply(qi, e);
    }
    function _A(e, t, i) {
      switch (t) {
        case us:
        case Dh:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Dc: {
          Mc(e, qi, cs);
          break;
        }
        case Ny: {
          if (fu(e, i), Kl(i) && // do not delay if we're inside an act() scope
          !uR()) {
            var o = pE + Iw - qn();
            if (o > 10) {
              var u = kf(e, ue);
              if (u !== ue)
                break;
              var d = e.suspendedLanes;
              if (!Ql(d, i)) {
                _i(), Af(e, d);
                break;
              }
              e.timeoutHandle = mS(Mc.bind(null, e, qi, cs), o);
              break;
            }
          }
          Mc(e, qi, cs);
          break;
        }
        case kh: {
          if (fu(e, i), Cp(i))
            break;
          if (!uR()) {
            var m = va(e, i), S = m, C = qn() - S, R = QA(C) - C;
            if (R > 10) {
              e.timeoutHandle = mS(Mc.bind(null, e, qi, cs), R);
              break;
            }
          }
          Mc(e, qi, cs);
          break;
        }
        case Hw: {
          Mc(e, qi, cs);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function MA(e) {
      for (var t = e; ; ) {
        if (t.flags & Vs) {
          var i = t.updateQueue;
          if (i !== null) {
            var o = i.stores;
            if (o !== null)
              for (var u = 0; u < o.length; u++) {
                var d = o[u], m = d.getSnapshot, S = d.value;
                try {
                  if (!de(m(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var C = t.child;
        if (t.subtreeFlags & Vs && C !== null) {
          C.return = t, t = C;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function fu(e, t) {
      t = Xu(t, Vy), t = Xu(t, Mh), Kv(e, t);
    }
    function Qw(e) {
      if (GM(), (Nt & (Qr | Ka)) !== Er)
        throw new Error("Should not already be working.");
      ds();
      var t = kf(e, ue);
      if (!si(t, it))
        return Zi(e, qn()), null;
      var i = Iy(e, t);
      if (e.tag !== Js && i === Dc) {
        var o = Mf(e);
        o !== ue && (t = o, i = SE(e, o));
      }
      if (i === Dh) {
        var u = _h;
        throw _c(e, ue), fu(e, t), Zi(e, qn()), u;
      }
      if (i === fE)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Mc(e, qi, cs), Zi(e, qn()), null;
    }
    function OA(e, t) {
      t !== ue && (Lf(e, mt(t, it)), Zi(e, qn()), (Nt & (Qr | Ka)) === Er && (Ah(), eu()));
    }
    function EE(e, t) {
      var i = Nt;
      Nt |= Bw;
      try {
        return e(t);
      } finally {
        Nt = i, Nt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !bo.isBatchingLegacy && (Ah(), WT());
      }
    }
    function AA(e, t, i, o, u) {
      var d = Wi(), m = Kr.transition;
      try {
        return Kr.transition = null, Hn(zr), e(t, i, o, u);
      } finally {
        Hn(d), Kr.transition = m, Nt === Er && Ah();
      }
    }
    function fs(e) {
      uu !== null && uu.tag === Js && (Nt & (Qr | Ka)) === Er && ds();
      var t = Nt;
      Nt |= Bw;
      var i = Kr.transition, o = Wi();
      try {
        return Kr.transition = null, Hn(zr), e ? e() : void 0;
      } finally {
        Hn(o), Kr.transition = i, Nt = t, (Nt & (Qr | Ka)) === Er && eu();
      }
    }
    function Xw() {
      return (Nt & (Qr | Ka)) !== Er;
    }
    function Hy(e, t) {
      pi(dE, hl, e), hl = mt(hl, t);
    }
    function CE(e) {
      hl = dE.current, di(dE, e);
    }
    function _c(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var i = e.timeoutHandle;
      if (i !== yS && (e.timeoutHandle = yS, a_(i)), Ln !== null)
        for (var o = Ln.return; o !== null; ) {
          var u = o.alternate;
          Rw(u, o), o = o.return;
        }
      ki = e;
      var d = Oc(e.current, null);
      return Ln = d, Cr = hl = t, Tr = us, _h = null, Py = ue, Mh = ue, Vy = ue, Oh = null, qi = null, DM(), go.discardPendingWarnings(), d;
    }
    function qw(e, t) {
      do {
        var i = Ln;
        try {
          if (Zm(), Cx(), dn(), cE.current = null, i === null || i.return === null) {
            Tr = Dh, _h = t, Ln = null;
            return;
          }
          if (nt && i.mode & Ft && Dy(i, !0), at)
            if (wi(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              Ua(i, o, Cr);
            } else
              Uu(i, t, Cr);
          nO(e, i.return, i, t, Cr), tR(i);
        } catch (u) {
          t = u, Ln === i && i !== null ? (i = i.return, Ln = i) : i = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function Zw() {
      var e = uE.current;
      return uE.current = Ty, e === null ? Ty : e;
    }
    function Jw(e) {
      uE.current = e;
    }
    function LA() {
      pE = qn();
    }
    function Vh(e) {
      Py = mt(e, Py);
    }
    function NA() {
      Tr === us && (Tr = Ny);
    }
    function TE() {
      (Tr === us || Tr === Ny || Tr === Dc) && (Tr = kh), ki !== null && (Ku(Py) || Ku(Mh)) && fu(ki, Cr);
    }
    function PA(e) {
      Tr !== kh && (Tr = Dc), Oh === null ? Oh = [e] : Oh.push(e);
    }
    function VA() {
      return Tr === us;
    }
    function Iy(e, t) {
      var i = Nt;
      Nt |= Qr;
      var o = Zw();
      if (ki !== e || Cr !== t) {
        if (oi) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Uh(e, Cr), u.clear()), Qv(e, t);
        }
        cs = Dp(), _c(e, t);
      }
      Bl(t);
      do
        try {
          UA();
          break;
        } catch (d) {
          qw(e, d);
        }
      while (!0);
      if (Zm(), Nt = i, Jw(o), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return cf(), ki = null, Cr = ue, Tr;
    }
    function UA() {
      for (; Ln !== null; )
        eR(Ln);
    }
    function zA(e, t) {
      var i = Nt;
      Nt |= Qr;
      var o = Zw();
      if (ki !== e || Cr !== t) {
        if (oi) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Uh(e, Cr), u.clear()), Qv(e, t);
        }
        cs = Dp(), Ah(), _c(e, t);
      }
      Bl(t);
      do
        try {
          jA();
          break;
        } catch (d) {
          qw(e, d);
        }
      while (!0);
      return Zm(), Jw(o), Nt = i, Ln !== null ? (Fv(), us) : (cf(), ki = null, Cr = ue, Tr);
    }
    function jA() {
      for (; Ln !== null && !op(); )
        eR(Ln);
    }
    function eR(e) {
      var t = e.alternate;
      qt(e);
      var i;
      (e.mode & Ft) !== Qe ? (R0(e), i = xE(t, e, hl), Dy(e, !0)) : i = xE(t, e, hl), dn(), e.memoizedProps = e.pendingProps, i === null ? tR(e) : Ln = i, cE.current = null;
    }
    function tR(e) {
      var t = e;
      do {
        var i = t.alternate, o = t.return;
        if ((t.flags & Nu) === Ke) {
          qt(t);
          var u = void 0;
          if ((t.mode & Ft) === Qe ? u = ww(i, t, hl) : (R0(t), u = ww(i, t, hl), Dy(t, !1)), dn(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var d = NO(i, t);
          if (d !== null) {
            d.flags &= Nv, Ln = d;
            return;
          }
          if ((t.mode & Ft) !== Qe) {
            Dy(t, !1);
            for (var m = t.actualDuration, S = t.child; S !== null; )
              m += S.actualDuration, S = S.sibling;
            t.actualDuration = m;
          }
          if (o !== null)
            o.flags |= Nu, o.subtreeFlags = Ke, o.deletions = null;
          else {
            Tr = fE, Ln = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          Ln = C;
          return;
        }
        t = o, Ln = t;
      } while (t !== null);
      Tr === us && (Tr = Hw);
    }
    function Mc(e, t, i) {
      var o = Wi(), u = Kr.transition;
      try {
        Kr.transition = null, Hn(zr), FA(e, t, i, o);
      } finally {
        Kr.transition = u, Hn(o);
      }
      return null;
    }
    function FA(e, t, i, o) {
      do
        ds();
      while (uu !== null);
      if (qA(), (Nt & (Qr | Ka)) !== Er)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (dp(d), u === null)
        return pp(), null;
      if (d === ue && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ue, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = zt;
      var m = mt(u.lanes, u.childLanes);
      Rp(e, m), e === ki && (ki = null, Ln = null, Cr = ue), ((u.subtreeFlags & lo) !== Ke || (u.flags & lo) !== Ke) && (kc || (kc = !0, mE = i, bE(so, function() {
        return ds(), null;
      })));
      var S = (u.subtreeFlags & (Yo | Wo | Go | lo)) !== Ke, C = (u.flags & (Yo | Wo | Go | lo)) !== Ke;
      if (S || C) {
        var R = Kr.transition;
        Kr.transition = null;
        var _ = Wi();
        Hn(zr);
        var z = Nt;
        Nt |= Ka, cE.current = null, jO(e, u), Wx(), JO(e, u, d), Zk(e.containerInfo), e.current = u, zu(d), eA(u, e, d), ju(), lp(), Nt = z, Hn(_), Kr.transition = R;
      } else
        e.current = u, Wx();
      var V = kc;
      if (kc ? (kc = !1, uu = e, Lh = d) : (Ed = 0, jy = null), m = e.pendingLanes, m === ue && (Sd = null), V || aR(e.current, !1), up(u.stateNode, o), oi && e.memoizedUpdaters.clear(), SA(), Zi(e, qn()), t !== null)
        for (var W = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var J = t[Q], De = J.stack, qe = J.digest;
          W(J.value, {
            componentStack: De,
            digest: qe
          });
        }
      if (Uy) {
        Uy = !1;
        var We = hE;
        throw hE = null, We;
      }
      return si(Lh, it) && e.tag !== Js && ds(), m = e.pendingLanes, si(m, it) ? (YM(), e === yE ? Nh++ : (Nh = 0, yE = e)) : Nh = 0, eu(), pp(), null;
    }
    function ds() {
      if (uu !== null) {
        var e = Zv(Lh), t = ec($i, e), i = Kr.transition, o = Wi();
        try {
          return Kr.transition = null, Hn(t), HA();
        } finally {
          Hn(o), Kr.transition = i;
        }
      }
      return !1;
    }
    function BA(e) {
      vE.push(e), kc || (kc = !0, bE(so, function() {
        return ds(), null;
      }));
    }
    function HA() {
      if (uu === null)
        return !1;
      var e = mE;
      mE = null;
      var t = uu, i = Lh;
      if (uu = null, Lh = ue, (Nt & (Qr | Ka)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      gE = !0, zy = !1, Fl(i);
      var o = Nt;
      Nt |= Ka, lA(t.current), rA(t, t.current, i, e);
      {
        var u = vE;
        vE = [];
        for (var d = 0; d < u.length; d++) {
          var m = u[d];
          IO(t, m);
        }
      }
      mp(), aR(t.current, !0), Nt = o, eu(), zy ? t === jy ? Ed++ : (Ed = 0, jy = t) : Ed = 0, gE = !1, zy = !1, cp(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function nR(e) {
      return Sd !== null && Sd.has(e);
    }
    function IA(e) {
      Sd === null ? Sd = /* @__PURE__ */ new Set([e]) : Sd.add(e);
    }
    function $A(e) {
      Uy || (Uy = !0, hE = e);
    }
    var YA = $A;
    function rR(e, t, i) {
      var o = Rc(i, t), u = ew(e, o, it), d = nu(e, u, it), m = _i();
      d !== null && (Bs(d, it, m), Zi(d, m));
    }
    function pn(e, t, i) {
      if (VO(i), zh(!1), e.tag === M) {
        rR(e, e, i);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === M) {
          rR(o, e, i);
          return;
        } else if (o.tag === b) {
          var u = o.type, d = o.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !nR(d)) {
            var m = Rc(i, e), S = I0(o, m, it), C = nu(o, S, it), R = _i();
            C !== null && (Bs(C, it, R), Zi(C, R));
            return;
          }
        }
        o = o.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function WA(e, t, i) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var u = _i();
      Af(e, i), tL(e), ki === e && Ql(Cr, i) && (Tr === kh || Tr === Ny && Kl(Cr) && qn() - pE < Iw ? _c(e, ue) : Vy = mt(Vy, i)), Zi(e, u);
    }
    function iR(e, t) {
      t === zt && (t = bA(e));
      var i = _i(), o = Qi(e, t);
      o !== null && (Bs(o, t, i), Zi(o, i));
    }
    function GA(e) {
      var t = e.memoizedState, i = zt;
      t !== null && (i = t.retryLane), iR(e, i);
    }
    function KA(e, t) {
      var i = zt, o;
      switch (e.tag) {
        case pe:
          o = e.stateNode;
          var u = e.memoizedState;
          u !== null && (i = u.retryLane);
          break;
        case rt:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), iR(e, i);
    }
    function QA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : TA(e / 1960) * 1960;
    }
    function XA() {
      if (Nh > wA)
        throw Nh = 0, yE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ed > RA && (Ed = 0, jy = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function qA() {
      go.flushLegacyContextWarning(), go.flushPendingUnsafeLifecycleWarnings();
    }
    function aR(e, t) {
      qt(e), $y(e, $o, mA), t && $y(e, Na, yA), $y(e, $o, hA), t && $y(e, Na, vA), dn();
    }
    function $y(e, t, i) {
      for (var o = e, u = null; o !== null; ) {
        var d = o.subtreeFlags & t;
        o !== u && o.child !== null && d !== Ke ? o = o.child : ((o.flags & t) !== Ke && i(o), o.sibling !== null ? o = o.sibling : o = u = o.return);
      }
    }
    var Yy = null;
    function oR(e) {
      {
        if ((Nt & Qr) !== Er || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== k && t !== M && t !== b && t !== D && t !== ne && t !== we && t !== ge)
          return;
        var i = st(e) || "ReactComponent";
        if (Yy !== null) {
          if (Yy.has(i))
            return;
          Yy.add(i);
        } else
          Yy = /* @__PURE__ */ new Set([i]);
        var o = fr;
        try {
          qt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? qt(e) : dn();
        }
      }
    }
    var xE;
    {
      var ZA = null;
      xE = function(e, t, i) {
        var o = hR(ZA, t);
        try {
          return Sw(e, t, i);
        } catch (d) {
          if (cM() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Zm(), Cx(), Rw(e, t), hR(t, o), t.mode & Ft && R0(t), Io(null, Sw, null, e, t, i), ao()) {
            var u = Lu();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var lR = !1, wE;
    wE = /* @__PURE__ */ new Set();
    function JA(e) {
      if (Da && !HM())
        switch (e.tag) {
          case D:
          case ne:
          case ge: {
            var t = Ln && st(Ln) || "Unknown", i = t;
            if (!wE.has(i)) {
              wE.add(i);
              var o = st(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case b: {
            lR || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), lR = !0);
            break;
          }
        }
    }
    function Uh(e, t) {
      if (oi) {
        var i = e.memoizedUpdaters;
        i.forEach(function(o) {
          Zu(e, o, t);
        });
      }
    }
    var RE = {};
    function bE(e, t) {
      {
        var i = bo.current;
        return i !== null ? (i.push(t), RE) : ap(e, t);
      }
    }
    function sR(e) {
      if (e !== RE)
        return Vv(e);
    }
    function uR() {
      return bo.current !== null;
    }
    function eL(e) {
      {
        if (e.mode & Dt) {
          if (!Fw())
            return;
        } else if (!CA() || Nt !== Er || e.tag !== D && e.tag !== ne && e.tag !== ge)
          return;
        if (bo.current === null) {
          var t = fr;
          try {
            qt(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, st(e));
          } finally {
            t ? qt(e) : dn();
          }
        }
      }
    }
    function tL(e) {
      e.tag !== Js && Fw() && bo.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function zh(e) {
      Ww = e;
    }
    var Qa = null, Cd = null, nL = function(e) {
      Qa = e;
    };
    function Td(e) {
      {
        if (Qa === null)
          return e;
        var t = Qa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function DE(e) {
      return Td(e);
    }
    function kE(e) {
      {
        if (Qa === null)
          return e;
        var t = Qa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = Td(e.render);
            if (e.render !== i) {
              var o = {
                $$typeof: se,
                render: i
              };
              return e.displayName !== void 0 && (o.displayName = e.displayName), o;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function cR(e, t) {
      {
        if (Qa === null)
          return !1;
        var i = e.elementType, o = t.type, u = !1, d = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof o == "function" && (u = !0);
            break;
          }
          case D: {
            (typeof o == "function" || d === ut) && (u = !0);
            break;
          }
          case ne: {
            (d === se || d === ut) && (u = !0);
            break;
          }
          case we:
          case ge: {
            (d === dt || d === ut) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var m = Qa(i);
          if (m !== void 0 && m === Qa(o))
            return !0;
        }
        return !1;
      }
    }
    function fR(e) {
      {
        if (Qa === null || typeof WeakSet != "function")
          return;
        Cd === null && (Cd = /* @__PURE__ */ new WeakSet()), Cd.add(e);
      }
    }
    var rL = function(e, t) {
      {
        if (Qa === null)
          return;
        var i = t.staleFamilies, o = t.updatedFamilies;
        ds(), fs(function() {
          _E(e.current, o, i);
        });
      }
    }, iL = function(e, t) {
      {
        if (e.context !== ga)
          return;
        ds(), fs(function() {
          jh(t, e, null, null);
        });
      }
    };
    function _E(e, t, i) {
      {
        var o = e.alternate, u = e.child, d = e.sibling, m = e.tag, S = e.type, C = null;
        switch (m) {
          case D:
          case ge:
          case b:
            C = S;
            break;
          case ne:
            C = S.render;
            break;
        }
        if (Qa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, _ = !1;
        if (C !== null) {
          var z = Qa(C);
          z !== void 0 && (i.has(z) ? _ = !0 : t.has(z) && (m === b ? _ = !0 : R = !0));
        }
        if (Cd !== null && (Cd.has(e) || o !== null && Cd.has(o)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || R) {
          var V = Qi(e, it);
          V !== null && xr(V, e, it, rn);
        }
        u !== null && !_ && _E(u, t, i), d !== null && _E(d, t, i);
      }
    }
    var aL = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), o = new Set(t.map(function(u) {
          return u.current;
        }));
        return ME(e.current, o, i), i;
      }
    };
    function ME(e, t, i) {
      {
        var o = e.child, u = e.sibling, d = e.tag, m = e.type, S = null;
        switch (d) {
          case D:
          case ge:
          case b:
            S = m;
            break;
          case ne:
            S = m.render;
            break;
        }
        var C = !1;
        S !== null && t.has(S) && (C = !0), C ? oL(e, i) : o !== null && ME(o, t, i), u !== null && ME(u, t, i);
      }
    }
    function oL(e, t) {
      {
        var i = lL(e, t);
        if (i)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case F:
              t.add(o.stateNode);
              return;
            case A:
              t.add(o.stateNode.containerInfo);
              return;
            case M:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function lL(e, t) {
      for (var i = e, o = !1; ; ) {
        if (i.tag === F)
          o = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return o;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return o;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var OE;
    {
      OE = !1;
      try {
        var dR = Object.preventExtensions({});
      } catch {
        OE = !0;
      }
    }
    function sL(e, t, i, o) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !OE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Sa = function(e, t, i, o) {
      return new sL(e, t, i, o);
    };
    function AE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uL(e) {
      return typeof e == "function" && !AE(e) && e.defaultProps === void 0;
    }
    function cL(e) {
      if (typeof e == "function")
        return AE(e) ? b : D;
      if (e != null) {
        var t = e.$$typeof;
        if (t === se)
          return ne;
        if (t === dt)
          return we;
      }
      return k;
    }
    function Oc(e, t) {
      var i = e.alternate;
      i === null ? (i = Sa(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ke, i.subtreeFlags = Ke, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & jn, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (i.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case k:
        case D:
        case ge:
          i.type = Td(e.type);
          break;
        case b:
          i.type = DE(e.type);
          break;
        case ne:
          i.type = kE(e.type);
          break;
      }
      return i;
    }
    function fL(e, t) {
      e.flags &= jn | En;
      var i = e.alternate;
      if (i === null)
        e.childLanes = ue, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var o = i.dependencies;
        e.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function dL(e, t, i) {
      var o;
      return e === Hm ? (o = Dt, t === !0 && (o |= en, o |= Bt)) : o = Qe, oi && (o |= Ft), Sa(M, null, null, o);
    }
    function LE(e, t, i, o, u, d) {
      var m = k, S = e;
      if (typeof e == "function")
        AE(e) ? (m = b, S = DE(S)) : S = Td(S);
      else if (typeof e == "string")
        m = F;
      else
        e: switch (e) {
          case xa:
            return du(i.children, u, d, t);
          case ia:
            m = q, u |= en, (u & Dt) !== Qe && (u |= Bt);
            break;
          case wa:
            return pL(i, u, d, t);
          case Re:
            return hL(i, u, d, t);
          case Ve:
            return vL(i, u, d, t);
          case Dn:
            return pR(i, u, d, t);
          case ln:
          // eslint-disable-next-line no-fallthrough
          case kt:
          // eslint-disable-next-line no-fallthrough
          case fn:
          // eslint-disable-next-line no-fallthrough
          case cr:
          // eslint-disable-next-line no-fallthrough
          case bt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ra:
                  m = ae;
                  break e;
                case N:
                  m = ie;
                  break e;
                case se:
                  m = ne, S = kE(S);
                  break e;
                case dt:
                  m = we;
                  break e;
                case ut:
                  m = Ee, S = null;
                  break e;
              }
            var C = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = o ? st(o) : null;
              R && (C += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
          }
        }
      var _ = Sa(m, i, t, u);
      return _.elementType = e, _.type = S, _.lanes = d, _._debugOwner = o, _;
    }
    function NE(e, t, i) {
      var o = null;
      o = e._owner;
      var u = e.type, d = e.key, m = e.props, S = LE(u, d, m, o, t, i);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function du(e, t, i, o) {
      var u = Sa(X, e, o, t);
      return u.lanes = i, u;
    }
    function pL(e, t, i, o) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Sa(oe, e, o, t | Ft);
      return u.elementType = wa, u.lanes = i, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hL(e, t, i, o) {
      var u = Sa(pe, e, o, t);
      return u.elementType = Re, u.lanes = i, u;
    }
    function vL(e, t, i, o) {
      var u = Sa(rt, e, o, t);
      return u.elementType = Ve, u.lanes = i, u;
    }
    function pR(e, t, i, o) {
      var u = Sa(ze, e, o, t);
      u.elementType = Dn, u.lanes = i;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function PE(e, t, i) {
      var o = Sa(B, e, null, t);
      return o.lanes = i, o;
    }
    function mL() {
      var e = Sa(F, null, null, Qe);
      return e.elementType = "DELETED", e;
    }
    function yL(e) {
      var t = Sa(Te, null, null, Qe);
      return t.stateNode = e, t;
    }
    function VE(e, t, i) {
      var o = e.children !== null ? e.children : [], u = Sa(A, o, e.key, t);
      return u.lanes = i, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function hR(e, t) {
      return e === null && (e = Sa(k, null, null, Qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function gL(e, t, i, o, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = yS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = zt, this.eventTimes = qu(ue), this.expirationTimes = qu(rn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = qu(ue), this.identifierPrefix = o, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], m = 0; m < Hl; m++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Js:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function vR(e, t, i, o, u, d, m, S, C, R) {
      var _ = new gL(e, t, i, S, C), z = dL(t, d);
      _.current = z, z.stateNode = _;
      {
        var V = {
          element: o,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = V;
      }
      return QS(z), _;
    }
    var UE = "18.3.1";
    function SL(e, t, i) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Jr(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ur,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var zE, jE;
    zE = !1, jE = {};
    function mR(e) {
      if (!e)
        return ga;
      var t = Ps(e), i = tM(t);
      if (t.tag === b) {
        var o = t.type;
        if (ll(o))
          return IT(t, o, i);
      }
      return i;
    }
    function EL(e, t) {
      {
        var i = Ps(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var u = ii(i);
        if (u === null)
          return null;
        if (u.mode & en) {
          var d = st(i) || "Component";
          if (!jE[d]) {
            jE[d] = !0;
            var m = fr;
            try {
              qt(u), i.mode & en ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              m ? qt(m) : dn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function yR(e, t, i, o, u, d, m, S) {
      var C = !1, R = null;
      return vR(e, t, C, R, i, o, u, d, m);
    }
    function gR(e, t, i, o, u, d, m, S, C, R) {
      var _ = !0, z = vR(i, o, _, e, u, d, m, S, C);
      z.context = mR(null);
      var V = z.current, W = _i(), Q = cu(V), J = ls(W, Q);
      return J.callback = t ?? null, nu(V, J, Q), DA(z, Q, W), z;
    }
    function jh(e, t, i, o) {
      sp(t, e);
      var u = t.current, d = _i(), m = cu(u);
      Tn(m);
      var S = mR(i);
      t.context === null ? t.context = S : t.pendingContext = S, Da && fr !== null && !zE && (zE = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, st(fr) || "Unknown"));
      var C = ls(d, m);
      C.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), C.callback = o);
      var R = nu(u, C, m);
      return R !== null && (xr(R, u, m, d), ry(R, u, m)), m;
    }
    function Wy(e) {
      var t = e.current;
      return t.child ? t.child.tag === F ? t.child.stateNode : t.child.stateNode : null;
    }
    function CL(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (Nf(t)) {
            var i = Hv(t);
            OA(t, i);
          }
          break;
        }
        case pe: {
          fs(function() {
            var u = Qi(e, it);
            if (u !== null) {
              var d = _i();
              xr(u, e, it, d);
            }
          });
          var o = it;
          FE(e, o);
          break;
        }
      }
    }
    function SR(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Gv(i.retryLane, t));
    }
    function FE(e, t) {
      SR(e, t);
      var i = e.alternate;
      i && SR(i, t);
    }
    function TL(e) {
      if (e.tag === pe) {
        var t = Yu, i = Qi(e, t);
        if (i !== null) {
          var o = _i();
          xr(i, e, t, o);
        }
        FE(e, t);
      }
    }
    function xL(e) {
      if (e.tag === pe) {
        var t = cu(e), i = Qi(e, t);
        if (i !== null) {
          var o = _i();
          xr(i, e, t, o);
        }
        FE(e, t);
      }
    }
    function ER(e) {
      var t = mn(e);
      return t === null ? null : t.stateNode;
    }
    var CR = function(e) {
      return null;
    };
    function wL(e) {
      return CR(e);
    }
    var TR = function(e) {
      return !1;
    };
    function RL(e) {
      return TR(e);
    }
    var xR = null, wR = null, RR = null, bR = null, DR = null, kR = null, _R = null, MR = null, OR = null;
    {
      var AR = function(e, t, i) {
        var o = t[i], u = xt(e) ? e.slice() : St({}, e);
        return i + 1 === t.length ? (xt(u) ? u.splice(o, 1) : delete u[o], u) : (u[o] = AR(e[o], t, i + 1), u);
      }, LR = function(e, t) {
        return AR(e, t, 0);
      }, NR = function(e, t, i, o) {
        var u = t[o], d = xt(e) ? e.slice() : St({}, e);
        if (o + 1 === t.length) {
          var m = i[o];
          d[m] = d[u], xt(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = NR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            i,
            o + 1
          );
        return d;
      }, PR = function(e, t, i) {
        if (t.length !== i.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < i.length - 1; o++)
            if (t[o] !== i[o]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return NR(e, t, i, 0);
      }, VR = function(e, t, i, o) {
        if (i >= t.length)
          return o;
        var u = t[i], d = xt(e) ? e.slice() : St({}, e);
        return d[u] = VR(e[u], t, i + 1, o), d;
      }, UR = function(e, t, i) {
        return VR(e, t, 0, i);
      }, BE = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      xR = function(e, t, i, o) {
        var u = BE(e, t);
        if (u !== null) {
          var d = UR(u.memoizedState, i, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = St({}, e.memoizedProps);
          var m = Qi(e, it);
          m !== null && xr(m, e, it, rn);
        }
      }, wR = function(e, t, i) {
        var o = BE(e, t);
        if (o !== null) {
          var u = LR(o.memoizedState, i);
          o.memoizedState = u, o.baseState = u, e.memoizedProps = St({}, e.memoizedProps);
          var d = Qi(e, it);
          d !== null && xr(d, e, it, rn);
        }
      }, RR = function(e, t, i, o) {
        var u = BE(e, t);
        if (u !== null) {
          var d = PR(u.memoizedState, i, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = St({}, e.memoizedProps);
          var m = Qi(e, it);
          m !== null && xr(m, e, it, rn);
        }
      }, bR = function(e, t, i) {
        e.pendingProps = UR(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qi(e, it);
        o !== null && xr(o, e, it, rn);
      }, DR = function(e, t) {
        e.pendingProps = LR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qi(e, it);
        i !== null && xr(i, e, it, rn);
      }, kR = function(e, t, i) {
        e.pendingProps = PR(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Qi(e, it);
        o !== null && xr(o, e, it, rn);
      }, _R = function(e) {
        var t = Qi(e, it);
        t !== null && xr(t, e, it, rn);
      }, MR = function(e) {
        CR = e;
      }, OR = function(e) {
        TR = e;
      };
    }
    function bL(e) {
      var t = ii(e);
      return t === null ? null : t.stateNode;
    }
    function DL(e) {
      return null;
    }
    function kL() {
      return fr;
    }
    function _L(e) {
      var t = e.findFiberByHostInstance, i = c.ReactCurrentDispatcher;
      return zs({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: xR,
        overrideHookStateDeletePath: wR,
        overrideHookStateRenamePath: RR,
        overrideProps: bR,
        overridePropsDeletePath: DR,
        overridePropsRenamePath: kR,
        setErrorHandler: MR,
        setSuspenseHandler: OR,
        scheduleUpdate: _R,
        currentDispatcherRef: i,
        findHostInstanceByFiber: bL,
        findFiberByHostInstance: t || DL,
        // React Refresh
        findHostInstancesForRefresh: aL,
        scheduleRefresh: rL,
        scheduleRoot: iL,
        setRefreshHandler: nL,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: UE
      });
    }
    var zR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function HE(e) {
      this._internalRoot = e;
    }
    Gy.prototype.render = HE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ky(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Un) {
          var o = ER(t.current);
          o && o.parentNode !== i && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      jh(e, t, null, null);
    }, Gy.prototype.unmount = HE.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Xw() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), fs(function() {
          jh(null, e, null, null);
        }), zT(t);
      }
    };
    function ML(e, t) {
      if (!Ky(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      jR(e);
      var i = !1, o = !1, u = "", d = zR;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Nr && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = yR(e, Hm, null, i, o, u, d);
      Pm(m.current, e);
      var S = e.nodeType === Un ? e.parentNode : e;
      return Yp(S), new HE(m);
    }
    function Gy(e) {
      this._internalRoot = e;
    }
    function OL(e) {
      e && rm(e);
    }
    Gy.prototype.unstable_scheduleHydration = OL;
    function AL(e, t, i) {
      if (!Ky(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      jR(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = i ?? null, u = i != null && i.hydratedSources || null, d = !1, m = !1, S = "", C = zR;
      i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (S = i.identifierPrefix), i.onRecoverableError !== void 0 && (C = i.onRecoverableError));
      var R = gR(t, null, e, Hm, o, d, m, S, C);
      if (Pm(R.current, e), Yp(e), u)
        for (var _ = 0; _ < u.length; _++) {
          var z = u[_];
          VM(R, z);
        }
      return new Gy(R);
    }
    function Ky(e) {
      return !!(e && (e.nodeType === ti || e.nodeType === io || e.nodeType === Gd));
    }
    function Fh(e) {
      return !!(e && (e.nodeType === ti || e.nodeType === io || e.nodeType === Gd || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function jR(e) {
      e.nodeType === ti && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), nh(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var LL = c.ReactCurrentOwner, FR;
    FR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = ER(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, o = IE(e), u = !!(o && qs(o));
      u && !i && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ti && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function IE(e) {
      return e ? e.nodeType === io ? e.documentElement : e.firstChild : null;
    }
    function BR() {
    }
    function NL(e, t, i, o, u) {
      if (u) {
        if (typeof o == "function") {
          var d = o;
          o = function() {
            var V = Wy(m);
            d.call(V);
          };
        }
        var m = gR(
          t,
          o,
          e,
          Js,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          BR
        );
        e._reactRootContainer = m, Pm(m.current, e);
        var S = e.nodeType === Un ? e.parentNode : e;
        return Yp(S), fs(), m;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof o == "function") {
          var R = o;
          o = function() {
            var V = Wy(_);
            R.call(V);
          };
        }
        var _ = yR(
          e,
          Js,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          BR
        );
        e._reactRootContainer = _, Pm(_.current, e);
        var z = e.nodeType === Un ? e.parentNode : e;
        return Yp(z), fs(function() {
          jh(t, _, i, o);
        }), _;
      }
    }
    function PL(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qy(e, t, i, o, u) {
      FR(i), PL(u === void 0 ? null : u, "render");
      var d = i._reactRootContainer, m;
      if (!d)
        m = NL(i, t, e, u, o);
      else {
        if (m = d, typeof u == "function") {
          var S = u;
          u = function() {
            var C = Wy(m);
            S.call(C);
          };
        }
        jh(t, m, e, u);
      }
      return Wy(m);
    }
    var HR = !1;
    function VL(e) {
      {
        HR || (HR = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = LL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ti ? e : EL(e, "findDOMNode");
    }
    function UL(e, t, i) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = nh(t) && t._reactRootContainer === void 0;
        o && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qy(null, e, t, !0, i);
    }
    function zL(e, t, i) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = nh(t) && t._reactRootContainer === void 0;
        o && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qy(null, e, t, !1, i);
    }
    function jL(e, t, i, o) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Fg(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qy(e, t, i, !1, o);
    }
    var IR = !1;
    function FL(e) {
      if (IR || (IR = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Fh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = nh(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = IE(e), o = i && !qs(i);
          o && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return fs(function() {
          Qy(null, null, e, !1, function() {
            e._reactRootContainer = null, zT(e);
          });
        }), !0;
      } else {
        {
          var u = IE(e), d = !!(u && qs(u)), m = e.nodeType === ti && Fh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Mr(CL), Hs(TL), Jv(xL), nc(Wi), kp(Xv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xc(Hk), jg(EE, AA, fs);
    function BL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ky(t))
        throw new Error("Target container is not a DOM element.");
      return SL(e, t, null, i);
    }
    function HL(e, t, i, o) {
      return jL(e, t, i, o);
    }
    var $E = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [qs, Jf, Vm, Os, qc, EE]
    };
    function IL(e, t) {
      return $E.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ML(e, t);
    }
    function $L(e, t, i) {
      return $E.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AL(e, t, i);
    }
    function YL(e) {
      return Xw() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), fs(e);
    }
    var WL = _L({
      findFiberByHostInstance: mc,
      bundleType: 1,
      version: UE,
      rendererPackageName: "react-dom"
    });
    if (!WL && Pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var $R = window.location.protocol;
      /^(https?|file):$/.test($R) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + ($R === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $E, ea.createPortal = BL, ea.createRoot = IL, ea.findDOMNode = VL, ea.flushSync = YL, ea.hydrate = UL, ea.hydrateRoot = $L, ea.render = zL, ea.unmountComponentAtNode = FL, ea.unstable_batchedUpdates = EE, ea.unstable_renderSubtreeIntoContainer = HL, ea.version = UE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), ea;
}
var nb;
function aN() {
  if (nb) return Zy.exports;
  nb = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (a(), Zy.exports = rN()) : Zy.exports = iN(), Zy.exports;
}
var rb;
function oN() {
  if (rb) return wd;
  rb = 1;
  var a = aN();
  if (process.env.NODE_ENV === "production")
    wd.createRoot = a.createRoot, wd.hydrateRoot = a.hydrateRoot;
  else {
    var l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    wd.createRoot = function(c, p) {
      l.usingClientEntryPoint = !0;
      try {
        return a.createRoot(c, p);
      } finally {
        l.usingClientEntryPoint = !1;
      }
    }, wd.hydrateRoot = function(c, p, g) {
      l.usingClientEntryPoint = !0;
      try {
        return a.hydrateRoot(c, p, g);
      } finally {
        l.usingClientEntryPoint = !1;
      }
    };
  }
  return wd;
}
var lN = oN();
const sN = /* @__PURE__ */ x1(lN), VC = Le.createContext({});
function UC(a) {
  const l = Le.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const uN = typeof window < "u", zC = uN ? Le.useLayoutEffect : Le.useEffect, wg = /* @__PURE__ */ Le.createContext(null);
function jC(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function hg(a, l) {
  const c = a.indexOf(l);
  c > -1 && a.splice(c, 1);
}
const Sl = (a, l, c) => c > l ? l : c < a ? a : c;
function uC(a, l) {
  return l ? `${a}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : a;
}
let Ld = () => {
}, vs = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (Ld = (a, l, c) => {
  !a && typeof console < "u" && console.warn(uC(l, c));
}, vs = (a, l, c) => {
  if (!a)
    throw new Error(uC(l, c));
});
const hu = {}, R1 = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), b1 = (a) => typeof a == "object" && a !== null, D1 = (a) => /^0[^.\s]+$/u.test(a);
// @__NO_SIDE_EFFECTS__
function k1(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const qa = /* @__NO_SIDE_EFFECTS__ */ (a) => a, tv = (...a) => a.reduce((l, c) => (p) => c(l(p))), Xh = /* @__NO_SIDE_EFFECTS__ */ (a, l, c) => {
  const p = l - a;
  return p ? (c - a) / p : 1;
};
class FC {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return jC(this.subscriptions, l), () => hg(this.subscriptions, l);
  }
  notify(l, c, p) {
    const g = this.subscriptions.length;
    if (g)
      if (g === 1)
        this.subscriptions[0](l, c, p);
      else
        for (let E = 0; E < g; E++) {
          const v = this.subscriptions[E];
          v && v(l, c, p);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ta = /* @__NO_SIDE_EFFECTS__ */ (a) => a * 1e3, Xa = /* @__NO_SIDE_EFFECTS__ */ (a) => a / 1e3, _1 = /* @__NO_SIDE_EFFECTS__ */ (a, l) => l ? a * (1e3 / l) : 0, ib = /* @__PURE__ */ new Set();
function BC(a, l, c) {
  a || ib.has(l) || (console.warn(uC(l, c)), ib.add(l));
}
const M1 = (a, l, c) => (((1 - 3 * c + 3 * l) * a + (3 * c - 6 * l)) * a + 3 * l) * a, cN = 1e-7, fN = 12;
function dN(a, l, c, p, g) {
  let E, v, w = 0;
  do
    v = l + (c - l) / 2, E = M1(v, p, g) - a, E > 0 ? c = v : l = v;
  while (Math.abs(E) > cN && ++w < fN);
  return v;
}
// @__NO_SIDE_EFFECTS__
function nv(a, l, c, p) {
  if (a === l && c === p)
    return qa;
  const g = (E) => dN(E, 0, 1, a, c);
  return (E) => E === 0 || E === 1 ? E : M1(g(E), l, p);
}
const O1 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2, A1 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => 1 - a(1 - l), L1 = /* @__PURE__ */ nv(0.33, 1.53, 0.69, 0.99), HC = /* @__PURE__ */ A1(L1), N1 = /* @__PURE__ */ O1(HC), P1 = (a) => a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * HC(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))), IC = (a) => 1 - Math.sin(Math.acos(a)), V1 = /* @__PURE__ */ A1(IC), U1 = /* @__PURE__ */ O1(IC), pN = /* @__PURE__ */ nv(0.42, 0, 1, 1), hN = /* @__PURE__ */ nv(0, 0, 0.58, 1), z1 = /* @__PURE__ */ nv(0.42, 0, 0.58, 1), vN = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] != "number", j1 = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] == "number", ab = {
  linear: qa,
  easeIn: pN,
  easeInOut: z1,
  easeOut: hN,
  circIn: IC,
  circInOut: U1,
  circOut: V1,
  backIn: HC,
  backInOut: N1,
  backOut: L1,
  anticipate: P1
}, mN = (a) => typeof a == "string", ob = (a) => {
  if (/* @__PURE__ */ j1(a)) {
    vs(a.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, c, p, g] = a;
    return /* @__PURE__ */ nv(l, c, p, g);
  } else if (mN(a))
    return vs(ab[a] !== void 0, `Invalid easing type '${a}'`, "invalid-easing-type"), ab[a];
  return a;
}, eg = [
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
function yN(a) {
  let l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), p = !1, g = !1;
  const E = /* @__PURE__ */ new WeakSet();
  let v = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function w(b) {
    E.has(b) && (D.schedule(b), a()), b(v);
  }
  const D = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (b, k = !1, M = !1) => {
      const F = M && p ? l : c;
      return k && E.add(b), F.add(b), b;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (b) => {
      c.delete(b), E.delete(b);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (b) => {
      if (v = b, p) {
        g = !0;
        return;
      }
      p = !0;
      const k = l;
      l = c, c = k, l.forEach(w), l.clear(), p = !1, g && (g = !1, D.process(b));
    }
  };
  return D;
}
const gN = 40;
function F1(a, l) {
  let c = !1, p = !0;
  const g = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, E = () => c = !0, v = eg.reduce((ne, oe) => (ne[oe] = yN(E), ne), {}), { setup: w, read: D, resolveKeyframes: b, preUpdate: k, update: M, preRender: A, render: F, postRender: B } = v, X = () => {
    const ne = hu.useManualTiming, oe = ne ? g.timestamp : performance.now();
    c = !1, ne || (g.delta = p ? 1e3 / 60 : Math.max(Math.min(oe - g.timestamp, gN), 1)), g.timestamp = oe, g.isProcessing = !0, w.process(g), D.process(g), b.process(g), k.process(g), M.process(g), A.process(g), F.process(g), B.process(g), g.isProcessing = !1, c && l && (p = !1, a(X));
  }, q = () => {
    c = !0, p = !0, g.isProcessing || a(X);
  };
  return { schedule: eg.reduce((ne, oe) => {
    const pe = v[oe];
    return ne[oe] = (we, ge = !1, Ee = !1) => (c || q(), pe.schedule(we, ge, Ee)), ne;
  }, {}), cancel: (ne) => {
    for (let oe = 0; oe < eg.length; oe++)
      v[eg[oe]].cancel(ne);
  }, state: g, steps: v };
}
const { schedule: vn, cancel: vu, state: qr, steps: GE } = /* @__PURE__ */ F1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qa, !0);
let ag;
function SN() {
  ag = void 0;
}
const Ai = {
  now: () => (ag === void 0 && Ai.set(qr.isProcessing || hu.useManualTiming ? qr.timestamp : performance.now()), ag),
  set: (a) => {
    ag = a, queueMicrotask(SN);
  }
}, B1 = (a) => (l) => typeof l == "string" && l.startsWith(a), H1 = /* @__PURE__ */ B1("--"), EN = /* @__PURE__ */ B1("var(--"), $C = (a) => EN(a) ? CN.test(a.split("/*")[0].trim()) : !1, CN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function lb(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const Nd = {
  test: (a) => typeof a == "number",
  parse: parseFloat,
  transform: (a) => a
}, qh = {
  ...Nd,
  transform: (a) => Sl(0, 1, a)
}, tg = {
  ...Nd,
  default: 1
}, Gh = (a) => Math.round(a * 1e5) / 1e5, YC = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function TN(a) {
  return a == null;
}
const xN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, WC = (a, l) => (c) => !!(typeof c == "string" && xN.test(c) && c.startsWith(a) || l && !TN(c) && Object.prototype.hasOwnProperty.call(c, l)), I1 = (a, l, c) => (p) => {
  if (typeof p != "string")
    return p;
  const [g, E, v, w] = p.match(YC);
  return {
    [a]: parseFloat(g),
    [l]: parseFloat(E),
    [c]: parseFloat(v),
    alpha: w !== void 0 ? parseFloat(w) : 1
  };
}, wN = (a) => Sl(0, 255, a), KE = {
  ...Nd,
  transform: (a) => Math.round(wN(a))
}, Nc = {
  test: /* @__PURE__ */ WC("rgb", "red"),
  parse: /* @__PURE__ */ I1("red", "green", "blue"),
  transform: ({ red: a, green: l, blue: c, alpha: p = 1 }) => "rgba(" + KE.transform(a) + ", " + KE.transform(l) + ", " + KE.transform(c) + ", " + Gh(qh.transform(p)) + ")"
};
function RN(a) {
  let l = "", c = "", p = "", g = "";
  return a.length > 5 ? (l = a.substring(1, 3), c = a.substring(3, 5), p = a.substring(5, 7), g = a.substring(7, 9)) : (l = a.substring(1, 2), c = a.substring(2, 3), p = a.substring(3, 4), g = a.substring(4, 5), l += l, c += c, p += p, g += g), {
    red: parseInt(l, 16),
    green: parseInt(c, 16),
    blue: parseInt(p, 16),
    alpha: g ? parseInt(g, 16) / 255 : 1
  };
}
const cC = {
  test: /* @__PURE__ */ WC("#"),
  parse: RN,
  transform: Nc.transform
}, rv = /* @__NO_SIDE_EFFECTS__ */ (a) => ({
  test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${a}`
}), hs = /* @__PURE__ */ rv("deg"), gl = /* @__PURE__ */ rv("%"), $e = /* @__PURE__ */ rv("px"), bN = /* @__PURE__ */ rv("vh"), DN = /* @__PURE__ */ rv("vw"), sb = {
  ...gl,
  parse: (a) => gl.parse(a) / 100,
  transform: (a) => gl.transform(a * 100)
}, bd = {
  test: /* @__PURE__ */ WC("hsl", "hue"),
  parse: /* @__PURE__ */ I1("hue", "saturation", "lightness"),
  transform: ({ hue: a, saturation: l, lightness: c, alpha: p = 1 }) => "hsla(" + Math.round(a) + ", " + gl.transform(Gh(l)) + ", " + gl.transform(Gh(c)) + ", " + Gh(qh.transform(p)) + ")"
}, lr = {
  test: (a) => Nc.test(a) || cC.test(a) || bd.test(a),
  parse: (a) => Nc.test(a) ? Nc.parse(a) : bd.test(a) ? bd.parse(a) : cC.parse(a),
  transform: (a) => typeof a == "string" ? a : a.hasOwnProperty("red") ? Nc.transform(a) : bd.transform(a),
  getAnimatableNone: (a) => {
    const l = lr.parse(a);
    return l.alpha = 0, lr.transform(l);
  }
}, kN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _N(a) {
  return isNaN(a) && typeof a == "string" && (a.match(YC)?.length || 0) + (a.match(kN)?.length || 0) > 0;
}
const $1 = "number", Y1 = "color", MN = "var", ON = "var(", ub = "${}", AN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Od(a) {
  const l = a.toString(), c = [], p = {
    color: [],
    number: [],
    var: []
  }, g = [];
  let E = 0;
  const w = l.replace(AN, (D) => (lr.test(D) ? (p.color.push(E), g.push(Y1), c.push(lr.parse(D))) : D.startsWith(ON) ? (p.var.push(E), g.push(MN), c.push(D)) : (p.number.push(E), g.push($1), c.push(parseFloat(D))), ++E, ub)).split(ub);
  return { values: c, split: w, indexes: p, types: g };
}
function LN(a) {
  return Od(a).values;
}
function W1({ split: a, types: l }) {
  const c = a.length;
  return (p) => {
    let g = "";
    for (let E = 0; E < c; E++)
      if (g += a[E], p[E] !== void 0) {
        const v = l[E];
        v === $1 ? g += Gh(p[E]) : v === Y1 ? g += lr.transform(p[E]) : g += p[E];
      }
    return g;
  };
}
function NN(a) {
  return W1(Od(a));
}
const PN = (a) => typeof a == "number" ? 0 : lr.test(a) ? lr.getAnimatableNone(a) : a, VN = (a, l) => typeof a == "number" ? l?.trim().endsWith("/") ? a : 0 : PN(a);
function UN(a) {
  const l = Od(a);
  return W1(l)(l.values.map((p, g) => VN(p, l.split[g])));
}
const _o = {
  test: _N,
  parse: LN,
  createTransformer: NN,
  getAnimatableNone: UN
};
function QE(a, l, c) {
  return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + (l - a) * 6 * c : c < 1 / 2 ? l : c < 2 / 3 ? a + (l - a) * (2 / 3 - c) * 6 : a;
}
function zN({ hue: a, saturation: l, lightness: c, alpha: p }) {
  a /= 360, l /= 100, c /= 100;
  let g = 0, E = 0, v = 0;
  if (!l)
    g = E = v = c;
  else {
    const w = c < 0.5 ? c * (1 + l) : c + l - c * l, D = 2 * c - w;
    g = QE(D, w, a + 1 / 3), E = QE(D, w, a), v = QE(D, w, a - 1 / 3);
  }
  return {
    red: Math.round(g * 255),
    green: Math.round(E * 255),
    blue: Math.round(v * 255),
    alpha: p
  };
}
function vg(a, l) {
  return (c) => c > 0 ? l : a;
}
const hn = (a, l, c) => a + (l - a) * c, XE = (a, l, c) => {
  const p = a * a, g = c * (l * l - p) + p;
  return g < 0 ? 0 : Math.sqrt(g);
}, jN = [cC, Nc, bd], FN = (a) => jN.find((l) => l.test(a));
function cb(a) {
  const l = FN(a);
  if (Ld(!!l, `'${a}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l)
    return !1;
  let c = l.parse(a);
  return l === bd && (c = zN(c)), c;
}
const fb = (a, l) => {
  const c = cb(a), p = cb(l);
  if (!c || !p)
    return vg(a, l);
  const g = { ...c };
  return (E) => (g.red = XE(c.red, p.red, E), g.green = XE(c.green, p.green, E), g.blue = XE(c.blue, p.blue, E), g.alpha = hn(c.alpha, p.alpha, E), Nc.transform(g));
}, fC = /* @__PURE__ */ new Set(["none", "hidden"]);
function BN(a, l) {
  return fC.has(a) ? (c) => c <= 0 ? a : l : (c) => c >= 1 ? l : a;
}
function HN(a, l) {
  return (c) => hn(a, l, c);
}
function GC(a) {
  return typeof a == "number" ? HN : typeof a == "string" ? $C(a) ? vg : lr.test(a) ? fb : YN : Array.isArray(a) ? G1 : typeof a == "object" ? lr.test(a) ? fb : IN : vg;
}
function G1(a, l) {
  const c = [...a], p = c.length, g = a.map((E, v) => GC(E)(E, l[v]));
  return (E) => {
    for (let v = 0; v < p; v++)
      c[v] = g[v](E);
    return c;
  };
}
function IN(a, l) {
  const c = { ...a, ...l }, p = {};
  for (const g in c)
    a[g] !== void 0 && l[g] !== void 0 && (p[g] = GC(a[g])(a[g], l[g]));
  return (g) => {
    for (const E in p)
      c[E] = p[E](g);
    return c;
  };
}
function $N(a, l) {
  const c = [], p = { color: 0, var: 0, number: 0 };
  for (let g = 0; g < l.values.length; g++) {
    const E = l.types[g], v = a.indexes[E][p[E]], w = a.values[v] ?? 0;
    c[g] = w, p[E]++;
  }
  return c;
}
const YN = (a, l) => {
  const c = _o.createTransformer(l), p = Od(a), g = Od(l);
  return p.indexes.var.length === g.indexes.var.length && p.indexes.color.length === g.indexes.color.length && p.indexes.number.length >= g.indexes.number.length ? fC.has(a) && !g.values.length || fC.has(l) && !p.values.length ? BN(a, l) : tv(G1($N(p, g), g.values), c) : (Ld(!0, `Complex values '${a}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), vg(a, l));
};
function K1(a, l, c) {
  return typeof a == "number" && typeof l == "number" && typeof c == "number" ? hn(a, l, c) : GC(a)(a, l);
}
const WN = (a) => {
  const l = ({ timestamp: c }) => a(c);
  return {
    start: (c = !0) => vn.update(l, c),
    stop: () => vu(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => qr.isProcessing ? qr.timestamp : Ai.now()
  };
}, Q1 = (a, l, c = 10) => {
  let p = "";
  const g = Math.max(Math.round(l / c), 2);
  for (let E = 0; E < g; E++)
    p += Math.round(a(E / (g - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${p.substring(0, p.length - 2)})`;
}, mg = 2e4;
function KC(a) {
  let l = 0;
  const c = 50;
  let p = a.next(l);
  for (; !p.done && l < mg; )
    l += c, p = a.next(l);
  return l >= mg ? 1 / 0 : l;
}
function GN(a, l = 100, c) {
  const p = c({ ...a, keyframes: [0, l] }), g = Math.min(KC(p), mg);
  return {
    type: "keyframes",
    ease: (E) => p.next(g * E).value / l,
    duration: /* @__PURE__ */ Xa(g)
  };
}
const Nn = {
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
function dC(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const KN = 12;
function QN(a, l, c) {
  let p = c;
  for (let g = 1; g < KN; g++)
    p = p - a(p) / l(p);
  return p;
}
const qE = 1e-3;
function XN({ duration: a = Nn.duration, bounce: l = Nn.bounce, velocity: c = Nn.velocity, mass: p = Nn.mass }) {
  let g, E;
  Ld(a <= /* @__PURE__ */ ta(Nn.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let v = 1 - l;
  v = Sl(Nn.minDamping, Nn.maxDamping, v), a = Sl(Nn.minDuration, Nn.maxDuration, /* @__PURE__ */ Xa(a)), v < 1 ? (g = (b) => {
    const k = b * v, M = k * a, A = k - c, F = dC(b, v), B = Math.exp(-M);
    return qE - A / F * B;
  }, E = (b) => {
    const M = b * v * a, A = M * c + c, F = Math.pow(v, 2) * Math.pow(b, 2) * a, B = Math.exp(-M), X = dC(Math.pow(b, 2), v);
    return (-g(b) + qE > 0 ? -1 : 1) * ((A - F) * B) / X;
  }) : (g = (b) => {
    const k = Math.exp(-b * a), M = (b - c) * a + 1;
    return -qE + k * M;
  }, E = (b) => {
    const k = Math.exp(-b * a), M = (c - b) * (a * a);
    return k * M;
  });
  const w = 5 / a, D = QN(g, E, w);
  if (a = /* @__PURE__ */ ta(a), isNaN(D))
    return {
      stiffness: Nn.stiffness,
      damping: Nn.damping,
      duration: a
    };
  {
    const b = Math.pow(D, 2) * p;
    return {
      stiffness: b,
      damping: v * 2 * Math.sqrt(p * b),
      duration: a
    };
  }
}
const qN = ["duration", "bounce"], ZN = ["stiffness", "damping", "mass"];
function db(a, l) {
  return l.some((c) => a[c] !== void 0);
}
function JN(a) {
  let l = {
    velocity: Nn.velocity,
    stiffness: Nn.stiffness,
    damping: Nn.damping,
    mass: Nn.mass,
    isResolvedFromDuration: !1,
    ...a
  };
  if (!db(a, ZN) && db(a, qN))
    if (l.velocity = 0, a.visualDuration) {
      const c = a.visualDuration, p = 2 * Math.PI / (c * 1.2), g = p * p, E = 2 * Sl(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(g);
      l = {
        ...l,
        mass: Nn.mass,
        stiffness: g,
        damping: E
      };
    } else {
      const c = XN({ ...a, velocity: 0 });
      l = {
        ...l,
        ...c,
        mass: Nn.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function yg(a = Nn.visualDuration, l = Nn.bounce) {
  const c = typeof a != "object" ? {
    visualDuration: a,
    keyframes: [0, 1],
    bounce: l
  } : a;
  let { restSpeed: p, restDelta: g } = c;
  const E = c.keyframes[0], v = c.keyframes[c.keyframes.length - 1], w = { done: !1, value: E }, { stiffness: D, damping: b, mass: k, duration: M, velocity: A, isResolvedFromDuration: F } = JN({
    ...c,
    velocity: -/* @__PURE__ */ Xa(c.velocity || 0)
  }), B = A || 0, X = b / (2 * Math.sqrt(D * k)), q = v - E, ie = /* @__PURE__ */ Xa(Math.sqrt(D / k)), ae = Math.abs(q) < 5;
  p || (p = ae ? Nn.restSpeed.granular : Nn.restSpeed.default), g || (g = ae ? Nn.restDelta.granular : Nn.restDelta.default);
  let ne, oe, pe, we, ge, Ee;
  if (X < 1)
    pe = dC(ie, X), we = (B + X * ie * q) / pe, ne = (Te) => {
      const rt = Math.exp(-X * ie * Te);
      return v - rt * (we * Math.sin(pe * Te) + q * Math.cos(pe * Te));
    }, ge = X * ie * we + q * pe, Ee = X * ie * q - we * pe, oe = (Te) => Math.exp(-X * ie * Te) * (ge * Math.sin(pe * Te) + Ee * Math.cos(pe * Te));
  else if (X === 1) {
    ne = (rt) => v - Math.exp(-ie * rt) * (q + (B + ie * q) * rt);
    const Te = B + ie * q;
    oe = (rt) => Math.exp(-ie * rt) * (ie * Te * rt - B);
  } else {
    const Te = ie * Math.sqrt(X * X - 1);
    ne = (yt) => {
      const ht = Math.exp(-X * ie * yt), vt = Math.min(Te * yt, 300);
      return v - ht * ((B + X * ie * q) * Math.sinh(vt) + Te * q * Math.cosh(vt)) / Te;
    };
    const rt = (B + X * ie * q) / Te, tt = X * ie * rt - q * Te, ze = X * ie * q - rt * Te;
    oe = (yt) => {
      const ht = Math.exp(-X * ie * yt), vt = Math.min(Te * yt, 300);
      return ht * (tt * Math.sinh(vt) + ze * Math.cosh(vt));
    };
  }
  const Ue = {
    calculatedDuration: F && M || null,
    velocity: (Te) => /* @__PURE__ */ ta(oe(Te)),
    next: (Te) => {
      if (!F && X < 1) {
        const tt = Math.exp(-X * ie * Te), ze = Math.sin(pe * Te), yt = Math.cos(pe * Te), ht = v - tt * (we * ze + q * yt), vt = /* @__PURE__ */ ta(tt * (ge * ze + Ee * yt));
        return w.done = Math.abs(vt) <= p && Math.abs(v - ht) <= g, w.value = w.done ? v : ht, w;
      }
      const rt = ne(Te);
      if (F)
        w.done = Te >= M;
      else {
        const tt = /* @__PURE__ */ ta(oe(Te));
        w.done = Math.abs(tt) <= p && Math.abs(v - rt) <= g;
      }
      return w.value = w.done ? v : rt, w;
    },
    toString: () => {
      const Te = Math.min(KC(Ue), mg), rt = Q1((tt) => Ue.next(Te * tt).value, Te, 30);
      return Te + "ms " + rt;
    },
    toTransition: () => {
    }
  };
  return Ue;
}
yg.applyToOptions = (a) => {
  const l = GN(a, 100, yg);
  return a.ease = l.ease, a.duration = /* @__PURE__ */ ta(l.duration), a.type = "keyframes", a;
};
const eP = 5;
function X1(a, l, c) {
  const p = Math.max(l - eP, 0);
  return /* @__PURE__ */ _1(c - a(p), l - p);
}
function pC({ keyframes: a, velocity: l = 0, power: c = 0.8, timeConstant: p = 325, bounceDamping: g = 10, bounceStiffness: E = 500, modifyTarget: v, min: w, max: D, restDelta: b = 0.5, restSpeed: k }) {
  const M = a[0], A = {
    done: !1,
    value: M
  }, F = (Ee) => w !== void 0 && Ee < w || D !== void 0 && Ee > D, B = (Ee) => w === void 0 ? D : D === void 0 || Math.abs(w - Ee) < Math.abs(D - Ee) ? w : D;
  let X = c * l;
  const q = M + X, ie = v === void 0 ? q : v(q);
  ie !== q && (X = ie - M);
  const ae = (Ee) => -X * Math.exp(-Ee / p), ne = (Ee) => ie + ae(Ee), oe = (Ee) => {
    const Ue = ae(Ee), Te = ne(Ee);
    A.done = Math.abs(Ue) <= b, A.value = A.done ? ie : Te;
  };
  let pe, we;
  const ge = (Ee) => {
    F(A.value) && (pe = Ee, we = yg({
      keyframes: [A.value, B(A.value)],
      velocity: X1(ne, Ee, A.value),
      // TODO: This should be passing * 1000
      damping: g,
      stiffness: E,
      restDelta: b,
      restSpeed: k
    }));
  };
  return ge(0), {
    calculatedDuration: null,
    next: (Ee) => {
      let Ue = !1;
      return !we && pe === void 0 && (Ue = !0, oe(Ee), ge(Ee)), pe !== void 0 && Ee >= pe ? we.next(Ee - pe) : (!Ue && oe(Ee), A);
    }
  };
}
function tP(a, l, c) {
  const p = [], g = c || hu.mix || K1, E = a.length - 1;
  for (let v = 0; v < E; v++) {
    let w = g(a[v], a[v + 1]);
    if (l) {
      const D = Array.isArray(l) ? l[v] || qa : l;
      w = tv(D, w);
    }
    p.push(w);
  }
  return p;
}
function nP(a, l, { clamp: c = !0, ease: p, mixer: g } = {}) {
  const E = a.length;
  if (vs(E === l.length, "Both input and output ranges must be the same length", "range-length"), E === 1)
    return () => l[0];
  if (E === 2 && l[0] === l[1])
    return () => l[1];
  const v = a[0] === a[1];
  a[0] > a[E - 1] && (a = [...a].reverse(), l = [...l].reverse());
  const w = tP(l, p, g), D = w.length, b = (k) => {
    if (v && k < a[0])
      return l[0];
    let M = 0;
    if (D > 1)
      for (; M < a.length - 2 && !(k < a[M + 1]); M++)
        ;
    const A = /* @__PURE__ */ Xh(a[M], a[M + 1], k);
    return w[M](A);
  };
  return c ? (k) => b(Sl(a[0], a[E - 1], k)) : b;
}
function rP(a, l) {
  const c = a[a.length - 1];
  for (let p = 1; p <= l; p++) {
    const g = /* @__PURE__ */ Xh(0, l, p);
    a.push(hn(c, 1, g));
  }
}
function iP(a) {
  const l = [0];
  return rP(l, a.length - 1), l;
}
function aP(a, l) {
  return a.map((c) => c * l);
}
function oP(a, l) {
  return a.map(() => l || z1).splice(0, a.length - 1);
}
function Dd({ duration: a = 300, keyframes: l, times: c, ease: p = "easeInOut" }) {
  const g = /* @__PURE__ */ vN(p) ? p.map(ob) : ob(p), E = {
    done: !1,
    value: l[0]
  }, v = aP(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    c && c.length === l.length ? c : iP(l),
    a
  ), w = nP(v, l, {
    ease: Array.isArray(g) ? g : oP(l, g)
  });
  return {
    calculatedDuration: a,
    next: (D) => (E.value = w(D), E.done = D >= a, E)
  };
}
const lP = (a) => a !== null;
function Rg(a, { repeat: l, repeatType: c = "loop" }, p, g = 1) {
  const E = a.filter(lP), w = g < 0 || l && c !== "loop" && l % 2 === 1 ? 0 : E.length - 1;
  return !w || p === void 0 ? E[w] : p;
}
const sP = {
  decay: pC,
  inertia: pC,
  tween: Dd,
  keyframes: Dd,
  spring: yg
};
function q1(a) {
  typeof a.type == "string" && (a.type = sP[a.type]);
}
class QC {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
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
  then(l, c) {
    return this.finished.then(l, c);
  }
}
const uP = (a) => a / 100;
class gg extends QC {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: c } = this.options;
      c && c.updatedAt !== Ai.now() && this.tick(Ai.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    q1(l);
    const { type: c = Dd, repeat: p = 0, repeatDelay: g = 0, repeatType: E, velocity: v = 0 } = l;
    let { keyframes: w } = l;
    const D = c || Dd;
    process.env.NODE_ENV !== "production" && D !== Dd && vs(w.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${w}`, "spring-two-frames"), D !== Dd && typeof w[0] != "number" && (this.mixKeyframes = tv(uP, K1(w[0], w[1])), w = [0, 100]);
    const b = D({ ...l, keyframes: w });
    E === "mirror" && (this.mirroredGenerator = D({
      ...l,
      keyframes: [...w].reverse(),
      velocity: -v
    })), b.calculatedDuration === null && (b.calculatedDuration = KC(b));
    const { calculatedDuration: k } = b;
    this.calculatedDuration = k, this.resolvedDuration = k + g, this.totalDuration = this.resolvedDuration * (p + 1) - g, this.generator = b;
  }
  updateTime(l) {
    const c = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = c;
  }
  tick(l, c = !1) {
    const { generator: p, totalDuration: g, mixKeyframes: E, mirroredGenerator: v, resolvedDuration: w, calculatedDuration: D } = this;
    if (this.startTime === null)
      return p.next(0);
    const { delay: b = 0, keyframes: k, repeat: M, repeatType: A, repeatDelay: F, type: B, onUpdate: X, finalKeyframe: q } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - g / this.speed, this.startTime)), c ? this.currentTime = l : this.updateTime(l);
    const ie = this.currentTime - b * (this.playbackSpeed >= 0 ? 1 : -1), ae = this.playbackSpeed >= 0 ? ie < 0 : ie > g;
    this.currentTime = Math.max(ie, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
    let ne = this.currentTime, oe = p;
    if (M) {
      const Ee = Math.min(this.currentTime, g) / w;
      let Ue = Math.floor(Ee), Te = Ee % 1;
      !Te && Ee >= 1 && (Te = 1), Te === 1 && Ue--, Ue = Math.min(Ue, M + 1), Ue % 2 && (A === "reverse" ? (Te = 1 - Te, F && (Te -= F / w)) : A === "mirror" && (oe = v)), ne = Sl(0, 1, Te) * w;
    }
    let pe;
    ae ? (this.delayState.value = k[0], pe = this.delayState) : pe = oe.next(ne), E && !ae && (pe.value = E(pe.value));
    let { done: we } = pe;
    !ae && D !== null && (we = this.playbackSpeed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const ge = this.holdTime === null && (this.state === "finished" || this.state === "running" && we);
    return ge && B !== pC && (pe.value = Rg(k, this.options, q, this.speed)), X && X(pe.value), ge && this.finish(), pe;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, c) {
    return this.finished.then(l, c);
  }
  get duration() {
    return /* @__PURE__ */ Xa(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Xa(l);
  }
  get time() {
    return /* @__PURE__ */ Xa(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ ta(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const c = this.generator.next(l).value;
    return X1((p) => this.generator.next(p).value, l, c);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const c = this.playbackSpeed !== l;
    c && this.driver && this.updateTime(Ai.now()), this.playbackSpeed = l, c && this.driver && (this.time = /* @__PURE__ */ Xa(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = WN, startTime: c } = this.options;
    this.driver || (this.driver = l((g) => this.tick(g))), this.options.onPlay?.();
    const p = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = p) : this.holdTime !== null ? this.startTime = p - this.holdTime : this.startTime || (this.startTime = c ?? p), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ai.now()), this.holdTime = this.currentTime;
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
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function cP(a) {
  for (let l = 1; l < a.length; l++)
    a[l] ?? (a[l] = a[l - 1]);
}
const Pc = (a) => a * 180 / Math.PI, hC = (a) => {
  const l = Pc(Math.atan2(a[1], a[0]));
  return vC(l);
}, fP = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: hC,
  rotateZ: hC,
  skewX: (a) => Pc(Math.atan(a[1])),
  skewY: (a) => Pc(Math.atan(a[2])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}, vC = (a) => (a = a % 360, a < 0 && (a += 360), a), pb = hC, hb = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]), vb = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]), dP = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: hb,
  scaleY: vb,
  scale: (a) => (hb(a) + vb(a)) / 2,
  rotateX: (a) => vC(Pc(Math.atan2(a[6], a[5]))),
  rotateY: (a) => vC(Pc(Math.atan2(-a[2], a[0]))),
  rotateZ: pb,
  rotate: pb,
  skewX: (a) => Pc(Math.atan(a[4])),
  skewY: (a) => Pc(Math.atan(a[1])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function mC(a) {
  return a.includes("scale") ? 1 : 0;
}
function yC(a, l) {
  if (!a || a === "none")
    return mC(l);
  const c = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let p, g;
  if (c)
    p = dP, g = c;
  else {
    const w = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    p = fP, g = w;
  }
  if (!g)
    return mC(l);
  const E = p[l], v = g[1].split(",").map(hP);
  return typeof E == "function" ? E(v) : v[E];
}
const pP = (a, l) => {
  const { transform: c = "none" } = getComputedStyle(a);
  return yC(c, l);
};
function hP(a) {
  return parseFloat(a.trim());
}
const Pd = [
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
], Vd = /* @__PURE__ */ new Set([...Pd, "pathRotation"]), mb = (a) => a === Nd || a === $e, vP = /* @__PURE__ */ new Set(["x", "y", "z"]), mP = Pd.filter((a) => !vP.has(a));
function yP(a) {
  const l = [];
  return mP.forEach((c) => {
    const p = a.getValue(c);
    p !== void 0 && (l.push([c, p.get()]), p.set(c.startsWith("scale") ? 1 : 0));
  }), l;
}
const pu = {
  // Dimensions
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: c = "0", boxSizing: p }) => {
    const g = a.max - a.min;
    return p === "border-box" ? g : g - parseFloat(l) - parseFloat(c);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: c = "0", boxSizing: p }) => {
    const g = a.max - a.min;
    return p === "border-box" ? g : g - parseFloat(l) - parseFloat(c);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  // Transform
  x: (a, { transform: l }) => yC(l, "x"),
  y: (a, { transform: l }) => yC(l, "y")
};
pu.translateX = pu.x;
pu.translateY = pu.y;
const Vc = /* @__PURE__ */ new Set();
let gC = !1, SC = !1, EC = !1;
function Z1() {
  if (SC) {
    const a = Array.from(Vc).filter((p) => p.needsMeasurement), l = new Set(a.map((p) => p.element)), c = /* @__PURE__ */ new Map();
    l.forEach((p) => {
      const g = yP(p);
      g.length && (c.set(p, g), p.render());
    }), a.forEach((p) => p.measureInitialState()), l.forEach((p) => {
      p.render();
      const g = c.get(p);
      g && g.forEach(([E, v]) => {
        p.getValue(E)?.set(v);
      });
    }), a.forEach((p) => p.measureEndState()), a.forEach((p) => {
      p.suspendedScrollY !== void 0 && window.scrollTo(0, p.suspendedScrollY);
    });
  }
  SC = !1, gC = !1, Vc.forEach((a) => a.complete(EC)), Vc.clear();
}
function J1() {
  Vc.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (SC = !0);
  });
}
function gP() {
  EC = !0, J1(), Z1(), EC = !1;
}
class XC {
  constructor(l, c, p, g, E, v = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = c, this.name = p, this.motionValue = g, this.element = E, this.isAsync = v;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Vc.add(this), gC || (gC = !0, vn.read(J1), vn.resolveKeyframes(Z1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: c, element: p, motionValue: g } = this;
    if (l[0] === null) {
      const E = g?.get(), v = l[l.length - 1];
      if (E !== void 0)
        l[0] = E;
      else if (p && c) {
        const w = p.readValue(c, v);
        w != null && (l[0] = w);
      }
      l[0] === void 0 && (l[0] = v), g && E === void 0 && g.set(l[0]);
    }
    cP(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Vc.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Vc.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const SP = (a) => a.startsWith("--");
function eD(a, l, c) {
  SP(l) ? a.style.setProperty(l, c) : a.style[l] = c;
}
const EP = {};
function tD(a, l) {
  const c = /* @__PURE__ */ k1(a);
  return () => EP[l] ?? c();
}
const CP = /* @__PURE__ */ tD(() => window.ScrollTimeline !== void 0, "scrollTimeline"), nD = /* @__PURE__ */ tD(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Wh = ([a, l, c, p]) => `cubic-bezier(${a}, ${l}, ${c}, ${p})`, yb = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Wh([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Wh([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Wh([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Wh([0.33, 1.53, 0.69, 0.99])
};
function rD(a, l) {
  if (a)
    return typeof a == "function" ? nD() ? Q1(a, l) : "ease-out" : /* @__PURE__ */ j1(a) ? Wh(a) : Array.isArray(a) ? a.map((c) => rD(c, l) || yb.easeOut) : yb[a];
}
function TP(a, l, c, { delay: p = 0, duration: g = 300, repeat: E = 0, repeatType: v = "loop", ease: w = "easeOut", times: D } = {}, b = void 0) {
  const k = {
    [l]: c
  };
  D && (k.offset = D);
  const M = rD(w, g);
  Array.isArray(M) && (k.easing = M);
  const A = {
    delay: p,
    duration: g,
    easing: Array.isArray(M) ? "linear" : M,
    fill: "both",
    iterations: E + 1,
    direction: v === "reverse" ? "alternate" : "normal"
  };
  return b && (A.pseudoElement = b), a.animate(k, A);
}
function iD(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function xP({ type: a, ...l }) {
  return iD(a) && nD() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class aD extends QC {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: c, name: p, keyframes: g, pseudoElement: E, allowFlatten: v = !1, finalKeyframe: w, onComplete: D } = l;
    this.isPseudoElement = !!E, this.allowFlatten = v, this.options = l, vs(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const b = xP(l);
    this.animation = TP(c, p, g, b, E), b.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !E) {
        const k = Rg(g, this.options, w, this.speed);
        this.updateMotionValue && this.updateMotionValue(k), eD(c, p, k), this.animation.cancel();
      }
      D?.(), this.notifyFinished();
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
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
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
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Xa(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Xa(l);
  }
  get time() {
    return /* @__PURE__ */ Xa(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const c = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ta(l), c && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: c, rangeEnd: p, observe: g }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && CP() ? (this.animation.timeline = l, c && (this.animation.rangeStart = c), p && (this.animation.rangeEnd = p), qa) : g(this);
  }
}
const oD = {
  anticipate: P1,
  backInOut: N1,
  circInOut: U1
};
function wP(a) {
  return a in oD;
}
function RP(a) {
  typeof a.ease == "string" && wP(a.ease) && (a.ease = oD[a.ease]);
}
const ZE = 10;
class bP extends aD {
  constructor(l) {
    RP(l), q1(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: c, onUpdate: p, onComplete: g, element: E, ...v } = this.options;
    if (!c)
      return;
    if (l !== void 0) {
      c.set(l);
      return;
    }
    const w = new gg({
      ...v,
      autoplay: !1
    }), D = Math.max(ZE, Ai.now() - this.startTime), b = Sl(0, ZE, D - ZE), k = w.sample(D).value, { name: M } = this.options;
    E && M && eD(E, M, k), c.setWithVelocity(w.sample(Math.max(0, D - b)).value, k, b), w.stop();
  }
}
const gb = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && // It's animatable if we have a string
(_o.test(a) || a === "0") && // And it contains numbers and/or colors
!a.startsWith("url("));
function DP(a) {
  const l = a[0];
  if (a.length === 1)
    return !0;
  for (let c = 0; c < a.length; c++)
    if (a[c] !== l)
      return !0;
}
function kP(a, l, c, p) {
  const g = a[0];
  if (g === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const E = a[a.length - 1], v = gb(g, l), w = gb(E, l);
  return Ld(v === w, `You are trying to animate ${l} from "${g}" to "${E}". "${v ? E : g}" is not an animatable value.`, "value-not-animatable"), !v || !w ? !1 : DP(a) || (c === "spring" || iD(c)) && p;
}
function CC(a) {
  a.duration = 0, a.type = "keyframes";
}
const lD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), _P = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function MP(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && _P.test(a[l]))
      return !0;
  return !1;
}
const OP = /* @__PURE__ */ new Set([
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
]), AP = /* @__PURE__ */ k1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function LP(a) {
  const { motionValue: l, name: c, repeatDelay: p, repeatType: g, damping: E, type: v, keyframes: w } = a;
  if (!(l?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: b, transformTemplate: k } = l.owner.getProps();
  return AP() && c && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (lD.has(c) || OP.has(c) && MP(w)) && (c !== "transform" || !k) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !b && !p && g !== "mirror" && E !== 0 && v !== "inertia";
}
const NP = 40;
class PP extends QC {
  constructor({ autoplay: l = !0, delay: c = 0, type: p = "keyframes", repeat: g = 0, repeatDelay: E = 0, repeatType: v = "loop", keyframes: w, name: D, motionValue: b, element: k, ...M }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ai.now();
    const A = {
      autoplay: l,
      delay: c,
      type: p,
      repeat: g,
      repeatDelay: E,
      repeatType: v,
      name: D,
      motionValue: b,
      element: k,
      ...M
    }, F = k?.KeyframeResolver || XC;
    this.keyframeResolver = new F(w, (B, X, q) => this.onKeyframesResolved(B, X, A, !q), D, b, k), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, c, p, g) {
    this.keyframeResolver = void 0;
    const { name: E, type: v, velocity: w, delay: D, isHandoff: b, onUpdate: k } = p;
    this.resolvedAt = Ai.now();
    let M = !0;
    kP(l, E, v, w) || (M = !1, (hu.instantAnimations || !D) && k?.(Rg(l, p, c)), l[0] = l[l.length - 1], CC(p), p.repeat = 0);
    const F = {
      startTime: g ? this.resolvedAt ? this.resolvedAt - this.createdAt > NP ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: c,
      ...p,
      keyframes: l
    }, B = M && !b && LP(F), X = F.motionValue?.owner?.current;
    let q;
    if (B)
      try {
        q = new bP({
          ...F,
          element: X
        });
      } catch {
        q = new gg(F);
      }
    else
      q = new gg(F);
    q.finished.then(() => {
      this.notifyFinished();
    }).catch(qa), this.pendingTimeline && (this.stopTimeline = q.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = q;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, c) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), gP()), this._animation;
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
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
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
function sD(a, l, c, p = 0, g = 1) {
  const E = Array.from(a).sort((b, k) => b.sortNodePosition(k)).indexOf(l), v = a.size, w = (v - 1) * p;
  return typeof c == "function" ? c(E, v) : g === 1 ? E * p : w - E * p;
}
const Sb = 30, VP = (a) => !isNaN(parseFloat(a));
class UP {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, c = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (p) => {
      const g = Ai.now();
      if (this.updatedAt !== g && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(p), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const E of this.dependents)
          E.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = c.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Ai.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = VP(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
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
  onChange(l) {
    return process.env.NODE_ENV !== "production" && BC(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", l);
  }
  on(l, c) {
    this.events[l] || (this.events[l] = new FC());
    const p = this.events[l].add(c);
    return l === "change" ? () => {
      p(), vn.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : p;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, c) {
    this.passiveEffect = l, this.stopPassiveEffect = c;
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
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, c, p) {
    this.set(c), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - p;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, c = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, c && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
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
    const l = Ai.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Sb)
      return 0;
    const c = Math.min(this.updatedAt - this.prevUpdatedAt, Sb);
    return /* @__PURE__ */ _1(parseFloat(this.current) - parseFloat(this.prevFrameValue), c);
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
  start(l) {
    return this.stop(), new Promise((c) => {
      this.hasAnimated = !0, this.animation = l(c), this.events.animationStart && this.events.animationStart.notify();
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
function Ad(a, l) {
  return new UP(a, l);
}
function uD(a, l) {
  if (a?.inherit && l) {
    const { inherit: c, ...p } = a;
    return { ...l, ...p };
  }
  return a;
}
function qC(a, l) {
  const c = a?.[l] ?? a?.default ?? a;
  return c !== a ? uD(c, a) : c;
}
const zP = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, jP = (a) => ({
  type: "spring",
  stiffness: 550,
  damping: a === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), FP = {
  type: "keyframes",
  duration: 0.8
}, BP = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, HP = (a, { keyframes: l }) => l.length > 2 ? FP : Vd.has(a) ? a.startsWith("scale") ? jP(l[1]) : zP : BP, IP = /* @__PURE__ */ new Set([
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
function $P(a) {
  for (const l in a)
    if (!IP.has(l))
      return !0;
  return !1;
}
const ZC = (a, l, c, p = {}, g, E) => (v) => {
  const w = qC(p, a) || {}, D = w.delay || p.delay || 0;
  let { elapsed: b = 0 } = p;
  b = b - /* @__PURE__ */ ta(D);
  const k = {
    keyframes: Array.isArray(c) ? c : [null, c],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...w,
    delay: -b,
    onUpdate: (A) => {
      l.set(A), w.onUpdate && w.onUpdate(A);
    },
    onComplete: () => {
      v(), w.onComplete && w.onComplete();
    },
    name: a,
    motionValue: l,
    element: E ? void 0 : g
  };
  $P(w) || Object.assign(k, HP(a, k)), k.duration && (k.duration = /* @__PURE__ */ ta(k.duration)), k.repeatDelay && (k.repeatDelay = /* @__PURE__ */ ta(k.repeatDelay)), k.from !== void 0 && (k.keyframes[0] = k.from);
  let M = !1;
  if ((k.type === !1 || k.duration === 0 && !k.repeatDelay) && (CC(k), k.delay === 0 && (M = !0)), (hu.instantAnimations || hu.skipAnimations || g?.shouldSkipAnimations || w.skipAnimations) && (M = !0, CC(k), k.delay = 0), k.allowFlatten = !w.type && !w.ease, M && !E && l.get() !== void 0) {
    const A = Rg(k.keyframes, w);
    if (A !== void 0) {
      vn.update(() => {
        k.onUpdate(A), k.onComplete();
      });
      return;
    }
  }
  return w.isSync ? new gg(k) : new PP(k);
}, YP = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function WP(a) {
  const l = YP.exec(a);
  if (!l)
    return [,];
  const [, c, p, g] = l;
  return [`--${c ?? p}`, g];
}
const GP = 4;
function cD(a, l, c = 1) {
  vs(c <= GP, `Max CSS variable fallback depth detected in property "${a}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [p, g] = WP(a);
  if (!p)
    return;
  const E = window.getComputedStyle(l).getPropertyValue(p);
  if (E) {
    const v = E.trim();
    return R1(v) ? parseFloat(v) : v;
  }
  return $C(g) ? cD(g, l, c + 1) : g;
}
function Eb(a) {
  const l = [{}, {}];
  return a?.values.forEach((c, p) => {
    l[0][p] = c.get(), l[1][p] = c.getVelocity();
  }), l;
}
function JC(a, l, c, p) {
  if (typeof l == "function") {
    const [g, E] = Eb(p);
    l = l(c !== void 0 ? c : a.custom, g, E);
  }
  if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
    const [g, E] = Eb(p);
    l = l(c !== void 0 ? c : a.custom, g, E);
  }
  return l;
}
function Uc(a, l, c) {
  const p = a.getProps();
  return JC(p, l, c !== void 0 ? c : p.custom, a);
}
const fD = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Pd
]), TC = (a) => Array.isArray(a);
function KP(a, l, c) {
  a.hasValue(l) ? a.getValue(l).set(c) : a.addValue(l, Ad(c));
}
function QP(a) {
  return TC(a) ? a[a.length - 1] || 0 : a;
}
function XP(a, l) {
  const c = Uc(a, l);
  let { transitionEnd: p = {}, transition: g = {}, ...E } = c || {};
  E = { ...E, ...p };
  for (const v in E) {
    const w = QP(E[v]);
    KP(a, v, w);
  }
}
const Zr = (a) => !!(a && a.getVelocity);
function qP(a) {
  return !!(Zr(a) && a.add);
}
function xC(a, l) {
  const c = a.getValue("willChange");
  if (qP(c))
    return c.add(l);
  if (!c && hu.WillChange) {
    const p = new hu.WillChange("auto");
    a.addValue("willChange", p), p.add(l);
  }
}
function eT(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const ZP = "framerAppearId", dD = "data-" + eT(ZP);
function pD(a) {
  return a.props[dD];
}
function JP({ protectedKeys: a, needsAnimating: l }, c) {
  const p = a.hasOwnProperty(c) && l[c] !== !0;
  return l[c] = !1, p;
}
function hD(a, l, { delay: c = 0, transitionOverride: p, type: g } = {}) {
  let { transition: E, transitionEnd: v, ...w } = l;
  const D = a.getDefaultTransition();
  E = E ? uD(E, D) : D;
  const b = E?.reduceMotion, k = E?.skipAnimations;
  p && (E = p);
  const M = [], A = g && a.animationState && a.animationState.getState()[g], F = E?.path;
  F && F.animateVisualElement(a, w, E, c, M);
  for (const B in w) {
    const X = a.getValue(B, a.latestValues[B] ?? null), q = w[B];
    if (q === void 0 || A && JP(A, B))
      continue;
    const ie = {
      delay: c,
      ...qC(E || {}, B)
    };
    k && (ie.skipAnimations = !0);
    const ae = X.get();
    if (ae !== void 0 && !X.isAnimating() && !Array.isArray(q) && q === ae && !ie.velocity) {
      vn.update(() => X.set(q));
      continue;
    }
    let ne = !1;
    if (window.MotionHandoffAnimation) {
      const we = pD(a);
      if (we) {
        const ge = window.MotionHandoffAnimation(we, B, vn);
        ge !== null && (ie.startTime = ge, ne = !0);
      }
    }
    xC(a, B);
    const oe = b ?? a.shouldReduceMotion;
    X.start(ZC(B, X, q, oe && fD.has(B) ? { type: !1 } : ie, a, ne));
    const pe = X.animation;
    pe && M.push(pe);
  }
  if (v) {
    const B = () => vn.update(() => {
      v && XP(a, v);
    });
    M.length ? Promise.all(M).then(B) : B();
  }
  return M;
}
function wC(a, l, c = {}) {
  const p = Uc(a, l, c.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: g = a.getDefaultTransition() || {} } = p || {};
  c.transitionOverride && (g = c.transitionOverride);
  const E = p ? () => Promise.all(hD(a, p, c)) : () => Promise.resolve(), v = a.variantChildren && a.variantChildren.size ? (D = 0) => {
    const { delayChildren: b = 0, staggerChildren: k, staggerDirection: M } = g;
    return eV(a, l, D, b, k, M, c);
  } : () => Promise.resolve(), { when: w } = g;
  if (w) {
    const [D, b] = w === "beforeChildren" ? [E, v] : [v, E];
    return D().then(() => b());
  } else
    return Promise.all([E(), v(c.delay)]);
}
function eV(a, l, c = 0, p = 0, g = 0, E = 1, v) {
  const w = [];
  for (const D of a.variantChildren)
    D.notify("AnimationStart", l), w.push(wC(D, l, {
      ...v,
      delay: c + (typeof p == "function" ? 0 : p) + sD(a.variantChildren, D, p, g, E)
    }).then(() => D.notify("AnimationComplete", l)));
  return Promise.all(w);
}
function tV(a, l, c = {}) {
  a.notify("AnimationStart", l);
  let p;
  if (Array.isArray(l)) {
    const g = l.map((E) => wC(a, E, c));
    p = Promise.all(g);
  } else if (typeof l == "string")
    p = wC(a, l, c);
  else {
    const g = typeof l == "function" ? Uc(a, l, c.custom) : l;
    p = Promise.all(hD(a, g, c));
  }
  return p.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const nV = {
  test: (a) => a === "auto",
  parse: (a) => a
}, vD = (a) => (l) => l.test(a), mD = [Nd, $e, gl, hs, DN, bN, nV], Cb = (a) => mD.find(vD(a));
function rV(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || D1(a) : !0;
}
const iV = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function aV(a) {
  const [l, c] = a.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return a;
  const [p] = c.match(YC) || [];
  if (!p)
    return a;
  const g = c.replace(p, "");
  let E = iV.has(l) ? 1 : 0;
  return p !== c && (E *= 100), l + "(" + E + g + ")";
}
const oV = /\b([a-z-]*)\(.*?\)/gu, RC = {
  ..._o,
  getAnimatableNone: (a) => {
    const l = a.match(oV);
    return l ? l.map(aV).join(" ") : a;
  }
}, bC = {
  ..._o,
  getAnimatableNone: (a) => {
    const l = _o.parse(a);
    return _o.createTransformer(a)(l.map((p) => typeof p == "number" ? 0 : typeof p == "object" ? { ...p, alpha: 1 } : p));
  }
}, Tb = {
  ...Nd,
  transform: Math.round
}, lV = {
  rotate: hs,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: hs,
  rotateX: hs,
  rotateY: hs,
  rotateZ: hs,
  scale: tg,
  scaleX: tg,
  scaleY: tg,
  scaleZ: tg,
  skew: hs,
  skewX: hs,
  skewY: hs,
  distance: $e,
  translateX: $e,
  translateY: $e,
  translateZ: $e,
  x: $e,
  y: $e,
  z: $e,
  perspective: $e,
  transformPerspective: $e,
  opacity: qh,
  originX: sb,
  originY: sb,
  originZ: $e
}, Sg = {
  // Border props
  borderWidth: $e,
  borderTopWidth: $e,
  borderRightWidth: $e,
  borderBottomWidth: $e,
  borderLeftWidth: $e,
  borderRadius: $e,
  borderTopLeftRadius: $e,
  borderTopRightRadius: $e,
  borderBottomRightRadius: $e,
  borderBottomLeftRadius: $e,
  // Positioning props
  width: $e,
  maxWidth: $e,
  height: $e,
  maxHeight: $e,
  top: $e,
  right: $e,
  bottom: $e,
  left: $e,
  inset: $e,
  insetBlock: $e,
  insetBlockStart: $e,
  insetBlockEnd: $e,
  insetInline: $e,
  insetInlineStart: $e,
  insetInlineEnd: $e,
  // Spacing props
  padding: $e,
  paddingTop: $e,
  paddingRight: $e,
  paddingBottom: $e,
  paddingLeft: $e,
  paddingBlock: $e,
  paddingBlockStart: $e,
  paddingBlockEnd: $e,
  paddingInline: $e,
  paddingInlineStart: $e,
  paddingInlineEnd: $e,
  margin: $e,
  marginTop: $e,
  marginRight: $e,
  marginBottom: $e,
  marginLeft: $e,
  marginBlock: $e,
  marginBlockStart: $e,
  marginBlockEnd: $e,
  marginInline: $e,
  marginInlineStart: $e,
  marginInlineEnd: $e,
  // Typography
  fontSize: $e,
  // Misc
  backgroundPositionX: $e,
  backgroundPositionY: $e,
  ...lV,
  zIndex: Tb,
  // SVG
  fillOpacity: qh,
  strokeOpacity: qh,
  numOctaves: Tb
}, sV = {
  ...Sg,
  // Color props
  color: lr,
  backgroundColor: lr,
  outlineColor: lr,
  fill: lr,
  stroke: lr,
  // Border props
  borderColor: lr,
  borderTopColor: lr,
  borderRightColor: lr,
  borderBottomColor: lr,
  borderLeftColor: lr,
  filter: RC,
  WebkitFilter: RC,
  mask: bC,
  WebkitMask: bC
}, yD = (a) => sV[a], uV = /* @__PURE__ */ new Set([RC, bC]);
function gD(a, l) {
  let c = yD(a);
  return uV.has(c) || (c = _o), c.getAnimatableNone ? c.getAnimatableNone(l) : void 0;
}
const cV = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function fV(a, l, c) {
  let p = 0, g;
  for (; p < a.length && !g; ) {
    const E = a[p];
    typeof E == "string" && !cV.has(E) && Od(E).values.length && (g = a[p]), p++;
  }
  if (g && c)
    for (const E of l)
      a[E] = gD(c, g);
}
class dV extends XC {
  constructor(l, c, p, g, E) {
    super(l, c, p, g, E, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: c, name: p } = this;
    if (!c || !c.current)
      return;
    super.readKeyframes();
    for (let k = 0; k < l.length; k++) {
      let M = l[k];
      if (typeof M == "string" && (M = M.trim(), $C(M))) {
        const A = cD(M, c.current);
        A !== void 0 && (l[k] = A), k === l.length - 1 && (this.finalKeyframe = M);
      }
    }
    if (this.resolveNoneKeyframes(), !fD.has(p) || l.length !== 2)
      return;
    const [g, E] = l, v = Cb(g), w = Cb(E), D = lb(g), b = lb(E);
    if (D !== b && pu[p]) {
      this.needsMeasurement = !0;
      return;
    }
    if (v !== w)
      if (mb(v) && mb(w))
        for (let k = 0; k < l.length; k++) {
          const M = l[k];
          typeof M == "string" && (l[k] = parseFloat(M));
        }
      else pu[p] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: c } = this, p = [];
    for (let g = 0; g < l.length; g++)
      (l[g] === null || rV(l[g])) && p.push(g);
    p.length && fV(l, p, c);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: c, name: p } = this;
    if (!l || !l.current)
      return;
    p === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = pu[p](l.measureViewportBox(), window.getComputedStyle(l.current)), c[0] = this.measuredOrigin;
    const g = c[c.length - 1];
    g !== void 0 && l.getValue(p, g).jump(g, !1);
  }
  measureEndState() {
    const { element: l, name: c, unresolvedKeyframes: p } = this;
    if (!l || !l.current)
      return;
    const g = l.getValue(c);
    g && g.jump(this.measuredOrigin, !1);
    const E = p.length - 1, v = p[E];
    p[E] = pu[c](l.measureViewportBox(), window.getComputedStyle(l.current)), v !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = v), this.removedTransforms?.length && this.removedTransforms.forEach(([w, D]) => {
      l.getValue(w).set(D);
    }), this.resolveNoneKeyframes();
  }
}
function SD(a, l, c) {
  if (a == null)
    return [];
  if (a instanceof EventTarget)
    return [a];
  if (typeof a == "string") {
    let p = document;
    const g = c?.[a] ?? p.querySelectorAll(a);
    return g ? Array.from(g) : [];
  }
  return Array.from(a).filter((p) => p != null);
}
const DC = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function og(a) {
  return b1(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: tT } = /* @__PURE__ */ F1(queueMicrotask, !1), ko = {
  x: !1,
  y: !1
};
function ED() {
  return ko.x || ko.y;
}
function pV(a) {
  return a === "x" || a === "y" ? ko[a] ? null : (ko[a] = !0, () => {
    ko[a] = !1;
  }) : ko.x || ko.y ? null : (ko.x = ko.y = !0, () => {
    ko.x = ko.y = !1;
  });
}
function CD(a, l) {
  const c = SD(a), p = new AbortController(), g = {
    passive: !0,
    ...l,
    signal: p.signal
  };
  return [c, g, () => p.abort()];
}
function hV(a) {
  return !(a.pointerType === "touch" || ED());
}
function vV(a, l, c = {}) {
  const [p, g, E] = CD(a, c);
  return p.forEach((v) => {
    let w = !1, D = !1, b;
    const k = () => {
      v.removeEventListener("pointerleave", B);
    }, M = (q) => {
      b && (b(q), b = void 0), k();
    }, A = (q) => {
      w = !1, window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A), D && (D = !1, M(q));
    }, F = () => {
      w = !0, window.addEventListener("pointerup", A, g), window.addEventListener("pointercancel", A, g);
    }, B = (q) => {
      if (q.pointerType !== "touch") {
        if (w) {
          D = !0;
          return;
        }
        M(q);
      }
    }, X = (q) => {
      if (!hV(q))
        return;
      D = !1;
      const ie = l(v, q);
      typeof ie == "function" && (b = ie, v.addEventListener("pointerleave", B, g));
    };
    v.addEventListener("pointerenter", X, g), v.addEventListener("pointerdown", F, g);
  }), E;
}
const TD = (a, l) => l ? a === l ? !0 : TD(a, l.parentElement) : !1, nT = (a) => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, mV = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function yV(a) {
  return mV.has(a.tagName) || a.isContentEditable === !0;
}
const gV = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function SV(a) {
  return gV.has(a.tagName) || a.isContentEditable === !0;
}
const lg = /* @__PURE__ */ new WeakSet();
function xb(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function JE(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const EV = (a, l) => {
  const c = a.currentTarget;
  if (!c)
    return;
  const p = xb(() => {
    if (lg.has(c))
      return;
    JE(c, "down");
    const g = xb(() => {
      JE(c, "up");
    }), E = () => JE(c, "cancel");
    c.addEventListener("keyup", g, l), c.addEventListener("blur", E, l);
  });
  c.addEventListener("keydown", p, l), c.addEventListener("blur", () => c.removeEventListener("keydown", p), l);
};
function wb(a) {
  return nT(a) && !ED();
}
const Rb = /* @__PURE__ */ new WeakSet();
function CV(a, l, c = {}) {
  const [p, g, E] = CD(a, c), v = (w) => {
    const D = w.currentTarget;
    if (!wb(w) || Rb.has(w))
      return;
    lg.add(D), c.stopPropagation && Rb.add(w);
    const b = l(D, w), k = { ...g, capture: !0 }, M = (B, X) => {
      window.removeEventListener("pointerup", A, k), window.removeEventListener("pointercancel", F, k), lg.has(D) && lg.delete(D), wb(B) && typeof b == "function" && b(B, { success: X });
    }, A = (B) => {
      M(B, D === window || D === document || c.useGlobalTarget || TD(D, B.target));
    }, F = (B) => {
      M(B, !1);
    };
    window.addEventListener("pointerup", A, k), window.addEventListener("pointercancel", F, k);
  };
  return p.forEach((w) => {
    (c.useGlobalTarget ? window : w).addEventListener("pointerdown", v, g), og(w) && (w.addEventListener("focus", (b) => EV(b, g)), !yV(w) && !w.hasAttribute("tabindex") && (w.tabIndex = 0));
  }), E;
}
function rT(a) {
  return b1(a) && "ownerSVGElement" in a;
}
const sg = /* @__PURE__ */ new WeakMap();
let ug;
const xD = (a, l, c) => (p, g) => g && g[0] ? g[0][a + "Size"] : rT(p) && "getBBox" in p ? p.getBBox()[l] : p[c], TV = /* @__PURE__ */ xD("inline", "width", "offsetWidth"), xV = /* @__PURE__ */ xD("block", "height", "offsetHeight");
function wV({ target: a, borderBoxSize: l }) {
  sg.get(a)?.forEach((c) => {
    c(a, {
      get width() {
        return TV(a, l);
      },
      get height() {
        return xV(a, l);
      }
    });
  });
}
function RV(a) {
  a.forEach(wV);
}
function bV() {
  typeof ResizeObserver > "u" || (ug = new ResizeObserver(RV));
}
function DV(a, l) {
  ug || bV();
  const c = SD(a);
  return c.forEach((p) => {
    let g = sg.get(p);
    g || (g = /* @__PURE__ */ new Set(), sg.set(p, g)), g.add(l), ug?.observe(p);
  }), () => {
    c.forEach((p) => {
      const g = sg.get(p);
      g?.delete(l), g?.size || ug?.unobserve(p);
    });
  };
}
const cg = /* @__PURE__ */ new Set();
let kd;
function kV() {
  kd = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    cg.forEach((l) => l(a));
  }, window.addEventListener("resize", kd);
}
function _V(a) {
  return cg.add(a), kd || kV(), () => {
    cg.delete(a), !cg.size && typeof kd == "function" && (window.removeEventListener("resize", kd), kd = void 0);
  };
}
function bb(a, l) {
  return typeof a == "function" ? _V(a) : DV(a, l);
}
function MV(a) {
  return rT(a) && a.tagName === "svg";
}
const OV = [...mD, lr, _o], AV = (a) => OV.find(vD(a)), Db = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), _d = () => ({
  x: Db(),
  y: Db()
}), kb = () => ({ min: 0, max: 0 }), wr = () => ({
  x: kb(),
  y: kb()
}), LV = /* @__PURE__ */ new WeakMap();
function bg(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Zh(a) {
  return typeof a == "string" || Array.isArray(a);
}
const iT = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], aT = ["initial", ...iT];
function Dg(a) {
  return bg(a.animate) || aT.some((l) => Zh(a[l]));
}
function wD(a) {
  return !!(Dg(a) || a.variants);
}
function NV(a, l, c) {
  for (const p in l) {
    const g = l[p], E = c[p];
    if (Zr(g))
      a.addValue(p, g);
    else if (Zr(E))
      a.addValue(p, Ad(g, { owner: a }));
    else if (E !== g)
      if (a.hasValue(p)) {
        const v = a.getValue(p);
        v.liveStyle === !0 ? v.jump(g) : v.hasAnimated || v.set(g);
      } else {
        const v = a.getStaticValue(p);
        a.addValue(p, Ad(v !== void 0 ? v : g, { owner: a }));
      }
  }
  for (const p in c)
    l[p] === void 0 && a.removeValue(p);
  return l;
}
const kC = { current: null }, RD = { current: !1 }, PV = typeof window < "u";
function VV() {
  if (RD.current = !0, !!PV)
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"), l = () => kC.current = a.matches;
      a.addEventListener("change", l), l();
    } else
      kC.current = !1;
}
const _b = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Eg = {};
function bD(a) {
  Eg = a;
}
function UV() {
  return Eg;
}
class zV {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, c, p) {
    return {};
  }
  constructor({ parent: l, props: c, presenceContext: p, reducedMotionConfig: g, skipAnimations: E, blockInitialAnimation: v, visualState: w }, D = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = XC, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const F = Ai.now();
      this.renderScheduledAt < F && (this.renderScheduledAt = F, vn.render(this.render, !1, !0));
    };
    const { latestValues: b, renderState: k } = w;
    this.latestValues = b, this.baseTarget = { ...b }, this.initialValues = c.initial ? { ...b } : {}, this.renderState = k, this.parent = l, this.props = c, this.presenceContext = p, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = g, this.skipAnimationsConfig = E, this.options = D, this.blockInitialAnimation = !!v, this.isControllingVariants = Dg(c), this.isVariantNode = wD(c), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: M, ...A } = this.scrapeMotionValuesFromProps(c, {}, this);
    for (const F in A) {
      const B = A[F];
      b[F] !== void 0 && Zr(B) && B.set(b[F]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        this.values.get(c)?.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = l, LV.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, p) => this.bindToMotionValue(p, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (RD.current || VV(), this.shouldReduceMotion = kC.current), process.env.NODE_ENV !== "production" && BC(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), vu(this.notifyUpdate), vu(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const c = this.features[l];
      c && (c.unmount(), c.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, c) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), c.accelerate && lD.has(l) && this.current instanceof HTMLElement) {
      const { factory: v, keyframes: w, times: D, ease: b, duration: k } = c.accelerate, M = new aD({
        element: this.current,
        name: l,
        keyframes: w,
        times: D,
        ease: b,
        duration: /* @__PURE__ */ ta(k)
      }), A = v(M);
      this.valueSubscriptions.set(l, () => {
        A(), M.cancel();
      });
      return;
    }
    const p = Vd.has(l);
    p && this.onBindTransform && this.onBindTransform();
    const g = c.on("change", (v) => {
      this.latestValues[l] = v, this.props.onUpdate && vn.preRender(this.notifyUpdate), p && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let E;
    typeof window < "u" && window.MotionCheckAppearSync && (E = window.MotionCheckAppearSync(this, l, c)), this.valueSubscriptions.set(l, () => {
      g(), E && E();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Eg) {
      const c = Eg[l];
      if (!c)
        continue;
      const { isEnabled: p, Feature: g } = c;
      if (!this.features[l] && g && p(this.props) && (this.features[l] = new g(this)), this.features[l]) {
        const E = this.features[l];
        E.isMounted ? E.update() : (E.mount(), E.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : wr();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, c) {
    this.latestValues[l] = c;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, c) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = c;
    for (let p = 0; p < _b.length; p++) {
      const g = _b[p];
      this.propEventSubscriptions[g] && (this.propEventSubscriptions[g](), delete this.propEventSubscriptions[g]);
      const E = "on" + g, v = l[E];
      v && (this.propEventSubscriptions[g] = this.on(g, v));
    }
    this.prevMotionValues = NV(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
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
  addVariantChild(l) {
    const c = this.getClosestVariantNode();
    if (c)
      return c.variantChildren && c.variantChildren.add(l), () => c.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, c) {
    const p = this.values.get(l);
    c !== p && (p && this.removeValue(l), this.bindToMotionValue(l, c), this.values.set(l, c), this.latestValues[l] = c.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const c = this.valueSubscriptions.get(l);
    c && (c(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, c) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let p = this.values.get(l);
    return p === void 0 && c !== void 0 && (p = Ad(c === null ? void 0 : c, { owner: this }), this.addValue(l, p)), p;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, c) {
    let p = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return p != null && (typeof p == "string" && (R1(p) || D1(p)) ? p = parseFloat(p) : !AV(p) && _o.test(c) && (p = gD(l, c)), this.setBaseTarget(l, Zr(p) ? p.get() : p)), Zr(p) ? p.get() : p;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, c) {
    this.baseTarget[l] = c;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: c } = this.props;
    let p;
    if (typeof c == "string" || typeof c == "object") {
      const E = JC(this.props, c, this.presenceContext?.custom);
      E && (p = E[l]);
    }
    if (c && p !== void 0)
      return p;
    const g = this.getBaseTargetFromProps(this.props, l);
    return g !== void 0 && !Zr(g) ? g : this.initialValues[l] !== void 0 && p === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, c) {
    return this.events[l] || (this.events[l] = new FC()), this.events[l].add(c);
  }
  notify(l, ...c) {
    this.events[l] && this.events[l].notify(...c);
  }
  scheduleRenderMicrotask() {
    tT.render(this.render);
  }
}
class DD extends zV {
  constructor() {
    super(...arguments), this.KeyframeResolver = dV;
  }
  sortInstanceNodePosition(l, c) {
    return l.compareDocumentPosition(c) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, c) {
    const p = l.style;
    return p ? p[c] : void 0;
  }
  removeValueFromRenderState(l, { vars: c, style: p }) {
    delete c[l], delete p[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    Zr(l) && (this.childSubscription = l.on("change", (c) => {
      this.current && (this.current.textContent = `${c}`);
    }));
  }
}
class mu {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function kD({ top: a, left: l, right: c, bottom: p }) {
  return {
    x: { min: l, max: c },
    y: { min: a, max: p }
  };
}
function jV({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function FV(a, l) {
  if (!l)
    return a;
  const c = l({ x: a.left, y: a.top }), p = l({ x: a.right, y: a.bottom });
  return {
    top: c.y,
    left: c.x,
    bottom: p.y,
    right: p.x
  };
}
function eC(a) {
  return a === void 0 || a === 1;
}
function _C({ scale: a, scaleX: l, scaleY: c }) {
  return !eC(a) || !eC(l) || !eC(c);
}
function Lc(a) {
  return _C(a) || _D(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function _D(a) {
  return Mb(a.x) || Mb(a.y);
}
function Mb(a) {
  return a && a !== "0%";
}
function Cg(a, l, c) {
  const p = a - c, g = l * p;
  return c + g;
}
function Ob(a, l, c, p, g) {
  return g !== void 0 && (a = Cg(a, g, p)), Cg(a, c, p) + l;
}
function MC(a, l = 0, c = 1, p, g) {
  a.min = Ob(a.min, l, c, p, g), a.max = Ob(a.max, l, c, p, g);
}
function MD(a, { x: l, y: c }) {
  MC(a.x, l.translate, l.scale, l.originPoint), MC(a.y, c.translate, c.scale, c.originPoint);
}
const Ab = 0.999999999999, Lb = 1.0000000000001;
function BV(a, l, c, p = !1) {
  const g = c.length;
  if (!g)
    return;
  l.x = l.y = 1;
  let E, v;
  for (let w = 0; w < g; w++) {
    E = c[w], v = E.projectionDelta;
    const { visualElement: D } = E.options;
    D && D.props.style && D.props.style.display === "contents" || (p && E.options.layoutScroll && E.scroll && E !== E.root && (yl(a.x, -E.scroll.offset.x), yl(a.y, -E.scroll.offset.y)), v && (l.x *= v.x.scale, l.y *= v.y.scale, MD(a, v)), p && Lc(E.latestValues) && fg(a, E.latestValues, E.layout?.layoutBox));
  }
  l.x < Lb && l.x > Ab && (l.x = 1), l.y < Lb && l.y > Ab && (l.y = 1);
}
function yl(a, l) {
  a.min += l, a.max += l;
}
function Nb(a, l, c, p, g = 0.5) {
  const E = hn(a.min, a.max, g);
  MC(a, l, c, E, p);
}
function Pb(a, l) {
  return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a;
}
function fg(a, l, c) {
  const p = c ?? a;
  Nb(a.x, Pb(l.x, p.x), l.scaleX, l.scale, l.originX), Nb(a.y, Pb(l.y, p.y), l.scaleY, l.scale, l.originY);
}
function OD(a, l) {
  return kD(FV(a.getBoundingClientRect(), l));
}
function HV(a, l, c) {
  const p = OD(a, c), { scroll: g } = l;
  return g && (yl(p.x, g.offset.x), yl(p.y, g.offset.y)), p;
}
const IV = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, $V = Pd.length;
function YV(a, l, c) {
  let p = "", g = !0;
  for (let v = 0; v < $V; v++) {
    const w = Pd[v], D = a[w];
    if (D === void 0)
      continue;
    let b = !0;
    if (typeof D == "number")
      b = D === (w.startsWith("scale") ? 1 : 0);
    else {
      const k = parseFloat(D);
      b = w.startsWith("scale") ? k === 1 : k === 0;
    }
    if (!b || c) {
      const k = DC(D, Sg[w]);
      if (!b) {
        g = !1;
        const M = IV[w] || w;
        p += `${M}(${k}) `;
      }
      c && (l[w] = k);
    }
  }
  const E = a.pathRotation;
  return E && (g = !1, p += `rotate(${DC(E, Sg.pathRotation)}) `), p = p.trim(), c ? p = c(l, g ? "" : p) : g && (p = "none"), p;
}
function oT(a, l, c) {
  const { style: p, vars: g, transformOrigin: E } = a;
  let v = !1, w = !1;
  for (const D in l) {
    const b = l[D];
    if (Vd.has(D)) {
      v = !0;
      continue;
    } else if (H1(D)) {
      g[D] = b;
      continue;
    } else {
      const k = DC(b, Sg[D]);
      D.startsWith("origin") ? (w = !0, E[D] = k) : p[D] = k;
    }
  }
  if (l.transform || (v || c ? p.transform = YV(l, a.transform, c) : p.transform && (p.transform = "none")), w) {
    const { originX: D = "50%", originY: b = "50%", originZ: k = 0 } = E;
    p.transformOrigin = `${D} ${b} ${k}`;
  }
}
function AD(a, { style: l, vars: c }, p, g) {
  const E = a.style;
  let v;
  for (v in l)
    E[v] = l[v];
  g?.applyProjectionStyles(E, p);
  for (v in c)
    E.setProperty(v, c[v]);
}
function Vb(a, l) {
  return l.max === l.min ? 0 : a / (l.max - l.min) * 100;
}
const $h = {
  correct: (a, l) => {
    if (!l.target)
      return a;
    if (typeof a == "string")
      if ($e.test(a))
        a = parseFloat(a);
      else
        return a;
    const c = Vb(a, l.target.x), p = Vb(a, l.target.y);
    return `${c}% ${p}%`;
  }
}, WV = {
  correct: (a, { treeScale: l, projectionDelta: c }) => {
    const p = a, g = _o.parse(a);
    if (g.length > 5)
      return p;
    const E = _o.createTransformer(a), v = typeof g[0] != "number" ? 1 : 0, w = c.x.scale * l.x, D = c.y.scale * l.y;
    g[0 + v] /= w, g[1 + v] /= D;
    const b = hn(w, D, 0.5);
    return typeof g[2 + v] == "number" && (g[2 + v] /= b), typeof g[3 + v] == "number" && (g[3 + v] /= b), E(g);
  }
}, OC = {
  borderRadius: {
    ...$h,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: $h,
  borderTopRightRadius: $h,
  borderBottomLeftRadius: $h,
  borderBottomRightRadius: $h,
  boxShadow: WV
};
function LD(a, { layout: l, layoutId: c }) {
  return Vd.has(a) || a.startsWith("origin") || (l || c !== void 0) && (!!OC[a] || a === "opacity");
}
function lT(a, l, c) {
  const p = a.style, g = l?.style, E = {};
  if (!p)
    return E;
  for (const v in p)
    (Zr(p[v]) || g && Zr(g[v]) || LD(v, a) || c?.getValue(v)?.liveStyle !== void 0) && (E[v] = p[v]);
  return E;
}
function GV(a) {
  return window.getComputedStyle(a);
}
class KV extends DD {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = AD;
  }
  readValueFromInstance(l, c) {
    if (Vd.has(c))
      return this.projection?.isProjecting ? mC(c) : pP(l, c);
    {
      const p = GV(l), g = (H1(c) ? p.getPropertyValue(c) : p[c]) || 0;
      return typeof g == "string" ? g.trim() : g;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: c }) {
    return OD(l, c);
  }
  build(l, c, p) {
    oT(l, c, p.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return lT(l, c, p);
  }
}
const QV = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, XV = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function qV(a, l, c = 1, p = 0, g = !0) {
  a.pathLength = 1;
  const E = g ? QV : XV;
  a[E.offset] = `${-p}`, a[E.array] = `${l} ${c}`;
}
const ZV = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function ND(a, {
  attrX: l,
  attrY: c,
  attrScale: p,
  pathLength: g,
  pathSpacing: E = 1,
  pathOffset: v = 0,
  // This is object creation, which we try to avoid per-frame.
  ...w
}, D, b, k) {
  if (oT(a, w, b), D) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  a.attrs = a.style, a.style = {};
  const { attrs: M, style: A } = a;
  M.transform && (A.transform = M.transform, delete M.transform), (A.transform || M.transformOrigin) && (A.transformOrigin = M.transformOrigin ?? "50% 50%", delete M.transformOrigin), A.transform && (A.transformBox = k?.transformBox ?? "fill-box", delete M.transformBox);
  for (const F of ZV)
    M[F] !== void 0 && (A[F] = M[F], delete M[F]);
  l !== void 0 && (M.x = l), c !== void 0 && (M.y = c), p !== void 0 && (M.scale = p), g !== void 0 && qV(M, g, E, v, !1);
}
const PD = /* @__PURE__ */ new Set([
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
]), VD = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function JV(a, l, c, p) {
  AD(a, l, void 0, p);
  for (const g in l.attrs)
    a.setAttribute(PD.has(g) ? g : eT(g), l.attrs[g]);
}
function UD(a, l, c) {
  const p = lT(a, l, c);
  for (const g in a)
    if (Zr(a[g]) || Zr(l[g])) {
      const E = Pd.indexOf(g) !== -1 ? "attr" + g.charAt(0).toUpperCase() + g.substring(1) : g;
      p[E] = a[g];
    }
  return p;
}
class eU extends DD {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = wr;
  }
  getBaseTargetFromProps(l, c) {
    return l[c];
  }
  readValueFromInstance(l, c) {
    if (Vd.has(c)) {
      const p = yD(c);
      return p && p.default || 0;
    }
    return c = PD.has(c) ? c : eT(c), l.getAttribute(c);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return UD(l, c, p);
  }
  build(l, c, p) {
    ND(l, c, this.isSVGTag, p.transformTemplate, p.style);
  }
  renderInstance(l, c, p, g) {
    JV(l, c, p, g);
  }
  mount(l) {
    this.isSVGTag = VD(l.tagName), super.mount(l);
  }
}
const tU = aT.length;
function zD(a) {
  if (!a)
    return;
  if (!a.isControllingVariants) {
    const c = a.parent ? zD(a.parent) || {} : {};
    return a.props.initial !== void 0 && (c.initial = a.props.initial), c;
  }
  const l = {};
  for (let c = 0; c < tU; c++) {
    const p = aT[c], g = a.props[p];
    (Zh(g) || g === !1) && (l[p] = g);
  }
  return l;
}
function jD(a, l) {
  if (!Array.isArray(l))
    return !1;
  const c = l.length;
  if (c !== a.length)
    return !1;
  for (let p = 0; p < c; p++)
    if (l[p] !== a[p])
      return !1;
  return !0;
}
const nU = [...iT].reverse(), rU = iT.length;
function iU(a) {
  return (l) => Promise.all(l.map(({ animation: c, options: p }) => tV(a, c, p)));
}
function aU(a) {
  let l = iU(a), c = Ub(), p = !0, g = !1;
  const E = (b) => (k, M) => {
    const A = Uc(a, M, b === "exit" ? a.presenceContext?.custom : void 0);
    if (A) {
      const { transition: F, transitionEnd: B, ...X } = A;
      k = { ...k, ...X, ...B };
    }
    return k;
  };
  function v(b) {
    l = b(a);
  }
  function w(b) {
    const { props: k } = a, M = zD(a.parent) || {}, A = [], F = /* @__PURE__ */ new Set();
    let B = {}, X = 1 / 0;
    for (let ie = 0; ie < rU; ie++) {
      const ae = nU[ie], ne = c[ae], oe = k[ae] !== void 0 ? k[ae] : M[ae], pe = Zh(oe), we = ae === b ? ne.isActive : null;
      we === !1 && (X = ie);
      let ge = oe === M[ae] && oe !== k[ae] && pe;
      if (ge && (p || g) && a.manuallyAnimateOnMount && (ge = !1), ne.protectedKeys = { ...B }, // If it isn't active and hasn't *just* been set as inactive
      !ne.isActive && we === null || // If we didn't and don't have any defined prop for this animation type
      !oe && !ne.prevProp || // Or if the prop doesn't define an animation
      bg(oe) || typeof oe == "boolean")
        continue;
      if (ae === "exit" && ne.isActive && we !== !0) {
        ne.prevResolvedValues && (B = {
          ...B,
          ...ne.prevResolvedValues
        });
        continue;
      }
      const Ee = oU(ne.prevProp, oe);
      let Ue = Ee || // If we're making this variant active, we want to always make it active
      ae === b && ne.isActive && !ge && pe || // If we removed a higher-priority variant (i is in reverse order)
      ie > X && pe, Te = !1;
      const rt = Array.isArray(oe) ? oe : [oe];
      let tt = rt.reduce(E(ae), {});
      we === !1 && (tt = {});
      const { prevResolvedValues: ze = {} } = ne, yt = {
        ...ze,
        ...tt
      }, ht = (le) => {
        Ue = !0, F.has(le) && (Te = !0, F.delete(le)), ne.needsAnimating[le] = !0;
        const ke = a.getValue(le);
        ke && (ke.liveStyle = !1);
      };
      for (const le in yt) {
        const ke = tt[le], ye = ze[le];
        if (B.hasOwnProperty(le))
          continue;
        let j = !1;
        TC(ke) && TC(ye) ? j = !jD(ke, ye) || Ee : j = ke !== ye, j ? ke != null ? ht(le) : F.add(le) : ke !== void 0 && F.has(le) ? ht(le) : ne.protectedKeys[le] = !0;
      }
      ne.prevProp = oe, ne.prevResolvedValues = tt, ne.isActive && (B = { ...B, ...tt }), (p || g) && a.blockInitialAnimation && (Ue = !1);
      const vt = ge && Ee;
      Ue && (!vt || Te) && A.push(...rt.map((le) => {
        const ke = { type: ae };
        if (typeof le == "string" && (p || g) && !vt && a.manuallyAnimateOnMount && a.parent) {
          const { parent: ye } = a, j = Uc(ye, le);
          if (ye.enteringChildren && j) {
            const { delayChildren: te } = j.transition || {};
            ke.delay = sD(ye.enteringChildren, a, te);
          }
        }
        return {
          animation: le,
          options: ke
        };
      }));
    }
    if (F.size) {
      const ie = {};
      if (typeof k.initial != "boolean") {
        const ae = Uc(a, Array.isArray(k.initial) ? k.initial[0] : k.initial);
        ae && ae.transition && (ie.transition = ae.transition);
      }
      F.forEach((ae) => {
        const ne = a.getBaseTarget(ae), oe = a.getValue(ae);
        oe && (oe.liveStyle = !0), ie[ae] = ne ?? null;
      }), A.push({ animation: ie });
    }
    let q = !!A.length;
    return p && (k.initial === !1 || k.initial === k.animate) && !a.manuallyAnimateOnMount && (q = !1), p = !1, g = !1, q ? l(A) : Promise.resolve();
  }
  function D(b, k) {
    if (c[b].isActive === k)
      return Promise.resolve();
    a.variantChildren?.forEach((A) => A.animationState?.setActive(b, k)), c[b].isActive = k;
    const M = w(b);
    for (const A in c)
      c[A].protectedKeys = {};
    return M;
  }
  return {
    animateChanges: w,
    setActive: D,
    setAnimateFunction: v,
    getState: () => c,
    reset: () => {
      c = Ub(), g = !0;
    }
  };
}
function oU(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !jD(l, a) : !1;
}
function Ac(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ub() {
  return {
    animate: Ac(!0),
    whileInView: Ac(),
    whileHover: Ac(),
    whileTap: Ac(),
    whileDrag: Ac(),
    whileFocus: Ac(),
    exit: Ac()
  };
}
function AC(a, l) {
  a.min = l.min, a.max = l.max;
}
function Do(a, l) {
  AC(a.x, l.x), AC(a.y, l.y);
}
function zb(a, l) {
  a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin;
}
const FD = 1e-4, lU = 1 - FD, sU = 1 + FD, BD = 0.01, uU = 0 - BD, cU = 0 + BD;
function Li(a) {
  return a.max - a.min;
}
function fU(a, l, c) {
  return Math.abs(a - l) <= c;
}
function jb(a, l, c, p = 0.5) {
  a.origin = p, a.originPoint = hn(l.min, l.max, a.origin), a.scale = Li(c) / Li(l), a.translate = hn(c.min, c.max, a.origin) - a.originPoint, (a.scale >= lU && a.scale <= sU || isNaN(a.scale)) && (a.scale = 1), (a.translate >= uU && a.translate <= cU || isNaN(a.translate)) && (a.translate = 0);
}
function Kh(a, l, c, p) {
  jb(a.x, l.x, c.x, p ? p.originX : void 0), jb(a.y, l.y, c.y, p ? p.originY : void 0);
}
function Fb(a, l, c, p = 0) {
  const g = p ? hn(c.min, c.max, p) : c.min;
  a.min = g + l.min, a.max = a.min + Li(l);
}
function dU(a, l, c, p) {
  Fb(a.x, l.x, c.x, p?.x), Fb(a.y, l.y, c.y, p?.y);
}
function Bb(a, l, c, p = 0) {
  const g = p ? hn(c.min, c.max, p) : c.min;
  a.min = l.min - g, a.max = a.min + Li(l);
}
function Tg(a, l, c, p) {
  Bb(a.x, l.x, c.x, p?.x), Bb(a.y, l.y, c.y, p?.y);
}
function Hb(a, l, c, p, g) {
  return a -= l, a = Cg(a, 1 / c, p), g !== void 0 && (a = Cg(a, 1 / g, p)), a;
}
function pU(a, l = 0, c = 1, p = 0.5, g, E = a, v = a) {
  if (gl.test(l) && (l = parseFloat(l), l = hn(v.min, v.max, l / 100) - v.min), typeof l != "number")
    return;
  let w = hn(E.min, E.max, p);
  a === E && (w -= l), a.min = Hb(a.min, l, c, w, g), a.max = Hb(a.max, l, c, w, g);
}
function Ib(a, l, [c, p, g], E, v) {
  pU(a, l[c], l[p], l[g], l.scale, E, v);
}
const hU = ["x", "scaleX", "originX"], vU = ["y", "scaleY", "originY"];
function $b(a, l, c, p) {
  Ib(a.x, l, hU, c ? c.x : void 0, p ? p.x : void 0), Ib(a.y, l, vU, c ? c.y : void 0, p ? p.y : void 0);
}
function Yb(a) {
  return a.translate === 0 && a.scale === 1;
}
function HD(a) {
  return Yb(a.x) && Yb(a.y);
}
function Wb(a, l) {
  return a.min === l.min && a.max === l.max;
}
function mU(a, l) {
  return Wb(a.x, l.x) && Wb(a.y, l.y);
}
function Gb(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function ID(a, l) {
  return Gb(a.x, l.x) && Gb(a.y, l.y);
}
function Kb(a) {
  return Li(a.x) / Li(a.y);
}
function Qb(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function ml(a) {
  return [a("x"), a("y")];
}
function yU(a, l, c) {
  let p = "";
  const g = a.x.translate / l.x, E = a.y.translate / l.y, v = c?.z || 0;
  if ((g || E || v) && (p = `translate3d(${g}px, ${E}px, ${v}px) `), (l.x !== 1 || l.y !== 1) && (p += `scale(${1 / l.x}, ${1 / l.y}) `), c) {
    const { transformPerspective: b, rotate: k, pathRotation: M, rotateX: A, rotateY: F, skewX: B, skewY: X } = c;
    b && (p = `perspective(${b}px) ${p}`), k && (p += `rotate(${k}deg) `), M && (p += `rotate(${M}deg) `), A && (p += `rotateX(${A}deg) `), F && (p += `rotateY(${F}deg) `), B && (p += `skewX(${B}deg) `), X && (p += `skewY(${X}deg) `);
  }
  const w = a.x.scale * l.x, D = a.y.scale * l.y;
  return (w !== 1 || D !== 1) && (p += `scale(${w}, ${D})`), p || "none";
}
const $D = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], gU = $D.length, Xb = (a) => typeof a == "string" ? parseFloat(a) : a, qb = (a) => typeof a == "number" || $e.test(a);
function SU(a, l, c, p, g, E) {
  g ? (a.opacity = hn(0, c.opacity ?? 1, EU(p)), a.opacityExit = hn(l.opacity ?? 1, 0, CU(p))) : E && (a.opacity = hn(l.opacity ?? 1, c.opacity ?? 1, p));
  for (let v = 0; v < gU; v++) {
    const w = $D[v];
    let D = Zb(l, w), b = Zb(c, w);
    if (D === void 0 && b === void 0)
      continue;
    D || (D = 0), b || (b = 0), D === 0 || b === 0 || qb(D) === qb(b) ? (a[w] = Math.max(hn(Xb(D), Xb(b), p), 0), (gl.test(b) || gl.test(D)) && (a[w] += "%")) : a[w] = b;
  }
  (l.rotate || c.rotate) && (a.rotate = hn(l.rotate || 0, c.rotate || 0, p));
}
function Zb(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const EU = /* @__PURE__ */ YD(0, 0.5, V1), CU = /* @__PURE__ */ YD(0.5, 0.95, qa);
function YD(a, l, c) {
  return (p) => p < a ? 0 : p > l ? 1 : c(/* @__PURE__ */ Xh(a, l, p));
}
function TU(a, l, c) {
  const p = Zr(a) ? a : Ad(a);
  return p.start(ZC("", p, l, c)), p.animation;
}
function Jh(a, l, c, p = { passive: !0 }) {
  return a.addEventListener(l, c, p), () => a.removeEventListener(l, c, p);
}
const xU = (a, l) => a.depth - l.depth;
class wU {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    jC(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    hg(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(xU), this.isDirty = !1, this.children.forEach(l);
  }
}
function RU(a, l) {
  const c = Ai.now(), p = ({ timestamp: g }) => {
    const E = g - c;
    E >= l && (vu(p), a(E - l));
  };
  return vn.setup(p, !0), () => vu(p);
}
function dg(a) {
  return Zr(a) ? a.get() : a;
}
class bU {
  constructor() {
    this.members = [];
  }
  add(l) {
    jC(this.members, l);
    for (let c = this.members.length - 1; c >= 0; c--) {
      const p = this.members[c];
      if (p === l || p === this.lead || p === this.prevLead)
        continue;
      const g = p.instance;
      (!g || g.isConnected === !1) && !p.snapshot && (hg(this.members, p), p.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (hg(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const c = this.members[this.members.length - 1];
      c && this.promote(c);
    }
  }
  relegate(l) {
    for (let c = this.members.indexOf(l) - 1; c >= 0; c--) {
      const p = this.members[c];
      if (p.isPresent !== !1 && p.instance?.isConnected !== !1)
        return this.promote(p), !0;
    }
    return !1;
  }
  promote(l, c) {
    const p = this.lead;
    if (l !== p && (this.prevLead = p, this.lead = l, l.show(), p)) {
      p.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: g } = p.options, { layoutDependency: E } = l.options;
      (g === void 0 || g !== E) && (l.resumeFrom = p, c && (p.preserveOpacity = !0), p.snapshot && (l.snapshot = p.snapshot, l.snapshot.latestValues = p.animationValues || p.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && p.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const pg = {
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
}, tC = ["", "X", "Y", "Z"], DU = 1e3;
let kU = 0;
function nC(a, l, c, p) {
  const { latestValues: g } = l;
  g[a] && (c[a] = g[a], l.setStaticValue(a, 0), p && (p[a] = 0));
}
function WD(a) {
  if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return;
  const { visualElement: l } = a.options;
  if (!l)
    return;
  const c = pD(l);
  if (window.MotionHasOptimisedAnimation(c, "transform")) {
    const { layout: g, layoutId: E } = a.options;
    window.MotionCancelOptimisedAnimation(c, "transform", vn, !(g || E));
  }
  const { parent: p } = a;
  p && !p.hasCheckedOptimisedAppear && WD(p);
}
function GD({ attachResizeListener: a, defaultParent: l, measureScroll: c, checkIsScrollRoot: p, resetTransform: g }) {
  return class {
    constructor(v = {}, w = l?.()) {
      this.id = kU++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(OU), this.nodes.forEach(UU), this.nodes.forEach(zU), this.nodes.forEach(AU);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = v, this.root = w ? w.root || w : this, this.path = w ? [...w.path, w] : [], this.parent = w, this.depth = w ? w.depth + 1 : 0;
      for (let D = 0; D < this.path.length; D++)
        this.path[D].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wU());
    }
    addEventListener(v, w) {
      return this.eventHandlers.has(v) || this.eventHandlers.set(v, new FC()), this.eventHandlers.get(v).add(w);
    }
    notifyListeners(v, ...w) {
      const D = this.eventHandlers.get(v);
      D && D.notify(...w);
    }
    hasListeners(v) {
      return this.eventHandlers.has(v);
    }
    /**
     * Lifecycles
     */
    mount(v) {
      if (this.instance)
        return;
      this.isSVG = rT(v) && !MV(v), this.instance = v;
      const { layoutId: w, layout: D, visualElement: b } = this.options;
      if (b && !b.current && b.mount(v), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (D || w) && (this.isLayoutDirty = !0), a) {
        let k, M = 0;
        const A = () => this.root.updateBlockedByResize = !1;
        vn.read(() => {
          M = window.innerWidth;
        }), a(v, () => {
          const F = window.innerWidth;
          F !== M && (M = F, this.root.updateBlockedByResize = !0, k && k(), k = RU(A, 250), pg.hasAnimatedSinceResize && (pg.hasAnimatedSinceResize = !1, this.nodes.forEach(t1)));
        });
      }
      w && this.root.registerSharedNode(w, this), this.options.animate !== !1 && b && (w || D) && this.addEventListener("didUpdate", ({ delta: k, hasLayoutChanged: M, hasRelativeLayoutChanged: A, layout: F }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const B = this.options.transition || b.getDefaultTransition() || IU, { onLayoutAnimationStart: X, onLayoutAnimationComplete: q } = b.getProps(), ie = !this.targetLayout || !ID(this.targetLayout, F), ae = !M && A;
        if (this.options.layoutRoot || this.resumeFrom || ae || M && (ie || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const ne = {
            ...qC(B, "layout"),
            onPlay: X,
            onComplete: q
          };
          (b.shouldReduceMotion || this.options.layoutRoot) && (ne.delay = 0, ne.type = !1), this.startAnimation(ne), this.setAnimationOrigin(k, ae, ne.path);
        } else
          M || t1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = F;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const v = this.getStack();
      v && v.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), vu(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(jU), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: v } = this.options;
      return v && v.getProps().transformTemplate;
    }
    willUpdate(v = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && WD(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let k = 0; k < this.path.length; k++) {
        const M = this.path[k];
        M.shouldResetTransform = !0, (typeof M.latestValues.x == "string" || typeof M.latestValues.y == "string") && (M.isLayoutDirty = !0), M.updateScroll("snapshot"), M.options.layoutRoot && M.willUpdate(!1);
      }
      const { layoutId: w, layout: D } = this.options;
      if (w === void 0 && !D)
        return;
      const b = this.getTransformTemplate();
      this.prevTransformTemplateValue = b ? b(this.latestValues, "") : void 0, this.updateSnapshot(), v && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const D = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), D && this.nodes.forEach(NU), this.nodes.forEach(Jb);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(e1);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(PU), this.nodes.forEach(VU), this.nodes.forEach(_U), this.nodes.forEach(MU)) : this.nodes.forEach(e1), this.clearAllSnapshots();
      const w = Ai.now();
      qr.delta = Sl(0, 1e3 / 60, w - qr.timestamp), qr.timestamp = w, qr.isProcessing = !0, GE.update.process(qr), GE.preRender.process(qr), GE.render.process(qr), qr.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, tT.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(LU), this.sharedNodes.forEach(FU);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, vn.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      vn.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Li(this.snapshot.measuredBox.x) && !Li(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let D = 0; D < this.path.length; D++)
          this.path[D].updateScroll();
      const v = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = wr()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: w } = this.options;
      w && w.notify("LayoutMeasure", this.layout.layoutBox, v ? v.layoutBox : void 0);
    }
    updateScroll(v = "measure") {
      let w = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === v && (w = !1), w && this.instance) {
        const D = p(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: v,
          isRoot: D,
          offset: c(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : D
        };
      }
    }
    resetTransform() {
      if (!g)
        return;
      const v = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, w = this.projectionDelta && !HD(this.projectionDelta), D = this.getTransformTemplate(), b = D ? D(this.latestValues, "") : void 0, k = b !== this.prevTransformTemplateValue;
      v && this.instance && (w || Lc(this.latestValues) || k) && (g(this.instance, b), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(v = !0) {
      const w = this.measurePageBox();
      let D = this.removeElementScroll(w);
      return v && (D = this.removeTransform(D)), $U(D), {
        animationId: this.root.animationId,
        measuredBox: w,
        layoutBox: D,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: v } = this.options;
      if (!v)
        return wr();
      const w = v.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(YU))) {
        const { scroll: b } = this.root;
        b && (yl(w.x, b.offset.x), yl(w.y, b.offset.y));
      }
      return w;
    }
    removeElementScroll(v) {
      const w = wr();
      if (Do(w, v), this.scroll?.wasRoot)
        return w;
      for (let D = 0; D < this.path.length; D++) {
        const b = this.path[D], { scroll: k, options: M } = b;
        b !== this.root && k && M.layoutScroll && (k.wasRoot && Do(w, v), yl(w.x, k.offset.x), yl(w.y, k.offset.y));
      }
      return w;
    }
    applyTransform(v, w = !1, D) {
      const b = D || wr();
      Do(b, v);
      for (let k = 0; k < this.path.length; k++) {
        const M = this.path[k];
        !w && M.options.layoutScroll && M.scroll && M !== M.root && (yl(b.x, -M.scroll.offset.x), yl(b.y, -M.scroll.offset.y)), Lc(M.latestValues) && fg(b, M.latestValues, M.layout?.layoutBox);
      }
      return Lc(this.latestValues) && fg(b, this.latestValues, this.layout?.layoutBox), b;
    }
    removeTransform(v) {
      const w = wr();
      Do(w, v);
      for (let D = 0; D < this.path.length; D++) {
        const b = this.path[D];
        if (!Lc(b.latestValues))
          continue;
        let k;
        b.instance && (_C(b.latestValues) && b.updateSnapshot(), k = wr(), Do(k, b.measurePageBox())), $b(w, b.latestValues, b.snapshot?.layoutBox, k);
      }
      return Lc(this.latestValues) && $b(w, this.latestValues), w;
    }
    setTargetDelta(v) {
      this.targetDelta = v, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(v) {
      this.options = {
        ...this.options,
        ...v,
        crossfade: v.crossfade !== void 0 ? v.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== qr.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(v = !1) {
      const w = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = w.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = w.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = w.isSharedProjectionDirty);
      const D = !!this.resumingFrom || this !== w;
      if (!(v || D && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: k, layoutId: M } = this.options;
      if (!this.layout || !(k || M))
        return;
      this.resolvedRelativeTargetAt = qr.timestamp;
      const A = this.getClosestProjectingParent();
      A && this.linkedParentVersion !== A.layoutVersion && !A.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && A && A.layout ? this.createRelativeTarget(A, this.layout.layoutBox, A.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = wr(), this.targetWithTransforms = wr()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), dU(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Do(this.target, this.layout.layoutBox), MD(this.target, this.targetDelta)) : Do(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && A && !!A.resumingFrom == !!this.resumingFrom && !A.options.layoutScroll && A.target && this.animationProgress !== 1 ? this.createRelativeTarget(A, this.target, A.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _C(this.parent.latestValues) || _D(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(v, w, D) {
      this.relativeParent = v, this.linkedParentVersion = v.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = wr(), this.relativeTargetOrigin = wr(), Tg(this.relativeTargetOrigin, w, D, this.options.layoutAnchor || void 0), Do(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const v = this.getLead(), w = !!this.resumingFrom || this !== v;
      let D = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (D = !1), w && (this.isSharedProjectionDirty || this.isTransformDirty) && (D = !1), this.resolvedRelativeTargetAt === qr.timestamp && (D = !1), D)
        return;
      const { layout: b, layoutId: k } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(b || k))
        return;
      Do(this.layoutCorrected, this.layout.layoutBox);
      const M = this.treeScale.x, A = this.treeScale.y;
      BV(this.layoutCorrected, this.treeScale, this.path, w), v.layout && !v.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (v.target = v.layout.layoutBox, v.targetWithTransforms = wr());
      const { target: F } = v;
      if (!F) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (zb(this.prevProjectionDelta.x, this.projectionDelta.x), zb(this.prevProjectionDelta.y, this.projectionDelta.y)), Kh(this.projectionDelta, this.layoutCorrected, F, this.latestValues), (this.treeScale.x !== M || this.treeScale.y !== A || !Qb(this.projectionDelta.x, this.prevProjectionDelta.x) || !Qb(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", F));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(v = !0) {
      if (this.options.visualElement?.scheduleRender(), v) {
        const w = this.getStack();
        w && w.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = _d(), this.projectionDelta = _d(), this.projectionDeltaWithTransform = _d();
    }
    setAnimationOrigin(v, w = !1, D) {
      const b = this.snapshot, k = b ? b.latestValues : {}, M = { ...this.latestValues }, A = _d();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !w;
      const F = wr(), B = b ? b.source : void 0, X = this.layout ? this.layout.source : void 0, q = B !== X, ie = this.getStack(), ae = !ie || ie.members.length <= 1, ne = !!(q && !ae && this.options.crossfade === !0 && !this.path.some(HU));
      this.animationProgress = 0;
      let oe;
      const pe = D?.interpolateProjection(v);
      this.mixTargetDelta = (we) => {
        const ge = we / 1e3, Ee = pe?.(ge);
        Ee ? (A.x.translate = Ee.x, A.x.scale = hn(v.x.scale, 1, ge), A.x.origin = v.x.origin, A.x.originPoint = v.x.originPoint, A.y.translate = Ee.y, A.y.scale = hn(v.y.scale, 1, ge), A.y.origin = v.y.origin, A.y.originPoint = v.y.originPoint) : (n1(A.x, v.x, ge), n1(A.y, v.y, ge)), this.setTargetDelta(A), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Tg(F, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), BU(this.relativeTarget, this.relativeTargetOrigin, F, ge), oe && mU(this.relativeTarget, oe) && (this.isProjectionDirty = !1), oe || (oe = wr()), Do(oe, this.relativeTarget)), q && (this.animationValues = M, SU(M, k, this.latestValues, ge, ne, ae)), Ee && Ee.rotate !== void 0 && (this.animationValues || (this.animationValues = M), this.animationValues.pathRotation = Ee.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = ge;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(v) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (vu(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = vn.update(() => {
        pg.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ad(0)), this.motionValue.jump(0, !1), this.currentAnimation = TU(this.motionValue, [0, 1e3], {
          ...v,
          velocity: 0,
          isSync: !0,
          onUpdate: (w) => {
            this.mixTargetDelta(w), v.onUpdate && v.onUpdate(w);
          },
          onComplete: () => {
            v.onComplete && v.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const v = this.getStack();
      v && v.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(DU), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const v = this.getLead();
      let { targetWithTransforms: w, target: D, layout: b, latestValues: k } = v;
      if (!(!w || !D || !b)) {
        if (this !== v && this.layout && b && KD(this.options.animationType, this.layout.layoutBox, b.layoutBox)) {
          D = this.target || wr();
          const M = Li(this.layout.layoutBox.x);
          D.x.min = v.target.x.min, D.x.max = D.x.min + M;
          const A = Li(this.layout.layoutBox.y);
          D.y.min = v.target.y.min, D.y.max = D.y.min + A;
        }
        Do(w, D), fg(w, k), Kh(this.projectionDeltaWithTransform, this.layoutCorrected, w, k);
      }
    }
    registerSharedNode(v, w) {
      this.sharedNodes.has(v) || this.sharedNodes.set(v, new bU()), this.sharedNodes.get(v).add(w);
      const b = w.options.initialPromotionConfig;
      w.promote({
        transition: b ? b.transition : void 0,
        preserveFollowOpacity: b && b.shouldPreserveFollowOpacity ? b.shouldPreserveFollowOpacity(w) : void 0
      });
    }
    isLead() {
      const v = this.getStack();
      return v ? v.lead === this : !0;
    }
    getLead() {
      const { layoutId: v } = this.options;
      return v ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: v } = this.options;
      return v ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: v } = this.options;
      if (v)
        return this.root.sharedNodes.get(v);
    }
    promote({ needsReset: v, transition: w, preserveFollowOpacity: D } = {}) {
      const b = this.getStack();
      b && b.promote(this, D), v && (this.projectionDelta = void 0, this.needsReset = !0), w && this.setOptions({ transition: w });
    }
    relegate() {
      const v = this.getStack();
      return v ? v.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: v } = this.options;
      if (!v)
        return;
      let w = !1;
      const { latestValues: D } = v;
      if ((D.z || D.rotate || D.rotateX || D.rotateY || D.rotateZ || D.skewX || D.skewY) && (w = !0), !w)
        return;
      const b = {};
      D.z && nC("z", v, b, this.animationValues);
      for (let k = 0; k < tC.length; k++)
        nC(`rotate${tC[k]}`, v, b, this.animationValues), nC(`skew${tC[k]}`, v, b, this.animationValues);
      v.render();
      for (const k in b)
        v.setStaticValue(k, b[k]), this.animationValues && (this.animationValues[k] = b[k]);
      v.scheduleRender();
    }
    applyProjectionStyles(v, w) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        v.visibility = "hidden";
        return;
      }
      const D = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, v.visibility = "", v.opacity = "", v.pointerEvents = dg(w?.pointerEvents) || "", v.transform = D ? D(this.latestValues, "") : "none";
        return;
      }
      const b = this.getLead();
      if (!this.projectionDelta || !this.layout || !b.target) {
        this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = dg(w?.pointerEvents) || ""), this.hasProjected && !Lc(this.latestValues) && (v.transform = D ? D({}, "") : "none", this.hasProjected = !1);
        return;
      }
      v.visibility = "";
      const k = b.animationValues || b.latestValues;
      this.applyTransformsToTarget();
      let M = yU(this.projectionDeltaWithTransform, this.treeScale, k);
      D && (M = D(k, M)), v.transform = M;
      const { x: A, y: F } = this.projectionDelta;
      v.transformOrigin = `${A.origin * 100}% ${F.origin * 100}% 0`, b.animationValues ? v.opacity = b === this ? k.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : k.opacityExit : v.opacity = b === this ? k.opacity !== void 0 ? k.opacity : "" : k.opacityExit !== void 0 ? k.opacityExit : 0;
      for (const B in OC) {
        if (k[B] === void 0)
          continue;
        const { correct: X, applyTo: q, isCSSVariable: ie } = OC[B], ae = M === "none" ? k[B] : X(k[B], b);
        if (q) {
          const ne = q.length;
          for (let oe = 0; oe < ne; oe++)
            v[q[oe]] = ae;
        } else
          ie ? this.options.visualElement.renderState.vars[B] = ae : v[B] = ae;
      }
      this.options.layoutId && (v.pointerEvents = b === this ? dg(w?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((v) => v.currentAnimation?.stop()), this.root.nodes.forEach(Jb), this.root.sharedNodes.clear();
    }
  };
}
function _U(a) {
  a.updateLayout();
}
function MU(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: c, measuredBox: p } = a.layout, { animationType: g } = a.options, E = l.source !== a.layout.source;
    if (g === "size")
      ml((k) => {
        const M = E ? l.measuredBox[k] : l.layoutBox[k], A = Li(M);
        M.min = c[k].min, M.max = M.min + A;
      });
    else if (g === "x" || g === "y") {
      const k = g === "x" ? "y" : "x";
      AC(E ? l.measuredBox[k] : l.layoutBox[k], c[k]);
    } else KD(g, l.layoutBox, c) && ml((k) => {
      const M = E ? l.measuredBox[k] : l.layoutBox[k], A = Li(c[k]);
      M.max = M.min + A, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[k].max = a.relativeTarget[k].min + A);
    });
    const v = _d();
    Kh(v, c, l.layoutBox);
    const w = _d();
    E ? Kh(w, a.applyTransform(p, !0), l.measuredBox) : Kh(w, c, l.layoutBox);
    const D = !HD(v);
    let b = !1;
    if (!a.resumeFrom) {
      const k = a.getClosestProjectingParent();
      if (k && !k.resumeFrom) {
        const { snapshot: M, layout: A } = k;
        if (M && A) {
          const F = a.options.layoutAnchor || void 0, B = wr();
          Tg(B, l.layoutBox, M.layoutBox, F);
          const X = wr();
          Tg(X, c, A.layoutBox, F), ID(B, X) || (b = !0), k.options.layoutRoot && (a.relativeTarget = X, a.relativeTargetOrigin = B, a.relativeParent = k);
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: c,
      snapshot: l,
      delta: w,
      layoutDelta: v,
      hasLayoutChanged: D,
      hasRelativeLayoutChanged: b
    });
  } else if (a.isLead()) {
    const { onExitComplete: c } = a.options;
    c && c();
  }
  a.options.transition = void 0;
}
function OU(a) {
  a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function AU(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function LU(a) {
  a.clearSnapshot();
}
function Jb(a) {
  a.clearMeasurements();
}
function NU(a) {
  a.isLayoutDirty = !0, a.updateLayout();
}
function e1(a) {
  a.isLayoutDirty = !1;
}
function PU(a) {
  a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0);
}
function VU(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform();
}
function t1(a) {
  a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0;
}
function UU(a) {
  a.resolveTargetDelta();
}
function zU(a) {
  a.calcProjection();
}
function jU(a) {
  a.resetSkewAndRotation();
}
function FU(a) {
  a.removeLeadSnapshot();
}
function n1(a, l, c) {
  a.translate = hn(l.translate, 0, c), a.scale = hn(l.scale, 1, c), a.origin = l.origin, a.originPoint = l.originPoint;
}
function r1(a, l, c, p) {
  a.min = hn(l.min, c.min, p), a.max = hn(l.max, c.max, p);
}
function BU(a, l, c, p) {
  r1(a.x, l.x, c.x, p), r1(a.y, l.y, c.y, p);
}
function HU(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const IU = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, i1 = (a) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), a1 = i1("applewebkit/") && !i1("chrome/") ? Math.round : qa;
function o1(a) {
  a.min = a1(a.min), a.max = a1(a.max);
}
function $U(a) {
  o1(a.x), o1(a.y);
}
function KD(a, l, c) {
  return a === "position" || a === "preserve-aspect" && !fU(Kb(l), Kb(c), 0.2);
}
function YU(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const WU = GD({
  attachResizeListener: (a, l) => Jh(a, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), rC = {
  current: void 0
}, QD = GD({
  measureScroll: (a) => ({
    x: a.scrollLeft,
    y: a.scrollTop
  }),
  defaultParent: () => {
    if (!rC.current) {
      const a = new WU({});
      a.mount(window), a.setOptions({ layoutScroll: !0 }), rC.current = a;
    }
    return rC.current;
  },
  resetTransform: (a, l) => {
    a.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed"
}), sT = Le.createContext({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function l1(a, l) {
  if (typeof a == "function")
    return a(l);
  a != null && (a.current = l);
}
function GU(...a) {
  return (l) => {
    let c = !1;
    const p = a.map((g) => {
      const E = l1(g, l);
      return !c && typeof E == "function" && (c = !0), E;
    });
    if (c)
      return () => {
        for (let g = 0; g < p.length; g++) {
          const E = p[g];
          typeof E == "function" ? E() : l1(a[g], null);
        }
      };
  };
}
function KU(...a) {
  return Le.useCallback(GU(...a), a);
}
class QU extends Le.Component {
  getSnapshotBeforeUpdate(l) {
    const c = this.props.childRef.current;
    if (og(c) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const p = c.offsetParent, g = og(p) && p.offsetWidth || 0, E = og(p) && p.offsetHeight || 0, v = getComputedStyle(c), w = this.props.sizeRef.current;
      w.height = parseFloat(v.height), w.width = parseFloat(v.width), w.top = c.offsetTop, w.left = c.offsetLeft, w.right = g - w.width - w.left, w.bottom = E - w.height - w.top, w.direction = v.direction;
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
function XU({ children: a, isPresent: l, anchorX: c, anchorY: p, root: g, pop: E }) {
  const v = Le.useId(), w = Le.useRef(null), D = Le.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: b } = Le.useContext(sT), k = a.props?.ref ?? a?.ref, M = KU(w, k);
  return Le.useInsertionEffect(() => {
    const { width: A, height: F, top: B, left: X, right: q, bottom: ie, direction: ae } = D.current;
    if (l || E === !1 || !w.current || !A || !F)
      return;
    const ne = ae === "rtl", oe = c === "left" ? ne ? `right: ${q}` : `left: ${X}` : ne ? `left: ${X}` : `right: ${q}`, pe = p === "bottom" ? `bottom: ${ie}` : `top: ${B}`;
    w.current.dataset.motionPopId = v;
    const we = document.createElement("style");
    b && (we.nonce = b);
    const ge = g ?? document.head;
    return ge.appendChild(we), we.sheet && we.sheet.insertRule(`
          [data-motion-pop-id="${v}"] {
            position: absolute !important;
            width: ${A}px !important;
            height: ${F}px !important;
            ${oe}px !important;
            ${pe}px !important;
          }
        `), () => {
      w.current?.removeAttribute("data-motion-pop-id"), ge.contains(we) && ge.removeChild(we);
    };
  }, [l]), Me.jsx(QU, { isPresent: l, childRef: w, sizeRef: D, pop: E, children: E === !1 ? a : Le.cloneElement(a, { ref: M }) });
}
const qU = ({ children: a, initial: l, isPresent: c, onExitComplete: p, custom: g, presenceAffectsLayout: E, mode: v, anchorX: w, anchorY: D, root: b }) => {
  const k = UC(ZU), M = Le.useId(), A = Le.useRef(c), F = Le.useRef(p);
  zC(() => {
    A.current = c, F.current = p;
  });
  let B = !0, X = Le.useMemo(() => (B = !1, {
    id: M,
    initial: l,
    isPresent: c,
    custom: g,
    onExitComplete: (q) => {
      k.set(q, !0);
      for (const ie of k.values())
        if (!ie)
          return;
      p && p();
    },
    register: (q) => (k.set(q, !1), () => {
      k.delete(q), !A.current && !k.size && F.current?.();
    })
  }), [c, k, p]);
  return E && B && (X = { ...X }), Le.useMemo(() => {
    k.forEach((q, ie) => k.set(ie, !1));
  }, [c]), Le.useEffect(() => {
    !c && !k.size && p && p();
  }, [c]), a = Me.jsx(XU, { pop: v === "popLayout", isPresent: c, anchorX: w, anchorY: D, root: b, children: a }), Me.jsx(wg.Provider, { value: X, children: a });
};
function ZU() {
  return /* @__PURE__ */ new Map();
}
function XD(a = !0) {
  const l = Le.useContext(wg);
  if (l === null)
    return [!0, null];
  const { isPresent: c, onExitComplete: p, register: g } = l, E = Le.useId();
  Le.useEffect(() => {
    if (a)
      return g(E);
  }, [a]);
  const v = Le.useCallback(() => a && p && p(E), [E, p, a]);
  return !c && p ? [!1, v] : [!0];
}
const ng = (a) => a.key || "";
function s1(a) {
  const l = [];
  return Le.Children.forEach(a, (c) => {
    Le.isValidElement(c) && l.push(c);
  }), l;
}
const JU = ({ children: a, custom: l, initial: c = !0, onExitComplete: p, presenceAffectsLayout: g = !0, mode: E = "sync", propagate: v = !1, anchorX: w = "left", anchorY: D = "top", root: b }) => {
  const [k, M] = XD(v), A = Le.useMemo(() => s1(a), [a]), F = v && !k ? [] : A.map(ng), B = Le.useRef(!0), X = Le.useRef(A), q = UC(() => /* @__PURE__ */ new Map()), ie = Le.useRef(/* @__PURE__ */ new Set()), [ae, ne] = Le.useState(A), [oe, pe] = Le.useState(A);
  zC(() => {
    B.current = !1, X.current = A;
    for (let Ee = 0; Ee < oe.length; Ee++) {
      const Ue = ng(oe[Ee]);
      F.includes(Ue) ? (q.delete(Ue), ie.current.delete(Ue)) : q.get(Ue) !== !0 && q.set(Ue, !1);
    }
  }, [oe, F.length, F.join("-")]);
  const we = [];
  if (A !== ae) {
    let Ee = [...A];
    for (let Ue = 0; Ue < oe.length; Ue++) {
      const Te = oe[Ue], rt = ng(Te);
      F.includes(rt) || (Ee.splice(Ue, 0, Te), we.push(Te));
    }
    return E === "wait" && we.length && (Ee = we), pe(s1(Ee)), ne(A), null;
  }
  process.env.NODE_ENV !== "production" && E === "wait" && oe.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: ge } = Le.useContext(VC);
  return Me.jsx(Me.Fragment, { children: oe.map((Ee) => {
    const Ue = ng(Ee), Te = v && !k ? !1 : A === oe || F.includes(Ue), rt = () => {
      if (ie.current.has(Ue))
        return;
      if (q.has(Ue))
        ie.current.add(Ue), q.set(Ue, !0);
      else
        return;
      let tt = !0;
      q.forEach((ze) => {
        ze || (tt = !1);
      }), tt && (ge?.(), pe(X.current), v && M?.(), p && p());
    };
    return Me.jsx(qU, { isPresent: Te, initial: !B.current || c ? void 0 : !1, custom: l, presenceAffectsLayout: g, mode: E, root: b, onExitComplete: Te ? void 0 : rt, anchorX: w, anchorY: D, children: Ee }, Ue);
  }) });
}, qD = Le.createContext({ strict: !1 }), u1 = {
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
let c1 = !1;
function ez() {
  if (c1)
    return;
  const a = {};
  for (const l in u1)
    a[l] = {
      isEnabled: (c) => u1[l].some((p) => !!c[p])
    };
  bD(a), c1 = !0;
}
function ZD() {
  return ez(), UV();
}
function tz(a) {
  const l = ZD();
  for (const c in a)
    l[c] = {
      ...l[c],
      ...a[c]
    };
  bD(l);
}
const nz = /* @__PURE__ */ new Set([
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
function xg(a) {
  return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || nz.has(a);
}
let JD = (a) => !xg(a);
function rz(a) {
  typeof a == "function" && (JD = (l) => l.startsWith("on") ? !xg(l) : a(l));
}
try {
  rz(require("@emotion/is-prop-valid").default);
} catch {
}
function iz(a, l, c) {
  const p = {};
  for (const g in a)
    g === "values" && typeof a.values == "object" || Zr(a[g]) || (JD(g) || c === !0 && xg(g) || !l && !xg(g) || // If trying to use native HTML drag events, forward drag listeners
    a.draggable && g.startsWith("onDrag")) && (p[g] = a[g]);
  return p;
}
const kg = /* @__PURE__ */ Le.createContext({});
function az(a, l) {
  if (Dg(a)) {
    const { initial: c, animate: p } = a;
    return {
      initial: c === !1 || Zh(c) ? c : void 0,
      animate: Zh(p) ? p : void 0
    };
  }
  return a.inherit !== !1 ? l : {};
}
function oz(a) {
  const { initial: l, animate: c } = az(a, Le.useContext(kg));
  return Le.useMemo(() => ({ initial: l, animate: c }), [f1(l), f1(c)]);
}
function f1(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const uT = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ek(a, l, c) {
  for (const p in l)
    !Zr(l[p]) && !LD(p, c) && (a[p] = l[p]);
}
function lz({ transformTemplate: a }, l) {
  return Le.useMemo(() => {
    const c = uT();
    return oT(c, l, a), Object.assign({}, c.vars, c.style);
  }, [l]);
}
function sz(a, l) {
  const c = a.style || {}, p = {};
  return ek(p, c, a), Object.assign(p, lz(a, l)), p;
}
function uz(a, l) {
  const c = {}, p = sz(a, l);
  return a.drag && a.dragListener !== !1 && (c.draggable = !1, p.userSelect = p.WebkitUserSelect = p.WebkitTouchCallout = "none", p.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (c.tabIndex = 0), c.style = p, c;
}
const tk = () => ({
  ...uT(),
  attrs: {}
});
function cz(a, l, c, p) {
  const g = Le.useMemo(() => {
    const E = tk();
    return ND(E, l, VD(p), a.transformTemplate, a.style), {
      ...E.attrs,
      style: { ...E.style }
    };
  }, [l]);
  if (a.style) {
    const E = {};
    ek(E, a.style, a), g.style = { ...E, ...g.style };
  }
  return g;
}
const fz = [
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
function cT(a) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof a != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    a.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(fz.indexOf(a) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(a))
    )
  );
}
function dz(a, l, c, { latestValues: p }, g, E = !1, v) {
  const D = (v ?? cT(a) ? cz : uz)(l, p, g, a), b = iz(l, typeof a == "string", E), k = a !== Le.Fragment ? { ...b, ...D, ref: c } : {}, { children: M } = l, A = Le.useMemo(() => Zr(M) ? M.get() : M, [M]);
  return Le.createElement(a, {
    ...k,
    children: A
  });
}
function pz({ scrapeMotionValuesFromProps: a, createRenderState: l }, c, p, g) {
  return {
    latestValues: hz(c, p, g, a),
    renderState: l()
  };
}
function hz(a, l, c, p) {
  const g = {}, E = p(a, {});
  for (const A in E)
    g[A] = dg(E[A]);
  let { initial: v, animate: w } = a;
  const D = Dg(a), b = wD(a);
  l && b && !D && a.inherit !== !1 && (v === void 0 && (v = l.initial), w === void 0 && (w = l.animate));
  let k = c ? c.initial === !1 : !1;
  k = k || v === !1;
  const M = k ? w : v;
  if (M && typeof M != "boolean" && !bg(M)) {
    const A = Array.isArray(M) ? M : [M];
    for (let F = 0; F < A.length; F++) {
      const B = JC(a, A[F]);
      if (B) {
        const { transitionEnd: X, transition: q, ...ie } = B;
        for (const ae in ie) {
          let ne = ie[ae];
          if (Array.isArray(ne)) {
            const oe = k ? ne.length - 1 : 0;
            ne = ne[oe];
          }
          ne !== null && (g[ae] = ne);
        }
        for (const ae in X)
          g[ae] = X[ae];
      }
    }
  }
  return g;
}
const nk = (a) => (l, c) => {
  const p = Le.useContext(kg), g = Le.useContext(wg), E = () => pz(a, l, p, g);
  return c ? E() : UC(E);
}, vz = /* @__PURE__ */ nk({
  scrapeMotionValuesFromProps: lT,
  createRenderState: uT
}), mz = /* @__PURE__ */ nk({
  scrapeMotionValuesFromProps: UD,
  createRenderState: tk
}), yz = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function gz(a, l, c) {
  const p = Le.useRef(c);
  Le.useInsertionEffect(() => {
    p.current = c;
  });
  const g = Le.useRef(null);
  return Le.useCallback((E) => {
    E && a.onMount?.(E), l && (E ? l.mount(E) : l.unmount());
    const v = p.current;
    if (typeof v == "function")
      if (E) {
        const w = v(E);
        typeof w == "function" && (g.current = w);
      } else g.current ? (g.current(), g.current = null) : v(E);
    else v && (v.current = E);
  }, [l]);
}
const rk = Le.createContext({});
function Rd(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function Sz(a, l, c, p, g, E) {
  const { visualElement: v } = Le.useContext(kg), w = Le.useContext(qD), D = Le.useContext(wg), b = Le.useContext(sT), k = b.reducedMotion, M = b.skipAnimations, A = Le.useRef(null), F = Le.useRef(!1);
  p = p || w.renderer, !A.current && p && (A.current = p(a, {
    visualState: l,
    parent: v,
    props: c,
    presenceContext: D,
    blockInitialAnimation: D ? D.initial === !1 : !1,
    reducedMotionConfig: k,
    skipAnimations: M,
    isSVG: E
  }), F.current && A.current && (A.current.manuallyAnimateOnMount = !0));
  const B = A.current, X = Le.useContext(rk);
  B && !B.projection && g && (B.type === "html" || B.type === "svg") && Ez(A.current, c, g, X);
  const q = Le.useRef(!1);
  Le.useInsertionEffect(() => {
    B && q.current && B.update(c, D);
  });
  const ie = c[dD], ae = Le.useRef(!!ie && typeof window < "u" && !window.MotionHandoffIsComplete?.(ie) && window.MotionHasOptimisedAnimation?.(ie));
  return zC(() => {
    F.current = !0, B && (q.current = !0, window.MotionIsMounted = !0, B.updateFeatures(), B.scheduleRenderMicrotask(), ae.current && B.animationState && B.animationState.animateChanges());
  }), Le.useEffect(() => {
    B && (!ae.current && B.animationState && B.animationState.animateChanges(), ae.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(ie);
    }), ae.current = !1), B.enteringChildren = void 0);
  }), B;
}
function Ez(a, l, c, p) {
  const { layoutId: g, layout: E, drag: v, dragConstraints: w, layoutScroll: D, layoutRoot: b, layoutAnchor: k, layoutCrossfade: M } = l;
  a.projection = new c(a.latestValues, l["data-framer-portal-id"] ? void 0 : ik(a.parent)), a.projection.setOptions({
    layoutId: g,
    layout: E,
    alwaysMeasureLayout: !!v || w && Rd(w),
    visualElement: a,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof E == "string" ? E : "both",
    initialPromotionConfig: p,
    crossfade: M,
    layoutScroll: D,
    layoutRoot: b,
    layoutAnchor: k
  });
}
function ik(a) {
  if (a)
    return a.options.allowProjection !== !1 ? a.projection : ik(a.parent);
}
function iC(a, { forwardMotionProps: l = !1, type: c } = {}, p, g) {
  p && tz(p);
  const E = c ? c === "svg" : cT(a), v = E ? mz : vz;
  function w(b, k) {
    let M;
    const A = {
      ...Le.useContext(sT),
      ...b,
      layoutId: Cz(b)
    }, { isStatic: F } = A, B = oz(b), X = v(b, F);
    if (!F && typeof window < "u") {
      Tz(A, p);
      const q = xz(A);
      M = q.MeasureLayout, B.visualElement = Sz(a, X, A, g, q.ProjectionNode, E);
    }
    return Me.jsxs(kg.Provider, { value: B, children: [M && B.visualElement ? Me.jsx(M, { visualElement: B.visualElement, ...A }) : null, dz(a, b, gz(X, B.visualElement, k), X, F, l, E)] });
  }
  w.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const D = Le.forwardRef(w);
  return D[yz] = a, D;
}
function Cz({ layoutId: a }) {
  const l = Le.useContext(VC).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function Tz(a, l) {
  const c = Le.useContext(qD).strict;
  if (process.env.NODE_ENV !== "production" && l && c) {
    const p = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    a.ignoreStrict ? Ld(!1, p, "lazy-strict-mode") : vs(!1, p, "lazy-strict-mode");
  }
}
function xz(a) {
  const l = ZD(), { drag: c, layout: p } = l;
  if (!c && !p)
    return {};
  const g = { ...c, ...p };
  return {
    MeasureLayout: c?.isEnabled(a) || p?.isEnabled(a) ? g.MeasureLayout : void 0,
    ProjectionNode: g.ProjectionNode
  };
}
function wz(a, l) {
  if (typeof Proxy > "u")
    return iC;
  const c = /* @__PURE__ */ new Map(), p = (E, v) => iC(E, v, a, l), g = (E, v) => (process.env.NODE_ENV !== "production" && BC(!1, "motion() is deprecated. Use motion.create() instead."), p(E, v));
  return new Proxy(g, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (E, v) => v === "create" ? p : (c.has(v) || c.set(v, iC(v, void 0, a, l)), c.get(v))
  });
}
const Rz = (a, l) => l.isSVG ?? cT(a) ? new eU(l) : new KV(l, {
  allowProjection: a !== Le.Fragment
});
class bz extends mu {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = aU(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    bg(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: c } = this.node.prevProps || {};
    l !== c && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Dz = 0;
class kz extends mu {
  constructor() {
    super(...arguments), this.id = Dz++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: c } = this.node.presenceContext, { isPresent: p } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === p)
      return;
    if (l && p === !1) {
      if (this.isExitComplete) {
        const { initial: E, custom: v } = this.node.getProps();
        if (typeof E == "string" || typeof E == "object" && E !== null && !Array.isArray(E)) {
          const w = Uc(this.node, E, v);
          if (w) {
            const { transition: D, transitionEnd: b, ...k } = w;
            for (const M in k)
              this.node.getValue(M)?.jump(k[M]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const g = this.node.animationState.setActive("exit", !l);
    c && !l && g.then(() => {
      this.isExitComplete = !0, c(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: c } = this.node.presenceContext || {};
    c && c(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const _z = {
  animation: {
    Feature: bz
  },
  exit: {
    Feature: kz
  }
};
function iv(a) {
  return {
    point: {
      x: a.pageX,
      y: a.pageY
    }
  };
}
const Mz = (a) => (l) => nT(l) && a(l, iv(l));
function Qh(a, l, c, p) {
  return Jh(a, l, Mz(c), p);
}
const ak = ({ current: a }) => a ? a.ownerDocument.defaultView : null, d1 = (a, l) => Math.abs(a - l);
function Oz(a, l) {
  const c = d1(a.x, l.x), p = d1(a.y, l.y);
  return Math.sqrt(c ** 2 + p ** 2);
}
const p1 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class ok {
  constructor(l, c, { transformPagePoint: p, contextWindow: g = window, dragSnapToOrigin: E = !1, distanceThreshold: v = 3, element: w } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (B) => {
      this.handleScroll(B.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = rg(this.lastRawMoveEventInfo, this.transformPagePoint));
      const B = aC(this.lastMoveEventInfo, this.history), X = this.startEvent !== null, q = Oz(B.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!X && !q)
        return;
      const { point: ie } = B, { timestamp: ae } = qr;
      this.history.push({ ...ie, timestamp: ae });
      const { onStart: ne, onMove: oe } = this.handlers;
      X || (ne && ne(this.lastMoveEvent, B), this.startEvent = this.lastMoveEvent), oe && oe(this.lastMoveEvent, B);
    }, this.handlePointerMove = (B, X) => {
      this.lastMoveEvent = B, this.lastRawMoveEventInfo = X, this.lastMoveEventInfo = rg(X, this.transformPagePoint), vn.update(this.updatePoint, !0);
    }, this.handlePointerUp = (B, X) => {
      this.end();
      const { onEnd: q, onSessionEnd: ie, resumeAnimation: ae } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && ae && ae(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const ne = aC(B.type === "pointercancel" ? this.lastMoveEventInfo : rg(X, this.transformPagePoint), this.history);
      this.startEvent && q && q(B, ne), ie && ie(B, ne);
    }, !nT(l))
      return;
    this.dragSnapToOrigin = E, this.handlers = c, this.transformPagePoint = p, this.distanceThreshold = v, this.contextWindow = g || window;
    const D = iv(l), b = rg(D, this.transformPagePoint), { point: k } = b, { timestamp: M } = qr;
    this.history = [{ ...k, timestamp: M }];
    const { onSessionStart: A } = c;
    A && A(l, aC(b, this.history));
    const F = { passive: !0, capture: !0 };
    this.removeListeners = tv(Qh(this.contextWindow, "pointermove", this.handlePointerMove, F), Qh(this.contextWindow, "pointerup", this.handlePointerUp, F), Qh(this.contextWindow, "pointercancel", this.handlePointerUp, F)), w && this.startScrollTracking(w);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let c = l.parentElement;
    for (; c; ) {
      const p = getComputedStyle(c);
      (p1.has(p.overflowX) || p1.has(p.overflowY)) && this.scrollPositions.set(c, {
        x: c.scrollLeft,
        y: c.scrollTop
      }), c = c.parentElement;
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
  handleScroll(l) {
    const c = this.scrollPositions.get(l);
    if (!c)
      return;
    const p = l === window, g = p ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, E = { x: g.x - c.x, y: g.y - c.y };
    E.x === 0 && E.y === 0 || (p ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += E.x, this.lastMoveEventInfo.point.y += E.y) : this.history.length > 0 && (this.history[0].x -= E.x, this.history[0].y -= E.y), this.scrollPositions.set(l, g), vn.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), vu(this.updatePoint);
  }
}
function rg(a, l) {
  return l ? { point: l(a.point) } : a;
}
function h1(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function aC({ point: a }, l) {
  return {
    point: a,
    delta: h1(a, lk(l)),
    offset: h1(a, Az(l)),
    velocity: Lz(l, 0.1)
  };
}
function Az(a) {
  return a[0];
}
function lk(a) {
  return a[a.length - 1];
}
function Lz(a, l) {
  if (a.length < 2)
    return { x: 0, y: 0 };
  let c = a.length - 1, p = null;
  const g = lk(a);
  for (; c >= 0 && (p = a[c], !(g.timestamp - p.timestamp > /* @__PURE__ */ ta(l))); )
    c--;
  if (!p)
    return { x: 0, y: 0 };
  p === a[0] && a.length > 2 && g.timestamp - p.timestamp > /* @__PURE__ */ ta(l) * 2 && (p = a[1]);
  const E = /* @__PURE__ */ Xa(g.timestamp - p.timestamp);
  if (E === 0)
    return { x: 0, y: 0 };
  const v = {
    x: (g.x - p.x) / E,
    y: (g.y - p.y) / E
  };
  return v.x === 1 / 0 && (v.x = 0), v.y === 1 / 0 && (v.y = 0), v;
}
function Nz(a, { min: l, max: c }, p) {
  return l !== void 0 && a < l ? a = p ? hn(l, a, p.min) : Math.max(a, l) : c !== void 0 && a > c && (a = p ? hn(c, a, p.max) : Math.min(a, c)), a;
}
function v1(a, l, c) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: c !== void 0 ? a.max + c - (a.max - a.min) : void 0
  };
}
function Pz(a, { top: l, left: c, bottom: p, right: g }) {
  return {
    x: v1(a.x, c, g),
    y: v1(a.y, l, p)
  };
}
function m1(a, l) {
  let c = l.min - a.min, p = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([c, p] = [p, c]), { min: c, max: p };
}
function Vz(a, l) {
  return {
    x: m1(a.x, l.x),
    y: m1(a.y, l.y)
  };
}
function Uz(a, l) {
  let c = 0.5;
  const p = Li(a), g = Li(l);
  return g > p ? c = /* @__PURE__ */ Xh(l.min, l.max - p, a.min) : p > g && (c = /* @__PURE__ */ Xh(a.min, a.max - g, l.min)), Sl(0, 1, c);
}
function zz(a, l) {
  const c = {};
  return l.min !== void 0 && (c.min = l.min - a.min), l.max !== void 0 && (c.max = l.max - a.min), c;
}
const LC = 0.35;
function jz(a = LC) {
  return a === !1 ? a = 0 : a === !0 && (a = LC), {
    x: y1(a, "left", "right"),
    y: y1(a, "top", "bottom")
  };
}
function y1(a, l, c) {
  return {
    min: g1(a, l),
    max: g1(a, c)
  };
}
function g1(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const Fz = /* @__PURE__ */ new WeakMap();
class Bz {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = wr(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: c = !1, distanceThreshold: p } = {}) {
    const { presenceContext: g } = this.visualElement;
    if (g && g.isPresent === !1)
      return;
    const E = (M) => {
      c && this.snapToCursor(iv(M).point), this.stopAnimation();
    }, v = (M, A) => {
      const { drag: F, dragPropagation: B, onDragStart: X } = this.getProps();
      if (F && !B && (this.openDragLock && this.openDragLock(), this.openDragLock = pV(F), !this.openDragLock))
        return;
      this.latestPointerEvent = M, this.latestPanInfo = A, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ml((ie) => {
        let ae = this.getAxisMotionValue(ie).get() || 0;
        if (gl.test(ae)) {
          const { projection: ne } = this.visualElement;
          if (ne && ne.layout) {
            const oe = ne.layout.layoutBox[ie];
            oe && (ae = Li(oe) * (parseFloat(ae) / 100));
          }
        }
        this.originPoint[ie] = ae;
      }), X && vn.update(() => X(M, A), !1, !0), xC(this.visualElement, "transform");
      const { animationState: q } = this.visualElement;
      q && q.setActive("whileDrag", !0);
    }, w = (M, A) => {
      this.latestPointerEvent = M, this.latestPanInfo = A;
      const { dragPropagation: F, dragDirectionLock: B, onDirectionLock: X, onDrag: q } = this.getProps();
      if (!F && !this.openDragLock)
        return;
      const { offset: ie } = A;
      if (B && this.currentDirection === null) {
        this.currentDirection = Iz(ie), this.currentDirection !== null && X && X(this.currentDirection);
        return;
      }
      this.updateAxis("x", A.point, ie), this.updateAxis("y", A.point, ie), this.visualElement.render(), q && vn.update(() => q(M, A), !1, !0);
    }, D = (M, A) => {
      this.latestPointerEvent = M, this.latestPanInfo = A, this.stop(M, A), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, b = () => {
      const { dragSnapToOrigin: M } = this.getProps();
      (M || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: k } = this.getProps();
    this.panSession = new ok(l, {
      onSessionStart: E,
      onStart: v,
      onMove: w,
      onSessionEnd: D,
      resumeAnimation: b
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: k,
      distanceThreshold: p,
      contextWindow: ak(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, c) {
    const p = l || this.latestPointerEvent, g = c || this.latestPanInfo, E = this.isDragging;
    if (this.cancel(), !E || !g || !p)
      return;
    const { velocity: v } = g;
    this.startAnimation(v);
    const { onDragEnd: w } = this.getProps();
    w && vn.postRender(() => w(p, g));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: c } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: p } = this.getProps();
    !p && this.openDragLock && (this.openDragLock(), this.openDragLock = null), c && c.setActive("whileDrag", !1);
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
  updateAxis(l, c, p) {
    const { drag: g } = this.getProps();
    if (!p || !ig(l, g, this.currentDirection))
      return;
    const E = this.getAxisMotionValue(l);
    let v = this.originPoint[l] + p[l];
    this.constraints && this.constraints[l] && (v = Nz(v, this.constraints[l], this.elastic[l])), E.set(v);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: c } = this.getProps(), p = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, g = this.constraints;
    l && Rd(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && p ? this.constraints = Pz(p.layoutBox, l) : this.constraints = !1, this.elastic = jz(c), g !== this.constraints && !Rd(l) && p && this.constraints && !this.hasMutatedConstraints && ml((E) => {
      this.constraints !== !1 && this.getAxisMotionValue(E) && (this.constraints[E] = zz(p.layoutBox[E], this.constraints[E]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: c } = this.getProps();
    if (!l || !Rd(l))
      return !1;
    const p = l.current;
    vs(p !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: g } = this.visualElement;
    if (!g || !g.layout)
      return !1;
    g.root && (g.root.scroll = void 0, g.root.updateScroll());
    const E = HV(p, g.root, this.visualElement.getTransformPagePoint());
    let v = Vz(g.layout.layoutBox, E);
    if (c) {
      const w = c(jV(v));
      this.hasMutatedConstraints = !!w, w && (v = kD(w));
    }
    return v;
  }
  startAnimation(l) {
    const { drag: c, dragMomentum: p, dragElastic: g, dragTransition: E, dragSnapToOrigin: v, onDragTransitionEnd: w } = this.getProps(), D = this.constraints || {}, b = ml((k) => {
      if (!ig(k, c, this.currentDirection))
        return;
      let M = D && D[k] || {};
      (v === !0 || v === k) && (M = { min: 0, max: 0 });
      const A = g ? 200 : 1e6, F = g ? 40 : 1e7, B = {
        type: "inertia",
        velocity: p ? l[k] : 0,
        bounceStiffness: A,
        bounceDamping: F,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...E,
        ...M
      };
      return this.startAxisValueAnimation(k, B);
    });
    return Promise.all(b).then(w);
  }
  startAxisValueAnimation(l, c) {
    const p = this.getAxisMotionValue(l);
    return xC(this.visualElement, l), p.start(ZC(l, p, 0, c, this.visualElement, !1));
  }
  stopAnimation() {
    ml((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const c = `_drag${l.toUpperCase()}`, g = this.visualElement.getProps()[c];
    return g || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    ml((c) => {
      const { drag: p } = this.getProps();
      if (!ig(c, p, this.currentDirection))
        return;
      const { projection: g } = this.visualElement, E = this.getAxisMotionValue(c);
      if (g && g.layout) {
        const { min: v, max: w } = g.layout.layoutBox[c], D = E.get() || 0;
        E.set(l[c] - hn(v, w, 0.5) + D);
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
    const { drag: l, dragConstraints: c } = this.getProps(), { projection: p } = this.visualElement;
    if (!Rd(c) || !p || !this.constraints)
      return;
    this.stopAnimation();
    const g = { x: 0, y: 0 };
    ml((v) => {
      const w = this.getAxisMotionValue(v);
      if (w && this.constraints !== !1) {
        const D = w.get();
        g[v] = Uz({ min: D, max: D }, this.constraints[v]);
      }
    });
    const { transformTemplate: E } = this.visualElement.getProps();
    this.visualElement.current.style.transform = E ? E({}, "") : "none", p.root && p.root.updateScroll(), p.updateLayout(), this.constraints = !1, this.resolveConstraints(), ml((v) => {
      if (!ig(v, l, null))
        return;
      const w = this.getAxisMotionValue(v), { min: D, max: b } = this.constraints[v];
      w.set(hn(D, b, g[v]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Fz.set(this.visualElement, this);
    const l = this.visualElement.current, c = Qh(l, "pointerdown", (b) => {
      const { drag: k, dragListener: M = !0 } = this.getProps(), A = b.target, F = A !== l && SV(A);
      k && M && !F && this.start(b);
    });
    let p;
    const g = () => {
      const { dragConstraints: b } = this.getProps();
      Rd(b) && b.current && (this.constraints = this.resolveRefConstraints(), p || (p = Hz(l, b.current, () => this.scalePositionWithinConstraints())));
    }, { projection: E } = this.visualElement, v = E.addEventListener("measure", g);
    E && !E.layout && (E.root && E.root.updateScroll(), E.updateLayout()), vn.read(g);
    const w = Jh(window, "resize", () => this.scalePositionWithinConstraints()), D = E.addEventListener("didUpdate", (({ delta: b, hasLayoutChanged: k }) => {
      this.isDragging && k && (ml((M) => {
        const A = this.getAxisMotionValue(M);
        A && (this.originPoint[M] += b[M].translate, A.set(A.get() + b[M].translate));
      }), this.visualElement.render());
    }));
    return () => {
      w(), c(), v(), D && D(), p && p();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: c = !1, dragDirectionLock: p = !1, dragPropagation: g = !1, dragConstraints: E = !1, dragElastic: v = LC, dragMomentum: w = !0 } = l;
    return {
      ...l,
      drag: c,
      dragDirectionLock: p,
      dragPropagation: g,
      dragConstraints: E,
      dragElastic: v,
      dragMomentum: w
    };
  }
}
function S1(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function Hz(a, l, c) {
  const p = bb(a, S1(c)), g = bb(l, S1(c));
  return () => {
    p(), g();
  };
}
function ig(a, l, c) {
  return (l === !0 || l === a) && (c === null || c === a);
}
function Iz(a, l = 10) {
  let c = null;
  return Math.abs(a.y) > l ? c = "y" : Math.abs(a.x) > l && (c = "x"), c;
}
class $z extends mu {
  constructor(l) {
    super(l), this.removeGroupControls = qa, this.removeListeners = qa, this.controls = new Bz(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || qa;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: c } = this.node.prevProps || {};
    l !== c && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const oC = (a) => (l, c) => {
  a && vn.update(() => a(l, c), !1, !0);
};
class Yz extends mu {
  constructor() {
    super(...arguments), this.removePointerDownListener = qa;
  }
  onPointerDown(l) {
    this.session = new ok(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ak(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: c, onPan: p, onPanEnd: g } = this.node.getProps();
    return {
      onSessionStart: oC(l),
      onStart: oC(c),
      onMove: oC(p),
      onEnd: (E, v) => {
        delete this.session, g && vn.postRender(() => g(E, v));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Qh(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let lC = !1;
class Wz extends Le.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p, layoutId: g } = this.props, { projection: E } = l;
    E && (c.group && c.group.add(E), p && p.register && g && p.register(E), lC && E.root.didUpdate(), E.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), E.setOptions({
      ...E.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), pg.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: c, visualElement: p, drag: g, isPresent: E } = this.props, { projection: v } = p;
    return v && (v.isPresent = E, l.layoutDependency !== c && v.setOptions({
      ...v.options,
      layoutDependency: c
    }), lC = !0, g || l.layoutDependency !== c || c === void 0 || l.isPresent !== E ? v.willUpdate() : this.safeToRemove(), l.isPresent !== E && (E ? v.promote() : v.relegate() || vn.postRender(() => {
      const w = v.getStack();
      (!w || !w.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: c } = this.props, { projection: p } = l;
    p && (p.options.layoutAnchor = c, p.root.didUpdate(), tT.postRender(() => {
      !p.currentAnimation && p.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p } = this.props, { projection: g } = l;
    lC = !0, g && (g.scheduleCheckAfterUnmount(), c && c.group && c.group.remove(g), p && p.deregister && p.deregister(g));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function sk(a) {
  const [l, c] = XD(), p = Le.useContext(VC);
  return Me.jsx(Wz, { ...a, layoutGroup: p, switchLayoutGroup: Le.useContext(rk), isPresent: l, safeToRemove: c });
}
const Gz = {
  pan: {
    Feature: Yz
  },
  drag: {
    Feature: $z,
    ProjectionNode: QD,
    MeasureLayout: sk
  }
};
function E1(a, l, c) {
  const { props: p } = a;
  a.animationState && p.whileHover && a.animationState.setActive("whileHover", c === "Start");
  const g = "onHover" + c, E = p[g];
  E && vn.postRender(() => E(l, iv(l)));
}
class Kz extends mu {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = vV(l, (c, p) => (E1(this.node, p, "Start"), (g) => E1(this.node, g, "End"))));
  }
  unmount() {
  }
}
class Qz extends mu {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = tv(Jh(this.node.current, "focus", () => this.onFocus()), Jh(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function C1(a, l, c) {
  const { props: p } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return;
  a.animationState && p.whileTap && a.animationState.setActive("whileTap", c === "Start");
  const g = "onTap" + (c === "End" ? "" : c), E = p[g];
  E && vn.postRender(() => E(l, iv(l)));
}
class Xz extends mu {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: c, propagate: p } = this.node.props;
    this.unmount = CV(l, (g, E) => (C1(this.node, E, "Start"), (v, { success: w }) => C1(this.node, v, w ? "End" : "Cancel")), {
      useGlobalTarget: c,
      stopPropagation: p?.tap === !1
    });
  }
  unmount() {
  }
}
const NC = /* @__PURE__ */ new WeakMap(), sC = /* @__PURE__ */ new WeakMap(), qz = (a) => {
  const l = NC.get(a.target);
  l && l(a);
}, Zz = (a) => {
  a.forEach(qz);
};
function Jz({ root: a, ...l }) {
  const c = a || document;
  sC.has(c) || sC.set(c, {});
  const p = sC.get(c), g = JSON.stringify(l);
  return p[g] || (p[g] = new IntersectionObserver(Zz, { root: a, ...l })), p[g];
}
function e2(a, l, c) {
  const p = Jz(l);
  return NC.set(a, c), p.observe(a), () => {
    NC.delete(a), p.unobserve(a);
  };
}
const t2 = {
  some: 0,
  all: 1
};
class n2 extends mu {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: c, margin: p, amount: g = "some", once: E } = l, v = {
      root: c ? c.current : void 0,
      rootMargin: p,
      threshold: typeof g == "number" ? g : t2[g]
    }, w = (D) => {
      const { isIntersecting: b } = D;
      if (this.isInView === b || (this.isInView = b, E && !b && this.hasEnteredView))
        return;
      b && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", b);
      const { onViewportEnter: k, onViewportLeave: M } = this.node.getProps(), A = b ? k : M;
      A && A(D);
    };
    this.stopObserver = e2(this.node.current, v, w);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: c } = this.node;
    ["amount", "margin", "root"].some(r2(l, c)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function r2({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (c) => a[c] !== l[c];
}
const i2 = {
  inView: {
    Feature: n2
  },
  tap: {
    Feature: Xz
  },
  focus: {
    Feature: Qz
  },
  hover: {
    Feature: Kz
  }
}, a2 = {
  layout: {
    ProjectionNode: QD,
    MeasureLayout: sk
  }
}, o2 = {
  ..._z,
  ...i2,
  ...Gz,
  ...a2
}, l2 = /* @__PURE__ */ wz(o2, Rz), Md = l2, PC = {
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
}, T1 = [
  ["apps", "/apps/"],
  ["revit", "/revit-tools/"],
  ["learning", "/learning/"],
  ["support", "/support/"]
];
function s2() {
  return /* @__PURE__ */ Me.jsx("svg", { className: "h-8 w-8 fill-[#1a1a1a]", viewBox: "0 0 64 64", "aria-hidden": "true", children: /* @__PURE__ */ Me.jsx("path", { d: "M32 5c6.4 0 11.6 5.2 11.6 11.6 0 2.2-.6 4.3-1.7 6.1 1.8-1.1 3.9-1.7 6.1-1.7C54.6 21 60 26.4 60 33s-5.4 12-12 12c-2.2 0-4.2-.6-6-1.6 1 1.8 1.6 3.8 1.6 6C43.6 55.8 38.4 61 32 61S20.4 55.8 20.4 49.4c0-2.2.6-4.2 1.6-6-1.8 1-3.8 1.6-6 1.6C9.4 45 4 39.6 4 33s5.4-12 12-12c2.2 0 4.3.6 6.1 1.7-1.1-1.8-1.7-3.9-1.7-6.1C20.4 10.2 25.6 5 32 5Zm0 19.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" }) });
}
function u2({ open: a }) {
  return /* @__PURE__ */ Me.jsxs("span", { className: "relative block h-5 w-7", "aria-hidden": "true", children: [
    /* @__PURE__ */ Me.jsx(
      Md.span,
      {
        className: "absolute left-0 top-1 h-[2px] w-7 rounded-full bg-[#1a1a1a]",
        animate: a ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
      }
    ),
    /* @__PURE__ */ Me.jsx(
      Md.span,
      {
        className: "absolute left-0 top-1/2 h-[2px] w-7 rounded-full bg-[#1a1a1a]",
        animate: a ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }
      }
    ),
    /* @__PURE__ */ Me.jsx(
      Md.span,
      {
        className: "absolute bottom-1 left-0 h-[2px] w-7 rounded-full bg-[#1a1a1a]",
        animate: a ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
      }
    )
  ] });
}
function c2({ locale: a, onToggleLocale: l }) {
  const [c, p] = Le.useState(!1), g = PC[a].nav;
  return /* @__PURE__ */ Me.jsxs("header", { className: "fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-[#f1f1f1]/80 to-transparent py-6 backdrop-blur-[2px] md:py-10", children: [
    /* @__PURE__ */ Me.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-4 px-6 md:gap-x-8 md:px-12 lg:px-20", children: [
      /* @__PURE__ */ Me.jsxs("a", { className: "col-span-7 flex items-center gap-3 md:col-span-3", href: "/", "aria-label": "pyMenvic home", children: [
        /* @__PURE__ */ Me.jsx(s2, {}),
        /* @__PURE__ */ Me.jsx("span", { className: "font-display text-[1.65rem] font-bold tracking-[-0.04em] text-[#1a1a1a]", children: "pyMenvic" })
      ] }),
      /* @__PURE__ */ Me.jsx("nav", { className: "col-span-6 hidden items-center justify-center gap-7 md:flex", "aria-label": "Main navigation", children: T1.map(([E, v]) => /* @__PURE__ */ Me.jsx("a", { href: v, className: "text-[0.78rem] font-semibold lowercase tracking-[-0.01em] text-zinc-700 transition-colors hover:text-black", children: g[E] }, v)) }),
      /* @__PURE__ */ Me.jsxs("div", { className: "col-span-5 flex items-center justify-end gap-3 md:col-span-3", children: [
        /* @__PURE__ */ Me.jsx("a", { className: "hidden text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex", href: "/support/", children: g.help }),
        /* @__PURE__ */ Me.jsxs("a", { className: "hidden rounded-full bg-[#1a1a1a] px-4 py-2 text-[0.8rem] font-semibold lowercase text-white transition-transform hover:-translate-y-0.5 sm:inline-flex", href: "/apps/", children: [
          g.cta,
          " ",
          /* @__PURE__ */ Me.jsx("span", { className: "ml-1", children: "→" })
        ] }),
        /* @__PURE__ */ Me.jsxs(
          "button",
          {
            className: "hidden rounded-full border border-black/10 bg-white/45 px-3 py-2 text-[0.78rem] font-semibold lowercase text-zinc-700 transition-colors hover:text-black sm:inline-flex md:hidden",
            type: "button",
            "aria-label": g.toggle,
            onClick: l,
            children: [
              /* @__PURE__ */ Me.jsx("span", { className: a === "es" ? "text-black" : "text-zinc-500", children: "ES" }),
              /* @__PURE__ */ Me.jsx("span", { className: "px-1 text-zinc-400", children: "/" }),
              /* @__PURE__ */ Me.jsx("span", { className: a === "en" ? "text-black" : "text-zinc-500", children: "EN" })
            ]
          }
        ),
        /* @__PURE__ */ Me.jsx(
          "button",
          {
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/50 md:hidden",
            type: "button",
            "aria-label": g.menu,
            "aria-expanded": c,
            onClick: () => p((E) => !E),
            children: /* @__PURE__ */ Me.jsx(u2, { open: c })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ Me.jsx(JU, { children: c ? /* @__PURE__ */ Me.jsx(
      Md.div,
      {
        initial: { opacity: 0, y: -18 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -18 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        className: "mx-6 mt-5 rounded-[24px] border border-black/10 bg-white/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden",
        children: /* @__PURE__ */ Me.jsxs("nav", { className: "grid gap-2", "aria-label": "Mobile navigation", children: [
          T1.map(([E, v]) => /* @__PURE__ */ Me.jsx("a", { href: v, className: "rounded-2xl px-3 py-3 font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-[#1a1a1a]", children: g[E] }, v)),
          /* @__PURE__ */ Me.jsx(
            "button",
            {
              className: "mt-2 rounded-2xl bg-[#1a1a1a] px-3 py-3 text-left font-display text-2xl font-semibold lowercase tracking-[-0.04em] text-white",
              type: "button",
              onClick: l,
              children: a === "es" ? "switch to english" : "cambiar a espanol"
            }
          )
        ] })
      }
    ) : null })
  ] });
}
const f2 = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4";
function d2() {
  return /* @__PURE__ */ Me.jsx("span", { className: "mx-1 inline-flex w-[16px] items-center justify-center rounded-full border-[2px] border-[#1a1a1a] align-middle md:mx-2 md:w-[42px] lg:w-[62px]", children: /* @__PURE__ */ Me.jsx("span", { className: "h-2 w-2 rounded-full bg-[#1a1a1a]" }) });
}
function p2() {
  return /* @__PURE__ */ Me.jsx("svg", { className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ Me.jsx("path", { d: "M7 17 17 7M9 7h8v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function h2({ locale: a, onToggleLocale: l }) {
  const c = PC[a].hero;
  return /* @__PURE__ */ Me.jsxs("section", { className: "relative flex min-h-[110vh] w-full flex-col items-center justify-start overflow-hidden bg-bg-base sm:min-h-[140vh]", children: [
    /* @__PURE__ */ Me.jsxs("div", { className: "pointer-events-none absolute left-0 top-[15vh] z-0 h-[95vh] w-full sm:top-[20vh] sm:h-[120vh]", children: [
      /* @__PURE__ */ Me.jsx("video", { autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "h-full w-full object-cover opacity-100", children: /* @__PURE__ */ Me.jsx("source", { src: f2, type: "video/mp4" }) }),
      /* @__PURE__ */ Me.jsx("div", { className: "absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-bg-base to-transparent sm:h-32" }),
      /* @__PURE__ */ Me.jsx("div", { className: "absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-bg-base to-transparent" })
    ] }),
    /* @__PURE__ */ Me.jsx("div", { className: "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-x-4 px-8 pb-16 pt-[21vh] md:gap-x-8 md:px-16 lg:px-20", children: /* @__PURE__ */ Me.jsxs("div", { className: "col-span-12 md:col-span-10 md:col-start-2", children: [
      /* @__PURE__ */ Me.jsxs(
        Md.h1,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "font-display text-[clamp(3.35rem,10vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#8e8e8e]",
          children: [
            /* @__PURE__ */ Me.jsx("span", { className: "text-[#1a1a1a]", children: c.line1Strong }),
            " ",
            /* @__PURE__ */ Me.jsx("span", { children: c.line1Muted }),
            /* @__PURE__ */ Me.jsx("br", {}),
            /* @__PURE__ */ Me.jsx("span", { children: c.line2 }),
            /* @__PURE__ */ Me.jsx("br", {}),
            /* @__PURE__ */ Me.jsxs("span", { children: [
              c.line3Before,
              " ",
              /* @__PURE__ */ Me.jsx(d2, {}),
              " ",
              c.line3After
            ] })
          ]
        }
      ),
      /* @__PURE__ */ Me.jsx(
        Md.div,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.15 },
          className: "mt-9 w-full max-w-[560px]",
          children: /* @__PURE__ */ Me.jsxs("div", { className: "flex items-center rounded-[6px] border border-black/[0.05] bg-white p-1 pl-4 shadow-sm", children: [
            /* @__PURE__ */ Me.jsx("span", { className: "min-w-0 flex-1 text-sm font-medium text-zinc-500", children: c.start }),
            /* @__PURE__ */ Me.jsx("a", { className: "relative h-9 w-9 rounded-full bg-[#1a1a1a] text-white", href: "/apps/", "aria-label": c.openApps, children: /* @__PURE__ */ Me.jsx(p2, {}) })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ Me.jsxs(
      "button",
      {
        className: "absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/35 px-4 py-2 text-xs font-semibold uppercase text-[#1a1a1a] shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:bg-white/60 md:flex",
        type: "button",
        "aria-label": PC[a].nav.toggle,
        onClick: l,
        children: [
          /* @__PURE__ */ Me.jsx("span", { className: a === "es" ? "text-black" : "text-zinc-500", children: "ES" }),
          /* @__PURE__ */ Me.jsx("span", { className: "text-zinc-400", children: "/" }),
          /* @__PURE__ */ Me.jsx("span", { className: a === "en" ? "text-black" : "text-zinc-500", children: "EN" })
        ]
      }
    ),
    /* @__PURE__ */ Me.jsx("span", { className: "absolute bottom-8 left-8 z-20 text-xs font-semibold tracking-[-0.02em] text-[#1a1a1a] md:left-12 lg:left-20", children: c.year }),
    /* @__PURE__ */ Me.jsx("span", { className: "absolute bottom-8 right-8 z-20 text-xs font-semibold lowercase tracking-[-0.02em] text-[#1a1a1a] md:right-12 lg:right-20", children: c.corner })
  ] });
}
function v2() {
  const [a, l] = Le.useState(() => typeof window > "u" ? "es" : window.localStorage.getItem("pymenvic-locale") === "en" ? "en" : "es");
  Le.useEffect(() => {
    window.localStorage.setItem("pymenvic-locale", a), document.documentElement.lang = a;
  }, [a]);
  const c = () => l((p) => p === "es" ? "en" : "es");
  return /* @__PURE__ */ Me.jsxs("div", { className: "min-h-screen bg-bg-base selection:bg-brand-green selection:text-black", children: [
    /* @__PURE__ */ Me.jsx(c2, { locale: a, onToggleLocale: c }),
    /* @__PURE__ */ Me.jsx("main", { children: /* @__PURE__ */ Me.jsx(h2, { locale: a, onToggleLocale: c }) })
  ] });
}
sN.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Me.jsx(eN.StrictMode, { children: /* @__PURE__ */ Me.jsx(v2, {}) })
);
