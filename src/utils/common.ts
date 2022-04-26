/**
 *  类型判断
 *  @param {*} data 判断参数
 */
export const typeJudge = (data:any) => {
    const type:any = Object.prototype.toString;
    return type.call(data).substring(8,type.call(data).length-1)
}