// 刷新一次添加一条数据 刷新次数和时间
var getDate = function (time) {
    if (!time)
        time = new Date();
    if (typeof time === 'string')
        time = new Date(time);
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return "".concat(h, ":").concat(m, ":").concat(s);
};
var localStorageKey = 'jia';
var getList = function () {
    var local = localStorage.getItem(localStorageKey) || '[]';
    var localObj = JSON.parse(local);
    return localObj;
};
var upDataList = function () {
    var list = getList();
    var last = list[list.length - 1];
    list.push({
        count: last ? last.count + 1 : 1,
        time: getDate()
    });
    localStorage.setItem(localStorageKey, JSON.stringify(list));
    return list;
};
var render = function () {
    upDataList();
    var data = getList();
    var app = document.querySelector("#app");
    app.innerHTML = data
        .map(function (item) { return "\u6B21\u6570\uFF1A".concat(item.count, "\uFF0C\u65F6\u95F4\uFF1A").concat(item.time); })
        .join("<br/>");
};
render();
