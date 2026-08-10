# Repair 08 Validation

Date: 2026-08-09

## Source discovery

Verified in `vervenveda/medicament-hub.github.io/academy/`:
- High School Physical Education 42-week portal
- PE Teacher Guide
- Grade 9 study guide + quizzes
- Grade 10 study guide + quizzes
- Grade 11 study guide + quizzes
- Grade 12 study guide + quizzes

## Migration design

- source files are copied byte-for-byte by GitHub Actions;
- source repository is not deleted or modified by this package;
- Khaemenes High becomes the canonical academic home after live verification;
- PLERA PE reader is included directly from the user-supplied source file.

## New High School-owned assets

Physical Education:
- department landing
- Grade 9–12 hub pages
- PLERA reader
- 2024 standards crosswalk
- migration workflow

Health & Wellness:
- department landing
- four 18-week / 90-block Health Education courses
- Grade 9–12 machine-readable course maps
- privacy-protective assignment rule
- medical/high-stakes Mentor metadata

Electives:
- federated catalog
- machine-readable federation map
- source ownership retained by specialist repositories

High School:
- Mentor manifest v3
- root landing extension script

## Health course invariants

Each Health Education course:
- 18 weeks
- 90 lesson blocks
- all eight 2024 Health Education skill standards
- 80% mastery target
- localStorage progress
- no required disclosure of sensitive personal health information
- no diagnosis or individualized treatment

## Safety / privacy

PASS:
- no body-shape grading rule
- no required private medical disclosure
- no medical diagnosis/prescription function
- PE adaptation language included
- hazardous/emergency topics route students to trained/qualified help
- specialist medical content remains federated to Medicament

## Upload status

Package generation: PASS
- GitHub checkout action: v6
JSON parse: PASS
Health portal JavaScript syntax: PASS
Landing-extension JavaScript syntax: PASS
