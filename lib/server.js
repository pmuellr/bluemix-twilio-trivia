// Licensed under the Apache License. See footer for details.

var path    = require("path")
var cfenv   = require("cfenv")
var express = require("express")

var twilioClient = require("./twilioClient")
var util         = require("./util")

exports.main = main

var appEnv = cfenv.getAppEnv()

//------------------------------------------------------------------------------
function main() {
  var tClient = twilioClient.get()
  if (!tClient) {
    util.logError("-----------------------------------------------------------")
    util.logError("unable to create Twilio client!!!")
    util.logError("-----------------------------------------------------------")
  }

  var app = express()

  var wwwPath = path.join(__dirname, "..", "www")

  // app.post("/:instance/clr-mem", handleMemClearRequest)
  // app.post("/:instance/use-mem", handleMemRequest)
  // app.post("/:instance/use-cpu", handleCpuRequest)
  // app.get("/statusEvents",       handleStatusEventsRequest)

  app.use(express.static(wwwPath))

  app.listen(appEnv.port, appEnv.bind, function() {
      util.log("server starting on " + appEnv.url)
  })

}


/*
#-------------------------------------------------------------------------------
# Copyright IBM Corp. 2014
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#-------------------------------------------------------------------------------
*/
