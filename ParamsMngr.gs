function readParams() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName(SubscriberParams);
}

function readDebugChat() {
  return (parseInt(readParams().getRange("B4").getValue()));
}

function lastVerse() {
  return (parseInt(readParams().getRange("B2").getValue()));
}
function lastSentUsers() {
  return (parseInt(readParams().getRange("B3").getValue()));
}

function setlastVerse(num) {
  return (parseInt(readParams().getRange("B2").setValue(num)));
}
function setlastSentUsers(num) {
  readParams().getRange("B3").setValue(num);
}

function getTelegramSubcribers() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName("Subscribers").getDataRange().getNumRows();
}

function getTwitterFollowers() {
  return (parseInt(readParams().getRange("B5").getValue()));
}

function setFBLikes(num) {
  readParams().getRange("B14").setValue(num);
}

function getFacebookLikes() {
  return (parseInt(readParams().getRange("B6").getValue()));
}

function getAllUsers() {
  return readParams().getRange("B16").getValue();
}

function getLiturgicDay() {
  return JSON.parse(readParams().getRange("B7").getValue());
}

function lastVerseFull() {
  return readParams().getRange("B8").getValue();
}
//dayFull
function getDayFullES() {
  return readParams().getRange("B18").getValue();
}

function getWeekMsg () {
  return readParams().getRange("B10").getValue();
}

function getWeekMsgES () {
  return readParams().getRange("B17").getValue();
}

//compietaMsg
function getCompietaFull() {
  return readParams().getRange("B11").getValue();
}

function getCompietaImage() {
  return readParams().getRange("B12").getValue();
}

function lastVerseFullES() {
  return readParams().getRange("B13").getValue();
}