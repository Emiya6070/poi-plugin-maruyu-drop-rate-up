# 马路油

娱乐用 poi 插件。图标使用马路油胸前的圆圈「ゆ」标志，点击后打开一个只显示该图标的小窗口，没有正文。

纯装饰娱乐，不会提高掉率、执行建造或发放舰娘；不读取游戏数据，也不发送游戏请求。

## 安装

在 poi 的「设置 → 插件」中输入包名 `poi-plugin-maruyu-drop-rate-up` 安装并启用，然后点击插件图标。

也可以把 npm 安装包解压后的 `package` 目录重命名为 `poi-plugin-maruyu-drop-rate-up`，放入 poi 用户数据目录的 `plugins/node_modules/`，重启 poi。

## 实现与验证

使用 poi 宿主提供的 FontAwesome 与 `@electron/remote`，无额外运行时依赖。遵循 poi 的 CommonJS 插件接口；点击打开独立窗口，重复点击聚焦已有窗口，禁用插件时关闭窗口。

已核对本机 poi 12.0.1 的插件图标注册与 `handleClick` 接口。验证情况见 [发布记录](docs/operations/DEPLOYMENT.md)。

图标来源和许可证见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
