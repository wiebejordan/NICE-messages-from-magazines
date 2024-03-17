type SourceObject = {
  [key: string]: number;
};

export const magazinesToMessage = (message: string, msgSource: string) => {
  const sourceToCharacters: SourceObject = {};
  const msgToCharacters: SourceObject = {};
  let result = true;

  for (const character of msgSource.replace(/\s+/g, "")) {
    const formatCharacter = character.toLowerCase();
    sourceToCharacters[formatCharacter] =
      sourceToCharacters[formatCharacter] + 1 || 1;
  }

  for (const char of message.replace(/\s+/g, "")) {
    const formatChar = char.toLowerCase();
    msgToCharacters[formatChar] = msgToCharacters[formatChar] + 1 || 1;
  }

  for (const [key] of Object.entries(msgToCharacters)) {
    if (
      sourceToCharacters[key] < msgToCharacters[key] ||
      !sourceToCharacters[key]
    ) {
      result = false;
    }
  }
  return result;
};
