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

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var constants = require('./constants');
var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var tagUtils = require('../tag/tagUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var virtualNetworkGateways = network.category('vpn-gateway')
    .description($('Commands to manage virtual network gateways'));

  var defaultGatewayType = 'VPN';
  var defaultVpnType = 'RouteBased';
  var defaultEnableBgp = 'false';
  var defaultName = 'Basic';

  virtualNetworkGateways.command('create [resource-group] [name] [location]')
    .description($('Create a virtual network gateway'))
    .usage('[options] <resource-group> <name> <location>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the virtual network gateway'))
    .option('-l, --location <location>', $('the location'))
    .option('-e, --subnet-name [subnet-name]', $('sets subnet. This option is mutually' +
      '\n     exclusive with --subnet-id'))
    .option('-m, --vnet-name [vnet-name]', $('name of the virtual network that contains subnet'))
    .option('-f, --subnet-id [subnet-id]', $('sets subnet. This option is mutually' +
      '\n     exclusive with --subnet-name'))
    .option('-p, --public-ip-name [public-ip-name]', $('sets public ip address. This option is' +
      '\n     mutually exclusive with --public-ip-id'))
    .option('-u, --public-ip-id [public-ip-id]', $('sets public ip address. This option is' +
      '\n     mutually exclusive with --public-ip-name'))
    .option('-w, --gateway-type [gateway-type]', $('the type of this virtual network' +
      '\n     gateway. Possible values are: \'Vpn\' and \'ExpressRoute\''))
    .option('-y, --vpn-type [vpn-type]', $('the type of this virtual network' +
      '\n     gateway. Possible values are: \'PolicyBased\' and \'RouteBased\''))
    .option('-b, --enable-bgp [enable-bgp]', $('whether BGP is enabled for this virtual' +
      '\n     network gateway or not'))
    .option('-g, --enable-active-active-feature [enable-active-active-feature]', $('activeActive flag'))
    .option('-d, --default-site-name [default-site-name]', $('sets gateway default site. This option' +
      '\n     is mutually exclusive with --default-site-id'))
    .option('-i, --default-site-id [default-site-id]', $('sets gateway default site. This option' +
      '\n     is mutually exclusive with --default-site-name'))
    .option('-k, --sku-name [sku-name]', $('gateway SKU name'))
    .option('-c, --address-prefixes [address-prefixes]', $('a list of address blocks reserved for' +
      '\n     this virtual network in CIDR notation'))
    .option('-a, --bgp-asn [bgp-asn]', $('the BGP speaker\'s ASN'))
    .option('-o, --bgp-peering-address [bgp-peering-address]', $('the BGP peering address and BGP' +
      '\n     identifier of this BGP speaker'))
    .option('-j, --bgp-peer-weight [bgp-peer-weight]', $('the weight added to routes learned from' +
      '\n     this BGP speaker'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, options, _) {
      var useDefaults = true;
      var index = 0;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var virtualNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          virtualNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (virtualNetworkGateway) {
        throw new Error(util.format($('virtual network gateway with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }

      if(!parameters.ipConfigurations) {
        parameters.ipConfigurations = [];
      }
      if(!parameters.ipConfigurations[index]) {
        parameters.ipConfigurations[index] = {};
        parameters.ipConfigurations[index].name = 'default-ip-config';
      }
      if(!parameters.ipConfigurations[index].subnet) {
        parameters.ipConfigurations[index].subnet = {};
      }
      if(options.subnetId) {
        if(options.subnetName) {
          cli.output.warn($('--subnet-name parameter will be ignored because --subnet-id and --subnet-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].subnet.id = options.subnetId;
      } else if(options.subnetName) {
        var idContainersubnet = networkManagementClient.subnets.get(resourceGroup, options.vnetName, options.subnetName, _);
        parameters.ipConfigurations[index].subnet.id = idContainersubnet.id;
      }

      if(!parameters.ipConfigurations[index].publicIPAddress) {
        parameters.ipConfigurations[index].publicIPAddress = {};
      }
      if(options.publicIpId) {
        if(options.publicIpName) {
          cli.output.warn($('--public-ip-name parameter will be ignored because --public-ip-id and --public-ip-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].publicIPAddress.id = options.publicIpId;
      } else if(options.publicIpName) {
        var idContainerpublicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, options.publicIpName, _);
        parameters.ipConfigurations[index].publicIPAddress.id = idContainerpublicIPAddress.id;
      }

      if(options.gatewayType) {
        parameters.gatewayType = validation.isIn(options.gatewayType, ['Vpn', 'ExpressRoute'], '--gateway-type');
      } else if(useDefaults) {
        parameters.gatewayType = defaultGatewayType;
      }

      if(options.vpnType) {
        parameters.vpnType = validation.isIn(options.vpnType, ['PolicyBased', 'RouteBased'], '--vpn-type');
      } else if(useDefaults) {
        parameters.vpnType = defaultVpnType;
      }

      if(options.enableBgp) {
        parameters.enableBgp = utils.parseBool(options.enableBgp);
      } else if(useDefaults) {
        parameters.enableBgp = utils.parseBool(defaultEnableBgp);
      }

      if(options.enableActiveActiveFeature) {
        parameters.activeActive = utils.parseBool(options.enableActiveActiveFeature);
      }

      if(!parameters.gatewayDefaultSite) {
        parameters.gatewayDefaultSite = {};
      }
      if(options.defaultSiteId) {
        if(options.defaultSiteName) {
          cli.output.warn($('--default-site-name parameter will be ignored because --default-site-id and --default-site-name are mutually exclusive'));
        }
        parameters.gatewayDefaultSite.id = options.defaultSiteId;
      } else if(options.defaultSiteName) {
        var idContainergatewayDefaultSite = networkManagementClient.localNetworkGateways.get(resourceGroup, options.defaultSiteName, _);
        if (!idContainergatewayDefaultSite) {
          throw new Error(util.format($('A local network gateway with name "%s" not found in the resource group "%s"'), options.defaultSiteName, resourceGroup));
        }
        parameters.gatewayDefaultSite.id = idContainergatewayDefaultSite.id;
      }

      if(!parameters.sku) {
        parameters.sku = {};
      }
      if(options.skuName) {
        parameters.sku.name = validation.isIn(options.skuName, ['Basic', 'HighPerformance', 'Standard', 'UltraPerformance', 'VpnGw1', 'VpnGw2', 'VpnGw3'], '--sku-name');
      } else if(useDefaults) {
        parameters.sku.name = defaultName;
      }

      if(!parameters.vpnClientConfiguration) {
        parameters.vpnClientConfiguration = {};
      }
      if(!parameters.vpnClientConfiguration.vpnClientAddressPool) {
        parameters.vpnClientConfiguration.vpnClientAddressPool = {};
      }
      if(options.addressPrefixes) {
        parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes = [];
        parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes = parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes.concat(options.addressPrefixes.split(','));
      }

      if(!parameters.bgpSettings) {
        parameters.bgpSettings = {};
      }
      if(options.bgpAsn) {
        parameters.bgpSettings.asn = parseInt(options.bgpAsn, 10);
      }

      if(options.bgpPeeringAddress) {
        parameters.bgpSettings.bgpPeeringAddress = options.bgpPeeringAddress;
      }

      if(options.bgpPeerWeight) {
        parameters.bgpSettings.peerWeight = parseInt(options.bgpPeerWeight, 10);
      }

      if (parameters.sku.name) {
        parameters.sku.tier = parameters.sku.name;
      }
      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(virtualNetworkGateway, generatorUtils.traverse);
    });

  virtualNetworkGateways.command('set [resource-group] [name]')
    .description($('Update a virtual network gateway'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the virtual network gateway'))
    .option('-b, --enable-bgp [enable-bgp]', $('whether BGP is enabled for this virtual' +
      '\n     network gateway or not'))
    .option('-g, --enable-active-active-feature [enable-active-active-feature]', $('activeActive flag'))
    .option('-d, --default-site-name [default-site-name]', $('sets gateway default site. This option' +
      '\n     is mutually exclusive with --default-site-id'))
    .option('-i, --default-site-id [default-site-id]', $('sets gateway default site. This option' +
      '\n     is mutually exclusive with --default-site-name'))
    .option('-k, --sku-name [sku-name]', $('gateway SKU name'))
    .option('-c, --address-prefixes [address-prefixes]', $('a list of address blocks reserved for' +
      '\n     this virtual network in CIDR notation'))
    .option('-a, --bgp-asn [bgp-asn]', $('the BGP speaker\'s ASN'))
    .option('-o, --bgp-peering-address [bgp-peering-address]', $('the BGP peering address and BGP' +
      '\n     identifier of this BGP speaker'))
    .option('-j, --bgp-peer-weight [bgp-peer-weight]', $('the weight added to routes learned from' +
      '\n     this BGP speaker'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var virtualNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          virtualNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!virtualNetworkGateway) {
        throw new Error(util.format($('virtual network gateway with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = virtualNetworkGateway;
      if(options.enableBgp) {
        parameters.enableBgp = utils.parseBool(options.enableBgp);
      } else if(useDefaults) {
        parameters.enableBgp = utils.parseBool(defaultEnableBgp);
      }

      if(options.enableActiveActiveFeature) {
        parameters.activeActive = utils.parseBool(options.enableActiveActiveFeature);
      }

      if(!parameters.gatewayDefaultSite) {
        parameters.gatewayDefaultSite = {};
      }
      if(options.defaultSiteId) {
        if(options.defaultSiteName) {
          cli.output.warn($('--default-site-name parameter will be ignored because --default-site-id and --default-site-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.defaultSiteId)) {
          delete parameters.gatewayDefaultSite.id;
        } else {
          parameters.gatewayDefaultSite.id = options.defaultSiteId;
        }
      } else if(options.defaultSiteName) {
        if(!utils.argHasValue(options.defaultSiteName)) {
          delete parameters.gatewayDefaultSite.id;
        } else {
          var idContainergatewayDefaultSite = networkManagementClient.localNetworkGateways.get(resourceGroup, options.defaultSiteName, _);
          if (!idContainergatewayDefaultSite) {
            throw new Error(util.format($('A local network gateway with name "%s" not found in the resource group "%s"'), options.defaultSiteName, resourceGroup));
          }
          parameters.gatewayDefaultSite.id = idContainergatewayDefaultSite.id;
        }
      }

      if(!parameters.sku) {
        parameters.sku = {};
      }
      if(options.skuName) {
        parameters.sku.name = validation.isIn(options.skuName, ['Basic', 'HighPerformance', 'Standard', 'UltraPerformance', 'VpnGw1', 'VpnGw2', 'VpnGw3'], '--sku-name');
      } else if(useDefaults) {
        parameters.sku.name = defaultName;
      }

      if(!parameters.vpnClientConfiguration) {
        parameters.vpnClientConfiguration = {};
      }
      if(!parameters.vpnClientConfiguration.vpnClientAddressPool) {
        parameters.vpnClientConfiguration.vpnClientAddressPool = {};
      }
      if(options.addressPrefixes) {
        if(virtualNetworkGateway && virtualNetworkGateway.vpnClientConfiguration && virtualNetworkGateway.vpnClientConfiguration.vpnClientAddressPool && virtualNetworkGateway.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes) {
          parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes = virtualNetworkGateway.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes;
        } else {
          parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes = [];
        }
        parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes = parameters.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes.concat(options.addressPrefixes.split(','));
      }

      if(!parameters.bgpSettings) {
        parameters.bgpSettings = {};
      }
      if(options.bgpAsn) {
        parameters.bgpSettings.asn = parseInt(options.bgpAsn, 10);
      }

      if(options.bgpPeeringAddress) {
        parameters.bgpSettings.bgpPeeringAddress = options.bgpPeeringAddress;
      }

      if(options.bgpPeerWeight) {
        parameters.bgpSettings.peerWeight = parseInt(options.bgpPeerWeight, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(virtualNetworkGateway, generatorUtils.traverse);
    });

  virtualNetworkGateways.command('delete [resource-group] [name]')
    .description($('Delete a virtual network gateway'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the virtual network gateway'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var virtualNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          virtualNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!virtualNetworkGateway) {
        throw new Error(util.format($('virtual network gateway with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete virtual network gateway "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('virtual network gateway "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('virtual network gateway "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  virtualNetworkGateways.command('show [resource-group] [name]')
    .description($('Show a virtual network gateway'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the virtual network gateway'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var virtualNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the virtual network gateway "%s"'), name));
      try {
        virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          virtualNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!virtualNetworkGateway) {
        cli.output.warn(util.format($('virtual network gateway with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      cli.interaction.formatOutput(virtualNetworkGateway, generatorUtils.traverse);
    });

  virtualNetworkGateways.command('list [resource-group]')
    .description($('List virtual network gateways'))
    .usage('[options] <resource-group>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var virtualNetworkGateway = null;
      var progress;
      try {
        if(typeof networkManagementClient.virtualNetworkGateways.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          progress = cli.interaction.progress($('Getting the virtual network gateways'));
          virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.list(resourceGroup,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the virtual network gateways'));
            virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.list(resourceGroup,  _);
          } else {
            progress = cli.interaction.progress($('Getting the virtual network gateways'));
            virtualNetworkGateway = networkManagementClient.virtualNetworkGateways.listAll(_);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(virtualNetworkGateway, function(virtualNetworkGateway) {
        if (virtualNetworkGateway.length === 0) {
          cli.output.warn($('No virtual network gateways found'));
        } else {
          cli.output.table(virtualNetworkGateway, function (row, item) {
            row.cell($('Name'), item.name);
            row.cell($('Location'), item.location || '');
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};
