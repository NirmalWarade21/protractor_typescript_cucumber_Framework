"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    /* //cross browser testing
       multiCapabilities: [{
            'browserName': 'chrome',
          },
          {
            'browserName': 'firefox'
          }],
        */
    Capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        // require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:./cucumberreports.json',
        "module": "commonjs",
        "outDir": "./out-tsc/spec",
        "types": ["jest", "node"],
        // format: ['progress', 'pretty:output.txt'],
        //format:'pretty:./cucumberreports2.txt',
        onComplete: () => {
            //var reporter = require('cucumber-html-reporter');
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 85.0.4183.83",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            'Features/Step_Definitions/StepDef.js'
        ]
    },
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: "Project Report",
                pageFooter: "<div><p>Protractor with cucumber</p></div>",
                customData: {
                    title: 'Protractor Cucucmber Report',
                    data: [
                        { label: 'Project', value: 'Protractor with Cucumber test' },
                        { label: 'Created By', value: 'Nirmal Warade' }
                    ]
                }
            },
        },
        {
            package: 'protractor-highlight-plugin',
            options: {
                style: '#ff0000',
                focusTime: 450,
                includeEvents: ['click', 'keydown', 'dblclick', 'textInput']
            }
        }
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUVBQWtEO0FBRXZDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBRW5CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9EOzs7Ozs7O1VBT007SUFDTixZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsUUFBUTtLQUN4QjtJQUVELEtBQUssRUFBRSxDQUFDLDJCQUEyQixDQUFDO0lBRXBDLFlBQVksRUFBRTtRQUNWLG1EQUFtRDtRQUNuRCxNQUFNLEVBQUUsNkJBQTZCO1FBQ3JDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN6Qiw2Q0FBNkM7UUFDN0MseUNBQXlDO1FBRXpDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDYixtREFBbUQ7WUFFbkQsSUFBSSxPQUFPLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE1BQU0sRUFBRSx3QkFBd0I7Z0JBQ2hDLHNCQUFzQixFQUFFLElBQUk7Z0JBQzVCLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUU7b0JBQ04sYUFBYSxFQUFFLE9BQU87b0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7b0JBQzdCLFNBQVMsRUFBRSxxQkFBcUI7b0JBQ2hDLFVBQVUsRUFBRSxZQUFZO29CQUN4QixVQUFVLEVBQUUsV0FBVztvQkFDdkIsVUFBVSxFQUFFLFFBQVE7aUJBQ3ZCO2FBQ0osQ0FBQztZQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0IsQ0FBQztRQUdELE9BQU8sRUFBRTtZQUNMLHNDQUFzQztTQUN6QztLQUNKO0lBRUQsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtREFBbUQsQ0FBQztZQUU3RSxPQUFPLEVBQUU7Z0JBQ0wsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsVUFBVSxFQUFFLDRDQUE0QztnQkFDeEQsVUFBVSxFQUFFO29CQUNSLEtBQUssRUFBRSw2QkFBNkI7b0JBQ3BDLElBQUksRUFBRTt3QkFDRixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLCtCQUErQixFQUFFO3dCQUM1RCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtxQkFDbEQ7aUJBQ0o7YUFDSjtTQUVKO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLE9BQU8sRUFBRTtnQkFDTCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsU0FBUyxFQUFFLEdBQUc7Z0JBQ2QsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO2FBQy9EO1NBQ0o7S0FDQTtDQUdKLENBQUEifQ==