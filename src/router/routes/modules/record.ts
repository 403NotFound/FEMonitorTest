import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const record: AppRouteModule = {
  path: '/record',
  name: 'Record',
  component: LAYOUT,
  redirect: '/record/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.demo.record.page'),
  },
  children: [
    {
      path: 'index',
      name: 'RecordPage',
      component: () => import('/@/views/record/index.vue'),
      meta: {
        title: t('routes.demo.record.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default record
