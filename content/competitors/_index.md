---
title: "Competitors"
date: 2026-10-09T00:00:00+07:00
lastmod: 2026-10-09T09:00:00+07:00
summary: "Profiles of the Japanese care-software products a new entrant meets first, with an overview table. Every cell is sourced; vendor and acquirer claims are labelled as claims."
countries: ["Japan"]
---

*Last updated: 9 Oct 2026*

This section profiles nine Japanese care-software products. The overview tables below cover the first five. [CAREKARTE]({{< relref "carekarte" >}}), [ZEST]({{< relref "zest" >}}) and [SmaCare]({{< relref "smacare" >}}) were added later, and those eight are compared in the [feature matrix]({{< relref "feature-matrix" >}}). [Care-wing]({{< relref "care-wing" >}}), M3's records system for home-visit care, was added after that. A separate page covers [the M3 group in care]({{< relref "m3-group" >}}): Wiseman, Care-wing, Elan and the CUC companies. Each profile covers pricing, main features, target customers, any share claims, and how the product handles LIFE, claims to the federation ({{< ja "国保連" "kokuho-ren" "prefectural National Health Insurance federation" >}}) and the Care Plan Data Exchange. Profiles are updated in place and carry their own changelog.

**How to read the numbers.** No official market-share table was found. Office counts come from the vendors themselves and use different definitions: some include disability-welfare or free members, others exclude them. Do not add them together. The share figures below are claims made by a vendor's owner or acquirer, and are labelled with whose claim they are.

## Overview: pricing, focus and scale

| Product (vendor) | Pricing model | Published price | Main focus | Scale (vendor's own figure) | Share claim (whose) |
|---|---|---|---|---|---|
| [Kaipoke]({{< relref "kaipoke" >}}) (SMS) | Monthly flat fee per office location; ¥0 initial fee[^1] | ¥1,000–¥25,000 a month per service, excl. tax; ¥25,000 for home-visit care, day care and home-visit nursing[^1] | Home-based services; facility-type services not covered (SMS)[^2] | 62,300 offices, Jun 2026, including Kabenashi Cloud[^2] | SMS: 14% paid membership share; 62% "home-care connection share" (SMS definitions)[^3] |
| [Honobono NEXT]({{< relref "honobono-next" >}}) (ND Software, SOMPO) | Five-year software licence[^4] | Not published; quoted on request[^4] | Facilities and home-based services[^4][^5] | More than 72,300 offices, Apr 2026[^4] | SOMPO (Mar 2023): special nursing homes 43%; about 35% / 35% / 20% by segment[^5] |
| [Kanamic]({{< relref "kanamic" >}}) (Kanamic Network) | Initial fee plus monthly fee per office[^6] | Not found on pages opened[^6][^7] | Home, facility and community-wide information sharing[^7] | 57,763 offices; 376,972 user IDs, Mar 2026[^8] | None found in sources opened |
| [Wiseman]({{< relref "wiseman" >}}) (Wiseman, M3 group) | Initial fee plus five-year usage-right pack[^9] | Not published; quoted on request[^9] | Facilities, home-based care and medical[^10][^11] | More than 61,200 care offices, excluding disability offices[^10] | M3 (Jun 2026): geriatric health facilities about 40%, special nursing homes about 25%, other segments 10–15%[^11] |
| [Rehab Cloud]({{< relref "rehab-cloud" >}}) (Rehab for JAPAN) | No initial fee; base fee by plan[^12] | Only in a downloadable price list (not obtained)[^12] | Day services; special nursing homes and specified facilities from summer 2026[^13] | More than 4,316 offices cumulative, Jun 2026[^13] | None found in sources opened |

## Overview: LIFE, claims and the Care Plan Data Exchange

| Product | LIFE | Claims to kokuho-ren | Care Plan Data Exchange |
|---|---|---|---|
| Kaipoke | CSV output for LIFE (day-care documents)[^14] | Transmission included at ¥0[^1] | Standard 4.1 import and export[^15]; V4 D1–D7 complete[^16] |
| Honobono NEXT | "LIFE" menu outputs CSV[^17] | Records linked to claims; transmission method not stated in sources opened[^4] | V4 D1–D7 complete[^16] |
| Kanamic | LIFE support advertised[^7] | Bulk download and transmission of claim data; automatic reconciliation[^18] | MHLW-approved equivalent for care-management fee type II (one of four)[^19]; V4 D1–D7 complete[^16] |
| Wiseman | LIFE form input and output[^10] | Claims for all benefit types; transmission method not stated in sources opened[^10] | V4 D1–D7 complete ("Wiseman SP System")[^16] |
| Rehab Cloud | Builds LIFE forms; CSV import into LIFE[^20] | Records linked to claims[^20] | V4 support plus fax fallback[^21]; V4 D1–D7 complete[^16] |

A completed vendor test means only that the vendor ran the test patterns in Kokuho Chūōkai's demo environment. Kokuho Chūōkai states that it does not guarantee the software.[^16]

{{< analysis title="Tako-San's take" >}}
Tako-San's view: on their own figures, the market splits two ways. Kaipoke is home-based, cloud-first and sold at flat monthly prices. Honobono and Wiseman are facility-heavy, licence-based packages, each now owned by a large group (SOMPO and M3). Kanamic sells the network across a whole district, and Rehab Cloud is a specialist built around add-ons. The Care Plan Data Exchange vendor test no longer sets anyone apart, because all five have passed it. The open questions are how each vendor handles the move of LIFE to Kokuho Chūōkai and the 2027 move to the Kaigo WEB Service API. The sources we opened do not yet answer those questions.
{{< /analysis >}}

## Changelog

- 9 Oct 2026: added the Care-wing profile and the M3 group page
- 9 Oct 2026: added the CAREKARTE, ZEST and SmaCare profiles and the feature matrix
- 9 Oct 2026: first published

---

## References

[^1]: SMS Co., Ltd. "Kaipoke Pricing (カイポケの料金体系)." Accessed 9 October 2026. https://ads.kaipoke.biz/price/

[^2]: SMS Co., Ltd. "Q1 FY Ending March 2027 Results and Company Briefing (2027年3月期 第1四半期 決算及び会社説明資料)." 29 July 2026, pp. 12 and 48. https://www2.jpx.co.jp/disc/21750/140120260729502041.pdf

[^3]: SMS Co., Ltd. "Corporate Value Creation Roadmap." 28 April 2026, pp. 17–19. https://global.bm-sms.com/wp-content/uploads/2026/04/roadmap_to_FY30_E.pdf

[^4]: ND Software Co., Ltd. "Care ICT Software Honobono NEXT (介護ICTソフト「ほのぼのNEXT」)." Accessed 9 October 2026. https://www.ndsoft.jp/product/next/

[^5]: Sompo Holdings, Inc. "Care and Senior Business 'egaku' Strategy Briefing (介護・シニア事業「egaku」戦略説明会)." 7 March 2023, p. 27. https://www.sompo-hd.com/-/media/hd/files/doc/pdf/ir/2022/20230307.pdf?la=ja-JP

[^6]: Kanamic Network Co., Ltd. "Kanamic Easy Electronic Payment (カナミックかんたん電子決済)." Accessed 9 October 2026. https://www3.kanamic.net/lp/care/003-denshikessai/index.html

[^7]: Kanamic Network Co., Ltd. "Care Software for Everything from Daily Care Records to Management (日々の介護記録から経営管理までできる介護ソフト)." Accessed 9 October 2026. https://www.kanamic.net/care/

[^8]: Kanamic Network Co., Ltd. "Q2 FY Ending September 2026 Results and Company Briefing (2026年9月期（第26期）第2四半期決算および会社説明資料)." 13 May 2026. https://www2.jpx.co.jp/disc/39390/140120260513528666.pdf

[^9]: Wiseman Co., Ltd. "Pricing (料金・価格について)." Accessed 9 October 2026. https://www.wiseman.co.jp/products/welfare/price/

[^10]: Wiseman Co., Ltd. "Care and Welfare Products (介護・福祉向け製品)." Accessed 9 October 2026. https://www.wiseman.co.jp/products/welfare/

[^11]: M3, Inc. "Making Wiseman a Consolidated Subsidiary (ワイズマンの連結子会社化について)." June 2026, pp. 4–5. https://corporate.m3.com/assets.ctfassets.net/1pwj74siywcy/7B6ADxKAZqfvmozuTDV8W7/fe4bf3fe90c695bee95c0b445cb30dc3/20260605_Presentation_J.pdf

[^12]: Rehab for JAPAN Co., Ltd. "Pricing Plans (料金プラン)." Accessed 9 October 2026. https://rehab.cloud/price/

[^13]: Rehab for JAPAN Co., Ltd. "Rehab Cloud to Launch for Special Nursing Homes and Specified Facilities from Summer 2026 (Rehab Cloud、2026年夏より「特養・特定施設」向けに提供開始)." News, 13 July 2026. https://rehabforjapan.com/news/202607131533/

[^14]: SMS Co., Ltd. "Form Creation (【帳票作成】日々の帳票をカイポケ内で効率的に作成)." Day-service function page. Accessed 9 October 2026. https://ads.kaipoke.biz/day-service/function/report.html

[^15]: SMS Co., Ltd. "Kaipoke Support Status for the Care Plan Data Exchange System (ケアプランデータ連携システムへの対応状況)." Accessed 9 October 2026. https://ads.kaipoke.biz/status-of-care-plan-data-linkage-system/

[^16]: National Health Insurance Central Association. "Care Plan Data Exchange System Vendor Test (V4) Completion Results (「ケアプランデータ連携システム」ベンダ試験（Ｖ４対応版）の完了結果について)." Accessed 9 October 2026. https://www.kokuho.or.jp/system/care/careplan/lib/261006_5113_cp-vender_4.pdf

[^17]: ND Software Co., Ltd. "Honobono NEXT Support for the New LIFE System (ほのぼのＮＥＸＴ新LIFEシステムへの対応について)." News, 18 June 2024. https://www.ndsoft.jp/info/news/329142

[^18]: Kanamic Network Co., Ltd. "Facility, Paid Home and Serviced Housing System (施設・有老・サ高住システム)." Accessed 9 October 2026. https://www.kanamic.net/care/shisetsu/

[^19]: Ministry of Health, Labour and Welfare. "Public Call for Systems Relating to the Care-Management Fee (居宅介護支援費に係るシステムの公募について)." Accessed 9 October 2026. https://www.mhlw.go.jp/stf/newpage_44833.html

[^20]: Rehab for JAPAN Co., Ltd. "Rehab Cloud: Care Software and Care Systems (介護ソフト・介護システムならリハブクラウド)." Accessed 9 October 2026. https://rehab.cloud/

[^21]: Rehab for JAPAN Co., Ltd. "Care Plan Data Exchange and Direct FAX Sending (ケアプランデータ連携・FAXダイレクト送信)." Accessed 9 October 2026. https://rehab.cloud/service/careplan-data-connect/
