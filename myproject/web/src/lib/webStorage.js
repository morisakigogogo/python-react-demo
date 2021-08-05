/* webStorage DES
auth: Hirose Morisaki 2019/10/13 */
import encryption from './encryption';
class WebStorage {
  setItem(key, val) {
    const message = encryption.encryptByDES(JSON.stringify(val));
    localStorage.setItem(key, message);
  }
  getItem(key) {
    const str = localStorage.getItem(key);
    let message = '';
    if (str) {
      message = encryption.decryptByDES(str);
      try {
        return JSON.parse(message);
      } catch (e) {
        return str;
      }
    }
    return '';
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  removeAll() {
    localStorage.clear();
  }
  queryOfkey(key, name) {
    const obj = localStorage.getItem(key);
    return obj ? obj[name] : '';
  }
}

const storage = new WebStorage();
export default storage;
