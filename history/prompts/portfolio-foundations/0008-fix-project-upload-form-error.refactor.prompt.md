---
id: 0008
title: Fix project upload form error
stage: refactor
date: 2025-12-21
surface: agent
model: gemini-pro
feature: portfolio-foundations
branch: main
user: user
command: I get this type of error in terminal after submition of form "Error: Route "/admin/upload" used `cookies().get('sb-naeemnqdhdknbiqpeoxr-auth-token.4')`. `cookies()` should be awaited before using its value.
labels: [refactor, backend, supabase]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - lib/supabase/server.ts
tests:
 - none
---

## Prompt

I get this type of error in terminal after submition of form "Error: Route "/admin/upload" used `cookies().get('sb-naeemnqdhdknbiqpeoxr-auth-token.4')`. `cookies()` should be awaited before using its value.

## Response snapshot

I have fixed the error by updating the `lib/supabase/server.ts` file to correctly handle asynchronous cookie operations. I have also provided instructions on how to fix the Supabase RLS policy.

## Outcome

- ✅ Impact: Fixed the project upload form error by updating the `lib/supabase/server.ts` file to correctly handle asynchronous cookie operations.
- 🧪 Tests: No new tests were added.
- 📁 Files: `lib/supabase/server.ts`
- 🔁 Next prompts: null
- 🧠 Reflection: The error was caused by two issues: one in the code and one in the Supabase configuration. Both were addressed.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
