// Licensed under the Apache License. See footer for details.

var cfenv  = require("cfenv")
var twilio = require("twilio")

var util = require("./util")

exports.get = get

var TwilioClient = null
var TwilioCreds  = getCreds()

//------------------------------------------------------------------------------
function get() {
  if (TwilioClient) return TwilioClient
  if (!TwilioCreds) return null

  TwilioClient = twilio(TwilioCreds.accountSID, TwilioCreds.authToken)
  return TwilioClient
}

//------------------------------------------------------------------------------
function getCreds() {
  var options = {}

  try {
    var creds = require("../local-twilio-creds.json")

    options.vcap = {services: {}}
    options.vcap.services[creds.label] = [ creds ]

    util.log("using local-twilio-creds.json for credentials")
  }
  catch (e) {}

  var appEnv  = cfenv.getAppEnv(options)
  var service = appEnv.getService(/.*Twilio.*/i)
  if (!service) return logError("service named /.*Twilio.*/i not found")

  util.log("using Twilio service named `" + service.name + "`")

  var creds = service.credentials
  if (!creds)            return logError("Twilio service has no credentials")
  if (!creds.url)        return logError("Twilio credentials have no url")
  if (!creds.accountSID) return logError("Twilio credentials have no accountSID")
  if (!creds.authToken)  return logError("Twilio credentials have no authToken")

  return creds
}

//------------------------------------------------------------------------------
function logError(message) {
  util.logError(message)
  return null
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
