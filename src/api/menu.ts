import request from '@/utils/request'

export function buildMenus() {
  return request({
    url: '/ds-cz-datacenter-user/menus/build',
    method: 'get',
    params: {
      serviceId: 'ds-cz-datacenter-projectLibrarian'
    }
  })
}
