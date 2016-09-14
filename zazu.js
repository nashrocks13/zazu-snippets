module.exports = {
  name: 'Zazu Snippets',
  icon: 'snip.svg',
  stylesheet: 'css/preview.css',
  blocks: {
    input: [
      {
        id: 'Read',
        type: 'PrefixScript',
        prefix: 'snip',
        space: true,
        args: 'Required',
        script: 'src/read.js',
        connections: ['Copy'],
      },
      {
        id: 'Write',
        type: 'PrefixScript',
        prefix: 'snipc',
        space: true,
        args: 'Required',
        script: 'src/write.js',
        connections: ['WriteSnippet'],
      },
      {
        id: 'Delete',
        type: 'PrefixScript',
        prefix: 'snipd',
        space: true,
        args: 'Required',
        script: 'src/delete.js',
        connections: ['DeleteSnippet'],
      },
    ],
    output: [
      {
        id: 'Copy',
        type: 'CopyToClipboard',
        text: '{value}',
      },
      {
        id: 'WriteSnippet',
        type: 'UserScript',
        script: 'src/writeSnippet.js',
        value: '{value}',
      },
      {
        id: 'DeleteSnippet',
        type: 'UserScript',
        script: 'src/deleteSnippet.js',
        value: '{value}',
      },
    ],
  },
}

