document.addEventListener('DOMContentLoaded', () => {
    // Modal Functions
    function openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Make openModal function global so onclick can access it
    window.openModal = openModal;

    // Close modal when clicking the X button
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });

    // Close modal when clicking outside the content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal);
            });
        }
    });

    // Optional: Add click sound effect (you can remove this if you don't want sound)
    document.querySelectorAll('.expression').forEach(expression => {
        expression.addEventListener('click', function() {
            // Add a subtle click effect
            this.style.transform = 'translate(-50%, -50%) scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Optional: Enhanced hover effects
    document.querySelectorAll('.expression').forEach(expression => {
        expression.addEventListener('mouseenter', function() {
            this.style.zIndex = '100';
        });
        
        expression.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Optional: Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        // Press 1-6 to open corresponding modals
        const keyMap = {
            '1': 'modalMe',
            '2': 'modalDo', 
            '3': 'modalHate',
            '4': 'modalHobbies',
            '5': 'modalCS',
            '6': 'modalFacts'
        };
        
        if (keyMap[e.key] && !document.querySelector('.modal.active')) {
            openModal(keyMap[e.key]);
        }
    });

    // Optional: Smooth scrolling prevention during animations
    let isAnimating = false;
    
    document.querySelectorAll('.expression').forEach(expression => {
        expression.addEventListener('animationstart', () => {
            isAnimating = true;
        });
        
        expression.addEventListener('animationend', () => {
            isAnimating = false;
        });
    });

    // Console log for debugging
    console.log('KARLO Landing Page Script Loaded Successfully!');
    console.log('Modal system initialized');
    console.log('Press keys 1-6 to open modals, ESC to close');
});