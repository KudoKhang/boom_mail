const state = {
  getState: (key) => {
    const localKey = localStorage.getItem(key);
    try {
      return JSON.parse(localKey);
    } catch {
      // Not JSON
      return localKey;
    }
  },
  set: (key, value) => {
    if (typeof value === 'object' || Array.isArray(value)) {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
    localStorage.setItem(key, value);
  },
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
  getAdminToken() {
    return this.getState('admin_access_token');
  },
  getUserToken() {
    return this.getState('user_access_token');
  },
  getUser() {
    return this.getState('user');
  },
  getAdmin() {
    return this.getState('admin');
  },
};

export default state;
