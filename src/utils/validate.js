//用户名匹配

export function nameRule(rule, value, callback) {
    //请输入4-10位昵称
    let reg = /^[a-zA-Z0-9]{4,10}$/;
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入4-10位昵称'))
    } else callback()
}

//密码正则匹配

export function passwordRule(rule, value, callback) {
    //6-12位密码需要包含大小写字母、数字、特殊字符
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{6,12}$/;
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入6-12位密码'))
    } else callback()
}