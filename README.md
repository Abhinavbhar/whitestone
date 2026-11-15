# White Stone Immigration Pathways: Next.js site

Single-page lead-generation site. Next.js (App Router) + TypeScript + Tailwind + Lucide + Tally. No backend, no database, no secrets.

## 1. Install
    npm install
## 2. Run locally
    npm run dev      # http://localhost:3000
    npm run build    # production check
## 3. Replace the logo
`public/logo.svg` is a **placeholder**. Drop in your real globe-and-airplane logo (same filename, or use `.png` and update the 4 `src="/logo.svg"` references plus `icons` in `app/layout.tsx`).

## 4. Create the Tally form (one form for everything)
Sign in at tally.so, create a form with these fields:
1. Full Name: Short answer, required
2. Email Address: Email, required
3. Phone Number: Phone number, required (default country India +91)
4. What service are you interested in?: Dropdown, required: Study Visa, Tourist Visa, Visitor Visa, IELTS Coaching, PTE Coaching, Other
5. Have you applied for a visa before?: Multiple choice (Yes / No)
6. Previous Visa Application Details: Long answer, optional. Add **conditional logic**: show only if field 5 is "Yes". Helper text: country applied to, type of visa, outcome (Approved / Rejected / Pending), other details
7. Additional Information: Long answer, optional, placeholder "Tell us more about your travel or study plans..."
8. Consent: Checkbox, required: "I agree to be contacted by White Stone Immigration Pathways regarding my enquiry."

Button text: **Submit Enquiry**. Under *Thank-you page*, write a clean confirmation message.

## 5. Embed it
Copy the form ID (the code in `tally.so/r/XXXXXX`). Open `lib/site.ts` and set `tallyFormId: "XXXXXX"`. Until then the form area shows a setup notice.
In Tally's *Design* tab, set the brand color to `#243F9B` and a white or transparent background so it matches the site.

## 6. Email notifications
In Tally open *Integrations* → **Email notifications** → turn on, add `whitestonepathways@gmail.com`. Send a test submission and check inbox and spam.

## 7. Deploy to Vercel
Push to GitHub, then vercel.com → *Add New Project* → import the repo → Deploy (defaults work). Afterwards set `url` in `lib/site.ts` to your real domain and redeploy.

## Notes
- Business details live in `lib/site.ts`.
- The site makes no guarantee claims. Keep it that way when editing copy.
