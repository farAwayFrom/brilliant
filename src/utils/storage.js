import Cookies from "js-cookie";

const prefix = "";

export default {
  cookie: {
    get(key) {
      if (key) {
        // 单个
        return Cookies.get(prefix + key);
      } else {
        // 所有
        return Cookies.get();
      }
    },
    getJSON(key) {
      return Cookies.getJSON(prefix + key);
    },
    set(key, value, path) {
      if (path !== undefined) {
        Cookies.set(prefix + key, value);
      } else {
        Cookies.set(prefix + key, value, { path: path });
      }
    },
    remove(key, path) {
      if (path !== undefined) {
        Cookies.remove(prefix + key);
      } else {
        Cookies.remove(prefix + key, { path: path });
      }
    }
  },
  local: {
    remove(key) {
      localStorage.removeItem(prefix + key);
    },
    removeAll() {
      localStorage.clear();
    },
    set(key, value) {
      localStorage[prefix + key] = value;
    },
    get(key, defaultValue) {
      return localStorage[prefix + key] || defaultValue;
    },
    setJson(key, value) {
      localStorage[prefix + key] = JSON.stringify(value);
    },
    getJson(key) {
      return JSON.parse(localStorage[prefix + key] || "{}");
    }
  },
  session: {
    remove(key) {
      sessionStorage.removeItem(prefix + key);
    },
    removeAll() {
      sessionStorage.clear();
    },
    set(key, value) {
      sessionStorage[prefix + key] = value;
    },
    get(key, defaultValue) {
      return sessionStorage[prefix + key] || defaultValue;
    },
    setJson(key, value) {
      sessionStorage[prefix + key] = JSON.stringify(value);
    },
    getJson(key) {
      return JSON.parse(sessionStorage[prefix + key] || "{}");
    }
  }
};
