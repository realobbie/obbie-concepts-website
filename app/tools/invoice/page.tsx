// app/tools/invoice/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { 
  IconPlus, 
  IconTrash, 
  IconPrinter, 
  IconDownload, 
  IconFileText, 
  IconShieldCheck,
  IconLoader2,
  IconClearAll
} from '@tabler/icons-react';

interface LineItem {
  id: string;
  description: string;
  qty: number;
  rate: number;
}

type DocumentType = 'INVOICE' | 'QUOTATION';

export default function DocumentGeneratorPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Helper to generate a random 4-digit number (e.g., 3950)
  const getRandomFourDigits = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // Helper to generate initial document number: e.g., INV-202610-3950
  const getInitialDocNumber = (type: DocumentType) => {
    const prefix = type === 'INVOICE' ? 'INV' : 'QT';
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${prefix}-${year}${month}-${getRandomFourDigits()}`;
  };

  // Document Type, Currency & Number State
  const [docType, setDocType] = useState<DocumentType>('INVOICE');
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [docNumber, setDocNumber] = useState(getInitialDocNumber('INVOICE'));
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');

  // Client State
  const [clientName, setClientName] = useState('Apex Logistics Ltd');
  const [clientEmail, setClientEmail] = useState('billing@apexlogistics.co.ke');
  const [clientPhone, setClientPhone] = useState('+254 712 345 678');
  const [clientAddress, setClientAddress] = useState('CBD, Nairobi, Kenya');
  const [clientPin, setClientPin] = useState('P051234567X');

  // Financials State
  const [discount, setDiscount] = useState<number>(0);
  const [vatRate, setVatRate] = useState<number>(16);
  const [notes, setNotes] = useState(
    'Thank you for working with Obbie Concepts! Payment is due within 14 days.'
  );

  // Switch between Invoice & Quotation
  const handleDocTypeChange = (newType: DocumentType) => {
    setDocType(newType);
    const prefix = newType === 'INVOICE' ? 'INV' : 'QT';
    
    setDocNumber((prev) => {
      const parts = prev.split('-');
      if (parts.length >= 2) {
        return `${prefix}-${parts[1]}-${getRandomFourDigits()}`;
      }
      return getInitialDocNumber(newType);
    });

    if (newType === 'QUOTATION') {
      setNotes('This quotation is valid for 30 days from the date of issue. Prices are subject to project scope confirmation.');
    } else {
      setNotes('Thank you for working with Obbie Concepts! Payment is due within 14 days.');
    }
  };

  // Items State (Can be fully cleared)
  const [items, setItems] = useState<LineItem[]>([
    { id: '1', description: 'Large Format Vinyl Banner Printing (510gsm)', qty: 2, rate: 12000 },
    { id: '2', description: 'Custom Brand Identity & UI/UX Design System', qty: 1, rate: 45000 },
  ]);

  const servicePresets = [
    { label: '+ Large Format Print', desc: 'Large Format Vinyl Banner Printing (510gsm)', rate: 12000 },
    { label: '+ Branding & UI/UX', desc: 'Custom Brand Identity & UI/UX Design System', rate: 45000 },
    { label: '+ Full-Stack Web App', desc: 'Custom Next.js Web Application Development', rate: 85000 },
    { label: '+ Digital Ad Campaign', desc: 'Monthly Paid Marketing & Meta/Google Ad Management', rate: 30000 },
  ];

  const handleAddItem = (desc = '', rate = 0) => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: desc || 'New Service Item', qty: 1, rate }
    ]);
  };

  const handleRemoveItem = (id: string) => {
    // Allows removing items down to 0 items if desired
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClearAllItems = () => {
    setItems([]);
  };

  const handleItemChange = (id: string, field: keyof LineItem, value: string | number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  const discountAmount = subtotal * (discount / 100);
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const vatAmount = taxableAmount * (vatRate / 100);
  const grandTotal = taxableAmount + vatAmount;

  const handleDownloadPdf = async () => {
    const element = document.getElementById('printable-invoice');
    if (!element) return;

    try {
      setIsDownloading(true);

      const clone = element.cloneNode(true) as HTMLElement;

      // 1. Fix Logo: Point directly to the static asset path with absolute domain for Puppeteer
      const specificLogoUrl = 'https://ehavbycolmcoliwghfjm.supabase.co/storage/v1/object/public/ocw-bucket/favvy.png';
      const images = clone.querySelectorAll('img');
      images.forEach((img) => {
        img.setAttribute('src', specificLogoUrl);
        img.setAttribute('width', '32');
        img.setAttribute('height', '32');
      });

      // 2. Add faint underlines to the billed-to secondary details (address/KRA PIN area)
      // We look for elements on the right side of the billed-to section and add bottom borders
      const billedToRightSide = clone.querySelectorAll('.text-right, [class*="text-right"]');
      billedToRightSide.forEach((el) => {
        const paragraphs = el.querySelectorAll('p, span');
        paragraphs.forEach((p) => {
          if (p.textContent?.includes('Kenya') || p.textContent?.includes('P0')) {
            p.classList.add('border-b', 'border-slate-200', 'pb-1', 'mb-1');
          }
        });
      });

      // 3. Fix Terms & Notes spacing so text isn't cramped at the top
      const notesSection = clone.querySelector('.bg-slate-50, [class*="bg-slate"], [class*="rounded"]');
      if (notesSection) {
        // Find the notes container and ensure it has proper padding
        const textContainer = notesSection.querySelector('p, div');
        if (textContainer) {
          textContainer.classList.add('pt-2', 'block');
        }
      }

      const invoiceHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body class="bg-white text-slate-900 p-4">
            ${clone.outerHTML}
          </body>
        </html>
      `;

      const res = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          html: invoiceHtml,
          filename: `${docNumber || 'Document'}_Obbie_Concepts`
        }),
      });

      if (!res.ok) throw new Error('PDF Generation failed');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${docNumber || 'Document'}_Obbie_Concepts.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error('PDF Generation Error:', err);
      alert('Failed to download PDF. Please try printing instead.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSaveAndDownload = async () => {
    try {
      try {
        await fetch('/api/save-document', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            doc_number: docNumber,
            doc_type: docType,
            client_name: clientName || 'Client',
            grand_total: grandTotal,
            currency: currency || 'KES',
            issue_date: issueDate || new Date().toISOString().split('T')[0],
            status: 'ISSUED',
          }),
        });
      } catch (e) {
        console.warn('Backend save skipped:', e);
      }

      await handleDownloadPdf();

      // Generate next random document number
      const prefix = docType === 'INVOICE' ? 'INV' : 'QT';
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      setDocNumber(`${prefix}-${year}${month}-${getRandomFourDigits()}`);

    } catch (error) {
      console.error('Error during save and download:', error);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(val);
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://obbieconcepts.com';
  const verificationUrl = `${baseUrl}/tools/verify-document?no=${encodeURIComponent(docNumber)}&type=${docType.toLowerCase()}&amount=${grandTotal}&currency=${currency}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20 print:p-0 print:bg-white print:min-h-0">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 print:p-0 print:max-w-none">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-white dark:bg-[#131B2A] p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading flex items-center gap-2">
              <IconFileText className="text-brand-orange" size={24} /> 
              {docType === 'INVOICE' ? 'Invoice Generator' : 'Quotation Generator'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Document Type Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => handleDocTypeChange('INVOICE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  docType === 'INVOICE'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Invoice
              </button>
              <button
                type="button"
                onClick={() => handleDocTypeChange('QUOTATION')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  docType === 'QUOTATION'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Quotation
              </button>
            </div>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'KES' | 'USD')}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold cursor-pointer"
            >
              <option value="KES">KES (KSh)</option>
              <option value="USD">USD ($)</option>
            </select>

            {/* Download PDF Button */}
            <button
              type="button"
              disabled={isDownloading}
              onClick={handleSaveAndDownload}
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 text-xs cursor-pointer disabled:opacity-50"
            >
              {isDownloading ? (
                <>
                  <IconLoader2 size={16} className="animate-spin" /> Generating PDF...
                </>
              ) : (
                <>
                  <IconDownload size={16} /> Save & Download PDF
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              <IconPrinter size={16} /> Print
            </button>
          </div>
        </div>

        {/* Quick Presets Bar (Hidden when printing) */}
        <div className="print:hidden mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 shrink-0">Quick Add:</span>
          {servicePresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleAddItem(preset.desc, preset.rate)}
              className="text-[11px] font-bold bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 hover:border-brand-orange text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* THE DOCUMENT CARD (INVOICE / QUOTATION) */}
        <div 
          id="printable-invoice" 
          className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl print:shadow-none print:border-none print:p-0 print:m-0"
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Image 
                  src="/assets/favvy.png" 
                  alt="Obbie Concepts" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain bg-slate-900 rounded-full p-1"
                />
                <span className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
                  OBBIE <span className="text-brand-orange">CONCEPTS</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 max-w-xs">
                Design • Branding • Printing • Digital Marketing • Web Development
              </p>
              <p className="text-[11px] text-slate-600 mt-2 font-medium">
                Zion Mall Building, Off Malaba Rd, Eldoret, Kenya<br />
                Phone / WhatsApp: +254 735 602 433<br />
                Email: hello@obbieconcepts.com
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-3xl font-extrabold font-heading text-slate-900 mb-2">
                {docType}
              </h2>
              <div className="space-y-1 text-xs">
                <div className="flex justify-end items-center gap-2">
                  <span className="font-bold text-slate-500">
                    {docType === 'INVOICE' ? 'Invoice No:' : 'Quotation No:'}
                  </span>
                  <input
                    type="text"
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value)}
                    className="font-mono font-bold text-slate-900 text-right bg-transparent outline-none w-36 border-b border-slate-200 focus:border-brand-orange print:border-none"
                  />
                </div>
                <div className="flex justify-end items-center gap-2">
                  <span className="font-bold text-slate-500">Date:</span>
                  <input
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    className="font-medium text-slate-900 text-right bg-transparent outline-none border-b border-slate-200 focus:border-brand-orange print:border-none"
                  />
                </div>
                <div className="flex justify-end items-center gap-2">
                  <span className="font-bold text-slate-500">
                    {docType === 'INVOICE' ? 'Due Date:' : 'Valid Until:'}
                  </span>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="font-medium text-slate-900 text-right bg-transparent outline-none border-b border-slate-200 focus:border-brand-orange print:border-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Client Info */}
          <div className="bg-slate-50 p-5 rounded-2xl mb-6 border border-slate-100">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-brand-orange mb-2">
              {docType === 'INVOICE' ? 'Billed To:' : 'Quotation For:'}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="font-bold text-slate-900 w-full bg-transparent border-b border-slate-200 focus:border-brand-orange outline-none print:border-none"
                  placeholder="Client Name / Company"
                />
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="text-slate-600 w-full bg-transparent border-b border-slate-200 focus:border-brand-orange outline-none print:border-none"
                  placeholder="Client Email"
                />
                <input
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="text-slate-600 w-full bg-transparent border-b border-slate-200 focus:border-brand-orange outline-none print:border-none"
                  placeholder="Client Phone Number"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="text-slate-600 w-full bg-transparent border-b border-slate-200 focus:border-brand-orange outline-none print:border-none"
                  placeholder="Client Address / Location"
                />
                <input
                  type="text"
                  value={clientPin}
                  onChange={(e) => setClientPin(e.target.value)}
                  className="text-slate-600 w-full bg-transparent border-b border-slate-200 focus:border-brand-orange outline-none print:border-none"
                  placeholder="KRA PIN (Optional)"
                />
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Line Items</span>
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAllItems}
                  className="print:hidden text-[11px] font-bold text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <IconClearAll size={14} /> Clear All Items
                </button>
              )}
            </div>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                  <th className="py-2 px-1 w-1/2">Service / Item Description</th>
                  <th className="py-2 px-1 text-center w-16">Qty</th>
                  <th className="py-2 px-1 text-right w-28">Rate ({currency})</th>
                  <th className="py-2 px-1 text-right w-32">Total ({currency})</th>
                  <th className="py-2 px-1 text-center w-10 print:hidden"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-slate-400 italic">
                      No items added yet. Click &quot;Add Line Item&quot; below or pick a preset above.
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-1">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          className="w-full font-medium text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-brand-orange outline-none print:border-none"
                        />
                      </td>
                      <td className="py-2 px-1 text-center">
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleItemChange(item.id, 'qty', parseInt(e.target.value) || 1)}
                          className="w-12 text-center font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-brand-orange outline-none print:border-none"
                        />
                      </td>
                      <td className="py-2 px-1 text-right">
                        <input
                          type="number"
                          min="0"
                          value={item.rate}
                          onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
                          className="w-24 text-right font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-brand-orange outline-none print:border-none"
                        />
                      </td>
                      <td className="py-2 px-1 text-right font-bold text-slate-900">
                        {formatCurrency(item.qty * item.rate)}
                      </td>
                      <td className="py-2 px-1 text-center print:hidden">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                        >
                          <IconTrash size={15} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <button
              type="button"
              onClick={() => handleAddItem()}
              className="mt-3 print:hidden inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:underline cursor-pointer"
            >
              <IconPlus size={15} /> Add Line Item
            </button>
          </div>

          {/* Totals & Payment Details */}
          <div className="flex justify-between items-start gap-6 pt-4 border-t border-slate-200">
            <div className="w-1/2 space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] space-y-1">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                  Payment Details (M-PESA / Bank)
                </h4>
                <p className="text-slate-600"><strong>Paybill:</strong> 542542 (I & M Bank)</p>
                <p className="text-slate-600"><strong>Account No:</strong> 464232</p>
                <p className="text-slate-600"><strong>Account Name:</strong> Obbie Concepts</p>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                  {docType === 'INVOICE' ? 'Invoice Terms & Notes' : 'Quotation Terms & Conditions'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 text-xs text-slate-700 bg-transparent focus:border-brand-orange outline-none print:border-none print:p-0"
                />
              </div>
            </div>

            <div className="w-5/12 space-y-3 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-500">Subtotal:</span>
                  <span className="font-bold text-slate-900">{formatCurrency(subtotal)}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-500 flex items-center gap-1">
                    Discount (%):
                    <input
                      type="number"
                      value={discount}
                      onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                      className="w-10 text-center font-bold border border-slate-200 rounded py-0.5 print:border-none"
                    />
                  </span>
                  <span className="font-bold text-slate-900">-{formatCurrency(discountAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-500 flex items-center gap-1">
                    VAT (%):
                    <input
                      type="number"
                      value={vatRate}
                      onChange={(e) => setVatRate(parseFloat(e.target.value) || 0)}
                      className="w-10 text-center font-bold border border-slate-200 rounded py-0.5 print:border-none"
                    />
                  </span>
                  <span className="font-bold text-slate-900">+{formatCurrency(vatAmount)}</span>
                </div>

                <div className="flex justify-between py-2 border-t-2 border-slate-900 text-sm">
                  <span className="font-extrabold text-slate-900">
                    {docType === 'INVOICE' ? 'Grand Total:' : 'Estimated Total:'}
                  </span>
                  <span className="font-extrabold text-brand-orange">{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              {/* QR Validation Badge */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-lg border border-slate-200 shrink-0">
                  <QRCodeSVG value={verificationUrl} size={68} level="M" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-[11px] flex items-center gap-1">
                    <IconShieldCheck size={14} className="text-emerald-600" /> Genuine Document
                  </span>
                  <p className="text-[10px] text-slate-500 leading-tight mt-1">
                    Scan with camera to verify authenticity on obbieconcepts.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 text-center text-[10px] text-slate-400">
            <p>Obbie Concepts • Zion Mall Building, Eldoret • www.obbieconcepts.com</p>
          </div>
        </div>

      </div>
    </main>
  );
}