//=============================================================================
// Black Message Box
//=============================================================================

//=============================================================================
/*:
 * @plugindesc Enable a way to manually set the message window position.
 *
 * @author Black Mage
 *
 * @help
 * ============================================================================
 * How To Use
 * ============================================================================
 * Put this on script call to enable custom message box positioning.
 * 		black_custom_window = true
 * Set it to false to disable it.
 *
 * Put this on script call and change "VALUE" to set the X position of the 
 * message box.
 * 		black_custom_window_x = VALUE
 *
 * Put this on script call and change "VALUE" to set the Y position of the 
 * message box.
 * 		black_custom_window_y = VALUE
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.0 (2016 - 01 - 09)
 * - Initial Design
 */
//=============================================================================

black_custom_window = false;
black_custom_window_y = this._positionType * (Graphics.boxHeight - this.height) / 2;
black_custom_window_x = 0;

Window_Message.prototype.updatePlacement = function() {
    this._positionType = $gameMessage.positionType();
	if (!black_custom_window){
		this.y = this._positionType * (Graphics.boxHeight - this.height) / 2;
	} else {
		this.y = black_custom_window_y;
		this.x = black_custom_window_x;
	}
    this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
};

Window_NumberInput.prototype.updatePlacement = function() {
    var messageY = this._messageWindow.y;
    var spacing = 8;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = ((Graphics.boxWidth - this.width) / 2) - 100;
	this.y = 640
    //if (messageY >= Graphics.boxHeight / 2) {
    //    this.y = messageY - this.height - spacing;
    //} else {
    //    this.y = messageY + this._messageWindow.height + spacing;
    //}
};

Window_NumberInput.prototype.placeButtons = function() {
    var numButtons = this._buttons.length;
    var spacing = 16;
    var totalWidth = -spacing;
    for (var i = 0; i < numButtons; i++) {
        totalWidth += this._buttons[i].width + spacing;
    }
    var x = (this.width - totalWidth) / 2;
    for (var j = 0; j < numButtons; j++) {
        var button = this._buttons[j];
        button.x = x+200;
        button.y = 20//this.buttonY();
        x += button.width + spacing;
    }
};

