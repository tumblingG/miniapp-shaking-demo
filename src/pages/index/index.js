// index.js
// 获取应用实例
const app = getApp()

Page({
  onLoad() {
    require.async('../../package1/services/utils').then(() => {

    }).catch(() => {})
  },

  /** groupStart:groupA, groupC */
  sum() {
    return 1 + 1 + 1;
  },
  /** groupEnd */

  /** groupStart:groupB */
  sum2() {
    return 2 + 2;
  },
  /** groupEnd */

  /** groupStart:groupA */
  sum3() {
    return 3 + 3;
  },
  /** groupEnd */
})
