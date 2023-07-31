const getters = {
  user: (state: any) => state.user.user,
  agencyName: (state: any) => state.user.agencyName,
  permission_routers: (state: any) => state.permission.routers,
  addRouters: (state: any) => state.permission.addRouters
}
export default getters
