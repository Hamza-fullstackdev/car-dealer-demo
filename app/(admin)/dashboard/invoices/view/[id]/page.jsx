"use client";
import React, { useRef } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";
import { IoIosPrint } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ViewInvoice() {
  const invoiceRef = useRef(null);
  const handleDownloadPDF = async () => {
    if (!invoiceRef.current) {
      console.error("Invoice reference is missing!");
      return;
    }

    const element = invoiceRef.current;
    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/webp");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "WEBP", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
  };
  return (
    <div ref={invoiceRef} className='bg-gray-50 py-5 dark:bg-gray-800'>
      <div className='mx-auto w-full rounded-lg bg-white p-10 shadow dark:bg-gray-700'>
        <div className='my-5'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='font-semibold text-lg'>
                Invoice Number: <span className='font-normal'>#SM75692</span>
              </h1>
              <h2 className='font-semibold'>
                Date: <span className='font-normal'>05-03-2022</span>
              </h2>
            </div>
            <div>
              <Image
                src={"/logo.png"}
                alt='company-logo'
                width={150}
                height={120}
              />
            </div>
          </div>
          <div className='my-5 border-b border-gray-300'></div>
          <div className='flex items-start justify-between'>
            <div>
              <h3 className='font-semibold'>Invoice To:</h3>
              <div className='flex flex-col mt-1'>
                <p className='text-sm text-gray-500'>Jennifer Richards</p>
                <p className='text-sm text-gray-500'>
                  365 Bloor Street East, Toronto,
                </p>
                <p className='text-sm text-gray-500'>Ontario, M4W 3L4,</p>
                <p className='text-sm text-gray-500'>Canada</p>
              </div>
            </div>
            <div className='text-end'>
              <h3 className='font-semibold'>Pay To:</h3>
              <div className='flex flex-col mt-1'>
                <p className='text-sm text-gray-500'>Biman Airlines</p>
                <p className='text-sm text-gray-500'>
                  237 Roanoke Road, North York,
                </p>
                <p className='text-sm text-gray-500'>Ontario, Canada</p>
                <p className='text-sm text-gray-500'>demo@email.com</p>
              </div>
            </div>
          </div>
          <div className='my-5'>
            <Table striped>
              <TableHead>
                <TableHeadCell>Item</TableHeadCell>
                <TableHeadCell>Description</TableHeadCell>
                <TableHeadCell>Qty</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>Total</TableHeadCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>App Development</TableCell>
                  <TableCell>Mobile & iOS Application Development</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$460</TableCell>
                  <TableCell>$920</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>UI/UX Design</TableCell>
                  <TableCell>
                    Mobile & iOS Mobile App Design, Product Design
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>$220</TableCell>
                  <TableCell>$220</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Web Design</TableCell>
                  <TableCell>Web Design & Development</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$120</TableCell>
                  <TableCell>$240</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Web Design</TableCell>
                  <TableCell>Web Design & Development</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$120</TableCell>
                  <TableCell>$240</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} rowSpan={3} className='font-semibold'>
                    <h3 className='text-gray-700'>Additional Information:</h3>
                    <p className='text-sm font-normal'>
                      At check-in, you may need to present the credit card used
                      for payment of this ticket.
                    </p>
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className='text-right font-semibold bg-gray-50'
                  >
                    Subtotal
                  </TableCell>
                  <TableCell className='font-semibold bg-gray-50'>
                    $1140
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='my-5'>
            <div>
              <h3 className='text-gray-700 font-semibold text-sm'>Note:</h3>
              <p className='text-xs text-gray-700'>
                Here we can write a additional notes for the client to get a
                better understanding of this invoice.
              </p>
            </div>
          </div>
          <div className='my-5 flex items-center justify-center'>
            <div className='flex items-center gap-3'>
              <Button
                color='green'
                onClick={() => window.print()}
                className='mt-4 flex items-center'
              >
                <IoIosPrint fontSize={22} className='mr-2' /> Print Invoice
              </Button>
              <Button
                gradientDuoTone='greenToBlue'
                onClick={handleDownloadPDF}
                className='mt-4 flex items-center'
              >
                <FaDownload fontSize={22} className='mr-2' /> Download Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
