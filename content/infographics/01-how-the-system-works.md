---
title: "How the System Works"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T00:00:00+07:00
description: "The money and people flow of Japan's long-term care insurance: who pays, who certifies, who delivers care, and how providers get paid."
weight: 1
infographic_type: "system"
sources:
  - title: "How Japan's Long-Term Care Insurance works"
    url: "/posts/01-how-ltc-insurance-works/"
    note: "Core system structure, financing splits, certification process"
  - title: "Executive summary"
    url: "/posts/00-executive-summary/"
    note: "Number of offices and facilities"
---

<div class="diagram-wrapper">
  <svg class="diagram-svg" viewBox="0 0 800 600" role="img" aria-label="Diagram showing the flow of money and people in Japan's long-term care insurance system">
    <title>How Japan's Long-Term Care Insurance Works</title>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
      </marker>
      <marker id="arrowhead-dark" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#aaa"/>
      </marker>
    </defs>
    
    <!-- INSURED PERSONS (Top) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Category 1 insured: 35.85 million people aged 65 and over" data-panel="cat1">
      <rect class="node-rect node-rect--primary" x="80" y="30" width="180" height="70" rx="4"/>
      <text class="node-text" x="170" y="52">Category 1 Insured</text>
      <text class="node-text node-text--ja" x="170" y="68">第1号被保険者</text>
      <text class="node-text node-text--small" x="170" y="88">65+ years: 35.85M</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Category 2 insured: 41.88 million people aged 40 to 64" data-panel="cat2">
      <rect class="node-rect node-rect--primary" x="540" y="30" width="180" height="70" rx="4"/>
      <text class="node-text" x="630" y="52">Category 2 Insured</text>
      <text class="node-text node-text--ja" x="630" y="68">第2号被保険者</text>
      <text class="node-text node-text--small" x="630" y="88">40–64 years: 41.88M</text>
    </g>
    
    <!-- MUNICIPALITY / INSURER (Center) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Municipality as insurer: collects premiums, certifies care need, pays providers" data-panel="municipality">
      <rect class="node-rect node-rect--highlight" x="300" y="160" width="200" height="80" rx="4"/>
      <text class="node-text" x="400" y="185">Municipality (Insurer)</text>
      <text class="node-text node-text--ja" x="400" y="203">保険者 / 市町村</text>
      <text class="node-text node-text--small" x="400" y="225">Certifies care level</text>
    </g>
    
    <!-- Premium flows -->
    <path class="diagram-line diagram-line--flow" d="M170 100 L170 145 L300 175" marker-end="url(#arrowhead)"/>
    <text class="node-text node-text--small" x="185" y="135" text-anchor="start">Premiums (23%)</text>
    
    <path class="diagram-line diagram-line--flow" d="M630 100 L630 145 L500 175" marker-end="url(#arrowhead)"/>
    <text class="node-text node-text--small" x="595" y="135" text-anchor="end">Premiums (27%)</text>
    
    <!-- TAX FUNDING (Left side) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="National government contributes 25% of funding through taxes" data-panel="national">
      <rect class="node-rect" x="30" y="180" width="140" height="50" rx="4"/>
      <text class="node-text" x="100" y="200">National Govt</text>
      <text class="node-text node-text--small" x="100" y="218">25% tax share</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Prefecture contributes 12.5% of funding" data-panel="prefecture">
      <rect class="node-rect" x="30" y="250" width="140" height="50" rx="4"/>
      <text class="node-text" x="100" y="270">Prefecture</text>
      <text class="node-text node-text--small" x="100" y="288">12.5% tax share</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Municipal contribution: 12.5% of funding" data-panel="municipal-tax">
      <rect class="node-rect" x="30" y="320" width="140" height="50" rx="4"/>
      <text class="node-text" x="100" y="340">Municipal Tax</text>
      <text class="node-text node-text--small" x="100" y="358">12.5% share</text>
    </g>
    
    <!-- Tax flow arrows -->
    <path class="diagram-line diagram-line--flow" d="M170 205 L300 200" marker-end="url(#arrowhead)"/>
    <path class="diagram-line diagram-line--flow" d="M170 275 L280 220" marker-end="url(#arrowhead)"/>
    <path class="diagram-line diagram-line--flow" d="M170 345 L260 240" marker-end="url(#arrowhead)"/>
    
    <!-- CERTIFICATION PROCESS (Right side) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Certification survey: 74-item assessment at the person's home" data-panel="survey">
      <rect class="node-rect" x="550" y="170" width="180" height="50" rx="4"/>
      <text class="node-text" x="640" y="190">Certification Survey</text>
      <text class="node-text node-text--ja" x="640" y="208">認定調査 (74 items)</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Care-need certification: assigns level from yō-shien 1 to yō-kaigo 5" data-panel="certification">
      <rect class="node-rect" x="550" y="240" width="180" height="60" rx="4"/>
      <text class="node-text" x="640" y="260">Certification Result</text>
      <text class="node-text node-text--ja" x="640" y="278">要支援1–2 / 要介護1–5</text>
      <text class="node-text node-text--small" x="640" y="293">7.10M certified (Apr 2024)</text>
    </g>
    
    <!-- Municipality to survey/certification arrows -->
    <path class="diagram-line diagram-line--dashed" d="M500 195 L550 195"/>
    <path class="diagram-line diagram-line--flow" d="M550 270 L510 230" marker-end="url(#arrowhead)"/>
    
    <!-- CARE MANAGER (Center bottom) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Care manager: writes the care plan, coordinates providers, files benefit-management form" data-panel="care-manager">
      <rect class="node-rect node-rect--primary" x="280" y="320" width="240" height="70" rx="4"/>
      <text class="node-text" x="400" y="342">Care Manager</text>
      <text class="node-text node-text--ja" x="400" y="360">ケアマネジャー / 介護支援専門員</text>
      <text class="node-text node-text--small" x="400" y="380">37,258 offices (Oct 2024)</text>
    </g>
    
    <!-- Municipality to Care Manager -->
    <path class="diagram-line diagram-line--flow" d="M400 240 L400 320" marker-end="url(#arrowhead)"/>
    <text class="node-text node-text--small" x="410" y="280" text-anchor="start">Certificate</text>
    
    <!-- CARE PLAN -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Care plan: lists services, goals, and fees; user gives written consent" data-panel="care-plan">
      <rect class="node-rect" x="560" y="340" width="160" height="50" rx="4"/>
      <text class="node-text" x="640" y="360">Care Plan</text>
      <text class="node-text node-text--ja" x="640" y="378">ケアプラン / 居宅サービス計画</text>
    </g>
    
    <path class="diagram-line diagram-line--flow" d="M520 355 L560 355" marker-end="url(#arrowhead)"/>
    
    <!-- PROVIDERS (Bottom) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Home-visit care providers: 37,264 offices as of October 2024" data-panel="home-visit">
      <rect class="node-rect" x="80" y="450" width="160" height="60" rx="4"/>
      <text class="node-text" x="160" y="472">Home-Visit Care</text>
      <text class="node-text node-text--ja" x="160" y="490">訪問介護</text>
      <text class="node-text node-text--small" x="160" y="505">37,264 offices</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Day care providers deliver services at centres" data-panel="day-care">
      <rect class="node-rect" x="260" y="450" width="140" height="60" rx="4"/>
      <text class="node-text" x="330" y="472">Day Care</text>
      <text class="node-text node-text--ja" x="330" y="490">通所介護</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Special nursing homes: 8,621 facilities as of October 2024" data-panel="facilities">
      <rect class="node-rect" x="420" y="450" width="160" height="60" rx="4"/>
      <text class="node-text" x="500" y="472">Facilities</text>
      <text class="node-text node-text--ja" x="500" y="490">特養・老健・介護医療院</text>
      <text class="node-text node-text--small" x="500" y="505">8,621 tokuyō</text>
    </g>
    
    <g class="diagram-node" role="button" tabindex="0" aria-label="Other providers: home-visit nursing, equipment rental, and more" data-panel="other-providers">
      <rect class="node-rect" x="600" y="450" width="130" height="60" rx="4"/>
      <text class="node-text" x="665" y="472">Other Services</text>
      <text class="node-text node-text--small" x="665" y="490">Nursing, equipment,</text>
      <text class="node-text node-text--small" x="665" y="502">rehabilitation...</text>
    </g>
    
    <!-- Care plan to providers -->
    <path class="diagram-line diagram-line--flow" d="M400 390 L400 420 L160 420 L160 450" marker-end="url(#arrowhead)"/>
    <path class="diagram-line diagram-line--flow" d="M400 420 L330 420 L330 450" marker-end="url(#arrowhead)"/>
    <path class="diagram-line diagram-line--flow" d="M400 420 L500 420 L500 450" marker-end="url(#arrowhead)"/>
    <path class="diagram-line diagram-line--flow" d="M400 420 L665 420 L665 450" marker-end="url(#arrowhead)"/>
    
    <!-- USER (Bottom center) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="User co-pay: 10%, 20%, or 30% of service cost depending on income" data-panel="user-copay">
      <rect class="node-rect node-rect--highlight" x="270" y="540" width="180" height="50" rx="4"/>
      <text class="node-text" x="360" y="560">User Co-Pay</text>
      <text class="node-text node-text--small" x="360" y="578">10% / 20% / 30%</text>
    </g>
    
    <!-- Service delivery to user -->
    <path class="diagram-line" d="M330 510 L330 530 L320 540"/>
    <path class="diagram-line" d="M500 510 L500 530 L400 540"/>
    <text class="node-text node-text--small" x="450" y="528" text-anchor="middle">Services delivered</text>
    
    <!-- KOKUHO-REN (Right bottom) -->
    <g class="diagram-node" role="button" tabindex="0" aria-label="Kokuho-ren: prefectural federation that reviews and pays claims" data-panel="kokuho-ren">
      <rect class="node-rect node-rect--primary" x="560" y="540" width="180" height="50" rx="4"/>
      <text class="node-text" x="650" y="558">Kokuho-ren</text>
      <text class="node-text node-text--ja" x="650" y="575">国保連合会</text>
    </g>
    
    <!-- Providers to kokuho-ren claims -->
    <path class="diagram-line diagram-line--flow" d="M580 490 L700 490 L700 540" marker-end="url(#arrowhead)"/>
    <text class="node-text node-text--small" x="710" y="515" text-anchor="start">Claims by 10th</text>
    
    <!-- Kokuho-ren to municipality / back to providers -->
    <path class="diagram-line diagram-line--dashed" d="M650 540 L650 520 L740 520 L740 260 L500 200"/>
    <text class="node-text node-text--small" x="750" y="400" text-anchor="start" transform="rotate(-90, 750, 400)">Bills insurer</text>
    
    <!-- Kokuho-ren payment to providers -->
    <path class="diagram-line diagram-line--flow" d="M560 565 L510 565 L510 510" marker-end="url(#arrowhead)"/>
    <text class="node-text node-text--small" x="535" y="555" text-anchor="middle">Payment</text>
    <text class="node-text node-text--small" x="535" y="567" text-anchor="middle">end of M+2</text>
    
    <!-- Legend -->
    <g transform="translate(30, 540)">
      <text class="node-text node-text--small" x="0" y="0" text-anchor="start" font-weight="bold">LEGEND</text>
      <line x1="0" y1="12" x2="25" y2="12" class="diagram-line diagram-line--flow" marker-end="url(#arrowhead)"/>
      <text class="node-text node-text--small" x="30" y="16" text-anchor="start">Money/document flow</text>
      <line x1="0" y1="28" x2="25" y2="28" class="diagram-line diagram-line--dashed"/>
      <text class="node-text node-text--small" x="30" y="32" text-anchor="start">Information exchange</text>
    </g>
  </svg>
</div>

<!-- Info panels (hidden by default, shown on click) -->
<div class="info-panel-backdrop" data-visible="false" id="panel-backdrop"></div>

<div class="info-panel" id="panel-cat1" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Category 1 Insured (第1号被保険者)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">dai-ichi-gō hi-hoken-sha</span>
    <p>Everyone aged 65 and over. They can use insurance services for any cause once certified.</p>
    <p><strong>35.85 million</strong> people enrolled (fiscal 2022 year-end). Of these, <strong>6.81 million</strong> (19.0%) were certified for care.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#who-is-covered-and-who-is-the-insurer">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-cat2" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Category 2 Insured (第2号被保険者)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">dai-ni-gō hi-hoken-sha</span>
    <p>People aged 40 to 64 who are in a medical insurance scheme. They can use services only when need comes from a <strong>designated age-related disease</strong> (tokutei shippei), such as late-stage cancer or rheumatoid arthritis.</p>
    <p><strong>41.88 million</strong> people enrolled (monthly average). Only <strong>130,000</strong> (0.3%) were certified.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#who-is-covered-and-who-is-the-insurer">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-municipality" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Municipality as Insurer (保険者)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">hoken-sha / shi-chō-son</span>
    <p>The insurer is the <strong>municipality</strong> (city, town, or village), or a special ward in Tokyo. Not the national government.</p>
    <p>The municipality collects premiums from Category 1 insured, runs the certification process, and sets premium rates every three years with the municipal care-insurance plan.</p>
    <p>Average premium (9th period, FY2024–2026): <strong>¥6,225/month</strong>, up from ¥2,911 in 2000–2002.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#who-is-covered-and-who-is-the-insurer">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-national" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">National Government Tax Share</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p>Benefits are financed <strong>half by premiums and half by tax</strong>.</p>
    <p>On the tax side, the standard split is:</p>
    <ul>
      <li><strong>25%</strong> national (20% fixed + 5% adjustment grant)</li>
      <li>12.5% prefectural</li>
      <li>12.5% municipal</li>
    </ul>
    <p>For facility benefits, the national fixed share is 15% and the prefecture's share is 17.5%.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#who-pays">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-prefecture" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Prefecture Tax Share</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p>Prefectures contribute <strong>12.5%</strong> of home/community service costs through tax.</p>
    <p>For facility benefits, the prefecture's share rises to <strong>17.5%</strong>.</p>
    <p>The prefecture also operates the <strong>kokuho-ren</strong> that receives and pays claims.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#who-pays">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-municipal-tax" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Municipal Tax Share</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p>Municipalities contribute <strong>12.5%</strong> of costs through local tax, in addition to being the insurer that collects premiums.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#who-pays">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-survey" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Certification Survey (認定調査)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">nintei chōsa</span>
    <p>The municipality sends a surveyor to the person's home to complete a standardised <strong>74-item assessment</strong>. The survey also collects an opinion from the attending doctor.</p>
    <p>A computer runs a <strong>primary judgement</strong> that estimates care minutes. Then a certification committee of health, medical, and welfare professionals makes a <strong>secondary judgement</strong>.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#how-someone-qualifies">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-certification" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Care-Need Certification (要介護認定)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">yōkaigo nintei</span>
    <p>The result is one of:</p>
    <ul>
      <li><strong>要支援1–2</strong> (yō-shien): lighter need, aimed at prevention</li>
      <li><strong>要介護1–5</strong> (yō-kaigo): 1 is lightest, 5 is heaviest</li>
      <li>Non-eligible</li>
    </ul>
    <p>At the end of April 2024: <strong>7.10 million</strong> certified people (3.3× April 2000).</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#how-someone-qualifies">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-care-manager" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Care Manager (ケアマネジャー)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">kaigo shien senmon'in / kea manejā</span>
    <p>For services at home, a care manager at a home-care support office writes the care plan, coordinates providers, and files a <strong>benefit-management form</strong> that adds up the units used against the monthly cap.</p>
    <p>As of 1 October 2024: <strong>37,258</strong> home-care support offices.</p>
    <p>Care management itself is <strong>fully covered</strong> by insurance — the user does not pay a percentage co-payment on the care manager's fee.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#the-care-manager-and-the-care-plan">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-care-plan" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Care Plan (ケアプラン)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">kea puran / kyotaku sābisu keikaku</span>
    <p>The plan listing services to be provided, written by the care manager. It includes:</p>
    <ul>
      <li>Goals for the user</li>
      <li>Services, their content, and fees</li>
      <li>User's <strong>written consent</strong></li>
    </ul>
    <p>The plan is delivered to the user and to each provider.</p>
    <div class="info-panel-source">
      Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-1-before-the-first-month-certification-and-the-care-plan">Monthly Cycle Guide</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-home-visit" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Home-Visit Care (訪問介護)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">hōmon kaigo</span>
    <p>A helper visits the home for body care (bathing, toileting) or living assistance (cleaning, cooking).</p>
    <p>As of 1 October 2024: <strong>37,264</strong> home-visit care offices, mostly companies.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/00-executive-summary/">Executive Summary</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-day-care" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Day Care (通所介護)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">tsūsho kaigo / dei sābisu</span>
    <p>The user is picked up, spends the day at a centre (meals, bathing, activities, functional training), and returns home.</p>
    <p>Also called "day service" (デイサービス).</p>
    <div class="info-panel-source">
      Source: <a href="/glossary/#tsusho-kaigo">Glossary: tsūsho kaigo</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-facilities" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Facilities (施設)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p>Three main facility types:</p>
    <ul>
      <li><strong>特養</strong> (tokuyō) — Special nursing homes: <strong>8,621</strong> (Oct 2024), almost all run by social-welfare corporations</li>
      <li><strong>老健</strong> (rōken) — Geriatric health facilities: rehabilitation focus</li>
      <li><strong>介護医療院</strong> — Long-term care medical centres</li>
    </ul>
    <p>Facility fees are per-day by care level, not subject to the home-service monthly cap.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/00-executive-summary/">Executive Summary</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-other-providers" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Other Services</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p>The insurance covers many other services, including:</p>
    <ul>
      <li><strong>訪問看護</strong> (hōmon kango) — Home-visit nursing</li>
      <li><strong>福祉用具貸与</strong> — Welfare equipment rental</li>
      <li><strong>通所リハビリテーション</strong> — Day rehabilitation</li>
      <li><strong>短期入所</strong> — Short stay (respite)</li>
      <li>And more...</li>
    </ul>
    <div class="info-panel-source">
      Source: <a href="/glossary/">Glossary</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-user-copay" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">User Co-Payment</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <p>For covered services, the user pays <strong>10%, 20%, or 30%</strong>:</p>
    <ul>
      <li><strong>10%</strong> — default for most users</li>
      <li><strong>20%</strong> — when total income ≥1.6M yen AND pension+other income ≥2.8M (single) or ≥3.46M (couple)</li>
      <li><strong>30%</strong> — when total income ≥2.2M yen AND pension+other income ≥3.4M (single) or ≥4.63M (couple)</li>
    </ul>
    <p>Category 2 insured (40–64) pay 10% regardless of income.</p>
    <div class="info-panel-source">
      Source: <a href="/posts/01-how-ltc-insurance-works/#what-the-user-pays">How LTC Insurance Works</a>
    </div>
  </div>
</div>

<div class="info-panel" id="panel-kokuho-ren" data-visible="false">
  <div class="info-panel-header">
    <h3 class="info-panel-title">Kokuho-ren (国保連合会)</h3>
    <button class="info-panel-close" aria-label="Close">&times;</button>
  </div>
  <div class="info-panel-body">
    <span class="info-panel-ja">kokuho rengō-kai</span>
    <p>The <strong>prefectural National Health Insurance federation</strong> that receives, checks, and pays care-benefit claims.</p>
    <p>Providers file claims at the kokuho-ren of the prefecture where the <strong>office</strong> is located, even if the user lives in another prefecture.</p>
    <p>Deadline: <strong>by the 10th</strong> of the following month. Payment to the provider is scheduled <strong>by the end of M+2</strong>.</p>
    <div class="info-panel-source">
      Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-4-by-the-10th-of-the-next-month-two-filings">Monthly Cycle Guide</a>
    </div>
  </div>
</div>

<script>
(function() {
  'use strict';
  
  const nodes = document.querySelectorAll('.diagram-node');
  const backdrop = document.getElementById('panel-backdrop');
  const panels = document.querySelectorAll('.info-panel');
  
  function closeAllPanels() {
    backdrop.setAttribute('data-visible', 'false');
    panels.forEach(p => p.setAttribute('data-visible', 'false'));
    nodes.forEach(n => n.setAttribute('aria-expanded', 'false'));
  }
  
  function openPanel(panelId) {
    closeAllPanels();
    const panel = document.getElementById('panel-' + panelId);
    if (panel) {
      backdrop.setAttribute('data-visible', 'true');
      panel.setAttribute('data-visible', 'true');
    }
  }
  
  nodes.forEach(node => {
    const panelId = node.getAttribute('data-panel');
    if (!panelId) return;
    
    node.addEventListener('click', () => openPanel(panelId));
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPanel(panelId);
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
    if (e.key === 'Escape') {
      closeAllPanels();
    }
  });
})();
</script>

<noscript>
<div class="no-js-fallback">
  <p><strong>JavaScript is required for interactive features.</strong> The diagram above shows the static structure. Click the source links at the bottom of this page for full details.</p>
</div>
</noscript>

<div class="diagram-opinion">
  <div class="diagram-opinion-header">Tako-San's view</div>
  <div class="diagram-opinion-body">
    <p>For PSP Asia, the key insight is that money flows through the <strong>municipality</strong> (as insurer) to the <strong>prefectural kokuho-ren</strong> (as payment processor) — not to a central ministry. This means billing compliance is local and claim files must follow national formats published by Kokuho Chūōkai. The two-month payment lag (service → claim by 10th → payment end of M+2) also affects cash flow for any provider you might partner with.</p>
  </div>
</div>
