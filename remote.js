(function (g) {
  var window = this;
  ("use strict");
  var a8 = function (a) {
      g.Gp(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.nb()).toString(36)
      );
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Bga(a.B, b, c);
    },
    eyb = function (a) {
      if (a instanceof g.pt) return a;
      if ("function" == typeof a.zk) return a.zk(!1);
      if (g.bb(a)) {
        var b = 0,
          c = new g.pt();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.M2;
            if (b in a) return g.qt(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    fyb = function (a, b, c) {
      if (g.bb(a)) g.cc(a, b, c);
      else
        for (a = eyb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    gyb = function (a, b) {
      var c = [];
      fyb(
        b,
        function (d) {
          try {
            var e = g.Lv.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.qla(e) && c.push(d);
        },
        a
      );
      return c;
    },
    hyb = function (a, b) {
      gyb(a, b).forEach(function (c) {
        g.Lv.prototype.remove.call(this, c);
      }, a);
    },
    iyb = function (a) {
      if (a.ma) {
        if (a.ma.locationOverrideToken)
          return { locationOverrideToken: a.ma.locationOverrideToken };
        if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7)
          return { latitudeE7: a.ma.latitudeE7, longitudeE7: a.ma.longitudeE7 };
      }
      return null;
    },
    jyb = function (a, b) {
      g.Gb(a, b) || a.push(b);
    },
    kyb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    lyb = function (a, b) {
      return g.kd(a, b);
    },
    myb = function (a) {
      try {
        return g.Sa.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Sa.JSON)
        try {
          return g.Sa.JSON.parse(a);
        } catch (b) {}
      return myb(a);
    },
    nyb = function (a) {
      if (a.Wl && "function" == typeof a.Wl) return a.Wl();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (g.bb(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.hd(a);
    },
    oyb = function (a) {
      if (a.pp && "function" == typeof a.pp) return a.pp();
      if (!a.Wl || "function" != typeof a.Wl) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (g.bb(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return g.id(a);
        }
      }
    },
    pyb = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.bb(a) || "string" === typeof a)
        Array.prototype.forEach.call(a, b, void 0);
      else
        for (var c = oyb(a), d = nyb(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
    },
    qyb = function (a, b, c, d) {
      var e = new g.yp(null);
      a && g.zp(e, a);
      b && g.Ap(e, b);
      c && g.Bp(e, c);
      d && (e.C = d);
      return e;
    },
    ryb = function () {
      this.j = d8();
      this.j.Ak("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Xe: 3,
        We: "channel_type",
      });
    },
    syb = function (a, b) {
      a.j.Lm("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    tyb = function () {
      this.j = d8();
      this.j.Ak("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Xe: 3,
        We: "channel_type",
      });
    },
    uyb = function (a, b) {
      a.j.Lm("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    vyb = function () {
      this.j = d8();
      this.j.Ak(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Xe: 3, We: "channel_type" }
      );
    },
    wyb = function (a, b) {
      a.j.Lm(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    xyb = function () {
      this.j = d8();
      this.j.Ak("/client_streamz/youtube/living_room/mdx/channel/error", {
        Xe: 3,
        We: "channel_type",
      });
    },
    yyb = function (a, b) {
      a.j.Lm("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    zyb = function () {
      this.j = d8();
      this.j.Ak(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    Ayb = function () {
      this.j = d8();
      this.j.Ak(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    Eyb = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.tv();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        Byb(this, a.capabilities || ""),
        Cyb(this, a.compatibleSenderThemes || ""),
        Dyb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    Byb = function (a, b) {
      a.capabilities.clear();
      g.vt(b.split(","), g.kb(lyb, Fyb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    Cyb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.vt(b.split(","), g.kb(lyb, Gyb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    Dyb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    e8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    f8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    Hyb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    Iyb = function (a) {
      return new e8(a);
    },
    Jyb = function (a) {
      return Array.isArray(a) ? g.Jr(a, Iyb) : [];
    },
    g8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    Kyb = function (a) {
      return Array.isArray(a) ? "[" + g.Jr(a, g8).join(",") + "]" : "null";
    },
    Lyb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    Myb = function (a) {
      return g.Jr(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    Nyb = function (a, b) {
      return g.Db(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    h8 = function (a, b) {
      return g.Db(a, function (c) {
        return f8(c, b);
      });
    },
    Oyb = function () {
      var a = (0, g.mD)();
      a && hyb(a, a.j.zk(!0));
    },
    i8 = function () {
      var a = g.oD("yt-remote-connected-devices") || [];
      g.Yb(a);
      return a;
    },
    Pyb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Jr(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    Qyb = function (a) {
      g.nD("yt-remote-connected-devices", a, 86400);
    },
    j8 = function () {
      if (Ryb) return Ryb;
      var a = g.oD("yt-remote-device-id");
      a || ((a = Lyb()), g.nD("yt-remote-device-id", a, 31536e3));
      for (var b = i8(), c = 1, d = a; g.Gb(b, d); ) c++, (d = a + "#" + c);
      return (Ryb = d);
    },
    Syb = function () {
      var a = i8(),
        b = j8();
      g.qD() && g.$b(a, b);
      a = Pyb(a);
      if (0 == a.length)
        try {
          g.Moa("remote_sid");
        } catch (c) {}
      else
        try {
          g.FC("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    Tyb = function () {
      return g.oD("yt-remote-session-browser-channel");
    },
    Uyb = function () {
      return g.oD("yt-remote-local-screens") || [];
    },
    Vyb = function () {
      g.nD("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Wyb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Jr(Uyb(), function (d) {
          return d.loungeToken;
        }),
        c = g.Jr(a, function (d) {
          return d.loungeToken;
        });
      g.Kr(c, function (d) {
        return !g.Gb(b, d);
      }) && Vyb();
      g.nD("yt-remote-local-screens", a, 31536e3);
    },
    k8 = function (a) {
      a ||
        (g.pD("yt-remote-session-screen-id"),
        g.pD("yt-remote-session-video-id"));
      Syb();
      a = i8();
      g.Ib(a, j8());
      Qyb(a);
    },
    Xyb = function () {
      if (!l8) {
        var a = g.Vv();
        a && (l8 = new g.Iv(a));
      }
    },
    Yyb = function () {
      Xyb();
      return l8 ? !!l8.get("yt-remote-use-staging-server") : !1;
    },
    m8 = function (a, b) {
      g.aF[a] = !0;
      var c = g.ZE();
      c && c.publish.apply(c, arguments);
      g.aF[a] = !1;
    },
    Zyb = function () {},
    d8 = function () {
      if (!n8) {
        n8 = new g.ng(new Zyb());
        var a = g.bC("client_streamz_web_flush_count", -1);
        -1 !== a && (n8.D = a);
      }
      return n8;
    },
    $yb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    azb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    bzb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    o8 = function (a) {
      a.length
        ? czb(a.shift(), function () {
            o8(a);
          })
        : dzb();
    },
    ezb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    czb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.po(d, g.Jw(a));
      (document.head || document.documentElement).appendChild(d);
    },
    fzb = function () {
      var a = $yb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    dzb = function () {
      var a = bzb();
      a && a(!1, "No cast extension found");
    },
    hzb = function () {
      if (gzb) {
        var a = 2,
          b = bzb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        czb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          dzb,
          c
        );
      }
    },
    izb = function () {
      hzb();
      var a = fzb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    kzb = function () {
      hzb();
      var a = fzb();
      a.push.apply(a, g.oa(jzb.map(ezb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    p8 = function (a, b, c) {
      g.I.call(this);
      this.K = null != c ? (0, g.jb)(a, c) : a;
      this.Xi = b;
      this.G = (0, g.jb)(this.n2, this);
      this.j = !1;
      this.B = 0;
      this.C = this.jd = null;
      this.D = [];
    },
    q8 = function (a, b, c) {
      g.I.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Xi = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.jd = null;
    },
    lzb = function (a) {
      a.jd = g.gg(function () {
        a.jd = null;
        a.j && !a.B && ((a.j = !1), lzb(a));
      }, a.Xi);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    r8 = function () {},
    mzb = function () {
      g.Ab.call(this, "p");
    },
    nzb = function () {
      g.Ab.call(this, "o");
    },
    pzb = function () {
      return (ozb = ozb || new g.Ld());
    },
    qzb = function (a) {
      g.Ab.call(this, "serverreachability", a);
    },
    s8 = function (a) {
      var b = pzb();
      b.dispatchEvent(new qzb(b, a));
    },
    rzb = function (a) {
      g.Ab.call(this, "statevent", a);
    },
    t8 = function (a) {
      var b = pzb();
      b.dispatchEvent(new rzb(b, a));
    },
    szb = function (a, b, c, d) {
      g.Ab.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    u8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Sa.setTimeout(function () {
        a();
      }, b);
    },
    v8 = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Jc = c;
      this.ac = d || 1;
      this.bb = new g.Lp(this);
      this.ub = 45e3;
      a = g.LS ? 125 : void 0;
      this.ib = new g.fg(a);
      this.Na = null;
      this.C = !1;
      this.W = this.Za = this.Z = this.Ta = this.Ba = this.Jb = this.ma = null;
      this.ra = [];
      this.j = null;
      this.K = 0;
      this.N = this.Ea = null;
      this.zb = -1;
      this.Ka = !1;
      this.qb = 0;
      this.Xa = null;
      this.Xb = this.Ua = this.Rb = this.Fa = !1;
      this.B = new tzb();
    },
    tzb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    vzb = function (a, b, c) {
      a.Ta = 1;
      a.Z = a8(b.clone());
      a.W = c;
      a.Fa = !0;
      uzb(a, null);
    },
    uzb = function (a, b) {
      a.Ba = Date.now();
      x8(a);
      a.Za = a.Z.clone();
      b8(a.Za, "t", a.ac);
      a.K = 0;
      var c = a.G.Ta;
      a.B = new tzb();
      a.j = wzb(a.G, c ? b : null, !a.W);
      0 < a.qb && (a.Xa = new q8((0, g.jb)(a.OS, a, a.j), a.qb));
      a.bb.Ra(a.j, "readystatechange", a.s2);
      b = a.Na ? g.qd(a.Na) : {};
      a.W
        ? (a.Ea || (a.Ea = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.Za, a.Ea, a.W, b))
        : ((a.Ea = "GET"), a.j.send(a.Za, a.Ea, null, b));
      s8(1);
    },
    xzb = function (a) {
      return a.j ? "GET" == a.Ea && 2 != a.Ta && a.G.Af : !1;
    },
    Czb = function (a, b, c) {
      for (var d = !0, e; !a.Ka && a.K < c.length; )
        if (((e = yzb(a, c)), e == zzb)) {
          4 == b && ((a.N = 4), t8(14), (d = !1));
          break;
        } else if (e == Azb) {
          a.N = 4;
          t8(15);
          d = !1;
          break;
        } else Bzb(a, e);
      xzb(a) && 0 != a.K && ((a.B.j = a.B.j.slice(a.K)), (a.K = 0));
      4 != b || 0 != c.length || a.B.B || ((a.N = 1), t8(16), (d = !1));
      a.C = a.C && d;
      d ? 0 < c.length && !a.Xb && ((a.Xb = !0), a.G.QP(a)) : (y8(a), z8(a));
    },
    yzb = function (a, b) {
      var c = a.K,
        d = b.indexOf("\n", c);
      if (-1 == d) return zzb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Azb;
      d += 1;
      if (d + c > b.length) return zzb;
      b = b.slice(d, d + c);
      a.K = d + c;
      return b;
    },
    x8 = function (a) {
      a.Jb = Date.now() + a.ub;
      Dzb(a, a.ub);
    },
    Dzb = function (a, b) {
      if (null != a.ma) throw Error("WatchDog timer not null");
      a.ma = u8((0, g.jb)(a.o2, a), b);
    },
    A8 = function (a) {
      a.ma && (g.Sa.clearTimeout(a.ma), (a.ma = null));
    },
    z8 = function (a) {
      a.G.Ng() || a.Ka || Ezb(a.G, a);
    },
    y8 = function (a) {
      A8(a);
      g.vb(a.Xa);
      a.Xa = null;
      a.ib.stop();
      a.bb.Jf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    Bzb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Dh && (c.j == a || Fzb(c.B, a)))
          if (!a.Ua && Fzb(c.B, a) && 3 == c.Dh) {
            try {
              var d = c.Bf.j.parse(b);
            } catch (x) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.Z) {
                    if (c.j)
                      if (c.j.Ba + 3e3 < a.Ba) B8(c), C8(c);
                      else break a;
                    Gzb(c);
                    t8(18);
                  }
                }
              else
                (c.Wd = e[1]),
                  0 < c.Wd - c.Xa &&
                    37500 > e[2] &&
                    c.Ua &&
                    0 == c.ra &&
                    !c.ma &&
                    (c.ma = u8((0, g.jb)(c.t2, c), 6e3));
              if (1 >= Hzb(c.B) && c.kd) {
                try {
                  c.kd();
                } catch (x) {}
                c.kd = void 0;
              }
            } else D8(c, 11);
          } else if (((a.Ua || c.j == a) && B8(c), !g.hc(b)))
            for (e = c.Bf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Xa = f[0];
              f = f[1];
              if (2 == c.Dh)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.Xb = f[2];
                  var h = f[3];
                  null != h && (c.PS = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.bb = 1.5 * l);
                  d = c;
                  var m = a.gO();
                  if (m) {
                    var n = g.Mn(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.jc(n, "spdy") || g.jc(n, "quic") || g.jc(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (Izb(p, p.B), (p.B = null)));
                    }
                    if (d.Fa) {
                      var q = g.Mn(m, "X-HTTP-Session-Id");
                      q && ((d.Ke = q), g.Gp(d.Na, d.Fa, q));
                    }
                  }
                  c.Dh = 3;
                  c.G && c.G.WS();
                  c.Nc && (c.Pd = Date.now() - a.Ba);
                  d = c;
                  var r = a;
                  d.xd = Jzb(d, d.Ta ? d.Xb : null, d.ac);
                  if (r.Ua) {
                    Kzb(d.B, r);
                    var t = r,
                      v = d.bb;
                    v && t.setTimeout(v);
                    t.ma && (A8(t), x8(t));
                    d.j = r;
                  } else Lzb(d);
                  0 < c.C.length && E8(c);
                } else ("stop" != f[0] && "close" != f[0]) || D8(c, 7);
              else
                3 == c.Dh &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? D8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.VS(f),
                  (c.ra = 0));
            }
        s8(4);
      } catch (x) {}
    },
    Mzb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Nzb = function (a) {
      this.G = a || 10;
      g.Sa.PerformanceNavigationTiming
        ? ((a = g.Sa.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Sa.chrome &&
            g.Sa.chrome.loadTimes &&
            g.Sa.chrome.loadTimes() &&
            g.Sa.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    Ozb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    Hzb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    Fzb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    Izb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    Kzb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    Pzb = function (a) {
      if (null != a.B) return a.C.concat(a.B.ra);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
        return b;
      }
      return g.Lb(a.C);
    },
    Qzb = function (a, b) {
      var c = new v8();
      if (g.Sa.Image) {
        var d = new Image();
        d.onload = g.kb(F8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.kb(F8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.kb(F8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.kb(F8, c, d, "TestLoadImage: timeout", !1, b);
        g.Sa.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    F8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    Rzb = function () {
      this.j = new r8();
    },
    Szb = function (a, b, c) {
      var d = c || "";
      try {
        pyb(a, function (e, f) {
          var h = e;
          g.cb(e) && (h = g.Xm(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    G8 = function (a, b, c) {
      return c && c.H7 ? c.H7[a] || b : b;
    },
    Tzb = function (a) {
      this.C = [];
      this.Xb =
        this.xd =
        this.Na =
        this.ac =
        this.j =
        this.Ke =
        this.Fa =
        this.Ka =
        this.N =
        this.Jb =
        this.W =
          null;
      this.Of = this.Za = 0;
      this.Mf = G8("failFast", !1, a);
      this.Ua = this.ma = this.Z = this.K = this.G = null;
      this.Jc = !0;
      this.Wd = this.Xa = -1;
      this.Rb = this.ra = this.Ba = 0;
      this.kh = G8("baseRetryDelayMs", 5e3, a);
      this.Pf = G8("retryDelaySeedMs", 1e4, a);
      this.Nf = G8("forwardChannelMaxRetries", 2, a);
      this.Je = G8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.ze = (a && a.rnb) || void 0;
      this.Af = (a && a.nnb) || !1;
      this.bb = void 0;
      this.Ta = (a && a.ica) || !1;
      this.D = "";
      this.B = new Nzb(a && a.tkb);
      this.Bf = new Rzb();
      this.ub = (a && a.Kkb) || !1;
      this.qb = (a && a.zkb) || !1;
      this.ub && this.qb && (this.qb = !1);
      this.Qf = (a && a.lkb) || !1;
      a && a.Mkb && (this.Jc = !1);
      this.Nc = (!this.ub && this.Jc && a && a.xkb) || !1;
      this.md = void 0;
      a && a.dY && 0 < a.dY && (this.md = a.dY);
      this.kd = void 0;
      this.Pd = 0;
      this.ib = !1;
      this.zb = this.Ea = null;
    },
    C8 = function (a) {
      a.j && (Uzb(a), a.j.cancel(), (a.j = null));
    },
    Vzb = function (a) {
      C8(a);
      a.Z && (g.Sa.clearTimeout(a.Z), (a.Z = null));
      B8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Sa.clearTimeout(a.K), (a.K = null));
    },
    E8 = function (a) {
      Ozb(a.B) || a.K || ((a.K = !0), g.Xf(a.RS, a), (a.Ba = 0));
    },
    Xzb = function (a, b) {
      if (Hzb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.ra.concat(a.C)), !0;
      if (1 == a.Dh || 2 == a.Dh || a.Ba >= (a.Mf ? 0 : a.Nf)) return !1;
      a.K = u8((0, g.jb)(a.RS, a, b), Wzb(a, a.Ba));
      a.Ba++;
      return !0;
    },
    Zzb = function (a, b) {
      var c;
      b ? (c = b.Jc) : (c = a.Za++);
      var d = a.Na.clone();
      g.Gp(d, "SID", a.D);
      g.Gp(d, "RID", c);
      g.Gp(d, "AID", a.Xa);
      H8(a, d);
      a.N && a.W && g.Kp(d, a.N, a.W);
      c = new w8(a, a.D, c, a.Ba + 1);
      null === a.N && (c.Na = a.W);
      b && (a.C = b.ra.concat(a.C));
      b = Yzb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Je) + Math.round(0.5 * a.Je * Math.random())
      );
      Izb(a.B, c);
      vzb(c, d, b);
    },
    H8 = function (a, b) {
      a.Ka &&
        g.bd(a.Ka, function (c, d) {
          g.Gp(b, d, c);
        });
      a.G &&
        pyb({}, function (c, d) {
          g.Gp(b, d, c);
        });
    },
    Yzb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.jb)(a.G.v2, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              Szb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.ra = a;
      return d;
    },
    Lzb = function (a) {
      a.j || a.Z || ((a.Rb = 1), g.Xf(a.QS, a), (a.ra = 0));
    },
    Gzb = function (a) {
      if (a.j || a.Z || 3 <= a.ra) return !1;
      a.Rb++;
      a.Z = u8((0, g.jb)(a.QS, a), Wzb(a, a.ra));
      a.ra++;
      return !0;
    },
    Uzb = function (a) {
      null != a.Ea && (g.Sa.clearTimeout(a.Ea), (a.Ea = null));
    },
    $zb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.Rb);
      null === a.N && (a.j.Na = a.W);
      a.j.qb = 0;
      var b = a.xd.clone();
      g.Gp(b, "RID", "rpc");
      g.Gp(b, "SID", a.D);
      g.Gp(b, "AID", a.Xa);
      g.Gp(b, "CI", a.Ua ? "0" : "1");
      !a.Ua && a.md && g.Gp(b, "TO", a.md);
      g.Gp(b, "TYPE", "xmlhttp");
      H8(a, b);
      a.N && a.W && g.Kp(b, a.N, a.W);
      a.bb && a.j.setTimeout(a.bb);
      var c = a.j;
      a = a.Xb;
      c.Ta = 1;
      c.Z = a8(b.clone());
      c.W = null;
      c.Fa = !0;
      uzb(c, a);
    },
    B8 = function (a) {
      null != a.ma && (g.Sa.clearTimeout(a.ma), (a.ma = null));
    },
    Ezb = function (a, b) {
      var c = null;
      if (a.j == b) {
        B8(a);
        Uzb(a);
        a.j = null;
        var d = 2;
      } else if (Fzb(a.B, b)) (c = b.ra), Kzb(a.B, b), (d = 1);
      else return;
      if (0 != a.Dh)
        if (b.C)
          if (1 == d) {
            c = b.W ? b.W.length : 0;
            b = Date.now() - b.Ba;
            var e = a.Ba;
            d = pzb();
            d.dispatchEvent(new szb(d, c, b, e));
            E8(a);
          } else Lzb(a);
        else {
          var f = b.zb;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && Xzb(a, b)) || (2 == d && Gzb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                D8(a, 5);
                break;
              case 4:
                D8(a, 10);
                break;
              case 3:
                D8(a, 6);
                break;
              default:
                D8(a, 2);
            }
        }
    },
    Wzb = function (a, b) {
      var c = a.kh + Math.floor(Math.random() * a.Pf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    D8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.jb)(a.oca, a);
        c ||
          ((c = new g.yp("//www.google.com/images/cleardot.gif")),
          (g.Sa.location && "http" == g.Sa.location.protocol) ||
            g.zp(c, "https"),
          a8(c));
        Qzb(c.toString(), d);
      } else t8(2);
      a.Dh = 0;
      a.G && a.G.US(b);
      aAb(a);
      Vzb(a);
    },
    aAb = function (a) {
      a.Dh = 0;
      a.zb = [];
      if (a.G) {
        var b = Pzb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Nb(a.zb, b),
            g.Nb(a.zb, a.C),
            (a.B.C.length = 0),
            g.Lb(a.C),
            (a.C.length = 0);
        a.G.SS();
      }
    },
    bAb = function (a) {
      if (0 == a.Dh) return a.zb;
      var b = [];
      g.Nb(b, Pzb(a.B));
      g.Nb(b, a.C);
      return b;
    },
    Jzb = function (a, b, c) {
      var d = g.Hp(c);
      "" != d.j
        ? (b && g.Ap(d, b + "." + d.j), g.Bp(d, d.D))
        : ((d = g.Sa.location),
          (d = qyb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Fa;
      c = a.Ke;
      b && c && g.Gp(d, b, c);
      g.Gp(d, "VER", a.PS);
      H8(a, d);
      return d;
    },
    wzb = function (a, b, c) {
      if (b && !a.Ta)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.Af && !a.ze ? new g.an(new g.up({ E_: c })) : new g.an(a.ze);
      b.K = a.Ta;
      return b;
    },
    cAb = function () {},
    dAb = function () {
      if (g.ef && !g.Wc(10))
        throw Error("Environmental error: no available transport.");
    },
    J8 = function (a, b) {
      g.Ld.call(this);
      this.j = new Tzb(b);
      this.G = a;
      this.B = (b && b.x8) || null;
      a = (b && b.w8) || null;
      b &&
        b.rkb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.W = a;
      a = (b && b.Nlb) || null;
      b &&
        b.lY &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.lY)
          : (a = { "X-WebChannel-Content-Type": b.lY }));
      b &&
        b.rV &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.rV)
          : (a = { "X-WebChannel-Client-Profile": b.rV }));
      this.j.Jb = a;
      (a = b && b.Mlb) && !g.hc(a) && (this.j.N = a);
      this.K = (b && b.ica) || !1;
      this.D = (b && b.Mmb) || !1;
      (b = b && b.C7) &&
        !g.hc(b) &&
        ((this.j.Fa = b),
        g.jd(this.B, b) && ((a = this.B), b in a && delete a[b]));
      this.C = new I8(this);
    },
    eAb = function (a) {
      mzb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.fd(b)) ? g.od(b, this.j) : b)
        : (this.data = a);
    },
    fAb = function (a) {
      nzb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    I8 = function (a) {
      this.j = a;
    },
    gAb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    hAb = function (a) {
      return bAb(a.j).map(function (b) {
        var c = a.B;
        b = b.map;
        "__data__" in b ? ((b = b.__data__), (c = c.D ? myb(b) : b)) : (c = b);
        return c;
      });
    },
    K8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Sa.setTimeout(function () {
        a();
      }, b);
    },
    M8 = function (a) {
      L8.dispatchEvent(new iAb(L8, a));
    },
    iAb = function (a) {
      g.Ab.call(this, "statevent", a);
    },
    N8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.Lp(this);
      this.G = new g.fg();
      this.G.setInterval(250);
    },
    kAb = function (a, b, c) {
      a.Cx = 1;
      a.Mr = a8(b.clone());
      a.Cu = c;
      a.Fa = !0;
      jAb(a, null);
    },
    lAb = function (a, b, c, d, e) {
      a.Cx = 1;
      a.Mr = a8(b.clone());
      a.Cu = null;
      a.Fa = c;
      e && (a.i_ = !1);
      jAb(a, d);
    },
    jAb = function (a, b) {
      a.Bx = Date.now();
      O8(a);
      a.Or = a.Mr.clone();
      b8(a.Or, "t", a.K);
      a.mG = 0;
      a.hj = a.j.tL(a.j.LB() ? b : null);
      0 < a.rL && (a.kG = new q8((0, g.jb)(a.XS, a, a.hj), a.rL));
      a.C.Ra(a.hj, "readystatechange", a.z2);
      b = a.Bu ? g.qd(a.Bu) : {};
      a.Cu
        ? ((a.lG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.hj.send(a.Or, a.lG, a.Cu, b))
        : ((a.lG = "GET"),
          a.i_ && !g.Xc && (b.Connection = "close"),
          a.hj.send(a.Or, a.lG, null, b));
      a.j.Jn(1);
    },
    oAb = function (a, b) {
      var c = a.mG,
        d = b.indexOf("\n", c);
      if (-1 == d) return mAb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return nAb;
      d += 1;
      if (d + c > b.length) return mAb;
      b = b.slice(d, d + c);
      a.mG = d + c;
      return b;
    },
    qAb = function (a, b) {
      a.Bx = Date.now();
      O8(a);
      var c = b ? window.location.hostname : "";
      a.Or = a.Mr.clone();
      g.Gp(a.Or, "DOMAIN", c);
      g.Gp(a.Or, "t", a.K);
      try {
        a.jo = new ActiveXObject("htmlfile");
      } catch (m) {
        P8(a);
        a.Nr = 7;
        M8(22);
        Q8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in R8) f = R8[f];
            else if (f in pAb) f = R8[f] = pAb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = R8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      c = g.ue(d + "</body></html>");
      a.jo.open();
      a.jo.write(g.te(c));
      a.jo.close();
      a.jo.parentWindow.m = (0, g.jb)(a.qaa, a);
      a.jo.parentWindow.d = (0, g.jb)(a.iZ, a, !0);
      a.jo.parentWindow.rpcClose = (0, g.jb)(a.iZ, a, !1);
      c = a.jo.createElement("DIV");
      a.jo.parentWindow.document.body.appendChild(c);
      d = g.ke(a.Or.toString()) || g.re;
      d = g.Le(g.ie(d));
      d = g.ue('<iframe src="' + d + '"></iframe>');
      g.Kba(c, d);
      a.j.Jn(1);
    },
    O8 = function (a) {
      a.sL = Date.now() + a.B;
      rAb(a, a.B);
    },
    rAb = function (a, b) {
      if (null != a.Dx) throw Error("WatchDog timer not null");
      a.Dx = K8((0, g.jb)(a.w2, a), b);
    },
    sAb = function (a) {
      a.Dx && (g.Sa.clearTimeout(a.Dx), (a.Dx = null));
    },
    Q8 = function (a) {
      a.j.Ng() || a.Au || a.j.nG(a);
    },
    P8 = function (a) {
      sAb(a);
      g.vb(a.kG);
      a.kG = null;
      a.G.stop();
      a.C.Jf();
      if (a.hj) {
        var b = a.hj;
        a.hj = null;
        b.abort();
        b.dispose();
      }
      a.jo && (a.jo = null);
    },
    tAb = function (a, b) {
      try {
        a.j.YS(a, b), a.j.Jn(4);
      } catch (c) {}
    },
    vAb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        uAb(a, b, function (h) {
          h
            ? c(!0)
            : g.Sa.setTimeout(function () {
                vAb(a, b, c, d, f);
              }, f);
        });
      }
    },
    uAb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Sa.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    wAb = function (a) {
      this.j = a;
      this.B = new r8();
    },
    xAb = function (a) {
      var b = T8(a.j, a.wC, "/mail/images/cleardot.gif");
      a8(b);
      vAb(b.toString(), 5e3, (0, g.jb)(a.g5, a), 3, 2e3);
      a.Jn(1);
    },
    yAb = function (a) {
      var b = a.j.K;
      if (null != b)
        M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
      else if (
        ((a.Ij = new N8(a)),
        (a.Ij.Bu = a.uL),
        (b = a.j),
        (b = T8(b, b.LB() ? a.KB : null, a.vL)),
        M8(5),
        !g.ef || g.Wc(10))
      )
        b8(b, "TYPE", "xmlhttp"), lAb(a.Ij, b, !1, a.KB, !1);
      else {
        b8(b, "TYPE", "html");
        var c = a.Ij;
        a = !!a.KB;
        c.Cx = 3;
        c.Mr = a8(b.clone());
        qAb(c, a);
      }
    },
    zAb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new r8();
      this.W = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    AAb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    BAb = function (a, b, c, d) {
      g.Ab.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    CAb = function (a) {
      g.Ab.call(this, "serverreachability", a);
    },
    EAb = function (a) {
      a.A2(1, 0);
      a.oG = T8(a, null, a.wL);
      DAb(a);
    },
    FAb = function (a) {
      a.ls && (a.ls.abort(), (a.ls = null));
      a.Jg && (a.Jg.cancel(), (a.Jg = null));
      a.fq && (g.Sa.clearTimeout(a.fq), (a.fq = null));
      V8(a);
      a.Sj && (a.Sj.cancel(), (a.Sj = null));
      a.Pr && (g.Sa.clearTimeout(a.Pr), (a.Pr = null));
    },
    GAb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new AAb(a.B2++, b));
      (2 != a.j && 3 != a.j) || DAb(a);
    },
    HAb = function (a) {
      var b = 0;
      a.Jg && b++;
      a.Sj && b++;
      return b;
    },
    DAb = function (a) {
      a.Sj || a.Pr || ((a.Pr = K8((0, g.jb)(a.cT, a), 0)), (a.Fx = 0));
    },
    KAb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.NB = Math.floor(1e5 * Math.random());
          b = a.NB++;
          var c = new N8(a, "", b);
          c.Bu = a.Bo;
          var d = IAb(a),
            e = a.oG.clone();
          g.Gp(e, "RID", b);
          g.Gp(e, "CVER", "1");
          W8(a, e);
          kAb(c, e, d);
          a.Sj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? JAb(a, b) : 0 == a.B.length || a.Sj || JAb(a));
    },
    JAb = function (a, b) {
      if (b)
        if (6 < a.Du) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.NB - 1;
          b = IAb(a);
        } else (c = b.N), (b = b.Cu);
      else (c = a.NB++), (b = IAb(a));
      var d = a.oG.clone();
      g.Gp(d, "SID", a.D);
      g.Gp(d, "RID", c);
      g.Gp(d, "AID", a.Gx);
      W8(a, d);
      c = new N8(a, a.D, c, a.Fx + 1);
      c.Bu = a.Bo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Sj = c;
      kAb(c, d, b);
    },
    W8 = function (a, b) {
      a.Mi &&
        (a = a.Mi.gT()) &&
        g.bd(a, function (c, d) {
          g.Gp(b, d, c);
        });
    },
    IAb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Du && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { fE: void 0 }, f++) {
        e.fE = a.B[f].j;
        var h = a.B[f].map;
        e.fE = 6 >= a.Du ? f : e.fE - d;
        try {
          g.bd(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.fE + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.fE + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    LAb = function (a) {
      a.Jg ||
        a.fq ||
        ((a.N = 1), (a.fq = K8((0, g.jb)(a.bT, a), 0)), (a.Ex = 0));
    },
    NAb = function (a) {
      if (a.Jg || a.fq || 3 <= a.Ex) return !1;
      a.N++;
      a.fq = K8((0, g.jb)(a.bT, a), MAb(a, a.Ex));
      a.Ex++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.QK = null == a.K ? c : !a.K;
      a.Co = b.eq;
      a.Z || EAb(a);
    },
    V8 = function (a) {
      null != a.Eu && (g.Sa.clearTimeout(a.Eu), (a.Eu = null));
    },
    MAb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Mi && (c = null);
        var d = (0, g.jb)(a.nca, a);
        c || ((c = new g.yp("//www.google.com/images/cleardot.gif")), a8(c));
        uAb(c.toString(), 1e4, d);
      } else M8(2);
      OAb(a, b);
    },
    OAb = function (a, b) {
      a.j = 0;
      a.Mi && a.Mi.dT(b);
      PAb(a);
      FAb(a);
    },
    PAb = function (a) {
      a.j = 0;
      a.Co = -1;
      if (a.Mi)
        if (0 == a.C.length && 0 == a.B.length) a.Mi.xL();
        else {
          var b = g.Lb(a.C),
            c = g.Lb(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Mi.xL(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.Hp(c);
      if ("" != d.j) b && g.Ap(d, b + "." + d.j), g.Bp(d, d.D);
      else {
        var e = window.location;
        d = qyb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.MB &&
        g.bd(a.MB, function (f, h) {
          g.Gp(d, h, f);
        });
      g.Gp(d, "VER", a.Du);
      W8(a, d);
      return d;
    },
    QAb = function () {},
    RAb = function () {
      this.j = [];
      this.B = [];
    },
    SAb = function (a) {
      g.Ab.call(this, "channelMessage");
      this.message = a;
    },
    TAb = function (a) {
      g.Ab.call(this, "channelError");
      this.error = a;
    },
    UAb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.I.call(this);
      this.j = new g.bv(this.faa, 0, this);
      g.M(this, this.j);
      this.Xi = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.jb)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.jb)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    VAb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Ba = a;
      this.N = b;
      this.C = new g.Hv();
      this.B = new Y8(this.Bba, this);
      this.j = null;
      this.ma = !1;
      this.K = null;
      this.W = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Ta = c;
      this.ra = d;
      this.Ua = e;
      this.Na = new ryb();
      this.Ea = new tyb();
      this.Ka = new vyb();
      this.Fa = new xyb();
      this.Xa = new zyb();
      this.Za = new Ayb();
    },
    WAb = function (a) {
      if (a.j) {
        var b = a.ra(),
          c = a.j.Bo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Bo = c;
      }
    },
    Z8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.Ql(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Rl(a) || "";
      a = g.pc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.oc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Bm(c + b, {});
    },
    XAb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.kb(a.D, d, !0),
        onError: g.kb(a.C, e),
        onTimeout: g.kb(a.G, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.wC(b, a);
    },
    YAb = function (a, b) {
      g.Ld.call(this);
      var c = this;
      this.Ed = a();
      this.Ed.subscribe("handlerOpened", this.F2, this);
      this.Ed.subscribe("handlerClosed", this.D2, this);
      this.Ed.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Ed.subscribe("handlerMessage", this.E2, this);
      this.j = b;
    },
    ZAb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new dAb() : e;
      var f = void 0 === f ? new g.Hv() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ba = c;
      this.G = f;
      this.Z = null;
      this.W = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : Hzb(new gAb(h, h.j).j.B)) &&
          d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.ma = !1;
      this.logger = null;
      this.ra = [];
      this.Bg = void 0;
      this.Na = new ryb();
      this.Ea = new tyb();
      this.Ka = new vyb();
      this.Fa = new xyb();
    },
    $Ab = function (a) {
      g.Ad(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.ra = [];
        a.oa("webChannelOpened");
        syb(a.Na, "WEB_CHANNEL");
      });
      g.Ad(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.oa("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : hAb(new gAb(b, b.j));
        c && (a.ra = [].concat(g.oa(c)));
        uyb(a.Ea, "WEB_CHANNEL");
      });
      g.Ad(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.oa("webChannelMessage", new UAb(c[0], c[1]));
        a.Bg = b.statusCode;
        wyb(a.Ka, "WEB_CHANNEL");
      });
      g.Ad(a.channel, "o", function () {
        401 === a.Bg || a.C.start();
        a.oa("webChannelError");
        yyb(a.Fa, "WEB_CHANNEL");
      });
    },
    aBb = function (a) {
      var b = a.Ba();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    bBb = function (a) {
      g.Ld.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.I2, this);
      this.j.subscribe("webChannelClosed", this.G2, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.H2, this);
    },
    cBb = function (a, b, c, d, e) {
      function f() {
        return new VAb($8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.aC("enable_mdx_web_channel_desktop")
        ? new bBb(function () {
            return new ZAb($8(a, "/wc"), b, c);
          })
        : new YAb(f, e);
    },
    gBb = function () {
      var a = dBb;
      eBb();
      a9.push(a);
      fBb();
    },
    b9 = function (a, b) {
      eBb();
      var c = hBb(a, String(b));
      0 == a9.length
        ? iBb(c)
        : (fBb(),
          g.cc(a9, function (d) {
            d(c);
          }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    eBb = function () {
      a9 ||
        ((a9 = g.Va("yt.mdx.remote.debug.handlers_") || []),
        g.Ua("yt.mdx.remote.debug.handlers_", a9));
    },
    iBb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    fBb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.cc(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    hBb = function (a, b) {
      var c = (Date.now() - jBb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.yG.call(this);
      this.K = a;
      this.screens = [];
    },
    kBb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    lBb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.vt(a.screens, function (f) {
        return !!Nyb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = kBb(a, b[d]) || c;
      return c;
    },
    mBb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.vt(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    nBb = function (a, b, c, d, e) {
      g.yG.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.jd = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + Kyb(this.screens));
    },
    oBb = function (a) {
      if (a.screens.length) {
        var b = g.Jr(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        XAb(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.jb)(a.a7, a),
          (0, g.jb)(a.Z6, a)
        );
      }
    },
    h9 = function (a) {
      if (g.aC("deprecate_pair_servlet_enabled")) return lBb(a, []);
      var b = Jyb(Uyb());
      b = g.vt(b, function (c) {
        return !c.uuid;
      });
      return lBb(a, b);
    },
    j9 = function (a, b) {
      Wyb(g.Jr(a.screens, Hyb));
      b && Vyb();
    },
    qBb = function (a, b) {
      g.yG.call(this);
      this.K = b;
      b = (b = g.oD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Gb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      pBb("Initialized with " + g.Xm(this.j));
    },
    rBb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      XAb(
        a.G,
        d,
        { lounge_token: b.token },
        (0, g.jb)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.jb)(function () {
          c(!1);
        }, a)
      );
    },
    tBb = function (a, b) {
      a: if (kyb(b) != kyb(a.j)) var c = !1;
      else {
        c = g.id(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (pBb("Updated online screens: " + g.Xm(a.j)),
        (a.j = b),
        a.oa("screenChange"));
      sBb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.tC(a.C);
      a.C = g.rC((0, g.jb)(a.VQ, a), 0 < a.D && a.D < g.nb() ? 2e4 : 1e4);
    },
    pBb = function (a) {
      b9("OnlineScreenService", a);
    },
    uBb = function (a) {
      var b = {};
      g.cc(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.ag("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    sBb = function (a) {
      a = g.id(
        g.cd(a.j, function (b) {
          return b;
        })
      );
      g.Yb(a);
      a.length
        ? g.nD("yt-remote-online-screen-ids", a.join(","), 60)
        : g.pD("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      vBb(this);
    },
    xBb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Mk(),
        l = c ? h8(h, c) : null;
      (c && (a.N || l)) || (l = h8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        rBb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? wBb(
              a,
              c,
              (0, g.jb)(function (n) {
                var p = m9(
                  this,
                  new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                rBb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    yBb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    zBb = function (a, b, c) {
      rBb(a.j, b, c);
    },
    wBb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.wC($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    ABb = function (a) {
      a.screens = a.B.Mk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Kyb(a.screens));
    },
    vBb = function (a) {
      BBb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.jb)(a.k7, a));
      ABb(a);
      a.N || (a.C = Jyb(g.oD("yt-remote-automatic-screen-cache") || []));
      BBb(a);
      a.info("Initializing automatic screens: " + Kyb(a.C));
      a.j = new qBb(a.D, (0, g.jb)(a.Mk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.jb)(function () {
          this.oa("onlineScreenChange");
        }, a)
      );
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = h8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.N || CBb(a));
      BBb(a);
      a.G[b.uuid] = b.id;
      g.nD("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    CBb = function (a) {
      a = g.vt(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.nD("yt-remote-automatic-screen-cache", g.Jr(a, Hyb));
    },
    BBb = function (a) {
      a.G = g.oD("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.yG.call(this);
      this.Fa = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.oa("sessionScreen", a.j);
    },
    DBb = function (a, b) {
      a.j && ((a.j.token = b), m9(a.D, a.j));
      a.oa("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Fa, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.ra = (0, g.jb)(this.N2, this);
      this.Ea = (0, g.jb)(this.yaa, this);
      this.ma = g.rC(function () {
        EBb(d, null);
      }, 12e4);
      this.N = this.G = this.K = this.Z = 0;
      this.Ba = !1;
      this.W = "unknown";
    },
    GBb = function (a, b) {
      g.tC(a.N);
      a.N = 0;
      0 == b
        ? FBb(a)
        : (a.N = g.rC(function () {
            FBb(a);
          }, b));
    },
    FBb = function (a) {
      HBb(a, "getLoungeToken");
      g.tC(a.G);
      a.G = g.rC(function () {
        IBb(a, null);
      }, 3e4);
    },
    HBb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Xm());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.jb)(function () {
              p9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : p9(a, "Sending yt message without session: " + g.Xm(c));
    },
    JBb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.BW(
              b,
              function (c) {
                o9(a, c);
              },
              function () {
                return a.zj();
              },
              5
            ))
        : a.zj(Error("Waiting for session status timed out."));
    },
    LBb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new e8(b);
      KBb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ba = !0), m9(a.D, d), o9(a, d), (a.W = "unknown"), GBb(a, c))
            : (g.dC(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.zj());
        },
        5
      );
    },
    EBb = function (a, b) {
      g.tC(a.ma);
      a.ma = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? LBb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.dC(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  JBb(a, b.screenId)))
            : (g.dC(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              JBb(a, b.screenId))
          : JBb(a, b.screenId)
        : a.zj(Error("Waiting for session status timed out."));
    },
    IBb = function (a, b) {
      g.tC(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.W = c),
          GBb(a, 3e4))
        : (DBb(a, b.loungeToken),
          (a.Ba = !1),
          (a.W = "unknown"),
          GBb(a, b.loungeTokenRefreshIntervalMs));
    },
    KBb = function (a, b, c, d) {
      g.tC(a.K);
      a.K = 0;
      zBb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.rC(function () {
              KBb(a, b, c, d - 1);
            }, 300));
      });
    },
    MBb = function (a) {
      g.tC(a.Z);
      a.Z = 0;
      g.tC(a.K);
      a.K = 0;
      g.tC(a.ma);
      a.ma = 0;
      g.tC(a.G);
      a.G = 0;
      g.tC(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Ea = "";
      this.Ta = c;
      this.Na = null;
      this.ma = function () {};
      this.W = NaN;
      this.Ka = (0, g.jb)(this.O2, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.ra = !1;
      this.Ba = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    NBb = function (a) {
      a.G = a.D.iT(
        a.Ea,
        a.B.label,
        a.B.friendlyName,
        s9(a),
        function (b, c) {
          a.G = function () {};
          a.ra = !0;
          o9(a, b);
          "shortLived" == b.idType && 0 < c && t9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.zj(b);
        }
      );
    },
    OBb = function (a) {
      var b = {};
      b.pairingCode = a.Ea;
      b.theme = a.Ta;
      Yyb() && (b.env_useStageMdx = 1);
      return g.Am(b);
    },
    PBb = function (a) {
      return new Promise(function (b) {
        a.Ea = Lyb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, OBb(a));
          b(c);
          NBb(a);
        } else
          (a.ma = function () {
            g.tC(a.W);
            a.ma = function () {};
            a.W = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, OBb(a));
            b(d);
            NBb(a);
          }),
            (a.W = g.rC(function () {
              a.ma();
            }, 100));
      });
    },
    RBb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new e8(b);
      return new Promise(function (e) {
        QBb(
          a,
          d,
          function (f) {
            f
              ? ((a.ra = !0), m9(a.D, d), o9(a, d), t9(a, c))
              : g.dC(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : PBb(a);
      });
    },
    SBb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        xBb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && o9(a, f);
            e(f);
          },
          function (f) {
            p9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : PBb(a);
      });
    },
    QBb = function (a, b, c, d) {
      g.tC(a.K);
      a.K = 0;
      zBb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.rC(function () {
              QBb(a, b, c, d - 1);
            }, 300));
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) &&
        (g.tC(a.N),
        (a.N = 0),
        0 == b
          ? TBb(a)
          : (a.N = g.rC(function () {
              TBb(a);
            }, b)));
    },
    TBb = function (a) {
      s9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ba = c), t9(a, 3e4))
              : ((a.ra = !1),
                (a.Ba = "unknown"),
                DBb(a, b.loungeToken),
                t9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ba = "noLoungeTokenResponse";
            t9(a, 3e4);
          }
        );
    },
    UBb = function (a) {
      g.tC(a.K);
      a.K = 0;
      g.tC(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.tC(a.W);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.rC((0, g.jb)(this.Lz, this, null), 150);
    },
    v9 = function (a, b) {
      g.yG.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.W = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.jb)(this.r$, this);
    },
    VBb = function (a, b) {
      return b
        ? g.Db(
            a.C,
            function (c) {
              return f8(b, c.label);
            },
            a
          )
        : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    dBb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j &&
        (g.vb(a.j),
        (a.j = b)
          ? (c
              ? a.oa("yt-remote-cast2-receiver-resumed", b.B)
              : a.oa("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.jb)(a.gZ, a, b)),
            b.subscribe("sessionFailed", function () {
              return WBb(a, b);
            }),
            b.j
              ? a.oa("yt-remote-cast2-session-change", b.j)
              : c && a.j.Lz(null))
          : a.oa("yt-remote-cast2-session-change", null));
    },
    WBb = function (a, b) {
      a.j == b && a.oa("yt-remote-cast2-session-failed");
    },
    XBb = function (a) {
      var b = a.B.hT(),
        c = a.j && a.j.B;
      a = g.Jr(
        b,
        function (d) {
          c && f8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = VBb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    dCb = function (a, b, c, d) {
      d.disableCastApi
        ? z9("Cannot initialize because disabled by Mdx config.")
        : YBb()
        ? ZBb(b, d) &&
          ($Bb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? aCb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? aCb(a, c)
                  : (A9("Failed to load cast API: " + f),
                    bCb(!1),
                    $Bb(!1),
                    g.pD("yt-remote-cast-available"),
                    g.pD("yt-remote-cast-receiver"),
                    cCb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Ksa(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= $yb() && izb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? dzb()
                : 89 <= $yb()
                ? kzb()
                : (hzb(), o8(jzb.map(ezb)))))
        : z9("Cannot initialize because not running Chrome");
    },
    cCb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Ua("yt.mdx.remote.cloudview.instance_", null);
      eCb(!1);
      g.dF(fCb);
      fCb.length = 0;
    },
    C9 = function () {
      return !!g.oD("yt-remote-cast-installed");
    },
    gCb = function () {
      var a = g.oD("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    hCb = function () {
      z9("clearCurrentReceiver");
      g.pD("yt-remote-cast-receiver");
    },
    iCb = function () {
      return C9()
        ? B9()
          ? B9().getCastSession()
          : (A9("getCastSelector: Cast is not initialized."), null)
        : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    jCb = function () {
      C9()
        ? B9()
          ? D9()
            ? (z9("Requesting cast selector."), B9().requestSession())
            : (z9("Wait for cast API to be ready to request the session."),
              fCb.push(g.cF("yt-remote-cast2-api-ready", jCb)))
          : A9("requestCastSelector: Cast is not initialized.")
        : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9()
        ? B9().setConnectedScreenStatus(a, b)
        : A9("setConnectedScreenStatus called before ready.");
    },
    YBb = function () {
      var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.iL || a;
    },
    kCb = function (a, b) {
      B9().init(a, b);
    },
    ZBb = function (a, b) {
      var c = !1;
      B9() ||
        ((a = new v9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.nD("yt-remote-cast-available", d);
          m8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          z9("onReceiverSelected: " + d.friendlyName);
          g.nD("yt-remote-cast-receiver", d);
          m8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          z9("onReceiverResumed: " + d.friendlyName);
          g.nD("yt-remote-cast-receiver", d);
          m8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          z9("onSessionChange: " + g8(d));
          d || g.pD("yt-remote-cast-receiver");
          m8("yt-remote-cast2-session-change", d);
        }),
        g.Ua("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Va("yt.mdx.remote.cloudview.instance_");
    },
    aCb = function (a, b) {
      bCb(!0);
      $Bb(!1);
      kCb(a, function (c) {
        c
          ? (eCb(!0), g.eF("yt-remote-cast2-api-ready"))
          : (A9("Failed to initialize cast API."),
            bCb(!1),
            g.pD("yt-remote-cast-available"),
            g.pD("yt-remote-cast-receiver"),
            cCb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    bCb = function (a) {
      z9("setCastInstalled_ " + a);
      g.nD("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Va("yt.mdx.remote.cloudview.apiReady_");
    },
    eCb = function (a) {
      z9("setApiReady_ " + a);
      g.Ua("yt.mdx.remote.cloudview.apiReady_", a);
    },
    $Bb = function (a) {
      g.Ua("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Pk = this.xp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    lCb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.xp = !1;
      a.Pk = !1;
      a.N = 0;
      a.K = g.nb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.nb() - a.K) / 1e3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.nb();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.nb() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && lCb(a);
    },
    mCb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.rd(a.trackData);
      b.hasPrevious = a.xp;
      b.hasNext = a.Pk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.yG.call(this);
      var c = this;
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new RAb();
      this.B = this.j = null;
      this.W = (0, g.jb)(this.h9, this);
      this.N = (0, g.jb)(this.oE, this);
      this.Z = (0, g.jb)(this.g9, this);
      this.ma = (0, g.jb)(this.k9, this);
      var d = 0;
      a
        ? ((d = a.getProxyState()),
          3 != d && (a.subscribe("proxyStateChange", this.sR, this), nCb(this)))
        : (d = 3);
      0 != d &&
        (b
          ? this.sR(d)
          : g.rC(function () {
              c.sR(d);
            }, 0));
      (a = iCb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ma);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    nCb = function (a) {
      g.cc(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.kb(this.p$, b), this));
        },
        a
      );
    },
    oCb = function (a) {
      g.cc(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    pCb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      oCb(a);
      a.D.setPlayerContextData(mCb(b));
      nCb(a);
    },
    K9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.W),
        a.B.removeMediaListener(a.N),
        a.oE(null));
      a.B = b;
      a.B &&
        (c9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.W),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.oE(a.B.media[0]));
    },
    qCb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId &&
          c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.jb)(function (d) {
        this.ag(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.ag("Retrying " + b + " using MDx browser channel."),
          Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.yG.call(this);
      var e = this;
      this.K = NaN;
      this.Ea = !1;
      this.W = this.Z = this.ra = this.Ba = NaN;
      this.ma = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.Ka = d;
      this.ma.push(
        g.eD(window, "beforeunload", function () {
          e.Ty(2);
        })
      );
      this.C = [];
      this.j = new F9();
      this.Ta = b.id;
      this.Fa = b.idType;
      this.B = cBb(this.Na, c, this.mT, "shortLived" == this.Fa, this.Ta);
      this.B.Ra("channelOpened", function () {
        rCb(e);
      });
      this.B.Ra("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? k8(!0) : k8();
        e.dispose();
      });
      this.B.Ra("channelError", function (f) {
        k8();
        isNaN(e.qD())
          ? (1 == f &&
              "shortLived" == e.Fa &&
              e.oa("browserChannelAuthError", f),
            S9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ea = !0),
            S9(
              "Channel error: " + f + " with reconnection in " + e.qD() + " ms"
            ),
            T9(e, 2));
      });
      this.B.Ra("channelMessage", function (f) {
        sCb(e, f);
      });
      this.B.xr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.qD() && g.nD("yt-remote-session-video-id", f);
      });
    },
    tCb = function (a) {
      return g.Db(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.oa("proxyStateChange", b);
    },
    uCb = function (a) {
      a.K = g.rC(function () {
        S9("Connecting timeout");
        a.Ty(1);
      }, 2e4);
    },
    vCb = function (a) {
      g.tC(a.K);
      a.K = NaN;
    },
    wCb = function (a) {
      g.tC(a.Ba);
      a.Ba = NaN;
    },
    yCb = function (a) {
      xCb(a);
      a.ra = g.rC(function () {
        V9(a, "getNowPlaying");
      }, 2e4);
    },
    xCb = function (a) {
      g.tC(a.ra);
      a.ra = NaN;
    },
    rCb = function (a) {
      S9("Channel opened");
      a.Ea &&
        ((a.Ea = !1),
        wCb(a),
        (a.Ba = g.rC(function () {
          S9("Timing out waiting for a screen.");
          a.Ty(1);
        }, 15e3)));
    },
    ACb = function (a, b) {
      var c = null;
      if (b) {
        var d = tCb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Ua("yt.mdx.remote.remoteClient_", c);
      b && (vCb(a), wCb(a));
      c = a.B.Az() && isNaN(a.K);
      b == c
        ? b && (T9(a, 1), V9(a, "getSubtitlesTrack"))
        : b
        ? (a.vW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), zCb(a))
        : a.Ty(1);
    },
    BCb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.nd(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.oa("remotePlayerChange"));
    },
    CCb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.oa("remoteQueueChange", c);
    },
    ECb = function (a, b) {
      b.params = b.params || {};
      CCb(a, b, "NOW_PLAYING_MAY_CHANGE");
      DCb(a, b);
      a.oa("autoplayDismissed");
    },
    DCb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.ll(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? yCb(a) : xCb(a);
      a.oa("remotePlayerChange");
    },
    FCb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        H9(a.j, isNaN(b) ? 0 : b);
        a.oa("remotePlayerChange");
      }
    },
    GCb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.oa("remotePlayerChange");
    },
    HCb = function (a, b) {
      a.N = b.params.videoId;
      a.oa("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    ICb = function (a, b) {
      a.N = b.params.videoId || null;
      a.oa("autoplayUpNext", a.N);
    },
    JCb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.oa("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.oa("autoplayDismissed");
    },
    KCb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.xp = "true" == b.params.hasPrevious;
      a.j.Pk = c;
      a.oa("previousNextChange");
    },
    sCb = function (a, b) {
      b = b.message;
      b.params
        ? S9("Received: action=" + b.action + ", params=" + g.Xm(b.params))
        : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.Jr(b, function (d) {
            return new Eyb(d);
          });
          b = !!g.Db(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          ACb(a, b);
          b = a.AX("mlm");
          a.oa("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Jb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          ACb(a, !1);
          break;
        case "remoteConnected":
          var c = new Eyb(c8(b.params.device));
          g.Db(a.C, function (d) {
            return c ? d.id == c.id : !1;
          }) || jyb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new Eyb(c8(b.params.device));
          g.Jb(a.C, function (d) {
            return c ? d.id == c.id : !1;
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          CCb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          ECb(a, b);
          break;
        case "onStateChange":
          DCb(a, b);
          break;
        case "onAdStateChange":
          FCb(a, b);
          break;
        case "onVolumeChanged":
          GCb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          BCb(a, b);
          break;
        case "nowAutoplaying":
          HCb(a, b);
          break;
        case "autoplayDismissed":
          a.oa("autoplayDismissed");
          break;
        case "autoplayUpNext":
          ICb(a, b);
          break;
        case "onAutoplayModeChanged":
          JCb(a, b);
          break;
        case "onHasPreviousNextChanged":
          KCb(a, b);
          break;
        case "requestAssistedSignIn":
          a.oa("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.oa("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    zCb = function (a) {
      g.tC(a.W);
      a.W = g.rC(function () {
        a.Ty(1);
      }, 864e5);
    },
    V9 = function (a, b, c) {
      c
        ? S9("Sending: action=" + b + ", params=" + g.Xm(c))
        : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    LCb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.Zg = a;
      this.j = [];
      this.j.push(this.Zg.$_s("screenChange", (0, g.jb)(this.S2, this)));
      this.j.push(this.Zg.$_s("onlineScreenChange", (0, g.jb)(this.X9, this)));
    },
    QCb = function (a, b) {
      Xyb();
      if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.ZB("MDX_CONFIG") || b;
        Oyb();
        Syb();
        W9 ||
          ((W9 = new Z8(b ? b.loungeApiHost : void 0)),
          Yyb() && (W9.j = "/api/loungedev"));
        X9 ||
          ((X9 = g.Va("yt.mdx.remote.deferredProxies_") || []),
          g.Ua("yt.mdx.remote.deferredProxies_", X9));
        MCb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Ua("yt.mdx.remote.screenService_", d);
          c = Y9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Ua(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          dCb(
            a,
            d,
            function (f) {
              f
                ? Z9() && E9(Z9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    m8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Va("yt.mdx.remote.initialized_") &&
          (g.Ua("yt.mdx.remote.initialized_", !0),
          $9("Initializing: " + g.Xm(b)),
          a$.push(
            g.cF("yt-remote-cast2-api-ready", function () {
              m8("yt-remote-api-ready");
            })
          ),
          a$.push(
            g.cF("yt-remote-cast2-availability-change", function () {
              m8("yt-remote-receiver-availability-change");
            })
          ),
          a$.push(
            g.cF("yt-remote-cast2-receiver-selected", function () {
              b$(null);
              m8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          a$.push(
            g.cF("yt-remote-cast2-receiver-resumed", function () {
              m8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          a$.push(g.cF("yt-remote-cast2-session-change", NCb)),
          a$.push(
            g.cF("yt-remote-connection-change", function (f) {
              f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), hCb());
            })
          ),
          a$.push(
            g.cF("yt-remote-cast2-session-failed", function () {
              m8("yt-remote-connection-failed");
            })
          ),
          (a = OCb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.aC("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          $9(" -- with channel params: " + g.Xm(a)),
          a
            ? (g.nD("yt-remote-session-app", a.app),
              g.nD("yt-remote-session-name", a.name))
            : (g.pD("yt-remote-session-app"), g.pD("yt-remote-session-name")),
          g.Ua("yt.mdx.remote.channelParams_", a),
          c.start(),
          Z9() || PCb());
      }
    },
    RCb = function () {
      var a = Y9().Zg.$_gos();
      var b = d$();
      b && e$() && (Nyb(a, b) || a.push(b));
      return Myb(a);
    },
    TCb = function () {
      var a = SCb();
      !a &&
        C9() &&
        gCb() &&
        (a = { key: "cast-selector-receiver", name: gCb() });
      return a;
    },
    SCb = function () {
      var a = RCb(),
        b = d$();
      b || (b = c$());
      return g.Db(a, function (c) {
        return b && f8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Mk();
      return h8(b, a);
    },
    NCb = function (a) {
      $9("remote.onCastSessionChange_: " + g8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (
            (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            f$ && (f$.token = a), (b = e$()) && b.xr(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), UCb(null));
    },
    VCb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!WCb) {
        var a = g.Va("yt.mdx.remote.screenService_");
        WCb = a ? new LCb(a) : null;
      }
      return WCb;
    },
    Z9 = function () {
      return g.Va("yt.mdx.remote.currentScreenId_");
    },
    XCb = function (a) {
      g.Ua("yt.mdx.remote.currentScreenId_", a);
    },
    YCb = function () {
      return g.Va("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Ua("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Va("yt.mdx.remote.connection_");
    },
    UCb = function (a) {
      var b = e$();
      b$(null);
      a || XCb("");
      g.Ua("yt.mdx.remote.connection_", a);
      X9 &&
        (g.cc(X9, function (c) {
          c(a);
        }),
        (X9.length = 0));
      b && !a
        ? m8("yt-remote-connection-change", !1)
        : !b && a && m8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.qD();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Mk();
      return h8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;
      else {
        XCb(a.id);
        var c = g.Va("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, OCb(), c);
        a.connect(b, YCb());
        a.subscribe("beforeDisconnect", function (d) {
          m8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), UCb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d &&
            "shortLived" == d.idType &&
            (D9()
              ? B9().handleBrowserChannelAuthError()
              : A9("refreshLoungeToken called before API ready."));
        });
        UCb(a);
      }
    },
    PCb = function () {
      var a = c$();
      a
        ? ($9("Resume connection to: " + g8(a)), h$(a, 0))
        : (k8(),
          hCb(),
          $9("Skipping connecting because no session screen found."));
    },
    MCb = function () {
      var a = OCb();
      if (g.nd(a)) {
        a = j8();
        var b = g.oD("yt-remote-session-name") || "",
          c = g.oD("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.ZB("SESSION_INDEX", "0"));
        (b = g.ZB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Ua("yt.mdx.remote.channelParams_", a);
      }
    },
    OCb = function () {
      return g.Va("yt.mdx.remote.channelParams_") || {};
    },
    aDb = function (a, b, c) {
      g.I.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Fc = c;
      this.events = new g.kL(this);
      this.W = this.events.T(this.J, "onVolumeChange", function (e) {
        ZCb(d, e);
      });
      this.D = !1;
      this.G = new g.XL(64);
      this.j = new g.bv(this.A_, 500, this);
      this.B = new g.bv(this.B_, 1e3, this);
      this.N = new p8(this.Mca, 0, this);
      this.C = {};
      this.Z = new g.bv(this.s0, 1e3, this);
      this.K = new q8(this.seekTo, 1e3, this);
      g.M(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.I9);
      this.events.T(b, "captionschanged", this.e9);
      this.events.T(b, "captionssettingschanged", this.I_);
      this.events.T(b, "videoplayerreset", this.xJ);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Fc.IV();
      });
      b.L("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          $Cb(d.module) || j$(d) || k$(d, 0);
        });
      a = this.Fc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.dZ, this);
      a.subscribe("remotePlayerChange", this.uE, this);
      a.subscribe("remoteQueueChange", this.xJ, this);
      a.subscribe("previousNextChange", this.aZ, this);
      a.subscribe("nowAutoplaying", this.VY, this);
      a.subscribe("autoplayDismissed", this.AY, this);
      g.M(this, this.j);
      g.M(this, this.B);
      g.M(this, this.N);
      g.M(this, this.Z);
      g.M(this, this.K);
      this.I_();
      this.xJ();
      this.uE();
    },
    ZCb = function (a, b) {
      if (j$(a)) {
        a.Fc.unsubscribe("remotePlayerChange", a.uE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Fc);
        if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
        a.Fc.subscribe("remotePlayerChange", a.uE, a);
      }
    },
    bDb = function (a) {
      a.Mc(0);
      a.j.stop();
      a.Bc(new g.XL(64));
    },
    cDb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.sd(c, b));
        a.Fc.lT(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Fc).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, iyb(c));
      a.Bc(new g.XL(1));
    },
    dDb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { oX: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Fc).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.V.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        Y: { role: "dialog" },
        V: [
          {
            I: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            V: [
              { I: "div", S: "ytp-mdx-popup-title", ya: "You're signed out" },
              {
                I: "div",
                S: "ytp-mdx-popup-description",
                ya: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                I: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                V: [
                  {
                    I: "button",
                    Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    ya: "Cancel",
                  },
                  {
                    I: "button",
                    Ma: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    ya: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.hH(this, 250);
      this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
      g.M(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.V.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [
          {
            I: "div",
            S: "ytp-remote-display-status",
            V: [
              { I: "div", S: "ytp-remote-display-status-icon", V: [g.Kva()] },
              {
                I: "div",
                S: "ytp-remote-display-status-text",
                ya: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.hH(this, 250);
      g.M(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Cc(a.Ub());
    },
    n$ = function (a, b) {
      g.VX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.Mt = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    eDb = function (a) {
      g.aW.call(this, a);
      this.Ep = { key: Lyb(), name: "This computer" };
      this.Ll = null;
      this.subscriptions = [];
      this.CQ = this.Fc = null;
      this.Mt = [this.Ep];
      this.ws = this.Ep;
      this.Fe = new g.XL(64);
      this.LX = 0;
      this.Oh = -1;
      this.ME = !1;
      this.KE = this.HA = null;
      if (!g.zS(this.player.U()) && !g.FH(this.player.U())) {
        a = this.player;
        var b = g.BU(a);
        b && (b = b.qp()) && ((b = new n$(a, b)), g.M(this, b));
        b = new m$(a);
        g.M(this, b);
        g.NU(a, b.element, 4);
        this.HA = new l$();
        g.M(this, this.HA);
        g.NU(a, this.HA.element, 4);
        this.ME = !!c$();
      }
    },
    o$ = function (a) {
      a.KE &&
        (a.player.removeEventListener("presentingplayerstatechange", a.KE),
        (a.KE = null));
    },
    fDb = function (a, b, c) {
      a.Fe = c;
      a.player.oa("presentingplayerstatechange", new g.nH(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.ws.key)
        if (b.key === a.Ep.key) g$();
        else if (
          ($Cb(a) && gDb(a),
          (a.ws = b),
          !a.player
            .U()
            .L("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.FH(a.player.U()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .U()
                .L("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = g.YV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Ba,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = iyb(d)) && (a.locationInfo = d);
            d = a;
          }
          $9("Connecting to: " + g.Xm(b));
          "cast-selector-receiver" == b.key
            ? (b$(d || null),
              (b = d || null),
              D9()
                ? B9().setLaunchParams(b)
                : A9("setLaunchParams called before ready."))
            : !d && VCb() && Z9() == b.key
            ? m8("yt-remote-connection-change", !0)
            : (g$(),
              b$(d || null),
              (d = Y9().Mk()),
              (b = h8(d, b.key)) && h$(b, 1));
        }
    },
    $Cb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.ME ||
        !a.HA
        ? !1
        : g.IS(b) || g.KS(b);
    },
    gDb = function (a) {
      a.player.Ub().isPlaying()
        ? a.player.pauseVideo()
        : ((a.KE = function (b) {
            !a.ME && g.qH(b, 8) && (a.player.pauseVideo(), o$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.KE));
      a.HA && a.HA.qd();
      e$() || (i$ = !0);
    };
  g.Sy.prototype.Is = g.da(0, function () {
    return g.Vj(this, 6);
  });
  var pAb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    R8 = { "'": "\\'" },
    Fyb = {
      joa: "atp",
      O4a: "ska",
      q1a: "que",
      ETa: "mus",
      N4a: "sus",
      OEa: "dsp",
      X2a: "seq",
      gSa: "mic",
      Kva: "dpa",
      Epa: "cds",
      uTa: "mlm",
      yva: "dsdtr",
      eUa: "ntb",
      xgb: "vsp",
      zwa: "scn",
      F1a: "rpe",
      vva: "dcn",
      wva: "dcp",
      TYa: "pas",
      xva: "drq",
    },
    Gyb = {
      t4: "u",
      CLASSIC: "cl",
      a4: "k",
      B1: "i",
      d1: "cr",
      i4: "m",
      w1: "g",
      wU: "up",
    },
    Ryb = "",
    l8 = null;
  Zyb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.aC("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Mea(c.value)),
          (c = { serializedIncrementBatch: g.qg(c.j()) }),
          g.HD("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var n8,
    gzb = azb("loadCastFramework") || azb("loadCastApplicationFramework"),
    jzb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.ob(p8, g.I);
  g.k = p8.prototype;
  g.k.m2 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.jd ? (this.C = g.nb() + this.Xi) : (this.jd = g.gg(this.G, this.Xi));
  };
  g.k.stop = function () {
    this.jd && (g.Sa.clearTimeout(this.jd), (this.jd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.xa = function () {
    this.stop();
    p8.Lf.xa.call(this);
  };
  g.k.n2 = function () {
    this.jd && (g.Sa.clearTimeout(this.jd), (this.jd = null));
    this.C
      ? ((this.jd = g.gg(this.G, this.C - g.nb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.w(q8, g.I);
  g.k = q8.prototype;
  g.k.qL = function (a) {
    this.C = arguments;
    this.jd || this.B ? (this.j = !0) : lzb(this);
  };
  g.k.stop = function () {
    this.jd &&
      (g.Sa.clearTimeout(this.jd),
      (this.jd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.jd || ((this.j = !1), lzb(this));
  };
  g.k.xa = function () {
    g.I.prototype.xa.call(this);
    this.stop();
  };
  r8.prototype.stringify = function (a) {
    return g.Sa.JSON.stringify(a, void 0);
  };
  r8.prototype.parse = function (a) {
    return g.Sa.JSON.parse(a, void 0);
  };
  g.ob(mzb, g.Ab);
  g.ob(nzb, g.Ab);
  var ozb = null;
  g.ob(qzb, g.Ab);
  g.ob(rzb, g.Ab);
  g.ob(szb, g.Ab);
  v8.prototype.debug = function () {};
  v8.prototype.info = function () {};
  v8.prototype.warning = function () {};
  var Azb = {},
    zzb = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.ub = a;
  };
  g.k.s2 = function (a) {
    a = a.target;
    var b = this.Xa;
    b && 3 == g.In(a) ? b.qL() : this.OS(a);
  };
  g.k.OS = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.In(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.LS ||
              (this.j && (this.B.B || g.Kn(this.j) || g.Ln(this.j))))
          ) {
            this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
            A8(this);
            var e = this.j.getStatus();
            this.zb = e;
            b: if (xzb(this)) {
              var f = g.Ln(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.In(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  y8(this);
                  z8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Sa.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.length = 0;
              this.B.j += a;
              this.K = 0;
              m = this.B.j;
            } else m = g.Kn(this.j);
            if ((this.C = 200 == e)) {
              if (this.Rb && !this.Ua) {
                b: {
                  if (this.j) {
                    var n = g.Mn(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.hc(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Ua = !0), Bzb(this, e);
                else {
                  this.C = !1;
                  this.N = 3;
                  t8(12);
                  y8(this);
                  z8(this);
                  break a;
                }
              }
              this.Fa
                ? (Czb(this, b, m),
                  g.LS &&
                    this.C &&
                    3 == b &&
                    (this.bb.Ra(this.ib, "tick", this.q2), this.ib.start()))
                : Bzb(this, m);
              4 == b && y8(this);
              this.C &&
                !this.Ka &&
                (4 == b ? Ezb(this.G, this) : ((this.C = !1), x8(this)));
            } else
              g.Bfa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.N = 3), t8(12))
                  : ((this.N = 0), t8(13)),
                y8(this),
                z8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.q2 = function () {
    if (this.j) {
      var a = g.In(this.j),
        b = g.Kn(this.j);
      this.K < b.length &&
        (A8(this), Czb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Ka = !0;
    y8(this);
  };
  g.k.o2 = function () {
    this.ma = null;
    var a = Date.now();
    0 <= a - this.Jb
      ? (2 != this.Ta && (s8(3), t8(17)), y8(this), (this.N = 2), z8(this))
      : Dzb(this, this.Jb - a);
  };
  g.k.getLastError = function () {
    return this.N;
  };
  g.k.gO = function () {
    return this.j;
  };
  Nzb.prototype.cancel = function () {
    this.C = Pzb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Tzb.prototype;
  g.k.PS = 8;
  g.k.Dh = 1;
  g.k.connect = function (a, b, c, d) {
    t8(0);
    this.ac = a;
    this.Ka = b || {};
    c && void 0 !== d && ((this.Ka.OSID = c), (this.Ka.OAID = d));
    this.Ua = this.Jc;
    this.Na = Jzb(this, null, this.ac);
    E8(this);
  };
  g.k.disconnect = function () {
    Vzb(this);
    if (3 == this.Dh) {
      var a = this.Za++,
        b = this.Na.clone();
      g.Gp(b, "SID", this.D);
      g.Gp(b, "RID", a);
      g.Gp(b, "TYPE", "terminate");
      H8(this, b);
      a = new w8(this, this.D, a);
      a.Ta = 2;
      a.Z = a8(b.clone());
      b = !1;
      if (g.Sa.navigator && g.Sa.navigator.sendBeacon)
        try {
          b = g.Sa.navigator.sendBeacon(a.Z.toString(), "");
        } catch (c) {}
      !b && g.Sa.Image && ((new Image().src = a.Z), (b = !0));
      b || ((a.j = wzb(a.G, null)), a.j.send(a.Z));
      a.Ba = Date.now();
      x8(a);
    }
    aAb(this);
  };
  g.k.Ng = function () {
    return 0 == this.Dh;
  };
  g.k.getState = function () {
    return this.Dh;
  };
  g.k.RS = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Dh)) {
        if (!a) {
          this.Za = Math.floor(1e5 * Math.random());
          a = this.Za++;
          var b = new w8(this, "", a),
            c = this.W;
          this.Jb && (c ? ((c = g.qd(c)), g.sd(c, this.Jb)) : (c = this.Jb));
          null !== this.N || this.qb || ((b.Na = c), (c = null));
          var d;
          if (this.ub)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = Yzb(this, b, d);
          e = this.Na.clone();
          g.Gp(e, "RID", a);
          g.Gp(e, "CVER", 22);
          this.Fa && g.Gp(e, "X-HTTP-Session-Id", this.Fa);
          H8(this, e);
          c &&
            (this.qb
              ? (d = "headers=" + g.Je(g.Cga(c)) + "&" + d)
              : this.N && g.Kp(e, this.N, c));
          Izb(this.B, b);
          this.Qf && g.Gp(e, "TYPE", "init");
          this.ub
            ? (g.Gp(e, "$req", d),
              g.Gp(e, "SID", "null"),
              (b.Rb = !0),
              vzb(b, e, null))
            : vzb(b, e, d);
          this.Dh = 2;
        }
      } else
        3 == this.Dh &&
          (a ? Zzb(this, a) : 0 == this.C.length || Ozb(this.B) || Zzb(this));
  };
  g.k.QS = function () {
    this.Z = null;
    $zb(this);
    if (this.Nc && !(this.ib || null == this.j || 0 >= this.Pd)) {
      var a = 2 * this.Pd;
      this.Ea = u8((0, g.jb)(this.d9, this), a);
    }
  };
  g.k.d9 = function () {
    this.Ea &&
      ((this.Ea = null),
      (this.Ua = !1),
      (this.ib = !0),
      t8(10),
      C8(this),
      $zb(this));
  };
  g.k.QP = function (a) {
    this.j == a && this.Nc && !this.ib && (Uzb(this), (this.ib = !0), t8(11));
  };
  g.k.t2 = function () {
    null != this.ma && ((this.ma = null), C8(this), Gzb(this), t8(19));
  };
  g.k.oca = function (a) {
    a ? t8(2) : t8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = cAb.prototype;
  g.k.WS = function () {};
  g.k.VS = function () {};
  g.k.US = function () {};
  g.k.SS = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.v2 = function () {};
  g.ob(J8, g.Ld);
  J8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Ta = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  J8.prototype.close = function () {
    this.j.disconnect();
  };
  J8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.Xm(a)), (a = c));
    b.C.push(new Mzb(b.Of++, a));
    3 == b.Dh && E8(b);
  };
  J8.prototype.xa = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    J8.Lf.xa.call(this);
  };
  g.ob(eAb, mzb);
  g.ob(fAb, nzb);
  g.ob(I8, cAb);
  I8.prototype.WS = function () {
    this.j.dispatchEvent("m");
  };
  I8.prototype.VS = function (a) {
    this.j.dispatchEvent(new eAb(a));
  };
  I8.prototype.US = function (a) {
    this.j.dispatchEvent(new fAb(a));
  };
  I8.prototype.SS = function () {
    this.j.dispatchEvent("n");
  };
  var L8 = new g.Ld();
  g.w(iAb, g.Ab);
  g.k = N8.prototype;
  g.k.Bu = null;
  g.k.cq = !1;
  g.k.Dx = null;
  g.k.sL = null;
  g.k.Bx = null;
  g.k.Cx = null;
  g.k.Mr = null;
  g.k.Or = null;
  g.k.Cu = null;
  g.k.hj = null;
  g.k.mG = 0;
  g.k.jo = null;
  g.k.lG = null;
  g.k.Nr = null;
  g.k.JB = -1;
  g.k.i_ = !0;
  g.k.Au = !1;
  g.k.rL = 0;
  g.k.kG = null;
  var nAb = {},
    mAb = {};
  g.k = N8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.z2 = function (a) {
    a = a.target;
    var b = this.kG;
    b && 3 == g.In(a) ? b.qL() : this.XS(a);
  };
  g.k.XS = function (a) {
    try {
      if (a == this.hj)
        a: {
          var b = g.In(this.hj),
            c = this.hj.B,
            d = this.hj.getStatus();
          if ((g.ef && !g.Wc(10)) || (g.Xc && !g.Tc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Kn(this.hj))) break a;
          this.Au ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Jn(3) : this.j.Jn(2));
          sAb(this);
          var e = this.hj.getStatus();
          this.JB = e;
          var f = g.Kn(this.hj);
          if ((this.cq = 200 == e)) {
            4 == b && P8(this);
            if (this.Fa) {
              for (a = !0; !this.Au && this.mG < f.length; ) {
                var h = oAb(this, f);
                if (h == mAb) {
                  4 == b && ((this.Nr = 4), M8(15), (a = !1));
                  break;
                } else if (h == nAb) {
                  this.Nr = 4;
                  M8(16);
                  a = !1;
                  break;
                } else tAb(this, h);
              }
              4 == b && 0 == f.length && ((this.Nr = 1), M8(17), (a = !1));
              this.cq = this.cq && a;
              a || (P8(this), Q8(this));
            } else tAb(this, f);
            this.cq &&
              !this.Au &&
              (4 == b ? this.j.nG(this) : ((this.cq = !1), O8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Nr = 3), M8(13))
              : ((this.Nr = 0), M8(14)),
              P8(this),
              Q8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.qaa = function (a) {
    K8((0, g.jb)(this.paa, this, a), 0);
  };
  g.k.paa = function (a) {
    this.Au || (sAb(this), tAb(this, a), O8(this));
  };
  g.k.iZ = function (a) {
    K8((0, g.jb)(this.oaa, this, a), 0);
  };
  g.k.oaa = function (a) {
    this.Au || (P8(this), (this.cq = a), this.j.nG(this), this.j.Jn(4));
  };
  g.k.cancel = function () {
    this.Au = !0;
    P8(this);
  };
  g.k.w2 = function () {
    this.Dx = null;
    var a = Date.now();
    0 <= a - this.sL
      ? (2 != this.Cx && this.j.Jn(3),
        P8(this),
        (this.Nr = 2),
        M8(18),
        Q8(this))
      : rAb(this, this.sL - a);
  };
  g.k.getLastError = function () {
    return this.Nr;
  };
  g.k = wAb.prototype;
  g.k.uL = null;
  g.k.Ij = null;
  g.k.UJ = !1;
  g.k.C_ = null;
  g.k.BH = null;
  g.k.bP = null;
  g.k.vL = null;
  g.k.Jl = null;
  g.k.eq = -1;
  g.k.KB = null;
  g.k.wC = null;
  g.k.connect = function (a) {
    this.vL = a;
    a = T8(this.j, null, this.vL);
    M8(3);
    this.C_ = Date.now();
    var b = this.j.W;
    null != b
      ? ((this.KB = b[0]),
        (this.wC = b[1])
          ? ((this.Jl = 1), xAb(this))
          : ((this.Jl = 2), yAb(this)))
      : (b8(a, "MODE", "init"),
        (this.Ij = new N8(this)),
        (this.Ij.Bu = this.uL),
        lAb(this.Ij, a, !1, null, !0),
        (this.Jl = 0));
  };
  g.k.g5 = function (a) {
    if (a) (this.Jl = 2), yAb(this);
    else {
      M8(4);
      var b = this.j;
      b.Co = b.ls.eq;
      X8(b, 9);
    }
    a && this.Jn(2);
  };
  g.k.tL = function (a) {
    return this.j.tL(a);
  };
  g.k.abort = function () {
    this.Ij && (this.Ij.cancel(), (this.Ij = null));
    this.eq = -1;
  };
  g.k.Ng = function () {
    return !1;
  };
  g.k.YS = function (a, b) {
    this.eq = a.JB;
    if (0 == this.Jl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Co = this.eq;
          X8(a, 2);
          return;
        }
        this.KB = c[0];
        this.wC = c[1];
      } else (a = this.j), (a.Co = this.eq), X8(a, 2);
    else if (2 == this.Jl)
      if (this.UJ) M8(7), (this.bP = Date.now());
      else if ("11111" == b) {
        if (
          (M8(6),
          (this.UJ = !0),
          (this.BH = Date.now()),
          (a = this.BH - this.C_),
          !g.ef || g.Wc(10) || 500 > a)
        )
          (this.eq = 200), this.Ij.cancel(), M8(12), U8(this.j, this, !0);
      } else M8(8), (this.BH = this.bP = Date.now()), (this.UJ = !1);
  };
  g.k.nG = function () {
    this.eq = this.Ij.JB;
    if (this.Ij.cq)
      0 == this.Jl
        ? this.wC
          ? ((this.Jl = 1), xAb(this))
          : ((this.Jl = 2), yAb(this))
        : 2 == this.Jl &&
          ((!g.ef || g.Wc(10) ? !this.UJ : 200 > this.bP - this.BH)
            ? (M8(11), U8(this.j, this, !1))
            : (M8(12), U8(this.j, this, !0)));
    else {
      0 == this.Jl ? M8(9) : 2 == this.Jl && M8(10);
      var a = this.j;
      this.Ij.getLastError();
      a.Co = this.eq;
      X8(a, 2);
    }
  };
  g.k.LB = function () {
    return this.j.LB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Jn = function (a) {
    this.j.Jn(a);
  };
  g.k = zAb.prototype;
  g.k.Bo = null;
  g.k.MB = null;
  g.k.Sj = null;
  g.k.Jg = null;
  g.k.wL = null;
  g.k.oG = null;
  g.k.ZS = null;
  g.k.pG = null;
  g.k.NB = 0;
  g.k.B2 = 0;
  g.k.Mi = null;
  g.k.Pr = null;
  g.k.fq = null;
  g.k.Eu = null;
  g.k.ls = null;
  g.k.QK = null;
  g.k.Gx = -1;
  g.k.aT = -1;
  g.k.Co = -1;
  g.k.Fx = 0;
  g.k.Ex = 0;
  g.k.Du = 8;
  g.ob(BAb, g.Ab);
  g.ob(CAb, g.Ab);
  g.k = zAb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    M8(0);
    this.wL = b;
    this.MB = c || {};
    d && void 0 !== e && ((this.MB.OSID = d), (this.MB.OAID = e));
    this.Z ? (K8((0, g.jb)(this.sV, this, a), 100), EAb(this)) : this.sV(a);
  };
  g.k.disconnect = function () {
    FAb(this);
    if (3 == this.j) {
      var a = this.NB++,
        b = this.oG.clone();
      g.Gp(b, "SID", this.D);
      g.Gp(b, "RID", a);
      g.Gp(b, "TYPE", "terminate");
      W8(this, b);
      a = new N8(this, this.D, a);
      a.Cx = 2;
      a.Mr = a8(b.clone());
      new Image().src = a.Mr.toString();
      a.Bx = Date.now();
      O8(a);
    }
    PAb(this);
  };
  g.k.sV = function (a) {
    this.ls = new wAb(this);
    this.ls.uL = this.Bo;
    this.ls.B = this.G;
    this.ls.connect(a);
  };
  g.k.Ng = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.cT = function (a) {
    this.Pr = null;
    KAb(this, a);
  };
  g.k.bT = function () {
    this.fq = null;
    this.Jg = new N8(this, this.D, "rpc", this.N);
    this.Jg.Bu = this.Bo;
    this.Jg.rL = 0;
    var a = this.ZS.clone();
    g.Gp(a, "RID", "rpc");
    g.Gp(a, "SID", this.D);
    g.Gp(a, "CI", this.QK ? "0" : "1");
    g.Gp(a, "AID", this.Gx);
    W8(this, a);
    if (!g.ef || g.Wc(10))
      g.Gp(a, "TYPE", "xmlhttp"), lAb(this.Jg, a, !0, this.pG, !1);
    else {
      g.Gp(a, "TYPE", "html");
      var b = this.Jg,
        c = !!this.pG;
      b.Cx = 3;
      b.Mr = a8(a.clone());
      qAb(b, c);
    }
  };
  g.k.YS = function (a, b) {
    if (0 != this.j && (this.Jg == a || this.Sj == a))
      if (((this.Co = a.JB), this.Sj == a && 3 == this.j))
        if (7 < this.Du) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.fq) {
                  if (this.Jg)
                    if (this.Jg.Bx + 3e3 < this.Sj.Bx)
                      V8(this), this.Jg.cancel(), (this.Jg = null);
                    else break a;
                  NAb(this);
                  M8(19);
                }
              }
            else
              (this.aT = a[1]),
                0 < this.aT - this.Gx &&
                  37500 > a[2] &&
                  this.QK &&
                  0 == this.Ex &&
                  !this.Eu &&
                  (this.Eu = K8((0, g.jb)(this.C2, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Jg == a && V8(this), !g.hc(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Gx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.pG = c[2]),
                  (c = c[3]),
                  null != c ? (this.Du = c) : (this.Du = 6),
                  (this.j = 3),
                  this.Mi && this.Mi.fT(),
                  (this.ZS = T8(this, this.LB() ? this.pG : null, this.wL)),
                  LAb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Mi && this.Mi.eT(c),
                (this.Ex = 0));
  };
  g.k.C2 = function () {
    null != this.Eu &&
      ((this.Eu = null), this.Jg.cancel(), (this.Jg = null), NAb(this), M8(20));
  };
  g.k.nG = function (a) {
    if (this.Jg == a) {
      V8(this);
      this.Jg = null;
      var b = 2;
    } else if (this.Sj == a) (this.Sj = null), (b = 1);
    else return;
    this.Co = a.JB;
    if (0 != this.j)
      if (a.cq)
        if (1 == b) {
          b = a.Cu ? a.Cu.length : 0;
          a = Date.now() - a.Bx;
          var c = L8;
          c.dispatchEvent(new BAb(c, b, a, this.Fx));
          DAb(this);
          this.C.length = 0;
        } else LAb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Co))) {
          if ((d = 1 == b))
            this.Sj || this.Pr || 1 == this.j || 2 <= this.Fx
              ? (d = !1)
              : ((this.Pr = K8(
                  (0, g.jb)(this.cT, this, a),
                  MAb(this, this.Fx)
                )),
                this.Fx++,
                (d = !0));
          d = !(d || (2 == b && NAb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.A2 = function (a) {
    if (!g.Gb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.nca = function (a) {
    a ? M8(2) : (M8(1), OAb(this, 8));
  };
  g.k.tL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.an();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Mi && this.Mi.isActive(this);
  };
  g.k.Jn = function (a) {
    var b = L8;
    b.dispatchEvent(new CAb(b, a));
  };
  g.k.LB = function () {
    return !(!g.ef || g.Wc(10));
  };
  g.k = QAb.prototype;
  g.k.fT = function () {};
  g.k.eT = function () {};
  g.k.dT = function () {};
  g.k.xL = function () {};
  g.k.gT = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = RAb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Gb(this.j, a) || g.Gb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Dfb)(b, a);
    0 <= c ? (g.Hb(b, c), (b = !0)) : (b = !1);
    return b || g.Ib(this.B, a);
  };
  g.k.Wl = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(SAb, g.Ab);
  g.w(TAb, g.Ab);
  g.ob(Y8, g.I);
  g.k = Y8.prototype;
  g.k.faa = function () {
    this.Xi = Math.min(3e5, 2 * this.Xi);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Xi + 15e3 * Math.random();
    g.cv(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Xi = 5e3;
  };
  g.ob(VAb, QAb);
  g.k = VAb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Ch = function (a) {
    return this.C.Ch(a);
  };
  g.k.oa = function (a, b) {
    return this.C.oa.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.vb(this.C),
      this.disconnect(),
      g.vb(this.B),
      (this.B = null),
      (this.ra = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.W = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ba + "/test";
      b = this.Ba + "/bind";
      var d = new zAb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Ta
        ),
        e = this.j;
      e && (e.Mi = null);
      d.Mi = this;
      this.j = d;
      WAb(this);
      if (this.j) {
        d = g.ZB("ID_TOKEN");
        var f = this.j.Bo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Bo = f;
      }
      e
        ? ((3 != e.getState() && 0 == HAb(e)) || e.getState(),
          this.j.connect(a, b, this.N, e.D, e.Gx))
        : c
        ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    WAb(this);
    this.j && (3 == this.j.getState() && KAb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.sd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Az() && (WAb(this), GAb(this.j, a));
  };
  g.k.fT = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) GAb(this.j, a[b]);
    }
    this.oa("handlerOpened");
    syb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.dT = function (a) {
    var b = 2 == a && 401 == this.j.Co;
    4 == a || b || this.B.start();
    this.oa("handlerError", a, b);
    yyb(this.Fa, "BROWSER_CHANNEL");
  };
  g.k.xL = function (a, b) {
    if (!this.B.isActive()) this.oa("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    uyb(this.Ea, "BROWSER_CHANNEL");
    a &&
      this.Xa.j.yL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.Za.j.yL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.gT = function () {
    var a = { v: 2 };
    this.W && (a.gsessionid = this.W);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.sd(a, this.K);
    return a;
  };
  g.k.eT = function (a) {
    "S" == a[0]
      ? (this.W = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.oa("handlerMessage", new UAb(a[0], a[1]));
    wyb(this.Ka, "BROWSER_CHANNEL");
  };
  g.k.Az = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.xr = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Ua && this.j) {
      var b = this.j.Bo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Bo = b;
    }
  };
  g.k.Is = function () {
    return this.N.id;
  };
  g.k.Ns = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Nw = function () {
    var a = this.B;
    g.dv(a.j);
    a.start();
  };
  g.k.Bba = function () {
    this.B.isActive();
    0 == HAb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(YAb, g.Ld);
  g.k = YAb.prototype;
  g.k.connect = function (a, b, c) {
    this.Ed.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Ed.disconnect(a);
  };
  g.k.Nw = function () {
    this.Ed.Nw();
  };
  g.k.Is = function () {
    return this.Ed.Is();
  };
  g.k.Ns = function () {
    return this.Ed.Ns();
  };
  g.k.Az = function () {
    return this.Ed.Az();
  };
  g.k.F2 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Ed,
      b = this.j;
    g.nD("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.QK,
      sessionId: a.j.D,
      arrayId: a.j.Gx,
    });
    g.nD("yt-remote-session-screen-id", b);
    a = i8();
    b = j8();
    g.Gb(a, b) || a.push(b);
    Qyb(a);
    Syb();
  };
  g.k.D2 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.E2 = function (a) {
    this.dispatchEvent(new SAb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new TAb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Ed.sendMessage(a, b);
  };
  g.k.xr = function (a) {
    this.Ed.xr(a);
  };
  g.k.dispose = function () {
    this.Ed.dispose();
  };
  g.k = ZAb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.Z = a),
      (this.N = b),
      aBb(this),
      (a = g.ZB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.s8 && (this.B.mdxVersion = "" + this.j.s8),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.x5 && (this.B.cst = this.j.x5),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.N ? (this.B.ui = "" + this.N) : delete this.B.ui,
      Object.assign(this.B, this.Z),
      (this.channel = new J8(this.pathPrefix, {
        C7: "gsessionid",
        w8: this.D,
        x8: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      $Ab(this));
  };
  g.k.disconnect = function (a) {
    this.W = void 0 === a ? 0 : a;
    this.C.stop();
    aBb(this);
    this.channel &&
      (0 !== this.W ? (this.B.ui = "" + this.W) : delete this.B.ui,
      this.channel.close());
    this.W = 0;
  };
  g.k.Ns = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Nw = function () {
    var a = this.C;
    g.dv(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (aBb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.xr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Is = function () {
    return this.j ? this.j.id : "";
  };
  g.k.oa = function (a) {
    return this.G.oa.apply(this.G, [a].concat(g.oa(g.Ia.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Ch = function (a) {
    return this.G.Ch(a);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.vb(this.G),
      this.disconnect(),
      g.vb(this.C),
      (this.Ba = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.w(bBb, g.Ld);
  g.k = bBb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Nw = function () {
    this.j.Nw();
  };
  g.k.Is = function () {
    return this.j.Is();
  };
  g.k.Ns = function () {
    return this.j.Ns();
  };
  g.k.Az = function () {
    return 3 === this.j.K;
  };
  g.k.I2 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.G2 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.H2 = function (a) {
    this.dispatchEvent(new SAb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new TAb(401 === this.j.Bg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.xr = function (a) {
    this.j.xr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var jBb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.ob(g9, g.yG);
  g9.prototype.Mk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!Nyb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? h8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.w(nBb, g.yG);
  g.k = nBb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.jd) && this.CZ();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.jd) || (g.tC(this.jd), (this.jd = NaN));
  };
  g.k.xa = function () {
    this.stop();
    g.yG.prototype.xa.call(this);
  };
  g.k.CZ = function () {
    this.jd = NaN;
    this.j = g.wC($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.N },
      timeout: 5e3,
      onSuccess: (0, g.jb)(this.K2, this),
      onError: (0, g.jb)(this.J2, this),
      onTimeout: (0, g.jb)(this.L2, this),
    });
  };
  g.k.K2 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.oa("pairingComplete", new e8(a), b);
  };
  g.k.J2 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= hDb.length
        ? this.oa("pairingFailed", Error("DIAL polling timed out"))
        : ((a = hDb[this.B]),
          (this.jd = g.rC((0, g.jb)(this.CZ, this), a)),
          this.B++)
      : this.oa("pairingFailed", Error("Server error " + a.status));
  };
  g.k.L2 = function () {
    this.j = null;
    this.oa("pairingFailed", Error("Server not responding"));
  };
  var hDb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.ob(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.oa("screenChange");
    !g.oD("yt-remote-lounge-token-expiration") && oBb(this);
    g.tC(this.j);
    this.j = g.rC((0, g.jb)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    h9(this);
    kBb(this, a);
    j9(this, !1);
    this.oa("screenChange");
    b(a);
    a.token || oBb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    mBb(this, a) && (j9(this, !1), (c = !0));
    b(a);
    c && this.oa("screenChange");
  };
  g.k.PK = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), j9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.oa("screenChange");
  };
  g.k.xa = function () {
    g.tC(this.j);
    i9.Lf.xa.call(this);
  };
  g.k.a7 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.Z6 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(qBb, g.yG);
  g.k = qBb.prototype;
  g.k.start = function () {
    var a = parseInt(g.oD("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.nb() - 144e5 < a ? 0 : a)
      ? k9(this)
      : ((this.D = g.nb() + 3e5),
        g.nD("yt-remote-fast-check-period", this.D),
        this.VQ());
  };
  g.k.isEmpty = function () {
    return g.nd(this.j);
  };
  g.k.update = function () {
    pBb("Updating availability on schedule.");
    var a = this.K(),
      b = g.cd(
        this.j,
        function (c, d) {
          return c && !!h8(a, d);
        },
        this
      );
    tBb(this, b);
  };
  g.k.xa = function () {
    g.tC(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.yG.prototype.xa.call(this);
  };
  g.k.VQ = function () {
    g.tC(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = uBb(this);
    if (kyb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = XAb(
        this.G,
        b,
        { lounge_token: g.id(a).join(",") },
        (0, g.jb)(this.L$, this, a),
        (0, g.jb)(this.K$, this)
      );
    } else tBb(this, {}), k9(this);
  };
  g.k.L$ = function (a, b) {
    this.B = null;
    var c = g.id(uBb(this));
    if (g.Zb(c, g.id(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      tBb(this, c);
      k9(this);
    } else this.ag("Changing Screen set during request."), this.VQ();
  };
  g.k.K$ = function (a) {
    this.ag("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.ag = function (a) {
    b9("OnlineScreenService", a);
  };
  g.ob(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.oa("screenChange"),
      this.j.isEmpty() || this.oa("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.PK = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.PK(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        b9(this.K, a),
        d(Error(a)));
  };
  g.k.Mk = function (a) {
    return a
      ? this.screens
      : g.Kb(
          this.screens,
          g.vt(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.hT = function () {
    return g.vt(
      this.Mk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.iT = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new nBb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.vb(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.vb(l);
      f(m);
    });
    l.start();
    return (0, g.jb)(l.stop, l);
  };
  g.k.M2 = function (a, b, c, d) {
    g.wC($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.jb)(function (e, f) {
        e = new e8(f.screen || {});
        if (!e.name || yBb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); yBb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.jb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.jb)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.xa = function () {
    g.vb(this.B);
    g.vb(this.j);
    l9.Lf.xa.call(this);
  };
  g.k.k7 = function () {
    ABb(this);
    this.oa("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.ob(n9, g.yG);
  g.k = n9.prototype;
  g.k.zj = function (a) {
    this.isDisposed() ||
      (a && (p9(this, "" + a), this.oa("sessionFailed")),
      (this.j = null),
      this.oa("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Fa, a);
  };
  g.k.jT = function () {
    return null;
  };
  g.k.nR = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.jb)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.jb)(function () {
        p9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.xa = function () {
    this.nR("");
    n9.Lf.xa.call(this);
  };
  g.w(q9, n9);
  g.k = q9.prototype;
  g.k.lR = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      MBb(this);
      this.Ba = !1;
      this.W = "unknown";
      this.C.removeUpdateListener(this.ra);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ea
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.ra);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
    HBb(this, "getMdxSessionStatus");
  };
  g.k.Lz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.Xm(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.jb)(function () {
            this.zj();
          }, this),
          (0, g.jb)(function () {
            this.zj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.zj(Error("Stopping cast device without session."));
  };
  g.k.nR = function () {};
  g.k.xa = function () {
    this.info("disposeInternal");
    MBb(this);
    this.C &&
      (this.C.removeUpdateListener(this.ra),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ea
      ));
    this.C = null;
    n9.prototype.xa.call(this);
  };
  g.k.yaa = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = c8(b)), g.cb(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.Xm(b)),
            a)
          ) {
            case "mdxSessionStatus":
              EBb(this, b);
              break;
            case "loungeToken":
              IBb(this, b);
              break;
            default:
              p9(this, "Unknown youtube message: " + a);
          }
        else p9(this, "Unable to parse message.");
      else p9(this, "No data in message.");
  };
  g.k.BW = function (a, b, c, d) {
    g.tC(this.Z);
    this.Z = 0;
    xBb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.jb)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (p9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.Z = g.rC((0, g.jb)(this.BW, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.jT = function () {
    return this.C;
  };
  g.k.N2 = function (a) {
    this.isDisposed() || a || (p9(this, "Cast session died."), this.zj());
  };
  g.w(r9, n9);
  g.k = r9.prototype;
  g.k.lR = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Ka);
  };
  g.k.Lz = function (a) {
    this.Na = a;
    this.ma();
  };
  g.k.stop = function () {
    UBb(this);
    this.C
      ? this.C.stop(
          (0, g.jb)(this.zj, this, null),
          (0, g.jb)(this.zj, this, "Failed to stop DIAL device.")
        )
      : this.zj();
  };
  g.k.xa = function () {
    UBb(this);
    this.C && this.C.removeUpdateListener(this.Ka);
    this.C = null;
    n9.prototype.xa.call(this);
  };
  g.k.O2 = function (a) {
    this.isDisposed() ||
      a ||
      (p9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.zj());
  };
  g.w(u9, n9);
  u9.prototype.stop = function () {
    this.zj();
  };
  u9.prototype.lR = function () {};
  u9.prototype.Lz = function () {
    g.tC(this.C);
    this.C = NaN;
    var a = h8(this.D.Mk(), this.B.label);
    a ? o9(this, a) : this.zj(Error("No such screen"));
  };
  u9.prototype.xa = function () {
    g.tC(this.C);
    this.C = NaN;
    n9.prototype.xa.call(this);
  };
  g.w(v9, g.yG);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.Z, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.jb)(this.u$, this);
    c = new chrome.cast.ApiConfig(c, (0, g.jb)(this.eZ, this), e, d, a);
    c.customDialLaunchCallback = (0, g.jb)(this.r9, this);
    chrome.cast.initialize(
      c,
      (0, g.jb)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.G),
          gBb(),
          this.B.subscribe("onlineScreenChange", (0, g.jb)(this.kT, this)),
          (this.C = XBb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.jb)(function (f) {
              this.ag("Failed to set initial custom receivers: " + g.Xm(f));
            }, this)
          ),
          this.oa("yt-remote-cast2-availability-change", x9(this)),
          b(!0));
      }, this),
      (0, g.jb)(function (f) {
        this.ag("Failed to initialize API: " + g.Xm(f));
        b(!1);
      }, this)
    );
  };
  g.k.Kba = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        w9("Unsetting old screen status: " + this.j.B.friendlyName),
          y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        a = h8(this.B.Mk(), a);
        if (!a) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == a.idType) {
          w9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        c = VBb(this, a);
        c ||
          (w9("setConnectedScreenStatus: Connected receiver not custom..."),
          (c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id, a.name)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(c),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.jb)(function (d) {
              this.ag("Failed to set initial custom receivers: " + g.Xm(d));
            }, this)
          ));
        w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
        y9(this, new u9(this.B, c), !0);
      }
      this.j.nR(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.Nba = function (a) {
    this.isDisposed()
      ? this.ag("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.Lz(a)
      : this.ag("Setting connection data without a session");
  };
  g.k.Q2 = function () {
    this.isDisposed()
      ? this.ag("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), y9(this, null))
      : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.jb)(this.eZ, this),
      (0, g.jb)(this.O$, this)
    );
  };
  g.k.xa = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.jb)(this.kT, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = dBb,
      b = g.Va("yt.mdx.remote.debug.handlers_");
    g.Ib(b || [], a);
    g.vb(this.j);
    g.yG.prototype.xa.call(this);
  };
  g.k.ag = function (a) {
    b9("Controller", a);
  };
  g.k.gZ = function (a, b) {
    this.j == a &&
      (b || y9(this, null), this.oa("yt-remote-cast2-session-change", b));
  };
  g.k.r$ = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          w9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                w9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                w9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                y9(this, new u9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                y9(this, new r9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                y9(this, new q9(this.B, a, this.config_));
                break;
              default:
                this.ag("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.ag("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.ag("onReceiverAction_ called without receiver.");
  };
  g.k.r9 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.ag("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.ag(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          w9("Reselecting dial screen."),
          this.oa("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.ag(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.Z.extraData || {}),
        (c = a.screenId || null),
        s9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = RBb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.Z.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.dC(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = SBb(b, c)))
          : (a = SBb(b, c)))
      : (a = PBb(b));
    return a;
  };
  g.k.eZ = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            w9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              y9(this, new q9(this.B, c, this.config_), !0);
          else {
            this.ag(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = h8(this.B.Mk(), d.label);
        e &&
          f8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (w9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.vb(this.j),
          (this.j = new q9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.jb)(this.gZ, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return WBb(b, b.j);
          }),
          this.j.Lz(null));
        this.j.lR(a);
      }
    }
  };
  g.k.P2 = function () {
    return this.j ? this.j.jT() : null;
  };
  g.k.O$ = function (a) {
    this.isDisposed() ||
      (this.ag("Failed to estabilish a session: " + g.Xm(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null),
      this.oa("yt-remote-cast2-session-failed"));
  };
  g.k.u$ = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b && this.oa("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.kT = function () {
    this.isDisposed() ||
      ((this.C = XBb(this)),
      w9("Updating custom receivers: " + g.Xm(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.jb)(function () {
          this.ag("Failed to set custom receivers.");
        }, this)
      ),
      this.oa("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.Nba;
  v9.prototype.setConnectedScreenStatus = v9.prototype.Kba;
  v9.prototype.stopSession = v9.prototype.Q2;
  v9.prototype.getCastSession = v9.prototype.P2;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var fCb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    lCb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.xp = a.hasPrevious),
      (this.Pk = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.Z = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.ll = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(mCb(this));
  };
  g.w(L9, g.yG);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.Ns = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Nw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this)
      ? (this.j ? this.j.play(null, g.Rd, R9(this, "play")) : Q9(this, "play"),
        pCb(this, 1, I9(M9(this))),
        this.oa("remotePlayerChange"))
      : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this)
      ? (this.j
          ? this.j.pause(null, g.Rd, R9(this, "pause"))
          : Q9(this, "pause"),
        pCb(this, 2, I9(M9(this))),
        this.oa("remotePlayerChange"))
      : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Rd, R9(this, "seekTo", { newTime: a }));
      } else Q9(this, "seekTo", { newTime: a });
      pCb(this, 3, a);
      this.oa("remotePlayerChange");
    } else O9(this, g.kb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j
        ? this.j.stop(null, g.Rd, R9(this, "stopVideo"))
        : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      lCb(a);
      P9(this, a);
      this.oa("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.jb)(function () {
              c9("set receiver volume: " + d);
            }, this),
            (0, g.jb)(function () {
              this.ag("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.jb)(function () {
              c9("set receiver muted: " + b);
            }, this),
            (0, g.jb)(function () {
              this.ag("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.kb(this.setVolume, a, b));
  };
  g.k.lT = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.Xm(b.style)),
        g.sd(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.kb(this.lT, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this)
      ? ((b = b.getLanguageInfo().getId()),
        Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = M9(this)),
        (a.audioTrackId = b),
        P9(this, a))
      : O9(this, g.kb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.Xm(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.OJ = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.kb(this.OJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.kb(this.nextVideo, a, b));
  };
  g.k.UG = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.oa("remotePlayerChange");
    } else O9(this, this.UG);
  };
  g.k.IV = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.IV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.oa("proxyStateChange", a, this.C);
    }
    g.yG.prototype.dispose.call(this);
  };
  g.k.xa = function () {
    oCb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.yG.prototype.xa.call(this);
  };
  g.k.sR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.oa("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.p$ = function (a, b) {
    this.oa(a, b);
  };
  g.k.h9 = function (a) {
    if (!a) this.oE(null), K9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          P9(this, b);
    }
  };
  g.k.oE = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if ((this.j = a))
      this.j.addUpdateListener(this.Z),
        qCb(this),
        this.oa("remotePlayerChange");
  };
  g.k.g9 = function (a) {
    a ? (qCb(this), this.oa("remotePlayerChange")) : this.oE(null);
  };
  g.k.RR = function () {
    Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.k9 = function () {
    var a = iCb();
    a && K9(this, a);
  };
  g.k.ag = function (a) {
    b9("CP", a);
  };
  g.w(U9, g.yG);
  g.k = U9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Ka ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.Xm(m));
      this.B.connect({ method: c, params: g.Xm(m) }, a, Tyb());
    } else S9("Connecting without params"), this.B.connect({}, a, Tyb());
    uCb(this);
  };
  g.k.xr = function (a) {
    this.B.xr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Ua("yt.mdx.remote.remoteClient_", null),
      this.oa("beforeDispose"),
      T9(this, 3));
    g.yG.prototype.dispose.call(this);
  };
  g.k.xa = function () {
    vCb(this);
    xCb(this);
    wCb(this);
    g.tC(this.Z);
    this.Z = NaN;
    g.tC(this.W);
    this.W = NaN;
    this.D = null;
    g.fD(this.ma);
    this.ma.length = 0;
    this.B.dispose();
    g.yG.prototype.xa.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.AX = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.H6 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.qD()) ? this.B.Az() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Ty = function (a) {
    S9("Disconnecting with " + a);
    g.Ua("yt.mdx.remote.remoteClient_", null);
    vCb(this);
    this.oa("beforeDisconnect", a);
    1 == a && k8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.D6 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), J9(a, this.D, a.index));
    return mCb(a);
  };
  g.k.Pba = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.tC(this.Z),
      (this.Z = g.rC(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && V9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      I9(this.j) == I9(c) &&
      g.Xm(this.j.trackData) == g.Xm(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.cc(
      d,
      function (e) {
        this.oa(e);
      },
      this
    );
  };
  g.k.vW = function () {
    var a = this.B.Is(),
      b = g.Db(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.qD = function () {
    return this.B.Ns();
  };
  g.k.o6 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.p6 = function () {
    return this.N || "";
  };
  g.k.R2 = function () {
    !isNaN(this.qD()) && this.B.Nw();
  };
  g.k.Iba = function (a, b) {
    V9(this, a, b);
    zCb(this);
  };
  g.k.mT = function () {
    var a = g.GC("SID", "") || "",
      b = g.GC("SAPISID", "") || "",
      c = g.GC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.qg(g.pg(a), 2);
    b = g.qg(g.pg(b), 2);
    c = g.qg(g.pg(c), 2);
    return g.qg(g.pg(a + "," + b + "," + c), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Ch;
  U9.prototype.getProxyState = U9.prototype.H6;
  U9.prototype.disconnect = U9.prototype.Ty;
  U9.prototype.getPlayerContextData = U9.prototype.D6;
  U9.prototype.setPlayerContextData = U9.prototype.Pba;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.vW;
  U9.prototype.getReconnectTimeout = U9.prototype.qD;
  U9.prototype.getAutoplayMode = U9.prototype.o6;
  U9.prototype.getAutoplayVideoId = U9.prototype.p6;
  U9.prototype.reconnect = U9.prototype.R2;
  U9.prototype.sendMessage = U9.prototype.Iba;
  U9.prototype.getXsrfToken = U9.prototype.mT;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.AX;
  g.w(LCb, g9);
  g.k = LCb.prototype;
  g.k.Mk = function (a) {
    return this.Zg.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Zg.$_c(a);
  };
  g.k.get = function (a) {
    return this.Zg.$_g(a);
  };
  g.k.start = function () {
    this.Zg.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Zg.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Zg.$_r(a, b, c);
  };
  g.k.PK = function (a, b, c, d) {
    this.Zg.$_un(a, b, c, d);
  };
  g.k.xa = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.Zg.$_ubk(this.j[a]);
    this.j.length = 0;
    this.Zg = null;
    g9.prototype.xa.call(this);
  };
  g.k.S2 = function () {
    this.oa("screenChange");
  };
  g.k.X9 = function () {
    this.oa("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.M2;
  l9.prototype.$_gsppc = l9.prototype.iT;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.PK;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Mk;
  l9.prototype.$_gos = l9.prototype.hT;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Ch;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    WCb = null,
    a$ = [];
  g.w(aDb, g.I);
  g.k = aDb.prototype;
  g.k.xa = function () {
    g.I.prototype.xa.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Fc;
    a.unsubscribe("proxyStateChange", this.dZ, this);
    a.unsubscribe("remotePlayerChange", this.uE, this);
    a.unsubscribe("remoteQueueChange", this.xJ, this);
    a.unsubscribe("previousNextChange", this.aZ, this);
    a.unsubscribe("nowAutoplaying", this.VY, this);
    a.unsubscribe("autoplayDismissed", this.AY, this);
    this.Fc = this.module = null;
  };
  g.k.Ok = function (a) {
    var b = g.Ia.apply(1, arguments);
    if (2 != this.Fc.C)
      if (j$(this)) {
        if (1081 != M9(this.Fc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
              break;
            case "control_play":
              this.Fc.play();
              break;
            case "control_pause":
              this.Fc.pause();
              break;
            case "control_seek":
              this.K.qL(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              cDb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            k$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            k$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            cDb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.e9 = function (a) {
    this.N.m2(a);
  };
  g.k.Mca = function (a) {
    this.Ok("control_subtitles_set_track", g.nd(a) ? null : a);
  };
  g.k.I_ = function () {
    var a = this.J.getOption("captions", "track");
    g.nd(a) || cDb(this, a);
  };
  g.k.Mc = function (a) {
    this.module.Mc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.I9 = function () {
    g.nd(this.C) || dDb(this, this.C);
    this.D = !1;
  };
  g.k.dZ = function (a, b) {
    this.B.stop();
    2 === b && this.B_();
  };
  g.k.uE = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Fc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Oh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Oh = 0;
          break;
        default:
          this.module.Oh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Bc(new g.XL(8));
          this.A_();
          break;
        case 1085:
        case 3:
          this.Bc(new g.XL(9));
          break;
        case 1083:
        case 0:
          this.Bc(new g.XL(2));
          this.K.stop();
          this.Mc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Bc(new g.XL(4));
          break;
        case 2:
          this.Bc(new g.XL(4));
          this.Mc(I9(a));
          break;
        case -1:
          this.Bc(new g.XL(64));
          break;
        case -1e3:
          this.Bc(
            new g.XL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              vH: 2,
            })
          );
      }
      a = M9(this.Fc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), dDb(this, a));
      a = M9(this.Fc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.Z.isActive() ||
        this.s0();
    } else bDb(this);
  };
  g.k.aZ = function () {
    this.J.oa("mdxpreviousnextchange");
  };
  g.k.xJ = function () {
    j$(this) || bDb(this);
  };
  g.k.VY = function (a) {
    isNaN(a) || this.J.oa("mdxnowautoplaying", a);
  };
  g.k.AY = function () {
    this.J.oa("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a);
  };
  g.k.s0 = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Fc);
      this.events.Pc(this.W);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.W = this.events.T(this.J, "onVolumeChange", function (c) {
        ZCb(a, c);
      });
    }
  };
  g.k.A_ = function () {
    this.j.stop();
    if (!this.Fc.isDisposed()) {
      var a = M9(this.Fc);
      a.isPlaying() && this.Bc(new g.XL(8));
      this.Mc(I9(a));
      this.j.start();
    }
  };
  g.k.B_ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Fc.Ns();
    2 == this.Fc.C && !isNaN(a) && this.B.start();
  };
  g.k.Bc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.gCa(b, a)) {
      var c = g.oH(a, 2);
      c !== g.oH(this.G, 2) && this.J.bB(c);
      this.G = a;
      fDb(this.module, b, a);
    }
  };
  g.w(l$, g.V);
  l$.prototype.qd = function () {
    this.j.show();
  };
  l$.prototype.Pb = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    m8("mdx-privacy-popup-cancel");
    this.Pb();
  };
  l$.prototype.C = function () {
    m8("mdx-privacy-popup-confirm");
    this.Pb();
  };
  g.w(m$, g.V);
  m$.prototype.onStateChange = function (a) {
    this.Cc(a.state);
  };
  m$.prototype.Cc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.oH(a, 128)
        ? g.FK("Error on $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.FK("Playing on $RECEIVER_NAME", b)
        : g.FK("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(n$, g.VX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.Mt = g.dc(a, this.j, this)),
        g.WX(this, g.Jr(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Jj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.yk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.Mt[a].name;
  };
  n$.prototype.jh = function (a) {
    g.VX.prototype.jh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.Mt[a]);
    this.Gb.Pb();
  };
  g.w(eDb, g.aW);
  g.k = eDb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.yS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token"),
    };
    QCb(b, a);
    this.subscriptions.push(g.cF("yt-remote-before-disconnect", this.c9, this));
    this.subscriptions.push(g.cF("yt-remote-connection-change", this.v$, this));
    this.subscriptions.push(
      g.cF("yt-remote-receiver-availability-change", this.cZ, this)
    );
    this.subscriptions.push(g.cF("yt-remote-auto-connect", this.t$, this));
    this.subscriptions.push(g.cF("yt-remote-receiver-resumed", this.s$, this));
    this.subscriptions.push(g.cF("mdx-privacy-popup-confirm", this.Uaa, this));
    this.subscriptions.push(g.cF("mdx-privacy-popup-cancel", this.Taa, this));
    this.cZ();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.aW.prototype.load.call(this);
    this.Ll = new aDb(this, this.player, this.Fc);
    var a = (a = YCb()) ? a.currentTime : 0;
    var b = VCb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Mc(a);
    fDb(this, this.Fe, this.Fe);
    this.player.Qp(6);
  };
  g.k.unload = function () {
    this.player.oa("mdxautoplaycanceled");
    this.ws = this.Ep;
    g.wb(this.Ll, this.Fc);
    this.Fc = this.Ll = null;
    g.aW.prototype.unload.call(this);
    this.player.Qp(5);
    o$(this);
  };
  g.k.xa = function () {
    g.dF(this.subscriptions);
    g.aW.prototype.xa.call(this);
  };
  g.k.qE = function (a) {
    var b = g.Ia.apply(1, arguments);
    this.loaded && this.Ll.Ok.apply(this.Ll, [a].concat(g.oa(b)));
  };
  g.k.getAdState = function () {
    return this.Oh;
  };
  g.k.xp = function () {
    return this.Fc ? M9(this.Fc).xp : !1;
  };
  g.k.Pk = function () {
    return this.Fc ? M9(this.Fc).Pk : !1;
  };
  g.k.Mc = function (a, b) {
    this.LX = a || 0;
    this.player.oa("progresssync", a, b);
    this.player.xc("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.LX;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Fc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Nh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Fc && this.Fc.nextVideo();
  };
  g.k.OJ = function () {
    this.Fc && this.Fc.OJ();
  };
  g.k.c9 = function (a) {
    1 === a && (this.CQ = this.Fc ? M9(this.Fc) : null);
  };
  g.k.v$ = function () {
    var a = VCb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.ws;
      this.loaded && this.unload();
      this.Fc = a;
      this.CQ = null;
      b.key !== this.Ep.key && ((this.ws = b), this.load());
    } else
      g.vb(this.Fc),
        (this.Fc = null),
        this.loaded &&
          (this.unload(),
          (a = this.CQ) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, I9(a)));
    this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.cZ = function () {
    var a = [this.Ep],
      b = a.concat,
      c = RCb();
    C9() &&
      g.oD("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.Mt = b.call(a, c);
    a = TCb() || this.Ep;
    p$(this, a);
    this.player.xc("onMdxReceiversChange");
  };
  g.k.t$ = function () {
    var a = TCb();
    p$(this, a);
  };
  g.k.s$ = function () {
    this.ws = TCb();
  };
  g.k.Uaa = function () {
    this.ME = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.Taa = function () {
    this.ME = !1;
    o$(this);
    p$(this, this.Ep);
    this.ws = this.Ep;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Eh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Mt;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? jCb() : p$(this, b)),
          this.loaded ? this.ws : this.Ep
        );
      case "quickCast":
        return 2 === this.Mt.length &&
          "cast-selector-receiver" === this.Mt[1].key
          ? (b && jCb(), !0)
          : !1;
    }
  };
  g.k.RR = function () {
    this.Fc.RR();
  };
  g.k.ql = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.ZB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.ZB("SESSION_INDEX") && !g.ZB("LOGGED_IN"));
  };
  g.$V("remote", eDb);
})(_yt_player);
