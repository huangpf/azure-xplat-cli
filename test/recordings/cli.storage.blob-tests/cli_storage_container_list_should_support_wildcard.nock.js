// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/?comp=list&include=metadata&prefix=storageclitest')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.blob.core.windows.net/\"><Prefix>storageclitest</Prefix><Containers><Container><Name>storageclitest</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:55:51 GMT</Last-Modified><Etag>\"0x8D3B084086C598A\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container></Containers><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2ef327ee-0001-000a-0f6c-e28f8e000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:56:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/?comp=list&include=metadata&prefix=storageclitest')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.blob.core.windows.net/\"><Prefix>storageclitest</Prefix><Containers><Container><Name>storageclitest</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:55:51 GMT</Last-Modified><Etag>\"0x8D3B084086C598A\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Container></Containers><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2ef327ee-0001-000a-0f6c-e28f8e000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:56:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '78536d0b-0001-0026-696c-e20db3000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:56:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:55:51 GMT',
  etag: '"0x8D3B084086C598A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '78536d0b-0001-0026-696c-e20db3000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:56:00 GMT',
  connection: 'close' });
 return result; }]];