---
title: "Technology in Japanese care: from the daily record to the claim and to LIFE"
date: 2026-10-09T00:00:00+07:00
tags: ["japan", "long-term-care", "software", "LIFE", "dx"]
summary: "How a Japanese provider records care, bills the federation, and submits LIFE data, and who already sells the software that does it."
series: "Japan LTC Basics"
series_order: 4
categories: ["Technology"]
---

Japanese care software is not a blank market. Billing has been electronic for years. The live fight is everything around the claim: the daily record, the roster, the add-on evidence, and a new national data platform that is switching on unevenly from 2026.

## What a normal month looks like

A provider's operational loop is roughly this.

1. **Intake.** The care manager's plan ({{< ja "ケアプラン" "kea puran" >}}) says what will be delivered. For home-visit care that is a provision table ({{< ja "サービス提供票" "sābisu teikyō-hyō" >}}): which helper, which day, which service code. For a facility it is a care plan plus a daily life sheet.
2. **The care record ({{< ja "介護記録" "kaigo kiroku" >}}).** Staff write what they did and how the person was: meals, excretion, bathing, vitals, incidents, changes in condition. This used to be paper at the nurse station or in the helper's notebook. It is now the main thing vendors sell tablets and voice input for.
3. **The record becomes the claim.** Units are not typed in a second time if the software is doing its job. A completed visit or a facility day maps to a service code. Add-ons (night, two staff, dementia care, treatment improvement) are flags, not free text.
4. **Scheduling and staffing.** Visit care lives or dies by the roster. Facilities live by the staffing ratios the fee schedule assumes. Software that does not know the ratio cannot warn a manager that tomorrow's shift loses an add-on.
5. **The monthly claim ({{< ja "介護給付費請求" "kaigo kyūfu-hi seikyū" >}}).** By the 10th of the next month the office transmits a claim file to the prefectural National Health Insurance federation ({{< ja "国保連" "kokuho-ren" >}}). The care manager's benefit-management form has to agree with the providers' claims or units are rejected. Payment arrives around the end of the month after that. Details and the Miyagi timetable are in the insurance post.[^1]
6. **Reports that are not the claim.** Quality add-ons, especially LIFE, are a second submission to a ministry system. Family notices, incident reports, and the municipal information-disclosure sheets are a third pile of paperwork. None of these replace the claim.

The Japanese word users reach for is {{< ja "レセプト" "reseputo" >}}, borrowed from medical claims. In care the formal object is the care-benefit statement ({{< ja "介護給付費明細書" "kaigo kyūfu-hi meisai-sho" >}}). Staff still say レセプト. A product that only stores nursing notes and cannot emit a valid claim file will not replace the system an office already pays for.

## LIFE, the scientific-care system

> **Update, 9 Oct 2026:** Since **11 May 2026**, LIFE has been operated by the National Health Insurance Central Association ({{< ja "国保中央会" "kokuho chūō-kai" >}}) instead of MHLW. Offices had to migrate to the new system between 11 May and 31 July 2026 to keep claiming LIFE-linked add-ons.[^14] Details are in the [LIFE guide](../../guides/life-scientific-care-data/).

LIFE ({{< ja "科学的介護情報システム" "kagakuteki kaigo jōhō shisutemu" >}}, Long-term care Information system For Evidence) started on **1 April 2021**. It merged two earlier collections, VISIT (rehabilitation, from 2017) and CHASE (status and events, from 2020). Offices that want certain add-ons submit structured data — ADL, nutrition, oral health, dementia, continence, pressure ulcers, drugs — and receive feedback: a person's score over time, and the office compared with others in the prefecture. The add-on rules require a PDCA cycle. Uploading a file and ignoring the feedback is not enough.[^2]

The headline add-on is {{< ja "科学的介護推進体制加算" "kagakuteki kaigo suishin taisei kasan" >}}, the scientific-care system add-on. In that September 2026 paper, for special nursing homes and for fees in force since June 2024, type I is **40 units a month** and type II is **50 units a month**. On the November 2025 review month (October 2025 services), type II was billed by **51.9 percent** of special-nursing-home offices that billed that month, and type I by **23.6 percent**. Those two rates should not be added: an office is in one type or the other. The same paper says that, as of **April 2025**, about **70 percent** of facility-type services and about **50 percent** of day and residential-type services were using LIFE. LIFE-linked add-ons number 17, and several ask for the same items twice. That duplication is an official complaint, not a vendor's sales line.

For software, LIFE is a **CSV interface**, not a screen the ministry expects staff to retype if they already have a care record. MHLW publishes an external interface so a care system can be the parent record and LIFE the child. A version titled 3.10 is the published CSV spec.[^3] A Hyogo prefecture circular relaying the ministry, dated 12 August 2025, set **23 October 2025** as the production date from which interface 3.10 (and the previous 3.00) could be ingested.[^4] Vendors need a test-environment account. The industrial body that circulates these notices is the Japanese Association of Healthcare Information Systems Industry ({{< ja "保健医療福祉情報システム工業会" "hoken iryō fukushi jōhō shisutemu kōgyō-kai" >}}, JAHIS).

The fiscal 2024 revision also tightened the rhythm: the September 2026 paper records that submission for the scientific-care add-on moved from at least once every six months to at least once every **three months**. A Thai-built record that cannot schedule that extract will leave the add-on on the table.

## The national care-information platform

A second, larger project is the care information platform ({{< ja "介護情報基盤" "kaigo jōhō kiban" >}}), created by the 2023 health-insurance law amendment. Municipalities, users, care offices, and clinics are supposed to read the same care information electronically. MHLW's project page, current as of notices through August 2026, sets the timetable:[^5]

- From **1 April 2026**, municipalities whose care-insurance system meets the standard specification ({{< ja "標準仕様書" "hyōjun shiyō-sho" >}} version 4.0, including the link to the platform) start, one by one, moving data and sharing through the platform.
- The aim is that **every municipality** has finished, including data migration, by **1 April 2028**.

Offices do not get a new login from each city. They use a web service, {{< ja "介護保険資格確認等WEBサービス" "kaigo hoken shikaku kakunin tō webu sābisu" >}}, run through a portal that the National Health Insurance Central Association ({{< ja "国保中央会" "kokuho chūō-kai" >}}) operates ({{< ja "介護情報基盤ポータル" "kaigo jōhō kiban pōtaru" >}}). Using it means a client certificate on the PC, a card reader, and the user's My Number card ({{< ja "マイナンバーカード" "mai nanbā kādo" >}}) for identity checks. The portal also takes applications for subsidies, including card readers. An API specification, version 1.0, for linking to that web service was announced on **31 August 2026**.

The care-plan data exchange system ({{< ja "ケアプランデータ連携システム" "kea puran dēta renkei shisutemu" >}}) is being pulled into this world. It is the pipe by which a care manager sends the plan and the provision table to visit-care and day-care offices as structured data, instead of fax. MHLW's platform page points to a 22 July 2025 notice on the schedule and on integrating that system with the platform, and to a 27 May 2026 notice on how the care-plan standard spec will be handled. This brief does **not** cite a user count for the exchange system, because a primary total was not verified here.

For a foreign vendor the sequence matters. Today you must emit federation claim files and, if you want the add-ons, LIFE CSV. Over 2026–2028 you should also expect API calls against the qualification web service and a standard care-plan payload. Offices will not run a second package just for that.

## Productivity rules and subsidies

The fiscal 2024 fee revision created {{< ja "生産性向上推進体制加算" "seisansei kōjō suishin taisei kasan" >}}, an add-on for offices that keep a productivity committee, follow MHLW's productivity guideline, and use technology rather than buying a gadget and stopping. Type II is **10 units a month**. Type I, for offices that go further (more than one technology, a clear split of tasks, and a checked result), is **100 units a month**.[^6]

Capital subsidies are a different tap. The regional medical and long-term care fund ({{< ja "地域医療介護総合確保基金" "chiiki iryō kaigo sōgō kakuho kikin" >}}), created in the 2014 reform, is how prefectures fund service buildings and, among other things, robots and ICT. The fiscal 2026 MHLW budget bill bundles "further development of the community-based integrated care system" at **235.7 billion yen** (241.7 billion the year before). That line includes the fund and several other programmes. It is **not** a verified ICT-only budget, and this brief does not split out a robot or software subsidy total.

The policy intent is explicit in the December 2023 reform roadmap quoted in the July 2025 overview: robots, ICT, larger and more collaborative operators, and more flexible staffing ratios where evidence supports it. The April 2025 interim report on services toward 2040 says the same thing in regional language: cities need 24-hour home care at scale; depopulating areas need rules loose enough that a service can survive.[^7]

## Who already sells this

No official market-share table was found. The figures below are what the companies themselves publish. They are not a census, they are not comparable (one includes a membership brand, another excludes disability-service offices), and they should not be added up to a market size.

- **Kaipoke ({{< ja "カイポケ" "kaipoke" >}}),** from SMS Co., Ltd. ({{< ja "株式会社エス・エム・エス" "kabushiki-gaisha esu emu esu" >}}). Cloud software for care, home nursing, and disability services. Records on a phone or tablet flow into the claim, including federation transmission. The company says **more than 60,000** introductions as of April 2026, a count that includes its "Kabenashi Cloud" members. It advertises care-plan data-exchange support.[^8]
- **Honobono NEXT ({{< ja "ほのぼのNEXT" "honobono nekusuto" >}}),** from ND Software. Care records through to claims, plus voice input, sensors, and an AI care-plan tool. The company says **more than 72,300** offices as of April 2026, on its own count.[^9]
- **Wiseman ({{< ja "ワイズマン" "waizuman" >}}),** Wiseman Co., Ltd. A broad package across home, facility, and disability services, including LIFE forms, sold as an ASP. The company says **more than 61,200** care and welfare offices, excluding disability offices, on its own count (page undated when fetched on 9 October 2026).[^10]
- **Kanamic ({{< ja "カナミック" "kanamikku" >}}),** Kanamic Network Co., Ltd., listed on the Tokyo Stock Exchange Prime market. Cloud records, claims, and cross-organisation sharing aimed at community-based integrated care. The company says **57,763** offices and **376,972** users as of March 2026.[^11]
- **Carekarte ({{< ja "ケアカルテ" "kea karute" >}}),** Care Connect Japan Co., Ltd. ({{< ja "株式会社ケアコネクトジャパン" "kabushiki-gaisha kea konekuto japan" >}}). Records, plans, and claims for care and disability services, with tablet and voice input and office-specific forms. The company says about **19,000** offices (page undated when fetched).[^12]

Smaller and specialist tools exist, including visit-care mobile records and packages tied to a single device maker. The pattern of the five above is the same: one database feeds the record, the roster, the claim, and as much of LIFE as the vendor has finished. Switching costs are data migration plus staff habit plus the fear of a rejected claim on the 10th. Price is not a verified comparison here. Kaipoke publishes a no-initial-fee monthly model; others quote by office size. Do not plan against a single price point scraped from a ranking blog.

## What "certification" actually means

This research did not find a government certificate that a billing product must hold before an office may use it, in the way a drug or a medical device is approved. What exists instead:

- A published claim interface and a free transmission tool from {{< ja "国保中央会" "kokuho chūō-kai" >}}.[^13] If your file fails the federation's checks, the office is not paid. That practical test is stricter than a logo.
- A published LIFE CSV interface, plus a vendor test environment.
- Emerging APIs for the qualification web service and a care-plan standard spec, maintained on WAM NET and the ministry's platform page.
- Ordinary corporate duties: privacy (care records are sensitive personal information), security guidance MHLW has written for offices joining the platform, and the ability to ship a fee-schedule update in weeks when the codes change. Miyagi's page already lists separate code tables for June 2026 and for August 2026.[^1]

A Thai package can be excellent at residential workflow and still be unsellable until it emits these files in Japanese, on the Japanese calendar, with Japanese service codes. Partnering with a company that already transmits, or licensing their claim module, is a more realistic first step than re-creating {{< ja "国保連" "kokuho-ren" >}} logic.

{{< analysis >}}
LIFE is both a compliance burden and PSP's clearest product opportunity. The quarterly submission rhythm, the 17 overlapping add-ons, and the CSV spec that vendors must implement — all of this is pain that offices feel today. A well-designed LIFE module that auto-populates from daily care records (ADL, nutrition, oral health, continence) and reminds staff when submission is due could be sold as a standalone add-on before PSP tackles claims. The LIFE interface spec (version 3.10) is public; building against it does not require a federation relationship. If PSP can also consume the upcoming care-plan data exchange standard, it becomes a bridge between the care manager and the service provider — a position none of the incumbents fully owns yet. Start with LIFE extraction, prove reliability, then expand into claims via partnership.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: Added an update note that LIFE has been operated by Kokuho Chūōkai since 11 May 2026. Corrected the company name "Canamic" to "Kanamic".

---

## References

[^1]: Miyagi National Health Insurance Federation. "Long-Term Care Benefits Billing Procedures (介護給付費の請求について)." Accessed October 2026. https://www.miyagi-kokuho.or.jp/kaigo/seikyu.html

[^2]: Ministry of Health, Labour and Welfare. "LIFE Data Submission Status and Future Directions (LIFE関係加算の届出状況等について)." Care Fee Subcommittee paper, 3 September 2026. https://www.mhlw.go.jp/content/12300000/001744922.pdf

[^3]: Ministry of Health, Labour and Welfare. "LIFE External Interface Specification Version 3.10 (科学的介護情報システム 外部インターフェース仕様書)." https://www.mhlw.go.jp/content/12301000/001698660.pdf

[^4]: Hyogo Prefecture. "Notice on LIFE System Interface Version Update (科学的介護情報システムの外部インターフェース対応について)." Circular, 12 August 2025. https://web.pref.hyogo.lg.jp/kf05/documents/2025081201.pdf

[^5]: Ministry of Health, Labour and Welfare. "Care Information Platform Project Page (介護情報基盤について)." Accessed October 2026. https://www.mhlw.go.jp/stf/newpage_59231.html

[^6]: Ministry of Health, Labour and Welfare. "Productivity Improvement System Add-on Explainer (生産性向上推進体制加算について)." https://www.mhlw.go.jp/content/12300000/001280909.pdf

[^7]: Ministry of Health, Labour and Welfare. "Long-Term Care Insurance System Overview (介護保険制度をめぐる最近の動向について)." July 2025. https://www.mhlw.go.jp/content/001512842.pdf

[^8]: SMS Co., Ltd. "Kaipoke Product Page." Accessed October 2026. https://ads.kaipoke.biz/

[^9]: ND Software Co., Ltd. "Honobono NEXT Product Page." Accessed October 2026. https://www.ndsoft.jp/product/next/

[^10]: Wiseman Co., Ltd. "Care and Welfare System Products." Accessed October 2026. https://www.wiseman.co.jp/products/welfare/

[^11]: Kanamic Network Co., Ltd. "Company Overview." Accessed October 2026. https://www.kanamic.net/

[^12]: Care Connect Japan Co., Ltd. "Carekarte Product Page." Accessed October 2026. https://www.carekarte.jp/carekarteabout/

[^13]: National Health Insurance Central Association. "Long-Term Care Claim Transmission Software (介護伝送ソフト)." Version 10. https://www.kokuho.or.jp/kaigosoft/jigyosho_ver10/

[^14]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Notice on the Transfer of LIFE's Operating Body (科学的介護情報システム（LIFE）の運営主体の移管に係る周知について)." Administrative notice, 23 March 2026 (Care Insurance Latest Information Vol.1484). https://www.mhlw.go.jp/content/12301000/001677722.pdf
