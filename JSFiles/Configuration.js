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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUVBQWtEO0FBRXZDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBRW5CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFFcEMsWUFBWSxFQUFFO1FBQ1YsbURBQW1EO1FBQ25ELE1BQU0sRUFBRSw2QkFBNkI7UUFDckMsUUFBUSxFQUFFLFVBQVU7UUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2pCLDZDQUE2QztRQUM3Qyx5Q0FBeUM7UUFFekMsVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUNiLG1EQUFtRDtZQUVuRCxJQUFJLE9BQU8sR0FBRztnQkFDVixLQUFLLEVBQUUsV0FBVztnQkFDbEIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDTixhQUFhLEVBQUUsT0FBTztvQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsU0FBUyxFQUFFLHFCQUFxQjtvQkFDaEMsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLFVBQVUsRUFBRSxXQUFXO29CQUN2QixVQUFVLEVBQUUsUUFBUTtpQkFDdkI7YUFDSixDQUFDO1lBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQixDQUFDO1FBR0QsT0FBTyxFQUFFO1lBQ0wsc0NBQXNDO1NBQ3pDO0tBQ0o7SUFFRCxPQUFPLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLG1EQUFtRCxDQUFDO1lBRTdFLE9BQU8sRUFBRTtnQkFDTCwyQkFBMkIsRUFBRSxJQUFJO2dCQUNqQyw0QkFBNEIsRUFBRSxJQUFJO2dCQUNsQyxtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixVQUFVLEVBQUUsNENBQTRDO2dCQUN4RCxVQUFVLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLDZCQUE2QjtvQkFDcEMsSUFBSSxFQUFFO3dCQUNGLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUU7d0JBQzVELEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO3FCQUNsRDtpQkFDSjthQUNKO1NBRUo7UUFDRDtZQUNJLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixTQUFTLEVBQUUsR0FBRztnQkFDZCxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7YUFDL0Q7U0FDTDtLQUNIO0NBR0EsQ0FBQSJ9