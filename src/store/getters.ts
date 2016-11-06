import { Getter, GetterTree } from 'vuex'

export const getCount: Getter<any, any> = (state: any) => state.count

const getters: GetterTree<any, any> = {
    getCount
}
export default getters