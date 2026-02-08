import { EditorView } from '@codemirror/view';

export const customTheme = EditorView.theme({
  '&': {
    outline: 'none !important',
    // height: '100%',
  },
  '.cm-content': {
    fontFamily: 'var(--font-plex-mono), monospace',
    fontSize: '14px',
  },
  'cm-scollbar': {
    scrollbarWidth: 'thin',
    scrollbarColor: '#3f3f46 transparent',
  },
});
