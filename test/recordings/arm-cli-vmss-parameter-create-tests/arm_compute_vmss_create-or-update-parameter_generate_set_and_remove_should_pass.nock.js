// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9865/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 2\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage12785.blob.core.windows.net/xplatteststoragecnt16187\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9865/providers/Microsoft.Network/virtualNetworks/xplattestvnet6636/subnets/xplattestsubnet8948\"}}}]}}]}\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9865/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1656',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '8ba40da8-d7b9-46e0-baac-48a06646f3f6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': 'a92ce997-480d-4e7f-ac6d-163e90e81a56',
  'x-ms-routing-request-id': 'WESTUS:20160113T090854Z:a92ce997-480d-4e7f-ac6d-163e90e81a56',
  date: 'Wed, 13 Jan 2016 09:08:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9865/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 2\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage12785.blob.core.windows.net/xplatteststoragecnt16187\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9865/providers/Microsoft.Network/virtualNetworks/xplattestvnet6636/subnets/xplattestsubnet8948\"}}}]}}]}\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9865/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1656',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '8ba40da8-d7b9-46e0-baac-48a06646f3f6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': 'a92ce997-480d-4e7f-ac6d-163e90e81a56',
  'x-ms-routing-request-id': 'WESTUS:20160113T090854Z:a92ce997-480d-4e7f-ac6d-163e90e81a56',
  date: 'Wed, 13 Jan 2016 09:08:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '2e48fb25-054a-42ab-a33a-bdcd1032800f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '1d584916-cfbc-4086-90c8-c936c0d6db7e',
  'x-ms-routing-request-id': 'WESTUS:20160113T090925Z:1d584916-cfbc-4086-90c8-c936c0d6db7e',
  date: 'Wed, 13 Jan 2016 09:09:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '2e48fb25-054a-42ab-a33a-bdcd1032800f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '1d584916-cfbc-4086-90c8-c936c0d6db7e',
  'x-ms-routing-request-id': 'WESTUS:20160113T090925Z:1d584916-cfbc-4086-90c8-c936c0d6db7e',
  date: 'Wed, 13 Jan 2016 09:09:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'f377f5bf-8286-4eb7-9626-818a6c342740',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '326bb4ba-a7d3-4db1-89f8-8f743255ed2e',
  'x-ms-routing-request-id': 'WESTUS:20160113T090956Z:326bb4ba-a7d3-4db1-89f8-8f743255ed2e',
  date: 'Wed, 13 Jan 2016 09:09:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'f377f5bf-8286-4eb7-9626-818a6c342740',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '326bb4ba-a7d3-4db1-89f8-8f743255ed2e',
  'x-ms-routing-request-id': 'WESTUS:20160113T090956Z:326bb4ba-a7d3-4db1-89f8-8f743255ed2e',
  date: 'Wed, 13 Jan 2016 09:09:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '8a7f82eb-417e-4bea-8f4b-fb72f2e8c858',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '34140a9d-8182-4f7a-8469-609312beedce',
  'x-ms-routing-request-id': 'WESTUS:20160113T091027Z:34140a9d-8182-4f7a-8469-609312beedce',
  date: 'Wed, 13 Jan 2016 09:10:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '8a7f82eb-417e-4bea-8f4b-fb72f2e8c858',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '34140a9d-8182-4f7a-8469-609312beedce',
  'x-ms-routing-request-id': 'WESTUS:20160113T091027Z:34140a9d-8182-4f7a-8469-609312beedce',
  date: 'Wed, 13 Jan 2016 09:10:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'be7d3fdb-cdb5-4a3c-8c2b-b5d14baadddd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '4b564ce4-d20b-4122-9491-f05bb81a56c2',
  'x-ms-routing-request-id': 'WESTUS:20160113T091058Z:4b564ce4-d20b-4122-9491-f05bb81a56c2',
  date: 'Wed, 13 Jan 2016 09:10:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'be7d3fdb-cdb5-4a3c-8c2b-b5d14baadddd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '4b564ce4-d20b-4122-9491-f05bb81a56c2',
  'x-ms-routing-request-id': 'WESTUS:20160113T091058Z:4b564ce4-d20b-4122-9491-f05bb81a56c2',
  date: 'Wed, 13 Jan 2016 09:10:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(400, "{\"error\":\"invalid_request\",\"error_description\":\"AADSTS90014: The request body must contain the following parameter: 'refresh_token'.\\r\\nTrace ID: ed590029-9e69-4d78-b412-ee5d4a8a5294\\r\\nCorrelation ID: 42ab2efd-fbc1-453b-a1ca-328dd62938c7\\r\\nTimestamp: 2016-01-13 09:11:28Z\",\"error_codes\":[90014],\"timestamp\":\"2016-01-13 09:11:28Z\",\"trace_id\":\"ed590029-9e69-4d78-b412-ee5d4a8a5294\",\"correlation_id\":\"42ab2efd-fbc1-453b-a1ca-328dd62938c7\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'ed590029-9e69-4d78-b412-ee5d4a8a5294',
  'client-request-id': '42ab2efd-fbc1-453b-a1ca-328dd62938c7',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_84',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 13 Jan 2016 09:11:28 GMT',
  connection: 'close',
  'content-length': '438' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(400, "{\"error\":\"invalid_request\",\"error_description\":\"AADSTS90014: The request body must contain the following parameter: 'refresh_token'.\\r\\nTrace ID: ed590029-9e69-4d78-b412-ee5d4a8a5294\\r\\nCorrelation ID: 42ab2efd-fbc1-453b-a1ca-328dd62938c7\\r\\nTimestamp: 2016-01-13 09:11:28Z\",\"error_codes\":[90014],\"timestamp\":\"2016-01-13 09:11:28Z\",\"trace_id\":\"ed590029-9e69-4d78-b412-ee5d4a8a5294\",\"correlation_id\":\"42ab2efd-fbc1-453b-a1ca-328dd62938c7\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'ed590029-9e69-4d78-b412-ee5d4a8a5294',
  'client-request-id': '42ab2efd-fbc1-453b-a1ca-328dd62938c7',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_84',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 13 Jan 2016 09:11:28 GMT',
  connection: 'close',
  'content-length': '438' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1452679889\",\"not_before\":\"1452675989\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDUyNjc1OTg5LCJuYmYiOjE0NTI2NzU5ODksImV4cCI6MTQ1MjY3OTg4OSwiYXBwaWQiOiIzNGIzYjgxYy1hOGFkLTQ4YzEtODY3MC04Yjk2ZjUzYmVmODkiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4Iiwic3ViIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.LDTTFtl2VS3Nna49AjjkdKvqJ5ILjP0OtqBbGR7NAtZDUEFtM01VGa2BUtwGWvrJtteDd9JBet5zYVMgpGjFzbn7MIsXN6lk05Tn4BuSwDUhqiWdXiKhW_f1aYCrxGwXEXORtR1yOQ_rhTSKGXB_u007pWtIEW1TNVWsb8rsBeuQtND_45VJb-A4ecOeO1gJFWQiQNaGcXHWSs5e5yPHtm64EIfzfxFbEAz5N4TLoFwFsPH0pDQE35Irccuf62QvUdNab1vQFhM7wtSpVN0vS-DSIZBm7H0xHPSKaODGSPqbPL9NDooVur9uOd4QakbxhGH5Uc6LqBJrsLC1GV17ZQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '67484ea4-9eb6-4bd1-b15a-dc0a7be9ca16',
  'client-request-id': '42ab2efd-fbc1-453b-a1ca-328dd62938c7',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_316',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 13 Jan 2016 09:11:28 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1452679889\",\"not_before\":\"1452675989\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDUyNjc1OTg5LCJuYmYiOjE0NTI2NzU5ODksImV4cCI6MTQ1MjY3OTg4OSwiYXBwaWQiOiIzNGIzYjgxYy1hOGFkLTQ4YzEtODY3MC04Yjk2ZjUzYmVmODkiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4Iiwic3ViIjoiMmY5YTc0MGYtNzllMi00MjVlLThmN2MtZTRmYWVkNzBiNWE4IiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.LDTTFtl2VS3Nna49AjjkdKvqJ5ILjP0OtqBbGR7NAtZDUEFtM01VGa2BUtwGWvrJtteDd9JBet5zYVMgpGjFzbn7MIsXN6lk05Tn4BuSwDUhqiWdXiKhW_f1aYCrxGwXEXORtR1yOQ_rhTSKGXB_u007pWtIEW1TNVWsb8rsBeuQtND_45VJb-A4ecOeO1gJFWQiQNaGcXHWSs5e5yPHtm64EIfzfxFbEAz5N4TLoFwFsPH0pDQE35Irccuf62QvUdNab1vQFhM7wtSpVN0vS-DSIZBm7H0xHPSKaODGSPqbPL9NDooVur9uOd4QakbxhGH5Uc6LqBJrsLC1GV17ZQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '67484ea4-9eb6-4bd1-b15a-dc0a7be9ca16',
  'client-request-id': '42ab2efd-fbc1-453b-a1ca-328dd62938c7',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_316',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 13 Jan 2016 09:11:28 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'd13b0ab9-e549-4954-b130-45c8e78bdb4b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '8e656337-f3a9-48ab-ba13-9f77ed612c3e',
  'x-ms-routing-request-id': 'WESTUS:20160113T091131Z:8e656337-f3a9-48ab-ba13-9f77ed612c3e',
  date: 'Wed, 13 Jan 2016 09:11:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'd13b0ab9-e549-4954-b130-45c8e78bdb4b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '8e656337-f3a9-48ab-ba13-9f77ed612c3e',
  'x-ms-routing-request-id': 'WESTUS:20160113T091131Z:8e656337-f3a9-48ab-ba13-9f77ed612c3e',
  date: 'Wed, 13 Jan 2016 09:11:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '71601ccd-caa9-4dd7-b641-95a91a165d2b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'f1a1e5c4-59ff-4f90-b12c-201c1dd6597a',
  'x-ms-routing-request-id': 'WESTUS:20160113T091202Z:f1a1e5c4-59ff-4f90-b12c-201c1dd6597a',
  date: 'Wed, 13 Jan 2016 09:12:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '71601ccd-caa9-4dd7-b641-95a91a165d2b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'f1a1e5c4-59ff-4f90-b12c-201c1dd6597a',
  'x-ms-routing-request-id': 'WESTUS:20160113T091202Z:f1a1e5c4-59ff-4f90-b12c-201c1dd6597a',
  date: 'Wed, 13 Jan 2016 09:12:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '721ba45d-02a9-43a9-a7ab-4767398a5692',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '06520ad5-5ba7-4e6c-955c-e44e39603227',
  'x-ms-routing-request-id': 'WESTUS:20160113T091232Z:06520ad5-5ba7-4e6c-955c-e44e39603227',
  date: 'Wed, 13 Jan 2016 09:12:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '721ba45d-02a9-43a9-a7ab-4767398a5692',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '06520ad5-5ba7-4e6c-955c-e44e39603227',
  'x-ms-routing-request-id': 'WESTUS:20160113T091232Z:06520ad5-5ba7-4e6c-955c-e44e39603227',
  date: 'Wed, 13 Jan 2016 09:12:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'a9552436-29b5-432c-9efc-d5c4cfaa09c4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'c7369a97-c2fe-4b90-880a-6c945b56bf29',
  'x-ms-routing-request-id': 'WESTUS:20160113T091303Z:c7369a97-c2fe-4b90-880a-6c945b56bf29',
  date: 'Wed, 13 Jan 2016 09:13:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'a9552436-29b5-432c-9efc-d5c4cfaa09c4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'c7369a97-c2fe-4b90-880a-6c945b56bf29',
  'x-ms-routing-request-id': 'WESTUS:20160113T091303Z:c7369a97-c2fe-4b90-880a-6c945b56bf29',
  date: 'Wed, 13 Jan 2016 09:13:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '0fbb2c5c-7c27-4965-a616-71394cdec6e5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'af0059ae-71ff-4444-bf94-e017b4afd529',
  'x-ms-routing-request-id': 'WESTUS:20160113T091334Z:af0059ae-71ff-4444-bf94-e017b4afd529',
  date: 'Wed, 13 Jan 2016 09:13:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '0fbb2c5c-7c27-4965-a616-71394cdec6e5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'af0059ae-71ff-4444-bf94-e017b4afd529',
  'x-ms-routing-request-id': 'WESTUS:20160113T091334Z:af0059ae-71ff-4444-bf94-e017b4afd529',
  date: 'Wed, 13 Jan 2016 09:13:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\",\r\n  \"endTime\": \"2016-01-13T09:13:56.9360773+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '0bd9e2b4-238b-464d-8ad0-6f990b6db115',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'f5b09fa0-0e86-4abd-8645-5743b67f1239',
  'x-ms-routing-request-id': 'WESTUS:20160113T091405Z:f5b09fa0-0e86-4abd-8645-5743b67f1239',
  date: 'Wed, 13 Jan 2016 09:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/8ba40da8-d7b9-46e0-baac-48a06646f3f6?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"8ba40da8-d7b9-46e0-baac-48a06646f3f6\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-13T09:08:51.4243618+00:00\",\r\n  \"endTime\": \"2016-01-13T09:13:56.9360773+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '0bd9e2b4-238b-464d-8ad0-6f990b6db115',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'f5b09fa0-0e86-4abd-8645-5743b67f1239',
  'x-ms-routing-request-id': 'WESTUS:20160113T091405Z:f5b09fa0-0e86-4abd-8645-5743b67f1239',
  date: 'Wed, 13 Jan 2016 09:14:05 GMT',
  connection: 'close' });
 return result; }]];