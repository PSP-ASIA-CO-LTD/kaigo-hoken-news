---
title: "Competitor Market Map"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T00:00:00+07:00
description: "The nine profiled care-software products positioned by segment and role, with M3 group ownership links shown. Filter by segment; tap any product for a summary and profile link."
weight: 3
infographic_type: "map"
sources:
  - title: "Competitors section"
    url: "/competitors/"
    note: "Overview tables and all individual profiles"
  - title: "The M3 group in care"
    url: "/competitors/m3-group/"
    note: "M3 ownership of Wiseman, Care-wing, Elan"
  - title: "Feature matrix"
    url: "/competitors/feature-matrix/"
    note: "Comparison of CAREKARTE, ZEST, SmaCare with the first five"
---

<div class="filter-controls" role="group" aria-label="Filter products by segment">
  <button class="filter-btn" aria-pressed="true" data-filter="all">All Products</button>
  <button class="filter-btn" aria-pressed="false" data-filter="home-visit">Home-Visit</button>
  <button class="filter-btn" aria-pressed="false" data-filter="care-mgmt">Care Management</button>
  <button class="filter-btn" aria-pressed="false" data-filter="day">Day Services</button>
  <button class="filter-btn" aria-pressed="false" data-filter="facility">Facilities</button>
  <button class="filter-btn" aria-pressed="false" data-filter="scheduling">Scheduling/HR</button>
  <button class="filter-btn" aria-pressed="false" data-filter="rehab">Rehab/Add-ons</button>
</div>

<div class="diagram-wrapper">
  <svg class="diagram-svg" viewBox="0 0 900 600" role="img" aria-label="Market map showing care software products by segment and role">
    <title>Competitor Market Map</title>
    <defs>
      <marker id="m3-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#c62828"/>
      </marker>
    </defs>
    
    <!-- Axis labels -->
    <text class="node-text" x="450" y="25" font-weight="bold" font-size="13">ROLE IN THE MARKET</text>
    <text class="node-text" x="150" y="55" font-size="11">All-in-One Billing Suite</text>
    <text class="node-text" x="450" y="55" font-size="11">Records Front-End</text>
    <text class="node-text" x="750" y="55" font-size="11">Specialist Add-On</text>
    
    <!-- Vertical axis -->
    <text class="node-text" x="20" y="200" font-size="11" transform="rotate(-90, 20, 200)">SEGMENTS SERVED</text>
    
    <!-- Grid lines (faint) -->
    <line x1="300" y1="70" x2="300" y2="550" stroke="#ddd" stroke-dasharray="4 4"/>
    <line x1="600" y1="70" x2="600" y2="550" stroke="#ddd" stroke-dasharray="4 4"/>
    
    <!-- Segment rows (backgrounds) -->
    <rect x="50" y="70" width="800" height="75" fill="#fafafa" stroke="#e0e0e0"/>
    <text class="node-text node-text--small" x="60" y="90" font-weight="bold">Facilities (tokuyō, rōken)</text>
    
    <rect x="50" y="145" width="800" height="75" fill="#fff" stroke="#e0e0e0"/>
    <text class="node-text node-text--small" x="60" y="165" font-weight="bold">Home-Visit Care/Nursing</text>
    
    <rect x="50" y="220" width="800" height="75" fill="#fafafa" stroke="#e0e0e0"/>
    <text class="node-text node-text--small" x="60" y="240" font-weight="bold">Care Management</text>
    
    <rect x="50" y="295" width="800" height="75" fill="#fff" stroke="#e0e0e0"/>
    <text class="node-text node-text--small" x="60" y="315" font-weight="bold">Day Services</text>
    
    <rect x="50" y="370" width="800" height="75" fill="#fafafa" stroke="#e0e0e0"/>
    <text class="node-text node-text--small" x="60" y="390" font-weight="bold">Scheduling & HR</text>
    
    <rect x="50" y="445" width="800" height="75" fill="#fff" stroke="#e0e0e0"/>
    <text class="node-text node-text--small" x="60" y="465" font-weight="bold">Rehab / LIFE Add-ons</text>
    
    <!-- M3 GROUP BOX -->
    <rect x="520" y="85" width="310" height="195" fill="none" stroke="#c62828" stroke-width="2" stroke-dasharray="6 4" rx="8"/>
    <text class="node-text" x="675" y="102" fill="#c62828" font-size="11" font-weight="bold">M3 GROUP (since July 2026)</text>
    
    <!-- PRODUCTS -->
    
    <!-- HONOBONO NEXT - All-in-one, facilities + home -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="honobono" data-segments="facility,home-visit,care-mgmt,day">
      <rect class="node-rect node-rect--primary" x="80" y="100" width="140" height="55" rx="4"/>
      <text class="node-text" x="150" y="118">Honobono NEXT</text>
      <text class="node-text node-text--ja" x="150" y="132" font-size="9">ほのぼのNEXT</text>
      <text class="node-text node-text--small" x="150" y="148">72,300+ offices</text>
    </g>
    
    <!-- WISEMAN - M3 group, facilities + home -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="wiseman" data-segments="facility,home-visit,care-mgmt,day">
      <rect class="node-rect" x="540" y="110" width="130" height="55" rx="4" fill="#ffebee" stroke="#c62828"/>
      <text class="node-text" x="605" y="128">Wiseman</text>
      <text class="node-text node-text--ja" x="605" y="142" font-size="9">ワイズマン</text>
      <text class="node-text node-text--small" x="605" y="157">61,200+ offices</text>
    </g>
    
    <!-- KAIPOKE - All-in-one, home-based focus -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="kaipoke" data-segments="home-visit,care-mgmt,day">
      <rect class="node-rect node-rect--primary" x="80" y="170" width="140" height="55" rx="4"/>
      <text class="node-text" x="150" y="188">Kaipoke</text>
      <text class="node-text node-text--ja" x="150" y="202" font-size="9">カイポケ</text>
      <text class="node-text node-text--small" x="150" y="218">62,300 offices</text>
    </g>
    
    <!-- KANAMIC - All-in-one + network -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="kanamic" data-segments="facility,home-visit,care-mgmt,day">
      <rect class="node-rect node-rect--primary" x="80" y="245" width="140" height="50" rx="4"/>
      <text class="node-text" x="150" y="263">Kanamic</text>
      <text class="node-text node-text--ja" x="150" y="277" font-size="9">カナミック</text>
      <text class="node-text node-text--small" x="150" y="290">57,763 offices</text>
    </g>
    
    <!-- CAREKARTE - All-in-one, facilities focus -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="carekarte" data-segments="facility,home-visit,care-mgmt,day">
      <rect class="node-rect node-rect--primary" x="240" y="100" width="130" height="55" rx="4"/>
      <text class="node-text" x="305" y="118">CAREKARTE</text>
      <text class="node-text node-text--ja" x="305" y="132" font-size="9">ケアカルテ</text>
      <text class="node-text node-text--small" x="305" y="148">~19–21K offices</text>
    </g>
    
    <!-- CARE-WING - M3 group, records for home-visit -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="care-wing" data-segments="home-visit">
      <rect class="node-rect" x="540" y="170" width="130" height="55" rx="4" fill="#ffebee" stroke="#c62828"/>
      <text class="node-text" x="605" y="188">Care-wing</text>
      <text class="node-text node-text--ja" x="605" y="202" font-size="9">ケアウイング</text>
      <text class="node-text node-text--small" x="605" y="218">3,000+ offices</text>
    </g>
    
    <!-- M3 ownership arrow -->
    <text class="node-text node-text--small" x="675" y="235" fill="#c62828">M3 owns 100%</text>
    
    <!-- ZEST - Scheduling specialist -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="zest" data-segments="scheduling,home-visit">
      <rect class="node-rect" x="650" y="390" width="120" height="50" rx="4"/>
      <text class="node-text" x="710" y="408">ZEST</text>
      <text class="node-text node-text--ja" x="710" y="422" font-size="9">ゼスト</text>
      <text class="node-text node-text--small" x="710" y="435">Scheduling/routes</text>
    </g>
    
    <!-- SMACARE - Specialist for teiki-junkai -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="smacare" data-segments="home-visit,scheduling">
      <rect class="node-rect" x="380" y="170" width="130" height="55" rx="4"/>
      <text class="node-text" x="445" y="188">SmaCare</text>
      <text class="node-text node-text--ja" x="445" y="202" font-size="9">スマケア</text>
      <text class="node-text node-text--small" x="445" y="218">700 offices (~47%)</text>
    </g>
    
    <!-- REHAB CLOUD - Rehab/LIFE specialist -->
    <g class="diagram-node product-node" role="button" tabindex="0" data-product="rehab-cloud" data-segments="rehab,day,facility">
      <rect class="node-rect" x="700" y="465" width="130" height="50" rx="4"/>
      <text class="node-text" x="765" y="483">Rehab Cloud</text>
      <text class="node-text node-text--ja" x="765" y="497" font-size="9">リハブクラウド</text>
      <text class="node-text node-text--small" x="765" y="510">4,316+ offices</text>
    </g>
    
    <!-- Link lines showing integrations -->
    <g class="integration-lines" opacity="0.5">
      <!-- ZEST links to Kaipoke, Wiseman, CAREKARTE, Care-wing -->
      <line x1="650" y1="415" x2="220" y2="197" stroke="#666" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="390" x2="605" y2="225" stroke="#666" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="650" y1="405" x2="370" y2="140" stroke="#666" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="710" y1="390" x2="605" y2="165" stroke="#666" stroke-width="1" stroke-dasharray="3 3"/>
      
      <!-- SmaCare links to CAREKARTE -->
      <line x1="445" y1="170" x2="340" y2="155" stroke="#666" stroke-width="1" stroke-dasharray="3 3"/>
    </g>
    
    <!-- Legend -->
    <g transform="translate(50, 535)">
      <text class="node-text node-text--small" x="0" y="0" font-weight="bold">LEGEND</text>
      <rect x="0" y="8" width="20" height="14" fill="#f5f5f5" stroke="#333" rx="2"/>
      <text class="node-text node-text--small" x="28" y="19">All-in-one billing suite</text>
      
      <rect x="160" y="8" width="20" height="14" fill="#ffebee" stroke="#c62828" rx="2"/>
      <text class="node-text node-text--small" x="188" y="19">M3 group company</text>
      
      <line x1="330" y1="15" x2="360" y2="15" stroke="#666" stroke-width="1" stroke-dasharray="3 3"/>
      <text class="node-text node-text--small" x="368" y="19">Integration/link</text>
      
      <text class="node-text node-text--small" x="500" y="19" fill="#888">Office counts are vendors' own figures</text>
    </g>
    
  </svg>
</div>

<!-- Product info panels -->
<div class="info-panel-backdrop" data-visible="false" id="product-backdrop"></div>

<div class="info-panel" id="panel-kaipoke" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Kaipoke (カイポケ)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> SMS Co., Ltd. (TSE Prime 2175)</p>
    <p><strong>Focus:</strong> Home-based services. SMS says Kaipoke does <em>not</em> cover facility-type services such as group homes.</p>
    <p><strong>Pricing:</strong> ¥1,000–¥25,000/month per service. Transmission included at ¥0.</p>
    <p><strong>Scale:</strong> 62,300 offices (Jun 2026, SMS's own figure)</p>
    <p><strong>Share claim:</strong> SMS claims 14% paid membership share; 62% "home-care connection share" (SMS definitions)</p>
    <div class="info-panel-source">
      <a href="/competitors/kaipoke/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-honobono" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Honobono NEXT (ほのぼのNEXT)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> ND Software (SOMPO Holdings subsidiary since Feb 2023)</p>
    <p><strong>Focus:</strong> Facilities and home-based services</p>
    <p><strong>Pricing:</strong> Five-year software licence. Not published; quoted on request.</p>
    <p><strong>Scale:</strong> 72,300+ offices (Apr 2026, ND Software's own count)</p>
    <p><strong>Share claim:</strong> SOMPO estimated (Mar 2023): special nursing homes ~43%; about 35%/35%/20% by segment</p>
    <div class="info-panel-source">
      <a href="/competitors/honobono-next/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-kanamic" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Kanamic (カナミック)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> Kanamic Network Co., Ltd. (TSE Prime 3939)</p>
    <p><strong>Focus:</strong> Home, facility, and community-wide information sharing</p>
    <p><strong>Pricing:</strong> Initial fee + monthly fee per office</p>
    <p><strong>Scale:</strong> 57,763 offices; 376,972 user IDs (Mar 2026)</p>
    <p><strong>Notable:</strong> One of four systems approved by MHLW as equivalent to Care Plan Data Exchange for care-management fee type II</p>
    <div class="info-panel-source">
      <a href="/competitors/kanamic/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-wiseman" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Wiseman (ワイズマン)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> Wiseman Co., Ltd. — <strong>M3 group</strong> since July 2026</p>
    <p><strong>Focus:</strong> Facilities, home-based care, and medical</p>
    <p><strong>Pricing:</strong> Initial fee + five-year usage-right pack</p>
    <p><strong>Scale:</strong> 61,200+ care offices (excluding disability)</p>
    <p><strong>Share claim (M3):</strong> ~40% geriatric health facilities, ~25% special nursing homes, 10–15% other segments</p>
    <div class="info-panel-source">
      <a href="/competitors/wiseman/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-rehab-cloud" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Rehab Cloud (リハブクラウド)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> Rehab for JAPAN Co., Ltd.</p>
    <p><strong>Focus:</strong> Day services; expanding to special nursing homes and specified facilities from summer 2026</p>
    <p><strong>Pricing:</strong> No initial fee; base fee by plan</p>
    <p><strong>Scale:</strong> 4,316+ offices cumulative (Jun 2026)</p>
    <p><strong>Notable:</strong> Built around LIFE add-ons and functional training, not billing. Completed V4 vendor test for Care Plan Data Exchange.</p>
    <div class="info-panel-source">
      <a href="/competitors/rehab-cloud/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-carekarte" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">CAREKARTE (ケアカルテ)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> Care Connect Japan Co., Ltd.</p>
    <p><strong>Focus:</strong> Records-to-claims with strong facility base; voice AI ("Hanasuto")</p>
    <p><strong>Pricing:</strong> Initial fee + annual maintenance</p>
    <p><strong>Scale:</strong> ~19,000–21,000 offices (two figures on vendor's site)</p>
    <p><strong>Notable:</strong> CAREKARTE Link connects 50+ partner products (sensors, SmaCare, ZEST). Claims transmission method not described in public sources.</p>
    <div class="info-panel-source">
      <a href="/competitors/carekarte/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-zest" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">ZEST (ゼスト)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> ZEST Inc.</p>
    <p><strong>Focus:</strong> Visit scheduling and route optimisation — <em>not</em> a claims system</p>
    <p><strong>Pricing:</strong> Usage-based by office size. ¥0 initial/base/renewal fee.</p>
    <p><strong>Integrations:</strong> Links to Kaipoke, Wiseman, Care-wing, CAREKARTE, and others</p>
    <p><strong>Share claim:</strong> "No.1 in number of users in medical and care" — ZEST's own claim citing a survey</p>
    <div class="info-panel-source">
      <a href="/competitors/zest/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-smacare" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">SmaCare (スマケア)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> Homenet Co., Ltd.</p>
    <p><strong>Focus:</strong> 24-hour regular-and-on-call home visiting (定期巡回) — a <em>records</em> system, not billing</p>
    <p><strong>Scale:</strong> 700 offices (May 2026)</p>
    <p><strong>Share claim:</strong> ~47.2% of regular-visit offices that bill (Homenet's estimate from MHLW statistics)</p>
    <p><strong>Notable:</strong> Multilingual app (17 languages); links to CAREKARTE and TriCare-Tops for billing</p>
    <div class="info-panel-source">
      <a href="/competitors/smacare/">Read full profile →</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-care-wing" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Care-wing (ケアウイング)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p><strong>Vendor:</strong> Logic Inc. — <strong>M3 group</strong> (100% since Apr 2022)</p>
    <p><strong>Focus:</strong> Home-visit care/nursing records using smartphones and IC tags — <em>not</em> a claims system</p>
    <p><strong>Pricing:</strong> Monthly system-use fee (M3 illustrates ¥10,000–20,000)</p>
    <p><strong>Scale:</strong> 3,000+ care offices (May 2025)</p>
    <p><strong>Integrations:</strong> Links to Honobono NEXT, CAREKARTE, and others for billing</p>
    <div class="info-panel-source">
      <a href="/competitors/care-wing/">Read full profile →</a>
    </div>
  </div>
</div>

<script>
(function() {
  'use strict';
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productNodes = document.querySelectorAll('.product-node');
  const backdrop = document.getElementById('product-backdrop');
  const panels = document.querySelectorAll('.info-panel');
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Update button states
      filterBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      
      // Filter products
      productNodes.forEach(node => {
        const segments = node.getAttribute('data-segments') || '';
        if (filter === 'all' || segments.includes(filter)) {
          node.style.opacity = '1';
          node.style.pointerEvents = 'auto';
        } else {
          node.style.opacity = '0.2';
          node.style.pointerEvents = 'none';
        }
      });
    });
  });
  
  // Panel functionality
  function closeAllPanels() {
    backdrop.setAttribute('data-visible', 'false');
    panels.forEach(p => p.setAttribute('data-visible', 'false'));
  }
  
  function openPanel(productId) {
    closeAllPanels();
    const panel = document.getElementById('panel-' + productId);
    if (panel) {
      backdrop.setAttribute('data-visible', 'true');
      panel.setAttribute('data-visible', 'true');
    }
  }
  
  productNodes.forEach(node => {
    const productId = node.getAttribute('data-product');
    if (!productId) return;
    
    node.addEventListener('click', () => openPanel(productId));
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPanel(productId);
      }
    });
  });
  
  backdrop.addEventListener('click', closeAllPanels);
  
  panels.forEach(panel => {
    const closeBtn = panel.querySelector('.info-panel-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeAllPanels);
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllPanels();
  });
})();
</script>

<noscript>
<div class="no-js-fallback">
  <p><strong>JavaScript is required for filtering and popups.</strong> The map above shows all products. See the <a href="/competitors/">Competitors section</a> for full profiles.</p>
</div>
</noscript>

<div class="diagram-opinion">
  <div class="diagram-opinion-header">Tako-San's view</div>
  <div class="diagram-opinion-body">
    <p>The market splits two ways. <strong>Kaipoke</strong> is home-based, cloud-first, and sold at flat monthly prices. <strong>Honobono</strong> and <strong>Wiseman</strong> are facility-heavy, licence-based packages, each now owned by a large group (SOMPO and M3). <strong>Kanamic</strong> sells the network across a whole district, and <strong>Rehab Cloud</strong> is a specialist built around add-ons.</p>
    <p>The M3 acquisition of Wiseman (July 2026) is the newest change. M3 now has both a full billing suite (Wiseman) and a records front-end (Care-wing) — how they position the two against each other is not yet public. For a new entrant, the integration layer matters: <strong>ZEST</strong> and <strong>SmaCare</strong> plug into incumbents rather than replacing them, and that may be the realistic entry path.</p>
    <p>All share figures are the vendors' or acquirers' own claims, not independent market data.</p>
  </div>
</div>
