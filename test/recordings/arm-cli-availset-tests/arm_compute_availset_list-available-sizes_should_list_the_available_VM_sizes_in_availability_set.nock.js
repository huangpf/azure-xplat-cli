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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate454/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail5871/vmSizes?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"Standard_A0\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 20480,\r\n      \"memoryInMB\": 768,\r\n      \"maxDataDiskCount\": 1\r\n    },\r\n    {\r\n      \"name\": \"Standard_A1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 71680,\r\n      \"memoryInMB\": 1792,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_A2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 138240,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_A3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 291840,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_A5\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 138240,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_A4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 619520,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A6\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 291840,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_A7\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 619520,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Basic_A0\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 20480,\r\n      \"memoryInMB\": 768,\r\n      \"maxDataDiskCount\": 1\r\n    },\r\n    {\r\n      \"name\": \"Basic_A1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 40960,\r\n      \"memoryInMB\": 1792,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Basic_A2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 61440,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Basic_A3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 122880,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Basic_A4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 245760,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D1_v2\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 51200,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_D2_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D3_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D4_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D5_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 819200,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_D11_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D12_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D13_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D14_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 819200,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_D15_v2\",\r\n      \"numberOfCores\": 20,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 286720,\r\n      \"memoryInMB\": 143360,\r\n      \"maxDataDiskCount\": 40\r\n    },\r\n    {\r\n      \"name\": \"Standard_F1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 16384,\r\n      \"memoryInMB\": 2048,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_F2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 32768,\r\n      \"memoryInMB\": 4096,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_F4\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 65536,\r\n      \"memoryInMB\": 8192,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_F8\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 131072,\r\n      \"memoryInMB\": 16384,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_F16\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 262144,\r\n      \"memoryInMB\": 32768,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_D1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 51200,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_D2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D11\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D12\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D13\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D14\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 819200,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 7168,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 14336,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS11\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS12\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS13\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 114688,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS14\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 229376,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS1_v2\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 7168,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS2_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 14336,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS3_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS4_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS5_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 114688,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS11_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS12_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS13_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 114688,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS14_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 229376,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS15_v2\",\r\n      \"numberOfCores\": 20,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 286720,\r\n      \"memoryInMB\": 143360,\r\n      \"maxDataDiskCount\": 40\r\n    },\r\n    {\r\n      \"name\": \"Standard_F1s\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 4096,\r\n      \"memoryInMB\": 2048,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_F2s\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 8192,\r\n      \"memoryInMB\": 4096,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_F4s\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 16384,\r\n      \"memoryInMB\": 8192,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_F8s\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 32768,\r\n      \"memoryInMB\": 16384,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_F16s\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 65536,\r\n      \"memoryInMB\": 32768,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_A8\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A9\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A10\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A11\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 16\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12830',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131125117429175995',
  'x-ms-request-id': '60412ff3-d6cc-4487-8694-f1cbbe23cbac',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'cdaa95a9-ff76-4c8d-b21b-c3afe4b845cd',
  'x-ms-routing-request-id': 'CENTRALUS:20160801T205318Z:cdaa95a9-ff76-4c8d-b21b-c3afe4b845cd',
  date: 'Mon, 01 Aug 2016 20:53:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate454/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail5871/vmSizes?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"Standard_A0\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 20480,\r\n      \"memoryInMB\": 768,\r\n      \"maxDataDiskCount\": 1\r\n    },\r\n    {\r\n      \"name\": \"Standard_A1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 71680,\r\n      \"memoryInMB\": 1792,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_A2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 138240,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_A3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 291840,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_A5\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 138240,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_A4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 619520,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A6\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 291840,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_A7\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 619520,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Basic_A0\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 20480,\r\n      \"memoryInMB\": 768,\r\n      \"maxDataDiskCount\": 1\r\n    },\r\n    {\r\n      \"name\": \"Basic_A1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 40960,\r\n      \"memoryInMB\": 1792,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Basic_A2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 61440,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Basic_A3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 122880,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Basic_A4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 245760,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D1_v2\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 51200,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_D2_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D3_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D4_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D5_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 819200,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_D11_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D12_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D13_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D14_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 819200,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_D15_v2\",\r\n      \"numberOfCores\": 20,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 286720,\r\n      \"memoryInMB\": 143360,\r\n      \"maxDataDiskCount\": 40\r\n    },\r\n    {\r\n      \"name\": \"Standard_F1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 16384,\r\n      \"memoryInMB\": 2048,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_F2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 32768,\r\n      \"memoryInMB\": 4096,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_F4\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 65536,\r\n      \"memoryInMB\": 8192,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_F8\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 131072,\r\n      \"memoryInMB\": 16384,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_F16\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 262144,\r\n      \"memoryInMB\": 32768,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_D1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 51200,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_D2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D11\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 102400,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_D12\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 204800,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_D13\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 409600,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_D14\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 819200,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS1\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 7168,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 14336,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS3\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS4\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS11\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS12\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS13\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 114688,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS14\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 229376,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS1_v2\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 7168,\r\n      \"memoryInMB\": 3584,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS2_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 14336,\r\n      \"memoryInMB\": 7168,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS3_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS4_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS5_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 114688,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS11_v2\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 28672,\r\n      \"memoryInMB\": 14336,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS12_v2\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 57344,\r\n      \"memoryInMB\": 28672,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS13_v2\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 114688,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS14_v2\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 229376,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_DS15_v2\",\r\n      \"numberOfCores\": 20,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 286720,\r\n      \"memoryInMB\": 143360,\r\n      \"maxDataDiskCount\": 40\r\n    },\r\n    {\r\n      \"name\": \"Standard_F1s\",\r\n      \"numberOfCores\": 1,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 4096,\r\n      \"memoryInMB\": 2048,\r\n      \"maxDataDiskCount\": 2\r\n    },\r\n    {\r\n      \"name\": \"Standard_F2s\",\r\n      \"numberOfCores\": 2,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 8192,\r\n      \"memoryInMB\": 4096,\r\n      \"maxDataDiskCount\": 4\r\n    },\r\n    {\r\n      \"name\": \"Standard_F4s\",\r\n      \"numberOfCores\": 4,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 16384,\r\n      \"memoryInMB\": 8192,\r\n      \"maxDataDiskCount\": 8\r\n    },\r\n    {\r\n      \"name\": \"Standard_F8s\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 32768,\r\n      \"memoryInMB\": 16384,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_F16s\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 65536,\r\n      \"memoryInMB\": 32768,\r\n      \"maxDataDiskCount\": 32\r\n    },\r\n    {\r\n      \"name\": \"Standard_A8\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A9\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A10\",\r\n      \"numberOfCores\": 8,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 57344,\r\n      \"maxDataDiskCount\": 16\r\n    },\r\n    {\r\n      \"name\": \"Standard_A11\",\r\n      \"numberOfCores\": 16,\r\n      \"osDiskSizeInMB\": 1047552,\r\n      \"resourceDiskSizeInMB\": 391168,\r\n      \"memoryInMB\": 114688,\r\n      \"maxDataDiskCount\": 16\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12830',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131125117429175995',
  'x-ms-request-id': '60412ff3-d6cc-4487-8694-f1cbbe23cbac',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'cdaa95a9-ff76-4c8d-b21b-c3afe4b845cd',
  'x-ms-routing-request-id': 'CENTRALUS:20160801T205318Z:cdaa95a9-ff76-4c8d-b21b-c3afe4b845cd',
  date: 'Mon, 01 Aug 2016 20:53:17 GMT',
  connection: 'close' });
 return result; }]];