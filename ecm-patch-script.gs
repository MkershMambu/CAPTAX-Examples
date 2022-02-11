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
groupIt('18:22');
groupIt('24:30');
groupIt('32:50');
groupIt('52:86');
groupIt('88:111');
groupIt('113:147');
groupIt('149:152');
groupIt('154:160');
groupIt('164:167');
groupIt('169:170');
groupIt('175:179');
groupIt('182:194');
groupIt('196:213');
groupIt('4:7');
groupIt('9:14');
groupIt('20:22');
groupIt('26:30');
groupIt('33:44');
groupIt('47:48');
groupIt('53:80');
groupIt('83:84');
groupIt('86:86');
groupIt('90:91');
groupIt('93:94');
groupIt('99:103');
groupIt('105:105');
groupIt('107:107');
groupIt('114:114');
groupIt('116:147');
groupIt('155:155');
groupIt('157:160');
groupIt('187:188');
groupIt('197:205');
groupIt('207:213');
groupIt('7:7');
groupIt('14:14');
groupIt('21:22');
groupIt('28:30');
groupIt('34:38');
groupIt('40:44');
groupIt('54:57');
groupIt('59:72');
groupIt('74:80');
groupIt('100:101');
groupIt('117:131');
groupIt('133:147');
groupIt('199:199');
groupIt('208:213');
groupIt('29:30');
groupIt('55:57');
groupIt('60:65');
groupIt('67:68');
groupIt('71:72');
groupIt('75:76');
groupIt('78:80');
groupIt('118:119');
groupIt('121:122');
groupIt('124:125');
groupIt('127:128');
groupIt('130:131');
groupIt('134:135');
groupIt('137:138');
groupIt('140:141');
groupIt('143:144');
groupIt('146:147');
groupIt('56:57');
groupIt('61:65');
groupIt('79:80');
groupIt('119:119');
groupIt('122:122');
groupIt('125:125');
groupIt('128:128');
groupIt('131:131');
groupIt('135:135');
groupIt('138:138');
groupIt('141:141');
groupIt('144:144');
groupIt('147:147');
groupIt('64:65');

}

