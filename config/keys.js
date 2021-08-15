//keys.js figure out what set of cerdential to return
if(process.env.NODE_ENV==='prouduction'){
// production
module.exports=require('./prod');

}else{
    //developmetn
    //suruma import and export
    module.exports = require('./Dev');
}