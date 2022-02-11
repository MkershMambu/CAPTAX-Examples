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
  groupIt('3:16');
groupIt('18:32');
groupIt('34:50');
groupIt('52:70');
groupIt('72:106');
groupIt('108:131');
groupIt('133:167');
groupIt('169:172');
groupIt('174:180');
groupIt('184:187');
groupIt('189:190');
groupIt('195:199');
groupIt('202:214');
groupIt('216:232');
groupIt('4:7');
groupIt('9:14');
groupIt('20:32');
groupIt('36:50');
groupIt('53:64');
groupIt('67:68');
groupIt('73:100');
groupIt('103:104');
groupIt('106:106');
groupIt('110:111');
groupIt('113:114');
groupIt('119:123');
groupIt('125:125');
groupIt('127:127');
groupIt('134:134');
groupIt('136:167');
groupIt('175:175');
groupIt('177:180');
groupIt('207:208');
groupIt('217:225');
groupIt('227:232');
groupIt('7:7');
groupIt('14:14');
groupIt('21:32');
groupIt('38:50');
groupIt('54:58');
groupIt('60:64');
groupIt('74:77');
groupIt('79:92');
groupIt('94:100');
groupIt('120:121');
groupIt('137:151');
groupIt('153:167');
groupIt('219:219');
groupIt('228:232');
groupIt('22:32');
groupIt('39:50');
groupIt('75:77');
groupIt('80:85');
groupIt('87:88');
groupIt('91:92');
groupIt('95:96');
groupIt('98:100');
groupIt('138:139');
groupIt('141:142');
groupIt('144:145');
groupIt('147:148');
groupIt('150:151');
groupIt('154:155');
groupIt('157:158');
groupIt('160:161');
groupIt('163:164');
groupIt('166:167');
groupIt('28:32');
groupIt('40:50');
groupIt('76:77');
groupIt('81:85');
groupIt('99:100');
groupIt('139:139');
groupIt('142:142');
groupIt('145:145');
groupIt('148:148');
groupIt('151:151');
groupIt('155:155');
groupIt('158:158');
groupIt('161:161');
groupIt('164:164');
groupIt('167:167');
groupIt('46:50');
groupIt('84:85');

  spreadsheet.getActiveSheet().collapseAllRowGroups();
}

