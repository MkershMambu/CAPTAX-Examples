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
groupIt('72:119');
groupIt('121:144');
groupIt('146:180');
groupIt('182:185');
groupIt('187:197');
groupIt('201:204');
groupIt('206:207');
groupIt('212:216');
groupIt('219:231');
groupIt('233:248');
groupIt('4:7');
groupIt('9:14');
groupIt('20:32');
groupIt('36:50');
groupIt('53:64');
groupIt('67:68');
groupIt('73:100');
groupIt('102:112');
groupIt('116:117');
groupIt('119:119');
groupIt('123:124');
groupIt('126:127');
groupIt('132:136');
groupIt('138:138');
groupIt('140:140');
groupIt('147:147');
groupIt('149:180');
groupIt('188:191');
groupIt('193:197');
groupIt('224:225');
groupIt('234:241');
groupIt('243:248');
groupIt('7:7');
groupIt('14:14');
groupIt('21:32');
groupIt('38:50');
groupIt('54:58');
groupIt('60:64');
groupIt('74:100');
groupIt('103:104');
groupIt('106:107');
groupIt('109:112');
groupIt('133:134');
groupIt('150:164');
groupIt('166:180');
groupIt('236:236');
groupIt('244:248');
groupIt('22:26');
groupIt('28:32');
groupIt('39:50');
groupIt('75:77');
groupIt('79:92');
groupIt('94:96');
groupIt('98:100');
groupIt('151:152');
groupIt('154:155');
groupIt('157:158');
groupIt('160:161');
groupIt('163:164');
groupIt('167:168');
groupIt('170:171');
groupIt('173:174');
groupIt('176:177');
groupIt('179:180');
groupIt('40:44');
groupIt('46:50');
groupIt('76:77');
groupIt('80:85');
groupIt('87:88');
groupIt('91:92');
groupIt('95:96');
groupIt('99:100');
groupIt('152:152');
groupIt('155:155');
groupIt('158:158');
groupIt('161:161');
groupIt('164:164');
groupIt('168:168');
groupIt('171:171');
groupIt('174:174');
groupIt('177:177');
groupIt('180:180');
groupIt('81:82');
groupIt('84:85');

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().collapseAllRowGroups();
}

