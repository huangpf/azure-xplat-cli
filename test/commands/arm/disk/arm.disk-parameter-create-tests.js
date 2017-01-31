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

var should = require('should');
var path = require('path');
var fs = require('fs');
var util = require('util');
var profile = require('../../../../lib/util/profile');
var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var testprefix = 'arm.disk-parameter-create-tests';
var groupPrefix = 'xTestDiskCreate';
var VMTestUtil = require('../../../util/vmTestUtil');
var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'southeastasia'
}];

var groupName,
  location,
  diskPrefix = 'xplatDisk',
  paramFileName = 'test/data/diskParam.json',
  updateFileName = 'test/data/diskParam2.json', //changes account type to premium and size from 5 to 10
  grantAccessFileName = 'test/data/grantAccessParam.json';

var makeCommandStr = function(component, verb, file, others) {
  var cmdFormat = 'disk config %s %s --parameter-file %s %s --json';
  return util.format(cmdFormat, component, verb, file, others ? others : '');
};

var makeGrantAccessCommandStr = function(component, verb, file, others) {
  var cmdFormat = 'disk grant-access-parameters %s %s --parameter-file %s %s --json';
  return util.format(cmdFormat, component, verb, file, others ? others : '');
};

var makeUpdateParametersCommandStr = function(component, verb, file, others) {
  var cmdFormat = 'disk update-parameters %s %s --parameter-file %s %s --json';
  return util.format(cmdFormat, component, verb, file, others ? others : '');
};

describe('arm', function() {
  describe('compute', function() {
    var suite, retry = 5;
    var vmTest = new VMTestUtil();
    before(function(done) {
      suite = new CLITest(this, testprefix, requiredEnvironment);
      suite.setupSuite(function() {
        location = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.generateId(groupPrefix, null);
        diskPrefix = suite.generateId(diskPrefix, null);
        done();
      });
    });

    after(function(done) {
      this.timeout(vmTest.timeoutLarge * 10);
      vmTest.deleteUsedGroup(groupName, suite, function(result) {
        suite.teardownSuite(done);
      });
    });

    beforeEach(function(done) {
      suite.setupTest(done);
    });

    afterEach(function(done) {
      suite.teardownTest(done);
    });

    describe('disk', function() {
      it('disk config set and create should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var subscription = profile.current.getSubscription();
        vmTest.createGroup(groupName, location, suite, function(result) {
          var cmd = util.format('disk config create --parameter-file %s --json', paramFileName).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            var cmd = makeCommandStr('disk', 'set', paramFileName, util.format('--name %s --location %s', diskPrefix, location)).split(' ');
            testUtils.executeCommand(suite, retry, cmd, function(result) {
              result.exitStatus.should.equal(0);
              var cmd = makeCommandStr('disk', 'set', paramFileName, util.format('--account-type %s', 'Standard_LRS')).split(' ');
              testUtils.executeCommand(suite, retry, cmd, function(result) {
                result.exitStatus.should.equal(0);
                var cmd = makeCommandStr('disk', 'set', paramFileName, util.format('--os-type %s', 'Windows')).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                  result.exitStatus.should.equal(0);
                  var cmd = makeCommandStr('disk', 'set', paramFileName, util.format('--disk-size-g-b %s --parse', 5)).split(' ');
                  testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    var cmd = makeCommandStr('disk', 'set', paramFileName, util.format('--encryption-settings "$s" --parse', 'null')).split(' ');
                    testUtils.executeCommand(suite, retry, cmd, function(result) {
                      result.exitStatus.should.equal(0);
                      var cmd = makeCommandStr('creation-data', 'set', paramFileName, util.format('--create-option %s', 'Empty')).split(' ');
                      testUtils.executeCommand(suite, retry, cmd, function(result) {
                        result.exitStatus.should.equal(0);
                        var cmd = makeCommandStr('creation-data', 'delete', paramFileName, '--image-reference --source-uri --storage-account-id --source-resource-id').split(' ');
                        testUtils.executeCommand(suite, retry, cmd, function(result) {
                          result.exitStatus.should.equal(0);
                          var cmd = util.format('disk create --resource-group %s --name %s --parameter-file %s --json', groupName, diskPrefix, paramFileName).split(' ');
                          testUtils.executeCommand(suite, retry, cmd, function(result) {
                            result.exitStatus.should.equal(0);
                            done();
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
      
      it('disk show should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var cmd = util.format('disk show -g %s -n %s --json', groupName, diskPrefix).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          result.text.should.containEql(groupName);
          result.text.should.containEql(diskPrefix);
          done();
        });
      });
/*
      it('disk grant access config create should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var subscription = profile.current.getSubscription();
        var cmd = util.format('disk grant-access-parameters create --parameter-file %s --json', grantAccessFileName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          var cmd = makeGrantAccessCommandStr('access-data', 'set', grantAccessFileName, util.format('--access %s', 'Read')).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            var cmd = makeGrantAccessCommandStr('access-data', 'set', grantAccessFileName, util.format('--duration-in-seconds %s --parse', 3600)).split(' ');
              testUtils.executeCommand(suite, retry, cmd, function(result) {
              result.exitStatus.should.equal(0);
              var cmd = util.format('disk grant-access -g %s -n %s --parameter-file %s --json', groupName, diskPrefix, grantAccessFileName).split(' ');
              testUtils.executeCommand(suite, retry, cmd, function(result) {
                result.exitStatus.should.equal(0);
                done();
              });
            });
          });
        });
      });

      it('disk update parameters should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var subscription = profile.current.getSubscription();
        var cmd = util.format('disk update-parameters create --parameter-file %s --json', updateFileName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          var cmd = makeUpdateParametersCommandStr('disk', 'set', updateFileName, util.format('--parse --tags %s', 'testtag')).split(' ');
          testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);
            var cmd = makeUpdateParametersCommandStr('disk', 'delete', updateFileName, util.format('--duration-in-seconds %s --parse', 3600)).split(' ');
            testUtils.executeCommand(suite, retry, cmd, function(result) {
              result.exitStatus.should.equal(0);
              var cmd = makeUpdateParametersCommandStr('creation-data', 'set', updateFileName, util.format('--create-option %s', 'Empty')).split(' ');
              testUtils.executeCommand(suite, retry, cmd, function(result) {
                result.exitStatus.should.equal(0);
                var cmd = makeUpdateParametersCommandStr('creation-data', 'delete', updateFileName, '--image-reference --source-uri').split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                  result.exitStatus.should.equal(0);
                  var cmd = makeUpdateParametersCommandStr('image-reference', 'set', updateFileName, '--parse --id %s').split(' ');
                  testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    var cmd = makeUpdateParametersCommandStr('image-reference', 'delete', updateFileName, '--id %s').split(' ');
                    testUtils.executeCommand(suite, retry, cmd, function(result) {
                      result.exitStatus.should.equal(0);
                      var cmd = util.format('disk grant-access -g %s -n %s --parameter-file %s --json', groupName, diskPrefix, updateFileName).split(' ');
                      testUtils.executeCommand(suite, retry, cmd, function(result) {
                        result.exitStatus.should.equal(0);
                        done();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

      it('disk revoke access should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var cmd = util.format('disk revoke-access -g %s -n %s --json', groupName, diskPrefix).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('disk delete should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var cmd = util.format('disk delete -g %s -n %s --json', groupName, diskPrefix).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('disk update should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var cmd = util.format('disk update -g %s -n %s --parameter-file %s --json', groupName, diskPrefix, grantAccessFileName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });

      it('disk empty list should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var cmd = util.format('disk list -g %s --json', groupName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          result.text.should.containEql('[]');
          done();
        });
      });

      it('disk empty list all should pass', function(done) {
        this.timeout(vmTest.timeoutLarge * 10);
        var cmd = util.format('disk list-all --json', groupName).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
*/
    });
  });
});
