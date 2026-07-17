# LightRail AI — NCE Fab-Clean Reference Package (with TFLN)

Complete reference package for the Neural Calibration Engine (NCE), aligned
to the folder conventions used in the `Lightiam/Fab07` repo
(`nce_reference/`). Drop this content into that repo's `nce_reference/`
tree (RTL/HAL) and `docs/` + `pcb/` (new additions) to update it.

## Contents

- `rtl/` — SystemVerilog RTL (top, components, package, self-checking testbench)
- `hal/` — C hardware abstraction layer (register map, driver functions)
- `docs/TFLN_INTEGRATION.md` — TFLN (thin-film lithium niobate) modulator
  electrical/optical characteristics and how the NCE drives them
- `docs/RTL_HAL_NOTES.md` — register map + design decisions + gap-fix log
- `pcb/` — BOM, stackup/impedance characteristics, routing guide, mapped to
  the `TFLN_ALNODE_X2_REFERENCE` board floor plan

## Status

Reference design / documentation package — NOT foundry-qualified, NOT
DRC-clean routed copper. RTL has not been run through a simulator or
synthesis tool in this pass (by design, per this task's instructions). See
`docs/RTL_HAL_NOTES.md` §4 and `pcb/PCB_CHARACTERISTICS.md` §6 for the
explicit list of items still required before real fab/tape-out submission.

Source discussion: https://github.com/Lightiam/Fab07
