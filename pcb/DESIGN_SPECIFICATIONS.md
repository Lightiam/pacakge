# PCB Design Specifications Template

Complete template for documenting PCB design specifications for JLPCB submission.

---

## Project Information

**Project Name:** _______________________________

**Board Name:** _______________________________

**Revision:** _________ | **Date:** ___/___/_____

**Designer(s):** _______________________________

**Contact Email:** _______________________________

**Organization:** _______________________________

---

## 1. Board Specifications

### 1.1 Physical Dimensions

```
Length (X-axis):     ___ mm
Width (Y-axis):      ___ mm
Thickness:           ___ mm
Tolerance:           ±___ mm
```

### 1.2 Layer Configuration

**Number of Layers:**
- [ ] 2 layers
- [ ] 4 layers
- [ ] 6 layers
- [ ] 8 layers
- [ ] Other: ___ layers

**Layer Stack-up:**

| Layer | Name | Material | Thickness |
|-------|------|----------|-----------|
| 1 | Top Copper | Cu | ___ µm |
| 2 | Prepreg | FR4 | ___ µm |
| 3 | Inner 1 | Cu | ___ µm |
| 4 | Prepreg | FR4 | ___ µm |
| 5 | Inner 2 | Cu | ___ µm |
| 6 | Prepreg | FR4 | ___ µm |
| 7 | Bottom Copper | Cu | ___ µm |

**Total Thickness:** ___ mm

### 1.3 Board Material

**Material Type:**
- [ ] FR4 (Fiberglass-Epoxy)
- [ ] Aluminum (for thermal dissipation)
- [ ] Polyimide (Kapton)
- [ ] PTFE (Teflon)
- [ ] Other: _______________________________

**Glass Transition Temperature (Tg):** ___ °C
(130°C standard, 170°C or higher if specified)

**Dielectric Constant (Dk):** ___ @ ___ GHz

**Dissipation Factor (Df):** ___ @ ___ GHz

---

## 2. Copper Specifications

### 2.1 Copper Weight

**All Layers:**
- [ ] 0.5 oz/ft² (17.5 µm)
- [ ] 1 oz/ft² (35 µm) - Standard
- [ ] 2 oz/ft² (70 µm)
- [ ] 3 oz/ft² (105 µm)
- [ ] Custom: ___ oz/ft²

### 2.2 Copper Foil Type

- [ ] Rolled Copper Foil (standard)
- [ ] Electrolytic Copper Foil
- [ ] Reverse Treat Copper Foil

---

## 3. Trace & Spacing Requirements

### 3.1 Minimum Values

```
Minimum Trace Width:       ___ mm (minimum 0.15mm)
Minimum Trace Spacing:     ___ mm (minimum 0.15mm)
Minimum Via Diameter:      ___ mm (minimum 0.2mm)
Via Annular Ring:          ___ mm (minimum 0.1mm)
Minimum Hole Size:         ___ mm (minimum 0.2mm)
```

### 3.2 Critical Traces

**High-Speed Signals:**
- [ ] Yes [ ] No

If yes, specify:
```
Target Impedance:          ___ Ω
Differential Impedance:    ___ Ω
Tolerance:                 ±___ Ω
```

**Power Distribution:**
```
Minimum Trace Width:       ___ mm
Copper Weight:             ___ oz
```

**Ground Planes:**
- [ ] Layer 1 (Top)
- [ ] Layer 2
- [ ] Layer 3
- [ ] Layer 4 (Bottom)

---

## 4. Solder Mask Specifications

### 4.1 Solder Mask Type

- [ ] LPI (Liquid PhotoImageable) - Standard
- [ ] Dry Film
- [ ] Epoxy

### 4.2 Solder Mask Color

**Top Side:**
- [ ] Green (standard)
- [ ] Red
- [ ] Blue
- [ ] Black
- [ ] White
- [ ] Yellow
- [ ] Purple
- [ ] Other: _______

**Bottom Side:**
- [ ] Same as top
- [ ] Different: _______

### 4.3 Solder Mask Properties

```
Thickness:                 ___ µm (typically 7-12 µm)
Clearance (min):           ___ mm (minimum 0.1mm)
Overlap on Copper:         ___ mm (typically 0.05mm)
Bridge Width:              ___ mm (between openings)
```

---

## 5. Silkscreen Specifications

### 5.1 Silkscreen Color

**Top Side:**
- [ ] White (standard)
- [ ] Yellow
- [ ] Black
- [ ] Red
- [ ] Other: _______

**Bottom Side:**
- [ ] White
- [ ] Same as top
- [ ] None
- [ ] Other: _______

### 5.2 Silkscreen Type

- [ ] Liquid Photo Imageable (LPI)
- [ ] Hot-Melt
- [ ] Screen Printed

### 5.3 Silkscreen Properties

```
Minimum Line Width:        ___ mm (minimum 0.2mm)
Minimum Text Height:       ___ mm (minimum 0.75mm)
Thickness:                 ___ µm (typically 7-12 µm)
Overlap/Clearance:         ___ mm (typically 0.1mm from copper)
```

### 5.4 Silkscreen Content

- [ ] Component designators (R1, C1, U1, etc.)
- [ ] Component values
- [ ] Polarity indicators (±, ◀▶)
- [ ] Connector pin labels
- [ ] Test points
- [ ] Company logo/name
- [ ] Date/revision code
- [ ] QR code
- [ ] Other: _______________________________

---

## 6. Surface Finish Specifications

### 6.1 Surface Finish Type

- [ ] HASL (Hot Air Solder Leveling)
- [ ] HASL Lead-Free
- [ ] ENIG (Electroless Nickel/Immersion Gold)
- [ ] OSP (Organic Solder Preservative)
- [ ] ImAg (Immersion Silver)
- [ ] ImSn (Immersion Tin)
- [ ] Hard Gold (for high-frequency/connectors)

### 6.2 Plating Thickness

**Nickel (if ENIG/Hard Gold):**
```
Thickness: ___ µm (typically 2-5 µm)
```

**Gold (if ENIG/Hard Gold):**
```
Thickness: ___ µm (typically 0.05-0.1 µm for ENIG)
Thickness: ___ µm (typically 1-5 µm for Hard Gold)
```

### 6.3 Surface Finish Properties

**HASL:**
- Lead-free: Yes [ ] No [ ]
- Flatness: ___ mm
- Thickness: ___ µm

**ENIG:**
- Nickel thickness: ___ µm
- Gold thickness: ___ µm
- Purpose: [ ] General [ ] High-frequency [ ] Connectors

**OSP:**
- Thickness: ___ µm
- Coating: _______________________________

---

## 7. Edge & Tooling Specifications

### 7.1 Board Edge Type

- [ ] Routed (milled)
- [ ] Scored
- [ ] V-cut
- [ ] Combination: _______________________________

### 7.2 Edge Finish

- [ ] Sharp edges (standard)
- [ ] Chamfered (beveled)
- [ ] Rounded
- [ ] Coating: _______________________________

### 7.3 Edge Clearance

```
Copper to Edge:            ___ mm (minimum 0.3mm)
Solder Mask to Edge:       ___ mm (minimum 0.3mm)
Silkscreen to Edge:        ___ mm (minimum 0.5mm)
Via to Edge:               ___ mm (minimum 0.5mm)
```

### 7.4 Tooling Holes

- [ ] Required [ ] Not required

If required:
```
Diameter:                  ___ mm (typically 2.4-3.2mm)
Location:                  Corners [ ] Edges [ ] Specific: _______
Distance from edge:        ___ mm
```

### 7.5 Fiducial Marks

- [ ] Required [ ] Not required

If required:
```
Diameter:                  ___ mm (typically 1-3mm)
Location:                  Corners [ ] Center [ ] Custom positions
Material:                  Copper [ ] Gold [ ] Solder mask opening
```

---

## 8. Panelization (if applicable)

### 8.1 Multiple Boards Per Panel

- [ ] Single board [ ] Multiple boards (___× arrangement)

If multiple boards:
```
Board Spacing:             ___ mm
Break-away Style:          [ ] Tab [ ] Routed [ ] V-cut
Tab Width:                 ___ mm
```

---

## 9. Hole & Via Specifications

### 9.1 Via Types

**Plated Through Holes (PTH):**
```
Hole Size:                 ___ mm
Pad Size (top):            ___ mm
Pad Size (bottom):         ___ mm
Annular Ring (min):        ___ mm
Quantity: _____ vias
```

**Blind Vias** (if used):
```
Start Layer:               ___
End Layer:                 ___
Hole Size:                 ___ mm
Quantity: _____ vias
```

**Buried Vias** (if used):
```
Layer Range:               ___
Hole Size:                 ___ mm
Quantity: _____ vias
```

### 9.2 Via Pattern

- [ ] Random distribution
- [ ] Stitching/Fencing (for power distribution)
- [ ] Via in pad: Yes [ ] No [ ]
- [ ] Via in pad filling: Yes [ ] No [ ]

---

## 10. Assembly & Component Specifications

### 10.1 Mounting Technology

- [ ] Surface Mount (SMT) only
- [ ] Through-Hole (THT) only
- [ ] Mixed (SMT + THT)

### 10.2 Component Size Range

**Smallest Component:**
- Type: _______________________________
- Package: _______________________________
- Size: ___ × ___ mm

**Largest Component:**
- Type: _______________________________
- Package: _______________________________
- Size: ___ × ___ mm

### 10.3 Special Considerations

- [ ] High-density BGA (Ball Grid Array)
- [ ] Fine-pitch components (< 0.5mm pitch)
- [ ] Large power components
- [ ] Thermal management required
- [ ] Other: _______________________________

---

## 11. Electrical & Performance Specifications

### 11.1 Operating Conditions

```
Operating Temperature:     ___ °C to ___ °C
Storage Temperature:       ___ °C to ___ °C
Humidity Range:            ___% to ___% RH
```

### 11.2 Electrical Requirements

**Voltage:**
```
Maximum Voltage:           ___ V
Current per trace:         ___ A
Power Dissipation:         ___ W
```

**Signal Integrity:**
- [ ] Controlled impedance (50Ω, 90Ω)
- [ ] EMI/EMC compliance required
- [ ] High-frequency design (> 1 GHz)
- [ ] Low-jitter clock distribution

### 11.3 Environmental Compliance

- [ ] RoHS (Restriction of Hazardous Substances)
- [ ] REACH (European chemical regulation)
- [ ] Halogen-free (Cl, Br < 900 ppm, combined)
- [ ] Lead-free assembly required

---

## 12. Quality & Testing Requirements

### 12.1 Quality Standards

- [ ] IPC-A-600 Class 1 (Consumer)
- [ ] IPC-A-600 Class 2 (General Industrial)
- [ ] IPC-A-600 Class 3 (Aerospace/Military)
- [ ] ISO 13849-1 (Safety critical)

### 12.2 Testing

**Electrical Testing:**
- [ ] Flying probe test
- [ ] Continuity test
- [ ] Insulation resistance test (Voltage: ___ V)
- [ ] High-potential (Hi-Pot) test (Voltage: ___ V)

**Physical Testing:**
- [ ] Microsection (cross-section analysis)
- [ ] X-ray inspection
- [ ] Visual inspection per IPC-A-600
- [ ] Functional test

### 12.3 Inspection & Acceptance Criteria

```
Defect Rate (AQL):         ___ %
Sample Size:               [ ] Normal [ ] Tightened
Acceptance Level:          [ ] Low cost [ ] Standard [ ] High reliability
```

---

## 13. Documentation & Delivery

### 13.1 Required Documentation

- [ ] Gerber files (complete layer set)
- [ ] Drill file (.XLN or .NC)
- [ ] BOM (Bill of Materials)
- [ ] Schematic (PDF reference)
- [ ] Layout drawing (PDF)
- [ ] Layer stackup drawing
- [ ] Assembly drawing
- [ ] Test procedures
- [ ] Inspection plan

### 13.2 File Format

**Gerber Format:**
- [ ] RS-274X (Extended Gerber) - Recommended
- [ ] RS-274D (Standard Gerber)

**CAD Files:**
- [ ] KiCAD (.kicad_pcb)
- [ ] Altium Designer (.PcbDoc)
- [ ] Eagle (.brd)
- [ ] Mentor Graphics (.pcb)
- [ ] Other: _______________________________

### 13.3 Delivery Method

- [ ] JLPCB online upload
- [ ] Email submission
- [ ] FTP transfer
- [ ] Other: _______________________________

---

## 14. Special Requirements & Notes

### 14.1 Critical Features

```
List any critical aspects of the design:

1. _________________________________________________
2. _________________________________________________
3. _________________________________________________
4. _________________________________________________
```

### 14.2 Design Constraints

```
Physical constraints:      _______________________________
Electrical constraints:    _______________________________
Thermal constraints:       _______________________________
Mechanical constraints:    _______________________________
```

### 14.3 Supplier Information

```
Preferred PCB Manufacturer: _______________________________
Procurement Code/PO:       _______________________________
Budget Limit:              $_________
Timeline:                  Required by ___/___/_____
```

### 14.4 Additional Notes

```
_________________________________________________________

_________________________________________________________

_________________________________________________________

_________________________________________________________
```

---

## 15. Approval & Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Designer | __________ | __________ | __/__ /____ |
| Engineer | __________ | __________ | __/__ /____ |
| Manager | __________ | __________ | __/__ /____ |
| QA | __________ | __________ | __/__ /____ |

---

## 16. Revision History

| Rev | Date | Changes | Author |
|-----|------|---------|--------|
| 1.0 | __/__ /____ | Initial | __________ |
| | | | |
| | | | |
| | | | |

---

## Attachment Checklist

- [ ] Gerber files (in folder or archive)
- [ ] Drill file
- [ ] BOM spreadsheet
- [ ] Schematic PDF
- [ ] Layout diagram
- [ ] Layer stackup diagram
- [ ] Assembly drawing (if applicable)
- [ ] 3D PCB model (if available)
- [ ] Design rule violations report (if any)
- [ ] Thermal analysis (if applicable)
- [ ] Signal integrity report (if applicable)

---

**Document Prepared By:** _______________________________

**Date Prepared:** ___/___/_____

**Last Updated:** ___/___/_____

**For Submission To:** JLPCB (JiaLiChuang PCB Manufacturing)

**Contact:** support@jlpcb.com | https://jlpcb.com
