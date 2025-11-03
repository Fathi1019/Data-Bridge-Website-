// app.js - interactions: mobile menu, faq, simple form handling
(function(){
  const body = document.body;
  const menuBtn = document.getElementById('menuBtn');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=> body.classList.toggle('mobile-open'));
  }
  // FAQ
  document.querySelectorAll('.faq-item .faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.parentElement.classList.toggle('active');
    });
  });
  // Year
  const y = document.getElementById('y'); if(y){ y.textContent = new Date().getFullYear(); }

  // Lead form: basic client validation and mailto fallback
  const form = document.getElementById('leadForm');
  const msg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      if(!data.get('name') || !data.get('phone') || !data.get('need')){
        msg.textContent = 'رجاءً أكمل الحقول المطلوبة.';
        msg.style.color = '#f59e0b';
        return;
      }
      // Option A: Mailto compose
      const subject = encodeURIComponent('طلب استشارة - جسر البيانات');
      const body = encodeURIComponent(
        `الاسم: ${data.get('name')}\nالهاتف: ${data.get('phone')}\nالبريد: ${data.get('email')||''}\nالاحتياج: ${data.get('need')}\n\nالرسالة:\n${data.get('msg')||''}`
      );
      window.location.href = `mailto:hello@databridge.ly?subject=${subject}&body=${body}`;
      msg.textContent = 'تم فتح برنامج البريد لديك لإرسال الرسالة. شكراً لك!';
      msg.style.color = '#34d399';
      form.reset();
    });
  }
})();
