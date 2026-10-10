---
title: "Records, IT and the government systems in Thai elderly care"
date: 2026-10-11T04:16:57+07:00
lastmod: 2026-10-11T04:16:57+07:00
tags: ["thailand", "long-term-care", "records", "3c", "nhso", "government-systems"]
summary: "DHSS's esta licensing system, the NHSO LTC programme, the Department of Health's 3C program, Smart อสม., the Blue Book app and Thai COC: what each records, where they overlap, the missing caregiver visit log, and how public bodies buy and maintain these systems. Part 4 of the Thailand LTC Basics series."
series: "Thailand LTC Basics"
series_order: 4
categories: ["Basics"]
countries: ["Thailand"]
---

**In three lines**

- Thailand has no national care-data standard like Japan's LIFE; each agency runs its own system.
- In the community scheme, care managers register people in the NHSO's system and write care plans in the Department of Health's 3C, and a 2021 study found the two were not linked.
- No national form or app was found for the caregiver's own visit log.

## No single standard

We found no national data standard for elderly care in Thailand. Each agency runs its own system, and none of the agency pages we opened offers a public interface for outside software (see [Data and IT reporting]({{< relref "/thailand/data-and-it-reporting" >}})).

| System | Owner | Users | What it holds | Source |
|---|---|---|---|---|
| esta | DHSS | Care-home applicants, accredited schools | Licence applications, staff registration, graduate lists | [^1][^2] |
| LTC programme (ltcnew) | NHSO | Service units, local governments | Dependent people, approved care plans with ADL score and group, agreements, payments | [^3][^4] |
| 3C program | Department of Health | Care managers | Care managers, caregivers, care plans | [^5] |
| Smart อสม. | DHSS | Village health volunteers | Monthly work report replacing the paper form | [^6] |
| Blue Book app | Department of Health | Older people, health staff, volunteers | Self-assessment and screening | [^7] |
| Thai COC | Surin Hospital and partners | Hospitals and primary-care units | Hospital-to-community referral and home-visit records, with LINE alerts | [^8] |

## The care home: records without reporting

A licensed care home must keep a register of staff, each client's health data and screening, a client history register, three-monthly needs assessments and records of health changes.[^9][^10] Officials may inspect documents. We found nothing that requires these records to be electronic or sent to DHSS routinely.[^9] The care home's main system contact is esta, for its licence and its caregivers' registration.[^1]

## The community scheme: two systems, one care manager

For the NHSO scheme the steps and systems are:[^4][^5]

1. the service unit screens people with the Barthel ADL index (paper or local forms)
2. people scoring 11 or less are registered in the NHSO programme
3. the care manager pulls the list into 3C, writes the care plan there and prints it
4. the printed plans go to the LTC subcommittee for approval, on paper
5. the local government enters each approved plan in the NHSO programme, with the person's ADL score, care group and TAI, then the agreement, voucher and payment
6. caregivers work from the printed plan
7. twelve months of service and ADL are recorded in the NHSO programme

The Department of Health and the NHSO agreed in 2018 to link their data, but a 2021 study found the two systems still unlinked, so care managers did the paperwork twice.[^5][^11] The caregiver's own visits are the gap: the care manager enters caregivers' work in the Department of Health's database, and stimulus-project caregivers report monthly to their local government, but we found no national form or app for the caregiver's visit log.[^12][^13] See [The NHSO long-term care cycle]({{< relref "/thailand/nhso-ltc-cycle" >}}) and the [records-flow infographic]({{< relref "/thailand/infographics/02-care-records-flow" >}}).

## 3C PLUS

On 10 October 2026 the Director-General of the Department of Health was reported as saying the Department will develop an online platform, "3C PLUS", linked with the NHSO, in 2027, and will train caregivers further as "Super CG" and community rehabilitation helpers.[^14] That is a news report; we found no specification.

## How these systems are bought

Public bodies buy and maintain systems under the Public Procurement and Supplies Administration Act B.E. 2560 (2017). Purchases up to 500,000 baht may use the specific method, a direct negotiation with one supplier.[^15] ACT Ai's open procurement data shows the Department of Health hiring maintenance of the 3C program and the Blue Book app for 480,000 baht a year in each of FY2021 to FY2024, by the specific method.[^16][^17] The full rules and more examples are in [How Thai public bodies buy software]({{< relref "/thailand/how-public-bodies-buy-software" >}}).

## Statistics

DOP publishes monthly dashboards of older people, drawing population counts from the Ministry of Interior's house registers.[^18] The Department of Health publishes yearly counts of caregivers registered in 3C as open data.[^19]

{{< analysis title="Tako-San's take" >}}
Tako-San's view: Thai care data is split by agency, and the split falls right across the care manager's desk: registration and payment in one system, care plans in another, approval on paper, and caregiver visits largely unrecorded at national level. The government systems are cheap to run, at least on the maintenance contracts we found, and 3C PLUS is meant to join two of them in 2027. A care-software vendor would have to work alongside these systems, not replace them, and the one part no national system covers today is the caregiver's visit record.
{{< /analysis >}}

## Changelog

- 11 Oct 2026: first published

---

## References

[^1]: Office of the Public Sector Development Commission, Government Information Center (info.go.th). "Applying for a health establishment business licence, elderly or dependent-person care type (การขออนุญาตประกอบกิจการสถานประกอบการเพื่อสุขภาพ ประเภทกิจการการดูแลผู้สูงอายุหรือผู้มีภาวะพึ่งพิง)," citizen's guide. https://info.go.th/procedure/95ffd337-23ac-48e2-84eb-04e6cea59253/view

[^2]: Department of Health Service Support. "DHSS tightens standards for producing health-service personnel (สบส. เข้มมาตรฐานการผลิตบุคลากรด้านบริการสุขภาพ)," 21 August 2023. https://hss.moph.go.th/show_topic.php?id=5714

[^3]: National Health Security Office. "Area-based long-term care system for dependent older people (LTC)," programme site, accessed 10 October 2026. https://ltcnew.nhso.go.th/

[^4]: Nong Tao Sub-district Administrative Organisation, Ban Mi district, Lop Buri. "Operating manual: using the long-term care programme for dependent older people and other dependent persons (LTC) (คู่มือการปฏิบัติงาน การใช้งานโปรแกรมการดูแลผู้สูงอายุที่มีภาวะพึ่งพิงและบุคคลอื่นที่มีภาวะพึ่งพิง (Long Term Care : LTC))," January 2024, including the NHSO's "LTC programme manual 2566" and its 2023 workflow chart. https://www.nongtaobanmi.go.th/wp-content/uploads/2024/01/6.%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%ADLTC2567%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%A1.pdf

[^5]: Songphon Khamnuengkiatwong, Department of Health. "The analysis and evaluation of program for care manager, caregiver registration and preparation of individual care plan (3C), Regional Health 8th Office (การวิเคราะห์และประเมินผลโปรแกรมการขึ้นทะเบียนผู้จัดการการดูแลผู้สูงอายุ, ผู้ดูแลผู้สูงอายุและการจัดทำแผนการดูแลผู้สูงอายุรายบุคคล (3C) เขตสุขภาพที่ 8)," research report on a 2020 survey in health region 8. Read in October 2026; the site refused connections when we tried to reopen it on 11 October 2026. https://eh.anamai.moph.go.th/th/cms-of-23/download/?did=211837&id=98939&reload=

[^6]: Department of Health Service Support. "Village health volunteer manual: 'Smart อสม.' and 'อสม. family doctor', FY2022 (คู่มือ อสม. "สมาร์ท อสม. และ อสม. หมอประจำบ้าน" ปีงบประมาณ ๒๕๖๕)," module 2 on the Smart อสม. app. https://hss.moph.go.th/HssDepartment/file_reference/202204251434510886.pdf

[^7]: Department of Older Persons. "4. Elderly health record book application (Blue Book Application) (4. แอปพลิเคชันสมุดบันทึกสุขภาพผู้สูงอายุ (Blue Book Application))," platform listing. Accessed 11 October 2026. https://www.dop.go.th/th/know/16/1026

[^8]: Hfocus. "Surin Hospital wins outstanding public-service award for seamless continuity of care (รพ.สุรินทร์ คว้ารางวัลเลิศรัฐระดับดีเด่น ดูแลผู้ป่วยต่อเนื่องอย่างไร้รอยต่อ)," 25 November 2018. https://www.hfocus.org/content/2018/11/16592

[^9]: Health Establishment Act B.E. 2559 (2016), Royal Gazette vol. 133, part 30 Kor, 31 March 2016, ss. 28, 29 and 35. https://hss.moph.go.th/HssDepartment/file_reference/20210505276357212.pdf

[^10]: Ministerial Regulation on standards of premises, safety and service in health establishments of the elderly or dependent-person care type B.E. 2563, Royal Gazette vol. 137, part 61 Kor, 31 July 2020, clause 6. https://download.asa.or.th/03media/04law/swfa/mr63-02.pdf

[^11]: Human Resources for Health Research and Development Office (สำนักงานวิจัยและพัฒนากำลังคนด้านสุขภาพ). "Care manager (CM) (ผู้จัดการการดูแล (care manager: CM))," LTC fact sheet 02, synthesised from its 2021 study of health-workforce management in long-term care during the pandemic; uploaded October 2024. https://hrpo.info/wp-content/uploads/2024/10/LTC_fact-sheet-02-CM.pdf

[^12]: Human Resources for Health Research and Development Office. "Care manager (CM) (ผู้จัดการการดูแล (care manager: CM))," LTC fact sheet 02, synthesised from the same 2021 study; uploaded October 2024. https://hrpo.info/wp-content/uploads/2024/10/LTC_fact-sheet-02-CM.pdf

[^13]: National Health Security Office. "Guideline on paying for public-health services for dependent people as wages for community caregivers under the government's economic-stimulus policy, FY2025 (แนวปฏิบัติการจ่ายค่าบริการสาธารณสุขสำหรับผู้ที่มีภาวะพึ่งพิง เพื่อเป็นค่าจ้างผู้ช่วยเหลือดูแลผู้ที่มีภาวะพึ่งพิงในชุมชน ตามนโยบายกระตุ้นเศรษฐกิจของรัฐบาล ปีงบประมาณ 2568)," enclosure 2 to a local-government letter posted on thawat.go.th, September 2025. https://www.thawat.go.th/fileupload/2025-09-034492121124.pdf

[^14]: Hfocus. "MOPH pushes Long Term Care system, highlights 135,000 caregivers (สธ.เดินหน้าระบบ Long Term Care ชู Caregiver 1.35 แสนคน ดูแลผู้สูงอายุ)," 10 October 2026. News report, not a primary source. https://www.hfocus.org/content/2026/10/39855

[^15]: Ministerial Regulation setting the amounts for procurement by the specific method, for procurement without a written agreement, and for appointing an inspector, B.E. 2560 (กฎกระทรวงกำหนดวงเงินการจัดซื้อจัดจ้างพัสดุโดยวิธีเฉพาะเจาะจง วงเงินการจัดซื้อจัดจ้างที่ไม่ทำข้อตกลงเป็นหนังสือ และวงเงินการจัดซื้อจัดจ้างในการแต่งตั้งผู้ตรวจรับพัสดุ พ.ศ. ๒๕๖๐), Royal Gazette vol. 134, part 86 Kor, p. 20, 23 August 2017, clauses 1, 2, 4 and 5. Council of State copy posted by the Ministry of Commerce legal office. Accessed 11 October 2026. https://legal.ops.moc.go.th/th/file/get/file/202203083084598b44958fc60240aa7f613910f4133422.pdf

[^16]: ACT Ai project record 63127057817, "Hire to maintain the program system for registering care managers, caregivers and individual care plans, Department of Health, FY2021 (จ้างบำรุงรักษาระบบโปรแกรมขึ้นทะเบียนผู้จัดการการดูแลผู้สูงอายุ (Care Manager), ผู้ดูแลผู้สูงอายุ (Caregiver) และจัดทำแผนการดูแลรายบุคคล (Care Plan) กรมอนามัย ประจำปีงบประมาณ 2564)," from e-GP data. Accessed 11 October 2026. https://procurement.actai.co/project/63127057817

[^17]: ACT Ai project record 66119017475, "Hire to maintain the Long Term Care 3C system and the Blue Book Application, Bureau of Elderly Health, FY2024 (จ้างบำรุงรักษาระบบข้อมูลบุคลากรการดูแลระยะยาวและแผนการดูแลรายบุคคล (Long Term Care 3C) และแอพลิเคชันสมุดบันทึกสุขภาพผู้สูงอายุ (Blue Book Application) สำนักอนามัยผู้สูงอายุ ประจำปีงบประมาณ 2567)," from e-GP data. Accessed 11 October 2026. https://procurement.actai.co/project/66119017475

[^18]: Department of Older Persons. "General data on older persons, statistics, September 2026 (ข้อมูลผู้สูงอายุทั่วไป สถิติผู้สูงอายุ กันยายน 2569)," page with embedded Looker Studio dashboard. https://www.dop.go.th/th/statistics_page?cat=1&id=2614

[^19]: Government Data Catalog. "Caregivers registered in the Long Term Care 3C program (ข้อมูล Caregiver ที่ขึ้นทะเบียนในโปรแกรม Long Term Care 3C)," Department of Health, Bureau of Elderly Health. https://gdcatalog.go.th/dataset/gdpublish-cg
