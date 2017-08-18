$('.add').click(function(){
    // alert('123');
    $('.outer').show()
    $('.inner').show()
    $('.modify1').hide()
    $('.yes').show()
})
$('.no').click(function(){
    $('.outer').hide()
    $('.inner').hide()
})
$('.yes').click(function(){
    var v=[]
    $('input').each(function(){
        v.push($(this).val())
        $(this).val('')
    })
    console.log(v);
    $('.outer').hide()
    $('.inner').hide()

    var $new_line=$('<tr>')
    $.each(v,function(x,y){
        var $new_ele=$('<td>')
        $new_ele.text(y)
        $new_line.append($new_ele)
    })
    var $add_modify=$('<td>')
    var $add_del=$('<td>')
    $add_modify.text('修改')
    $add_modify.addClass('modify')
    $add_del.text('删除')
    $add_del.addClass('del')
    $new_line.append($add_modify).append($add_del)
    $('.lib').append($new_line)
})
$('.lib').on('click','.del',function(){
    $(this).parent().remove()
})
var m
$('.lib').on('click','.modify',function(){
    $('.outer').show()
    $('.inner').show()
    $('.modify1').show()
    $('.yes').hide()
    m=$(this).siblings()
})
$('.modify1').click(function(){
    // alert('123');
    var v1=[]
    $('input').each(function(){
        v1.push($(this).val())
        $(this).val('')
    })
    $('.outer').hide()
    $('.inner').hide()
    $.each(v1,function(x,y){
        m.eq(x).text(y)
    })
})
