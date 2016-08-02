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
var mc = require('map-canvas');
var clib = require('drawille-canvas-blessed-contrib');

var CLITest = require('../../../framework/arm-cli-test');
var testprefix = 'arm-cli-location-tests';
var locationMapFile = 'test/data/locationMap.txt';

describe('arm', function () {
  describe('location', function () {
    var suite;

    before(function (done) {
      suite = new CLITest(this, testprefix);
      suite.setupSuite(done);
    });

    after(function (done) {
      suite.teardownSuite(done);
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('list', function () {
      it('should work', function (done) {
        suite.execute('location list --json', function (result) {
          result.exitStatus.should.equal(0);
          var locations = JSON.parse(result.text);
          locations.some(function (location) {
            return location.name === 'westus' && location.displayName === 'West US';
          }).should.be.true;
          done();
        });
      });
    });
    
    describe('build map file', function () {
      it('should work', function (done) {
        suite.execute('location list', function (result) {
            var text = result.text;
          suite.execute('location list --json', function (result) {
            result.exitStatus.should.equal(0);
            var locations = JSON.parse(result.text);
            // Draw
            var Canvas = clib.Canvas
            var Map = mc;

            var size = {height: 280, width: 440} //7:11 => 700:1100
            var canvas = new Canvas(size.width, size.height)
            var ctx = canvas.getContext()
            ctx.strokeStyle="green"
            ctx.fillStyle="green"
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var options = { excludeAntartica: true
                          , disableBackground: true
                          , disableMapBackground: true
                          , disableGraticule: true
                          , disableFill: true
                          , height: size.height
                          , width: size.width }

            var map = new Map(options, canvas)
            map.draw()
            var count = 0;
            for (var it in locations) {
              var locItem = locations[it];
              console.log('locItem = ' + JSON.stringify(locItem));
              var ch = count.toString();
              if (count >= 10) {
                ch = String.fromCharCode(('A'.charCodeAt(0)) + (count - 10)); 
              }
              map.addMarker({"lat" : locItem.latitude, "lon" : locItem.longitude, char: ch });
              count++;
            }

            var text1 = ctx._canvas.frame().toString("utf8");
            text = text + "\r\nTotalCount = " + count + "\r\n" + text1.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
            var fs = require('fs');
            fs.writeFile(locationMapFile, text, 'utf8', function(err) {
              if(err) {
                return console.log(err);
              }
              console.log("The file was saved!");
            });
            done();
          });
        });
      });
    });
  });
});