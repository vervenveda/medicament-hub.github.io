ARSHIF Traditional Medicine Hall
A safety-first, evidence-aware learning portal for exploring world healing traditions with cultural respect.

ARSHIF Traditional Medicine Hall is a self-contained educational application built with vanilla HTML, CSS, and JavaScript. It introduces learners to the histories, languages, texts, philosophies, practices, materia medica, ethics, evidence questions, and living cultural contexts of traditional medicine systems around the world.

The portal is designed for historical, cultural, research, and health-literacy education. It does not diagnose illness, prescribe treatments, recommend dosages, teach medical procedures, or replace qualified medical care.

Project Snapshot
40 structured course modules
177 searchable dossiers
200 module-aligned quiz questions
60 external research and safety sources
40 module resource packs
21 glossary entries
10-part historical timeline
Seven research-studio tools
No frameworks, build tools, accounts, or server required
Local-first progress, notes, favorites, and custom research cards
Core Features
Guided Course
The course moves from foundational safety and cultural humility into historical systems, living traditions, materia medica, evidence literacy, care navigation, ethics, research methods, teaching, technology, and capstone work.

Each module includes:

Learning objectives
A focused lesson
A curated study-resource pack
Research questions
A learner activity
A capstone evidence task
A reflection prompt
A five-question mastery quiz
Traditions Atlas
The searchable atlas contains dossiers covering traditions, historical systems, practices, cultural concepts, materia medica, safety issues, research methods, and care-navigation topics.

Users can:

Search across titles, regions, cultures, eras, descriptions, and tags
Filter by category and tag
Open detailed dossiers
Save favorite entries
Add private notes to individual dossiers
Create custom research cards
Source Vault
The Source Vault links learners to public health, research, regulatory, conservation, cultural-heritage, and medical-reference resources. Included source families cover organizations and databases such as:

World Health Organization
National Center for Complementary and Integrative Health
U.S. Food and Drug Administration
National Institutes of Health Office of Dietary Supplements
MedlinePlus
PubMed and NCBI Bookshelf
Cochrane
World Intellectual Property Organization
Convention on Biological Diversity
IUCN Red List
Selected national regulators and professional directories
External websites can change after publication. Source links should be reviewed periodically.

Quiz Chamber
Every course module includes a five-question mastery quiz with an 80% mastery target.

The audited quiz system:

Requires an answer before advancing
Prevents repeated scoring of the same question
Preserves the current answer state when changing views
Randomizes answer order safely
Separates current-attempt results from best scores
Supports clean retakes
Tracks mastery independently for all 40 modules
Research Studio
The Research Studio generates structured, non-clinical templates for:

Safety scenario practice
Cultural-respect review
Practitioner interview preparation
Herb or supplement safety research
Comparative-system analysis
Classroom lesson planning
Custom dossier creation
These tools organize questions and research. They do not produce diagnoses, treatment plans, dosing instructions, or procedure guidance.

Local Progress and Notes
The portal saves the following information in the browser:

Completed modules
Quiz attempts and best scores
Course notes
Dossier notes
Favorites
Custom research cards
No account or external database is required. Data remains on the current browser and device unless the user exports it.

A built-in JSON download allows learners to preserve a copy of their notes and progress.

Safety Covenant
This project is for education only.

It does not diagnose, prescribe, dose herbs or supplements, teach procedures, or replace medical care. Learners should use qualified clinicians, pharmacists, licensed practitioners, emergency services, Poison Control, and appropriate community authorities for health decisions involving:

Emergencies or severe symptoms
Pregnancy or breastfeeding
Infants and children
Older adults or medically vulnerable people
Prescription or over-the-counter medications
Surgery
Cancer care
Chronic illness
Liver or kidney disease
Immune suppression
Mental-health crisis
Suspected poisoning, contamination, or adverse reactions
Historical use, cultural importance, biological plausibility, laboratory findings, and clinical evidence are not interchangeable. The portal encourages learners to distinguish among them.

Cultural Respect Principles
Traditional medicine is not a single universal system. Many traditions are living, community-governed bodies of knowledge connected to language, land, ancestry, spirituality, ecology, and sovereignty.

The portal encourages learners to:

Use nation-specific and community-led sources whenever possible
Distinguish public knowledge from sacred, closed, initiated, or protected knowledge
Avoid copying ceremonies or restricted practices
Avoid turning historical remedies into medical instructions
Recognize colonial disruption, extraction, biopiracy, and mistranslation
Credit knowledge holders and original communities
Ask who has authority to teach, interpret, publish, or commercialize knowledge
Treat comparison as careful study rather than flattening distinct systems into equivalents
Technology
The application is intentionally simple and portable.

Layer	Implementation
Structure	HTML5
Design	Scoped CSS
Logic	Vanilla JavaScript
Persistence	Browser localStorage
Export	Browser-generated JSON file
Dependencies	None
Build process	None
Hosting requirement	Any static host
All application styles and data are contained in one HTML file. The interface is scoped beneath the #arshif-tradmed root element to reduce conflicts when embedded in a larger page.

Getting Started
Run Locally
Download arshif-traditional-medicine-hall-v2.1-audited.html.
Open the file in a modern web browser.
Begin with Module 1: Orientation.
No installation, package manager, terminal command, or internet connection is required for the application itself. Internet access is needed only when opening external research links.

Add to a Website
The file can be uploaded directly to most static hosts, including GitHub Pages.

For a dedicated GitHub Pages repository:

Rename the audited HTML file to index.html.
Place index.html and this README.md in the repository root.
Open the repository’s Settings.
Select Pages.
Publish from the desired branch and root folder.
For a subpage within an existing website, keep a descriptive filename such as:

traditional-medicine-hall.html
Then link to it from the main site navigation.

Recommended Repository Structure
arshif-traditional-medicine-hall/
├── index.html
├── README.md
├── LICENSE.md
├── THIRD_PARTY_NOTICES.md
└── CHANGELOG.md
The application does not require additional assets, scripts, stylesheets, fonts, or data files.

Privacy and Data Ownership
The portal does not include analytics, advertising, trackers, user accounts, cookies, or remote storage.

Learning data is stored locally under the browser key:

arshif_traditional_medicine_v2_state
Important limitations:

Clearing browser data may erase saved progress.
Private or incognito sessions may not retain data.
Progress does not automatically synchronize across devices.
Anyone with access to the same browser profile may be able to view locally saved notes.
Exported JSON files may contain private notes and should be stored carefully.
The application’s storage routines include safeguards for unavailable or corrupted local-storage data, but users should still export important work regularly.

Accessibility and Responsive Design
The interface includes:

Responsive desktop and mobile layouts
Keyboard-accessible native controls
Visible section navigation
Semantic headings and form elements
High-contrast text and controls
Printable progress views
Escape-key support for closing dossiers
Focus placement when a dossier opens
Touch and mouse support for the movable dossier window
Accessibility can continue to be strengthened through formal screen-reader testing, expanded focus trapping, reduced-motion preferences, and automated WCAG review.

Audited v2.1 Improvements
The audited release includes corrections and hardening for:

Quiz scoring and question progression
Answer-state preservation
Randomized answer presentation
Retake and mastery calculations
Migration of previously saved quiz data
Corrupted or unavailable browser storage
Invalid saved module references
Stable custom-dossier identifiers
Notes-download compatibility
Dossier-window positioning and keyboard closing
Safer external-link behavior
Broken, redirected, or outdated source destinations
Module, quiz, dossier, and source-reference integrity
The audited file was checked for JavaScript syntax, initialization behavior, duplicate element IDs, quiz-answer indexes, five-question module coverage, source-key integrity, and HTTPS source URLs.

Content Maintenance
Because this project addresses living traditions, health information, laws, professional credentials, product regulation, and external sources, its content should be reviewed on a regular schedule.

A maintenance review should include:

Checking every external link
Reviewing medical and emergency wording
Confirming regulatory and professional-directory information
Updating source notes and publication dates
Reviewing cultural descriptions with community-led sources
Checking taxonomy, spelling, transliteration, and diacritics
Testing quizzes after content changes
Exporting and restoring saved progress during browser testing
Testing on desktop, tablet, and mobile browsers
Known Limitations
The portal is not a learning-management system.
Progress is stored per browser rather than per named student.
There is no automatic cross-device synchronization.
There is no administrator dashboard or remote backup.
External content is controlled by third-party organizations.
The portal cannot determine whether a practitioner, product, source, or medical claim is appropriate for a particular person.
The atlas is broad but not exhaustive and should not be treated as the final authority on any living tradition.
Contributing
Contributions should preserve the project’s safety-first and culturally respectful design.

Before proposing a change:

Verify factual claims with reliable sources.
Prefer primary, official, community-led, or peer-reviewed material.
Avoid diagnosis, dosage, treatment, or procedural instructions.
Identify uncertainty and conflicting evidence clearly.
Preserve the distinction between historical description and modern medical guidance.
Respect closed, sacred, initiated, and protected knowledge.
Check all new URLs and use HTTPS whenever available.
Add or update module-aligned quiz questions when lesson content changes.
Test local storage, exports, filters, dossiers, and quiz progression.
Please do not submit commercial cure claims, unsupported health promises, copied sacred material, unsafe recipes, or instructions for self-treatment.

Suggested Future Enhancements
Potential future releases may add:

Student profiles with optional local-only separation
Import and restore for exported progress files
Searchable source categories
Source-review dates and archived-link fallbacks
Instructor mode and printable lesson packets
Expanded screen-reader support
Reduced-motion settings
Language and transliteration guides
Community-review and contributor-attribution fields
Versioned content updates separated from the application shell
Optional offline caching as a Progressive Web App
Disclaimer
The information presented in this project is provided for general educational and research purposes only. It is not medical advice and should not be used to diagnose, treat, cure, or prevent any disease or health condition.

The inclusion of a tradition, practice, product category, organization, database, professional directory, or external link does not constitute endorsement. Regulations, evidence, clinical guidance, URLs, and organizational policies may change.

In an emergency, contact local emergency services. In the United States, call 911 for an emergency and contact Poison Control at 1-800-222-1222 for suspected poisoning or exposure. Users outside the United States should contact the appropriate services in their jurisdiction.

License
See LICENSE.md for the terms governing use, copying, modification, redistribution, and derivative works.

When no license is included, copyright law applies by default and no permission to copy, modify, or redistribute the project should be assumed.

Third-party names, marks, publications, databases, and linked resources remain the property of their respective owners. See THIRD_PARTY_NOTICES.md when provided.

Project Identity
ARSHIF Traditional Medicine Hall
Safety-first world healing traditions atlas
Vanilla HTML, CSS, and JavaScript
Local-first and self-contained
