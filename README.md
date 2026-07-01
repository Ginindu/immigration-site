# Apex-Trust-Ardent Immigration Web Application

A modern, responsive, and interactive client-side web application developed for **Apex-Trust-Ardent Immigration Inc** as part of the IT1308 Web Application Development assessment.

---

## 1. Assignment Metadata
*   **Qualification:** BSc (Hons) in IT / Artificial Intelligence / Cyber Security / Data Science
*   **Module Name & Title:** IT1308 Web Application Development
*   **Assessor:** Ms. Thisakya Gunathilaka
*   **Weighting:** 50% Web Project

---

## 2. Project Description
Apex-Trust-Ardent Immigration Inc is a leading Canadian-based consultancy firm with a global presence. This client-side platform presents the company's core services, showcases active visa promotions, provides a multi-step consultation booking tool, lists current career openings with an interactive CV submission form, and features automated helper widgets.

---

## 3. Features Implemented

### Core Features (Front-End)
*   **Categorized Service Presentation:** Structured pages for Canada Immigration (Express Entry, PNPs, permits), Other Countries (Australia, NZ, UK, US, Europe), and Legal Services (appeals, refusals, refugee law).
*   **Announcements & Promotions Feed:** Front-page alerts highlighting government free-of-charge visas to selected quick visa countries, and 70% scholarship promotions for after-A/L students, trained nurses, and MSc/PhD streams.
*   **Visa Pathway Finder (Recommendation Tool):** An interactive multi-step wizard on the home page that dynamically asks users for their target goals and qualifications, outputting a personalized service recommendation and direct link.
*   **Rule-Based AI Chatbot:** A fully interactive chatbot capable of handling user queries about visa categories, office hours, legal services, promotions, and 70% scholarships based on assignment rules.
*   **Interactive CV Submission & Careers:** 3 professional job role cards linked to an application form that auto-fills selected positions and triggers validation.
*   **Dark/Light Mode Toggle:** Persistent theme settings across all pages, saving the user's preference in `localStorage`.
*   **Official Resources Footer:** Links to trusted government entities (Department of Immigration SL, Ministry of Foreign Affairs SL, and SL Tourism Authority).
*   **Interactive Maps:** Embedded responsive Google Maps iframe locators for the Kollupitiya (Colombo), Galle, and Atlantic Canada offices.
*   **Modern UI Widgets:** Floated scroll-to-top button and search modal keywords scrolling dismiss handler.

---

## 4. Design & Assets Directory Structure
All required design artifacts are located under the `/design` folder:
*   **Sitemap**: Visual diagrams mapping page hierarchy and flows located at `design/sitemap/` in both PNG and editable SVG format.
*   **Wireframes**: 8 editable grayscale vector wireframes (homepage and subpages) compatible with Figma and Sketch, located in the `design/` folder.
*   **Sketch Template**: A double-clickable empty template document `design/wireframes.sketch` built to standard Sketch JSON schemas.
*   **Storyboard & Color Guide**: Located at `design/storyboard_and_color_guide.md` specifying light/dark hex colors, font pairings, and user journey flowcharts.
*   **Assets Folder**: Unified assets directory (`/assets`) containing all images, icons, and logos.

---

## 5. How to Run the Project
Since this is a client-side web application built using HTML5, CSS3, Javascript, and Bootstrap:
1.  Navigate to the project root directory.
2.  Double-click the entry-point **`index.html`** file in your local file browser (this will trigger an automatic redirect to `pages/index.html`).
3.  Alternatively, open the project folder in an editor (like VS Code) and run it using the **Live Server** extension to preview the responsive transitions, forms, and theme states.
