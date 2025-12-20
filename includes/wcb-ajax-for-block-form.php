<?php
add_action('wp_ajax_wcbform_action', 'wcb_form_action_init');
add_action('wp_ajax_nopriv_wcbform_action', 'wcb_form_action_init');
function wcb_form_action_init()
{

    $form_data = $_POST['formData'] ?? [];
    $mail_info = $_POST['mailInfo'] ?? [];
    // TEST
    // wp_send_json_success('Chào mừng bạn đến với ' . $mail_info['subject'] . $mail_info['to'] . $mail_info['cc'] . $mail_info['bcc']);
    // wp_die();
    // 
    $to = $mail_info['to'];
    $subject = $mail_info['subject'];
    $body = '<html><body><h1>Hello World!</h1></body></html>';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $headers[] = 'Cc: ' . $mail_info['cc'];
    $headers[] = 'Bcc: ' . $mail_info['bcc'];

    // BODY
    ob_start();
?>
    <html>

    <body>
        <?php foreach ($form_data as &$field) : ?>
            <p>
                <strong><?php echo esc_html($field["name"]); ?></strong> - <span> <?php echo esc_html($field["value"]); ?></span>
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

add_action('wp_ajax_wcb_get_product_gallery', 'wcb_get_product_gallery_init');
add_action('wp_ajax_nopriv_wcb_get_product_gallery', 'wcb_get_product_gallery_init');
function wcb_get_product_gallery_init()
{
    $product_id = $_POST['product_id'] ?? 0;
    if (!$product_id) {
        wp_send_json_error('Invalid product ID');
        wp_die();
    }

    $product = wc_get_product($product_id);
    if (!$product) {
        wp_send_json_error('Product not found');
        wp_die();
    }

    $gallery_images = $product->get_gallery_image_ids();
    if (empty($gallery_images)) {
        wp_send_json_success(['html' => '']);
        wp_die();
    }

    ob_start();
    foreach ($gallery_images as $image_id) {
        $image_url = wp_get_attachment_image_url($image_id, 'full');
        if ($image_url) {
            echo '<img src="' . esc_url($image_url) . '" alt="' . esc_attr($product->get_name()) . '" />';
        }
    }
    $html = ob_get_clean();

    wp_send_json_success(['html' => $html]);
    wp_die();
}
