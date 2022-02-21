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
  groupIt('3:27');
groupIt('29:43');
groupIt('45:61');
groupIt('63:81');
groupIt('83:139');
groupIt('141:164');
groupIt('166:200');
groupIt('202:205');
groupIt('207:217');
groupIt('221:224');
groupIt('226:227');
groupIt('232:236');
groupIt('239:251');
groupIt('253:268');
groupIt('4:7');
groupIt('9:14');
groupIt('16:26');
groupIt('31:43');
groupIt('47:61');
groupIt('64:75');
groupIt('78:79');
groupIt('84:111');
groupIt('113:123');
groupIt('127:128');
groupIt('130:139');
groupIt('143:144');
groupIt('146:147');
groupIt('152:156');
groupIt('158:158');
groupIt('160:160');
groupIt('167:167');
groupIt('169:200');
groupIt('208:211');
groupIt('213:217');
groupIt('244:245');
groupIt('254:261');
groupIt('263:268');
groupIt('7:7');
groupIt('14:14');
groupIt('17:18');
groupIt('20:21');
groupIt('23:26');
groupIt('32:43');
groupIt('49:61');
groupIt('65:69');
groupIt('71:75');
groupIt('85:111');
groupIt('114:115');
groupIt('117:118');
groupIt('120:123');
groupIt('131:139');
groupIt('153:154');
groupIt('170:184');
groupIt('186:200');
groupIt('256:256');
groupIt('264:268');
groupIt('24:26');
groupIt('33:37');
groupIt('39:43');
groupIt('50:61');
groupIt('86:88');
groupIt('90:103');
groupIt('105:107');
groupIt('109:111');
groupIt('132:132');
groupIt('134:134');
groupIt('136:139');
groupIt('171:172');
groupIt('174:175');
groupIt('177:178');
groupIt('180:181');
groupIt('183:184');
groupIt('187:188');
groupIt('190:191');
groupIt('193:194');
groupIt('196:197');
groupIt('199:200');
groupIt('25:26');
groupIt('51:55');
groupIt('57:61');
groupIt('87:88');
groupIt('91:96');
groupIt('98:99');
groupIt('102:103');
groupIt('106:107');
groupIt('110:111');
groupIt('137:139');
groupIt('172:172');
groupIt('175:175');
groupIt('178:178');
groupIt('181:181');
groupIt('184:184');
groupIt('188:188');
groupIt('191:191');
groupIt('194:194');
groupIt('197:197');
groupIt('200:200');
groupIt('92:93');
groupIt('95:96');
groupIt('138:139');

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().collapseAllRowGroups();
}

