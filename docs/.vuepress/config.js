module.exports = {
    title: '每周时报',
    description: '每周更新前端前沿技术',
    lastUpdated: "Last Updated",
    themeConfig: {
        nav: [
            {text: 'github', link: 'https://github.com/YOYZHANG/DALIY-MSG'}
        ],
        sidebar: [
            ["/", "1. 介绍"],
            {
                title: "2020年07月",
                collapsable: false,
                children: [['/2020/07/31.md', '2020年07月31日']]
            }
        ],
    }

}