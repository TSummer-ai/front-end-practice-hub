//新增数据函数
function addRow() {
  var table = document.getElementById("table");
  //   console.log(table);
  var length = table.rows.length; //获取表格的行数
  //   console.log(length);
  var newRow = table.insertRow(length);
  //   console.log(newRow);

  //插入列节点对象
  var nameCol = newRow.insertCell(0);
  var phoneCol = newRow.insertCell(1);
  var actionCol = newRow.insertCell(2);

  //设置列内容
  nameCol.innerHTML = "未命名";
  phoneCol.innerHTML = "未填写";
  actionCol.innerHTML =
    "<button onclick='editRow(this)'>编辑</button> <button onclick='deleteRow(this)'>删除</button>";
}

//删除按钮事件
function deleteRow(button) {
  //   console.log(button);
  var row = button.parentNode.parentNode; //获取按钮所在行(父节点是td，父节点的父节点是tr)
  //   console.log(row);
  row.parentNode.removeChild(row); //无法自己删除自己，只能通过父节点删除自己
}

//编辑按钮事件
function editRow(button) {
  console.log(button);
  var row = button.parentNode.parentNode; //获取按钮所在行
  var name = row.cells[0];
  var phone = row.cells[1];

  var newName = prompt("请输入新的姓名");
  var newPhone = prompt("请输入新的电话号码");
  if (newName === null || newPhone === null) {
    return; //如果用户取消输入，直接返回
  }

  name.innerHTML = newName;
  phone.innerHTML = newPhone;
}
