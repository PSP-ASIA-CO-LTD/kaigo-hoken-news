---
title: "How Japan's Long-Term Care Insurance works"
date: 2026-10-09T00:00:00+07:00
tags: ["japan", "long-term-care", "kaigo-hoken", "billing"]
summary: "The basics of 介護保険: who is covered, who pays, how need is certified, what the monthly caps are, and how a provider gets paid."
series: "Japan LTC Basics"
series_order: 2
categories: ["Basics"]
countries: ["Japan"]
---

This is the foundation for anyone selling care software in Japan. The system is social insurance, not a grant programme and not a copy of medical insurance, though the billing machinery looks similar.

## Why it exists

Long-Term Care Insurance ({{< ja "介護保険" "kaigo hoken" >}}) was created because families could no longer absorb rising care needs, and the old welfare and medical routes were not built for it. The Long-Term Care Insurance Act ({{< ja "介護保険法" "kaigo hoken-hō" >}}) was passed in 1997 and took effect in April 2000. The stated ideas are independence ({{< ja "自立支援" "jiritsu shien" >}}), user choice among providers ({{< ja "利用者本位" "riyōsha hon'i" >}}), and a clear link between contributions and benefits ({{< ja "社会保険方式" "shakai hoken hōshiki" >}}). The purpose clause is in Article 1 of the Act.[^1]

The Ministry of Health, Labour and Welfare ({{< ja "厚生労働省" "kōsei rōdō shō" >}}, MHLW), through its Health and Welfare Bureau for the Elderly ({{< ja "老健局" "rōken-kyoku" >}}), writes the national rules. It does not insure people itself.

## Who is covered, and who is the insurer

The insurer ({{< ja "保険者" "hoken-sha" >}}) is the municipality ({{< ja "市町村" "shi-chō-son" >}}), or a special ward in Tokyo. There are two groups of insured people ({{< ja "被保険者" "hi-hoken-sha" >}}), as set out in MHLW's July 2025 overview:[^2]

- **Category 1 ({{< ja "第1号被保険者" "dai-ichi-gō hi-hoken-sha" >}}):** everyone aged 65 and over. They can use services for any cause once certified.
- **Category 2 ({{< ja "第2号被保険者" "dai-ni-gō hi-hoken-sha" >}}):** people aged 40 to 64 who are in a medical insurance scheme. They can use services only when need comes from a designated age-related disease ({{< ja "特定疾病" "tokutei shippei" >}}), such as late-stage cancer or rheumatoid arthritis.

Counts in that July 2025 deck, from the fiscal 2022 business report ({{< ja "年度末" "nendo-matsu" "fiscal year-end" >}} for category 1; monthly average for category 2): **35.85 million** people aged 65 and over, and **41.88 million** aged 40 to 64. Among them, **6.81 million** aged 65 and over were certified (19.0 percent), against **130,000** aged 40 to 64 (0.3 percent). A later cut in the same deck, from the monthly business report, puts category-1 insured people at **35.91 million** at the end of April 2024, up from 21.65 million at the end of April 2000.

Certified people and users have grown faster than the elderly population. At the end of April 2024 the deck reports **7.10 million** certified people (3.3 times April 2000) and **5.29 million** service users (3.6 times), of whom **4.27 million** were in home and community services and **1.02 million** in facilities, including community-based special nursing homes. Source: the same overview, citing {{< ja "介護保険事業状況報告" "kaigo hoken jigyō jōkyō hōkoku" >}}.

## Who pays

Benefits are financed half by premiums and half by tax. For fiscal 2024–2026 the premium split, set by population share, is **23 percent** from people aged 65 and over and **27 percent** from people aged 40 to 64. On the tax side the standard split is **25 percent national** (20 percent fixed plus a 5 percent adjustment grant), **12.5 percent prefectural**, and **12.5 percent municipal**. For facility benefits the national fixed share is 15 percent and the prefecture's share is 17.5 percent.[^2]

The same deck prices the **fiscal 2025 budget** at **13.2 trillion yen** of care benefit ({{< ja "介護給付費" "kaigo kyūfu-hi" >}}) and **14.3 trillion yen** on a total-cost basis, and then splits that picture, with rounding, into about 3.0 trillion yen of category-1 premiums, 3.6 trillion of category-2 premiums, 0.7 trillion of adjustment grant, 2.4 trillion of national fixed contribution, 1.9 trillion prefectural, and 1.7 trillion municipal. These are budget shares, not the same statistic as the "cost" total in the next paragraph.

A different and more recent number is what was actually reviewed and paid. The fiscal 2025 Long-term Care Benefit Expenditures Survey ({{< ja "介護給付費等実態統計" "kaigo kyūfu-hi tō jittai tōkei" >}}), published 30 September 2026, puts cumulative {{< ja "費用額" "hiyō-gaku" "cost amount" >}} at **12.2208 trillion yen**, up 2,827 billion yen (2.4 percent) on fiscal 2024. Of that, care services were 11.8806 trillion and preventive services 340.2 billion. This total adds the insurance payment, public-expense shares, and the user's co-payment. It does **not** include items the municipality pays directly, such as welfare-equipment purchases and home modifications. Annual recipients (anyone paid at least once from April 2025 through March 2026) were **6,851,600**.[^3]

Do not add these figures together. The 14.3 trillion yen figure is a fiscal 2025 budget concept. The 12.22 trillion yen figure is reviewed cost for fiscal 2025 and includes user charges but excludes some municipal direct payments.

Premiums for people aged 65 and over are set by each municipality, usually deducted from the pension, and reset every three years with the municipal care-insurance plan ({{< ja "介護保険事業計画" "kaigo hoken jigyō keikaku" >}}). The national average (weighted) for the 9th period, fiscal 2024–2026, is **6,225 yen a month**, up from 2,911 yen in 2000–2002.[^2] People aged 40 to 64 pay through their medical-insurance premium; employers generally pay half of that medical premium.

## How someone qualifies

The user, or a community general support centre ({{< ja "地域包括支援センター" "chiiki hōkatsu shien sentā" >}}) acting for them, applies at the municipal window with the insurance card. The municipality then:

1. Sends a surveyor to complete a standardised assessment ({{< ja "認定調査" "nintei chōsa" >}}; the July 2025 deck says the basic survey has 74 items) and collects an opinion from the attending doctor ({{< ja "主治医意見書" "shuji-i ikensho" >}}).
2. Runs a computer **primary judgement** ({{< ja "一次判定" "ichiji hantei" >}}) that estimates care minutes.
3. Puts the case to a certification committee of health, medical, and welfare professionals ({{< ja "介護認定審査会" "kaigo nintei shinsa-kai" >}}) for a **secondary judgement** ({{< ja "二次判定" "niji hantei" >}}).

The municipality issues the certificate. The result is one of:

- **{{< ja "要支援" "yō-shien" "support needed" >}}1 or 要支援2**: lighter need, aimed at prevention. Many of the old preventive home-visit and day services were moved into a municipal programme called {{< ja "介護予防・日常生活支援総合事業" "kaigo yobō nichijō seikatsu shien sōgō jigyō" >}}.
- **{{< ja "要介護" "yō-kaigo" "care needed" >}}1 through 要介護5**: 1 is the lightest, 5 the heaviest.
- Or non-eligible, in which case the person may still use general prevention activities.

The certificate is valid only for a period set in ministerial rules and then must be renewed (Article 28 of the Act). This brief does not quote a single validity length, because it varies and was not pulled from the ordinance text here.

## The care manager and the care plan

For services at home, a care manager ({{< ja "介護支援専門員" "kaigo shien senmon'in" >}}, commonly {{< ja "ケアマネジャー" "kea manejā" >}}) at a home-care support office ({{< ja "居宅介護支援事業所" "kyotaku kaigo shien jigyō-sho" >}}) writes the care plan ({{< ja "居宅サービス計画" "kyotaku sābisu keikaku" >}}, {{< ja "ケアプラン" "kea puran" >}}), coordinates providers, and files a benefit-management form ({{< ja "給付管理票" "kyūfu kanri-hyō" >}}) that adds up the units used against the monthly cap. As of 1 October 2024 there were **37,258** such offices.[^4]

Care management itself is fully covered. The July 2025 overview states that {{< ja "居宅介護支援" "kyotaku kaigo shien" >}} is paid entirely by insurance, so the user does not pay a percentage co-payment on the care manager's fee. The user still pays their share of the services in the plan.

## The monthly cap is in units, not yen

For in-home and community-based services, insurance covers units only up to a monthly cap, the {{< ja "区分支給限度基準額" "kubun shikyū gendo kijun-gaku" >}}. Above the cap, the user pays 100 percent. The amounts still in the ministerial notice ({{< ja "厚生省告示第33号" "kōsei-shō kokuji dai-sanjū-san-gō" >}}, last amendment applied 1 October 2019) are:[^5]

| Care level | Monthly cap |
| --- | --- |
| 要支援1 | 5,032 units |
| 要支援2 | 10,531 units |
| 要介護1 | 16,765 units |
| 要介護2 | 19,705 units |
| 要介護3 | 27,048 units |
| 要介護4 | 30,938 units |
| 要介護5 | 36,217 units |

An MHLW worked example from 2021 still uses 16,765 units for 要介護1.[^6] These caps were not what the fiscal 2024 fee revision rewrote. They apply to home and community services. They are **not** the payment rule for a bed in a designated facility. Facility fees are mostly per day, by care level, and sit outside this cap. That distinction is the whole of the "budget per resident" question, and it is covered in the next post.

## One unit is 10.00 to 11.40 yen

Japan uses units so that wages in Tokyo and in a rural town can differ without rewriting every service code. MHLW's December 2024 committee paper on regional bands states the rule: units are calculated from the fee schedule, then multiplied by a unit price of **10 yen to 11.40 yen**, set by service and region.[^7]

For services with a 70 percent labour share — including home-visit care ({{< ja "訪問介護" "hōmon kaigo" >}}), home-visit nursing ({{< ja "訪問看護" "hōmon kango" >}}), and care management — the unit price runs from **11.40 yen** in grade 1 ({{< ja "1級地" "ikkyū-chi" >}}, Tokyo's special wards) down to **10 yen** in the residual "other" band. Day care ({{< ja "通所介護" "tsūsho kaigo" >}}) and the three facility types use the 45 percent labour row, so grade 1 is **10.90 yen**, not 11.40. Multiplying a cap by 10 and calling it yen is only exact in the cheapest band. In central Tokyo a 要介護1 home-care cap of 16,765 units is 16,765 × 11.40 yen for a visit-care service, not × 10.

Illustrative fees in the July 2025 overview, not a full price list: body care under 20 minutes at **163 units** a visit; a unit-type private room in a special nursing home at **670 units a day** for 要介護1 and **955 units a day** for 要介護5. The 163-unit visit code also appears in the April 2024 service-code table on WAM NET.[^8]

On top of the base fee, providers bill many add-ons ({{< ja "加算" "kasan" >}}) for staffing, night work, end-of-life care, scientific-care reporting, and so on. Some add-ons count toward the monthly cap and some do not. Software that cannot tell those apart will mis-state what the user owes.

## What the user pays

For covered services the user pays **10, 20, or 30 percent**. Category-2 users pay 10 percent regardless of income. For people aged 65 and over, the July 2025 overview sets:[^2]

- **20 percent** when total income is at least 1.6 million yen **and** pension plus other income is at least 2.8 million yen (single) or 3.46 million yen (couple).
- **30 percent** when total income is at least 2.2 million yen **and** pension plus other income is at least 3.4 million yen (single) or 4.63 million yen (couple).
- **10 percent** otherwise.

The 20 percent band started in August 2015 and the 30 percent band in August 2018. Room charges, meals, and everyday costs (haircuts, hobbies) are outside the 10/20/30 split. In the three facility types and in short stay, low-income users can get a supplementary benefit ({{< ja "補足給付" "hosoku kyūfu" >}}) toward room and meals. A reform track opened in December 2023 still had the government seeking a conclusion, before fiscal 2027, on how far the 20 percent band should extend. That decision was not final in the materials used here.

## How a provider is paid

The provider does not invoice MHLW and does not invoice the resident's municipality directly for the insurance share.

1. During the month, staff record care. Each record maps to a service code and a number of units.
2. The care manager submits the benefit-management form showing units used against the cap.
3. The provider submits a care-benefit claim ({{< ja "介護給付費明細書" "kaigo kyūfu-hi meisai-sho" >}}) and a claim summary to the **prefectural** National Health Insurance federation ({{< ja "国保連合会" "kokuho rengō-kai" >}}) where the **office** is located, even if the user lives in another prefecture.
4. The legal deadline is the **10th of the following month**. In Miyagi, for example, electronic transmission is accepted from the 1st through 17:15 on the 10th, including weekends, and payment to the provider is scheduled by the end of the month after next.[^9] Dates can differ slightly by prefecture; the 10th is the statutory cut-off that page cites.
5. The federation checks form, eligibility, and the cap, pays the provider, and bills the insuring municipality. Claims are supposed to be electronic ({{< ja "伝送" "densō" >}}) or on magnetic media. Paper is the exception.
6. The national government stores claim data in the Long-term Care Insurance Comprehensive Database ({{< ja "介護保険総合データベース" "kaigo hoken sōgō dētabēsu" >}}). Providers do not file a second "report to the ministry" to get paid. Submission to LIFE, covered in the technology post, is a separate feed and is tied to add-on fees, not to the monthly claim itself.

The file layouts are national. The National Health Insurance Central Association ({{< ja "国民健康保険中央会" "kokumin kenkō hoken chūō-kai" >}}, {{< ja "国保中央会" "kokuho chūō-kai" >}}) publishes the interface and a transmission tool ({{< ja "介護伝送ソフト" "kaigo densō sofuto" >}}).[^10] Commercial care software either generates those files or transmits them. There is no separate ministry licence, of the medical-device kind, that this research found as a condition of selling billing software. What is mandatory is that the file the federation receives is valid.

## The three-year rewrite

Fees ({{< ja "介護報酬" "kaigo hōshū" >}}) are revised on the same three-year rhythm as the municipal plans. Recent rates, from the July 2025 overview:[^2]

- Fiscal 2021: **＋0.70 percent**
- October 2022: **＋1.13 percent** (a wage top-up, described as about 9,000 yen)
- Fiscal 2024: **＋1.59 percent**, of which **＋0.98** was care-worker wages and **＋0.61** was everything else. MHLW's fiscal 2024 benefit-survey overview dates the pieces to **1 April 2024 and 1 June 2024**.[^11]

The next **regular** revision is fiscal 2027, with the 10th municipal plan period (fiscal 2027–2029). Fiscal 2026 did not wait for it. The fiscal 2026 MHLW budget bill includes a mid-cycle care-fee revision of **＋2.03 percent**, discussed in the budget post. Prefectural claim manuals already publish service-code tables marked "Reiwa 8, June and August",[^9] so software had to ship at least two code updates inside 2026.

Any product that bills Japanese care has to treat the fee schedule as a dataset that changes on a known calendar, not as a screen someone edits by hand once a year.

{{< analysis >}}
For PSP Asia, the fee-schedule machinery creates both a barrier and an opportunity. The barrier: any product that touches billing must ingest MHLW's service-code tables (which change mid-year, as fiscal 2026 showed), apply the correct regional unit price (10.00–11.40 yen), and distinguish which add-ons count toward the monthly cap. Hard-coding any of this is fatal. The opportunity: many small offices struggle with exactly this complexity — the care manager's cap math, the add-on eligibility, the claim-file format. A well-designed UI that *explains* what the user owes before the month ends, rather than after the claim is rejected, would be a genuine differentiator. If PSP cannot build federation-compliant claim generation quickly, consider a middleware play: pull records from PSP's workflow app, export to a partner's billing engine, and compete on the user-facing experience rather than the file spec.
{{< /analysis >}}

---

## References

[^1]: Government of Japan. "Long-Term Care Insurance Act (介護保険法)." e-Gov Laws Database. Accessed October 2026. https://laws.e-gov.go.jp/law/409AC0000000123

[^2]: Ministry of Health, Labour and Welfare. "Long-Term Care Insurance System Overview (介護保険制度をめぐる最近の動向について)." July 2025. https://www.mhlw.go.jp/content/001512842.pdf

[^3]: Ministry of Health, Labour and Welfare. "Fiscal 2025 Long-Term Care Benefit Expenditures Survey Results (令和7年度 介護給付費等実態統計の概況)." Press release, 30 September 2026. https://www.mhlw.go.jp/toukei/saikin/hw/kaigo/kyufu/25/dl/10.pdf

[^4]: Ministry of Health, Labour and Welfare. "Survey of Long-Term Care Service Facilities and Offices, October 2024 (令和6年介護サービス施設・事業所調査)." https://www.mhlw.go.jp/toukei/saikin/hw/kaigo/service24/dl/gaikyo.pdf

[^5]: Ministry of Health, Labour and Welfare. "Ministerial Notice No. 33 on Category Benefit Limit Standard Amounts (厚生省告示第33号)." Last amended 1 October 2019. https://www.mhlw.go.jp/web/t_doc?dataId=82aa0267&dataType=0

[^6]: Ministry of Health, Labour and Welfare. "Long-Term Care Insurance Benefit Calculation Example (介護保険給付費の計算例)." 2021. https://www.mhlw.go.jp/content/12404000/000756911.pdf

[^7]: Ministry of Health, Labour and Welfare. "Regional Unit Price Bands for Long-Term Care Benefits (介護報酬の地域区分について)." Care Fee Subcommittee paper, December 2024. https://www.mhlw.go.jp/content/12300000/001477917.pdf

[^8]: Welfare and Medical Service Agency (WAM). "Long-Term Care Service Code Tables, April 2024 (令和6年4月版 介護サービスコード表)." WAM NET. https://www.int.wam.go.jp/sec/gyoseiShiryou-files/documents/2024/0327195057909/20240329_106.pdf

[^9]: Miyagi National Health Insurance Federation. "Long-Term Care Benefits Billing Procedures (介護給付費の請求について)." Accessed October 2026. https://www.miyagi-kokuho.or.jp/kaigo/seikyu.html

[^10]: National Health Insurance Central Association. "Long-Term Care Claim Transmission Software (介護伝送ソフト)." Version 10. https://www.kokuho.or.jp/kaigosoft/jigyosho_ver10/

[^11]: Ministry of Health, Labour and Welfare. "Fiscal 2024 Long-Term Care Benefit Expenditures Survey Overview (令和6年度 介護給付費等実態統計の概況)." https://www.mhlw.go.jp/toukei/saikin/hw/kaigo/kyufu/24/dl/11.pdf
