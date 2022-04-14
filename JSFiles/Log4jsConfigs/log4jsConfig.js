"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTG9nNGpzQ29uZmlncy9sb2c0anNDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNFLGtEQUFrRDtBQUVwRCw2QkFBNkI7QUFHN0IsOEJBQThCO0FBRTlCLHVEQUF1RDtBQUN2RCx3Q0FBd0M7QUFDeEMsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixRQUFRO0FBSVIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUU5QyxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMifQ==