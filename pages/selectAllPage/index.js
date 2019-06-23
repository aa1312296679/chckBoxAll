var selectAll = require('../../services/selectAll.js');
Page({
  data: {
    ...selectAll
  },
  onLoad() {

  },
  /**全选按钮下的所有单选按钮的选中信息**/
  onselectAllTap(event) {
    //更新被选中的信息
    this.data.selectedAllTxt = event.detail.selectedValue;
    //更新页面组件的单选按钮数据信息和全选按钮全选状态
    if (Object.getOwnPropertyNames(event.detail).length > 1) {
      this.data.selectAll = event.detail.selectAll;
      this.data.listData = event.detail.listData;
    }
  }
})