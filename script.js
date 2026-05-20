/* ─────────────────────────────────────────
   FIEND — script.js
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── SCROLL REVEAL ─── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─── NAV SHRINK ─── */
  const mainNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ─── HERO BG PARALLAX ─── */
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('zoomed'), 100);
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `scale(1.06) translateY(${window.scrollY * 0.18}px)`;
    });
  }

  /* ─── MOBILE NAV ─── */
  const hamburger   = document.querySelector('.hamburger');
  const mobileNav   = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.add('open');
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  const closeMenu = () => {
    hamburger && hamburger.classList.remove('open');
    mobileNav && mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-mobile a').forEach(l => l.addEventListener('click', closeMenu));

  /* ─── LIGHTBOX ─── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src || img.getAttribute('data-src');
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  /* ─── INFO MODAL ─── */
  const modal          = document.getElementById('info-modal');
  const modalClose     = document.getElementById('modal-close');
  const modalOverlay   = document.getElementById('modal-overlay');
  const modalIcon      = document.getElementById('modal-icon');
  const modalTitle     = document.getElementById('modal-title');
  const modalSubtitle  = document.getElementById('modal-subtitle');
  const modalBody      = document.getElementById('modal-body');
  const modalTag       = document.getElementById('modal-tag');

  function openModal(data) {
    modalIcon.textContent     = data.icon;
    modalTitle.textContent    = data.title;
    modalSubtitle.textContent = data.subtitle || '';
    modalBody.innerHTML       = data.body;
    modalTag.textContent      = data.tag || '';
    modalTag.style.color      = data.tagColor || 'var(--blood)';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalClose)   modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeLightbox(); }
  });

  /* ─── FEATURE CARD DATA ─── */
  const featureData = {
    'music-driven': {
      icon: '🎵',
      tag: '// Core Mechanic',
      tagColor: 'var(--blood)',
      title: 'Music-Driven Horror',
      subtitle: 'Sound is not atmosphere — it is the weapon.',
      body: `
        <p>In FIEND, the music is not background ambience. Every note you hear tells you where an enemy is, what state they're in, and what you must do to survive. Each band member of <strong>[KIELZOG]</strong> broadcasts their presence through their instrument — learn the rhythm, or die to it.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon">🥁</span>
            <div>
              <strong>DD the Drummer</strong>
              <p>His beat is your alert system. The faster the kick pattern, the closer he is. Make noise and he locks on. Go silent and his rhythm falters — he loses you.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎸</span>
            <div>
              <strong>Shadow Puzzles</strong>
              <p>Certain rooms require you to cast the right shadow at the right moment — timed to a musical beat. Miss the beat, and the door stays shut. The puzzle isn't spatial — it's rhythmic.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🔇</span>
            <div>
              <strong>Sound Manipulation</strong>
              <p>You can use in-world objects to create distraction noise, silence sections of the venue, or trigger audio cues that affect enemy behavior. Headphones are not optional — they're your survival tool.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎶</span>
            <div>
              <strong>Diegetic Design</strong>
              <p>The music you hear in menus and cutscenes is the same music KIELZOG plays in the world. There is no separation between score and gameplay — <strong>[FIEND]</strong> controls both.</p>
            </div>
          </div>
        </div>
      `
    },
    'claymation': {
      icon: '🎭',
      tag: '// Visual Direction',
      tagColor: '#a855f7',
      title: 'Claymation Aesthetic',
      subtitle: 'Horror that moves wrong — on purpose.',
      body: `
        <p>FIEND draws its visual DNA from stop-motion and claymation horror — most directly the work of <strong>LAIKA studios</strong> (Coraline, ParaNorman, Kubo). The animatronic band <strong>[KIELZOG]</strong> doesn't move smoothly. They move with that specific uncanny wrongness that makes stop-motion unsettling at a primal level.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon">🪆</span>
            <div>
              <strong>Imperfect Motion</strong>
              <p>KIELZOG's animations are deliberately stuttered — not due to low frame rate, but as a design choice. Each band member has unique movement patterns that feel handmade and slightly off, amplifying dread through aesthetic dissonance.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎪</span>
            <div>
              <strong>Two Visual Modes</strong>
              <p>Band members switch between a "Normal" state and a "Claymation" state — visible in the concept art. In Claymation mode, their geometry warps, textures shift, and movement becomes even more erratic, signalling heightened danger.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🏚️</span>
            <div>
              <strong>Environmental Language</strong>
              <p>The entertainment center itself shows claymation influence — warped proportions, tactile-feeling surfaces, hand-crafted decay. Walls that look like they were pressed by thumbs. Floors that feel like painted plaster.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎬</span>
            <div>
              <strong>LAIKA Inspiration</strong>
              <p>LAIKA's work proved that stop-motion can carry genuine adult horror. FIEND applies that same insight to interactive media — using claymation's inherent wrongness as a deliberate psychological tool against the player.</p>
            </div>
          </div>
        </div>
      `
    },
    'liminal': {
      icon: '🎪',
      tag: '// World Design',
      tagColor: 'var(--cyan)',
      title: 'Liminal Spaces',
      subtitle: 'Places that feel like they should be empty. They aren\'t.',
      body: `
        <p>Liminality — the psychological discomfort of being in a transitional, between-state space — is FIEND's core environmental language. The family entertainment center was designed to be full of people, music, and light. Now it is none of those things. The architecture remembers what it was. That memory is the horror.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon">🏛️</span>
            <div>
              <strong>The Architecture of Wrong</strong>
              <p>Corridors that are too long. Rooms that lead back to themselves. Staircases with no logical destination. FIEND's spaces are built to feel structurally impossible — as if <strong>[FIEND]</strong> has been reshaping the building from the inside.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🔊</span>
            <div>
              <strong>Sound-Reactive Geometry</strong>
              <p>Rooms physically change based on audio state. Doors open when specific frequencies play. Walls shift when the bass reaches a threshold. The space is not static — it breathes in time with <strong>[KIELZOG]</strong>'s performance.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎠</span>
            <div>
              <strong>Abandoned Entertainment</strong>
              <p>Arcade machines with screens that still glow. Ball pits drained but still smelling of plastic. Birthday banners faded but still hanging. Every detail is a ghost of joy — the horror is in the contrast between what was and what is now.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🌀</span>
            <div>
              <strong>The Loop Structure</strong>
              <p>The Routine Ending demonstrates FIEND's liminal logic at its purest: you go to sleep, you wake up, and you are back. The exit may not exist. The entertainment center may be the only space that remains.</p>
            </div>
          </div>
        </div>
      `
    },
    'soundscape': {
      icon: '🔊',
      tag: '// Audio System',
      tagColor: 'var(--neon-green)',
      title: 'Reactive Soundscape',
      subtitle: 'The music knows where you are. Always.',
      body: `
        <p>FIEND's audio system is built on two synchronized layers that respond to every player action, enemy state, and story beat in real time. Built in Unreal Engine 5's audio framework, this is not a playlist — it is a living instrument being played by <strong>[FIEND]</strong> itself.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon">🤖</span>
            <div>
              <strong>Digital Entity Layer</strong>
              <p>The non-diegetic synthesizer layer — the "FIEND signal." This layer warps, distorts, and modulates in response to story tension. When FIEND's influence is strong, the signal corrupts. When you gain ground, it stabilises — slightly.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎙️</span>
            <div>
              <strong>KIELZOG Layer</strong>
              <p>Each band member is a spatialised 3D audio node. Drums come from one direction. Bass from another. Their volume, pitch, and rhythm all shift based on proximity, state, and FIEND's real-time parameter control. You hear where they are before you see them.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🔄</span>
            <div>
              <strong>Parameter-Driven Performance</strong>
              <p>FIEND controls KIELZOG's performance via tempo, filtering, intensity, and rhythmic variation. An angry KIELZOG plays faster and louder. A hunting KIELZOG plays sparse and erratic. The music is enemy AI made audible.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon">🎧</span>
            <div>
              <strong>Why Headphones Are Required</strong>
              <p>Full spatial audio is critical to gameplay. The left/right panning of individual instruments tells you which corridor an enemy is approaching from. Playing without headphones removes your primary survival sense — the game is designed around this.</p>
            </div>
          </div>
        </div>
      `
    }
  };

  /* ─── ENDING DATA ─── */
  const endingData = {
    'ending-good': {
      icon: '✓',
      tag: '// Good Ending',
      tagColor: 'var(--neon-green)',
      title: 'Home Sweet Home',
      subtitle: 'You made it. But FIEND is still out there.',
      body: `
        <p>You solved the puzzles. You survived KIELZOG. You freed <strong>[VRIENDJE]</strong>. The cat led you to the exit and together you escaped the entertainment center into the cold outside air.</p>
        <p>You wake up in your own bed. Morning light. The nightmare is over. You look down — and the small black cat is curled at your feet, purring. She is real. You got her out.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon" style="color:var(--neon-green)">🐱</span>
            <div>
              <strong>VRIENDJE is Safe</strong>
              <p>The cat — [VRIENDJE], which means "little friend" in Dutch — was the real objective all along. She was trapped inside, used as bait by FIEND. Saving her is the moral victory of the vertical slice.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon" style="color:var(--neon-green)">🏠</span>
            <div>
              <strong>A Satisfying Closure — With a Hook</strong>
              <p>The good ending feels earned and complete within the vertical slice. But the final image — you alone in your apartment, sunlight, cat sleeping — carries an undertone. You survived this encounter. FIEND did not follow. <em>Yet.</em></p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon" style="color:var(--neon-green)">🎯</span>
            <div>
              <strong>Requirements</strong>
              <p>Observe the music carefully. Solve the environmental puzzles using audio cues. Face KIELZOG — don't flee. Use each band member's weakness against them strategically. Disable them, find VRIENDJE, and reach the exit.</p>
            </div>
          </div>
        </div>
      `
    },
    'ending-caught': {
      icon: '✗',
      tag: '// Bad Ending',
      tagColor: '#ff6b35',
      title: 'Caught by KIELZOG',
      subtitle: 'The loop resets. You are back where you started.',
      body: `
        <p>You failed to escape or counter KIELZOG and FIEND. The band closed in. The music became deafening. Then — nothing. A haunting death animation. Then you open your eyes in your apartment again. Was it a dream? It wasn't. <strong>[FIEND]</strong> sent you back.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon" style="color:#ff6b35">🔁</span>
            <div>
              <strong>The Loop Resets</strong>
              <p>This bad ending deliberately mirrors the Routine Ending in structure — you wake up in your apartment — but carries different weight. You remember. The nightmare is not gone. FIEND is playing a longer game.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon" style="color:#ff6b35">🎭</span>
            <div>
              <strong>The Death Animation</strong>
              <p>Each band member has a unique capture animation. DD engulfs you in percussion cables. B-Backer pulls you into his shadow. Graafs overwhelms you with sonic feedback. Veil simply holds your gaze until you shatter.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon" style="color:#ff6b35">📖</span>
            <div>
              <strong>Narrative Function</strong>
              <p>This ending reinforces the loop structure central to FIEND's full story. Failure is not the end — it is another iteration. The player is a recurring visitor to FIEND's world, whether they want to be or not.</p>
            </div>
          </div>
        </div>
      `
    },
    'ending-stairs': {
      icon: '✗',
      tag: '// Bad Ending',
      tagColor: '#ff6b35',
      title: 'Endless Stairs',
      subtitle: 'You are becoming one with FIEND.',
      body: `
        <p>You fled. You didn't fight — you ran, descending into the basement beneath the entertainment center. But the stairs kept going. The walls closed in. The music dropped to a single, low, unending drone. And reality faded.</p>
        <p>This is FIEND's darkest ending. Not death — absorption. You don't escape. You become part of it.</p>

        <div class="modal-points">
          <div class="modal-point">
            <span class="modal-point-icon" style="color:#ff6b35">🌀</span>
            <div>
              <strong>The Absorption Mechanic</strong>
              <p>FIEND spreads through audio cables — organic, parasitic. When you descend far enough into its domain without resistance, you stop being a visitor and start becoming infrastructure. The final images show cables growing through your silhouette.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon" style="color:#ff6b35">🎵</span>
            <div>
              <strong>The Drone</strong>
              <p>The music in this ending is a single, unresolved bass note — held indefinitely. No rhythm. No melody. Just FIEND's frequency, unfiltered. It is the most musically disturbing moment in the vertical slice.</p>
            </div>
          </div>
          <div class="modal-point">
            <span class="modal-point-icon" style="color:#ff6b35">🏚️</span>
            <div>
              <strong>Thematic Weight</strong>
              <p>This ending is about complicity through inaction. You didn't lose to KIELZOG — you avoided them and lost to FIEND itself. Running from horror doesn't make it go away. In FIEND's world, avoidance is surrender.</p>
            </div>
          </div>
        </div>
      `
    }
  };

  /* ─── BIND FEATURE CARDS ─── */
  document.querySelectorAll('.feat[data-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(featureData[card.dataset.modal]));
  });

  /* ─── BIND ENDING CARDS ─── */
  document.querySelectorAll('.ending-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(endingData[card.dataset.modal]));
  });

  /* ─── ACTIVE NAV HIGHLIGHT ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(s => sectionObserver.observe(s));

  /* ─── RANDOM GLITCH ─── */
  const glitchEls = document.querySelectorAll('.band-card-name, .stat-num, .hero-title-red, .nav-logo-text');
  setInterval(() => {
    const el = glitchEls[Math.floor(Math.random() * glitchEls.length)];
    if (!el) return;
    const orig = el.style.textShadow;
    el.style.textShadow = '3px 0 #00e5ff, -3px 0 #cc1111';
    el.style.transform = `translateX(${Math.random() > 0.5 ? 3 : -3}px)`;
    setTimeout(() => { el.style.textShadow = orig; el.style.transform = ''; }, 80);
  }, 2600);

  /* ─── WHOLE-PAGE FLICKER ─── */
  setInterval(() => {
    document.body.style.filter = 'brightness(0.86)';
    setTimeout(() => { document.body.style.filter = ''; }, 55);
  }, 12000);

});