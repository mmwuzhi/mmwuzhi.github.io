import { type Locale } from './translations';

export function switchLangPath(from: Locale, to: Locale, currentPath: string): string {
  if (from === to) return currentPath;
  if (from === 'zh') return `/${to}${currentPath === '/' ? '' : currentPath}`;
  const stripped = currentPath.replace(/^\/(en|ja)/, '');
  if (to === 'zh') return stripped || '/';
  return `/${to}${stripped}`;
}
