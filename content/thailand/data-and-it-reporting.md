---
title: "Data and IT reporting in Thai elderly care"
date: 2026-10-10T00:00:00+07:00
lastmod: 2026-10-10T20:30:00+07:00
tags: ["thailand", "long-term-care", "data", "it", "reporting", "nhso", "guide"]
summary: "The government systems that Thai elderly-care providers and caregivers deal with: DHSS's online licensing and registration system (esta), the records the care-home standards require, school reporting to DHSS, the NHSO LTC programme for care plans and caregiver pay, the Department of Health's Long Term Care 3C program, and DOP's statistics dashboards."
categories: ["Guides"]
weight: 5
countries: ["Thailand"]
---

*Last updated: 10 Oct 2026*

We found no single national data standard for elderly care in Thailand like Japan's LIFE or its care-claims format. Each agency runs its own system: DHSS for licensing private care homes and registering their staff, the NHSO for the community long-term care money, the Department of Health for community caregivers, and DOP for statistics. This guide lists what each system does, based on the agencies' own pages.

## DHSS: the esta licensing system

DHSS runs the Elderly or Dependent-Person Care Business System, ระบบกิจการดูแลผู้สูงอายุหรือผู้มีภาวะพึ่งพิง (rabop kitchakan dulae phu sung-ayu rue phu mi phawa phuengphing), at esta.hss.moph.go.th.[^1]

| Function | What the sources say | Source |
|---|---|---|
| Account | The applicant registers a username and password; the system approves the account automatically | [^1] |
| Application | Form สพส.1 and supporting documents are filed and attached online. The citizen guide says applications for this business type must be made electronically only | [^1] |
| Processing | Officials confirm receipt and request missing items in the system, and book the on-site assessment through it | [^1] |
| Licence | The applicant checks the result and prints the licence and the annual-fee receipt from the system | [^1] |
| Public search | Pages to check licensed establishments and institutions with accredited courses | [^2] |

We could not open esta.hss.moph.go.th from our network on 10 October 2026. The connection was refused at the encryption step. The table above is based on the government citizen guide,[^1] and the page titles on search-index results.[^2]

## Records a licensed care home must keep

The Act and the 2020 standards regulation require these records. We found nothing in either text that requires the records to be electronic, or to be sent to DHSS routinely.

| Record | Rule | Source |
|---|---|---|
| Register of operators and caregivers | Licensee duty, s. 28(3) | [^3] |
| Basic health data and screening of each client | Operator duty, s. 29(3) | [^3] |
| Client history register | In the form set by the Director-General of DHSS, standards cl. 6(1) | [^4] |
| Assessment of care needs and communication | On admission, then every three months, cl. 6(2) | [^4] |
| Record of changes in each client's health | cl. 6(8) | [^4] |
| Written service contract | With the client or representative, cl. 6(10) | [^4] |
| Confidentiality | Client data not disclosed to outsiders, to the same standard as patient rights, cl. 6(11)(e) | [^4] |

Officials may inspect documents during visits.[^3] We did not find the Director-General's form for the client history register.

## Schools: reporting graduates to DHSS

Institutions with DHSS-accredited courses must send DHSS their teaching plan or timetable before each course, send the list of graduates after each cohort, and enter the data in the DHSS system. DHSS uses the data when it registers caregivers. In August 2023 it held a workshop for institutions on entering data in the database.[^5]

## NHSO: the LTC programme

The NHSO runs a web programme for the community long-term care scheme at ltcnew.nhso.go.th.[^6] On 10 October 2026 the site showed:

- **Payment logic.** The FY2024 rule that pays 10,442 baht per dependent person per year against an approved individual care plan, to service units or local governments.[^6]
- **Data-entry windows.** A notice that the recording period is "1 to 15 September 2026 only", next to a survey of caregivers whom local governments want to keep paying.[^6]
- **Reports.** Regional summary tables, as of 10 October 2026, with an "Export Excel (.csv)" link.[^6]
- **Recent changes.** The programme now lets users edit an agreement's start date and each person's approved amount, and it removes ineligible people: those without Universal Coverage rights, and those who have died.[^6]
- **Manuals.** Separate manuals for service units and for local governments' dependent-elderly funds, a manual for editing projects already paid, and a manual for logging in with ThaiID and switching between users.[^6]

Approved projects that have not received money from NHSO are told to contact the NHSO regional office.[^6]

## Department of Health: the Long Term Care 3C program

The Department of Health, กรมอนามัย (Krom Anamai), runs the "Long Term Care 3C" program. Its open-data record, "Caregivers registered in the Long Term Care 3C program", gives counts of registered caregivers by health region and province. It is updated once a year and the data start in 2021. The record names the program as the data source and links ltc.anamai.moph.go.th.[^7] On 10 October 2026, Hfocus reported the Department's Director-General as saying the Department will build an online platform, "3C PLUS", linked with the NHSO, in 2027.[^8] That is a news report. We did not find a Department of Health document on 3C PLUS.

## DOP: statistics dashboards

DOP publishes monthly statistics on older people as embedded Looker Studio dashboards on its website. The September 2026 dashboard draws its population counts from the Department of Provincial Administration (Ministry of Interior), as of 30 September 2026.[^9] Other pages cover ADL assessments and the welfare centres. See [Ageing and market statistics]({{< relref "ageing-and-market-statistics" >}}).[^9]

{{< analysis title="Tako-San's take" >}}
Tako-San's view: the Thai data picture is a set of separate systems, each with its own login (DHSS esta, NHSO LTC with ThaiID, Department of Health 3C), and none of the agency pages we opened gives a public interface for software. For a private care home, the legal duty is to keep records, not to send them, so a care-record product sells on inspection readiness and family reporting, not on claims. For community care, the planned 3C PLUS link with the NHSO in 2027 is the event to watch. If it creates a data exchange for care plans and visits, vendors that serve local governments and service units could connect to it. Before building anything, ask the NHSO and the Department of Health whether outside software will be allowed to connect.
{{< /analysis >}}

## Not verified

- **Electronic-only filing outside Bangkok.** The citizen guide's step-by-step section is headed for Bangkok. We did not confirm that provincial applications are online-only too.
- **esta functions.** Not checked first-hand, because the site refused our connection.

## Changelog

- 10 Oct 2026: first published

---

## References

[^1]: Office of the Public Sector Development Commission, Government Information Center (info.go.th). "Applying for a health establishment business licence, elderly or dependent-person care type (การขออนุญาตประกอบกิจการสถานประกอบการเพื่อสุขภาพ ประเภทกิจการการดูแลผู้สูงอายุหรือผู้มีภาวะพึ่งพิง)," citizen's guide. https://info.go.th/procedure/95ffd337-23ac-48e2-84eb-04e6cea59253/view

[^2]: Department of Health Service Support. Elderly or Dependent-Person Care Business System, pages "check licensed establishments" and "check institutions with accredited courses." https://esta.hss.moph.go.th/check-shops.php and https://esta.hss.moph.go.th/check-school.php (titles from the search index; the site refused our connection on 10 October 2026)

[^3]: Health Establishment Act B.E. 2559 (2016), Royal Gazette vol. 133, part 30 Kor, 31 March 2016, ss. 28, 29 and 35. https://hss.moph.go.th/HssDepartment/file_reference/20210505276357212.pdf

[^4]: Ministerial Regulation on standards of premises, safety and service in health establishments of the elderly or dependent-person care type B.E. 2563, Royal Gazette vol. 137, part 61 Kor, 31 July 2020, clause 6. https://download.asa.or.th/03media/04law/swfa/mr63-02.pdf

[^5]: Department of Health Service Support. "DHSS tightens standards for producing health-service personnel (สบส. เข้มมาตรฐานการผลิตบุคลากรด้านบริการสุขภาพ)," 21 August 2023. https://hss.moph.go.th/show_topic.php?id=5714

[^6]: National Health Security Office. "Area-based long-term care system for dependent older people (LTC)," programme site, accessed 10 October 2026. https://ltcnew.nhso.go.th/

[^7]: Government Data Catalog. "Caregivers registered in the Long Term Care 3C program (ข้อมูล Caregiver ที่ขึ้นทะเบียนในโปรแกรม Long Term Care 3C)," Department of Health, Bureau of Elderly Health. https://gdcatalog.go.th/dataset/gdpublish-cg

[^8]: Hfocus. "MOPH pushes Long Term Care system, highlights 135,000 caregivers (สธ.เดินหน้าระบบ Long Term Care ชู Caregiver 1.35 แสนคน ดูแลผู้สูงอายุ)," 10 October 2026. News report, not a primary source. https://www.hfocus.org/content/2026/10/39855

[^9]: Department of Older Persons. "General data on older persons, statistics, September 2026 (ข้อมูลผู้สูงอายุทั่วไป สถิติผู้สูงอายุ กันยายน 2569)," page with embedded Looker Studio dashboard. https://www.dop.go.th/th/statistics_page?cat=1&id=2614
