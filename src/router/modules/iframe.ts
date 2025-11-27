import { AppRouteRecord } from '@/types/router'

export const iframeRoutes: AppRouteRecord = {
  path: '/outside/iframe/elementui',
  name: 'ElementUI',
  component: '',
  meta: {
    title: 'menus.outside.title',
    icon: 'ri:arrow-right-up-box-line',
    keepAlive: false,
    link: 'https://element-plus.org/zh-CN/component/overview.html',
    isIframe: true,
    showBadge: true,
    showTextBadge: 'Ele'
  }
}
