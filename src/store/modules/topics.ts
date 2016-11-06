import * as Vuex from 'vuex'

interface TopicItem {
    content: string,
    url: string
}

interface TopicInfo {
    name: string,
    list: Array<TopicItem>
}

const state = {
    name: "haha",

    list: [
        {
            content: 'q211242qr31243',
            url: 'http://www.baidu.com'
        }
    ]
}

const actions = {

}

const getters = {

}

const moduleTopicInfo: Vuex.Module<TopicInfo, any> = {
    state, actions, getters
}

export default moduleTopicInfo
