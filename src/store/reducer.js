import { combineReducers } from 'redux'
const initialState={
    number:5,
    subTitle:'156',
    navList : [
      {id:1,title:'经营状况',pic:"iconEchart",path:'/manage'},
      {id:51,title:'收银业务',pic:"iconMoney",path:'/cashier'},
      {id:21,title:'油卡业务',pic:"iconOilCard",path:'/oilCard'},
      {id:45,title:'查询报表',pic:"iconTable",path:'/query'},
      {id:16,title:'系统配置',pic:"iconSys",path:'/system'},
  ]
};


function update(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            console.log("INCREASE");
            console.log(state);
            return {
                number: state.number+action.payload 
            };
        case 'DECREASE':
            console.log("DECREASE");
            console.log(state);
            return {
                number:state.number-action.payload  
            };
        case 'HANDLEMENU':
            console.log("DECREASE");
            console.log(state);
            return {
                number:state.subTitle
            };
          case 'HEADERMENU':
            return {
              list:state.navList
            };
        default:
            return state;
    }
}


export default combineReducers({
    count: update,
    navList:update
})