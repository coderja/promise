/**
 * Created by admin on 2018/5/30.
 */
/**
 * Created by admin on 2018/5/30.
 */

new Promise(resolve=>{
    setTimeout(()=>{
     resolve('hello')
    },2000)
}).then((value)=>{
        console.log(value+' world')
        return new Promise(resolve=>{
            setTimeout((value)=>{
                resolve('world')
            })
        })
    }).then((value)=>{
            console.log(value+" world")
    })
console.log('1')