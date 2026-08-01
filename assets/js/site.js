/* Reveal-on-scroll. One orchestrated moment per section; hero plays on load. */
(function () {
  var items = document.querySelectorAll('.rise, .arrow');
  if (!items.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      seen.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  items.forEach(function (el) { seen.observe(el); });
})();

/* Types the hero wordmark one character at a time, caret trailing the write head.
   Leaves the markup untouched under prefers-reduced-motion. */
(function () {
  var el = document.querySelector('[data-typewriter]');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Flatten to characters, remembering which came from <em> so the 2 stays orange.
  var chars = [];
  Array.prototype.forEach.call(el.childNodes, function (node) {
    var isEm = node.nodeType === 1 && node.tagName === 'EM';
    Array.prototype.forEach.call(node.textContent || '', function (ch) {
      chars.push({ ch: ch, isEm: isEm });
    });
  });
  if (chars.length < 2) return;

  // The spans are decoration; screen readers read the label instead.
  el.setAttribute('aria-label', el.textContent.trim());
  el.textContent = '';

  var frag = document.createDocumentFragment();
  var spans = chars.map(function (c) {
    var span = document.createElement(c.isEm ? 'em' : 'span');
    span.className = 'type-char';
    span.textContent = c.ch;
    span.setAttribute('aria-hidden', 'true');
    frag.appendChild(span);
    return span;
  });

  el.appendChild(frag);

  // Wait for the display face, otherwise the first characters type in the
  // fallback and jump when Archivo arrives.
  var ready = document.fonts && document.fonts.ready
    ? document.fonts.ready
    : Promise.resolve();

  ready.then(function () {
    var i = 0;
    setTimeout(function tick() {
      // Done: leave the cursor on the last character so it blinks, then fades.
      if (i >= spans.length) return;
      if (i > 0) spans[i - 1].classList.remove('is-cursor');
      spans[i].classList.add('is-typed', 'is-cursor');
      i++;
      setTimeout(tick, 65 + (i % 3) * 18);
    }, 260);
  });
})();
