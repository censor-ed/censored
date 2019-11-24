(function() {
  $(function() {
    return new Vue({
      el: "#app",
      data: {
        filterText: "",
        presets: []
      },
      created: function() {
        return $.getJSON("./application.json", (function(_this) {
          return function(json) {
            var filter, i, len, results;
            results = [];
            for (i = 0, len = json.length; i < len; i++) {
              filter = json[i];
              filter.checked = false;
              results.push(_this.presets.push(filter));
            }
            return results;
          };
        })(this));
      },
      methods: {
        check: function(filter) {
          return filter.checked = !filter.checked;
        },
        toggle: function() {
          var filter, i, len, ref, results;
          ref = this._visiblePresets();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            filter = ref[i];
            results.push(filter.checked = !filter.checked);
          }
          return results;
        },
        important: function() {
          var filter, i, len, ref, results;
          ref = this._visiblePresets();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            filter = ref[i];
            if (filter.important) {
              results.push(filter.checked = !filter.checked);
            }
          }
          return results;
        },
        values: function() {
          var i, len, preset, ref, results;
          ref = this.presets;
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
        tags: function(filter) {
          return filter.tags.join(" ");
        }
      }
    });
  });

}).call(this);
