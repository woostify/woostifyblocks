<?php

/**
 * Register a custom menu page.
 */
function wpdocs_register_my_custom_menu_page() {
	$svg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.774 16.1026L4.16752 7.49612L6.26305 5.4006L12.774 11.9116L18.9669 5.71808C17.3723 2.35483 13.9453 0.0288086 9.97537 0.0288086C6.00263 0.0288086 2.57399 2.35815 0.980466 5.72529L9.28 14.0248L7.20276 16.1026L0.0784267 8.97828C0.0457361 9.30629 0.0291138 9.63874 0.0291138 9.97506C0.0291138 15.4682 4.48224 19.9219 9.97537 19.9219C15.4685 19.9219 19.9222 15.4682 19.9222 9.97506C19.9222 9.6465 19.9056 9.32236 19.8745 9.0021L12.774 16.1026Z" fill="black"/>
    </svg>';

	add_menu_page(
		__( 'WoostifyBlocks settings', 'wcb' ),
		__( 'WoostifyBlocks', 'wcb' ),
		'manage_options',
		WCB_PATH . 'includes/settings-page.php',
		'',
		'data:image/svg+xml;base64,' . base64_encode( $svg ),
		6
	);
}
add_action( 'admin_menu', 'wpdocs_register_my_custom_menu_page' );
