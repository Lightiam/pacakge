# PCB Fabrication Checklist

Pre-submission verification checklist for JLPCB manufacturing.

---

## Project Information

**Project Name:** _______________________________

**Board Name:** _______________________________

**Revision:** _________ | **Date:** ___/___/_____

**Prepared By:** _______________________________

---

## File Verification

### Gerber Files

- [ ] All required layers present (GTL, GBL, GTO, GBT, GTS, GBS, GKO, XLN)
- [ ] File names follow standard convention (BoardName_Layer.Ext)
- [ ] Format is RS-274X Extended Gerber
- [ ] File encoding is valid (no corruption)
- [ ] Gerber viewer shows complete design
- [ ] No missing or blank layers
- [ ] Aperture list included or standard apertures used
- [ ] Units are consistent (metric or imperial)
- [ ] Resolution adequate (minimum 6:5 metric)

### Drill File

- [ ] Drill file present (.XLN or .NC format)
- [ ] Coordinates match Gerber layer files
- [ ] Tool list complete (T1, T2, etc.)
- [ ] Via drilling coordinates correct
- [ ] Plating via information included (if applicable)
- [ ] Hole sizes within specification
- [ ] No duplicate drill coordinates
- [ ] Via annular rings adequate on all layers

### Other Files

- [ ] Schematic files included (reference)
- [ ] Layout/drawing files included
- [ ] BOM spreadsheet included
- [ ] Design specifications document included
- [ ] Assembly drawing (if SMT assembly)
- [ ] 3D PCB model (if available for verification)

---

## Design Rule Verification

### Trace & Spacing

- [ ] Minimum trace width: **0.15mm (5mil)** minimum
  - Actual minimum: ___ mm
  - All traces comply: Yes [ ] No [ ]

- [ ] Minimum trace spacing: **0.15mm (5mil)** minimum
  - Actual minimum: ___ mm
  - All spacing complies: Yes [ ] No [ ]

- [ ] Trace clearance from board edge: **0.3mm** minimum
  - Actual minimum: ___ mm
  - All traces comply: Yes [ ] No [ ]

- [ ] Trace corners: Should avoid acute angles (use 45° or softer)
  - Checked: Yes [ ] No [ ]
  - Any acute angles: Yes [ ] No [ ]

### Vias & Holes

- [ ] Minimum via diameter: **0.2mm (8mil)** minimum
  - Actual minimum: ___ mm
  - All vias comply: Yes [ ] No [ ]

- [ ] Via annular ring (pad size): **0.1mm** minimum
  - Actual minimum: ___ mm
  - All vias comply: Yes [ ] No [ ]

- [ ] Via copper clearance adequate
  - Minimum clearance: ___ mm
  - All vias comply: Yes [ ] No [ ]

- [ ] Via to via spacing adequate
  - Minimum spacing: ___ mm
  - Standard: 0.2mm or more
  - All spacing complies: Yes [ ] No [ ]

- [ ] Minimum hole size: **0.2mm (8mil)** minimum
  - Actual minimum: ___ mm
  - All holes comply: Yes [ ] No [ ]

- [ ] No unplated holes unless intentional
  - Checked: Yes [ ] No [ ]

### Copper Specifications

- [ ] Copper weight specified: ___ oz/m²
- [ ] Copper thickness adequate for current requirements
- [ ] Copper-to-edge clearance: 0.3mm minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] No floating copper or isolated islands
  - Checked: Yes [ ] No [ ]
  - Issues found: Yes [ ] No [ ]

- [ ] No acute copper geometry (slivers, sharp points)
  - Checked: Yes [ ] No [ ]
  - Issues found: Yes [ ] No [ ]

### Power & Ground Planes

- [ ] Power planes properly connected (via stitching)
- [ ] Ground planes continuous and well-distributed
- [ ] Plane clearances adequate around via stitching
- [ ] No breaks in power/ground continuity
- [ ] Thermal relief patterns on component pads (if used)
- [ ] Via stitching density adequate: ___ mm spacing

---

## Solder Mask Verification

### Soldermask Layer

- [ ] Solder mask covers all layers
- [ ] Solder mask openings correct size
- [ ] Solder mask clearance from copper: **0.1mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Solder mask doesn't overlap component pads
  - Checked: Yes [ ] No [ ]
  - Issues found: Yes [ ] No [ ]

- [ ] Bridge width between mask openings adequate: **0.2mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] No mask undercut or excessive overlap
- [ ] Mask color specified: ___________________________
- [ ] Mask thickness specification included

### Solder Mask for Via Pads

- [ ] Via pads have appropriate mask coverage
- [ ] Via-in-pad filling specified (if used): Yes [ ] No [ ]
- [ ] Mask relief around plugged vias adequate

---

## Silkscreen Verification

### Silkscreen Layer

- [ ] Silkscreen on correct layers (top and/or bottom)
- [ ] Silkscreen doesn't overlap component pads
  - Checked: Yes [ ] No [ ]
  - Overlaps found: Yes [ ] No [ ]

- [ ] Silkscreen clearance from copper: **0.1mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Minimum line width: **0.2mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Minimum text height: **0.75mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Text is readable and properly oriented
  - Checked: Yes [ ] No [ ]

- [ ] All component designators present and correct
  - Checked: Yes [ ] No [ ]
  - Missing/incorrect: ___________________________

- [ ] Polarity indicators present for polarized components
  - Diodes: Yes [ ] No [ ]
  - Capacitors: Yes [ ] No [ ]
  - ICs: Yes [ ] No [ ]
  - LEDs: Yes [ ] No [ ]

- [ ] Board revision/date code present
- [ ] Company logo/name included (if desired)
- [ ] Silkscreen color specified: ___________________________

### Silkscreen Readability

- [ ] No text run-on or overlap
- [ ] Adequate spacing between text elements
- [ ] No silkscreen over test points or critical areas

---

## Board Edge & Mechanical

### Board Outline

- [ ] Board outline clearly defined in GKO layer
- [ ] Outline is continuous (no gaps)
- [ ] Board outline matches design intent
- [ ] Corners properly defined (no floating geometry)

### Edge Quality

- [ ] Edge type specified: [ ] Routed [ ] V-cut [ ] Scored
- [ ] Edge finish specified: _______________________________
- [ ] Chamfered edges (if required): Yes [ ] No [ ]
- [ ] Edge burrs/roughness acceptable

### Edge Clearance

- [ ] Copper to edge: **0.3mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Solder mask to edge: **0.3mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Silkscreen to edge: **0.5mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Via to edge: **0.5mm** minimum
  - Actual minimum: ___ mm
  - Complies: Yes [ ] No [ ]

- [ ] Test points have adequate spacing from edge
- [ ] Connectors have adequate spacing from edge

### Tooling & Fiducial Marks

- [ ] Tooling holes specified (if required): Yes [ ] No [ ]
  - Diameter: ___ mm
  - Location verified: Yes [ ] No [ ]
  - Distance from edge: ___ mm

- [ ] Fiducial marks present (for assembly): Yes [ ] No [ ]
  - Diameter: ___ mm
  - Location verified: Yes [ ] No [ ]
  - Material: [ ] Copper [ ] Gold [ ] Mask opening

---

## Component & Assembly Verification

### Component Footprints

- [ ] All components have valid footprints
- [ ] Footprint sizes match component packages
- [ ] Pad sizes adequate for soldering
- [ ] No missing pads or pins
- [ ] Component polarity marks clear and correct

### Assembly Considerations

- [ ] Component placement density reasonable
- [ ] No interference between components
- [ ] Component clearances adequate
  - Minimum clearance: ___ mm
  - Standard: 0.5mm minimum

- [ ] Connectors accessible after assembly
- [ ] Test points accessible for testing
- [ ] Heat sink mounting areas clear (if applicable)

### High-Density/Special Components

- [ ] BGA footprints correct
  - Checked: Yes [ ] No [ ]
  - Issues: ___________________________

- [ ] Fine-pitch component spacing adequate
  - Minimum pitch: ___ mm
  - Design-rule compliant: Yes [ ] No [ ]

- [ ] Thermal vias present (if needed)
  - Location verified: Yes [ ] No [ ]

---

## Electrical Verification

### Signal Integrity

- [ ] Impedance-controlled traces identified (if required)
  - Target impedance: ___ Ω
  - Design verified: Yes [ ] No [ ]

- [ ] Differential pair routing correct (if applicable)
  - Spacing: ___ mm
  - Verified: Yes [ ] No [ ]

- [ ] Via stitching for return paths adequate
- [ ] Ground plane continuity verified
- [ ] Power distribution network verified

### Power Integrity

- [ ] Voltage regulator placement optimal
- [ ] Bulk capacitors near power entry
- [ ] Bypass capacitors properly distributed
- [ ] Power planes adequate size and copper weight

### Signal Integrity Analysis (if applicable)

- [ ] Simulation results reviewed
- [ ] All critical signals analyzed
- [ ] Crosstalk verified to be acceptable
- [ ] Transmission line effects considered
- [ ] Report included with submission: Yes [ ] No [ ]

---

## Testing & Quality

### Electrical Testing

- [ ] Flying probe test netlist prepared: Yes [ ] No [ ]
- [ ] Continuity test points identified: Yes [ ] No [ ]
- [ ] Insulation resistance test voltage specified: ___ V
- [ ] Hi-Pot test voltage specified (if required): ___ V
- [ ] No critical tracks exposed for testing issues

### Physical Testing

- [ ] Microsection (cross-section) point identified: Yes [ ] No [ ]
- [ ] X-ray inspection points identified (if BGA): Yes [ ] No [ ]
- [ ] Visual inspection criteria defined
- [ ] Functional test procedures documented

### Quality Standards

- [ ] IPC-A-600 class specified: [ ] Class 1 [ ] Class 2 [ ] Class 3
- [ ] AQL (Acceptance Quality Level) specified: ___ %
- [ ] Defect criteria defined
- [ ] Inspection and documentation requirements clear

---

## Documentation Review

### Required Documents Present

- [ ] Complete Gerber file set
- [ ] Drill file (XLN format)
- [ ] BOM with part numbers and costs
- [ ] Design specifications document
- [ ] Schematic (for reference)
- [ ] PCB layout diagram/drawing
- [ ] Layer stackup diagram
- [ ] Assembly drawing (if SMT)
- [ ] Test plan/procedures
- [ ] Signal integrity report (if high-speed design)
- [ ] Thermal analysis (if thermal management critical)

### Documentation Quality

- [ ] All documents are up-to-date with current design
- [ ] No conflicting information between documents
- [ ] Part numbers match BOM with design
- [ ] Revision levels consistent across all files
- [ ] Signature/approval present on key documents

---

## File Size & Format

### File Compression

- [ ] Files organized in proper directory structure
- [ ] All files compressed into single archive (if needed)
- [ ] Archive format: [ ] ZIP [ ] RAR [ ] TAR.GZ
- [ ] Archive integrity verified: Yes [ ] No [ ]

### File Size Verification

- [ ] Total submission size: ___ MB
- [ ] Meets JLPCB limit: **50MB maximum**
  - Within limit: Yes [ ] No [ ]

### File Naming

- [ ] All files have clear, descriptive names
- [ ] No spaces or special characters in filenames
- [ ] Naming convention followed:
  - Pattern: `[BoardName]_[Layer/Type].[Extension]`
  - Example: `MyBoard_Top.GTL`, `MyBoard.XLN`

---

## Pre-Submission Checklist

- [ ] All required files present and verified
- [ ] Design rule checks passed
- [ ] No errors in Gerber viewer
- [ ] BOM complete and accurate
- [ ] Specifications document filled out
- [ ] Fabrication requirements documented
- [ ] Test procedures defined
- [ ] Quality standards specified
- [ ] Files organized and compressed
- [ ] File size within limits
- [ ] Contact information verified
- [ ] Budget confirmed
- [ ] Timeline verified
- [ ] Delivery address confirmed

---

## Issues Found & Resolution

### Critical Issues

| Issue | Location | Severity | Resolution | Status |
|-------|----------|----------|-----------|--------|
| | | [ ] Critical [ ] Major [ ] Minor | | [ ] Fixed [ ] Workaround [ ] Defer |
| | | [ ] Critical [ ] Major [ ] Minor | | [ ] Fixed [ ] Workaround [ ] Defer |
| | | [ ] Critical [ ] Major [ ] Minor | | [ ] Fixed [ ] Workaround [ ] Defer |

### Resolution Notes

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

---

## Final Approval

### Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Designer | __________ | __________ | __/__ /____ |
| Checker | __________ | __________ | __/__ /____ |
| Manager | __________ | __________ | __/__ /____ |

### Ready for Submission?

- [ ] Yes - All items checked and verified
- [ ] No - Issues must be resolved first

**If NO, list items requiring resolution:**

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

---

## Submission Details

**Submission Date:** ___/___/_____

**JLPCB Confirmation Number:** _______________________________

**Quote Amount:** $_________

**Expected Delivery:** ___/___/_____

**Special Instructions/Notes:**

```
_________________________________________________________

_________________________________________________________

_________________________________________________________
```

---

## Post-Submission Follow-Up

- [ ] Quote received and reviewed
- [ ] No DFM issues raised by JLPCB
- [ ] Manufacturing confirmed to begin
- [ ] Production order number: _______________________________
- [ ] Expected ship date: ___/___/_____
- [ ] Tracking information received
- [ ] PCBs received and inspected
- [ ] Quality acceptable
- [ ] Assembly can proceed

---

**Checklist Completed By:** _______________________________

**Date Completed:** ___/___/_____

**Version:** 1.0 | **Last Updated:** ___/___/_____

---

*This checklist ensures your PCB design meets JLPCB manufacturing standards and avoids common issues. Use it before every submission.*
