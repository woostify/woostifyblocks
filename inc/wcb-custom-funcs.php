<?php
function wcb_var_dump($value)
{
    echo '<p style="color:red; font-size: 8px; padding: 50px 200px">';
    echo ('-----------start--wcb_var_dump-----------------');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    var_dump($value);
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo ('-----------end--wcb_var_dump-----------------');
    echo '</p>';
};

function vcb_var_export($value)
{
    echo '<pre style="color:red; font-size: 8px"><code>';
    echo ('-----------start--wcb_var_dump-----------------');
    echo ('-----------start--vcb_var_export-----------------');
    echo ('<br />');
    var_export($value);
    echo ('<br />');
    echo ('-----------end--vcb_var_export-----------------');
    echo '</code></pre>';
};
// 
