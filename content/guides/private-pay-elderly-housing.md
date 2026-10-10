---
title: "Private elderly housing in Japan: paid homes, serviced housing and who pays for care"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T09:00:00+07:00
tags: ["japan", "long-term-care", "paid-homes", "serviced-housing", "policy", "guide"]
summary: "Fee-charging homes for older people (care-included, residential and healthy-living types) and serviced housing for older people: the law and regulator behind each, how many there are, what insurance pays and what residents pay, the 'enclosure' problem, the 2026 registration law, operators on public data, and what it means for care software."
categories: ["Guides"]
weight: 9
countries: ["Japan"]
---

*Last updated: 9 Oct 2026*

In Japan, many older people who need care live in private, fee-charging housing rather than at home or in a public care facility. Paid homes alone had capacity for about 950,000 people in mid-2024.[^9] Two legal forms cover this housing:

- **Fee-charging homes for older people** ({{< ja "有料老人ホーム" "yūryō rōjin hōmu" "paid home for older people" >}}), set up under the Elderly Welfare Act.[^1]
- **Serviced housing for older people** ({{< ja "サービス付き高齢者向け住宅" "sābisu-tsuki kōreisha-muke jūtaku" "serviced housing for older people" >}}, short form {{< ja "サ高住" "sakōjū" "serviced housing" >}}), registered under the Act on Securing Stable Housing for the Elderly.[^2]

The two overlap. A summary of an MHLW study group's report says about 96 percent of serviced housing also counts as a paid home.[^6] Neither form is an insurance care facility in itself. Insurance pays for care inside the building only through a specified-facility designation, or through outside home services that each resident uses.[^9][^3] This guide covers the legal basis, the counts, who pays for what, the policy concerns behind the 2026 law, operators on public data, and what this means for software. For how the wider set of care settings fits together, read [Who provides care in Japan]({{< relref "posts/02-providers-and-facilities" >}}).

## The types at a glance

| Type | Legal basis | Who registers or supervises it | Care inside the building |
|---|---|---|---|
| Care-included paid home ({{< ja "介護付有料老人ホーム" "kaigo-tsuki yūryō rōjin hōmu" "care-included paid home" >}}) | Elderly Welfare Act art. 29 (notification), plus a specified-facility designation under the Long-Term Care Insurance Act[^1][^9] | Notified to the prefectural governor; the designation comes from the prefecture or certain cities[^1][^9] | The home provides the specified-facility service ({{< ja "特定施設入居者生活介護" "tokutei shisetsu nyūkyosha seikatsu kaigo" "daily-life care for residents of specified facilities" >}}) itself, or through contracted providers in the "external service" form[^3] |
| Residential paid home ({{< ja "住宅型有料老人ホーム" "jūtaku-gata yūryō rōjin hōmu" "residential paid home" >}}) | Elderly Welfare Act art. 29[^1] | Notified to the prefectural governor[^1] | None from the home as an insurance service. The resident chooses local home-visit and other care services[^3] |
| Healthy-living paid home ({{< ja "健康型有料老人ホーム" "kenkō-gata yūryō rōjin hōmu" "healthy-living paid home" >}}) | Elderly Welfare Act art. 29[^1] | Notified to the prefectural governor[^1] | None. The resident must end the contract and leave when care becomes necessary[^3] |
| Serviced housing ({{< ja "サ高住" "sakōjū" "serviced housing" >}}) | Act on Securing Stable Housing for the Elderly art. 5[^2] | Registered with the prefectural governor for five years at a time; MLIT and MHLW run the scheme jointly[^2][^5] | None as such. Safety checks and life-consultation services are the core services; care comes from outside providers unless the building has a specified-facility designation[^2][^9] |

**How the three paid-home types are defined.** The Elderly Welfare Act defines a paid home as a facility that houses older people and provides at least one of: bathing, toileting or meal care; meals; housework such as laundry and cleaning; or health management. A person who plans to set one up must notify the prefectural governor in advance.[^1] The three labels "care-included", "residential" and "healthy-living" are not in the Act. They come from MHLW's standard guidance on setting up and running paid homes ({{< ja "有料老人ホームの設置運営標準指導指針" "yūryō rōjin hōmu no setchi un'ei hyōjun shidō shishin" "standard guidance on setting up and running paid homes" >}}), first issued in 2002 and last revised on 1 April 2021.[^4] The guidance bars a home without a specified-facility designation from calling itself "care-included" or "with care" in advertising.[^3] It also sets a standard of private rooms with at least 13 m² per resident.[^3]

**Where serviced housing fits.** Under the housing Act, a business that houses older people in rental housing or a paid home and provides a status-check service ({{< ja "状況把握サービス" "jōkyō haaku sābisu" "status-check service" >}}) and a life-consultation service ({{< ja "生活相談サービス" "seikatsu sōdan sābisu" "life-consultation service" >}}) can register each building with the prefectural governor. Registration lapses unless renewed every five years.[^2] A registered paid home does not also have to file the Elderly Welfare Act notification.[^2] The scheme was created in 2011, when three earlier types of rental housing for older people were merged into one scheme run jointly by MLIT and MHLW.[^5]

**Specified facilities.** Specified-facility care became an insurance service in 2000. Since 2006 there have been two forms. In the "general" form ({{< ja "一般型" "ippan-gata" "general type" >}}), the home's own care and nursing staff, at least one per three residents needing care, provide care paid as a bundled fee. In the "external service" form ({{< ja "外部サービス利用型" "gaibu sābisu riyō-gata" "external-service type" >}}), home staff at one per ten residents handle consultation, safety checks and care plans for a fixed fee, while contracted providers deliver care on a fee-for-service basis. Also since 2006, specified facilities have been subject to supply caps ({{< ja "総量規制" "sōryō kisei" "total-volume control" >}}) that let local governments refuse new designations.[^5]

## How many homes and residents

The counts below come from different surveys and dates, so they do not add up exactly.

| Measure | Figure | As of |
|---|---|---|
| Paid homes not registered as serviced housing | 18,460 homes; capacity 712,728; residents 591,173[^7] | 1 Oct 2024 |
| Paid homes that are registered serviced housing | 6,425 homes[^7] | 1 Oct 2024 |
| Paid homes, MHLW elderly bureau count | 17,246 homes; 673,689 residents (9,581 homes and 387,666 residents in 2014)[^5] | 30 Jun 2024 |
| All paid homes, including those registered as serviced housing | About 25,000 buildings; capacity about 950,000[^9] | 30 Jun 2024 |
| of which residential type | About 20,000 buildings (about 7,000 of them serviced housing); capacity about 630,000[^9] | 30 Jun 2024 |
| of which care-included type (specified facilities) | About 5,000 buildings (about 800 of them serviced housing); capacity about 320,000[^9] | 30 Jun 2024 |
| Specified facilities, general form | 4,555 facilities; 280,669 people[^5] | 30 Jun 2024 |
| Specified facilities, external-service form | 5 facilities; 141 people[^5] | 30 Jun 2024 |
| Registered serviced housing | 8,312 buildings; 290,950 units[^8] | 31 Aug 2026 |
| People using specified-facility care (excluding short stays) | 346,700 during fiscal 2025, up from 338,800 in fiscal 2024[^14] | FY2025 |
| People using the preventive version for lighter needs | 49,900 during fiscal 2025[^14] | FY2025 |

The 2024 social welfare facility survey tallies capacity and residents only for homes covered by its detailed questionnaire. For paid homes not registered as serviced housing, that questionnaire goes to a stratified random sample. The 6,425 homes registered as serviced housing were counted but did not get the detailed questionnaire.[^7] The study group report also records that, over about ten years, the share of residential paid-home residents at care level 3 or above rose from 48.7 percent to 55.9 percent.[^5]

## Who pays what

The resident always pays the housing side privately: rent or an entry fee, management fees, meals and daily-life costs. MHLW's care-service information system states that entry costs and daily-life costs such as nappies are paid separately from the insurance-covered specified-facility service.[^12] What differs is how care is paid for.

| | Care-included paid home | Residential paid home and serviced housing (no designation) | Healthy-living paid home |
|---|---|---|---|
| Housing, meals, management fees | Paid privately, separately from the insured service[^12] | Paid privately under the entry contract, outside insurance[^9] | Paid to the home under the entry contract[^3] |
| Care | Specified-facility fee per day by care level. The resident's share at 10 percent is ¥542 a day at care level 1 and ¥813 at care level 5[^12] | Home-visit, day and other home services from outside providers, billed per use within the monthly benefit cap for the person's care level; use above the cap is paid in full privately[^13] | No care; the resident must leave[^3] |
| Resident's share of insured care | 10 percent, or 20 or 30 percent for people above set incomes[^13] | 10, 20 or 30 percent, as left[^13] | — |
| Care plan | Written by a care manager placed by the home[^5] | Written by a care manager the resident contracts separately; residents pay nothing for care-plan writing[^5][^18] | — |
| Total insured spending, fiscal 2025 | ¥717.2 billion for specified-facility care excluding short stays, plus ¥36.9 billion for the preventive version (cost figures include residents' shares)[^15] | Spread across the home-service lines; not reported separately for these residents | — |

The monthly benefit caps for home services run from ¥50,320 at support level 1 to ¥362,170 at care level 5, as listed by MHLW's information system.[^13] The study group report notes that the unit totals residents can use in a specified facility are lower than the ordinary home-service cap.[^5]

Prices vary widely. The study group report says the most common monthly cost band was "¥300,000 or more" in specified facilities, "under ¥100,000" in residential paid homes, and "¥120,000 to ¥140,000" in serviced housing without a designation. It says this pattern held for ten years.[^5]

## The policy concern: "enclosure"

"Enclosure" ({{< ja "囲い込み" "kakoikomi" "enclosure (steering residents into affiliated services)" >}}) is the term MHLW uses for excessive care services provided to residents of older people's housing.[^5] The study group report describes the business model behind it. An operator sets rent and fees low to fill the building, then recovers the shortfall by providing more insured home care than residents need. Care in residential homes and serviced housing is fee-for-service with a somewhat higher ceiling than in specified facilities, and affiliated care offices are often attached to or next door to the home.[^5]

The report cites these findings:

- Where a care office was attached to or next to a home, about 80 to 90 percent were run by a related corporation (fiscal 2024 study).[^5]
- In a fiscal 2021 survey, about 25 percent of care managers said a serviced-housing or similar operator had asked them to fill care plans with the same corporation's services up to the benefit cap. There were reports of care managers pushed to resign after refusing.[^5]
- In a 2023 MHLW survey of supervising local governments, at least 42 consultations or reports nationally involved suspected restriction or steering of residents to particular medical or care providers.[^5]
- Reported practices included making the use of affiliated services a condition of entry, barring outside care workers or family doctors from the building, and giving rent discounts only to residents who use affiliated services.[^5]

The standard guidance has said since fiscal 2015 that homes must not limit or steer residents to the operator's own or related providers.[^5] Since fiscal 2021, municipalities can run care-plan checks on homes flagged by prefectures, for example for doubtful rent levels. The report says take-up has been slow: 161 local governments in fiscal 2021 and 246 in fiscal 2022.[^5]

## The 2025 study group and the 2026 law

**The study group.** MHLW's study group on desirable service provision in paid homes ({{< ja "有料老人ホームにおける望ましいサービス提供のあり方に関する検討会" "yūryō rōjin hōmu ni okeru nozomashii sābisu teikyō no arikata ni kansuru kentōkai" "study group on desirable service provision in paid homes" >}}) met seven times from 14 April 2025 and issued its report on 5 November 2025.[^6] It proposed:

- prior registration for homes that take residents with moderate to severe care needs, medical needs or dementia;
- renewal of that registration;
- independence of care managers from the home;
- separate, published accounts for the housing business and an affiliated care business;
- a certification scheme for agencies that refer residents to homes.[^6]

**The law.** The Act Partially Amending the Social Welfare Act and Other Acts (Act No. 51 of 2026) was promulgated on 25 June 2026.[^10] For paid homes it does the following:

- **Registration.** A home that houses people in care states set by cabinet order and provides care must be registered with the prefectural governor before opening. Registration lasts five years and must be renewed. Prefectures set equipment and operating standards by ordinance, following or referring to MHLW standards. The register is open to the public.[^10]
- **Homes that stay on notification.** Other homes still notify the prefecture. They must state what care levels they accept, attach a business plan and the entry contract, give written explanations before contracts, and avoid misleading advertising.[^10]
- **A new care-plan service.** Registered-facility care support ({{< ja "登録施設介護支援" "tōroku shisetsu kaigo shien" "registered-facility care support" >}}) and its preventive version give residents of registered homes care planning from a separate provider. Insurance pays 90 percent of the standard cost.[^10] MHLW's bill summary describes this as a 10 percent user share, in line with care-included homes.[^9]
- **Specified facilities.** The Long-Term Care Insurance Act's definition of a specified facility will refer to registered paid homes.[^10]
- **Planning.** Municipalities must take account of the capacity of notified paid homes, registered paid homes and serviced housing when planning care services.[^10]
- **Referral agencies.** The paid-home association gains a role in research on the appropriate use of referral agencies.[^10]

**When the changes start.** Most of the Act applies from 1 April 2027. The registration system and the specified-facility definition change start on a date set by cabinet order within two years of promulgation. The registered-facility care support service starts within three years.[^10] MHLW's bill summary says it expects most existing paid homes to fall under registration, apart from homes that require residents to move out once their care needs become moderate or severe.[^9]

**The draft standards (September 2026).** At its 9th meeting on 18 September 2026, the study group discussed MHLW's draft registration standards. MHLW marked them as subject to change.[^11]

- **Contract terms.** The following would count as unfair contract terms:
  - making use of attached, adjacent, related or partner care offices, care-planning offices, medical institutions, home-nursing offices or pharmacies a condition of the contract;
  - forcing a change of family doctor or care manager;
  - rent discounts tied to using those services.[^11]
- **Staffing.** At least one manager and one life counsellor. Staff on site in principle except at night, with on-call cover at night.[^11]
- **Rooms.** Private rooms of at least 13 m² per resident, with a temporary exception for existing buildings. Registered serviced housing would follow the housing Act's own standards.[^11]
- **Running the home.** The home would have to:
  - share resident information with the registered-facility care support provider;
  - keep entry contracts and care-management contracts independent;
  - keep the home's accounts separate from those of related care businesses;
  - avoid referral-agency fees set according to a resident's care level or medical needs.[^11]
- **Which homes must register.** Besides homes for people with moderate to severe care needs, MHLW proposed including homes for people needing care who have dementia at independence level III or above, or who have heavy medical needs or receive certain medical procedures.[^11]

MHLW's timetable in the same document shows a 10th meeting around October 2026, a report to the Long-Term Care Insurance Subcommittee in the autumn, and the cabinet and ministerial orders planned for promulgation within 2026.[^11]

## Operators on public data

No MHLW or MLIT source opened for this guide ranks paid-home operators. MHLW's care-service information system publishes open data on insurance-designated offices, by service type, twice a year.[^16] The files cover specified facilities in paid homes, care houses and serviced housing, including the external-service and community-based forms. They have no file for residential paid homes or for serviced housing without a designation.[^16]

Counting unique office numbers in the six specified-facility files for paid homes and serviced housing (data as at end-June 2026) gives 5,370 offices run by 2,177 corporations. Of these corporations, 1,637 run one such office and 2,006 run three or fewer. The ten corporations with the most offices are:[^16]

| Corporation | Specified-facility offices |
|---|---|
| {{< ja "SOMPOケア株式会社" "Sompo Kea" "SOMPO Care Inc." >}} | 287 |
| {{< ja "株式会社ベネッセスタイルケア" "Benesse Sutairu Kea" "Benesse Style Care Co., Ltd." >}} | 269 |
| {{< ja "株式会社川島コーポレーション" "Kawashima Kōporēshon" "Kawashima Corporation" >}} | 119 |
| {{< ja "株式会社木下の介護" "Kinoshita no Kaigo" "Kinoshita Kaigo Co., Ltd." >}} | 117 |
| {{< ja "株式会社チャーム・ケア・コーポレーション" "Chāmu Kea Kōporēshon" "Charm Care Corporation" >}} | 94 |
| {{< ja "株式会社ニチイケアパレス" "Nichii Kea Paresu" "Nichii Care Palace Co., Ltd." >}} | 75 |
| {{< ja "株式会社ニチイ学館" "Nichii Gakkan" "Nichii Gakkan Co., Ltd." >}} | 68 |
| {{< ja "株式会社さわやか倶楽部" "Sawayaka Kurabu" "Sawayaka Club Co., Ltd." >}} | 67 |
| {{< ja "株式会社ケア21" "Kea Nijūichi" "Care21 Co., Ltd." >}} | 57 |
| {{< ja "ALSOK介護株式会社" "Arusokku Kaigo" "ALSOK Kaigo Co., Ltd." >}} | 49 |

The count is by legal entity. A group that runs homes through several subsidiaries appears as several rows. Charm Care Corporation, for example, reports 115 homes and 7,746 rooms for its group at the end of its fiscal year to June 2026, including subsidiaries' homes.[^17] The open data also has a capacity field, but it is blank or zero for many offices, so this guide does not total it.[^16]

## What this means for care software

Facts first. In an insurance care facility, such as a special nursing home, MHLW's explanation lists the insured facility-service fee together with living costs, meals and daily-life costs for the same stay, with means-tested relief on living and meal costs.[^13] A care-included paid home bills one daily specified-facility fee and collects rent, fees and meals privately.[^12] A residential paid home or serviced housing building has no insurance billing of its own. Its residents' care is billed by separate home-service offices against each resident's monthly cap.[^13] The 2026 law adds a new care-plan service with its own benefit, a duty for registered homes to share information with that provider, and separate accounts for the home and related care businesses.[^10][^11]

{{< analysis title="Tako-San's take" >}}
Tako-San's view: private housing operators need software that public facilities mostly do not. First, private billing next to insurance billing: rent, management fees, meals, entry-fee schemes and extras, invoiced monthly alongside the insurance claim. Second, for operators that run a residential home plus affiliated home-visit and day offices, one resident record has to feed several insurance claims, each against the resident's monthly cap. Third, from the registration rules, an audit trail: the separate accounts the draft standards ask for, the information sent to the independent care-planning provider, and evidence that residents chose their services freely. Fourth, a new claim type and care-plan form when registered-facility care support starts, within three years of June 2026. Groups with hundreds of sites will also want group-level reporting across subsidiaries. For a vendor, the large chains are a small number of buyers with many sites each. The roughly 2,000 corporations with three or fewer specified facilities may be easier to reach through partners. Treat the September 2026 standards as drafts until the orders are published.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: first published

---

## References

[^1]: Japan. "Elderly Welfare Act (老人福祉法, Act No. 133 of 1963)," article 29. e-Gov Law Search, current text. https://laws.e-gov.go.jp/law/338AC0000000133

[^2]: Japan. "Act on Securing Stable Housing for the Elderly (高齢者の居住の安定確保に関する法律, Act No. 26 of 2001)," articles 5 and 23. e-Gov Law Search, current text. https://laws.e-gov.go.jp/law/413AC0000000026

[^3]: Ministry of Health, Labour and Welfare. "Standard Guidance on Setting Up and Running Paid Homes for Older People (有料老人ホーム設置運営標準指導指針)," including the table of home types and display items. PDF. https://www.mhlw.go.jp/content/12300000/001481758.pdf

[^4]: Ministry of Health, Labour and Welfare. "On the Standard Guidance on Setting Up and Running Paid Homes (有料老人ホームの設置運営標準指導指針について)," notice 老発第0718003号 of 18 July 2002, last revised 1 April 2021 (老発0401第14号). https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000083170.html

[^5]: Ministry of Health, Labour and Welfare, Study Group on Desirable Service Provision in Paid Homes. "Report (有料老人ホームにおける望ましいサービス提供のあり方に関する検討会 とりまとめ)," 5 November 2025. https://www.mhlw.go.jp/content/12300000/001591085.pdf

[^6]: Ministry of Health, Labour and Welfare, Study Group on Desirable Service Provision in Paid Homes. "Report: Summary (とりまとめ（概要）)," 5 November 2025, as filed with the 128th Long-Term Care Insurance Subcommittee, 10 November 2025. https://www.mhlw.go.jp/content/12300000/001591289.pdf

[^7]: Ministry of Health, Labour and Welfare. "Survey of Social Welfare Facilities, 2024: Overview (令和６(2024)年 社会福祉施設等調査の概況)," figures as at 1 October 2024. https://www.mhlw.go.jp/toukei/saikin/hw/fukushi/24/dl/gaikyo.pdf

[^8]: Serviced Housing for Older People Information System (MLIT). "Registration Status of Serviced Housing for Older People, End of August 2026 (サービス付き高齢者向け住宅の登録状況（R8.8末時点）)." https://www.satsuki-jutaku.mlit.go.jp/doc/system_registration_01.pdf

[^9]: Ministry of Health, Labour and Welfare. "Outline of the Bill Partially Amending the Social Welfare Act and Other Acts (社会福祉法等の一部を改正する法律案の概要)," including "Review of paid homes (有料老人ホームに係る見直しについて)" and its reference sheet (MHLW figures as at 30 June 2024). Republished on MHLW's guardianship portal, May 2026. https://guardianship.mhlw.go.jp/common/uploads/2026/05/notice20260508.pdf

[^10]: Ministry of Health, Labour and Welfare (Social Welfare and War Victims' Relief Bureau; Health and Welfare Bureau for the Elderly; and others). "Promulgation of the Act Partially Amending the Social Welfare Act and Other Acts (社会福祉法等の一部を改正する法律の公布について（通知）)," 25 June 2026, Act No. 51 of 2026. https://www.mhlw.go.jp/content/001715727.pdf

[^11]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Preparing for the Registration System (登録制の施行に向けた対応について)," Document 2, 9th meeting of the Study Group on Desirable Service Provision in Paid Homes, 18 September 2026. https://www.mhlw.go.jp/content/12300000/001751263.pdf

[^12]: Ministry of Health, Labour and Welfare, Care Service Information Publication System. "What services are there? Specified-facility daily-life care (どんなサービスがあるの？ - 特定施設入居者生活介護)." https://www.kaigokensaku.mhlw.go.jp/publish/group17.html

[^13]: Ministry of Health, Labour and Welfare, Care Service Information Publication System. "Explanation of Long-Term Care Insurance: Costs (介護保険の解説 - サービス利用者の費用負担等)." https://www.kaigokensaku.mhlw.go.jp/commentary/fee.html

[^14]: Ministry of Health, Labour and Welfare. "Fiscal 2025 Long-Term Care Benefit Expenditures Survey: Summary of Results, 1. Recipients (令和7年度 介護給付費等実態統計の概況 結果の概要 １ 受給者の状況)," table 2-1 and table 2-2. https://www.mhlw.go.jp/toukei/saikin/hw/kaigo/kyufu/25/dl/02.pdf

[^15]: Ministry of Health, Labour and Welfare. "Fiscal 2025 Long-Term Care Benefit Expenditures Survey: Summary of Results, 2. Costs (令和7年度 介護給付費等実態統計の概況 ２ 費用額の状況)," tables 6-1 and 6-2. https://www.mhlw.go.jp/toukei/saikin/hw/kaigo/kyufu/25/dl/03.pdf

[^16]: Ministry of Health, Labour and Welfare. "Care Service Information Publication System Open Data (介護サービス情報公表システムのオープンデータ)," office lists as at end-June 2026 for service codes 331, 334, 335, 337, 361 and 364 (specified facilities in paid homes and serviced housing, general, external-service and community-based forms). Tako-San count of unique office numbers by corporate number. https://www.mhlw.go.jp/stf/kaigo-kouhyou_opendata.html

[^17]: Charm Care Corporation. "Consolidated Financial Results for the Fiscal Year Ended June 2026 (2026年６月期 決算短信〔日本基準〕（連結）)," 6 August 2026. https://www2.jpx.co.jp/disc/60620/140120260806512019.pdf

[^18]: Ministry of Health, Labour and Welfare, Care Service Information Publication System. "What services are there? Home care support (どんなサービスがあるの？ - 居宅介護支援)." https://www.kaigokensaku.mhlw.go.jp/publish/group1.html
