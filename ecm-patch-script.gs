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
groupIt('72:107');
groupIt('109:132');
groupIt('134:168');
groupIt('170:173');
groupIt('175:181');
groupIt('185:188');
groupIt('190:191');
groupIt('196:200');
groupIt('203:215');
groupIt('217:233');
groupIt('4:7');
groupIt('9:14');
groupIt('20:32');
groupIt('36:50');
groupIt('53:64');
groupIt('67:68');
groupIt('73:100');
groupIt('104:105');
groupIt('107:107');
groupIt('111:112');
groupIt('114:115');
groupIt('120:124');
groupIt('126:126');
groupIt('128:128');
groupIt('135:135');
groupIt('137:168');
groupIt('176:176');
groupIt('178:181');
groupIt('208:209');
groupIt('218:226');
groupIt('228:233');
groupIt('7:7');
groupIt('14:14');
groupIt('21:32');
groupIt('38:50');
groupIt('54:58');
groupIt('60:64');
groupIt('74:100');
groupIt('121:122');
groupIt('138:152');
groupIt('154:168');
groupIt('220:220');
groupIt('229:233');
groupIt('22:26');
groupIt('28:32');
groupIt('39:50');
groupIt('75:100');
groupIt('139:140');
groupIt('142:143');
groupIt('145:146');
groupIt('148:149');
groupIt('151:152');
groupIt('155:156');
groupIt('158:159');
groupIt('161:162');
groupIt('164:165');
groupIt('167:168');
groupIt('40:44');
groupIt('46:50');
groupIt('76:77');
groupIt('79:85');
groupIt('87:88');
groupIt('91:92');
groupIt('94:96');
groupIt('98:100');
groupIt('140:140');
groupIt('143:143');
groupIt('146:146');
groupIt('149:149');
groupIt('152:152');
groupIt('156:156');
groupIt('159:159');
groupIt('162:162');
groupIt('165:165');
groupIt('168:168');
groupIt('80:85');
groupIt('95:96');
groupIt('99:100');
groupIt('81:85');

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().collapseAllRowGroups();
}

