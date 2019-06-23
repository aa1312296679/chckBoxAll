// pages/components/selectALL.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array, //头部标题
      value: []
    },
    selectAll: { // 全选按钮的状态
      type: Boolean,
      value: false
    },
    listData: { //所有单选数据
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedValue: '', //所有被选中的单选值
  },
  ready() {
    this.updateAllRadio();
    //判断是否为全选 为全选则将初始化后被选中的所有信息传给父级
    if (this.data.selectAll === true) {
      this.triggerEvent('selectAllTap', {
        selectedValue: this.data.selectedValue
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**单选事件**/
    checkboxChange: function(e) {
      //所有被选中的单项信息
      var radioValues = e.detail.value;
      //更新数据层所有被选中的单选值
      this.data.selectedValue = radioValues.join("");
      //遍历所有单项数据
      this.data.listData.forEach((item, index) => {
        //更新单项数据的选中状态
        if (radioValues.indexOf(item.id) === -1) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      });

      //将单选信息传递父级
      this.triggerEvent('selectAllTap', {
        listData: this.data.listData,
        selectAll: this.data.selectAll,
        selectedValue: this.data.selectedValue
      });
    },
    /**全选与反全选事件**/
    selectAllTap: function(e) {
      //更新全选按钮的全选状态
      this.data.selectAll = !this.data.selectAll;
      this.updateAllRadio();
    },
    /**更新所有单选按钮选中状态**/
    updateAllRadio() {
      let arr = []; //所有被选中的单选按钮的data信息
      //遍历所有单选按钮
      this.data.listData.forEach((item, index) => {
        //将所有单选按钮的选中状态更新
        item.checked = this.data.selectAll;
        //判断全选状态是否为true
        if (this.data.selectAll == true) {
          //将当前单选按钮的按钮信息加入临时数组
          arr.push(item.id);
        }
      });
      //更新所有的被选中信息
      this.data.selectedValue = arr.join(",");
      //更新模板层所有单选按钮的选中状态
      this.setData({
        listData: this.data.listData
      })
      //将单选信息传递父级
      this.triggerEvent('selectAllTap', {
        listData: this.data.listData,
        selectAll: this.data.selectAll,
        selectedValue: this.data.selectedValue
      });
    }
  }
})