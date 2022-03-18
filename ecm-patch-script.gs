/** Google App script to modify an ECM matrix */

function groupIt(str1) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange(str1).activate()
  .shiftRowGroupDepth(1);
};

function ungroupIt(str1) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange(str1).activate()
  .shiftRowGroupDepth(-1);
};

function main() {
  groupIt('3:37');
groupIt('39:53');
groupIt('55:71');
groupIt('73:91');
groupIt('93:149');
groupIt('151:174');
groupIt('176:210');
groupIt('212:215');
groupIt('217:227');
groupIt('231:234');
groupIt('236:237');
groupIt('242:246');
groupIt('249:261');
groupIt('263:278');
groupIt('4:11');
groupIt('13:18');
groupIt('20:24');
groupIt('26:36');
groupIt('41:53');
groupIt('57:71');
groupIt('74:85');
groupIt('88:89');
groupIt('94:121');
groupIt('123:133');
groupIt('137:138');
groupIt('140:149');
groupIt('153:154');
groupIt('156:157');
groupIt('162:166');
groupIt('168:168');
groupIt('170:170');
groupIt('177:177');
groupIt('179:210');
groupIt('218:221');
groupIt('223:227');
groupIt('254:255');
groupIt('264:271');
groupIt('273:278');
groupIt('7:7');
groupIt('9:11');
groupIt('18:18');
groupIt('27:28');
groupIt('30:31');
groupIt('33:36');
groupIt('42:53');
groupIt('59:71');
groupIt('75:79');
groupIt('81:85');
groupIt('95:121');
groupIt('124:125');
groupIt('127:128');
groupIt('130:133');
groupIt('141:149');
groupIt('163:164');
groupIt('180:194');
groupIt('196:210');
groupIt('266:266');
groupIt('274:278');
groupIt('34:36');
groupIt('43:47');
groupIt('49:53');
groupIt('60:71');
groupIt('96:98');
groupIt('100:113');
groupIt('115:117');
groupIt('119:121');
groupIt('142:142');
groupIt('144:144');
groupIt('146:149');
groupIt('181:182');
groupIt('184:185');
groupIt('187:188');
groupIt('190:191');
groupIt('193:194');
groupIt('197:198');
groupIt('200:201');
groupIt('203:204');
groupIt('206:207');
groupIt('209:210');
groupIt('35:36');
groupIt('61:65');
groupIt('67:71');
groupIt('97:98');
groupIt('101:106');
groupIt('108:109');
groupIt('112:113');
groupIt('116:117');
groupIt('120:121');
groupIt('147:149');
groupIt('182:182');
groupIt('185:185');
groupIt('188:188');
groupIt('191:191');
groupIt('194:194');
groupIt('198:198');
groupIt('201:201');
groupIt('204:204');
groupIt('207:207');
groupIt('210:210');
groupIt('102:103');
groupIt('105:106');
groupIt('148:149');

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().collapseAllRowGroups();
}

