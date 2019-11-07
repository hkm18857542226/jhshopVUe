import axios from 'axios'

export default function  ajax(url='',params={},type='GET') {

    //变量
    let promise ;
 //返回一个promise 对象
    return new Promise((resolve,reject)=>{

        //判斷请求类型
        if(type==="GET"){
            //get请求
            let paramsStr='';

        // Object.keys(params).forEach(key=>{
        //      paramsStr+=key+"="+params[key]+'&';
        // })
        //     //过滤最后的&
        //     if(paramsStr!=""){
        //         paramsStr=paramsStr.substr(0,paramsStr.lastIndexOf("&"))
        //         //拼接完整的url
        //         url=encodeURI(url+"?"+paramsStr);
        //     }

          Object.values(params).forEach(value=>{
               paramsStr+=value;
          })
              //过滤最后的&
              if(paramsStr!=""){

                  //拼接完整的url
                  url=encodeURI(url+"/"+paramsStr);
              }

        //发起get请求

            promise=axios.get(url);
        }else if(type==='POST'){

         promise=axios.post(url,params);
        }
         //处理结果并返回
        promise.then((response)=>{
             resolve(response.data);
        }).catch((error=>{
            reject(error);
        }))

    });

}
