# Repair 08b — High School Health Federation Correction

This repair adapts Repair #8 to the new canonical architecture chosen after upload.

## Canonical source

`vervenveda/medicament-hub.github.io/academy/high-school-health/`

Medicament now owns the physical files and Mentor source authority for:

- High School Physical Education
- High School Health & Wellness
- supporting PE reader / teacher resources
- future health and human-performance expansion

Khaemenes High retains the academic relationship and student-facing route.

## Why this is better

It avoids:
- duplicate curriculum copies;
- conflicting Mentor ownership;
- stale parallel PE/Health portals;
- forcing Medicament specialist study back into the High School repository.

## Two-repository upload

Use the two subpackages included in the master ZIP:

1. `medicament-hub.github.io`
2. `Khaemenes_High.github.io`

Then run the Medicament normalization workflow once and add the High School script hook described in `HIGH_SCHOOL_INDEX_PATCH.txt`.
