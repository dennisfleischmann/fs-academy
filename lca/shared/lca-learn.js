function shuffle(a) { for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i], a[j]] = [a[j], a[i]]; } }

function initLearnApp(cfg) {
  const { topics, questions, flashcards, state, storageKey, examMinutes } = cfg;
  const examSeconds = (examMinutes || 25) * 60;

  function saveState() { try { localStorage.setItem(storageKey, JSON.stringify({ answered: state.answered, correct: state.correct, streak: state.streak, maxStreak: state.maxStreak, topicScores: state.topicScores })); } catch(e) {} }

  window.showSection = function(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav button').forEach(b => { if (b.textContent.toLowerCase().includes(id === 'dashboard' ? 'dashboard' : id === 'quiz' ? 'quiz' : id === 'flashcards' ? 'karte' : id === 'exam' ? 'prüf' : 'fallen')) b.classList.add('active'); });
    if (id === 'dashboard') updateDashboard();
    if (id === 'flashcards') initFlashcards();
    if (id === 'quiz') buildTopicFilter('quiz-topic-filter', true);
  };

  function updateDashboard() {
    document.getElementById('stat-answered').textContent = state.answered;
    document.getElementById('stat-correct').textContent = state.correct;
    document.getElementById('stat-rate').textContent = state.answered > 0 ? Math.round(state.correct/state.answered*100) + '%' : '--';
    document.getElementById('stat-streak').textContent = state.streak;
    const grid = document.getElementById('topic-grid');
    grid.innerHTML = topics.map(t => {
      const s = state.topicScores[t.id] || { answered: 0, correct: 0 };
      const rate = s.answered > 0 ? Math.round(s.correct/s.answered*100) : -1;
      const rateText = rate >= 0 ? rate + '%' : 'Noch nicht geübt';
      const color = rate < 0 ? '#999' : rate >= 70 ? 'var(--success)' : rate >= 40 ? 'var(--gold)' : 'var(--warn)';
      return `<div class="topic-card" onclick="startQuiz('${t.id}')"><div class="icon">${t.icon}</div><h4>${t.name}</h4><div class="score" style="color:${color}">${rateText}</div></div>`;
    }).join('');
  }

  function buildTopicFilter(containerId, defaultAll) {
    const c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = `<button class="topic-btn ${defaultAll ? 'active' : ''}" data-topic="all" onclick="toggleTopic(this)">Alle</button>` + topics.map(t => `<button class="topic-btn" data-topic="${t.id}" onclick="toggleTopic(this)">${t.icon} ${t.name}</button>`).join('');
  }
  window.toggleTopic = function(btn) {
    const c = btn.parentElement;
    if (btn.dataset.topic === 'all') { c.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
    else { c.querySelector('[data-topic="all"]').classList.remove('active'); btn.classList.toggle('active'); if (!c.querySelector('.topic-btn.active')) c.querySelector('[data-topic="all"]').classList.add('active'); }
  };
  function getSelectedTopics(id) { const ids = [...document.querySelectorAll(`#${id} .topic-btn.active`)].map(b => b.dataset.topic); return ids.includes('all') ? topics.map(t => t.id) : ids; }

  window.startQuiz = function(mode) {
    showSection('quiz');
    let pool;
    if (mode === 'all') pool = [...questions];
    else if (mode === 'weak') { const weak = topics.filter(t => { const s = state.topicScores[t.id]; return s.answered === 0 || s.correct/s.answered < 0.7; }).map(t=>t.id); pool = questions.filter(q => weak.includes(q.topic)); if (pool.length === 0) pool = [...questions]; }
    else pool = questions.filter(q => q.topic === mode);
    shuffle(pool);
    state.currentQuiz = pool.slice(0, Math.min(pool.length, 12));
    state.quizIndex = 0; state.quizAnswers = [];
    document.getElementById('quiz-filter-card').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    showQuizQuestion();
  };
  window.startQuizFromFilter = function() {
    const sel = getSelectedTopics('quiz-topic-filter');
    let pool = questions.filter(q => sel.includes(q.topic));
    if (pool.length === 0) { alert('Keine Fragen für diese Auswahl.'); return; }
    shuffle(pool);
    state.currentQuiz = pool.slice(0, Math.min(pool.length, 12));
    state.quizIndex = 0; state.quizAnswers = [];
    document.getElementById('quiz-filter-card').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    showQuizQuestion();
  };
  function showQuizQuestion() {
    const q = state.currentQuiz[state.quizIndex];
    const total = state.currentQuiz.length;
    state.selectedOptions = new Set();
    document.getElementById('quiz-progress').style.width = ((state.quizIndex/total)*100) + '%';
    const topicName = topics.find(t => t.id === q.topic)?.name || '';
    const typeLabel = q.type === 'sc' ? 'Single Choice' : q.type === 'mc' ? 'Multiple Choice' : 'Freitext';
    let html = `<div class="question-header"><span class="q-type ${q.type}">${typeLabel}</span><span class="q-num">${state.quizIndex+1} / ${total}</span></div><div class="q-topic">${topicName}</div><div class="question-text">${q.q}</div>`;
    if (q.type === 'sc' || q.type === 'mc') {
      html += `<div class="options" id="options-list">`;
      q.options.forEach((opt, i) => { html += `<div class="option ${q.type === 'mc' ? 'mc-option' : ''}" data-idx="${i}" onclick="selectOption(this, ${i}, '${q.type}')"><div class="marker">${String.fromCharCode(65+i)}</div><div class="option-text">${opt}</div></div>`; });
      html += `</div>`;
    } else { html += `<textarea class="ft-input" id="ft-answer" placeholder="Ihre Antwort..."></textarea>`; }
    html += `<div class="feedback" id="quiz-feedback"></div>`;
    document.getElementById('quiz-card').innerHTML = html;
    document.getElementById('quiz-buttons').innerHTML = `<button class="btn btn-primary" onclick="checkAnswer()">Prüfen</button><button class="btn btn-outline" onclick="skipQuestion()" style="margin-left:auto;">Überspringen</button>`;
  }
  window.selectOption = function(el, idx, type) {
    if (document.getElementById('quiz-feedback').classList.contains('show')) return;
    if (type === 'sc') { document.querySelectorAll('#options-list .option').forEach(o => o.classList.remove('selected')); state.selectedOptions = new Set([idx]); el.classList.add('selected'); }
    else { if (state.selectedOptions.has(idx)) { state.selectedOptions.delete(idx); el.classList.remove('selected'); } else { state.selectedOptions.add(idx); el.classList.add('selected'); } }
  };
  window.checkAnswer = function() {
    const q = state.currentQuiz[state.quizIndex];
    const fb = document.getElementById('quiz-feedback');
    let isCorrect = false;
    if (q.type === 'sc') {
      if (state.selectedOptions.size === 0) return;
      const sel = [...state.selectedOptions][0];
      isCorrect = sel === q.correct;
      document.querySelectorAll('#options-list .option').forEach((o, i) => { if (i === q.correct) o.classList.add('correct'); if (state.selectedOptions.has(i) && i !== q.correct) o.classList.add('wrong'); });
    } else if (q.type === 'mc') {
      if (state.selectedOptions.size === 0) return;
      const cs = new Set(q.correct);
      isCorrect = state.selectedOptions.size === cs.size && [...state.selectedOptions].every(i => cs.has(i));
      document.querySelectorAll('#options-list .option').forEach((o, i) => { if (cs.has(i)) o.classList.add('correct'); if (state.selectedOptions.has(i) && !cs.has(i)) o.classList.add('wrong'); });
    } else {
      const ans = document.getElementById('ft-answer').value.toLowerCase();
      if (!ans.trim()) return;
      const matched = q.keywords.filter(kw => ans.includes(kw.toLowerCase()));
      isCorrect = matched.length >= Math.ceil(q.keywords.length * 0.3);
      fb.innerHTML = `<strong>${isCorrect ? 'Gut!' : 'Verbesserungsbedarf'} (${matched.length}/${q.keywords.length} Schlüsselbegriffe)</strong><p style="margin-top:0.5rem;"><strong>Musterantwort:</strong> ${q.sampleAnswer}</p><p style="margin-top:0.3rem; font-size:0.85rem; color:var(--muted);">Erkannte Begriffe: ${matched.length > 0 ? matched.join(', ') : 'keine'}</p>`;
      fb.className = `feedback show ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;
    }
    if (q.type !== 'ft') { fb.innerHTML = `<strong>${isCorrect ? 'Richtig!' : 'Falsch!'}</strong><p>${q.explanation}</p>`; fb.className = `feedback show ${isCorrect ? 'correct-fb' : 'wrong-fb'}`; }
    state.answered++; state.topicScores[q.topic].answered++;
    if (isCorrect) { state.correct++; state.streak++; state.maxStreak = Math.max(state.maxStreak, state.streak); state.topicScores[q.topic].correct++; } else state.streak = 0;
    state.quizAnswers.push(isCorrect);
    saveState();
    document.getElementById('quiz-buttons').innerHTML = `<button class="btn btn-primary" onclick="nextQuizQuestion()">Weiter</button>`;
  };
  window.skipQuestion = function() { state.quizAnswers.push(null); nextQuizQuestion(); };
  window.nextQuizQuestion = function() { state.quizIndex++; if (state.quizIndex >= state.currentQuiz.length) showQuizResults(); else showQuizQuestion(); };
  function showQuizResults() {
    const total = state.quizAnswers.length;
    const correct = state.quizAnswers.filter(a => a === true).length;
    const skipped = state.quizAnswers.filter(a => a === null).length;
    const wrong = total - correct - skipped;
    const pct = Math.round(correct/total*100);
    const pass = pct >= 70;
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    document.getElementById('quiz-results').innerHTML = `<h3 style="text-align:center; margin-bottom:1rem;">Ergebnis</h3><div class="result-circle ${pass ? 'pass' : 'fail'}">${pct}%<small>${pass ? 'Bestanden' : 'Nicht bestanden'}</small></div><div class="stats" style="margin-top:1rem;"><div class="stat"><div class="num" style="color:var(--success)">${correct}</div><div class="label">Richtig</div></div><div class="stat"><div class="num" style="color:var(--warn)">${wrong}</div><div class="label">Falsch</div></div><div class="stat"><div class="num" style="color:var(--muted)">${skipped}</div><div class="label">Übersprungen</div></div></div><div class="btn-row" style="justify-content:center; margin-top:1rem;"><button class="btn btn-primary" onclick="resetQuiz()">Neues Quiz</button><button class="btn btn-accent" onclick="startQuiz('weak')">Schwächen üben</button><button class="btn btn-outline" onclick="showSection('dashboard')">Dashboard</button></div>`;
  }
  window.resetQuiz = function() { document.getElementById('quiz-filter-card').style.display = 'block'; document.getElementById('quiz-area').style.display = 'none'; document.getElementById('quiz-results').style.display = 'none'; };

  function initFlashcards() { state.currentFC = [...flashcards]; shuffle(state.currentFC); state.fcIndex = 0; state.fcFlipped = false; showFlashcard(); }
  function showFlashcard() { if (state.currentFC.length === 0) return; const fc = state.currentFC[state.fcIndex]; document.getElementById('fc-question').textContent = fc.front; document.getElementById('fc-answer').innerHTML = fc.back; document.getElementById('flashcard').classList.remove('flipped'); state.fcFlipped = false; document.getElementById('fc-counter').textContent = `${state.fcIndex+1} / ${state.currentFC.length}`; }
  window.flipCard = function() { document.getElementById('flashcard').classList.toggle('flipped'); state.fcFlipped = !state.fcFlipped; };
  window.nextCard = function() { state.fcIndex = (state.fcIndex+1) % state.currentFC.length; showFlashcard(); };
  window.prevCard = function() { state.fcIndex = (state.fcIndex-1+state.currentFC.length) % state.currentFC.length; showFlashcard(); };
  window.markCardKnown = function() { if (state.currentFC.length <= 1) { nextCard(); return; } state.currentFC.splice(state.fcIndex, 1); if (state.fcIndex >= state.currentFC.length) state.fcIndex = 0; showFlashcard(); };
  window.markCardUnknown = function() { nextCard(); };

  window.startExam = function() {
    let pool = [...questions];
    shuffle(pool);
    state.currentQuiz = pool.slice(0, Math.min(12, pool.length));
    state.quizIndex = 0; state.quizAnswers = [];
    state.examActive = true; state.examTimeLeft = examSeconds;
    document.getElementById('exam-setup').style.display = 'none';
    document.getElementById('exam-area').style.display = 'block';
    document.getElementById('exam-results').style.display = 'none';
    showExamQuestion();
    state.examTimer = setInterval(updateExamTimer, 1000);
  };
  function updateExamTimer() {
    state.examTimeLeft--;
    const m = Math.floor(state.examTimeLeft/60), s = state.examTimeLeft%60;
    const t = document.getElementById('exam-timer');
    t.textContent = `${m}:${s.toString().padStart(2,'0')}`;
    if (state.examTimeLeft <= 300) t.classList.add('warning');
    if (state.examTimeLeft <= 0) { clearInterval(state.examTimer); finishExam(); }
  }
  function showExamQuestion() {
    const q = state.currentQuiz[state.quizIndex];
    const total = state.currentQuiz.length;
    state.selectedOptions = new Set();
    document.getElementById('exam-progress').style.width = ((state.quizIndex/total)*100) + '%';
    const typeLabel = q.type === 'sc' ? 'Single Choice' : q.type === 'mc' ? 'Multiple Choice' : 'Freitext';
    let html = `<div class="question-header"><span class="q-type ${q.type}">${typeLabel}</span><span class="q-num">${state.quizIndex+1} / ${total}</span></div><div class="question-text">${q.q}</div>`;
    if (q.type === 'sc' || q.type === 'mc') {
      html += `<div class="options" id="exam-options">`;
      q.options.forEach((opt, i) => { html += `<div class="option ${q.type === 'mc' ? 'mc-option' : ''}" onclick="selectExamOption(this, ${i}, '${q.type}')"><div class="marker">${String.fromCharCode(65+i)}</div><div class="option-text">${opt}</div></div>`; });
      html += `</div>`;
    } else { html += `<textarea class="ft-input" id="exam-ft"></textarea>`; }
    document.getElementById('exam-card').innerHTML = html;
    document.getElementById('exam-buttons').innerHTML = `<button class="btn btn-primary" onclick="nextExamQuestion()">${state.quizIndex === total-1 ? 'Abgeben' : 'Weiter'}</button>`;
  }
  window.selectExamOption = function(el, idx, type) {
    if (type === 'sc') { document.querySelectorAll('#exam-options .option').forEach(o => o.classList.remove('selected')); state.selectedOptions = new Set([idx]); el.classList.add('selected'); }
    else { if (state.selectedOptions.has(idx)) { state.selectedOptions.delete(idx); el.classList.remove('selected'); } else { state.selectedOptions.add(idx); el.classList.add('selected'); } }
  };
  window.nextExamQuestion = function() {
    const q = state.currentQuiz[state.quizIndex];
    let isCorrect = false;
    if (q.type === 'sc') { isCorrect = state.selectedOptions.size > 0 && [...state.selectedOptions][0] === q.correct; }
    else if (q.type === 'mc') { const cs = new Set(q.correct); isCorrect = state.selectedOptions.size === cs.size && [...state.selectedOptions].every(i => cs.has(i)); }
    else { const ans = (document.getElementById('exam-ft')?.value || '').toLowerCase(); const matched = q.keywords.filter(kw => ans.includes(kw.toLowerCase())); isCorrect = matched.length >= Math.ceil(q.keywords.length*0.3); }
    state.quizAnswers.push(isCorrect);
    state.quizIndex++;
    if (state.quizIndex >= state.currentQuiz.length) finishExam();
    else showExamQuestion();
  };
  function finishExam() {
    clearInterval(state.examTimer);
    state.examActive = false;
    const total = state.quizAnswers.length;
    const correct = state.quizAnswers.filter(a => a === true).length;
    const pct = Math.round(correct/total*100);
    const pass = pct >= 70;
    document.getElementById('exam-area').style.display = 'none';
    document.getElementById('exam-results').style.display = 'block';
    document.getElementById('exam-results').innerHTML = `<h3 style="text-align:center; margin-bottom:1rem;">Prüfungsergebnis</h3><div class="result-circle ${pass ? 'pass' : 'fail'}">${pct}%<small>${pass ? 'Bestanden' : 'Nicht bestanden'}</small></div><p style="text-align:center; margin-top:1rem;">${correct} von ${total} Fragen richtig</p><div class="btn-row" style="justify-content:center; margin-top:1rem;"><button class="btn btn-primary" onclick="resetExam()">Nochmal</button><button class="btn btn-outline" onclick="showSection('dashboard')">Dashboard</button></div>`;
  }
  window.resetExam = function() { document.getElementById('exam-setup').style.display = 'block'; document.getElementById('exam-area').style.display = 'none'; document.getElementById('exam-results').style.display = 'none'; document.getElementById('exam-timer').classList.remove('warning'); document.getElementById('exam-timer').textContent = `${examMinutes}:00`; };

  updateDashboard();
  buildTopicFilter('quiz-topic-filter', true);
  initFlashcards();
}
