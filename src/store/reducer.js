import * as constants from './constants';
import * as actionCreators from './actionCreators';

const initialState={
    menuName:'首页',
    menuSubName:'',
    number:5,
    subTitle:'156',
    current: 1,
    navList : [
      {id:1,title:'经营状况',pic:"iconEchart",path:'/manage'},
      {id:51,title:'收银业务',pic:"iconMoney",path:'/cashier'},
      {id:21,title:'油卡业务',pic:"iconOilCard",path:'/oilCard'},
      {id:45,title:'查询报表',pic:"iconTable",path:'/query'},
      {id:16,title:'系统配置',pic:"iconSys",path:'/system'},
    ]
};


export default(state = initialState, action)=> {
    console.log(action,'action')
    switch (action.type) {
        case constants.CHOOSE_MENU:
            return {
                ...state,
                menuName:action.menuName
            }
        default:
            return state;
    }
}