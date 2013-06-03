(function(window, undefined) {
  console.log('Loading repl plugin');

  var Repl = function(cockpit) {
    $('.header-container').after('<div class="repl" id="repl" height="100"></div>');
    this.controller = $('#repl').console({
      promptLabel: 'Drone> ',
      commandValidate: this.commandValidate_.bind(this),
      commandHandle: this.commandHandle_.bind(this),
      autofocus: true,
      animateScroll: true,
      promptHistory: false
    });
  };

  Repl.prototype.commandValidate_ = function(line) {
    if (line == "") return false;
    else return true;
  };

  Repl.prototype.commandHandle_ = function(line) {
    try {
      var ret = eval(line);
      if (typeof ret != 'undefined')
        return ret.toString();
      else
        return true;
    }
    catch (err) {
      return false;
      return err.toString();
    }
   };

  window.Cockpit.plugins.push(Repl);
}(window, undefined));
