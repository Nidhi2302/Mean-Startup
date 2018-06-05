import * as sha256 from "fast-sha256";

export const config = {
    getSignature: (input) => {
        const hashCode = new sha256.Hash();
        hashCode.update(input);
        let signature = hashCode.digest();
        console.log("signature",btoa(String.fromCharCode.apply(null, signature)));
        return btoa(String.fromCharCode.apply(null, signature));
    }
}



