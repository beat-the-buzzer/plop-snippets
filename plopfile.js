module.exports = function (plop) {
	// controller generator
	plop.setGenerator('pages', {
		description: '新建一个查询页',
		prompts: [{
			type: 'input',
			name: 'module',
			message: '输入模块名'
		}, {
			type: 'input',
			name: 'name',
			message: '输入功能名'
		}],
		actions: [{
			type: 'add',
			path: 'src/api/{{module}}/{{name}}Api.ts',
			templateFile: 'plop-templates/pages/api.ts'
		}, {
			type: 'add',
			path: 'src/views/{{module}}/{{name}}/index.vue',
			templateFile: 'plop-templates/pages/index.vue'
		}, {
			type: 'add',
			path: 'src/views/{{module}}/{{name}}/data.ts',
			templateFile: 'plop-templates/pages/data.ts'
		}]
	});
};