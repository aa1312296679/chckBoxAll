const selectAll = { //selectAll组件的配置信息
  titles: [{ //头部信息
    name: "全选"
  }, {
    name: "id"
  }, {
    name: "名称"
  }],
  selectAll: true, //全选按钮的状态    
  listData: [{ //单选按钮的数据信息
      id: "1",
      text: "测试1",
      checked: false
    },
    {
      id: "2",
      text: "测试2",
      checked: false
    },
    {
      id: "3",
      text: "测试3",
      checked: false
    }
  ],
  //所有被选中的单选信息
  selectedAllTxt: ""
}
//按钮信息
const button = {
  buttonInfor: "提交"
}
module.exports = {
  selectAll: selectAll,
  button: button
}