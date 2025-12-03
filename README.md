# Art Portfolio

个人作品展示和创意绘画课程网站

## 功能特性

- 🌍 多语言支持：法语（默认）、英语、中文
- 🎨 创意绘画课程入口
- 🖼️ 作品集展示入口
- 📱 响应式设计，适配各种设备
- 🎯 现代化的UI设计

## 技术栈

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- next-intl (国际化)

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)，网站会自动重定向到法语版本（默认语言）。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
art/
├── app/
│   ├── [locale]/          # 多语言路由
│   │   ├── page.tsx       # 首页
│   │   ├── courses/       # 课程页面
│   │   └── portfolio/     # 作品集页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/
│   └── LanguageSwitcher.tsx  # 语言切换组件
├── messages/              # 翻译文件
│   ├── fr.json           # 法语
│   ├── en.json           # 英语
│   └── zh.json           # 中文
├── i18n.ts               # 国际化配置
└── middleware.ts         # Next.js中间件（处理语言路由）
```

## 语言切换

网站支持三种语言：
- 法语 (FR) - 默认语言
- 英语 (EN)
- 中文 (中)

用户可以通过页面右上角的语言切换器切换语言。

## 自定义

### 添加新语言

1. 在 `i18n.ts` 中添加新的语言代码
2. 在 `messages/` 目录下创建对应的 JSON 文件
3. 在 `LanguageSwitcher.tsx` 中添加语言显示名称

### 修改翻译内容

编辑 `messages/` 目录下对应的 JSON 文件即可。
