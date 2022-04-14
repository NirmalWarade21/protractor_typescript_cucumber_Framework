 
  //  import { configure, getLogger } from "log4js";

// export class log4jsConfig{


//         static Log(): any {
   
//             configure('Log4jsConfigs/log4js.json'); 
//             var logger = getLogger();
//             return logger;
//         }
//     }

 
    
const log4js = require('log4js');
    log4js.configure('Log4jsConfigs/log4js.json'); 
    
    exports.default = log4js.getLogger('default');
    
   