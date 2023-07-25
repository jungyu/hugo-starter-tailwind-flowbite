import 'flowbite';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import persist from '@alpinejs/persist';

// Set up and start Alpine.
(function() {
    // Register AlpineJS plugins.
    Alpine.plugin(intersect);
    Alpine.plugin(persist);
    
    // Start Alpine.
    Alpine.start();
})();