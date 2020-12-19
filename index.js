window.$docsify = {

    repo: 'https://www.baidu.com',
    name: 'Home',
    logo: '../images/Home.svg',
    nameLink: '#Index.md',
    auto2top: true, 
    mergeNavbar: true,
	homepage: 'Index.md',
	
    /*... 封面定制 ...*/
    coverpage: 'docs/_coverpage.md',
    onlyCover: true,

    /*... 导航 ...*/
    loadSidebar: 'docs/_sidebar.md',
    maxLevel: 4,
    subMaxLevel: 4,
    loadNavbar: 'docs/_navbar.md',

    /*... 插件设置 ...*/
    search: { placeholder: '全文搜索', noData: '暂无数据!', hideOtherSidebarContent: false },
    pagination: { previousText: '上一章', nextText: '下一章', crossChapter: true, crossChapterText: false },
    count: { countable: true, position: 'top', margin: '1px', float: 'right', fontsize: '0.9em', color: 'rgb(0, 51, 153)', language: 'chinese', isExpected: true },
    copyCode: { buttonText: '点击复制', errorText: 'Error', successText: '已复制到剪贴板' },
    themeable: {
        readyTransition: true,
        responsiveTables: true
    },
    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
    //plugins: [
    //    function (hook, vm) {
    //        console.log(vm);
    //        hook.beforeEach(function (html) {
    //            return (
    //                html +
    //                '\n----\n' +
    //                "!> <span style='color: Red'>更新日期 {docsify-updated}</span> "
    //            );
    //        });
    //    }
    //]

}