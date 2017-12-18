验证码组件

安装模块

PIL模块

使用方法

```python
def login(request):
    if request.method == "GET":
        return render(request,'login.html')
    else:
        input_code = request.POST.get('code')
        session_code = request.session.get('code')
        if input_code.upper() == session_code.upper():
            pass
        else:
            pass


def check_code(request):
    from io import BytesIO
    from utils.random_check_code import rd_check_code
    img,code = rd_check_code()
    stream = BytesIO()
    img.save(stream,'png')
    request.session['code'] = code
    return HttpResponse(stream.getvalue())
```

