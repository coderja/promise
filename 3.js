/**
 * Created by admin on 2018/5/30.
 */
new Promise((resolve)=>{
    setTimeout(()=>{
        if(Math.random()<0.5?true:false){
            console.log(Math.random())
             resolve('hello')
        }else{
            throw new Error('bye')
        }
    })
}).then((value)=>{
    console.log(value+" world")
    }//,(err)=>{
        //console.log(err.msg)
    //}
).catch(()=>{
        console.log(err.msg)
    })
