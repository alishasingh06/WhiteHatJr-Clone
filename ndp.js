!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = "/dist"),
    t((t.s = 0));
})([
  function (e, n, t) {
    e.exports = t(1);
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    var r = ["order_value", "product_context", "order_id"],
      o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
              for (var o in (n = arguments[t]))
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            return e;
          }).apply(this, arguments);
      },
      i = function (e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function c(e) {
            try {
              u(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(c, a);
          }
          u((r = r.apply(e, n || [])).next());
        });
      },
      c = function (e, n) {
        var t,
          r,
          o,
          i,
          c = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; c; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return c.label++, { value: i[1], done: !1 };
                    case 5:
                      c.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = c.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        c.label = i[1];
                        break;
                      }
                      if (6 === i[0] && c.label < o[1]) {
                        (c.label = o[1]), (o = i);
                        break;
                      }
                      if (o && c.label < o[2]) {
                        (c.label = o[2]), c.ops.push(i);
                        break;
                      }
                      o[2] && c.ops.pop(), c.trys.pop();
                      continue;
                  }
                  i = n.call(e, c);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  t = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      },
      a = function (e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r,
          o,
          i = t.call(e),
          c = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            c.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (t = i.return) && t.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return c;
      },
      u = function () {
        for (var e = [], n = 0; n < arguments.length; n++)
          e = e.concat(a(arguments[n]));
        return e;
      },
      l = "https://flask.nextdoor.com/pixel",
      s = {};
    function d() {
      return "10000000-1000-4000-8000-100000000000".replace(
        /[018]/g,
        function (e) {
          return (
            +e ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+e / 4)))
          ).toString(16);
        }
      );
    }
    function f(e, n) {
      return (
        void 0 === n && (n = !0),
        i(this, void 0, void 0, function () {
          var t, r, o;
          return c(this, function (i) {
            switch (i.label) {
              case 0:
                return e
                  ? (n && (e = e.toLowerCase()),
                    (t = new TextEncoder().encode(e)),
                    [4, window.crypto.subtle.digest("SHA-256", t)])
                  : [2, ""];
              case 1:
                return (
                  (r = i.sent()),
                  (o = Array.from(new Uint8Array(r))),
                  [
                    2,
                    o
                      .map(function (e) {
                        return e.toString(16).padStart(2, "0");
                      })
                      .join(""),
                  ]
                );
            }
          });
        })
      );
    }
    var p = function () {
        return (
          /Safari/i.test(window.navigator.userAgent) &&
          !/Chrome/i.test(window.navigator.userAgent)
        );
      },
      h = function (e, n) {
        for (var t = n.split("&"), r = 0; r < t.length; r++) {
          var o = t[r].split("=");
          if (o[0] === e) return o[1];
        }
        return null;
      },
      v = function (e) {
        !(function (e) {
          var n = document.createElement("img");
          (n.src = e), (n.alt = ""), (n.style.display = "none");
        })(l + "?" + e);
      },
      y = function (e, n) {
        switch (n) {
          case "POST":
            !(function (e) {
              var n = new XMLHttpRequest();
              n.open("POST", l),
                (n.withCredentials = !0),
                (n.onreadystatechange = function () {
                  4 === n.readyState &&
                    204 !== n.status &&
                    window.console.warn("Request failed to " + l + ".");
                }),
                n.send(JSON.stringify(e));
            })(e);
            break;
          case "GET":
            v(e);
        }
      },
      g = function (e, n, t, i) {
        var c,
          u,
          f,
          h,
          v =
            ((c = o(
              o(
                {
                  pid: e,
                  vrs: "8.3",
                  ev: n,
                  pl: s.pl,
                  ndclid: s.ndclid ? s.ndclid : "",
                  ndclid_src: s.ndclid_src || 0,
                  rf: s.rf,
                  sem: s.sem || "",
                  tm: s.sendPixelByGTM ? "GTM" : "Manual",
                  iid: d(),
                  pageid:
                    ((s.pageURL && s.pageURL === window.location.href) ||
                      ((s.pageId = d()), (s.pageURL = window.location.href)),
                    s.pageId),
                  sessionid:
                    ((h = ""),
                    p() &&
                      localStorage &&
                      (h = localStorage.getItem("ndp_session_id")),
                    h ||
                      (m("ndp_session_id")
                        ? (h = m("ndp_session_id"))
                        : ((h = d()),
                          b("ndp_session_id", h, window.location.hostname))),
                    h),
                },
                t && t.event_id && { eid: t.event_id }
              ),
              {
                cd:
                  ((u = i),
                  (f = {}),
                  u
                    ? (Object.keys(u).forEach(function (e) {
                        r.includes(e) && (f[e] = u[e]);
                      }),
                      f)
                    : f),
              }
            )),
            Object.entries(c)
              .map(function (e) {
                var n = a(e, 2),
                  t = n[0],
                  r = n[1];
                return (
                  r && "object" == typeof r && (r = JSON.stringify(r)),
                  t + "=" + encodeURIComponent(r)
                );
              })
              .join("&"));
        s.sendPixelByGTM ? s.sendPixelByGTM(l + "?" + v) : y(v, "GET");
      },
      w = function (e, n, t, r, o) {
        if (
          (void 0 === t && (t = ""),
          void 0 === r && (r = "/"),
          void 0 === o && (o = !1),
          null != n)
        ) {
          var i =
            e +
            "=" +
            n +
            ";expires=" +
            t +
            ";path=/;domain=" +
            r +
            ";SameSite=Lax" +
            (!1 === o ? "" : "; Secure");
          document.cookie = i;
        }
      },
      m = function (e) {
        try {
          return document.cookie
            .split("; ")
            .find(function (n) {
              return n.startsWith(e + "=");
            })
            .split("=")[1];
        } catch (e) {
          return "";
        }
      },
      b = function (e, n, t) {
        if (n) {
          var r = new Date();
          r.setMonth(r.getMonth() + 1);
          var o = t.replace("www.", "").split(".");
          if (1 !== o.length) {
            var i = "." + o.slice(-2).join(".");
            w(e, n, r.toUTCString(), i, !0),
              !m(e) &&
                o.length > 2 &&
                ((i = "." + o.slice(-3).join(".")),
                w(e, n, r.toUTCString(), i, !0)),
              p() && localStorage && localStorage.setItem(e, n);
          } else w(e, n, r.toUTCString(), window.location.hostname, !0);
        }
      },
      x = function (e) {
        var n, t;
        (s.rf = document.referrer),
          "user_email_hash" in e
            ? (s.sem = e.user_email_hash)
            : "user_email" in e && (s.em = e.user_email),
          Object.assign(
            s,
            ((n = s),
            (t = h("ndclid", location.search.substring(1)))
              ? (b("ndclid", t, window.location.hostname),
                { ndclid: t, ndclid_src: 1 })
              : (t = h("ndclid", document.referrer))
              ? (b("ndclid", null != t ? t : "", window.location.hostname),
                { ndclid: t, ndclid_src: 1 })
              : (n.sendPixelByGTM &&
                  n.getCookieValues &&
                  (t = a(n.getCookieValues("ndclid"), 1)[0])) ||
                (p() && localStorage && (t = localStorage.getItem("ndclid"))) ||
                (t = m("ndclid"))
              ? { ndclid: t, ndclid_src: 2 }
              : { ndclid: "", ndclid_src: 0 })
          );
      },
      _ = function (e) {
        for (var n = a(e), t = n[0], r = n.slice(1); r.length < 3; ) r.push({});
        switch (t.toLowerCase()) {
          case "init":
            var o = a(r, 2);
            return (function (e, n) {
              -1 === s.pixelIdList.indexOf(e) && s.pixelIdList.push(e), x(n);
            })(o[0], o[1]);
          case "track":
            var u = a(r, 3);
            return (function (e, n, t) {
              return i(void 0, void 0, void 0, function () {
                var r, o, i, a;
                return c(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return "string" != typeof e
                        ? [2]
                        : ((s.pl = location.href),
                          crypto.subtle && s.em && !s.sem
                            ? ((r = s), [4, f(s.em)])
                            : [3, 2]);
                    case 1:
                      (r.sem = c.sent()), (c.label = 2);
                    case 2:
                      if (e)
                        for (
                          o = s.pixelIdList,
                            Array.isArray(null == n ? void 0 : n.pixel_ids) &&
                              (o = n.pixel_ids).forEach(function (e) {
                                -1 === s.pixelIdList.indexOf(e) &&
                                  s.pixelIdList.push(e);
                              }),
                            i = 0;
                          i < o.length;
                          i++
                        )
                          (a = o[i]), g(a, e, n, t);
                      return [2];
                  }
                });
              });
            })(u[0], u[1], u[2]);
          default:
            console.error(
              "Nextdoor pixel: library function " + t + " does not exist."
            );
        }
      },
      S = function () {
        if (s.queue && s.queue.length) {
          var e = u(s.queue.shift());
          _(e), s.processQueue();
        }
      },
      O = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        s.queue.push(e), s.processQueue();
      },
      j = function (e, n) {
        return (
          ((s = e.ndp).pixelIdList = []),
          (s.processQueue = S),
          (s.handleRequest = O),
          { processQueue: s.processQueue }
        );
      };
    try {
      j(window, document).processQueue();
    } catch (e) {
      console.log(e), console.log("Problem with request");
    }
  },
]);
