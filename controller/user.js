// 登录
const getUserInfoById = async (ctx, next) => {
	const { userId } = ctx.request.body
	if (userId === 'E0013860') {
		ctx.response.body = {
			code: 200,
			success: true,
			data: {
				name: '左旺',
				phone: '18755489161',
				userId: 'E0013860',
				age: 26
			}
		}
	} else {
		ctx.response.body = {
			code: 200,
			success: false,
			errorMessage: '没找到此人'
		}
	}
}

// 登出
const getUserList = async (ctx, next) => {
	const { pageSize, pageNo, keyWord } = ctx.request.body
	if (keyWord === '左旺') {
		ctx.response.body = {
			code: 200,
			success: true,
			data: {
				name: '左旺',
				phone: '18755489161',
				userId: 'E0013860',
				age: 26
			}
		}
	} else {
		ctx.response.body = {
			code: 200,
			success: true,
			data: []
		}
	}
}

export default {
	'GET /user/getUserInfoById': getUserInfoById,
	'POST /user/getUserList': getUserList
}