---
title: "How Claims and Care Records Flow"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T00:00:00+07:00
description: "The monthly cycle from care plan to payment: when records are made, when claims are filed, and when money arrives — plus the side flows to LIFE and the Care Plan Data Exchange."
weight: 2
infographic_type: "flow"
sources:
  - title: "The monthly cycle: from care plan to payment"
    url: "/guides/monthly-cycle-plan-to-payment/"
    note: "Deadlines, claim filing, payment timing"
  - title: "Care Plan Data Exchange guide"
    url: "/guides/care-plan-data-exchange/"
    note: "Data exchange between care managers and providers"
  - title: "LIFE scientific-care data guide"
    url: "/guides/life-scientific-care-data/"
    note: "LIFE submission and add-ons"
  - title: "Kaigo WEB Service API guide"
    url: "/guides/kaigo-web-service-api/"
    note: "2027 platform move"
---

<div class="step-controls" aria-label="Step through the monthly cycle">
  <button class="step-btn" id="step-prev" disabled>← Previous</button>
  <span class="step-indicator"><span id="step-current">1</span> / <span id="step-total">7</span></span>
  <button class="step-btn" id="step-next">Next →</button>
</div>

<div class="diagram-wrapper">
  <svg class="diagram-svg" viewBox="0 0 900 650" role="img" aria-label="Timeline diagram showing the monthly claim cycle from care plan to payment">
    <title>How Claims and Care Records Flow</title>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
      </marker>
    </defs>
    
    <!-- Timeline header -->
    <text class="node-text" x="450" y="25" font-weight="bold" font-size="14">MONTHLY CLAIM CYCLE</text>
    
    <!-- Month labels -->
    <g transform="translate(0, 50)">
      <rect x="50" y="0" width="250" height="30" fill="#f0f0f0" stroke="#333"/>
      <text class="node-text" x="175" y="20" font-weight="bold">Month M (Service Month)</text>
      
      <rect x="320" y="0" width="250" height="30" fill="#e8e8e8" stroke="#333"/>
      <text class="node-text" x="445" y="20" font-weight="bold">Month M+1</text>
      
      <rect x="590" y="0" width="260" height="30" fill="#e0e0e0" stroke="#333"/>
      <text class="node-text" x="720" y="20" font-weight="bold">Month M+2</text>
    </g>
    
    <!-- STEP 1: Before Month M - Care Plan -->
    <g id="flow-step-1" class="flow-step" data-step="1">
      <rect class="node-rect node-rect--highlight" x="50" y="100" width="200" height="70" rx="4"/>
      <text class="node-text" x="150" y="122">1. Care Plan Created</text>
      <text class="node-text node-text--ja" x="150" y="140">ケアプラン</text>
      <text class="node-text node-text--small" x="150" y="158">Before service month</text>
    </g>
    
    <!-- STEP 2: Provision table exchanged -->
    <g id="flow-step-2" class="flow-step" data-step="2">
      <rect class="node-rect" x="50" y="190" width="200" height="60" rx="4"/>
      <text class="node-text" x="150" y="212">2. Provision Table</text>
      <text class="node-text node-text--ja" x="150" y="228">サービス提供票</text>
      <text class="node-text node-text--small" x="150" y="243">Sent to providers</text>
      
      <!-- Side flow: Care Plan Data Exchange -->
      <rect class="node-rect" x="280" y="185" width="160" height="70" rx="4" fill="#fff8e1" stroke="#f9a825"/>
      <text class="node-text" x="360" y="205" font-size="10">Care Plan Data Exchange</text>
      <text class="node-text node-text--ja" x="360" y="220" font-size="9">ケアプランデータ連携</text>
      <text class="node-text node-text--small" x="360" y="238">CSV or API (2027)</text>
      <text class="node-text node-text--small" x="360" y="250">¥21,000/yr → free</text>
      
      <path d="M250 220 L280 220" stroke="#f9a825" stroke-width="2" marker-end="url(#arrow)"/>
    </g>
    
    <!-- STEP 3: During Month M - Services + Records -->
    <g id="flow-step-3" class="flow-step" data-step="3">
      <rect class="node-rect node-rect--primary" x="50" y="280" width="200" height="80" rx="4"/>
      <text class="node-text" x="150" y="302">3. Services Delivered</text>
      <text class="node-text node-text--small" x="150" y="320">Each visit recorded:</text>
      <text class="node-text node-text--small" x="150" y="335">• Date, time, service type</text>
      <text class="node-text node-text--small" x="150" y="350">• Staff, user, content</text>
      
      <!-- Software does records -->
      <rect class="node-rect" x="280" y="280" width="160" height="80" rx="4" fill="#e3f2fd" stroke="#1976d2"/>
      <text class="node-text" x="360" y="300" font-size="11" fill="#1976d2">Care Software</text>
      <text class="node-text node-text--ja" x="360" y="316" font-size="9">介護記録ソフト</text>
      <text class="node-text node-text--small" x="360" y="334">Records → Claims</text>
      <text class="node-text node-text--small" x="360" y="348">automatically linked</text>
      
      <path d="M250 320 L280 320" stroke="#1976d2" stroke-width="2" marker-end="url(#arrow)"/>
    </g>
    
    <!-- STEP 4: Actuals table returned -->
    <g id="flow-step-4" class="flow-step" data-step="4">
      <rect class="node-rect" x="50" y="380" width="200" height="50" rx="4"/>
      <text class="node-text" x="150" y="400">4. Actuals Table</text>
      <text class="node-text node-text--small" x="150" y="418">Returned to care manager</text>
    </g>
    
    <!-- STEP 5: By 10th of M+1 - Claims filed -->
    <g id="flow-step-5" class="flow-step" data-step="5">
      <rect class="node-rect node-rect--highlight" x="320" y="380" width="200" height="90" rx="4"/>
      <text class="node-text" x="420" y="400">5. Claims Filed</text>
      <text class="node-text node-text--ja" x="420" y="418">介護給付費請求</text>
      <text class="node-text node-text--small" x="420" y="438">By 10th of M+1</text>
      <text class="node-text node-text--small" x="420" y="453">• Provider → kokuho-ren</text>
      <text class="node-text node-text--small" x="420" y="468">• Care mgr → benefit form</text>
      
      <!-- Deadline highlight -->
      <rect x="320" y="485" width="200" height="25" fill="#ffebee" stroke="#c62828" rx="3"/>
      <text class="node-text" x="420" y="502" fill="#c62828" font-size="10" font-weight="bold">DEADLINE: 10th, 17:15</text>
    </g>
    
    <!-- Arrow from records to claims -->
    <path d="M250 405 L320 420" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
    
    <!-- LIFE side flow -->
    <g id="flow-life" class="flow-step" data-step="3">
      <rect class="node-rect" x="470" y="280" width="170" height="80" rx="4" fill="#e8f5e9" stroke="#388e3c"/>
      <text class="node-text" x="555" y="298" font-size="11" fill="#388e3c">LIFE Submission</text>
      <text class="node-text node-text--ja" x="555" y="314" font-size="9">科学的介護情報システム</text>
      <text class="node-text node-text--small" x="555" y="332">For add-on fees:</text>
      <text class="node-text node-text--small" x="555" y="346">40–60 units/month</text>
      
      <path d="M440 320 L470 320" stroke="#388e3c" stroke-width="2" stroke-dasharray="4 3"/>
      <text class="node-text node-text--small" x="455" y="310" fill="#388e3c">CSV</text>
    </g>
    
    <!-- STEP 6: Review -->
    <g id="flow-step-6" class="flow-step" data-step="6">
      <rect class="node-rect" x="550" y="400" width="140" height="50" rx="4"/>
      <text class="node-text" x="620" y="420">6. Review</text>
      <text class="node-text node-text--small" x="620" y="438">Kokuho-ren checks</text>
      
      <!-- Returns/errors -->
      <rect x="550" y="460" width="140" height="40" rx="3" fill="#fff3e0" stroke="#ff9800"/>
      <text class="node-text node-text--small" x="620" y="477" fill="#e65100">Returns (返戻)</text>
      <text class="node-text node-text--small" x="620" y="492" fill="#e65100">if errors found</text>
    </g>
    
    <path d="M520 430 L550 425" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
    
    <!-- STEP 7: Payment -->
    <g id="flow-step-7" class="flow-step" data-step="7">
      <rect class="node-rect node-rect--primary" x="710" y="380" width="150" height="120" rx="4"/>
      <text class="node-text" x="785" y="400">7. Payment</text>
      <text class="node-text node-text--small" x="785" y="420">15th: bills insurer</text>
      <text class="node-text node-text--small" x="785" y="438">25th: insurer pays</text>
      <text class="node-text node-text--small" x="785" y="456" font-weight="bold">End of M+2:</text>
      <text class="node-text node-text--small" x="785" y="474" font-weight="bold">provider paid</text>
      
      <rect x="720" y="485" width="130" height="25" fill="#e8f5e9" stroke="#388e3c" rx="3"/>
      <text class="node-text" x="785" y="502" fill="#2e7d32" font-size="10" font-weight="bold">≈2 MONTH LAG</text>
    </g>
    
    <path d="M690 425 L710 425" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
    
    <!-- 2027 Platform indicator -->
    <g transform="translate(660, 280)">
      <rect x="0" y="0" width="180" height="70" rx="4" fill="#fce4ec" stroke="#c2185b"/>
      <text class="node-text" x="90" y="18" font-size="10" fill="#c2185b" font-weight="bold">COMING JAN 2027</text>
      <text class="node-text" x="90" y="35" font-size="10">Kaigo WEB Service</text>
      <text class="node-text node-text--ja" x="90" y="50" font-size="9">介護保険資格確認等WEBサービス</text>
      <text class="node-text node-text--small" x="90" y="64">Care Plan Exchange merges in</text>
    </g>
    
    <!-- Records keeping note -->
    <g transform="translate(50, 530)">
      <rect x="0" y="0" width="400" height="60" rx="4" fill="#f5f5f5" stroke="#666"/>
      <text class="node-text node-text--small" x="200" y="18" font-weight="bold">RECORD RETENTION</text>
      <text class="node-text node-text--small" x="200" y="35">National rule: 2 years from completion</text>
      <text class="node-text node-text--small" x="200" y="50">Some municipalities (e.g. Kawasaki): 5 years</text>
    </g>
    
    <!-- Software highlight box -->
    <g transform="translate(500, 530)">
      <rect x="0" y="0" width="350" height="60" rx="4" fill="#e3f2fd" stroke="#1976d2"/>
      <text class="node-text" x="175" y="18" font-size="11" fill="#1976d2" font-weight="bold">WHERE SOFTWARE DOES THE WORK</text>
      <text class="node-text node-text--small" x="175" y="35">• Records → claim data (automatic link)</text>
      <text class="node-text node-text--small" x="175" y="50">• Provision tables via Data Exchange</text>
      <text class="node-text node-text--small" x="175" y="65">• LIFE CSV export • Transmission to kokuho-ren</text>
    </g>
    
    <!-- Arrows connecting the main flow -->
    <path d="M150 170 L150 190" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
    <path d="M150 250 L150 280" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
    <path d="M150 360 L150 380" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/>
    
  </svg>
</div>

<!-- Step explanations (shown below diagram on mobile) -->
<div id="step-explanation" class="info-panel-body" style="margin-top: 1rem; padding: 1rem; background: var(--tertiary); border-radius: 6px;">
  <div data-explain="1">
    <strong>Step 1: Care Plan Created</strong><br>
    Before the service month, the care manager writes the care plan (ケアプラン) with goals, services, and fees. The user gives written consent. The plan is delivered to the user and each provider.
    <div class="info-panel-source">Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-1-before-the-first-month-certification-and-the-care-plan">Monthly Cycle Guide</a></div>
  </div>
  <div data-explain="2" style="display:none;">
    <strong>Step 2: Provision Table Sent</strong><br>
    The care manager sends the service provision table (サービス提供票) to each provider, showing the planned visits for the month. This can go via paper/fax or via the Care Plan Data Exchange (¥21,000/year, moving to free inside the Kaigo WEB Service from January 2027).
    <div class="info-panel-source">Source: <a href="/guides/care-plan-data-exchange/">Care Plan Data Exchange Guide</a></div>
  </div>
  <div data-explain="3" style="display:none;">
    <strong>Step 3: Services Delivered & Recorded</strong><br>
    During the month, providers deliver services and record each one: date, time, service type, staff, and content. Care software links these records to claim data automatically. For LIFE add-ons (40–60 units/month), the software also exports assessment data as CSV for submission.
    <div class="info-panel-source">Source: <a href="/guides/life-scientific-care-data/">LIFE Guide</a></div>
  </div>
  <div data-explain="4" style="display:none;">
    <strong>Step 4: Actuals Table Returned</strong><br>
    After services are delivered, the provider returns an actuals table showing what was actually provided (which may differ from the plan). The care manager uses this to prepare the benefit-management form.
    <div class="info-panel-source">Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-2-each-month-the-provision-table-goes-out-actuals-come-back">Monthly Cycle Guide</a></div>
  </div>
  <div data-explain="5" style="display:none;">
    <strong>Step 5: Claims Filed by the 10th</strong><br>
    By the <strong>10th of M+1</strong> (hard deadline, even on weekends), two filings are due:
    <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
      <li>The provider's claim (介護給付費請求) to the kokuho-ren</li>
      <li>The care manager's benefit-management form (給付管理票)</li>
    </ul>
    Electronic claims are accepted until 17:15 on the 10th. Late claims are treated as next month's.
    <div class="info-panel-source">Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-4-by-the-10th-of-the-next-month-two-filings">Monthly Cycle Guide</a></div>
  </div>
  <div data-explain="6" style="display:none;">
    <strong>Step 6: Kokuho-ren Reviews</strong><br>
    The prefectural kokuho-ren checks the claim against the care manager's benefit-management form. If errors are found, the claim is returned (返戻) with an error code. The provider must fix the cause and resubmit.
    <div class="info-panel-source">Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-5-review-payment-and-what-happens-when-things-do-not-match">Monthly Cycle Guide</a></div>
  </div>
  <div data-explain="7" style="display:none;">
    <strong>Step 7: Payment at End of M+2</strong><br>
    Payment calendar (Miyagi kokuho-ren schedule):
    <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
      <li><strong>15th of M+2:</strong> kokuho-ren bills the insurer (municipality)</li>
      <li><strong>25th of M+2:</strong> insurer pays the kokuho-ren</li>
      <li><strong>End of M+2:</strong> kokuho-ren pays the provider</li>
    </ul>
    A visit on April 1 is paid at the end of June. This ~2-month lag affects provider cash flow.
    <div class="info-panel-source">Source: <a href="/guides/monthly-cycle-plan-to-payment/#step-5-review-payment-and-what-happens-when-things-do-not-match">Monthly Cycle Guide</a></div>
  </div>
</div>

<script>
(function() {
  'use strict';
  
  const steps = document.querySelectorAll('.flow-step');
  const prevBtn = document.getElementById('step-prev');
  const nextBtn = document.getElementById('step-next');
  const currentSpan = document.getElementById('step-current');
  const totalSpan = document.getElementById('step-total');
  const explanations = document.querySelectorAll('[data-explain]');
  
  let currentStep = 1;
  const totalSteps = 7;
  totalSpan.textContent = totalSteps;
  
  function updateStep() {
    currentSpan.textContent = currentStep;
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === totalSteps;
    
    // Highlight current step
    steps.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'), 10);
      if (stepNum <= currentStep) {
        step.style.opacity = '1';
      } else {
        step.style.opacity = '0.3';
      }
    });
    
    // Show corresponding explanation
    explanations.forEach(exp => {
      const expNum = parseInt(exp.getAttribute('data-explain'), 10);
      exp.style.display = expNum === currentStep ? 'block' : 'none';
    });
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStep();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStep();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentStep > 1) {
      currentStep--;
      updateStep();
    } else if (e.key === 'ArrowRight' && currentStep < totalSteps) {
      currentStep++;
      updateStep();
    }
  });
  
  updateStep();
})();
</script>

<noscript>
<div class="no-js-fallback">
  <p><strong>JavaScript is required for the step-through feature.</strong> The diagram above shows the complete flow. Read the source articles linked below for full details on each step.</p>
</div>
</noscript>

<div class="diagram-opinion">
  <div class="diagram-opinion-header">Tako-San's view</div>
  <div class="diagram-opinion-body">
    <p>The monthly cycle is mostly a <strong>matching exercise</strong>. The care manager's plan, the provider's visit records, the actuals table, the benefit-management form, and the claim all describe the same visits — and each is checked against the next. Most money lost through returns and repayments comes from these documents disagreeing.</p>
    <p>Software that keeps <strong>one record of each visit</strong> and generates every downstream document from it attacks the real problem. The two-month lag also matters commercially: a growing office pays staff for two months before the first payment arrives, so anything that prevents a return (and another month of delay) is worth more than it first appears.</p>
  </div>
</div>
