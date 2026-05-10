
// ━━━━━━━━━━━━━━━━ DATA ━━━━━━━━━━━━━━━━
const DISTRICTS = [
  {name:'Денов т',       rating:12, data:[10,20.4,17.7,7,20,7.7,55.8,100,100,4.2,20,37.5,0,0],
   plans:[10,495,198,98,98,13,853,1,8,24,5,40,1,1], actuals:[1,101,35,7,20,1,476,1,8,1,1,15,0,0]},
  {name:'Бойсун т',      rating:9,  data:[20,20.6,46.4,13,128,0,65.6,100,50,37.5,40,66.7,0,0],
   plans:[10,286,84,39,39,11,389,1,8,24,5,12,1,1], actuals:[2,59,39,5,50,0,255,1,4,9,2,8,0,0]},
  {name:'Жаркўргон т',   rating:8,  data:[140,19.6,15.9,15,130,0,69.7,0,100,100,60,19.2,100,0],
   plans:[10,637,220,66,66,8,904,1,8,24,5,26,1,1], actuals:[14,125,35,10,86,0,540,0,8,24,3,5,1,0]},
  {name:'Музработ т',    rating:8,  data:[40,33,22.6,5,19,0,54.2,0,87.5,100,0,60,0,100],
   plans:[10,106,159,37,37,4,413,1,8,24,3,5,1,1], actuals:[4,35,36,2,7,0,224,0,7,24,0,3,0,1]},
  {name:'Шеробод т',     rating:9,  data:[60,60,60,60,60,60,60,60,100,100,38,38,40,35.9],
   plans:[10,80,200,48,48,13,548,1,8,24,5,15,1,1], actuals:[6,48,120,29,29,8,330,1,8,24,8,15,1,1]},

  {name:'Бандихон т',    rating:7,  data:[10,44.2,32.7,18,100,0,65.9,100,100,20.8,0,100,100,0],
   plans:[10,77,52,22,22,1,173,1,8,24,5,5,1,1], actuals:[1,34,17,4,22,0,114,1,8,5,0,5,1,0]},
  {name:'Узун т',        rating:7,  data:[30,56.3,34.8,47,25,0,78.9,100,100,62.5,20,32.1,100,100],
   plans:[10,71,112,51,51,1,369,1,8,24,5,28,1,1], actuals:[3,40,39,24,13,0,291,1,8,15,1,9,1,1]},
  {name:'Қумқўргон т',   rating:6,  data:[40,56.9,30.2,7,58,0,78.5,100,100,95.8,40,57.1,0,0],
   plans:[10,58,169,60,60,6,562,1,8,24,5,14,1,1], actuals:[4,33,51,4,35,0,441,1,8,23,2,8,0,0]},
  {name:'Олтинсой т',    rating:5,  data:[40,71.1,39,13,67,0,75.1,100,100,95.8,0,35.7,100,100],
   plans:[10,45,141,54,54,4,906,1,8,24,5,14,1,1], actuals:[4,32,55,7,36,0,680,1,8,23,0,5,1,1]},
  {name:'Термиз т',      rating:5,  data:[40,52.6,37.4,20,37,50,83.8,100,75,100,0,35.7,100,100],
   plans:[10,152,147,30,30,4,390,1,8,24,5,14,1,1], actuals:[4,80,55,6,11,2,327,1,6,24,0,5,1,1]},
  {name:'Қизириқ т',     rating:4,  data:[20,68.4,43.5,23,100,25,60.9,100,25,25,0,68.2,100,0],
   plans:[10,38,92,31,31,4,243,1,8,24,3,22,1,1], actuals:[2,26,40,7,31,1,148,1,2,6,0,15,1,0]},
  {name:'Термиз ш',      rating:4,  data:[10,39.6,40.6,30,27,62.5,72.7,100,75,75,0,100,100,100],
   plans:[10,652,133,37,37,8,359,1,8,24,3,3,1,1], actuals:[1,258,54,11,10,5,261,1,6,18,0,3,1,1]},
  {name:'Шўрчи т',       rating:4,  data:[50,26.7,40.8,6,79,33.3,74.2,100,100,100,70,24.1,100,0],
   plans:[10,202,130,53,53,6,581,1,8,24,10,29,1,1], actuals:[5,54,53,3,42,2,431,1,8,24,7,7,1,0]},
  {name:'Ангор т',       rating:3,  data:[30,70.8,60,14,92,25,83.8,100,100,100,20,17.6,100,100],
   plans:[10,48,170,36,36,4,370,1,8,24,5,34,1,1], actuals:[3,34,102,5,33,1,310,1,8,24,1,6,1,1]},
  {name:'Сариосиё т',    rating:2,  data:[70,41.8,42.5,21,56,25,87.9,100,100,95.8,40,47.4,100,100],
   plans:[10,146,87,61,61,12,463,1,8,24,5,38,1,1], actuals:[7,61,37,13,34,3,407,1,8,23,2,18,1,1]},
];

const CATS = [
  '"Ko\'mak" loyihasi ijrosi',
  '"Otalikka" olgan yoshlar',
  'Harbiy xizmatdan qaytgan yoshlar bandligi',
  'PK-60 kredit ajratilishi',
  'Ko\'ma sado nuqtalari',
  'Murojaatlar bilan ishlash',
  'PK-801 xulosalar',
  '"Yangi O\'zbekiston 2030" strategiyasi',
  'Shaxmat musobaqasi (sektor bosqichi)',
  'Shashka musobaqasi (sektor bosqichi)',
  '2+6 loyihasi bo\'yicha',
  'Migratsiya guruhiga qo\'shish',
  'Shikoyat va g\'ayrat',
  'Beshtaabbos — tanlovlar xisobi',
];

// ━━━━━━━━━━━━━━━━ HELPERS ━━━━━━━━━━━━━━━━
function avg(arr){ return arr.reduce((a,b)=>a+b,0)/arr.length; }
function pctClass(v){
  if(v<30) return 'p-crit';
  if(v<60) return 'p-warn';
  if(v<90) return 'p-ok';
  return 'p-great';
}
function pctColor(v){
  if(v<30) return '#f05252';
  if(v<60) return '#f59e0b';
  if(v<90) return '#10b981';
  return '#4f8ef7';
}
function ratingClass(r){ return r>=10?'rb-gold':r>=7?'rb-silver':r>=5?'rb-bronze':'rb-low'; }
function districtAvg(d){ return avg(d.data); }

// ━━━━━━━━━━━━━━━━ KPI ━━━━━━━━━━━━━━━━
function renderKPIs(){
  const allPcts = DISTRICTS.flatMap(d=>d.data);
  const overallAvg = avg(allPcts).toFixed(1);
  const totalPlan = DISTRICTS.reduce((s,d)=>s+d.plans.reduce((a,b)=>a+b,0),0);
  const totalActual = DISTRICTS.reduce((s,d)=>s+d.actuals.reduce((a,b)=>a+b,0),0);
  const overall = ((totalActual/totalPlan)*100).toFixed(1);
  const low = allPcts.filter(p=>p<30).length;
  const best = [...DISTRICTS].sort((a,b)=>districtAvg(b)-districtAvg(a))[0];

  document.getElementById('kpiGrid').innerHTML = `
    <div class="kpi-card c-teal"><div class="kpi-glow"></div>
      <div class="kpi-label">Umumiy bajarilish</div>
      <div class="kpi-value">${overall}%</div>
      <div class="kpi-sub">Viloyat bo'yicha jami</div>
    </div>
    <div class="kpi-card c-blue" style="animation-delay:.07s"><div class="kpi-glow"></div>
      <div class="kpi-label">O'rtacha ko'rsatkich</div>
      <div class="kpi-value">${overallAvg}%</div>
      <div class="kpi-sub">Barcha yo'nalishlar</div>
    </div>
    <div class="kpi-card c-red" style="animation-delay:.14s"><div class="kpi-glow"></div>
      <div class="kpi-label">Muammoli holat</div>
      <div class="kpi-value">${low}</div>
      <div class="kpi-sub">30% dan past ko'rsatk.</div>
    </div>
    <div class="kpi-card c-amber" style="animation-delay:.21s"><div class="kpi-glow"></div>
      <div class="kpi-label">Tumanlar</div>
      <div class="kpi-value">${DISTRICTS.length}</div>
      <div class="kpi-sub">Nazorat ostidagi</div>
    </div>
    <div class="kpi-card c-green" style="animation-delay:.28s"><div class="kpi-glow"></div>
      <div class="kpi-label">Eng yaxshi tuman</div>
      <div class="kpi-value" style="font-size:1.1rem;line-height:1.4">${best.name}</div>
      <div class="kpi-sub">Reyting: ${best.rating}</div>
    </div>
  `;
}

// ━━━━━━━━━━━━━━━━ TABLE ━━━━━━━━━━━━━━━━
let sortCol = -1, sortDir = 1;

function buildCatFilter(){
  const sel = document.getElementById('catFilter');
  CATS.forEach((c,i)=>{
    const o = document.createElement('option');
    o.value = i; o.textContent = `${i+1}. ${c.substring(0,30)}…`;
    sel.appendChild(o);
  });
}

function renderTable(){
  const q = document.getElementById('srchInput').value.toLowerCase();
  const catF = parseInt(document.getElementById('catFilter').value);
  const pctF = document.getElementById('pctFilter').value;

  let rows = [...DISTRICTS];
  if(q) rows = rows.filter(d=>d.name.toLowerCase().includes(q));
  if(pctF !== 'all'){
    rows = rows.filter(d=>{
      const pcts = catF>=0 ? [d.data[catF]] : d.data;
      const a = avg(pcts);
      if(pctF==='low') return a<30;
      if(pctF==='mid') return a>=30&&a<60;
      if(pctF==='hi') return a>=60;
    });
  }
  if(sortCol>=0){
    rows.sort((a,b)=>{
      if(sortCol===0){ return sortDir*(a.name<b.name?-1:1); }
      if(sortCol===1){ return sortDir*(a.rating-b.rating); }
      const ci=sortCol-2;
      return sortDir*(a.data[ci]-b.data[ci]);
    });
  }

  const showCats = catF>=0 ? [catF] : [...Array(CATS.length).keys()];

  // Head
  document.getElementById('tableHead').innerHTML = `<tr>
    <th onclick="sortBy(0)" class="${sortCol===0?'sorted':''}">Tuman ${sortCol===0?(sortDir>0?'↑':'↓'):'⇅'}</th>
    <th onclick="sortBy(1)" class="${sortCol===1?'sorted':''}">Reyting ${sortCol===1?(sortDir>0?'↑':'↓'):'⇅'}</th>
    ${showCats.map(i=>`<th onclick="sortBy(${i+2})" class="${sortCol===i+2?'sorted':''}" title="${CATS[i]}">
      ${i+1}. ${CATS[i].substring(0,18)}… ${sortCol===i+2?(sortDir>0?'↑':'↓'):'⇅'}
    </th>`).join('')}
    <th>O'rtacha</th>
  </tr>`;

  if(!rows.length){
    document.getElementById('tableBody').innerHTML=`<tr><td colspan="99"><div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <div>Hech narsa topilmadi</div></div></td></tr>`;
    return;
  }

  document.getElementById('tableBody').innerHTML = rows.map(d=>{
    const pcts = showCats.map(i=>d.data[i]);
    const a = avg(pcts).toFixed(1);
    return `<tr>
      <td class="td-district">${d.name}</td>
      <td><span class="rating-badge ${ratingClass(d.rating)}">${d.rating}</span></td>
      ${pcts.map(p=>{
        const cap = Math.min(p,100);
        return `<td>
          <div style="display:flex;align-items:center;gap:4px">
            <span class="mini-bar-bg"><span class="mini-bar-fg" style="width:${cap}%;background:${pctColor(p)};display:block"></span></span>
            <span class="pct-pill ${pctClass(p)}"><span class="dot"></span>${p.toFixed(1)}%</span>
          </div>
        </td>`;
      }).join('')}
      <td><span class="pct-pill ${pctClass(parseFloat(a))}"><span class="dot"></span>${a}%</span></td>
    </tr>`;
  }).join('');
}

function sortBy(col){
  if(sortCol===col) sortDir*=-1; else { sortCol=col; sortDir=1; }
  renderTable();
}

// ━━━━━━━━━━━━━━━━ CATEGORIES ━━━━━━━━━━━━━━━━
function renderCategories(){
  const totalPlan  = i => DISTRICTS.reduce((s,d)=>s+d.plans[i],0);
  const totalActual= i => DISTRICTS.reduce((s,d)=>s+d.actuals[i],0);

  document.getElementById('catGrid').innerHTML = CATS.map((c,i)=>{
    const p=totalPlan(i), a=totalActual(i);
    const pct = p>0 ? (a/p*100) : 0;
    const cls = pctClass(pct);
    const col = pctColor(pct);
    return `<div class="cat-card">
      <div class="cat-num">YO'NALISH ${i+1}</div>
      <div class="cat-name">${c}</div>
      <div class="cat-progress-row">
        <div class="cat-bar-bg"><div class="cat-bar-fill" style="width:${Math.min(pct,100)}%;background:${col}"></div></div>
        <span class="cat-pct" style="color:${col}">${pct.toFixed(1)}%</span>
      </div>
      <div class="cat-nums">Reja: ${p.toLocaleString()} · Bajarildi: ${a.toLocaleString()}</div>
    </div>`;
  }).join('');
}

// ━━━━━━━━━━━━━━━━ RANKING ━━━━━━━━━━━━━━━━
function renderRanking(){
  const sorted = [...DISTRICTS]
    .map(d=>({...d, a: avg(d.data)}))
    .sort((a,b)=>b.a-a.a);

  document.getElementById('rankList').innerHTML = sorted.map((d,idx)=>{
    const posClass = idx===0?'top1':idx===1?'top2':idx===2?'top3':'';
    const col = pctColor(d.a);
    return `<div class="rank-row" style="animation-delay:${idx*0.04}s">
      <span class="rank-pos ${posClass}">${idx===0?'🥇':idx===1?'🥈':idx===2?'🥉':idx+1}</span>
      <span class="rank-name">${d.name}</span>
      <span class="rank-rating">Reyting: ${d.rating}</span>
      <div class="rank-bar-area">
        <div class="rank-bar-bg"><div class="rank-bar-fill" style="width:${Math.min(d.a,100)}%;background:${col}"></div></div>
        <span class="rank-pct" style="color:${col}">${d.a.toFixed(1)}%</span>
      </div>
    </div>`;
  }).join('');
}

// ━━━━━━━━━━━━━━━━ DASHBOARD MINI RANK ━━━━━━━━━━━━━━━━
function renderDashMini(){
  const sorted = [...DISTRICTS].map(d=>({...d,a:avg(d.data)})).sort((a,b)=>b.a-a.a);
  document.getElementById('dashMiniRank').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">
    ${sorted.map((d,i)=>{
      const col=pctColor(d.a);
      return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:0.72rem;color:var(--text-muted);min-width:20px;text-align:right">${i+1}</span>
        <span style="flex:1;font-size:0.82rem">${d.name}</span>
        <span style="font-family:var(--mono);font-size:0.78rem;font-weight:600;color:${col}">${d.a.toFixed(1)}%</span>
      </div>`;
    }).join('')}
    </div>`;
}

// ━━━━━━━━━━━━━━━━ CHARTS ━━━━━━━━━━━━━━━━
let charts = {};
function destroyChart(id){ if(charts[id]){ charts[id].destroy(); delete charts[id]; } }

function renderDistrictChart(){
  destroyChart('districtChart');
  const sorted = [...DISTRICTS].map(d=>({n:d.name.split(' ')[0], a:avg(d.data)})).sort((a,b)=>b.a-a.a);
  charts['districtChart'] = new Chart(document.getElementById('districtChart'), {
    type: 'bar',
    data: {
      labels: sorted.map(d=>d.n),
      datasets: [{
        label: 'O\'rtacha bajarilish %',
        data: sorted.map(d=>parseFloat(d.a.toFixed(1))),
        backgroundColor: sorted.map(d=>pctColor(d.a)+'88'),
        borderColor: sorted.map(d=>pctColor(d.a)),
        borderWidth: 1, borderRadius: 5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color:'#7a8aaa', font:{size:10} }, grid:{color:'#1e2d4a'} },
        y: { ticks: { color:'#7a8aaa', font:{size:10}, callback:v=>v+'%' }, grid:{color:'#1e2d4a'}, max:100 }
      }
    }
  });
}

function renderCatChart(){
  destroyChart('catChart');
  const data = CATS.map((_,i)=>{
    const p=DISTRICTS.reduce((s,d)=>s+d.plans[i],0);
    const a=DISTRICTS.reduce((s,d)=>s+d.actuals[i],0);
    return p>0?(a/p*100):0;
  });
  charts['catChart'] = new Chart(document.getElementById('catChart'), {
    type: 'bar',
    data: {
      labels: CATS.map((_,i)=>`#${i+1}`),
      datasets: [{
        label: 'Bajarilish %',
        data: data.map(v=>parseFloat(v.toFixed(1))),
        backgroundColor: data.map(v=>pctColor(v)+'88'),
        borderColor: data.map(v=>pctColor(v)),
        borderWidth: 1, borderRadius: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks:{color:'#7a8aaa',font:{size:10}}, grid:{color:'#1e2d4a'} },
        y: { ticks:{color:'#7a8aaa',font:{size:10},callback:v=>v+'%'}, grid:{color:'#1e2d4a'}, max:100 }
      }
    }
  });
}

function renderChartsPage(){
  // Scatter
  destroyChart('scatterChart');
  charts['scatterChart'] = new Chart(document.getElementById('scatterChart'), {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Tumanlar',
        data: DISTRICTS.map(d=>({x:d.rating, y:parseFloat(avg(d.data).toFixed(1)), label:d.name})),
        backgroundColor: '#00d4aa55', borderColor: '#00d4aa', pointRadius: 7, pointHoverRadius: 9,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend:{display:false},
        tooltip:{callbacks:{label:ctx=>`${ctx.raw.label}: Reyting ${ctx.raw.x}, Bajarilish ${ctx.raw.y}%`}}
      },
      scales: {
        x: { title:{display:true,text:'Reyting',color:'#7a8aaa'}, ticks:{color:'#7a8aaa'}, grid:{color:'#1e2d4a'} },
        y: { title:{display:true,text:'O\'rtacha %',color:'#7a8aaa'}, ticks:{color:'#7a8aaa',callback:v=>v+'%'}, grid:{color:'#1e2d4a'} }
      }
    }
  });

  // Donut
  destroyChart('donutChart');
  const allPcts = DISTRICTS.flatMap(d=>d.data);
  const grps = [
    allPcts.filter(p=>p<30).length,
    allPcts.filter(p=>p>=30&&p<60).length,
    allPcts.filter(p=>p>=60&&p<90).length,
    allPcts.filter(p=>p>=90).length,
  ];
  charts['donutChart'] = new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: {
      labels: ['Kritik (<30%)', 'O\'rta (30-60%)', 'Yaxshi (60-90%)', 'A\'lo (90%+)'],
      datasets: [{
        data: grps,
        backgroundColor: ['#f0525288','#f59e0b88','#10b98188','#4f8ef788'],
        borderColor: ['#f05252','#f59e0b','#10b981','#4f8ef7'],
        borderWidth: 2, hoverOffset: 6,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position:'right', labels:{color:'#7a8aaa',font:{size:12},padding:16,boxWidth:12} }
      }
    }
  });

  // Horizontal bar
  destroyChart('hbarChart');
  const sorted = [...DISTRICTS].map(d=>({n:d.name, a:avg(d.data)})).sort((a,b)=>a.a-b.a);
  charts['hbarChart'] = new Chart(document.getElementById('hbarChart'), {
    type: 'bar',
    data: {
      labels: sorted.map(d=>d.n),
      datasets: [{
        axis: 'y',
        label: 'O\'rtacha bajarilish %',
        data: sorted.map(d=>parseFloat(d.a.toFixed(1))),
        backgroundColor: sorted.map(d=>pctColor(d.a)+'77'),
        borderColor: sorted.map(d=>pctColor(d.a)),
        borderWidth: 1, borderRadius: 4,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: { legend:{display:false} },
      scales: {
        x: { ticks:{color:'#7a8aaa',callback:v=>v+'%'}, grid:{color:'#1e2d4a'}, max:100 },
        y: { ticks:{color:'#aab4cc',font:{size:12}}, grid:{color:'#1e2d4a'} }
      }
    }
  });
}

// ━━━━━━━━━━━━━━━━ GOVERNORS CHART ━━━━━━━━━━━━━━━━
function renderGovernorsChart(){
  destroyChart('governorsChart');
  charts['governorsChart'] = new Chart(document.getElementById('governorsChart'), {
    type: 'line',
    data: {
      labels: ['2024', '2025', '2026', '2027'],
      datasets: [{
        label: 'Rivojlanish indeksi',
        data: [75, 82, 95, 98],
        backgroundColor: 'rgba(0, 212, 170, 0.2)',
        borderColor: '#00d4aa',
        borderWidth: 2,
        fill: true,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color:'#7a8aaa', callback:v=>v+'%' }, grid:{color:'#1e2d4a'}, max:100 }
      }
    }
  });
}

// ━━━━━━━━━━━━━━━━ NAVIGATION ━━━━━━━━━━━━━━━━
const PAGE_TITLES_I18N = {
  uz: {
    dashboard: 'Dashboard',
    table: 'Ma' + "'" + 'lumotlar jadvali',
    categories: 'Yo'nalishlar',
    ranking: 'Reyting',
    charts: 'Grafiklar',
    tourism: 'Sherobod turizmi',
    governors: 'Hokimlar monitoringi',
    union: 'Hokim Yoshlar Ittifoqi',
    qol: 'Qol boshla',
  },
  en: {
    dashboard: 'Dashboard',
    table: 'Data table',
    categories: 'Categories',
    ranking: 'Ranking',
    charts: 'Charts',
    tourism: 'Sherobod tourism',
    governors: 'Governors monitoring',
    union: 'Governor Youth Union',
    qol: 'Start Qol',
  },
  ru: {
    dashboard: 'Dashboard',
    table: 'Таблица данных',
    categories: 'Категории',
    ranking: 'Рейтинг',
    charts: 'Графики',
    tourism: 'Туризм Шеробода',
    governors: 'Мониторинг губернаторов',
    union: 'Союз молодежи губернатора',
    qol: 'Запустить Qol',
  }
};

const TRANSLATIONS = {
  uz: {
    download: 'Yuklab olish',
    theme: 'Tema',
    autoLogin: 'Admin avtomatik',
    live: 'Jonli',
    on: 'yoqilgan',
    off: 'o'chirilgan',
    breadcrumb: 'Surxondaryo · 2026',
  },
  en: {
    download: 'Download',
    theme: 'Theme',
    autoLogin: 'Auto login',
    live: 'Live',
    on: 'enabled',
    off: 'disabled',
    breadcrumb: 'Surxondaryo · 2026',
  },
  ru: {
    download: 'Скачать',
    theme: 'Тема',
    autoLogin: 'Автовход',
    live: 'Онлайн',
    on: 'включен',
    off: 'выключен',
    breadcrumb: 'Сурхандарьинская область · 2026',
  }
};

let currentLang = 'uz';

function updateI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(TRANSLATIONS[currentLang][key]){
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });
  document.getElementById('breadcrumb').textContent = TRANSLATIONS[currentLang].breadcrumb;
  const activePage = document.querySelector('.page.active')?.id?.replace('page-','');
  if(activePage){
    document.getElementById('pageTitle').textContent = PAGE_TITLES_I18N[currentLang][activePage] || PAGE_TITLES_I18N[currentLang].dashboard;
  }
  const statusEl = document.getElementById('autoLoginStatus');
  if(statusEl){
    const status = localStorage.getItem('adminAutoLogin') === 'true';
    statusEl.textContent = status ? TRANSLATIONS[currentLang].on : TRANSLATIONS[currentLang].off;
  }
  const autoLoginText = document.getElementById('autoLoginText');
  if(autoLoginText){
    autoLoginText.textContent = TRANSLATIONS[currentLang].autoLogin;
  }
}

function setLang(lang){
  currentLang = lang;
  document.getElementById('langSelect').value = lang;
  updateI18n();
  localStorage.setItem('selectedLang', lang);
}

function changeLang(){
  setLang(document.getElementById('langSelect').value);
}

function navigate(page, el){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  const navEl = el || document.querySelector(`.nav-item[data-page="${page}"]`);
  if(navEl) navEl.classList.add('active');
  document.getElementById('pageTitle').textContent = PAGE_TITLES_I18N[currentLang][page] || page;
  if(page==='table') renderTable();
  if(page==='categories') renderCategories();
  if(page==='ranking') renderRanking();
  if(page==='charts') setTimeout(renderChartsPage, 80);
  if(page==='governors') setTimeout(renderGovernorsChart, 80);
  if(window.innerWidth<=900) toggleSidebar();
}

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

function toggleTheme(){
  document.body.classList.toggle('theme-blue');
}

function toggleAdminAutoLogin(){
  const enabled = localStorage.getItem('adminAutoLogin') === 'true';
  localStorage.setItem('adminAutoLogin', (!enabled).toString());
  updateI18n();
  if(!enabled) navigate('union');
}

// ━━━━━━━━━━━━━━━━ EXPORT ━━━━━━━━━━━━━━━━
function exportCSV(){
  const rows = [['Tuman', 'Reyting', ...CATS, "O'rtacha"]];
  DISTRICTS.forEach(d=>{
    rows.push([d.name, d.rating, ...d.data.map(v=>v.toFixed(1)), avg(d.data).toFixed(1)]);
  });
  const csv = rows.map(r=>r.map(v=>`"${v}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,\uFEFF'+encodeURIComponent(csv);
  a.download = 'yoshlar_monitoring.csv';
  a.click();
}

// ━━━━━━━━━━━━━━━━ INIT ━━━━━━━━━━━━━━━━
setLang(localStorage.getItem('selectedLang') || 'uz');
renderKPIs();
buildCatFilter();
renderTable();
renderDashMini();
setTimeout(()=>{ renderDistrictChart(); renderCatChart(); }, 100);
if(localStorage.getItem('adminAutoLogin') === 'true'){
  navigate('union');
}
