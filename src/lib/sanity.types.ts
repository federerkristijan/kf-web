export const supportedLanguages = [
  { id: 'de', title: 'Deutsch'},
  { id: 'en', title: 'Englisch', isDefault: true  },
];
export const baseLanguage = supportedLanguages.find((l) => l.isDefault);
