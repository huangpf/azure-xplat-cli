// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/CliGtTestVnet9897/gateway')
  .reply(200, "<Gateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GatewayType>DynamicRouting</GatewayType><LastEvent><Id>23002</Id><Message>Successfully created a gateway for the following virtual network: CliGtTestVnet9897</Message><Timestamp>2016-04-25T09:26:42.1434752Z</Timestamp></LastEvent><State>Provisioned</State><VIPAddress>40.112.188.197</VIPAddress><DefaultSites/><GatewaySize>Default</GatewaySize><GatewayId>b3a88d95-29fb-4354-b158-649963d19f90</GatewayId></Gateway>", { 'cache-control': 'no-cache',
  'content-length': '525',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e88b64dece29aa5088ddadce41d7db13',
  date: 'Mon, 25 Apr 2016 09:31:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/CliGtTestVnet9897/gateway')
  .reply(200, "<Gateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GatewayType>DynamicRouting</GatewayType><LastEvent><Id>23002</Id><Message>Successfully created a gateway for the following virtual network: CliGtTestVnet9897</Message><Timestamp>2016-04-25T09:26:42.1434752Z</Timestamp></LastEvent><State>Provisioned</State><VIPAddress>40.112.188.197</VIPAddress><DefaultSites/><GatewaySize>Default</GatewaySize><GatewayId>b3a88d95-29fb-4354-b158-649963d19f90</GatewayId></Gateway>", { 'cache-control': 'no-cache',
  'content-length': '525',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e88b64dece29aa5088ddadce41d7db13',
  date: 'Mon, 25 Apr 2016 09:31:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .delete('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/CliGtTestVnet9897/gateway')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d1b66194-0931-4c9b-8bcb-e1b29d77648d</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2d23d5b5b49b9db6830f6cb85eb8a42b',
  date: 'Mon, 25 Apr 2016 09:31:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/CliGtTestVnet9897/gateway')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d1b66194-0931-4c9b-8bcb-e1b29d77648d</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2d23d5b5b49b9db6830f6cb85eb8a42b',
  date: 'Mon, 25 Apr 2016 09:31:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d1b66194-0931-4c9b-8bcb-e1b29d77648d')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><ID>d1b66194-0931-4c9b-8bcb-e1b29d77648d</ID><OperationName>DeleteGateway</OperationName><OperationStartedTime>2016-04-25T09:31:22.5731056</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '349',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '22f1a322519daf9db152ba944d13b141',
  date: 'Mon, 25 Apr 2016 09:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d1b66194-0931-4c9b-8bcb-e1b29d77648d')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><ID>d1b66194-0931-4c9b-8bcb-e1b29d77648d</ID><OperationName>DeleteGateway</OperationName><OperationStartedTime>2016-04-25T09:31:22.5731056</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '349',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '22f1a322519daf9db152ba944d13b141',
  date: 'Mon, 25 Apr 2016 09:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d1b66194-0931-4c9b-8bcb-e1b29d77648d')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d1b66194-0931-4c9b-8bcb-e1b29d77648d</ID><OperationCompletedTime>2016-04-25T09:32:24.8384437</OperationCompletedTime><OperationName>DeleteGateway</OperationName><OperationStartedTime>2016-04-25T09:31:22.5731056</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '460',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '15b030a6172d90d7964cc83065f0f59f',
  date: 'Mon, 25 Apr 2016 09:32:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d1b66194-0931-4c9b-8bcb-e1b29d77648d')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d1b66194-0931-4c9b-8bcb-e1b29d77648d</ID><OperationCompletedTime>2016-04-25T09:32:24.8384437</OperationCompletedTime><OperationName>DeleteGateway</OperationName><OperationStartedTime>2016-04-25T09:31:22.5731056</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '460',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '15b030a6172d90d7964cc83065f0f59f',
  date: 'Mon, 25 Apr 2016 09:32:26 GMT',
  connection: 'close' });
 return result; }]];