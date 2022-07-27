
const createNodePonyfill = require('./create-node-ponyfill');
const ponyfills = createNodePonyfill();

module.exports.fetch = ponyfills.fetch;
module.exports.Headers = ponyfills.Headers;
module.exports.Request = ponyfills.Request;
module.exports.Response = ponyfills.Response;
module.exports.FormData = ponyfills.FormData;
module.exports.AbortController = ponyfills.AbortController;
module.exports.ReadableStream = ponyfills.ReadableStream;
module.exports.WritableStream = ponyfills.WritableStream;
module.exports.TransformStream = ponyfills.TransformStream;
module.exports.Blob = ponyfills.Blob;
module.exports.File = ponyfills.File;
module.exports.crypto = ponyfills.crypto;
exports.createFetch = createNodePonyfill;

require('event-target-polyfill');
