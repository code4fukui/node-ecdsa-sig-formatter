// Deno
//import { Buffer } from "https://taisukef.github.io/buffer/Buffer.js";
//import crypto from "node:crypto";
//import * as crypto from "https://code4fukui.github.io/encrypted-content-encoding/denojs/crypto_node.js";

// Node
import crypto from "node:crypto";

/*
eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJodHRwczovL3dlYi5wdXNoLmFwcGxlLmNvbSIsImV4cCI6MTcwMzUyNTU5OCwic3ViIjoibWFpbHRvOmZ1a3Vub0BqaWcuanAifQ.jITIgtpF7MN-yugZYRnygRPCRHI7rPIHd_jxgDj48hWu4UbwsRVbMB0gHUuQh4Q-2h4Tca1h_TmO59StT27VBg
eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJodHRwczovL3dlYi5wdXNoLmFwcGxlLmNvbSIsImV4cCI6MTcwMzUyNTU5OCwic3ViIjoibWFpbHRvOmZ1a3Vub0BqaWcuanAifQ.aCpcy2A2Xgwzf0AniT6vpzgTSSw_qpOIp1XqJoE4rk6UZk1doG61_ff3UxX5UmCv_BWw2xUc6zJlWG4z8jj0qQ

*/

const thing = Buffer.from("eyJhdWQiOiJodHRwczovL3dlYi5wdXNoLmFwcGxlLmNvbSIsImV4cCI6MTcwMzUyNTU5OCwic3ViIjoibWFpbHRvOmZ1a3Vub0BqaWcuanAifQ", "base64url");
const privateKey = Buffer.from("XrM3elAzmPJAZuKgbmel2fr-ZIZCMEMhmJHfA5aFZZw", "base64url");
//const privateKey = "XrM3elAzmPJAZuKgbmel2fr-ZIZCMEMhmJHfA5aFZZw";
function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

function sign(thing, privateKey, bits) {
  //checkIsPrivateKey(privateKey);
  //thing = normalizeInput(thing);
  // Even though we are specifying "RSA" here, this works with ECDSA
  // keys as well.
  const alg = 'RSA-SHA' + bits;
  console.log(alg);
  //const alg = "RS256";
  const signer = crypto.createSign(alg);
  signer.update(thing);
  //const sig = signer.sign(privateKey, 'base64');
  const sig = signer.sign(privateKey);
  return fromBase64(sig);
}

const sig = sign(thing, privateKey, 256);
console.log(sig);
