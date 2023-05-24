/**
 * Created by itcast on 2018 12/31.
 */
(function ($) {
  /**
   * 给$的原型添加table方法.
   * @param arrTableHead 生成表格表头的数组
   * @param arrTableBody 生成表格主体部分的数组
   */
  $.fn.table = function (arrTableHead,arrTableBody) {
    //console.log(this);//这里的this是一个jQuery对象,是调用这个table方法的jQuery对象.

    var list = [];
    list.push('<table>');
    //生成表头
    list.push("<thead>");
    list.push('<tr>');
    for(var i = 0 ; i < arrTableHead.length; i++){
    	list.push('<th>');
        list.push(arrTableHead[i]);
    	list.push('</th>');
    }
    list.push('</tr>');
    list.push("</thead>");
    //生成表格主体部分
    for(var i = 0 ; i < arrTableBody.length; i++){
    	list.push('<tr>')
        //生成一个序号td.
        list.push('<td>'+(i+1)+'</td>');
        //遍历arrTableBody这个数组的一个个的元素.
        for(var key in arrTableBody[i]){
          list.push('<td>');
          list.push(arrTableBody[i][key]);
          list.push('</td>');
        }
    	list.push('</tr>')
    }
    list.push('</table>');



    //console.log(list.join(""));
    this.html(list.join(""));

  }
}(window.jQuery));