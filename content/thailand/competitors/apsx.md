---
title: "APSX (APS Thailand): competitor profile"
date: 2026-10-11T00:00:00+07:00
lastmod: 2026-10-11T02:56:00+07:00
tags: ["thailand", "competitors", "apsx", "clinic-software", "nursing-homes", "software"]
summary: "APSX, a Khon Kaen-based cloud clinic platform from APS Thailand that also sells an elderly-care-centre edition: resident records, care plans, timed medication, monthly resident billing and LINE reports to families. Published annual prices (27,000, 54,000 and 135,000 baht, before VAT) are sized by branches and staff users, not residents. Several care features appear as paid add-ons in the clinic price table. Nothing on NHSO, 3C or DHSS."
categories: ["Competitors"]
weight: 5
countries: ["Thailand"]
---

*Last updated: 11 Oct 2026*

APSX is a cloud management platform for clinics, hospitals, spas, wellness centres and elderly-care centres, sold by APS Thailand.[^1][^2] Its elderly-care edition is one of several industry versions of the same clinic system, not a separate product.[^1] Among the vendors in this section, APSX is the one that publishes a full price table, and the only one whose prices are set by branches and staff users rather than residents or beds.[^1][^2]

## At a glance

| Item | What the sources say |
|---|---|
| Vendor | "APS Thailand", alternate name "APSX Platform", in the site's structured data. Address 888/8 Moo 13, Lao Na Di Road, Ban Pet sub-district, Khon Kaen 40000.[^1] The registered company name is not given on the pages we opened. |
| Product type | Cloud clinic platform with an elderly-care-centre edition[^1][^2] |
| Pricing model | Annual subscription per package, sized by branches and users per branch; residents unlimited[^1][^2] |
| Published price | Package N+ 27,000, B+ 54,000, PRO+ 135,000 baht a year, excluding 7% VAT[^1] |
| Add-ons | Priced "depending on usage"; ask on LINE[^1] |
| Customer claims | "Used by 1,000+ branches" across all business types (vendor's own figure, undated)[^1] |
| Mobile and LINE | Runs in a web browser; caregivers log care on a tablet; families follow through the centre's LINE Official Account[^2] |
| DHSS (สบส.) | Not mentioned on the pages we opened |
| NHSO LTC / 3C | Not mentioned on the pages we opened |
| API | A REST API is advertised for the platform[^1] |

## Pricing

APSX publishes three packages on its home page. Prices exclude 7% VAT and are billed for one year; the page's structured data marks each one as an annual price.[^1]

| Package | Price a year | Branches | Users per branch | File storage | Free card readers |
|---|---|---|---|---|---|
| N+ | 27,000 baht | 1 | 15 | 15 GB | 1 |
| B+ | 54,000 baht | 2 | 20 | 30 GB | 2 |
| PRO+ | 135,000 baht | 5 | 30 | Unlimited | 5 |

Source for the table: APSX home page, pricing table and structured data.[^1] All three include free data import and free training.[^1]

The elderly-care page says the number of residents is unlimited, and that packages are sized by branches and staff users only.[^2]

**Add-ons.** The home page's comparison table lists these as optional add-ons in every package, with pricing "depending on usage":[^1]

- drug-drug interaction alerts
- inpatient (IPD) admission
- patient-file management
- central warehouse
- AI face verification
- CRM and marketing (LINE, Facebook and Instagram)
- AI credit for chat and comment replies
- PACS and accounting-software links

The elderly-care page presents drug interaction alerts as part of the care-centre offer.[^2] The pages do not say whether the elderly-care edition includes any of these add-ons in its price. Buyers should ask for a written quote that names them.

## Main features

The elderly-care page lists six "key functions":[^2]

- **Resident registry and care plans.** Health history, chronic conditions, emergency contacts and individual care plans.
- **Daily nursing notes.** Vital signs, medication, meals, elimination and activities, with staff name and time.
- **Monthly resident accounts.** Daily charges accumulate and close into a monthly invoice and receipt, with receivables tracking.
- **Family reports.** Care summaries, photos and test results sent through LINE on a set schedule.
- **Rooms and beds.** Availability and room changes, with charges adjusted.
- **Staff and shifts.** Caregivers per shift, linked to time attendance and payroll.

It also mentions timed medication schedules, drug interaction alerts and per-resident drug stock.[^2]

**A typical day,** as the page describes it:[^2]

1. admit a resident, assess health, write the care plan and agree the monthly package with the family
2. caregivers log routines, medication and condition on a tablet
3. charges accumulate and care summaries go to the family through LINE
4. at month end, the system issues the invoice, records payment and issues the receipt

**FAQ answers on the same page:**[^2]

- families do not install an app; they add the centre's LINE Official Account
- visiting doctors can record examinations, diagnoses and prescriptions on the resident's history, using the platform's outpatient card
- day care is supported, charging only for days attended

**Platform features.** The wider platform adds queue and appointment management, lot-based stock, receipts and tax invoices, "E-Claim", payroll, two-factor sign-in, multi-branch access and a CRM with LINE, Messenger, Instagram and WhatsApp in one inbox.[^1] It advertises an option to "ask your clinic data with Claude (MCP)", an AI feature built on an outside AI model.[^1] It lists "controlled substance and narcotics regulatory reports" under medical compliance.[^1]

## Target customers

The home page lists hospitals, clinics of many kinds, spas, wellness centres, elderly-care centres and beauty businesses.[^1] The elderly-care page is aimed at centres and nursing homes that look after residents "long-term, not visiting patients", where a family member who is not on site pays a monthly bill.[^2]

## Scale

The only figure published is "Used by 1,000+ branches" for the whole platform, across all business types.[^1] There is no count of elderly-care customers.

## Standards, security and hosting

The vendor says the system and database run on Amazon Web Services with automatic backups.[^1] It describes PDPA consent records, role-based permissions, optional passkey sign-in and usage logs.[^1] It names two ISO standards, ISO 10781:2023 (the HL7 EHR-System Functional Model) and ISO/IEC 29110-5-1-2:2025, and says the system is "designed to align" with them. It does not claim certification.[^1] The home page also mentions "JCI/HL7 standards" for medical data.[^1]

## Reporting and integration with the state

- **DHSS (สบส.).** The pages we opened do not mention DHSS licensing standards or inspection records.
- **NHSO LTC programme and 3C.** Not mentioned.
- **Other.** "E-Claim" appears in the billing feature list, without saying which payer it serves.[^1]

## Company

The site gives "APS Thailand" as the organisation name, a Khon Kaen address, two telephone numbers and a Gmail contact address.[^1] We did not check a Department of Business Development record for this profile.

{{< analysis title="Tako-San's take" >}}
Tako-San's view: APSX shows how Thai clinic-software vendors approach elderly care. They take an existing outpatient and billing platform, add residents, routines and a monthly bill, and send updates to families through LINE. Its strongest point is the money side: daily charges that close into a monthly invoice the family can check, which is the pain point it names first. Its pricing is the opposite of the care start-ups. It charges per branch and per staff user, not per resident, so a large home with few staff pays the same as a small one. The weak points are the ones an elderly-care buyer would care about most. Inpatient admission and drug-interaction alerts appear as add-ons in the clinic price table, and nothing on the site addresses DHSS care-home standards or the NHSO and 3C systems. For anyone comparing care software in Thailand, APSX is a reminder that "nursing-home software" may be clinic software with a care page, and the price comparison should be done on a written quote that lists every add-on.
{{< /analysis >}}

## Not verified

- **Registered company name, founding date and capital.** Not on the site; not checked with DBD.
- **What the elderly-care edition includes.** Whether IPD admission and drug-interaction alerts are included or charged as add-ons.
- **Add-on prices.** Not published.
- **The "1,000+ branches" figure.** Vendor's own, undated, all business types.
- **"E-Claim" payer.** Which insurer or state scheme it connects to.

## Changelog

- 11 Oct 2026: first published

---

## References

[^1]: APS Thailand. "APSX Clinic Software | All-in-One, from ฿27,000/yr," English home page: package table (excluding VAT 7%), add-on list, feature groups, standards and security section, and embedded schema.org data (Organization with address; SoftwareApplication with three annual offers, unitCode ANN). Accessed 11 October 2026. https://www.apsth.com/en

[^2]: APS Thailand. "Elderly Care & Nursing Home Software | APSX," English elderly-care product page, with its FAQ and embedded schema.org data (AggregateOffer, THB 27,000–135,000, three offers). Accessed 11 October 2026. https://www.apsth.com/en/carecenter
