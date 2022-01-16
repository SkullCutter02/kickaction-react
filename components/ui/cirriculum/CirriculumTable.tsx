import React, { useMemo } from "react";
import { useTable } from "react-table";

import { tableData, tableColumns } from "../../../data/cirriculum";

const CirriculumTable: React.FC = () => {
  const data = useMemo(() => tableData, []);
  const columns = useMemo(() => tableColumns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <>
      <section className="cirriculum">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <style jsx>{`
        section {
          overflow-x: auto;
        }

        table {
          border-spacing: 0;
          border: 1px solid #fff;
        }

        th,
        td {
          margin: 0;
          padding: 0.5rem;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
        }

        th:last-child,
        td:last-child {
          border-right: 0;
        }

        tr:last-child td {
          border-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default CirriculumTable;
