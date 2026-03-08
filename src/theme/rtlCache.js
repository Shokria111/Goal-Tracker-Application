import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const createRtlCache = (direction) =>
  createCache({
    key: direction === "rtl" ? "muirtl" : "mui",
    stylisPlugins:
      direction === "rtl" ? [prefixer, rtlPlugin] : [],
  });