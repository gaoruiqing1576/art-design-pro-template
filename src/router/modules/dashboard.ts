import { AppRouteRecord } from '@/types/router'

export const dashboardRoutes: AppRouteRecord = {
  path: 'console',
  name: 'Console',
  component: '/dashboard/console',
  meta: {
    title: 'menus.dashboard.console',
    icon: 'ri:pie-chart-line',
    keepAlive: false,
    fixedTab: true,
    showBadge: true
  }
}
