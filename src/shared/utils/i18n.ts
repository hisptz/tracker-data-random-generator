/*
 * i18next HTML-escapes interpolated values by default, so a profile called "A / B" would read
 * "A &#x2F; B". React already escapes text, so values typed by users (names, labels, search text)
 * are interpolated unescaped: i18n.t("...", { name, interpolation: NO_ESCAPE })
 */
export const NO_ESCAPE = { escapeValue: false };
