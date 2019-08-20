import * as constants from './constants';

const initialState={
    menuName:'首页',
    menuSubName:'',
    menuThiName:'',
    number:5,
    subTitle:'156',
    current: 1,
    visible:false,
    currentLocale: 'zh-CN',
};


export default(state = initialState, action)=> {
    switch (action.type) {
        case constants.CHOOSE_MENU:
            return {
                ...state,
                menuName:action.menuName
            };
        case constants.CHOOSE_LF_MENU:
            return {
                ...state,
                menuSubName:action.menuSubName
            };
        case constants.CHOOSE_LF_SUB_MENU:
            return {
                ...state,
                menuThiName:action.menuThiName
            };
        case constants.IS_SHOW:
            return {
                ...state,
                visible:action.visible,
            }
        default:
            return state;
    }

}