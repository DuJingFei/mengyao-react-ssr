const defaultState = {
   list: [
       'react真好玩哈',
       'koa有点儿意思哈',
       'ssr更有意思哈'
   ]
}

export default function(state = defaultState, action) {
    switch(action.type) {
       default: return state
    }
}