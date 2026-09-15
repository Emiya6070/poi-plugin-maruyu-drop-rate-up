# 发布与安装

## 发布目标

- GitHub：`Emiya6070/poi-plugin-maruyu-drop-rate-up`，主分支 `main`。
- npm：`poi-plugin-maruyu-drop-rate-up`，公共包，registry 为 `https://registry.npmjs.org`。
- 开发检查使用 Node.js 22 或更新版本；插件依赖由 poi 宿主提供。
- 本项目是本地插件，无服务端、Docker、数据库、环境变量或健康检查接口。

## 发布步骤

1. 检查改动范围，运行 `npm run check`。
2. 浏览器打开 `popup.html`，确认弹窗只有图标，没有正文，缩放正常。
3. `npm pack --pack-destination output --json`，检查包内仅有插件、资源和说明文件。
4. 提交代码并推送 `main`。
5. `npm publish ./output/poi-plugin-maruyu-drop-rate-up-<version>.tgz --access public --registry=https://registry.npmjs.org`；按 npm 要求完成登录或发布验证。保留 `./`，否则 npm 可能将路径解析为 GitHub 仓库地址。
6. 创建同版本 GitHub Release，目标使用完整提交 SHA，并附上同一个 tgz。
7. 查询 npm 版本、latest 和 dist.shasum，对照本地 tgz 的 SHA-1；检查 GitHub tag、目标提交和附件。

## 0.1.0 验证记录（2026-09-15）

- 已读取本机 poi 12.0.1 的插件加载与菜单源码，确认 CommonJS、共享 FontAwesome 注册和 `handleClick` 窗口接口。
- 通过入口语法检查与模拟宿主检查：图标注册、点击打开、重复点击聚焦、最小化恢复、关闭重开和插件卸载。
- 最终界面在 200 × 200 和 120 × 120 的浏览器验证均通过：图标加载成功，正文为空，无横向或纵向溢出，没有控制台错误。
- 未安装到用户的正在运行的 poi，因此不宣称完成真实 poi 客户端点击验收。
- 已发布 npm `0.1.0`，`latest=0.1.0`；公开 registry 的 SHA-1 与本地 tgz 一致：`7e7525b68e8bc065ae4e3e80552db3305d646d0b`。
- GitHub Release `v0.1.0` 指向 `b9fd6ed8a07b557afc3b487fd5157a79603467c9`，附件 SHA-256 与本地一致：`55d0bac06eec6c6abb24ecf971a5291d8e886743eb0e5d47cffd4bc3254213cc`。
- 本次预览浏览器、Node 进程均已退出，5689 监听端口已释放。此记录在发布后更新，npm 包携带发布前的说明版本。

## 安装、恢复与清理

通过 poi 插件管理器安装包名，或按 README 解压安装。若需恢复旧版，先在 poi 禁用插件，再安装指定旧版本；本插件没有持久化数据。

预览服务和浏览器仅用于验证，结束后关闭本次启动的进程，确认监听端口释放。`output/` 为忽略的本地打包和截图目录；不得将 npm 凭据或认证链接写入仓库。
