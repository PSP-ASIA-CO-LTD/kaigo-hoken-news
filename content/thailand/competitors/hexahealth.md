---
title: "HexaHealth (elderly-care module): competitor profile"
date: 2026-10-11T00:00:00+07:00
lastmod: 2026-10-11T09:00:00+07:00
tags: ["thailand", "competitors", "hexahealth", "clinic-software", "nursing-homes", "software"]
summary: "HexaHealth, a Thai cloud clinic-and-hospital platform that also sells an elderly-care module for nursing homes, day care and home care: its bed-based price tiers (which contradict each other on the same page), its 16 care modules, its claims-and-API plans, its use of a US AI service, and what it says about DHSS and NHSO. Not to be confused with the Indian company of the same name."
categories: ["Competitors"]
weight: 3
countries: ["Thailand"]
---

*Last updated: 11 Oct 2026*

HexaHealth (hexahealths.app) is a Thai cloud platform for clinics, hospitals, wellness businesses and elderly-care centres.[^1] Its elderly-care product is one module of a wider clinic system, not a stand-alone care product. The elderly-care page describes "16 modules from Care Plan to Family App" for nursing homes, day care, home care, memory care, hospice and senior living.[^2]

**Name check.** An unrelated Indian company, Vianam Healthtech Private Limited, trades as HexaHealth (hexahealth.com). It is a hospital and surgery-booking platform based in Gurgaon.[^3] Funding and staff figures found under "HexaHealth" in business databases may belong to the Indian firm. Nothing on this page refers to it.

## At a glance

| Item | What the sources say |
|---|---|
| Vendor | "HexaHealth Co., Ltd.", บริษัท HexaHealth จำกัด, per its privacy policy (effective 1 May 2026)[^4]. Not found in DBD-derived records (see Company). |
| Product type | Elderly-care module within a cloud clinic and hospital platform[^1][^2] |
| Published price | Bed-based tiers: Free (up to 5 beds), 1,990 (Care Starter), 3,490 and 5,900 baht (Care Pro). The same page also says "from 5,000 THB/month for 20 residents". The tiers contradict each other: see Pricing.[^2] |
| Customer claims | No customer count or customer names on the pages we opened |
| DHSS (สบส.) | Not mentioned on the elderly-care page[^2] |
| NHSO | Platform-wide claims module with an NHSO (gold card) payer setting. An NHSO EDI link is "on the development plan". This is for clinic claims, not the NHSO LTC fund.[^1] |
| API | REST API and webhooks. HL7 FHIR R4 "on the development plan". An API is listed in the top elderly tier.[^1][^2] |
| Hosting and AI | Patient data in AWS Bangkok. An AI assistant uses Anthropic's Claude with zero data retention, and data is anonymised before it is sent to the US.[^4] |

## Pricing

The elderly-care page shows four tiers by bed count.[^2] The extracted page text does not say whether prices are per month. The surrounding copy suggests they are.

| Tier | Price shown | Beds | Adds |
|---|---|---|---|
| Free | 0 | up to 5 | Resident records, daily care log (ADL, mood, sleep), basic room map, unlimited caregivers |
| Care Starter | 1,990 baht | up to 15 | Intake/output and medication records (MAR), fall and pressure-ulcer risk, daily LINE report to family |
| ("Plus", inferred: Care Pro is "Everything in Plus") | 3,490 baht | 16–30 | ADL and health trend charts, activities, nutrition, visit log, full family app with video call, centre dashboard |
| Care Pro | 5,900 baht | 31–50 | Multiple buildings and zones, custom roles, branded reports and API |

**Unverified: contradictory pricing.** On the same page:[^2]

- The headline says pricing is "per resident — from 5,000 THB/month for 20 residents". On the tier table, 20 beds falls in the 3,490 baht tier.
- The table itself is priced by bed band, not per resident.
- The page's FAQ answer describes a different free plan ("1 branch / 3 users / 100 patients per month… appointments, OPD, prescriptions, receipts"). That is the clinic plan from the main pricing page.[^1]

We cannot tell which figure a nursing home would actually pay. Ask the vendor for a written quote before comparing prices.

## Main features

From the elderly-care page:[^2]

- **Care plan.** An individual plan built from chronic conditions, ADL level and rehabilitation goals. The page lists:
  - ADL assessment with the Barthel Index
  - an ICF-standard care plan
  - multi-disciplinary team notes
  - monthly or quarterly reviews
  - fall, pressure and nutrition risk assessments
  - family consent and a care agreement
- **Daily care log at the bedside.** Tablet or phone entry, photo and audio notes, Thai voice-to-text, a shift hand-over checklist, an automatic daily summary to the family and a full audit trail.
- **Medication.** MAR with reminders, barcode scanning before each dose, drug-interaction and allergy alerts, as-needed (PRN) tracking, stock alerts and remote pharmacist review. The vendor claims this "cuts medication errors by 90%+". The page cites no study.
- **Family app and video visits.** Daily photo updates, vital-sign trends, care plan and doctor notes, video calls, online bill payment and chat with the care team.
- **Add-ons.**
  - fall and incident logs
  - emergency alerts (nurse call, wearable SOS, geofence)
  - vital-sign device links
  - doctor tele-visits
  - diet and nutrition, activity programmes, wound care, a wellbeing score
- **Service types.** The page names nursing homes, day care, home care, memory care, hospice and senior living.
- **Data import.** Upload of existing Excel or CSV files with field mapping and per-batch rollback.

Because the elderly module sits on a clinic platform, the same account can also use the clinic features. These include outpatient records, pharmacy, lab and X-ray, telemedicine, LINE OA messaging and e-tax invoices.[^1]

## Target customers

The page says the product is for elderly-care centres "of every size". The tier table stops at 50 beds, with larger needs handled by the platform's custom hospital plan.[^1][^2] The page names no customers. The site's main audience is clinics and hospitals, and much of the copy addresses clinics ("Why leading clinics choose HexaHealth").[^1][^2]

## Company

- The privacy policy names the data controller as "บริษัท HexaHealth จำกัด" (HexaHealth Co., Ltd.). It is effective 1 May 2026 and was last updated 10 May 2026.[^4] A registered Thai company name would normally be written in Thai script. We found no company of this name in the DBD-derived search results we checked. We could not open DBD DataWarehouse directly because its search requires a sign-in.
- The policy says patient data is held in AWS's Bangkok data centre. It says the AI assistant uses Anthropic's Claude with zero data retention, with names and ID numbers removed first, and that only that anonymised inference goes to the US.[^4]
- The policy and home page also claim ISO 27001 certification, AES-256 encryption, tenant-separated databases and annual penetration tests.[^1][^4] These are vendor claims. We did not find a certificate.
- The policy's 2026 dates suggest the product, or at least this version of the site, is recent.[^4] The founding date and owners are not stated.

## Reporting and integration: DHSS, NHSO and 3C

- **DHSS (สบส.).** The elderly-care page does not mention DHSS licensing standards or inspection records.[^2]
- **NHSO.** The platform has a claims module with a payer setting for "Gold Card 30 baht (NHSO / สปสช.)". It also covers the Social Security Office and civil-servant schemes. It prepares and exports claim data as JSON or CSV. A direct "EDI สปสช." link is "on the development plan".[^1] This is hospital and clinic claims under NHSO's medical schemes. It is not the NHSO community LTC fund for dependent older people.
- **3C.** Not mentioned.
- **Standards.** The platform advertises a REST API and webhooks, with HL7 FHIR R4 "on the development plan". A "FHIR R4 API" and custom HIS/LIS integration are listed for the hospital plan.[^1] The top elderly tier includes "API".[^2]

{{< analysis title="Tako-San's take" >}}
Tako-San's view: HexaHealth shows the second route into Thai nursing homes. Clinic-software vendors are adding an elderly-care module to a platform they already sell (APSX and MCS are doing the same). Its feature list is broad, and the free tier for homes of up to five beds is aggressive. On paper it is close to what a Japanese facility system offers: Barthel ADL, ICF care plans, barcode MAR, family video. What a buyer cannot yet trust is the price, because the page contradicts itself, and the company, which we could not find in registry data. A buyer should also check its use of a US AI service for care notes against their own data rules. Like the other private vendors, it says nothing about DHSS inspection records or the NHSO LTC fund. Its NHSO features are for clinic claims. For a care-software company, the lesson is that "per bed, free under five beds" is now a published benchmark in this market.
{{< /analysis >}}

## Not verified

- **Actual price for a given home.** The tiers, the "5,000 THB for 20 residents" line and the FAQ disagree.
- **Billing period** of the tier prices (monthly is likely but not shown in the text we extracted).
- **Registered company, founding date and owners.**
- **ISO 27001 certificate** and the "90%+" medication-error claim.
- **Customers and scale.** None published.

## Changelog

- 11 Oct 2026: first published

---

## References

[^1]: HexaHealth. "HexaHealth — All-in-one healthcare platform for clinics and hospitals," home page (modules, clinic pricing, FAQ, security and API statements, claims module text). Accessed 11 October 2026. https://hexahealths.app/

[^2]: HexaHealth. "Elderly Care Software — HexaHealth | Long-term Care Cloud Platform," elderly-care product page (modules, tiers, FAQ). Accessed 11 October 2026. https://hexahealths.app/elderly

[^3]: Vianam Healthtech Private Limited. "HexaHealth - The Next Generation Hospital," home page, India (address in Gurgaon, Haryana). Accessed 11 October 2026. https://www.hexahealth.com/

[^4]: HexaHealth. "Privacy Policy (นโยบายความเป็นส่วนตัว)," effective 1 May 2026, last updated 10 May 2026. Accessed 11 October 2026. https://hexahealths.app/privacy
