export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/finish/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '智行',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#7f8389',
    selectedColor: '#5495e6',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/order/index',
        text: '订单',
      },
    ],
  },
});
