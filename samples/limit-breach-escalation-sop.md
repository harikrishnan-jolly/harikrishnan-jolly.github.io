---
layout: default
title: SOP - Market Risk Limit Breach Escalation
---

# SOP: Market Risk Limit Breach Escalation

> A portfolio sample written for a fictional bank. All names, thresholds and systems are invented. **Audience:** new market risk analysts. **Problem addressed:** escalations that vary by analyst because the rules are scattered across emails. **Approach:** one decision matrix, numbered steps with expected results, and an audit trail.

| | |
|---|---|
| **Document ID** | MR-SOP-014 |
| **Version** | 1.0 |
| **Owner** | Head of Market Risk, Northbridge Bank (fictional) |
| **Effective date** | 1 June 2026 |
| **Next review** | 1 June 2027 |
| **Status** | Approved |

## 1. Purpose
This procedure defines how the Market Risk team detects, classifies, escalates and closes a trading limit breach, so that every breach is handled the same way and can be evidenced to auditors.

## 2. Scope
**Applies to:** desk-level Value at Risk (VaR) and position limits for all trading desks.
**Does not apply to:** credit limits and liquidity limits (see MR-SOP-021).

## 3. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Market Risk Analyst | Reviews the daily limit report, validates figures, classifies and logs the breach, sends notifications |
| Desk Head | Provides the root cause and decides to reduce the position or request a temporary excess |
| Head of Market Risk | Approves or rejects temporary excesses; receives Level 2 and Level 3 escalations |
| Chief Risk Officer (CRO) | Receives Level 3 escalations |
| Team Lead, Market Risk | Reviews the register entry and signs off closure |

## 4. Definitions

| Term | Meaning |
|---|---|
| Limit utilization | Current risk measure divided by the approved limit, as a percentage |
| Breach | Utilization above 100% of the approved limit |
| Temporary excess | Time-bound written approval to remain above a limit |
| Limit Breach Register | The controlled log of every breach and its resolution |

## 5. Before you begin
- You have access to the Daily Limit Report and the Limit Breach Register.
- You know which desks are assigned to you.
- The overnight position feed has completed (confirmed by the status banner on the report).

## 6. Escalation matrix

| Level | Condition | Notify | Deadline |
|---|---|---|---|
| **1: Warning** | Utilization 90% to 100% | Desk Head | Same business day |
| **2: Breach** | Utilization above 100% and up to 110% | Desk Head, then Head of Market Risk | Desk Head within 30 minutes; Head of Market Risk within 2 hours |
| **3: Major breach** | Utilization above 110%, or a Level 2 breach unresolved after 1 business day | Head of Market Risk, then CRO | Head of Market Risk within 30 minutes; CRO within 1 hour |

## 7. Procedure

### Step 1: Review the Daily Limit Report
1. Open the Daily Limit Report before 08:30 local time.
2. Filter to your assigned desks.

**Result:** You can see the utilization percentage for every limit.

### Step 2: Identify limits at or above 90%
1. Sort the report by utilization, highest first.
2. Note every limit at 90% or above.

**Result:** You have a list of limits that need action. If the list is empty, record "No breaches" in the register and stop.

### Step 3: Validate the figure
1. Confirm the position feed status shows **Complete**.
2. Compare today's figure with yesterday's for the same limit.
3. If the change is above 25%, check for a booking error or a missing trade before proceeding.

**Result:** You have confirmed the figure reflects real exposure and is not a data error. If it is a data error, raise a data issue ticket and stop.

### Step 4: Classify the event
1. Match the utilization to the escalation matrix in Section 6.
2. Note the level.

**Result:** The event is Level 1, 2 or 3.

### Step 5: Log the event
1. Open the Limit Breach Register and create a new entry.
2. Enter the desk, limit, utilization, level, date and time detected.

**Result:** The register assigns a reference number. Use it in every message about this event.

### Step 6: Notify the required people
1. Send the notification within the deadline for the level, using the template below.
2. Record the time you sent it in the register.

> **Subject:** [Level 2] Limit breach: [Desk], [Limit], ref [number]
> **Body:** [Desk] is at [utilization]% of its [limit name] limit as of [time]. Position feed validated. Please provide the root cause and your proposed action (reduce position or request temporary excess) by [time].

**Result:** Recipients have the facts and a deadline to respond.

### Step 7: Obtain the root cause and decision
1. Record the Desk Head's explanation in the register.
2. Record the decision: reduce the position, or request a temporary excess.

**Result:** The register shows a cause and a decision.

### Step 8: Handle a temporary excess request (if requested)
1. Send the request to the Head of Market Risk with the reason, the proposed excess amount and the end date.
2. Do not treat silence as approval. Wait for written approval.
3. Attach the written decision to the register entry.

**Result:** The excess is either approved in writing with an end date, or rejected and the desk must reduce the position.

### Step 9: Monitor to resolution
1. Check the limit again at each report refresh until utilization is back under 100%.
2. Update the register after each check.

**Result:** The register shows the utilization trend up to resolution.

### Step 10: Close the event
1. Confirm utilization is at or below 100%, or that an approved excess is in force.
2. Attach the evidence listed in Section 8.
3. Submit the entry to the Team Lead for sign-off.

**Result:** The Team Lead signs off and the register status changes to **Closed**.

## 8. Records and evidence
Every closed entry must contain:
- The report extract showing the breach and the resolution
- All notification messages with timestamps
- The Desk Head's root cause
- Any excess approval, in writing
- The Team Lead's sign-off

**Important:** Retain records for 7 years.

## 9. Common problems

| Problem | What to do |
|---|---|
| Position feed shows **Incomplete** | Do not classify. Wait for the feed, and escalate to the data team if it is not complete by 09:30. |
| Desk Head does not respond by the deadline | Escalate to the next person in the matrix and record the missed deadline. |
| Utilization changes while you are investigating | Classify on the highest confirmed figure and note the change in the register. |
| The breach appears for several days | Treat as Level 3 once it passes 1 business day. |

## 10. Related documents
- MR-SOP-021: Credit and Liquidity Limit Monitoring (fictional)
- Market Risk Limit Framework (fictional)

## 11. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 1 June 2026 | J Hari Krishnan | Initial release |
