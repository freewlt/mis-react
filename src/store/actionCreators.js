import * as constants from './constants';
//import axios from 'axios';

export const chooseMenu = (menuName)=>({
   type:constants.CHOOSE_MENU,
   menuName
})
export const chooseLfMenu = (menuSubName)=>({
  type:constants.CHOOSE_LF_MENU,
  menuSubName
})
export const chooseLfSubMenu = (menuThiName)=>({
  type:constants.CHOOSE_LF_SUB_MENU,
  menuThiName
})

// export const getList = () => {
//   return (dispatch) => {
//     axios.get('./menuLf.json').then((res)=>{
//       const data = res.data;
//       // dispatch(changeList(data.data))
//     }).catch(() => {
// 			console.log('error');
// 		})
//   }
// }