这是一个React项目，使用 [Create-React-App](https://github.com/facebook/create-react-app)官方推荐React脚手架启动的.

## 常用命令说明

在项目目录中，可以在命令行使用的命令如下:

### `npm start`

以开发模式启动这个项目.<br />
打开网址 [http://localhost:3000](http://localhost:3000) 可以在浏览器中看到项目首页.

页面会根据代码的修改实时刷新.<br />
你也可以f12，在控制台中查看一些错误信息.

### `npm test`

在交互式监视模式下启动测试运行器.<br />
更多信息参见测试部分[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
### `npm run build`

将生产应用程序构建到build文件夹中.<br />
它正确地在生产模式下对捆绑包做出反应，并优化构建以获得最佳性能.

构建被缩小，文件名包括散列.<br />
您的应用程序已经准备好部署了!

更多信息参见部署部分 [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run eject`

**注意:这是单向操作。一旦你“弹出”，你就不能回去了!**

如果您对构建工具和配置选择不满意，您可以在任何时候“弹出”。此命令将从项目中删除单个构建依赖项。

相反，它会将所有配置文件和传递依赖项(webpack、Babel、ESLint等)复制到你的项目中，这样你就可以完全控制它们了。除' eject '之外的所有命令都可以工作，但它们将指向复制的脚本，以便您可以调整它们。现在你只能靠自己了。

你不需要用到eject。精心设计的特性集适合小型和中型部署，您不应该觉得必须使用此特性。但是，我们知道，如果您在准备好使用它时不能定制它，那么这个工具将不会有用。

## 学习地址

 [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

 [React documentation](https://reactjs.org/).

### 代码分离

https://facebook.github.io/create-react-app/docs/code-splitting

### 分析Bundle大小

https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### 制作一个进步的Web应用程序

https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### 高级配置

https://facebook.github.io/create-react-app/docs/advanced-configuration

### 部署

https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` 文件体积缩小

https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## 目录说明

- public  不会参与打包的静态文件夹

- src 写代码的地方


## 组件传值

- 父组件-->子组件

    - props

- 子组件-->父组件
    - this.props.func.bind(this, param1, param2)   func在父组件调用的子组件标签上进行调用 func={this.getchildValue}, getChildValue函数在父组件中定义

- 同级组件传值
    - pubsub-js包


## 成果展示

https://docs.qq.com/doc/DWmFKcnl0UE1hWUdO
