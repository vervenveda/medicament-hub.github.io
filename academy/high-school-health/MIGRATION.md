# Repair 08 — PE Migration Instructions

## Goal

Move the existing High School PE curriculum out of `medicament-hub.github.io/academy/` and make `Khaemenes_High.github.io/courses/physical-education/` its canonical academic home.

## Why a workflow is included

The source PE files are large, working, and already contain localStorage logic, quizzes, final/certificate behavior, and teacher/student tooling.

Rather than manually copying and potentially altering them, the included workflow checks out both public repositories and copies the source files byte-for-byte.

## Step 1 — Upload this Repair 08 package

Upload the package structure into:

`vervenveda/Khaemenes_High.github.io`

The migration workflow file is:

`.github/workflows/migrate-pe-from-medicament.yml`

## Step 2 — Run the migration once

In GitHub:

1. Open the `Khaemenes_High.github.io` repository.
2. Open **Actions**.
3. Select **Migrate High School PE from Medicament**.
4. Choose **Run workflow**.
5. Allow it to complete.

The action copies and commits:

- `academy/High_School_Physical_Education_42week_index.html`
  → `courses/physical-education/core/42-week-portal.html`
- `academy/PE_Teacher_Guide_index.html`
  → `courses/physical-education/teacher-guide/index.html`
- each `PE_grade_9..12` study guide and quiz center
  → `courses/physical-education/grade-09..12/`

The PLERA reader is already included directly in the Repair 08 ZIP.

## Step 3 — Activate the High School landing page

Immediately before `</body>` in the existing High School root `index.html`, add:

```html
<script src="./data/repair08-pathways.js"></script>
```

Do not remove or replace the existing page script.

## Step 4 — Verify

Expected live routes:

- `/courses/physical-education/`
- `/courses/physical-education/core/42-week-portal.html`
- `/courses/physical-education/teacher-guide/`
- `/courses/physical-education/reader/`
- `/courses/physical-education/grade-09/`
- `/courses/physical-education/grade-10/`
- `/courses/physical-education/grade-11/`
- `/courses/physical-education/grade-12/`
- `/courses/health-wellness/`
- `/courses/health-wellness/grade-09/`
- `/courses/health-wellness/grade-10/`
- `/courses/health-wellness/grade-11/`
- `/courses/health-wellness/grade-12/`
- `/courses/electives/`

## Source retirement

Do **not** delete the Medicament academy files during this repair.

First verify the High School copies, links, quizzes, study guides, teacher guide, reader, and progress behavior.

After verification, Medicament can replace its old academy links with redirects or archival notices during a later specialist-repository cleanup.

## Workflow dependency

The migration workflow uses the current official `actions/checkout@v6` action.
