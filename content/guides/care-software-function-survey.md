---
title: "MHLW's care-software function survey: what it asks, who is listed, and why it matters for subsidies"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T09:00:00+07:00
tags: ["japan", "long-term-care", "subsidy", "software", "care-plan", "life", "guide"]
summary: "MHLW's care-software function survey is the list that prefectures check before subsidising care software. This guide covers what the survey is, how it ties into the fiscal 2026 subsidy and the other public lists, what the October 2025 and August 2026 editions ask, how many products each lists, which of our profiled vendors appear, and what a new vendor has to do to be listed."
categories: ["Guides"]
weight: 7
countries: ["Japan"]
---

*Last updated: 9 Oct 2026*

MHLW runs a survey of care-software vendors and publishes the answers. The survey is called the {{< ja "介護ソフト機能調査" "kaigo sofuto kinō chōsa" "care-software function survey" >}}, and the published file is the {{< ja "介護記録ソフト機能調査結果" "kaigo kiroku sofuto kinō chōsa kekka" "care record software function survey results" >}}. MHLW posts the results on its care-technology page under the heading "subsidy reference materials".[^1] Under the fiscal 2026 care-technology subsidy, prefectures use the results to check whether a product meets the software conditions.[^5]

This guide covers:

- what the survey is and why MHLW runs it;
- how it connects to the subsidy and to the other public lists;
- what each edition asks;
- how many products each edition lists, and which of our profiled vendors appear;
- what changed between editions;
- what a vendor must do to be listed.

## What the survey is

The survey is an online form for vendors. MHLW states its purpose on the form: "This survey is to understand the implementation status of the functions that care software has."[^4] Vendors answer one form per product. The form says that if a vendor has answered before for the same software, the old answer is deleted and replaced by the new one.[^4]

MHLW's care-technology page ({{< ja "介護テクノロジーの利用促進" "kaigo tekunorojī no riyō sokushin" "promoting the use of care technology" >}}) currently offers two editions of the results and a link to the form:[^1]

| Edition on the MHLW page | File | Label on the page |
|---|---|---|
| Old edition | PDF, dated 20 October 2025 on each page[^3] | "Old edition (until 31 March 2026)"[^1] |
| New edition | Spreadsheet, "24 August 2026 edition"[^2] | "New edition (from 1 April 2026)"[^1] |
| Response form | Online form, "Care-software function survey (for care-software vendors)"[^4] | "Answer here"[^1] |

The same block on the page links to TAIS, the welfare-equipment database run by the Association for Technical Aids.[^1]

## Why it matters: the subsidy link

MHLW's notice of 7 April 2026 sets up the fiscal 2026 care-technology subsidy, which prefectures run.[^5] It uses the survey in two ways.

**As a reference for every product.** The notice says care software must handle records, information sharing and billing end to end. For the details of a product's functions, it tells prefectures to refer to the vendor's catalogue and to "the results of the care-software function survey" that MHLW provides.[^5]

**As a condition for some office types.** The notice adds conditions by office type:[^5]

- **Home-based and care-management offices.** Both Kokuho Chūōkai's vendor-test results **and** the survey results must confirm two things. First, the software outputs and imports CSV files under the Care Plan Data Exchange standard. Second, the vendor has a support system for using the exchange.
- **Facility services and community-based special nursing homes.** The survey results must confirm that the software outputs CSV under MHLW's LIFE CSV specification.
- **A product missing from the sources.** The prefecture should urge the vendor to answer MHLW's survey.

The response form repeats the first condition. Next to the Care Plan Data Exchange question it says that, under the fiscal 2026 care-technology retention support project, CSV output and import under the standard, and a support system for the exchange, "are subsidy requirements".[^4]

### The other public lists

The survey is one of several public lists that a buyer or a prefecture may check. They answer different questions:

| List | Run by | What it shows |
|---|---|---|
| Care-software function survey results | MHLW[^1] | The vendor's own answers about functions, the exchange and LIFE[^2][^4] |
| V4 vendor-test completion list | Kokuho Chūōkai | Products that completed each test pattern for the exchange, version 4[^6] |
| Systems accepted as equivalent to the exchange | MHLW | Systems MHLW accepts as having the same function and security as the exchange, for the care-management fee II[^7] |
| TAIS | Association for Technical Aids | Care-technology products; linked from the same block of the MHLW page[^1] |

## What the survey asks

### The current form and the August 2026 edition

The current form asks:[^4]

- **Respondent and product.** Company, contact person, department, phone, email, software name, product URL.
- **Sales form.** Perpetual licence, licence with a time limit, annual payment, monthly payment, monthly charge per licence, or other.
- **Care Plan Data Exchange.** Four check boxes:
  1. supports standard version 4.1;
  2. provides a manual on settings and operation for the exchange;
  3. answers questions through a help desk, with contact details;
  4. plans to support standard version 5.0.
- **Services and functions.** The service types covered: home-visit, day, residential, care management, facility and other. For each, which of four functions the software has: records ({{< ja "記録業務" "kiroku gyōmu" "record work" >}}), information sharing ({{< ja "情報共有業務" "jōhō kyōyū gyōmu" "information-sharing work" >}}), billing ({{< ja "請求業務" "seikyū gyōmu" "billing work" >}}) and other.
- **LIFE.** Status against MHLW's CSV specification for LIFE: supported; for a LIFE service but not supported; not a product for LIFE services; or other. Then how users can ask about LIFE.

The August 2026 spreadsheet has one column per entry and the same rows: sales form, the four exchange items with the help-desk contact, record, sharing, billing and other functions for each service type, and the LIFE items.[^2]

### The October 2025 edition

The October 2025 edition is a 162-page PDF with two pages per entry.[^3] It asked more detailed questions:[^3]

- **Functions.** A grid of 17 tasks across five service types (home-visit, day, residential, care management, facility). The tasks run from consultation records and contracts, through assessments, care plans, service-use tables, individual plans, shifts, service records and monitoring, to claim statements, benefit-management forms, invoices and claim transmission.
- **End-to-end flow.** For ten documents, from assessment to the benefit-management form, whether the user's basic data flows in automatically.
- **Backup files.** Whether a backup-file export and import function is implemented, planned within three years, planned with no date, or not planned.
- **Sales form.**
- **Care Plan Data Exchange.** Status against standard version 3.2, the planned timing for version 4.1, and which CSV files the product outputs and imports, item by item, for care management, home services and preventive care.
- **Promoting the exchange.** Manuals, videos, seminars, an API link to the exchange, and whether the vendor knows how many of its users use the exchange.

The October 2025 edition has no LIFE item.[^3]

## How many products are listed

| | October 2025 edition | August 2026 edition |
|---|---|---|
| Entries | 80[^3] | 53[^2] |
| Distinct products (our count) | 64[^3] | 49[^2] |
| Distinct company names (our count) | 53[^3] | 45[^2] |

Both editions list some products more than once. In the October 2025 edition, for example, EM Systems' "MAPs for NURSING CARE" appears five times.[^3] In the August 2026 edition, four products appear twice, including Wiseman's "Wiseman System SP".[^2] Our counts treat names that differ only in spacing or full-width characters as the same. We also count Software Service's "Kaede" and "Care System 'Kaede'" in the October 2025 edition as one product.[^3]

### Answers in the August 2026 edition

Of the 53 entries in the August 2026 edition (our count of marks):[^2]

| Item | Entries marked |
|---|---|
| ① Supports standard 4.1 | 45 |
| ② Provides a manual for the exchange | 41 |
| ③ Help desk answers questions on the exchange | 41 |
| ①, ② and ③ all marked | 39 |
| ④ Plans to support standard 5.0 | 46 |
| LIFE CSV: supported | 42 |
| LIFE CSV: not a product for LIFE services | 8 |
| LIFE CSV: other | 3 |

Records functions are marked for home-visit services in 42 entries, day services in 40, care management in 38, residential services in 31 and facility services in 28.[^2]

### Answers in the October 2025 edition

Of the 80 entries in the October 2025 edition (our count of marks):[^3]

- **Standard 3.2.** 64 entries marked "supported, vendor test completed" and 4 "supported, vendor test not completed". Seven marked that the product is not for the target services, has no care-plan function, or does not support the standard. Five had no mark.
- **Planned timing for 4.1.** 27 entries marked "by April 2025", 33 "April to September 2025", 3 "October 2025 to March 2026" and 4 "from April 2026". Seven marked that the product is not for the target services or has no care-plan function. Six had no mark.

The 4.1 timing options start at "by April 2025", six months before the date printed on the edition.[^3]

## Our profiled vendors in each edition

| Product | October 2025 edition | August 2026 edition |
|---|---|---|
| [Kaipoke]({{< relref "competitors/kaipoke" >}}) (SMS) | Listed. 3.2 supported, vendor test not completed; 4.1 planned April–September 2025. Function marks in home-visit, day and care-management columns.[^3] | Listed. ①–④ all marked; LIFE CSV supported; monthly payment. Functions for home-visit, day and care management.[^2] |
| [Honobono NEXT]({{< relref "competitors/honobono-next" >}}) (ND Software) | Listed. 3.2 vendor test completed; 4.1 planned by April 2025; licence with a time limit.[^3] | Listed. ①–④ all marked; LIFE CSV supported; licence with a time limit. Functions for all five service types.[^2] |
| [Kanamic]({{< relref "competitors/kanamic" >}}) (Kanamic Network) | Listed. 3.2 vendor test completed; 4.1 planned by April 2025.[^3] | Listed. ①–④ all marked; LIFE CSV supported; monthly payment. Functions for all five service types.[^2] |
| [Wiseman]({{< relref "competitors/wiseman" >}}) ("Wiseman System SP") | Listed. 3.2 vendor test completed; 4.1 planned April–September 2025; sales form "other".[^3] | Listed twice. Both entries: ①–④ all marked; LIFE CSV supported; functions for all five service types. Sales form shows "0" in one entry and "licence (monthly or multi-year units)" in the other.[^2] |
| [CAREKARTE]({{< relref "competitors/carekarte" >}}) (Care Connect Japan) | Listed twice. 3.2 vendor test completed; 4.1 planned by April 2025; annual payment.[^3] | Not listed[^2] |
| [Care-wing]({{< relref "competitors/care-wing" >}}) (Logic) | Listed. 3.2 vendor test completed; 4.1 planned by April 2025; monthly payment. Function marks in the home-visit column only; the claim-statement, invoice and transmission rows show a dash.[^3] | Not listed[^2] |
| [Rehab Cloud]({{< relref "competitors/rehab-cloud" >}}) (Rehab for JAPAN) | Not listed[^3] | Not listed[^2] |
| [ZEST]({{< relref "competitors/zest" >}}) | Not listed[^3] | Not listed[^2] |
| [SmaCare]({{< relref "competitors/smacare" >}}) (Homenet) | Not listed[^3] | Not listed[^2] |

Being absent from the survey is not the same as failing the vendor test. Rehab Cloud, CAREKARTE and SmaCare have completed all seven V4 test patterns, and Care-wing has completed patterns D2, D3, D6 and D7, on Kokuho Chūōkai's list of 6 October 2026.[^6] None of them is in the August 2026 survey edition.[^2]

## What changed between editions

| Item | October 2025 edition | August 2026 edition |
|---|---|---|
| Format | PDF, two pages per entry[^3] | Spreadsheet, one column per entry[^2] |
| Period on the MHLW page | Until 31 March 2026[^1] | From 1 April 2026[^1] |
| Functions | 17 tasks × 5 service types[^3] | Records, sharing, billing and other × 5 service types, plus "other" services[^2] |
| End-to-end flow, backup export | Asked[^3] | No row[^2] |
| Care Plan Data Exchange | 3.2 status, 4.1 timing, file-by-file CSV items, promotion efforts[^3] | 4.1 support, manual, help desk and contact, 5.0 plan[^2] |
| LIFE | No item[^3] | CSV status and user contact[^2] |
| Entries | 80[^3] | 53[^2] |

The new questions line up with the fiscal 2026 conditions: the exchange items cover CSV support and a support system, and the LIFE item covers the facility-service condition.[^5][^2]

The 7 April 2026 notice gives a response address ending in "kaigo_kinou".[^5] MHLW's care-technology page now links to a form ending in "kaigosoft_v2".[^1]

## What a vendor has to do to be listed

The sources set out these steps:

1. **Answer the form** on MHLW's care-technology page, one answer per product.[^1][^4]
2. **For home-based and care-management customers**, have the CSV output and import and the support system confirmed in both the survey and Kokuho Chūōkai's vendor-test results.[^5] The form's exchange items ask about standard 4.1, a manual and a help desk.[^4]
3. **For facility customers**, have LIFE CSV output confirmed in the survey.[^5]
4. **To update an entry**, answer again for the same software. The form says the old answer is replaced.[^4]

The sources we opened do not say how often MHLW republishes the results, or how long after an answer a product appears.

{{< analysis title="Tako-San's take" >}}
Tako-San's view: the survey is a self-declaration, not a test, but under the fiscal 2026 rules it works as a gate. A home-care product that is missing from it is hard for a prefecture to subsidise, however good the product is. For a new vendor wanting to be listed, I would plan it in this order. Pass the V4 vendor test first, because the survey alone is not enough for home-based offices. Then answer the survey with all of ①–④ ticked, a working help-desk contact, and LIFE CSV support if the product touches facility services. The 5.0 question is a signal of where MHLW is heading. Afterwards, check the published entry: the August 2026 file shows answers as given, including a "0" in one sales-form cell, so a vendor should read its own entry. The drop from 80 entries to 53 surprised me. It looks as if the new form required everyone to answer again. If so, vendors that answered the old form, CAREKARTE and Care-wing among them, need to answer the new one to reappear. That is my reading, not something MHLW says.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: first published

---

## References

[^1]: Ministry of Health, Labour and Welfare. "Promoting the Use of Care Technology (介護テクノロジーの利用促進)." Section "Subsidy reference materials (補助金参考資料)". Accessed 9 October 2026. https://www.mhlw.go.jp/stf/kaigo-ict.html

[^2]: Ministry of Health, Labour and Welfare. "Care Record Software Function Survey Results, 24 August 2026 Edition (介護記録ソフト機能調査結果（令和８年８月24日版）)." Spreadsheet, sheet "0824". https://www.mhlw.go.jp/content/12300000/001741865.xlsx

[^3]: Ministry of Health, Labour and Welfare. "Care Record Software Function Survey Results (介護記録ソフト 機能調査結果)." Edition dated 20 October 2025, 162 pages. https://www.mhlw.go.jp/content/12300000/001581775.pdf

[^4]: Ministry of Health, Labour and Welfare. "Care-Software Function Survey (for Care-Software Vendors) (介護ソフト機能調査（介護ソフトベンダー向け）)." Online response form. Accessed 9 October 2026. https://www.mhlw.go.jp/form/pub/mhlw01/kaigosoft_v2

[^5]: Ministry of Health, Labour and Welfare, Director-General of the Health and Welfare Bureau for the Elderly. "Implementation of the FY2026 (carried over from FY2025) Care Technology Adoption, Collaboration and Management Improvement Support Programme (「令和８年度（令和７年度からの繰越分）介護テクノロジー導入・協働化・経営改善等支援事業」の実施について)." Notice 老発0407第3号, 7 April 2026, Annex 1, as republished by Iwate Prefecture. https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/099/125/kuniyoukou_zenbun.pdf

[^6]: National Health Insurance Central Association. "Care Plan Data Exchange System Vendor Test (V4) Completion Results (「ケアプランデータ連携システム」ベンダ試験（Ｖ４対応版）の完了結果について)." List dated 6 October 2026, accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/lib/261006_5113_cp-vender_4.pdf

[^7]: Ministry of Health, Labour and Welfare. "Public Call for Systems Relating to the Care-Management Fee (居宅介護支援費に係るシステムの公募について)." Including the review results. Accessed 9 October 2026. https://www.mhlw.go.jp/stf/newpage_44833.html
