/**
 * @param URL
 * @param options
 * @return {Promise<Object>}
 */
const request = (URL, options = {}) => {
  const body = options.body;
  if(options.method.toUpperCase() === 'POST') {
    switch (options.headers.get('Content-Type')) {
      case 'application/x-www-form-urlencoded':
        const strings = [];
        for (const key in body) {
          const value = body[key];
          const string = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          strings.push(string)
        }
        options.body = strings.join('&');
        break;
      /**
       * TODO
       */
      case 'multipart/form-data': break;
      case 'application/json': break;
      default: break;
    }
  }
  return fetch(URL, options);
};

export default request;