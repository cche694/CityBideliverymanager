import jsonP from "jsonp"
export default class JsonP_{
    static jsonp(options){
        return new Promise((res,rej)=>{
            jsonP(options.url,{
                param:"callback"
            },function(err,res){

            })
        })
    }
}