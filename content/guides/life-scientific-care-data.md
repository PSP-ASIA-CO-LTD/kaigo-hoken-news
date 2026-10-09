---
title: "LIFE, Japan's scientific-care data system: a guide for software vendors"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T09:00:00+07:00
tags: ["japan", "long-term-care", "LIFE", "software", "guide"]
summary: "What LIFE is, who runs it since May 2026, which add-ons depend on it, and what a care-software vendor has to build to support it."
categories: ["Guides"]
weight: 1
---

*Last updated: 9 Oct 2026*

LIFE ({{< ja "科学的介護情報システム" "kagakuteki kaigo jōhō shisutemu" "scientific care information system" >}}, Long-term care Information system For Evidence) is the national database that care offices submit structured assessment data to in order to earn certain fee add-ons. It started in 2021. It merged two earlier collections: VISIT (rehabilitation data, run from 2017) and CHASE (health status and events, run from 2020).[^1] This guide covers the parts that matter to a software vendor: who operates LIFE now, which add-ons depend on it, and what the vendor-side interface looks like.

## Who runs LIFE: the May 2026 handover

On **11 May 2026**, operation of LIFE moved from the Ministry of Health, Labour and Welfare (MHLW, {{< ja "厚生労働省" "kōsei rōdō-shō" "Ministry of Health, Labour and Welfare" >}}) to the National Health Insurance Central Association ({{< ja "国民健康保険中央会" "kokumin kenkō hoken chūō-kai" "National Health Insurance Central Association" >}}, usually shortened to {{< ja "国保中央会" "kokuho chūō-kai" "Kokuho Chūōkai" >}}). MHLW tied the move to the launch of the care information platform ({{< ja "介護情報基盤" "kaigo jōhō kiban" "care information platform" >}}), which Kokuho Chūōkai operates from 1 April 2026.[^2] MHLW listed five main changes in the new system:[^2]

1. Backup files are no longer exchanged.
2. Terminals are authenticated with an electronic certificate.
3. The one-time passcode for terminal authentication is abolished.
4. Users log in from the LIFE home page.
5. A new function checks that user (care recipient) information is accurate.

Some of the data submitted to the new LIFE flows on to the care information platform. Related care offices can then view it through the Kaigo WEB Service ({{< ja "介護保険資格確認等WEBサービス" "kaigo hoken shikaku kakunin tō webu sābisu" "care-insurance eligibility check web service" >}}).[^2] Our [Kaigo WEB Service guide](../kaigo-web-service-api/) explains that service and its API.

**Migration deadline.** Each office had to migrate between **11 May and 31 July 2026**. Account IDs, passwords and office details carried over to the new LIFE. User information and submitted forms did not, so offices had to register their users again.[^2] MHLW sent out repeated reminders on 2 July and 23 July 2026, saying that some offices still had not migrated.[^3][^4] The 2 July notice set the consequences:[^3]

- An office that had not migrated by 31 July 2026 could no longer submit data from 1 August 2026.
- That office would fail the LIFE submission requirement for add-ons from July 2026 services onward.
- July 2026 forms had to reach the Kokuho-run LIFE by 10 August 2026.

The MHLW-run LIFE was scheduled to stop on **1 September 2026**.[^2]

## The add-ons that depend on LIFE

MHLW's September 2026 paper to the benefits subcommittee makes three points:[^5]

- There are **17** LIFE-linked add-ons, and several of them ask for the same items.
- As of April 2025, about **70 percent** of facility-type services and about **50 percent** of day and residential-type services were using LIFE.
- The fiscal 2024 fee revision set data submission for LIFE-linked add-ons to **at least once every three months**. Before that revision, the scientific-care add-on required at least once every six months.

The headline add-on is the scientific-care system add-on ({{< ja "科学的介護推進体制加算" "kagakuteki kaigo suishin taisei kasan" "scientific-care system add-on" >}}). Its unit value depends on the service type. The billing rates below are the share of offices that billed the service that month and also billed the add-on, for the review month of November 2025 (October 2025 services).[^5]

| Service | Type I (units/month) | Type II (units/month) | Offices billing type I | Offices billing type II |
|---|---|---|---|---|
| Special nursing home ({{< ja "介護老人福祉施設" "kaigo rōjin fukushi shisetsu" "special nursing home (tokuyō)" >}}) | 40[^5] | 50[^5] | 23.6%[^5] | 51.9%[^5] |
| Geriatric health facility ({{< ja "介護老人保健施設" "kaigo rōjin hoken shisetsu" "geriatric health services facility (rōken)" >}}) | 40[^5] | 60[^5] | 24.4%[^5] | 60.0%[^5] |
| Integrated care hospital ({{< ja "介護医療院" "kaigo iryō-in" "integrated medical and long-term care facility" >}}) | 40[^5] | 60[^5] | 21.0%[^5] | 40.0%[^5] |
| Day care ({{< ja "通所介護" "tsūsho kaigo" "day care service" >}}) | 40 (single type)[^5] | n/a | 54.2%[^5] | n/a |

An office bills either type I or type II, not both, so the two rates should not be added together.

The same paper lists the "way forward" for LIFE as an open question for the subcommittee. It asks how LIFE-linked data submission and outcome evaluation should be handled. A working group on the items to be submitted was due to report to the subcommittee around autumn 2026.[^5] Vendors should therefore expect the item set to change again.

## What a vendor has to build

**The CSV interface.** LIFE accepts CSV files that care software exports, so staff do not have to retype the care record. MHLW published version 3.10 of the external interface item list ({{< ja "外部インターフェース項目一覧" "gaibu intāfēsu kōmoku ichiran" "external interface item list" >}}) and of the CSV linkage specification in June 2025.[^6] When Kokuho Chūōkai took over, MHLW updated the version 3.10 CSV specification on 11 May 2026. Most changes were operational:[^7]

- Windows 10 was removed as a supported OS.
- A check on the accuracy of user information was added.
- The operator and copyright notice were changed to Kokuho Chūōkai.

MHLW said the item definitions did not change, so care software does not need to change how it builds the CSV. The Kokuho-run LIFE accepts both version 3.00 and version 3.10 files.[^7] The current specification files are listed in the vendor section of MHLW's LIFE page.[^8]

**A new vendor test account.** The vendor test environment for the Kokuho-run LIFE opened on 11 May 2026, and the MHLW-run vendor environment was scheduled to close on 1 September 2026. Accounts from the MHLW-run LIFE do not work in the new environment, so vendors must apply for a new account. Any terminal that uses the new vendor environment needs an electronic certificate issued by the help desk.[^7]

**LIFE output is a subsidy condition for facility software.** Under the fiscal 2026 care-technology adoption subsidy ({{< ja "介護テクノロジー定着支援事業" "kaigo tekunorojī teichaku shien jigyō" "care-technology adoption support programme" >}}), software bought by these facilities qualifies only if MHLW's care-software function survey ({{< ja "介護ソフト機能調査" "kaigo sofuto kinō chōsa" "care software function survey" >}}) confirms that it outputs CSV files in line with the LIFE CSV specification:[^9]

- special nursing homes
- community-based special nursing homes
- geriatric health facilities
- integrated care hospitals

Home-care software faces a separate test, linked to the Care Plan Data Exchange. That test is covered in the [Care Plan Data Exchange guide](../care-plan-data-exchange/).

{{< analysis title="Tako-San's take" >}}
Tako-San's view: the May 2026 handover matters more to vendors than the CSV changes. Kokuho Chūōkai now operates LIFE, the care information platform and the Care Plan Data Exchange. Its certificates, help desk and test accounts are becoming the single gate a care-software vendor must pass. A foreign entrant should not treat LIFE as a side feature. The 17 overlapping add-ons and the item review that is still open mean that any LIFE module has to be built to change. The CSV mapping should be a maintained table, not code that is hard to update. For special nursing homes, the gap between type I and type II billing rates looks to me like the place where good software support could show measurable value. That is an opinion, not a tested finding.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: added a link to the new guide on the Kaigo WEB Service API
- 9 Oct 2026: first published

---

## References

[^1]: Ministry of Health, Labour and Welfare. "Scientific Care Information System (LIFE) (科学的介護情報システム（LIFE）)." Benefits Subcommittee paper 3, 264th meeting, 3 September 2026, slide "History of scientific care initiatives". https://www.mhlw.go.jp/content/12300000/001744922.pdf

[^2]: Ministry of Health, Labour and Welfare, Health and Welfare Bureau for the Elderly. "Notice on the Transfer of LIFE's Operating Body (科学的介護情報システム（LIFE）の運営主体の移管に係る周知について)." Administrative notice, 23 March 2026 (Care Insurance Latest Information Vol.1484). https://www.mhlw.go.jp/content/12301000/001677722.pdf

[^3]: Ministry of Health, Labour and Welfare, Elderly Health Division. "Second Reminder on Migration to the Kokuho Chūōkai-Operated LIFE (公益社団法人国民健康保険中央会運用 LIFE への移行に係る再周知について)." Administrative notice, 2 July 2026. https://www.mhlw.go.jp/content/12301000/001718036.pdf

[^4]: Ministry of Health, Labour and Welfare, Elderly Health Division. "Third Reminder on Migration to the Kokuho Chūōkai-Operated LIFE (公益社団法人国民健康保険中央会運用 LIFE への移行に係る再々周知について)." Administrative notice, 23 July 2026. https://www.mhlw.go.jp/content/12301000/001726920.pdf

[^5]: Ministry of Health, Labour and Welfare. "Scientific Care Information System (LIFE) (科学的介護情報システム（LIFE）)." Benefits Subcommittee paper 3, 264th meeting, 3 September 2026. Add-on billing tables based on the November 2025 review month (October 2025 services); "Current status and issues" slide (p. 40); fiscal 2024 revision slides. https://www.mhlw.go.jp/content/12300000/001744922.pdf

[^6]: Ministry of Health, Labour and Welfare, Elderly Health Division. "Standard Specification for CSV Linkage between LIFE and Care Software (Part 7) (科学的介護情報システム（LIFE）と介護ソフト間における CSV 連携の標準仕様について（その７))." Administrative notice, 13 June 2025. https://www.mhlw.go.jp/content/12301000/001503990.pdf

[^7]: Ministry of Health, Labour and Welfare, Elderly Health Division. "Standard Specification for CSV Linkage between LIFE and Care Software (Part 9) (科学的介護情報システム（LIFE）と介護ソフト間における CSV 連携の標準仕様について（その９))." Administrative notice, 11 May 2026. https://www.mhlw.go.jp/content/12301000/001698658.pdf

[^8]: Ministry of Health, Labour and Welfare. "Scientific Care (科学的介護)." LIFE information page, section "8 Materials for care software vendors" (CSV連携仕様書(LIFE) v0310, updated 11 May 2026). Accessed 9 October 2026. https://www.mhlw.go.jp/stf/shingi2/0000198094_00037.html

[^9]: Ministry of Health, Labour and Welfare, Director-General of the Health and Welfare Bureau for the Elderly. "Implementation of the FY2026 (carried over from FY2025) Care Technology Adoption, Collaboration and Management Improvement Support Programme (「令和８年度（令和７年度からの繰越分）介護テクノロジー導入・協働化・経営改善等支援事業」の実施について)." Notice 老発0407第3号, 7 April 2026, as republished by Iwate Prefecture. https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/099/125/kuniyoukou_zenbun.pdf
