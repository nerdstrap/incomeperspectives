var masterSliderHelper = function () {

	return {
		setup: function () {
			var masterSlider = new MasterSlider();
			masterSlider.setup('masterslider', {
				width: 1024,
				height: 600,
				fullwidth: true,
				centerControls: false,
				speed: 20,
				view: 'flow',
				loop: true
			});
			masterSlider.control('arrows');
			masterSlider.control('bullets', {
				autohide: false
			});
		}
	};
}();
