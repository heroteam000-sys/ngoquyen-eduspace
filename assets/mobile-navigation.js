/* Điều hướng dùng chung cho trang chủ, 6 môn học và xưởng thiệp. */
(function(){
 'use strict';
 const current=document.currentScript;
 if(!current || document.getElementById('nq-phonebar')) return;
 const opts=current.dataset;
 const root=new URL(opts.root||'index.html',document.baseURI).href;
 const course=opts.course?new URL(opts.course,document.baseURI).href:null;
 const prev=opts.prev?new URL(opts.prev,document.baseURI).href:null;
 const next=opts.next?new URL(opts.next,document.baseURI).href:null;
 const ctx=opts.context||'root';
 const isCourse=ctx==='lesson'||ctx==='course-home';
 const inFrame=window.parent!==window && window.name==='nq-eduspace-module';
 const title=opts.title||'EduSpace';
 let bar,panel,overlay;
 function el(tag,cls){const e=document.createElement(tag);if(cls)e.className=cls;return e}
 function option(label,action,disabled=false,wide=false){
  const b=el('button');b.type='button';b.textContent=label;b.disabled=disabled;if(wide)b.classList.add('nq-wide');b.addEventListener('click',()=>{close();action()});return b;
 }
 function close(){panel.classList.remove('nq-show');overlay.classList.remove('nq-show');panel.setAttribute('aria-hidden','true')}
 function open(label,items,note){
  panel.replaceChildren();const h=el('h2');h.textContent=label;panel.append(h);
  const c=el('button','nq-close');c.type='button';c.textContent='×';c.setAttribute('aria-label','Đóng menu');c.addEventListener('click',close);panel.append(c);
  const list=el('div','nq-options');items.forEach(x=>list.append(option(x[0],x[1],!!x[2],!!x[3])));panel.append(list);
  if(note){const p=el('p','nq-note');p.textContent=note;panel.append(p)}
  panel.classList.add('nq-show');overlay.classList.add('nq-show');panel.setAttribute('aria-hidden','false');c.focus();
 }
 function tellParent(route,id){if(inFrame){try{window.parent.postMessage({source:'nq-eduspace-phone-nav',route:route,id:id||''},'*');return true}catch(e){}}return false}
 function homepage(){
  if(ctx==='root' && typeof window.home==='function'){window.home();return}
  if(tellParent('home'))return;
  window.location.href=root;
 }
 function modulePage(id){
  if(ctx==='root' && typeof window.openModule==='function'){window.openModule(id);return}
  if(tellParent('module',id))return;
  window.location.href=root+'#'+id;
 }
 function browseSubject(kind){
  if(ctx==='root' && typeof window.selectKind==='function'){window.selectKind(kind);return}
  if(tellParent('kind',kind))return;
  window.location.href=root+'#chon-'+kind;
 }
 function gradeMenu(kind){const v=kind==='tin'?'Tin học':'Tiếng Anh';open('Chọn lớp · '+v,[3,4,5].map(n=>[`${kind==='tin'?'💻':'🌍'} ${v} lớp ${n}`,()=>modulePage(kind+n)]).concat([['📚 Xem tất cả '+v,()=>browseSubject(kind),false,true]]))}
 function menu(){
  const items=[['🏠 Về EduSpace',homepage]];
  if(isCourse){items.push(['📚 Danh sách bài '+title,()=>window.location.href=course]);if(ctx==='lesson'){
   items.push(['⬅ Bài trước',()=>window.location.href=prev,!prev]);items.push(['Bài tiếp ➜',()=>window.location.href=next,!next]);
  }}
  [3,4,5].forEach(n=>items.push(['💻 Tin học lớp '+n,()=>modulePage('tin'+n)]));
  [3,4,5].forEach(n=>items.push(['🌍 Tiếng Anh lớp '+n,()=>modulePage('eng'+n)]));
  items.push(['💌 Xưởng thiệp',()=>modulePage('card')]);
  open('☰ Điều hướng EduSpace',items,'Có thể chuyển khu học tập ngay trên điện thoại. Tiến độ học được lưu trên trình duyệt đang sử dụng.');
 }
 function addNav(icon,label,click,disabled=false,active=false){
  const b=el('button');b.type='button';b.disabled=disabled;
  const i=el('span','nq-ico');i.textContent=icon;
  const l=el('span');l.textContent=label;b.append(i,l);
  if(active)b.classList.add('nq-current');
  b.setAttribute('aria-label',label);b.addEventListener('click',click);bar.append(b);
 }
 function mount(){
  if(!document.body)return;
  document.body.classList.add('nq-phone-enabled');
  bar=el('nav');bar.id='nq-phonebar';bar.setAttribute('aria-label','Điều hướng điện thoại của EduSpace');
  overlay=el('div');overlay.id='nq-phone-overlay';overlay.addEventListener('click',close);
  panel=el('section');panel.id='nq-phone-panel';panel.setAttribute('aria-hidden','true');panel.setAttribute('aria-label','Bảng điều hướng');
  addNav('🏠','Trang chủ',homepage,false,ctx==='root');
  if(isCourse){
   addNav('📚','Môn học',()=>window.location.href=course,false,ctx==='course-home');
   if(ctx==='lesson'){
    addNav('◀','Bài trước',()=>window.location.href=prev,!prev);
    addNav('▶','Bài sau',()=>window.location.href=next,!next);
   }else{
    addNav('💻','Tin học',()=>gradeMenu('tin'));
    addNav('🌍','Tiếng Anh',()=>gradeMenu('eng'));
   }
  }else{
   addNav('💻','Tin học',()=>gradeMenu('tin'));
   addNav('🌍','Tiếng Anh',()=>gradeMenu('eng'));
   addNav('💌','Làm thiệp',()=>modulePage('card'),false,ctx==='art');
  }
  addNav('☰','Menu',menu);
  document.body.append(overlay,panel,bar);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 }
 
 function mountPhonePreview(){
  if(!document.body || document.getElementById('nq-phone-preview-toggle'))return;
  // Trên màn hình điện thoại chỉ hiển thị thanh điều hướng, không tạo khung mô phỏng.
  const btn=el('button');btn.id='nq-phone-preview-toggle';btn.type='button';btn.textContent='📱 Xem giao diện điện thoại';
  btn.title='Xem thử website theo chiều rộng màn hình điện thoại';
  const wrap=el('div');wrap.id='nq-phone-preview';wrap.setAttribute('role','dialog');wrap.setAttribute('aria-modal','true');wrap.setAttribute('aria-label','Xem thử giao diện điện thoại');
  const shell=el('div','nq-preview-frame');
  const head=el('div','nq-preview-head');
  const name=el('span');name.textContent='📱 Giao diện điện thoại (390 px)';
  const closeBtn=el('button');closeBtn.type='button';closeBtn.textContent='🖥 Máy tính';
  const frame=el('iframe');frame.name='nq-eduspace-preview';frame.setAttribute('allow','autoplay; fullscreen');frame.title='Xem thử giao diện điện thoại Ngô Quyền EduSpace';
  head.append(name,closeBtn);shell.append(head,frame);wrap.append(shell);
  let previousOverflow='';
  function closePreview(){wrap.classList.remove('nq-show');frame.src='about:blank';document.body.style.overflow=previousOverflow;btn.focus()}
  function openPreview(){
   if(!window.matchMedia('(min-width:761px)').matches)return;
   // iframe rộng 390px kích hoạt chính các breakpoint điện thoại của website.
   previousOverflow=document.body.style.overflow;wrap.classList.add('nq-show');document.body.style.overflow='hidden';
   frame.src=location.href;
   closeBtn.focus();
  }
  btn.addEventListener('click',openPreview);closeBtn.addEventListener('click',closePreview);
  wrap.addEventListener('click',e=>{if(e.target===wrap)closePreview()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&wrap.classList.contains('nq-show'))closePreview()});
  // Không hiện nút preview bên trong khung mô phỏng: ở đó đã là màn hình nhỏ.
  document.body.append(btn,wrap);
 }
 function mountAll(){mount();mountPhonePreview()}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountAll,{once:true});else mountAll();
})();
