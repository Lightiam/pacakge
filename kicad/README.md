# LightRail AI NCE - KiCAD PCB Layout Project

## Project Overview

Complete PCB layout design for the **LightRail AI NCE (Neural Computing Engine)** motherboard, based on the proven architecture of the NVIDIA GeForce RTX 2080 reference design, adapted for the LR-GEN3-NPU ASIC.

**Reference Design:** NVIDIA GeForce RTX 2080 PG180-A02 Rev A  
**Adapted for:** LightRail AI NCE - 5nm Neural Processor

---

## Project Structure

```
kicad/
├── LightRail_NCE.pro              ← KiCAD Project File
├── LightRail_NCE.kicad_sch        ← Schematic (symbols defined)
├── LightRail_NCE.kicad_pcb        ← PCB Layout (10-layer, 267x111mm)
├── docs/
│   ├── design-constraints.json    ← Design specifications & DFM targets
│   ├── LAYER-STACKUP.md           ← 10-layer stackup details
│   └── PLACEMENT-GUIDE.md         ← Component placement rationale
├── libraries/                      ← Component symbols & footprints
├── datasheets/                     ← IC datasheets (referenced)
└── gerbers/                        ← Output Gerber files (to be generated)
```

---

## Getting Started with KiCAD 10

### 1. Open the Project

```bash
# Option A: Command line
kicad kicad/LightRail_NCE.pro

# Option B: KiCAD GUI
# File → Open Project → LightRail_NCE.pro
```

### 2. Project Files

- **LightRail_NCE.pro** — Project configuration (KiCAD 8.0+ format)
- **LightRail_NCE.kicad_sch** — Electrical schematic with symbol definitions
- **LightRail_NCE.kicad_pcb** — PCB layout with component placement

### 3. Board Outline

**Board Dimensions:**
- Length: 267 mm (PCIe form factor)
- Width: 111 mm (dual-slot)
- Thickness: 2.4 mm
- Layers: 10 (controlled impedance)

---

## PCB Layout Architecture (NVIDIA-Based Adaptation)

### Central Component: LR-GEN3-NPU ASIC

**Position:** Center of board (133.35, 55.88 mm)  
**Package:** BGA-3136 (23×23 mm, 0.8 mm pitch)  
**Power:** 210W @ 0.9V nominal

```
┌─────────────────────────────────────────────────┐
│ PCIe Connector (Left Edge)                      │
│                                                 │
│  Power Delivery  │  LR-GEN3-NPU (Center)  │    │
│  Components      │     (ASIC)             │    │
│  (PDM, FETs)     │   300mm² die           │    │
│  (Left side)     │   Heatspreader         │    │
│                  │   (50x50mm)            │    │
│  ┌──────────────┴────────────────────┬───┤    │
│  │  HBM3 Stacks   │     ASIC       │ HBM3   │    │
│  │  S0-S5 (Left)  │    (center)    │ S6-S11 │    │
│  │  (6 stacks)    │               │ (Right)│    │
│  │  (40×72mm)     │               │ (6stk) │    │
│  └──────────────┬────────────────────┴───┤    │
│                  │                       │    │
│  Power Supplies  │  Fans & Thermal Mgmt  │ J2,J3
│  Monitoring ICs  │  (Status LEDs, JTAG)  │
│  (Right side)    │                       │
│                                                 │
└─────────────────────────────────────────────────┘
         Fans Mounted (Rear, Vertical)
```

### Major Component Placements

| Component | Part Number | Qty | Package | Location | Purpose |
|-----------|------------|-----|---------|----------|---------|
| **Main ASIC** | LR-GEN3-NPU-5NM | 1 | BGA-3136 | Center (133.35, 55.88) | Neural Processor Core |
| **Memory** | H58M16ABHX | 12 | HBM3 Stack | 6 left + 6 right sides | 192GB total bandwidth |
| **PDM Controller** | MP5949 | 1 | QFN-48 | Left side (50, 15) | 12-phase power regulation |
| **Voltage Monitor** | INA3221 | 1 | TSSOP-20 | Left side (75, 15) | Rail monitoring (I2C) |
| **Thermal Ctrl** | NCT6798D | 1 | QFN-48 | Left side (100, 15) | Fan PWM, temp sensing |
| **Phase FETs** | CSD95481RWJ | 24 | PowerPAK-8×8 | Left & right sides | High-side/low-side switches |
| **Connectors** | Various | 4 | Edge/Molex | Right & left edges | PCIe, PEX-8, PEX-6, JTAG |
| **Status LEDs** | OSRAM/Kingbright | 3 | 1206 | Right side | Power/Thermal/Activity |
| **Fan Headers** | JST | 2 | 2-pin | Right side | PWM fan control |

---

## 10-Layer PCB Stackup

Designed for high-speed signal integrity and power delivery:

| Layer | Type | Thickness | Function |
|-------|------|-----------|----------|
| **1** | Signal (F.Cu) | 35 µm | PCIe escape routing, component pads |
| **2** | Plane (VDD_CORE) | 70 µm | **0.9V Power Plane** (210A) |
| **3** | Signal | 35 µm | Differential pairs (PCIe Gen4, memory) |
| **4** | Plane (GND) | 70 µm | **Ground Reference** (return paths) |
| **5** | Signal | 70 µm | Power delivery, memory signals |
| **6** | Plane (VDD_1V2) | 70 µm | **1.2V Memory Power** (75A) |
| **7** | Signal | 35 µm | Memory interface, debug, I2C |
| **8** | Plane (GND) | 70 µm | **Ground Return** (PDM) |
| **9** | Signal (Internal) | 35 µm | Fan control, LED, sensor signals |
| **10** | Signal (B.Cu) | 35 µm | Component bottom routing |

**Stackup Profile:**
- Total thickness: 2.4 mm (standard)
- Prepreg thickness (between cores): 0.076 mm
- Core thickness: 0.125 mm
- Copper weights: 0.5 oz (signal), 1 oz, 2 oz (planes)

---

## Critical Design Features

### 1. Power Delivery (PDM)

- **12-phase PWM regulation** (MP5949 controller)
- **0.9V @ 210A core supply** (Vcore)
- **1.2V @ 75A memory supply** (Vmem)
- **>92% efficiency** at rated load
- **<50mV transient response** on 50A step load

**Power Sources:**
- PCIe x16 slot: 75W (12V + 5V + 3.3V)
- 8-pin PEX primary: 225W (12V + 5V)
- 6-pin PEX secondary (optional): 120W
- **Total available: 420W** | Typical operating: 225W

### 2. Memory Subsystem

- **12× HBM3 Stacks** (SK Hynix H58M16ABHX)
  - **192GB total** (12 × 16Gb)
  - **256 GB/s bandwidth** (2.4 GHz DDR)
  - Stacks positioned on left/right sides (6+6 configuration)
  - Source-synchronous clocking (CLK, CLK#, CLKQ, CLKQ#)

### 3. High-Speed Signal Integrity

**PCIe Gen4 x16:**
- **16 GT/s per lane** (16 lanes total)
- 100Ω differential impedance (±10%)
- Length-matched within ±20 mils
- AC-coupled TX pairs, on-die termination on RX
- Via stitching around escape area

**HBM3 Memory Clocks:**
- 2.4 GHz DDR (1.2 GHz effective)
- Source-sync timing
- Differential clock pairs routed over GND plane
- <3 ps period jitter, <100 ps skew between stacks

### 4. Thermal Management

- **Heatspreader:** Aluminum 6061-T6, 50×50×3 mm, >90% die coverage
- **Thermal Interface:** Arctic MX-4 (5 W/mK), 0.5 mm layer
- **Fans:** 2× 40mm DC axial (PWM controlled), 2500 RPM nominal, ~20 CFM
- **Sensors:** 5 thermistors + internal die sensor
- **Throttle:** 85°C soft, 95°C hard shutdown

### 5. Power Sequencing

**Soft-Start Timing:**
- 0ms: Power applied (PCIe insertion)
- 10ms: Input voltage stable
- 15ms: 3.3V LDO enabled
- 20ms: 1.8V JTAG LDO enabled
- 30ms: PDM clocks enabled
- 35-80ms: Core/Memory voltage ramps (soft-start RC)
- 100ms: PLL lock (2.4 GHz)
- 150ms: System ready (PCIe link training)

---

## Design Rules & Constraints

### Trace & Via Specifications

- **Minimum trace width:** 0.1 mm (general), 0.2 mm (power)
- **Minimum spacing:** 0.1 mm
- **Via diameter:** 0.3 mm (signal), 0.4 mm (power)
- **Via drill:** 0.15 mm
- **Annular ring:** 0.15 mm minimum
- **Edge clearance:** 0.3 mm (0.5 mm recommended)

### Impedance Control

- **Single-ended signals:** 50Ω target (±10%)
- **Differential pairs:** 100Ω target (±10%)
- Controlled via layer stackup and trace width

### Thermal Via Requirements

- **Around high-power components:** 6+ vias per component lead
- **Under power planes:** Stitching vias every 500 mils
- **Under ASIC:** Dense thermal via grid (to be filled during routing)

---

## Component Libraries

### Symbol Library Location
`kicad/libraries/LightRail_NCE.kicad_sym`

**Pre-defined Symbols:**
- LR-GEN3-NPU (3136-pin BGA)
- H58M16ABHX (HBM3 Stack)
- MP5949 (PWM Controller)
- CSD95481RWJ (Phase FET)
- INA3221 (Voltage Monitor)
- NCT6798D (Thermal Controller)
- Connectors (PCIe, PEX, JTAG, headers)

### Footprint Library Location
`kicad/libraries/LightRail_NCE.kicad_mod`

**Pre-defined Footprints:**
- BGA-3136 (23×23mm, 0.8mm pitch)
- BGA-1024 (HBM3 Stack, 10.5×13mm)
- QFN-48 (7×7mm, 0.5mm pitch)
- PowerPAK-8×8 (Phase FETs)
- Edge connector (PCIe x16, 164-pin)
- Molex 5559 (PEX 6/8-pin)
- 2×7 Header (JTAG, 0.1" pitch)

---

## Manufacturing Outputs

### Gerber Files (to be generated)

```
gerbers/
├── LightRail_NCE-F.Cu.gbr          Layer 1 (Front copper)
├── LightRail_NCE-In1.Cu.gbr        Layer 2 (Core power)
├── LightRail_NCE-In2.Cu.gbr        Layer 3 (Signal)
├── LightRail_NCE-In3.Cu.gbr        Layer 4 (Ground)
├── LightRail_NCE-In4.Cu.gbr        Layer 5 (Signal)
├── LightRail_NCE-In5.Cu.gbr        Layer 6 (Memory power)
├── LightRail_NCE-In6.Cu.gbr        Layer 7 (Signal)
├── LightRail_NCE-In7.Cu.gbr        Layer 8 (Ground)
├── LightRail_NCE-B.Cu.gbr          Layer 10 (Back copper)
├── LightRail_NCE-F.Mask.gbr        Front solder mask
├── LightRail_NCE-B.Mask.gbr        Back solder mask
├── LightRail_NCE-F.Silks.gbr       Front silkscreen
├── LightRail_NCE-B.Silks.gbr       Back silkscreen
├── LightRail_NCE-Edge.Cuts.gbr     Board outline
├── LightRail_NCE.drl               Drill file (Excellon)
├── LightRail_NCE.xln               Drill legend
└── LightRail_NCE.rpt               DRC Report
```

### BOM (Bill of Materials)

Generated via:
```bash
kicad-cli sch export bom LightRail_NCE.kicad_sch -o LightRail_NCE.bom.csv
```

### Centroid File (for Assembly)

Generated via:
```bash
kicad-cli sch export bom --format cpl LightRail_NCE.kicad_sch -o LightRail_NCE.cpl
```

---

## Workflow: PCB Design Completion

### Phase 1: Schematic Finalization ✓ (Complete)
- [x] Main ASIC placed
- [x] Memory subsystem defined
- [x] Power delivery topology
- [x] Thermal management circuit
- [x] Debug interface (JTAG)

### Phase 2: Layout & Routing (Current)
- [x] Board outline & layer stackup defined
- [x] Component placement (based on NVIDIA RTX architecture)
- [ ] Critical signal routing (PCIe, HBM3 clocks)
- [ ] Power delivery routing (12-phase, 210A paths)
- [ ] Ground plane stitching
- [ ] Copper pours (VDD_CORE, VDD_MEM, GND)

### Phase 3: Design Verification (Pending)
- [ ] ERC/DRC cleanup
- [ ] Signal integrity analysis (PCIe Gen4, DDR timing)
- [ ] Thermal analysis (FEA)
- [ ] Power budget verification (ripple, transient response)
- [ ] EMI/EMC pre-check

### Phase 4: Manufacturing Prep (Pending)
- [ ] Gerber export (all 12 layers)
- [ ] Drill file generation
- [ ] BOM/CPL export for assembly
- [ ] Fab house DFM review (panelization, min traces, vias)
- [ ] Final mechanical check (mounting holes, connectors flush)

---

## Next Steps

1. **Open in KiCAD 10:**
   ```bash
   kicad kicad/LightRail_NCE.pro
   ```

2. **Continue Routing:**
   - PCB Editor → Tools → Route Tracks
   - Route critical signals first (PCIe, memory clocks)
   - Add decoupling capacitors around ASIC/memory
   - Fill power planes (Ctrl+B)

3. **Run Design Verification:**
   - Tools → Design Rules Check (DRC)
   - Review layer stackup for signal integrity targets
   - Verify thermal via density under ASIC

4. **Export Gerbers for Manufacturing:**
   - File → Fabrication Outputs → Gerbers
   - Select all layers (1, 2, 3, 4, 5, 6, 7, 8, 10)
   - Include solder mask, silkscreen, edge cuts

5. **Order PCB:**
   - Send gerbers to fab house (JLCPCB, PCBWay, or local fab)
   - Specify 10-layer stackup, 1.6mm thickness, Tg170 FR-4
   - Request DFM review before fabrication

---

## References

- **NVIDIA GeForce RTX 2080 Reference Design:** PG180-A02 Rev A
  - **File:** `../NVIDIA GeForce RTX 2080 PG180-A02 Rev A (1).pdf`
  - **Status:** PRIMARY REFERENCE - Complete architecture, schematics, and layout
  - **Adaptation:** LightRail AI NCE motherboard based on this proven design
- **Design Constraints:** `docs/design-constraints.json`
- **Layer Stackup:** `docs/LAYER-STACKUP.md`
- **Placement Guide:** `docs/PLACEMENT-GUIDE.md`
- **Component Datasheets:** See `datasheets/` folder

---

**Project Version:** 1.0  
**Last Updated:** July 17, 2026  
**Status:** Layout in Progress  

For support or questions, contact: LightRail AI Engineering
