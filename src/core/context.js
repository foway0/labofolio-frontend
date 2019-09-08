import i18next from 'i18next';
import {writable, derived} from 'svelte/store';

import config from '../shared/config';
import constant from '../shared/constant';
import common from '../shared/locale/common';
import ja from '../shared/locale/ja';
import ko from '../shared/locale/ko';
ja.common = common;
ko.common = common;

import fetch from './fetch';

class Context {
  constructor() {
    if(! Context.instance) {
      this.config = config;
      this.constant = constant;
      this.fetch = fetch;
      this.user = writable({
        token: localStorage.getItem('token'),
        role: Number(localStorage.getItem('role'))
      });
      this.user_derived = derived(this.user, () => {
        return {
          token: localStorage.getItem('token'),
          role: Number(localStorage.getItem('role'))
        };
      });
      Context.instance = this;
    }
    return Context.instance;
  }

  init() {
    this.initI18next();
  }

  initI18next() {
    let lng = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    if(!constant.WHITELIST_LNG[lng]) {
      lng = constant.DEFAULT_LNG;
    }
    i18next.init({
      initImmediate: false,
      lng: lng,
      whitelist: constant.WHITELIST_LNG,
      resources: {
        ko: { translation: ko },
        ja: { translation: ja },
      }
    });
  }
}

const context = new Context();
const user_derived = context.user_derived;
export {i18next, user_derived as user};
export const t = writable((text, options = {}) => { return i18next.t(text, options); });
export default context;