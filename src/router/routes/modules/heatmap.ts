import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const heatmap: AppRouteModule = {
  path: '/heatmap',
  name: 'Heatmap',
  component: LAYOUT,
  redirect: '/heatmap/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.demo.heatmap.page'),
  },
  children: [
    {
      path: 'index',
      name: 'HeatmapPage',
      component: () => import('/@/views/heatmap/index.vue'),
      meta: {
        title: t('routes.demo.heatmap.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default heatmap
