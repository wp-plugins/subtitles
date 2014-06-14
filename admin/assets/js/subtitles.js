/**
 * Subtitles plugin JavaScript
 *
 * @since 1.0.0
 */
(function( $, undefined ){
	/**
	 * Presentational JS which fires on DOM load
	 *
	 * @since 1.0.0
	 */
	function documentScripts() {
		/**
		 * Toggle screen-reader-text class on the subtitle
		 * input field. When a user loads a new post page,
		 * there will be input field placeholder text that
		 * reads "Enter subtitle here". When the user clicks
		 * the subtitle input field, then the text will have
		 * the class screen-reader-text added to it so that
		 * it's no longer visible. If the user edits a pre-existing
		 * post subtitle and removes it altogether, then the
		 * class screen-reader-text will also be added to it.
		 *
		 * @since 1.0.0
		 */
		$( '#subtitle' ).each( function() { // cribbed from WordPress' dashboard.js
			var input  = $( this ), // subtitle input
				prompt = $( '#' + this.id + '-prompt-text' ); // the subtitle label

			if ( '' === this.value ) { // if the input is blank on page load then show helper text
				prompt.removeClass( 'screen-reader-text' );
			}

			prompt.click( function() { // hide the helper text when the subtitle input label is clicked on
				$( this ).addClass( 'screen-reader-text' );
				input.focus();
			} );

			input.focus( function() { // hide the helper text when the subtitle input is clicked on
				prompt.addClass( 'screen-reader-text' );
			});

			input.blur( function() { // when input has lost focus and it's empty show helper text
				if ( '' === this.value ) {
					prompt.removeClass( 'screen-reader-text' );
				}
			});
		});
	}

	$( document ).ready( documentScripts );
})( jQuery );