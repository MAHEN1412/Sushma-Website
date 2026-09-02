(function(){
  function wireCopy(btn){
    if(!btn) return;
    var original = btn.innerHTML;
    btn.addEventListener('click', function(){
      var email = btn.getAttribute('data-email') || '';
      var done = function(ok){
        btn.innerHTML = ok ? ((btn.id === 'copyFooter' || btn.id === 'copyBig') ? '<span class="icon">✓</span> Copied to clipboard' : 'Copied ✓') : 'Copy failed';
        setTimeout(function(){ btn.innerHTML = original; }, 1800);
      };
      try{
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(email).then(function(){ done(true); }).catch(function(){ done(false); });
        } else {
          var ta = document.createElement('textarea');
          ta.value = email; ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select();
          var ok = document.execCommand('copy');
          document.body.removeChild(ta);
          done(ok);
        }
      }catch(e){ done(false); }
    });
  }
  wireCopy(document.getElementById('copyTop'));
  wireCopy(document.getElementById('copyHero'));
  wireCopy(document.getElementById('copyFooter'));
  wireCopy(document.getElementById('copyBig'));
})();
