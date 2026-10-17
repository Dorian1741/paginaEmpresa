const S=[["Aplicaciones a la medida","Sistemas de gestión, paneles y portales hechos para el proceso real de tu organización, no adaptados a la fuerza desde una plantilla.",["Sistemas de gestión internos","Paneles con reportes","Portales para clientes","Integración con tus herramientas"]],
["Plataformas SaaS","Un solo producto que atiende a muchas organizaciones, cada una con sus datos, usuarios y configuración separados.",["Arquitectura multiempresa","Roles y permisos","Planes y suscripciones","Escalado sin reinstalar"]],
["Datos e IA","Análisis de datos y modelos de inteligencia artificial aplicados a problemas concretos de tu operación.",["Análisis y visualización","Modelos predictivos","Automatización de procesos","Asistentes con IA"]],
["Soporte y evolución","Seguimos contigo después del lanzamiento, para que el sistema cambie al ritmo de tu negocio.",["Corrección de errores","Nuevas funciones","Mejoras de rendimiento","Respaldo y seguridad"]]];
const p=document.getElementById('p'),tabs=[...document.querySelectorAll('.tab')];
function show(i){tabs.forEach((t,k)=>t.setAttribute('aria-selected',k===i));const s=S[i];p.style.animation='none';p.offsetWidth;p.style.animation='';
p.innerHTML='<h3>'+s[0]+'</h3><p>'+s[1]+'</p><ul>'+s[2].map(x=>'<li>'+x+'</li>').join('')+'</ul>'}
tabs.forEach((t,i)=>{t.onclick=()=>show(i);t.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();tabs[(i+1)%4].focus();show((i+1)%4)}if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();tabs[(i+3)%4].focus();show((i+3)%4)}}});show(0);
document.getElementById('f').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);
location.href='mailto:contacto@ursusarctos.com?subject='+encodeURIComponent('Proyecto: '+d.get('t'))+'&body='+encodeURIComponent(d.get('m')+'\n\n'+d.get('n')+'\n'+d.get('e'))};
