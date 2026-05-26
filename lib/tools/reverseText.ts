export type ReverseMode = "chars" | "words" | "each" | "flip";

const FLIP_MAP: Record<string, string> = {
  a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",k:"ʞ",
  l:"l",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",u:"n",v:"ʌ",
  w:"ʍ",x:"x",y:"ʎ",z:"z",A:"∀",B:"ᗺ",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",G:"⅁",
  H:"H",I:"I",J:"ɾ",K:"ʞ",L:"˥",M:"W",N:"N",O:"O",P:"Ԁ",Q:"Q",R:"ᴚ",
  S:"S",T:"┴",U:"∩",V:"Λ",W:"M",X:"X",Y:"⅄",Z:"Z",
  "0":"0","1":"Ɩ","2":"ᄅ","3":"Ɛ","4":"ㄣ","5":"ϛ","6":"9","7":"ㄥ","8":"8","9":"6",
  ".":"˙",",":"'","!":"¡","?":"¿","(":")",")":"(","{":"}","}":"{","[":"]","]":"[",
  "<":">",">":"<","&":"⅋","_":"‾",
};

export function reverseText(text: string, mode: ReverseMode): string {
  switch (mode) {
    case "chars":
      return text.split("").reverse().join("");

    case "words":
      return text
        .split("\n")
        .map((line) => line.split(" ").reverse().join(" "))
        .join("\n");

    case "each":
      return text
        .split("\n")
        .map((line) =>
          line
            .split(" ")
            .map((word) => word.split("").reverse().join(""))
            .join(" ")
        )
        .join("\n");

    case "flip":
      return text
        .split("")
        .reverse()
        .map((c) => FLIP_MAP[c] ?? c)
        .join("");
  }
}
