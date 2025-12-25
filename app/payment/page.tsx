"use client";
import { useState } from "react";

export default function InvoicePayment() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceTotal, setInvoiceTotal] = useState<number | null>(null);
  const [txId, setTxId] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

  const states = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
    "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
    "VA","WA","WV","WI","WY"
  ];

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ---------------- Invoice Lookup ---------------- */
  const lookupInvoice = async () => {
    if (!invoiceNumber.trim()) {
      setMessage("Please enter an invoice number.");
      return;
    }

    setLoading(true);
    setMessage("");
    setInvoiceTotal(null);

    try {
      const res = await fetch("/api/invoices/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceNumber }),
      });

      const data = await res.json();

      if (data.valid) {
        setInvoiceTotal(data.amount);
      } else {
        setMessage(data.message || "Invoice not found.");
      }
    } catch {
      setMessage("Invoice lookup failed.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Payment Submission ---------------- */
  const submitPayment = async () => {
    setSubmitted(true);

    if (
      !form.firstName ||
      !form.lastName ||
      !validateEmail(form.email) ||
      !form.phone ||
      !form.city ||
      !form.state ||
      !form.zip ||
      !txId ||
      invoiceTotal === null
    ) {
      setMessage("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    const paymentData = {
      invoiceNumber,
      amount: invoiceTotal,
      billing: form,
      bankReference: txId,
    };

    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setSubmitted(false);

        // reset
        setForm({
          firstName: "",
          middleInitial: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          zip: "",
        });
        setTxId("");
        setInvoiceNumber("");
        setInvoiceTotal(null);

        setTimeout(() => setSuccess(false), 4000);
      } else {
        // ⭐ NEW: handle express-validator errors
        if (data.errors && Array.isArray(data.errors)) {
          setMessage(data.errors[0].msg);
        } else {
          setMessage(data.message || "Payment submission failed.");
        }
      }
    } catch {
      setMessage("Payment submission failed.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- INPUT STYLES ---------------- */
  const baseInput =
    "w-full h-12 px-4 rounded-xl border transition focus:outline-none text-gray-900 bg-white";

  const inputClass = (valid: boolean, invalid: boolean) => {
    if (!submitted) return `${baseInput} border-gray-300 focus:ring-2 focus:ring-slate-600`;
    if (invalid) return `${baseInput} border-red-500 focus:ring-red-400`;
    if (valid) return `${baseInput} border-green-500 focus:ring-green-400`;
    return baseInput;
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 pt-28 px-4">
      <div className="w-full max-w-md">

        {/* Invoice Box */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mt-6 border">
          <h1 className="text-3xl font-bold text-center mb-6">
            Pay Your Invoice
          </h1>

          <input
            className={baseInput}
            placeholder="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />

          <button
            onClick={lookupInvoice}
            disabled={loading} // ⭐ NEW
            className={`w-full mt-4 py-3 rounded-xl font-semibold transition ${
              loading
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-900 text-white"
            }`}
          >
            {loading ? "Checking..." : "Check Total"}
          </button>

          {message && (
            <p className="text-center text-red-600 mt-4 text-sm font-medium">
              {message}
            </p>
          )}
        </div>

        {/* Payment Box */}
        {invoiceTotal !== null && (
          <div className="bg-white rounded-3xl shadow-xl p-6 mt-16 space-y-5 border">
            <p className="text-lg font-semibold">
              Total Amount: ${invoiceTotal}
            </p>

            <input
              className={inputClass(!!txId, !txId)}
              placeholder="Bank Transfer Reference ID *"
              value={txId}
              onChange={(e) => setTxId(e.target.value)}
            />

            <button
              onClick={submitPayment}
              disabled={loading} // ⭐ NEW
              className={`w-full py-3 rounded-xl font-semibold transition ${
                loading
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-slate-800 hover:bg-slate-900 text-white"
              }`}
            >
              {loading ? "Submitting..." : "Submit Payment"}
            </button>
          </div>
        )}
      </div>

      {success && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
          Payment submitted successfully
        </div>
      )}
    </div>
  );
}
