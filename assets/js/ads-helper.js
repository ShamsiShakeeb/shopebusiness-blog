(function () {
  // Helper: observe ad slots and add a `data-amanah-visible` attribute to let the ad lib initialize them.
  const slots = document.querySelectorAll('.amanah-ad-slot');
  if ('IntersectionObserver' in window && slots.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slot = entry.target;
          // If the ad lib looks for element presence, marking it visible helps; if it requires explicit init,
          // you could append a small script or call the vendor API here.
          slot.setAttribute('data-amanah-visible', '1');
          obs.unobserve(slot);
        }
      });
    }, { rootMargin: '200px' });

    slots.forEach(s => io.observe(s));
  } else {
    // Fallback: mark all visible immediately
    slots.forEach(s => s.setAttribute('data-amanah-visible', '1'));
  }

  // If mobile sticky banner is active, add bottom padding to main content so it isn't covered.
  function adjustBodyPaddingForSticky() {
    const sticky = document.querySelector('.ad-mobile-sticky');
    if (!sticky) return;
    const isStickyVisible = window.getComputedStyle(sticky).display !== 'none';
    if (isStickyVisible) {
      // try to measure the rendered height of the ad slot (if not yet measured, estimate 50px)
      const height = sticky.offsetHeight || 50;
      const content = document.querySelector('main') || document.body;
      // add only when not already added
      if (!content.classList.contains('has-mobile-ad-padding')) {
        content.style.paddingBottom = (parseFloat(getComputedStyle(content).paddingBottom) || 0) + height + 'px';
        content.classList.add('has-mobile-ad-padding');
      }
    } else {
      const content = document.querySelector('main') || document.body;
      if (content.classList.contains('has-mobile-ad-padding')) {
        content.style.paddingBottom = '';
        content.classList.remove('has-mobile-ad-padding');
      }
    }
  }

  // Initial adjust and on resize/orientation change
  window.addEventListener('load', adjustBodyPaddingForSticky);
  window.addEventListener('resize', adjustBodyPaddingForSticky);
  window.addEventListener('orientationchange', adjustBodyPaddingForSticky);
})();
