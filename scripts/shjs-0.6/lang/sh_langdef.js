if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['langdef'] = [
  [
    [
      /#/g,
      'sh_comment',
      1
    ],
    [
      /\b(?:include)\b/g,
      'sh_preproc',
      -1
    ],
    [
      /"/g,
      'sh_string',
      2
    ],
    [
      /'/g,
      'sh_regexp',
      3
    ],
    [
      /`/g,
      'sh_regexp',
      4
    ],
    [
      /\b(?:state|environment|begin|end|delim|escape|start|multiline|nested|vardef|exitall|exit|redef|subst|nonsensitive)\b/g,
      'sh_keyword',
      -1
    ],
    [
      /=|\+|,|\(|\)/g,
      'sh_symbol',
      -1
    ],
    [
      /\$[A-Za-z0-9_]+|[A-Za-z0-9_]+/g,
      'sh_variable',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ],
  [
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_regexp',
      -2
    ]
  ],
  [
    [
      /\\(?:\\|`)/g,
      null,
      -1
    ],
    [
      /`/g,
      'sh_regexp',
      -2
    ]
  ]
];
