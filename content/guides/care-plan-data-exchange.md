---
title: "Care Plan Data Exchange: Japan's care-plan pipe and the 2027 move to the Kaigo WEB Service"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T09:00:00+07:00
tags: ["japan", "long-term-care", "care-plan", "software", "guide"]
summary: "How care plans move between care managers and service providers as data, the fees and add-ons tied to it, and the January 2027 move into the Kaigo WEB Service."
categories: ["Guides"]
weight: 2
---

*Last updated: 9 Oct 2026*

Every month, a care manager's office and the service providers it works with exchange care plans ({{< ja "ケアプラン" "kea puran" "care plan" >}}) and provision tables ({{< ja "サービス提供票" "sābisu teikyō-hyō" "service provision table" >}}). The Care Plan Data Exchange ({{< ja "ケアプランデータ連携システム" "kea puran dēta renkei shisutemu" "care plan data exchange system" >}}) lets them send these documents as data instead of on paper or by fax. The National Health Insurance Central Association ({{< ja "国保中央会" "kokuho chūō-kai" "Kokuho Chūōkai" >}}) runs it.[^1] This guide explains how it works, what money depends on it, and what changes when it moves into the Kaigo WEB Service in 2027.

## How it works

Care software exports the care plan and provision table as CSV files that follow MHLW's care-plan data standard ({{< ja "ケアプランデータ連携標準仕様" "kea puran dēta renkei hyōjun shiyō" "care plan data exchange standard specification" >}}). The office sends those files through the exchange, and the receiving office imports them into its own software.[^1][^2]

MHLW's overview gives two estimates of the benefit:[^1]

- Sharing provision tables takes about **one third** of the time it used to.
- An example office could save about **¥816,000 a year** in labour, printing, postage and travel costs.

These are the ministry's own estimates, not measured results.

**Fee.** The licence fee is **¥21,000 a year** per office.[^1] Under a "free pass" campaign that has since been extended, the fee is waived for all of fiscal 2026.[^3][^4]

## The move into the Kaigo WEB Service (January 2027, planned)

MHLW announced on 29 July 2026 that the exchange will be merged into the care information platform ({{< ja "介護情報基盤" "kaigo jōhō kiban" "care information platform" >}}). It will then become a function of the Kaigo WEB Service ({{< ja "介護保険資格確認等WEBサービス" "kaigo hoken shikaku kakunin tō webu sābisu" "care-insurance eligibility check web service" >}}), with the move planned for **January 2027**.[^3] The notice and the help-desk page set out the details:[^3][^5]

- **Web instead of client software.** After the move, offices use the web service in place of the current client software.
- **Registration needed.** Offices must register for the Kaigo WEB Service whether or not their municipality has started using the platform.
- **Preparation window.** Offices have from July to December 2026 to prepare. The help desk warns that offices which have not completed the move will lose access to the exchange function.
- **Old system retired.** The current system will shut down some time after the move.
- **No fee.** The Kaigo WEB Service charges offices no direct fee, so the ¥21,000 annual licence ends.

**What this means for vendors.** After the merger, only care software that supports **version 4.1** (current) or **version 5.0** (new) of the standard can use the exchange function.[^6][^7] On 31 August 2026, MHLW announced the final API standard for linking care software to the Kaigo WEB Service, version 1.0. Kokuho Chūōkai wrote it, and it is published on WAM NET.[^7] Three further points from the ministry's notices:

- The care-plan data standard is now an annex to the API standard.
- Release of the care-plan standard into that environment is planned for **around late March 2027**.[^7]
- A vendor test for the API will be announced separately. The API link function itself will go live only after the merger.[^6][^7]

What the API requires of care software is covered in our separate guide, [Kaigo WEB Service and its API](../kaigo-web-service-api/). It explains standard 5.0, certificates and login, the enhanced and API vendor tests, and the open questions.

## Vendor tests: what "compatible" means

Kokuho Chūōkai publishes the names of software that has passed its vendor test. For version 4 of the standard there are seven data-exchange patterns:[^8]

| Patterns | Office type | Documents tested |
|---|---|---|
| D1–D3 | Home-care support ({{< ja "居宅介護支援" "kyotaku kaigo shien" "home-care support (care management)" >}}) | D1: care plan<br>D2: planned use table<br>D3: actual use table |
| D4–D7 | Preventive care support ({{< ja "介護予防支援" "kaigo yobō shien" "preventive care support" >}}) | D4: user basic information<br>D5: preventive plan<br>D6: planned use table<br>D7: actual use table |

The list says only that a vendor completed the test patterns in Kokuho Chūōkai's demo environment. Kokuho Chūōkai states that it does not guarantee the software or its data.[^8] Kokuho Chūōkai's vendor page shows two further developments:[^9]

- Kokuho Chūōkai is now accepting applications for an "enhanced vendor test" ({{< ja "強化ベンダ試験" "kyōka benda shiken" "enhanced vendor test" >}}) against standard 4.1. Results will be published as tests are completed.
- On 1 September 2026, MHLW asked vendors to help reduce import errors in the exchange.

All five products profiled in our [Competitors](../../competitors/) section completed all seven V4 patterns:[^8]

- Kaipoke
- Honobono NEXT
- the Kanamic cloud service
- Wiseman SP System
- Rehab Cloud

## The money tied to the exchange

### 1. The higher care-management fee tier

Since the fiscal 2024 revision, care-management fee type II ({{< ja "居宅介護支援費（Ⅱ）" "kyotaku kaigo shien-hi (II)" "care-management fee type II" >}}) requires the office to use the exchange.[^10] MHLW then opened an equivalence route. A review panel examines systems that claim the same functions and security, and an approved system counts as using the exchange.[^10][^11] As of 9 October 2026, MHLW's page lists four approved systems:[^10]

- Kanamic Cloud Service (Kanamic Network Co., Ltd.)
- Care Plan Data Linkage Service (Fujitsu Shikoku Infotech Ltd.)
- "Dendenmushi" ({{< ja "でん伝虫" "dendenmushi" "Dendenmushi" >}}) data linkage service (Conduct Co., Ltd.)
- Mame-net Care Plan Exchange Service (Shimane Medical Information Network Association, a non-profit organisation)

The functional requirements for approval include two commitments:[^12]

- exchanging CSV files that follow the MHLW standard
- a pledge to help develop, and later connect to, the API for the web-based exchange function on the care information platform

### 2. The fiscal 2026 wage add-on tier

The fiscal 2026 changes to the care-worker pay add-on ({{< ja "介護職員等処遇改善加算" "kaigo shokuin-tō shogū kaizen kasan" "care worker treatment improvement add-on" >}}) created new upper tiers, Ⅰロ and Ⅱロ. To reach them, an office must meet a fiscal 2026 special requirement, and there are three ways to do so:[^13]

| Who | Route to the upper tier |
|---|---|
| Visit and day services | Join the exchange and report results |
| Facility services | Hold the productivity add-on ({{< ja "生産性向上推進体制加算" "seisansei kōjō suishin taisei kasan" "productivity improvement add-on" >}}) type I or II and report results |
| Any office | Belong to a social-welfare collaboration corporation ({{< ja "社会福祉連携推進法人" "shakai fukushi renkei suishin hōjin" "social-welfare collaboration promotion corporation" >}}) |

At the time of application, a pledge is enough for the first two routes.[^13]

Home-visit care is an example of what the upper tier is worth:[^13]

- tier Ⅰイ: **27.0%**; tier Ⅰロ: **28.7%**
- tier Ⅱイ: **24.9%**; tier Ⅱロ: **26.6%**

### 3. Software subsidies

Under the fiscal 2026 care-technology adoption subsidy, home-care software qualifies only if both Kokuho Chūōkai's vendor test results and MHLW's care-software function survey show two things: CSV input and output under the care-plan standard, and a support system for using the exchange.[^14] MHLW publishes the survey results on its care-technology page. The current edition is dated 24 August 2026.[^15]

The subsidy pays **four fifths** of eligible costs, up to a base amount.[^14] For care software priced by headcount, the base amount depends on staff numbers:[^14]

| Staff | Base amount | With pre/post-adoption support |
|---|---|---|
| 1–10 | ¥1.0 million | ¥1.15 million |
| 11–20 | ¥1.5 million | ¥1.65 million |
| 21–30 | ¥2.0 million | ¥2.15 million |
| 31 or more | ¥2.5 million | ¥2.65 million |

Other contract types have a flat ¥2.5 million base amount, or ¥2.65 million with support.[^14] The base amount rises by **¥50,000** for two kinds of office that exchange data with five or more offices through the exchange during fiscal 2026:[^14]

- home-care service offices
- care-management offices

{{< analysis title="Tako-San's take" >}}
Tako-San's view: the exchange has turned from an optional fax replacement into a requirement that several payments now depend on: a higher fee tier for care managers, a higher pay add-on for visit and day services, and access to subsidies. The January 2027 move removes the fee and the client software, so the main remaining barrier to using it is the care software itself. For a new vendor, passing the V4 vendor test (and the enhanced test once results are published) looks like a basic requirement for selling to home-care offices, not a selling point. The API v1.0 is the more interesting opening. Software that reads eligibility and care information directly from the platform would compete on an equal footing with the incumbents, because they have to build the same API connection too.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: added a link to the new guide on the Kaigo WEB Service API
- 9 Oct 2026: first published

---

## References

[^1]: Ministry of Health, Labour and Welfare. "Overview of the Care Plan Data Exchange System (Ver.2) (「ケアプランデータ連携システム」の概要等の周知について（Ver.2）)." Care Insurance Latest Information Vol.1109, 26 October 2022. https://www.mhlw.go.jp/content/001005677.pdf

[^2]: Ministry of Health, Labour and Welfare. "Promoting the Use of Care Technology (介護テクノロジーの利用促進)." Section on the care plan data exchange standard. Accessed 9 October 2026. https://www.mhlw.go.jp/stf/kaigo-ict.html

[^3]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Migration of the Care Plan Data Exchange System to the Kaigo WEB Service (ケアプランデータ連携システムの介護保険資格確認等WEBサービスへの移行について)." Care Insurance Latest Information Vol.1529, 29 July 2026. https://www.mhlw.go.jp/content/001730882.pdf

[^4]: Care Plan Data Exchange Help Desk. "Free Pass Campaign (フリーパスキャンペーン)." Accessed 9 October 2026. https://www.careplan-renkei-support.jp/freepass/

[^5]: Care Plan Data Exchange Help Desk. "Moving Special Page (引っ越し特設ページ)." Accessed 9 October 2026. https://www.careplan-renkei-support.jp/migration/index.html

[^6]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Publication of the API Specification (Provisional) for Linking with the Kaigo WEB Service, and Future Handling of the Care Plan Data Exchange Standard (「介護保険資格確認等 WEB サービスとの連携における API 仕様書（暫定版）」の公開及び「ケアプランデータ連携標準仕様」の今後の取扱いについて)." Administrative notice, 27 May 2026 (Vol.1505). https://www.mhlw.go.jp/content/001705072.pdf

[^7]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Publication of the API Standard Specification (Version 1.0) for Linking with the Kaigo WEB Service (「介護保険資格確認等 WEB サービスとの連携における API 標準仕様書（第 1.0 版）」の公開について)." Administrative notice, 31 August 2026 (Vol.1539). https://www.mhlw.go.jp/content/001744369.pdf

[^8]: National Health Insurance Central Association. "Care Plan Data Exchange System Vendor Test (V4) Completion Results (「ケアプランデータ連携システム」ベンダ試験（Ｖ４対応版）の完了結果について)." List file 261006_5113, accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/lib/261006_5113_cp-vender_4.pdf

[^9]: National Health Insurance Central Association. "Care Plan Data Exchange System (ケアプランデータ連携システム)." Vendor test page. Accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/

[^10]: Ministry of Health, Labour and Welfare. "Public Call for Systems Relating to the Care-Management Fee (居宅介護支援費に係るシステムの公募について)." Including the review results list. Accessed 9 October 2026. https://www.mhlw.go.jp/stf/newpage_44833.html

[^11]: Ministry of Health, Labour and Welfare. "FY2024 Fee Revision Q&A (Vol.13) (令和６年度介護報酬改定に関するＱ＆Ａ（Vol.13）)." Care Insurance Latest Information Vol.1372, 7 April 2025. https://www.mhlw.go.jp/content/001473305.pdf

[^12]: Ministry of Health, Labour and Welfare. "Requirements for Eligible Systems (対象となるシステムの要件)." Attachment to the public call for care-management fee type II systems. https://www.mhlw.go.jp/content/12300000/001579117.pdf

[^13]: Ministry of Health, Labour and Welfare. "Expansion of the Care Worker Treatment Improvement Add-on (介護職員等処遇改善加算の拡充)." FY2026 fee revision explainer. https://www.mhlw.go.jp/shogu-kaizen/download/5_R8_houshuu_kaitei.pdf

[^14]: Ministry of Health, Labour and Welfare, Director-General of the Health and Welfare Bureau for the Elderly. "Implementation of the FY2026 (carried over from FY2025) Care Technology Adoption, Collaboration and Management Improvement Support Programme (「令和８年度（令和７年度からの繰越分）介護テクノロジー導入・協働化・経営改善等支援事業」の実施について)." Notice 老発0407第3号, 7 April 2026, as republished by Iwate Prefecture. https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/099/125/kuniyoukou_zenbun.pdf

[^15]: Ministry of Health, Labour and Welfare. "Promoting the Use of Care Technology (介護テクノロジーの利用促進)." Care record software function survey results, 24 August 2026 edition (介護記録ソフト機能調査結果（令和８年８月24日版）). Accessed 9 October 2026. https://www.mhlw.go.jp/stf/kaigo-ict.html
