# PCB Layout Modification Request Template

Template for requesting layout modifications or updates from JLPCB.

---

## Request Information

**Request Date:** ___/___/_____

**Request ID/Reference:** _______________________________

**Requestor Name:** _______________________________

**Requestor Email:** _______________________________

**Requestor Phone:** _______________________________

**Organization:** _______________________________

**Priority:** [ ] Low [ ] Medium [ ] High [ ] Urgent

---

## Current Design Reference

### Design Information

**Board Name:** _______________________________

**Current Revision:** _______________________________

**Original Design Date:** ___/___/_____

**Previous JLPCB Order #:** _______________________________

**Design File Reference:**
- [ ] Previous JLPCB quote
- [ ] Original design files included
- [ ] Both included

### Design Files Attached

- [ ] Previous Gerber files
- [ ] Previous BOM
- [ ] Previous design specifications
- [ ] Previous layout drawing
- [ ] Previous schematic
- [ ] 3D model (if available)
- [ ] Other: _______________________________

### Current Design Status

**Current State:**
- [ ] In testing
- [ ] In production
- [ ] In field
- [ ] Under development
- [ ] Other: _______________________________

**Known Issues/Reasons for Modification:**

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

---

## Modification Details

### Type of Modification

- [ ] Component relocation
- [ ] Trace rerouting
- [ ] Component addition
- [ ] Component removal
- [ ] Component substitution
- [ ] Layer stack change
- [ ] Size change
- [ ] Connector repositioning
- [ ] Heat dissipation improvement
- [ ] Signal integrity fix
- [ ] Manufacturing issue fix
- [ ] Cost reduction
- [ ] Other: _______________________________

### Affected Areas

**Location on Board:**
- [ ] Top left corner
- [ ] Top right corner
- [ ] Bottom left corner
- [ ] Bottom right corner
- [ ] Center
- [ ] Multiple areas
- [ ] Entire board

**Specific Areas/Components:**

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

### Detailed Modification Specifications

#### 1. Component Changes

**Components to Remove:**

| Designator | Value | Reason |
|------------|-------|--------|
| | | |
| | | |
| | | |

**Components to Add:**

| Designator | Value | Package | Quantity | Reason |
|------------|-------|---------|----------|--------|
| | | | | |
| | | | | |
| | | | | |

**Components to Relocate:**

| Designator | From Location | To Location | Reason |
|------------|---------------|-------------|--------|
| | | | |
| | | | |
| | | | |

**Component Substitutions:**

| Designator | Old Component | New Component | Reason |
|------------|---------------|---------------|--------|
| | | | |
| | | | |
| | | | |

#### 2. Routing Changes

**Trace Modifications:**

```
Description: _______________________________

From: ___________________________

To: ___________________________

Reason: _________________________________
```

**Critical Traces Affected:**

- [ ] Power traces
- [ ] Signal traces (high-speed)
- [ ] Ground traces
- [ ] Other: _______________________________

**Via Changes:**

- [ ] Add vias at locations: _______________________________
- [ ] Remove vias at locations: _______________________________
- [ ] Reposition vias: _______________________________

#### 3. Layout Changes

**Board Dimension Changes:**

```
Current: ___ mm × ___ mm × ___ mm

New: ___ mm × ___ mm × ___ mm

Reason: _________________________________
```

**Connector Repositioning:**

```
Connector: _______________________________

Current Position: _______________________________

New Position: _______________________________

Reason: _________________________________
```

**Mounting Point Changes:**

- [ ] Mounting holes repositioned
  - Old locations: _______________________________
  - New locations: _______________________________
  - Reason: _________________________________

#### 4. Layer Stack Changes

**Layer Stack Modification Required:** Yes [ ] No [ ]

If yes, specify:

```
Current Stack:
- Layer 1: ___________________________
- Layer 2: ___________________________
- Layer 3: ___________________________
- Layer 4: ___________________________

Proposed Stack:
- Layer 1: ___________________________
- Layer 2: ___________________________
- Layer 3: ___________________________
- Layer 4: ___________________________

Reason: _________________________________
```

#### 5. Material/Finish Changes

**Board Material Change:** Yes [ ] No [ ]

```
Current: _______________________________

New: _______________________________

Reason: _________________________________
```

**Surface Finish Change:** Yes [ ] No [ ]

```
Current: _______________________________

New: _______________________________

Reason: _________________________________
```

**Copper Weight Change:** Yes [ ] No [ ]

```
Current: ___ oz/m²

New: ___ oz/m²

Reason: _________________________________
```

**Solder Mask Color Change:** Yes [ ] No [ ]

```
Current: _______________________________

New: _______________________________

Reason: _________________________________
```

**Silkscreen Change:** Yes [ ] No [ ]

```
Current: _______________________________

New: _______________________________

Reason: _________________________________
```

---

## Technical Requirements

### Electrical Requirements

**Signal Integrity Impacts:** Yes [ ] No [ ]

```
If yes, explain:

_________________________________________________________

_________________________________________________________
```

**Power Integrity Impacts:** Yes [ ] No [ ]

```
If yes, explain:

_________________________________________________________

_________________________________________________________
```

**EMI/EMC Impacts:** Yes [ ] No [ ]

```
If yes, explain:

_________________________________________________________

_________________________________________________________
```

**High-Frequency Considerations:** Yes [ ] No [ ]

```
If yes, specify requirements:

_________________________________________________________

_________________________________________________________
```

### Thermal Considerations

**Thermal Management Changes:** Yes [ ] No [ ]

```
If yes, explain:

_________________________________________________________

_________________________________________________________
```

**Heat Dissipation Requirements:**

```
Power dissipation: ___ W

Critical component temperature limits: ___ °C

Required cooling: _______________________________
```

### Mechanical Constraints

**Physical Constraints:** Yes [ ] No [ ]

```
If yes, explain:

_________________________________________________________

_________________________________________________________
```

**Enclosure Compatibility:** Yes [ ] No [ ]

```
If yes, specify enclosure dimensions or constraints:

_________________________________________________________

_________________________________________________________
```

**Environmental Requirements:**

```
Operating temperature: ___ °C to ___ °C

Humidity: ___% to ___% RH

Altitude: ___ m

Vibration/Shock: _______________________________
```

### Manufacturing Constraints

**DFM Issues to Address:**

- [ ] Trace width too thin (current: ___ mm)
- [ ] Trace spacing too narrow (current: ___ mm)
- [ ] Via size too small (current: ___ mm)
- [ ] Copper-to-edge clearance (current: ___ mm)
- [ ] Component density too high
- [ ] Other: _______________________________

**Cost Reduction Target:** ___ % reduction desired

**Timeline Constraint:**

```
Current delivery: ___/___/_____

Required by: ___/___/_____

Expedited manufacturing needed: Yes [ ] No [ ]
```

---

## Design Changes Impact Analysis

### Risk Assessment

**Complexity of Changes:** [ ] Low [ ] Medium [ ] High [ ] Very High

**Risk Level:** [ ] Low [ ] Medium [ ] High [ ] Critical

**Potential Issues:**

```
1. _________________________________________________________

2. _________________________________________________________

3. _________________________________________________________
```

### Testing & Validation

**Functional Testing Needed:** Yes [ ] No [ ]

```
If yes, specify tests:

_________________________________________________________

_________________________________________________________
```

**Signal Integrity Validation:** Yes [ ] No [ ]

```
Simulation/measurement: _______________________________

Expected results: _______________________________
```

**Manufacturing Verification:** Yes [ ] No [ ]

```
Required inspection: _______________________________

Acceptance criteria: _______________________________
```

---

## Schematic Changes (if applicable)

**Schematic Updates Required:** Yes [ ] No [ ]

If yes:

**Changes to Circuitry:**

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

**New Components Required:**

| Designator | Part Number | Supplier | Unit Cost |
|------------|-------------|----------|-----------|
| | | | |
| | | | |

**Removed Components:**

| Designator | Part Number | Reason |
|------------|-------------|--------|
| | | |
| | | |

**Schematic Files:**
- [ ] Updated schematic included
- [ ] Schematic review completed
- [ ] Cross-reference with BOM verified

---

## Visual Reference & Diagrams

### Modification Diagrams

**Provide sketches or diagrams showing:**

1. **Current Layout:**
   - Include board outlines
   - Component locations
   - Critical traces
   - Problem areas highlighted

2. **Proposed Layout:**
   - Modified component positions
   - New routing
   - Changes highlighted in color/markings

3. **Affected Region Close-ups:**
   - Before/after comparison
   - Detailed measurements
   - Clearance specifications

**File(s) Attached:**

- [ ] PDF drawing showing current layout
- [ ] PDF drawing showing proposed layout
- [ ] CAD file (KiCAD, Altium, etc.)
- [ ] Scanned sketch with annotations
- [ ] Photos with markups
- [ ] Other: _______________________________

---

## BOM & Cost Impact

### Bill of Materials Changes

**New Components to Source:**

| Designator | Part Number | Supplier | Unit Cost | Quantity | Total |
|------------|-------------|----------|-----------|----------|--------|
| | | | | | |
| | | | | | |

**Components to Remove:**

| Designator | Part Number | Current Cost | Quantity | Savings |
|------------|-------------|--------------|----------|---------|
| | | | | |
| | | | | |

**Cost Impact Summary:**

```
Added component cost:     $________
Removed component credit: $________
Net material change:      $________
PCB fabrication change:   $________
Total cost impact:        $________
```

**BOM Files Attached:**
- [ ] Updated BOM spreadsheet
- [ ] Cost comparison analysis
- [ ] Supplier availability confirmation

---

## Approval & Authorization

### Project Manager Approval

**Project Manager:** _______________________________

**Approval:** [ ] Approved [ ] Approved with conditions [ ] Rejected

**Signature:** ____________________________ **Date:** __/__ /____

**Comments:**

```
_________________________________________________________

_________________________________________________________
```

### Engineering Review

**Reviewing Engineer:** _______________________________

**Technical Review:** [ ] Approved [ ] Needs revision [ ] Rejected

**Signature:** ____________________________ **Date:** __/__ /____

**Technical Comments:**

```
_________________________________________________________

_________________________________________________________
```

### Budget/Cost Approval

**Budget Authority:** _______________________________

**Cost Approval:** [ ] Approved [ ] Exceed budget [ ] Rejected

**Signature:** ____________________________ **Date:** __/__ /____

**Cost Comments:**

```
_________________________________________________________

_________________________________________________________
```

---

## Submission Instructions for JLPCB

### Files to Submit

- [ ] This completed modification request form
- [ ] Updated Gerber files
- [ ] Updated drill file
- [ ] Updated BOM
- [ ] Updated design specifications
- [ ] Current/previous design files (for reference)
- [ ] Visual diagrams/sketches
- [ ] Schematic updates (if applicable)
- [ ] Any supporting documentation

### Submission Method

**Primary Method:** [ ] Web upload [ ] Email [ ] Other: _______

**Contact Information for JLPCB:**
- Website: https://jlpcb.com
- Quote: https://cart.jlpcb.com/quote
- Email: support@jlpcb.com
- Phone: (if available)

**Submission Checklist:**

- [ ] All files prepared and verified
- [ ] File size under 50MB limit
- [ ] Clear and complete documentation
- [ ] Cost estimate provided
- [ ] Timeline requirements clear
- [ ] Contact information accurate
- [ ] Authorization signatures obtained

---

## Special Requests & Notes

### Design Priority

**Urgency Level:**
- [ ] Standard (normal lead time)
- [ ] Expedited (+2-3 days)
- [ ] Rush (+Premium cost)
- [ ] Ultra-Rush (+Very high cost)

### Special Manufacturing Requests

- [ ] Reduced lead time
- [ ] Single board sample first (then mass production)
- [ ] Prototype run before full production
- [ ] Special quality testing required
- [ ] First article inspection (FAI)
- [ ] Specific manufacturing location
- [ ] Environmental considerations (RoHS, Lead-free, etc.)
- [ ] Other: _______________________________

### Additional Notes & Special Instructions

```
_________________________________________________________

_________________________________________________________

_________________________________________________________

_________________________________________________________
```

---

## Expected Outcome & Timeline

### Desired Deliverables

- [ ] Updated Gerber files
- [ ] Updated design review
- [ ] Quote for revised design
- [ ] Manufacturing date confirmation
- [ ] Prototype samples
- [ ] Full production boards
- [ ] Other: _______________________________

### Timeline Requirements

**JLPCB Response Expected:** ___/___/_____

**Preferred Manufacturing Start:** ___/___/_____

**Required Delivery Date:** ___/___/_____

**Total Timeline for Project:** ___ days

---

## Follow-Up Information

### Contact Information

**Primary Contact:** _______________________________

**Phone:** _______________________________

**Email:** _______________________________

**Secondary Contact:** _______________________________

**Phone:** _______________________________

**Email:** _______________________________

### Questions for JLPCB

```
1. _________________________________________________________

2. _________________________________________________________

3. _________________________________________________________
```

---

## Document Sign-Off

**Request Prepared By:** _______________________________

**Date Prepared:** ___/___/_____

**Organization:** _______________________________

**Project Code:** _______________________________

**Next Review Date:** ___/___/_____

---

## JLPCB Response Section (to be filled by JLPCB)

**JLPCB Contact:** _______________________________

**Date Received:** ___/___/_____

**Initial Review:** [ ] Feasible [ ] Requires clarification [ ] Not feasible

**Estimated Cost:** $________

**Estimated Timeline:** ___ days

**JLPCB Notes:**

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

**Quote Number:** _______________________________

**Manufacturing Confirmation:** [ ] Approved [ ] Pending [ ] Rejected

---

**Document Version:** 1.0

**Last Updated:** ___/___/_____

**For Use With:** JLPCB PCB Manufacturing Services

**Contact:** support@jlpcb.com | https://jlpcb.com
