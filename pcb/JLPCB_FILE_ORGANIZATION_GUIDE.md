# JLPCB File Organization & Submission Guide

Complete guide for organizing and preparing PCB design files for JLPCB submission.

---

## Table of Contents

1. [Directory Structure](#directory-structure)
2. [File Naming Conventions](#file-naming-conventions)
3. [File Formats & Requirements](#file-formats--requirements)
4. [Gerber File Organization](#gerber-file-organization)
5. [Compression & Upload](#compression--upload)
6. [Quality Assurance](#quality-assurance)
7. [Submission Checklist](#submission-checklist)
8. [Troubleshooting](#troubleshooting)

---

## Directory Structure

### Recommended Folder Organization

```
ProjectName_JLPCB_Submission_v1/
│
├── 📁 Gerber_Files/
│   ├── ProjectName_Top.GTL
│   ├── ProjectName_Bottom.GBL
│   ├── ProjectName_TopSolder.GTO
│   ├── ProjectName_BottomSolder.GBT
│   ├── ProjectName_TopSilk.GTS
│   ├── ProjectName_BottomSilk.GBS
│   ├── ProjectName_OutlineEdge.GKO
│   ├── ProjectName_Drill.XLN
│   ├── ProjectName_Drill.TXT (optional)
│   └── README.txt (layer description)
│
├── 📁 Design_Files/
│   ├── ProjectName.kicad_pcb
│   ├── ProjectName.sch
│   ├── ProjectName_Schematic.pdf
│   └── ProjectName_BlockDiagram.pdf
│
├── 📁 Documentation/
│   ├── DESIGN_SPECIFICATIONS.md
│   ├── BOM.csv
│   ├── FABRICATION_CHECKLIST.md
│   ├── LayerStackup.pdf
│   ├── PCB_Layout_Drawing.pdf
│   ├── Assembly_Drawing.pdf (if SMT)
│   └── Testing_Plan.pdf
│
├── 📄 JLPCB_SUBMISSION_REQUIREMENTS.md
├── 📄 README.txt (submission overview)
└── 📄 SUBMISSION_NOTES.txt (special instructions)
```

---

## File Naming Conventions

### Standard Naming Pattern

```
[ProjectName]_[LayerType].[FileExtension]
```

### Examples

**Good Naming:**
```
MyBoard_Top.GTL
MyBoard_Bottom.GBL
MyBoard_TopSolder.GTO
MyBoard_BottomSolder.GBT
MyBoard_TopSilk.GTS
MyBoard_BottomSilk.GBS
MyBoard_Outline.GKO
MyBoard_Drill.XLN
BOM.csv
```

**Avoid:**
```
❌ top.GTL (no project name)
❌ My Board_Top.GTL (space in name)
❌ MyBoard-Top-Layer.GTL (too many dashes)
❌ MYBOARD_TOP.GTL (unnecessarily long name)
❌ v1_final_v2_actual_real.GTL (version chaos)
```

### Multi-Layer Naming

**4-Layer Board:**
```
ProjectName_Layer1_Top.GTL
ProjectName_Layer2_Inner1.G2
ProjectName_Layer3_Inner2.G3
ProjectName_Layer4_Bottom.GBL
```

**6-Layer Board:**
```
ProjectName_Layer1_Top.GTL
ProjectName_Layer2_Inner1.G2
ProjectName_Layer3_Inner2.G3
ProjectName_Layer4_Inner3.G4
ProjectName_Layer5_Inner4.G5
ProjectName_Layer6_Bottom.GBL
```

---

## File Formats & Requirements

### Gerber Files Format

| Layer | Extension | Format | Required |
|-------|-----------|--------|----------|
| Top Copper | .GTL | RS-274X | Yes |
| Bottom Copper | .GBL | RS-274X | Yes |
| Top Soldermask | .GTO | RS-274X | Yes |
| Bottom Soldermask | .GBT | RS-274X | Yes |
| Top Silkscreen | .GTS | RS-274X | Yes |
| Bottom Silkscreen | .GBS | RS-274X | Optional* |
| Board Outline | .GKO | RS-274X | Yes |
| Drill File | .XLN or .NC | Excellon | Yes |
| Aperture List | .TXT | Text | Optional |
| Inner Layers | .G2, .G3, etc. | RS-274X | If multi-layer |

*Optional, but recommended for consistency.

### Other File Formats

| File Type | Format | Extension | Required |
|-----------|--------|-----------|----------|
| Bill of Materials | CSV or Excel | .csv/.xlsx | Yes |
| Schematic | PDF | .pdf | Yes |
| PCB Layout | PDF | .pdf | Yes |
| Layer Stackup | PDF | .pdf | Yes |
| Design Specs | Markdown/PDF | .md/.pdf | Yes |
| CAD File | KiCAD/Altium/Eagle | .kicad_pcb/.PcbDoc/.brd | Optional |

### File Encoding

- **Text Files**: UTF-8 or ASCII
- **Gerber Files**: Binary (Gerber format)
- **Drill Files**: ASCII (Excellon format)
- **CSV Files**: UTF-8 with comma separator
- **PDF Files**: Standard PDF format

---

## Gerber File Organization

### Gerber Viewer Verification

Before submission, verify files in a Gerber viewer:

**Online Viewers:**
1. **GerbV Online**: https://gerbv.github.io/
2. **ViewMate**: https://www.viewmate.com/
3. **JLCPCB Viewer**: https://jlcpcb.com/ (integrated)
4. **CAM350**: Commercial tool
5. **Mentor Xpedition**: Professional tool

### Verification Checklist

When viewing Gerber files:

- [ ] All layers display correctly
- [ ] Board outline is clearly defined
- [ ] Copper traces are continuous
- [ ] No floating geometry or islands
- [ ] Vias visible and positioned correctly
- [ ] Solder mask clearances look right
- [ ] Silkscreen readable and well-placed
- [ ] Drill holes match copper pads

### Gerber File Contents Verification

**Top Layer (GTL) Should Show:**
- All top copper traces
- Pads for top-side components
- Vias connecting to bottom
- Top-side traces clearly routed

**Bottom Layer (GBL) Should Show:**
- All bottom copper traces
- Pads for bottom-side components
- Vias connecting to top
- Bottom-side traces clearly routed

**Soldermask Layers (GTO/GBT) Should Show:**
- Openings over all pads
- Openings over all vias
- Appropriate clearance from copper
- No mask covering critical areas

**Silkscreen Layers (GTS/GBS) Should Show:**
- Component designators
- Polarity indicators (+ - or triangles)
- Connector labels
- Text readable and properly sized
- No overlap with component pads

**Outline Layer (GKO) Should Show:**
- Board perimeter clearly defined
- Closed loop with no gaps
- Board dimensions accurate
- Any cutouts clearly marked

**Drill File (XLN) Should Show:**
- All via holes
- All plated through holes
- Tool list with sizes
- Correct coordinates

---

## Compression & Upload

### Organizing Files for Compression

**Step 1: Create Main Folder**
```bash
mkdir ProjectName_JLPCB_v1
```

**Step 2: Create Subfolders**
```bash
mkdir ProjectName_JLPCB_v1/Gerber_Files
mkdir ProjectName_JLPCB_v1/Design_Files
mkdir ProjectName_JLPCB_v1/Documentation
```

**Step 3: Copy Files to Folders**
```bash
# Copy Gerber files
cp *.GTL ProjectName_JLPCB_v1/Gerber_Files/
cp *.GBL ProjectName_JLPCB_v1/Gerber_Files/
cp *.XLN ProjectName_JLPCB_v1/Gerber_Files/
# ... etc

# Copy design files
cp *.kicad_pcb ProjectName_JLPCB_v1/Design_Files/
cp *.sch ProjectName_JLPCB_v1/Design_Files/
# ... etc

# Copy documentation
cp *.md ProjectName_JLPCB_v1/Documentation/
cp *.csv ProjectName_JLPCB_v1/Documentation/
# ... etc
```

### Creating Archive

**Linux/Mac - ZIP Format:**
```bash
zip -r ProjectName_JLPCB_v1.zip ProjectName_JLPCB_v1/
```

**Linux/Mac - TAR.GZ Format (smaller):**
```bash
tar -czf ProjectName_JLPCB_v1.tar.gz ProjectName_JLPCB_v1/
```

**Linux/Mac - Check File Size:**
```bash
ls -lh ProjectName_JLPCB_v1.zip
du -sh ProjectName_JLPCB_v1/
```

**Windows - Using Built-in Compression:**
1. Right-click `ProjectName_JLPCB_v1` folder
2. Select "Send to → Compressed (zipped) folder"
3. Result: `ProjectName_JLPCB_v1.zip`

**Windows - Using 7-Zip (smaller files):**
1. Right-click `ProjectName_JLPCB_v1` folder
2. Select "7-Zip → Add to archive"
3. Format: 7z or ZIP
4. Result: `ProjectName_JLPCB_v1.7z`

### File Size Verification

**Maximum Size:** 50MB

**Checking Size:**

```bash
# Linux/Mac
ls -lh ProjectName_JLPCB_v1.zip
stat ProjectName_JLPCB_v1.zip  # Detailed info

# Windows PowerShell
(Get-Item ProjectName_JLPCB_v1.zip).length / 1MB

# Web tool
https://www.filesizecalculator.com/
```

### Upload to JLPCB

**Step 1: Visit JLPCB Quote Page**
- URL: https://cart.jlpcb.com/quote

**Step 2: Add Gerber File**
- Click "Add Gerber File" button
- Select your ZIP/7Z archive
- Wait for upload completion

**Step 3: Review Design**
- JLPCB renders the design
- Check board preview
- Verify colors and layers

**Step 4: Confirm Specifications**
- Board size (auto-detected)
- Number of layers (auto-detected)
- Copper weight
- Solder mask color
- Silkscreen color
- Surface finish
- Quantity

**Step 5: Proceed**
- Review quote
- Adjust settings if needed
- Add to cart and checkout

---

## Quality Assurance

### Pre-Submission Validation

**Gerber Files Validation:**

1. **Syntax Check**
   - Use Gerber viewer to open all files
   - Check for parsing errors
   - Verify file integrity

2. **Layer Check**
   - Ensure all required layers present
   - Verify layer names match standard
   - Check for missing or corrupt layers

3. **Content Check**
   - Board outline complete
   - Copper traces continuous
   - Vias properly placed
   - Solder mask coverage adequate
   - Silkscreen readable
   - No floating geometry

### BOM Validation

- [ ] Part numbers correct and current
- [ ] Quantities match design
- [ ] All components referenced in layout
- [ ] Suppliers identified
- [ ] Costs realistic
- [ ] No typos or formatting errors

### Documentation Validation

- [ ] All specs clearly defined
- [ ] No conflicting information
- [ ] Revisions current
- [ ] Signatures/approvals present
- [ ] Contact information accurate

### Final Checks

```bash
# Create checklist
cat > FINAL_CHECKS.txt << EOF
Gerber Files:
- [ ] All layers present (GTL, GBL, GTO, GBT, GTS, GBS, GKO, XLN)
- [ ] File format RS-274X
- [ ] No corruption or errors
- [ ] Viewed in Gerber viewer - all looks correct
- [ ] Board outline clearly defined
- [ ] Copper continuous, no islands
- [ ] Vias properly positioned

BOM:
- [ ] All components listed
- [ ] Part numbers current
- [ ] Quantities accurate
- [ ] Costs reasonable
- [ ] No formatting errors

Documentation:
- [ ] Design specs complete
- [ ] Fabrication checklist done
- [ ] All fields filled
- [ ] Approvals obtained
- [ ] Contact info current

Files:
- [ ] Archive created
- [ ] Size < 50MB
- [ ] All files included
- [ ] Naming convention followed
- [ ] Integrity verified

Ready to Submit:
- [ ] YES - All checks passed
- [ ] NO - Issues must be resolved
EOF
```

---

## Submission Checklist

### Final Pre-Submission Verification

**Document Preparation:**
- [ ] DESIGN_SPECIFICATIONS.md completed
- [ ] BOM.csv or Excel file created
- [ ] FABRICATION_CHECKLIST.md filled out
- [ ] LAYOUT_MODIFICATION_REQUEST.md (if applicable)
- [ ] All approvals obtained

**File Organization:**
- [ ] Gerber files in Gerber_Files/ folder
- [ ] Design files in Design_Files/ folder
- [ ] Documentation in Documentation/ folder
- [ ] README files created
- [ ] Naming conventions followed

**Gerber Files:**
- [ ] GTL (Top copper) present and valid
- [ ] GBL (Bottom copper) present and valid
- [ ] GTO (Top soldermask) present and valid
- [ ] GBT (Bottom soldermask) present and valid
- [ ] GTS (Top silkscreen) present and valid
- [ ] GBS (Bottom silkscreen) present and valid
- [ ] GKO (Board outline) present and valid
- [ ] XLN (Drill file) present and valid
- [ ] All files reviewed in Gerber viewer
- [ ] No corruption or errors detected

**Archive:**
- [ ] Files compressed (ZIP or 7Z)
- [ ] Archive integrity verified
- [ ] File size verified < 50MB
- [ ] Archive name follows convention
- [ ] Can extract and verify contents

**Submission:**
- [ ] Contact information confirmed
- [ ] Email or upload method chosen
- [ ] All files ready to send
- [ ] Special instructions noted
- [ ] Budget approved
- [ ] Timeline confirmed

### Pre-Upload Verification

```bash
# Verify archive contents
unzip -t ProjectName_JLPCB_v1.zip

# List contents
unzip -l ProjectName_JLPCB_v1.zip

# Check specific files
unzip -p ProjectName_JLPCB_v1.zip Gerber_Files/ProjectName_Top.GTL | head
```

---

## Troubleshooting

### Common File Issues

#### Issue: "Invalid Gerber Format"

**Causes:**
- File corrupted during export
- Wrong file format selected
- File encoding issue

**Solution:**
1. Re-export Gerber files from CAD software
2. Verify RS-274X format selected
3. Check file encoding (should be ASCII/UTF-8)
4. Test with Gerber viewer
5. Resubmit

#### Issue: "Missing Layers"

**Causes:**
- Layer not exported from CAD
- File accidentally deleted
- Archive incomplete

**Solution:**
1. Check all required layers exported
2. Verify files exist in directory
3. Verify archive integrity
4. Recreate archive with all files
5. Resubmit

#### Issue: "File Size Too Large"

**Causes:**
- High-resolution PDF files
- Multiple copies of same file
- Unnecessary files included
- CAD files not optimized

**Solution:**
```bash
# Check file sizes
du -sh *

# Remove unnecessary files
rm *.bak *.tmp

# Compress PDFs
# Use online PDF compressor or ImageMagick

# Use better compression
tar -czf archive.tar.gz ProjectName_JLPCB_v1/

# Check new size
ls -lh archive.tar.gz
```

#### Issue: "Coordinates Don't Match"

**Causes:**
- Drill file doesn't match copper layers
- Unit mismatch (metric vs imperial)
- File origin incorrect

**Solution:**
1. Verify unit consistency (mm or inches)
2. Check drill file coordinates
3. Re-export with correct settings
4. Verify in Gerber viewer
5. Resubmit

#### Issue: "Can't Extract Archive"

**Causes:**
- Archive corrupted
- Wrong extraction tool
- File permissions

**Solution:**
```bash
# Test archive
unzip -t ProjectName_JLPCB_v1.zip

# Extract with verbose output
unzip -v ProjectName_JLPCB_v1.zip

# If corrupted, recreate
zip -r ProjectName_JLPCB_v1_new.zip ProjectName_JLPCB_v1/
```

---

## Support & Resources

### JLPCB Resources

- **Website**: https://jlpcb.com
- **Quote Tool**: https://cart.jlpcb.com/quote
- **Support Email**: support@jlpcb.com
- **Help Center**: Check JLPCB website
- **FAQ**: Available on JLPCB website

### Gerber Viewer Tools

1. **GerbV**: Free, open-source
   - Website: https://gerbv.github.io/
   - Downloads: https://sourceforge.net/projects/gerbv/

2. **Online Gerber Viewers**:
   - JLCPCB has integrated viewer
   - Gerber Viewer: https://www.gerber-viewer.com/
   - PCBWay: https://www.pcbway.com/

3. **CAD Software**:
   - KiCAD: Has built-in Gerber viewer
   - Altium: Professional viewer
   - Eagle: Built-in tools

### File Compression Tools

**Linux/Mac:**
- Built-in: `zip`, `tar`
- Optional: `7z` (p7zip package)

**Windows:**
- Built-in: ZIP compression
- Optional: 7-Zip, WinRAR, PeaZip

---

## Template Files

This directory includes template files:

1. **JLPCB_SUBMISSION_REQUIREMENTS.md** - Main requirements
2. **DESIGN_SPECIFICATIONS.md** - Design specs template
3. **BOM_TEMPLATE.csv** - Bill of Materials template
4. **FABRICATION_CHECKLIST.md** - Pre-flight checklist
5. **LAYOUT_MODIFICATION_REQUEST.md** - Modification template
6. **JLPCB_FILE_ORGANIZATION_GUIDE.md** - This file

### Using Templates

1. Copy template files to your project
2. Fill in relevant information
3. Remove template rows/examples
4. Verify completeness
5. Include with submission

---

## Summary

**Quick Submission Steps:**

1. ✅ Prepare all files (Gerber, BOM, docs)
2. ✅ Organize in proper folder structure
3. ✅ Follow naming conventions
4. ✅ Verify in Gerber viewer
5. ✅ Create archive (< 50MB)
6. ✅ Upload to JLPCB
7. ✅ Review rendered design
8. ✅ Confirm specifications
9. ✅ Place order
10. ✅ Track and receive boards

**Ready to Submit?** ✅

Use the **FABRICATION_CHECKLIST.md** to verify everything before uploading.

---

**Document Version:** 1.0

**Last Updated:** ___/___/_____

**For:** JLPCB PCB Manufacturing Service

**Questions?** Contact support@jlpcb.com
