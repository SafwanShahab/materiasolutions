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
        setMessage("");
      } else {
        setInvoiceTotal(null);
        setMessage(data.message || "Invoice not found.");
      }
    } catch (error) {
      console.error(error);
      setInvoiceTotal(null);
      setMessage("Invoice lookup failed.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Payment Submission ---------------- */
  const submitPayment = async () => {
    setSubmitted(true);

    // Frontend validation
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

    setMessage("");
    setLoading(true);

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
        setMessage("");
        setSubmitted(false);
        // Optionally reset form
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
        setMessage(data.message || "Payment submission failed.");
      }
    } catch (error) {
      console.error(error);
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

        {/* ================= Invoice Box ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mt-6 border border-slate-200">
          <h1 className="text-3xl font-bold text-center mb-6 text-slate-900">
            Pay Your Invoice
          </h1>

          <input
            className={baseInput + " border-gray-300"}
            placeholder="Invoice Number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />

          <button
            onClick={lookupInvoice}
            className="w-full mt-4 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900 transition"
          >
            {loading ? "Checking..." : "Check Total"}
          </button>

          {message && (
            <p className="text-center text-red-600 mt-4 text-sm font-medium">{message}</p>
          )}
        </div>

        {/* ================= Payment Box ================= */}
        {invoiceTotal !== null && (
          <div className="bg-white rounded-3xl shadow-xl p-6 mt-16 space-y-5 border border-slate-200">

            <p className="text-lg font-semibold text-slate-900">
              Total Amount: ${invoiceTotal}
            </p>

            {/* Bank Info */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 space-y-1">
              <p><strong>Account Name:</strong> Materia Solutions</p>
              <p><strong>Routing Number:</strong> 987654321</p>
              <p><strong>Account Number:</strong> 123456789</p>
              <p className="text-xs text-slate-500 mt-2">
                ACH transfers typically take 1–3 business days.
              </p>
            </div>

            {/* Billing Form */}
            <div className="grid grid-cols-3 gap-2">
              <input
                className={inputClass(!!form.firstName, !form.firstName)}
                placeholder="First Name *"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <input
                className={`${baseInput} border-gray-300`}
                placeholder="M.I."
                maxLength={1}
                value={form.middleInitial}
                onChange={(e) => setForm({ ...form, middleInitial: e.target.value })}
              />
              <input
                className={inputClass(!!form.lastName, !form.lastName)}
                placeholder="Last Name *"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

            <input
              className={`${baseInput} border-gray-300`}
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <input
              className={inputClass(validateEmail(form.email), !validateEmail(form.email))}
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              className={inputClass(!!form.phone, !form.phone)}
              placeholder="Phone *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              className={inputClass(!!form.city, !form.city)}
              placeholder="City *"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />

            <div className="grid grid-cols-2 gap-2">
              <select
                className={inputClass(!!form.state, !form.state)}
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              >
                <option value="">State *</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <input
                className={inputClass(!!form.zip, !form.zip)}
                placeholder="ZIP *"
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
              />
            </div>

            <input
              className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-100 text-slate-600 cursor-not-allowed"
              value="Receipt Type: Email"
              disabled
            />

            <input
              className={inputClass(!!txId, !txId)}
              placeholder="Bank Transfer Reference ID *"
              value={txId}
              onChange={(e) => setTxId(e.target.value)}
            />

            <button
              onClick={submitPayment}
              className="w-full py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900 transition"
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
