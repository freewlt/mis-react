import axios from 'axios';

export const getMenuLfList = () =>{
  return (dispatch) => {
    axios.get('./menuLf.json').then((res)=>{
      const result = res.data.list;
      dispatch(changeHomeData(result))
    })
  }
};