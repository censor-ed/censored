(function() {
  $(function() {
    new Vue({
      el: "#presets",
      data: {
        presets: []
      },
      created: function() {
        return $.getJSON("./presets.json", (function(_this) {
          return function(json) {
            return _this.$data.presets = json;
          };
        })(this));
      },
      methods: {
        toggle: function(e) {
          var i, len, preset, ref, results;
          ref = this._visiblePresets();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            preset = ref[i];
            results.push(preset.$set("checked", $(e.target).is(":checked")));
          }
          return results;
        },
        important: function(e) {
          var i, len, preset, ref, results;
          ref = this._visiblePresets();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            preset = ref[i];
            if (preset.important) {
              results.push(preset.$set("checked", $(e.target).is(":checked")));
            }
          }
          return results;
        },
        values: function() {
          var i, len, preset, ref, results;
          ref = this.$data.presets;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            preset = ref[i];
            if (preset.checked) {
              results.push(preset.regexp);
            }
          }
          return results;
        },
        focus: function() {
          $("#output").focus().select();
          return $("#decide").fadeOut();
        },
        unfocus: function() {
          return $("#decide").fadeIn();
        },
        truncate: function(strings, size) {
          if (strings.length > size) {
            return $.trim(strings).substring(0, size).trim(this) + "...";
          } else {
            return strings;
          }
        },
        _visiblePresets: function() {
          var checkbox, i, len, preset, ref, results, values;
          values = (function() {
            var i, len, ref, results;
            ref = $(":checkbox").toArray();
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              checkbox = ref[i];
              results.push($(checkbox).val());
            }
            return results;
          })();
          ref = this.$data.presets;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            preset = ref[i];
            if (values.indexOf(preset.regexp) > 0) {
              results.push(preset);
            }
          }
          return results;
        },
        checkedSize: function() {
          return this.values().length;
        },
        click: function(e) {
          return $(e.$el).find(":checkbox").click();
        },
        decide: function() {
          $("body, html").animate({
            scrollTop: $(document).height()
          }, 500);
          return this.focus();
        }
      }
    });
    $("#decide").css("left", ($("#presets").offset().left + $("#presets").width()) + "px");
    return $("#decide").css("top", ($("#presets").offset().top + 50) + "px");
  });

}).call(this);
