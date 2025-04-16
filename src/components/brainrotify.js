const toneTags = [
    "/j", "/srs", "/lh", "/nm", "/gen", "/pos", "/neg", "/hyp", "/c", "/rt", "/m", "/t", "/q", "/sx", "/nsx"
  ];
  const diverseEmojis = ["😭", "🦇", "😞", "🙏", "🥀", "🙏", "🧍‍♀️", "😈", "🔥", "🙀", "😛", "☝️"];
  const textmojis = [":D", ":|", ":(", "<33", ":DD", "D:"];
  const tws = [
    "omfg", "but its okay because directors eat last", "OMG", "kms", "im gonna kill myself",
    "i hate kyodo taiko", "DPMO", "(tw)", "ts pmo", "dpmo", "LMAO"
  ];
  const birdString = "🕊️🦅🦆🦜🐥🐣🦢🐓🦃🦉🐧🐤🐦🦤🪶🦩🪽🐦‍⬛🦚🪹🐦‍🔥🪿🪺";
  
  function randomChance(percent) {
    return Math.random() < percent / 100;
  }
  
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function brainrotify(message, intensity = 1) {
    let out = message.toLowerCase(); // always lowercase
    let prefix = "";
    let suffix = "";
    
    if (randomChance(33 * intensity)) {
        let selected = pickRandom(tws);
        let tries = 0;
        // Use the same length logic as suffix
        while ((selected.length > intensity * 10) && tries < 10) {
          selected = pickRandom(tws);
          tries++;
        }
        prefix += selected + " ";
      }

    // 1. 10% * intensity chance: ...
    if (randomChance(10 * intensity)) suffix += "...";
  
    // 2. 50% * intensity chance for one of these (tw):
    if (randomChance(50 * intensity)) {
        // Try up to 10 times to find a tws string that fits the length requirement
        let selected = pickRandom(tws);
        let tries = 0;
        while (((selected.length > intensity * 10) && intensity != 3) && tries < 10) {
          selected = pickRandom(tws);
          tries++;
        }
        suffix += " " + selected;
      }
      
    // 3. Emoji/textmoji/tone logic (probabilities are mutually exclusive)
    const roll = Math.random() * 100;
      
    if (roll*intensity > 30) {
        const roll = Math.random() * 100;
    if (roll < 33) {
      // 10% diverse emojis, up to 2*intensity
      let num = 1 + Math.floor(Math.random() * (2 * intensity));
      for (let i = 0; i < num; i++) suffix += " " + pickRandom(diverseEmojis);
    } else if (roll < 66) {
      // 25% single emoji, repeated up to 3*intensity
      let emoji = pickRandom(diverseEmojis);
      let num = 1 + Math.floor(Math.random() * (3 * intensity));
      suffix += " " + Array(num).fill(emoji).join(" ");
    } else if (roll < 90) {
      // 5% textmoji
      suffix += " " + pickRandom(textmojis);
    } else if (intensity > 2) {
      // 3% bird string (only at intensity > 2)
      suffix += " " + birdString;
    }

    }
      // 4. Tone tag logic (independent roll)
    const toneRoll = Math.random() * 100;
    if (toneRoll < 12 * intensity) {
        // up to 2*intensity random tone tags
        let num = 1 + Math.floor(Math.random() *  intensity);
        let chosen = [];
        while (chosen.length < num) {
        let tag = pickRandom(toneTags);
        if (!chosen.includes(tag)) chosen.push(tag);
        }
        suffix += " " + chosen.join(" ");
    }
    
    let final = prefix + out + suffix;

    // 5. Random chance for all caps (7% * intensity)
    if (randomChance(7 * intensity)) {
        final = final.toUpperCase();
    }

    return final;
}
  