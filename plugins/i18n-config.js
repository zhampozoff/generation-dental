// ~/plugins/i18n.js

export default function({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.head.htmlAttrs.dir = 'ltr'
}
