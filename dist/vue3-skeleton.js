import { defineComponent as g, inject as R, computed as p, useSlots as B, openBlock as a, createElementBlock as l, normalizeClass as f, Fragment as b, renderList as v, createElementVNode as D, normalizeStyle as T, createCommentVNode as $, renderSlot as k, provide as A } from "vue";
const y = Symbol(), L = { key: 0 }, j = /* @__PURE__ */ g({
  __name: "Skeleton",
  props: {
    rows: { default: 1 },
    circle: { type: Boolean },
    containerClass: {},
    childClass: {},
    width: {},
    height: {},
    borderRadius: {},
    backgroundColor: {},
    animationDuration: {},
    enableAnimation: { type: Boolean, default: void 0 },
    inline: { type: Boolean, default: void 0 }
  },
  setup(t) {
    const n = t, o = R(y, {}), c = p(() => {
      const { rows: e } = n;
      return Math.floor(e);
    }), d = B(), C = p(() => {
      if (d.default)
        return d.default()[0].children || !1;
    }), S = () => {
      const e = {}, i = n.width ?? o.width ?? null, r = n.height ?? o.height ?? null, _ = n.borderRadius ?? o.borderRadius ?? null, u = n.backgroundColor ?? o.backgroundColor ?? null, m = n.animationDuration ?? o.animationDuration ?? null, h = n.enableAnimation ?? o.enableAnimation ?? null, w = n.circle;
      return s(i, "width", e), s(r, "height", e), s(_, "borderRadius", e), w && (e.borderRadius = "50%"), u && (e.backgroundColor = u), m && (e.animationDuration = `${m}s`), h && (e.animationPlayState = h ? "running" : "paused"), e;
    };
    function s(e, i, r) {
      typeof e == "string" ? r[i] = e : typeof e == "number" && (r[i] = `${e}px`);
    }
    return (e, i) => C.value ? k(e.$slots, "default", { key: 1 }) : (a(), l("span", {
      key: 0,
      class: f(["skeleton-container", e.containerClass])
    }, [
      (a(!0), l(b, null, v(c.value, () => (a(), l(b, null, [
        D("span", {
          style: T(S()),
          class: f(["skeleton-loading", e.childClass]),
          innerHTML: "‌"
        }, null, 6),
        e.inline ? $("", !0) : (a(), l("br", L))
      ], 64))), 256))
    ], 2));
  }
}), z = { class: "skeleton-theme" }, E = /* @__PURE__ */ g({
  __name: "SkeletonTheme",
  props: {
    width: {},
    height: {},
    borderRadius: {},
    backgroundColor: {},
    animationDuration: {},
    enableAnimation: { type: Boolean, default: void 0 },
    inline: { type: Boolean, default: void 0 }
  },
  setup(t) {
    return A(y, t), (o, c) => (a(), l("div", z, [
      k(o.$slots, "default")
    ]));
  }
}), N = {
  install: (t) => {
    t.component("Skeleton", j), t.component("SkeletonTheme", E);
  }
};
export {
  j as Skeleton,
  E as SkeletonTheme,
  N as default
};
