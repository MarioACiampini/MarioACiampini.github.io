// Research illustrations: coupled-oscillator motion and off-screen pausing.
// Loaded on every page; does nothing where there are no illustrations.
(function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Coupled oscillators: x1 = A cos(Δt) cos(ωt), x2 = A sin(Δt) sin(ωt). Energy beats from one particle to the other.
    // 10.5 fast oscillations per 8 s cycle so the loop closes with matching position and velocity.
    var p1 = document.querySelector('.ic-p1'), p2 = document.querySelector('.ic-p2'), link = document.querySelector('.ic-coupling');
    if (p1 && p2 && !reduce && p1.animate) {
      var N = 240, A = 9, f1 = [], f2 = [], fl = [];
      for (var i = 0; i <= N; i++) {
        var u = i / N, d = Math.PI * u, w = 2 * Math.PI * 10.5 * u;
        f1.push({ transform: 'translate(' + (A * Math.cos(d) * Math.cos(w)).toFixed(2) + 'px, 0)' });
        f2.push({ transform: 'translate(' + (A * Math.sin(d) * Math.sin(w)).toFixed(2) + 'px, 0)' });
        fl.push({ opacity: (0.25 + 0.75 * Math.abs(Math.sin(2 * d))).toFixed(3) });
      }
      var o = { duration: 8000, iterations: Infinity, easing: 'linear' };
      p1.animate(f1, o); p2.animate(f2, o); link.animate(fl, o);
    }
    // Pause the illustrations while they are off-screen.
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          e.target.getAnimations({ subtree: true }).forEach(function (a) { e.isIntersecting ? a.play() : a.pause(); });
        });
      });
      document.querySelectorAll('.anim').forEach(function (el) { io.observe(el); });
    }
  })();
