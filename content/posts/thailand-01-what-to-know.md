---
title: "Thai elderly care: what a care-software company needs to know"
date: 2026-10-11T04:16:57+07:00
lastmod: 2026-10-11T04:16:57+07:00
tags: ["thailand", "long-term-care", "briefing"]
summary: "How elderly long-term care in Thailand is paid for, who provides it, which government systems already hold the records, and where software fits. Part 1 of the Thailand LTC Basics series."
weight: 2
series: "Thailand LTC Basics"
series_order: 1
categories: ["Basics"]
cover:
  hidden: true
countries: ["Thailand"]
---

**In three lines**

- Thailand has no long-term care insurance. Public money for care at home comes mainly from the National Health Security Office (NHSO), paid per approved care plan through local governments.
- Residential care is mostly private: about 1,200 licensed care homes, against 12 state welfare centres.
- Records already sit in three separate government systems, none built for private homes, and none with a published interface for outside software that we found.

Thailand counts older people as those aged 60 or over. On 30 September 2026 there were 14,530,607 Thai nationals aged 60 or over in the house registers, 22.46% of Thai nationals.[^1] Unlike Japan, Thailand has no long-term care insurance that follows each person to the provider of their choice. Money for care comes through separate channels, each run by a different agency (see [Who pays for long-term care]({{< relref "/thailand/who-pays-for-long-term-care" >}})).

## Four channels of money

| Channel | Run by | What it pays |
|---|---|---|
| Community long-term care for dependent people | The NHSO, {{< th key="samnakngan-lak-prakan-sukkhaphap-haeng-chat" >}}, with local governments | A lump sum per person with an approved care plan: 10,442 baht a year since FY2024[^2][^3] |
| Old-age allowance | Local governments, under a Ministry of Interior regulation | Cash, 600 to 1,000 baht a month by age[^4] |
| State welfare centres | The Department of Older Persons (DOP), {{< th key="krom-kitchakan-phu-sung-ayu" >}} | Places in its 12 centres[^5] |
| Private care homes | Residents and families | Fees set by each home, shown on a price list the law requires[^6] |

Only the first channel pays for care work. A person qualifies with a Barthel Activities of Daily Living (ADL) score of 11 or less.[^2] The NHSO pays the service unit or local government according to the number of dependent people with an **approved individual care plan**.[^3] The cabinet's FY2026 framework for this line was 5,514 million baht, up 90% on FY2025.[^7] Part 2 of this series covers the money in detail.

## Who provides care

**At home.** The community scheme works through about 6,800 local governments that have joined their area's local health security fund.[^8] A care manager, usually a nurse at a sub-district health promoting hospital, assesses each person and writes the care plan. Caregivers, most of them village health volunteers who took a 70-hour course, make the visits.[^9][^10] See [Who does what in Thai community care]({{< relref "/thailand/who-does-what-community-care" >}}).

**In care homes.** Private homes are licensed as "health establishments" by the Department of Health Service Support (DHSS), {{< th key="krom-sanapsanun-borikan-sukkhaphap" >}}, under the Health Establishment Act B.E. 2559 (2016).[^11] DHSS counted 1,203 licensed elderly or dependent-care establishments on 10 October 2026.[^12] The state side is far smaller: DOP's 11 centres in its August 2026 table had 1,620 target places and 8,679 people waiting.[^13] Part 3 covers providers and licensing.

## Where the records are

Each agency runs its own system:[^14][^15][^16]

- **DHSS esta**: online licensing for care homes and the register of their staff
- **NHSO LTC programme (ltcnew)**: registration of dependent people, approved care plans, payment
- **Department of Health 3C program**: care managers, caregivers and care plans

A 2021 study found that the Department of Health's care-plan system and the NHSO's system were not linked, so care managers did the same paperwork twice.[^9] For a licensed private home, the law requires records, such as a client history register and a care-needs assessment every three months, but we found nothing that requires them to be electronic or sent to DHSS routinely.[^6][^17] Part 4 covers records and systems.

## Who buys software

There are two different markets. Private care homes pay their own way and are regulated by DHSS. Community care is public money, spent by local governments, sub-district hospitals and the Department of Health, under the national procurement law (see [How Thai public bodies buy software]({{< relref "/thailand/how-public-bodies-buy-software" >}})). Part 5 covers the workforce, the numbers to 2040 and what is changing.

## The series

1. What a care-software company needs to know (this post)
2. [Who pays]({{< relref "/posts/thailand-02-who-pays" >}})
3. [Providers and the licensing system]({{< relref "/posts/thailand-03-providers-and-licensing" >}})
4. [Records, IT and the government systems]({{< relref "/posts/thailand-04-records-and-systems" >}})
5. [The workforce, the numbers to 2040, and what's changing]({{< relref "/posts/thailand-05-workforce-and-outlook" >}})

The detailed, footnoted reference material is in the [Thailand guides]({{< relref "/thailand" >}}).

{{< analysis title="Tako-San's take" >}}
Tako-San's view: Thailand looks like Japan before long-term care insurance. Care at home runs on a per-person public grant tied to an assessment and a care plan, which is the same workflow Japanese care software was built around, but the buyers are local governments and small health units, and the government already runs the core systems. Residential care is a fee-paying private market of about 1,200 licensed homes with record-keeping duties but no electronic reporting duty. A care-software company has to decide which of these two markets it is serving, because the customer, the money and the rules are different.
{{< /analysis >}}

## Changelog

- 11 Oct 2026: first published

---

## References

[^1]: Department of Older Persons. "General data on older persons, statistics, September 2026 (ข้อมูลผู้สูงอายุทั่วไป สถิติผู้สูงอายุ กันยายน 2569)," embedded Looker Studio dashboard "Number of older Thai nationals with names in the house register (จำนวนผู้สูงอายุสัญชาติไทยที่มีชื่ออยู่ในทะเบียนบ้าน)," source: Department of Provincial Administration, data as of 30 September 2026. Rendered and read on 10 October 2026. https://www.dop.go.th/th/statistics_page?cat=1&id=2614

[^2]: Government Public Relations Department, Phayao provincial office. "NHSO raises lump sum for dependent people to 10,442 baht per person per year for local governments nationwide in 2024 (สปสช.เพิ่มงบเหมาจ่ายผู้ที่มีภาวะพึ่งพิง 10,442 บาท/คน/ปี อปท. ทั่วประเทศ ปี 2567)," 25 June 2024, reporting the NHSO board decision. https://phayao.prd.go.th/th/content/category/detail/id/60/iid/300558

[^3]: National Health Security Office. "Area-based long-term care system for dependent older people (LTC) (ระบบดูแลระยะยาวด้านสาธารณสุขสำหรับผู้สูงอายุที่มีภาวะพึ่งพิงในพื้นที่ (LTC))," programme site, section quoting the FY2024 fund notice, chapter 8 part 2, clauses 73 and 74. Accessed 10 October 2026. https://ltcnew.nhso.go.th/

[^4]: Government Public Relations Department, Ang Thong provincial office. "Ministry of Interior issues new 2023 rules on paying the old-age allowance (มท.ออกระเบียบใหม่ หลักเกณฑ์-วิธีจ่ายเงินเบี้ยยังชีพผู้สูงอายุ 2566)," 17 August 2023. https://angthong.prd.go.th/th/content/category/detail/id/9/iid/206892

[^5]: Department of Older Persons. Statistics page for August 2026, page description (founding date) and site menu (list of centres). https://www.dop.go.th/th/statistics_page?cat=13&type=4&id=2612

[^6]: Ministerial Regulation on standards of premises, safety and service in health establishments of the elderly or dependent-person care type B.E. 2563 (กฎกระทรวงกำหนดมาตรฐานด้านสถานที่ ความปลอดภัย และการให้บริการ ในสถานประกอบการเพื่อสุขภาพประเภทกิจการการดูแลผู้สูงอายุหรือผู้มีภาวะพึ่งพิง พ.ศ. ๒๕๖๓), Royal Gazette vol. 137, part 61 Kor, 31 July 2020, pp. 10 to 15. Copy of the Gazette pages: https://download.asa.or.th/03media/04law/swfa/mr63-02.pdf

[^7]: Government Public Relations Department, Office of the Secretary. "Cabinet approves FY2026 national health security budget framework of 275,000 million baht (ครม. อนุมัติกรอบงบประมาณ "หลักประกันสุขภาพแห่งชาติ" ประจำปีงบประมาณ พ.ศ. 2569 วงเงินรวม 2.75 แสนล้านบาท)," 11 February 2025, on the cabinet resolution of 4 February 2025, item 1(7.2). https://secretary.prd.go.th/th/content/category/detail/id/9/iid/363872

[^8]: Human Resources for Health Research and Development Office (สำนักงานวิจัยและพัฒนากำลังคนด้านสุขภาพ). "The NHSO and the LTC fund (สปสช. กับกองทุน LTC)," LTC fact sheet 07, synthesised from its 2021 study of health-workforce management in long-term care during the pandemic; uploaded October 2024. https://hrpo.info/wp-content/uploads/2024/10/LTC_FS-07-%E0%B8%AA%E0%B8%9B%E0%B8%AA%E0%B8%8A.pdf

[^9]: Human Resources for Health Research and Development Office (สำนักงานวิจัยและพัฒนากำลังคนด้านสุขภาพ). "Care manager (CM) (ผู้จัดการการดูแล (care manager: CM))," LTC fact sheet 02, synthesised from its 2021 study of health-workforce management in long-term care during the pandemic; uploaded October 2024. https://hrpo.info/wp-content/uploads/2024/10/LTC_fact-sheet-02-CM.pdf

[^10]: Human Resources for Health Research and Development Office. "Caregivers in long-term care (อาชีพนักบริบาลในการดูแลระยะยาว (Long-term care: LTC))," LTC fact sheet 08; uploaded October 2024. https://hrpo.info/wp-content/uploads/2024/10/LTC_Factsheet-08-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%9A%E0%B8%B2%E0%B8%A5.pdf

[^11]: Health Establishment Act B.E. 2559 (2016) (พระราชบัญญัติสถานประกอบการเพื่อสุขภาพ พ.ศ. ๒๕๕๙), Royal Gazette vol. 133, part 30 Kor, 31 March 2016. Booklet published by the Health Establishment Division, Department of Health Service Support. https://hss.moph.go.th/HssDepartment/file_reference/20210505276357212.pdf

[^12]: Ministry of Public Health, Office of Public Relations. "Minister of Public Health orders DHSS to tighten control of elderly-care homes (รมว.สธ. สั่งการ สบส. คุมเข้มสถานดูแลผู้สูงอายุ ต้องได้มาตรฐาน ห้ามทำเกินขอบเขต ฝ่าฝืนเจอโทษทั้งจำ–ปรับ)," 10 October 2026. https://pr.moph.go.th/online/index/news/349177

[^13]: Department of Older Persons. "Statistics of older persons in social welfare development centres (สถิติผู้สูงอายุในศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุ)," table image, data as of 28 August 2026, embedded in the page in note 1. https://www.dop.go.th/th/statistics_page?cat=13&type=4&id=2612

[^14]: Office of the Public Sector Development Commission, Government Information Center (info.go.th). "Applying for a health establishment business licence, elderly or dependent-person care type (การขออนุญาตประกอบกิจการสถานประกอบการเพื่อสุขภาพ ประเภทกิจการการดูแลผู้สูงอายุหรือผู้มีภาวะพึ่งพิง)," citizen's guide. https://info.go.th/procedure/95ffd337-23ac-48e2-84eb-04e6cea59253/view

[^15]: National Health Security Office. "Area-based long-term care system for dependent older people (LTC)," programme site, accessed 10 October 2026. https://ltcnew.nhso.go.th/

[^16]: Government Data Catalog. "Caregivers registered in the Long Term Care 3C program (ข้อมูล Caregiver ที่ขึ้นทะเบียนในโปรแกรม Long Term Care 3C)," Department of Health, Bureau of Elderly Health. https://gdcatalog.go.th/dataset/gdpublish-cg

[^17]: Ministerial Regulation on standards of premises, safety and service in health establishments of the elderly or dependent-person care type B.E. 2563, Royal Gazette vol. 137, part 61 Kor, 31 July 2020, clause 6. https://download.asa.or.th/03media/04law/swfa/mr63-02.pdf
