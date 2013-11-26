if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['dirtree'] = [
  [
    [
      /%/g,
      'sh_comment',
      1
    ],
    [
      /[^ |-].*\/[^ %]*/g,
      'sh_dir',
      -1
    ],
    [
      /[^ |-][^ \/%]*/g,
      'sh_nondir',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];
