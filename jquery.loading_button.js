(function($){

 	$.fn.extend({

		loading_icon:function(enabled)
		{
			return this.each(function() {

				if (enabled == true)
				{
					if (this.loading == true) return;
					this.loading = true;
					this.save_background = $(this).css('background-image');
					this.save_background_repeat = $(this).css('background-repeat');
					this.save_background_position = $(this).css('background-position');

					$(this).css('background-image','url(/loading_button/loading.gif)');
					$(this).css('background-repeat', 'no-repeat');

					var x = ($(this).width() - 16) / 2;
					var y = ($(this).height() - 11) / 2;

					$(this).css('background-position', x + 'px ' + y + 'px');

				}
				else
				{
					if (this.loading == undefined || this.loading == false) return;
					this.loading = false;
					$(this).html('');
					$(this).css('background-image',this.save_background);
					$(this).css('background-position', this.save_background_position);
					$(this).css('background-repeat', this.save_background_repeat);
				}

    		});

		},

		//pass the options variable to the function
 		loading_button: function(enabled,options) {


			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				image : '<img src="/loading_button/loading.gif">',
				word: ''
			}

			var options =  $.extend(defaults, options);

    		return this.each(function() {

				if (enabled == true)
				{
					if (this.loading === true) return;
					this.loading = true;

					this.placeholder = $('<div>');
					var previous_children = $(this).contents();
					for (var i=0;i<previous_children.length;i++) {
						$(this.placeholder).append(previous_children[i]);
					}

					if (this.loading_holder == undefined) {
						this.loading_holder = $('<span style="display:inline-block;width:100%;height:100%;" onclick="if (event.stopPropagation) event.stopPropagation();event.cancelBubble = true;return false;">'+options.image + ' ' + options.word+'</span>');
						$(this).append(this.loading_holder);
					}

					$(this.loading_holder).css('display', 'inline-block');
				}
				else
				{
					if (this.loading !== true) return;
					this.loading = false;
					$(this.loading_holder).css('display', 'none');

					if (this.placeholder == undefined) return;

					var previous_children = $(this.placeholder).contents();
					for (var i=0;i<previous_children.length;i++) {
						$(this).append(previous_children[i]);
					}

					delete this.placeholder;
				}

    		});
		},


		//pass the options variable to the function
 		loading_textbox: function(enabled, options) {


			return this.each(function() {

				if (enabled == true)
				{
					if (this.loading == true) return;
					this.loading = true;
					this.save_background = $(this).css('background-image');
					$(this).css('background-image','url(/loading_button/loading.gif)');
					$(this).css('background-position','98% 5px');
					$(this).css('background-repeat','no-repeat');

				}
				else
				{
					if (this.loading == undefined || this.loading == false) return;
					this.loading = false;

					$(this).css('background-image', this.save_background);
					$(this).css('background-position','');
					$(this).css('background-repeat','');
				}

    		});
    	}
	});

})(jQuery);

