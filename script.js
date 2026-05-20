/* ─────────────────────────────────────────
   FIEND — script.js
───────────────────────────────────────── */

/* ══════════════════════════════════════
   ALL MODAL CONTENT
══════════════════════════════════════ */
const MODAL_DATA = {

  'music-driven': {
    icon: '🎵', tag: '// Core Mechanic', tagColor: '#cc1111',
    title: 'Music-Driven Horror',
    subtitle: 'Sound is not atmosphere — it is the weapon.',
    body: `
      <p>In FIEND, the music is not background ambience. Every note tells you where an enemy is, what state they're in, and what you must do to survive. Each band member of <strong>[KIELZOG]</strong> broadcasts their presence through their instrument — learn the rhythm, or die to it.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🥁</span><div><strong>DD the Drummer</strong><p>His beat is your alert system. The faster the kick pattern, the closer he is. Go silent and his rhythm falters — he loses you.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎸</span><div><strong>Shadow Puzzles</strong><p>Certain rooms require you to cast the right shadow timed to a musical beat. Miss the beat, and the door stays shut. The puzzle isn't spatial — it's rhythmic.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🔇</span><div><strong>Sound Manipulation</strong><p>Use in-world objects to create distraction noise, silence sections of the venue, or trigger audio cues that affect enemy behavior. Headphones are not optional — they're your survival tool.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎶</span><div><strong>Diegetic Design</strong><p>The music you hear in menus is the same music KIELZOG plays in the world. There is no separation between score and gameplay — <strong>[FIEND]</strong> controls both.</p></div></div>
      </div>`
  },

  'claymation': {
    icon: '🎭', tag: '// Visual Direction', tagColor: '#a855f7',
    title: 'Claymation Aesthetic',
    subtitle: 'Horror that moves wrong — on purpose.',
    body: `
      <p>FIEND draws its visual DNA from stop-motion claymation horror — most directly the work of <strong>LAIKA studios</strong> (Coraline, ParaNorman, Kubo). <strong>[KIELZOG]</strong> doesn't move smoothly. They move with that specific uncanny wrongness that makes stop-motion unsettling at a primal level.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🪆</span><div><strong>Imperfect Motion</strong><p>KIELZOG's animations are deliberately stuttered — not due to low frame rate, but as a design choice. Each band member has unique movement patterns that feel handmade and slightly off.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎪</span><div><strong>Two Visual Modes</strong><p>Band members switch between a "Normal" state and a "Claymation" state. In Claymation mode, geometry warps, textures shift, and movement becomes even more erratic — signalling heightened danger.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🏚️</span><div><strong>Environmental Language</strong><p>The entertainment center shows claymation influence — warped proportions, tactile-feeling surfaces, hand-crafted decay. Walls that look like they were pressed by thumbs.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎬</span><div><strong>LAIKA Inspiration</strong><p>LAIKA proved stop-motion can carry genuine adult horror. FIEND applies that to interactive media — using claymation's inherent wrongness as a deliberate psychological tool.</p></div></div>
      </div>`
  },

  'liminal': {
    icon: '🎪', tag: '// World Design', tagColor: '#00e5ff',
    title: 'Liminal Spaces',
    subtitle: "Places that feel like they should be empty. They aren't.",
    body: `
      <p>Liminality — the psychological discomfort of transitional, between-state spaces — is FIEND's core environmental language. The family entertainment center was designed to be full of people. Now it is none of those things. The architecture remembers what it was. That memory is the horror.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🏛️</span><div><strong>The Architecture of Wrong</strong><p>Corridors too long. Rooms that lead back to themselves. Staircases with no destination. FIEND's spaces feel structurally impossible — as if <strong>[FIEND]</strong> has been reshaping the building from inside.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🔊</span><div><strong>Sound-Reactive Geometry</strong><p>Rooms physically change based on audio state. Doors open when specific frequencies play. Walls shift when the bass reaches a threshold. The space breathes in time with <strong>[KIELZOG]</strong>'s performance.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎠</span><div><strong>Abandoned Entertainment</strong><p>Arcade machines still glowing. Ball pits drained. Birthday banners faded but still hanging. Every detail is a ghost of joy — the horror is in the contrast between what was and what is now.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🌀</span><div><strong>The Loop Structure</strong><p>The Routine Ending demonstrates FIEND's liminal logic at its purest: you sleep, you wake up, you are back. The exit may not exist. The entertainment center may be the only space that remains.</p></div></div>
      </div>`
  },

  'soundscape': {
    icon: '🔊', tag: '// Audio System', tagColor: '#00ff88',
    title: 'Reactive Soundscape',
    subtitle: 'The music knows where you are. Always.',
    body: `
      <p>FIEND's audio system runs on two synchronized layers that respond to every player action, enemy state, and story beat in real time. Built in Unreal Engine 5 — this is not a playlist. It is a living instrument being played by <strong>[FIEND]</strong> itself.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🤖</span><div><strong>Digital Entity Layer</strong><p>The non-diegetic synthesizer layer — the "FIEND signal." This warps, distorts, and modulates in response to story tension. When FIEND's influence is strong, the signal corrupts.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎙️</span><div><strong>KIELZOG Layer</strong><p>Each band member is a spatialised 3D audio node. Drums from one direction, bass from another. Volume, pitch, and rhythm shift based on proximity. You hear them before you see them.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🔄</span><div><strong>Parameter-Driven Performance</strong><p>FIEND controls KIELZOG's performance via tempo, filtering, intensity, and rhythmic variation. An angry KIELZOG plays faster. A hunting KIELZOG plays sparse and erratic. The music is enemy AI made audible.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎧</span><div><strong>Why Headphones Are Required</strong><p>Full spatial audio is critical to gameplay. The left/right panning of individual instruments tells you which corridor an enemy is approaching from. Playing without headphones removes your primary survival sense.</p></div></div>
      </div>`
  },

  'ending-good': {
    icon: '✓', tag: '// Good Ending', tagColor: '#00ff88',
    title: 'Home Sweet Home',
    subtitle: 'You made it. But FIEND is still out there.',
    body: `
      <p>You solved the puzzles. You survived KIELZOG. You freed <strong>[VRIENDJE]</strong>. The cat led you to the exit and together you escaped into cold outside air. You wake up in your own bed. The small black cat is curled at your feet, purring.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon" style="color:#00ff88">🐱</span><div><strong>VRIENDJE is Safe</strong><p>The cat — [VRIENDJE], meaning "little friend" in Dutch — was the real objective all along. Trapped inside, used as bait by FIEND. Saving her is the moral victory of the vertical slice.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon" style="color:#00ff88">🏠</span><div><strong>A Satisfying Closure — With a Hook</strong><p>The good ending feels earned and complete. But the final image carries an undertone. You survived this encounter. FIEND did not follow. <em>Yet.</em></p></div></div>
        <div class="modal-point"><span class="modal-point-icon" style="color:#00ff88">🎯</span><div><strong>How to Get It</strong><p>Observe the music carefully. Solve environmental puzzles using audio cues. Face KIELZOG — don't flee. Disable each band member using their specific weakness. Find VRIENDJE. Reach the exit.</p></div></div>
      </div>`
  },

  'ending-caught': {
    icon: '✗', tag: '// Bad Ending', tagColor: '#ff6b35',
    title: 'Caught by KIELZOG',
    subtitle: 'The loop resets. You are back where you started.',
    body: `
      <p>You failed to escape or counter KIELZOG and FIEND. The band closed in. The music became deafening. Then nothing. A haunting death animation. Then you open your eyes in your apartment again. <strong>[FIEND]</strong> sent you back.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon" style="color:#ff6b35">🔁</span><div><strong>The Loop Resets</strong><p>This bad ending deliberately mirrors the Routine Ending — you wake up in your apartment — but carries different weight. You remember. The nightmare is not gone. FIEND is playing a longer game.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon" style="color:#ff6b35">🎭</span><div><strong>The Death Animation</strong><p>Each band member has a unique capture animation. DD engulfs you in percussion cables. B-Backer pulls you into his shadow. Graafs overwhelms you with sonic feedback. Veil simply holds your gaze until you shatter.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon" style="color:#ff6b35">📖</span><div><strong>Narrative Function</strong><p>Failure is not the end — it is another iteration. The player is a recurring visitor to FIEND's world, whether they want to be or not.</p></div></div>
      </div>`
  },

  'ending-stairs': {
    icon: '✗', tag: '// Bad Ending', tagColor: '#ff6b35',
    title: 'Endless Stairs',
    subtitle: 'You are becoming one with FIEND.',
    body: `
      <p>You fled. You didn't fight — you ran, descending into the basement. But the stairs kept going. The walls closed in. The music dropped to a single, low, unending drone. Reality faded. This is FIEND's darkest ending. Not death — absorption.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon" style="color:#ff6b35">🌀</span><div><strong>The Absorption Mechanic</strong><p>FIEND spreads through audio cables — organic, parasitic. When you descend far enough without resistance, you stop being a visitor and start becoming infrastructure. Cables grow through your silhouette.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon" style="color:#ff6b35">🎵</span><div><strong>The Drone</strong><p>A single, unresolved bass note — held indefinitely. No rhythm. No melody. Just FIEND's frequency, unfiltered. It is the most musically disturbing moment in the vertical slice.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon" style="color:#ff6b35">🏚️</span><div><strong>Thematic Weight</strong><p>You didn't lose to KIELZOG — you avoided them and lost to FIEND itself. Running from horror doesn't make it go away. In FIEND's world, avoidance is surrender.</p></div></div>
      </div>`
  },

  'node-start': {
    icon: '▶', tag: '// Entry Point', tagColor: '#cc1111',
    title: 'Start Game',
    subtitle: 'Every loop begins the same way.',
    body: `
      <p>FIEND opens without preamble. No tutorial screen. No menu music. You open your eyes in your apartment. The cat is already gone. Something felt wrong before you woke up — you just don't know it yet.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🌙</span><div><strong>No Hand-Holding</strong><p>The game drops you directly into the apartment. Interactive systems are discovered through exploration — examining objects, opening drawers, listening to ambient audio cues.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🐱</span><div><strong>The Cat Is Already Gone</strong><p>[VRIENDJE] has disappeared when the game starts. The player's first instinct — find the cat — becomes the inciting motivation before any objective is stated.</p></div></div>
      </div>`
  },

  'node-choice': {
    icon: '🚪', tag: '// Act One', tagColor: '#cc1111',
    title: 'The Choice',
    subtitle: 'Follow the cat — or go back to sleep.',
    body: `
      <p>You catch a glimpse of [VRIENDJE] slipping toward the abandoned entertainment center. The door is open. The lights inside flicker. You can follow — or go home, go to bed, and wake up again. Only one path leads forward.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🏚️</span><div><strong>The Entertainment Center</strong><p>A family venue — once loud with arcade machines and animatronic performances. Now the signage is half-lit, cables run across the floor like roots, and the music from inside is wrong in a way you can't immediately place.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🔁</span><div><strong>Going Back to Bed</strong><p>Choosing not to follow leads to the Routine Ending — you wake up unchanged, the cat nowhere to be found. Inaction is its own outcome.</p></div></div>
      </div>`
  },

  'node-backhome': {
    icon: '🏠', tag: '// Tutorial Space', tagColor: '#00e5ff',
    title: 'Back Home',
    subtitle: 'Your apartment. Learn to interact. Then sleep.',
    body: `
      <p>The apartment is FIEND's tutorial space — disguised as a normal environment. Here you learn to examine objects, read audio cues, and understand that this world rewards attention. Nothing is labeled. Everything is a clue.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🔍</span><div><strong>Environmental Storytelling</strong><p>Posters on the wall, a half-eaten meal, a radio playing distorted music — the apartment tells a quiet backstory. None of it is narrated. All of it is felt.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">😴</span><div><strong>Going to Bed</strong><p>Choosing to sleep triggers the Routine Ending — the loop resets. This teaches the player that sleeping means giving up.</p></div></div>
      </div>`
  },

  'ending-routine': {
    icon: '↺', tag: '// Routine Ending', tagColor: '#00e5ff',
    title: 'Routine Ending',
    subtitle: 'You went to sleep. The loop reset. Nothing changed.',
    body: `
      <p>You chose not to follow the cat. Or you went home and went to bed. You wake up the next morning. The apartment is the same. The entertainment center is still there. [VRIENDJE] is still missing. FIEND is still out there.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🔁</span><div><strong>The Loop Mechanic</strong><p>Waking up in the same apartment mirrors FIEND's full-game structure. The Routine Ending is the purest expression of this: reset without consequence, designed to teach.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">😴</span><div><strong>Narrative Purpose</strong><p>This ending establishes that passivity is a choice FIEND welcomes. By showing the player what happens when they don't engage, the game implicitly asks: what happens if you do?</p></div></div>
      </div>`
  },

  'node-trapped': {
    icon: '🔒', tag: '// Act Two', tagColor: '#cc1111',
    title: 'Trapped',
    subtitle: 'The door behind you sealed. KIELZOG is performing.',
    body: `
      <p>The moment you step far enough inside, the entrance seals — audio cables curl over the doorframe like vines. The lights drop. Somewhere deeper in the building, you hear the first notes of a live performance. KIELZOG is already playing. They know you're here.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🎵</span><div><strong>The Music Begins</strong><p>The reactive soundtrack kicks in fully. The band's instruments separate into distinct spatial streams — drums from the east wing, bass from below, guitar from the stage. You are surrounded before you see a single enemy.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🗺️</span><div><strong>Explore or Fail</strong><p>Multiple zones, interconnected rooms, audio-reactive geometry. Clues about each band member's weakness are hidden here. Rushing in without them is survivable, but significantly harder.</p></div></div>
      </div>`
  },

  'node-facekielzog': {
    icon: '🎸', tag: '// Confrontation', tagColor: '#cc1111',
    title: 'Face KIELZOG',
    subtitle: 'Observe. Learn the rhythm. Survive the set.',
    body: `
      <p>KIELZOG is not one encounter — it is four. Each band member must be confronted and disabled individually. They operate in different zones, use different mechanics, and demand different strategies.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🥁</span><div><strong>DD — The Drummer</strong><p>Noise-triggered and beat-responsive. Create a rhythmic distraction to lure him off-path, then disable his kit during the gap in his pattern.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎸</span><div><strong>B-Backer — The Bassist</strong><p>He hunts through shadows. His low-frequency bass physically darkens rooms. Use light sources to pin his shadow and break his patrol route.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎵</span><div><strong>Graafs — The Guitarist</strong><p>Feedback-based and erratic. His guitar emits sonic pulses that disorient navigation. Counter-frequency objects can neutralise his attack window.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🎤</span><div><strong>Veil — The Vocalist</strong><p>The most dangerous. Eye contact triggers a freeze state. Navigate using only peripheral vision and audio direction. She doesn't chase — she waits.</p></div></div>
      </div>`
  },

  'node-defeatkielzog': {
    icon: '⚡', tag: '// Turning Point', tagColor: '#a855f7',
    title: 'Defeat KIELZOG',
    subtitle: 'All four disabled. The music breaks. FIEND is exposed.',
    body: `
      <p>With all four band members disabled, KIELZOG's performance collapses. The music system goes silent for the first time — replaced by a deep, unstructured drone. FIEND, without its puppet band, is momentarily exposed. The path to VRIENDJE opens.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🎼</span><div><strong>The Silence</strong><p>The first true silence in the game. After constant reactive music, the absence of sound is louder than any note. The environment stabilises. FIEND's hold weakens — temporarily.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🐱</span><div><strong>Finding VRIENDJE</strong><p>The cat has been in the building the whole time — trapped in FIEND's core. With KIELZOG silenced, her audio signature can finally be heard clearly. Follow it.</p></div></div>
      </div>`
  },

  'node-homesweethome': {
    icon: '🚪', tag: '// Resolution', tagColor: '#00ff88',
    title: 'Home Sweet Home',
    subtitle: 'The exit is real. This time.',
    body: `
      <p>With VRIENDJE in your arms and KIELZOG disabled, the main entrance un-seals. The cables retract. For the first time, the door opens outward. Cold air. Streetlights. The city still exists. You made it out.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">🌙</span><div><strong>The Walk Home</strong><p>A brief, quiet sequence — no enemies, no music, just footsteps and the sound of the cat breathing in your arms. A deliberate tonal shift before the final scene.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🛏️</span><div><strong>Back to the Apartment</strong><p>You return to the same apartment. Same layout. Different feeling. The cat is with you now. You go to sleep. This time, sleep is safe. The loop ends.</p></div></div>
      </div>`
  },

  'node-endlessstairs': {
    icon: '🌀', tag: '// Bad Path', tagColor: '#ff6b35',
    title: 'Endless Stairs',
    subtitle: 'You ran. The basement has no bottom.',
    body: `
      <p>Fleeing from KIELZOG leads you deeper into the building's lower levels. The staircase extends beyond any architectural logic. The walls close in. The music becomes a single held drone. You are no longer a visitor — you are becoming part of FIEND.</p>
      <div class="modal-points">
        <div class="modal-point"><span class="modal-point-icon">📉</span><div><strong>The Architecture Betrays You</strong><p>Corridors repeat, doors lead to rooms you've never entered, stairs that should reach the bottom never do. The space is consuming itself around you.</p></div></div>
        <div class="modal-point"><span class="modal-point-icon">🔌</span><div><strong>Absorption</strong><p>Audio cables begin to appear on your hands. You are being integrated into FIEND's system. Not killed — assimilated. This is the darkest of the three endings.</p></div></div>
      </div>`
  }
};


/* ══════════════════════════════════════
   MODAL ENGINE — self-contained
══════════════════════════════════════ */
(function() {
  /* inject modal HTML */
  const html = `
    <style>
      #fiend-overlay {
        display:none; position:fixed; inset:0;
        background:rgba(0,0,0,0.88); z-index:99000;
        backdrop-filter:blur(4px); cursor:pointer;
      }
      #fiend-overlay.on { display:block; }
      #fiend-modal {
        display:none; position:fixed;
        top:50%; left:50%; transform:translate(-50%,-50%);
        width:min(680px,92vw); max-height:82vh;
        background:#0d0d0d;
        border:1px solid rgba(204,17,17,0.4);
        box-shadow:0 0 60px rgba(204,17,17,0.18), 0 0 0 1px rgba(255,255,255,0.04);
        z-index:99100; flex-direction:column; overflow:hidden;
        font-family:'Special Elite',serif;
      }
      #fiend-modal.on { display:flex; }
      #fm-bar { height:3px; background:linear-gradient(to right,#cc1111,transparent); flex-shrink:0; }
      #fm-head {
        display:flex; align-items:flex-start; gap:1.2rem;
        padding:1.5rem 1.8rem 1.1rem;
        border-bottom:1px solid rgba(255,255,255,0.06); flex-shrink:0;
      }
      #fm-icon { font-size:1.8rem; line-height:1; flex-shrink:0; margin-top:.2rem; }
      #fm-htext { flex:1; min-width:0; }
      #fm-tag {
        font-family:'Share Tech Mono',monospace; font-size:.56rem;
        letter-spacing:.22em; text-transform:uppercase;
        display:block; margin-bottom:.3rem; color:#cc1111;
      }
      #fm-title {
        font-family:'Bebas Neue',sans-serif; font-size:clamp(1.4rem,4vw,2rem);
        letter-spacing:.1em; color:#ede8dc; line-height:1.1;
      }
      #fm-sub {
        font-family:'Share Tech Mono',monospace; font-size:.65rem;
        color:#888; margin-top:.35rem; letter-spacing:.03em;
      }
      #fm-close {
        background:none; border:1px solid rgba(255,255,255,0.12);
        color:#888; font-size:1rem; width:2rem; height:2rem;
        display:flex; align-items:center; justify-content:center;
        cursor:pointer; flex-shrink:0; transition:all .2s;
        font-family:'Bebas Neue',sans-serif;
      }
      #fm-close:hover { border-color:#cc1111; color:#cc1111; }
      #fm-body {
        padding:1.5rem 1.8rem 2rem; overflow-y:auto; flex:1;
      }
      #fm-body p {
        font-size:.87rem; line-height:1.85; color:#888; margin-bottom:1.1rem;
      }
      #fm-body strong { color:#d8d0c8; }
      #fm-body em { color:#888; }
      .modal-points { display:flex; flex-direction:column; gap:1.1rem; margin-top:.4rem; }
      .modal-point {
        display:flex; gap:1rem; padding:.9rem 1rem;
        background:rgba(255,255,255,0.03);
        border:1px solid rgba(255,255,255,0.05);
        border-left:2px solid rgba(204,17,17,0.45);
      }
      .modal-point-icon { font-size:1.2rem; flex-shrink:0; margin-top:.1rem; }
      .modal-point > div { min-width:0; }
      .modal-point strong {
        display:block; font-family:'Bebas Neue',sans-serif;
        font-size:.88rem; letter-spacing:.08em;
        color:#ede8dc; margin-bottom:.35rem;
      }
      .modal-point p {
        font-size:.76rem !important; margin-bottom:0 !important; line-height:1.7;
      }
    </style>
    <div id="fiend-overlay"></div>
    <div id="fiend-modal">
      <div id="fm-bar"></div>
      <div id="fm-head">
        <div id="fm-icon"></div>
        <div id="fm-htext">
          <span id="fm-tag"></span>
          <div id="fm-title"></div>
          <div id="fm-sub"></div>
        </div>
        <button id="fm-close">✕</button>
      </div>
      <div id="fm-body"></div>
    </div>`;

  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap);

  const overlay = document.getElementById('fiend-overlay');
  const modal   = document.getElementById('fiend-modal');
  const btnClose= document.getElementById('fm-close');

  function openModal(key) {
    const d = MODAL_DATA[key];
    if (!d) return;
    document.getElementById('fm-icon').textContent = d.icon  || '';
    document.getElementById('fm-tag').textContent  = d.tag   || '';
    document.getElementById('fm-tag').style.color  = d.tagColor || '#cc1111';
    document.getElementById('fm-title').textContent= d.title || '';
    document.getElementById('fm-sub').textContent  = d.subtitle || '';
    document.getElementById('fm-body').innerHTML   = d.body  || '';
    overlay.classList.add('on');
    modal.classList.add('on');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('on');
    modal.classList.remove('on');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeModal);
  btnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* bind all data-modal elements — runs now AND after DOM ready */
  function bindAll() {
    document.querySelectorAll('[data-modal]').forEach(el => {
      if (el._fiendBound) return;
      el._fiendBound = true;
      el.style.cursor = 'pointer';
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        openModal(this.dataset.modal);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindAll);
  } else {
    bindAll();
  }
  /* also bind after a short delay in case elements render late */
  setTimeout(bindAll, 500);
})();


/* ══════════════════════════════════════
   REST OF SITE SCRIPTS
══════════════════════════════════════ */
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
    mainNav && mainNav.classList.toggle('scrolled', window.scrollY > 60);
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
  if (hamburger) hamburger.addEventListener('click', () => {
    hamburger.classList.add('open');
    mobileNav && mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
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
  if (lightbox) {
    document.querySelectorAll('[data-lightbox]').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src || img.getAttribute('data-src') || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    const closeLightbox = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  }

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
    el.style.transform  = `translateX(${Math.random() > 0.5 ? 3 : -3}px)`;
    setTimeout(() => { el.style.textShadow = orig; el.style.transform = ''; }, 80);
  }, 2600);

  /* ─── WHOLE-PAGE FLICKER ─── */
  setInterval(() => {
    document.body.style.filter = 'brightness(0.86)';
    setTimeout(() => { document.body.style.filter = ''; }, 55);
  }, 12000);

});