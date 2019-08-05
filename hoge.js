const ja = {
  home: {
    title: 'ホーム'
  },
  about: {
    title: 'アバウト'
  },
  blog: {
    title: 'ブログ'
  },
  lab: {
    title: 'ラボ'
  },
  contact: {
    title: 'コンタクト'
  }
};

const ko = {
  home: {
    title: '홈'
  },
  about: {
    title: '어바웃'
  },
  blog: {
    title: '블로그'
  },
  lab: {
    title: '랩'
  },
  contact: {
    title: '콘택트'
  }
};

const common = {
  navigation_bar: {
    home: 'Home',
    about: 'About Me',
    blog: 'Blog',
    lab: 'Lab',
    contact: 'Contact'
  }
};

ja.common = {};
Object.assign(ja.common, common);
console.log(ja);