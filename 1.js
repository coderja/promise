/**
 * Created by admin on 2018/5/30.
 */

new Promise(resolve=>{
    //setTimeout((value)=>{
        resolve('hello')
    //})
}).then((value)=>{
        console.log(value+' world')
})
console.log('1')