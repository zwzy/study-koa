// 登录
const login = async (ctx, next) => {
	const { name, password } = ctx.request.body
	if (name === 'zuowang' && password === 'zw070809') {
		ctx.response.body = {
			code: 200,
			success: true
		}
	} else {
		ctx.response.body = {
			code: 200,
			success: false,
			errorMessage: '密码错误，请重试！'
		}
	}
}

// 登出
const logout = async (ctx, next) => {
	ctx.response.body = {
		code: 200,
		success: true
	}
}

export default {
	'POST /login': login,
	'GET /logout': logout
}