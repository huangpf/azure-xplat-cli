// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4',
    name: 'Visual Studio Enterprise with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'ed912eac-e7c1-43f8-a91f-ef14a7879293',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint001';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint002';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-59e92ce9-af32-4879-baad-d5f36a9ede94.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001/customDomains/cliTestCustomDomain01/disableCustomHttps?api-version=2016-10-02')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The requested operation cannot be executed on the entity in the current state.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '147',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '3d81edcd-f59c-4598-a31c-04c858486778',
  'x-ms-client-request-id': 'ae2d5a0b-73c2-493f-965c-c145f7a3c0f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd2b956ae-a791-427f-b8ec-140bccd78ba0',
  'x-ms-routing-request-id': 'WESTUS2:20170223T021346Z:d2b956ae-a791-427f-b8ec-140bccd78ba0',
  date: 'Thu, 23 Feb 2017 02:13:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001/customDomains/cliTestCustomDomain01/disableCustomHttps?api-version=2016-10-02')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The requested operation cannot be executed on the entity in the current state.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '147',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '3d81edcd-f59c-4598-a31c-04c858486778',
  'x-ms-client-request-id': 'ae2d5a0b-73c2-493f-965c-c145f7a3c0f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd2b956ae-a791-427f-b8ec-140bccd78ba0',
  'x-ms-routing-request-id': 'WESTUS2:20170223T021346Z:d2b956ae-a791-427f-b8ec-140bccd78ba0',
  date: 'Thu, 23 Feb 2017 02:13:46 GMT',
  connection: 'close' });
 return result; }]];