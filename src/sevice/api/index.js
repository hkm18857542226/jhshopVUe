import  ajax from './ajax'

//定义基础路径

const BASE_URL='http://192.168.4.16:8080/mall';
// http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001/

//获取商品分类数据
export const getGoodsCategoryData=()=>ajax(BASE_URL+'/productCategory/select');
//根据商品id删除商品分类

export const delGoodsCategoryData=(params)=>ajax(BASE_URL+'/productCategory/delete',params);

