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
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 10:00:03 GMT',
  etag: '"0x8D3B0849EAF9098"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6a7017f5-0001-003c-556d-e222dc000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 10:00:03 GMT',
  etag: '"0x8D3B0849EAF9098"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6a7017f5-0001-003c-556d-e222dc000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 10:00:13 GMT',
  etag: '"0x8D3B084A480057E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '06edfb7d-0001-0030-2f6d-e2cc2d000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'e16c7aa9-8fc4-4604-b1a5-0413fdb8f11a',
  'x-ms-copy-status': 'success',
  date: 'Wed, 20 Jul 2016 10:00:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 10:00:13 GMT',
  etag: '"0x8D3B084A480057E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '06edfb7d-0001-0030-2f6d-e2cc2d000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'e16c7aa9-8fc4-4604-b1a5-0413fdb8f11a',
  'x-ms-copy-status': 'success',
  date: 'Wed, 20 Jul 2016 10:00:12 GMT',
  connection: 'close' });
 return result; }]];