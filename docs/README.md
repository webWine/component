components：
    存放组件文档
    新增文档后需要到.vitepress/config/nameMap中增加文档名对应的中文解释（对于不同类型的组件文档，主要区别是基础组件、form组件等，将其放对位置）
        如果需要增加类型，到.vitepress/config/sidebar.ts中找到/components/新增类型维护即可
examples：
    存放组件文档(components)中需要使用组件模板
    组件创建完成后到.vitepress/config/componentList.ts中导入形成映射表
