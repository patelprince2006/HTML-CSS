
export const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .filter(word => word.trim() !== "")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const trimExtraSpaces = (str) => {
  return str.trim().replace(/\s+/g, " ");
};

export const wordFrequency = (str) => {
  const words = trimExtraSpaces(str.toLowerCase()).split(" ");
  const freq = {};
  words.forEach(w => {
    if (w) freq[w] = (freq[w] || 0) + 1;
  });
  return freq;
};

export const maskEmail = (email) => {
  const [user, domain] = email.split("@");
  if (!domain) return "Invalid Email";
  const maskedUser = user[0] + "*".repeat(Math.max(0, user.length - 2)) + user.slice(-1);
  return `${maskedUser}@${domain}`;
};
