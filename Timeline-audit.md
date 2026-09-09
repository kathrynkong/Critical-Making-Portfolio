# Timeline page audit

Checked September 9, 2026. This report documents the Timeline.html repairs and design update.

## Link and media results

- All internal passage targets resolve. The 50 original content passages are retained, with two shared header/footer passages added.
- Nine Wikimedia thumbnail URLs returned HTTP 400. Their verified 1280px replacements returned HTTP 200.
- The old Legends of Localization Mario reference returned HTTP 404. Its current comparison URL returned HTTP 200.
- Fandom and Romhacking.net returned HTTP 403 to automated requests. This does not establish that they are dead. They are now direct links instead of embedded websites.
- The other original media URLs returned HTTP 200. A successful YouTube page response does not prove that every video can play in every region or browser. A direct watch link is provided below each video.

## Repairs and design

- Repaired a nested style tag in the Twine custom stylesheet and removed the stray opening bracket in the introduction.
- Added a responsive landing page, shared topic navigation, readable colors, page headings, focus outlines, and reduced-motion support.
- Preserved the Harlowe runtime and the original interconnected passage structure.
- Made images and video frames responsive and lazy-loaded, with descriptions, titles, and source links.
- Corrected the swapped Nintendo Switch and Oculus Rift images.
- Corrected the Fallout 4 passage spelling and all links to it, plus a handful of obvious typos.
- Converted full external website embeds to direct resource links.

## Verified replacement URLs

- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Atari-2600-Wood-4Sw-Set.png/1280px-Atari-2600-Wood-4Sw-Set.png
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Spacewar%21-PDP-1-20070512.jpg/1280px-Spacewar%21-PDP-1-20070512.jpg
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/1280px-SNES-Mod1-Console-Set.jpg
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nintendo-Famicom-Console-Set-FL.png/1280px-Nintendo-Famicom-Console-Set-FL.png
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PlayStation-SCPH-1000-with-Controller.jpg/1280px-PlayStation-SCPH-1000-with-Controller.jpg
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/1280px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Magnavox-Odyssey-Console-Set.jpg/1280px-Magnavox-Odyssey-Console-Set.jpg
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg/1280px-Sega-Mega-Drive-JP-Mk1-Console-Set.jpg
- HTTP 200: https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fairchild-Channel-F-System-II-Console.png/1280px-Fairchild-Channel-F-System-II-Console.png
- HTTP 200: https://legendsoflocalization.com/comparisons/super-mario-bros/

## Browser verification

- Desktop (1280 × 900) and mobile (390 × 844) layouts checked.
- Overview, localization, a historical passage, case studies, Mario, translation studies, and fan translation navigation exercised.
- Keyboard Enter activation verified on a case-study link.
- No Twine errors or broken-link elements in the checked passages; no horizontal page overflow in the measured views.
- The fan translation YouTube player loaded on mobile at 346px wide with a direct watch fallback.
- Static checks cover every internal passage link and every image/video accessibility attribute.

This was a functional and design audit, not a full fact-check of the research or a playback test of every video.
