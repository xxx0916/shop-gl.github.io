// 平台属性管理模块请求文件
import request from '@/utils/request'

// 获取一级分类数据接口
// GET /admin/product/getCategory1
export const reqCategory1List = ()=>request({url:'/admin/product/getCategory1',method:'get'});

// 获取二级分类数据接口
// GET /admin/product/getCategory2/{category1Id}
export const reqCategory2List = (category1Id)=>request({url:`/admin/product/getCategory2/${category1Id}`,method:'get'});

// 获取三级级分类数据接口
// GET /admin/product/getCategory3/{category2Id}
export const reqCategory3List = (category2Id)=>request({url:`/admin/product/getCategory3/${category2Id}`,method:'get'});

// 获取平台属性接口
// GET /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
export const reqAttrList = (category1Id,category2Id,category3Id) =>request({url:`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,method:'get'})

// 添加属性值与属性名的接口
// POST /admin/product/saveAttrInfo
export const reqAddOrUpdateAttr = (data) =>request({url:'/admin/product/saveAttrInfo',method:'post',data})
/*
{
  "attrName": "",      属性名
  "attrValueList": [   属性名中属性值，因为属性值可以是多个，因此需要的是数组
    {
      "attrId": 0,          属性的id
      "valueName": "string"  属性值
    }
  ],
  "categoryId": 0,    category3Id
  "categoryLevel":3,
}
*/

// 删除属性
// DELETE /admin/product/deleteAttr/{attrId}
export const reqDeleteAttr=(attrId)=>request({url:`/admin/product/deleteAttr/${attrId}`,method:'delete'})