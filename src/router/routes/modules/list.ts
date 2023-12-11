import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const list: AppRouteModule = {
  path: '/list',
  name: 'List',
  component: LAYOUT,
  redirect: '/list/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.demo.list.page'),
  },
  children: [
    {
      path: 'index',
      name: 'ListPage',
      component: () => import('/@/views/dataList/index.vue'),
      meta: {
        title: t('routes.demo.list.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default list
