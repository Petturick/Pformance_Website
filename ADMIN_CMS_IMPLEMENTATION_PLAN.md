# Pformance website beheer

De website bevat een eigen beheeromgeving op `/admin`.

## Inloggen

De beheeromgeving gebruikt Supabase Auth en is door database policies beperkt tot `hello@pformance.nl`.

De beheerder vraagt op `/admin` een beveiligde inloglink aan en opent die vanuit de mailbox.

## Pagina aanpassen

1. Open `/admin`.
2. Kies links de pagina.
3. Pas SEO, hero of een modulair blok aan.
4. Gebruik `Concept opslaan` om de wijziging nog niet live te zetten.
5. Gebruik `Publiceren` om de wijziging live te zetten.

## Modulaire blokken

Blokken kunnen worden geopend, verplaatst, gedupliceerd, tijdelijk verborgen en verwijderd. Nieuwe blokken kunnen worden toegevoegd uit de bestaande Pformance componenttypen.

Een verborgen blok blijft in het concept staan, maar wordt bij publicatie uit de live pagina gefilterd.

## Versiegeschiedenis

Bij iedere publicatie wordt de vorige live versie van die pagina automatisch opgeslagen. Via `Versiegeschiedenis` kan een oudere versie als concept worden teruggezet. Publiceren is daarna nog bewust een aparte stap.

## Media

Via `Media` kunnen afbeeldingen en PDF bestanden worden geüpload naar de Supabase bucket `cms-media`. De beheeromgeving geeft een publieke URL terug die in content kan worden gebruikt.

## Technische fallback

De website leest eerst gepubliceerde CMS content uit Supabase. Wanneer een pagina nog niet in het CMS staat of Supabase niet bereikbaar is, gebruikt de website automatisch de statische content uit `src/content/site.ts`.

## Rollback code

De versie vóór de CMS implementatie staat op branch `rollback/pre-cms-admin-2026-08-10`, commit `7ce89f99ccd2fbcda3bc2bfa2535433d0337afe8`.

## Supabase

Project: `Pformance_Website`

Project ref: `nztzosiwxzvstevqfdmc`

Database objecten:

`cms_published_pages`

`cms_drafts`

`cms_page_versions`

`cms_publish_page()`

`cms_restore_version()`

Storage bucket: `cms-media`
