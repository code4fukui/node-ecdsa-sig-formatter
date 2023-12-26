import formatEcdsa from "./src/ecdsa-sig-formatter.js";
import { Buffer } from "https://taisukef.github.io/buffer/Buffer.js";

const bits = "256";
//const signature = Buffer.from("jITIgtpF7MN-yugZYRnygRPCRHI7rPIHd_jxgDj48hWu4UbwsRVbMB0gHUuQh4Q-2h4Tca1h_TmO59StT27VBg", "base64url");
const signature = Buffer.from("aCpcy2A2Xgwzf0AniT6vpzgTSSw_qpOIp1XqJoE4rk6UZk1doG61_ff3UxX5UmCv_BWw2xUc6zJlWG4z8jj0qQ", "base64url");
const b = formatEcdsa.derToJose(signature, 'ES' + bits); // https://github.com/auth0/node-jwa/blob/master/index.js#L201
//const b = formatEcdsa.joseToDer(signature, 'ES' + bits);
console.log(signature.toString("base64url"));
console.log(b.toString("base64url"));
