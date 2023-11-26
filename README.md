## plop

新建一个查询页，需要加三个文件：api、vue文件、查询条件和表格字段data文件。我们提前将这三个文件放在`plop-templates`里；

新建`plopfile.js`:

```js
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
```

控制台输入：

```bash
plop pages
# 输入模块名 例如：manage
# 输入功能名 例如：user
```

最终在指定的目录里都会自动生成相关文件，并且文件的引用关系也自动生成。