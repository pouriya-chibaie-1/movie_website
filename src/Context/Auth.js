import React,{createContext} from 'react';
export const tokenLogin= {
    haveToken:"12321323",
    scorllTopPosition:"0",
    scrollTop1:(pos)=>{tokenLogin.scorllTopPosition=pos}
}
const context = createContext(tokenLogin);
export default context;
