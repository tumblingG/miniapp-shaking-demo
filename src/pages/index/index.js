// index.js
// 获取应用实例
const app = getApp()

Page({
  onLoad() {
    require.async('../../package1/services/utils').then(() => {

    }).catch(() => {})
  },

  /**
   * groupStart:groupA,groupC
   * @params: ss
   */
  sum() {
    return 1 + 1 + 1;
  },
  /** groupEnd */

  /**
   * groupStart:groupB
   * @pssfsf
   */
  sum2() {
    return 2 + 2;
  },
  /** groupEnd */

  sum3() {
    return 3 + 3;
  },
})
