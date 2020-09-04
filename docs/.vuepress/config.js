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
                title: "2020年09月",
                collapsable: false,
                children: [['/2020/09/04.md', '2020年09月04日']]
            },
            {
                title: "2020年08月",
                collapsable: false,
                children: [['/2020/08/30.md', '2020年08月30日'], ['/2020/08/21.md', '2020年08月21日'], ['/2020/08/14.md', '2020年08月14日'], ['/2020/08/07.md', '2020年08月07日']]
            },
            {
                title: "2020年07月",
                collapsable: false,
                children: [['/2020/07/31.md', '2020年07月31日']]
            }
        ],
    }

}