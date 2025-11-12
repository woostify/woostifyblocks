

interface WcbGlobalVariables {
  blocksEditorSpacing?: number | string;
}

const generateEditorSpacingCSS = (spacing: string = '0px'): string => `
  /* Desktop */
  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper
    > * + *:not(p),
  .edit-post-visual-editor .editor-styles-wrapper
    .block-editor-block-list__layout.is-root-container
    > * + *:not(p) {
    margin-block-start: ${spacing} !important;
    margin-top: ${spacing} !important;
  }

  body.block-editor-iframe__body.editor-styles-wrapper
    .is-root-container.wp-site-blocks
    > * + *,
  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,
  body.block-editor-iframe__body.editor-styles-wrapper
    .is-layout-constrained
    > * + * {
    margin-block-start: ${spacing} !important;
    margin-top: ${spacing} !important;
  }

  /* Tablet */
  @media (max-width: 768px) {
    .editor-styles-wrapper
      > .block-editor-block-list__layout.is-root-container
      > .wp-block
      + .wp-block:not(p) {
      margin-block-start: ${spacing} !important;
      margin-top: ${spacing} !important;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .editor-styles-wrapper
      > .block-editor-block-list__layout.is-root-container
      > .wp-block
      + .wp-block:not(p) {
      margin-block-start: ${spacing} !important;
      margin-top: ${spacing} !important;
    }
  }
`;

const styleEditor = (globals: WcbGlobalVariables): void => {
  // Fallback to 0px if not provided
  const blocksEditorSpacing = globals?.blocksEditorSpacing;
  const spacingValue = (blocksEditorSpacing == '')? 0 : blocksEditorSpacing;
  const spacing = typeof spacingValue === 'number' ? `${spacingValue}px` : spacingValue;

  const cssString = generateEditorSpacingCSS(spacing);

  let styleNode = document.getElementById('wcb-blocks-editor-custom-style') as HTMLStyleElement | null;

  if (!styleNode) {
    styleNode = document.createElement('style');
    styleNode.id = 'wcb-blocks-editor-custom-style';
    document.head.appendChild(styleNode);
  }

  styleNode.textContent = cssString;
};

export default styleEditor;