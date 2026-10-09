---
title: "Subsidies and how care offices buy software: the fiscal 2026 rules"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T00:00:00+07:00
tags: ["japan", "long-term-care", "subsidy", "software", "care-plan", "guide"]
summary: "The fiscal 2026 care-technology subsidy at four fifths of cost, what software and offices must do to qualify, how it links to the Care Plan Data Exchange and the wage add-on, and the separate METI subsidy that some vendors use instead."
categories: ["Guides"]
weight: 5
---

*Last updated: 9 Oct 2026*

Most Japanese care offices are small, and many buy care software with help from a public subsidy. Which subsidy applies, and at what rate, depends on the programme. Vendor sites sometimes quote figures from different programmes or from earlier years. This guide sets out the fiscal 2026 rules from the primary documents. It covers the main care-technology subsidy, the conditions it places on software and on offices, its link to the Care Plan Data Exchange and the wage add-on, and a separate programme run under METI.

## The fiscal 2026 care-technology subsidy

MHLW's notice of 7 April 2026 sets up the fiscal 2026 care-technology programme, funded from money carried over from fiscal 2025.[^1] Its first part is the care-technology retention support project ({{< ja "介護テクノロジー定着支援事業" "kaigo tekunorojī teichaku shien jigyō" "care-technology retention support project" >}}). Its basic features:[^1]

- **Who runs it.** Prefectures.
- **Who can apply.** Every office providing services under the Long-Term Care Insurance Act, including home-visit care and care-management offices, plus two types of older people's homes under the Welfare of the Aged Act.
- **Rate.** **Four fifths** (4/5) of actual eligible spending, up to a base amount.
- **Priority.** Prefectures must give priority to monitoring devices, intercoms and care software, because the notice says those have shown time savings.

**The rate went up.** Chiba Prefecture's summary of changes shows the rate for care technology and care software at **3/4 in fiscal 2025** and **4/5 in fiscal 2026**.[^2] Figures of "up to 3/4" are therefore out of date for this programme.

### What can be bought

The notice covers four kinds of spending:[^1]

- **Care technology listed in TAIS.** Equipment selected as "care technology" in the welfare-equipment database TAIS ({{< ja "福祉用具情報システム" "fukushi yōgu jōhō shisutemu" "welfare equipment information system" >}}), run by the Association for Technical Aids.
- **Costs of getting software into use.** PCs and tablets used with the care software (leases included), Wi-Fi and network work, and the vendor's support before and after adoption.
- **Equivalent and other items.** Equipment not yet in TAIS that the prefecture judges to be of the same standard, and back-office software such as electronic signature, payroll and attendance systems.
- **Business-improvement support.** Third-party consulting on the adoption, or training and consultation through the prefecture's productivity support centre.

Products must have a published price and be generally on sale. Development costs are not eligible, and communication charges are excluded.[^1]

**What counts as "care software".** The software must handle records, information sharing and billing end to end without re-keying. Information sharing includes exchanging care plans and service use tables with other offices. The notice also says the software should preferably export and import records in an easily converted format such as CSV or JSON, so that offices can switch systems quickly.[^1]

### How much

The subsidy is the lower of four fifths of actual spending and the base amount.[^1] For care software and back-office software priced by headcount, the base amount depends on staff numbers:[^1]

| Staff (at application) | Base amount | With pre/post-adoption support |
|---|---|---|
| 1–10 | ¥1.0 million | ¥1.15 million |
| 11–20 | ¥1.5 million | ¥1.65 million |
| 21–30 | ¥2.0 million | ¥2.15 million |
| 31 or more | ¥2.5 million | ¥2.65 million |

Other points from the notice:[^1]

- **Other contract types.** A flat ¥2.5 million base, or ¥2.65 million with support.
- **Exchange bonus.** Home-service and care-management offices that exchange data with **five or more** offices through the Care Plan Data Exchange during fiscal 2026 get **¥50,000** more.
- **Who counts as staff.** Managers and other staff expected to use the system can be counted, not only care staff. Staff who visit homes can be counted by head rather than full-time equivalent.
- **Other categories.** Transfer and bathing aids and intercoms have a base of ¥1.0 million per unit, and other listed technology ¥300,000 per unit. A "package" of linked devices has a base set by the prefecture between ¥4 million and ¥10 million. Business-improvement support has a base of ¥480,000.

**Worked example (our arithmetic from the rules above).** A home-visit care office with 10 staff buys care software for ¥1.0 million. Four fifths is ¥800,000, which is below the ¥1.0 million base, so the subsidy is ¥800,000 and the office pays ¥200,000.

## The conditions on the software

The notice adds conditions that depend on the office type:[^1]

- **Home-based and care-management offices.** The software must appear, in Kokuho Chūōkai's vendor-test results **and** in MHLW's care-software function survey, as able to output and import CSV files under the care-plan data standard. Those sources must also show that the vendor has a support system for using the Care Plan Data Exchange.
- **Facility services.** The function survey must show that the software outputs CSV under the LIFE CSV specification.
- **If a product is in neither source.** The prefecture should urge the vendor to answer MHLW's survey.

The two sources are public:

- **Vendor-test results.** Kokuho Chūōkai publishes the products that have completed each pattern of the version 4 test.[^3]
- **Function survey.** MHLW publishes the survey results on its care-technology page. The current edition is dated 24 August 2026.[^4] That edition lists 53 products, and for each one shows support for standard version 4.1, help-desk support for the exchange, planned support for version 5.0, and the status of LIFE CSV support.[^5]

For background on the two systems, see our guides to the [Care Plan Data Exchange](../care-plan-data-exchange/) and [LIFE](../life-scientific-care-data/).

## The conditions on the office

An office that receives the subsidy also takes on obligations:[^1]

- **Security.** Declare a "one star" or "two star" level under IPA's SECURITY ACTION self-declaration scheme, and follow MHLW's security guideline for medical information systems.
- **Improvement plan.** Write a business-improvement plan, normally after consulting the prefecture's care productivity support centre. Then report its effects to the prefecture for **three years** from the following fiscal year.
- **Wages.** If the technology improves productivity and finances, return the gains to staff wages and tell staff so.
- **LIFE and evaluation.** Cooperate with LIFE data collection and, as far as possible, with MHLW's evaluation studies.
- **Committee (residential and facility services).** Short stays, group homes, facilities and some other services must set up a committee on safety, quality and staff burden.
- **Exchange (home and community services).** A long list of home and community services must have started using the Care Plan Data Exchange or an MHLW-approved equivalent. The notice text, carried over from fiscal 2025, says "within fiscal 2025".
- **No double funding.** Spending already funded by another subsidy, such as the fund-based care-technology adoption project or METI's IT subsidy, is not eligible.

## The link to the wage add-on

The Care Plan Data Exchange is also tied to staff pay. The fiscal 2026 changes to the care-worker treatment improvement add-on ({{< ja "介護職員等処遇改善加算" "kaigo shokuin-tō shogū kaizen kasan" "care worker treatment improvement add-on" >}}) created higher tiers, Ⅰロ and Ⅱロ. An office qualifies for them by meeting a fiscal 2026 special requirement:[^6]

- **Visit and day services:** join the Care Plan Data Exchange and report results.
- **Facility services:** hold the productivity add-on type I or II and report results.
- **Any office:** belong to a social-welfare collaboration corporation.

At application, a pledge is enough for the first two routes.[^6]

For home-visit care, the add-on rates are:[^6]

| Tier | Rate | Higher tier | Rate |
|---|---|---|---|
| Ⅰイ | 27.0% | Ⅰロ | 28.7% |
| Ⅱイ | 24.9% | Ⅱロ | 26.6% |

Kokuho Chūōkai's claim software was updated in June 2026 for the new add-on rules.[^7]

## A separate route: METI's digital and AI subsidy

Some care-software vendors are registered under a different programme, the **Digital and AI Adoption Subsidy 2026** ({{< ja "デジタル化・AI導入補助金" "dejitaru-ka, AI dōnyū hojokin" "digital and AI adoption subsidy" >}}). It was formerly called the IT Adoption Subsidy. It is open to small and medium businesses in general, not only care offices. Under its normal track:[^8]

- **Rate.** Up to **1/2**, or 2/3 for firms that meet a minimum-wage condition.
- **Amount.** ¥50,000 to under ¥1.5 million for software covering one or more business processes, and ¥1.5 million to ¥4.5 million for four or more.

ZEST, a scheduling product profiled in our [Competitors](../../competitors/) section, says it is a registered tool under this programme. ZEST's guide to the programme says that ordering, contracting and paying must wait until the grant decision.[^9]

## Reading vendor subsidy claims

Vendor pages describe subsidies in different ways, so check which programme and which year a figure belongs to:

- **CAREKARTE.** Care Connect Japan's subsidy page describes an "ICT adoption support" subsidy at **3/4** (1/2 if conditions are not met), with a maximum of **¥2.6 million**.[^10] The fiscal 2026 national notice uses **4/5**, with a maximum base of **¥2.65 million** including support.[^1]
- **SmaCare.** Homenet says SmaCare was registered in TAIS on 1 September 2026, which it expects to make prefectural ICT subsidies easier to use.[^11]
- **ZEST.** ZEST's subsidy page refers to the METI programme at up to 50%, not to the care-technology subsidy.[^9]

{{< analysis title="Tako-San's take" >}}
Tako-San's view: for a vendor, the fiscal 2026 rules turn two public lists into the real gatekeepers. To be subsidised in home care, a product needs a completed Care Plan Data Exchange vendor test and an entry in MHLW's function survey showing the right CSV support. A product missing from both competes against products whose price the subsidy can cut by up to four fifths. The notice also says it is "desirable" that records can be exported as CSV or JSON so offices can switch systems. That is a policy push against lock-in that a new entrant should welcome. The wage add-on link means even an office that never applies for a subsidy has a payroll reason to use the exchange. I would treat "passes the vendor test, listed in the survey, in TAIS" as entry requirements, not as features to advertise.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: first published

---

## References

[^1]: Ministry of Health, Labour and Welfare, Director-General of the Health and Welfare Bureau for the Elderly. "Implementation of the FY2026 (carried over from FY2025) Care Technology Adoption, Collaboration and Management Improvement Support Programme (「令和８年度（令和７年度からの繰越分）介護テクノロジー導入・協働化・経営改善等支援事業」の実施について)." Notice 老発0407第3号, 7 April 2026, Annex 1, as republished by Iwate Prefecture. https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/099/125/kuniyoukou_zenbun.pdf

[^2]: Chiba Prefecture. "FY2026 Care Technology Retention Support Subsidy: Main Changes from Last Year (令和8年度介護テクノロジー定着支援事業費補助金 昨年度からの主な変更点)." Accessed 9 October 2026. https://www.pref.chiba.lg.jp/koufuku/kaigorobot/documents/01r8omonahennkou.pdf

[^3]: National Health Insurance Central Association. "Care Plan Data Exchange System Vendor Test (V4) Completion Results (「ケアプランデータ連携システム」ベンダ試験（Ｖ４対応版）の完了結果について)." List file 261006_5113, accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/lib/261006_5113_cp-vender_4.pdf

[^4]: Ministry of Health, Labour and Welfare. "Promoting the Use of Care Technology (介護テクノロジーの利用促進)." Accessed 9 October 2026. https://www.mhlw.go.jp/stf/kaigo-ict.html

[^5]: Ministry of Health, Labour and Welfare. "Care Record Software Function Survey Results, 24 August 2026 Edition (介護記録ソフト機能調査結果（令和８年８月24日版）)." Spreadsheet. https://www.mhlw.go.jp/content/12300000/001741865.xlsx

[^6]: Ministry of Health, Labour and Welfare. "Expansion of the Care Worker Treatment Improvement Add-on (介護職員等処遇改善加算の拡充)." FY2026 fee revision explainer. https://www.mhlw.go.jp/shogu-kaizen/download/5_R8_houshuu_kaitei.pdf

[^7]: National Health Insurance Central Association. "Care Claim Transmission Software Ver.10 (介護伝送ソフトVer.10)." Notice of 30 June 2026. Accessed 9 October 2026. https://www.kokuho.or.jp/kaigosoft/jigyosho_ver10/

[^8]: Small and Medium Enterprise Agency programme secretariat. "Normal Track, Digital and AI Adoption Subsidy 2026 (通常枠｜デジタル化・AI導入補助金2026)." Accessed 9 October 2026. https://it-shien.smrj.go.jp/applicant/subsidy/normal/

[^9]: ZEST Inc. "Introduce ZEST with the Digital and AI Adoption Subsidy 2026 (デジタル化・AI導入補助金2026)." Accessed 9 October 2026. https://zest.jp/lp/digital-ai-hojokin2026-zest

[^10]: Care Connect Japan Co., Ltd. "Subsidy Support (補助金対応について)." Accessed 9 October 2026. https://www.carekarte.jp/subsidy/

[^11]: Homenet Co., Ltd. "SmaCare Registered in the Welfare Equipment Information System (TAIS) (「スマケア」が福祉用具情報システム（TAIS）に登録されました)." Notice, 1 September 2026. https://www.smacare.jp/blog/notice/a586
