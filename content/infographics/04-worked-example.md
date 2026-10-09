---
title: "Worked Example: One Month for One User"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T00:00:00+07:00
description: "An illustrative example of a home-care user's month: certification, care plan, services, records, claim, and who pays what share. Use the sliders to see how care level and co-pay tier affect the numbers."
weight: 4
infographic_type: "example"
sources:
  - title: "How Japan's Long-Term Care Insurance works"
    url: "/posts/01-how-ltc-insurance-works/"
    note: "Monthly caps, unit prices, co-pay rates"
  - title: "The monthly cycle: from care plan to payment"
    url: "/guides/monthly-cycle-plan-to-payment/"
    note: "Claim process and timing"
---

<div class="example-label">EXAMPLE — Figures are illustrative</div>

<div class="slider-controls">
  <div class="slider-group">
    <label class="slider-label">
      <span class="slider-label-text">Care Level</span>
      <span class="slider-label-value" id="level-display">要介護1</span>
    </label>
    <input type="range" class="slider-input" id="care-level" min="1" max="5" value="1" aria-label="Select care level from 1 to 5">
    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--secondary);">
      <span>要介護1 (lightest)</span>
      <span>要介護5 (heaviest)</span>
    </div>
  </div>
  
  <div class="slider-group">
    <label class="slider-label">
      <span class="slider-label-text">Co-Pay Rate</span>
      <span class="slider-label-value" id="copay-display">10%</span>
    </label>
    <input type="range" class="slider-input" id="copay-rate" min="10" max="30" step="10" value="10" aria-label="Select co-pay rate: 10%, 20%, or 30%">
    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--secondary);">
      <span>10% (default)</span>
      <span>20%</span>
      <span>30% (high income)</span>
    </div>
  </div>
</div>

<div class="diagram-wrapper">
  <svg class="diagram-svg" viewBox="0 0 800 700" role="img" aria-label="Diagram showing one month of care for a home user">
    <title>Worked Example: One Month for One User</title>
    
    <!-- User profile box -->
    <g transform="translate(50, 30)">
      <rect x="0" y="0" width="700" height="80" rx="4" fill="#f5f5f5" stroke="#333" stroke-width="2"/>
      <text class="node-text" x="350" y="25" font-weight="bold" font-size="14">EXAMPLE USER: Tanaka-san (Age 78)</text>
      <text class="node-text" x="350" y="48" font-size="12">Lives at home with spouse • Needs help with bathing and some daily activities</text>
      <text class="node-text" x="350" y="68" font-size="11" fill="#666">Certified: <tspan id="user-level" font-weight="bold">要介護1</tspan> • Monthly cap: <tspan id="user-cap" font-weight="bold">16,765 units</tspan></text>
    </g>
    
    <!-- Step 1: Certification -->
    <g transform="translate(50, 130)">
      <rect x="0" y="0" width="200" height="70" rx="4" class="node-rect node-rect--primary"/>
      <text class="node-text" x="100" y="22" font-weight="bold">1. CERTIFICATION</text>
      <text class="node-text node-text--small" x="100" y="40">Municipality assessed</text>
      <text class="node-text node-text--small" x="100" y="55">74-item survey → committee</text>
    </g>
    
    <!-- Arrow -->
    <path d="M250 165 L280 165" stroke="#666" stroke-width="1.5" fill="none" marker-end="url(#arrow)"/>
    
    <!-- Step 2: Care Plan -->
    <g transform="translate(300, 130)">
      <rect x="0" y="0" width="200" height="70" rx="4" class="node-rect node-rect--primary"/>
      <text class="node-text" x="100" y="22" font-weight="bold">2. CARE PLAN</text>
      <text class="node-text node-text--small" x="100" y="40">Care manager writes plan</text>
      <text class="node-text node-text--small" x="100" y="55">User gives written consent</text>
    </g>
    
    <!-- Arrow -->
    <path d="M500 165 L530 165" stroke="#666" stroke-width="1.5" fill="none" marker-end="url(#arrow)"/>
    
    <!-- Step 3: Services This Month -->
    <g transform="translate(550, 130)">
      <rect x="0" y="0" width="200" height="70" rx="4" class="node-rect node-rect--highlight"/>
      <text class="node-text" x="100" y="22" font-weight="bold">3. THIS MONTH</text>
      <text class="node-text node-text--small" x="100" y="40">Services delivered</text>
      <text class="node-text node-text--small" x="100" y="55">Each visit recorded</text>
    </g>
    
    <!-- Services breakdown table -->
    <g transform="translate(50, 220)">
      <text class="node-text" x="350" y="0" font-weight="bold" font-size="13">SERVICES THIS MONTH (Example)</text>
      
      <!-- Table header -->
      <rect x="0" y="15" width="700" height="30" fill="#e8e8e8" stroke="#333"/>
      <text class="node-text node-text--small" x="120" y="35" font-weight="bold">Service</text>
      <text class="node-text node-text--small" x="320" y="35" font-weight="bold">Visits</text>
      <text class="node-text node-text--small" x="420" y="35" font-weight="bold">Units/Visit</text>
      <text class="node-text node-text--small" x="550" y="35" font-weight="bold">Total Units</text>
      <text class="node-text node-text--small" x="650" y="35" font-weight="bold">Source</text>
      
      <!-- Row 1: Body care -->
      <rect x="0" y="45" width="700" height="35" fill="#fff" stroke="#ddd"/>
      <text class="node-text node-text--small" x="120" y="67">Body care (20–30 min)</text>
      <text class="node-text node-text--small" x="320" y="67">12</text>
      <text class="node-text node-text--small" x="420" y="67" id="bodycare-unit">245</text>
      <text class="node-text node-text--small" x="550" y="67" id="bodycare-total" font-weight="bold">2,940</text>
      <a href="/posts/01-how-ltc-insurance-works/#one-unit-is-10-00-to-11-40-yen"><text class="node-text node-text--small" x="650" y="67" fill="#1976d2" text-decoration="underline">ref</text></a>
      
      <!-- Row 2: Day care -->
      <rect x="0" y="80" width="700" height="35" fill="#f9f9f9" stroke="#ddd"/>
      <text class="node-text node-text--small" x="120" y="102">Day care (6–7 hours)</text>
      <text class="node-text node-text--small" x="320" y="102">8</text>
      <text class="node-text node-text--small" x="420" y="102" id="daycare-unit">655</text>
      <text class="node-text node-text--small" x="550" y="102" id="daycare-total" font-weight="bold">5,240</text>
      <text class="node-text node-text--small" x="650" y="102" fill="#888">(example)</text>
      
      <!-- Row 3: Short body care -->
      <rect x="0" y="115" width="700" height="35" fill="#fff" stroke="#ddd"/>
      <text class="node-text node-text--small" x="120" y="137">Body care (under 20 min)</text>
      <text class="node-text node-text--small" x="320" y="137">4</text>
      <text class="node-text node-text--small" x="420" y="137">163</text>
      <text class="node-text node-text--small" x="550" y="137" id="shortcare-total" font-weight="bold">652</text>
      <a href="/posts/01-how-ltc-insurance-works/#one-unit-is-10-00-to-11-40-yen"><text class="node-text node-text--small" x="650" y="137" fill="#1976d2" text-decoration="underline">ref</text></a>
      
      <!-- Total row -->
      <rect x="0" y="150" width="700" height="35" fill="#e3f2fd" stroke="#1976d2"/>
      <text class="node-text" x="420" y="172" font-weight="bold">TOTAL UNITS:</text>
      <text class="node-text" x="550" y="172" font-weight="bold" id="total-units">8,832</text>
      <text class="node-text node-text--small" x="650" y="172" id="cap-status" fill="#388e3c">Under cap ✓</text>
    </g>
    
    <!-- Unit price calculation -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="340" height="100" rx="4" fill="#fff8e1" stroke="#f9a825"/>
      <text class="node-text" x="170" y="22" font-weight="bold" fill="#f57f17">UNIT PRICE CONVERSION</text>
      <text class="node-text node-text--small" x="170" y="42">Region: "Other" band (cheapest)</text>
      <text class="node-text node-text--small" x="170" y="58">Unit price: <tspan font-weight="bold">¥10.00</tspan></text>
      <text class="node-text node-text--small" x="170" y="78">Total units × ¥10 =</text>
      <text class="node-text" x="170" y="95" font-weight="bold" font-size="14" id="total-yen">¥88,320</text>
    </g>
    
    <!-- Note about regional variation -->
    <g transform="translate(50, 530)">
      <rect x="0" y="0" width="340" height="50" rx="4" fill="#f5f5f5" stroke="#666"/>
      <text class="node-text node-text--small" x="170" y="18">In Tokyo (grade 1), home-visit care</text>
      <text class="node-text node-text--small" x="170" y="33">unit price is ¥11.40, not ¥10.00</text>
      <a href="/posts/01-how-ltc-insurance-works/#one-unit-is-10-00-to-11-40-yen"><text class="node-text node-text--small" x="170" y="46" fill="#1976d2" text-decoration="underline">See source</text></a>
    </g>
    
    <!-- Payment split -->
    <g transform="translate(410, 420)">
      <rect x="0" y="0" width="340" height="160" rx="4" fill="#e8f5e9" stroke="#388e3c" stroke-width="2"/>
      <text class="node-text" x="170" y="22" font-weight="bold" fill="#2e7d32">WHO PAYS WHAT</text>
      
      <!-- Insurance share -->
      <rect x="20" y="35" width="300" height="35" fill="#c8e6c9" rx="3"/>
      <text class="node-text" x="170" y="55" font-size="11">Insurance pays (<tspan id="ins-pct">90%</tspan>):</text>
      <text class="node-text" x="170" y="68" font-weight="bold" id="ins-amt">¥79,488</text>
      
      <!-- User share -->
      <rect x="20" y="80" width="300" height="35" fill="#fff" stroke="#388e3c" rx="3"/>
      <text class="node-text" x="170" y="100" font-size="11">User pays (<tspan id="user-pct">10%</tspan>):</text>
      <text class="node-text" x="170" y="113" font-weight="bold" id="user-amt">¥8,832</text>
      
      <!-- Note -->
      <text class="node-text node-text--small" x="170" y="135" fill="#666">Above the monthly cap, user pays 100%</text>
      <text class="node-text node-text--small" x="170" y="150" fill="#666">Room/meals at facilities are separate</text>
    </g>
    
    <!-- Timeline -->
    <g transform="translate(50, 600)">
      <text class="node-text" x="375" y="0" font-weight="bold" font-size="12">WHEN THE MONEY MOVES</text>
      
      <line x1="0" y1="25" x2="700" y2="25" stroke="#333" stroke-width="2"/>
      
      <!-- April (service month) -->
      <circle cx="100" cy="25" r="8" fill="#1976d2"/>
      <text class="node-text node-text--small" x="100" y="50">April</text>
      <text class="node-text node-text--small" x="100" y="65">Services</text>
      
      <!-- May 10 (claim deadline) -->
      <circle cx="280" cy="25" r="8" fill="#c62828"/>
      <text class="node-text node-text--small" x="280" y="50">May 10</text>
      <text class="node-text node-text--small" x="280" y="65">Claim deadline</text>
      
      <!-- June review -->
      <circle cx="450" cy="25" r="8" fill="#f9a825"/>
      <text class="node-text node-text--small" x="450" y="50">June</text>
      <text class="node-text node-text--small" x="450" y="65">Review</text>
      
      <!-- End June (payment) -->
      <circle cx="620" cy="25" r="8" fill="#388e3c"/>
      <text class="node-text node-text--small" x="620" y="50">End of June</text>
      <text class="node-text node-text--small" x="620" y="65" font-weight="bold">Provider paid</text>
    </g>
    
  </svg>
</div>

<script>
(function() {
  'use strict';
  
  // Monthly caps by care level (from site content)
  const caps = {
    1: 16765,
    2: 19705,
    3: 27048,
    4: 30938,
    5: 36217
  };
  
  const levelLabels = {
    1: '要介護1',
    2: '要介護2',
    3: '要介護3',
    4: '要介護4',
    5: '要介護5'
  };
  
  // Example service units (these scale with care level to stay under cap)
  const baseServices = {
    bodycare: { visits: 12, unitsPerVisit: 245 },
    daycare: { visits: 8, unitsPerVisit: 655 },
    shortcare: { visits: 4, unitsPerVisit: 163 }
  };
  
  // Scale factor for higher care levels (more services allowed)
  const scaleFactors = { 1: 1, 2: 1.1, 3: 1.4, 4: 1.6, 5: 1.9 };
  
  const careLevelSlider = document.getElementById('care-level');
  const copaySlider = document.getElementById('copay-rate');
  
  function formatYen(amount) {
    return '¥' + Math.round(amount).toLocaleString();
  }
  
  function update() {
    const level = parseInt(careLevelSlider.value, 10);
    const copay = parseInt(copaySlider.value, 10);
    const cap = caps[level];
    const scale = scaleFactors[level];
    
    // Update displays
    document.getElementById('level-display').textContent = levelLabels[level];
    document.getElementById('copay-display').textContent = copay + '%';
    document.getElementById('user-level').textContent = levelLabels[level];
    document.getElementById('user-cap').textContent = cap.toLocaleString() + ' units';
    
    // Calculate totals with scaling
    const bodycareTotal = Math.round(baseServices.bodycare.visits * baseServices.bodycare.unitsPerVisit * scale);
    const daycareTotal = Math.round(baseServices.daycare.visits * baseServices.daycare.unitsPerVisit * scale);
    const shortcareTotal = baseServices.shortcare.visits * baseServices.shortcare.unitsPerVisit;
    
    const totalUnits = bodycareTotal + daycareTotal + shortcareTotal;
    
    document.getElementById('bodycare-total').textContent = bodycareTotal.toLocaleString();
    document.getElementById('daycare-total').textContent = daycareTotal.toLocaleString();
    document.getElementById('shortcare-total').textContent = shortcareTotal.toLocaleString();
    document.getElementById('total-units').textContent = totalUnits.toLocaleString();
    
    // Cap status
    const capStatus = document.getElementById('cap-status');
    if (totalUnits <= cap) {
      capStatus.textContent = 'Under cap ✓';
      capStatus.setAttribute('fill', '#388e3c');
    } else {
      capStatus.textContent = 'Over cap!';
      capStatus.setAttribute('fill', '#c62828');
    }
    
    // Yen calculation (using ¥10 as base unit price)
    const coveredUnits = Math.min(totalUnits, cap);
    const totalYen = coveredUnits * 10;
    document.getElementById('total-yen').textContent = formatYen(totalYen);
    
    // Payment split
    const userPct = copay / 100;
    const insPct = 1 - userPct;
    const userAmt = totalYen * userPct;
    const insAmt = totalYen * insPct;
    
    document.getElementById('user-pct').textContent = copay + '%';
    document.getElementById('ins-pct').textContent = (100 - copay) + '%';
    document.getElementById('user-amt').textContent = formatYen(userAmt);
    document.getElementById('ins-amt').textContent = formatYen(insAmt);
  }
  
  careLevelSlider.addEventListener('input', update);
  copaySlider.addEventListener('input', update);
  
  // Initial update
  update();
})();
</script>

<noscript>
<div class="no-js-fallback">
  <p><strong>JavaScript is required for the interactive sliders.</strong> The diagram shows an example for 要介護1 with 10% co-pay. See the source articles linked below for the full fee tables.</p>
</div>
</noscript>

<div class="diagram-opinion">
  <div class="diagram-opinion-header">Tako-San's view</div>
  <div class="diagram-opinion-body">
    <p>This example uses the <strong>actual monthly caps</strong> from the ministerial notice (16,765 units for 要介護1 up to 36,217 for 要介護5) and the <strong>actual co-pay rates</strong> (10%/20%/30% depending on income). The unit prices (¥10.00–11.40) are also from the source, not invented.</p>
    <p>What's illustrative: the specific services, visit counts, and day-care unit values. I chose numbers that stay under the cap for each level. A real care plan would be tailored to the user's actual needs.</p>
    <p>The key insight for PSP: <strong>software that tells the user what they'll owe before the month ends</strong>, rather than after the claim is reviewed, would be a genuine differentiator. Many small offices still get this wrong.</p>
  </div>
</div>

### Numbers used in this example

| Item | Value | Source |
|------|-------|--------|
| Monthly cap (要介護1) | 16,765 units | [How LTC Insurance Works](/posts/01-how-ltc-insurance-works/#the-monthly-cap-is-in-units-not-yen) |
| Monthly cap (要介護2) | 19,705 units | Same source |
| Monthly cap (要介護3) | 27,048 units | Same source |
| Monthly cap (要介護4) | 30,938 units | Same source |
| Monthly cap (要介護5) | 36,217 units | Same source |
| Body care under 20 min | 163 units | [How LTC Insurance Works](/posts/01-how-ltc-insurance-works/#one-unit-is-10-00-to-11-40-yen) (WAM NET code table) |
| Unit price (other band) | ¥10.00 | [How LTC Insurance Works](/posts/01-how-ltc-insurance-works/#one-unit-is-10-00-to-11-40-yen) |
| Unit price (grade 1, home-visit) | ¥11.40 | Same source |
| Co-pay rates | 10% / 20% / 30% | [How LTC Insurance Works](/posts/01-how-ltc-insurance-works/#what-the-user-pays) |
| Body care 20–30 min | 245 units | *Example value* — not from site |
| Day care 6–7 hours | 655 units | *Example value* — not from site |
