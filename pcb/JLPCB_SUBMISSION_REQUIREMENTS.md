# JLPCB Submission Requirements & Template

Complete guide for submitting PCB designs to JLPCB (JiaLiChuang) for fabrication.

## Overview

JLPCB offers comprehensive PCB manufacturing services:
- **Layout Design** - Create layout and routing designs based on customer schematics
- **Layout Modification** - Modify or update existing designs
- **File Upload** - Maximum 50MB per submission

## Submission Checklist

### Required Files

- [ ] Gerber files (complete layer set)
- [ ] Drill file (.nc or .xln)
- [ ] BOM (Bill of Materials)
- [ ] Design specifications
- [ ] Schematic files (reference)
- [ ] PCB layout files (Altium, KiCAD, or other)

### Design Information

- [ ] Board dimensions (length × width × thickness)
- [ ] Number of layers
- [ ] Copper thickness (oz/m² or µm)
- [ ] Board material (FR4, Aluminum, etc.)
- [ ] Silkscreen colors
- [ ] Solder mask colors
- [ ] Surface finish (HASL, ENIG, OSP, etc.)
- [ ] Edge connector type (if applicable)

### Assembly Requirements (if needed)

- [ ] Pick & place file (.pnp or .csv)
- [ ] Assembly instructions
- [ ] Test points location
- [ ] Panelization layout

## File Structure for Submission

```
JLPCB_Submission/
├── Gerber_Files/
│   ├── BoardName.GBL          # Bottom layer
│   ├── BoardName.GBT          # Bottom soldermask
│   ├── BoardName.GBS          # Bottom silkscreen
│   ├── BoardName.GTL          # Top layer
│   ├── BoardName.GTO          # Top soldermask
│   ├── BoardName.GTS          # Top silkscreen
│   ├── BoardName.GKO          # Board outline/edge cuts
│   ├── BoardName.G1 to G16    # Inner layers (if multi-layer)
│   ├── BoardName.XLN          # Drill file (Excellon format)
│   └── BoardName.TXT          # Aperture list
│
├── Schematics/
│   ├── BoardName_Schematic.pdf
│   ├── BoardName_Schematic.sch
│   └── BlockDiagram.pdf
│
├── Layout_Files/
│   ├── BoardName.kicad_pcb    # KiCAD layout
│   ├── BoardName_PCBLayout.pdf
│   └── Layer_Stack.pdf
│
├── Documentation/
│   ├── Design_Specifications.md
│   ├── BOM.csv
│   ├── Fabrication_Requirements.md
│   ├── Assembly_Instructions.pdf (if applicable)
│   └── Testing_Plan.md (if applicable)
│
└── Modification_Request.md     # For design changes
```

## Gerber File Guidelines

### Gerber Layers Required

| Layer | File Name | Purpose |
|-------|-----------|---------|
| Top Copper | .GTL | Traces and pads on top side |
| Bottom Copper | .GBL | Traces and pads on bottom side |
| Top Silkscreen | .GTS | Labels and component placement |
| Bottom Silkscreen | .GBS | Labels on bottom (optional) |
| Top Soldermask | .GTO | Solder mask on top |
| Bottom Soldermask | .GBT | Solder mask on bottom |
| Board Outline | .GKO | Board edge definition |
| Drill File | .XLN/.NC | Hole drilling data |

### Multi-Layer Boards

For 4-layer or more boards:
- Inner Layer 1 (L2): `.G2` or `.GI1`
- Inner Layer 2 (L3): `.G3` or `.GI2`
- Inner Layer 3 (L4): `.G4` or `.GI3`

### Gerber File Specifications

- **Format**: RS-274X (Extended Gerber)
- **Units**: Metric (mm) or Inches (in)
- **Resolution**: 6:5 (metric) or 2:5 (inches) minimum
- **Apertures**: Define in file or use standard aperture list
- **Polarity**: Positive (recommended)
- **Filename Convention**: `BoardName_Layer.Ext`

## Design Specifications Template

See `DESIGN_SPECIFICATIONS.md` for detailed template.

### Key Specifications

**Board Properties:**
```
Board Size: ___ mm × ___ mm × ___ mm
Number of Layers: ___
Board Material: [ ] FR4  [ ] Aluminum  [ ] Other: ___
Copper Weight: ___ oz/m² (1 oz = 35 µm)
```

**Solder Mask & Silkscreen:**
```
Solder Mask Color: [ ] Green  [ ] Red  [ ] Blue  [ ] Black  [ ] Other: ___
Silkscreen Color: [ ] White  [ ] Yellow  [ ] Black  [ ] Other: ___
```

**Surface Finish:**
```
[ ] HASL (Hot Air Solder Leveling)
[ ] ENIG (Electroless Nickel/Immersion Gold)
[ ] OSP (Organic Solder Preservative)
[ ] ImAg (Immersion Silver)
[ ] HASL Lead-Free
```

## Bill of Materials (BOM)

See `BOM_TEMPLATE.csv` for detailed template.

**Minimum BOM Columns:**
- Designator (e.g., R1, C1, U1)
- Value (e.g., 10kΩ, 100nF, STM32F103)
- Footprint
- Quantity
- Package (e.g., 0603, SOT-23)
- Supplier/Part Number
- Notes

## Fabrication Requirements

See `FABRICATION_CHECKLIST.md` for detailed checklist.

### Critical Specifications

- **Minimum Trace Width**: 0.15mm (5mil)
- **Minimum Trace Spacing**: 0.15mm (5mil)
- **Minimum Via Size**: 0.2mm diameter (8mil)
- **Minimum Hole Size**: 0.2mm (8mil)
- **Solder Mask Clearance**: 0.1mm minimum
- **Silkscreen**: 0.2mm minimum thickness
- **Edge Clearance**: 0.3mm from edge

### High-Speed Design Considerations

- Controlled impedance traces (50Ω, 90Ω differential)
- Proper layer stackup documentation
- Signal integrity analysis results
- EMI/EMC compliance documentation

## Layout Modification Request

See `LAYOUT_MODIFICATION_REQUEST.md` for detailed template.

### Information to Provide

1. **Current Design Reference**
   - Board name and revision
   - Original design date
   - File references

2. **Modification Details**
   - Specific areas affected
   - Components to add/remove/relocate
   - Routing changes required
   - Layer changes

3. **Technical Requirements**
   - Electrical performance needs
   - Thermal considerations
   - Mechanical constraints
   - Assembly requirements

4. **Timeline & Budget**
   - Required completion date
   - Budget constraints
   - Priority level

## Quality Assurance

### Pre-Submission Verification

- [ ] All Gerber files generated from latest layout
- [ ] Gerber files reviewed in viewer (ViewMate, Gerbv, online viewer)
- [ ] Drill file coordinates match layer files
- [ ] BOM matches schematic and layout
- [ ] Design specifications complete and accurate
- [ ] No unconnected traces or floating geometry
- [ ] Silkscreen doesn't overlap component pads
- [ ] All critical dimensions verified
- [ ] Clearance rules satisfied
- [ ] File sizes under 50MB limit

### Gerber File Verification Checklist

- [ ] Board outline clearly defined
- [ ] All copper layers present
- [ ] Mask and silkscreen layers included
- [ ] Via sizes appropriate
- [ ] Trace widths meet requirements
- [ ] No acute angles (use 45° or smoother)
- [ ] Copper clearance from edge adequate
- [ ] No floating copper or islands
- [ ] Soldermask opening sizes correct
- [ ] Test points accessible

## Submission Process

### Step 1: Prepare Files
Organize all files according to the file structure above.

### Step 2: Compress Files
```bash
# Linux/Mac
tar -czf JLPCB_Submission_BoardName_Rev1.tar.gz JLPCB_Submission/

# Windows
# Use 7-Zip, WinRAR, or built-in compression
# Right-click → Send to → Compressed (zipped) folder
```

### Step 3: Verify File Size
Maximum submission size: **50MB**

```bash
ls -lh JLPCB_Submission_BoardName_Rev1.tar.gz
```

### Step 4: Upload to JLPCB
1. Visit: https://cart.jlpcb.com/quote
2. Upload compressed file
3. Review quote and design
4. Confirm specifications
5. Place order

### Step 5: Review & Approval
- JLPCB reviews design
- Notifies of any issues
- Requests modifications if needed
- Confirms manufacturing readiness

## Common Issues & Solutions

### Issue: Gerber Viewer Shows Missing Layers

**Solution:**
- Ensure all layer files are included
- Check layer naming convention
- Verify file format (RS-274X)
- Regenerate Gerber files from CAD

### Issue: Design Rules Violation

**Solution:**
- Reduce trace width (if possible)
- Increase spacing between traces
- Adjust via size
- Consult JLPCB DFM guidelines

### Issue: High Quote Due to Specifications

**Solution:**
- Increase trace/space widths
- Use standard board thickness
- Choose common surface finish (HASL)
- Remove panelization (order as single boards)

### Issue: Assembly Problems

**Solution:**
- Verify pick & place coordinates
- Check component orientations
- Ensure adequate spacing for tools
- Provide clear assembly instructions

## JLPCB Resources

- **Website**: https://jlpcb.com/
- **Quote Calculator**: https://cart.jlpcb.com/quote
- **DFM Guidelines**: Check JLPCB website for latest guidelines
- **Support Email**: support@jlpcb.com
- **FAQ**: Available on JLPCB website

## File Upload Instructions

### Using JLPCB Web Interface

1. Navigate to Cart → Quote
2. Click "Add Gerber File"
3. Upload compressed file (max 50MB)
4. Confirm specifications:
   - Board size
   - Number of layers
   - Copper weight
   - Solder mask color
   - Silkscreen color
   - Surface finish
   - Quantity
5. Review rendered image
6. Adjust settings if needed
7. Proceed to checkout

### Using Email (for complex designs)

Send to: service@jlpcb.com
- Subject: PCB Manufacturing Request - [Board Name] Rev [X]
- Include all files and specifications document

## Modification Request Process

For updating existing designs:

1. **Document Current Design**
   - Reference board name and revision
   - Include current Gerber files

2. **Specify Changes**
   - Use `LAYOUT_MODIFICATION_REQUEST.md` template
   - Include before/after diagrams
   - Mark modified areas clearly

3. **Provide New Files**
   - Updated Gerber files
   - Updated BOM (if changed)
   - Updated design specifications

4. **Request Quote**
   - Submit via web or email
   - JLPCB reviews modifications
   - Provides new quote

## Estimated Timeline

- **Review**: 1-2 hours
- **DFM Check**: 2-4 hours
- **Quote Generation**: 1-2 hours
- **Manufacturing**: 2-5 days (standard)
- **Expedited**: 1-2 days (additional cost)
- **Shipping**: 3-7 days (varies by location)

## Cost Optimization Tips

1. **Design**: Standard FR4, HASL finish, green soldermask
2. **Quantity**: Larger quantities = lower per-unit cost
3. **Layers**: 2-layer boards are cheapest
4. **Specifications**: Avoid extreme trace widths or small vias
5. **Timing**: Non-urgent orders may qualify for discounts
6. **Panelization**: Multiple boards on single panel = savings

---

**Next Steps:**
1. Review relevant templates in this directory
2. Prepare your design files
3. Complete the design specifications
4. Generate Gerber files
5. Create BOM
6. Submit to JLPCB
7. Review quote and proceed with order

**For modifications:** Use `LAYOUT_MODIFICATION_REQUEST.md` to document changes and requirements.
