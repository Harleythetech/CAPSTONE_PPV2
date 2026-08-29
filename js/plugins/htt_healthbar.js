/*:
 * @plugindesc Custom compact vertical Map Status HUD for Grade 3 Tutorial
 * @author Custom
 */
(function() {
  var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
  Scene_Map.prototype.createAllWindows = function() {
    _Scene_Map_createAllWindows.call(this);
    if (this._statusWindow) {
      var w = this._statusWindow;
      w.x = 16;
      w.y = 16;
      w.width = 240;
      w.height = 190;
      w.createContents();
      w.maxItems = function() { return $gameParty.battleMembers().length; };
      w.maxCols = function() { return 1; };
      w.drawItem = function(i) {
        var a = $gameParty.battleMembers()[i];
        if (!a) return;
        var y = i * 78;
        var bw = 195;
        this.contents.fontSize = 18;
        this.changeTextColor(this.systemColor());
        this.drawText(a.name(), 0, y, bw);
        this.contents.fontSize = 14;
        this.drawActorHp(a, 0, y + 22, bw);
        this.drawActorMp(a, 0, y + 46, bw);
        this.resetFontSettings();
      };
    }
  };
})();