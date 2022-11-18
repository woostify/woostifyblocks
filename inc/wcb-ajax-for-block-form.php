<?php
add_action('wp_ajax_thongbao', 'thongbao_init');
add_action('wp_ajax_nopriv_thongbao', 'thongbao_init');
function thongbao_init()
{
    //do bên js để dạng json nên giá trị trả về dùng phải encode
    $form_data = (isset($_POST['website'])) ? esc_attr($_POST['formData']) : '';
    wp_send_json_success('Chào mừng bạn đến với ' . $form_data);
    die(); //bắt buộc phải có khi kết thúc
}
