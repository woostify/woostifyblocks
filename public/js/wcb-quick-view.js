jQuery(document).on('mouseenter', '.product-quick-view-btn', function () {
    const $btn = jQuery(this);
    const productId = $btn.data('product_id');

    if ($btn.data('loaded')) return;

    jQuery.post({
        action: 'wcb_get_product_gallery',
        product_id: productId,
    }, function (res) {
        $btn.closest('.wcb-products__product')
            .find('.wcb-quick-view-hover-gallery')
            .html(res.html);

        tns({
            container: '.wcb-quick-view-hover-gallery',
            items: 1,
            autoplay: true,
        });

        $btn.data('loaded', true);
    });
});

// Function to initialize quick view slider
function initQuickViewSlider() {
    if (typeof tns !== 'undefined' && document.querySelector('#quick-view-gallery')) {
        tns({
            container: '#quick-view-gallery',
            items: 1,
            autoplay: false, // Disable autoplay for manual control
            controls: true,
            controlsText: ['<', '>'],
            nav: true,            loop: false,            autoplayButtonOutput: false,
        });
    }
}

// Initialize on document ready
jQuery(document).ready(function() {
    initQuickViewSlider();
});

// Also initialize when modal is shown (assuming modal is added dynamically)
jQuery(document).on('click', '.product-quick-view-btn', function() {
    // Assuming the modal is shown here, initialize slider after a short delay
    setTimeout(initQuickViewSlider, 500); // Increase delay
});

// Use MutationObserver to detect when #quick-view-gallery is added to DOM
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.id === 'quick-view-gallery' || node.querySelector('#quick-view-gallery')) {
                        setTimeout(initQuickViewSlider, 100);
                    }
                }
            });
        }
    });
});