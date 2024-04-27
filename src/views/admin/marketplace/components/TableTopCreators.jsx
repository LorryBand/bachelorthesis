import Card from "components/card";
import Progress from "components/progress";
import React, { useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

function TopCreatorTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <Card extra={"h-[275px] w-full"}>
      {/* Top Creator Header */}
      <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pt-4 pb-[20px] shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
        <h4 className="text-lg font-bold text-navy-700 dark:text-white">SEHM v1</h4>
      </div>

      {/* Top Creator Heading */}
      <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
        <Accordion className="w-full" allowMultiple>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span
                  className="text-left font-bold text-navy-900 dark:text-white"
                  flex="1"
                  textAlign="left"
                >
                  Description
                </span>
                <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
              pb={4}
            >
              ZOE™ is a simple and understated stackable shell chair with lots
              of personality and character that is as beautiful when seen from
              below as from above. The frame is discretely tucked into the
              chair's molded shell, and the shell's tapering thickness gives it
              a friendly expression.
            </AccordionPanel>
          </AccordionItem>{" "}
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span
                  className="text-left font-bold text-navy-900 dark:text-white"
                  flex="1"
                  textAlign="left"
                >
                  Characteristics
                </span>
                <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
              pb={4}
            >
              ZOE™ is a simple and understated stackable shell chair with lots
              of personality and character that is as beautiful when seen from
              below as from above. The frame is discretely tucked into the
              chair's molded shell, and the shell's tapering thickness gives it
              a friendly expression.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span
                  className="text-left font-bold text-navy-900 dark:text-white"
                  flex="1"
                  textAlign="left"
                >
                  Reviews
                </span>
                <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-medium mt-2 text-left !text-navy-900 dark:!text-white"
              pb={4}
            >
              ZOE™ is a simple and understated stackable shell chair with lots
              of personality and character that is as beautiful when seen from
              below as from above. The frame is discretely tucked into the
              chair's molded shell, and the shell's tapering thickness gives it
              a friendly expression.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
}

export default TopCreatorTable;
