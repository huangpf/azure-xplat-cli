/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var fs = require('fs');
var jsonpatch = require('json-patch');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

function beautify(jsonText) {
    var obj = JSON.parse(jsonText);
    return JSON.stringify(obj, null, 2);
}

exports.init = function (cli) {
  var vmssQuickCreate = cli.category('vmss').description($('Commands to manage your virtual machine scale set.'));
  vmssQuickCreate.command('quick-create')
  .description($('quick-create method to manage your virtual machine scale set.'))
  .usage('[options]')
  .option('--resource-group-name <resource-group-name>', $('resource-group-name'))
  .option('--name <name>', $('name'))
  .option('--location <location>', $('location'))
  .option('--sku-capacity <sku-capacity>', $('sku-capacity'))
  .option('--sku-name <sku-name>', $('sku-name'))
  .option('--sku-tier <sku-tier>', $('sku-tier'))
  .option('--upgrade-policy-mode <upgrade-policy-mode>', $('upgrade-policy-mode'))
  .option('--network-interface-configuration-name <network-interface-configuration-name>', $('network-interface-configuration-name'))
  .option('--ip-configuration-name <ip-configuration-name>', $('ip-configuration-name'))
  .option('--ip-configuration-subnet <ip-configuration-subnet>', $('ip-configuration-subnet'))
  .option('--computer-name-prefix <computer-name-prefix>', $('computer-name-prefix'))
  .option('--admin-username <admin-username>', $('admin-username'))
  .option('--admin-password <admin-password>', $('admin-password'))
  .option('--image-reference <image-reference>', $('image-reference'))
  .option('--os-disk-name <os-disk-name>', $('os-disk-name'))
  .option('--os-disk-caching <os-disk-caching>', $('os-disk-caching'))
  .option('--os-disk-create-option <os-disk-create-option>', $('os-disk-create-option'))
  .option('--os-disk-source-image <os-disk-source-image>', $('os-disk-source-image'))
  .option('--parameters <parameters>', $('parameters'))
  .option('--parameter-file <parameter-file>', $('the input parameter file'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function(options, _) {
    cli.output.info('resourceGroupName = ' + options.resourceGroupName);
    cli.output.info('parameters = ' + options.parameters);
    var parametersObj = null;
    if (options.parameterFile) {
      cli.output.info('Reading file content from: \"' + options.parameterFile + '\"');
      var fileContent = fs.readFileSync(options.parameterFile, 'utf8');
      parametersObj = JSON.parse(fileContent);
    }
    else {
      parametersObj = JSON.parse(options.parameters);
    }
    cli.output.info('parametersObj = ' + JSON.stringify(parametersObj));
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeResourceProviderClient(subscription);
    var result = computeManagementClient.virtualMachineScaleSets.createOrUpdate(options.resourceGroupName, parametersObj, _);
    cli.output.json(result);
  });

};
