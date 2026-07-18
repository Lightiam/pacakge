# LightRail AI NCE - 10-Layer PCB Stackup Specification

## Overview

**Total PCB Thickness:** 2.4 mm (±0.20 mm tolerance)  
**Copper Type:** Copper foil, pure (99.9%)  
**Base Material:** FR-4 (Glass-reinforced epoxy)  
**Glass Transition Temperature (Tg):** ≥170°C  
**Dielectric Loss Tangent (tan δ):** ≤0.02 @ 1 MHz  

---

## Detailed Layer Stackup

### **Layer 1 (Top Copper - F.Cu)**
- **Type:** Signal Layer
- **Copper Thickness:** 35 µm (1.4 mil)
- **Copper Weight:** 0.5 oz (17.5 µm minimum finished)
- **Finished Thickness:** ~35-50 µm (including plating)
- **Purpose:**
  - Component pads and surface-mount placement
  - PCIe signal escape routing (x16 lanes)
  - Short traces to bypass capacitors
  - Via pads
- **Routing Restrictions:** Avoid long traces; use for escape routing only
- **Thermal Vias:** Dense array under ASIC (6+ per 0.1")

**Spacing Requirements:**
- Minimum trace width: 0.10 mm (4 mil)
- Minimum trace spacing: 0.10 mm (4 mil)
- Via diameter: 0.30 mm (12 mil)
- Via drill: 0.15 mm (6 mil)

---

### **Layer 2 (Power Plane - VDD_CORE)**
- **Type:** Solid Power Plane
- **Copper Thickness:** 70 µm (2.75 mil)
- **Copper Weight:** 2.0 oz (35 µm finished)
- **Voltage:** +0.9V (Core supply for LR-GEN3-NPU ASIC)
- **Purpose:** Primary power distribution to processor core
- **Current Capacity:** ~210A @ 0.9V
- **Dielectric Stack Below:**
  - Prepreg thickness: 0.125 mm (5 mil)
  - Dielectric constant (εr): 4.5 ±0.2
  - Loss tangent (tan δ): 0.020

**Thermal Management:**
- Via stitching: Max 500 mil spacing
- Thermal vias under ASIC: 6+ per square inch
- Thermal relief spokes: ≥0.5 mm width

---

### **Prepreg Dielectric 1**
- **Type:** Woven glass fabric prepreg (2116)
- **Thickness:** 0.125 mm (5 mil)
- **Resin Content:** ~42% (typ.)
- **Dielectric Constant:** 4.5 ±0.2 @ 1 MHz
- **Loss Tangent:** 0.020
- **Purpose:** Maintain impedance control and stack thickness

---

### **Layer 3 (Signal Layer - Differential Pairs)**
- **Type:** Signal Layer
- **Copper Thickness:** 35 µm
- **Copper Weight:** 0.5 oz
- **Finished Thickness:** ~35-50 µm
- **Purpose:**
  - PCIe Gen4 differential pairs (RX/TX lanes)
  - High-speed HBM3 data lines
  - Clock distribution (core clock)
- **Critical Signals:**
  - PCIe TX[0-15] pairs (10 differential pairs)
  - PCIe RX[0-15] pairs (10 differential pairs)
  - Memory clock (CLK, CLK#, CLKQ, CLKQ#)
  - Memory data lines (high-speed portion)

**Impedance Control:**
- Target: 100Ω ±10% (differential pairs)
- Layer 3 copper over Layer 4 (GND plane) ground reference
- Trace width: ~0.20 mm (for typical stackup)
- Pair spacing: ~0.15 mm (edge-to-edge)

**Routing Rules:**
- Length matching: ±20 mils within lane groups
- No acute angles (45° minimum)
- Guard traces: Recommended between high-speed pairs
- Via count: ≤4 per signal
- Avoid crossing under power planes

---

### **Core Dielectric 1**
- **Type:** FR-4 glass-reinforced epoxy core
- **Thickness:** 0.125 mm (5 mil)
- **Resin Content:** ~50%
- **Dielectric Constant:** 4.5 ±0.2 @ 1 MHz
- **Loss Tangent:** 0.020
- **CTE (X/Y):** 14-16 ppm/°C
- **CTE (Z):** 60-80 ppm/°C

---

### **Layer 4 (Ground Plane - GND)**
- **Type:** Solid Ground Plane (Reference)
- **Copper Thickness:** 70 µm
- **Copper Weight:** 2.0 oz (35 µm finished)
- **Voltage:** GND (0V reference)
- **Purpose:** Signal return path for high-speed signals in Layer 3
- **Current Capacity:** Return currents for all signals
- **Via Stitching:**
  - Spacing: Maximum 500 mil between stitching vias
  - Via diameter: 0.3 mm minimum
  - Thermal vias: 6+ per square inch near ASIC
  - Fanout vias: Around all escape areas

---

### **Prepreg Dielectric 2**
- **Type:** Woven glass fabric prepreg (2116)
- **Thickness:** 0.076 mm (3 mil)
- **Resin Content:** ~42%
- **Dielectric Constant:** 4.5 ±0.2
- **Loss Tangent:** 0.020
- **Purpose:** Maintain spacing between Layer 4 (GND) and Layer 5

---

### **Layer 5 (Signal Layer - Power & Memory)**
- **Type:** Signal Layer
- **Copper Thickness:** 70 µm
- **Copper Weight:** 1.0 oz (25 µm finished)
- **Finished Thickness:** ~70-85 µm
- **Purpose:**
  - Power delivery traces (12V distribution to PDM)
  - Memory address/command buses
  - Control signals (write enable, read enable, chip select)
  - Thermal monitoring signal lines
  - Low-speed I2C bus

**Signals:**
- 12V input rails (wide traces, sized for current)
- 1.2V memory supply distribution
- Memory command interface (32-bit)
- Address bus (high-order bits)
- Thermal sensor data lines

**Routing Requirements:**
- Trace width: ≥0.15 mm for power distribution
- Return paths: Via stitching to adjacent GND planes
- Via density: 6+ vias per 0.1" for power traces

---

### **Layer 6 (Power Plane - VDD_1V2)**
- **Type:** Solid Power Plane
- **Copper Thickness:** 70 µm
- **Copper Weight:** 2.0 oz (35 µm finished)
- **Voltage:** +1.2V (Memory and auxiliary supply)
- **Purpose:** Power distribution to HBM3 memory stacks
- **Current Capacity:** ~75A (memory) + ~20A (auxiliary)
- **Total Capacity:** ~95A @ 1.2V

**Decoupling Network:**
- Capacitors tied directly to this plane
- Via stitching to GND planes (Layer 4, 8)
- Thermal vias under memory stacks: 6+ per stack

---

### **Prepreg Dielectric 3**
- **Type:** Woven glass fabric prepreg (2116)
- **Thickness:** 0.076 mm (3 mil)
- **Dielectric Constant:** 4.5 ±0.2
- **Loss Tangent:** 0.020

---

### **Layer 7 (Signal Layer - Memory & Debug)**
- **Type:** Signal Layer
- **Copper Thickness:** 35 µm
- **Copper Weight:** 0.5 oz
- **Finished Thickness:** ~35-50 µm
- **Purpose:**
  - HBM3 memory data lines (lower-speed portion)
  - Memory strobe signals
  - JTAG debug signals (TCO, TDI, TMS, TCK)
  - I2C clock & data (SMBus)
  - LED driver signals
  - Fan PWM control

**Critical Signals:**
- JTAG: TCK (max 25 MHz), TDO, TMS, TDI
- I2C: SDA, SCL (400 kHz standard mode)
- Memory strobes: DQS, DQS#
- Fan control: PWM0, PWM1 (25 kHz)

**Impedance Control:**
- Generally not required for these lower-speed signals
- Trace width: ≥0.10 mm
- Spacing: ≥0.10 mm

---

### **Layer 8 (Ground Plane - GND Return)**
- **Type:** Solid Ground Plane (PDM Return)
- **Copper Thickness:** 70 µm
- **Copper Weight:** 2.0 oz
- **Voltage:** GND (0V reference)
- **Purpose:** Primary return path for power delivery currents
- **Via Stitching:**
  - Dense under PDM controller region
  - Stitching vias every 300-400 mil
  - 8+ vias per phase leg (24 phases)

---

### **Prepreg Dielectric 4**
- **Type:** Woven glass fabric prepreg (1067 or 2116)
- **Thickness:** 0.125 mm (5 mil)
- **Dielectric Constant:** 4.5 ±0.2
- **Loss Tangent:** 0.020

---

### **Layer 9 (Signal Layer - Fan & LED Control)**
- **Type:** Signal Layer (Internal routing)
- **Copper Thickness:** 35 µm
- **Copper Weight:** 0.5 oz
- **Finished Thickness:** ~35-50 µm
- **Purpose:**
  - Fan PWM signals (PWM0, PWM1)
  - LED control signals (Red, Yellow, Blue)
  - Temperature sensor readback
  - Status monitoring signals
  - Ground routing for internal circuits

**Low-Speed Signals Only:**
- No high-speed routing on this layer
- Max frequency: <50 MHz
- Via count: Minimal (use for local interconnect)

---

### **Layer 10 (Back Copper - B.Cu)**
- **Type:** Signal Layer (Component bottom)
- **Copper Thickness:** 35 µm
- **Copper Weight:** 0.5 oz
- **Finished Thickness:** ~35-50 µm
- **Purpose:**
  - Component bottom pads
  - Via pads
  - Short interconnect traces
  - No major routing (escape only)
- **Solder Mask:** Applied (resist pattern)
- **Silkscreen:** Applied (reference designators, logos)

---

## Complete Stackup Summary Table

| Layer | Name | Type | Thickness | Copper Wt | Voltage | Purpose |
|-------|------|------|-----------|-----------|---------|---------|
| 1 | F.Cu | Signal | 35 µm | 0.5 oz | Mixed | Escape, PCIe, bypass |
| — | Prepreg | Dielectric | 125 µm | — | — | Spacing |
| 2 | VDD_CORE | Plane | 70 µm | 2.0 oz | +0.9V | Core power (210A) |
| — | Prepreg | Dielectric | 76 µm | — | — | Spacing |
| 3 | Signal | Signal | 35 µm | 0.5 oz | Mixed | Diff pairs, hi-speed |
| — | Core | Dielectric | 125 µm | — | — | Reference |
| 4 | GND | Plane | 70 µm | 2.0 oz | GND | Signal return |
| — | Prepreg | Dielectric | 76 µm | — | — | Spacing |
| 5 | Signal | Signal | 70 µm | 1.0 oz | Mixed | Power, memory, control |
| — | Core | Dielectric | 125 µm | — | — | Reference |
| 6 | VDD_1V2 | Plane | 70 µm | 2.0 oz | +1.2V | Memory power (75A) |
| — | Prepreg | Dielectric | 76 µm | — | — | Spacing |
| 7 | Signal | Signal | 35 µm | 0.5 oz | Mixed | Memory, debug, fan |
| — | Prepreg | Dielectric | 125 µm | — | — | Spacing |
| 8 | GND | Plane | 70 µm | 2.0 oz | GND | PDM return |
| 9 | Signal | Signal | 35 µm | 0.5 oz | Mixed | Fan, LED, sensors |
| 10 | B.Cu | Signal | 35 µm | 0.5 oz | Mixed | Component bottom |
| **Total** | **PCB** | — | **2.4 mm** | — | — | —

---

## Impedance Control

### Target Impedance Values

**Single-Ended Signals (Layers 1, 3, 5, 7, 9, 10):**
- Target: 50Ω ±10% (range: 45-55Ω)
- Tolerance class: ±10% acceptable for most signals
- Measurement: Time-domain reflectometry (TDR)

**Differential Pairs (PCIe, Memory clocks):**
- Target: 100Ω ±10% (range: 90-110Ω)
- Layer pair combinations:
  - Layer 3 over Layer 4 (GND) → PCIe & memory clocks
  - Trace spacing: 0.15 mm
  - Trace width: 0.20 mm (typical for this stackup)

### Impedance Calculation Method

For microstrip (signal over ground plane):

```
Z₀ = 377 / (√εᵣ) × ln[4h / (πw(1 + t/w))]

Where:
  Z₀ = Characteristic impedance (Ω)
  h = Height above ground plane (mm)
  w = Trace width (mm)
  t = Trace thickness (mm)
  εᵣ = Relative permittivity (≈4.5 for FR-4)
```

**Typical Example (Layer 3 over Layer 4):**
- h = 0.125 mm (prepreg + core thickness to GND)
- w = 0.20 mm (trace width)
- t = 0.035 mm (0.5 oz copper)
- εᵣ = 4.5
- **Result:** Z₀ ≈ 100Ω ±10%

---

## Resin System & Specifications

**Resin Type:** Halogen-free epoxy resin  
**Filler:** Glass fiber (woven, E-type)  
**Glass Content:** ~50% by weight  

**Electrical Properties:**
- Dielectric constant (εᵣ): 4.5 ±0.2 @ 1 MHz
- Loss tangent (tan δ): ≤0.020 @ 1 MHz
- Volume resistivity: >10¹¹ Ω·cm
- Surface resistivity: >10⁶ Ω/square

**Thermal Properties:**
- Glass transition temperature (Tg): ≥170°C (IPC-TM-650)
- Decomposition temperature: >350°C
- CTE (X/Y direction): 14-16 ppm/°C
- CTE (Z direction): 60-80 ppm/°C
- Thermal conductivity: ~0.3 W/m·K

**Mechanical Properties:**
- Tensile strength: ≥40 MPa
- Flexural strength: ≥110 MPa
- Flexural modulus: ≥3.6 GPa
- Moisture absorption: <0.2% @ saturation

---

## Manufacturing Specifications

**Solder Mask:**
- Type: Liquid Photoimageable (LPI)
- Thickness: 25-50 µm (front & back)
- Color: Green (standard) or other per customer request
- Type: Epoxy-based, halogen-free
- Copper thickness under mask: <0.1 mm

**Silkscreen:**
- Type: Epoxy-based ink
- Color: White (front & back)
- Thickness: 15-25 µm
- Line width minimum: 0.15 mm
- Character height minimum: 0.8 mm

**Surface Finish:**
- Type: ENIG (Electroless Nickel Immersion Gold) - PREFERRED
  - Nickel thickness: 2.5-5 µm
  - Gold thickness: 0.05-0.2 µm
  - Alternative: HASL (Hot Air Solder Leveling) if cost-critical
  - Copper preservation: >80% coverage post-plating

**Edge Treatment:**
- Copper edge clearance: ≥0.5 mm from board edge
- Solder mask edge clearance: ≥0.3 mm
- Via minimum distance to edge: ≥0.5 mm
- Chamfered edges: Optional (beveled 45°, ~1 mm)

---

## Quality Control & Testing

**Continuity Testing:**
- Flying probe or bed-of-nails test
- Coverage: 100% of connections
- Resistance threshold: ≤0.1Ω per 1 inch of trace

**Electrical Insulation:**
- Hypot testing: 500V AC for 1 second
- Leakage current: <1 mA

**Dielectric Strength:**
- Test voltage: ≥1500V for ≤2.4mm board
- No breakdown allowed

**Thermal Cycling:**
- Temperature range: -20°C to +80°C
- Dwell time: 15 minutes @ extremes
- Cycles: 3 minimum
- Measurement: Continuity test before & after

---

## Storage & Handling

**Environmental Conditions:**
- Temperature: 15-35°C (optimal)
- Humidity: 30-70% relative (RH)
- Do not expose to direct sunlight or UV

**Moisture Level:**
- Target IPC Level: 2A (0-20% RH exposure before assembly)
- If moisture absorbed: Bake at 125°C ±5°C for 24 hours

**Handling:**
- Wear ESD wrist straps during handling
- Store in ESD-safe containers with desiccant
- Avoid mechanical stress or flexing of PCB

---

## References

- IPC-2221A: Generic Standards for Printed Board Design
- IPC-6012: Acceptability of Printed Boards
- IPC-A-610E: Acceptability of Electronics Assemblies
- IPC-TM-650: Test Methods for Printed Boards
- PCI Express Base Specification Revision 4.0
- JEDEC HBM3 Memory Standard

---

**Document Version:** 1.0  
**Date:** July 17, 2026  
**Status:** Final Release for Manufacturing
