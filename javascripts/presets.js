(function() {
  $(function() {
    return new Vue({
      el: "#presets",
      methods: {
        toggle: function(e) {
          $(".preset").prop("checked", $(e.target).is(":checked"));
          return this.update();
        },
        update: function() {
          return $("#output").val(this._values().join("\n"));
        },
        focus: function(e) {
          return $(e.target).select();
        },
        _values: function() {
          var checked, i, len, ref, results;
          ref = $(":checked").toArray();
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            checked = ref[i];
            if ($(checked).val() !== "on") {
              results.push($(checked).val());
            }
          }
          return results;
        }
      }
    });
  });

}).call(this);
