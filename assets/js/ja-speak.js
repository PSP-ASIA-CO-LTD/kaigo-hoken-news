/**
 * Japanese term read-aloud using Web Speech API
 * 
 * Feature detection: hides speaker buttons if speechSynthesis unavailable.
 * Uses Japanese voice (ja-JP) with slightly slower rate for clarity.
 * Works on desktop Chrome/Firefox/Safari and mobile Safari/Chrome.
 */
(function() {
  'use strict';
  
  // Feature detection
  if (!('speechSynthesis' in window)) {
    // Hide all speaker buttons if not supported
    document.querySelectorAll('.ja-speak-btn').forEach(function(btn) {
      btn.style.display = 'none';
    });
    return;
  }
  
  var synth = window.speechSynthesis;
  var jaVoice = null;
  
  // Try to find a Japanese voice
  function loadVoices() {
    var voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang.indexOf('ja') === 0) {
        jaVoice = voices[i];
        break;
      }
    }
  }
  
  // Voices may load async (Chrome), so listen for event
  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
  
  // Speak the given Japanese text
  function speak(text) {
    // Cancel any ongoing speech
    synth.cancel();
    
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;  // Slightly slower for clarity
    utterance.pitch = 1;
    utterance.volume = 1;
    
    if (jaVoice) {
      utterance.voice = jaVoice;
    }
    
    synth.speak(utterance);
  }
  
  // Handle clicks on speaker buttons
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.ja-speak-btn');
    if (btn) {
      e.preventDefault();
      var text = btn.getAttribute('data-ja-text');
      if (text) {
        speak(text);
      }
    }
  });
  
  // Handle keyboard activation (Enter/Space)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var btn = e.target.closest('.ja-speak-btn');
      if (btn) {
        e.preventDefault();
        var text = btn.getAttribute('data-ja-text');
        if (text) {
          speak(text);
        }
      }
    }
  });
})();
