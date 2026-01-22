<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
add_action('wp_ajax_wcbform_action', 'boostify_blocks_form_action_init');
add_action('wp_ajax_nopriv_wcbform_action', 'boostify_blocks_form_action_init');
function boostify_blocks_form_action_init()
{

    // Verify nonce to ensure the request originated from our site.
    if (
        ! isset($_POST['nonce']) ||
        ! check_ajax_referer('wcb_form_action_nonce', 'nonce', false)
    ) {
        wp_send_json_error(array('message' => __('Invalid security token.', 'boostify-blocks')), 400);
        wp_die();
    }

    // Normalize and sanitize incoming data.
    $post_data     = wp_unslash( $_POST );
    $raw_form_data = isset($post_data['formData']) && is_array($post_data['formData']) ? $post_data['formData'] : array();
    $raw_mail_info = isset($post_data['mailInfo']) && is_array($post_data['mailInfo']) ? $post_data['mailInfo'] : array();

    $form_data = array();
    foreach ($raw_form_data as $field) {
        if (! is_array($field)) {
            continue;
        }
        $name  = isset($field['name']) ? sanitize_text_field($field['name']) : '';
        $value = isset($field['value']) ? wp_kses_post($field['value']) : '';

        $form_data[] = array(
            'name'  => $name,
            'value' => $value,
        );
    }

    $mail_info = array(
        'to'      => isset($raw_mail_info['to']) ? sanitize_email($raw_mail_info['to']) : '',
        'subject' => isset($raw_mail_info['subject']) ? sanitize_text_field($raw_mail_info['subject']) : '',
        'cc'      => isset($raw_mail_info['cc']) ? sanitize_email($raw_mail_info['cc']) : '',
        'bcc'     => isset($raw_mail_info['bcc']) ? sanitize_email($raw_mail_info['bcc']) : '',
    );

    $to = $mail_info['to'];
    $subject = $mail_info['subject'];
    $body = '<html><body><h1>Hello World!</h1></body></html>';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    if ( ! empty($mail_info['cc']) ) {
        $headers[] = 'Cc: ' . $mail_info['cc'];
    }
    if ( ! empty($mail_info['bcc']) ) {
        $headers[] = 'Bcc: ' . $mail_info['bcc'];
    }

    // BODY
    ob_start();
?>
    <html>

    <body>
        <?php foreach ($form_data as &$field) : ?>
            <p>
                <strong><?php echo esc_html( sanitize_text_field( $field['name'] ?? '' ) ); ?></strong>
                -
                <span><?php echo esc_html( sanitize_text_field( $field['value'] ?? '' ) ); ?></span>
            </p>
        <?php endforeach; ?>
    </body>

    </html>
<?php
    $body = ob_get_contents();
    ob_end_clean();
    // END BODY
    if (!empty($to)) {
        wp_mail($to, $subject, $body, $headers);
    }

    wp_send_json_success('OK');
    wp_die();
}
