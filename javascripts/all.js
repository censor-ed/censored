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
        focus: function(e) {
          return $(e.target).select();
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
        }
      }
    });
    $("#go-to-top").hide();
    $("#go-to-top").on("click", function() {
      return $("body, html").animate({
        scrollTop: 0
      }, 500);
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 5) {
        return $("#go-to-top").fadeIn();
      } else {
        return $("#go-to-top").fadeOut();
      }
    });
    $("#go-to-bottom").on("click", function() {
      return $("body, html").animate({
        scrollTop: $(document).height()
      }, 500);
    });
    return $(window).scroll(function() {
      if (($(document).height() - ($(this).height() + $(this).scrollTop())) / $(this).height() === 0) {
        return $("#go-to-bottom").fadeOut();
      } else {
        return $("#go-to-bottom").fadeIn();
      }
    });
  });

}).call(this);
