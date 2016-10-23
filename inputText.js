var log = function() {
    console.log.apply(console, arguments)
}
//监听键盘输入，改变字数提示
var input = function() {
    var max = $('.text-input').attr('maxlength')
    $('.text-input').on('input', function() {
        var textLength = $('.text-input').val().length
        $('.limit').html(140 - textLength)
        // log($('.limit').val())
    })
}
//获取时间函数
var getTime = function functionName() {
    var d = new Date()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var timeString = `${month}/${date} ${hours}:${minutes}:${seconds}`
    return timeString

}
//增加留言
var submit = function() {
    var btn = $('.btn-submit')

    btn.on('click', function() {
        var text = $('.text-input').val()
        var time = getTime()
        var message = `
        <div class="notes">
            <img src="doge.jpeg" alt="头像" />
            <p class="name"> 匿名: <span class="message">  ${text}</span></p>
            <p class="time">${time}</p>
        </div>
        `
        $('.content').append(message)
    })
}
var __main = function(){
    input()
    submit()
}
__main()
// log(num.text())
