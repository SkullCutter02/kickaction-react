import { Column } from "react-table";

export const tableData: Array<any> = [
  {
    belt: "White",
    crita: "All basic punches, " + "Basic kicks (snap + turning + cut down)",
    critb: "Block, " + "Upper,  middle,  low, " + "Parry, " + "Check, " + "Slip",
    critc: "Underhooks, " + "Overhooks, " + "Snap down, " + "Ankle Pick",
    critd: "All directional movement, " + "Basic stance, " + "Pivots",
    crite: "Pattern 1",
  },
  {
    belt: "Blue/Yellow",
    crita: "Oblique kick, " + "Low kick, " + "Teep, " + "Double turning kick, " + "Slide turning kick",
    critb: "Catching Kicks, " + "Row, " + "Takedown defense, " + "Pull back",
    critc:
      "Russian Tie, " +
      "Full Hip Throw, " +
      "Single and Double leg takedown, " +
      "Standing Guillotine Chok, ",
    critd: "Basic understanding of angles and advantageous positions",
  },
  {
    belt: "Purple/Green",
    crita: "Pull counter, " + "(pull cross, pull jab)",
    critb: "Shoulder roll, " + "Dip, " + "Lean back",
    critc:
      "Standing Arm Triangle, " + "Standing Rear Naked Choke, " + "Back take from single leg, " + "Arm drag",
  },
  {
    belt: "Brown/Blue",
    crita: "Check hook",
    critb: "Is able to effectively weave defense with offense, and respond quickly to the opponent’s attacks",
    critc: "Imanari Roll, " + "Scissor Takedown",
  },
];

export const tableColumns: Array<Column<any>> = [
  {
    Header: "Belt",
    accessor: "belt",
  },
  {
    Header: "CRIT A: Striking",
    accessor: "crita",
  },
  {
    Header: "CRIT B: Defense",
    accessor: "critb",
  },
  {
    Header: "CRIT C: Grappling",
    accessor: "critc",
  },
  {
    Header: "CRIT D: Footwork",
    accessor: "critd",
  },
  {
    Header: "CRIT E: Pattern",
    accessor: "crite",
  },
];
