---
title: "Kaigo WEB Service and its API: what vendors must build for 2027"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T00:00:00+07:00
tags: ["japan", "long-term-care", "care-information-platform", "api", "care-plan", "software", "guide"]
summary: "The Kaigo WEB Service is the website through which care offices reach Japan's care information platform, and from January 2027 it also carries care plans. This guide covers who runs it, the dated timeline, what API version 1.0 requires (standard 5.0, certificates, tokens, permissions), the vendor tests, costs, and the open questions."
categories: ["Guides"]
weight: 6
---

*Last updated: 9 Oct 2026*

Japan is building a national care information platform ({{< ja "介護情報基盤" "kaigo jōhō kiban" "care information platform" >}}). Care offices reach it through a website called the Kaigo WEB Service ({{< ja "介護保険資格確認等WEBサービス" "kaigo hoken shikaku kakunin tō webu sābisu" "care-insurance eligibility check web service" >}}). In January 2027 the Care Plan Data Exchange is due to become one of the service's functions. On 31 August 2026, MHLW announced version 1.0 of an API through which care software can talk to the service directly.[^1][^2]

This guide is for vendors. It covers four things:

- what the service is;
- the dates;
- what the API requires;
- what is still unknown.

For the office-side details of the January 2027 move, see our [Care Plan Data Exchange guide](../care-plan-data-exchange/). That guide covers registration, the end of the ¥21,000 fee, and the money tied to the exchange. This guide does not repeat them.

## What the service is, and who runs it

**Legal basis.** A 2023 law amended the Long-Term Care Insurance Act so that a platform could be built for electronic viewing of care information. It is the Act for Partial Amendment of the Health Insurance Act, etc. to Build a Sustainable Social Security System for All Generations ({{< ja "全世代対応型の持続可能な社会保障制度を構築するための健康保険法等の一部を改正する法律" "zensedai taiō-gata no jizoku kanō na shakai hoshō seido o kōchiku suru tame no kenkō hoken-hō tō no ichibu o kaisei suru hōritsu" "Act for Partial Amendment of the Health Insurance Act, etc." >}}), Law No. 31 of 2023. Four groups can view the information:[^3]

- municipalities
- users
- care offices
- medical institutions

**Who runs it.** The National Health Insurance Central Association ({{< ja "国保中央会" "kokuho chūō-kai" "Kokuho Chūōkai" >}}) operates both the Kaigo WEB Service and the platform behind it.[^4] The data itself sits in the platform, not in the web service. The web service handles login and passes queries through to the platform.[^4] Kokuho Chūōkai also runs a portal for the platform, the "Kaigo Kiban Portal". Offices apply there for the start-up subsidy.[^3]

**What offices can see.** Staff log in through a browser and look up a user's data. The browser menus include:[^4]

- the long-term care insurance card details;
- certification information: the assessment form and the attending doctor's opinion;
- the progress of the certification panel;
- home-modification and equipment-purchase allowances;
- part of the user's LIFE data;
- care plans that have been registered for delivery to the user.

What a given login can see depends on two settings. One is the service type the office is designated for. The other is the job type set for that user account. For example, certification information is shown only to a care manager at a home-care support office.[^4]

**When data appears.** A municipality's data reaches the platform only after that municipality has finished its system standardisation and data migration. The rollout runs municipality by municipality:[^3][^5]

- **From 1 April 2026:** municipalities that have finished can start.
- **By 1 April 2028:** MHLW aims for every municipality to be using the platform.
- **Status at 10 July 2026:** 1,545 municipalities had fixed start dates. Of these, 416 were due to start in fiscal 2026 and 1,129 in fiscal 2027. Another 196 were still being arranged.[^5]
- **Checking a municipality:** each municipality's start date can be checked on the Kaigo Kiban Portal.[^5]

The care-plan exchange function does not have to wait for the municipality. It can be used even before a municipality starts using the platform.[^5]

## Timeline

| Date | Event |
|---|---|
| 19 May 2023 | Law No. 31 of 2023 promulgated, amending the Long-Term Care Insurance Act to create the platform[^3] |
| 22 Jul 2025 | MHLW sets the rollout: municipalities start from 1 April 2026 as they become ready; all by 1 April 2028[^6] |
| Oct 2025 | Kokuho Chūōkai starts issuing a new "care DX certificate" to offices that do not file claims electronically[^4] |
| 1 Apr 2026 | First municipalities can start; care insurance card details visible in the government's personal portal, Mynaportal ({{< ja "マイナポータル" "maina pōtaru" "Mynaportal" >}})[^3][^5] |
| 27 May 2026 | Provisional API specification published[^7] |
| 29 Jul 2026 | MHLW announces the move of the Care Plan Data Exchange into the Kaigo WEB Service, planned for January 2027[^8] |
| Jul–Dec 2026 | Offices' preparation window for the move[^8] |
| 31 Aug 2026 | API specification version 1.0 published on WAM NET, with care-plan standard 5.0 as an annex[^2][^9] |
| 1 Sep 2026 | MHLW asks vendors to cut import errors; announces an "enhanced vendor test" for standard 4.1[^10] |
| 30 Sep 2026 | Enhanced vendor test opens for applications[^11] |
| 1 Jan 2027 | Conformance date for municipalities' long-term care insurance systems[^5] |
| Jan 2027 | Care Plan Data Exchange merged into the Kaigo WEB Service (exact date to be announced)[^8] |
| Late Mar 2027 | Planned release of the care-plan standard in the new environment[^2] |
| From Apr 2027 | Care-plan exchange by API from care software (software changes needed)[^5] |
| Apr–Sep 2027 | Viewing of LIFE information planned (first half of fiscal 2027)[^5] |
| 1 Apr 2028 | Target date for all municipalities to be using the platform[^3] |

The two notices differ slightly on the release date of the care-plan function. The 31 August notice says late March 2027.[^2] MHLW's slide to the 18 September 2026 committee says API exchange of care plans becomes possible from April 2027.[^5]

## What API version 1.0 covers

The specification was written by Kokuho Chūōkai and published on WAM NET. It has a main document and ten annexes, dated August 2026.[^2][^9] It defines two groups of API.

**1. Care information and eligibility (read only).** The software can retrieve four kinds of record:[^4]

- the insurance card details;
- certification information;
- the progress of the certification panel;
- home-modification and equipment-purchase allowances.

These APIs only read data. They do not register or delete it.[^4] Several browser functions are **not** available through the API, including:[^4]

- registering a user who has no My Number card (by four identifying items);
- submitting the care-plan notification on the user's behalf;
- viewing LIFE data;
- viewing registered care plans;
- recording the user's consent.

**2. Care-plan exchange (read and write).** The software can list sent items, list received items, and send a care plan to one office. There is no bulk-send API: software sends to several offices by calling the send API once per destination.[^4] Two new registration functions are added:[^4][^12]

- **Delivery registration.** A finalised care plan, agreed by the user, is registered on the platform ({{< ja "交付用登録" "kōfu-yō tōroku" "registration for delivery" >}}). Offices can then see a user's past plans, and the user can see them in Mynaportal.
- **Consent registration.** A draft plan is registered so that the user can agree to it through Mynaportal ({{< ja "同意・確認用登録" "dōi kakunin-yō tōroku" "registration for consent and confirmation" >}}). The specification says such an online consent route is "being considered" for the future.

**Standards 4.1 and 5.0.** API exchange uses care-plan standard 5.0, which sends data as JSON.[^4][^12] Standard 4.1 remains usable "for a certain period", but only through the browser, by uploading and downloading CSV files. The service converts between 4.1 and 5.0 when sender and receiver differ.[^4] After the move, only software that supports 4.1 or 5.0 can use the exchange.[^2] MHLW has told vendors that software supporting only the older version 3 will not work after the move. Those vendors must upgrade to 4.1 before then.[^10] MHLW also notes that 5.0 adds mandatory items compared with 4.1.[^10]

## Technical requirements

| Area | What the specification says |
|---|---|
| Style and format | REST API; JSON requests and responses; all requests over HTTPS[^4] |
| Encryption | TLS 1.3 or higher; certificate checks must not be bypassed[^4] |
| Characters | JIS X 0213:2012 character set, Unicode (JIS X 0221:2020), UTF-8[^4] |
| Login | A login API checks the client certificate during the TLS handshake and the user ID and password (multi-factor). Repeated failures lock the account for a period.[^4] |
| Tokens | The access token lasts 60 minutes and the refresh token 8 hours. After that, the software must log in again.[^4] |
| Version handling | The care-plan interface version is part of the API URL[^4] |
| Errors | HTTP 400, 401, 403, 404, 500 and 503 for system errors. Business errors return HTTP 200 with an error in the JSON body.[^4] |
| Sample code | Minimal Java 17 samples for login, a data call and token refresh[^4] |

**Certificates and accounts.** Kokuho Chūōkai's certificate authority issues client certificates **per office**. There are two kinds:[^4]

- **Care insurance certificate.** Offices that already file claims electronically use the certificate they were issued for that, which has been issued since November 2014.
- **Care DX certificate.** Offices that do not file claims electronically use this one, issued from October 2025.

User IDs are issued per staff member by the office's own administrator in the browser. One-time passwords are sent by email or SMS at login.[^4] To look a user up with a My Number card, the office also needs three things:[^4]

- an online eligibility-check user ID and password, obtained from Kokuho Chūōkai's contact centre;
- a terminal ID from the card-reading app;
- a card reader on a PC, or a smartphone.

**Split of responsibilities.** The service provides the authentication infrastructure and keeps audit logs. The care software is responsible for two things:[^4]

- storing certificates, IDs, passwords and tokens safely;
- giving users the right permissions and removing them when staff leave.

The specification also sets security rules for the software:[^4]

- no hard-coded credentials;
- no credentials in logs;
- input sanitisation;
- no stack traces leaking to users;
- regular vulnerability scans.

## Vendor tests and test environments

Three different Kokuho Chūōkai tests are relevant. A fourth, for municipal systems, is easy to confuse with them.

| Test | Status at 9 Oct 2026 |
|---|---|
| Care Plan Data Exchange vendor test (standard V4) | Results published by pattern (D1–D7).[^13] The test plan says applications are accepted from 1 April 2025 "until MHLW issues the next version of the standard".[^14] |
| Enhanced vendor test (standard 4.1) | Applications open from 30 September 2026.[^11] |
| API vendor test | MHLW says it will be announced separately by Kokuho Chūōkai.[^2] We found no announcement on Kokuho Chūōkai's care-plan page.[^15] |
| Care DX vendor test (municipal systems) | For municipal long-term care insurance systems, not care-office software. It tests over the LGWAN government network, with applications from 1 April to 25 December 2026.[^16] |

**The enhanced test.** MHLW says the test will check compatibility between different vendors' software, and conformance to the standard, more strictly.[^10] It was introduced after many help-desk enquiries about import errors. MHLW found that many of these came from senders and receivers reading standard 4.1 differently.[^10] Under the plan:[^11]

- **Who can apply:** vendors of software for care-management offices and service offices that have already built to the V4 standard.
- **What Kokuho Chūōkai sends:** test data, an electronic certificate and an account for a demo environment.
- **What the vendor does:** imports sample CSV files, checks the results against reference forms, exports CSV files and sends them through the demo environment.
- **Expected schedule:** about one to two weeks of preparation, about four weeks of vendor work, and one to two weeks to complete.
- **Who is responsible:** Kokuho Chūōkai provides the environment and support. The vendor is responsible for the test and for publishing its results.

The test manual named in the plan refers to the "Kaigo WEB Service, care-plan standard V4.1".[^11] The plan does not mention a fee.[^11]

**API test environment.** The sample code in the API specification calls endpoints on a development host. The specification does not say how vendors get access to a test environment.[^4]

## Costs and fees

- **Offices: no usage fee.** MHLW does not charge offices any direct fee for the Kaigo WEB Service. The exchange's ¥21,000 annual licence ends with the move.[^8]
- **Offices: start-up subsidy.** Kokuho Chūōkai pays a fiscal 2026 subsidy for card readers and for technical help to set up client certificates and terminals. The help can be bundled with help connecting to the Care Plan Data Exchange.[^8] The limits include 10% consumption tax and depend on service type:[^8]

| Service type | Card readers covered | Subsidy limit |
|---|---|---|
| Visit, day and short-stay services | up to 3 | ¥64,000 |
| Residential and facility services | up to 2 | ¥55,000 |
| Other | 1 | ¥42,000 |

  Applications are taken through the Kaigo Kiban Portal from 7 May 2026 to 12 March 2027 (planned).[^8]
- **Vendors.** None of the documents we opened mentions a fee for using the API or for the enhanced vendor test.[^4][^11] They also give no estimate of vendors' development costs.

## What changes for vendors and for offices

| | Vendors | Care offices |
|---|---|---|
| Care-plan exchange | Support 4.1 (browser CSV route) or 5.0 (API route); version 3 alone stops working after the move[^10][^4] | Register on the Kaigo WEB Service by December 2026 to keep using the exchange[^8] |
| Eligibility and certification data | Optional API to read card, certification and allowance data inside the software[^4][^7] | Can view in the browser once the municipality has started[^5] |
| Security | Store per-office certificates, credentials and tokens safely; manage permissions[^4] | Install the office certificate; issue staff IDs; set up My Number card reading[^4] |
| Tests | Enhanced 4.1 test now; API test to be announced[^11][^2] | None |
| Fees | None found for the API or the enhanced test[^4][^11] | No usage fee; subsidy for readers and set-up[^8] |

## Open questions

These are points the sources we opened leave unanswered:

- **The exact merger date** in January 2027 has not yet been announced.[^8]
- **API vendor test:** its start date, method and fee are not yet published.[^2]
- **The browser CSV route for 4.1** is allowed "for a certain period", but no end date is given.[^4]
- **The existing V4 test** is open "until MHLW issues the next version". It is not stated whether issuing standard 5.0 in August 2026 closes it.[^14][^12]
- **Add-on rules after the move.** The move flyer says MHLW will give guidance later on how fee add-ons treat the move.[^8] This matters because care-management fee type II and the wage add-on depend on using the exchange.
- **Release date:** late March 2027 or April 2027, as the two notices differ.[^2][^5]
- **Cloud software and certificates.** The specification allows calls from "a client application or a web application". It puts certificate storage on the care software.[^4] It does not spell out how a cloud vendor should hold many offices' certificates.

{{< analysis title="Tako-San's take" >}}
Tako-San's view: for a vendor, the 2027 change is bigger than "the exchange moves to a website". Standard 5.0 is JSON over a REST API with certificate-based login, so the old export-a-CSV approach becomes the transitional route, not the main one. Every incumbent has to build the same login, token handling, permission mapping and version handling. That narrows the head start that years of V4 test passes gave them. Two parts of 5.0 point further ahead. Registering confirmed plans, and the planned Mynaportal consent, would make the platform the place where plans and consent records live. Software that does this well could change how care managers collect signatures. The risks are timing and detail. The API test is not yet announced, the release date differs between notices, and municipalities join one by one until 2028. A sensible order for a new product: build to 5.0 and the API from day one, keep 4.1 CSV export for partners, and design certificate storage for a multi-office cloud before writing the rest.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: first published

---

## References

[^1]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Migration of the Care Plan Data Exchange System to the Kaigo WEB Service (ケアプランデータ連携システムの介護保険資格確認等WEBサービスへの移行について)." Care Insurance Latest Information Vol.1529, 29 July 2026. https://www.mhlw.go.jp/content/001730882.pdf

[^2]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Publication of the API Standard Specification (Version 1.0) for Linking with the Kaigo WEB Service (「介護保険資格確認等 WEB サービスとの連携における API 標準仕様書（第 1.0 版）」の公開について)." Administrative notice, Care Insurance Latest Information Vol.1539, 31 August 2026. https://www.mhlw.go.jp/content/001744369.pdf

[^3]: Ministry of Health, Labour and Welfare. "About the Care Information Platform (介護情報基盤について)." Accessed 9 October 2026. https://www.mhlw.go.jp/stf/newpage_59231.html

[^4]: National Health Insurance Central Association. "API Specification for Linking with the Kaigo WEB Service (介護保険資格確認等WEBサービスとの連携におけるAPI仕様書)." Main document, August 2026, published on WAM NET. https://www.wam.go.jp/gyoseiShiryou-files/documents/2026/0828173141245/2026_0828_001.pdf

[^5]: Ministry of Health, Labour and Welfare. "About the Care Information Platform (Report) (介護情報基盤について（報告）)." Social Security Council, Long-Term Care Insurance Subcommittee (136th meeting), Material 3, 18 September 2026. https://www.mhlw.go.jp/content/12300000/001751894.pdf

[^6]: Ministry of Health, Labour and Welfare. "Future Schedule of the Care Information Platform, Support for Care Offices, and Integration of the Platform with the Care Plan Data Exchange System (介護情報基盤の今後のスケジュール、介護情報基盤活用のための介護事業所等への支援及び介護情報基盤とケアプランデータ連携システムの統合について)." Administrative notice, 22 July 2025. https://www.mhlw.go.jp/content/12306000/001589575.pdf

[^7]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Publication of the API Specification (Provisional) for Linking with the Kaigo WEB Service, and Future Handling of the Care Plan Data Exchange Standard (「介護保険資格確認等 WEB サービスとの連携における API 仕様書（暫定版）」の公開及び「ケアプランデータ連携標準仕様」の今後の取扱いについて)." Administrative notice, Care Insurance Latest Information Vol.1505, 27 May 2026. https://www.mhlw.go.jp/content/001705072.pdf

[^8]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Migration of the Care Plan Data Exchange System to the Kaigo WEB Service (ケアプランデータ連携システムの介護保険資格確認等WEBサービスへの移行について)." Vol.1529, 29 July 2026, including Annex 1 (move flyer) and Annex 2 (FY2026 support for care offices, notice of 28 April 2026). https://www.mhlw.go.jp/content/001730882.pdf

[^9]: WAM NET (Welfare and Medical Service Agency). "API Specification (Version 1.0) for Linking with the Kaigo WEB Service (「介護保険資格確認等WEBサービスとの連携におけるAPI仕様書（第1.0版）」について)." Posted 31 August 2026, with annexes 1–5-3. https://www.wam.go.jp/gyoseiShiryou/detail?gno=22773&ct=020050030

[^10]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly, Elderly Support Division. "Request for Cooperation in Reducing Import Errors in the Care Plan Data Exchange System (ケアプランデータ連携システムに係る取込エラー低減に向けた今後の対応に関するご協力のお願い)." Administrative notice to care-software vendors, 1 September 2026, with Annex 1 (standard 4.1 supplement) and Annex 2 (Q&A). https://www.kokuho.or.jp/system/care/careplan/lib/2060902_5113_cp-jimuren.pdf

[^11]: National Health Insurance Central Association, Health and Welfare Department. "Care Plan Data Exchange System Enhanced Vendor Test Plan (Standard V4.1) (ケアプランデータ連携システム 強化ベンダ試験計画書（標準仕様V4.1対応版）)." 30 September 2026. https://www.kokuho.or.jp/system/care/careplan/lib/260930_5113_vender_shikenkeikaku.pdf

[^12]: National Health Insurance Central Association. "Annex 5-1: Care Plan Data Exchange Standard Specification (別紙５―１ ケアプランデータ連携標準仕様)." Version 5.0 (official), August 2026, published on WAM NET. https://www.wam.go.jp/gyoseiShiryou-files/documents/2026/082817374552/2026_0828_013.pdf

[^13]: National Health Insurance Central Association. "Care Plan Data Exchange System Vendor Test (V4) Completion Results (「ケアプランデータ連携システム」ベンダ試験（Ｖ４対応版）の完了結果について)." List file 261006_5113, accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/lib/261006_5113_cp-vender_4.pdf

[^14]: National Health Insurance Central Association, Health and Welfare Department. "Care Plan Data Exchange System Vendor Test Plan (Standard V4) (ケアプランデータ連携システム ベンダ試験計画書（標準仕様V4対応版）)." 26 March 2026. https://www.kokuho.or.jp/system/care/careplan/lib/keikaku_ven_20260326.pdf

[^15]: National Health Insurance Central Association. "Care Plan Data Exchange System (ケアプランデータ連携システム)." Vendor test page. Accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/

[^16]: National Health Insurance Central Association. "Notice of Vendor Tests (Offline and Online) for Care DX (Linking with the Care Information Platform) (介護DX（介護情報基盤との連携）に伴うベンダテスト（オフライン・オンライン）実施のお知らせ)." April 2026. https://www.kokuho.or.jp/system/care/lib/260401_5313_kaigodx_vendortest_info.pdf
